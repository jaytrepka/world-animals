import type { AnimalContent } from '../types'

const animalia = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammalia = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const reptilia = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const aves = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const chondrichthyes = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const squamata = { latin: 'Squamata', en: 'Scaled reptiles (lizards and snakes)', cs: 'Šupinatí' }
const diprotodontia = { latin: 'Diprotodontia', en: 'Diprotodont marsupials', cs: 'Dvojitozubci' }
const macropodidae = { latin: 'Macropodidae', en: 'Kangaroos and wallabies', cs: 'Klokanovití' }
const agamidae = { latin: 'Agamidae', en: 'Agamas and dragon lizards', cs: 'Agamovití' }

export const middleContent: AnimalContent[] = [
  {
    id: 'red-kangaroo',
    name: { en: 'Red kangaroo', cs: 'Klokan rudý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: diprotodontia,
      family: macropodidae,
      genus: 'Osphranter',
      species: 'Osphranter rufus',
    },
    habitat: {
      en: 'It lives on the hot, dry plains and grasslands in the middle of Australia.',
      cs: 'Žije na horkých, suchých pláních a travnatých stepích uprostřed Austrálie.',
    },
    diet: {
      en: 'It eats grass and soft green plants. It can go a long time without drinking water.',
      cs: 'Spásá trávu a měkké zelené rostliny. Dlouho vydrží bez pití vody.',
    },
    predators: {
      en: 'Dingoes hunt it, and wedge-tailed eagles sometimes catch the young joeys.',
      cs: 'Loví ho dingové a malá klokaní mláďata si občas odnese orel klínoocasý.',
    },
  },
  {
    id: 'emu',
    name: { en: 'Emu', cs: 'Emu hnědý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Casuariiformes', en: 'Cassowaries and emus', cs: 'Kasuáři' },
      family: { latin: 'Casuariidae', en: 'Cassowaries and emus', cs: 'Kasuárovití' },
      genus: 'Dromaius',
      species: 'Dromaius novaehollandiae',
    },
    habitat: {
      en: 'It lives almost all over Australia, in grasslands, open woods and dry bushland.',
      cs: 'Žije skoro po celé Austrálii – v travnatých krajinách, řídkých lesích a suchém buši.',
    },
    diet: {
      en: 'It eats fruit, seeds, flowers and young plants, and also catches insects like grasshoppers.',
      cs: 'Jí plody, semínka, květy a mladé rostlinky. Chytá také hmyz, třeba kobylky.',
    },
    predators: {
      en: 'Dingoes and wedge-tailed eagles hunt it. Foxes and big lizards like to steal its eggs.',
      cs: 'Loví ho dingové a orli klínoocasí. Lišky a velcí varani rádi kradou jeho vejce.',
    },
  },
  {
    id: 'dingo',
    name: { en: 'Dingo', cs: 'Pes dingo' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' },
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Canis',
      species: 'Canis familiaris',
    },
    habitat: {
      en: 'It lives all over Australia, from hot deserts and grasslands to forests.',
      cs: 'Žije po celé Austrálii, od horkých pouští a travnatých plání až po lesy.',
    },
    diet: {
      en: 'It is a hunter. It eats kangaroos, wallabies, rabbits, rats, birds and lizards.',
      cs: 'Je to lovec. Loví klokany, klokánky, králíky, krysy, ptáky a ještěrky.',
    },
    predators: {
      en: 'Grown-up dingoes have almost no enemies. Wedge-tailed eagles sometimes catch the puppies.',
      cs: 'Dospělí dingové nemají skoro žádné nepřátele. Štěňata ale občas uloví orel klínoocasý.',
    },
  },
  {
    id: 'thorny-devil',
    name: { en: 'Thorny devil', cs: 'Moloch ostnitý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: agamidae,
      genus: 'Moloch',
      species: 'Moloch horridus',
    },
    habitat: {
      en: 'It lives in the sandy deserts of central and western Australia, among prickly spinifex grass.',
      cs: 'Žije v písečných pouštích ve středu a na západě Austrálie, mezi pichlavou trávou spinifexem.',
    },
    diet: {
      en: 'It eats only ants – thousands of tiny ants every day!',
      cs: 'Jí jenom mravence – každý den jich spořádá tisíce!',
    },
    predators: {
      en: 'Birds like hawks and bustards, and big lizards called goannas, try to eat it. Its spikes help keep it safe.',
      cs: 'Chtějí ho sníst dravci, dropi a velcí varani. Chrání ho ale jeho ostré bodliny.',
    },
  },
  {
    id: 'perentie',
    name: { en: 'Perentie', cs: 'Varan obrovský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Varanidae', en: 'Monitor lizards', cs: 'Varanovití' },
      genus: 'Varanus',
      species: 'Varanus giganteus',
    },
    habitat: {
      en: 'It lives in the deserts of central and western Australia, near rocky hills with lots of hiding places.',
      cs: 'Žije v pouštích ve středu a na západě Austrálie, blízko skalnatých kopců, kde se dá dobře schovat.',
    },
    diet: {
      en: 'It is the biggest lizard in Australia. It eats other lizards, snakes, birds, eggs and small animals.',
      cs: 'Je to největší ještěr Austrálie. Jí jiné ještěry, hady, ptáky, vejce a malá zvířata.',
    },
    predators: {
      en: 'Big adults have almost no enemies. Birds of prey and dingoes sometimes catch the young ones.',
      cs: 'Velcí dospělí varani nemají skoro žádné nepřátele. Mláďata ale občas uloví dravci nebo dingové.',
    },
  },
  {
    id: 'greater-bilby',
    name: { en: 'Greater bilby', cs: 'Bandikut králíkovitý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Peramelemorphia', en: 'Bandicoots and bilbies', cs: 'Bandikuti' },
      family: { latin: 'Thylacomyidae', en: 'Bilbies', cs: 'Bandikutovití jemnosrstí' },
      genus: 'Macrotis',
      species: 'Macrotis lagotis',
    },
    habitat: {
      en: 'It lives in the dry deserts of Australia. It digs deep burrows and stays inside during the hot day.',
      cs: 'Žije v suchých australských pouštích. Hrabe si hluboké nory a přes horký den v nich odpočívá.',
    },
    diet: {
      en: 'At night it digs for insects, grubs, seeds, bulbs and mushrooms.',
      cs: 'V noci vyhrabává ze země hmyz, larvy, semínka, cibulky a houby.',
    },
    predators: {
      en: 'Foxes, wild cats and dingoes hunt it.',
      cs: 'Loví ho lišky, zdivočelé kočky a dingové.',
    },
  },
  {
    id: 'koala',
    name: { en: 'Koala', cs: 'Koala medvídkovitý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: diprotodontia,
      family: { latin: 'Phascolarctidae', en: 'Koalas', cs: 'Koalovití' },
      genus: 'Phascolarctos',
      species: 'Phascolarctos cinereus',
    },
    habitat: {
      en: 'It lives high up in eucalyptus trees in the forests of eastern Australia.',
      cs: 'Žije vysoko v korunách blahovičníků v lesích na východě Austrálie.',
    },
    diet: {
      en: 'It eats almost only eucalyptus leaves. It sleeps most of the day.',
      cs: 'Jí skoro jen listy blahovičníku (eukalyptu). Většinu dne prospí.',
    },
    predators: {
      en: 'Dingoes and dogs can catch it on the ground. Big owls, eagles and pythons sometimes take the young ones.',
      cs: 'Na zemi ho mohou chytit dingové a psi. Mláďata občas uloví velké sovy, orli nebo krajty.',
    },
  },
  {
    id: 'short-beaked-echidna',
    name: { en: 'Short-beaked echidna', cs: 'Ježura australská' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Monotremata', en: 'Egg-laying mammals', cs: 'Ptakořitní' },
      family: { latin: 'Tachyglossidae', en: 'Echidnas', cs: 'Ježurovití' },
      genus: 'Tachyglossus',
      species: 'Tachyglossus aculeatus',
    },
    habitat: {
      en: 'It lives almost everywhere in Australia – in forests, grasslands and even deserts.',
      cs: 'Žije skoro všude v Austrálii – v lesích, na travnatých pláních i v pouštích.',
    },
    diet: {
      en: 'It eats ants and termites. It catches them with its long, sticky tongue.',
      cs: 'Jí mravence a termity. Chytá je svým dlouhým lepkavým jazykem.',
    },
    predators: {
      en: 'Dingoes, foxes, wild cats and goannas sometimes hunt it, especially the young ones. It rolls into a spiky ball to stay safe.',
      cs: 'Občas ji loví dingové, lišky, zdivočelé kočky a varani, hlavně mláďata. Když hrozí nebezpečí, stočí se do bodlinaté koule.',
    },
  },
  {
    id: 'inland-taipan',
    name: { en: 'Inland taipan', cs: 'Taipan menší' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Elapidae', en: 'Cobras and their relatives', cs: 'Korálovcovití' },
      genus: 'Oxyuranus',
      species: 'Oxyuranus microlepidotus',
    },
    habitat: {
      en: 'It lives on dry, flat plains in the middle of Australia, hiding in deep cracks in the ground.',
      cs: 'Žije na suchých, rovných pláních uprostřed Austrálie a schovává se v hlubokých puklinách v zemi.',
    },
    diet: {
      en: 'It hunts small animals, mostly rats and mice.',
      cs: 'Loví malá zvířata, hlavně krysy a myši.',
    },
    predators: {
      en: 'Big lizards called perenties and another snake, the king brown snake, can eat it.',
      cs: 'Může ho sníst velký varan obrovský nebo jiný velký jedovatý had.',
    },
  },
  {
    id: 'humpback-whale',
    name: { en: 'Humpback whale', cs: 'Keporkak' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' },
      family: { latin: 'Balaenopteridae', en: 'Rorquals', cs: 'Plejtvákovití' },
      genus: 'Megaptera',
      species: 'Megaptera novaeangliae',
    },
    habitat: {
      en: 'It lives in the ocean. Every year it swims from cold Antarctica to the warm sea near Australia to have its babies.',
      cs: 'Žije v oceánu. Každý rok připlouvá ze studené Antarktidy do teplého moře u Austrálie, kde se mu rodí mláďata.',
    },
    diet: {
      en: 'It eats tiny shrimp-like animals called krill and small fish. It gulps them with huge mouthfuls of water.',
      cs: 'Jí drobné korýše zvané kril a malé rybky. Nabírá je do tlamy spolu s obrovským douškem vody.',
    },
    predators: {
      en: 'Grown-up whales have almost no enemies. Orcas and big sharks sometimes attack the babies.',
      cs: 'Dospělé velryby nemají skoro žádné nepřátele. Kosatky a velcí žraloci ale občas napadnou mláďata.',
    },
  },
  {
    id: 'black-footed-rock-wallaby',
    name: { en: 'Black-footed rock-wallaby', cs: 'Klokan černonohý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: diprotodontia,
      family: macropodidae,
      genus: 'Petrogale',
      species: 'Petrogale lateralis',
    },
    habitat: {
      en: 'It lives among rocks, cliffs and rocky hills in central and western Australia.',
      cs: 'Žije mezi skalami, útesy a na skalnatých kopcích ve středu a na západě Austrálie.',
    },
    diet: {
      en: 'It eats grass, leaves and fruit.',
      cs: 'Jí trávu, listy a plody.',
    },
    predators: {
      en: 'Foxes, wild cats, dingoes and wedge-tailed eagles hunt it.',
      cs: 'Loví ho lišky, zdivočelé kočky, dingové a orli klínoocasí.',
    },
  },
  {
    id: 'spinifex-hopping-mouse',
    name: { en: 'Spinifex hopping mouse', cs: 'Klokanomyš spinifexová' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' },
      family: { latin: 'Muridae', en: 'Mice and rats', cs: 'Myšovití' },
      genus: 'Notomys',
      species: 'Notomys alexis',
    },
    habitat: {
      en: 'It lives in the sandy deserts of central and western Australia. It sleeps in a cool burrow under the sand.',
      cs: 'Žije v písečných pouštích ve středu a na západě Austrálie. Spí v chladné noře pod pískem.',
    },
    diet: {
      en: 'It eats seeds, green plants and insects. It hardly ever needs to drink water.',
      cs: 'Jí semínka, zelené rostliny a hmyz. Pít vodu skoro vůbec nepotřebuje.',
    },
    predators: {
      en: 'Owls, snakes, foxes, wild cats and dingoes hunt it.',
      cs: 'Loví ji sovy, hadi, lišky, zdivočelé kočky a dingové.',
    },
  },
  {
    id: 'wedge-tailed-eagle',
    name: { en: 'Wedge-tailed eagle', cs: 'Orel klínoocasý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' },
      family: { latin: 'Accipitridae', en: 'Hawks and eagles', cs: 'Jestřábovití' },
      genus: 'Aquila',
      species: 'Aquila audax',
    },
    habitat: {
      en: 'It lives almost everywhere in Australia, but most of all in the open outback. It builds a huge nest high in a tree.',
      cs: 'Žije skoro všude v Austrálii, nejvíc ve volné krajině vnitrozemí. Staví si obrovské hnízdo vysoko na stromě.',
    },
    diet: {
      en: 'It hunts rabbits, young kangaroos, lizards and birds. It also eats dead animals it finds.',
      cs: 'Loví králíky, mladé klokany, ještěrky a ptáky. Sní i mrtvá zvířata, která najde.',
    },
    predators: {
      en: 'Grown-up eagles have no enemies. Sometimes crows or big lizards called goannas steal the eggs from its nest.',
      cs: 'Dospělí orli nemají žádné nepřátele. Občas jim vejce z hnízda ukradnou vrány nebo velcí varani.',
    },
  },
  {
    id: 'central-bearded-dragon',
    name: { en: 'Central bearded dragon', cs: 'Agama vousatá' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: agamidae,
      genus: 'Pogona',
      species: 'Pogona vitticeps',
    },
    habitat: {
      en: 'It lives in dry woodlands, scrub and deserts in the middle of Australia. It likes to sunbathe on rocks and logs.',
      cs: 'Žije v suchých řídkých lesích, křovinách a pouštích uprostřed Austrálie. Ráda se vyhřívá na kamenech a kmenech.',
    },
    diet: {
      en: 'It eats insects like crickets and beetles, and also leaves and flowers.',
      cs: 'Jí hmyz, třeba cvrčky a brouky, ale také listy a květy.',
    },
    predators: {
      en: 'Birds of prey, snakes, goannas, dingoes and wild cats hunt it. When scared, it puffs out its spiky black "beard".',
      cs: 'Loví ji dravci, hadi, varani, dingové a zdivočelé kočky. Když se lekne, nafoukne svůj ostnatý černý „vous“.',
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
      en: 'It lives in warm oceans. Every year many whale sharks visit Ningaloo Reef off Western Australia.',
      cs: 'Žije v teplých oceánech. Každý rok jich hodně připlouvá k útesu Ningaloo u západní Austrálie.',
    },
    diet: {
      en: 'It is the biggest fish in the world, but it eats tiny food: plankton, krill, fish eggs and little fish.',
      cs: 'Je to největší ryba na světě, ale jí drobounkou potravu: plankton, kril, rybí jikry a malé rybky.',
    },
    predators: {
      en: 'Big adults have almost no enemies. Orcas and large sharks sometimes attack the young ones.',
      cs: 'Velcí dospělí žraloci nemají skoro žádné nepřátele. Mláďata ale občas napadnou kosatky a velcí žraloci.',
    },
  },
  {
    id: 'shingleback-lizard',
    name: { en: 'Shingleback lizard', cs: 'Scink uťatý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Scincidae', en: 'Skinks', cs: 'Scinkovití' },
      genus: 'Tiliqua',
      species: 'Tiliqua rugosa',
    },
    habitat: {
      en: 'It lives in dry grasslands, bushland and sandy places in southern and western Australia.',
      cs: 'Žije v suchých travnatých krajinách, v buši a na písčitých místech na jihu a západě Austrálie.',
    },
    diet: {
      en: 'It eats flowers, fruit and leaves, and also snails and insects. Its fat tail stores food for later.',
      cs: 'Jí květy, plody a listy, ale také plže a hmyz. Ve svém tlustém ocase si ukládá zásoby na horší časy.',
    },
    predators: {
      en: 'Birds of prey, big snakes, dingoes, foxes and wild cats hunt it.',
      cs: 'Loví ho dravci, velcí hadi, dingové, lišky a zdivočelé kočky.',
    },
  },
]
