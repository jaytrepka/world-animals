import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const cartilaginous = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }
const turtles = { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' }
const dasyuromorphia = { latin: 'Dasyuromorphia', en: 'Carnivorous marsupials', cs: 'Kunovci' }

export const moreContent: AnimalContent[] = [
  // ---------- North ----------
  {
    id: 'freshwater-crocodile',
    name: { en: 'Freshwater crocodile', cs: 'Krokodýl Johnstonův' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Crocodilia', en: 'Crocodiles and alligators', cs: 'Krokodýli' },
      family: { latin: 'Crocodylidae', en: 'True crocodiles', cs: 'Krokodýlovití' },
      genus: 'Crocodylus',
      species: 'Crocodylus johnstoni',
    },
    habitat: {
      en: 'It lives in rivers, creeks and billabongs of northern Australia. It has a long, thin snout.',
      cs: 'Žije v řekách, potocích a tůních na severu Austrálie. Má dlouhý a úzký čenich.',
    },
    diet: {
      en: 'It catches fish, frogs, insects and small animals that come close to the water.',
      cs: 'Loví ryby, žáby, hmyz a malá zvířata, která přijdou blízko k vodě.',
    },
    predators: {
      en: 'Big saltwater crocodiles can eat it. Its eggs and babies are eaten by monitor lizards, birds and big fish.',
      cs: 'Může ho sežrat velký krokodýl mořský. Vajíčka a mláďata mu berou varani, ptáci a velké ryby.',
    },
  },
  {
    id: 'australian-box-jellyfish',
    name: { en: 'Australian box jellyfish', cs: 'Čtyřhranka Fleckerova' },
    classification: {
      kingdom,
      phylum: { latin: 'Cnidaria', en: 'Cnidarians (jellyfish and corals)', cs: 'Žahavci' },
      class: { latin: 'Cubozoa', en: 'Box jellyfish', cs: 'Čtyřhranky' },
      order: { latin: 'Chirodropida', en: 'Box jellyfish with many tentacles', cs: 'Čtyřhranky s mnoha chapadly' },
      family: { latin: 'Chirodropidae', en: 'Big box jellyfish', cs: 'Velké čtyřhranky' },
      genus: 'Chironex',
      species: 'Chironex fleckeri',
    },
    habitat: {
      en: 'It floats in warm, shallow seas along the coast of northern Australia. It is almost see-through, so it is very hard to spot.',
      cs: 'Vznáší se v teplém mělkém moři u pobřeží severní Austrálie. Je skoro průhledná, a proto je moc špatně vidět.',
    },
    diet: {
      en: 'It catches little fish and shrimps with its long, stinging tentacles.',
      cs: 'Loví malé rybky a krevety svými dlouhými žahavými chapadly.',
    },
    predators: {
      en: 'Sea turtles eat it – its strong sting does not hurt them!',
      cs: 'Žerou ji mořské želvy – její silné žahnutí jim vůbec nevadí!',
    },
  },
  {
    id: 'reef-manta-ray',
    name: { en: 'Reef manta ray', cs: 'Manta útesová' },
    classification: {
      kingdom,
      phylum: chordata,
      class: cartilaginous,
      order: { latin: 'Myliobatiformes', en: 'Stingrays and relatives', cs: 'Trnuchotvární' },
      family: { latin: 'Mobulidae', en: 'Manta and devil rays', cs: 'Mantovití' },
      genus: 'Mobula',
      species: 'Mobula alfredi',
    },
    habitat: {
      en: 'It glides through warm seas near coral reefs, like the Great Barrier Reef. It looks like it is flying underwater!',
      cs: 'Plachtí teplým mořem u korálových útesů, třeba u Velkého bariérového útesu. Vypadá, jako by létala pod vodou!',
    },
    diet: {
      en: 'It swims with its mouth wide open and sieves tiny plankton out of the water.',
      cs: 'Plave s doširoka otevřenou tlamou a cedí z vody drobounký plankton.',
    },
    predators: {
      en: 'Only big sharks and killer whales sometimes attack it.',
      cs: 'Napadají ji jen velcí žraloci a kosatky, a to jen občas.',
    },
  },
  {
    id: 'pig-nosed-turtle',
    name: { en: 'Pig-nosed turtle', cs: 'Karetka novoguinejská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: turtles,
      family: { latin: 'Carettochelyidae', en: 'Pig-nosed turtles', cs: 'Karetkovití' },
      genus: 'Carettochelys',
      species: 'Carettochelys insculpta',
    },
    habitat: {
      en: 'It lives in rivers and lagoons of southern New Guinea and northern Australia. It has a funny nose like a little pig and paddles like a sea turtle.',
      cs: 'Žije v řekách a lagunách na jihu Nové Guineje a na severu Austrálie. Má legrační nos jako prasátko a plave s ploutvemi jako mořská želva.',
    },
    diet: {
      en: 'It eats fruit and leaves that fall into the water, and also snails, shrimps and insects.',
      cs: 'Jí ovoce a listy, které spadnou do vody, a také šneky, krevety a hmyz.',
    },
    predators: {
      en: 'Grown-ups can be caught by crocodiles. Their eggs are dug up by monitor lizards.',
      cs: 'Dospělé želvy mohou ulovit krokodýli. Vajíčka jim vyhrabávají varani.',
    },
  },
  {
    id: 'rakali',
    name: { en: 'Rakali (Australian water rat)', cs: 'Myš bobří' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' },
      family: { latin: 'Muridae', en: 'Mice and rats', cs: 'Myšovití' },
      genus: 'Hydromys',
      species: 'Hydromys chrysogaster',
    },
    habitat: {
      en: 'It lives by rivers, lakes and seashores all over Australia and New Guinea. It swims well with its webbed back feet.',
      cs: 'Žije u řek, jezer a mořských břehů po celé Austrálii a Nové Guineji. Díky blanám na zadních nohou výborně plave.',
    },
    diet: {
      en: 'It catches fish, crabs, mussels and frogs. It is even brave enough to eat poisonous cane toads!',
      cs: 'Loví ryby, kraby, mušle a žáby. Dokáže sníst i jedovatou ropuchu obrovskou!',
    },
    predators: {
      en: 'It is hunted by snakes, owls, birds of prey, foxes and cats.',
      cs: 'Loví ji hadi, sovy, draví ptáci, lišky a kočky.',
    },
  },

  // ---------- Middle ----------
  {
    id: 'australian-lungfish',
    name: { en: 'Australian lungfish', cs: 'Bahník australský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: { latin: 'Sarcopterygii', en: 'Lobe-finned fishes', cs: 'Svaloploutví' },
      order: { latin: 'Ceratodontiformes', en: 'Australian lungfishes', cs: 'Jednoplicní' },
      family: { latin: 'Neoceratodontidae', en: 'Australian lungfishes', cs: 'Australští bahníkovití' },
      genus: 'Neoceratodus',
      species: 'Neoceratodus forsteri',
    },
    habitat: {
      en: 'It lives in slow rivers of south-eastern Queensland. It is a very old kind of fish that can breathe air with a lung!',
      cs: 'Žije v pomalých řekách na jihovýchodě Queenslandu. Je to prastará ryba, která umí dýchat vzduch plící!',
    },
    diet: {
      en: 'It eats frogs, snails, worms, small fish and water plants.',
      cs: 'Jí žáby, šneky, červy, malé rybky a vodní rostliny.',
    },
    predators: {
      en: 'Big grown-ups have few enemies. Young lungfish are eaten by bigger fish, turtles and water birds.',
      cs: 'Velcí dospělí bahníci mají málo nepřátel. Mláďata žerou větší ryby, želvy a vodní ptáci.',
    },
  },
  {
    id: 'grey-headed-flying-fox',
    name: { en: 'Grey-headed flying fox', cs: 'Kaloň šedohlavý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Chiroptera', en: 'Bats', cs: 'Letouni' },
      family: { latin: 'Pteropodidae', en: 'Fruit bats', cs: 'Kaloňovití' },
      genus: 'Pteropus',
      species: 'Pteropus poliocephalus',
    },
    habitat: {
      en: 'It lives in forests along the east coast of Australia. By day, big groups hang upside down in the trees.',
      cs: 'Žije v lesích na východním pobřeží Austrálie. Přes den visí velké skupiny hlavou dolů na stromech.',
    },
    diet: {
      en: 'At night it flies far to eat fruit, flowers and sweet nectar from gum trees.',
      cs: 'V noci létá daleko za potravou a jí ovoce, květy a sladký nektar z blahovičníků.',
    },
    predators: {
      en: 'It can be caught by pythons, owls, eagles and crocodiles.',
      cs: 'Může ho ulovit krajta, sova, orel nebo krokodýl.',
    },
  },
  {
    id: 'lace-monitor',
    name: { en: 'Lace monitor', cs: 'Varan pestrý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Varanidae', en: 'Monitor lizards', cs: 'Varanovití' },
      genus: 'Varanus',
      species: 'Varanus varius',
    },
    habitat: {
      en: 'It lives in forests of eastern Australia. It is a big lizard that climbs trees with its sharp claws.',
      cs: 'Žije v lesích na východě Austrálie. Je to velký ještěr, který ostrými drápy šplhá po stromech.',
    },
    diet: {
      en: 'It eats birds, eggs, insects, small animals and dead animals it finds.',
      cs: 'Jí ptáky, vejce, hmyz, malá zvířata a také mrtvá zvířata, která najde.',
    },
    predators: {
      en: 'Grown-ups have few enemies, maybe dingoes. Young ones are eaten by eagles, snakes and bigger monitors.',
      cs: 'Dospělí varani mají málo nepřátel, snad jen dingy. Mláďata loví orli, hadi a větší varani.',
    },
  },
  {
    id: 'kowari',
    name: { en: 'Kowari', cs: 'Vakorejsek čtyřprstý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: dasyuromorphia,
      family: { latin: 'Dasyuridae', en: 'Quolls and their relatives', cs: 'Kunovcovití' },
      genus: 'Dasyuroides',
      species: 'Dasyuroides byrnei',
    },
    habitat: {
      en: 'It lives on stony, dry plains in the middle of Australia. It hides in a burrow and has a bushy black tail.',
      cs: 'Žije na kamenitých suchých pláních uprostřed Austrálie. Schovává se v noře a má huňatý černý ocásek.',
    },
    diet: {
      en: 'This little hunter eats insects, spiders, lizards and even small mice.',
      cs: 'Tenhle malý lovec jí hmyz, pavouky, ještěrky, a dokonce i malé myši.',
    },
    predators: {
      en: 'It is hunted by owls, birds of prey, foxes and cats.',
      cs: 'Loví ho sovy, draví ptáci, lišky a kočky.',
    },
  },
  {
    id: 'laughing-kookaburra',
    name: { en: 'Laughing kookaburra', cs: 'Ledňák obrovský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Coraciiformes', en: 'Kingfishers and relatives', cs: 'Srostloprstí' },
      family: { latin: 'Alcedinidae', en: 'Kingfishers', cs: 'Ledňáčkovití' },
      genus: 'Dacelo',
      species: 'Dacelo novaeguineae',
    },
    habitat: {
      en: 'It lives in open forests of eastern Australia. Its loud call sounds just like a person laughing!',
      cs: 'Žije ve světlých lesích na východě Austrálie. Jeho hlasité volání zní úplně jako lidský smích!',
    },
    diet: {
      en: 'It sits on a branch, then swoops down on lizards, snakes, mice, frogs and big insects.',
      cs: 'Číhá na větvi a pak se vrhne dolů na ještěrky, hady, myši, žáby a velký hmyz.',
    },
    predators: {
      en: 'Grown-ups can be caught by eagles and hawks. Its eggs and chicks are eaten by snakes, goannas and cats.',
      cs: 'Dospělé ptáky mohou ulovit orli a jestřábi. Vejce a mláďata mu berou hadi, varani a kočky.',
    },
  },
  {
    id: 'eastern-brown-snake',
    name: { en: 'Eastern brown snake', cs: 'Pakobra východní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Elapidae', en: 'Cobras and their relatives', cs: 'Korálovcovití' },
      genus: 'Pseudonaja',
      species: 'Pseudonaja textilis',
    },
    habitat: {
      en: 'It lives in fields, grasslands and dry forests of eastern Australia. It is very fast and very venomous – never touch it!',
      cs: 'Žije na polích, v travnatých krajích a suchých lesích na východě Austrálie. Je moc rychlá a velmi jedovatá – nikdy se jí nedotýkej!',
    },
    diet: {
      en: 'It mostly hunts mice and rats, and also frogs, lizards and birds.',
      cs: 'Loví hlavně myši a potkany, ale také žáby, ještěrky a ptáky.',
    },
    predators: {
      en: 'It is hunted by birds of prey, kookaburras, big monitor lizards, foxes and cats.',
      cs: 'Loví ji draví ptáci, ledňáci obrovští, velcí varani, lišky a kočky.',
    },
  },

  // ---------- South ----------
  {
    id: 'eastern-long-necked-turtle',
    name: { en: 'Eastern long-necked turtle', cs: 'Dlouhokrčka australská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: turtles,
      family: { latin: 'Chelidae', en: 'Side-necked turtles', cs: 'Matamatovití' },
      genus: 'Chelodina',
      species: 'Chelodina longicollis',
    },
    habitat: {
      en: 'It lives in rivers, lakes and swamps of south-eastern Australia. Its neck is so long that it tucks it sideways under its shell.',
      cs: 'Žije v řekách, jezerech a bažinách na jihovýchodě Austrálie. Má tak dlouhý krk, že ho schovává bokem pod krunýř.',
    },
    diet: {
      en: 'It snaps up fish, tadpoles, frogs, shrimps, worms and insects with its long neck.',
      cs: 'Svým dlouhým krkem chňapá po rybkách, pulcích, žábách, krevetách, červech a hmyzu.',
    },
    predators: {
      en: 'Grown-ups are caught by foxes and big birds. Their eggs are dug up by foxes and monitor lizards.',
      cs: 'Dospělé želvy loví lišky a velcí ptáci. Vajíčka jim vyhrabávají lišky a varani.',
    },
  },
  {
    id: 'southern-brown-bandicoot',
    name: { en: 'Southern brown bandicoot', cs: 'Bandikut krátkonosý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Peramelemorphia', en: 'Bandicoots and bilbies', cs: 'Bandikuti' },
      family: { latin: 'Peramelidae', en: 'Bandicoots', cs: 'Bandikutovití' },
      genus: 'Isoodon',
      species: 'Isoodon obesulus',
    },
    habitat: {
      en: 'It lives in thick bushes and heath of southern Australia and Tasmania. The mother carries her babies in a pouch.',
      cs: 'Žije v hustých keřích a vřesovištích na jihu Austrálie a v Tasmánii. Maminka nosí mláďata ve vaku.',
    },
    diet: {
      en: 'At night it digs little holes with its nose and claws to find worms, beetles, roots and mushrooms.',
      cs: 'V noci si čumákem a drápky hrabe jamky a hledá v nich žížaly, brouky, kořínky a houby.',
    },
    predators: {
      en: 'It is hunted by foxes, cats, dogs, owls and snakes.',
      cs: 'Loví ho lišky, kočky, psi, sovy a hadi.',
    },
  },
  {
    id: 'yellow-footed-rock-wallaby',
    name: { en: 'Yellow-footed rock-wallaby', cs: 'Klokan žlutonohý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Diprotodontia', en: 'Diprotodont marsupials', cs: 'Dvojitozubci' },
      family: { latin: 'Macropodidae', en: 'Kangaroos and wallabies', cs: 'Klokanovití' },
      genus: 'Petrogale',
      species: 'Petrogale xanthopus',
    },
    habitat: {
      en: 'It lives on rocky hills in dry parts of southern Australia, like the Flinders Ranges. It jumps from rock to rock without slipping.',
      cs: 'Žije na skalnatých kopcích v suchých krajích jižní Austrálie, třeba v pohoří Flinders. Skáče ze skály na skálu a neuklouzne.',
    },
    diet: {
      en: 'It eats grass, leaves and the soft shoots of bushes.',
      cs: 'Jí trávu, listy a měkké výhonky keřů.',
    },
    predators: {
      en: 'It is hunted by foxes, dingoes and wedge-tailed eagles.',
      cs: 'Loví ho lišky, dingové a orli klínoocasí.',
    },
  },
  {
    id: 'southern-blue-ringed-octopus',
    name: { en: 'Southern blue-ringed octopus', cs: 'Chobotnice skvrnitá' },
    classification: {
      kingdom,
      phylum: { latin: 'Mollusca', en: 'Molluscs', cs: 'Měkkýši' },
      class: { latin: 'Cephalopoda', en: 'Octopuses and squids', cs: 'Hlavonožci' },
      order: { latin: 'Octopoda', en: 'Octopuses', cs: 'Chobotnice' },
      family: { latin: 'Octopodidae', en: 'Octopuses', cs: 'Chobotnicovití' },
      genus: 'Hapalochlaena',
      species: 'Hapalochlaena maculosa',
    },
    habitat: {
      en: 'This tiny octopus lives in rock pools and shallow sea along southern Australia. When it is scared, bright blue rings light up on its body.',
      cs: 'Tahle malinká chobotnice žije v mořských tůňkách a mělkém moři u jižní Austrálie. Když se lekne, rozsvítí se jí na těle zářivě modré kroužky.',
    },
    diet: {
      en: 'It hunts little crabs and shrimps. It is very venomous – never pick it up!',
      cs: 'Loví malé kraby a krevety. Je velmi jedovatá – nikdy ji neber do ruky!',
    },
    predators: {
      en: 'Some fish, moray eels and sea birds can eat it.',
      cs: 'Mohou ji sníst některé ryby, murény a mořští ptáci.',
    },
  },
  {
    id: 'port-jackson-shark',
    name: { en: 'Port Jackson shark', cs: 'Různozubec portjacksonský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: cartilaginous,
      order: { latin: 'Heterodontiformes', en: 'Bullhead sharks', cs: 'Různozubci' },
      family: { latin: 'Heterodontidae', en: 'Bullhead sharks', cs: 'Různozubcovití' },
      genus: 'Heterodontus',
      species: 'Heterodontus portusjacksoni',
    },
    habitat: {
      en: 'It lives on the sea floor near rocky reefs of southern Australia. It lays funny spiral-shaped eggs, like a screw!',
      cs: 'Žije na mořském dně u skalnatých útesů jižní Austrálie. Klade legrační vajíčka stočená do spirály jako šroub!',
    },
    diet: {
      en: 'It crunches sea urchins, crabs, snails and shellfish with its flat teeth.',
      cs: 'Svými plochými zuby chroupe mořské ježky, kraby, šneky a mušle.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Young sharks can be eaten by bigger sharks and seals.',
      cs: 'Dospělí žraloci mají málo nepřátel. Mladé žraloky mohou sežrat větší žraloci a tuleni.',
    },
  },
  {
    id: 'new-zealand-sea-lion',
    name: { en: 'New Zealand sea lion', cs: 'Lachtan novozélandský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' },
      family: { latin: 'Otariidae', en: 'Sea lions and fur seals', cs: 'Lachtanovití' },
      genus: 'Phocarctos',
      species: 'Phocarctos hookeri',
    },
    habitat: {
      en: 'It lives on beaches and in the cold sea around the south of New Zealand. It is one of the rarest sea lions in the world.',
      cs: 'Žije na plážích a v chladném moři na jihu Nového Zélandu. Patří k nejvzácnějším lachtanům na světě.',
    },
    diet: {
      en: 'It dives deep to catch fish, squid and octopuses.',
      cs: 'Hluboko se potápí a loví ryby, olihně a chobotnice.',
    },
    predators: {
      en: 'Great white sharks, and sometimes killer whales, can hunt it.',
      cs: 'Může ho ulovit žralok bílý a občas i kosatka.',
    },
  },
]
