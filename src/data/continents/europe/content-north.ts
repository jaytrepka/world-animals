import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const rayFinned = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' }
const rodentia = { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' }
const canidae = { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' }
const ursidae = { latin: 'Ursidae', en: 'Bears', cs: 'Medvědovití' }
const mustelidae = { latin: 'Mustelidae', en: 'Weasels, otters and badgers', cs: 'Lasicovití' }
const phocidae = { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' }
const cervidae = { latin: 'Cervidae', en: 'Deer', cs: 'Jelenovití' }

export const northContent: AnimalContent[] = [
  {
    id: 'polar-bear',
    name: { en: 'Polar bear', cs: 'Medvěd lední' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: ursidae,
      genus: 'Ursus',
      species: 'Ursus maritimus',
    },
    habitat: {
      en: 'It lives on the sea ice and cold islands far in the north, like Svalbard, where it is snowy most of the year.',
      cs: 'Žije na mořském ledu a na studených ostrovech daleko na severu, třeba na Špicberkách, kde je skoro celý rok sníh.',
    },
    diet: {
      en: 'It mostly hunts seals on the ice. Sometimes it also eats birds, eggs or a dead whale.',
      cs: 'Loví hlavně tuleně na ledu. Občas si dá i ptáky, vajíčka nebo uhynulou velrybu.',
    },
    predators: {
      en: 'Grown-up polar bears have no enemies. Only the cubs must watch out for big male polar bears.',
      cs: 'Dospělí lední medvědi nemají žádné nepřátele. Jen mláďata se musí mít na pozoru před velkými medvědími samci.',
    },
  },
  {
    id: 'walrus',
    name: { en: 'Walrus', cs: 'Mrož lední' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Odobenidae', en: 'Walruses', cs: 'Mrožovití' },
      genus: 'Odobenus',
      species: 'Odobenus rosmarus',
    },
    habitat: {
      en: 'It lives in the icy Arctic seas around Svalbard and rests in big groups on ice and beaches.',
      cs: 'Žije v ledových arktických mořích kolem Špicberků a odpočívá ve velkých skupinách na ledu a na plážích.',
    },
    diet: {
      en: 'It dives to the sea floor and sucks clams and shellfish out of their shells. Its whiskers help it find them.',
      cs: 'Potápí se na mořské dno a vysává mušle a škeble z jejich schránek. Najít je mu pomáhají vousy.',
    },
    predators: {
      en: 'Its long tusks keep it safe. Only polar bears and orcas sometimes hunt walruses, mostly the young ones.',
      cs: 'Chrání ho dlouhé kly. Jen lední medvědi a kosatky občas mrože loví, hlavně ty mladé.',
    },
  },
  {
    id: 'arctic-fox',
    name: { en: 'Arctic fox', cs: 'Liška polární' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Vulpes',
      species: 'Vulpes lagopus',
    },
    habitat: {
      en: 'It lives in cold, treeless lands of the far north, like Iceland and Svalbard. In winter its fur turns white or bluish.',
      cs: 'Žije v chladných krajinách bez stromů na dalekém severu, třeba na Islandu a na Špicberkách. V zimě jí srst zbělá nebo zmodrá.',
    },
    diet: {
      en: 'It eats lemmings and other small animals, birds and their eggs, fish, berries and leftovers from polar bears.',
      cs: 'Jí lumíky a jiná malá zvířátka, ptáky a jejich vajíčka, ryby, bobule a zbytky po ledních medvědech.',
    },
    predators: {
      en: 'It can be caught by polar bears, wolves, red foxes and big eagles.',
      cs: 'Ulovit ji mohou lední medvědi, vlci, lišky obecné a velcí orli.',
    },
  },
  {
    id: 'atlantic-puffin',
    name: { en: 'Atlantic puffin', cs: 'Papuchalk severní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Charadriiformes', en: 'Shorebirds, gulls and auks', cs: 'Dlouhokřídlí' },
      family: { latin: 'Alcidae', en: 'Auks and puffins', cs: 'Alkovití' },
      genus: 'Fratercula',
      species: 'Fratercula arctica',
    },
    habitat: {
      en: 'It lives on the cold North Atlantic sea. In summer it nests in burrows on steep grassy cliffs, like in Iceland.',
      cs: 'Žije na studeném severním Atlantiku. V létě hnízdí v norách na strmých travnatých útesech, třeba na Islandu.',
    },
    diet: {
      en: 'It dives for small fish and can carry many of them at once in its colourful beak.',
      cs: 'Potápí se pro malé rybky a ve svém barevném zobáku jich unese spoustu najednou.',
    },
    predators: {
      en: 'Big gulls and skuas catch puffins. Gulls also steal their eggs and chicks.',
      cs: 'Papuchalky loví velcí rackové a chaluhy. Rackové jim také kradou vajíčka a mláďata.',
    },
  },
  {
    id: 'orca',
    name: { en: 'Orca', cs: 'Kosatka dravá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Delphinidae', en: 'Oceanic dolphins', cs: 'Delfínovití' },
      genus: 'Orcinus',
      species: 'Orcinus orca',
    },
    habitat: {
      en: 'It lives in all the oceans. In winter, orcas swim into the cold fjords of northern Norway after herring.',
      cs: 'Žije ve všech oceánech. V zimě kosatky připlouvají do studených fjordů severního Norska za sledi.',
    },
    diet: {
      en: 'Orcas hunt together like a wolf pack. They eat fish like herring, and also seals and even whales.',
      cs: 'Kosatky loví společně jako smečka vlků. Jedí ryby, třeba sledě, ale i tuleně, a dokonce velryby.',
    },
    predators: {
      en: 'The orca is the strongest hunter of the sea, so nobody hunts it.',
      cs: 'Kosatka je nejsilnější lovec v moři, a tak ji nikdo neloví.',
    },
  },
  {
    id: 'reindeer',
    name: { en: 'Reindeer', cs: 'Sob polární' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Rangifer',
      species: 'Rangifer tarandus',
    },
    habitat: {
      en: 'It lives in big herds in the cold north, in Lapland, Norway and Russia, on the tundra and in the forests.',
      cs: 'Žije ve velkých stádech na chladném severu, v Laponsku, Norsku a Rusku, na tundře i v lesích.',
    },
    diet: {
      en: 'In winter it digs under the snow for lichen, called reindeer moss. In summer it eats grass and leaves.',
      cs: 'V zimě vyhrabává zpod sněhu lišejník, kterému se říká sobí mech. V létě spásá trávu a listy.',
    },
    predators: {
      en: 'Wolves, bears, wolverines and lynxes hunt reindeer. Eagles can catch the young calves.',
      cs: 'Soby loví vlci, medvědi, rosomáci a rysové. Malá telata mohou ulovit i orli.',
    },
  },
  {
    id: 'wolverine',
    name: { en: 'Wolverine', cs: 'Rosomák sibiřský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: mustelidae,
      genus: 'Gulo',
      species: 'Gulo gulo',
    },
    habitat: {
      en: 'It lives in wild northern mountains and forests, like in Sweden and Norway, where there is snow for a long time.',
      cs: 'Žije v divokých severských horách a lesích, třeba ve Švédsku a Norsku, kde dlouho leží sníh.',
    },
    diet: {
      en: 'It eats almost anything: small animals, birds, eggs, berries and leftovers from wolves. It can even catch a reindeer in deep snow.',
      cs: 'Sní skoro všechno: malá zvířata, ptáky, vajíčka, bobule i zbytky po vlcích. V hlubokém sněhu dokáže ulovit i soba.',
    },
    predators: {
      en: 'It is small but very brave and strong. Only wolves and bears are sometimes dangerous to it; eagles may take the young.',
      cs: 'Je malý, ale moc odvážný a silný. Nebezpeční mu mohou být jen vlci a medvědi, mláďata někdy uloví orli.',
    },
  },
  {
    id: 'moose',
    name: { en: 'Moose', cs: 'Los evropský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Alces',
      species: 'Alces alces',
    },
    habitat: {
      en: 'It lives in big northern forests with lakes and bogs, like in Sweden. It is the biggest deer in the world.',
      cs: 'Žije ve velkých severských lesích s jezery a bažinami, třeba ve Švédsku. Je to největší jelen na světě.',
    },
    diet: {
      en: 'It eats leaves, twigs and bark of trees, and water plants that it pulls up from lakes.',
      cs: 'Jí listy, větvičky a kůru stromů a vodní rostliny, které si vytahuje z jezer.',
    },
    predators: {
      en: 'Wolves and brown bears hunt moose, mostly the young calves.',
      cs: 'Losy loví vlci a medvědi hnědí, hlavně malá losíčata.',
    },
  },
  {
    id: 'norway-lemming',
    name: { en: 'Norway lemming', cs: 'Lumík norský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Cricetidae', en: 'Hamsters, voles and lemmings', cs: 'Křečkovití' },
      genus: 'Lemmus',
      species: 'Lemmus lemmus',
    },
    habitat: {
      en: 'It lives high in the mountains and on the tundra of Norway, Sweden and Finland. In winter it runs in tunnels under the snow.',
      cs: 'Žije vysoko v horách a na tundře v Norsku, Švédsku a Finsku. V zimě běhá v chodbičkách pod sněhem.',
    },
    diet: {
      en: 'It eats moss, grass and small plants.',
      cs: 'Jí mech, trávu a drobné rostlinky.',
    },
    predators: {
      en: 'Many animals eat lemmings: arctic foxes, stoats, snowy owls, skuas and buzzards.',
      cs: 'Lumíky loví spousta zvířat: lišky polární, hranostajové, sovice sněžné, chaluhy i káně.',
    },
  },
  {
    id: 'atlantic-salmon',
    name: { en: 'Atlantic salmon', cs: 'Losos obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Salmoniformes', en: 'Salmon and trout', cs: 'Lososotvární' },
      family: { latin: 'Salmonidae', en: 'Salmon and trout', cs: 'Lososovití' },
      genus: 'Salmo',
      species: 'Salmo salar',
    },
    habitat: {
      en: 'It grows up in the North Atlantic sea. Then it swims back up the river where it was born and jumps up waterfalls to lay eggs.',
      cs: 'Dospívá v severním Atlantiku. Potom plave zpátky proti proudu do řeky, kde se narodil, a skáče přes vodopády, aby nakladl jikry.',
    },
    diet: {
      en: 'Young salmon eat insects in the river. In the sea, salmon eat small fish, shrimps and krill.',
      cs: 'Mladí lososi v řece jedí hmyz. V moři se živí malými rybkami, krevetkami a krilem.',
    },
    predators: {
      en: 'Seals, orcas, otters, bears, eagles and big fish catch salmon. People like to eat them too.',
      cs: 'Lososy loví tuleni, kosatky, vydry, medvědi, orli i velké ryby. Rádi je jedí také lidé.',
    },
  },
  {
    id: 'grey-wolf',
    name: { en: 'Grey wolf', cs: 'Vlk obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Canis',
      species: 'Canis lupus',
    },
    habitat: {
      en: 'It lives in forests and wild lands all over Europe, most of all in the big forests of Russia. Wolves live in families called packs.',
      cs: 'Žije v lesích a divoké krajině po celé Evropě, nejvíc ve velkých ruských lesích. Vlci žijí v rodinách, kterým se říká smečky.',
    },
    diet: {
      en: 'The pack hunts together for deer, moose and wild boar. Wolves also eat hares, mice and berries.',
      cs: 'Smečka loví společně jeleny, losy a divoká prasata. Vlci jedí také zajíce, myši a bobule.',
    },
    predators: {
      en: 'Grown-up wolves have almost no enemies except bears. Wolf pups can be taken by eagles or bears.',
      cs: 'Dospělí vlci nemají skoro žádné nepřátele, snad jen medvědy. Vlčata mohou ulovit orli nebo medvědi.',
    },
  },
  {
    id: 'beluga-whale',
    name: { en: 'Beluga whale', cs: 'Běluha severní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Monodontidae', en: 'Belugas and narwhals', cs: 'Narvalovití' },
      genus: 'Delphinapterus',
      species: 'Delphinapterus leucas',
    },
    habitat: {
      en: 'This white whale lives in cold Arctic seas, like the White Sea in northern Russia, often near the ice.',
      cs: 'Tahle bílá velryba žije ve studených arktických mořích, třeba v Bílém moři na severu Ruska, často blízko ledu.',
    },
    diet: {
      en: 'It eats fish, squid, shrimps and worms from the sea floor. It chirps and whistles so much it is called the sea canary.',
      cs: 'Jí ryby, olihně, krevety a červy z mořského dna. Tak ráda cvrliká a píská, že se jí říká mořský kanárek.',
    },
    predators: {
      en: 'Orcas and polar bears hunt belugas.',
      cs: 'Běluhy loví kosatky a lední medvědi.',
    },
  },
  {
    id: 'snowy-owl',
    name: { en: 'Snowy owl', cs: 'Sovice sněžní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Strigiformes', en: 'Owls', cs: 'Sovy' },
      family: { latin: 'Strigidae', en: 'True owls', cs: 'Puštíkovití' },
      genus: 'Bubo',
      species: 'Bubo scandiacus',
    },
    habitat: {
      en: 'This big white owl lives on the open Arctic tundra of northern Russia and Scandinavia. It hunts in the daytime too.',
      cs: 'Tahle velká bílá sova žije na otevřené arktické tundře na severu Ruska a Skandinávie. Loví i ve dne.',
    },
    diet: {
      en: 'It mostly eats lemmings. It also catches hares, voles and birds.',
      cs: 'Nejvíc jí lumíky. Uloví ale i zajíce, hraboše a ptáky.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Arctic foxes, wolves and skuas may steal their eggs and chicks.',
      cs: 'Dospělé sovice nemají skoro žádné nepřátele. Vajíčka a mláďata jim ale mohou sebrat lišky polární, vlci a chaluhy.',
    },
  },
  {
    id: 'grey-seal',
    name: { en: 'Grey seal', cs: 'Tuleň kuželozubý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: phocidae,
      genus: 'Halichoerus',
      species: 'Halichoerus grypus',
    },
    habitat: {
      en: 'It lives in the Baltic Sea and along the North Atlantic coasts. It rests on rocks and ice, and its pups are born fluffy and white.',
      cs: 'Žije v Baltském moři a u pobřeží severního Atlantiku. Odpočívá na skalách a na ledu a jeho mláďata se rodí chlupatá a bílá.',
    },
    diet: {
      en: 'It eats fish like herring, cod and salmon.',
      cs: 'Jí ryby, třeba sledě, tresky a lososy.',
    },
    predators: {
      en: 'Orcas and big sharks sometimes hunt grey seals.',
      cs: 'Občas je loví kosatky a velcí žraloci.',
    },
  },
  {
    id: 'european-otter',
    name: { en: 'Eurasian otter', cs: 'Vydra říční' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: mustelidae,
      genus: 'Lutra',
      species: 'Lutra lutra',
    },
    habitat: {
      en: 'It lives by clean rivers, lakes and sea coasts all over Europe. In Scotland it even swims in the sea.',
      cs: 'Žije u čistých řek, jezer i mořského pobřeží po celé Evropě. Ve Skotsku plave dokonce i v moři.',
    },
    diet: {
      en: 'It is a great swimmer and catches fish, frogs and crabs.',
      cs: 'Skvěle plave a loví ryby, žáby a kraby.',
    },
    predators: {
      en: 'Grown-up otters have few enemies. Young otters may be caught by foxes, lynxes or big birds of prey.',
      cs: 'Dospělé vydry mají jen málo nepřátel. Mláďata mohou ulovit lišky, rysové nebo velcí draví ptáci.',
    },
  },
  {
    id: 'siberian-flying-squirrel',
    name: { en: 'Siberian flying squirrel', cs: 'Poletuška slovanská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Sciuridae', en: 'Squirrels', cs: 'Veverkovití' },
      genus: 'Pteromys',
      species: 'Pteromys volans',
    },
    habitat: {
      en: 'It lives in old forests in Finland and Russia and sleeps in tree holes. It glides from tree to tree on a furry skin like a kite.',
      cs: 'Žije ve starých lesích ve Finsku a v Rusku a spí v dutinách stromů. Mezi stromy plachtí na chlupaté blance jako drak.',
    },
    diet: {
      en: 'It eats leaves, buds and catkins of birch and alder trees, and seeds from cones.',
      cs: 'Jí listy, pupeny a jehnědy bříz a olší a semínka ze šišek.',
    },
    predators: {
      en: 'Owls and pine martens hunt flying squirrels.',
      cs: 'Poletušky loví sovy a kuny lesní.',
    },
  },
]
