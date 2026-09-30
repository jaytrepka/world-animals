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
const hominidae = { latin: 'Hominidae', en: 'Great apes', cs: 'Hominidé' }
const proboscidea = { latin: 'Proboscidea', en: 'Elephants', cs: 'Chobotnatci' }
const elephantidae = { latin: 'Elephantidae', en: 'Elephants', cs: 'Slonovití' }
const hippopotamidae = { latin: 'Hippopotamidae', en: 'Hippos', cs: 'Hrochovití' }
const giraffidae = { latin: 'Giraffidae', en: 'Giraffes and okapis', cs: 'Žirafovití' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }
const testudines = { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' }

export const middleContent: AnimalContent[] = [
  {
    id: 'mountain-gorilla',
    name: { en: 'Mountain gorilla', cs: 'Gorila horská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: hominidae,
      genus: 'Gorilla',
      species: 'Gorilla beringei beringei',
    },
    habitat: {
      en: 'It lives in cool, misty forests on the Virunga volcanoes and in Bwindi forest, where Rwanda, Uganda and Congo meet.',
      cs: 'Žije v chladných mlžných lesích na sopkách Virunga a v pralese Bwindi, tam kde se stýká Rwanda, Uganda a Kongo.',
    },
    diet: {
      en: 'It eats leaves, stems, bamboo shoots, roots and some fruit. A big male eats a huge pile of plants every day.',
      cs: 'Jí listy, stonky, bambusové výhonky, kořínky a trochu ovoce. Velký samec spořádá každý den obrovskou hromadu rostlin.',
    },
    predators: {
      en: 'Gorillas are strong and a big silverback protects his family. Only leopards sometimes attack them.',
      cs: 'Gorily jsou silné a svou rodinu chrání velký stříbrohřbetý samec. Napadnout je může jen občas levhart.',
    },
  },
  {
    id: 'chimpanzee',
    name: { en: 'Chimpanzee', cs: 'Šimpanz učenlivý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: hominidae,
      genus: 'Pan',
      species: 'Pan troglodytes',
    },
    habitat: {
      en: 'It lives in family groups in the forests and wooded savannas of West and Central Africa. It sleeps in a leafy nest in a tree.',
      cs: 'Žije v rodinných tlupách v lesích a lesnatých savanách západní a střední Afriky. Spí v hnízdě z listí na stromě.',
    },
    diet: {
      en: 'It mostly eats fruit, leaves and nuts. It uses sticks to fish for termites and stones to crack nuts.',
      cs: 'Jí hlavně ovoce, listí a ořechy. Klacíkem si loví termity a kamenem louská ořechy.',
    },
    predators: {
      en: 'Leopards sometimes hunt chimpanzees, and big eagles may try to grab a baby.',
      cs: 'Šimpanze občas loví levharti a na mládě si mohou troufnout velcí orli.',
    },
  },
  {
    id: 'bonobo',
    name: { en: 'Bonobo', cs: 'Šimpanz bonobo' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: hominidae,
      genus: 'Pan',
      species: 'Pan paniscus',
    },
    habitat: {
      en: 'This peaceful ape lives only in the deep rainforest south of the big Congo River.',
      cs: 'Tahle mírumilovná opice žije jen v hlubokém deštném pralese na jih od velké řeky Kongo.',
    },
    diet: {
      en: 'It eats mostly fruit, and also leaves, flowers, seeds and sometimes small animals.',
      cs: 'Jí hlavně ovoce a také listy, květy, semena a občas malá zvířata.',
    },
    predators: {
      en: 'Leopards and big snakes may catch a bonobo, but the group warns each other of danger.',
      cs: 'Bonobo může ulovit levhart nebo velký had, ale tlupa se navzájem varuje před nebezpečím.',
    },
  },
  {
    id: 'okapi',
    name: { en: 'Okapi', cs: 'Okapi' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: giraffidae,
      genus: 'Okapia',
      species: 'Okapia johnstoni',
    },
    habitat: {
      en: 'This shy cousin of the giraffe, with zebra stripes on its legs, lives hidden in the Ituri rainforest of Congo.',
      cs: 'Tahle plachá příbuzná žirafy má na nohou pruhy jako zebra a žije ukrytá v pralese Ituri v Kongu.',
    },
    diet: {
      en: 'It pulls leaves and buds off plants with its long blue tongue. It also eats fruit, ferns and mushrooms.',
      cs: 'Dlouhým modrým jazykem otrhává listy a pupeny z rostlin. Jí také ovoce, kapradiny a houby.',
    },
    predators: {
      en: 'Its main enemy is the leopard. Wild cats may also catch a young okapi.',
      cs: 'Jejím hlavním nepřítelem je levhart. Mládě mohou ulovit i menší šelmy.',
    },
  },
  {
    id: 'african-forest-elephant',
    name: { en: 'African forest elephant', cs: 'Slon pralesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: proboscidea,
      family: elephantidae,
      genus: 'Loxodonta',
      species: 'Loxodonta cyclotis',
    },
    habitat: {
      en: 'This smaller elephant with straight tusks lives in the thick rainforests of Central Africa, like in Gabon and Congo.',
      cs: 'Tenhle menší slon s rovnými kly žije v hustých deštných pralesích střední Afriky, třeba v Gabonu a Kongu.',
    },
    diet: {
      en: 'It eats lots of fruit, leaves, bark and grass. It spreads seeds all over the forest in its dung.',
      cs: 'Jí spoustu ovoce, listí, kůry a trávy. Se svým trusem roznáší semínka po celém pralese.',
    },
    predators: {
      en: 'Grown-ups have no enemies except people. Leopards may sometimes catch a baby.',
      cs: 'Dospělí sloni nemají kromě lidí žádné nepřátele. Slůně může občas ulovit levhart.',
    },
  },
  {
    id: 'african-bush-elephant',
    name: { en: 'African bush elephant', cs: 'Slon africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: proboscidea,
      family: elephantidae,
      genus: 'Loxodonta',
      species: 'Loxodonta africana',
    },
    habitat: {
      en: 'The biggest land animal in the world lives in herds on the savannas and in the forests of East and Southern Africa.',
      cs: 'Největší suchozemské zvíře na světě žije ve stádech na savanách a v lesích východní a jižní Afriky.',
    },
    diet: {
      en: 'It eats grass, leaves, branches, bark and fruit, and drinks a whole bathtub of water every day.',
      cs: 'Jí trávu, listí, větve, kůru a ovoce a každý den vypije celou vanu vody.',
    },
    predators: {
      en: 'Grown-ups are too big to be hunted. Lions and hyenas may try to catch a calf, but the herd protects it.',
      cs: 'Dospělí sloni jsou na lov moc velcí. Lvi a hyeny se někdy snaží ulovit slůně, ale stádo ho brání.',
    },
  },
  {
    id: 'lion',
    name: { en: 'Lion', cs: 'Lev pustinný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Panthera',
      species: 'Panthera leo',
    },
    habitat: {
      en: 'Lions live in family groups called prides on the grassy savannas of Africa, like the Serengeti and Masai Mara.',
      cs: 'Lvi žijí v rodinných skupinách, kterým se říká smečky, na travnatých savanách Afriky, třeba v Serengeti a Masai Mara.',
    },
    diet: {
      en: 'The lionesses hunt together for zebras, wildebeest, buffalo and antelopes.',
      cs: 'Lvice loví společně zebry, pakoně, buvoly a antilopy.',
    },
    predators: {
      en: 'Grown-up lions have no enemies. Hyenas, leopards and other lions may kill the cubs.',
      cs: 'Dospělí lvi nemají žádné nepřátele. Lvíčata ale mohou zabít hyeny, levharti nebo jiní lvi.',
    },
  },
  {
    id: 'reticulated-giraffe',
    name: { en: 'Reticulated giraffe', cs: 'Žirafa síťovaná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: giraffidae,
      genus: 'Giraffa',
      species: 'Giraffa reticulata',
    },
    habitat: {
      en: 'The tallest animal in the world lives on the dry savannas of northern Kenya. Its brown patches look like a net.',
      cs: 'Nejvyšší zvíře na světě žije na suchých savanách severní Keni. Její hnědé skvrny vypadají jako síťka.',
    },
    diet: {
      en: 'It uses its long neck and tongue to eat leaves from the tops of thorny acacia trees.',
      cs: 'Dlouhým krkem a jazykem okusuje listy z vršků trnitých akácií.',
    },
    predators: {
      en: 'Lions sometimes hunt grown-ups. Calves can be caught by lions, hyenas, leopards and wild dogs.',
      cs: 'Dospělé žirafy občas loví lvi. Mláďata mohou ulovit lvi, hyeny, levharti a psi hyenoví.',
    },
  },
  {
    id: 'hippopotamus',
    name: { en: 'Common hippopotamus', cs: 'Hroch obojživelný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: hippopotamidae,
      genus: 'Hippopotamus',
      species: 'Hippopotamus amphibius',
    },
    habitat: {
      en: 'It spends the hot day in rivers and lakes of Africa, like the Nile in Uganda. It keeps cool with only its eyes and nose above water.',
      cs: 'Horký den tráví v řekách a jezerech Afriky, třeba v Nilu v Ugandě. Chladí se ve vodě a nad hladinu mu koukají jen oči a nos.',
    },
    diet: {
      en: 'At night it comes out of the water and eats grass on the riverbank.',
      cs: 'V noci vylézá z vody a spásá trávu na břehu.',
    },
    predators: {
      en: 'Grown-ups are huge and very strong. Lions, hyenas and crocodiles may catch a baby hippo.',
      cs: 'Dospělí hroši jsou obrovští a velmi silní. Mládě ale mohou ulovit lvi, hyeny nebo krokodýli.',
    },
  },
  {
    id: 'plains-zebra',
    name: { en: 'Plains zebra', cs: 'Zebra stepní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Perissodactyla', en: 'Odd-toed hoofed mammals', cs: 'Lichokopytníci' },
      family: { latin: 'Equidae', en: 'Horses', cs: 'Koňovití' },
      genus: 'Equus',
      species: 'Equus quagga',
    },
    habitat: {
      en: 'It lives in big herds on the grassy savannas of East and Southern Africa. Every zebra has its own pattern of stripes.',
      cs: 'Žije ve velkých stádech na travnatých savanách východní a jižní Afriky. Každá zebra má svůj vlastní vzor pruhů.',
    },
    diet: {
      en: 'It eats grass, and walks long ways with the wildebeest to find fresh green grass after the rain.',
      cs: 'Spásá trávu a s pakoni putuje daleko, aby po dešti našla čerstvou zelenou trávu.',
    },
    predators: {
      en: 'Lions, hyenas, leopards, wild dogs and crocodiles hunt zebras.',
      cs: 'Zebry loví lvi, hyeny, levharti, psi hyenoví a krokodýli.',
    },
  },
  {
    id: 'ethiopian-wolf',
    name: { en: 'Ethiopian wolf', cs: 'Vlček etiopský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Canis',
      species: 'Canis simensis',
    },
    habitat: {
      en: 'This red wolf lives only high in the cold grassy mountains of Ethiopia, like the Bale Mountains. It is very rare.',
      cs: 'Tenhle rezavý vlček žije jen vysoko v chladných travnatých horách Etiopie, třeba v pohoří Bale. Je velmi vzácný.',
    },
    diet: {
      en: 'It hunts mostly rats and mole-rats that live in holes in the ground.',
      cs: 'Loví hlavně krysy a slepce, kteří žijí v norách v zemi.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Hyenas and eagles may catch the pups, and sickness from dogs is a danger.',
      cs: 'Dospělí vlčci nemají skoro žádné nepřátele. Mláďata mohou ulovit hyeny a orli a nebezpečné jsou pro ně nemoci od psů.',
    },
  },
  {
    id: 'nile-crocodile',
    name: { en: 'Nile crocodile', cs: 'Krokodýl nilský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Crocodilia', en: 'Crocodiles and alligators', cs: 'Krokodýli' },
      family: { latin: 'Crocodylidae', en: 'True crocodiles', cs: 'Krokodýlovití' },
      genus: 'Crocodylus',
      species: 'Crocodylus niloticus',
    },
    habitat: {
      en: 'This huge crocodile lives in rivers, lakes and swamps all over Africa. Lake Turkana in Kenya has thousands of them.',
      cs: 'Tenhle obrovský krokodýl žije v řekách, jezerech a bažinách po celé Africe. V jezeře Turkana v Keni jich žijí tisíce.',
    },
    diet: {
      en: 'It eats fish, and also catches zebras, antelopes and wildebeest when they come to drink.',
      cs: 'Jí ryby a chytá také zebry, antilopy a pakoně, když se přijdou napít.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies, though hippos and lions may fight them. Monitor lizards, birds and fish eat the eggs and babies.',
      cs: 'Dospělí krokodýli nemají skoro žádné nepřátele, i když s nimi někdy bojují hroši a lvi. Vejce a mláďata sežerou varani, ptáci a ryby.',
    },
  },
  {
    id: 'shoebill',
    name: { en: 'Shoebill', cs: 'Člunozobec africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Pelecaniformes', en: 'Pelicans, herons and relatives', cs: 'Pelikáni' },
      family: { latin: 'Balaenicipitidae', en: 'Shoebills', cs: 'Člunozobcovití' },
      genus: 'Balaeniceps',
      species: 'Balaeniceps rex',
    },
    habitat: {
      en: 'This tall grey bird with a giant bill shaped like a shoe lives in big papyrus swamps, like the Sudd in South Sudan.',
      cs: 'Tenhle vysoký šedý pták s obřím zobákem ve tvaru dřeváku žije ve velkých papyrusových bažinách, třeba v Suddu v Jižním Súdánu.',
    },
    diet: {
      en: 'It stands very still for a long time, then grabs fish like lungfish and catfish, frogs and even baby crocodiles.',
      cs: 'Dlouho stojí úplně bez hnutí a pak bleskově chňapne rybu, třeba bahníka nebo sumce, žábu, a dokonce i malého krokodýla.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Crocodiles may catch them, and eggs and chicks can be eaten by crocodiles and birds of prey.',
      cs: 'Dospělí ptáci mají málo nepřátel, někdy je chytí krokodýl. Vejce a mláďata mohou sežrat krokodýli a draví ptáci.',
    },
  },
  {
    id: 'mandrill',
    name: { en: 'Mandrill', cs: 'Mandril rýholící' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Cercopithecidae', en: 'Old World monkeys', cs: 'Kočkodanovití' },
      genus: 'Mandrillus',
      species: 'Mandrillus sphinx',
    },
    habitat: {
      en: 'This colourful monkey with a red and blue face lives in big groups in the rainforests of Gabon, Cameroon and Congo.',
      cs: 'Tahle barevná opice s červenomodrým obličejem žije ve velkých tlupách v deštných pralesích Gabonu, Kamerunu a Konga.',
    },
    diet: {
      en: 'It eats fruit, seeds, leaves, mushrooms, insects and small animals. It stores food in its cheek pouches.',
      cs: 'Jí ovoce, semena, listy, houby, hmyz a malá zvířata. Potravu si ukládá do lícních torbiček.',
    },
    predators: {
      en: 'Its main enemy is the leopard. Big eagles and pythons may catch the young.',
      cs: 'Jeho hlavním nepřítelem je levhart. Mláďata mohou ulovit velcí orli a krajty.',
    },
  },
  {
    id: 'red-river-hog',
    name: { en: 'Red river hog', cs: 'Štětkoun africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Suidae', en: 'Pigs', cs: 'Prasatovití' },
      genus: 'Potamochoerus',
      species: 'Potamochoerus porcus',
    },
    habitat: {
      en: 'This bright red wild pig with long white ear tufts lives in the rainforests of West and Central Africa, like in Cameroon.',
      cs: 'Tohle jasně rezavé divoké prase s dlouhými bílými štětičkami na uších žije v deštných pralesích západní a střední Afriky, třeba v Kamerunu.',
    },
    diet: {
      en: 'It digs in the ground with its snout for roots, bulbs and worms, and eats fallen fruit, eggs and small animals.',
      cs: 'Rypákem ryje v zemi a hledá kořínky, hlízy a žížaly. Jí také spadané ovoce, vejce a malá zvířata.',
    },
    predators: {
      en: 'Leopards and big pythons hunt it. The piglets can also be caught by eagles and wild cats.',
      cs: 'Loví ho levharti a velké krajty. Selátka mohou ulovit i orli a divoké kočky.',
    },
  },
  {
    id: 'pygmy-hippopotamus',
    name: { en: 'Pygmy hippopotamus', cs: 'Hrošík liberijský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: hippopotamidae,
      genus: 'Choeropsis',
      species: 'Choeropsis liberiensis',
    },
    habitat: {
      en: 'This small, shy hippo lives alone in swamps and streams of the rainforests of West Africa, mostly in Liberia.',
      cs: 'Tenhle malý plachý hrošík žije sám v bažinách a potocích deštných pralesů západní Afriky, hlavně v Libérii.',
    },
    diet: {
      en: 'At night it eats ferns, leaves, roots and fallen fruit.',
      cs: 'V noci jí kapradiny, listy, kořínky a spadané ovoce.',
    },
    predators: {
      en: 'Leopards, pythons and crocodiles can catch it, especially the young.',
      cs: 'Ulovit ho mohou levharti, krajty a krokodýli, hlavně mláďata.',
    },
  },
  {
    id: 'gaboon-viper',
    name: { en: 'Gaboon viper', cs: 'Zmije gabunská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Viperidae', en: 'Vipers', cs: 'Zmijovití' },
      genus: 'Bitis',
      species: 'Bitis gabonica',
    },
    habitat: {
      en: 'This heavy snake lives on the floor of African rainforests. Its pattern looks just like fallen leaves, so it is hard to see.',
      cs: 'Tenhle těžký had žije na zemi v afrických deštných pralesích. Jeho kresba vypadá jako spadané listí, a tak ho skoro není vidět.',
    },
    diet: {
      en: 'It lies still and waits for rats, mice, frogs and birds. It has the longest venom fangs of any snake.',
      cs: 'Leží bez hnutí a čeká na krysy, myši, žáby a ptáky. Má nejdelší jedové zuby ze všech hadů.',
    },
    predators: {
      en: 'Few animals dare to attack it. Mongooses and birds of prey may catch young vipers.',
      cs: 'Jen málokdo si na ni troufne. Mladé zmije mohou ulovit promyky a draví ptáci.',
    },
  },
  {
    id: 'leatherback-sea-turtle',
    name: { en: 'Leatherback sea turtle', cs: 'Kožatka velká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Dermochelyidae', en: 'Leatherback turtles', cs: 'Kožatkovití' },
      genus: 'Dermochelys',
      species: 'Dermochelys coriacea',
    },
    habitat: {
      en: 'The biggest turtle in the world swims across the whole ocean. Many mothers lay their eggs on the beaches of Gabon.',
      cs: 'Největší želva na světě přeplouvá celé oceány. Mnoho samic klade vajíčka na plážích Gabonu.',
    },
    diet: {
      en: 'It eats almost only jellyfish, lots and lots of them.',
      cs: 'Jí skoro jenom medúzy, a to ohromné množství.',
    },
    predators: {
      en: 'Big sharks and killer whales may attack grown-ups. Crabs, birds, dogs and fish eat the eggs and tiny babies.',
      cs: 'Dospělé želvy mohou napadnout velcí žraloci a kosatky. Vajíčka a malá mláďata sežerou krabi, ptáci, psi a ryby.',
    },
  },
  {
    id: 'whale-shark',
    name: { en: 'Whale shark', cs: 'Žralok obrovský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Orectolobiformes', en: 'Carpet sharks', cs: 'Malotlamci' },
      family: { latin: 'Rhincodontidae', en: 'Whale sharks', cs: 'Veležralokovití' },
      genus: 'Rhincodon',
      species: 'Rhincodon typus',
    },
    habitat: {
      en: 'The biggest fish in the world swims in warm seas. Young whale sharks gather every winter near Djibouti, at the mouth of the Red Sea.',
      cs: 'Největší ryba na světě plave v teplých mořích. Mladí žraloci obrovští se každou zimu scházejí u Džibutska, u vstupu do Rudého moře.',
    },
    diet: {
      en: 'Even though it is huge, it eats only tiny plankton, small fish and fish eggs that it sieves from the water.',
      cs: 'I když je obrovský, jí jen drobný plankton, malé rybky a rybí jikry, které cedí z vody.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Killer whales and big sharks may attack young ones.',
      cs: 'Dospělí žraloci nemají skoro žádné nepřátele. Mladé mohou napadnout kosatky a velcí žraloci.',
    },
  },
]
