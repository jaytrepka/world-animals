import type { AnimalContent } from '../../types'
import {
  animalia, chordata, mammalia, aves, reptilia, amphibia, chondrichthyes, carnivora, artiodactyla,
  primates, pilosa, cingulata, sirenia, squamata, crocodilia, testudines, anura, caudata,
  felidae, delphinidae, iguanidae,
} from './taxa'

export const southContent: AnimalContent[] = [
  {
    id: 'brown-throated-sloth',
    name: { en: 'Brown-throated sloth', cs: 'Lenochod hnědokrký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: pilosa,
      family: { latin: 'Bradypodidae', en: 'Three-toed sloths', cs: 'Lenochodovití' },
      genus: 'Bradypus',
      species: 'Bradypus variegatus',
    },
    habitat: {
      en: 'It lives high up in the trees of warm rainforests in Panama, Central and South America. It hangs upside down and moves very, very slowly.',
      cs: 'Žije vysoko v korunách stromů v teplých deštných pralesích Panamy, Střední a Jižní Ameriky. Visí hlavou dolů a pohybuje se hrozně pomalu.',
    },
    diet: {
      en: 'It eats leaves, buds and flowers. It sleeps a lot, because leaves give it only a little energy.',
      cs: 'Jí listy, pupeny a květy. Hodně spí, protože listy mu dávají jen málo síly.',
    },
    predators: {
      en: 'Harpy eagles, jaguars, ocelots and big snakes can catch it.',
      cs: 'Může ho ulovit harpyje, jaguár, ocelot nebo velký had.',
    },
  },
  {
    id: 'red-eyed-tree-frog',
    name: { en: 'Red-eyed tree frog', cs: 'Listovnice červenooká' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: amphibia,
      order: anura,
      family: { latin: 'Phyllomedusidae', en: 'Leaf frogs', cs: 'Listovnicovití' },
      genus: 'Agalychnis',
      species: 'Agalychnis callidryas',
    },
    habitat: {
      en: 'This bright green frog with big red eyes lives on leaves near ponds in the rainforests of Costa Rica and nearby countries.',
      cs: 'Tahle jasně zelená žabka s velkýma červenýma očima žije na listech u tůněk v deštných pralesích Kostariky a okolních zemí.',
    },
    diet: {
      en: 'At night it catches crickets, moths, flies and other insects.',
      cs: 'V noci chytá cvrčky, můry, mouchy a jiný hmyz.',
    },
    predators: {
      en: 'Snakes, birds, bats and spiders eat it. Its eggs on leaves are eaten by snakes and wasps.',
      cs: 'Žerou ji hadi, ptáci, netopýři a pavouci. Vajíčka na listech jí sežerou hadi a vosy.',
    },
  },
  {
    id: 'mantled-howler',
    name: { en: 'Mantled howler', cs: 'Vřešťan pláštíkový' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: primates,
      family: { latin: 'Atelidae', en: 'Howler and spider monkeys', cs: 'Chápanovití' },
      genus: 'Alouatta',
      species: 'Alouatta palliata',
    },
    habitat: {
      en: 'This black monkey lives in the treetops of forests in Central America, from Mexico to Panama. Its loud howl can be heard far away.',
      cs: 'Tahle černá opice žije v korunách stromů ve Střední Americe, od Mexika až po Panamu. Její hlasitý řev je slyšet hodně daleko.',
    },
    diet: {
      en: 'It eats leaves, fruit and flowers.',
      cs: 'Jí listy, ovoce a květy.',
    },
    predators: {
      en: 'Jaguars, ocelots, harpy eagles and big snakes can catch it.',
      cs: 'Může ji ulovit jaguár, ocelot, harpyje nebo velký had.',
    },
  },
  {
    id: 'resplendent-quetzal',
    name: { en: 'Resplendent quetzal', cs: 'Kvesal chocholatý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Trogoniformes', en: 'Trogons', cs: 'Trogoni' },
      family: { latin: 'Trogonidae', en: 'Trogons and quetzals', cs: 'Trogonovití' },
      genus: 'Pharomachrus',
      species: 'Pharomachrus mocinno',
    },
    habitat: {
      en: 'This shiny green and red bird lives in misty mountain forests from southern Mexico to Panama. The male has a very long tail.',
      cs: 'Tenhle lesklý zeleno-červený pták žije v mlžných horských lesích od jižního Mexika po Panamu. Samec má moc dlouhý ocas.',
    },
    diet: {
      en: 'It loves small wild avocados. It also eats berries, insects, frogs and lizards.',
      cs: 'Nejraději má malá divoká avokáda. Jí ale i bobule, hmyz, žabky a ještěrky.',
    },
    predators: {
      en: 'Hawks, owls and eagles hunt the grown-ups. Squirrels, weasels and toucans can eat the eggs and chicks.',
      cs: 'Dospělé kvesaly loví jestřábi, sovy a orli. Vajíčka a mláďata mohou sežrat veverky, lasice a tukani.',
    },
  },
  {
    id: 'jaguar',
    name: { en: 'Jaguar', cs: 'Jaguár americký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: felidae,
      genus: 'Panthera',
      species: 'Panthera onca',
    },
    habitat: {
      en: 'This big spotted cat lives in rainforests and swamps from Mexico to South America. It is a great swimmer.',
      cs: 'Tahle velká skvrnitá kočka žije v deštných pralesích a bažinách od Mexika po Jižní Ameriku. Výborně plave.',
    },
    diet: {
      en: 'It hunts deer, wild pigs, tapirs, monkeys, turtles and even caimans. It has a super strong bite.',
      cs: 'Loví jeleny, pekari, tapíry, opice, želvy, a dokonce i kajmany. Má neuvěřitelně silný stisk čelistí.',
    },
    predators: {
      en: 'Grown-up jaguars have no enemies. Only the cubs can be in danger from other big animals.',
      cs: 'Dospělí jaguáři nemají žádné nepřátele. V nebezpečí mohou být jen mláďata.',
    },
  },
  {
    id: 'keel-billed-toucan',
    name: { en: 'Keel-billed toucan', cs: 'Tukan krátkozobý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Piciformes', en: 'Woodpeckers and toucans', cs: 'Šplhavci' },
      family: { latin: 'Ramphastidae', en: 'Toucans', cs: 'Tukanovití' },
      genus: 'Ramphastos',
      species: 'Ramphastos sulfuratus',
    },
    habitat: {
      en: 'It lives in the treetops of rainforests from southern Mexico to Colombia. Its huge beak is green, orange and red, like a rainbow.',
      cs: 'Žije v korunách stromů v deštných pralesích od jižního Mexika po Kolumbii. Jeho obrovský zobák je zelený, oranžový a červený jako duha.',
    },
    diet: {
      en: 'It mostly eats fruit. It also eats insects, lizards, eggs and small birds.',
      cs: 'Nejvíc jí ovoce. Dá si ale i hmyz, ještěrky, vajíčka a malé ptáčky.',
    },
    predators: {
      en: 'Eagles, hawks, jaguars, ocelots and snakes can catch it. Monkeys and snakes steal its eggs.',
      cs: 'Může ho ulovit orel, jestřáb, jaguár, ocelot nebo had. Opice a hadi mu kradou vajíčka.',
    },
  },
  {
    id: 'green-iguana',
    name: { en: 'Green iguana', cs: 'Leguán zelený' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: iguanidae,
      genus: 'Iguana',
      species: 'Iguana iguana',
    },
    habitat: {
      en: 'This big green lizard lives in trees near rivers in warm forests of Mexico, Central and South America. It jumps into the water when it is scared.',
      cs: 'Tahle velká zelená ještěrka žije na stromech u řek v teplých lesích Mexika, Střední a Jižní Ameriky. Když se lekne, skočí do vody.',
    },
    diet: {
      en: 'It eats only plants: leaves, flowers and fruit.',
      cs: 'Jí jen rostliny: listy, květy a ovoce.',
    },
    predators: {
      en: 'Hawks, eagles, snakes, ocelots and jaguars hunt it. Young iguanas are eaten by many birds.',
      cs: 'Loví ho jestřábi, orli, hadi, oceloti a jaguáři. Mladé leguány žere spousta ptáků.',
    },
  },
  {
    id: 'axolotl',
    name: { en: 'Axolotl', cs: 'Axolotl mexický' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: amphibia,
      order: caudata,
      family: { latin: 'Ambystomatidae', en: 'Mole salamanders', cs: 'Axolotlovití' },
      genus: 'Ambystoma',
      species: 'Ambystoma mexicanum',
    },
    habitat: {
      en: 'It lives only in the canals and lakes of Mexico City. It stays in the water all its life and has fluffy gills like a crown.',
      cs: 'Žije jen v kanálech a jezerech u hlavního města Mexika. Celý život zůstává ve vodě a má načechrané žábry jako korunku.',
    },
    diet: {
      en: 'It eats worms, small snails, water insects and tiny fish.',
      cs: 'Jí červy, malé šnečky, vodní hmyz a drobné rybky.',
    },
    predators: {
      en: 'Herons and big fish like carp and tilapia eat it.',
      cs: 'Žerou ho volavky a velké ryby, třeba kapři a tilápie.',
    },
  },
  {
    id: 'ocelot',
    name: { en: 'Ocelot', cs: 'Ocelot velký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: felidae,
      genus: 'Leopardus',
      species: 'Leopardus pardalis',
    },
    habitat: {
      en: 'This spotted wild cat lives in thick forests and bushes from south Texas and Mexico to South America.',
      cs: 'Tahle skvrnitá divoká kočka žije v hustých lesích a křovinách od jižního Texasu a Mexika po Jižní Ameriku.',
    },
    diet: {
      en: 'At night it hunts rats, rabbits, opossums, birds, lizards and fish.',
      cs: 'V noci loví krysy, králíky, vačice, ptáky, ještěrky a ryby.',
    },
    predators: {
      en: 'Jaguars, cougars, big eagles and big snakes can catch it.',
      cs: 'Může ho ulovit jaguár, puma, velký orel nebo velký had.',
    },
  },
  {
    id: 'gray-whale',
    name: { en: 'Gray whale', cs: 'Plejtvákovec šedý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: { latin: 'Eschrichtiidae', en: 'Gray whales', cs: 'Plejtvákovcovití' },
      genus: 'Eschrichtius',
      species: 'Eschrichtius robustus',
    },
    habitat: {
      en: 'In winter it swims to warm lagoons in Mexico to have its babies. In summer it swims all the way north to the cold sea near Alaska.',
      cs: 'V zimě připlouvá do teplých lagun v Mexiku, kde se mu rodí mláďata. V létě plave až na sever do studeného moře u Aljašky.',
    },
    diet: {
      en: 'It scoops up mud from the sea floor and strains out tiny shrimp and worms with its baleen.',
      cs: 'Nabírá bahno z mořského dna a přes kostice z něj cedí drobné korýše a červy.',
    },
    predators: {
      en: 'Orcas hunt it, mostly the young ones. Big sharks can attack the babies too.',
      cs: 'Loví ho kosatky, hlavně mláďata. Na mláďata mohou zaútočit i velcí žraloci.',
    },
  },
  {
    id: 'whale-shark',
    name: { en: 'Whale shark', cs: 'Žralok obrovský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Orectolobiformes', en: 'Carpet sharks', cs: 'Malotlamci' },
      family: { latin: 'Rhincodontidae', en: 'Whale sharks', cs: 'Veležralokovití' },
      genus: 'Rhincodon',
      species: 'Rhincodon typus',
    },
    habitat: {
      en: 'The biggest fish in the world lives in warm seas. Many swim in the Gulf of California and near the Yucatán in Mexico.',
      cs: 'Největší ryba na světě žije v teplých mořích. Hodně jich plave v Kalifornském zálivu a u Yucatánu v Mexiku.',
    },
    diet: {
      en: 'It is gentle and has no big teeth. It swims with its mouth wide open and swallows tiny plankton and small fish.',
      cs: 'Je mírný a nemá velké zuby. Plave s dokořán otevřenou tlamou a polyká drobný plankton a malé rybky.',
    },
    predators: {
      en: 'Grown-ups are too big to be hunted, but orcas sometimes attack them. Young ones can be eaten by big sharks.',
      cs: 'Dospělí žraloci jsou moc velcí, ale kosatky na ně občas zaútočí. Mláďata mohou sežrat velcí žraloci.',
    },
  },
  {
    id: 'bottlenose-dolphin',
    name: { en: 'Common bottlenose dolphin', cs: 'Delfín skákavý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: delphinidae,
      genus: 'Tursiops',
      species: 'Tursiops truncatus',
    },
    habitat: {
      en: 'It lives in warm seas all over the world, for example in the Gulf of Mexico. It loves to jump and play.',
      cs: 'Žije v teplých mořích po celém světě, třeba v Mexickém zálivu. Moc rád skáče a hraje si.',
    },
    diet: {
      en: 'It eats fish, squid and shrimp. It finds them with clicking sounds that echo back.',
      cs: 'Jí ryby, olihně a krevety. Hledá je pomocí cvakavých zvuků, které se mu vracejí jako ozvěna.',
    },
    predators: {
      en: 'Big sharks and orcas can catch it.',
      cs: 'Může ho ulovit velký žralok nebo kosatka.',
    },
  },
  {
    id: 'west-indian-manatee',
    name: { en: 'West Indian manatee', cs: 'Kapustňák širokonosý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: sirenia,
      family: { latin: 'Trichechidae', en: 'Manatees', cs: 'Kapustňákovití' },
      genus: 'Trichechus',
      species: 'Trichechus manatus',
    },
    habitat: {
      en: 'This big, gentle sea cow lives in warm, shallow water along the coasts and rivers of Florida and the Caribbean.',
      cs: 'Tahle velká mírná mořská kráva žije v teplé mělké vodě u pobřeží a v řekách Floridy a Karibiku.',
    },
    diet: {
      en: 'It eats sea grass and water plants, lots of them every day.',
      cs: 'Spásá mořskou trávu a vodní rostliny, a to spoustu každý den.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Sharks, crocodiles and alligators sometimes catch the young.',
      cs: 'Dospělí kapustňáci nemají skoro žádné nepřátele. Mláďata ale občas uloví žraloci, krokodýli a aligátoři.',
    },
  },
  {
    id: 'american-crocodile',
    name: { en: 'American crocodile', cs: 'Krokodýl americký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: crocodilia,
      family: { latin: 'Crocodylidae', en: 'True crocodiles', cs: 'Krokodýlovití' },
      genus: 'Crocodylus',
      species: 'Crocodylus acutus',
    },
    habitat: {
      en: 'It lives in salty swamps, mangroves and river mouths in southern Florida, the Caribbean and Central America.',
      cs: 'Žije ve slaných bažinách, mangrovech a v ústí řek na jihu Floridy, v Karibiku a ve Střední Americe.',
    },
    diet: {
      en: 'It mostly eats fish. It also catches crabs, turtles, birds and small animals.',
      cs: 'Nejvíc jí ryby. Chytá ale i kraby, želvy, ptáky a malá zvířata.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Raccoons, birds and crabs eat the eggs and babies.',
      cs: 'Dospělí krokodýli nemají žádné nepřátele. Vajíčka a mláďata ale sežerou mývalové, ptáci a krabi.',
    },
  },
  {
    id: 'american-flamingo',
    name: { en: 'American flamingo', cs: 'Plameňák karibský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Phoenicopteriformes', en: 'Flamingos', cs: 'Plameňáci' },
      family: { latin: 'Phoenicopteridae', en: 'Flamingos', cs: 'Plameňákovití' },
      genus: 'Phoenicopterus',
      species: 'Phoenicopterus ruber',
    },
    habitat: {
      en: 'This bright pink bird lives in big flocks in shallow, salty lagoons in Cuba, the Bahamas and Mexico.',
      cs: 'Tenhle zářivě růžový pták žije ve velkých hejnech v mělkých slaných lagunách na Kubě, Bahamách a v Mexiku.',
    },
    diet: {
      en: 'It eats tiny shrimp, snails and seeds, which it filters from the water with its bent beak. The shrimp make it pink.',
      cs: 'Jí drobné krevetky, plže a semínka, které cedí z vody zahnutým zobákem. Růžovou barvu má právě díky krevetkám.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Raccoons, gulls and hawks can take the eggs and chicks.',
      cs: 'Dospělí plameňáci mají málo nepřátel. Vajíčka a mláďata ale mohou ukořistit mývalové, rackové a jestřábi.',
    },
  },
  {
    id: 'rhinoceros-iguana',
    name: { en: 'Rhinoceros iguana', cs: 'Leguán nosorohý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: iguanidae,
      genus: 'Cyclura',
      species: 'Cyclura cornuta',
    },
    habitat: {
      en: 'This big grey lizard lives in dry, rocky forests on the island of Hispaniola in the Caribbean. It has little horns on its nose.',
      cs: 'Tahle velká šedá ještěrka žije v suchých kamenitých lesích na ostrově Hispaniola v Karibiku. Na nose má malé růžky.',
    },
    diet: {
      en: 'It mostly eats leaves, flowers, fruit and seeds. Sometimes it eats a snail or an insect.',
      cs: 'Nejvíc jí listy, květy, ovoce a semínka. Občas si dá i šneka nebo hmyz.',
    },
    predators: {
      en: 'Grown-ups have few natural enemies. Snakes, dogs, cats and mongooses eat the eggs and young.',
      cs: 'Dospělí leguáni mají málo přirozených nepřátel. Vajíčka a mláďata ale žerou hadi, psi, kočky a promyky.',
    },
  },
  {
    id: 'hawksbill-sea-turtle',
    name: { en: 'Hawksbill sea turtle', cs: 'Kareta pravá' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: testudines,
      family: { latin: 'Cheloniidae', en: 'Sea turtles', cs: 'Karetovití' },
      genus: 'Eretmochelys',
      species: 'Eretmochelys imbricata',
    },
    habitat: {
      en: 'It lives on colourful coral reefs in warm seas, like the Caribbean Sea. It has a pointy beak like a bird.',
      cs: 'Žije na barevných korálových útesech v teplých mořích, třeba v Karibském moři. Má špičatý zobák jako pták.',
    },
    diet: {
      en: 'It mostly eats sea sponges. It also eats jellyfish, sea anemones and seaweed.',
      cs: 'Nejvíc jí mořské houby. Dá si ale i medúzy, sasanky a mořské řasy.',
    },
    predators: {
      en: 'Big sharks can catch grown-ups. Crabs, birds and fish eat the eggs and babies.',
      cs: 'Dospělé karety může ulovit velký žralok. Vajíčka a mláďata žerou krabi, ptáci a ryby.',
    },
  },
  {
    id: 'common-coqui',
    name: { en: 'Common coquí', cs: 'Bezblanka koki' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: amphibia,
      order: anura,
      family: { latin: 'Eleutherodactylidae', en: 'Rain frogs', cs: 'Bezblankovití' },
      genus: 'Eleutherodactylus',
      species: 'Eleutherodactylus coqui',
    },
    habitat: {
      en: 'This tiny frog lives in forests and gardens on the island of Puerto Rico. At night the males sing “ko-kee, ko-kee”.',
      cs: 'Tahle drobná žabka žije v lesích a na zahradách na ostrově Portoriko. V noci samečci zpívají „ko-kí, ko-kí“.',
    },
    diet: {
      en: 'It eats insects, spiders and snails.',
      cs: 'Jí hmyz, pavouky a plže.',
    },
    predators: {
      en: 'Snakes, birds, lizards, rats and big spiders eat it.',
      cs: 'Žerou ji hadi, ptáci, ještěrky, krysy a velcí pavouci.',
    },
  },
  {
    id: 'nine-banded-armadillo',
    name: { en: 'Nine-banded armadillo', cs: 'Pásovec devítipásý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: cingulata,
      family: { latin: 'Dasypodidae', en: 'Long-nosed armadillos', cs: 'Pásovcovití' },
      genus: 'Dasypus',
      species: 'Dasypus novemcinctus',
    },
    habitat: {
      en: 'It lives in grasslands, forests and fields from Texas to South America. Its body is covered in hard armour.',
      cs: 'Žije na travnatých pláních, v lesích a na polích od Texasu po Jižní Ameriku. Tělo mu chrání tvrdý pancíř.',
    },
    diet: {
      en: 'It digs with its strong claws and sniffs out ants, beetles, worms and grubs.',
      cs: 'Hrabe silnými drápy a vyčenichá mravence, brouky, žížaly a larvy.',
    },
    predators: {
      en: 'Coyotes, cougars, bobcats, bears and big birds of prey can catch it. When scared, it jumps high into the air.',
      cs: 'Může ho ulovit kojot, puma, rys červený, medvěd nebo velký dravec. Když se lekne, vyskočí vysoko do vzduchu.',
    },
  },
]
