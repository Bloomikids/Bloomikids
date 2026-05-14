// BloomiKids — data.js  (auto-generated, do not edit by hand)
// Contains all question banks, art scenes, book library, and static content.

const GRADE_DATA = {

  PreK: {
    label: 'Pre-Kindergarten', gradeNum: -1,
    ui: {
      subtitle:    "Time to play and learn! 🎉",
      streakTitle: 'YAY! You\'re Here!', streakSub: 'You showed up! That\'s amazing! 🌟',
      tabLearn:'Play!', tabMove:'Dance!', tabRead:'Stories!', tabArt:'Create!',
      subjectsTitle:'🎨 Fun Things Today!',
      quizTitle:'🌟 Fun Questions!',
      posesTitle:'🌟 Let\'s Move!', breathSub:'Watch the big circle! Breathe in big, breathe out slow!',
      bookshelfTitle:'📚 Story Time!', timerTopLabel:'Hold and breathe!'
    },
    subjects:[
      { icon:'🔢', title:'Numbers Fun', desc:'Count 1 to 10 with friends!', badge:'Count with me!', color:'mint' },
      { icon:'🔤', title:'ABC Time', desc:'Learn letters A B C D E!', badge:'ABCs!', color:'coral' },
      { icon:'🎨', title:'Colors & Art', desc:'Paint, draw, and make things!', badge:'Create!', color:'lavender' },
      { icon:'🐾', title:'Animals & Nature', desc:'Bugs, birds, dogs, and trees!', badge:'Explore!', color:'sun' },
          { icon:'✏', title:'Letter Tracing', desc:'Trace every letter with your finger!', badge:'Trace!', color:'lavender' },
    ],
    questions:[
      // Numbers (30)
      {q:'How many apples?',pic:'🍎🍎🍎',opts:['1','2','4','3'],answer:3,subject:'Numbers'},
      {q:'How many stars?',pic:'⭐⭐',opts:['2','1','3','4'],answer:0,subject:'Numbers'},
      {q:'How many dogs?',pic:'🐶🐶🐶🐶',opts:['3','5','6','4'],answer:3,subject:'Numbers'},
      {q:'Count the cats!',pic:'🐱🐱🐱🐱🐱',opts:['4','6','7','5'],answer:3,subject:'Numbers'},
      {q:'How many fish?',pic:'🐟🐟',opts:['2','1','3','4'],answer:0,subject:'Numbers'},
      {q:'How many flowers?',pic:'🌸🌸🌸',opts:['3','2','4','5'],answer:0,subject:'Numbers'},
      {q:'Count the balls!',pic:'⚽⚽⚽⚽⚽⚽',opts:['5','7','8','6'],answer:3,subject:'Numbers'},
      {q:'1 apple + 1 apple = ?',pic:'🍎➕🍎',opts:['2','1','3','4'],answer:0,subject:'Numbers'},
      {q:'2 + 1 = ?',pic:'🐶🐶➕🐶',opts:['2','4','5','3'],answer:3,subject:'Numbers'},
      {q:'Which number is bigger?',pic:'3️⃣  or  5️⃣',opts:['5','3','They are the same','Cannot tell'],answer:0,subject:'Numbers'},
      {q:'What number comes after 4?',pic:'4️⃣ ➡️ ?',opts:['3','6','4','5'],answer:3,subject:'Numbers'},
      {q:'How many sides does a triangle have?',pic:'🔺',opts:['2','4','5','3'],answer:3,subject:'Numbers'},
      {q:'How many fingers on one hand?',pic:'✋',opts:['5','4','6','7'],answer:0,subject:'Numbers'},
      {q:'2 + 2 = ?',pic:'🍎🍎➕🍎🍎',opts:['4','3','5','6'],answer:0,subject:'Numbers'},
      {q:'What comes before 3?',pic:'?️⃣ 3️⃣',opts:['1','4','5','2'],answer:3,subject:'Numbers'},
      {q:'How many eyes do you have?',pic:'👁️👁️',opts:['1','3','4','2'],answer:3,subject:'Numbers'},
      {q:'3 - 1 = ?',pic:'🐱🐱🐱',opts:['2','1','3','4'],answer:0,subject:'Numbers'},
      {q:'How many wheels does a car have?',pic:'🚗',opts:['4','2','3','6'],answer:0,subject:'Numbers'},
      {q:'Count by 2s: 2 4 __',pic:'2️⃣ 4️⃣ ❓',opts:['5','7','8','6'],answer:3,subject:'Numbers'},
      {q:'How many legs does a dog have?',pic:'🐶',opts:['2','3','6','4'],answer:3,subject:'Numbers'},
      {q:'5 + 0 = ?',pic:'🌟🌟🌟🌟🌟',opts:['4','6','7','5'],answer:3,subject:'Numbers'},
      {q:'What number is this?',pic:'7️⃣',opts:['7','6','8','9'],answer:0,subject:'Numbers'},
      {q:'How many toes do you have?',pic:'🦶🦶',opts:['10','8','9','12'],answer:0,subject:'Numbers'},
      {q:'1 + 1 + 1 = ?',pic:'🐣➕🐣➕🐣',opts:['3','2','4','5'],answer:0,subject:'Numbers'},
      {q:'Which group has more?',pic:'🍎🍎🍎  or  🍌🍌',opts:['Apples','Bananas','Same amount','Cannot tell'],answer:0,subject:'Numbers'},
      {q:'How many sides does a square have?',pic:'⬛',opts:['3','5','6','4'],answer:3,subject:'Numbers'},
      {q:'4 - 2 = ?',pic:'🌸🌸🌸🌸',opts:['2','1','3','4'],answer:0,subject:'Numbers'},
      {q:'What number comes between 6 and 8?',pic:'6️⃣ ❓ 8️⃣',opts:['5','9','10','7'],answer:3,subject:'Numbers'},
      {q:'How many legs does a bird have?',pic:'🐦',opts:['2','3','4','6'],answer:0,subject:'Numbers'},
      {q:'3 + 2 = ?',pic:'🐟🐟🐟➕🐟🐟',opts:['4','6','7','5'],answer:3,subject:'Numbers'},
      // Language Arts (30)
      {q:'What letter is this?',pic:'🅰️',opts:['A','B','C','D'],answer:0,subject:'Language Arts'},
      {q:'What starts with "B"?',pic:'🐻',opts:['Apple','Cat','Dog','Bear'],answer:3,subject:'Language Arts'},
      {q:'What starts with "C"?',pic:'🐱',opts:['Cat','Dog','Bird','Fish'],answer:0,subject:'Language Arts'},
      {q:'What sound does S make?',pic:'🐍',opts:['Buh','Muh','Puh','Sss'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with CAT?',pic:'🐱',opts:['bat','dog','fish','bird'],answer:0,subject:'Language Arts'},
      {q:'What letter starts APPLE?',pic:'🍎',opts:['B','C','D','A'],answer:3,subject:'Language Arts'},
      {q:'What letter starts SUN?',pic:'☀️',opts:['T','R','P','S'],answer:3,subject:'Language Arts'},
      {q:'How many letters in CAT?',pic:'🐱',opts:['3','2','4','5'],answer:0,subject:'Language Arts'},
      {q:'Which is a real word?',pic:'📖',opts:['dog','zorp','flim','blag'],answer:0,subject:'Language Arts'},
      {q:'What letter starts DOG?',pic:'🐶',opts:['B','F','G','D'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with SUN?',pic:'☀️',opts:['run','moon','star','sky'],answer:0,subject:'Language Arts'},
      {q:'What letter starts FISH?',pic:'🐟',opts:['F','G','H','J'],answer:0,subject:'Language Arts'},
      {q:'How many letters in DOG?',pic:'🐶',opts:['2','4','5','3'],answer:3,subject:'Language Arts'},
      {q:'Which word is an animal?',pic:'🐾',opts:['run','happy','blue','dog'],answer:3,subject:'Language Arts'},
      {q:'What letter starts MOON?',pic:'🌙',opts:['N','L','K','M'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with BEE?',pic:'🐝',opts:['tree','ant','bird','frog'],answer:0,subject:'Language Arts'},
      {q:'What letter starts RAIN?',pic:'🌧️',opts:['R','S','T','P'],answer:0,subject:'Language Arts'},
      {q:'How many letters in SUN?',pic:'☀️',opts:['2','4','5','3'],answer:3,subject:'Language Arts'},
      {q:'Which word is a color?',pic:'🎨',opts:['blue','run','jump','tall'],answer:0,subject:'Language Arts'},
      {q:'What letter starts EGG?',pic:'🥚',opts:['A','I','O','E'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with HAT?',pic:'🎩',opts:['dog','fish','bird','mat'],answer:3,subject:'Language Arts'},
      {q:'What letter starts KITE?',pic:'🪁',opts:['K','J','L','M'],answer:0,subject:'Language Arts'},
      {q:'Which word is a fruit?',pic:'🍎',opts:['apple','run','blue','tall'],answer:0,subject:'Language Arts'},
      {q:'What letter starts LION?',pic:'🦁',opts:['L','K','M','N'],answer:0,subject:'Language Arts'},
      {q:'How many letters in BAT?',pic:'🦇',opts:['2','4','5','3'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with DOG?',pic:'🐶',opts:['cat','bird','fish','log'],answer:3,subject:'Language Arts'},
      {q:'What letter starts NEST?',pic:'🪺',opts:['N','M','O','P'],answer:0,subject:'Language Arts'},
      {q:'Which word is a food?',pic:'🍕',opts:['pizza','run','happy','tall'],answer:0,subject:'Language Arts'},
      {q:'What comes at the end of a sentence?',pic:'📝',opts:['comma','space','letter','period'],answer:3,subject:'Language Arts'},
      {q:'Which letter is a vowel?',pic:'🔤',opts:['A','B','C','D'],answer:0,subject:'Language Arts'},
      // Colors (30)
      {q:'What color is this?',pic:'🍎',opts:['Blue','Green','Yellow','Red'],answer:3,subject:'Colors'},
      {q:'What color is the sky?',pic:'☁️',opts:['Blue','Green','Red','Yellow'],answer:0,subject:'Colors'},
      {q:'What color is grass?',pic:'🌿',opts:['Blue','Red','Orange','Green'],answer:3,subject:'Colors'},
      {q:'What color is a banana?',pic:'🍌',opts:['Red','Blue','Green','Yellow'],answer:3,subject:'Colors'},
      {q:'What color is snow?',pic:'❄️',opts:['White','Gray','Black','Yellow'],answer:0,subject:'Colors'},
      {q:'What color is an orange?',pic:'🍊',opts:['Orange','Red','Yellow','Green'],answer:0,subject:'Colors'},
      {q:'What color is a blueberry?',pic:'🫐',opts:['Red','Green','Yellow','Blue'],answer:3,subject:'Colors'},
      {q:'What color is the sun?',pic:'☀️',opts:['White','Orange','Red','Yellow'],answer:3,subject:'Colors'},
      {q:'What colors make orange?',pic:'🔴➕🟡',opts:['Red and yellow','Red and blue','Blue and yellow','Black and white'],answer:0,subject:'Colors'},
      {q:'What color is a frog?',pic:'🐸',opts:['Red','Blue','Orange','Green'],answer:3,subject:'Colors'},
      {q:'What color is coal?',pic:'⚫',opts:['Gray','Brown','Blue','Black'],answer:3,subject:'Colors'},
      {q:'What color is a flamingo?',pic:'🦩',opts:['White','Blue','Yellow','Pink'],answer:3,subject:'Colors'},
      {q:'What colors make purple?',pic:'🔴➕🔵',opts:['Red and blue','Blue and yellow','Red and yellow','White and red'],answer:0,subject:'Colors'},
      {q:'What color is a school bus?',pic:'🚌',opts:['Yellow','Red','Blue','Green'],answer:0,subject:'Colors'},
      {q:'What color is a tomato?',pic:'🍅',opts:['Red','Orange','Yellow','Purple'],answer:0,subject:'Colors'},
      {q:'What color is milk?',pic:'🥛',opts:['White','Yellow','Gray','Cream'],answer:0,subject:'Colors'},
      {q:'What color is a crow?',pic:'🐦‍⬛',opts:['Brown','Gray','Blue','Black'],answer:3,subject:'Colors'},
      {q:'What color is a pumpkin?',pic:'🎃',opts:['Orange','Blue','Red','Green'],answer:0,subject:'Colors'},
      {q:'What colors make green?',pic:'🔵➕🟡',opts:['Red and blue','Red and yellow','Black and white','Blue and yellow'],answer:3,subject:'Colors'},
      {q:'What color is a fire truck?',pic:'🚒',opts:['Blue','Green','Yellow','Red'],answer:3,subject:'Colors'},
      {q:'What color is a strawberry?',pic:'🍓',opts:['Red','Blue','Yellow','Green'],answer:0,subject:'Colors'},
      {q:'What color is a lemon?',pic:'🍋',opts:['Orange','Green','Red','Yellow'],answer:3,subject:'Colors'},
      {q:'What color is a grape?',pic:'🍇',opts:['Red or purple','Yellow','Green','Blue'],answer:0,subject:'Colors'},
      {q:'What color is an elephant?',pic:'🐘',opts:['Brown','Black','White','Gray'],answer:3,subject:'Colors'},
      {q:'What color is a carrot?',pic:'🥕',opts:['Orange','Red','Yellow','Green'],answer:0,subject:'Colors'},
      {q:'What color is a stop sign?',pic:'🛑',opts:['Red','Blue','Green','Yellow'],answer:0,subject:'Colors'},
      {q:'What color is chocolate?',pic:'🍫',opts:['Brown','Black','Gray','Red'],answer:0,subject:'Colors'},
      {q:'What color is the ocean?',pic:'🌊',opts:['Green','Purple','Gray','Blue'],answer:3,subject:'Colors'},
      {q:'What color is a lime?',pic:'🍈',opts:['Yellow','Orange','Blue','Green'],answer:3,subject:'Colors'},
      {q:'What colors make pink?',pic:'🔴➕⬜',opts:['Red and white','Blue and white','Yellow and white','Black and white'],answer:0,subject:'Colors'},
      // Shapes (30)
      {q:'What shape is this?',pic:'⭕',opts:['Square','Triangle','Rectangle','Circle'],answer:3,subject:'Shapes'},      {q:'What shape is a stop sign?',pic:'🛑',opts:['Octagon','Circle','Square','Triangle'],answer:0,subject:'Shapes'},
      {q:'What shape is a pizza?',pic:'🍕',opts:['Circle','Square','Triangle','Rectangle'],answer:0,subject:'Shapes'},
      {q:'A pizza slice looks like which shape?',pic:'🍕',opts:['Triangle','Circle','Square','Heart'],answer:0,subject:'Shapes'},      {q:'What shape is a door?',pic:'🚪',opts:['Circle','Triangle','Star','Rectangle'],answer:3,subject:'Shapes'},
      {q:'How many sides does an octagon have?',pic:'🛑',opts:['6','7','9','8'],answer:3,subject:'Shapes'},
      {q:'What shape is a wheel?',pic:'🎡',opts:['Circle','Square','Triangle','Rectangle'],answer:0,subject:'Shapes'},
      {q:'What shape is a book?',pic:'📚',opts:['Circle','Triangle','Star','Rectangle'],answer:3,subject:'Shapes'},
      {q:'Which shape has no corners?',pic:'⭕',opts:['Square','Triangle','Rectangle','Circle'],answer:3,subject:'Shapes'},
      {q:'What shape is an egg?',pic:'🥚',opts:['Oval','Circle','Square','Triangle'],answer:0,subject:'Shapes'},
      {q:'How many corners does a rectangle have?',pic:'▬',opts:['2','3','5','4'],answer:3,subject:'Shapes'},
      {q:'What shape is a window?',pic:'🪟',opts:['Rectangle','Circle','Triangle','Star'],answer:0,subject:'Shapes'},
      {q:'A triangle has how many angles?',pic:'📐',opts:['2','4','5','3'],answer:3,subject:'Shapes'},
      {q:'What shape is a coin?',pic:'🪙',opts:['Square','Oval','Triangle','Circle'],answer:3,subject:'Shapes'},
      {q:'How many sides does a hexagon have?',pic:'⬡',opts:['6','5','7','8'],answer:0,subject:'Shapes'},
      {q:'What shape is a diamond in cards?',pic:'♦️',opts:['Square','Circle','Triangle','Diamond'],answer:3,subject:'Shapes'},
      {q:'What shape is a party hat?',pic:'🎉',opts:['Cone','Cube','Sphere','Cylinder'],answer:0,subject:'Shapes'},
      {q:'What 3D shape is a soup can?',pic:'🥫',opts:['Sphere','Cube','Cone','Cylinder'],answer:3,subject:'Shapes'},
      {q:'What shape is a football?',pic:'🏈',opts:['Oval','Circle','Square','Triangle'],answer:0,subject:'Shapes'},
      {q:'How many sides does a pentagon have?',pic:'⭐',opts:['5','4','6','7'],answer:0,subject:'Shapes'},
      {q:'What shape is a yield sign?',pic:'⚠️',opts:['Circle','Square','Rectangle','Triangle'],answer:3,subject:'Shapes'},
      {q:'What shape is an ice cream cone?',pic:'🍦',opts:['Cube','Cylinder','Just a cone','Sphere on cone'],answer:3,subject:'Shapes'},
      {q:'A square is a special type of what?',pic:'⬛',opts:['Triangle','Circle','Oval','Rectangle'],answer:3,subject:'Shapes'},
      {q:'What shape is a slice of bread?',pic:'🍞',opts:['Rectangle','Circle','Square','Triangle'],answer:0,subject:'Shapes'},
      {q:'What shape is the sun?',pic:'☀️',opts:['Circle','Triangle','Rectangle','Square'],answer:0,subject:'Shapes'},
      {q:'How many faces does a cube have?',pic:'🎲',opts:['6','4','5','7'],answer:0,subject:'Shapes'},
      {q:'What shape is a ring?',pic:'💍',opts:['Square','Triangle','Diamond','Circle or oval'],answer:3,subject:'Shapes'},
      {q:'What shape is a star?',pic:'⭐',opts:['Pentagon','Circle','Hexagon','Star'],answer:3,subject:'Shapes'},
      // Animals (30)
      {q:'What does a dog say?',pic:'🐶',opts:['Woof','Moo','Meow','Oink'],answer:0,subject:'Animals'},
      {q:'What does a cat say?',pic:'🐱',opts:['Woof','Moo','Oink','Meow'],answer:3,subject:'Animals'},
      {q:'What does a cow say?',pic:'🐄',opts:['Woof','Oink','Meow','Moo'],answer:3,subject:'Animals'},
      {q:'What does a duck say?',pic:'🦆',opts:['Quack','Moo','Woof','Oink'],answer:0,subject:'Animals'},
      {q:'What does a pig say?',pic:'🐷',opts:['Moo','Meow','Woof','Oink'],answer:3,subject:'Animals'},      {q:'Which animal can fly?',pic:'✈️',opts:['Bird','Dog','Fish','Cat'],answer:0,subject:'Animals'},
      {q:'Which animal lives in water?',pic:'🌊',opts:['Fish','Dog','Cat','Rabbit'],answer:0,subject:'Animals'},
      {q:'What do caterpillars turn into?',pic:'🐛',opts:['Bees','Birds','Worms','Butterflies'],answer:3,subject:'Animals'},
      {q:'Which animal hops?',pic:'🐰',opts:['Rabbit','Fish','Cat','Snake'],answer:0,subject:'Animals'},
      {q:'What is a baby dog called?',pic:'🐶',opts:['Kitten','Cub','Foal','Puppy'],answer:3,subject:'Animals'},
      {q:'Which animal has a long neck?',pic:'🦒',opts:['Elephant','Horse','Camel','Giraffe'],answer:3,subject:'Animals'},
      {q:'What do bees make?',pic:'🐝',opts:['Honey','Milk','Syrup','Butter'],answer:0,subject:'Animals'},
      {q:'Which animal has black and white stripes?',pic:'🦓',opts:['Tiger','Giraffe','Elephant','Zebra'],answer:3,subject:'Animals'},
      {q:'What is a baby cat called?',pic:'🐱',opts:['Kitten','Puppy','Cub','Calf'],answer:0,subject:'Animals'},
      {q:'Which animal gives us milk?',pic:'🥛',opts:['Dog','Cat','Fish','Cow'],answer:3,subject:'Animals'},
      {q:'How many legs does a spider have?',pic:'🕷️',opts:['8','4','6','10'],answer:0,subject:'Animals'},
      {q:'Which bird cannot fly?',pic:'🐧',opts:['Penguin','Eagle','Robin','Parrot'],answer:0,subject:'Animals'},
      {q:'What is a baby cow called?',pic:'🐄',opts:['Puppy','Kid','Lamb','Calf'],answer:3,subject:'Animals'},
      {q:'Which animal sleeps through winter?',pic:'🐻',opts:['Bear','Bird','Dog','Fish'],answer:0,subject:'Animals'},
      {q:'Which animal has a pouch for its baby?',pic:'🦘',opts:['Dog','Bear','Horse','Kangaroo'],answer:3,subject:'Animals'},
      {q:'What do frogs start life as?',pic:'🐸',opts:['Fish','Snakes','Worms','Tadpoles'],answer:3,subject:'Animals'},
      {q:'Which animal is the largest?',pic:'🐋',opts:['Blue Whale','Elephant','Giraffe','Hippo'],answer:0,subject:'Animals'},
      {q:'What is a baby horse called?',pic:'🐴',opts:['Calf','Puppy','Cub','Foal'],answer:3,subject:'Animals'},
      {q:'How many legs does an insect have?',pic:'🐞',opts:['4','8','10','6'],answer:3,subject:'Animals'},
      {q:'Which animal can change its color?',pic:'🦎',opts:['Chameleon','Dog','Horse','Cow'],answer:0,subject:'Animals'},
      {q:'What sound does a lion make?',pic:'🦁',opts:['Roar','Bark','Meow','Moo'],answer:0,subject:'Animals'},
      {q:'Where do penguins live?',pic:'🐧',opts:['Antarctica','Africa','Amazon','Asia'],answer:0,subject:'Animals'},
      {q:'Which animal has the longest neck?',pic:'🦒',opts:['Elephant','Horse','Camel','Giraffe'],answer:3,subject:'Animals'},
      {q:'What is a group of fish called?',pic:'🐟🐟🐟',opts:['Pack','Herd','Flock','School'],answer:3,subject:'Animals'},
      // Nature (30)
      {q:'When does the sun shine?',pic:'☀️',opts:['During the day','At night','Never','Underground'],answer:0,subject:'Nature'},
      {q:'What falls from clouds?',pic:'🌧️',opts:['Stars','Birds','Leaves','Rain'],answer:3,subject:'Nature'},
      {q:'Which season has the most snow?',pic:'❄️',opts:['Summer','Spring','Fall','Winter'],answer:3,subject:'Nature'},
      {q:'What do plants need to grow?',pic:'🌱',opts:['Water and sun','Candy','Toys','Music'],answer:0,subject:'Nature'},
      {q:'Which season do flowers bloom?',pic:'🌸',opts:['Spring','Winter','Fall','Night'],answer:0,subject:'Nature'},
      {q:'What comes after rain?',pic:'🌈',opts:['Snow','Lightning','Tornado','Rainbow'],answer:3,subject:'Nature'},
      {q:'What is the hottest season?',pic:'🌞',opts:['Winter','Spring','Fall','Summer'],answer:3,subject:'Nature'},
      {q:'What do trees give us?',pic:'🌳',opts:['Rain','Music','Light','Air and shade'],answer:3,subject:'Nature'},
      {q:'What is a forest?',pic:'🌲🌲🌲',opts:['An area with many trees','A large body of water','A dry sandy place','A grassy open land'],answer:0,subject:'Nature'},
      {q:'What causes thunder?',pic:'⛈️',opts:['Lightning','Rain','Wind','Clouds'],answer:0,subject:'Nature'},
      {q:'What color are leaves in fall?',pic:'🍂',opts:['Red orange and yellow','Blue and purple','Pink and white','Green and black'],answer:0,subject:'Nature'},
      {q:'What do seeds need to sprout?',pic:'🌱',opts:['Sunlight only','Cold and darkness','Wind and rain','Water and warmth'],answer:3,subject:'Nature'},
      {q:'What is the water cycle?',pic:'💧',opts:['Water evaporating and falling as rain','Water in rivers only','Water freezing only','Drinking water'],answer:0,subject:'Nature'},
      {q:'What is a desert?',pic:'🏜️',opts:['A very wet place','A cold place','A forest','A very dry place with little rain'],answer:3,subject:'Nature'},
      {q:'What is the sky made of?',pic:'🌤️',opts:['Water','Clouds only','Nothing','Air'],answer:3,subject:'Nature'},
      {q:'Which season comes after winter?',pic:'🌸',opts:['Spring','Summer','Fall','Winter'],answer:0,subject:'Nature'},
      {q:'What is fog?',pic:'🌫️',opts:['A cloud near the ground','Smoke','Steam','Mist from ocean only'],answer:0,subject:'Nature'},
      {q:'Where does rain come from?',pic:'☁️',opts:['Rivers','The ground','Trees','Clouds'],answer:3,subject:'Nature'},
      {q:'What is a river?',pic:'🏞️',opts:['A large body of still water','Salt water near the coast','A dry land area','A flowing body of fresh water'],answer:3,subject:'Nature'},
      {q:'What is the largest ocean?',pic:'🌊',opts:['Pacific','Atlantic','Indian','Arctic'],answer:0,subject:'Nature'},
      {q:'What is an island?',pic:'🏝️',opts:['Land surrounded by water','Land on two sides of water','A mountain in water','A large lake'],answer:0,subject:'Nature'},
      {q:'What season is the coldest?',pic:'⛄',opts:['Spring','Summer','Fall','Winter'],answer:3,subject:'Nature'},
      {q:'What causes wind?',pic:'🌬️',opts:['Rain','Sunshine','Trees moving','Moving air'],answer:3,subject:'Nature'},
      {q:'What is a mountain?',pic:'⛰️',opts:['A very tall landform','A flat land area','An underwater cave','A type of river'],answer:0,subject:'Nature'},
      {q:'What do flowers need to grow?',pic:'🌺',opts:['Snow only','Cold and darkness','Wind and rain','Water sun and soil'],answer:3,subject:'Nature'},
      {q:'What is snow made of?',pic:'❄️',opts:['Ice crystals','Water drops','Sand','Sugar'],answer:0,subject:'Nature'},
      {q:'Which season has the longest days?',pic:'☀️',opts:['Winter','Spring','Fall','Summer'],answer:3,subject:'Nature'},
      {q:'What is a lake?',pic:'🏞️',opts:['A large body of water surrounded by land','A flowing river','Salt water near coast','A dry desert'],answer:0,subject:'Nature'},
      {q:'What is a rainbow made of?',pic:'🌈',opts:['Light and water droplets','Paint','Magic','Clouds'],answer:0,subject:'Nature'},
      {q:'What is soil made of?',pic:'🌱',opts:['Only sand','Only clay','Only water','Rocks minerals and organic matter'],answer:3,subject:'Nature'},
      // Science (30)
      {q:'What gives plants their green color?',pic:'🌿',opts:['Water','Soil','Sunlight','Chlorophyll'],answer:3,subject:'Science'},
      {q:'What is the moon?',pic:'🌙',opts:['A star','A planet','A comet','A natural satellite of Earth'],answer:3,subject:'Science'},
      {q:'What does a thermometer measure?',pic:'🌡️',opts:['Temperature','Wind','Rain','Pressure'],answer:0,subject:'Science'},
      {q:'What is the job of the heart?',pic:'❤️',opts:['Pump blood through the body','Help us think','Help us breathe','Help us see'],answer:0,subject:'Science'},
      {q:'What is a magnet?',pic:'🧲',opts:['A type of battery','A type of light','A kind of motor','An object that attracts iron and steel'],answer:3,subject:'Science'},
      {q:'What is the sun?',pic:'☀️',opts:['A planet','A moon','An asteroid','A star'],answer:3,subject:'Science'},
      {q:'What is a shadow?',pic:'🌑',opts:['Darkness formed when light is blocked','A reflection in water','A type of cloud','Light bouncing off a mirror'],answer:0,subject:'Science'},
      {q:'What do plants give off that we breathe?',pic:'🌿',opts:['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'],answer:0,subject:'Science'},
      {q:'What is gravity?',pic:'🍎',opts:['A type of magnet','A type of energy','A kind of weather','A force that pulls objects toward Earth'],answer:3,subject:'Science'},
      {q:'What body part do we use to see?',pic:'👁️',opts:['Eyes','Ears','Nose','Tongue'],answer:0,subject:'Science'},
      {q:'What do animals need to survive?',pic:'🐾',opts:['Toys and games','TV and music','Books and pencils','Food water and shelter'],answer:3,subject:'Science'},
      {q:'Which sense do we use to smell?',pic:'👃',opts:['Nose','Eyes','Ears','Tongue'],answer:0,subject:'Science'},
      {q:'What is air made mostly of?',pic:'💨',opts:['Oxygen','Carbon dioxide','Hydrogen','Nitrogen'],answer:3,subject:'Science'},
      {q:'What is the nearest star to Earth?',pic:'☀️',opts:['The Sun','Sirius','Alpha Centauri','Polaris'],answer:0,subject:'Science'},
      {q:'What is matter?',pic:'🔬',opts:['Anything that has mass and takes up space','Anything you can see','Only solid things','Only liquids'],answer:0,subject:'Science'},
      {q:'What kind of animal is a whale?',pic:'🐋',opts:['Fish','Reptile','Amphibian','Mammal'],answer:3,subject:'Science'},
      {q:'What is a food chain?',pic:'🌱',opts:['The order of who eats whom in nature','A grocery store','A type of plant','A kind of fish'],answer:0,subject:'Science'},      {q:'What do earthworms do for soil?',pic:'🪱',opts:['Nothing helpful','Eat plant roots','Take away nutrients','Break down organic matter making soil richer'],answer:3,subject:'Science'},
      {q:'What is a fossil?',pic:'🦕',opts:['Preserved remains of ancient organisms','A very old rock','A type of mineral','A volcanic rock'],answer:0,subject:'Science'},
      {q:'What is the purpose of a flower?',pic:'🌸',opts:['To attract pollinators and produce seeds','To look pretty','To make food','To absorb water'],answer:0,subject:'Science'},
      {q:'Which is a renewable resource?',pic:'☀️',opts:['Coal','Oil','Natural gas','Sunlight'],answer:3,subject:'Science'},
      {q:'What is the job of the stem in a plant?',pic:'🌱',opts:['Carry water and nutrients to leaves','Make food','Absorb water','Make seeds'],answer:0,subject:'Science'},
      {q:'What is a habitat?',pic:'🐾',opts:['The natural home of an animal','A type of food','A kind of plant','A weather pattern'],answer:0,subject:'Science'},
      {q:'What is the difference between living and non-living?',pic:'🌿',opts:['Living things eat only','Non-living things move too','There is no difference','Living things grow and respond - non-living do not'],answer:3,subject:'Science'},
      {q:'What is the purpose of leaves on a plant?',pic:'🍃',opts:['Absorb water','Hold the plant up','Make seeds','Make food using sunlight'],answer:3,subject:'Science'},
      {q:'What is air pollution?',pic:'🏭',opts:['Harmful substances in the air','Clean fresh air','Wind and rain','A type of weather'],answer:0,subject:'Science'},
      {q:'What is a producer in a food chain?',pic:'🌱',opts:['An animal that hunts','A decomposer','An omnivore','A plant that makes its own food'],answer:3,subject:'Science'},
      {q:'What do plants absorb through their roots?',pic:'🌱',opts:['Water and nutrients from soil','Air','Sunlight','Carbon dioxide'],answer:0,subject:'Science'},
      {q:'What is recycling?',pic:'♻️',opts:['Turning old materials into new ones','Throwing everything away','Buying more things','Using things once'],answer:0,subject:'Science'},
      // Social Studies (30)
      {q:'What does a firefighter do?',pic:'🚒',opts:['Cook food','Teach school','Fix cars','Fight fires and save people'],answer:3,subject:'Social Studies'},
      {q:'What does a doctor do?',pic:'👩‍⚕️',opts:['Build roads','Fly planes','Teach school','Help sick people'],answer:3,subject:'Social Studies'},
      {q:'Who delivers our mail?',pic:'📬',opts:['Firefighter','Doctor','Teacher','Mail carrier'],answer:3,subject:'Social Studies'},
      {q:'What does a teacher do?',pic:'📚',opts:['Help students learn','Cook food','Fight fires','Fix cars'],answer:0,subject:'Social Studies'},
      {q:'What is a community?',pic:'🏘️',opts:['A group of people living and working together','A type of food','A kind of animal','A building'],answer:0,subject:'Social Studies'},
      {q:'What is a map?',pic:'🗺️',opts:['A drawing showing places and locations','A picture of a person','A type of book','A kind of graph'],answer:0,subject:'Social Studies'},
      {q:'What is the name of our country?',pic:'🇺🇸',opts:['Canada','Mexico','England','The United States of America'],answer:3,subject:'Social Studies'},
      {q:'What do we call the leader of a city?',pic:'🏛️',opts:['President','Governor','Principal','Mayor'],answer:3,subject:'Social Studies'},      {q:'What is a library?',pic:'📚',opts:['A place to borrow books and learn','A place to sleep','A place to buy food','A hospital'],answer:0,subject:'Social Studies'},
      {q:'What does a police officer do?',pic:'👮',opts:['Help keep people safe and follow laws','Cook food','Teach school','Fix cars'],answer:0,subject:'Social Studies'},
      {q:'What is a neighborhood?',pic:'🏘️',opts:['A large city','A country','A school district','A small area where people live and share spaces'],answer:3,subject:'Social Studies'},
      {q:'What is responsibility?',pic:'✅',opts:['Doing your job and keeping promises','Letting others do everything','Never doing anything','Blaming others'],answer:0,subject:'Social Studies'},
      {q:'If a friend looks different from you, what should you do?',pic:'😊',opts:['Be mean','Walk away','Laugh at them','Be kind and play with them!'],answer:3,subject:'Social Studies'},
      {q:'How can you be kind to someone new?',pic:'👋',opts:['Ignore them','Tell them to go away','Be grumpy','Say hi and smile!'],answer:3,subject:'Social Studies'},
      {q:'What do we call it when everyone is treated with fairness?',pic:'⚖️',opts:['Being fair and equal to everyone','Being mean','Ignoring others','Only being nice to friends'],answer:0,subject:'Social Studies'},
      {q:'If a classmate is sad, what is the kind thing to do?',pic:'❤️',opts:['Ask if they are okay and be a friend','Laugh at them','Ignore them','Walk away'],answer:0,subject:'Social Studies'},
      {q:'People can have different skin colors, hair, and eyes. All these people are:',pic:'🌈',opts:['Equal and special in their own way','Strange','Wrong','Not our friends'],answer:0,subject:'Social Studies'},
      {q:'What is one way to show kindness to everyone?',pic:'🤗',opts:['Only talk to your best friend','Ignore people who are different','Be bossy','Share, take turns, and include everyone'],answer:3,subject:'Social Studies'},
      {q:'What does a librarian do?',pic:'📚',opts:['Fights fires','Teaches school','Delivers mail','Helps people find and borrow books'],answer:3,subject:'Social Studies'},
      {q:'What is cooperation?',pic:'🤝',opts:['Working together to reach a goal','Working alone','Arguing with others','Following one person'],answer:0,subject:'Social Studies'},
      {q:'A new student in class is from another country. You should:',pic:'🌍',opts:['Ignore them','Laugh at them','Walk away','Be kind and help them feel welcome'],answer:3,subject:'Social Studies'},
      {q:'People who look, talk, or eat differently are still:',pic:'❤️',opts:['Our friends who deserve kindness','Wrong','Strange','Not important'],answer:0,subject:'Social Studies'},
      {q:'What does it mean to be a good friend to everyone?',pic:'🤝',opts:['Only play with people who look like you','Leave out kids who are different','Be mean to new students','Include all classmates and treat them fairly'],answer:3,subject:'Social Studies'},
      {q:'Families can have one parent, two parents, or grandparents. All families are:',pic:'👨‍👩‍👧',opts:['Loved and important','Wrong','Unusual','Strange'],answer:0,subject:'Social Studies'},
      {q:'What does the word "respect" mean?',pic:'🌟',opts:['Treating others the way you want to be treated','Being bossy','Ignoring everyone','Only being nice sometimes'],answer:0,subject:'Social Studies'},
      {q:'Why is it fun to learn about different holidays from around the world?',pic:'🎉',opts:['It is not fun','It is confusing','It wastes time','It helps us understand and celebrate how others live'],answer:3,subject:'Social Studies'},
      {q:'What is the American flag a symbol of?',pic:'🇺🇸',opts:['The president','The military','The government only','The United States of America'],answer:3,subject:'Social Studies'},
      {q:'What is a tradition?',pic:'🎉',opts:['A custom passed down through generations','A type of food','A kind of holiday','A school subject'],answer:0,subject:'Social Studies'},
      {q:'What does a nurse do?',pic:'👩‍⚕️',opts:['Build roads','Teach school','Fix cars','Care for sick and injured patients'],answer:3,subject:'Social Studies'},
      {q:'What is fairness?',pic:'⚖️',opts:['Everyone getting what they need to be equal','Everyone getting the same thing','One person getting everything','Ignoring others needs'],answer:0,subject:'Social Studies'},
      {q:'What do we call rules that everyone must follow?',pic:'📋',opts:['Laws','Suggestions','Opinions','Guidelines'],answer:0,subject:'Social Studies'},
      {q:'What is a continent?',pic:'🌍',opts:['A small island','A large body of water','A type of country','A very large landmass'],answer:3,subject:'Social Studies'},
      {q:'How many continents are there?',pic:'🌎',opts:['7','5','6','8'],answer:0,subject:'Social Studies'},
      {q:'What is transportation?',pic:'🚗',opts:['A way to make food','A type of building','A kind of communication','Moving people or goods from place to place'],answer:3,subject:'Social Studies'},
      {q:'What is Thanksgiving about?',pic:'🦃',opts:['Being thankful and gathering with family','Giving candy to kids','Dressing in costumes','Celebrating a birthday'],answer:0,subject:'Social Studies'},
      {q:'What is a vote?',pic:'🗳️',opts:['A type of food','A kind of rule','A way to make a choice by counting opinions','A school subject'],answer:2,subject:'Social Studies'},
      {q:'What is a citizen?',pic:'🏛️',opts:['A visitor to a country','A type of leader','A government worker','A person who belongs to and has rights in a country'],answer:3,subject:'Social Studies'},
      {q:'What is respect?',pic:'🤝',opts:['Treating others the way you want to be treated','Ignoring others','Always getting what you want','Being mean'],answer:0,subject:'Social Studies'},
      {q:'What is Independence Day?',pic:'🎆',opts:['A day off school only','A holiday in winter','The day the USA declared independence from Britain','A type of birthday'],answer:2,subject:'Social Studies'},
      {q:'What is a school?',pic:'🏫',opts:['A place to sleep','A place to buy food','A hospital','A place where children learn'],answer:3,subject:'Social Studies'},
      {q:'What does a chef do?',pic:'👨‍🍳',opts:['Cook food for others','Fight fires','Teach school','Fix cars'],answer:0,subject:'Social Studies'},
    ],
    subjects_progress:['Numbers Fun','ABC Time','Colors & Art'],
    poses:[
      { emoji:'🌳', name:'Tree', tip:'Stand like a big tall tree!', secs:20, level:'Easy' },
      { emoji:'🐍', name:'Snake', tip:'Lie flat and look up like a snake!', secs:20, level:'Easy' },
      { emoji:'🦋', name:'Butterfly', tip:'Sit and flap your wings!', secs:30, level:'Easy' },
      { emoji:'⭐', name:'Star', tip:'Spread your arms and legs wide!', secs:20, level:'Easy' },
      { emoji:'🐱', name:'Cat Stretch', tip:'Get on your hands and knees and arch!', secs:25, level:'Easy' },
      { emoji:'🌙', name:'Moon', tip:'Stretch side to side like the moon!', secs:20, level:'Easy' },
      { emoji:'🏔', name:'Mountain', tip:'Stand up super tall like a big mountain!', secs:15, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose", tip:'Curl up tiny like a little seed!', secs:20, level:'Easy' },
      { emoji:'🍼', name:'Happy Baby', tip:'Lie on your back, grab your feet and rock like a baby!', secs:20, level:'Easy' },
      { emoji:'🐢', name:'Turtle', tip:'Sit cross-legged and fold forward like a turtle!', secs:20, level:'Easy' },
      { emoji:'🐍', name:'Baby Cobra', tip:'Lie on your tummy and push up gently with your arms!', secs:20, level:'Easy' },
      { emoji:'🦅', name:'Bird Dog', tip:'Get on hands and knees, reach one arm and leg out like a flying bird!', secs:20, level:'Easy' },
      { emoji:'🐸', name:'Frog', tip:'Squat down low and jump like a frog!', secs:20, level:'Easy' },
      { emoji:'🌟', name:'Dancer', tip:'Stand tall, hold one foot behind you and reach your arm forward!', secs:25, level:'Medium' },
    ],
    books:[
      { title:'Harry the Dirty Dog',             author:'G. Zion',        pages:32,  read:0,  emoji:'🐶' },
      { title:'Chicka Chicka Boom Boom',         author:'B. Martin Jr',   pages:40,  read:0,  emoji:'🌴' },
      { title:'Corduroy',                        author:'Don Freeman',    pages:32,  read:0,  emoji:'🐻' },
      { title:'The Snowy Day',                   author:'E.J. Keats',     pages:40,  read:0,  emoji:'❄️' },
      { title:'Enemy Pie',                       author:'D. Munson',      pages:40,  read:0,  emoji:'🥧' },
      { title:'The Dot',                         author:'P. Reynolds',    pages:32,  read:0,  emoji:'🔵' },
      { title:'Knuffle Bunny',                   author:'M. Willems',     pages:36,  read:0,  emoji:'🐰' },
      { title:'The Rainbow Fish',                author:'M. Pfister',     pages:32,  read:0,  emoji:'🐟' },
      { title:'Last Stop on Market Street',      author:'M. de la Peña',  pages:32,  read:0,  emoji:'🚌' },
      { title:'Fancy Nancy',                     author:'J. OConnor',     pages:32,  read:0,  emoji:'👑' },
      { title:'Pete the Cat: I Love My White Shoes', author:'E. Litwin', pages:40,  read:0,  emoji:'👟' },
      { title:'The Dot',                         author:'P. Reynolds',    pages:32,  read:0,  emoji:'🔵' },
      { title:'Alice in Wonderland',             author:'L. Carroll',     pages:96,  read:0,  emoji:'🐇' },
      { title:'The Wizard of Oz',                author:'L.F. Baum',      pages:120, read:0,  emoji:'🌈' },
      { title:'The Jungle Book',                 author:'R. Kipling',     pages:100, read:0,  emoji:'🐆' },
      { title:'Pinocchio',                       author:'C. Collodi',     pages:80,  read:0,  emoji:'🪆' },
      { title:'Aesops Fables',                   author:'Aesop',          pages:60,  read:0,  emoji:'🦁' },
      { title:'The Wind in the Willows',         author:'K. Grahame',     pages:100, read:0,  emoji:'🌿' },
    ],
    words:[
      { w:'Big',    d:'Very very large! Bigger than you! 🐘' },
      { w:'Soft',   d:'Nice and fluffy to touch! 🐑' },
      { w:'Happy',  d:'Feeling smiley and joyful! 😄' },
      { w:'Fast',   d:'Moving super quickly! 💨' },
      { w:'Bright', d:'Really shiny and full of light! ☀' },
    ],
  },

  K: {
    label: 'Kindergarten', gradeNum: 0,
    ui: {
      subtitle:    "Let's have fun learning today! 🌈",
      streakTitle: 'Great Job!', streakSub: 'You came back! 🎉',
      tabLearn:'Learn!', tabMove:'Move!', tabRead:'Read!', tabArt:'Art!',
      subjectsTitle:'📖 Fun Activities Today!',
      quizTitle:'🧠 Can You Answer?',
      posesTitle:'🌟 Fun Moves!', breathSub:'Watch the flower! Big breaths in and out.',
      bookshelfTitle:'📚 My Books!', timerTopLabel:'Hold this move!'
    },
    subjects:[
      { icon:'🔢', title:'Counting', desc:'Count bears, apples, and toys!', badge:'Let\'s count!', color:'mint' },
      { icon:'🔤', title:'Letters', desc:'Learn the ABCs and letter sounds!', badge:'ABC time!', color:'coral' },
      { icon:'🎨', title:'Colors & Shapes', desc:'Circles, squares, and all the colors!', badge:'So colorful!', color:'lavender' },
      { icon:'🌤', title:'My World', desc:'Weather, animals, and nature!', badge:'Explore!', color:'sun' },
          { icon:'✏', title:'Letter Tracing', desc:'Trace every letter A to Z!', badge:'Trace!', color:'coral' },
    ],
    questions:[
      {q:'What is 3 + 3?',opts:['4','5','7','6'],answer:3,subject:'Counting'},
      {q:'Count by 2s: 2 4 __',pic:'2️⃣ 4️⃣ ❓',opts:['5','7','6','8'],answer:2,subject:'Counting'},
      {q:'What is 7 - 2?',pic:'7️⃣➖2️⃣',opts:['3','4','5','6'],answer:2,subject:'Counting'},
      {q:'How many tens in 20?',opts:['2','1','3','4'],answer:0,subject:'Counting'},
      {q:'What is 5 + 4?',pic:'⭐⭐⭐⭐⭐➕⭐⭐⭐⭐',opts:['7','8','10','9'],answer:3,subject:'Counting'},
      {q:'Which number is biggest?',pic:'3️⃣ 7️⃣ 5️⃣ 1️⃣',opts:['7','3','5','1'],answer:0,subject:'Counting'},
      {q:'What is 10 - 4?',opts:['4','5','6','7'],answer:2,subject:'Counting'},
      {q:'What comes before 10?',opts:['7','8','11','9'],answer:3,subject:'Counting'},
      {q:'What is 6 + 3?',pic:'🐶🐶🐶🐶🐶🐶➕🐶🐶🐶',opts:['7','8','9','10'],answer:2,subject:'Counting'},
      {q:'How many fingers on two hands?',pic:'✋✋',opts:['10','8','9','12'],answer:0,subject:'Counting'},
      {q:'What is 5 + 5?',opts:['8','9','10','11'],answer:2,subject:'Counting'},
      {q:'What is 8 - 3?',opts:['3','4','5','6'],answer:2,subject:'Counting'},
      {q:'Count by 5s: 5 10 __',opts:['12','13','14','15'],answer:3,subject:'Counting'},
      {q:'What is 4 + 4?',pic:'🍎🍎🍎🍎➕🍎🍎🍎🍎',opts:['6','7','8','9'],answer:2,subject:'Counting'},
      {q:'How many months in a year?',opts:['12','10','11','13'],answer:0,subject:'Counting'},
      {q:'What is 9 - 4?',opts:['3','4','5','6'],answer:2,subject:'Counting'},
      {q:'What is 2 + 2 + 2?',pic:'🌟🌟➕🌟🌟➕🌟🌟',opts:['4','5','6','7'],answer:2,subject:'Counting'},
      {q:'Which is smallest: 8 3 6 9?',opts:['8','6','9','3'],answer:3,subject:'Counting'},
      {q:'What is 7 + 2?',opts:['8','10','11','9'],answer:3,subject:'Counting'},
      {q:'How many days in a week?',opts:['5','6','7','8'],answer:2,subject:'Counting'},
      {q:'What is 10 - 7?',opts:['3','1','2','4'],answer:0,subject:'Counting'},
      {q:'What is 3 + 3 + 3?',opts:['7','8','9','10'],answer:2,subject:'Counting'},
      {q:'Which comes after 19?',opts:['20','18','21','22'],answer:0,subject:'Counting'},
      {q:'What is 8 + 2?',pic:'🐱🐱🐱🐱🐱🐱🐱🐱➕🐱🐱',opts:['8','9','10','11'],answer:2,subject:'Counting'},
      {q:'How many seasons in a year?',opts:['2','3','4','5'],answer:2,subject:'Counting'},
      {q:'What is 6 + 6?',opts:['10','11','13','12'],answer:3,subject:'Counting'},
      {q:'What is 15 - 5?',opts:['8','9','10','11'],answer:2,subject:'Counting'},
      {q:'Count by 10s: 10 20 __',opts:['25','28','29','30'],answer:3,subject:'Counting'},
      {q:'What is 4 + 5 + 1?',opts:['8','9','10','11'],answer:2,subject:'Counting'},
      {q:'How many cents in a dime?',opts:['5','15','20','10'],answer:3,subject:'Counting'},
      {q:'Which letter comes after D?',opts:['E','C','F','G'],answer:0,subject:'Language Arts'},
      {q:'What sound does M make?',pic:'🌙',opts:['Muh','Buh','Sss','Tuh'],answer:0,subject:'Language Arts'},
      {q:'What starts with B?',pic:'🐻',opts:['Apple','Cat','Bear','Dog'],answer:2,subject:'Language Arts'},
      {q:'What rhymes with SEE?',opts:['far','big','run','tree'],answer:3,subject:'Language Arts'},
      {q:'Last letter of ALPHABET?',opts:['X','Y','Z','W'],answer:2,subject:'Language Arts'},
      {q:'What is a sentence?',opts:['A single letter','A group of words that makes a complete thought','A paragraph','A story'],answer:1,subject:'Language Arts'},
      {q:'Which word is plural?',pic:'🐦🐦🐦',opts:['birds','cat','dog','fish'],answer:0,subject:'Language Arts'},
      {q:'What does a period mean?',pic:'.',opts:['Shout','Question','Stop - end of sentence','Continue'],answer:2,subject:'Language Arts'},
      {q:'Which word rhymes with NIGHT?',opts:['Day','Dark','Sun','Light'],answer:3,subject:'Language Arts'},
      {q:'What starts the word UMBRELLA?',pic:'☂️',opts:['A','E','U','I'],answer:2,subject:'Language Arts'},
      {q:'A noun is a?',opts:['Action word','Person place or thing','Describing word','Connecting word'],answer:1,subject:'Language Arts'},
      {q:'Which word is spelled correctly?',opts:['Frend','Freind','Friand','Friend'],answer:3,subject:'Language Arts'},
      {q:'What is the plural of CHILD?',opts:['Childs','Childrens','Children','Childes'],answer:2,subject:'Language Arts'},
      {q:'What starts with K?',pic:'🪁',opts:['Lion','Kite','Mouse','Dog'],answer:1,subject:'Language Arts'},
      {q:'What is a question mark for?',pic:'❓',opts:['Show a question','End a statement','Show excitement','Show a pause'],answer:0,subject:'Language Arts'},
      {q:'What sound does PH make?',opts:['Puh','Huh','Fuh','Buh'],answer:2,subject:'Language Arts'},
      {q:'Which word is an action?',opts:['dog','blue','jump','tall'],answer:2,subject:'Language Arts'},
      {q:'How many syllables in BUTTERFLY?',pic:'🦋',opts:['1','2','4','3'],answer:3,subject:'Language Arts'},
      {q:'What is a compound word?',opts:['A long word','Two words joined as one like sunshine','A rhyming word','A plural word'],answer:1,subject:'Language Arts'},
      {q:'Which is a proper noun?',opts:['dog','park','Sarah','school'],answer:2,subject:'Language Arts'},
      {q:'The sun is __ today.',pic:'☀️',opts:['noun','adjective','verb','adverb'],answer:1,subject:'Language Arts'},
      {q:'What color do red and yellow make?',pic:'🔴➕🟡',opts:['Orange','Purple','Green','Brown'],answer:0,subject:'Colors'},
      {q:'What color is the sky on a sunny day?',pic:'☀️',opts:['Green','Red','Blue','Yellow'],answer:2,subject:'Colors'},
      {q:'What color is grass?',pic:'🌿',opts:['Blue','Red','Green','Orange'],answer:2,subject:'Colors'},
      {q:'What color is a fire truck?',pic:'🚒',opts:['Blue','Green','Red','Yellow'],answer:2,subject:'Colors'},
      {q:'What color is snow?',pic:'❄️',opts:['Gray','Black','White','Yellow'],answer:2,subject:'Colors'},
      {q:'What color is a pumpkin?',pic:'🎃',opts:['Blue','Orange','Red','Green'],answer:1,subject:'Colors'},
      {q:'What color is a strawberry?',pic:'🍓',opts:['Blue','Red','Yellow','Green'],answer:1,subject:'Colors'},
      {q:'What color do blue and yellow make?',pic:'🔵➕🟡',opts:['Green','Red','Orange','Purple'],answer:0,subject:'Colors'},
      {q:'What color do red and white make?',pic:'🔴➕⬜',opts:['Purple','Pink','Orange','Brown'],answer:1,subject:'Colors'},
      {q:'What color is a blueberry?',pic:'🫐',opts:['Red','Green','Yellow','Blue'],answer:3,subject:'Colors'},
      {q:'What color is mud?',pic:'🪣',opts:['Blue','Green','Brown','White'],answer:2,subject:'Colors'},
      {q:'What color is the sun at sunset?',pic:'🌅',opts:['Blue','Green','Orange','Black'],answer:2,subject:'Colors'},
      {q:'What color is an elephant?',pic:'🐘',opts:['Brown','Gray','Black','White'],answer:1,subject:'Colors'},
      {q:'What color is a frog?',pic:'🐸',opts:['Red','Blue','Orange','Green'],answer:3,subject:'Colors'},
      {q:'What color is coal?',pic:'⚫',opts:['Gray','Black','Brown','Blue'],answer:1,subject:'Colors'},
      {q:'What color is a flamingo?',pic:'🦩',opts:['White','Blue','Pink','Yellow'],answer:2,subject:'Colors'},
      {q:'What color is a lemon?',pic:'🍋',opts:['Orange','Yellow','Green','Red'],answer:1,subject:'Colors'},
      {q:'What color is a tomato?',pic:'🍅',opts:['Orange','Yellow','Red','Purple'],answer:2,subject:'Colors'},
      {q:'What color is milk?',pic:'🥛',opts:['Yellow','Gray','White','Cream'],answer:2,subject:'Colors'},
      {q:'What color is a school bus?',pic:'🚌',opts:['Red','Blue','Yellow','Green'],answer:2,subject:'Colors'},
      {q:'What two colors make orange?',pic:'🍊',opts:['Red and blue','Red and yellow','Blue and yellow','White and red'],answer:1,subject:'Colors'},
      {q:'What color is a ripe grape?',pic:'🍇',opts:['Red or purple','Yellow','Green','Blue'],answer:0,subject:'Colors'},
      {q:'What color is sand at the beach?',pic:'🏖️',opts:['White','Tan or beige','Brown','Yellow'],answer:1,subject:'Colors'},
      {q:'What color is a lime?',pic:'🍈',opts:['Yellow','Orange','Green','Blue'],answer:2,subject:'Colors'},
      {q:'What color is a plum?',pic:'🟣',opts:['Red','Blue','Pink','Purple'],answer:3,subject:'Colors'},
      {q:'What are the three primary colors?',opts:['Red green blue','Red yellow blue','Orange green purple','Pink brown gray'],answer:1,subject:'Colors'},
      {q:'What color is a carrot?',pic:'🥕',opts:['Orange','Red','Yellow','Green'],answer:0,subject:'Colors'},
      {q:'What shape is a stop sign?',pic:'🛑',opts:['Circle','Square','Octagon','Triangle'],answer:2,subject:'Shapes'},
      {q:'How many sides does a triangle have?',pic:'🔺',opts:['2','4','3','5'],answer:2,subject:'Shapes'},
      {q:'What shape is a pizza?',pic:'🍕',opts:['Square','Triangle','Circle','Rectangle'],answer:2,subject:'Shapes'},
      {q:'How many sides does a square have?',pic:'⬛',opts:['3','4','5','6'],answer:1,subject:'Shapes'},
      {q:'What shape has no corners?',pic:'⭕',opts:['Square','Triangle','Rectangle','Circle'],answer:3,subject:'Shapes'},
      {q:'What shape is a door?',pic:'🚪',opts:['Circle','Triangle','Rectangle','Star'],answer:2,subject:'Shapes'},
      {q:'What shape is a window?',pic:'🪟',opts:['Circle','Triangle','Rectangle','Star'],answer:2,subject:'Shapes'},
      {q:'How many corners does a square have?',pic:'⬛',opts:['2','4','3','5'],answer:1,subject:'Shapes'},
      {q:'What shape looks like an egg?',pic:'🥚',opts:['Oval','Circle','Triangle','Diamond'],answer:0,subject:'Shapes'},
      {q:'How many sides does a hexagon have?',pic:'⬡',opts:['5','7','8','6'],answer:3,subject:'Shapes'},
      {q:'What shape is a coin?',pic:'🪙',opts:['Square','Oval','Circle','Triangle'],answer:2,subject:'Shapes'},
      {q:'How many sides does an octagon have?',pic:'🛑',opts:['6','7','9','8'],answer:3,subject:'Shapes'},
      {q:'What shape is a book?',pic:'📚',opts:['Circle','Triangle','Rectangle','Star'],answer:2,subject:'Shapes'},
      {q:'A pizza slice looks like which shape?',pic:'🍕',opts:['Circle','Triangle','Square','Heart'],answer:1,subject:'Shapes'},
      {q:'A triangle has how many angles?',pic:'📐',opts:['3','2','4','5'],answer:0,subject:'Shapes'},
      {q:'What shape is a football?',pic:'🏈',opts:['Circle','Oval','Square','Triangle'],answer:1,subject:'Shapes'},
      {q:'How many faces does a cube have?',pic:'🎲',opts:['4','5','6','7'],answer:2,subject:'Shapes'},
      {q:'What shape is a party hat?',pic:'🎉',opts:['Cube','Sphere','Cone','Cylinder'],answer:2,subject:'Shapes'},
      {q:'What 3D shape is a soup can?',pic:'🥫',opts:['Sphere','Cube','Cylinder','Cone'],answer:2,subject:'Shapes'},
      {q:'How many sides does a pentagon have?',pic:'⭐',opts:['4','5','6','7'],answer:1,subject:'Shapes'},
      {q:'A square is a special type of what?',pic:'⬛',opts:['Triangle','Circle','Rectangle','Oval'],answer:2,subject:'Shapes'},
      {q:'What shape is the sun?',pic:'☀️',opts:['Circle','Triangle','Rectangle','Square'],answer:0,subject:'Shapes'},
      {q:'What shape is a slice of bread?',pic:'🍞',opts:['Circle','Square','Rectangle','Triangle'],answer:2,subject:'Shapes'},
      {q:'What shape is an ice cream cone?',pic:'🍦',opts:['Cube','Sphere on cone','Cylinder','Just a cone'],answer:1,subject:'Shapes'},
      {q:'What shape is a ring?',pic:'💍',opts:['Circle or oval','Square','Triangle','Diamond'],answer:0,subject:'Shapes'},
      {q:'What shape is a diamond in cards?',pic:'♦️',opts:['Square','Circle','Diamond','Triangle'],answer:2,subject:'Shapes'},
      {q:'What shape is a yield sign?',pic:'⚠️',opts:['Circle','Square','Rectangle','Triangle'],answer:3,subject:'Shapes'},
      {q:'What does a dog say?',pic:'🐶',opts:['Moo','Woof','Meow','Oink'],answer:1,subject:'Animals'},
      {q:'What does a cat say?',pic:'🐱',opts:['Woof','Moo','Meow','Oink'],answer:2,subject:'Animals'},
      {q:'How many legs does a dog have?',pic:'🐶',opts:['2','3','4','6'],answer:2,subject:'Animals'},
      {q:'Which animal can fly?',pic:'🐦',opts:['Bird','Dog','Fish','Cat'],answer:0,subject:'Animals'},
      {q:'What do caterpillars turn into?',pic:'🐛',opts:['Bees','Butterflies','Birds','Worms'],answer:1,subject:'Animals'},
      {q:'What is a baby dog called?',pic:'🐶',opts:['Kitten','Cub','Puppy','Foal'],answer:2,subject:'Animals'},
      {q:'Which animal has a long neck?',pic:'🦒',opts:['Elephant','Horse','Camel','Giraffe'],answer:3,subject:'Animals'},
      {q:'What do bees make?',pic:'🐝',opts:['Milk','Honey','Syrup','Butter'],answer:1,subject:'Animals'},
      {q:'Which animal has black and white stripes?',pic:'🦓',opts:['Tiger','Zebra','Giraffe','Elephant'],answer:1,subject:'Animals'},
      {q:'Which bird cannot fly?',pic:'🐧',opts:['Eagle','Robin','Penguin','Parrot'],answer:2,subject:'Animals'},
      {q:'How many legs does a spider have?',pic:'🕷️',opts:['4','6','8','10'],answer:2,subject:'Animals'},
      {q:'What is a baby cat called?',pic:'🐱',opts:['Puppy','Cub','Kitten','Calf'],answer:2,subject:'Animals'},
      {q:'Which animal gives us milk?',pic:'🐄',opts:['Dog','Cat','Cow','Fish'],answer:2,subject:'Animals'},
      {q:'What is a baby cow called?',pic:'🐄',opts:['Puppy','Calf','Kid','Lamb'],answer:1,subject:'Animals'},
      {q:'Which animal sleeps through winter?',pic:'🐻',opts:['Bear','Bird','Dog','Fish'],answer:0,subject:'Animals'},
      {q:'What do frogs start life as?',pic:'🐸',opts:['Fish','Snakes','Worms','Tadpoles'],answer:3,subject:'Animals'},
      {q:'Which animal is the largest?',pic:'🐋',opts:['Elephant','Blue Whale','Giraffe','Hippo'],answer:1,subject:'Animals'},
      {q:'Which animal has a pouch for its baby?',pic:'🦘',opts:['Dog','Bear','Kangaroo','Horse'],answer:2,subject:'Animals'},
      {q:'What is a baby horse called?',pic:'🐴',opts:['Calf','Puppy','Foal','Cub'],answer:2,subject:'Animals'},
      {q:'How many legs does an insect have?',pic:'🐞',opts:['4','6','8','10'],answer:1,subject:'Animals'},
      {q:'Which animal can change its color?',pic:'🦎',opts:['Dog','Horse','Chameleon','Cow'],answer:2,subject:'Animals'},
      {q:'What sound does a lion make?',pic:'🦁',opts:['Bark','Meow','Roar','Moo'],answer:2,subject:'Animals'},
      {q:'Where do penguins live?',pic:'🐧',opts:['Africa','Amazon','Antarctica','Asia'],answer:2,subject:'Animals'},
      {q:'What is a group of fish called?',pic:'🐟🐟🐟',opts:['Pack','Herd','School','Flock'],answer:2,subject:'Animals'},
      {q:'What does a cow say?',pic:'🐄',opts:['Woof','Oink','Meow','Moo'],answer:3,subject:'Animals'},
      {q:'Which animal hops?',pic:'🐰',opts:['Fish','Rabbit','Cat','Snake'],answer:1,subject:'Animals'},
      {q:'How many legs does a bird have?',pic:'🐦',opts:['2','3','4','6'],answer:0,subject:'Animals'},
      {q:'What is the name of our planet?',pic:'🌍',opts:['Mars','Venus','Earth','Jupiter'],answer:2,subject:'My World'},
      {q:'What direction does the sun rise?',pic:'🌅',opts:['North','South','East','West'],answer:2,subject:'My World'},
      {q:'How many seasons are there?',pic:'🌸❄️☀️🍂',opts:['2','4','3','5'],answer:1,subject:'My World'},
      {q:'What falls as frozen flakes?',pic:'❄️',opts:['Rain','Hail','Snow','Sleet'],answer:2,subject:'My World'},
      {q:'Which season is coldest?',pic:'⛄',opts:['Spring','Summer','Fall','Winter'],answer:3,subject:'My World'},
      {q:'What is an island?',pic:'🏝️',opts:['Land surrounded by water on all sides','Land on two sides of water','A mountain','A large lake'],answer:0,subject:'My World'},
      {q:'What do we call a huge body of salt water?',pic:'🌊',opts:['Lake','River','Ocean','Pond'],answer:2,subject:'My World'},
      {q:'What causes day and night?',pic:'🌍',opts:['Moon moving','Sun moving','Clouds blocking','Earth spinning'],answer:3,subject:'My World'},
      {q:'Which season comes after winter?',pic:'🌸',opts:['Summer','Fall','Spring','Winter'],answer:2,subject:'My World'},
      {q:'What is a river?',pic:'🏞️',opts:['A large body of still water','A flowing body of fresh water','Salt water near the coast','A dry land area'],answer:1,subject:'My World'},
      {q:'What is a desert?',pic:'🏜️',opts:['A very wet place','A very dry place with little rain','A cold place','A forest'],answer:1,subject:'My World'},
      {q:'What is the largest ocean?',pic:'🌊',opts:['Pacific','Atlantic','Indian','Arctic'],answer:0,subject:'My World'},
      {q:'What is fog?',pic:'🌫️',opts:['Smoke','Steam','A cloud near the ground','Mist from ocean only'],answer:2,subject:'My World'},
      {q:'What do thermometers measure?',pic:'🌡️',opts:['Wind','Rain','Temperature','Pressure'],answer:2,subject:'My World'},
      {q:'What is a mountain?',pic:'⛰️',opts:['A flat land area','A very tall landform','An underwater cave','A type of river'],answer:1,subject:'My World'},
      {q:'What is the opposite of a mountain?',pic:'🏔️',opts:['Ocean','Valley','Desert','Forest'],answer:1,subject:'My World'},
      {q:'Which is the hottest season?',pic:'☀️',opts:['Winter','Spring','Fall','Summer'],answer:3,subject:'My World'},
      {q:'What is a forest?',pic:'🌲🌲🌲',opts:['A large body of water','A dry sandy place','An area with many trees','A grassy open land'],answer:2,subject:'My World'},
      {q:'What is rain that has frozen called?',pic:'🌨️',opts:['Snow','Hail','Sleet','Frost'],answer:1,subject:'My World'},
      {q:'What is a lake?',pic:'🏞️',opts:['A large body of water surrounded by land','A flowing river','Salt water near coast','A dry desert'],answer:0,subject:'My World'},
      {q:'Where does rain come from?',pic:'☁️',opts:['Rivers','The ground','Trees','Clouds'],answer:3,subject:'My World'},
      {q:'What causes wind?',pic:'🌬️',opts:['Rain','Moving air','Sunshine','Trees moving'],answer:1,subject:'My World'},      {q:'What is the sky made of?',pic:'🌤️',opts:['Water','Air','Clouds only','Nothing'],answer:1,subject:'My World'},
      {q:'What is a peninsula?',pic:'🗺️',opts:['Land surrounded by water','A large island','Land surrounded by water on three sides','A type of mountain'],answer:2,subject:'My World'},
      {q:'What is a bay?',pic:'🌊',opts:['A large ocean','A body of water partially surrounded by land','A type of river','A mountain range'],answer:1,subject:'My World'},
      {q:'What is a rainbow?',pic:'🌈',opts:['Light bent by water droplets creating colors','A type of cloud','A type of storm','Colored lights in the sky'],answer:0,subject:'My World'},
      {q:'What is the sun made of?',pic:'☀️',opts:['Rock','Ice','Water','Burning gas'],answer:3,subject:'My World'},
      {q:'What gives plants their green color?',pic:'🌿',opts:['Water','Soil','Chlorophyll','Sunlight'],answer:2,subject:'Science'},
      {q:'What is the sun?',pic:'☀️',opts:['A planet','A star','A moon','An asteroid'],answer:1,subject:'Science'},
      {q:'What do animals need to survive?',pic:'🐾',opts:['Toys and games','TV and music','Books and pencils','Food water and shelter'],answer:3,subject:'Science'},
      {q:'What is a magnet?',pic:'🧲',opts:['A type of battery','An object that attracts iron and steel','A type of light','A kind of motor'],answer:1,subject:'Science'},
      {q:'What does a thermometer measure?',pic:'🌡️',opts:['Wind','Rain','Temperature','Pressure'],answer:2,subject:'Science'},
      {q:'What is gravity?',pic:'🍎',opts:['A force that pulls objects toward Earth','A type of magnet','A type of energy','A kind of weather'],answer:0,subject:'Science'},
      {q:'What is the job of the heart?',pic:'❤️',opts:['Help us think','Help us breathe','Help us see','Pump blood through the body'],answer:3,subject:'Science'},
      {q:'What do plants give off that we breathe?',pic:'🌿',opts:['Carbon dioxide','Nitrogen','Oxygen','Hydrogen'],answer:2,subject:'Science'},
      {q:'What is a shadow?',pic:'☀️',opts:['A reflection in water','Darkness formed when light is blocked','A type of cloud','Light bouncing off a mirror'],answer:1,subject:'Science'},
      {q:'What body part do we use to see?',pic:'👁️',opts:['Ears','Nose','Eyes','Tongue'],answer:2,subject:'Science'},
      {q:'What is the moon?',pic:'🌙',opts:['A star','A natural satellite of Earth','A planet','A comet'],answer:1,subject:'Science'},
      {q:'Which sense do we use to smell?',pic:'👃',opts:['Eyes','Ears','Nose','Tongue'],answer:2,subject:'Science'},
      {q:'What is matter?',pic:'🔬',opts:['Anything you can see','Anything that has mass and takes up space','Only solid things','Only liquids'],answer:1,subject:'Science'},
      {q:'What is air made mostly of?',pic:'💨',opts:['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'],answer:2,subject:'Science'},
      {q:'What kind of animal is a whale?',pic:'🐋',opts:['Fish','Reptile','Mammal','Amphibian'],answer:2,subject:'Science'},
      {q:'What is the nearest star to Earth?',pic:'☀️',opts:['Sirius','Alpha Centauri','The Sun','Polaris'],answer:2,subject:'Science'},
      {q:'What is a food chain?',pic:'🌱',opts:['A grocery store','A type of plant','A kind of fish','The order of who eats whom in nature'],answer:3,subject:'Science'},
      {q:'What do earthworms do for soil?',pic:'🪱',opts:['Nothing helpful','Break down organic matter making soil richer','Eat plant roots','Take away nutrients'],answer:1,subject:'Science'},
      {q:'What is a fossil?',pic:'🦕',opts:['A very old rock','Preserved remains of ancient organisms','A type of mineral','A volcanic rock'],answer:1,subject:'Science'},
      {q:'What is the purpose of a flower?',pic:'🌸',opts:['To look pretty','To make food','To attract pollinators and produce seeds','To absorb water'],answer:2,subject:'Science'},
      {q:'What do seeds need to sprout?',pic:'🌱',opts:['Sunlight only','Cold and darkness','Water and warmth','Wind and rain'],answer:2,subject:'Science'},
      {q:'Which is a renewable resource?',pic:'☀️',opts:['Coal','Oil','Natural gas','Sunlight'],answer:3,subject:'Science'},      {q:'What is the job of the stem in a plant?',pic:'🌱',opts:['Make food','Absorb water','Make seeds','Carry water and nutrients to leaves'],answer:3,subject:'Science'},
      {q:'What is a habitat?',pic:'🐾',opts:['A type of food','The natural home of an animal','A kind of plant','A weather pattern'],answer:1,subject:'Science'},
      {q:'What is air pollution?',pic:'🏭',opts:['Harmful substances in the air','Clean fresh air','Wind and rain','A type of weather'],answer:0,subject:'Science'},
      {q:'What do plants absorb through their roots?',pic:'🌱',opts:['Air','Water and nutrients from soil','Sunlight','Carbon dioxide'],answer:1,subject:'Science'},
      {q:'What is a producer in a food chain?',pic:'🌱',opts:['An animal that hunts','A plant that makes its own food','A decomposer','An omnivore'],answer:1,subject:'Science'},
      {q:'What is the purpose of leaves?',pic:'🍃',opts:['Absorb water','Make food using sunlight','Hold the plant up','Make seeds'],answer:1,subject:'Science'},
      {q:'What does a firefighter do?',pic:'🚒',opts:['Cook food','Teach school','Fix cars','Fight fires and save people'],answer:3,subject:'Social Studies'},
      {q:'What does a doctor do?',pic:'👩‍⚕️',opts:['Build roads','Fly planes','Help sick people','Teach school'],answer:2,subject:'Social Studies'},
      {q:'Who delivers our mail?',pic:'📬',opts:['Firefighter','Mail carrier','Doctor','Teacher'],answer:1,subject:'Social Studies'},
      {q:'What is a community?',pic:'🏘️',opts:['A group of people living and working together','A type of food','A kind of animal','A building'],answer:0,subject:'Social Studies'},
      {q:'What is a map?',pic:'🗺️',opts:['A picture of a person','A type of book','A drawing showing places and locations','A kind of graph'],answer:2,subject:'Social Studies'},
      {q:'What is the name of our country?',pic:'🇺🇸',opts:['Canada','Mexico','The United States of America','England'],answer:2,subject:'Social Studies'},
      {q:'What does a police officer do?',pic:'👮',opts:['Cook food','Help keep people safe and follow laws','Teach school','Fix cars'],answer:1,subject:'Social Studies'},
      {q:'What is responsibility?',pic:'✅',opts:['Letting others do everything','Doing your job and keeping promises','Never doing anything','Blaming others'],answer:1,subject:'Social Studies'},
      {q:'What is cooperation?',pic:'🤝',opts:['Working alone','Arguing with others','Following one person','Working together to reach a goal'],answer:3,subject:'Social Studies'},
      {q:'What is the American flag a symbol of?',pic:'🇺🇸',opts:['The president','The military','The United States of America','The government only'],answer:2,subject:'Social Studies'},
      {q:'What is fairness?',pic:'⚖️',opts:['Everyone getting the same thing','Everyone getting what they need to be equal','One person getting everything','Ignoring others needs'],answer:1,subject:'Social Studies'},
      {q:'What is a tradition?',pic:'🎉',opts:['A type of food','A custom passed down through generations','A kind of holiday','A school subject'],answer:1,subject:'Social Studies'},
      {q:'What do we call rules everyone must follow?',pic:'📋',opts:['Suggestions','Opinions','Laws','Guidelines'],answer:2,subject:'Social Studies'},
      {q:'What is recycling?',pic:'♻️',opts:['Throwing everything away','Turning old materials into new ones','Buying more things','Using things once'],answer:1,subject:'Social Studies'},
      {q:'What is a vote?',pic:'🗳️',opts:['A type of food','A way to make a choice by counting opinions','A kind of rule','A school subject'],answer:1,subject:'Social Studies'},
      {q:'What is a continent?',pic:'🌍',opts:['A small island','A large body of water','A very large landmass','A type of country'],answer:2,subject:'Social Studies'},
      {q:'How many continents are there?',pic:'🌎',opts:['5','6','7','8'],answer:2,subject:'Social Studies'},
      {q:'What is transportation?',pic:'🚗',opts:['A way to make food','A type of building','A kind of communication','Moving people or goods from place to place'],answer:3,subject:'Social Studies'},
      {q:'What is Thanksgiving about?',pic:'🦃',opts:['Giving candy to kids','Dressing in costumes','Being thankful and gathering with family','Celebrating a birthday'],answer:2,subject:'Social Studies'},
      {q:'What is a neighborhood?',pic:'🏘️',opts:['A large city','A small area where people live and share spaces','A country','A school district'],answer:1,subject:'Social Studies'},
      {q:'What is a library?',pic:'📚',opts:['A place to sleep','A place to borrow books and learn','A place to buy food','A hospital'],answer:1,subject:'Social Studies'},
      {q:'Who leads a city?',pic:'🏛️',opts:['President','Governor','Mayor','Principal'],answer:2,subject:'Social Studies'},
      {q:'What is Independence Day?',pic:'🎆',opts:['A day off school only','A holiday in winter','The day the USA declared independence from Britain','A type of birthday'],answer:2,subject:'Social Studies'},
      {q:'What is respect?',pic:'🤝',opts:['Ignoring others','Treating others the way you want to be treated','Always getting what you want','Being mean'],answer:1,subject:'Social Studies'},
      {q:'What does a nurse do?',pic:'👩‍⚕️',opts:['Care for sick and injured patients','Build roads','Teach school','Fix cars'],answer:0,subject:'Social Studies'},
      {q:'What is a citizen?',pic:'🏛️',opts:['A visitor to a country','A person who belongs to and has rights in a country','A type of leader','A government worker'],answer:1,subject:'Social Studies'},
      {q:'What is a school principal?',pic:'🏫',opts:['A type of rule','The leader of a school','A teacher','A school bus driver'],answer:1,subject:'Social Studies'},
    ],
    subjects_progress:['Counting','Letters','Colors & Shapes'],
    poses:[
      { emoji:'🌳', name:'Tree', tip:'Stand tall like a tree!', secs:30, level:'Easy' },
      { emoji:'🐍', name:'Snake', tip:'Lie flat and look up!', secs:30, level:'Easy' },
      { emoji:'🦋', name:'Butterfly', tip:'Flap your wings!', secs:45, level:'Easy' },
      { emoji:'🌙', name:'Moon', tip:'Stretch like the moon!', secs:30, level:'Easy' },
      { emoji:'⭐', name:'Star', tip:'Make a big star shape!', secs:30, level:'Easy' },
      { emoji:'🐱', name:'Cat Stretch', tip:'Arch your back like a cat!', secs:45, level:'Easy' },
      { emoji:'🏔', name:'Mountain', tip:'Stand tall and still like a mountain!', secs:30, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose", tip:'Fold down and rest like a sleeping seed!', secs:40, level:'Easy' },
      { emoji:'⚔', name:'Warrior I', tip:'Step forward and reach your arms up high!', secs:30, level:'Easy' },
      { emoji:'🧘', name:'Goddess Pose', tip:'Spread your feet wide and bend your knees — arms up!', secs:30, level:'Easy' },
      { emoji:'🍼', name:'Happy Baby', tip:'Lie on your back, grab your feet and smile!', secs:30, level:'Easy' },
    ],
    books:[
      { title:'Frog and Toad Together',          author:'A. Lobel',       pages:64,  read:0,  emoji:'🐸' },
      { title:'Harry the Dirty Dog',             author:'G. Zion',        pages:32,  read:0,  emoji:'🐶' },
      { title:'Fancy Nancy',                     author:'J. OConnor',     pages:32,  read:0,  emoji:'👑' },
      { title:'Enemy Pie',                       author:'D. Munson',      pages:40,  read:0,  emoji:'🥧' },
      { title:'The Rainbow Fish',                author:'M. Pfister',     pages:32,  read:0,  emoji:'🐟' },
      { title:'The Dot',                         author:'P. Reynolds',    pages:32,  read:0,  emoji:'🔵' },
      { title:'Ish',                             author:'P. Reynolds',    pages:32,  read:0,  emoji:'🎨' },
      { title:'Harry the Dirty Dog',             author:'G. Zion',        pages:32,  read:0,  emoji:'🐶' },
      { title:'Knuffle Bunny',                   author:'M. Willems',     pages:36,  read:0,  emoji:'🐰' },
      { title:'Alice in Wonderland',             author:'L. Carroll',     pages:96,  read:0,  emoji:'🐇' },
      { title:'The Wizard of Oz',                author:'L.F. Baum',      pages:120, read:0,  emoji:'🌈' },
      { title:'The Wind in the Willows',         author:'K. Grahame',     pages:100, read:0,  emoji:'🌿' },
    ],
    words:[
      { w:'Happy',   d:'Feeling really good and smiley! 😊' },
      { w:'Big',     d:'Very large in size! 🐘' },
      { w:'Soft',    d:'Gentle and fluffy to touch! 🐑' },
      { w:'Friend',  d:'Someone you like to play with! 🤝' },
      { w:'Bright',  d:'Full of light and color! ☀' },
    ],
  },


  1: {
    label: 'Grade 1', gradeNum: 1,
    ui: {
      subtitle:    "You're a star learner! Let's go! ⭐",
      streakTitle: 'Keep It Up!', streakSub: 'Every day makes you smarter!',
      tabLearn:'Learn', tabMove:'Move', tabRead:'Read', tabArt:'Art',
      subjectsTitle:'📚 Today\'s Subjects',
      quizTitle:'🌟 Quiz Time!',
      posesTitle:'🧘 Yoga Poses',
      breathSub:'Breathe in... breathe out...',
      timerTopLabel:'Pose Timer',
      bookshelfTitle:'📖 My Books',
    },
    subjects_progress:['Math','Language Arts','Writing'],
    poses:[
      { emoji:'🌳', name:'Tree Pose',     tip:'Stand tall on one foot like a tree!', secs:20, level:'Easy' },
      { emoji:'🐍', name:'Baby Cobra',    tip:'Lie on your tummy and push up gently!', secs:20, level:'Easy' },
      { emoji:'🐸', name:'Frog',          tip:'Squat down low and jump like a frog!', secs:20, level:'Easy' },
      { emoji:'🦋', name:'Butterfly',     tip:'Sit and gently flap your wings!', secs:30, level:'Easy' },
      { emoji:'🌙', name:'Moon Pose',     tip:'Stretch side to side like the moon!', secs:20, level:'Easy' },
      { emoji:'🏔', name:'Mountain Pose', tip:'Stand super tall like a mountain!', secs:15, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose",  tip:'Curl up small like a little seed!', secs:25, level:'Easy' },
      { emoji:'🍼', name:'Happy Baby',    tip:'Lie on your back and grab your feet!', secs:20, level:'Easy' },
      { emoji:'🦅', name:'Bird Dog',      tip:'Reach one arm and one leg out!', secs:20, level:'Medium' },
      { emoji:'🌟', name:'Star Pose',     tip:'Spread arms and legs wide like a star!', secs:20, level:'Easy' },
    ],
    books:[
      { title:'Harry the Dirty Dog',         author:'G. Zion',      pages:32,  read:0, emoji:'🐶' },
      { title:'Chicka Chicka Boom Boom',     author:'B. Martin Jr', pages:40,  read:0, emoji:'🌴' },
      { title:'Corduroy',                    author:'Don Freeman',  pages:32,  read:0, emoji:'🐻' },
      { title:'The Snowy Day',               author:'E.J. Keats',   pages:40,  read:0, emoji:'❄️' },
      { title:'Enemy Pie',                   author:'D. Munson',    pages:40,  read:0, emoji:'🥧' },
      { title:'The Dot',                     author:'P. Reynolds',  pages:32,  read:0, emoji:'🔵' },
      { title:'Knuffle Bunny',               author:'M. Willems',   pages:36,  read:0, emoji:'🐰' },
      { title:'The Rainbow Fish',            author:'M. Pfister',   pages:32,  read:0, emoji:'🐟' },
      { title:'Tops and Bottoms',            author:'J. Stevens',   pages:32,  read:0, emoji:'🐰' },
      { title:'Alice in Wonderland',         author:'L. Carroll',   pages:96,  read:0, emoji:'🐇' },
      { title:'The Wizard of Oz',            author:'L.F. Baum',    pages:120, read:0, emoji:'🌈' },
      { title:'Pinocchio',                   author:'C. Collodi',   pages:80,  read:0, emoji:'🪆' },
      { title:'Aesops Fables',               author:'Aesop',        pages:60,  read:0, emoji:'🦁' },
    ],
    questions:[
      {q:'What is 5 + 3?',opts:['7','8','9','6'],answer:1,subject:'Math'},
      {q:'What is 9 - 4?',opts:['4','6','3','5'],answer:3,subject:'Math'},
      {q:'What is 7 + 6?',opts:['12','13','14','11'],answer:1,subject:'Math'},
      {q:'What is 15 - 8?',opts:['7','6','8','9'],answer:0,subject:'Math'},
      {q:'What is 6 + 7?',opts:['12','14','13','11'],answer:2,subject:'Math'},
      {q:'What is 10 - 3?',opts:['6','7','8','9'],answer:1,subject:'Math'},
      {q:'What is 8 + 5?',opts:['12','13','14','11'],answer:1,subject:'Math'},
      {q:'What is 14 - 6?',opts:['7','9','6','8'],answer:3,subject:'Math'},
      {q:'What is 9 + 9?',opts:['16','17','18','15'],answer:2,subject:'Math'},
      {q:'What is 11 - 4?',opts:['6','7','8','5'],answer:1,subject:'Math'},
      {q:'What is 6 + 8?',opts:['14','13','15','12'],answer:0,subject:'Math'},
      {q:'What is 12 - 5?',opts:['6','8','9','7'],answer:3,subject:'Math'},
      {q:'Count by 2s: 2, 4, 6, 8, __?',opts:['9','10','11','12'],answer:1,subject:'Math'},
      {q:'Count by 5s: 5, 10, 15, __?',opts:['18','19','20','21'],answer:2,subject:'Math'},
      {q:'Count by 10s: 10, 20, 30, __?',opts:['35','40','45','50'],answer:1,subject:'Math'},
      {q:'How many ones in 13?',opts:['1','13','3','0'],answer:2,subject:'Math'},
      {q:'How many tens in 30?',opts:['0','3','30','13'],answer:1,subject:'Math'},
      {q:'What is 10 + 7?',opts:['17','16','18','15'],answer:0,subject:'Math'},
      {q:'What is 20 - 10?',opts:['5','15','20','10'],answer:3,subject:'Math'},
      {q:'Which number is bigger: 14 or 9?',opts:['9','14','Equal','Cannot tell'],answer:1,subject:'Math'},
      {q:'What is 4 + 4?',opts:['6','8','7','9'],answer:1,subject:'Math'},
      {q:'What is 16 - 7?',opts:['9','8','10','7'],answer:0,subject:'Math'},
      {q:'What comes after 19?',opts:['18','21','20','17'],answer:2,subject:'Math'},
      {q:'What is 3 + 9?',opts:['11','12','13','10'],answer:1,subject:'Math'},
      {q:'What is 18 - 9?',opts:['8','9','10','7'],answer:1,subject:'Math'},
      {q:'What is 7 + 7?',opts:['13','15','12','14'],answer:3,subject:'Math'},
      {q:'Which number is less: 11 or 17?',opts:['17','11','Equal','Cannot tell'],answer:1,subject:'Math'},
      {q:'What is 5 + 8?',opts:['13','12','14','11'],answer:0,subject:'Math'},
      {q:'What is 20 - 5?',opts:['14','16','15','13'],answer:2,subject:'Math'},
      {q:'What is 6 + 6?',opts:['11','12','13','10'],answer:1,subject:'Math'},
      {q:'What is a noun?',opts:['An action word','A describing word','A person place or thing','A connecting word'],answer:2,subject:'Language Arts'},
      {q:'Which word is a verb (action word)?',opts:['cat','happy','blue','run'],answer:3,subject:'Language Arts'},
      {q:'Which word rhymes with TREE?',opts:['far','see','big','run'],answer:1,subject:'Language Arts'},
      {q:'What is the opposite of BIG?',opts:['huge','tall','small','wide'],answer:2,subject:'Language Arts'},
      {q:'Which word starts with the letter P?',opts:['pig','apple','ball','dog'],answer:0,subject:'Language Arts'},
      {q:'Which word is a color?',opts:['run','jump','blue','tall'],answer:2,subject:'Language Arts'},
      {q:'What letter comes after M?',opts:['L','K','N','O'],answer:2,subject:'Language Arts'},
      {q:'How many letters in DOG?',opts:['2','3','4','5'],answer:1,subject:'Language Arts'},
      {q:'Which word is an animal?',opts:['run','happy','blue','dog'],answer:3,subject:'Language Arts'},
      {q:'What letter starts "sun"?',opts:['T','R','S','P'],answer:2,subject:'Language Arts'},
      {q:'Which word needs a capital letter?',opts:['cat','monday','apple','run'],answer:1,subject:'Writing'},
      {q:'Which sentence is correct?',opts:['i like dogs.','I like dogs','I like dogs.','i Like Dogs'],answer:2,subject:'Writing'},
      {q:'What mark ends a question?',opts:['?','.','!',','],answer:0,subject:'Writing'},
      {q:'Which is a complete sentence?',opts:['The big dog.','Ran fast.','The dog ran.','Fast!'],answer:2,subject:'Writing'},
      {q:'Which word is spelled correctly?',opts:['frend','freind','friand','friend'],answer:3,subject:'Writing'},
      {q:'Every sentence starts with a ...',opts:['period','capital letter','comma','question mark'],answer:1,subject:'Writing'},
      {q:'Which word is a noun?',opts:['run','jump','cat','fast'],answer:2,subject:'Writing'},
      {q:'Which word is an adjective?',opts:['dog','big','run','ate'],answer:1,subject:'Writing'},
    ],
    words:[
      { w:'Learn',   d:'To find out something new! 📚' },
      { w:'Grow',    d:'To get bigger and better! 🌱' },
      { w:'Try',     d:'To give something a go! 💪' },
      { w:'Friend',  d:'Someone you like to play with! 🤝' },
      { w:'Bright',  d:'Smart and full of light! ☀' },
    ],
  },

  2: {
    label: 'Grade 2', gradeNum: 2,
    ui: {
      subtitle:    "Let's tackle something new and exciting today! 🚀",
      streakTitle: 'Learning Streak!', streakSub: 'You showed up again -- keep going!',
      tabLearn:'Academics', tabMove:'Yoga', tabRead:'Reading', tabArt:'Art',
      subjectsTitle:'📖 Today\'s Subjects',
      quizTitle:'🧠 Quiz Challenge!',
      posesTitle:'🌟 Yoga Poses', breathSub:'Follow the circle -- breathe in as it grows, out as it shrinks.',
      bookshelfTitle:'📚 My Bookshelf', timerTopLabel:'Hold this pose'
    },
    subjects:[
      { icon:'🔢', title:'Math', desc:'Addition, subtraction, and number patterns!', badge:'3 activities', color:'mint' },
      { icon:'🔬', title:'Science', desc:'Animals, plants, weather and experiments!', badge:'Explore!', color:'coral' },
      { icon:'✏', title:'Writing', desc:'Write sentences with describing words!', badge:'1 assignment', color:'lavender' },
      { icon:'🌍', title:'Social Studies', desc:'Maps, communities, and our world!', badge:'Explore!', color:'sun' },
    ],
    questions:[
      {q:'What is 9 x 4?',opts:['32','34','36','38'],answer:2,subject:'Math'},
      {q:'What is 100 - 63?',opts:['37','27','47','57'],answer:0,subject:'Math'},
      {q:'What is 7 x 6?',opts:['40','44','42','46'],answer:2,subject:'Math'},
      {q:'What is 144 / 12?',opts:['10','11','14','12'],answer:3,subject:'Math'},
      {q:'Round 284 to nearest hundred',opts:['200','300','280','290'],answer:1,subject:'Math'},
      {q:'What is 8 x 9?',opts:['63','70','72','74'],answer:2,subject:'Math'},
      {q:'What is 200 + 350 + 75?',opts:['525','625','615','635'],answer:1,subject:'Math'},
      {q:'Which fraction equals one half?',opts:['2/4','1/3','2/3','3/4'],answer:0,subject:'Math'},
      {q:'What is 48 / 6?',opts:['6','7','8','9'],answer:2,subject:'Math'},
      {q:'What is 5 x 5 x 2?',opts:['40','45','50','55'],answer:2,subject:'Math'},
      {q:'What is 1000 - 378?',opts:['612','632','642','622'],answer:3,subject:'Math'},
      {q:'What is 11 x 11?',opts:['111','121','131','141'],answer:1,subject:'Math'},
      {q:'Perimeter of a 5x3 rectangle?',opts:['8','12','16','20'],answer:2,subject:'Math'},
      {q:'What is 450 / 9?',opts:['40','50','45','55'],answer:1,subject:'Math'},
      {q:'What is 6 x 7?',opts:['42','40','44','46'],answer:0,subject:'Math'},
      {q:'What is 250 + 175?',opts:['385','395','425','415'],answer:2,subject:'Math'},
      {q:'What is 3/4 of 40?',opts:['20','25','30','35'],answer:2,subject:'Math'},
      {q:'What is 72 / 8?',opts:['7','8','10','9'],answer:3,subject:'Math'},
      {q:'What is 13 x 4?',opts:['48','50','52','54'],answer:2,subject:'Math'},
      {q:'Area of a 6x4 rectangle?',opts:['20','24','22','26'],answer:1,subject:'Math'},
      {q:'What is 5 x 12?',opts:['55','65','60','70'],answer:2,subject:'Math'},
      {q:'What is 500 - 245?',opts:['245','255','265','275'],answer:1,subject:'Math'},
      {q:'What is 1/2 of 90?',opts:['40','43','45','47'],answer:2,subject:'Math'},
      {q:'Which is largest: 3/4 1/2 1/4 2/3?',opts:['3/4','1/2','1/4','2/3'],answer:0,subject:'Math'},
      {q:'What is 9 x 9?',opts:['72','78','84','81'],answer:3,subject:'Math'},
      {q:'What is 625 + 375?',opts:['900','950','1000','1050'],answer:2,subject:'Math'},
      {q:'What is 56 / 7?',opts:['6','8','7','9'],answer:1,subject:'Math'},
      {q:'What is 15 x 6?',opts:['80','85','90','95'],answer:2,subject:'Math'},
      {q:'Round 4562 to nearest thousand',opts:['4000','5000','4500','4600'],answer:0,subject:'Math'},
      {q:'What is 3 squared?',opts:['6','7','9','8'],answer:2,subject:'Math'},
      {q:'What is a mineral?',opts:['A type of plant','A natural solid substance with a definite structure','A liquid chemical','A type of energy'],answer:1,subject:'Science'},
      {q:'What is the hardest mineral?',opts:['Gold','Quartz','Marble','Diamond'],answer:3,subject:'Science'},
      {q:'What causes a tsunami?',opts:['Heavy rain','Strong winds','Underwater earthquake or landslide','Moon gravity'],answer:2,subject:'Science'},
      {q:'What are igneous rocks formed from?',opts:['Layers of sediment','Cooled lava or magma','Heat and pressure','Living organisms'],answer:1,subject:'Science'},
      {q:'What is condensation?',opts:['Water vapor turning to liquid water','Water turning to steam','Ice melting','Rain falling'],answer:0,subject:'Science'},
      {q:'What is the mass of an object?',opts:['How big it looks','How heavy it feels only','Its size','The amount of matter it contains'],answer:3,subject:'Science'},
      {q:'What is a producer in a food chain?',opts:['An animal that hunts','A plant that makes its own food','A decomposer','An omnivore'],answer:1,subject:'Science'},
      {q:'What is metamorphic rock?',opts:['Rock formed from lava','Rock formed from sediment','Rock changed by heat and pressure','Rock from volcanoes'],answer:2,subject:'Science'},
      {q:'What instrument measures air pressure?',opts:['Thermometer','Barometer','Ruler','Scale'],answer:1,subject:'Science'},
      {q:'What is a drought?',opts:['Too much rain','A type of storm','A long period of very little rainfall','A cold spell'],answer:2,subject:'Science'},
      {q:'What is a solid?',opts:['Has no definite shape','Has definite shape and volume','Takes the shape of its container','Has no definite volume'],answer:1,subject:'Science'},
      {q:'What is a gas?',opts:['Has no definite shape or volume','Has definite shape','Has definite volume','Only found in the atmosphere'],answer:0,subject:'Science'},
      {q:'What is evaporation?',opts:['Water freezing','Liquid water turning to water vapor','Rain falling','Condensation forming'],answer:1,subject:'Science'},
      {q:'What is a food web?',opts:['A spider web for food','A type of plant','A fishing net','Multiple interconnected food chains'],answer:3,subject:'Science'},
      {q:'What is a blizzard?',opts:['A heavy rainstorm','A violent snowstorm with strong winds','A type of hurricane','An ice storm'],answer:1,subject:'Science'},
      {q:'What is a flood?',opts:['An overflow of water covering normally dry land','Too little water','A type of drought','A cold snap'],answer:0,subject:'Science'},
      {q:'What is a liquid?',opts:['Has definite shape','Has no definite shape or volume','Has definite volume but no definite shape','Always flows upward'],answer:2,subject:'Science'},
      {q:'What is the water cycle?',opts:['Water in rivers only','Water freezing only','Drinking water systems','Continuous movement of water through evaporation condensation and precipitation'],answer:3,subject:'Science'},
      {q:'What is recycling?',opts:['Throwing everything away','Turning old materials into new ones','Buying more things','Using things once'],answer:1,subject:'Science'},
      {q:'What is erosion?',opts:['New rock forming','Volcanoes erupting','Wearing away of rock or soil by wind water or ice','Earthquakes happening'],answer:2,subject:'Science'},
      {q:'What is a prefix?',opts:['A word ending','Letters added to the beginning of a word','A root word','A type of noun'],answer:1,subject:'Language Arts'},
      {q:'What does the prefix re- mean?',opts:['Before','Against','Again','Without'],answer:2,subject:'Language Arts'},
      {q:'What is a suffix?',opts:['Letters added to the beginning','A root word','A type of verb','Letters added to the end of a word'],answer:3,subject:'Language Arts'},
      {q:'What is the plot of a story?',opts:['Where the story takes place','The main character','The sequence of events','The theme'],answer:2,subject:'Language Arts'},
      {q:'What is the setting?',opts:['Where and when a story takes place','The main character','The problem','The solution'],answer:0,subject:'Language Arts'},
      {q:'Which word is an adverb?',opts:['dog','quickly','blue','jump'],answer:1,subject:'Language Arts'},
      {q:'What does the suffix -less mean?',opts:['Full of','Before','Without','Again'],answer:2,subject:'Language Arts'},
      {q:'What is the climax of a story?',opts:['The beginning','The most exciting or important moment','The ending','The setting'],answer:1,subject:'Language Arts'},
      {q:'What is a simile?',opts:['A comparison using like or as','A direct comparison','A type of noun','A verb tense'],answer:0,subject:'Language Arts'},
      {q:'Which is spelled correctly?',opts:['recieve','recive','reciive','receive'],answer:3,subject:'Language Arts'},
      {q:'What is dialogue?',opts:['The setting description','Conversation between characters shown with quotation marks','The plot summary','The theme'],answer:1,subject:'Language Arts'},
      {q:'What is personification?',opts:['Describing a setting','Giving human qualities to non-human things','Comparing two things','Repeating sounds'],answer:1,subject:'Language Arts'},
      {q:'What is a metaphor?',opts:['Comparison using like or as','A type of verb','A direct comparison without like or as','A punctuation mark'],answer:2,subject:'Language Arts'},
      {q:'What is a paragraph?',opts:['A single sentence','A group of sentences about one main idea','A type of poem','A chapter'],answer:1,subject:'Language Arts'},
      {q:'What is alliteration?',opts:['Repetition of the same beginning consonant sound','Rhyming words','A type of metaphor','Exaggeration'],answer:0,subject:'Language Arts'},
      {q:'What is the theme of a story?',opts:['The main character','The central message or lesson','Where the story takes place','The problem'],answer:1,subject:'Language Arts'},
      {q:'What is point of view?',opts:['The setting','The authors age','The problem','The perspective from which a story is told'],answer:3,subject:'Language Arts'},
      {q:'What is a homophone?',opts:['A type of metaphor','Words that sound the same but have different meanings and spellings','A synonym','An antonym'],answer:1,subject:'Language Arts'},
      {q:'What is foreshadowing?',opts:['Hinting at future events in a story','Explaining the past','Describing the setting','Ending the story'],answer:0,subject:'Language Arts'},
      {q:'What is a conjunction?',opts:['A naming word','An action word','A connecting word like and but or so','A describing word'],answer:2,subject:'Language Arts'},
      {q:'What is a topic sentence?',opts:['The last sentence','The sentence that states the main idea of a paragraph','Any sentence','A question'],answer:1,subject:'Language Arts'},
      {q:'What is a democracy?',opts:['Rule by one person','A system where citizens vote for leaders','Rule by a king','A system with no laws'],answer:1,subject:'Social Studies'},
      {q:'What is the purpose of government?',opts:['To control everyone','To collect all money','To run businesses','To make and enforce laws and protect citizens'],answer:3,subject:'Social Studies'},
      {q:'Why should we treat people from different backgrounds with respect?',pic:'🌈',opts:['We should not','Because all people have feelings and deserve kindness','Only some people','Only adults'],answer:1,subject:'Social Studies'},
      {q:'What is diversity?',pic:'🌍',opts:['Having many different kinds of people, cultures, and ideas','Everyone being the same','A type of food','A school subject'],answer:0,subject:'Social Studies'},
      {q:'What can you do if you see someone being left out at recess?',pic:'🏃',opts:['Laugh at them','Join in leaving them out','Invite them to play!','Ignore it'],answer:2,subject:'Social Studies'},
      {q:'Which word means treating everyone equally and with kindness?',pic:'⚖️',opts:['Bully','Selfishness','Rudeness','Fairness'],answer:3,subject:'Social Studies'},
      {q:'How can you show respect for a classmate who celebrates different holidays?',pic:'🎄',opts:['Tell them their holidays are wrong','Ask them to tell you about their holidays','Ignore their holidays','Make fun of them'],answer:1,subject:'Social Studies'},
      {q:'Why is it important to listen when someone speaks a different language?',pic:'💬',opts:['It is not important','It shows kindness and respect even when you do not understand every word','It is rude','You should walk away'],answer:1,subject:'Social Studies'},
      {q:'What is an economy?',opts:['The weather system','A type of government','How money goods and services are produced and used','A landform'],answer:2,subject:'Social Studies'},
      {q:'What is a consumer?',opts:['Someone who makes goods','Someone who buys or uses goods and services','A type of government worker','A type of business'],answer:1,subject:'Social Studies'},
      {q:'What is a producer?',opts:['A person or business that makes goods or provides services','Someone who buys goods','A type of consumer','A government official'],answer:0,subject:'Social Studies'},
      {q:'What is a constitution?',opts:['A type of tax','A kind of map','A trade agreement','A set of basic laws and principles that govern a country'],answer:3,subject:'Social Studies'},
      {q:'What does the president do?',opts:['Makes all laws alone','Leads the executive branch and enforces laws','Interprets laws','Collects taxes only'],answer:1,subject:'Social Studies'},
      {q:'What is immigration?',opts:['Moving within your own country','Moving to a new country to live','Going on vacation','Starting a business abroad'],answer:1,subject:'Social Studies'},
      {q:'What is a globe?',opts:['A type of map','A flat map','A spherical model of Earth','A type of atlas'],answer:2,subject:'Social Studies'},
      {q:'What is latitude?',opts:['Lines running north-south on a map','Lines running east-west measuring distance from the equator','The height of a place','The timezone of a place'],answer:1,subject:'Social Studies'},
      {q:'What is a natural resource?',opts:['Materials found in nature that people use','Something made in a factory','A type of machine','A manufactured product'],answer:0,subject:'Social Studies'},
      {q:'What is trade?',opts:['Giving things away free','A type of tax','A government service','Exchanging goods or services between people or countries'],answer:3,subject:'Social Studies'},
      {q:'What is scarcity?',opts:['Having too much of something','When there is not enough of something to meet all needs and wants','A type of trade','A kind of tax'],answer:1,subject:'Social Studies'},
      {q:'What is opportunity cost?',opts:['The price of a product','What you give up when you choose one thing over another','A type of tax','The cost of transportation'],answer:1,subject:'Social Studies'},
      {q:'What is the difference between urban and rural?',opts:['They are the same','Rural means city urban means countryside','Urban means city rural means countryside','Urban is always larger'],answer:2,subject:'Social Studies'},
      {q:'What is a landmark?',opts:['A road sign','A well-known place or feature used for navigation or as a symbol','A type of map','A school building'],answer:1,subject:'Social Studies'},
      {q:'What is a primary source?',opts:['A firsthand account from someone who experienced an event','A textbook','An encyclopedia','A news article'],answer:0,subject:'Social Studies'},
      {q:'How can learning about other cultures make our lives better?',pic:'🌎',opts:['It cannot','It wastes time','It is confusing','It helps us understand and appreciate different people'],answer:3,subject:'Social Studies'},
      {q:'What does it mean to have empathy?',pic:'💛',opts:['To ignore others','To understand and share the feelings of others','To always be right','To be loud'],answer:1,subject:'Social Studies'},
      {q:'What is stereotyping?',pic:'🚫',opts:['Learning about others','Making fair judgments','Assuming all people in a group are the same when they are not','Treating everyone as an individual'],answer:2,subject:'Social Studies'},
      {q:'How can you be an upstander when someone is being bullied?',pic:'✊',opts:['Ignore what is happening','Speak up, get help, and support the person being bullied','Join in the bullying','Walk away quickly'],answer:1,subject:'Social Studies'},
      {q:'What do all communities around the world have in common?',pic:'🌍',opts:['Different needs but all people need shelter, food, and connection','The same food and language','The same traditions','The same government'],answer:0,subject:'Social Studies'},
      {q:'Why is it wrong to judge someone based only on how they look?',pic:'🧠',opts:['It is not wrong','Looks tell us everything','People are more than their appearance and everyone deserves to be known as an individual','Only looks matter'],answer:2,subject:'Social Studies'},
      {q:'What is supply and demand?',opts:['A type of store','A government policy','The economic relationship between how much is available and how much people want','A type of tax'],answer:2,subject:'Social Studies'},
      {q:'What is a budget?',opts:['A type of tax','A plan for how to spend money','A bank account','A type of investment'],answer:1,subject:'Social Studies'},
      {q:'What is the equator?',opts:['An imaginary line dividing Earth into Northern and Southern hemispheres','A line dividing east and west','The Prime Meridian','The North Pole'],answer:0,subject:'Social Studies'},
    ],
    subjects_progress:['Math','Science','Social Studies','Writing'],
    poses:[
      { emoji:'🏔', name:'Mountain Pose', tip:'Stand tall, feet together, arms stretched high!', secs:60, level:'Easy' },
      { emoji:'🌳', name:'Tree Pose', tip:'Balance on one foot and breathe for 1 minute!', secs:60, level:'Easy' },
      { emoji:'⭐', name:'Star', tip:'Wide stance, arms out — feel the whole body stretch!', secs:60, level:'Easy' },
      { emoji:'🦋', name:'Butterfly', tip:'Sit tall, hold your feet and gently flap your knees!', secs:90, level:'Easy' },
      { emoji:'🐍', name:'Cobra Pose', tip:'Lie flat, press up with arms and open your chest!', secs:60, level:'Easy' },
      { emoji:'🐱', name:'Cat-Cow', tip:'On all fours — arch up like a cat, then dip like a cow!', secs:90, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose", tip:'Sit back on heels, arms stretched forward — breathe and rest!', secs:60, level:'Easy' },
      { emoji:'⚔', name:'Warrior I', tip:'Lunge one foot forward and reach both arms up high!', secs:90, level:'Medium' },
      { emoji:'⚔', name:'Warrior II', tip:'Arms stretched wide, look over your front hand!', secs:90, level:'Medium' },
      { emoji:'🧱', name:'Plank Pose', tip:'Hands down, body straight like a board — hold it!', secs:30, level:'Medium' },
      { emoji:'🐕', name:'Three-Legged Dog', tip:'Downward dog then kick one leg up high!', secs:45, level:'Medium' },
    ,
      {q:'Which word should have a capital letter?',opts:['cat','apple','run','monday'],answer:3,subject:'Writing'},
      {q:'Which sentence ends correctly?',opts:['I like cats','I like cats.','i like cats','i like cats.'],answer:1,subject:'Writing'},
      {q:'What punctuation ends a question?',opts:['.','!','?',','],answer:2,subject:'Writing'},
      {q:'Which is a complete sentence?',opts:['The big dog.','Ran fast.','The dog ran fast.','Fast dog running.'],answer:2,subject:'Writing'},
      {q:'Which word is spelled correctly?',opts:['frend','friend','friand','freind'],answer:1,subject:'Writing'},
      {q:'What goes at the START of every sentence?',opts:['A capital letter','A period','A comma','An exclamation mark'],answer:0,subject:'Writing'},
      {q:'Which is a naming word (noun)?',opts:['run','jump','cat','fast'],answer:2,subject:'Writing'},
      {q:'Which word describes (adjective)?',opts:['dog','run','ate','big'],answer:3,subject:'Writing'}],
    books:[
      { title:'Thank You Mr Falker',             author:'P. Polacco',     pages:48,  read:0,  emoji:'📚' },
      { title:'Each Kindness',                   author:'J. Woodson',     pages:32,  read:0,  emoji:'💙' },
      { title:'Stellaluna',                      author:'J. Cannon',      pages:48,  read:0,  emoji:'🦇' },
      { title:'Crown',                           author:'D. Barnes',      pages:48,  read:0,  emoji:'👑' },
      { title:'Separate is Never Equal',         author:'D. Tonatiuh',    pages:40,  read:0,  emoji:'✊' },
      { title:'Tops and Bottoms',                author:'J. Stevens',     pages:40,  read:0,  emoji:'🐰' },
      { title:'Treasure Island',                 author:'R.L. Stevenson', pages:160, read:0,  emoji:'🏴‍☠️' },
      { title:'Black Beauty',                    author:'A. Sewell',      pages:160, read:0,  emoji:'🐴' },
      { title:'The Secret Garden',               author:'F.H. Burnett',   pages:160, read:0,  emoji:'🌺' },
      { title:'Little Women',                    author:'L.M. Alcott',    pages:200, read:0,  emoji:'📖' },
      { title:'A Little Princess',               author:'F.H. Burnett',   pages:150, read:0,  emoji:'👸' },
      { title:'Robinson Crusoe',                 author:'D. Defoe',       pages:200, read:0,  emoji:'🏝️' },
    ],
    words:[
      { w:'Curious',    d:'Wanting to know or learn something.' },
      { w:'Enormous',   d:'Really very large in size.' },
      { w:'Patient',    d:'Waiting calmly without getting upset.' },
      { w:'Clever',     d:'Quick to understand or learn things.' },
      { w:'Determined', d:'Decided firmly to do something.' },
    ],
  },

  3: {
    label: 'Grade 3', gradeNum: 3,
    ui: {
      subtitle:    "Ready to challenge yourself today? Let's go! 💪",
      streakTitle: 'Learning Streak!', streakSub: 'You\'re building great habits!',
      tabLearn:'Academics', tabMove:'Yoga', tabRead:'Reading', tabArt:'Art',
      subjectsTitle:'📖 Today\'s Subjects',
      quizTitle:'🧠 Quick Quiz',
      posesTitle:'🌟 Yoga Poses', breathSub:'Follow the circle. Breathe in when it grows, out when it shrinks.',
      bookshelfTitle:'📚 My Bookshelf', timerTopLabel:'Current Pose'
    },
    subjects:[
      { icon:'🔢', title:'Mathematics', desc:'Multiplication, division, and fractions!', badge:'3 lessons left', color:'mint' },
      { icon:'🔬', title:'Science', desc:'States of matter, ecosystems, and experiments!', badge:'✅ Completed!', color:'coral' },
      { icon:'✍', title:'Language Arts', desc:'Paragraphs, punctuation, and vocabulary!', badge:'2 exercises left', color:'lavender' },
      { icon:'🌍', title:'Social Studies', desc:'U.S. regions, maps, and communities!', badge:'New lesson!', color:'sun' },
    ],
    questions:[
      {q:'What is 9 x 9?',opts:['72','78','81','84'],answer:2,subject:'Math'},
      {q:'What is 256 + 348?',opts:['594','614','604','624'],answer:2,subject:'Math'},
      {q:'What is 7 x 7?',opts:['42','49','46','52'],answer:1,subject:'Math'},
      {q:'What is 90 / 9?',opts:['8','9','10','11'],answer:2,subject:'Math'},
      {q:'What is 1000 - 645?',opts:['345','355','365','375'],answer:1,subject:'Math'},
      {q:'What is 6 x 8?',opts:['42','46','52','48'],answer:3,subject:'Math'},
      {q:'What is 1/2 of 80?',opts:['30','35','40','45'],answer:2,subject:'Math'},
      {q:'What is 125 x 4?',opts:['500','400','450','550'],answer:0,subject:'Math'},
      {q:'Area of a 9x7 rectangle?',opts:['54','61','63','72'],answer:2,subject:'Math'},
      {q:'What is 2000 - 875?',opts:['1025','1075','1125','1175'],answer:2,subject:'Math'},
      {q:'What is 8 x 8?',opts:['56','60','64','68'],answer:2,subject:'Math'},
      {q:'What is 3/4 of 120?',opts:['80','90','85','95'],answer:1,subject:'Math'},
      {q:'Round 4672 to nearest thousand',opts:['4000','5000','4600','4700'],answer:0,subject:'Math'},
      {q:'What is 144 / 12?',opts:['10','11','12','14'],answer:2,subject:'Math'},
      {q:'What is 25 x 8?',opts:['180','190','210','200'],answer:3,subject:'Math'},
      {q:'What is 9 x 6?',opts:['52','54','56','58'],answer:1,subject:'Math'},
      {q:'What is 450 + 550?',opts:['900','950','1000','1050'],answer:2,subject:'Math'},
      {q:'What is 84 / 7?',opts:['12','10','11','13'],answer:0,subject:'Math'},
      {q:'What is 15 x 15?',opts:['205','215','225','235'],answer:2,subject:'Math'},
      {q:'Area of a 12x5 rectangle?',opts:['50','55','65','60'],answer:3,subject:'Math'},
      {q:'What is 7 x 9?',opts:['58','61','63','65'],answer:2,subject:'Math'},
      {q:'What is 5/6 of 30?',opts:['20','22','25','24'],answer:2,subject:'Math'},
      {q:'What is 1800 / 6?',opts:['250','300','275','325'],answer:1,subject:'Math'},
      {q:'What is 13 x 7?',opts:['85','88','91','94'],answer:2,subject:'Math'},
      {q:'What is 2/3 of 60?',opts:['30','35','45','40'],answer:3,subject:'Math'},
      {q:'Perimeter of a 7x7 square?',opts:['21','24','28','35'],answer:2,subject:'Math'},
      {q:'What is 11 x 9?',opts:['99','95','97','101'],answer:0,subject:'Math'},
      {q:'What is 540 / 6?',opts:['80','85','90','95'],answer:2,subject:'Math'},
      {q:'What is 12 x 12?',opts:['132','140','144','148'],answer:2,subject:'Math'},
      {q:'What is 3/4 of 200?',opts:['130','140','150','160'],answer:2,subject:'Math'},
      {q:'What is an electric circuit?',opts:['A type of battery','A kind of wire','A power source','A path for electricity to flow through'],answer:3,subject:'Science'},
      {q:'What is a conductor?',opts:['A material that blocks electricity','A material that allows electricity to flow through it','A type of battery','A kind of switch'],answer:1,subject:'Science'},
      {q:'What is an insulator?',opts:['A material that allows electricity to flow','A material that blocks electricity','A type of circuit','A kind of magnet'],answer:1,subject:'Science'},
      {q:'What is the closest planet to the Sun?',opts:['Earth','Venus','Mercury','Mars'],answer:2,subject:'Science'},
      {q:'What causes the seasons on Earth?',opts:['Earth moving closer to the sun','The moon blocking sunlight','Clouds covering the sun','The tilt of Earths axis as it orbits'],answer:3,subject:'Science'},
      {q:'What is the Milky Way?',opts:['A type of star','Our galaxy containing billions of stars including the Sun','A type of planet','A nebula'],answer:1,subject:'Science'},
      {q:'What is humidity?',opts:['The amount of water vapor in the air','Wind speed','Air pressure','Temperature'],answer:0,subject:'Science'},
      {q:'What is erosion?',opts:['New rock forming','Volcanoes erupting','Wearing away of rock or soil by wind water or ice','Earthquakes happening'],answer:2,subject:'Science'},
      {q:'What causes lightning?',opts:['Rain hitting the ground','A buildup and discharge of electrical energy in clouds','Wind colliding','Sun heating clouds'],answer:1,subject:'Science'},
      {q:'What is an orbit?',opts:['A type of planet','The curved path of an object around another in space','A star explosion','A type of moon'],answer:1,subject:'Science'},
      {q:'What is a parallel circuit?',opts:['One path for electricity','A type of battery','A short circuit','Multiple paths so if one breaks others still work'],answer:3,subject:'Science'},
      {q:'What is the difference between rotation and revolution?',opts:['They are the same','Rotation is spinning on axis revolution is orbiting another body','Revolution is spinning rotation is orbiting','Both mean spinning'],answer:1,subject:'Science'},
      {q:'What is a meteor?',opts:['A rock that falls through Earths atmosphere','A planet','A type of comet','A moon'],answer:0,subject:'Science'},
      {q:'What is the difference between weather and climate?',opts:['They are the same','Climate is daily weather is yearly','Weather is daily climate is long-term patterns','Weather only means temperature'],answer:2,subject:'Science'},
      {q:'What is a fossil?',opts:['A very old rock','Preserved remains of ancient organisms','A type of mineral','A volcanic rock'],answer:1,subject:'Science'},
      {q:'What is a food web?',opts:['A spider web for food','Multiple interconnected food chains in an ecosystem','A type of plant','A fishing net'],answer:1,subject:'Science'},
      {q:'What is condensation?',opts:['Water turning to steam','Ice melting','Rain falling','Water vapor turning to liquid water'],answer:3,subject:'Science'},
      {q:'What are igneous rocks?',opts:['Rocks formed from layers','Rocks formed from cooled lava or magma','Rocks changed by heat and pressure','Rocks from fossils'],answer:1,subject:'Science'},
      {q:'What is a drought?',opts:['A long period of very little rainfall','Too much rain','A type of storm','A cold spell'],answer:0,subject:'Science'},
      {q:'What is the water cycle?',opts:['Water in rivers only','Continuous movement of water through evaporation condensation and precipitation','Water freezing only','Drinking water systems'],answer:1,subject:'Science'},
      {q:'What is alliteration?',opts:['Rhyming words','Repetition of the same beginning consonant sound','A type of metaphor','Exaggeration'],answer:1,subject:'Language Arts'},
      {q:'What is onomatopoeia?',opts:['A type of noun','Words that imitate sounds like buzz or crash','A type of metaphor','A rhyming scheme'],answer:1,subject:'Language Arts'},
      {q:'What is the theme of a story?',opts:['The main character','Where the story takes place','The central message or lesson','The problem'],answer:2,subject:'Language Arts'},
      {q:'What is foreshadowing?',opts:['Explaining the past','Describing the setting','Hinting at future events in a story','Ending the story'],answer:2,subject:'Language Arts'},
      {q:'What is a conjunction?',opts:['A naming word','A connecting word like and but or so','An action word','A describing word'],answer:1,subject:'Language Arts'},
      {q:'What is point of view?',opts:['The perspective from which a story is told','The setting of a story','The authors age','The problem in the story'],answer:0,subject:'Language Arts'},
      {q:'What is first person point of view?',opts:['Using he she they','Using you your','Using one and ones','Using I me my we'],answer:3,subject:'Language Arts'},
      {q:'What is a homophone?',opts:['A type of metaphor','Words that sound the same but have different meanings and spellings','A synonym','An antonym'],answer:1,subject:'Language Arts'},
      {q:'What is a topic sentence?',opts:['The last sentence of a paragraph','The sentence that states the main idea of a paragraph','Any sentence','A question'],answer:1,subject:'Language Arts'},
      {q:'What are supporting details?',opts:['The main idea','The conclusion','Facts and examples that support the main idea','The title'],answer:2,subject:'Language Arts'},
      {q:'What is an idiom?',opts:['A literal expression','A phrase whose meaning is different from the literal words','A type of poem','A compound word'],answer:1,subject:'Language Arts'},
      {q:'What is a hyperbole?',opts:['An extreme exaggeration used for effect','A comparison using like or as','A type of noun','A personification'],answer:0,subject:'Language Arts'},
      {q:'What is imagery?',opts:['Only visual descriptions','A type of plot','A story structure','Descriptive language that appeals to the senses to create mental pictures'],answer:3,subject:'Language Arts'},
      {q:'What is the difference between fiction and nonfiction?',opts:['Fiction is shorter','Fiction is made up nonfiction is based on real facts','Nonfiction has pictures','Fiction is harder to read'],answer:1,subject:'Language Arts'},
      {q:'What is personification?',opts:['Describing a setting','Giving human qualities to non-human things','Comparing two things','Repeating sounds'],answer:1,subject:'Language Arts'},
      {q:'What is a simile?',opts:['A direct comparison','A type of noun','A comparison using like or as','A verb tense'],answer:2,subject:'Language Arts'},
      {q:'What is a metaphor?',opts:['Comparison using like or as','A direct comparison without like or as','A type of verb','A punctuation mark'],answer:1,subject:'Language Arts'},
      {q:'What is plot?',opts:['Where it takes place','The main character','The sequence of events','The theme'],answer:2,subject:'Language Arts'},
      {q:'What is a run-on sentence?',opts:['Two or more independent clauses joined without proper punctuation','A sentence that is too long','A sentence with no verb','A question'],answer:0,subject:'Language Arts'},
      {q:'What is the concluding sentence for?',opts:['To introduce a new topic','To ask a question','To list facts','To wrap up the main idea of a paragraph'],answer:3,subject:'Language Arts'},
      {q:'What is the Bill of Rights?',opts:['A shopping list','The first 10 amendments protecting citizens rights','A type of law','A document about taxes'],answer:1,subject:'Social Studies'},
      {q:'What is the role of the judicial branch?',opts:['Makes laws','Enforces laws','Interprets laws and the Constitution','Collects taxes'],answer:2,subject:'Social Studies'},
      {q:'What is the role of the legislative branch?',opts:['Enforces laws','Makes laws','Interprets laws','Leads the military'],answer:1,subject:'Social Studies'},
      {q:'What is the role of the executive branch?',opts:['Makes laws','Interprets laws','Controls the courts','Enforces laws'],answer:3,subject:'Social Studies'},
      {q:'What are the two houses of Congress?',opts:['President and Vice President','Senate and House of Representatives','Supreme Court and Congress','Federal and State'],answer:1,subject:'Social Studies'},
      {q:'When was the Declaration of Independence signed?',opts:['1776','1765','1787','1800'],answer:0,subject:'Social Studies'},
      {q:'What is the Constitution?',opts:['A list of laws','A type of treaty','The supreme law of the United States','A government building'],answer:2,subject:'Social Studies'},
      {q:'What is longitude?',opts:['Lines running east-west','Lines running north-south measuring distance from the Prime Meridian','The height of a place','The temperature of a region'],answer:1,subject:'Social Studies'},
      {q:'Where is the Prime Meridian?',opts:['At the equator','At 0 degrees longitude running through Greenwich England','At the North Pole','In Washington DC'],answer:1,subject:'Social Studies'},
      {q:'What is supply and demand?',opts:['A type of store','A government policy','A type of tax','The economic relationship between how much is available and how much people want'],answer:3,subject:'Social Studies'},
      {q:'What is the difference between needs and wants?',opts:['They are the same','Needs are essential for survival wants are extras','Wants are more important','Needs cost more'],answer:1,subject:'Social Studies'},
      {q:'What is a budget?',opts:['A type of tax','A plan for how to spend money','A bank account','A type of investment'],answer:1,subject:'Social Studies'},
      {q:'Who wrote the Declaration of Independence?',opts:['George Washington','Benjamin Franklin','Thomas Jefferson','John Adams'],answer:2,subject:'Social Studies'},
      {q:'What was the Boston Tea Party?',opts:['A celebration of tea','A treaty signing','A protest against British taxes on tea in 1773','A type of holiday'],answer:2,subject:'Social Studies'},
      {q:'What is civic responsibility?',opts:['Only paying taxes','The duties and responsibilities of citizens like voting obeying laws and participating in community','Only voting','Only serving in the military'],answer:1,subject:'Social Studies'},
      {q:'What is the Pledge of Allegiance?',opts:['A promise of loyalty to the American flag and the country','A type of law','A song','A type of prayer'],answer:0,subject:'Social Studies'},
      {q:'What is federalism?',opts:['A type of democracy','A type of monarchy','A one-party system','A system where power is divided between national and state governments'],answer:3,subject:'Social Studies'},
      {q:'What is the Declaration of Independence?',opts:['A tax document','A document declaring the colonies free from British rule','A type of constitution','A trade agreement'],answer:1,subject:'Social Studies'},
      {q:'What is the purpose of the Supreme Court?',opts:['To make laws','To interpret laws and determine if they are constitutional','To enforce laws','To elect the president'],answer:1,subject:'Social Studies'},
      {q:'How many amendments are in the Bill of Rights?',opts:['5','8','10','12'],answer:2,subject:'Social Studies'},
      {q:'What is natural resources?',opts:['Materials from nature that people use like water trees and minerals','Things made in factories','A type of manufactured good','Only water and air'],answer:0,subject:'Social Studies'},
    ],
    subjects_progress:['Mathematics','Science','Social Studies','Language Arts'],
    poses:[
      { emoji:'🌳', name:'Tree Pose',     tip:'Balance & breathe for 2 minutes!', secs:120, level:'Easy' },
      { emoji:'🦋', name:'Butterfly',     tip:'Gentle hip stretch -- sit tall!', secs:120, level:'Easy' },
      { emoji:'🏔', name:'Mountain Pose', tip:'Ground your feet, reach tall!', secs:150, level:'Easy' },
      { emoji:'🐍', name:'Cobra Pose',    tip:'Strengthen your back muscles!', secs:90,  level:'Easy' },
      { emoji:'⚔', name:'Warrior I',     tip:'Build leg strength and focus!', secs:120, level:'Medium' },
      { emoji:'⚔', name:'Warrior II',    tip:'Arms out wide, hold steady!', secs:120, level:'Medium' },
      { emoji:'🧘', name:'Goddess Pose', tip:'Wide powerful stance — bend your knees and breathe!', secs:90, level:'Medium' },
      { emoji:'🦅', name:'Eagle Pose', tip:'Wrap arms and legs -- find your center!', secs:90, level:'Medium' },
      { emoji:'🌉', name:'Bridge Pose', tip:'Strong hips lifted -- breathe deeply!', secs:90, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose", tip:'Rest and reset between poses.', secs:60, level:'Easy' },
      { emoji:'🧱', name:'Plank Pose', tip:'Hold a strong plank — breathe and stay steady!', secs:45, level:'Medium' },
      { emoji:'🐕', name:'Three-Legged Dog', tip:'From downward dog, lift one leg high and hold!', secs:60, level:'Medium' },
      { emoji:'⚖️', name:'Warrior III', tip:'Balance on one leg, lean forward, arms like wings!', secs:60, level:'Medium' },
    ],
    books:[
      { title:'Crown',                           author:'D. Barnes',      pages:48,  read:0,  emoji:'👑' },
      { title:'Each Kindness',                   author:'J. Woodson',     pages:32,  read:0,  emoji:'💙' },
      { title:'Thank You Mr Falker',             author:'P. Polacco',     pages:48,  read:0,  emoji:'📚' },
      { title:'Treasure Island',                 author:'R.L. Stevenson', pages:160, read:0,  emoji:'🏴‍☠️' },
      { title:'The Secret Garden',               author:'F.H. Burnett',   pages:160, read:0,  emoji:'🌺' },
      { title:'Black Beauty',                    author:'A. Sewell',      pages:160, read:0,  emoji:'🐴' },
      { title:'Little Women',                    author:'L.M. Alcott',    pages:200, read:0,  emoji:'📖' },
      { title:'Robinson Crusoe',                 author:'D. Defoe',       pages:200, read:0,  emoji:'🏝️' },
      { title:'Around the World in 80 Days',     author:'J. Verne',       pages:180, read:0,  emoji:'🌍' },
      { title:'A Little Princess',               author:'F.H. Burnett',   pages:150, read:0,  emoji:'👸' },
      { title:'Alice in Wonderland',             author:'L. Carroll',     pages:96,  read:0,  emoji:'🐇' },
      { title:'The Wizard of Oz',                author:'L.F. Baum',      pages:120, read:0,  emoji:'🌈' },
    ],
    words:[
      { w:'Perseverance', d:'Continuing to work hard even when things are difficult.' },
      { w:'Curiosity',    d:'A strong desire to learn and understand new things.' },
      { w:'Resilience',   d:'The ability to bounce back after something hard.' },
      { w:'Magnificent',  d:'Extremely beautiful or impressive.' },
      { w:'Empathy',      d:'Understanding and sharing the feelings of others.' },
    ],
  },

  4: {
    label: 'Grade 4', gradeNum: 4,
    ui: {
      subtitle:    "Let's push your learning further today! 🚀",
      streakTitle: 'Great Streak!', streakSub: 'Consistency is a superpower!',
      tabLearn:'Academics', tabMove:'Yoga', tabRead:'Reading', tabArt:'Art',
      subjectsTitle:'📖 Today\'s Subjects',
      quizTitle:'🧠 Quick Quiz',
      posesTitle:'🌟 Yoga Poses', breathSub:'Follow the circle. In when it grows, out when it shrinks.',
      bookshelfTitle:'📚 My Bookshelf', timerTopLabel:'Current Pose'
    },
    subjects:[
      { icon:'🔢', title:'Mathematics', desc:'Multi-digit multiplication, fractions, and decimals!', badge:'3 lessons left', color:'mint' },
      { icon:'🔬', title:'Science', desc:'Energy, ecosystems, and the scientific method!', badge:'2 lessons left', color:'coral' },
      { icon:'✍', title:'Language Arts', desc:'Essay writing, figurative language, and grammar!', badge:'1 assignment', color:'lavender' },
      { icon:'🌍', title:'Social Studies', desc:'U.S. history, regions, and government basics!', badge:'New topic!', color:'sun' },
    ],
    questions:[
      {q:'What is 15 x 15?',opts:['205','215','225','235'],answer:2,subject:'Math'},
      {q:'What is 2400 / 8?',opts:['280','290','300','310'],answer:2,subject:'Math'},
      {q:'What is 3/8 as a decimal?',opts:['0.275','0.475','0.375','0.575'],answer:2,subject:'Math'},
      {q:'What is 12 x 14?',opts:['158','168','162','174'],answer:1,subject:'Math'},
      {q:'What is 75% of 200?',opts:['130','140','150','160'],answer:2,subject:'Math'},
      {q:'What is 4 squared?',opts:['8','12','20','16'],answer:3,subject:'Math'},
      {q:'What is 3600 / 12?',opts:['270','290','300','310'],answer:2,subject:'Math'},
      {q:'What is 2/5 as a decimal?',opts:['0.2','0.4','0.5','0.6'],answer:1,subject:'Math'},
      {q:'What is 18 x 12?',opts:['216','196','206','226'],answer:0,subject:'Math'},
      {q:'Volume of a 4x3x5 box?',opts:['48','55','60','65'],answer:2,subject:'Math'},
      {q:'What is 25% of 160?',opts:['30','35','40','45'],answer:2,subject:'Math'},
      {q:'What is 5 cubed?',opts:['100','115','125','135'],answer:2,subject:'Math'},
      {q:'What is 4200 / 7?',opts:['560','600','580','620'],answer:1,subject:'Math'},
      {q:'What is 7/10 as a decimal?',opts:['0.5','0.6','0.7','0.8'],answer:2,subject:'Math'},
      {q:'Perimeter of a 9x6 rectangle?',opts:['25','28','33','30'],answer:3,subject:'Math'},
      {q:'What is 50% of 350?',opts:['155','165','175','185'],answer:2,subject:'Math'},
      {q:'What is 11 x 13?',opts:['143','133','141','153'],answer:0,subject:'Math'},
      {q:'What is 6 squared?',opts:['30','34','36','40'],answer:2,subject:'Math'},
      {q:'What is 1/4 as a decimal?',opts:['0.15','0.20','0.25','0.30'],answer:2,subject:'Math'},
      {q:'What is 9 x 12?',opts:['96','100','108','116'],answer:2,subject:'Math'},
      {q:'Area of a triangle with base 8 height 6?',opts:['22','24','26','28'],answer:1,subject:'Math'},
      {q:'What is 3000 / 15?',opts:['200','175','185','215'],answer:0,subject:'Math'},
      {q:'What is 2/3 + 1/3?',opts:['1/2','2/3','1','4/3'],answer:2,subject:'Math'},
      {q:'What is 60% of 50?',opts:['25','28','35','30'],answer:3,subject:'Math'},
      {q:'What is 7 squared?',opts:['42','46','49','52'],answer:2,subject:'Math'},
      {q:'What is 5/6 - 1/6?',opts:['3/4','2/3','4/6','1/2'],answer:1,subject:'Math'},
      {q:'What is 3.5 x 4?',opts:['14','12','13','15'],answer:0,subject:'Math'},
      {q:'What is 2500 / 5?',opts:['450','475','500','525'],answer:2,subject:'Math'},
      {q:'What is 1/2 + 1/4?',opts:['1/2','2/4','3/4','1'],answer:2,subject:'Math'},
      {q:'What is 8 squared?',opts:['54','58','64','68'],answer:2,subject:'Math'},
      {q:'What is photosynthesis?',opts:['Animals eating plants','How plants reproduce','How plants absorb nutrients','Process where plants use sunlight water and CO2 to make food'],answer:3,subject:'Science'},
      {q:'What is a cell?',opts:['A type of battery','The basic unit of life','A type of molecule','A kind of tissue'],answer:1,subject:'Science'},
      {q:'What is DNA?',opts:['A type of cell','The genetic material that carries instructions for life','A kind of protein','A type of RNA'],answer:1,subject:'Science'},
      {q:'What is the difference between a physical and chemical change?',opts:['They are the same','Chemical changes are reversible','Physical changes keep same substance chemical changes make new substances','Physical changes make new substances'],answer:2,subject:'Science'},
      {q:'What is a compound?',opts:['A single element','Two or more elements chemically bonded','A mixture of substances','A type of atom'],answer:1,subject:'Science'},
      {q:'What is a mixture?',opts:['Substances combined but not chemically bonded','Elements chemically bonded','A pure element','A type of compound'],answer:0,subject:'Science'},
      {q:'What is the law of conservation of mass?',opts:['Mass can be created','Mass cannot be created or destroyed','Mass is always destroyed','Mass can only be created'],answer:1,subject:'Science'},
      {q:'What is an atom?',opts:['The smallest unit of a compound','A type of molecule','A kind of cell','The smallest unit of an element that retains its properties'],answer:3,subject:'Science'},
      {q:'What is a molecule?',opts:['A single atom','Two or more atoms bonded together','A type of cell','A kind of element'],answer:1,subject:'Science'},
      {q:'What are the states of matter?',opts:['Solid liquid gas and plasma','Hot warm cold','Hard soft liquid','Dense light heavy'],answer:0,subject:'Science'},
      {q:'What is density?',opts:['How heavy something is','How large something is','Mass per unit volume','How strong something is'],answer:2,subject:'Science'},
      {q:'What is the difference between speed and velocity?',opts:['They are the same','Speed is how fast velocity includes direction','Velocity is how fast speed includes direction','Speed is always faster'],answer:1,subject:'Science'},
      {q:'What is force?',opts:['A type of energy','A push or pull on an object','A type of mass','A kind of speed'],answer:1,subject:'Science'},
      {q:'What is Newtons first law?',opts:['F equals ma','For every action there is equal reaction','Gravity attracts all objects','Objects in motion stay in motion unless acted upon by force'],answer:3,subject:'Science'},
      {q:'What is energy?',opts:['A type of force','The ability to do work or cause change','A type of mass','A kind of matter'],answer:1,subject:'Science'},
      {q:'What is kinetic energy?',opts:['Energy of motion','Stored energy','Energy from heat','Energy from light'],answer:0,subject:'Science'},
      {q:'What is potential energy?',opts:['Energy of motion','Energy from the sun','Stored energy based on position or condition','Electrical energy'],answer:2,subject:'Science'},
      {q:'What is sound?',opts:['A type of light','Vibrations that travel through a medium','A type of electricity','A form of heat'],answer:1,subject:'Science'},
      {q:'What is the electromagnetic spectrum?',opts:['A type of light source','Range of all types of electromagnetic radiation including visible light','A magnetic field','A type of electricity'],answer:1,subject:'Science'},
      {q:'What is a lunar eclipse?',opts:['Moon blocking the sun','Sun going behind a cloud','Moon going behind a cloud','Earth blocking sunlight from reaching the moon'],answer:3,subject:'Science'},
      {q:'What is the Constitutional Convention?',opts:['A party celebrating the constitution','The 1787 meeting where the US Constitution was written','A type of law','A presidential event'],answer:1,subject:'Social Studies'},
      {q:'What was Manifest Destiny?',opts:['The belief that the USA was destined to expand across North America','A type of law','A trade policy','A military strategy'],answer:0,subject:'Social Studies'},
      {q:'What caused the Civil War?',opts:['Taxation alone','Foreign invasion','Primarily slavery and states rights','Economic depression'],answer:2,subject:'Social Studies'},
      {q:'Why is it important to stand up for someone being treated unfairly?',pic:'✊',opts:['It is not important','Because everyone deserves fair treatment and kindness','Only for friends','Only sometimes'],answer:1,subject:'Social Studies'},
      {q:'What does it mean to show respect for cultural differences?',pic:'🌍',opts:['Ignoring them','Appreciating and learning about the unique ways different groups of people live','Making fun of them','Only celebrating your own culture'],answer:1,subject:'Social Studies'},
      {q:'How did the civil rights movement try to make America more equal?',pic:'✊',opts:['By taking rights from others','By separating people more','By changing the school year','By working to end unfair laws and ensure equal rights for all people regardless of race'],answer:3,subject:'Social Studies'},
      {q:'How do immigrants contribute to the communities they join?',pic:'🌎',opts:['They do not contribute','They bring skills, foods, languages, music, and traditions that enrich communities','They only use resources','They make communities weaker'],answer:1,subject:'Social Studies'},
      {q:'What is the Golden Rule?',pic:'💛',opts:['Treat others the way you want to be treated','Always win','Only be nice to people like you','Get as much as you can'],answer:0,subject:'Social Studies'},
      {q:'Why do communities with people from many backgrounds tend to have more creative ideas?',pic:'💡',opts:['They do not','Everyone thinks the same way','Different perspectives combine to create new and better solutions','It causes problems'],answer:2,subject:'Social Studies'},
      {q:'What was the Industrial Revolution?',opts:['A political revolution','A shift from farming to manufacturing using machines','A type of war','A religious movement'],answer:1,subject:'Social Studies'},
      {q:'What was the Underground Railroad?',opts:['A real underground train','A network of secret routes helping enslaved people escape to freedom','A type of mine','A railroad company'],answer:1,subject:'Social Studies'},
      {q:'What is the 13th Amendment?',opts:['The right to vote','Freedom of speech','Equal protection under law','Abolishment of slavery'],answer:3,subject:'Social Studies'},
      {q:'What is checks and balances?',opts:['A banking system','A system where each branch of government limits the power of others','A type of budget','A voting system'],answer:1,subject:'Social Studies'},
      {q:'What is the Electoral College?',opts:['The system used to elect the US president','A type of university','A type of primary election','A congressional committee'],answer:0,subject:'Social Studies'},
      {q:'What caused World War I?',opts:['Nuclear weapons','Only the sinking of the Titanic','Assassination of Archduke Franz Ferdinand plus complex alliances and tensions','The Great Depression'],answer:2,subject:'Social Studies'},
      {q:'What was the Great Depression?',opts:['A type of war','A severe worldwide economic downturn in the 1930s','A natural disaster','A political movement'],answer:1,subject:'Social Studies'},
      {q:'What is the Free Enterprise system?',opts:['Government controls all businesses','Individuals own businesses and compete with limited government interference','The government owns all companies','A type of communism'],answer:1,subject:'Social Studies'},
      {q:'What was the Missouri Compromise?',opts:['A trade deal','A type of tax','A land deal','An 1820 agreement on admitting states as slave or free to maintain balance'],answer:3,subject:'Social Studies'},
      {q:'What is the connection between civil rights and treating all people fairly?',pic:'✊',opts:['No connection','Civil rights protect everyone’s right to equal treatment regardless of background','Only some people have rights','Rights only protect some groups'],answer:1,subject:'Social Studies'},
      {q:'How does learning about different cultures strengthen a community?',pic:'🤝',opts:['It weakens it','It creates division','It makes the community richer, more creative, and stronger','It wastes time'],answer:2,subject:'Social Studies'},
      {q:'What was a major goal of the Underground Railroad?',pic:'🚂',opts:['To help enslaved people escape to freedom','To transport goods','To move the military','To deliver mail'],answer:0,subject:'Social Studies'},
      {q:'What does it mean that the United States is called a nation of immigrants?',pic:'🗽',opts:['Everyone was born here','Only some people are welcome','People from many countries came to America and helped build the nation','America has always been the same'],answer:2,subject:'Social Studies'},
      {q:'How can one person standing up for what is right make a difference?',pic:'🌟',opts:['One person cannot make a difference','One person can inspire others and start movements that change history','Only groups matter','It only matters sometimes'],answer:1,subject:'Social Studies'},
      {q:'What does equal opportunity mean in a democracy?',pic:'📜',opts:['Only some people get chances','Every person deserves a fair chance regardless of background, race, or gender','Men have more opportunities','Only citizens have opportunities'],answer:1,subject:'Social Studies'},
      {q:'What is popular sovereignty?',opts:['Rule by the strongest','Rule by the wealthy','Government by military','The idea that government authority comes from the people'],answer:3,subject:'Social Studies'},
      {q:'What is the Monroe Doctrine?',opts:['A trade policy','A foreign policy warning European nations not to interfere in the Americas','A domestic law','A military strategy'],answer:1,subject:'Social Studies'},
      {q:'Who was Frederick Douglass?',opts:['A formerly enslaved man who became a leading abolitionist and speaker','A president','A general','A senator'],answer:0,subject:'Social Studies'},
      {q:'What was the Louisiana Purchase?',opts:['A type of law','A trade agreement','The 1803 US purchase of territory from France doubling the nations size','A type of tax'],answer:2,subject:'Social Studies'},
      {q:'What is active voice in writing?',opts:['When subject receives the action','When the subject performs the action','A type of verb tense','A type of question'],answer:1,subject:'Language Arts'},
      {q:'What is passive voice?',opts:['When subject performs the action','When the subject receives the action','A type of tense','A question form'],answer:1,subject:'Language Arts'},
      {q:'What is a thesis statement?',opts:['The last sentence','A supporting detail','A conclusion only','The main argument or claim of an essay'],answer:3,subject:'Language Arts'},
      {q:'What is textual evidence?',opts:['The authors opinion','Specific details from a text to support a claim','A summary','A personal connection'],answer:1,subject:'Language Arts'},
      {q:'What is tone in writing?',opts:['The authors attitude conveyed through word choice and style','The topic of writing','The volume of writing','The speed of writing'],answer:0,subject:'Language Arts'},
      {q:'What is a claim in argumentative writing?',opts:['A question','A fact only','A statement that takes a position and can be supported by evidence','A definition'],answer:2,subject:'Language Arts'},
      {q:'What is a counterargument?',opts:['A supporting argument','An opposing argument that you then refute','A type of evidence','A conclusion'],answer:1,subject:'Language Arts'},
      {q:'What is a complex sentence?',opts:['A long sentence','A sentence with an independent and a dependent clause','A sentence with two independent clauses','A simple sentence with details'],answer:1,subject:'Language Arts'},
      {q:'What is an independent clause?',opts:['A phrase that cannot stand alone','A dependent phrase','A type of fragment','A group of words with a subject and verb that makes a complete sentence'],answer:3,subject:'Language Arts'},
      {q:'What is a dependent clause?',opts:['A clause that can stand alone','A clause that cannot stand alone and depends on an independent clause','A complete sentence','A type of compound sentence'],answer:1,subject:'Language Arts'},
      {q:'What does cite mean?',opts:['To quote or reference a source to support your argument','To make something up','To summarize without credit','To disagree with'],answer:0,subject:'Language Arts'},
      {q:'What is an inference?',opts:['A direct statement from the text','A prediction','A logical conclusion drawn from evidence and reasoning','A summary'],answer:2,subject:'Language Arts'},
      {q:'What is figurative language?',opts:['Exact literal meaning','Language that uses figures of speech to create impact beyond literal meaning','A type of grammar','A writing format'],answer:1,subject:'Language Arts'},
      {q:'What is an analogy?',opts:['A type of metaphor only','A comparison showing how two things are alike in a specific way','A rhyme scheme','A type of alliteration'],answer:1,subject:'Language Arts'},
      {q:'What is mood in literature?',opts:['The authors feelings','The topic','The setting','The feeling or atmosphere a piece of writing creates in the reader'],answer:3,subject:'Language Arts'},
    ],
    subjects_progress:['Mathematics','Science','Social Studies','Language Arts'],
    poses:[
      { emoji:'🌳', name:'Tree Pose',     tip:'2.5 min balance -- switch sides!', secs:150, level:'Easy' },
      { emoji:'⚔', name:'Warrior I',     tip:'Lunge deep, reach high, breathe!', secs:150, level:'Medium' },
      { emoji:'⚔', name:'Warrior II',    tip:'Open hips, gaze forward, hold!', secs:150, level:'Medium' },
      { emoji:'🧘', name:'Goddess Pose', tip:'Wide deep stance — arms up, breathe into your power!', secs:120, level:'Medium' },
      { emoji:'🦅', name:'Eagle Pose',    tip:'Wrap arms and legs, find balance!', secs:120, level:'Medium' },
      { emoji:'🐍', name:'Cobra Pose',    tip:'Strengthen spine, open chest!', secs:120, level:'Easy' },
      { emoji:'🌉', name:'Bridge Pose',   tip:'Lift hips, press feet, breathe!', secs:90,  level:'Medium' },
      { emoji:'🐱', name:'Cat-Cow', tip:'Alternate arch and release -- slow and mindful!', secs:120, level:'Easy' },
      { emoji:'⭐', name:'Star', tip:'Wide powerful stance, reach through fingertips!', secs:90, level:'Easy' },
      { emoji:'🙏', name:"Child's Pose", tip:'Surrender into rest -- breathe into your back.', secs:90, level:'Easy' },
      { emoji:'⚖️', name:'Warrior III', tip:'One leg back, arms forward — find your balance!', secs:90, level:'Medium' },
      { emoji:'🧱', name:'Plank Pose', tip:'Core tight, body straight — breathe through the hold!', secs:60, level:'Medium' },
      { emoji:'🐕', name:'Three-Legged Dog', tip:'Downward dog — kick one leg up high, hold each side!', secs:90, level:'Medium' },
    ],
    books:[
      { title:'Treasure Island',                 author:'R.L. Stevenson', pages:160, read:0,  emoji:'🏴‍☠️' },
      { title:'The Secret Garden',               author:'F.H. Burnett',   pages:160, read:0,  emoji:'🌺' },
      { title:'Black Beauty',                    author:'A. Sewell',      pages:160, read:0,  emoji:'🐴' },
      { title:'Little Women',                    author:'L.M. Alcott',    pages:200, read:0,  emoji:'📖' },
      { title:'Around the World in 80 Days',     author:'J. Verne',       pages:180, read:0,  emoji:'🌍' },
      { title:'Robinson Crusoe',                 author:'D. Defoe',       pages:200, read:0,  emoji:'🏝️' },
      { title:'A Little Princess',               author:'F.H. Burnett',   pages:150, read:0,  emoji:'👸' },
      { title:'Frankenstein',                    author:'M. Shelley',     pages:200, read:0,  emoji:'⚡' },
      { title:'Jane Eyre',                       author:'C. Bronte',      pages:250, read:0,  emoji:'🌹' },
      { title:'The Time Machine',                author:'H.G. Wells',     pages:100, read:0,  emoji:'⏱️' },
    ],
    words:[
      { w:'Perseverance', d:'Continuing to work hard even when things are difficult.' },
      { w:'Serendipity',  d:'Finding something good by happy accident.' },
      { w:'Resilience',   d:'The ability to bounce back after something hard.' },
      { w:'Diligent',     d:'Working carefully and with effort over time.' },
      { w:'Ambitious',    d:'Having a strong desire to achieve great things.' },
    ],
  },

  5: {
    label: 'Grade 5', gradeNum: 5,
    ui: {
      subtitle:    "Time to challenge yourself and grow! 💡",
      streakTitle: 'Amazing Streak!', streakSub: 'You\'ve been learning every day!',
      tabLearn:'Academics', tabMove:'Yoga', tabRead:'Reading', tabArt:'Art',
      subjectsTitle:'📖 Today\'s Subjects',
      quizTitle:'🧠 Quick Quiz',
      posesTitle:'🌟 Yoga Poses', breathSub:'Follow the circle. Breathe in when it grows, out when it shrinks.',
      bookshelfTitle:'📚 My Bookshelf', timerTopLabel:'Current Pose Duration'
    },
    subjects:[
      { icon:'🔢', title:'Mathematics', desc:'Fractions, decimals, percentages, and geometry!', badge:'3 lessons left', color:'mint' },
      { icon:'🔬', title:'Science', desc:'Earth systems, matter, and the scientific method!', badge:'✅ Completed!', color:'coral' },
      { icon:'✍', title:'Language Arts', desc:'Research writing, literary analysis, and debate!', badge:'2 exercises left', color:'lavender' },
      { icon:'🌍', title:'Social Studies', desc:'U.S. history, economics, and civics!', badge:'New lesson!', color:'sun' },
    ],
    questions:[
      {q:'What is 0.8 x 0.5?',opts:['0.3','0.4','0.5','0.6'],answer:1,subject:'Math'},
      {q:'What is 3 2/3 + 1 1/3?',opts:['5','4','6','7'],answer:0,subject:'Math'},
      {q:'What is 5/8 as a decimal?',opts:['0.525','0.600','0.625','0.650'],answer:2,subject:'Math'},
      {q:'What is 450 x 0.2?',opts:['70','80','90','100'],answer:2,subject:'Math'},
      {q:'What is 7/8 - 3/8?',opts:['3/8','5/8','6/8','4/8'],answer:3,subject:'Math'},
      {q:'What is 12.5 x 4?',opts:['40','50','45','55'],answer:1,subject:'Math'},
      {q:'What is 80% of 250?',opts:['170','180','200','210'],answer:2,subject:'Math'},
      {q:'What is 2 1/2 x 3?',opts:['6','7','7.5','8'],answer:2,subject:'Math'},
      {q:'What is 144 / 1.2?',opts:['100','110','120','130'],answer:2,subject:'Math'},
      {q:'What is 3/4 + 2/3?',opts:['5/7','17/12','7/12','5/12'],answer:1,subject:'Math'},
      {q:'What is 6.25 x 8?',opts:['50','44','48','54'],answer:0,subject:'Math'},
      {q:'What is 1/3 of 270?',opts:['80','85','90','95'],answer:2,subject:'Math'},
      {q:'What is 1500 x 0.04?',opts:['50','55','65','60'],answer:3,subject:'Math'},
      {q:'What is 2/3 x 3/4?',opts:['1/4','1/3','1/2','2/3'],answer:2,subject:'Math'},
      {q:'What is 9.6 / 0.4?',opts:['20','24','22','26'],answer:1,subject:'Math'},
      {q:'What is 35% of 600?',opts:['180','195','210','225'],answer:2,subject:'Math'},
      {q:'What is 4 1/4 - 1 3/4?',opts:['2.5','2','3','3.5'],answer:0,subject:'Math'},
      {q:'What is 0.125 as a fraction?',opts:['1/4','1/6','1/8','1/10'],answer:2,subject:'Math'},
      {q:'What is 25 x 1.4?',opts:['30','32','35','40'],answer:2,subject:'Math'},
      {q:'What is 5/6 of 72?',opts:['54','60','58','64'],answer:1,subject:'Math'},
      {q:'What is 4.8 / 0.6?',opts:['6','7','8','9'],answer:2,subject:'Math'},
      {q:'What is 3 x 2 2/3?',opts:['7','9','10','8'],answer:3,subject:'Math'},
      {q:'What is 120% of 50?',opts:['55','60','65','70'],answer:1,subject:'Math'},
      {q:'What is 7/8 as a percent?',opts:['75%','82.5%','87.5%','90%'],answer:2,subject:'Math'},
      {q:'What is 2.5 squared?',opts:['5','5.5','6','6.25'],answer:3,subject:'Math'},
      {q:'What is 1/4 / 1/2?',opts:['1/8','1/4','1/2','2'],answer:2,subject:'Math'},
      {q:'What is 9.75 x 4?',opts:['39','37','38','40'],answer:0,subject:'Math'},
      {q:'What is the mean of 4 7 9 12 8?',opts:['7','8','9','10'],answer:1,subject:'Math'},
      {q:'What is 3/5 / 3/10?',opts:['1/2','1','2','3'],answer:2,subject:'Math'},
      {q:'What is 0.6 x 0.6?',opts:['0.12','0.24','0.36','0.48'],answer:2,subject:'Math'},
      {q:'What is the theory of evolution?',opts:['A law about gravity','A theory about atoms','A law about light','The scientific explanation that species change over time through natural selection'],answer:3,subject:'Science'},
      {q:'What is natural selection?',opts:['Humans choosing animals','Process where organisms with favorable traits survive and reproduce more','A type of mutation','A lab experiment'],answer:1,subject:'Science'},
      {q:'What is a gene?',opts:['A segment of DNA that codes for a specific trait','A type of cell','A type of chromosome','A kind of protein'],answer:0,subject:'Science'},
      {q:'What is the difference between mitosis and meiosis?',opts:['They are the same','Meiosis makes identical cells','Mitosis makes identical cells meiosis makes reproductive cells with half DNA','Both make reproductive cells'],answer:2,subject:'Science'},
      {q:'What is an ecosystem?',opts:['Only the animals in an area','All living organisms and their physical environment interacting together','Only the plants','The weather in an area'],answer:1,subject:'Science'},
      {q:'What is biodiversity?',opts:['A type of biome','The variety of life in a particular habitat or on Earth','A science experiment','A type of ecosystem'],answer:1,subject:'Science'},
      {q:'What is climate change?',opts:['Normal weather changes','A type of storm','Only natural temperature changes','Long-term shifts in global temperatures primarily caused by human greenhouse gas emissions'],answer:3,subject:'Science'},
      {q:'What is the greenhouse effect?',opts:['A type of gardening','Trapping of heat in Earths atmosphere by greenhouse gases','A chemical reaction','A type of pollution'],answer:1,subject:'Science'},
      {q:'What is the periodic table?',opts:['An organized chart of all known chemical elements','A calendar','A type of graph','A chemistry textbook'],answer:0,subject:'Science'},
      {q:'What is an element?',opts:['A type of compound','A type of mixture','A pure substance made of only one kind of atom','A molecule'],answer:2,subject:'Science'},
      {q:'What is Newtons second law?',opts:['Objects stay in motion unless acted upon','Force equals mass times acceleration','For every action there is equal reaction','Gravity attracts all objects'],answer:1,subject:'Science'},
      {q:'What is Newtons third law?',opts:['F equals ma','Objects stay at rest unless acted upon','For every action there is an equal and opposite reaction','Gravity decreases with distance'],answer:2,subject:'Science'},
      {q:'What is plate tectonics?',opts:['A type of rock','The theory that Earths outer shell is divided into moving plates','A type of earthquake','A mountain formation'],answer:1,subject:'Science'},
      {q:'What causes earthquakes?',opts:['Rainfall','Volcanic activity only','Ocean currents','Movement of tectonic plates along fault lines'],answer:3,subject:'Science'},
      {q:'What is a black hole?',opts:['A dark planet','A region in space where gravity is so strong nothing even light can escape','A type of dark star','A very deep crater'],answer:1,subject:'Science'},
      {q:'What is the Big Bang theory?',opts:['The scientific model that the universe began from an extremely hot dense state','A type of chemical reaction','A description of volcanoes','A theory about atoms'],answer:0,subject:'Science'},
      {q:'What is CRISPR?',opts:['A type of vitamin','A type of cell','A gene editing technology that can modify DNA sequences','A lab instrument'],answer:2,subject:'Science'},
      {q:'What is the difference between weather and climate?',opts:['They are the same','Weather is current daily conditions climate is long-term patterns of a region','Climate is daily weather is yearly','Only temperature differs'],answer:1,subject:'Science'},
      {q:'What is artificial intelligence?',opts:['A type of robot only','Computer systems that perform tasks requiring human-like intelligence','A type of internet','A programming language'],answer:1,subject:'Science'},
      {q:'What is renewable energy?',opts:['Energy from oil','Energy from coal','Energy that is very cheap','Energy from sources that are naturally replenished like sun wind water'],answer:3,subject:'Science'},
      {q:'What caused World War II?',opts:['The industrial revolution','Rise of fascism German aggression and invasion of Poland','Only nuclear weapons','The Great Depression alone'],answer:1,subject:'Social Studies'},
      {q:'What was the Holocaust?',opts:['The systematic genocide of six million Jews and others by Nazi Germany','A type of war strategy','A battle','A type of treaty'],answer:0,subject:'Social Studies'},
      {q:'What was the Cold War?',opts:['A series of military battles','A type of economic crisis','A period of geopolitical tension between the USA and Soviet Union without direct war','A cultural movement'],answer:2,subject:'Social Studies'},
      {q:'What was the Civil Rights Movement?',opts:['A type of war','A social and political campaign to end racial segregation and discrimination in the USA','An economic policy','A foreign policy'],answer:1,subject:'Social Studies'},
      {q:'Who was Martin Luther King Jr.?',opts:['A president','A civil rights leader who advocated for racial equality through nonviolent protest','A general','A senator'],answer:1,subject:'Social Studies'},
      {q:'What was the New Deal?',opts:['A trade agreement','A type of constitution','A foreign policy','FDRs programs to recover from the Great Depression through relief reform and recovery'],answer:3,subject:'Social Studies'},
      {q:'How does understanding different perspectives help resolve conflicts between groups?',pic:'🕊️',opts:['It does not help','Understanding perspectives builds empathy and finds common ground','Only one side can be right','Conflicts cannot be resolved'],answer:1,subject:'Social Studies'},
      {q:'What is the importance of human rights across all cultures?',pic:'🌍',opts:['Human rights apply to all people everywhere, regardless of culture or background','Rights only apply in some places','Rights vary too much to matter','Only governments decide rights'],answer:0,subject:'Social Studies'},
      {q:'What lesson can we take from historical events like the Holocaust?',pic:'✡️',opts:['No lessons','Dehumanizing any group leads to catastrophic harm and must be recognized and stopped early','Discrimination eventually helps society','Only one group was affected'],answer:1,subject:'Social Studies'},
      {q:'What is the role of international organizations in promoting human rights?',pic:'🌐',opts:['None','They only help wealthy countries','They work to protect rights of people globally and promote cooperation between nations','They only handle wars'],answer:2,subject:'Social Studies'},
      {q:'How can studying history help us build a more equitable future?',pic:'📚',opts:['History has no lessons for today','By understanding past injustices we can recognize patterns and work to prevent them','Only future events matter','The past is not relevant'],answer:1,subject:'Social Studies'},
      {q:'What does it mean to be a global citizen?',pic:'🌎',opts:['To recognize your connection to all people on earth and act with responsibility toward others','To have citizenship in many countries','To ignore your local community','To travel everywhere'],answer:0,subject:'Social Studies'},
      {q:'What is globalization?',opts:['A type of government','A type of war','An economic crisis','The increasing interconnection of economies cultures and societies worldwide'],answer:3,subject:'Social Studies'},
      {q:'What is the United Nations?',opts:['A type of government','An international organization promoting peace cooperation and human rights','A military alliance','A trade organization only'],answer:1,subject:'Social Studies'},
      {q:'What was the space race?',opts:['A type of car race','A Cold War competition between the USA and USSR to achieve space exploration firsts','A scientific conference','A type of treaty'],answer:1,subject:'Social Studies'},
      {q:'What is the significance of 1776?',opts:['The Constitution was signed','The Civil War ended','The US declared independence from Britain','The first president was elected'],answer:2,subject:'Social Studies'},
      {q:'What is imperialism?',opts:['A type of democracy','A policy of extending power over other nations through force or economic means','A type of communism','A trade policy'],answer:1,subject:'Social Studies'},
      {q:'What was apartheid?',opts:['A system of racial segregation in South Africa that lasted until 1994','A type of government','A type of war','An economic policy'],answer:0,subject:'Social Studies'},
      {q:'What is the European Union?',opts:['A military alliance only','A trade organization only','A type of government','A political and economic union of European nations with shared policies'],answer:3,subject:'Social Studies'},
      {q:'What is propaganda?',opts:['Honest advertising','Biased information used to promote a particular cause or point of view','A type of news','A government publication'],answer:1,subject:'Social Studies'},
      {q:'What is a totalitarian government?',opts:['A democracy','A system where the government controls nearly all aspects of public and private life','A type of republic','A limited government'],answer:1,subject:'Social Studies'},
      {q:'What is nuclear deterrence?',opts:['Using nuclear power for energy','A type of treaty','The strategy of preventing war by possessing nuclear weapons so enemy fears retaliation','A disarmament policy'],answer:2,subject:'Social Studies'},
      {q:'What is rhetoric in writing?',opts:['A type of grammar','The art of using language effectively and persuasively','A type of essay','A writing error'],answer:1,subject:'Language Arts'},
      {q:'What is an argumentative essay?',opts:['A piece of writing that takes a position and supports it with evidence and reasoning','A story','A type of poem','A personal narrative'],answer:0,subject:'Language Arts'},
      {q:'What is a logical fallacy?',opts:['A correct argument','A type of evidence','A strong conclusion','An error in reasoning that makes an argument invalid'],answer:3,subject:'Language Arts'},
      {q:'What is credibility of a source?',opts:['How interesting it is','How trustworthy and reliable the source and its information are','How long it is','How recently published'],answer:1,subject:'Language Arts'},
      {q:'What is bias in writing?',opts:['Facts only','Presenting information in a way that unfairly favors one side','An opinion essay','A type of evidence'],answer:1,subject:'Language Arts'},
      {q:'What is an extended metaphor?',opts:['A very long simile','A type of personification','A metaphor developed throughout a significant portion of a text','A comparison using like'],answer:2,subject:'Language Arts'},
      {q:'What is dramatic irony?',opts:['Sarcasm','When the audience knows something characters do not','A type of metaphor','A plot twist'],answer:1,subject:'Language Arts'},
      {q:'What is a soliloquy?',opts:['A speech made by a character alone revealing inner thoughts','A conversation between two characters','A type of poem','A stage direction'],answer:0,subject:'Language Arts'},
      {q:'What is the difference between denotation and connotation?',opts:['They are the same','Connotation is the literal meaning','Both refer to literal meanings','Denotation is the literal meaning connotation is the implied or emotional meaning'],answer:3,subject:'Language Arts'},
      {q:'What is an archetype?',opts:['A type of grammar','A universal symbol character or theme found across cultures and literature','A type of metaphor','A writing style'],answer:1,subject:'Language Arts'},
      {q:'What is juxtaposition?',opts:['A type of rhyme','Placing contrasting elements side by side to highlight differences','A type of metaphor','A writing error'],answer:1,subject:'Language Arts'},
      {q:'What is a satire?',opts:['A type of poem','A type of tragedy','A work that uses humor irony or exaggeration to criticize or expose foolishness','A mystery story'],answer:2,subject:'Language Arts'},
      {q:'What is stream of consciousness?',opts:['A type of plot','A narrative technique that depicts continuous flow of a characters thoughts','A type of dialogue','A formal essay style'],answer:1,subject:'Language Arts'},
      {q:'What is syntax in writing?',opts:['The arrangement of words and phrases to create well-formed sentences','Vocabulary choice','A type of paragraph','A writing format'],answer:0,subject:'Language Arts'},
      {q:'What is diction?',opts:['A type of metaphor','A grammar rule','A punctuation rule','The choice and use of words and phrases in writing or speech'],answer:3,subject:'Language Arts'},
    ],
    subjects_progress:['Mathematics','Science','Social Studies','Language Arts'],
    poses:[
      { emoji:'🏔', name:'Mountain Pose', tip:'Stand grounded for 3 min. Focus on breath.', secs:180, level:'Easy' },
      { emoji:'🌳', name:'Tree Pose',     tip:'Balance on each side for 2 min. Find stillness.', secs:120, level:'Easy' },
      { emoji:'🦋', name:'Butterfly Pose',tip:'Gentle hip opener. Hold and breathe deeply.', secs:150, level:'Easy' },
      { emoji:'🐍', name:'Cobra Pose',    tip:'Open your chest, strengthen your back.', secs:90, level:'Easy' },
      { emoji:'⚔', name:'Warrior Pose',  tip:'Build strength and focus simultaneously.', secs:180, level:'Medium' },
      { emoji:'🦅', name:'Eagle Pose',    tip:'Full body balance challenge. Hold 2 min each side.', secs:120, level:'Medium' },
      { emoji:'⚔', name:'Warrior I', tip:'Deepen the lunge, square the hips, reach tall.', secs:150, level:'Medium' },
      { emoji:'⚔', name:'Warrior II', tip:'Extended hold -- cultivate stillness and power.', secs:150, level:'Medium' },
      { emoji:'🧘', name:'Goddess Pose', tip:'Wide stance, deep bend — channel strength and grace.', secs:120, level:'Medium' },
      { emoji:'🌉', name:'Bridge Pose', tip:'Three-breath hold, release, repeat twice.', secs:120, level:'Medium' },
      { emoji:'⚖️', name:'Warrior III', tip:'One leg back, torso parallel — find stillness and focus.', secs:120, level:'Medium' },
      { emoji:'🧱', name:'Plank Pose', tip:'60-second plank challenge — breathe through it!', secs:60, level:'Medium' },
      { emoji:'🐕', name:'Three-Legged Dog', tip:'Flow from downward dog to three-legged — breathe and hold!', secs:90, level:'Medium' },
    ],
    books:[
      { title:'Frankenstein',                    author:'M. Shelley',     pages:200, read:0,  emoji:'⚡' },
      { title:'Jane Eyre',                       author:'C. Bronte',      pages:250, read:0,  emoji:'🌹' },
      { title:'The Time Machine',                author:'H.G. Wells',     pages:100, read:0,  emoji:'⏱️' },
      { title:'Treasure Island',                 author:'R.L. Stevenson', pages:160, read:0,  emoji:'🏴‍☠️' },
      { title:'Around the World in 80 Days',     author:'J. Verne',       pages:180, read:0,  emoji:'🌍' },
      { title:'Black Beauty',                    author:'A. Sewell',      pages:160, read:0,  emoji:'🐴' },
      { title:'Little Women',                    author:'L.M. Alcott',    pages:200, read:0,  emoji:'📖' },
      { title:'The Secret Garden',               author:'F.H. Burnett',   pages:160, read:0,  emoji:'🌺' },
      { title:'Robinson Crusoe',                 author:'D. Defoe',       pages:200, read:0,  emoji:'🏝️' },
      { title:'Alice in Wonderland',             author:'L. Carroll',     pages:96,  read:0,  emoji:'🐇' },
    ],
    words:[
      { w:'Perseverance', d:'Continuing to work hard even when things are difficult.' },
      { w:'Serendipity',  d:'Finding something good by happy accident.' },
      { w:'Resilience',   d:'The ability to bounce back after something hard.' },
      { w:'Magnificent',  d:'Extremely beautiful or impressive.' },
      { w:'Diligent',     d:'Working carefully and with sustained effort.' },
    ],
  },
};

const COLORING_SCENES = {
  PreK: [
    { label:'🌈 Rainbow', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="178" width="300" height="42" rx="0" fill="white" stroke="#333" stroke-width="2.5"/><!-- rainbow arcs - outline only --><path class="fillable" data-id="arc1" d="M20,178 Q150,10 280,178 L272,178 Q150,26 28,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc2" d="M38,178 Q150,30 262,178 L254,178 Q150,44 46,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc3" d="M55,178 Q150,50 245,178 L237,178 Q150,62 63,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc4" d="M72,178 Q150,68 228,178 L220,178 Q150,80 80,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc5" d="M89,178 Q150,86 211,178 L203,178 Q150,96 97,178Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- clouds - puffy bumpy outline --><path class="fillable" data-id="cl1" d="M30,55 Q30,35 50,35 Q52,20 68,22 Q72,10 88,14 Q102,6 110,20 Q124,18 126,32 Q136,32 136,46 Q136,58 124,58 L42,58 Q30,58 30,55Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- sun --><circle class="fillable" data-id="sun" cx="245" cy="38" r="26" fill="white" stroke="#333" stroke-width="2.5"/><line x1="245" y1="6" x2="245" y2="1" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="12" x2="275" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="277" y1="38" x2="282" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="64" x2="275" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="245" y1="70" x2="245" y2="75" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="64" x2="215" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="213" y1="38" x2="208" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="12" x2="215" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><!-- flowers --><circle class="fillable" data-id="f1c" cx="40" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f1p1" cx="40" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p2" cx="49" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p3" cx="31" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="40" y1="197" x2="40" y2="210" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2c" cx="265" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2p1" cx="265" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p2" cx="274" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p3" cx="256" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="265" y1="197" x2="265" y2="210" stroke="#333" stroke-width="2"/></svg>`},
    { label:'🦋 Butterfly', svg:`<svg class="coloring-svg" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="260" fill="#FAFAFA" rx="12"/><!-- top left wing --><path class="fillable" data-id="wTL" d="M148,130 Q100,50 40,60 Q10,65 20,100 Q30,130 148,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- top right wing --><path class="fillable" data-id="wTR" d="M152,130 Q200,50 260,60 Q290,65 280,100 Q270,130 152,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom left wing --><path class="fillable" data-id="wBL" d="M148,140 Q90,155 60,190 Q45,215 70,220 Q110,225 148,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom right wing --><path class="fillable" data-id="wBR" d="M152,140 Q210,155 240,190 Q255,215 230,220 Q190,225 152,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- wing spots --><circle class="fillable" data-id="sp1" cx="95" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp2" cx="205" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp3" cx="110" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp4" cx="190" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="148" rx="8" ry="48" fill="white" stroke="#333" stroke-width="2.5"/><!-- head --><circle class="fillable" data-id="head" cx="150" cy="92" r="12" fill="white" stroke="#333" stroke-width="2.5"/><!-- antennae --><path d="M144,82 Q132,58 124,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an1" cx="123" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><path d="M156,82 Q168,58 176,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an2" cx="177" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="bg1c" cx="28" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg1p" cx="28" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="38" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="18" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="bg2c" cx="272" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg2p" cx="272" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="282" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="262" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🏠 House', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="170" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="grass" x="0" y="170" width="300" height="70" fill="white" stroke="#333" stroke-width="2"/><!-- house wall --><rect class="fillable" data-id="wall" x="75" y="118" width="150" height="92" fill="white" stroke="#333" stroke-width="2.5"/><!-- roof --><polygon class="fillable" data-id="roof" points="60,120 150,50 240,120" fill="white" stroke="#333" stroke-width="2.5"/><!-- chimney --><rect class="fillable" data-id="chimney" x="183" y="62" width="26" height="40" fill="white" stroke="#333" stroke-width="2"/><!-- door --><rect class="fillable" data-id="door" x="127" y="158" width="46" height="52" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- doorknob --><circle cx="167" cy="185" r="3.5" fill="#333"/><!-- windows --><rect class="fillable" data-id="win1" x="86" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="104" y1="136" x2="104" y2="166" stroke="#333" stroke-width="1.5"/><line x1="86" y1="151" x2="122" y2="151" stroke="#333" stroke-width="1.5"/><rect class="fillable" data-id="win2" x="178" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="196" y1="136" x2="196" y2="166" stroke="#333" stroke-width="1.5"/><line x1="178" y1="151" x2="214" y2="151" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M28,52 Q28,34 46,34 Q48,20 62,22 Q66,10 80,14 Q92,8 100,20 Q112,18 114,30 Q122,30 122,44 Q122,54 112,54 L40,54 Q28,54 28,52Z" fill="white" stroke="#333" stroke-width="2"/><!-- cloud 2 --><path class="fillable" data-id="cl2" d="M170,38 Q170,24 184,24 Q186,14 196,16 Q200,8 210,11 Q218,6 224,16 Q232,15 233,25 Q240,25 240,36 Q240,44 232,44 L178,44 Q170,44 170,38Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="262" cy="32" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="262" y1="5" x2="262" y2="1" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="10" x2="288" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="289" y1="32" x2="293" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="54" x2="288" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="262" y1="59" x2="262" y2="63" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="54" x2="236" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="235" y1="32" x2="231" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="10" x2="236" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><!-- tree --><rect x="238" y="155" width="10" height="35" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="tree" cx="243" cy="144" rx="22" ry="24" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="fl1" cx="38" cy="185" r="8" fill="white" stroke="#333" stroke-width="2"/><line x1="38" y1="193" x2="38" y2="207" stroke="#333" stroke-width="2"/><circle cx="38" cy="176" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="46" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="30" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🐟 Ocean', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="90" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- water --><rect class="fillable" data-id="water" x="0" y="90" width="300" height="150" fill="white" stroke="#333" stroke-width="2"/><!-- waves --><path class="fillable" data-id="wv1" d="M0,88 Q25,76 50,88 Q75,100 100,88 Q125,76 150,88 Q175,100 200,88 Q225,76 250,88 Q275,100 300,88 L300,104 Q275,116 250,104 Q225,92 200,104 Q175,116 150,104 Q125,92 100,104 Q75,116 50,104 Q25,92 0,104Z" fill="white" stroke="#333" stroke-width="2"/><!-- big fish body --><ellipse class="fillable" data-id="fish1" cx="150" cy="158" rx="58" ry="32" fill="white" stroke="#333" stroke-width="2.5"/><!-- tail --><polygon class="fillable" data-id="tail1" points="92,158 66,136 66,180" fill="white" stroke="#333" stroke-width="2.5"/><!-- fin top --><path class="fillable" data-id="fin1" d="M150,126 Q162,106 172,126" fill="white" stroke="#333" stroke-width="2"/><!-- eye --><circle cx="188" cy="150" r="7" fill="white" stroke="#333" stroke-width="2"/><circle cx="189" cy="150" r="3" fill="#333"/><!-- mouth --><path d="M195,160 Q200,165 195,168" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/><!-- small fish 1 --><ellipse class="fillable" data-id="fish2" cx="55" cy="122" rx="26" ry="14" fill="white" stroke="#333" stroke-width="2"/><polygon class="fillable" data-id="tail2" points="29,122 14,112 14,132" fill="white" stroke="#333" stroke-width="2"/><circle cx="72" cy="118" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="73" cy="118" r="2" fill="#333"/><!-- small fish 2 --><ellipse class="fillable" data-id="fish3" cx="242" cy="132" rx="24" ry="13" fill="white" stroke="#333" stroke-width="2"/><polygon points="218,132 204,122 204,142" fill="white" stroke="#333" stroke-width="2"/><circle cx="258" cy="128" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="259" cy="128" r="2" fill="#333"/><!-- seaweed --><path class="fillable" data-id="sw1" d="M28,240 Q16,214 28,196 Q40,178 28,160" stroke="#333" stroke-width="7" fill="none" stroke-linecap="round"/><!-- starfish --><polygon class="fillable" data-id="star1" points="85,225 90,210 95,225 80,214 100,214" fill="white" stroke="#333" stroke-width="2"/><!-- bubbles --><circle cx="168" cy="114" r="5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="160" cy="103" r="3.5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="174" cy="97" r="4" fill="none" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M30,40 Q30,24 46,24 Q48,12 60,14 Q64,4 76,8 Q86,2 94,14 Q104,12 106,24 Q114,24 114,36 Q114,46 104,46 L42,46 Q30,46 30,40Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="252" cy="38" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="252" y1="11" x2="252" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="16" x2="278" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="279" y1="38" x2="283" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="60" x2="278" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="65" x2="252" y2="69" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="60" x2="226" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="225" y1="38" x2="221" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="16" x2="226" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🚂 Train', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="140" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="140" width="300" height="80" fill="white" stroke="#333" stroke-width="2"/><!-- tracks --><line x1="0" y1="175" x2="300" y2="175" stroke="#333" stroke-width="3"/><line x1="0" y1="185" x2="300" y2="185" stroke="#333" stroke-width="3"/><line x1="20" y1="175" x2="20" y2="185" stroke="#333" stroke-width="2.5"/><line x1="50" y1="175" x2="50" y2="185" stroke="#333" stroke-width="2.5"/><line x1="80" y1="175" x2="80" y2="185" stroke="#333" stroke-width="2.5"/><line x1="110" y1="175" x2="110" y2="185" stroke="#333" stroke-width="2.5"/><line x1="140" y1="175" x2="140" y2="185" stroke="#333" stroke-width="2.5"/><line x1="170" y1="175" x2="170" y2="185" stroke="#333" stroke-width="2.5"/><line x1="200" y1="175" x2="200" y2="185" stroke="#333" stroke-width="2.5"/><line x1="230" y1="175" x2="230" y2="185" stroke="#333" stroke-width="2.5"/><line x1="260" y1="175" x2="260" y2="185" stroke="#333" stroke-width="2.5"/><line x1="290" y1="175" x2="290" y2="185" stroke="#333" stroke-width="2.5"/><!-- engine body --><rect class="fillable" data-id="eng" x="30" y="105" width="90" height="68" rx="8" fill="white" stroke="#333" stroke-width="2.5"/><!-- engine cab --><rect class="fillable" data-id="cab" x="80" y="88" width="40" height="50" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- cab window --><rect class="fillable" data-id="cabwin" x="88" y="96" width="24" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- boiler dome --><ellipse class="fillable" data-id="dome" cx="55" cy="105" rx="14" ry="10" fill="white" stroke="#333" stroke-width="2"/><!-- smokestack --><rect class="fillable" data-id="stack" x="44" y="82" width="14" height="24" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- smoke puffs --><circle class="fillable" data-id="sm1" cx="51" cy="72" r="9" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm2" cx="62" cy="60" r="12" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm3" cx="76" cy="50" r="9" fill="white" stroke="#333" stroke-width="1.5"/><!-- engine wheels --><circle class="fillable" data-id="ew1" cx="52" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="52" cy="173" r="5" fill="#333"/><circle class="fillable" data-id="ew2" cx="92" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="92" cy="173" r="5" fill="#333"/><!-- carriage --><rect class="fillable" data-id="car1" x="140" y="115" width="80" height="58" rx="6" fill="white" stroke="#333" stroke-width="2.5"/><!-- carriage windows --><rect class="fillable" data-id="cw1" x="150" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><rect class="fillable" data-id="cw2" x="186" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- carriage wheels --><circle class="fillable" data-id="cw3" cx="158" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="158" cy="173" r="4" fill="#333"/><circle class="fillable" data-id="cw4" cx="204" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="204" cy="173" r="4" fill="#333"/><!-- connector --><line x1="120" y1="155" x2="140" y2="155" stroke="#333" stroke-width="3"/><!-- cloud --><path class="fillable" data-id="cl1" d="M180,30 Q180,16 194,16 Q196,6 206,8 Q210,0 220,3 Q228,-2 234,8 Q242,7 243,17 Q250,17 250,28 Q250,36 242,36 L188,36 Q180,36 180,30Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="270" cy="40" r="24" fill="white" stroke="#333" stroke-width="2"/><line x1="270" y1="11" x2="270" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="294" y1="16" x2="298" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="299" y1="40" x2="303" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="69" x2="270" y2="73" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="246" y1="64" x2="242" y2="68" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="241" y1="40" x2="237" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🦁 Lion', svg:`<svg class="coloring-svg" viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="280" fill="#FAFAFA" rx="12"/><!-- mane outer --><circle class="fillable" data-id="mane" cx="150" cy="148" r="85" fill="white" stroke="#333" stroke-width="2.5"/><!-- mane spikes around edge --><path class="fillable" data-id="mn1" d="M150,63 L158,82 L142,82Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn2" d="M193,72 L196,92 L180,86Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn3" d="M225,98 L222,118 L208,108Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn4" d="M236,140 L218,148 L220,132Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn5" d="M107,72 L120,86 L104,92Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn6" d="M75,98 L92,108 L78,118Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn7" d="M64,140 L80,132 L82,148Z" fill="white" stroke="#333" stroke-width="2"/><!-- face --><circle class="fillable" data-id="face" cx="150" cy="148" r="62" fill="white" stroke="#333" stroke-width="2.5"/><!-- ears --><ellipse class="fillable" data-id="ear1" cx="100" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="ear2" cx="200" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><!-- eyes --><circle class="fillable" data-id="eye1" cx="128" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="131" cy="138" r="6" fill="#333"/><circle class="fillable" data-id="eye2" cx="172" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="175" cy="138" r="6" fill="#333"/><!-- nose --><ellipse class="fillable" data-id="nose" cx="150" cy="162" rx="12" ry="9" fill="white" stroke="#333" stroke-width="2"/><!-- mouth --><path d="M144,170 Q150,180 156,170" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round"/><!-- whiskers --><line x1="100" y1="162" x2="132" y2="165" stroke="#333" stroke-width="1.5"/><line x1="100" y1="170" x2="132" y2="170" stroke="#333" stroke-width="1.5"/><line x1="168" y1="165" x2="200" y2="162" stroke="#333" stroke-width="1.5"/><line x1="168" y1="170" x2="200" y2="170" stroke="#333" stroke-width="1.5"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="234" rx="44" ry="36" fill="white" stroke="#333" stroke-width="2.5"/><!-- paws --><ellipse class="fillable" data-id="paw1" cx="114" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="paw2" cx="186" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><!-- tail --><path d="M194,240 Q230,230 240,255 Q248,272 232,275" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="tailtip" cx="228" cy="276" r="10" fill="white" stroke="#333" stroke-width="2"/></svg>`},,
    {label:'☀️ Sunny Day', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="155" width="300" height="65" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="150" cy="78" r="50" fill="white" stroke="#333" stroke-width="2.5"/>
<line x1="150" y1="16" x2="150" y2="6" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="150" y1="140" x2="150" y2="150" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="88" y1="78" x2="78" y2="78" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="212" y1="78" x2="222" y2="78" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="106" y1="34" x2="99" y2="27" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="194" y1="122" x2="201" y2="129" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="106" y1="122" x2="99" y2="129" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="194" y1="34" x2="201" y2="27" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<ellipse class="fillable" cx="55" cy="108" rx="42" ry="26" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="245" cy="112" rx="46" ry="28" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🦄 Unicorn', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="152" cy="138" rx="88" ry="56" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="198" cy="92" r="46" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M193,48 Q198,22 203,10 Q207,20 209,32 Q209,40 203,47 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="224" cy="70" rx="15" ry="22" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M66,143 Q56,128 52,188 L74,188 Q76,172 78,158 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M108,150 Q98,135 96,188 L118,188 Q118,172 112,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M185,152 Q178,137 176,188 L198,188 Q198,172 192,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M226,150 Q218,135 216,188 L238,188 Q238,172 232,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M108,94 Q98,74 93,52 Q114,58 130,78 Q140,94 140,108 Q124,105 108,94 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="213" cy="90" r="6" fill="#333"/>
<path d="M204,101 Q210,107 218,103" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`}
  ],
  K: [
    { label:'🌈 Rainbow', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="178" width="300" height="42" rx="0" fill="white" stroke="#333" stroke-width="2.5"/><!-- rainbow arcs - outline only --><path class="fillable" data-id="arc1" d="M20,178 Q150,10 280,178 L272,178 Q150,26 28,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc2" d="M38,178 Q150,30 262,178 L254,178 Q150,44 46,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc3" d="M55,178 Q150,50 245,178 L237,178 Q150,62 63,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc4" d="M72,178 Q150,68 228,178 L220,178 Q150,80 80,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc5" d="M89,178 Q150,86 211,178 L203,178 Q150,96 97,178Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- clouds - puffy bumpy outline --><path class="fillable" data-id="cl1" d="M30,55 Q30,35 50,35 Q52,20 68,22 Q72,10 88,14 Q102,6 110,20 Q124,18 126,32 Q136,32 136,46 Q136,58 124,58 L42,58 Q30,58 30,55Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- sun --><circle class="fillable" data-id="sun" cx="245" cy="38" r="26" fill="white" stroke="#333" stroke-width="2.5"/><line x1="245" y1="6" x2="245" y2="1" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="12" x2="275" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="277" y1="38" x2="282" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="64" x2="275" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="245" y1="70" x2="245" y2="75" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="64" x2="215" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="213" y1="38" x2="208" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="12" x2="215" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><!-- flowers --><circle class="fillable" data-id="f1c" cx="40" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f1p1" cx="40" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p2" cx="49" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p3" cx="31" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="40" y1="197" x2="40" y2="210" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2c" cx="265" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2p1" cx="265" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p2" cx="274" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p3" cx="256" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="265" y1="197" x2="265" y2="210" stroke="#333" stroke-width="2"/></svg>`},
    { label:'🦋 Butterfly', svg:`<svg class="coloring-svg" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="260" fill="#FAFAFA" rx="12"/><!-- top left wing --><path class="fillable" data-id="wTL" d="M148,130 Q100,50 40,60 Q10,65 20,100 Q30,130 148,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- top right wing --><path class="fillable" data-id="wTR" d="M152,130 Q200,50 260,60 Q290,65 280,100 Q270,130 152,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom left wing --><path class="fillable" data-id="wBL" d="M148,140 Q90,155 60,190 Q45,215 70,220 Q110,225 148,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom right wing --><path class="fillable" data-id="wBR" d="M152,140 Q210,155 240,190 Q255,215 230,220 Q190,225 152,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- wing spots --><circle class="fillable" data-id="sp1" cx="95" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp2" cx="205" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp3" cx="110" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp4" cx="190" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="148" rx="8" ry="48" fill="white" stroke="#333" stroke-width="2.5"/><!-- head --><circle class="fillable" data-id="head" cx="150" cy="92" r="12" fill="white" stroke="#333" stroke-width="2.5"/><!-- antennae --><path d="M144,82 Q132,58 124,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an1" cx="123" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><path d="M156,82 Q168,58 176,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an2" cx="177" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="bg1c" cx="28" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg1p" cx="28" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="38" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="18" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="bg2c" cx="272" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg2p" cx="272" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="282" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="262" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🏠 House', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="170" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="grass" x="0" y="170" width="300" height="70" fill="white" stroke="#333" stroke-width="2"/><!-- house wall --><rect class="fillable" data-id="wall" x="75" y="118" width="150" height="92" fill="white" stroke="#333" stroke-width="2.5"/><!-- roof --><polygon class="fillable" data-id="roof" points="60,120 150,50 240,120" fill="white" stroke="#333" stroke-width="2.5"/><!-- chimney --><rect class="fillable" data-id="chimney" x="183" y="62" width="26" height="40" fill="white" stroke="#333" stroke-width="2"/><!-- door --><rect class="fillable" data-id="door" x="127" y="158" width="46" height="52" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- doorknob --><circle cx="167" cy="185" r="3.5" fill="#333"/><!-- windows --><rect class="fillable" data-id="win1" x="86" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="104" y1="136" x2="104" y2="166" stroke="#333" stroke-width="1.5"/><line x1="86" y1="151" x2="122" y2="151" stroke="#333" stroke-width="1.5"/><rect class="fillable" data-id="win2" x="178" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="196" y1="136" x2="196" y2="166" stroke="#333" stroke-width="1.5"/><line x1="178" y1="151" x2="214" y2="151" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M28,52 Q28,34 46,34 Q48,20 62,22 Q66,10 80,14 Q92,8 100,20 Q112,18 114,30 Q122,30 122,44 Q122,54 112,54 L40,54 Q28,54 28,52Z" fill="white" stroke="#333" stroke-width="2"/><!-- cloud 2 --><path class="fillable" data-id="cl2" d="M170,38 Q170,24 184,24 Q186,14 196,16 Q200,8 210,11 Q218,6 224,16 Q232,15 233,25 Q240,25 240,36 Q240,44 232,44 L178,44 Q170,44 170,38Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="262" cy="32" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="262" y1="5" x2="262" y2="1" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="10" x2="288" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="289" y1="32" x2="293" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="54" x2="288" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="262" y1="59" x2="262" y2="63" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="54" x2="236" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="235" y1="32" x2="231" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="10" x2="236" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><!-- tree --><rect x="238" y="155" width="10" height="35" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="tree" cx="243" cy="144" rx="22" ry="24" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="fl1" cx="38" cy="185" r="8" fill="white" stroke="#333" stroke-width="2"/><line x1="38" y1="193" x2="38" y2="207" stroke="#333" stroke-width="2"/><circle cx="38" cy="176" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="46" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="30" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🐟 Ocean', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="90" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- water --><rect class="fillable" data-id="water" x="0" y="90" width="300" height="150" fill="white" stroke="#333" stroke-width="2"/><!-- waves --><path class="fillable" data-id="wv1" d="M0,88 Q25,76 50,88 Q75,100 100,88 Q125,76 150,88 Q175,100 200,88 Q225,76 250,88 Q275,100 300,88 L300,104 Q275,116 250,104 Q225,92 200,104 Q175,116 150,104 Q125,92 100,104 Q75,116 50,104 Q25,92 0,104Z" fill="white" stroke="#333" stroke-width="2"/><!-- big fish body --><ellipse class="fillable" data-id="fish1" cx="150" cy="158" rx="58" ry="32" fill="white" stroke="#333" stroke-width="2.5"/><!-- tail --><polygon class="fillable" data-id="tail1" points="92,158 66,136 66,180" fill="white" stroke="#333" stroke-width="2.5"/><!-- fin top --><path class="fillable" data-id="fin1" d="M150,126 Q162,106 172,126" fill="white" stroke="#333" stroke-width="2"/><!-- eye --><circle cx="188" cy="150" r="7" fill="white" stroke="#333" stroke-width="2"/><circle cx="189" cy="150" r="3" fill="#333"/><!-- mouth --><path d="M195,160 Q200,165 195,168" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/><!-- small fish 1 --><ellipse class="fillable" data-id="fish2" cx="55" cy="122" rx="26" ry="14" fill="white" stroke="#333" stroke-width="2"/><polygon class="fillable" data-id="tail2" points="29,122 14,112 14,132" fill="white" stroke="#333" stroke-width="2"/><circle cx="72" cy="118" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="73" cy="118" r="2" fill="#333"/><!-- small fish 2 --><ellipse class="fillable" data-id="fish3" cx="242" cy="132" rx="24" ry="13" fill="white" stroke="#333" stroke-width="2"/><polygon points="218,132 204,122 204,142" fill="white" stroke="#333" stroke-width="2"/><circle cx="258" cy="128" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="259" cy="128" r="2" fill="#333"/><!-- seaweed --><path class="fillable" data-id="sw1" d="M28,240 Q16,214 28,196 Q40,178 28,160" stroke="#333" stroke-width="7" fill="none" stroke-linecap="round"/><!-- starfish --><polygon class="fillable" data-id="star1" points="85,225 90,210 95,225 80,214 100,214" fill="white" stroke="#333" stroke-width="2"/><!-- bubbles --><circle cx="168" cy="114" r="5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="160" cy="103" r="3.5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="174" cy="97" r="4" fill="none" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M30,40 Q30,24 46,24 Q48,12 60,14 Q64,4 76,8 Q86,2 94,14 Q104,12 106,24 Q114,24 114,36 Q114,46 104,46 L42,46 Q30,46 30,40Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="252" cy="38" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="252" y1="11" x2="252" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="16" x2="278" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="279" y1="38" x2="283" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="60" x2="278" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="65" x2="252" y2="69" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="60" x2="226" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="225" y1="38" x2="221" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="16" x2="226" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🚂 Train', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="140" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="140" width="300" height="80" fill="white" stroke="#333" stroke-width="2"/><!-- tracks --><line x1="0" y1="175" x2="300" y2="175" stroke="#333" stroke-width="3"/><line x1="0" y1="185" x2="300" y2="185" stroke="#333" stroke-width="3"/><line x1="20" y1="175" x2="20" y2="185" stroke="#333" stroke-width="2.5"/><line x1="50" y1="175" x2="50" y2="185" stroke="#333" stroke-width="2.5"/><line x1="80" y1="175" x2="80" y2="185" stroke="#333" stroke-width="2.5"/><line x1="110" y1="175" x2="110" y2="185" stroke="#333" stroke-width="2.5"/><line x1="140" y1="175" x2="140" y2="185" stroke="#333" stroke-width="2.5"/><line x1="170" y1="175" x2="170" y2="185" stroke="#333" stroke-width="2.5"/><line x1="200" y1="175" x2="200" y2="185" stroke="#333" stroke-width="2.5"/><line x1="230" y1="175" x2="230" y2="185" stroke="#333" stroke-width="2.5"/><line x1="260" y1="175" x2="260" y2="185" stroke="#333" stroke-width="2.5"/><line x1="290" y1="175" x2="290" y2="185" stroke="#333" stroke-width="2.5"/><!-- engine body --><rect class="fillable" data-id="eng" x="30" y="105" width="90" height="68" rx="8" fill="white" stroke="#333" stroke-width="2.5"/><!-- engine cab --><rect class="fillable" data-id="cab" x="80" y="88" width="40" height="50" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- cab window --><rect class="fillable" data-id="cabwin" x="88" y="96" width="24" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- boiler dome --><ellipse class="fillable" data-id="dome" cx="55" cy="105" rx="14" ry="10" fill="white" stroke="#333" stroke-width="2"/><!-- smokestack --><rect class="fillable" data-id="stack" x="44" y="82" width="14" height="24" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- smoke puffs --><circle class="fillable" data-id="sm1" cx="51" cy="72" r="9" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm2" cx="62" cy="60" r="12" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm3" cx="76" cy="50" r="9" fill="white" stroke="#333" stroke-width="1.5"/><!-- engine wheels --><circle class="fillable" data-id="ew1" cx="52" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="52" cy="173" r="5" fill="#333"/><circle class="fillable" data-id="ew2" cx="92" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="92" cy="173" r="5" fill="#333"/><!-- carriage --><rect class="fillable" data-id="car1" x="140" y="115" width="80" height="58" rx="6" fill="white" stroke="#333" stroke-width="2.5"/><!-- carriage windows --><rect class="fillable" data-id="cw1" x="150" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><rect class="fillable" data-id="cw2" x="186" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- carriage wheels --><circle class="fillable" data-id="cw3" cx="158" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="158" cy="173" r="4" fill="#333"/><circle class="fillable" data-id="cw4" cx="204" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="204" cy="173" r="4" fill="#333"/><!-- connector --><line x1="120" y1="155" x2="140" y2="155" stroke="#333" stroke-width="3"/><!-- cloud --><path class="fillable" data-id="cl1" d="M180,30 Q180,16 194,16 Q196,6 206,8 Q210,0 220,3 Q228,-2 234,8 Q242,7 243,17 Q250,17 250,28 Q250,36 242,36 L188,36 Q180,36 180,30Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="270" cy="40" r="24" fill="white" stroke="#333" stroke-width="2"/><line x1="270" y1="11" x2="270" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="294" y1="16" x2="298" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="299" y1="40" x2="303" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="69" x2="270" y2="73" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="246" y1="64" x2="242" y2="68" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="241" y1="40" x2="237" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🦁 Lion', svg:`<svg class="coloring-svg" viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="280" fill="#FAFAFA" rx="12"/><!-- mane outer --><circle class="fillable" data-id="mane" cx="150" cy="148" r="85" fill="white" stroke="#333" stroke-width="2.5"/><!-- mane spikes around edge --><path class="fillable" data-id="mn1" d="M150,63 L158,82 L142,82Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn2" d="M193,72 L196,92 L180,86Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn3" d="M225,98 L222,118 L208,108Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn4" d="M236,140 L218,148 L220,132Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn5" d="M107,72 L120,86 L104,92Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn6" d="M75,98 L92,108 L78,118Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn7" d="M64,140 L80,132 L82,148Z" fill="white" stroke="#333" stroke-width="2"/><!-- face --><circle class="fillable" data-id="face" cx="150" cy="148" r="62" fill="white" stroke="#333" stroke-width="2.5"/><!-- ears --><ellipse class="fillable" data-id="ear1" cx="100" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="ear2" cx="200" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><!-- eyes --><circle class="fillable" data-id="eye1" cx="128" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="131" cy="138" r="6" fill="#333"/><circle class="fillable" data-id="eye2" cx="172" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="175" cy="138" r="6" fill="#333"/><!-- nose --><ellipse class="fillable" data-id="nose" cx="150" cy="162" rx="12" ry="9" fill="white" stroke="#333" stroke-width="2"/><!-- mouth --><path d="M144,170 Q150,180 156,170" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round"/><!-- whiskers --><line x1="100" y1="162" x2="132" y2="165" stroke="#333" stroke-width="1.5"/><line x1="100" y1="170" x2="132" y2="170" stroke="#333" stroke-width="1.5"/><line x1="168" y1="165" x2="200" y2="162" stroke="#333" stroke-width="1.5"/><line x1="168" y1="170" x2="200" y2="170" stroke="#333" stroke-width="1.5"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="234" rx="44" ry="36" fill="white" stroke="#333" stroke-width="2.5"/><!-- paws --><ellipse class="fillable" data-id="paw1" cx="114" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="paw2" cx="186" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><!-- tail --><path d="M194,240 Q230,230 240,255 Q248,272 232,275" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="tailtip" cx="228" cy="276" r="10" fill="white" stroke="#333" stroke-width="2"/></svg>`},,
    {label:'🌸 Flower Garden', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="178" width="300" height="42" fill="white" stroke="#333" stroke-width="2.5"/>
<line x1="75" y1="178" x2="75" y2="118" stroke="#333" stroke-width="3"/>
<line x1="150" y1="178" x2="150" y2="98" stroke="#333" stroke-width="3"/>
<line x1="225" y1="178" x2="225" y2="122" stroke="#333" stroke-width="3"/>
<circle class="fillable" cx="75" cy="106" r="26" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="75" cy="106" r="10" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="75" cy="78" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="75" cy="134" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="47" cy="106" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="103" cy="106" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="82" r="30" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="82" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="50" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="114" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="119" cy="82" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="181" cy="82" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="110" r="24" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="225" cy="110" r="9" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="85" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="135" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="200" cy="110" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="250" cy="110" r="11" fill="white" stroke="#333" stroke-width="2"/>
</svg>`},
    {label:'🐘 Elephant', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="152" cy="128" rx="92" ry="68" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="152" cy="68" r="52" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="114" cy="52" rx="22" ry="30" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="190" cy="52" rx="22" ry="30" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M132,94 Q122,110 116,128 Q110,148 114,164 Q117,175 128,178 Q140,180 142,168 Q144,154 140,140 Q137,126 142,114" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="80" cy="172" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="130" cy="180" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="182" cy="180" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="228" cy="172" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="135" cy="68" r="6" fill="#333"/>
<circle cx="169" cy="68" r="6" fill="#333"/>
<path d="M145,80 Q152,87 159,80" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`}
  ],
  '1': [
    { label:'🌈 Rainbow', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="178" width="300" height="42" rx="0" fill="white" stroke="#333" stroke-width="2.5"/><!-- rainbow arcs - outline only --><path class="fillable" data-id="arc1" d="M20,178 Q150,10 280,178 L272,178 Q150,26 28,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc2" d="M38,178 Q150,30 262,178 L254,178 Q150,44 46,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc3" d="M55,178 Q150,50 245,178 L237,178 Q150,62 63,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc4" d="M72,178 Q150,68 228,178 L220,178 Q150,80 80,178Z" fill="white" stroke="#333" stroke-width="2.5"/><path class="fillable" data-id="arc5" d="M89,178 Q150,86 211,178 L203,178 Q150,96 97,178Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- clouds - puffy bumpy outline --><path class="fillable" data-id="cl1" d="M30,55 Q30,35 50,35 Q52,20 68,22 Q72,10 88,14 Q102,6 110,20 Q124,18 126,32 Q136,32 136,46 Q136,58 124,58 L42,58 Q30,58 30,55Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- sun --><circle class="fillable" data-id="sun" cx="245" cy="38" r="26" fill="white" stroke="#333" stroke-width="2.5"/><line x1="245" y1="6" x2="245" y2="1" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="12" x2="275" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="277" y1="38" x2="282" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="271" y1="64" x2="275" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="245" y1="70" x2="245" y2="75" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="64" x2="215" y2="68" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="213" y1="38" x2="208" y2="38" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><line x1="219" y1="12" x2="215" y2="8" stroke="#333" stroke-width="2.5" stroke-linecap="round"/><!-- flowers --><circle class="fillable" data-id="f1c" cx="40" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f1p1" cx="40" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p2" cx="49" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f1p3" cx="31" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="40" y1="197" x2="40" y2="210" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2c" cx="265" cy="188" r="9" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="f2p1" cx="265" cy="178" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p2" cx="274" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="f2p3" cx="256" cy="183" r="6" fill="white" stroke="#333" stroke-width="1.5"/><line x1="265" y1="197" x2="265" y2="210" stroke="#333" stroke-width="2"/></svg>`},
    { label:'🦋 Butterfly', svg:`<svg class="coloring-svg" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="260" fill="#FAFAFA" rx="12"/><!-- top left wing --><path class="fillable" data-id="wTL" d="M148,130 Q100,50 40,60 Q10,65 20,100 Q30,130 148,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- top right wing --><path class="fillable" data-id="wTR" d="M152,130 Q200,50 260,60 Q290,65 280,100 Q270,130 152,138Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom left wing --><path class="fillable" data-id="wBL" d="M148,140 Q90,155 60,190 Q45,215 70,220 Q110,225 148,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- bottom right wing --><path class="fillable" data-id="wBR" d="M152,140 Q210,155 240,190 Q255,215 230,220 Q190,225 152,165Z" fill="white" stroke="#333" stroke-width="2.5"/><!-- wing spots --><circle class="fillable" data-id="sp1" cx="95" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp2" cx="205" cy="95" r="18" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp3" cx="110" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="sp4" cx="190" cy="175" r="12" fill="white" stroke="#333" stroke-width="2"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="148" rx="8" ry="48" fill="white" stroke="#333" stroke-width="2.5"/><!-- head --><circle class="fillable" data-id="head" cx="150" cy="92" r="12" fill="white" stroke="#333" stroke-width="2.5"/><!-- antennae --><path d="M144,82 Q132,58 124,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an1" cx="123" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><path d="M156,82 Q168,58 176,46" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="an2" cx="177" cy="44" r="5" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="bg1c" cx="28" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg1p" cx="28" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="38" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="18" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="bg2c" cx="272" cy="240" r="10" fill="white" stroke="#333" stroke-width="2"/><circle class="fillable" data-id="bg2p" cx="272" cy="228" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="282" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="262" cy="234" r="7" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🏠 House', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="170" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="grass" x="0" y="170" width="300" height="70" fill="white" stroke="#333" stroke-width="2"/><!-- house wall --><rect class="fillable" data-id="wall" x="75" y="118" width="150" height="92" fill="white" stroke="#333" stroke-width="2.5"/><!-- roof --><polygon class="fillable" data-id="roof" points="60,120 150,50 240,120" fill="white" stroke="#333" stroke-width="2.5"/><!-- chimney --><rect class="fillable" data-id="chimney" x="183" y="62" width="26" height="40" fill="white" stroke="#333" stroke-width="2"/><!-- door --><rect class="fillable" data-id="door" x="127" y="158" width="46" height="52" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- doorknob --><circle cx="167" cy="185" r="3.5" fill="#333"/><!-- windows --><rect class="fillable" data-id="win1" x="86" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="104" y1="136" x2="104" y2="166" stroke="#333" stroke-width="1.5"/><line x1="86" y1="151" x2="122" y2="151" stroke="#333" stroke-width="1.5"/><rect class="fillable" data-id="win2" x="178" y="136" width="36" height="30" rx="3" fill="white" stroke="#333" stroke-width="2"/><line x1="196" y1="136" x2="196" y2="166" stroke="#333" stroke-width="1.5"/><line x1="178" y1="151" x2="214" y2="151" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M28,52 Q28,34 46,34 Q48,20 62,22 Q66,10 80,14 Q92,8 100,20 Q112,18 114,30 Q122,30 122,44 Q122,54 112,54 L40,54 Q28,54 28,52Z" fill="white" stroke="#333" stroke-width="2"/><!-- cloud 2 --><path class="fillable" data-id="cl2" d="M170,38 Q170,24 184,24 Q186,14 196,16 Q200,8 210,11 Q218,6 224,16 Q232,15 233,25 Q240,25 240,36 Q240,44 232,44 L178,44 Q170,44 170,38Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="262" cy="32" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="262" y1="5" x2="262" y2="1" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="10" x2="288" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="289" y1="32" x2="293" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="284" y1="54" x2="288" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="262" y1="59" x2="262" y2="63" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="54" x2="236" y2="57" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="235" y1="32" x2="231" y2="32" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="240" y1="10" x2="236" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><!-- tree --><rect x="238" y="155" width="10" height="35" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="tree" cx="243" cy="144" rx="22" ry="24" fill="white" stroke="#333" stroke-width="2"/><!-- flowers --><circle class="fillable" data-id="fl1" cx="38" cy="185" r="8" fill="white" stroke="#333" stroke-width="2"/><line x1="38" y1="193" x2="38" y2="207" stroke="#333" stroke-width="2"/><circle cx="38" cy="176" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="46" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="30" cy="181" r="5" fill="white" stroke="#333" stroke-width="1.5"/></svg>`},
    { label:'🐟 Ocean', svg:`<svg class="coloring-svg" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="240" fill="#FAFAFA" rx="12"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="90" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- water --><rect class="fillable" data-id="water" x="0" y="90" width="300" height="150" fill="white" stroke="#333" stroke-width="2"/><!-- waves --><path class="fillable" data-id="wv1" d="M0,88 Q25,76 50,88 Q75,100 100,88 Q125,76 150,88 Q175,100 200,88 Q225,76 250,88 Q275,100 300,88 L300,104 Q275,116 250,104 Q225,92 200,104 Q175,116 150,104 Q125,92 100,104 Q75,116 50,104 Q25,92 0,104Z" fill="white" stroke="#333" stroke-width="2"/><!-- big fish body --><ellipse class="fillable" data-id="fish1" cx="150" cy="158" rx="58" ry="32" fill="white" stroke="#333" stroke-width="2.5"/><!-- tail --><polygon class="fillable" data-id="tail1" points="92,158 66,136 66,180" fill="white" stroke="#333" stroke-width="2.5"/><!-- fin top --><path class="fillable" data-id="fin1" d="M150,126 Q162,106 172,126" fill="white" stroke="#333" stroke-width="2"/><!-- eye --><circle cx="188" cy="150" r="7" fill="white" stroke="#333" stroke-width="2"/><circle cx="189" cy="150" r="3" fill="#333"/><!-- mouth --><path d="M195,160 Q200,165 195,168" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/><!-- small fish 1 --><ellipse class="fillable" data-id="fish2" cx="55" cy="122" rx="26" ry="14" fill="white" stroke="#333" stroke-width="2"/><polygon class="fillable" data-id="tail2" points="29,122 14,112 14,132" fill="white" stroke="#333" stroke-width="2"/><circle cx="72" cy="118" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="73" cy="118" r="2" fill="#333"/><!-- small fish 2 --><ellipse class="fillable" data-id="fish3" cx="242" cy="132" rx="24" ry="13" fill="white" stroke="#333" stroke-width="2"/><polygon points="218,132 204,122 204,142" fill="white" stroke="#333" stroke-width="2"/><circle cx="258" cy="128" r="4" fill="white" stroke="#333" stroke-width="1.5"/><circle cx="259" cy="128" r="2" fill="#333"/><!-- seaweed --><path class="fillable" data-id="sw1" d="M28,240 Q16,214 28,196 Q40,178 28,160" stroke="#333" stroke-width="7" fill="none" stroke-linecap="round"/><!-- starfish --><polygon class="fillable" data-id="star1" points="85,225 90,210 95,225 80,214 100,214" fill="white" stroke="#333" stroke-width="2"/><!-- bubbles --><circle cx="168" cy="114" r="5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="160" cy="103" r="3.5" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="174" cy="97" r="4" fill="none" stroke="#333" stroke-width="1.5"/><!-- cloud --><path class="fillable" data-id="cl1" d="M30,40 Q30,24 46,24 Q48,12 60,14 Q64,4 76,8 Q86,2 94,14 Q104,12 106,24 Q114,24 114,36 Q114,46 104,46 L42,46 Q30,46 30,40Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="252" cy="38" r="22" fill="white" stroke="#333" stroke-width="2"/><line x1="252" y1="11" x2="252" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="16" x2="278" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="279" y1="38" x2="283" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="274" y1="60" x2="278" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="252" y1="65" x2="252" y2="69" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="60" x2="226" y2="64" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="225" y1="38" x2="221" y2="38" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="230" y1="16" x2="226" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🚂 Train', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/><!-- sky --><rect class="fillable" data-id="sky" x="0" y="0" width="300" height="140" fill="white" stroke="#333" stroke-width="2" rx="12"/><!-- ground --><rect class="fillable" data-id="gnd" x="0" y="140" width="300" height="80" fill="white" stroke="#333" stroke-width="2"/><!-- tracks --><line x1="0" y1="175" x2="300" y2="175" stroke="#333" stroke-width="3"/><line x1="0" y1="185" x2="300" y2="185" stroke="#333" stroke-width="3"/><line x1="20" y1="175" x2="20" y2="185" stroke="#333" stroke-width="2.5"/><line x1="50" y1="175" x2="50" y2="185" stroke="#333" stroke-width="2.5"/><line x1="80" y1="175" x2="80" y2="185" stroke="#333" stroke-width="2.5"/><line x1="110" y1="175" x2="110" y2="185" stroke="#333" stroke-width="2.5"/><line x1="140" y1="175" x2="140" y2="185" stroke="#333" stroke-width="2.5"/><line x1="170" y1="175" x2="170" y2="185" stroke="#333" stroke-width="2.5"/><line x1="200" y1="175" x2="200" y2="185" stroke="#333" stroke-width="2.5"/><line x1="230" y1="175" x2="230" y2="185" stroke="#333" stroke-width="2.5"/><line x1="260" y1="175" x2="260" y2="185" stroke="#333" stroke-width="2.5"/><line x1="290" y1="175" x2="290" y2="185" stroke="#333" stroke-width="2.5"/><!-- engine body --><rect class="fillable" data-id="eng" x="30" y="105" width="90" height="68" rx="8" fill="white" stroke="#333" stroke-width="2.5"/><!-- engine cab --><rect class="fillable" data-id="cab" x="80" y="88" width="40" height="50" rx="5" fill="white" stroke="#333" stroke-width="2"/><!-- cab window --><rect class="fillable" data-id="cabwin" x="88" y="96" width="24" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- boiler dome --><ellipse class="fillable" data-id="dome" cx="55" cy="105" rx="14" ry="10" fill="white" stroke="#333" stroke-width="2"/><!-- smokestack --><rect class="fillable" data-id="stack" x="44" y="82" width="14" height="24" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- smoke puffs --><circle class="fillable" data-id="sm1" cx="51" cy="72" r="9" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm2" cx="62" cy="60" r="12" fill="white" stroke="#333" stroke-width="1.5"/><circle class="fillable" data-id="sm3" cx="76" cy="50" r="9" fill="white" stroke="#333" stroke-width="1.5"/><!-- engine wheels --><circle class="fillable" data-id="ew1" cx="52" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="52" cy="173" r="5" fill="#333"/><circle class="fillable" data-id="ew2" cx="92" cy="173" r="14" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="92" cy="173" r="5" fill="#333"/><!-- carriage --><rect class="fillable" data-id="car1" x="140" y="115" width="80" height="58" rx="6" fill="white" stroke="#333" stroke-width="2.5"/><!-- carriage windows --><rect class="fillable" data-id="cw1" x="150" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><rect class="fillable" data-id="cw2" x="186" y="124" width="22" height="18" rx="3" fill="white" stroke="#333" stroke-width="2"/><!-- carriage wheels --><circle class="fillable" data-id="cw3" cx="158" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="158" cy="173" r="4" fill="#333"/><circle class="fillable" data-id="cw4" cx="204" cy="173" r="12" fill="white" stroke="#333" stroke-width="2.5"/><circle cx="204" cy="173" r="4" fill="#333"/><!-- connector --><line x1="120" y1="155" x2="140" y2="155" stroke="#333" stroke-width="3"/><!-- cloud --><path class="fillable" data-id="cl1" d="M180,30 Q180,16 194,16 Q196,6 206,8 Q210,0 220,3 Q228,-2 234,8 Q242,7 243,17 Q250,17 250,28 Q250,36 242,36 L188,36 Q180,36 180,30Z" fill="white" stroke="#333" stroke-width="2"/><!-- sun --><circle class="fillable" data-id="sun" cx="270" cy="40" r="24" fill="white" stroke="#333" stroke-width="2"/><line x1="270" y1="11" x2="270" y2="7" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="294" y1="16" x2="298" y2="12" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="299" y1="40" x2="303" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="270" y1="69" x2="270" y2="73" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="246" y1="64" x2="242" y2="68" stroke="#333" stroke-width="2" stroke-linecap="round"/><line x1="241" y1="40" x2="237" y2="40" stroke="#333" stroke-width="2" stroke-linecap="round"/></svg>`},
    { label:'🦁 Lion', svg:`<svg class="coloring-svg" viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="280" fill="#FAFAFA" rx="12"/><!-- mane outer --><circle class="fillable" data-id="mane" cx="150" cy="148" r="85" fill="white" stroke="#333" stroke-width="2.5"/><!-- mane spikes around edge --><path class="fillable" data-id="mn1" d="M150,63 L158,82 L142,82Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn2" d="M193,72 L196,92 L180,86Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn3" d="M225,98 L222,118 L208,108Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn4" d="M236,140 L218,148 L220,132Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn5" d="M107,72 L120,86 L104,92Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn6" d="M75,98 L92,108 L78,118Z" fill="white" stroke="#333" stroke-width="2"/><path class="fillable" data-id="mn7" d="M64,140 L80,132 L82,148Z" fill="white" stroke="#333" stroke-width="2"/><!-- face --><circle class="fillable" data-id="face" cx="150" cy="148" r="62" fill="white" stroke="#333" stroke-width="2.5"/><!-- ears --><ellipse class="fillable" data-id="ear1" cx="100" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="ear2" cx="200" cy="100" rx="16" ry="18" fill="white" stroke="#333" stroke-width="2"/><!-- eyes --><circle class="fillable" data-id="eye1" cx="128" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="131" cy="138" r="6" fill="#333"/><circle class="fillable" data-id="eye2" cx="172" cy="138" r="14" fill="white" stroke="#333" stroke-width="2"/><circle cx="175" cy="138" r="6" fill="#333"/><!-- nose --><ellipse class="fillable" data-id="nose" cx="150" cy="162" rx="12" ry="9" fill="white" stroke="#333" stroke-width="2"/><!-- mouth --><path d="M144,170 Q150,180 156,170" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round"/><!-- whiskers --><line x1="100" y1="162" x2="132" y2="165" stroke="#333" stroke-width="1.5"/><line x1="100" y1="170" x2="132" y2="170" stroke="#333" stroke-width="1.5"/><line x1="168" y1="165" x2="200" y2="162" stroke="#333" stroke-width="1.5"/><line x1="168" y1="170" x2="200" y2="170" stroke="#333" stroke-width="1.5"/><!-- body --><ellipse class="fillable" data-id="body" cx="150" cy="234" rx="44" ry="36" fill="white" stroke="#333" stroke-width="2.5"/><!-- paws --><ellipse class="fillable" data-id="paw1" cx="114" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><ellipse class="fillable" data-id="paw2" cx="186" cy="263" rx="18" ry="12" fill="white" stroke="#333" stroke-width="2"/><!-- tail --><path d="M194,240 Q230,230 240,255 Q248,272 232,275" stroke="#333" stroke-width="3" fill="none" stroke-linecap="round"/><circle class="fillable" data-id="tailtip" cx="228" cy="276" r="10" fill="white" stroke="#333" stroke-width="2"/></svg>`},,
    {label:'🚀 Rocket', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<path class="fillable" d="M150,18 Q172,24 188,58 L188,148 Q188,160 176,165 L124,165 Q112,160 112,148 L112,58 Q128,24 150,18 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="150" cy="84" rx="24" ry="24" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="84" r="9" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="122" y="133" width="56" height="32" rx="5" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M112,133 Q86,144 76,170 Q88,173 112,162 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M188,133 Q214,144 224,170 Q212,173 188,162 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M122,163 Q112,174 108,190 L192,190 Q188,174 178,163 Z" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🤖 Robot', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="92" y="42" width="116" height="78" rx="16" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="118" y="120" width="64" height="62" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="78" y="126" width="42" height="52" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="180" y="126" width="42" height="52" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="122" y="182" width="24" height="32" rx="6" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="154" y="182" width="24" height="32" rx="6" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="132" y="20" width="36" height="26" rx="6" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="12" r="8" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="126" cy="76" rx="18" ry="18" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="126" cy="76" r="8" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="126" cy="76" r="3" fill="#333"/>
<ellipse class="fillable" cx="174" cy="76" rx="18" ry="18" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="174" cy="76" r="8" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="174" cy="76" r="3" fill="#333"/>
<path class="fillable" d="M126,102 Q138,110 150,108 Q162,110 174,102 L172,114 Q162,120 150,118 Q138,120 128,114 Z" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="128" y="132" width="44" height="26" rx="4" fill="white" stroke="#333" stroke-width="2"/>
</svg>`}
  ],
  '2': [
    {label:'🦕 Dinosaur', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M55,188 Q50,162 55,142 Q62,118 84,108 Q102,98 132,92 Q162,88 192,93 Q222,98 244,115 Q260,130 260,150 Q260,170 248,183 Q236,194 220,188 L78,188 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M84,108 Q90,82 96,66 Q102,50 113,46 Q122,43 126,52 Q130,61 122,76 Q114,88 106,98 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M206,114 Q222,98 238,88 Q250,80 257,85 Q263,92 254,103 Q244,114 228,122 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="248" cy="180" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="78" cy="182" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="110" cy="74" r="5" fill="#333"/>
<path d="M102,60 L108,57 L106,64 Z" fill="#333"/>
</svg>`},
    {label:'🐠 Under the Sea', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<ellipse class="fillable" cx="100" cy="110" rx="46" ry="29" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M146,110 L168,88 L168,132 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="78" cy="106" r="5" fill="#333"/>
<ellipse class="fillable" cx="220" cy="72" rx="36" ry="21" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M256,72 L274,56 L274,88 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="200" cy="68" r="5" fill="#333"/>
<path class="fillable" d="M28,178 Q40,158 56,168 Q62,148 78,162 Q84,142 100,158 Q110,142 118,160 L118,192 Q80,202 28,192 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M182,186 Q198,166 214,178 Q218,158 234,172 Q242,154 256,170 Q266,155 278,172 L278,202 Q236,210 182,202 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="240" cy="150" rx="22" ry="36" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="58" cy="152" rx="20" ry="32" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M130,32 Q136,12 148,9 Q160,8 162,22 Q166,12 174,14 Q178,25 170,36 Q162,46 150,50 Q138,46 130,32 Z" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🐄 On the Farm', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="172" width="300" height="48" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="12" y="178" width="62" height="40" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<polygon class="fillable" points="6,180 43,142 80,180" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="32" y="198" width="22" height="20" rx="2" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="222" y="168" width="74" height="50" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<polygon class="fillable" points="216,170 259,132 300,170" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="248" y="190" width="22" height="28" rx="2" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M102,172 Q102,146 112,138 Q120,132 132,134 Q146,132 152,142 Q158,134 168,136 Q178,142 178,156 L178,172 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="140" cy="172" rx="40" ry="14" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="120" cy="150" r="5" fill="#333"/>
<circle cx="156" cy="150" r="5" fill="#333"/>
<path d="M128,158 Q140,164 152,158" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse class="fillable" cx="54" cy="108" rx="30" ry="20" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="54" cy="86" r="16" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="48" cy="82" r="4" fill="#333"/>
<circle cx="60" cy="82" r="4" fill="#333"/>
</svg>`},
    {label:'🏰 Magical Castle', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="92" y="95" width="116" height="93" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="28" y="115" width="70" height="73" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="202" y="115" width="70" height="73" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="28" y="93" width="19" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="51" y="93" width="19" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="74" y="93" width="18" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="202" y="93" width="19" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="225" y="93" width="19" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="248" y="93" width="19" height="24" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="108" y="62" width="19" height="35" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="131" y="62" width="19" height="35" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="154" y="62" width="19" height="35" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="177" y="62" width="19" height="35" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M120,96 Q150,62 180,96" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="132" y="144" width="36" height="44" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="110" cy="145" rx="14" ry="20" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="190" cy="145" rx="14" ry="20" fill="white" stroke="#333" stroke-width="2"/>
<line x1="150" y1="30" x2="150" y2="8" stroke="#333" stroke-width="3"/>
<polygon class="fillable" points="144,30 150,8 156,30" fill="white" stroke="#333" stroke-width="2"/>
</svg>`},
    {label:'🌳 Tree House', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="134" y="168" width="32" height="20" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="150" cy="105" rx="88" ry="72" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="78" cy="135" rx="56" ry="44" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="222" cy="135" rx="56" ry="44" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="106" y="95" width="88" height="68" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<polygon class="fillable" points="99,97 150,60 201,97" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="138" y="132" width="24" height="30" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="112" y="103" width="22" height="20" rx="3" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="166" y="103" width="22" height="20" rx="3" fill="white" stroke="#333" stroke-width="2"/>
<line x1="140" y1="172" x2="140" y2="188" stroke="#333" stroke-width="2.5"/>
<line x1="150" y1="172" x2="150" y2="188" stroke="#333" stroke-width="2.5"/>
<line x1="160" y1="172" x2="160" y2="188" stroke="#333" stroke-width="2.5"/>
</svg>`}
  ],
  '3': [
    {label:'🎈 Hot Air Balloon', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<path class="fillable" d="M150,18 Q212,16 234,65 Q248,102 242,138 Q232,162 150,164 Q68,162 58,138 Q52,102 66,65 Q88,16 150,18 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path d="M150,18 Q152,91 150,164" stroke="#333" stroke-width="2" fill="none"/>
<path d="M66,68 Q150,71 234,68" stroke="#333" stroke-width="2" fill="none"/>
<path d="M55,113 Q150,117 245,113" stroke="#333" stroke-width="2" fill="none"/>
<path class="fillable" d="M150,18 Q128,91 150,164" stroke="#333" stroke-width="1.5" fill="none"/>
<path class="fillable" d="M150,18 Q172,91 150,164" stroke="#333" stroke-width="1.5" fill="none"/>
<line x1="108" y1="163" x2="113" y2="183" stroke="#333" stroke-width="2"/>
<line x1="192" y1="163" x2="187" y2="183" stroke="#333" stroke-width="2"/>
<line x1="133" y1="163" x2="133" y2="181" stroke="#333" stroke-width="2"/>
<line x1="167" y1="163" x2="167" y2="181" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="110" y="181" width="80" height="30" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🌙 Space Scene', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<circle class="fillable" cx="150" cy="112" r="58" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="150" cy="112" rx="84" ry="20" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M150,55 Q168,52 170,63 Q176,52 184,57 Q179,68 168,70 Q159,74 150,66 Z" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="38" cy="38" r="22" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="50" cy="32" r="14" fill="#FAFAFA" style="pointer-events:none"/>
<circle class="fillable" cx="262" cy="162" r="18" fill="white" stroke="#333" stroke-width="2.5"/>
<polygon class="fillable" points="28,182 36,160 44,182 20,170 52,170" fill="white" stroke="#333" stroke-width="2"/>
<polygon class="fillable" points="254,38 260,20 266,38 247,28 273,28" fill="white" stroke="#333" stroke-width="2"/>
<polygon class="fillable" points="82,20 87,8 92,20 79,13 95,13" fill="white" stroke="#333" stroke-width="1.5"/>
<polygon class="fillable" points="198,188 202,177 206,188 195,182 209,182" fill="white" stroke="#333" stroke-width="1.5"/>
</svg>`},
    {label:'🚒 Fire Truck', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="195" width="300" height="25" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="18" y="122" width="264" height="68" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M18,122 L18,97 Q18,82 34,82 L122,82 Q132,82 137,93 L152,122 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="152" y="92" width="128" height="30" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="24" y="90" width="52" height="36" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<line x1="50" y1="90" x2="50" y2="126" stroke="#333" stroke-width="1.5"/>
<line x1="24" y1="108" x2="76" y2="108" stroke="#333" stroke-width="1.5"/>
<rect class="fillable" x="163" y="99" width="42" height="20" rx="3" fill="white" stroke="#333" stroke-width="1.5"/>
<circle class="fillable" cx="74" cy="192" r="27" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="74" cy="192" r="13" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="74" cy="192" r="5" fill="#333"/>
<circle class="fillable" cx="222" cy="192" r="27" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="222" cy="192" r="13" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="222" cy="192" r="5" fill="#333"/>
<rect class="fillable" x="152" y="132" width="118" height="28" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="18" y="132" width="56" height="28" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="83" y="132" width="56" height="28" rx="4" fill="white" stroke="#333" stroke-width="2"/>
</svg>`},
    {label:'⚓ Pirate Ship', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<path class="fillable" d="M18,168 Q24,194 50,198 L250,198 Q276,194 282,168 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="48" y="122" width="204" height="50" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="78" y="88" width="82" height="38" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="173" y="98" width="60" height="28" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<line x1="150" y1="28" x2="150" y2="122" stroke="#333" stroke-width="3"/>
<rect class="fillable" x="118" y="36" width="64" height="44" rx="2" fill="white" stroke="#333" stroke-width="2"/>
<line x1="150" y1="36" x2="150" y2="80" stroke="#333" stroke-width="2"/>
<line x1="118" y1="58" x2="182" y2="58" stroke="#333" stroke-width="2"/>
<line x1="68" y1="8" x2="68" y2="90" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M68,13 Q88,19 106,30 Q88,38 68,40 Z" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="148" cy="56" r="8" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="152" cy="56" r="4" fill="#333"/>
<path class="fillable" d="M18,168 Q38,158 58,164 Q78,158 98,164 Q118,158 138,164 Q158,158 178,164 Q198,158 218,164 Q238,158 258,164 Q270,160 282,168 Z" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🐘 Elephant', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="152" cy="128" rx="92" ry="68" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="152" cy="68" r="52" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="114" cy="52" rx="22" ry="30" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="190" cy="52" rx="22" ry="30" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M132,94 Q122,110 116,128 Q110,148 114,164 Q117,175 128,178 Q140,180 142,168 Q144,154 140,140 Q137,126 142,114" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="80" cy="172" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="130" cy="180" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="182" cy="180" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="228" cy="172" rx="24" ry="14" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="135" cy="68" r="6" fill="#333"/>
<circle cx="169" cy="68" r="6" fill="#333"/>
<path d="M145,80 Q152,87 159,80" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`}
  ],
  '4': [
    {label:'🦄 Unicorn', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="152" cy="138" rx="88" ry="56" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="198" cy="92" r="46" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M193,48 Q198,22 203,10 Q207,20 209,32 Q209,40 203,47 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="224" cy="70" rx="15" ry="22" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M66,143 Q56,128 52,188 L74,188 Q76,172 78,158 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M108,150 Q98,135 96,188 L118,188 Q118,172 112,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M185,152 Q178,137 176,188 L198,188 Q198,172 192,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M226,150 Q218,135 216,188 L238,188 Q238,172 232,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M108,94 Q98,74 93,52 Q114,58 130,78 Q140,94 140,108 Q124,105 108,94 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="213" cy="90" r="6" fill="#333"/>
<path d="M204,101 Q210,107 218,103" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>`},
    {label:'🤖 Robot', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="92" y="42" width="116" height="78" rx="16" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="118" y="120" width="64" height="62" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="78" y="126" width="42" height="52" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="180" y="126" width="42" height="52" rx="8" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="122" y="182" width="24" height="32" rx="6" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="154" y="182" width="24" height="32" rx="6" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="132" y="20" width="36" height="26" rx="6" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="12" r="8" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="126" cy="76" rx="18" ry="18" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="126" cy="76" r="8" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="126" cy="76" r="3" fill="#333"/>
<ellipse class="fillable" cx="174" cy="76" rx="18" ry="18" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="174" cy="76" r="8" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="174" cy="76" r="3" fill="#333"/>
<path class="fillable" d="M126,102 Q138,110 150,108 Q162,110 174,102 L172,114 Q162,120 150,118 Q138,120 128,114 Z" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="128" y="132" width="44" height="26" rx="4" fill="white" stroke="#333" stroke-width="2"/>
</svg>`},
    {label:'🚀 Rocket', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<path class="fillable" d="M150,18 Q172,24 188,58 L188,148 Q188,160 176,165 L124,165 Q112,160 112,148 L112,58 Q128,24 150,18 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="150" cy="84" rx="24" ry="24" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="84" r="9" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="122" y="133" width="56" height="32" rx="5" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M112,133 Q86,144 76,170 Q88,173 112,162 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M188,133 Q214,144 224,170 Q212,173 188,162 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M122,163 Q112,174 108,190 L192,190 Q188,174 178,163 Z" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'☀️ Sunny Day', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="155" width="300" height="65" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="150" cy="78" r="50" fill="white" stroke="#333" stroke-width="2.5"/>
<line x1="150" y1="16" x2="150" y2="6" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="150" y1="140" x2="150" y2="150" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="88" y1="78" x2="78" y2="78" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="212" y1="78" x2="222" y2="78" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="106" y1="34" x2="99" y2="27" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="194" y1="122" x2="201" y2="129" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="106" y1="122" x2="99" y2="129" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<line x1="194" y1="34" x2="201" y2="27" stroke="#333" stroke-width="3" stroke-linecap="round"/>
<ellipse class="fillable" cx="55" cy="108" rx="42" ry="26" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="245" cy="112" rx="46" ry="28" fill="white" stroke="#333" stroke-width="2.5"/>
</svg>`},
    {label:'🌸 Flower Garden', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="178" width="300" height="42" fill="white" stroke="#333" stroke-width="2.5"/>
<line x1="75" y1="178" x2="75" y2="118" stroke="#333" stroke-width="3"/>
<line x1="150" y1="178" x2="150" y2="98" stroke="#333" stroke-width="3"/>
<line x1="225" y1="178" x2="225" y2="122" stroke="#333" stroke-width="3"/>
<circle class="fillable" cx="75" cy="106" r="26" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="75" cy="106" r="10" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="75" cy="78" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="75" cy="134" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="47" cy="106" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="103" cy="106" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="82" r="30" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="150" cy="82" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="50" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="114" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="119" cy="82" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="181" cy="82" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="110" r="24" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="225" cy="110" r="9" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="85" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="225" cy="135" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="200" cy="110" r="11" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="250" cy="110" r="11" fill="white" stroke="#333" stroke-width="2"/>
</svg>`}
  ],
  '5': [
    {label:'👸 Princess', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<circle class="fillable" cx="150" cy="68" r="40" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M112,98 Q90,90 84,66 Q80,50 88,40 Q78,45 74,62 Q70,80 78,95 Q87,112 106,116 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M188,98 Q210,90 216,66 Q220,50 212,40 Q222,45 226,62 Q230,80 222,95 Q213,112 194,116 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M114,108 Q100,122 96,188 L204,188 Q200,122 186,108 Q168,118 150,118 Q132,118 114,108 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M96,188 Q60,178 38,198 L96,198 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M204,188 Q240,178 262,198 L204,198 Z" fill="white" stroke="#333" stroke-width="2"/>
<polygon class="fillable" points="130,32 150,8 170,32 162,24 150,40 138,24" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="130" cy="30" r="6" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="150" cy="10" r="6" fill="white" stroke="#333" stroke-width="2"/>
<circle class="fillable" cx="170" cy="30" r="6" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="135" cy="65" r="5" fill="#333"/>
<circle cx="165" cy="65" r="5" fill="#333"/>
<path d="M140,79 Q150,86 160,79" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse class="fillable" cx="118" cy="152" rx="20" ry="32" fill="white" stroke="#333" stroke-width="1.5"/>
<ellipse class="fillable" cx="150" cy="155" rx="20" ry="30" fill="white" stroke="#333" stroke-width="1.5"/>
<ellipse class="fillable" cx="182" cy="152" rx="20" ry="32" fill="white" stroke="#333" stroke-width="1.5"/>
</svg>`},
    {label:'🚌 School Bus', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="195" width="300" height="25" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="18" y="108" width="264" height="78" rx="10" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M18,118 L18,108 Q18,97 30,93 L82,83 L262,83 Q272,83 272,93 L272,108 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="26" y="85" width="46" height="32" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="80" y="85" width="46" height="32" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="134" y="85" width="46" height="32" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="188" y="85" width="46" height="32" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="242" y="91" width="24" height="24" rx="4" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="78" y="134" width="32" height="44" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="68" cy="195" r="26" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="68" cy="195" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="68" cy="195" r="5" fill="#333"/>
<circle class="fillable" cx="220" cy="195" r="26" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="220" cy="195" r="12" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="220" cy="195" r="5" fill="#333"/>
<line x1="18" y1="145" x2="282" y2="145" stroke="#333" stroke-width="2" stroke-dasharray="8,6"/>
</svg>`},
    {label:'🧜 Mermaid', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<circle class="fillable" cx="150" cy="56" r="37" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M104,67 Q88,57 78,41 Q76,54 83,67 Q76,70 80,81 Q88,84 104,80 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M196,67 Q212,57 222,41 Q224,54 217,67 Q224,70 220,81 Q212,84 196,80 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M116,90 Q108,103 106,133 Q104,158 113,173 Q126,188 150,191 Q174,188 187,173 Q196,158 194,133 Q192,103 184,90 Q168,100 150,100 Q132,100 116,90 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M106,133 Q98,130 88,138 Q80,151 86,165 Q93,180 108,172 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M194,133 Q202,130 212,138 Q220,151 214,165 Q207,180 192,172 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M113,173 Q108,188 98,201 Q118,208 138,200 Q128,192 126,180 Z" fill="white" stroke="#333" stroke-width="2"/>
<path class="fillable" d="M187,173 Q192,188 202,201 Q182,208 162,200 Q172,192 174,180 Z" fill="white" stroke="#333" stroke-width="2"/>
<circle cx="136" cy="53" r="5" fill="#333"/>
<circle cx="164" cy="53" r="5" fill="#333"/>
<path d="M140,68 Q150,74 160,68" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
<path class="fillable" d="M128,26 Q134,14 150,11 Q166,14 172,26 L164,29 Q157,20 150,20 Q143,20 136,29 Z" fill="white" stroke="#333" stroke-width="2"/>
</svg>`},
    {label:'🌴 Jungle', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="180" width="300" height="40" fill="white" stroke="#333" stroke-width="2"/>
<rect class="fillable" x="28" y="122" width="24" height="58" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M12,122 Q40,70 68,122 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M6,100 Q40,52 74,100 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="248" y="118" width="24" height="62" rx="4" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M232,118 Q260,66 288,118 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M226,96 Q260,48 294,96 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<rect class="fillable" x="138" y="132" width="24" height="48" rx="3" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M122,132 Q150,84 178,132 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M116,110 Q150,66 184,110 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="90" cy="150" rx="36" ry="24" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="90" cy="128" r="22" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="82" cy="124" r="5" fill="#333"/>
<circle cx="98" cy="124" r="5" fill="#333"/>
<path d="M84,134 Q90,140 96,134" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse class="fillable" cx="210" cy="158" rx="30" ry="20" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="210" cy="140" r="18" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="204" cy="136" r="4" fill="#333"/>
<circle cx="216" cy="136" r="4" fill="#333"/>
</svg>`},
    {label:'🐲 Dragon', svg:`<svg class="coloring-svg" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
<rect width="300" height="220" fill="#FAFAFA" rx="12" style="pointer-events:none;"/>
<rect class="fillable" x="0" y="188" width="300" height="32" fill="white" stroke="#333" stroke-width="2"/>
<ellipse class="fillable" cx="148" cy="140" rx="85" ry="55" fill="white" stroke="#333" stroke-width="2.5"/>
<circle class="fillable" cx="200" cy="88" r="44" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M200,44 Q188,26 178,20 Q172,30 176,44 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M200,44 Q212,26 222,20 Q228,30 224,44 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<ellipse class="fillable" cx="228" cy="66" rx="16" ry="22" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M62,148 Q50,130 46,188 L68,188 Q70,170 66,158 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M108,155 Q96,138 94,188 L116,188 Q116,170 110,162 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M186,152 Q178,136 176,188 L198,188 Q198,170 192,160 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M226,148 Q218,132 216,188 L238,188 Q238,170 232,158 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M105,100 Q94,80 88,58 Q108,64 126,84 Q136,100 136,115 Q120,112 105,100 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<path class="fillable" d="M220,135 Q245,132 265,120 Q270,132 258,140 Q244,148 222,144 Z" fill="white" stroke="#333" stroke-width="2.5"/>
<circle cx="215" cy="86" r="6" fill="#333"/>
<path d="M206,98 Q212,105 220,100" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse class="fillable" cx="230" cy="76" rx="10" ry="6" fill="white" stroke="#333" stroke-width="1.5"/>
</svg>`}
  ],
};
var BOOKS={
    PreK:[
      {t:'The Tale of Peter Rabbit',ia:'thetaleofpeterrabb00pott_2',d:'Beatrix Potters mischievous little rabbit'},
      {t:'Little Red Riding Hood',ia:'littleredridingh00perrrich',d:'A beloved fairy tale classic'},
      {t:'The Three Bears',ia:'storyofthreebear00south',d:'Goldilocks visits the three bears'},
      {t:'Aesops Fables',ia:'aesopsfables00aeso_5',d:'Classic animal stories with lessons'},
      {t:'Jack and the Beanstalk',ia:'jackandbeanstalk00unkn_4',d:'Jack climbs a magical beanstalk'},
      {t:'Pinocchio',ia:'adventuresofpinoc00coll',d:'A wooden puppet who wants to be real'}
    ],
    K:[
      {t:'Alice in Wonderland',ia:'alicesadventuresiu00carr',d:'Alice falls into a wonderfully strange world'},
      {t:'The Jungle Book',ia:'junglebook00kipling',d:'Mowgli is raised by wolves in the jungle'},
      {t:'The Wind in the Willows',ia:'windinthewillows00grah',d:'Mole Rat Badger and Toad by the river'},
      {t:'Cinderella',ia:'cinderellaorliitl00perrrich',d:'The classic fairy tale of Cinderella'},
      {t:'Sleeping Beauty',ia:'sleepingbeautyandother',d:'A princess and a magical curse'},
      {t:'The Wonderful Wizard of Oz',ia:'wonderfulwizardofo00baum',d:'Dorothy travels to the land of Oz'}
    ],
    1:[
      {t:'Treasure Island',ia:'treasureisland00stevgoog',d:'Pirates treasure and high adventure'},
      {t:'Black Beauty',ia:'blackbeauty00sewarich',d:'A horse tells his own life story'},
      {t:'Little Women',ia:'littlewomen00louirich',d:'The March sisters growing up together'},
      {t:'The Secret Garden',ia:'secretgarden00burn',d:'Mary discovers a hidden magical garden'},
      {t:'Adventures of Tom Sawyer',ia:'adventuresoftomsa00mark',d:'Tom and Huck have wild adventures'},
      {t:'A Little Princess',ia:'littleprincess00burn_0',d:'Sara Crewe faces hardship with grace'}
    ],
    2:[
      {t:'Robinson Crusoe',ia:'robinsoncrusoe00defogoog',d:'Stranded alone on an island for years'},
      {t:'Call of the Wild',ia:'callofwild00londgoog',d:'Buck the dog in the Alaskan wilderness'},
      {t:'Pollyanna',ia:'pollyanna00eleanor',d:'Pollyanna finds something to be glad about'},
      {t:'Around the World in 80 Days',ia:'aroundworldineigh00verne',d:'A race around the globe in 80 days'},
      {t:'Kidnapped',ia:'kidnapped00stev_0',d:'David Balfour has Scottish adventures'},
      {t:'Swiss Family Robinson',ia:'swissfamilyrobins00wyss',d:'A family stranded on a tropical island'}
    ],
    3:[
      {t:'Twenty Thousand Leagues',ia:'twentythousandlea00vern',d:'Captain Nemos undersea adventures'},
      {t:'The Three Musketeers',ia:'threemusketeers00dumaurich',d:'All for one and one for all'},
      {t:'Journey to the Center of the Earth',ia:'journeytocenterof00vern_0',d:'An expedition deep underground'},
      {t:'Don Quixote',ia:'donquixote00cerv',d:'The adventures of a knight and his squire'},
      {t:'Gullivers Travels',ia:'gulliverstravels00swif',d:'Gulliver travels to strange lands'},
      {t:'The Count of Monte Cristo',ia:'countofmontecristo00duma',d:'Edmond Dantes seeks justice'}
    ],
    4:[
      {t:'Frankenstein',ia:'frankenstein00marygoog',d:'The classic tale of creation gone wrong'},
      {t:'The Time Machine',ia:'timemachine00well',d:'A traveler journeys to the far future'},
      {t:'Jane Eyre',ia:'janeeyre00charlgoog',d:'Jane Eyre finds love and independence'},
      {t:'The Invisible Man',ia:'invisibleman00well',d:'A scientist makes himself invisible'},
      {t:'Dracula',ia:'draculabram00stok',d:'The classic vampire story'},
      {t:'The Picture of Dorian Gray',ia:'pictureofdoriangr00wild',d:'A portrait that never ages'}
    ],
    5:[
      {t:'Great Expectations',ia:'greatexpectation00dickgoog',d:'Pip rises from humble origins'},
      {t:'David Copperfield',ia:'davidcopperfield00dickgoog',d:'The life of David Copperfield'},
      {t:'Les Miserables',ia:'lesmisrables00hugogoog',d:'Justice mercy and redemption in France'},
      {t:'Moby Dick',ia:'mobydick00melv',d:'The hunt for the great white whale'},
      {t:'The Hunchback of Notre Dame',ia:'hunchbackofnotred00hugo',d:'Quasimodo and the bells of Paris'},
      {t:'Around the World in 80 Days',ia:'aroundworldin80da00vern',d:'Phileas Fogg races around the globe'}
    ]
  };

const LESSON_CARDS = {
  Math: {
    icon:'🔢',
    lessons: [
      { title:'Place Value Power!', text:'Every digit in a number has a place value. In 456, the 4 is in the hundreds place (= 400), the 5 is in the tens place (= 50), and the 6 is in the ones place (= 6).' },
      { title:'Multiplication Magic', text:'Multiplication is repeated addition! 4 × 3 means 4 groups of 3, or 3+3+3+3 = 12. The order doesn’t matter: 4×3 = 3×4.' },
      { title:'Fractions', text:'A fraction shows equal parts of a whole. In ¾, the bottom number (denominator) tells you how many equal parts total, and the top number (numerator) tells you how many parts you have.' },
      { title:'Area & Perimeter', text:'Perimeter is the distance AROUND a shape — add all the sides. Area is the space INSIDE a shape — for rectangles, multiply length × width.' },
      { title:'Order of Operations', text:'When solving math problems, always: Parentheses first, then Multiplication/Division left to right, then Addition/Subtraction left to right. Remember: Please My Dear Aunt Sally!' },
    ]
  },
  Science: {
    icon:'🔬',
    lessons: [
      { title:'The Scientific Method', text:'Scientists ask a question, form a hypothesis (educated guess), test it with an experiment, record data, and draw a conclusion. This process helps us discover how the world works!' },
      { title:'Food Chains & Webs', text:'In a food chain, energy passes from producers (plants) to consumers (animals that eat plants) to apex predators. Food webs show how many food chains connect in an ecosystem.' },
      { title:'States of Matter', text:'Everything is made of matter! Solids have a definite shape and volume. Liquids have definite volume but take the shape of their container. Gases expand to fill any space.' },
      { title:'The Water Cycle', text:'Water evaporates from oceans and lakes → rises as water vapor → cools and forms clouds (condensation) → falls as precipitation (rain/snow) → flows back to oceans. It’s a never-ending cycle!' },
      { title:'Cells: Building Blocks of Life', text:'All living things are made of cells — the smallest unit of life. Plant cells have a cell wall and chloroplasts (for photosynthesis). Animal cells do not have cell walls.' },
    ]
  },
  'Social Studies': {
    icon:'🌍',
    lessons: [
      { title:'Primary vs. Secondary Sources', text:'A primary source is an original document or artifact from the time period being studied (diary, photograph, speech). A secondary source analyzes or interprets primary sources (textbook, documentary).' },
      { title:'Supply & Demand', text:'When many people want something (high demand) and there is little of it (low supply), the price goes up. When supply is high and demand is low, the price goes down.' },
      { title:'Branches of Government', text:'The U.S. government has 3 branches: Legislative (Congress makes laws), Executive (President enforces laws), and Judicial (Supreme Court interprets laws). Each branch checks the others’ power.' },
      { title:'The Civil Rights Movement', text:'In the 1950s-60s, brave Americans like Rosa Parks, Martin Luther King Jr., and John Lewis fought to end racial segregation and ensure equal rights for all citizens regardless of race.' },
      { title:'World Geography', text:'The world has 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America. It has 5 oceans: Pacific, Atlantic, Indian, Southern, and Arctic.' },
    ]
  },
  Reading: {
    icon:'📖',
    lessons: [
      { title:'Story Elements', text:'Every story has: a Setting (where/when), Characters (who), a Problem/Conflict, Rising Action (events building tension), a Climax (most exciting moment), and Resolution (how it ends).' },
      { title:'Point of View', text:'First person uses "I" — the narrator IS a character. Third person uses "he/she/they" — the narrator is outside the story. Point of view changes how we experience the story!' },
      { title:'Context Clues', text:'When you find an unfamiliar word, look at the words and sentences around it for clues about the meaning. Authors often define hard words nearby or give examples.' },
      { title:'Compare & Contrast', text:'When you compare things you find similarities. When you contrast things you find differences. Signal words: "similarly, both, alike" (compare) vs. "however, but, unlike" (contrast).' },
      { title:'Main Idea & Details', text:'The main idea is what a passage is mostly about. Supporting details are facts, examples, or reasons that explain or prove the main idea. Ask: "What is this MOSTLY about?"' },
    ]
  },
  'Language Arts': {
    icon:'✏️',
    lessons: [
      { title:'Parts of Speech', text:'Every word has a job! Nouns name people/places/things. Verbs show action or state of being. Adjectives describe nouns. Adverbs describe verbs. Prepositions show location or time.' },
      { title:'Prefixes & Suffixes', text:'Prefixes come before a root word and change its meaning (un- means "not": unhappy). Suffixes come after a root word (-ful means "full of": joyful). Knowing these unlocks thousands of words!' },
      { title:'Figurative Language', text:'Simile: comparing using "like" or "as" (fast as lightning). Metaphor: saying something IS something else (he is a lion). Personification: giving human traits to non-human things (the wind whispered).' },
      { title:'Paragraph Structure', text:'A strong paragraph has a topic sentence (main idea), supporting sentences (details/evidence), and a concluding sentence (wraps up the idea). This is the building block of all writing!' },
    ]
  },
  'Social Emotional': {
    icon:'💛',
    lessons: [
      { title:'Growth Mindset', text:'With a fixed mindset, people believe abilities are set. With a growth mindset, people believe they can improve through effort and learning. Your brain literally grows stronger when you work hard!' },
      { title:'Empathy', text:'Empathy means understanding and sharing the feelings of others. It’s different from sympathy (feeling sorry for someone). Try asking: "How might this person be feeling, and why?"' },
      { title:'Conflict Resolution', text:'When you disagree with someone, try: 1) Stay calm, 2) Listen to understand their view, 3) Use "I feel..." statements, 4) Look for solutions that help BOTH of you. This is called finding common ground.' },
    ]
  }
};

const SKILL_PATHWAYS = {
  PreK: [
    { id:'abc',      label:'ABC Recognition',  icon:'🔤', desc:'Name all 26 letters',      standard:'CCSS.RF.K.1d' },
    { id:'sounds',   label:'Letter Sounds',    icon:'🔊', desc:'Each letter makes a sound', standard:'CCSS.RF.K.3a' },
    { id:'rhyme',    label:'Rhyming',           icon:'🎵', desc:'Cat, hat, bat rhyme!',      standard:'CCSS.RF.K.2a' },
    { id:'count',    label:'Counting to 20',   icon:'🔢', desc:'Count objects up to 20',    standard:'CCSS.K.CC.A.1' },
    { id:'shapes',   label:'Shapes & Colors',  icon:'🔺', desc:'Name basic shapes',         standard:'CCSS.K.G.A.2' },
  ],
  K: [
    { id:'phonemic', label:'Phonemic Awareness',icon:'👂', desc:'Hear and blend sounds',    standard:'CCSS.RF.K.2' },
    { id:'blend',    label:'Blending CVC',      icon:'📝', desc:'Cat, dog, sit',             standard:'CCSS.RF.K.3b' },
    { id:'sight',    label:'Sight Words',       icon:'👁️', desc:'The, and, is, a, to',       standard:'CCSS.RF.K.3c' },
    { id:'numbers',  label:'Numbers to 100',    icon:'💯', desc:'Count, write, compare',     standard:'CCSS.K.CC.A.1' },
    { id:'writing',  label:'Writing Letters',   icon:'✏️', desc:'Form all 26 letters',       standard:'CCSS.L.K.1a' },
  ],
  1: [
    { id:'decode',   label:'Decoding',          icon:'🔓', desc:'Sound out new words',       standard:'CCSS.RF.1.3' },
    { id:'fluency',  label:'Reading Fluency',   icon:'📖', desc:'Read smoothly & accurately',standard:'CCSS.RF.1.4' },
    { id:'vocab',    label:'Vocabulary',        icon:'💬', desc:'Learn 3-4 new words/day',   standard:'CCSS.L.1.4' },
    { id:'add10',    label:'Add & Subtract 10', icon:'➕', desc:'Within 20 mentally',        standard:'CCSS.1.OA.C.6' },
    { id:'comprehend','label':'Comprehension',  icon:'🧠', desc:'Who, what, where, why',     standard:'CCSS.RI.1.1' },
  ],
  2: [
    { id:'multisyl', label:'Multi-syllable Words',icon:'🔤',desc:'Compound & long words',   standard:'CCSS.RF.2.3' },
    { id:'fluency2', label:'Reading Fluency',   icon:'📖', desc:'90+ words per minute',      standard:'CCSS.RF.2.4' },
    { id:'place',    label:'Place Value',        icon:'🔢', desc:'Hundreds, tens, ones',      standard:'CCSS.2.NBT.A.1'},
    { id:'writing2', label:'Paragraph Writing', icon:'✏️', desc:'Topic + 3 details + close', standard:'CCSS.W.2.1' },
    { id:'text',     label:'Text Structures',   icon:'📑', desc:'Compare, sequence, cause',  standard:'CCSS.RI.2.6' },
  ],
  3: [
    { id:'chapter',  label:'Chapter Books',     icon:'📚', desc:'Read longer texts',         standard:'CCSS.RF.3.4' },
    { id:'fraction', label:'Fractions',          icon:'½',  desc:'Halves, thirds, fourths',   standard:'CCSS.3.NF.A.1'},
    { id:'multiply', label:'Multiplication',    icon:'✖️', desc:'Times tables 0–10',          standard:'CCSS.3.OA.A.1'},
    { id:'evidence', label:'Text Evidence',     icon:'🔍', desc:'Quote the text to answer',   standard:'CCSS.RI.3.1' },
    { id:'genre',    label:'Genre Study',        icon:'🎭', desc:'Fiction, nonfiction, poetry',standard:'CCSS.RL.3.5' },
  ],
  4: [
    { id:'syntax',   label:'Complex Sentences', icon:'📝', desc:'Clauses, phrases, voice',   standard:'CCSS.L.4.1' },
    { id:'infotxt',  label:'Informational Text',icon:'📰', desc:'Charts, diagrams, indexes',  standard:'CCSS.RI.4.7' },
    { id:'multi',    label:'Multi-digit Math',  icon:'🔢', desc:'Multiply & divide large #s', standard:'CCSS.4.NBT.B.5'},
    { id:'theme',    label:'Theme & Main Idea', icon:'💡', desc:'Author purpose & message',   standard:'CCSS.RL.4.2' },
    { id:'research', label:'Research Skills',   icon:'🔬', desc:'Use sources & cite them',    standard:'CCSS.W.4.8' },
  ],
  5: [
    { id:'lit',      label:'Literary Analysis', icon:'🎓', desc:'Interpret theme & character',standard:'CCSS.RL.5.1' },
    { id:'argwrite', label:'Argument Writing',  icon:'⚖️', desc:'Claim + evidence + rebuttal',standard:'CCSS.W.5.1' },
    { id:'fraction5','label':'Fraction Ops',   icon:'½',  desc:'Add, subtract, multiply',    standard:'CCSS.5.NF.A.1'},
    { id:'primary',  label:'Primary Sources',  icon:'📜', desc:'Analyze original documents',  standard:'CCSS.RH.6-8.6'},
    { id:'debate',   label:'Speaking & Debate',icon:'🎤', desc:'Formal discussion skills',    standard:'CCSS.SL.5.1' },
  ],
};

const ANIMAL_CHAINS = {
  Math:           { color:'#4ECDA0', bg:'#E8FFF5', border:'rgba(78,205,160,.3)',
                    chain:['🥚','🐣','🐥','🐔','🦚','🦁'], labels:['Egg','Hatchling','Chick','Chicken','Peacock','Lion!'] },
  Science:        { color:'#FF6B6B', bg:'#FFF3F3', border:'rgba(255,107,107,.28)',
                    chain:['🌱','🐛','🦋','🦜','🦅','🐉'], labels:['Seedling','Caterpillar','Butterfly','Parrot','Eagle','Dragon!'] },
  'Social Studies':{ color:'#64B5F6', bg:'#EFF8FF', border:'rgba(100,181,246,.3)',
                    chain:['🌍','🗺️','⛵','✈️','🚀','🌟'], labels:['Explorer','Mapper','Sailor','Pilot','Astronaut','Star!'] },
  'Language Arts':{ color:'#8B6FE8', bg:'#F5F0FF', border:'rgba(139,111,232,.3)',
                    chain:['📝','📓','📔','📒','📚','🦉'], labels:['Scribbler','Notebook','Journal','Book','Library','Wise Owl!'] },
  Reading:        { color:'#FFD147', bg:'#FFFBEE', border:'rgba(255,209,71,.35)',
                    chain:['🥚','🐸','🐢','🦊','🐺','🐉'], labels:['Egg','Froglet','Turtle','Fox','Wolf','Dragon!'] },
  Kindness:       { color:'#FF6B9D', bg:'#FFF0F5', border:'rgba(255,107,157,.3)',
                    chain:['🌸','🐝','🦋','🦄','✨','👑'], labels:['Blossom','Bee','Butterfly','Unicorn','Magic','Queen!'] },
};

const INTEREST_THEMES = {
  dinos:     { label:'Dinosaurs',  emoji:'🦕', examples:['🦕','🦖','🐉','🦴','🌋'], color:'#4ECDA0' },
  animals:   { label:'Animals',    emoji:'🐾', examples:['🐶','🐱','🐸','🦊','🐘'], color:'#FF9EBC' },
  space:     { label:'Space',      emoji:'🚀', examples:['🚀','⭐','🌙','🪐','👨‍🚀'], color:'#8B6FE8' },
  princess:  { label:'Princess',   emoji:'👑', examples:['👑','🏰','✨','🌸','🦄'], color:'#FFD147' },
  ocean:     { label:'Ocean',      emoji:'🌊', examples:['🐬','🦈','🐙','🐠','🌊'], color:'#64B5F6' },
  sports:    { label:'Sports',     emoji:'⚽', examples:['⚽','🏀','🎾','🏊','🏆'], color:'#FF6B6B' },
  art:       { label:'Art & Music',emoji:'🎨', examples:['🎨','🎵','🎭','🖌️','🎪'], color:'#C9B8FF' },
  nature:    { label:'Nature',     emoji:'🌿', examples:['🌳','🦋','🌺','🐝','🌈'], color:'#5ECDA0' },
};

const BLOOMY_OUTFITS = [
  { id:'default',    name:'Classic Bloomy',  hat:'',    extra:'',    starCost:0,  emoji:'🌸' },
  { id:'astronaut',  name:'Space Explorer',  hat:'🚀',  extra:'⭐',  starCost:5,  emoji:'🚀' },
  { id:'chef',       name:'Super Chef',       hat:'👨‍🍳', extra:'🍕',  starCost:10, emoji:'👨‍🍳' },
  { id:'wizard',     name:'Magic Wizard',     hat:'🧙',  extra:'✨',  starCost:15, emoji:'🧙' },
  { id:'dino',       name:'Dino Bloomy',      hat:'🦕',  extra:'🌿',  starCost:20, emoji:'🦕' },
  { id:'superhero',  name:'Super Bloomy!',    hat:'🦸',  extra:'💥',  starCost:30, emoji:'🦸' },
  { id:'princess',   name:'Royal Bloomy',     hat:'👑',  extra:'💎',  starCost:40, emoji:'👑' },
  { id:'ninja',      name:'Ninja Bloomy',     hat:'🥷',  extra:'⚡',  starCost:50, emoji:'🥷' },
];
