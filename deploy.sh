#!/bin/bash
# BloomiKids deploy script
cd ~/Desktop/Bloomikids

echo "Step 1: Copying files..."
cp ~/Downloads/app.html ./app.html
cp ~/Downloads/sw.js ./sw.js

echo "Step 2: Verifying files..."
python3 -c "
s=open('app.html').read()
sw=open('sw.js').read()
import re
b=re.search(r'build v[0-9]+',s)
v=re.search(r'sw.js.v=[0-9]+',s)
sv=re.search(r'bk-v[0-9]+',sw)
print('Build:',b.group() if b else 'MISSING')
print('SW html:',v.group() if v else 'MISSING')  
print('SW file:',sv.group() if sv else 'MISSING')
print('Music fixed:',('_musicNodes.forEach' in s) and ('_stopAllNodes()' not in s[s.find('function _playMp3Track'):s.find('function nextTrack')]))
print('Supabase fixed:','silently ignore' in s)
print('Lines:',s.count(chr(10))+1)
"

echo "Step 3: Git status..."
git status

echo "Step 4: Adding and committing..."
git add -f app.html sw.js
git status

# Create commit with timestamp to ensure it's unique
TIMESTAMP=$(date +%s)
git commit -m "deploy $TIMESTAMP"

echo "Step 5: Pushing..."
git push origin main

echo "Done! Check Netlify dashboard for deploy status."
