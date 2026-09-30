import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const chondrichthyes = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals', cs: 'Sudokopytníci' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const primates = { latin: 'Primates', en: 'Primates', cs: 'Primáti' }
const bovidae = { latin: 'Bovidae', en: 'Cattle, antelopes and goats', cs: 'Turovití' }
const perissodactyla = { latin: 'Perissodactyla', en: 'Odd-toed hoofed mammals', cs: 'Lichokopytníci' }
const rhinocerotidae = { latin: 'Rhinocerotidae', en: 'Rhinoceroses', cs: 'Nosorožcovití' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }

export const southContent: AnimalContent[] = [
  {
    id: 'meerkat',
    name: { en: 'Meerkat', cs: 'Surikata' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Herpestidae', en: 'Mongooses', cs: 'Promykovití' },
      genus: 'Suricata',
      species: 'Suricata suricatta',
    },
    habitat: {
      en: 'Meerkats live in big families in the dry Kalahari desert. They dig burrows and one of them stands on its back legs to keep watch.',
      cs: 'Surikaty žijí ve velkých rodinách v suché poušti Kalahari. Hrabou si nory a jedna z nich vždycky stojí na zadních a hlídá.',
    },
    diet: {
      en: 'They dig for beetles, grubs and other insects, and also eat lizards, scorpions, eggs and small snakes.',
      cs: 'Vyhrabávají brouky, larvy a jiný hmyz a jedí také ještěrky, štíry, vajíčka a malé hady.',
    },
    predators: {
      en: 'Eagles, hawks, jackals and snakes hunt them. When the guard sees danger, it calls and everyone runs into the burrow.',
      cs: 'Loví je orli, jestřábi, šakali a hadi. Když hlídka uvidí nebezpečí, zavolá a všichni zmizí v noře.',
    },
  },
  {
    id: 'cheetah',
    name: { en: 'Cheetah', cs: 'Gepard štíhlý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Acinonyx',
      species: 'Acinonyx jubatus',
    },
    habitat: {
      en: 'The fastest land animal lives on open grasslands and dry savannas. Many cheetahs live in Namibia.',
      cs: 'Nejrychlejší suchozemské zvíře žije na otevřených travnatých pláních a suchých savanách. Hodně gepardů žije v Namibii.',
    },
    diet: {
      en: 'It chases gazelles, springbok, impalas and hares, running as fast as a car on a motorway.',
      cs: 'Honí gazely, antilopy skákavé, impaly a zajíce a běží tak rychle jako auto na dálnici.',
    },
    predators: {
      en: 'Lions and hyenas may kill cheetahs and steal their food. Cubs can also be caught by leopards and eagles.',
      cs: 'Lvi a hyeny mohou gepardy zabít a kradou jim kořist. Koťata mohou ulovit i levharti a orli.',
    },
  },
  {
    id: 'black-rhinoceros',
    name: { en: 'Black rhinoceros', cs: 'Nosorožec dvourohý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: perissodactyla,
      family: rhinocerotidae,
      genus: 'Diceros',
      species: 'Diceros bicornis',
    },
    habitat: {
      en: 'It lives in dry bushland and savanna in Southern and East Africa, like in Etosha in Namibia.',
      cs: 'Žije v suchých křovinách a savanách jižní a východní Afriky, třeba v parku Etoša v Namibii.',
    },
    diet: {
      en: 'It uses its pointed, hooked upper lip to pick leaves and twigs from bushes.',
      cs: 'Špičatým zahnutým horním pyskem otrhává listy a větvičky z keřů.',
    },
    predators: {
      en: 'Grown-ups are too big and strong to be hunted. Lions and hyenas may catch a calf. People hunt rhinos for their horns.',
      cs: 'Dospělí nosorožci jsou na lov moc velcí a silní. Mládě mohou ulovit lvi a hyeny. Lidé nosorožce loví kvůli rohům.',
    },
  },
  {
    id: 'gemsbok',
    name: { en: 'Gemsbok', cs: 'Přímorožec jihoafrický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Oryx',
      species: 'Oryx gazella',
    },
    habitat: {
      en: 'This antelope with long, straight horns and a black-and-white face lives in the Namib and Kalahari deserts.',
      cs: 'Tahle antilopa s dlouhými rovnými rohy a černobílým obličejem žije v pouštích Namib a Kalahari.',
    },
    diet: {
      en: 'It eats grass, and digs up juicy roots and eats wild melons to get water.',
      cs: 'Spásá trávu a kvůli vodě vyhrabává šťavnaté kořeny a jí divoké melouny.',
    },
    predators: {
      en: 'Lions, hyenas and wild dogs hunt it. Cheetahs and leopards may catch the young. Its sharp horns help it fight back.',
      cs: 'Loví ho lvi, hyeny a psi hyenoví. Mláďata mohou ulovit gepardi a levharti. Ostrými rohy se ale umí bránit.',
    },
  },
  {
    id: 'african-penguin',
    name: { en: 'African penguin', cs: 'Tučňák brýlový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Sphenisciformes', en: 'Penguins', cs: 'Tučňáci' },
      family: { latin: 'Spheniscidae', en: 'Penguins', cs: 'Tučňákovití' },
      genus: 'Spheniscus',
      species: 'Spheniscus demersus',
    },
    habitat: {
      en: 'The only penguin in Africa lives on the beaches and islands of South Africa and Namibia. It brays like a donkey.',
      cs: 'Jediný tučňák v Africe žije na plážích a ostrovech Jihoafrické republiky a Namibie. Hlasitě hýká jako osel.',
    },
    diet: {
      en: 'It dives in the cold sea to catch small fish like sardines and anchovies, and squid.',
      cs: 'Potápí se ve studeném moři a loví malé ryby, třeba sardinky a ančovičky, a také olihně.',
    },
    predators: {
      en: 'In the sea sharks and fur seals hunt it. On land gulls, mongooses and wild cats steal eggs and chicks.',
      cs: 'V moři ho loví žraloci a lachtani. Na souši kradou vejce a mláďata rackové, promyky a divoké kočky.',
    },
  },
  {
    id: 'great-white-shark',
    name: { en: 'Great white shark', cs: 'Žralok bílý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Lamniformes', en: 'Mackerel sharks', cs: 'Obrouni' },
      family: { latin: 'Lamnidae', en: 'White sharks and makos', cs: 'Lamnovití' },
      genus: 'Carcharodon',
      species: 'Carcharodon carcharias',
    },
    habitat: {
      en: 'This big shark swims in cool seas near the coast. South Africa is one of its favourite places.',
      cs: 'Tenhle velký žralok plave v chladnějších mořích u pobřeží. Jihoafrická republika patří k jeho nejoblíbenějším místům.',
    },
    diet: {
      en: 'It hunts fish, seals, dolphins and turtles. It sometimes jumps right out of the water to catch a seal!',
      cs: 'Loví ryby, lachtany, delfíny a želvy. Někdy při lovu lachtana vyskočí celý z vody!',
    },
    predators: {
      en: 'Only killer whales hunt great white sharks. Young sharks can be eaten by bigger sharks.',
      cs: 'Žraloky bílé loví jen kosatky. Mladé žraloky mohou sežrat větší žraloci.',
    },
  },
  {
    id: 'leopard',
    name: { en: 'African leopard', cs: 'Levhart africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Panthera',
      species: 'Panthera pardus pardus',
    },
    habitat: {
      en: 'This spotted big cat lives almost everywhere in Africa, in forests, savannas and mountains, like in Kruger Park.',
      cs: 'Tahle skvrnitá velká kočka žije skoro všude v Africe, v lesích, na savanách i v horách, třeba v Krugerově parku.',
    },
    diet: {
      en: 'It hunts antelopes, monkeys, warthogs and birds, and drags its food up into a tree so lions cannot take it.',
      cs: 'Loví antilopy, opice, prasata bradavičnatá a ptáky a kořist si vytáhne na strom, aby mu ji lvi nevzali.',
    },
    predators: {
      en: 'Lions and hyenas may kill leopards. Cubs can also be caught by pythons and eagles.',
      cs: 'Levharty mohou zabít lvi a hyeny. Koťata mohou ulovit i krajty a orli.',
    },
  },
  {
    id: 'white-rhinoceros',
    name: { en: 'White rhinoceros', cs: 'Nosorožec tuponosý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: perissodactyla,
      family: rhinocerotidae,
      genus: 'Ceratotherium',
      species: 'Ceratotherium simum',
    },
    habitat: {
      en: 'This huge rhino lives on grassy savannas in South Africa, like in Hluhluwe park. It is really grey, not white.',
      cs: 'Tenhle obrovský nosorožec žije na travnatých savanách Jihoafrické republiky, třeba v parku Hluhluwe. Ve skutečnosti je šedý, ne bílý.',
    },
    diet: {
      en: 'It grazes on short grass with its wide, square lips, like a big lawnmower.',
      cs: 'Širokými hranatými pysky spásá krátkou trávu jako velká sekačka.',
    },
    predators: {
      en: 'Grown-ups have no enemies except people who hunt them for their horns. Lions and hyenas may catch a calf.',
      cs: 'Dospělí nemají nepřátele kromě lidí, kteří je loví kvůli rohům. Mládě mohou ulovit lvi a hyeny.',
    },
  },
  {
    id: 'african-wild-dog',
    name: { en: 'African wild dog', cs: 'Pes hyenový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Lycaon',
      species: 'Lycaon pictus',
    },
    habitat: {
      en: 'These spotted dogs with big round ears live in packs on the savannas, like around the Okavango Delta in Botswana.',
      cs: 'Tihle strakatí psi s velkýma kulatýma ušima žijí ve smečkách na savanách, třeba kolem delty Okavanga v Botswaně.',
    },
    diet: {
      en: 'The pack hunts together and chases impalas, kudu and other antelopes for a long time until they get tired.',
      cs: 'Smečka loví společně a dlouho honí impaly, kudu a jiné antilopy, dokud se neunaví.',
    },
    predators: {
      en: 'Lions and hyenas are their enemies and may kill them, especially the pups.',
      cs: 'Jejich nepřáteli jsou lvi a hyeny, kteří je mohou zabít, hlavně štěňata.',
    },
  },
  {
    id: 'common-ostrich',
    name: { en: 'Common ostrich', cs: 'Pštros dvouprstý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Struthioniformes', en: 'Ostriches', cs: 'Pštrosi' },
      family: { latin: 'Struthionidae', en: 'Ostriches', cs: 'Pštrosovití' },
      genus: 'Struthio',
      species: 'Struthio camelus',
    },
    habitat: {
      en: 'The biggest bird in the world cannot fly, but it runs very fast across the dry plains and savannas of Africa.',
      cs: 'Největší pták na světě neumí létat, ale velmi rychle běhá po suchých pláních a savanách Afriky.',
    },
    diet: {
      en: 'It eats plants, seeds and leaves, and sometimes insects and lizards. It swallows small stones to help grind its food.',
      cs: 'Jí rostliny, semena a listy a občas hmyz a ještěrky. Polyká i kamínky, které mu pomáhají rozmělnit potravu.',
    },
    predators: {
      en: 'Lions, leopards, cheetahs and hyenas hunt ostriches. Jackals and vultures break the eggs, and chicks are eaten by many animals.',
      cs: 'Pštrosy loví lvi, levharti, gepardi a hyeny. Šakali a supi rozbíjejí vejce a mláďata sežere spousta zvířat.',
    },
  },
  {
    id: 'ring-tailed-lemur',
    name: { en: 'Ring-tailed lemur', cs: 'Lemur kata' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Lemuridae', en: 'Lemurs', cs: 'Lemurovití' },
      genus: 'Lemur',
      species: 'Lemur catta',
    },
    habitat: {
      en: 'It lives only on the island of Madagascar, in dry forests and rocky places in the south. It loves to sunbathe.',
      cs: 'Žije jen na ostrově Madagaskar, v suchých lesích a na skalách na jihu. Rád se vyhřívá na sluníčku.',
    },
    diet: {
      en: 'It eats fruit, leaves, flowers and tree sap, especially tamarind pods.',
      cs: 'Jí ovoce, listy, květy a mízu stromů, nejraději lusky tamarindu.',
    },
    predators: {
      en: 'Fossas, hawks, wild cats and big snakes may hunt it.',
      cs: 'Lovit ho mohou fosy, jestřábi, divoké kočky a velcí hadi.',
    },
  },
  {
    id: 'fossa',
    name: { en: 'Fossa', cs: 'Fosa madagaskarská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Eupleridae', en: 'Malagasy carnivorans', cs: 'Šelmy madagaskarské' },
      genus: 'Cryptoprocta',
      species: 'Cryptoprocta ferox',
    },
    habitat: {
      en: 'The biggest hunter of Madagascar looks like a mix of a cat and a mongoose. It lives in forests all over the island.',
      cs: 'Největší šelma Madagaskaru vypadá jako kříženec kočky a promyky. Žije v lesích po celém ostrově.',
    },
    diet: {
      en: 'It climbs trees very well and hunts lemurs. It also eats birds, lizards and small mammals.',
      cs: 'Výborně šplhá po stromech a loví lemury. Jí také ptáky, ještěrky a malé savce.',
    },
    predators: {
      en: 'Grown-ups have no natural enemies. Snakes and birds of prey may catch the young.',
      cs: 'Dospělé fosy nemají v přírodě žádné nepřátele. Mláďata mohou ulovit hadi a draví ptáci.',
    },
  },
  {
    id: 'panther-chameleon',
    name: { en: 'Panther chameleon', cs: 'Chameleon pardálí' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Chamaeleonidae', en: 'Chameleons', cs: 'Chameleonovití' },
      genus: 'Furcifer',
      species: 'Furcifer pardalis',
    },
    habitat: {
      en: 'This colourful lizard lives in bushes and trees in northern Madagascar. It can change its colours and move each eye on its own.',
      cs: 'Tahle pestrobarevná ještěrka žije v keřích a na stromech na severu Madagaskaru. Umí měnit barvy a každým okem kouká jinam.',
    },
    diet: {
      en: 'It catches crickets, flies and other insects by shooting out its long, sticky tongue.',
      cs: 'Chytá cvrčky, mouchy a jiný hmyz tak, že bleskově vystřelí svůj dlouhý lepkavý jazyk.',
    },
    predators: {
      en: 'Snakes and birds eat chameleons.',
      cs: 'Chameleony žerou hadi a ptáci.',
    },
  },
  {
    id: 'indri',
    name: { en: 'Indri', cs: 'Indri' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Indriidae', en: 'Indris and sifakas', cs: 'Indriovití' },
      genus: 'Indri',
      species: 'Indri indri',
    },
    habitat: {
      en: 'The biggest lemur lives high in the rainforest trees of eastern Madagascar. Families sing loud songs every morning.',
      cs: 'Největší lemur žije vysoko v korunách deštných pralesů na východě Madagaskaru. Rodinky každé ráno hlasitě zpívají.',
    },
    diet: {
      en: 'It eats young leaves, seeds, fruit and flowers.',
      cs: 'Jí mladé listy, semena, ovoce a květy.',
    },
    predators: {
      en: 'Fossas can catch it in the trees, and big hawks may grab the babies.',
      cs: 'Na stromech ho může ulovit fosa a mláďata mohou uchvátit velcí jestřábi.',
    },
  },
  {
    id: 'humpback-whale',
    name: { en: 'Humpback whale', cs: 'Keporkak' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' },
      family: { latin: 'Balaenopteridae', en: 'Rorquals', cs: 'Plejtvákovití' },
      genus: 'Megaptera',
      species: 'Megaptera novaeangliae',
    },
    habitat: {
      en: 'This big whale with very long flippers swims in all oceans. In winter it comes to warm water near Madagascar to have babies.',
      cs: 'Tahle velká velryba s velmi dlouhými ploutvemi plave ve všech oceánech. V zimě připlouvá k Madagaskaru do teplé vody, aby tu měla mláďata.',
    },
    diet: {
      en: 'It gulps huge mouthfuls of tiny shrimps called krill and small fish. Males sing long, beautiful songs.',
      cs: 'Polyká obrovské doušky drobných korýšů zvaných kril a malých rybek. Samci zpívají dlouhé krásné písně.',
    },
    predators: {
      en: 'Grown-ups are huge. Killer whales and big sharks sometimes attack the calves.',
      cs: 'Dospělí keporkaci jsou obrovští. Mláďata ale občas napadnou kosatky a velcí žraloci.',
    },
  },
  {
    id: 'coelacanth',
    name: { en: 'West Indian Ocean coelacanth', cs: 'Latimérie podivná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: { latin: 'Actinistia', en: 'Coelacanths', cs: 'Lalokoploutví' },
      order: { latin: 'Coelacanthiformes', en: 'Coelacanths', cs: 'Latimérie' },
      family: { latin: 'Latimeriidae', en: 'Living coelacanths', cs: 'Latimériovití' },
      genus: 'Latimeria',
      species: 'Latimeria chalumnae',
    },
    habitat: {
      en: 'This very old kind of fish lives in deep, dark sea caves near the Comoro Islands. People thought it died out with the dinosaurs!',
      cs: 'Tahle prastará ryba žije v hlubokých tmavých podmořských jeskyních u Komorských ostrovů. Lidé si mysleli, že vymřela s dinosaury!',
    },
    diet: {
      en: 'At night it drifts slowly and eats fish, squid and octopus.',
      cs: 'V noci se pomalu vznáší ve vodě a loví ryby, olihně a chobotnice.',
    },
    predators: {
      en: 'Big sharks may eat it.',
      cs: 'Může ji sežrat velký žralok.',
    },
  },
  {
    id: 'african-buffalo',
    name: { en: 'African buffalo', cs: 'Buvol africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Syncerus',
      species: 'Syncerus caffer',
    },
    habitat: {
      en: 'It lives in big herds on savannas near rivers and swamps, like in the Luangwa valley in Zambia.',
      cs: 'Žije ve velkých stádech na savanách blízko řek a bažin, třeba v údolí řeky Luangwa v Zambii.',
    },
    diet: {
      en: 'It eats grass and needs to drink water every day.',
      cs: 'Spásá trávu a každý den se musí napít.',
    },
    predators: {
      en: 'Lions are its main enemy, and crocodiles catch it at the water. Hyenas may take the calves.',
      cs: 'Jeho hlavním nepřítelem jsou lvi a u vody ho loví krokodýli. Telata mohou ulovit hyeny.',
    },
  },
  {
    id: 'secretarybird',
    name: { en: 'Secretarybird', cs: 'Hadilov písař' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' },
      family: { latin: 'Sagittariidae', en: 'Secretarybirds', cs: 'Hadilovovití' },
      genus: 'Sagittarius',
      species: 'Sagittarius serpentarius',
    },
    habitat: {
      en: 'This bird of prey with long legs and feathers on its head walks across grasslands and dry plains, like the Karoo in South Africa.',
      cs: 'Tenhle dravec s dlouhýma nohama a peříčky na hlavě chodí po travnatých a suchých pláních, třeba v Karoo v Jihoafrické republice.',
    },
    diet: {
      en: 'It stamps hard on snakes, lizards, mice and big insects with its feet.',
      cs: 'Hady, ještěrky, myši a velký hmyz loví tak, že po nich silně dupe nohama.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Crows, owls, eagles and wild cats may take eggs and chicks from the nest.',
      cs: 'Dospělí ptáci mají málo nepřátel. Vejce a mláďata z hnízda mohou ukrást vrány, sovy, orli a divoké kočky.',
    },
  },
  {
    id: 'black-mamba',
    name: { en: 'Black mamba', cs: 'Mamba černá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Elapidae', en: 'Cobras and their relatives', cs: 'Korálovcovití' },
      genus: 'Dendroaspis',
      species: 'Dendroaspis polylepis',
    },
    habitat: {
      en: 'This long, fast and very venomous snake lives in savannas and rocky hills of Southern and East Africa. Inside its mouth is black.',
      cs: 'Tenhle dlouhý, rychlý a velmi jedovatý had žije na savanách a skalnatých kopcích jižní a východní Afriky. Tlamu má uvnitř černou.',
    },
    diet: {
      en: 'It hunts rats, squirrels, hyraxes and birds.',
      cs: 'Loví krysy, veverky, damany a ptáky.',
    },
    predators: {
      en: 'Mongooses, honey badgers and snake eagles can catch it.',
      cs: 'Ulovit ji dokážou promyky, medojedi a draví ptáci, kteří loví hady.',
    },
  },
  {
    id: 'common-eland',
    name: { en: 'Common eland', cs: 'Antilopa losí' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Taurotragus',
      species: 'Taurotragus oryx',
    },
    habitat: {
      en: 'The biggest antelope in the world lives on grassy plains and mountains, like the Drakensberg in South Africa.',
      cs: 'Největší antilopa na světě žije na travnatých pláních a v horách, třeba v Dračích horách v Jihoafrické republice.',
    },
    diet: {
      en: 'It eats leaves, bushes, grass and fruit. It can jump over a tall fence!',
      cs: 'Jí listí, keře, trávu a plody. Dokáže přeskočit i vysoký plot!',
    },
    predators: {
      en: 'Lions and hyenas hunt it. Leopards, cheetahs and wild dogs may catch the calves.',
      cs: 'Loví ji lvi a hyeny. Mláďata mohou ulovit levharti, gepardi a psi hyenoví.',
    },
  },
]
