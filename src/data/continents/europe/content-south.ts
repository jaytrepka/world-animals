import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' }
const testudines = { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' }
const bovidae = { latin: 'Bovidae', en: 'Cattle, goats and antelopes', cs: 'Turovití' }

export const southContent: AnimalContent[] = [
  {
    id: 'iberian-lynx',
    name: { en: 'Iberian lynx', cs: 'Rys iberský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Lynx',
      species: 'Lynx pardinus',
    },
    habitat: {
      en: 'This spotted wild cat lives only in Spain and Portugal, in sunny hills with bushes and oak trees. It is very rare.',
      cs: 'Tahle skvrnitá divoká kočka žije jen ve Španělsku a Portugalsku, v slunných kopcích s křovinami a duby. Je velmi vzácná.',
    },
    diet: {
      en: 'It eats mostly rabbits. Sometimes it also catches ducks, partridges or young deer.',
      cs: 'Jí hlavně králíky. Občas uloví i kachnu, koroptev nebo mladého jelena.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Foxes or eagles might catch a small kitten.',
      cs: 'Dospělí rysové nemají skoro žádné nepřátele. Malé kotě by mohla ulovit liška nebo orel.',
    },
  },
  {
    id: 'barbary-macaque',
    name: { en: 'Barbary macaque', cs: 'Magot bezocasý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Primates', en: 'Primates', cs: 'Primáti' },
      family: { latin: 'Cercopithecidae', en: 'Old World monkeys', cs: 'Kočkodanovití' },
      genus: 'Macaca',
      species: 'Macaca sylvanus',
    },
    habitat: {
      en: 'These are the only wild monkeys in Europe. They live on the Rock of Gibraltar, and also in the mountain forests of North Africa.',
      cs: 'Jsou to jediné volně žijící opice v Evropě. Žijí na gibraltarské skále a také v horských lesích severní Afriky.',
    },
    diet: {
      en: 'They eat leaves, fruit, seeds, roots and insects.',
      cs: 'Jedí listy, ovoce, semena, kořínky a hmyz.',
    },
    predators: {
      en: 'On Gibraltar they have no enemies. In Africa, big eagles and dogs sometimes catch the babies.',
      cs: 'Na Gibraltaru nemají žádné nepřátele. V Africe občas mláďata uloví velcí orli nebo psi.',
    },
  },
  {
    id: 'greater-flamingo',
    name: { en: 'Greater flamingo', cs: 'Plameňák růžový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Phoenicopteriformes', en: 'Flamingos', cs: 'Plameňáci' },
      family: { latin: 'Phoenicopteridae', en: 'Flamingos', cs: 'Plameňákovití' },
      genus: 'Phoenicopterus',
      species: 'Phoenicopterus roseus',
    },
    habitat: {
      en: 'It lives in big flocks in salty lagoons by the sea, like the Camargue in France. It often stands on one leg.',
      cs: 'Žije ve velkých hejnech ve slaných lagunách u moře, třeba v Camargue ve Francii. Často stojí na jedné noze.',
    },
    diet: {
      en: 'It holds its beak upside down in the water and sieves out tiny shrimps. They make its feathers pink.',
      cs: 'Ponoří zobák obráceně do vody a cedí z ní drobné korýše. Díky nim má růžové peří.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Foxes, wild boars and big gulls may eat their eggs and chicks.',
      cs: 'Dospělí plameňáci mají málo nepřátel. Vajíčka a mláďata jim ale mohou sežrat lišky, divoká prasata a velcí rackové.',
    },
  },
  {
    id: 'bearded-vulture',
    name: { en: 'Bearded vulture', cs: 'Orlosup bradatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' },
      family: { latin: 'Accipitridae', en: 'Hawks, eagles and vultures', cs: 'Jestřábovití' },
      genus: 'Gypaetus',
      species: 'Gypaetus barbatus',
    },
    habitat: {
      en: 'This huge bird lives high in rocky mountains, like the Pyrenees between Spain and France. It has a little beard under its beak.',
      cs: 'Tenhle obrovský pták žije vysoko ve skalnatých horách, třeba v Pyrenejích mezi Španělskem a Francií. Pod zobákem má malé vousy.',
    },
    diet: {
      en: 'It eats bones! It drops big bones onto rocks to break them, then swallows the pieces.',
      cs: 'Jí kosti! Velké kosti pouští z výšky na skály, aby se rozbily, a pak kousky spolkne.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Only ravens or eagles might bother its chick in the nest.',
      cs: 'Dospělí orlosupi nemají žádné nepřátele. Jen havrani nebo orli by mohli ohrozit mládě v hnízdě.',
    },
  },
  {
    id: 'brown-bear',
    name: { en: 'Brown bear', cs: 'Medvěd hnědý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Ursidae', en: 'Bears', cs: 'Medvědovití' },
      genus: 'Ursus',
      species: 'Ursus arctos',
    },
    habitat: {
      en: 'It lives in wild mountain forests, like the Cantabrian Mountains in Spain, and also in the Carpathians and Scandinavia. It sleeps in a den in winter.',
      cs: 'Žije v divokých horských lesích, třeba v Kantaberském pohoří ve Španělsku, ale i v Karpatech a ve Skandinávii. V zimě spí v brlohu.',
    },
    diet: {
      en: 'It eats almost everything: berries, nuts, grass, roots, honey, insects, fish and sometimes meat.',
      cs: 'Sní skoro všechno: bobule, ořechy, trávu, kořínky, med, hmyz, ryby a někdy i maso.',
    },
    predators: {
      en: 'Grown-up bears have no enemies. Cubs must watch out for big male bears and wolves.',
      cs: 'Dospělí medvědi nemají žádné nepřátele. Medvíďata se ale musí mít na pozoru před velkými medvědími samci a vlky.',
    },
  },
  {
    id: 'mouflon',
    name: { en: 'European mouflon', cs: 'Muflon' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Ovis',
      species: 'Ovis gmelini musimon',
    },
    habitat: {
      en: 'This wild sheep comes from the rocky hills of Sardinia and Corsica. Today it also lives in forests in Czechia and other countries.',
      cs: 'Tahle divoká ovce pochází ze skalnatých kopců Sardinie a Korsiky. Dnes žije i v lesích u nás a v dalších zemích.',
    },
    diet: {
      en: 'It eats grass, herbs, leaves and acorns.',
      cs: 'Jí trávu, byliny, listy a žaludy.',
    },
    predators: {
      en: 'Wolves hunt mouflons. Foxes and golden eagles can catch the little lambs.',
      cs: 'Muflony loví vlci. Malá jehňata mohou ulovit lišky a orli skalní.',
    },
  },
  {
    id: 'crested-porcupine',
    name: { en: 'Crested porcupine', cs: 'Dikobraz obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' },
      family: { latin: 'Hystricidae', en: 'Old World porcupines', cs: 'Dikobrazovití' },
      genus: 'Hystrix',
      species: 'Hystrix cristata',
    },
    habitat: {
      en: 'It lives in hills and forests of Italy and in Africa. It sleeps in a burrow in the day and comes out at night.',
      cs: 'Žije v kopcích a lesích Itálie a v Africe. Ve dne spí v noře a ven vychází v noci.',
    },
    diet: {
      en: 'It eats roots, bulbs, fruit, bark and fallen berries.',
      cs: 'Jí kořínky, cibulky, ovoce, kůru a spadané bobule.',
    },
    predators: {
      en: 'Its long sharp quills keep most animals away. Only wolves and foxes sometimes dare to attack it.',
      cs: 'Dlouhé ostré bodliny odradí skoro každého. Jen vlci a lišky se ho občas odváží napadnout.',
    },
  },
  {
    id: 'hermanns-tortoise',
    name: { en: "Hermann's tortoise", cs: 'Želva zelenavá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Testudo',
      species: 'Testudo hermanni',
    },
    habitat: {
      en: 'It lives in warm, sunny meadows and bushy hills in Greece, the Balkans and Italy. In winter it sleeps buried in the ground.',
      cs: 'Žije na teplých slunných loukách a v kopcích s keři v Řecku, na Balkáně a v Itálii. V zimě spí zahrabaná v zemi.',
    },
    diet: {
      en: 'It eats leaves, flowers, clover, dandelions and sometimes a snail.',
      cs: 'Jí listy, květy, jetel, pampelišky a někdy i hlemýždě.',
    },
    predators: {
      en: 'Its hard shell protects it. Foxes, badgers, wild boars, magpies and eagles eat its eggs and babies.',
      cs: 'Chrání ji tvrdý krunýř. Vajíčka a mláďata ale sežerou lišky, jezevci, divoká prasata, straky i orli.',
    },
  },
  {
    id: 'nose-horned-viper',
    name: { en: 'Nose-horned viper', cs: 'Zmije růžkatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' },
      family: { latin: 'Viperidae', en: 'Vipers', cs: 'Zmijovití' },
      genus: 'Vipera',
      species: 'Vipera ammodytes',
    },
    habitat: {
      en: 'This venomous snake with a little horn on its nose lives on sunny rocky slopes in the Balkans.',
      cs: 'Tenhle jedovatý had s malým růžkem na nose žije na slunných kamenitých stráních na Balkáně.',
    },
    diet: {
      en: 'It eats mice, lizards and small birds.',
      cs: 'Jí myši, ještěrky a malé ptáčky.',
    },
    predators: {
      en: 'Snake eagles, hedgehogs, badgers and wild boars eat vipers.',
      cs: 'Zmije požírají orlíci krátkoprstí, ježci, jezevci a divoká prasata.',
    },
  },
  {
    id: 'kri-kri',
    name: { en: 'Kri-kri', cs: 'Koza krétská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Capra',
      species: 'Capra aegagrus cretica',
    },
    habitat: {
      en: 'This wild goat lives only on the Greek island of Crete, in steep rocky mountains and gorges.',
      cs: 'Tahle divoká koza žije jen na řeckém ostrově Kréta, ve strmých skalnatých horách a soutěskách.',
    },
    diet: {
      en: 'It eats grass, herbs, leaves and twigs of shrubs.',
      cs: 'Jí trávu, byliny, listy a větvičky keřů.',
    },
    predators: {
      en: 'There are no big hunters on Crete, so grown-ups are safe. Golden eagles can catch the young kids.',
      cs: 'Na Krétě nežijí žádné velké šelmy, takže dospělé kozy jsou v bezpečí. Kůzlata ale mohou ulovit orli skalní.',
    },
  },
  {
    id: 'loggerhead-sea-turtle',
    name: { en: 'Loggerhead sea turtle', cs: 'Kareta obecná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Cheloniidae', en: 'Sea turtles', cs: 'Karetovití' },
      genus: 'Caretta',
      species: 'Caretta caretta',
    },
    habitat: {
      en: 'It swims in the warm Mediterranean Sea. At night, mothers crawl onto sandy beaches, like on Zakynthos in Greece, to lay eggs.',
      cs: 'Plave v teplém Středozemním moři. Maminky v noci lezou na písečné pláže, třeba na řeckém ostrově Zakynthos, a kladou tam vajíčka.',
    },
    diet: {
      en: 'Its strong jaws crush crabs, clams and sea snails. It also eats jellyfish.',
      cs: 'Silnými čelistmi drtí kraby, mušle a mořské plže. Jí také medúzy.',
    },
    predators: {
      en: 'Big sharks can attack grown-ups. Baby turtles are eaten by gulls, crabs and fish.',
      cs: 'Dospělé karety mohou napadnout velcí žraloci. Malé želvičky sežerou rackové, krabi a ryby.',
    },
  },
  {
    id: 'mediterranean-monk-seal',
    name: { en: 'Mediterranean monk seal', cs: 'Tuleň středomořský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Monachus',
      species: 'Monachus monachus',
    },
    habitat: {
      en: 'This very rare seal lives around the Greek islands in the Aegean Sea. It rests in hidden sea caves.',
      cs: 'Tenhle velmi vzácný tuleň žije u řeckých ostrovů v Egejském moři. Odpočívá ve skrytých mořských jeskyních.',
    },
    diet: {
      en: 'It eats fish, octopuses and squid.',
      cs: 'Jí ryby, chobotnice a olihně.',
    },
    predators: {
      en: 'Big sharks can sometimes hunt it.',
      cs: 'Občas ho mohou ulovit velcí žraloci.',
    },
  },
  {
    id: 'fin-whale',
    name: { en: 'Fin whale', cs: 'Plejtvák myšok' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Balaenopteridae', en: 'Rorquals', cs: 'Plejtvákovití' },
      genus: 'Balaenoptera',
      species: 'Balaenoptera physalus',
    },
    habitat: {
      en: 'This giant whale lives in the open sea. Many swim in the Ligurian Sea near Italy and France. It is the second biggest animal in the world.',
      cs: 'Tahle obří velryba žije na otevřeném moři. Hodně jich plave v Ligurském moři u Itálie a Francie. Je to druhé největší zvíře na světě.',
    },
    diet: {
      en: 'It gulps huge mouthfuls of water and filters out tiny krill and small fish.',
      cs: 'Nabere obrovský doušek vody a vycedí z něj drobný kril a malé rybky.',
    },
    predators: {
      en: 'It is so big that almost nobody hunts it. Only orcas sometimes attack young ones.',
      cs: 'Je tak velký, že ho skoro nikdo neloví. Jen kosatky občas napadnou mláďata.',
    },
  },
  {
    id: 'bottlenose-dolphin',
    name: { en: 'Common bottlenose dolphin', cs: 'Delfín skákavý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Delphinidae', en: 'Oceanic dolphins', cs: 'Delfínovití' },
      genus: 'Tursiops',
      species: 'Tursiops truncatus',
    },
    habitat: {
      en: 'It lives in warm seas all over the world, also in the Black Sea and the Mediterranean. Dolphins swim and play in groups.',
      cs: 'Žije v teplých mořích po celém světě, také v Černém a Středozemním moři. Delfíni plavou a dovádějí ve skupinách.',
    },
    diet: {
      en: 'It eats fish and squid. It finds them by making clicks and listening to the echo.',
      cs: 'Jí ryby a olihně. Najde je tak, že cvaká a poslouchá ozvěnu.',
    },
    predators: {
      en: 'Only big sharks and orcas can be dangerous to dolphins.',
      cs: 'Nebezpeční jim mohou být jen velcí žraloci a kosatky.',
    },
  },
  {
    id: 'common-octopus',
    name: { en: 'Common octopus', cs: 'Chobotnice pobřežní' },
    classification: {
      kingdom,
      phylum: { latin: 'Mollusca', en: 'Molluscs', cs: 'Měkkýši' },
      class: { latin: 'Cephalopoda', en: 'Octopuses and squids', cs: 'Hlavonožci' },
      order: { latin: 'Octopoda', en: 'Octopuses', cs: 'Chobotnice' },
      family: { latin: 'Octopodidae', en: 'Octopuses', cs: 'Chobotnicovití' },
      genus: 'Octopus',
      species: 'Octopus vulgaris',
    },
    habitat: {
      en: 'It lives among rocks on the sea floor of the Mediterranean Sea. It can change colour and squeeze into tiny holes.',
      cs: 'Žije mezi kameny na dně Středozemního moře. Umí měnit barvu a protáhnout se i malinkou škvírou.',
    },
    diet: {
      en: 'It uses its eight arms to catch crabs, shrimps, clams and fish.',
      cs: 'Svými osmi chapadly chytá kraby, krevety, mušle a ryby.',
    },
    predators: {
      en: 'Moray eels, dolphins, seals and big fish hunt octopuses. It escapes by squirting a cloud of ink.',
      cs: 'Chobotnice loví murény, delfíni, tuleni a velké ryby. Uniká jim tak, že vystříkne oblak inkoustu.',
    },
  },
]
