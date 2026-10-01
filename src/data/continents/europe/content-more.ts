import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const amphibians = { latin: 'Amphibia', en: 'Amphibians', cs: 'Obojživelníci' }
const rayFinned = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }
const chondrichthyes = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' }
const rodentia = { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' }
const accipitriformes = { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' }
const mustelidae = { latin: 'Mustelidae', en: 'Weasels, otters and badgers', cs: 'Lasicovití' }
const canidae = { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' }

const viverridae = { latin: 'Viverridae', en: 'Civets and genets', cs: 'Cibetkovití' }

export const moreContent: AnimalContent[] = [
  // ---------- north ----------
  {
    id: 'saimaa-ringed-seal',
    name: { en: 'Saimaa ringed seal', cs: 'Tuleň kroužkovaný saimaaský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Pusa',
      species: 'Pusa hispida saimensis',
    },
    habitat: {
      en: 'It lives only in one place in the whole world: the big lake Saimaa in Finland. It is a seal that lives in fresh water, not in the sea.',
      cs: 'Žije jen na jediném místě na světě: ve velkém jezeře Saimaa ve Finsku. Je to tuleň, který nežije v moři, ale ve sladké vodě.',
    },
    diet: {
      en: 'It dives under the water and catches small fish, like perch and little whitefish.',
      cs: 'Potápí se pod vodu a chytá malé ryby, třeba okouny a malé síhy.',
    },
    predators: {
      en: 'Grown-up seals have almost no enemies. Pups hide in snow caves on the ice, where foxes cannot find them.',
      cs: 'Dospělí tuleni nemají skoro žádné nepřátele. Mláďata se schovávají ve sněhových norách na ledu, kde je lišky nenajdou.',
    },
  },
  {
    id: 'mountain-hare',
    name: { en: 'Mountain hare', cs: 'Zajíc bělák' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Lagomorpha', en: 'Rabbits and hares', cs: 'Zajícovci' },
      family: { latin: 'Leporidae', en: 'Rabbits and hares', cs: 'Zajícovití' },
      genus: 'Lepus',
      species: 'Lepus timidus',
    },
    habitat: {
      en: 'It lives in the cold northern forests and mountains. In summer its fur is brown, and in winter it turns snow-white.',
      cs: 'Žije v chladných severních lesích a horách. V létě má hnědý kožich a v zimě mu zbělá jako sníh.',
    },
    diet: {
      en: 'It nibbles grass, leaves and berries. In winter it eats twigs and bark of willows and birches.',
      cs: 'Okusuje trávu, listy a borůvky. V zimě jí větvičky a kůru vrb a bříz.',
    },
    predators: {
      en: 'Lynxes, foxes, wolverines, golden eagles and big owls like to catch it.',
      cs: 'Loví ho rysové, lišky, rosomáci, orli skalní a velké sovy.',
    },
  },
  {
    id: 'stoat',
    name: { en: 'Stoat', cs: 'Lasice hranostaj' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: mustelidae,
      genus: 'Mustela',
      species: 'Mustela erminea',
    },
    habitat: {
      en: 'It lives in forests, meadows and mountains. In the snowy north it turns white in winter, but the tip of its tail stays black.',
      cs: 'Žije v lesích, na loukách i v horách. Na zasněženém severu v zimě zbělá, jen špička ocásku zůstane černá.',
    },
    diet: {
      en: 'It is small but very brave. It hunts voles, mice, lemmings and even rabbits much bigger than itself.',
      cs: 'Je malý, ale moc odvážný. Loví hraboše, myši, lumíky, a dokonce i králíky, kteří jsou mnohem větší než on.',
    },
    predators: {
      en: 'Foxes, owls, eagles and hawks can catch it.',
      cs: 'Může ho ulovit liška, sova, orel nebo jestřáb.',
    },
  },
  {
    id: 'harbour-porpoise',
    name: { en: 'Harbour porpoise', cs: 'Sviňucha obecná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Phocoenidae', en: 'Porpoises', cs: 'Sviňuchovití' },
      genus: 'Phocoena',
      species: 'Phocoena phocoena',
    },
    habitat: {
      en: 'It is a small, shy cousin of dolphins. It swims in cool seas near the coast, like the North Sea and the Baltic Sea.',
      cs: 'Je to malý plachý příbuzný delfínů. Plave v chladných mořích blízko pobřeží, třeba v Severním a Baltském moři.',
    },
    diet: {
      en: 'It eats lots of small fish, like herring, and also squid and shrimp.',
      cs: 'Jí spoustu malých ryb, třeba sledě, a také olihně a krevety.',
    },
    predators: {
      en: 'Orcas and big sharks can hunt it. Sometimes grey seals attack it too.',
      cs: 'Mohou ji ulovit kosatky a velcí žraloci. Někdy na ni zaútočí i tuleni kuželozubí.',
    },
  },
  {
    id: 'red-squirrel',
    name: { en: 'Red squirrel', cs: 'Veverka obecná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Sciuridae', en: 'Squirrels', cs: 'Veverkovití' },
      genus: 'Sciurus',
      species: 'Sciurus vulgaris',
    },
    habitat: {
      en: 'It lives high in the trees of forests and parks all over Europe. It builds a round nest of twigs called a drey and has a big fluffy tail.',
      cs: 'Žije vysoko na stromech v lesích a parcích po celé Evropě. Staví si kulaté hnízdo z větviček a má velký huňatý ocas.',
    },
    diet: {
      en: 'It eats seeds from pine and spruce cones, nuts, mushrooms and berries. It hides nuts for the winter.',
      cs: 'Jí semínka ze šišek, oříšky, houby a bobule. Na zimu si schovává oříšky do skrýší.',
    },
    predators: {
      en: 'Pine martens, goshawks, owls and cats like to catch it.',
      cs: 'Loví ji kuny, jestřábi, sovy a kočky.',
    },
  },
  {
    id: 'eurasian-eagle-owl',
    name: { en: 'Eurasian eagle-owl', cs: 'Výr velký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Strigiformes', en: 'Owls', cs: 'Sovy' },
      family: { latin: 'Strigidae', en: 'True owls', cs: 'Puštíkovití' },
      genus: 'Bubo',
      species: 'Bubo bubo',
    },
    habitat: {
      en: 'It is one of the biggest owls in the world. It lives in forests with rocks and cliffs and has big orange eyes and feather ear tufts.',
      cs: 'Je to jedna z největších sov na světě. Žije v lesích se skalami, má velké oranžové oči a péřová ouška.',
    },
    diet: {
      en: 'At night it hunts rats, hares, hedgehogs, ducks and even other owls.',
      cs: 'V noci loví potkany, zajíce, ježky, kachny, a dokonce i jiné sovy.',
    },
    predators: {
      en: 'Grown-up eagle-owls have almost no enemies. Foxes or martens may steal eggs or chicks.',
      cs: 'Dospělí výři nemají skoro žádné nepřátele. Lišky nebo kuny mohou ukrást vejce či mláďata.',
    },
  },
  {
    id: 'northern-pike',
    name: { en: 'Northern pike', cs: 'Štika obecná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Esociformes', en: 'Pikes and mudminnows', cs: 'Štikotvární' },
      family: { latin: 'Esocidae', en: 'Pikes', cs: 'Štikovití' },
      genus: 'Esox',
      species: 'Esox lucius',
    },
    habitat: {
      en: 'It lives in lakes, ponds and slow rivers. It hides among water plants, green and spotted, waiting very still.',
      cs: 'Žije v jezerech, rybnících a pomalých řekách. Schovává se mezi vodními rostlinami, zelená a skvrnitá, a tiše číhá.',
    },
    diet: {
      en: 'It shoots out super fast and grabs fish, frogs and even ducklings with its long mouth full of sharp teeth.',
      cs: 'Bleskově vyrazí a svou dlouhou tlamou plnou ostrých zubů chytí rybu, žábu, nebo dokonce malé kachňátko.',
    },
    predators: {
      en: 'Big pikes have few enemies except otters, eagles and people. Small pikes are eaten by herons and bigger pikes.',
      cs: 'Velké štiky mají málo nepřátel, jen vydry, orly a lidi. Malé štiky jedí volavky a větší štiky.',
    },
  },
  // ---------- middle ----------
  {
    id: 'red-deer',
    name: { en: 'Red deer', cs: 'Jelen evropský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Cervidae', en: 'Deer', cs: 'Jelenovití' },
      genus: 'Cervus',
      species: 'Cervus elaphus',
    },
    habitat: {
      en: 'It lives in forests and on hills all over Europe, also in Czechia. In autumn the stags with huge antlers roar loudly.',
      cs: 'Žije v lesích a na kopcích po celé Evropě, i u nás v Česku. Na podzim jeleni s obrovským parožím hlasitě troubí.',
    },
    diet: {
      en: 'It eats grass, leaves, young twigs, acorns and bark.',
      cs: 'Jí trávu, listí, mladé větvičky, žaludy a kůru.',
    },
    predators: {
      en: 'Wolves, bears and lynxes can hunt it. Foxes and eagles sometimes catch little calves.',
      cs: 'Mohou ho ulovit vlci, medvědi a rysové. Malé koloušky občas uloví liška nebo orel.',
    },
  },
  {
    id: 'basking-shark',
    name: { en: 'Basking shark', cs: 'Žralok veliký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Lamniformes', en: 'Mackerel sharks', cs: 'Obrouni' },
      family: { latin: 'Cetorhinidae', en: 'Basking sharks', cs: 'Žralokovití' },
      genus: 'Cetorhinus',
      species: 'Cetorhinus maximus',
    },
    habitat: {
      en: 'It is the second biggest fish in the world, as long as a bus. In summer it swims slowly near the coasts of Ireland and Britain.',
      cs: 'Je to druhá největší ryba na světě, dlouhá jako autobus. V létě pomalu plave u pobřeží Irska a Británie.',
    },
    diet: {
      en: 'It is a gentle giant. It swims with its huge mouth wide open and sieves out tiny sea creatures called plankton.',
      cs: 'Je to hodný obr. Plave s obrovskou otevřenou tlamou a cedí z vody drobounký plankton.',
    },
    predators: {
      en: 'Because it is so big, it has almost no enemies. Only orcas and white sharks sometimes attack it.',
      cs: 'Protože je tak velký, nemá skoro žádné nepřátele. Jen kosatky a velcí bílí žraloci na něj někdy zaútočí.',
    },
  },
  {
    id: 'pine-marten',
    name: { en: 'European pine marten', cs: 'Kuna lesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: mustelidae,
      genus: 'Martes',
      species: 'Martes martes',
    },
    habitat: {
      en: 'It lives in forests and climbs trees very well. It has brown fur and a yellow patch on its chest, like a bib.',
      cs: 'Žije v lesích a skvěle šplhá po stromech. Má hnědý kožíšek a na hrudi žlutou skvrnu jako bryndáček.',
    },
    diet: {
      en: 'It hunts squirrels, voles and birds, and it also loves berries, eggs and honey.',
      cs: 'Loví veverky, hraboše a ptáky a také si pochutná na bobulích, vajíčkách a medu.',
    },
    predators: {
      en: 'Foxes, lynxes, golden eagles and eagle-owls can catch it.',
      cs: 'Může ji ulovit liška, rys, orel skalní nebo výr.',
    },
  },
  {
    id: 'great-crested-newt',
    name: { en: 'Great crested newt', cs: 'Čolek velký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: { latin: 'Caudata', en: 'Salamanders and newts', cs: 'Ocasatí' },
      family: { latin: 'Salamandridae', en: 'Salamanders and newts', cs: 'Mlokovití' },
      genus: 'Triturus',
      species: 'Triturus cristatus',
    },
    habitat: {
      en: 'In spring it lives in ponds, and the male grows a tall wavy crest on its back, like a little dragon. It has an orange, spotted belly.',
      cs: 'Na jaře žije v tůních a sameček dostane na zádech vysoký zubatý hřebínek jako malý drak. Bříško má oranžové s černými skvrnami.',
    },
    diet: {
      en: 'It eats worms, snails, water insects and tadpoles.',
      cs: 'Jí žížaly, šneky, vodní hmyz a pulce.',
    },
    predators: {
      en: 'Herons, fish, grass snakes and hedgehogs can eat it. Its skin tastes bad, which protects it.',
      cs: 'Mohou ho sníst volavky, ryby, užovky a ježci. Jeho kůže ale nechutná, a to ho chrání.',
    },
  },
  {
    id: 'grass-snake',
    name: { en: 'Grass snake', cs: 'Užovka obojková' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' },
      family: { latin: 'Colubridae', en: 'Colubrid snakes', cs: 'Užovkovití' },
      genus: 'Natrix',
      species: 'Natrix natrix',
    },
    habitat: {
      en: 'It lives near ponds and rivers and swims very well. It is not venomous and has two yellow spots behind its head, like a collar.',
      cs: 'Žije u rybníků a řek a výborně plave. Není jedovatá a za hlavou má dvě žluté skvrny jako obojek.',
    },
    diet: {
      en: 'It mostly eats frogs, toads, newts and small fish, and swallows them whole.',
      cs: 'Jí hlavně žáby, ropuchy, čolky a malé rybky a polyká je vcelku.',
    },
    predators: {
      en: 'Storks, herons, buzzards, foxes and hedgehogs can eat it. When scared, it plays dead.',
      cs: 'Mohou ji sníst čápi, volavky, káňata, lišky a ježci. Když se lekne, dělá, že je mrtvá.',
    },
  },
  {
    id: 'hazel-dormouse',
    name: { en: 'Hazel dormouse', cs: 'Plch lískový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Gliridae', en: 'Dormice', cs: 'Plchovití' },
      genus: 'Muscardinus',
      species: 'Muscardinus avellanarius',
    },
    habitat: {
      en: 'This tiny golden mouse-like animal lives in bushes and forest edges. It sleeps all winter long, curled up in a ball.',
      cs: 'Toto drobné zlatavé zvířátko žije v křovinách a na okrajích lesů. Celou zimu prospí stočené do klubíčka.',
    },
    diet: {
      en: 'It eats hazelnuts, flowers, berries, seeds and small insects.',
      cs: 'Jí lískové oříšky, květy, bobule, semínka a drobný hmyz.',
    },
    predators: {
      en: 'Owls, weasels, martens, foxes and cats can catch it.',
      cs: 'Mohou ho chytit sovy, lasice, kuny, lišky a kočky.',
    },
  },
  {
    id: 'european-wildcat',
    name: { en: 'European wildcat', cs: 'Kočka divoká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Felis',
      species: 'Felis silvestris',
    },
    habitat: {
      en: 'It lives in big wild forests, like in the Carpathian mountains. It looks like a striped tabby cat, but with a thick tail with black rings.',
      cs: 'Žije ve velkých divokých lesích, třeba v Karpatech. Vypadá jako mourovatá kočka, ale má huňatý ocas s černými kroužky.',
    },
    diet: {
      en: 'It sneaks up on mice and voles, and it also catches rabbits and birds.',
      cs: 'Plíží se za myšmi a hraboši a chytá také králíky a ptáky.',
    },
    predators: {
      en: 'Wolves, lynxes and golden eagles can catch it. Foxes and martens may take kittens.',
      cs: 'Může ji ulovit vlk, rys nebo orel skalní. Koťata mohou ukrást lišky a kuny.',
    },
  },
  {
    id: 'common-hamster',
    name: { en: 'European hamster', cs: 'Křeček polní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Cricetidae', en: 'Hamsters, voles and lemmings', cs: 'Křečkovití' },
      genus: 'Cricetus',
      species: 'Cricetus cricetus',
    },
    habitat: {
      en: 'It lives in fields and meadows and digs deep burrows with many rooms. It has a black belly and is much bigger than a pet hamster.',
      cs: 'Žije na polích a loukách a hrabe si hluboké nory s mnoha komůrkami. Má černé bříško a je mnohem větší než křeček doma v kleci.',
    },
    diet: {
      en: 'It eats grain, seeds, roots and beetles. It carries food home in its cheek pouches and stores it for winter.',
      cs: 'Jí obilí, semínka, kořínky a brouky. Jídlo nosí domů v lícních torbách a dělá si zásoby na zimu.',
    },
    predators: {
      en: 'Foxes, polecats, buzzards, eagles and owls like to catch it.',
      cs: 'Loví ho lišky, tchoři, káňata, orli a sovy.',
    },
  },
  {
    id: 'wels-catfish',
    name: { en: 'Wels catfish', cs: 'Sumec velký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Siluriformes', en: 'Catfishes', cs: 'Sumcotvární' },
      family: { latin: 'Siluridae', en: 'Sheatfishes', cs: 'Sumcovití' },
      genus: 'Silurus',
      species: 'Silurus glanis',
    },
    habitat: {
      en: 'It is the biggest river fish in Europe and can be longer than a car. It lives in big rivers like the Danube and has long whiskers.',
      cs: 'Je to největší říční ryba v Evropě a může být delší než auto. Žije ve velkých řekách, jako je Dunaj, a má dlouhé vousy.',
    },
    diet: {
      en: 'It hunts at night. It eats fish, frogs, crayfish and sometimes even ducks or pigeons.',
      cs: 'Loví v noci. Jí ryby, žáby, raky, a někdy dokonce i kachny nebo holuby.',
    },
    predators: {
      en: 'Big catfish have no enemies except people. Their eggs and babies are eaten by other fish.',
      cs: 'Velcí sumci nemají žádné nepřátele kromě lidí. Jejich jikry a mláďata jedí jiné ryby.',
    },
  },
  {
    id: 'beluga-sturgeon',
    name: { en: 'Beluga sturgeon', cs: 'Vyza velká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Acipenseriformes', en: 'Sturgeons and paddlefishes', cs: 'Jeseteři' },
      family: { latin: 'Acipenseridae', en: 'Sturgeons', cs: 'Jeseterovití' },
      genus: 'Huso',
      species: 'Huso huso',
    },
    habitat: {
      en: 'It is a giant, ancient fish with bony plates on its back. It lives in the Caspian and Black Seas and swims up big rivers like the Volga to lay eggs.',
      cs: 'Je to obrovská prastará ryba s kostěnými štítky na zádech. Žije v Kaspickém a Černém moři a klade jikry ve velkých řekách, jako je Volha.',
    },
    diet: {
      en: 'Young ones eat worms and small water animals. Big ones hunt fish.',
      cs: 'Mláďata jedí červy a drobné vodní živočichy. Velké vyzy loví ryby.',
    },
    predators: {
      en: 'Grown-up belugas have no enemies except people, who catch them for their eggs. Other fish eat the babies.',
      cs: 'Dospělé vyzy nemají nepřátele kromě lidí, kteří je loví kvůli jikrám. Mláďata jedí jiné ryby.',
    },
  },
  // ---------- south ----------
  {
    id: 'golden-jackal',
    name: { en: 'Golden jackal', cs: 'Šakal obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Canis',
      species: 'Canis aureus',
    },
    habitat: {
      en: 'It looks like a small golden wolf. It lives in bushes, reed beds and fields in the Balkans, and now it is coming to Czechia too.',
      cs: 'Vypadá jako malý zlatavý vlk. Žije v křovinách, rákosí a na polích na Balkáně a teď už přichází i k nám do Česka.',
    },
    diet: {
      en: 'It eats almost anything: mice, hares, birds, frogs, fruit and leftovers.',
      cs: 'Jí skoro všechno: myši, zajíce, ptáky, žáby, ovoce i zbytky jídla.',
    },
    predators: {
      en: 'Wolves can chase and catch it. Eagles and eagle-owls may take the pups.',
      cs: 'Může ho uštvat vlk. Mláďata mohou ulovit orli a výři.',
    },
  },
  {
    id: 'egyptian-mongoose',
    name: { en: 'Egyptian mongoose', cs: 'Promyka ichneumon' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Herpestidae', en: 'Mongooses', cs: 'Promykovití' },
      genus: 'Herpestes',
      species: 'Herpestes ichneumon',
    },
    habitat: {
      en: 'It lives in warm bushy lands in Spain and Portugal. It has a long body, short legs and a long tail with a black tuft.',
      cs: 'Žije v teplých křovinatých krajinách ve Španělsku a Portugalsku. Má dlouhé tělo, krátké nožky a dlouhý ocas s černou štětičkou.',
    },
    diet: {
      en: 'It hunts rabbits, mice, lizards, birds and even snakes. It also likes eggs.',
      cs: 'Loví králíky, myši, ještěrky, ptáky, a dokonce i hady. Chutnají mu také vajíčka.',
    },
    predators: {
      en: 'Iberian lynxes, big eagles and eagle-owls can catch it.',
      cs: 'Může ji ulovit rys iberský, velcí orli nebo výr.',
    },
  },
  {
    id: 'atlantic-bluefin-tuna',
    name: { en: 'Atlantic bluefin tuna', cs: 'Tuňák obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Scombriformes', en: 'Mackerels and tunas', cs: 'Makrelotvární' },
      family: { latin: 'Scombridae', en: 'Mackerels and tunas', cs: 'Makrelovití' },
      genus: 'Thunnus',
      species: 'Thunnus thynnus',
    },
    habitat: {
      en: 'It is a huge, super fast fish that swims across the ocean. In early summer it comes to the warm Mediterranean Sea to lay eggs.',
      cs: 'Je to obrovská a velmi rychlá ryba, která přeplouvá celý oceán. Na začátku léta připlouvá do teplého Středozemního moře klást jikry.',
    },
    diet: {
      en: 'It swims in big groups and hunts herring, mackerel, sardines and squid.',
      cs: 'Plave ve velkých hejnech a loví sledě, makrely, sardinky a olihně.',
    },
    predators: {
      en: 'Big tunas are eaten only by orcas and large sharks. Small tunas are eaten by many bigger fish and dolphins.',
      cs: 'Velké tuňáky loví jen kosatky a velcí žraloci. Malé tuňáky jedí mnohé větší ryby a delfíni.',
    },
  },
  {
    id: 'golden-eagle',
    name: { en: 'Golden eagle', cs: 'Orel skalní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: accipitriformes,
      family: { latin: 'Accipitridae', en: 'Hawks and eagles', cs: 'Jestřábovití' },
      genus: 'Aquila',
      species: 'Aquila chrysaetos',
    },
    habitat: {
      en: 'It lives in high mountains, like in Spain, the Alps and Scotland. It builds a huge nest on a cliff and has golden feathers on its neck.',
      cs: 'Žije ve vysokých horách, třeba ve Španělsku, v Alpách a ve Skotsku. Na skále si staví obrovské hnízdo a na krku má zlatavé peří.',
    },
    diet: {
      en: 'It flies high and dives down to catch rabbits, hares, marmots and big birds.',
      cs: 'Létá vysoko a střemhlav se vrhá na králíky, zajíce, svišťy a velké ptáky.',
    },
    predators: {
      en: 'Grown-up golden eagles have no enemies. Martens, foxes or ravens may take eggs and chicks.',
      cs: 'Dospělí orli skalní nemají žádné nepřátele. Kuny, lišky nebo krkavci mohou ukrást vejce a mláďata.',
    },
  },
  {
    id: 'european-tree-frog',
    name: { en: 'European tree frog', cs: 'Rosnička zelená' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: { latin: 'Anura', en: 'Frogs and toads', cs: 'Žáby' },
      family: { latin: 'Hylidae', en: 'Tree frogs', cs: 'Rosničkovití' },
      genus: 'Hyla',
      species: 'Hyla arborea',
    },
    habitat: {
      en: 'This small bright green frog lives in bushes and trees near ponds. Its sticky toe pads help it climb, and it croaks very loudly.',
      cs: 'Tato malá jasně zelená žabka žije v keřích a na stromech u rybníků. Lepkavé prstíky jí pomáhají šplhat a kvákat umí hodně nahlas.',
    },
    diet: {
      en: 'It catches flies, beetles, moths and spiders with its sticky tongue.',
      cs: 'Svým lepkavým jazykem chytá mouchy, brouky, můry a pavouky.',
    },
    predators: {
      en: 'Storks, herons, grass snakes and birds can eat it. Fish and water beetles eat the tadpoles.',
      cs: 'Mohou ji sníst čápi, volavky, užovky a jiní ptáci. Pulce jedí ryby a vodní brouci.',
    },
  },
  {
    id: 'european-pond-turtle',
    name: { en: 'European pond turtle', cs: 'Želva bahenní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' },
      family: { latin: 'Emydidae', en: 'Pond turtles', cs: 'Emydovití' },
      genus: 'Emys',
      species: 'Emys orbicularis',
    },
    habitat: {
      en: 'It lives in quiet ponds, marshes and slow rivers. It loves to lie on a log in the sun, and it has little yellow dots on its dark shell.',
      cs: 'Žije v klidných rybnících, bažinách a pomalých řekách. Ráda se vyhřívá na kládě na sluníčku a na tmavém krunýři má drobné žluté tečky.',
    },
    diet: {
      en: 'It eats snails, worms, water insects, tadpoles and small fish.',
      cs: 'Jí šneky, červy, vodní hmyz, pulce a malé rybky.',
    },
    predators: {
      en: 'Grown-up turtles are safe in their shells. Foxes, badgers and crows dig up the eggs, and herons eat the babies.',
      cs: 'Dospělé želvy chrání krunýř. Vajíčka ale vyhrabávají lišky, jezevci a vrány a mláďata jedí volavky.',
    },
  },
  // ---------- civets and relatives ----------
  {
    id: 'common-genet',
    name: { en: 'Common genet', cs: 'Ženetka tečkovaná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: viverridae,
      genus: 'Genetta',
      species: 'Genetta genetta',
    },
    habitat: {
      en: 'It lives in forests and bushy hills in Spain, Portugal and southern France, and also in Africa. People brought it to Europe long ago.',
      cs: 'Žije v lesích a křovinatých kopcích ve Španělsku, Portugalsku a jižní Francii a také v Africe. Do Evropy ji kdysi dávno přivezli lidé.',
    },
    diet: {
      en: 'At night it hunts mice, birds, lizards and insects, and it eats berries too. It climbs trees like a cat.',
      cs: 'V noci loví myši, ptáky, ještěrky a hmyz a jí i bobule. Po stromech šplhá jako kočka.',
    },
    predators: {
      en: 'Eagle-owls, eagles, foxes and lynxes may catch it.',
      cs: 'Může ji ulovit výr, orel, liška nebo rys.',
    },
  },
]
