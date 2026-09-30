import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const rayFinned = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals', cs: 'Sudokopytníci' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const primates = { latin: 'Primates', en: 'Primates', cs: 'Primáti' }
const bovidae = { latin: 'Bovidae', en: 'Cattle, antelopes and goats', cs: 'Turovití' }
const cercopithecidae = { latin: 'Cercopithecidae', en: 'Old World monkeys', cs: 'Kočkodanovití' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }
const testudines = { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' }

export const northContent: AnimalContent[] = [
  {
    id: 'dromedary',
    name: { en: 'Dromedary camel', cs: 'Velbloud jednohrbý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Camelidae', en: 'Camels and llamas', cs: 'Velbloudovití' },
      genus: 'Camelus',
      species: 'Camelus dromedarius',
    },
    habitat: {
      en: 'It lives in the hot, dry Sahara desert and other deserts of North Africa and Arabia. People keep it to carry loads.',
      cs: 'Žije v horké a suché poušti Sahaře a v dalších pouštích severní Afriky a Arábie. Lidé ho chovají, aby jim nosil náklad.',
    },
    diet: {
      en: 'It eats dry grass, thorny bushes and leaves. It can go many days without drinking any water.',
      cs: 'Jí suchou trávu, trnité keře a listí. Dokáže vydržet mnoho dní úplně bez vody.',
    },
    predators: {
      en: 'Grown-up camels are big, so few animals attack them. Wolves, hyenas and leopards may catch a baby camel.',
      cs: 'Dospělí velbloudi jsou velcí, a tak je napadne jen málokdo. Mládě ale může ulovit vlk, hyena nebo levhart.',
    },
  },
  {
    id: 'fennec-fox',
    name: { en: 'Fennec fox', cs: 'Fenek berberský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Vulpes',
      species: 'Vulpes zerda',
    },
    habitat: {
      en: 'This tiny fox lives in the sandy Sahara desert. It sleeps in a cool burrow by day and comes out at night.',
      cs: 'Tahle malinká liška žije v písečné poušti Sahaře. Přes den spí v chladné noře a ven chodí v noci.',
    },
    diet: {
      en: 'It eats insects, lizards, small rodents, birds and eggs, and also juicy plants and fruit.',
      cs: 'Jí hmyz, ještěrky, malé hlodavce, ptáčky a vajíčka a také šťavnaté rostliny a plody.',
    },
    predators: {
      en: 'Eagle owls, jackals and hyenas may hunt it, but its huge ears hear danger coming from far away.',
      cs: 'Může ho ulovit výr, šakal nebo hyena. Svýma obrovskýma ušima ale slyší nebezpečí už z velké dálky.',
    },
  },
  {
    id: 'barbary-macaque',
    name: { en: 'Barbary macaque', cs: 'Magot bezocasý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: cercopithecidae,
      genus: 'Macaca',
      species: 'Macaca sylvanus',
    },
    habitat: {
      en: 'This monkey lives in cedar and oak forests in the Atlas Mountains of Morocco and Algeria, where it can even snow.',
      cs: 'Tahle opice žije v cedrových a dubových lesích v pohoří Atlas v Maroku a Alžírsku, kde někdy i sněží.',
    },
    diet: {
      en: 'It eats leaves, seeds, acorns, fruit, roots and sometimes insects.',
      cs: 'Jí listy, semínka, žaludy, ovoce, kořínky a občas i hmyz.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Eagles, foxes and wild dogs may try to catch the babies.',
      cs: 'Dospělé opice mají málo nepřátel. Na mláďata si ale mohou troufnout orli, lišky nebo toulaví psi.',
    },
  },
  {
    id: 'addax',
    name: { en: 'Addax', cs: 'Adax núbijský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Addax',
      species: 'Addax nasomaculatus',
    },
    habitat: {
      en: 'This white antelope with twisted horns lives deep in the sandy Sahara desert. Very few are left in the wild.',
      cs: 'Tahle bílá antilopa se zatočenými rohy žije hluboko v písečné Sahaře. Ve volné přírodě jich zbývá už jen velmi málo.',
    },
    diet: {
      en: 'It eats desert grasses and bushes. It gets almost all its water from the plants it eats.',
      cs: 'Jí pouštní trávy a keře. Skoro všechnu vodu, kterou potřebuje, získá z rostlin.',
    },
    predators: {
      en: 'Long ago lions and cheetahs hunted it. Today jackals and hyenas may catch the young, but people are its biggest danger.',
      cs: 'Kdysi ho lovili lvi a gepardi. Dnes mláďata mohou ulovit šakali a hyeny, ale největším nebezpečím jsou pro něj lidé.',
    },
  },
  {
    id: 'scimitar-oryx',
    name: { en: 'Scimitar oryx', cs: 'Přímorožec šavlorohý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Oryx',
      species: 'Oryx dammah',
    },
    habitat: {
      en: 'It lives in the dry grassy land at the edge of the Sahara, called the Sahel. Its long horns curve back like a sword.',
      cs: 'Žije v suché travnaté krajině na okraji Sahary, které se říká Sahel. Jeho dlouhé rohy jsou zahnuté dozadu jako šavle.',
    },
    diet: {
      en: 'It eats grass, leaves, juicy roots and wild melons. It can live a long time without drinking.',
      cs: 'Jí trávu, listí, šťavnaté kořínky a divoké melouny. Dlouho vydrží bez pití.',
    },
    predators: {
      en: 'Lions, leopards, cheetahs and hyenas used to hunt it. It nearly disappeared because of people, but zoos brought it back.',
      cs: 'Dříve ho lovili lvi, levharti, gepardi a hyeny. Kvůli lidem skoro vymizel, ale zoologické zahrady ho zachránily.',
    },
  },
  {
    id: 'dorcas-gazelle',
    name: { en: 'Dorcas gazelle', cs: 'Gazela dorkas' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Gazella',
      species: 'Gazella dorcas',
    },
    habitat: {
      en: 'This small, fast gazelle lives in the deserts and dry plains of North Africa, including the Sahara and Egypt.',
      cs: 'Tahle malá a rychlá gazela žije v pouštích a suchých pláních severní Afriky, třeba na Sahaře a v Egyptě.',
    },
    diet: {
      en: 'It eats leaves, flowers, grass and seed pods of acacia trees. It gets most of its water from plants.',
      cs: 'Jí listí, květy, trávu a lusky akácií. Většinu vody získá z rostlin.',
    },
    predators: {
      en: 'Cheetahs, jackals, hyenas, caracals and big eagles hunt it, but it can run very fast.',
      cs: 'Loví ji gepardi, šakali, hyeny, karakalové a velcí orli. Umí ale utíkat hodně rychle.',
    },
  },
  {
    id: 'egyptian-cobra',
    name: { en: 'Egyptian cobra', cs: 'Kobra egyptská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Elapidae', en: 'Cobras and their relatives', cs: 'Korálovcovití' },
      genus: 'Naja',
      species: 'Naja haje',
    },
    habitat: {
      en: 'This big venomous snake lives in dry grassland, farm fields and oases of North Africa, often near water.',
      cs: 'Tenhle velký jedovatý had žije v suchých travnatých krajinách, na polích a v oázách severní Afriky, často blízko vody.',
    },
    diet: {
      en: 'It eats mice, rats, toads, birds, eggs and other snakes. When it is scared, it spreads a wide hood.',
      cs: 'Loví myši, krysy, ropuchy, ptáky, vejce a jiné hady. Když se lekne, roztáhne na krku široký štít.',
    },
    predators: {
      en: 'Mongooses, snake eagles and secretarybirds can catch it.',
      cs: 'Ulovit ji dokážou promyky a draví ptáci, třeba hadilov písař.',
    },
  },
  {
    id: 'nubian-ibex',
    name: { en: 'Nubian ibex', cs: 'Kozorožec núbijský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Capra',
      species: 'Capra nubiana',
    },
    habitat: {
      en: 'This wild goat climbs steep, rocky desert mountains near the Red Sea in Egypt and Sudan.',
      cs: 'Tahle divoká koza šplhá po strmých skalnatých pouštních horách u Rudého moře v Egyptě a Súdánu.',
    },
    diet: {
      en: 'It eats grass, leaves and small bushes that grow between the rocks.',
      cs: 'Jí trávu, listí a malé keříky, které rostou mezi skalami.',
    },
    predators: {
      en: 'Leopards, wolves and hyenas hunt it. Big eagles may snatch the kids.',
      cs: 'Loví ho levharti, vlci a hyeny. Kůzlata mohou uchvátit velcí orli.',
    },
  },
  {
    id: 'dugong',
    name: { en: 'Dugong', cs: 'Dugong indický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' },
      family: { latin: 'Dugongidae', en: 'Dugongs', cs: 'Dugongovití' },
      genus: 'Dugong',
      species: 'Dugong dugon',
    },
    habitat: {
      en: 'This gentle "sea cow" swims in warm, shallow sea water, like in the Red Sea and along the coast of East Africa.',
      cs: 'Tahle mírná „mořská kráva“ plave v teplém mělkém moři, třeba v Rudém moři a u pobřeží východní Afriky.',
    },
    diet: {
      en: 'It eats sea grass that grows on the sea floor, a bit like a cow grazing in a meadow.',
      cs: 'Spásá mořskou trávu, která roste na mořském dně, trochu jako kráva na louce.',
    },
    predators: {
      en: 'Big sharks, killer whales and crocodiles can attack it, but they rarely do.',
      cs: 'Napadnout ho mohou velcí žraloci, kosatky nebo krokodýli, ale stává se to jen zřídka.',
    },
  },
  {
    id: 'red-sea-clownfish',
    name: { en: 'Red Sea clownfish', cs: 'Klaun špičatopruhý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Blenniiformes', en: 'Blennies and relatives', cs: 'Slizouni' },
      family: { latin: 'Pomacentridae', en: 'Damselfishes and clownfishes', cs: 'Sapínovití' },
      genus: 'Amphiprion',
      species: 'Amphiprion bicinctus',
    },
    habitat: {
      en: 'This orange fish with two white stripes lives on coral reefs in the Red Sea. It hides among the stinging arms of a sea anemone.',
      cs: 'Tahle oranžová rybka se dvěma bílými pruhy žije na korálových útesech v Rudém moři. Schovává se mezi žahavými rameny sasanky.',
    },
    diet: {
      en: 'It eats tiny sea creatures called plankton, small algae and leftovers from the anemone’s meals.',
      cs: 'Jí drobounké mořské živočichy zvané plankton, řasy a zbytky potravy své sasanky.',
    },
    predators: {
      en: 'Bigger fish, eels and groupers would like to eat it, but it is safe inside its anemone.',
      cs: 'Rády by ji sežraly větší ryby, murény nebo kanici, ale ve své sasance je v bezpečí.',
    },
  },
  {
    id: 'gelada',
    name: { en: 'Gelada', cs: 'Dželada' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: cercopithecidae,
      genus: 'Theropithecus',
      species: 'Theropithecus gelada',
    },
    habitat: {
      en: 'This monkey with a red heart-shaped patch on its chest lives only high in the grassy mountains of Ethiopia.',
      cs: 'Tahle opice s červenou skvrnou ve tvaru srdce na hrudi žije jen vysoko v travnatých horách Etiopie.',
    },
    diet: {
      en: 'It is the only monkey that eats mostly grass. It sits and picks blades of grass all day long.',
      cs: 'Je to jediná opice, která jí hlavně trávu. Celý den sedí a trhá stébla trávy.',
    },
    predators: {
      en: 'Leopards, hyenas and wild dogs may hunt it. Big eagles can snatch the babies.',
      cs: 'Lovit ji mohou levharti, hyeny a toulaví psi. Mláďata mohou uchvátit velcí orli.',
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
      en: 'This rare seal lives along rocky coasts of the Mediterranean Sea and the Atlantic coast of West Africa. It rests in sea caves.',
      cs: 'Tenhle vzácný tuleň žije u skalnatých pobřeží Středozemního moře a u atlantického pobřeží západní Afriky. Odpočívá v mořských jeskyních.',
    },
    diet: {
      en: 'It dives for fish, octopus and squid.',
      cs: 'Potápí se pro ryby, chobotnice a olihně.',
    },
    predators: {
      en: 'Big sharks may attack it, but its greatest danger is people and fishing nets.',
      cs: 'Napadnout ho mohou velcí žraloci, ale největším nebezpečím jsou pro něj lidé a rybářské sítě.',
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
      en: 'This sea turtle with a big head swims in warm seas, including the Mediterranean. Mothers crawl onto sandy beaches to lay eggs.',
      cs: 'Tahle mořská želva s velkou hlavou plave v teplých mořích, třeba ve Středozemním moři. Samice lezou na písečné pláže klást vajíčka.',
    },
    diet: {
      en: 'It crunches crabs, clams, snails and sea urchins with its strong jaws, and eats jellyfish too.',
      cs: 'Silnými čelistmi drtí kraby, mušle, plže a ježovky a jí i medúzy.',
    },
    predators: {
      en: 'Big sharks and killer whales hunt grown-ups. Eggs and tiny babies are eaten by foxes, crabs, gulls and fish.',
      cs: 'Dospělé želvy loví velcí žraloci a kosatky. Vajíčka a malá mláďata sežerou lišky, krabi, rackové a ryby.',
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
      en: 'This tall pink bird lives in big flocks on salty lakes and lagoons, like in Tunisia and all around Africa.',
      cs: 'Tenhle vysoký růžový pták žije ve velkých hejnech na slaných jezerech a lagunách, třeba v Tunisku a po celé Africe.',
    },
    diet: {
      en: 'It holds its bill upside down in the water and sieves out tiny shrimps and algae. They make it pink.',
      cs: 'Drží zobák ve vodě vzhůru nohama a cedí z ní drobné korýše a řasy. Právě díky nim je růžový.',
    },
    predators: {
      en: 'Jackals, foxes and big eagles may catch flamingos. Gulls and storks steal eggs and chicks.',
      cs: 'Plameňáky mohou ulovit šakali, lišky a velcí orli. Rackové a čápi jim kradou vajíčka a mláďata.',
    },
  },
  {
    id: 'striped-hyena',
    name: { en: 'Striped hyena', cs: 'Hyena žíhaná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Hyaenidae', en: 'Hyenas', cs: 'Hyenovití' },
      genus: 'Hyaena',
      species: 'Hyaena hyaena',
    },
    habitat: {
      en: 'This shy hyena with stripes and a hairy mane lives in dry, rocky and bushy lands of North and East Africa.',
      cs: 'Tahle plachá hyena s pruhy a chlupatou hřívou žije v suchých, skalnatých a křovinatých krajinách severní a východní Afriky.',
    },
    diet: {
      en: 'It mostly eats leftovers of dead animals, even crunching the bones. It also eats insects, fruit and small animals.',
      cs: 'Nejčastěji jí zbytky mrtvých zvířat a rozkouše i kosti. Jí také hmyz, ovoce a malá zvířata.',
    },
    predators: {
      en: 'Lions, leopards and spotted hyenas may kill it.',
      cs: 'Zabít ji mohou lvi, levharti a hyeny skvrnité.',
    },
  },
  {
    id: 'african-spurred-tortoise',
    name: { en: 'African spurred tortoise', cs: 'Želva ostruhatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Centrochelys',
      species: 'Centrochelys sulcata',
    },
    habitat: {
      en: 'This giant land tortoise lives in the dry Sahel at the southern edge of the Sahara. It digs deep burrows to hide from the heat.',
      cs: 'Tahle obrovská suchozemská želva žije v suchém Sahelu na jižním okraji Sahary. Před horkem se schovává v hlubokých norách, které si vyhrabe.',
    },
    diet: {
      en: 'It eats grass, leaves, flowers and juicy plants.',
      cs: 'Jí trávu, listí, květy a šťavnaté rostliny.',
    },
    predators: {
      en: 'Grown-ups have a hard shell and almost no enemies. Eggs and babies can be eaten by jackals, monitor lizards and birds.',
      cs: 'Dospělé želvy mají tvrdý krunýř a skoro žádné nepřátele. Vajíčka a mláďata ale mohou sežrat šakali, varani a ptáci.',
    },
  },
  {
    id: 'saharan-horned-viper',
    name: { en: 'Saharan horned viper', cs: 'Zmije rohatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Viperidae', en: 'Vipers', cs: 'Zmijovití' },
      genus: 'Cerastes',
      species: 'Cerastes cerastes',
    },
    habitat: {
      en: 'This sandy-coloured snake with two little horns above its eyes lives in the Sahara. It wriggles sideways and buries itself in sand.',
      cs: 'Tenhle had barvy písku má nad očima dva malé růžky a žije na Sahaře. Plazí se bokem a zahrabává se do písku.',
    },
    diet: {
      en: 'It hides in the sand and waits for lizards, mice and small birds to come close.',
      cs: 'Schová se v písku a čeká, až se přiblíží ještěrka, myš nebo malý ptáček.',
    },
    predators: {
      en: 'Birds of prey, foxes and monitor lizards may catch it.',
      cs: 'Chytit ji mohou draví ptáci, lišky a varani.',
    },
  },
  {
    id: 'caracal',
    name: { en: 'Caracal', cs: 'Karakal' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Caracal',
      species: 'Caracal caracal',
    },
    habitat: {
      en: 'This wild cat with long black ear tufts lives in dry, bushy lands and semi-deserts all over Africa, from the Sahara to the Cape.',
      cs: 'Tahle divoká kočka s dlouhými černými štětičkami na uších žije v suchých křovinách a polopouštích po celé Africe, od Sahary až po jih.',
    },
    diet: {
      en: 'It hunts birds, hares, hyraxes and small antelopes. It can leap high into the air to catch a flying bird!',
      cs: 'Loví ptáky, zajíce, damany a malé antilopy. Umí vyskočit vysoko do vzduchu a chytit letícího ptáka!',
    },
    predators: {
      en: 'Lions, leopards and hyenas can kill it, and eagles may take the kittens.',
      cs: 'Zabít ho mohou lvi, levharti a hyeny a koťata mohou uchvátit orli.',
    },
  },
]
