import type { AnimalContent } from '../../types'
import {
  animalia, chordata, mammalia, aves, reptilia, amphibia, chondrichthyes, carnivora, artiodactyla, rodentia,
  lagomorpha, squamata, testudines, anura, caudata, canidae, felidae, mustelidae, bovidae, cervidae,
} from './taxa'

const leporidae = { latin: 'Leporidae', en: 'Hares and rabbits', cs: 'Zajícovití' }
const procyonidae = { latin: 'Procyonidae', en: 'Raccoons and coatis', cs: 'Medvídkovití' }
const actinopterygii = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }

export const moreContent: AnimalContent[] = [
  // ---------- north ----------
  {
    id: 'dall-sheep',
    name: { en: 'Dall sheep', cs: 'Ovce aljašská' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: bovidae,
      genus: 'Ovis',
      species: 'Ovis dalli',
    },
    habitat: {
      en: 'This snow-white wild sheep lives high on steep, rocky mountains in Alaska and northwest Canada. Males have big curly horns.',
      cs: 'Tahle sněhobílá divoká ovce žije vysoko na strmých skalnatých horách na Aljašce a v severozápadní Kanadě. Samci mají velké zatočené rohy.',
    },
    diet: {
      en: 'It eats grass, moss, lichens and little mountain plants. In winter it digs them out from under the snow.',
      cs: 'Jí trávu, mech, lišejníky a malé horské rostlinky. V zimě si je vyhrabává zpod sněhu.',
    },
    predators: {
      en: 'Wolves, lynx, wolverines and bears hunt it. Golden eagles can snatch the little lambs.',
      cs: 'Loví ji vlci, rysové, rosomáci a medvědi. Malá jehňata mohou uchvátit orli skalní.',
    },
  },
  {
    id: 'mountain-goat',
    name: { en: 'Mountain goat', cs: 'Kamzík bělák' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: bovidae,
      genus: 'Oreamnos',
      species: 'Oreamnos americanus',
    },
    habitat: {
      en: 'It lives on the steepest cliffs of the Rocky Mountains and the mountains of Canada. It wears a thick white woolly coat and a little beard.',
      cs: 'Žije na nejstrmějších skalách ve Skalistých horách a v kanadských horách. Nosí hustý bílý vlněný kožich a malou bradku.',
    },
    diet: {
      en: 'It nibbles grass, moss, leaves and small bushes. It also licks salty rocks.',
      cs: 'Okusuje trávu, mech, listy a nízké keříky. Rád také olizuje slané kameny.',
    },
    predators: {
      en: 'Cougars, wolves and bears try to catch it on the cliffs. Golden eagles can grab the young kids.',
      cs: 'Na skalách ho zkoušejí chytit pumy, vlci a medvědi. Mláďata mohou uchvátit orli skalní.',
    },
  },
  {
    id: 'snowshoe-hare',
    name: { en: 'Snowshoe hare', cs: 'Zajíc měnivý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: lagomorpha,
      family: leporidae,
      genus: 'Lepus',
      species: 'Lepus americanus',
    },
    habitat: {
      en: 'It lives in the big northern forests of Canada and Alaska. Its fur is brown in summer and turns white in winter, and its huge feet work like snowshoes.',
      cs: 'Žije ve velkých severních lesích Kanady a Aljašky. V létě je hnědý a na zimu zbělá. Jeho obrovské tlapky fungují jako sněžnice.',
    },
    diet: {
      en: 'In summer it eats grass, leaves and flowers. In winter it chews twigs, buds and bark.',
      cs: 'V létě jí trávu, listy a kytky. V zimě ohryzává větvičky, pupeny a kůru.',
    },
    predators: {
      en: 'The Canada lynx loves to hunt it. Foxes, coyotes, owls and hawks catch it too.',
      cs: 'Nejraději ho loví rys kanadský. Chytají ho ale i lišky, kojoti, sovy a jestřábi.',
    },
  },
  {
    id: 'arctic-wolf',
    name: { en: 'Arctic wolf', cs: 'Vlk arktický' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: canidae,
      genus: 'Canis',
      species: 'Canis lupus arctos',
    },
    habitat: {
      en: 'This white wolf lives on the cold, icy islands of the far north of Canada and in Greenland. It is dark there for months in winter.',
      cs: 'Tenhle bílý vlk žije na studených ledových ostrovech na dalekém severu Kanady a v Grónsku. V zimě je tam celé měsíce tma.',
    },
    diet: {
      en: 'The pack hunts musk oxen and caribou together. It also catches Arctic hares and lemmings.',
      cs: 'Smečka společně loví pižmoně a soby. Chytá také zajíce polární a lumíky.',
    },
    predators: {
      en: 'Grown-up Arctic wolves have almost no enemies. Polar bears are a danger only now and then.',
      cs: 'Dospělí vlci arktičtí nemají skoro žádné nepřátele. Jen občas jim může být nebezpečný lední medvěd.',
    },
  },
  {
    id: 'north-american-porcupine',
    name: { en: 'North American porcupine', cs: 'Urzon kanadský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: rodentia,
      family: { latin: 'Erethizontidae', en: 'New World porcupines', cs: 'Urzonovití' },
      genus: 'Erethizon',
      species: 'Erethizon dorsatum',
    },
    habitat: {
      en: 'It lives in forests across Canada and the northern USA. Its back is covered with about 30,000 sharp quills, and it is a good tree climber.',
      cs: 'Žije v lesích po celé Kanadě a na severu USA. Záda má pokrytá asi třiceti tisíci ostrých bodlin a skvěle šplhá po stromech.',
    },
    diet: {
      en: 'It eats leaves, buds, fruit and green plants. In winter it gnaws the bark of trees.',
      cs: 'Jí listy, pupeny, plody a zelené rostliny. V zimě ohryzává kůru stromů.',
    },
    predators: {
      en: 'Its quills keep most animals away. The fisher is clever enough to attack its face, and cougars sometimes catch it too.',
      cs: 'Bodliny odradí většinu zvířat. Chytrá rybářská kuna ho ale napadá zepředu do tváře a občas ho uloví i puma.',
    },
  },
  {
    id: 'wood-frog',
    name: { en: 'Wood frog', cs: 'Skokan lesní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: amphibia,
      order: anura,
      family: { latin: 'Ranidae', en: 'True frogs', cs: 'Skokanovití' },
      genus: 'Lithobates',
      species: 'Lithobates sylvaticus',
    },
    habitat: {
      en: 'This little brown frog lives in forests and ponds as far north as Alaska. In winter it freezes solid like an ice cube and wakes up again in spring!',
      cs: 'Tahle malá hnědá žabka žije v lesích a tůních až daleko na Aljašce. V zimě zmrzne na kost jako kostka ledu a na jaře se zase probudí!',
    },
    diet: {
      en: 'It eats insects, spiders, worms and snails. Its tadpoles eat tiny plants in the water.',
      cs: 'Jí hmyz, pavouky, žížaly a šneky. Její pulci okusují drobné řasy ve vodě.',
    },
    predators: {
      en: 'Snakes, herons, raccoons and skunks eat it. Fish, beetles and salamanders eat the tadpoles.',
      cs: 'Loví ji hadi, volavky, mývalové a skunkové. Pulce žerou ryby, brouci a mloci.',
    },
  },

  // ---------- middle ----------
  {
    id: 'desert-tortoise',
    name: { en: 'Desert tortoise', cs: 'Želva Agassizova' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Gopherus',
      species: 'Gopherus agassizii',
    },
    habitat: {
      en: 'It lives in the hot Mojave Desert in the southwest USA. It digs a burrow to hide from the heat and sleeps there all winter.',
      cs: 'Žije v horké Mohavské poušti na jihozápadě USA. Vyhrabe si noru, kde se schová před horkem a kde prospí celou zimu.',
    },
    diet: {
      en: 'It eats grass, desert flowers and cactus. It gets almost all its water from the plants it eats.',
      cs: 'Jí trávu, pouštní kytky a kaktusy. Skoro všechnu vodu dostane z rostlin, které sní.',
    },
    predators: {
      en: 'Its hard shell protects grown-ups. Ravens, coyotes, foxes and badgers eat the eggs and babies.',
      cs: 'Dospělé chrání tvrdý krunýř. Vejce a mláďata ale žerou havrani, kojoti, lišky a jezevci.',
    },
  },
  {
    id: 'california-condor',
    name: { en: 'California condor', cs: 'Kondor kalifornský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Cathartiformes', en: 'New World vultures', cs: 'Kondoři' },
      family: { latin: 'Cathartidae', en: 'New World vultures', cs: 'Kondorovití' },
      genus: 'Gymnogyps',
      species: 'Gymnogyps californianus',
    },
    habitat: {
      en: 'This giant bird glides over mountains and canyons in California, Arizona and Mexico. Its wings are as wide as a car is long!',
      cs: 'Tenhle obří pták plachtí nad horami a kaňony v Kalifornii, Arizoně a Mexiku. Jeho roztažená křídla jsou dlouhá jako auto!',
    },
    diet: {
      en: 'It eats dead animals, like deer, cows and sea lions washed up on the beach. It helps keep nature clean.',
      cs: 'Jí mrtvá zvířata, třeba jeleny, krávy nebo lachtany vyplavené na pláž. Pomáhá tak udržovat přírodu čistou.',
    },
    predators: {
      en: 'Grown-up condors have almost no enemies. Ravens, bears and golden eagles can steal the eggs or chicks.',
      cs: 'Dospělí kondoři nemají skoro žádné nepřátele. Vejce nebo mláďata jim ale mohou ukrást havrani, medvědi a orli skalní.',
    },
  },
  {
    id: 'california-sea-lion',
    name: { en: 'California sea lion', cs: 'Lachtan kalifornský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Otariidae', en: 'Eared seals', cs: 'Lachtanovití' },
      genus: 'Zalophus',
      species: 'Zalophus californianus',
    },
    habitat: {
      en: 'It lives in the Pacific Ocean along the coast of the USA and Mexico. It loves lying on rocks and piers and barks very loudly.',
      cs: 'Žije v Tichém oceánu u pobřeží USA a Mexika. Rád se vyvaluje na skalách a mólech a hlasitě štěká.',
    },
    diet: {
      en: 'It is a fast swimmer and catches fish and squid.',
      cs: 'Je to rychlý plavec a loví ryby a olihně.',
    },
    predators: {
      en: 'Orcas and great white sharks hunt it in the sea.',
      cs: 'V moři ho loví kosatky a žraloci bílí.',
    },
  },
  {
    id: 'black-footed-ferret',
    name: { en: 'Black-footed ferret', cs: 'Tchoř černonohý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: mustelidae,
      genus: 'Mustela',
      species: 'Mustela nigripes',
    },
    habitat: {
      en: 'It lives on the prairies of the USA, inside prairie dog burrows. It wears a black mask like a little bandit and is very rare.',
      cs: 'Žije na prériích v USA v norách psounů. Má černou masku jako malý lupič a je velmi vzácný.',
    },
    diet: {
      en: 'It eats almost only prairie dogs. It hunts them at night in their own tunnels.',
      cs: 'Jí skoro jen psouny. Loví je v noci přímo v jejich chodbách.',
    },
    predators: {
      en: 'Owls, eagles, hawks, coyotes and badgers can catch it.',
      cs: 'Chytit ho mohou sovy, orli, jestřábi, kojoti a jezevci.',
    },
  },
  {
    id: 'texas-horned-lizard',
    name: { en: 'Texas horned lizard', cs: 'Ropušník trnohlavý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Phrynosomatidae', en: 'Spiny lizards', cs: 'Ropušníkovití' },
      genus: 'Phrynosoma',
      species: 'Phrynosoma cornutum',
    },
    habitat: {
      en: 'This flat, spiky lizard lives in dry, sandy places in Texas and Mexico. When it is scared, it can squirt blood from its eyes!',
      cs: 'Tahle placatá ostnatá ještěrka žije na suchých písčitých místech v Texasu a Mexiku. Když se lekne, umí vystříknout krev z očí!',
    },
    diet: {
      en: 'It mostly eats ants, lots and lots of them. It also eats beetles and grasshoppers.',
      cs: 'Jí hlavně mravence, spoustu mravenců. Občas si dá i brouka nebo kobylku.',
    },
    predators: {
      en: 'Hawks, roadrunners, snakes, coyotes and foxes try to eat it. The blood squirt tastes bad to foxes and coyotes.',
      cs: 'Chtějí ji sníst jestřábi, kukačky kohoutí, hadi, kojoti a lišky. Liškám a kojotům ale vystříknutá krev vůbec nechutná.',
    },
  },
  {
    id: 'hellbender',
    name: { en: 'Hellbender', cs: 'Velemlok americký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: amphibia,
      order: caudata,
      family: { latin: 'Cryptobranchidae', en: 'Giant salamanders', cs: 'Velemlokovití' },
      genus: 'Cryptobranchus',
      species: 'Cryptobranchus alleganiensis',
    },
    habitat: {
      en: 'This huge, flat salamander lives under big rocks in fast, clean rivers in the eastern USA. It breathes through its wrinkly skin.',
      cs: 'Tenhle obrovský placatý mlok žije pod velkými kameny v rychlých a čistých řekách na východě USA. Dýchá svou vrásčitou kůží.',
    },
    diet: {
      en: 'It mostly eats crayfish. It also snaps up small fish, worms and insects.',
      cs: 'Jí hlavně raky. Chňapne ale i po malých rybkách, červech a hmyzu.',
    },
    predators: {
      en: 'Big fish, turtles, snakes and otters can eat it, mostly when it is young.',
      cs: 'Sníst ho mohou velké ryby, želvy, hadi a vydry, hlavně když je ještě malý.',
    },
  },
  {
    id: 'virginia-opossum',
    name: { en: 'Virginia opossum', cs: 'Vačice virginská' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Didelphimorphia', en: 'Opossums', cs: 'Vačice' },
      family: { latin: 'Didelphidae', en: 'Opossums', cs: 'Vačicovití' },
      genus: 'Didelphis',
      species: 'Didelphis virginiana',
    },
    habitat: {
      en: 'It lives in forests, fields and even gardens in the USA and Mexico. The mother carries her babies in a pouch and then on her back.',
      cs: 'Žije v lesích, na polích a dokonce i na zahradách v USA a Mexiku. Maminka nosí mláďata ve vaku a potom na zádech.',
    },
    diet: {
      en: 'It eats almost anything: fruit, insects, snails, eggs, mice and leftovers.',
      cs: 'Jí skoro všechno: ovoce, hmyz, šneky, vajíčka, myši i zbytky jídla.',
    },
    predators: {
      en: 'Foxes, coyotes, bobcats, owls and dogs hunt it. When it is scared, it can pretend to be dead!',
      cs: 'Loví ji lišky, kojoti, rysové červení, sovy a psi. Když se lekne, umí předstírat, že je mrtvá!',
    },
  },
  {
    id: 'bobcat',
    name: { en: 'Bobcat', cs: 'Rys červený' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: felidae,
      genus: 'Lynx',
      species: 'Lynx rufus',
    },
    habitat: {
      en: 'This wild cat lives in forests, swamps, deserts and hills all over the USA and in Mexico. It has a short, stubby tail.',
      cs: 'Tahle divoká kočka žije v lesích, bažinách, pouštích i kopcích po celých USA a v Mexiku. Má krátký, useknutý ocásek.',
    },
    diet: {
      en: 'It sneaks up on rabbits and hares. It also hunts mice, squirrels, birds and sometimes small deer.',
      cs: 'Plíží se za králíky a zajíci. Loví také myši, veverky, ptáky a někdy i malé jeleny.',
    },
    predators: {
      en: 'Cougars, wolves and coyotes can kill it. Owls, eagles and foxes can catch the kittens.',
      cs: 'Zabít ho mohou pumy, vlci a kojoti. Koťata mohou ulovit sovy, orli a lišky.',
    },
  },
  {
    id: 'north-american-river-otter',
    name: { en: 'North American river otter', cs: 'Vydra severoamerická' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: mustelidae,
      genus: 'Lontra',
      species: 'Lontra canadensis',
    },
    habitat: {
      en: 'It lives in rivers, lakes and marshes in Canada and the USA. It loves to play and slide down muddy or snowy banks.',
      cs: 'Žije v řekách, jezerech a mokřadech v Kanadě a USA. Moc ráda si hraje a klouže po blátivých nebo zasněžených březích.',
    },
    diet: {
      en: 'It is a great swimmer and catches fish, crayfish and frogs.',
      cs: 'Je to skvělá plavkyně a loví ryby, raky a žáby.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but coyotes, wolves, bobcats and alligators can catch them.',
      cs: 'Dospělé vydry mají málo nepřátel. Chytit je ale mohou kojoti, vlci, rysové červení a aligátoři.',
    },
  },
  {
    id: 'white-tailed-deer',
    name: { en: 'White-tailed deer', cs: 'Jelenec běloocasý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: cervidae,
      genus: 'Odocoileus',
      species: 'Odocoileus virginianus',
    },
    habitat: {
      en: 'It lives in forests and meadows from Canada all the way to South America. When it runs away, it lifts its white tail like a flag.',
      cs: 'Žije v lesích a na loukách od Kanady až po Jižní Ameriku. Když utíká, zvedne bílý ocas jako praporek.',
    },
    diet: {
      en: 'It eats leaves, twigs, grass, acorns, apples and mushrooms.',
      cs: 'Jí listy, větvičky, trávu, žaludy, jablka a houby.',
    },
    predators: {
      en: 'Wolves, cougars and bears hunt it. Coyotes and bobcats often catch the spotted fawns.',
      cs: 'Loví ho vlci, pumy a medvědi. Kojoti a rysové červení často chytají kropenaté kolouchy.',
    },
  },
  {
    id: 'atlantic-cod',
    name: { en: 'Atlantic cod', cs: 'Treska obecná' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: actinopterygii,
      order: { latin: 'Gadiformes', en: 'Cods and relatives', cs: 'Hrdloploutví' },
      family: { latin: 'Gadidae', en: 'Cods', cs: 'Treskovití' },
      genus: 'Gadus',
      species: 'Gadus morhua',
    },
    habitat: {
      en: 'This big fish lives in the cold North Atlantic Ocean, for example off Newfoundland in Canada. It has a little whisker under its chin.',
      cs: 'Tahle velká ryba žije ve studeném severním Atlantském oceánu, třeba u Newfoundlandu v Kanadě. Pod bradou má malý vous.',
    },
    diet: {
      en: 'It eats smaller fish, crabs, shrimp, squid and worms.',
      cs: 'Jí menší ryby, kraby, krevety, olihně a mořské červy.',
    },
    predators: {
      en: 'Seals, sharks, whales and people catch it. Many fish and seabirds eat the young cod.',
      cs: 'Loví ji tuleni, žraloci, velryby a lidé. Mladé tresky žerou i jiné ryby a mořští ptáci.',
    },
  },

  // ---------- south ----------
  {
    id: 'collared-peccary',
    name: { en: 'Collared peccary', cs: 'Pekari páskovaný' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: { latin: 'Tayassuidae', en: 'Peccaries', cs: 'Pekariovití' },
      genus: 'Dicotyles',
      species: 'Dicotyles tajacu',
    },
    habitat: {
      en: 'It looks like a small hairy pig with a pale collar. It lives in groups in deserts and forests from Arizona and Mexico to South America.',
      cs: 'Vypadá jako malé chlupaté prasátko se světlým obojkem. Žije ve skupinách v pouštích i lesích od Arizony a Mexika až po Jižní Ameriku.',
    },
    diet: {
      en: 'It eats cactus, roots, fruit, nuts and seeds. It even munches prickly pear cactus, spines and all!',
      cs: 'Jí kaktusy, kořínky, ovoce, oříšky a semínka. Klidně sní i opuncii i s bodlinami!',
    },
    predators: {
      en: 'Jaguars, cougars, coyotes and bobcats hunt it. The group defends itself together with sharp teeth.',
      cs: 'Loví ho jaguáři, pumy, kojoti a rysové červení. Skupina se ale společně brání ostrými zuby.',
    },
  },
  {
    id: 'white-nosed-coati',
    name: { en: 'White-nosed coati', cs: 'Nosál bělohubý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: procyonidae,
      genus: 'Nasua',
      species: 'Nasua narica',
    },
    habitat: {
      en: 'It lives in forests in Mexico and Central America. It has a long, wiggly nose and walks with its striped tail held straight up.',
      cs: 'Žije v lesích v Mexiku a Střední Americe. Má dlouhý pohyblivý čumák a chodí s pruhovaným ocasem vztyčeným nahoru.',
    },
    diet: {
      en: 'It sniffs out insects, spiders, lizards and eggs with its nose. It also loves sweet fruit.',
      cs: 'Čumákem vyčmuchá hmyz, pavouky, ještěrky a vajíčka. Moc rád má i sladké ovoce.',
    },
    predators: {
      en: 'Jaguars, ocelots, boas and big eagles hunt it.',
      cs: 'Loví ho jaguáři, oceloti, hroznýši a velcí orli.',
    },
  },
  {
    id: 'common-vampire-bat',
    name: { en: 'Common vampire bat', cs: 'Upír obecný' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Chiroptera', en: 'Bats', cs: 'Letouni' },
      family: { latin: 'Phyllostomidae', en: 'Leaf-nosed bats', cs: 'Listonosovití' },
      genus: 'Desmodus',
      species: 'Desmodus rotundus',
    },
    habitat: {
      en: 'This small bat lives in dark caves and hollow trees in Mexico, Central and South America. It can even walk and hop on the ground.',
      cs: 'Tenhle malý netopýr žije v tmavých jeskyních a dutých stromech v Mexiku, Střední a Jižní Americe. Umí dokonce chodit a skákat po zemi.',
    },
    diet: {
      en: 'It drinks a little blood from sleeping cows, horses and pigs at night. The animals hardly notice it.',
      cs: 'V noci pije trošku krve ze spících krav, koní a prasat. Zvířata to skoro ani nepoznají.',
    },
    predators: {
      en: 'Owls, hawks, snakes and opossums can catch it.',
      cs: 'Chytit ho mohou sovy, jestřábi, hadi a vačice.',
    },
  },
  {
    id: 'bairds-tapir',
    name: { en: "Baird's tapir", cs: 'Tapír středoamerický' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Perissodactyla', en: 'Odd-toed hoofed mammals', cs: 'Lichokopytníci' },
      family: { latin: 'Tapiridae', en: 'Tapirs', cs: 'Tapírovití' },
      genus: 'Tapirus',
      species: 'Tapirus bairdii',
    },
    habitat: {
      en: 'It lives in rainforests and swamps from Mexico to Colombia and loves to swim. It has a short, bendy nose like a tiny trunk.',
      cs: 'Žije v deštných pralesech a bažinách od Mexika po Kolumbii a rád plave. Má krátký ohebný nos jako malý chobot.',
    },
    diet: {
      en: 'It eats leaves, twigs, fruit and water plants.',
      cs: 'Jí listy, větvičky, ovoce a vodní rostliny.',
    },
    predators: {
      en: 'Jaguars and crocodiles can hunt it. Its striped babies are the easiest to catch.',
      cs: 'Lovit ho mohou jaguáři a krokodýli. Nejsnáz ulovitelná jsou pruhovaná mláďata.',
    },
  },
  {
    id: 'giant-oceanic-manta-ray',
    name: { en: 'Giant oceanic manta ray', cs: 'Manta obrovská' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Myliobatiformes', en: 'Stingrays and relatives', cs: 'Trnuchotvární' },
      family: { latin: 'Mobulidae', en: 'Manta and devil rays', cs: 'Mantovití' },
      genus: 'Mobula',
      species: 'Mobula birostris',
    },
    habitat: {
      en: 'This giant flat fish lives in warm oceans, for example off the coast of Costa Rica. It flaps its huge fins like wings and seems to fly through the water.',
      cs: 'Tahle obří placatá ryba žije v teplých oceánech, třeba u pobřeží Kostariky. Mává obrovskými ploutvemi jako křídly a vypadá, že ve vodě létá.',
    },
    diet: {
      en: 'It swims with its mouth wide open and eats tiny floating animals called plankton.',
      cs: 'Plave s doširoka otevřenou tlamou a pojídá drobounké vznášející se živočichy, kterým se říká plankton.',
    },
    predators: {
      en: 'Big sharks and orcas can attack it.',
      cs: 'Napadnout ji mohou velcí žraloci a kosatky.',
    },
  },
  // ---------- added: more raccoon relatives ----------
  {
    id: 'ringtail',
    name: { en: 'Ringtail', cs: 'Fret kočičí' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: procyonidae,
      genus: 'Bassariscus',
      species: 'Bassariscus astutus',
    },
    habitat: {
      en: 'It lives in rocky canyons, dry mountains and deserts of Mexico and the southwestern United States. Its bushy tail has black and white rings.',
      cs: 'Žije ve skalnatých kaňonech, suchých horách a pouštích Mexika a jihozápadu Spojených států. Jeho huňatý ocas má černobílé kroužky.',
    },
    diet: {
      en: 'At night it hunts mice, rats, lizards and insects, and it also eats berries and fruit.',
      cs: 'V noci loví myši, krysy, ještěrky a hmyz a pochutná si i na bobulích a ovoci.',
    },
    predators: {
      en: 'Great horned owls, bobcats and coyotes hunt it. It escapes by climbing up rocks very fast.',
      cs: 'Loví ho výři, rysové červení a kojoti. Utíká jim tak, že hbitě šplhá po skalách.',
    },
  },
  {
    id: 'cozumel-raccoon',
    name: { en: 'Cozumel raccoon', cs: 'Mýval trpasličí' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: procyonidae,
      genus: 'Procyon',
      species: 'Procyon pygmaeus',
    },
    habitat: {
      en: 'It lives only on the small island of Cozumel in Mexico, in mangrove swamps and near sandy beaches. It is the smallest raccoon in the world.',
      cs: 'Žije jen na malém mexickém ostrově Cozumel, v mangrovových bažinách a blízko písečných pláží. Je to nejmenší mýval na světě.',
    },
    diet: {
      en: 'It loves crabs! It also eats fruit, frogs, lizards and insects that it finds on the shore.',
      cs: 'Nejraději má kraby! Jí ale i ovoce, žáby, ještěrky a hmyz, který najde na břehu.',
    },
    predators: {
      en: 'On its island, big boa snakes and stray dogs can catch it. Only very few of these raccoons are left, so people protect them.',
      cs: 'Na ostrově ho může chytit velký had hroznýš nebo toulavý pes. Těchto mývalů zbývá jen velmi málo, a proto je lidé chrání.',
    },
  },
]
