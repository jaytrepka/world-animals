import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, birds, amphibians,
  anura, carnivora, rodentia, artiodactyla, whales,
  camelidae, caviidae, chinchillidae, felidae, canidae, cervidae, otariidae,
} from './taxa'

export const southContent: AnimalContent[] = [
  {
    id: 'patagonian-mara',
    name: { en: 'Patagonian mara', cs: 'Mara stepní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: caviidae,
      genus: 'Dolichotis',
      species: 'Dolichotis patagonum',
    },
    habitat: {
      en: 'It lives on the dry, windy grasslands and bushland of Argentina and Patagonia. It looks like a mix of a rabbit and a small deer.',
      cs: 'Žije na suchých a větrných pláních a v křovinách Argentiny a Patagonie. Vypadá jako kříženec zajíce a malého jelínka.',
    },
    diet: {
      en: 'It eats grass, herbs and leaves of bushes, even cactus.',
      cs: 'Spásá trávu, byliny a listy keřů, dokonce i kaktusy.',
    },
    predators: {
      en: 'Pumas, foxes and birds of prey hunt it. It runs away very fast with big jumps.',
      cs: 'Loví ji pumy, lišky a draví ptáci. Utíká velmi rychle dlouhými skoky.',
    },
  },
  {
    id: 'guanaco',
    name: { en: 'Guanaco', cs: 'Guanako' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: camelidae,
      genus: 'Lama',
      species: 'Lama guanicoe',
    },
    habitat: {
      en: 'It lives wild in herds on the windy plains and mountains of Patagonia, for example in Torres del Paine in Chile.',
      cs: 'Žije volně ve stádech na větrných pláních a v horách Patagonie, třeba v Torres del Paine v Chile.',
    },
    diet: {
      en: 'It eats grass, bushes, moss and even cactus flowers.',
      cs: 'Spásá trávu, keře, mech, a dokonce i květy kaktusů.',
    },
    predators: {
      en: 'The puma is its main enemy. Foxes and condors may take the babies.',
      cs: 'Jeho hlavním nepřítelem je puma. Mláďata mohou uchvátit i lišky a kondoři.',
    },
  },
  {
    id: 'andean-condor',
    name: { en: 'Andean condor', cs: 'Kondor andský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Cathartiformes', en: 'New World vultures', cs: 'Kondoři' },
      family: { latin: 'Cathartidae', en: 'New World vultures', cs: 'Kondorovití' },
      genus: 'Vultur',
      species: 'Vultur gryphus',
    },
    habitat: {
      en: 'It soars over the Andes mountains and the coast. It has some of the widest wings of any bird in the world.',
      cs: 'Plachtí nad horami And i nad pobřežím. Patří k ptákům s nejširšími křídly na světě.',
    },
    diet: {
      en: 'It eats dead animals, like guanacos, cows and sea lions, that it spots from high in the sky.',
      cs: 'Jí mrtvá zvířata, třeba guanaky, krávy nebo lachtany, které zahlédne z výšky.',
    },
    predators: {
      en: 'Grown-ups have no natural enemies. Foxes and other birds may steal eggs or chicks.',
      cs: 'Dospělí kondoři nemají v přírodě žádné nepřátele. Vajíčka nebo mládě může ukrást liška či jiný pták.',
    },
  },
  {
    id: 'long-tailed-chinchilla',
    name: { en: 'Long-tailed chinchilla', cs: 'Činčila vlnatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: chinchillidae,
      genus: 'Chinchilla',
      species: 'Chinchilla lanigera',
    },
    habitat: {
      en: 'It lives among rocks on dry mountain slopes in northern Chile. It has the softest, thickest fur of any land animal.',
      cs: 'Žije mezi kameny na suchých horských svazích na severu Chile. Má nejhebčí a nejhustší kožich ze všech suchozemských zvířat.',
    },
    diet: {
      en: 'It eats grass, seeds, leaves and cactus fruit.',
      cs: 'Jí trávu, semena, listy a plody kaktusů.',
    },
    predators: {
      en: 'Foxes, owls, hawks and snakes hunt it.',
      cs: 'Loví ji lišky, sovy, dravci a hadi.',
    },
  },
  {
    id: 'magellanic-penguin',
    name: { en: 'Magellanic penguin', cs: 'Tučňák magellanský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Sphenisciformes', en: 'Penguins', cs: 'Tučňáci' },
      family: { latin: 'Spheniscidae', en: 'Penguins', cs: 'Tučňákovití' },
      genus: 'Spheniscus',
      species: 'Spheniscus magellanicus',
    },
    habitat: {
      en: 'It nests in burrows on the coasts of Patagonia and the Falkland Islands, and swims in the cold sea.',
      cs: 'Hnízdí v norách na pobřeží Patagonie a na Falklandských ostrovech a plave ve studeném moři.',
    },
    diet: {
      en: 'It dives for small fish like anchovies and sardines, and eats squid and krill.',
      cs: 'Potápí se pro malé rybky, jako jsou ančovičky a sardinky, a loví i kalmary a kril.',
    },
    predators: {
      en: 'In the sea, sea lions, leopard seals and orcas hunt it. On land, foxes and gulls take eggs and chicks.',
      cs: 'V moři ho loví lachtani, tuleni leopardí a kosatky. Na souši mu vajíčka a mláďata berou lišky a racci.',
    },
  },
  {
    id: 'southern-elephant-seal',
    name: { en: 'Southern elephant seal', cs: 'Rypouš sloní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Mirounga',
      species: 'Mirounga leonina',
    },
    habitat: {
      en: 'It lives in the cold southern seas and comes onto beaches, like the Valdés Peninsula in Argentina, to have babies. Males have a big floppy nose.',
      cs: 'Žije v chladných jižních mořích a na pláže, třeba na poloostrově Valdés v Argentině, vylézá rodit mláďata. Samci mají velký převislý nos.',
    },
    diet: {
      en: 'It dives very deep to catch squid and fish.',
      cs: 'Potápí se velmi hluboko a loví kalmary a ryby.',
    },
    predators: {
      en: 'Orcas hunt it, and sometimes big sharks. Orcas even grab young seals right from the beach.',
      cs: 'Loví ho kosatky a někdy i velcí žraloci. Kosatky dokonce chytají mladé rypouše přímo na pláži.',
    },
  },
  {
    id: 'southern-right-whale',
    name: { en: 'Southern right whale', cs: 'Velryba jižní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: whales,
      family: { latin: 'Balaenidae', en: 'Right whales', cs: 'Velrybovití' },
      genus: 'Eubalaena',
      species: 'Eubalaena australis',
    },
    habitat: {
      en: 'It swims in the southern oceans. In spring many come close to the coast of Patagonia to have their babies.',
      cs: 'Plave v jižních oceánech. Na jaře jich mnoho připlouvá až k pobřeží Patagonie, kde rodí mláďata.',
    },
    diet: {
      en: 'It swims with its mouth open and strains tiny shrimp called krill and copepods from the water.',
      cs: 'Plave s otevřenou tlamou a cedí z vody drobné korýše, jako je kril a buchanky.',
    },
    predators: {
      en: 'Grown-ups are huge and have few enemies. Orcas and big sharks sometimes attack calves.',
      cs: 'Dospělé velryby jsou obrovské a mají málo nepřátel. Mláďata ale občas napadnou kosatky nebo velcí žraloci.',
    },
  },
  {
    id: 'commersons-dolphin',
    name: { en: "Commerson's dolphin", cs: 'Plískavice strakatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: whales,
      family: { latin: 'Delphinidae', en: 'Oceanic dolphins', cs: 'Delfínovití' },
      genus: 'Cephalorhynchus',
      species: 'Cephalorhynchus commersonii',
    },
    habitat: {
      en: 'It swims in cold, shallow water near the coasts of Patagonia, Tierra del Fuego and the Falkland Islands. It is black and white, like a little panda.',
      cs: 'Plave ve studené mělké vodě u pobřeží Patagonie, Ohňové země a Falklandských ostrovů. Je černobílá jako malá panda.',
    },
    diet: {
      en: 'It eats small fish, squid and shrimp.',
      cs: 'Jí malé ryby, kalmary a krevety.',
    },
    predators: {
      en: 'Orcas and big sharks can catch it.',
      cs: 'Může ji ulovit kosatka nebo velký žralok.',
    },
  },
  {
    id: 'greater-rhea',
    name: { en: 'Greater rhea', cs: 'Nandu pampový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Rheiformes', en: 'Rheas', cs: 'Nanduové' },
      family: { latin: 'Rheidae', en: 'Rheas', cs: 'Nanduovití' },
      genus: 'Rhea',
      species: 'Rhea americana',
    },
    habitat: {
      en: 'It lives on the wide grassy plains of the Pampas and in savannas. It cannot fly, but it runs very fast.',
      cs: 'Žije na širých travnatých pláních pampy a v savanách. Neumí létat, ale běhá velmi rychle.',
    },
    diet: {
      en: 'It eats grass, leaves, seeds and fruit, and also insects, lizards and small animals.',
      cs: 'Jí trávu, listy, semena a plody a také hmyz, ještěrky a malá zvířata.',
    },
    predators: {
      en: 'Pumas and jaguars hunt grown-ups. Foxes, armadillos and big lizards eat the eggs, which the father guards.',
      cs: 'Dospělé nandu loví pumy a jaguáři. Vajíčka, která hlídá táta, žerou lišky, pásovci a velcí ještěři.',
    },
  },
  {
    id: 'argentine-horned-frog',
    name: { en: 'Argentine horned frog', cs: 'Rohatka ozdobná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: anura,
      family: { latin: 'Ceratophryidae', en: 'Horned frogs', cs: 'Rohatkovití' },
      genus: 'Ceratophrys',
      species: 'Ceratophrys ornata',
    },
    habitat: {
      en: 'It lives in wet grasslands of the Pampas in Argentina, Uruguay and Brazil. It hides in mud with only its eyes showing.',
      cs: 'Žije na vlhkých pláních pampy v Argentině, Uruguayi a Brazílii. Schovává se v bahně, ven mu koukají jen oči.',
    },
    diet: {
      en: 'It has a huge mouth and swallows anything that fits: insects, mice, lizards and other frogs.',
      cs: 'Má obrovskou tlamu a spolkne všechno, co se do ní vejde: hmyz, myši, ještěrky i jiné žáby.',
    },
    predators: {
      en: 'Snakes, herons, storks and other birds eat it.',
      cs: 'Žerou ji hadi, volavky, čápi a další ptáci.',
    },
  },
  {
    id: 'pampas-deer',
    name: { en: 'Pampas deer', cs: 'Jelenec pampový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Ozotoceros',
      species: 'Ozotoceros bezoarticus',
    },
    habitat: {
      en: 'It lives on open grassy plains in Argentina, Uruguay and Brazil. Today it is rare in the Pampas.',
      cs: 'Žije na otevřených travnatých pláních v Argentině, Uruguayi a Brazílii. V pampě je dnes vzácný.',
    },
    diet: {
      en: 'It eats fresh grass, herbs and flowers.',
      cs: 'Spásá čerstvou trávu, byliny a květy.',
    },
    predators: {
      en: 'Pumas and jaguars hunt it. Foxes and eagles can catch fawns.',
      cs: 'Loví ho pumy a jaguáři. Kolouchy mohou ulovit lišky a orli.',
    },
  },
  {
    id: 'plains-viscacha',
    name: { en: 'Plains viscacha', cs: 'Viskača' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: chinchillidae,
      genus: 'Lagostomus',
      species: 'Lagostomus maximus',
    },
    habitat: {
      en: 'It lives in big families in underground burrows on the plains of Argentina. It has a stripy black and white face.',
      cs: 'Žije ve velkých rodinách v podzemních norách na pláních Argentiny. Má černobíle pruhovaný obličej.',
    },
    diet: {
      en: 'It comes out at night to eat grass, seeds and roots.',
      cs: 'V noci vylézá a spásá trávu, semena a kořínky.',
    },
    predators: {
      en: 'Pumas, foxes, wild cats and owls hunt it.',
      cs: 'Loví ji pumy, lišky, divoké kočky a sovy.',
    },
  },
  {
    id: 'puma',
    name: { en: 'Puma', cs: 'Puma americká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: felidae,
      genus: 'Puma',
      species: 'Puma concolor',
    },
    habitat: {
      en: 'It lives in many places, from mountains and forests to the windy plains of Patagonia. It is a big, strong cat that jumps very far.',
      cs: 'Žije na mnoha místech, od hor a lesů až po větrné pláně Patagonie. Je to velká a silná kočka, která skáče hodně daleko.',
    },
    diet: {
      en: 'It hunts guanacos, deer, hares and other animals by sneaking up and pouncing.',
      cs: 'Loví guanaka, jeleny, zajíce a další zvířata. Nejdřív se připlíží a pak skočí.',
    },
    predators: {
      en: 'Grown-up pumas have almost no enemies. Cubs can be killed by other pumas or by jaguars in the north.',
      cs: 'Dospělé pumy nemají skoro žádné nepřátele. Koťata může zabít jiná puma nebo na severu jaguár.',
    },
  },
  {
    id: 'southern-pudu',
    name: { en: 'Southern pudu', cs: 'Pudu jižní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Pudu',
      species: 'Pudu puda',
    },
    habitat: {
      en: 'It lives in thick, rainy forests in southern Chile, for example on Chiloé Island. It is one of the smallest deer in the world, as small as a dog.',
      cs: 'Žije v hustých a deštivých lesích na jihu Chile, třeba na ostrově Chiloé. Patří k nejmenším jelenům na světě, je velký jako pes.',
    },
    diet: {
      en: 'It eats leaves, buds, fruit, flowers and ferns.',
      cs: 'Jí listy, pupeny, plody, květy a kapradiny.',
    },
    predators: {
      en: 'Pumas, foxes, owls and wild cats hunt it. Dogs are also a danger.',
      cs: 'Loví ho pumy, lišky, sovy a divoké kočky. Nebezpeční jsou mu i psi.',
    },
  },
  {
    id: 'darwins-frog',
    name: { en: "Darwin's frog", cs: 'Nosatka Darwinova' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: anura,
      family: { latin: 'Rhinodermatidae', en: 'Mouth-brooding frogs', cs: 'Nosatkovití' },
      genus: 'Rhinoderma',
      species: 'Rhinoderma darwinii',
    },
    habitat: {
      en: 'It lives on the damp floor of cool forests in southern Chile and Argentina. The dad keeps the tadpoles safe in a pouch in his throat!',
      cs: 'Žije na vlhké zemi v chladných lesích na jihu Chile a Argentiny. Táta nosí pulce v hrdle, aby byli v bezpečí!',
    },
    diet: {
      en: 'It eats small insects, spiders and snails.',
      cs: 'Jí drobný hmyz, pavouky a plže.',
    },
    predators: {
      en: 'Birds and snakes can eat it. It looks like a dead leaf, which helps it hide.',
      cs: 'Může ji sežrat pták nebo had. Vypadá jako suchý list, a tak se dobře schová.',
    },
  },
  {
    id: 'blue-whale',
    name: { en: 'Blue whale', cs: 'Plejtvák obrovský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: whales,
      family: { latin: 'Balaenopteridae', en: 'Rorquals', cs: 'Plejtvákovití' },
      genus: 'Balaenoptera',
      species: 'Balaenoptera musculus',
    },
    habitat: {
      en: 'It swims in all oceans. In summer many come to feed in the sea near Chiloé in Chile. It is the biggest animal that has ever lived.',
      cs: 'Plave ve všech oceánech. V létě jich mnoho připlouvá na hostinu do moře u ostrova Chiloé v Chile. Je to největší zvíře, které kdy žilo.',
    },
    diet: {
      en: 'It eats tiny shrimp called krill, millions of them every day.',
      cs: 'Jí drobné korýše zvané kril, každý den jich spořádá miliony.',
    },
    predators: {
      en: 'Grown-ups are too big for any enemy. Orcas sometimes attack young whales.',
      cs: 'Dospělí plejtváci jsou pro všechny nepřátele příliš velcí. Mláďata ale občas napadnou kosatky.',
    },
  },
  {
    id: 'culpeo',
    name: { en: 'Culpeo', cs: 'Pes horský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Lycalopex',
      species: 'Lycalopex culpaeus',
    },
    habitat: {
      en: 'This fox lives in the Andes mountains and on the cold plains of Patagonia, all the way to Tierra del Fuego.',
      cs: 'Tahle liška žije v horách And a na chladných pláních Patagonie až po Ohňovou zemi.',
    },
    diet: {
      en: 'It hunts rabbits, hares, rodents, birds and lizards. It also eats fruit and dead animals.',
      cs: 'Loví králíky, zajíce, hlodavce, ptáky a ještěrky. Jí také ovoce a mrtvá zvířata.',
    },
    predators: {
      en: 'Pumas can catch it. Pups may be taken by eagles and eagle-owls.',
      cs: 'Může ji ulovit puma. Mláďata mohou uchvátit orli a výři.',
    },
  },
  {
    id: 'south-american-sea-lion',
    name: { en: 'South American sea lion', cs: 'Lachtan hřivnatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: otariidae,
      genus: 'Otaria',
      species: 'Otaria flavescens',
    },
    habitat: {
      en: 'It lives along the coasts of South America, from Peru down to Tierra del Fuego and the Falklands. Big males have a mane like a lion.',
      cs: 'Žije u pobřeží Jižní Ameriky, od Peru až po Ohňovou zemi a Falklandy. Velcí samci mají hřívu jako lev.',
    },
    diet: {
      en: 'It eats fish, squid and octopus. Sometimes it catches penguins.',
      cs: 'Jí ryby, kalmary a chobotnice. Občas uloví i tučňáka.',
    },
    predators: {
      en: 'Orcas hunt it, and sometimes big sharks. Pups are guarded by their mothers.',
      cs: 'Loví ho kosatky a někdy i velcí žraloci. Mláďata hlídají jejich mámy.',
    },
  },
]
