import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const rayFinned = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }
const chondrichthyes = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals', cs: 'Sudokopytníci' }
const perissodactyla = { latin: 'Perissodactyla', en: 'Odd-toed hoofed mammals', cs: 'Lichokopytníci' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const primates = { latin: 'Primates', en: 'Primates', cs: 'Primáti' }
const bovidae = { latin: 'Bovidae', en: 'Cattle, antelopes and goats', cs: 'Turovití' }
const equidae = { latin: 'Equidae', en: 'Horses, donkeys and zebras', cs: 'Koňovití' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }
const testudines = { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' }

const viverridae = { latin: 'Viverridae', en: 'Civets and genets', cs: 'Cibetkovití' }
const eupleridae = { latin: 'Eupleridae', en: 'Malagasy carnivorans', cs: 'Šelmy madagaskarské' }
const nandiniidae = { latin: 'Nandiniidae', en: 'African palm civet', cs: 'Nandiniovití' }

export const moreContent: AnimalContent[] = [
  // ——— North ———
  {
    id: 'barbary-sheep',
    name: { en: 'Barbary sheep', cs: 'Paovce hřivnatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Ammotragus',
      species: 'Ammotragus lervia',
    },
    habitat: {
      en: 'It lives on dry, rocky mountains in the Sahara Desert. It is a great climber and jumps easily from rock to rock.',
      cs: 'Žije na suchých skalnatých horách na Sahaře. Skvěle šplhá a lehce skáče z kamene na kámen.',
    },
    diet: {
      en: 'It eats grass, dry bushes and leaves. It can go a long time without drinking and gets water from the plants it eats.',
      cs: 'Jí trávu, suché keře a listí. Dlouho vydrží bez pití, protože vodu získává z rostlin, které spase.',
    },
    predators: {
      en: 'Leopards and caracals sometimes hunt it. Its sandy colour helps it hide among the rocks.',
      cs: 'Občas ji loví levharti a karakalové. Pískově hnědá srst jí pomáhá schovat se mezi skalami.',
    },
  },
  {
    id: 'nile-monitor',
    name: { en: 'Nile monitor', cs: 'Varan nilský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Varanidae', en: 'Monitor lizards', cs: 'Varanovití' },
      genus: 'Varanus',
      species: 'Varanus niloticus',
    },
    habitat: {
      en: 'This big lizard lives near rivers and lakes all over Africa, like the long river Nile. It swims very well.',
      cs: 'Tenhle velký ještěr žije u řek a jezer skoro po celé Africe, třeba u dlouhé řeky Nil. Výborně plave.',
    },
    diet: {
      en: 'It eats fish, frogs, crabs, snails, birds and eggs. It even digs up crocodile eggs to eat.',
      cs: 'Jí ryby, žáby, kraby, šneky, ptáky a vejce. Umí vyhrabat a sníst i krokodýlí vejce.',
    },
    predators: {
      en: 'Crocodiles, big snakes and eagles can catch it. When in danger, it whips its long tail and bites.',
      cs: 'Chytit ho může krokodýl, velký had nebo orel. Když mu hrozí nebezpečí, švihá dlouhým ocasem a kouše.',
    },
  },
  {
    id: 'devil-firefish',
    name: { en: 'Devil firefish', cs: 'Perutýn žoldnéř' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Scorpaeniformes', en: 'Scorpionfishes and relatives', cs: 'Ropušnicotvární' },
      family: { latin: 'Scorpaenidae', en: 'Scorpionfishes', cs: 'Ropušnicovití' },
      genus: 'Pterois',
      species: 'Pterois miles',
    },
    habitat: {
      en: 'It lives on colourful coral reefs in the warm Red Sea and Indian Ocean. It likes to hide in caves during the day.',
      cs: 'Žije na barevných korálových útesech v teplém Rudém moři a Indickém oceánu. Přes den se rád schovává v jeskyňkách.',
    },
    diet: {
      en: 'It hunts small fish and shrimps. It spreads its big fins like a fan and then gulps its prey in one go.',
      cs: 'Loví malé rybky a krevety. Roztáhne velké ploutve jako vějíř a kořist pak spolkne naráz.',
    },
    predators: {
      en: 'Its striped spines are poisonous, so almost nobody eats it. Sometimes big groupers or sharks do.',
      cs: 'Jeho pruhované ostny jsou jedovaté, a tak ho skoro nikdo nejí. Jen občas ho sežere velký kanic nebo žralok.',
    },
  },
  {
    id: 'black-crowned-crane',
    name: { en: 'Black crowned crane', cs: 'Jeřáb paví' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Gruiformes', en: 'Cranes and rails', cs: 'Krátkokřídlí' },
      family: { latin: 'Gruidae', en: 'Cranes', cs: 'Jeřábovití' },
      genus: 'Balearica',
      species: 'Balearica pavonina',
    },
    habitat: {
      en: 'It lives in wet grasslands and near rivers and swamps south of the Sahara. It wears a golden crown of feathers on its head.',
      cs: 'Žije na vlhkých loukách a u řek a bažin jižně od Sahary. Na hlavě nosí zlatou korunku z peří.',
    },
    diet: {
      en: 'It eats seeds, grass, frogs, insects and small lizards. It stamps its feet to scare bugs out of the grass.',
      cs: 'Jí semínka, trávu, žáby, hmyz a malé ještěrky. Dupe nohama, aby vyplašil broučky z trávy.',
    },
    predators: {
      en: 'Big cats, jackals and eagles may catch it. Its eggs and chicks are eaten by foxes, mongooses and monitor lizards.',
      cs: 'Ulovit ho může velká kočkovitá šelma, šakal nebo orel. Vejce a mláďata sežerou lišky, promyky a varani.',
    },
  },
  {
    id: 'african-wild-ass',
    name: { en: 'African wild ass', cs: 'Osel africký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: perissodactyla,
      family: equidae,
      genus: 'Equus',
      species: 'Equus africanus',
    },
    habitat: {
      en: 'It lives in very hot, stony deserts in Eritrea, Ethiopia and Somalia. It is the wild grandparent of our tame donkeys.',
      cs: 'Žije ve velmi horkých kamenitých pouštích v Eritreji, Etiopii a Somálsku. Je to divoký předek našich domácích oslíků.',
    },
    diet: {
      en: 'It eats tough grass, bark and leaves. It can go without water for a few days.',
      cs: 'Jí tvrdou trávu, kůru a listí. Bez vody vydrží i několik dní.',
    },
    predators: {
      en: 'Lions and hyenas sometimes hunt it. It runs fast and kicks hard with its hooves.',
      cs: 'Občas ho loví lvi a hyeny. Rychle běhá a kopytem pořádně kopne.',
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
      en: 'It lives in bushes, reeds and near rivers in North Africa and in much of the rest of Africa. It also lives in Spain.',
      cs: 'Žije v křovinách, rákosí a u řek v severní Africe i ve velké části zbytku Afriky. Najdeme ji dokonce i ve Španělsku.',
    },
    diet: {
      en: 'It eats mice, rabbits, lizards, frogs, eggs and insects. It is brave and even fights and eats snakes.',
      cs: 'Jí myši, králíky, ještěrky, žáby, vejce a hmyz. Je odvážná a umí přemoct a sníst i hada.',
    },
    predators: {
      en: 'Eagles, big owls, leopards and jackals may catch it. It runs away quickly into thick bushes.',
      cs: 'Chytit ji může orel, velká sova, levhart nebo šakal. Rychle před nimi uteče do hustého křoví.',
    },
  },
  // ——— Middle ———
  {
    id: 'serval',
    name: { en: 'Serval', cs: 'Serval' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Leptailurus',
      species: 'Leptailurus serval',
    },
    habitat: {
      en: 'This spotted cat lives in tall grass and near wetlands in the savannas of Africa. It has very long legs and huge ears.',
      cs: 'Tahle skvrnitá kočka žije ve vysoké trávě a u mokřadů na afrických savanách. Má moc dlouhé nohy a obrovské uši.',
    },
    diet: {
      en: 'It listens for mice, rats, frogs and birds in the grass. Then it jumps high and pounces on them.',
      cs: 'Poslouchá, kde v trávě šustí myši, krysy, žáby a ptáci. Pak vysoko vyskočí a skočí na ně.',
    },
    predators: {
      en: 'Leopards, hyenas and wild dogs sometimes catch it. Its kittens are also eaten by eagles and pythons.',
      cs: 'Občas ho chytí levhart, hyeny nebo psi hyenovití. Koťata mohou ulovit i orli a krajty.',
    },
  },
  {
    id: 'common-warthog',
    name: { en: 'Common warthog', cs: 'Prase savanové' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Suidae', en: 'Pigs', cs: 'Prasatovití' },
      genus: 'Phacochoerus',
      species: 'Phacochoerus africanus',
    },
    habitat: {
      en: 'It lives on the open savannas of Africa and sleeps in holes dug by aardvarks. When it runs, its tail sticks straight up.',
      cs: 'Žije na otevřených afrických savanách a spí v norách, které vyhrabali hrabáči. Když běží, ocásek mu trčí rovně nahoru.',
    },
    diet: {
      en: 'It eats grass, roots and bulbs. It kneels on its front knees to eat short grass.',
      cs: 'Jí trávu, kořínky a hlízy. Když spásá nízkou trávu, klekne si na přední kolena.',
    },
    predators: {
      en: 'Lions, leopards, cheetahs, hyenas and crocodiles hunt it. It fights back with its sharp tusks.',
      cs: 'Loví ho lvi, levharti, gepardi, hyeny a krokodýli. Brání se ostrými kly.',
    },
  },
  {
    id: 'bongo',
    name: { en: 'Bongo', cs: 'Bongo lesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Tragelaphus',
      species: 'Tragelaphus eurycerus',
    },
    habitat: {
      en: 'This shy antelope lives in thick rainforests of Central and West Africa. Its orange-brown coat has white stripes.',
      cs: 'Tahle plachá antilopa žije v hustých deštných pralesích střední a západní Afriky. Má rezavě hnědou srst s bílými pruhy.',
    },
    diet: {
      en: 'It eats leaves, flowers, twigs and fruit. It even licks salty mud to get minerals.',
      cs: 'Jí listy, květy, větvičky a ovoce. Olizuje i slané bláto, aby získala minerály.',
    },
    predators: {
      en: 'Leopards and big pythons hunt it. Its calves can be caught by hyenas too.',
      cs: 'Loví ji levharti a velké krajty. Mláďata mohou ulovit i hyeny.',
    },
  },
  {
    id: 'mantled-guereza',
    name: { en: 'Mantled guereza', cs: 'Gueréza pláštíková' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Cercopithecidae', en: 'Old World monkeys', cs: 'Kočkodanovití' },
      genus: 'Colobus',
      species: 'Colobus guereza',
    },
    habitat: {
      en: 'This black-and-white monkey lives high in the trees of African forests. It has a long white cape of fur and a fluffy tail.',
      cs: 'Tahle černobílá opice žije vysoko v korunách stromů afrických lesů. Má dlouhý bílý plášť ze srsti a huňatý ocas.',
    },
    diet: {
      en: 'It eats mostly leaves, and also fruit and seeds. Its big tummy helps it digest tough leaves.',
      cs: 'Jí hlavně listí, občas i ovoce a semena. Velké bříško jí pomáhá strávit tuhé listy.',
    },
    predators: {
      en: 'Crowned eagles, leopards and chimpanzees hunt it. It leaps away through the treetops.',
      cs: 'Loví ji orel korunkatý, levharti a šimpanzi. Utíká jim dlouhými skoky po korunách stromů.',
    },
  },
  {
    id: 'grey-parrot',
    name: { en: 'Grey parrot', cs: 'Papoušek šedý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Psittaciformes', en: 'Parrots', cs: 'Papoušci' },
      family: { latin: 'Psittacidae', en: 'American and African parrots', cs: 'Papouškovití' },
      genus: 'Psittacus',
      species: 'Psittacus erithacus',
    },
    habitat: {
      en: 'It lives in noisy flocks in the rainforests of Central Africa. It is grey with a bright red tail and is very clever.',
      cs: 'Žije v hlučných hejnech v deštných pralesích střední Afriky. Je šedý s jasně červeným ocasem a je moc chytrý.',
    },
    diet: {
      en: 'It eats seeds, nuts, fruit and flowers. It loves the fruit of oil palms.',
      cs: 'Jí semena, ořechy, ovoce a květy. Nejraději má plody palmy olejné.',
    },
    predators: {
      en: 'Eagles and hawks catch it in the air. Snakes and monkeys raid its nest for eggs and chicks.',
      cs: 'Ve vzduchu ho chytají orli a jestřábi. Hadi a opice mu z hnízda kradou vejce a mláďata.',
    },
  },
  {
    id: 'senegal-bushbaby',
    name: { en: 'Senegal bushbaby', cs: 'Komba ušatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Galagidae', en: 'Bushbabies', cs: 'Kombovití' },
      genus: 'Galago',
      species: 'Galago senegalensis',
    },
    habitat: {
      en: 'This tiny animal lives in the trees of dry savannas south of the Sahara. It has huge eyes to see at night.',
      cs: 'Toto malinké zvířátko žije na stromech v suchých savanách jižně od Sahary. Má obrovské oči, aby v noci dobře viděla.',
    },
    diet: {
      en: 'At night it catches insects and licks sweet sap from acacia trees. It jumps from branch to branch like a spring.',
      cs: 'V noci chytá hmyz a olizuje sladkou mízu z akácií. Skáče z větve na větev jako pružinka.',
    },
    predators: {
      en: 'Owls, snakes, genets and wild cats hunt it. It hides in a hollow tree during the day.',
      cs: 'Loví ji sovy, hadi, ženetky a divoké kočky. Přes den se schovává v dutém stromě.',
    },
  },
  {
    id: 'african-manatee',
    name: { en: 'African manatee', cs: 'Kapustňák senegalský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' },
      family: { latin: 'Trichechidae', en: 'Manatees', cs: 'Kapustňákovití' },
      genus: 'Trichechus',
      species: 'Trichechus senegalensis',
    },
    habitat: {
      en: 'This big, gentle animal lives in warm coastal waters, lagoons and rivers of West Africa. It swims slowly and calmly.',
      cs: 'Toto velké mírné zvíře žije v teplém pobřežním moři, lagunách a řekách západní Afriky. Plave pomalu a klidně.',
    },
    diet: {
      en: 'It eats water plants, sea grass and leaves of mangrove trees that hang into the water.',
      cs: 'Jí vodní rostliny, mořskou trávu a listy mangrovníků, které visí do vody.',
    },
    predators: {
      en: 'Adults have almost no enemies. Crocodiles and sharks sometimes catch a young one.',
      cs: 'Dospělí nemají skoro žádné nepřátele. Mládě občas chytí krokodýl nebo žralok.',
    },
  },
  {
    id: 'aardvark',
    name: { en: 'Aardvark', cs: 'Hrabáč kapský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Tubulidentata', en: 'Aardvarks', cs: 'Hrabáči' },
      family: { latin: 'Orycteropodidae', en: 'Aardvarks', cs: 'Hrabáčovití' },
      genus: 'Orycteropus',
      species: 'Orycteropus afer',
    },
    habitat: {
      en: 'It lives in savannas and grasslands all over Africa south of the Sahara. It digs deep burrows with its strong claws.',
      cs: 'Žije na savanách a travnatých pláních po celé Africe jižně od Sahary. Silnými drápy si hrabe hluboké nory.',
    },
    diet: {
      en: 'At night it breaks open termite and ant nests and licks them up with its long, sticky tongue.',
      cs: 'V noci rozhrabe hnízda termitů a mravenců a vylíže je dlouhým lepkavým jazykem.',
    },
    predators: {
      en: 'Lions, leopards, hyenas and pythons hunt it. It can dig itself into the ground very fast to escape.',
      cs: 'Loví ho lvi, levharti, hyeny a krajty. Umí se před nimi bleskově zahrabat do země.',
    },
  },
  {
    id: 'grevys-zebra',
    name: { en: "Grévy's zebra", cs: 'Zebra Grévyho' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: perissodactyla,
      family: equidae,
      genus: 'Equus',
      species: 'Equus grevyi',
    },
    habitat: {
      en: 'It lives in dry grasslands in northern Kenya and Ethiopia. It is the biggest zebra, with thin stripes and big round ears.',
      cs: 'Žije na suchých travnatých pláních v severní Keni a Etiopii. Je to největší zebra s tenkými pruhy a velkýma kulatýma ušima.',
    },
    diet: {
      en: 'It eats tough grass and some leaves. It can go without water for several days.',
      cs: 'Jí tvrdou trávu a trochu listí. Bez vody vydrží i několik dní.',
    },
    predators: {
      en: 'Lions and hyenas hunt it. Its foals can also be caught by leopards, cheetahs and wild dogs.',
      cs: 'Loví ji lvi a hyeny. Hříbata mohou ulovit i levharti, gepardi a psi hyenovití.',
    },
  },
  {
    id: 'gerenuk',
    name: { en: 'Gerenuk', cs: 'Antilopa žirafí' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Litocranius',
      species: 'Litocranius walleri',
    },
    habitat: {
      en: 'This antelope with a very long neck lives in dry bushland in Somalia, Ethiopia, Kenya and Tanzania.',
      cs: 'Tahle antilopa s velmi dlouhým krkem žije v suchých křovinách v Somálsku, Etiopii, Keni a Tanzanii.',
    },
    diet: {
      en: 'It stands up on its back legs to reach leaves high in thorny bushes. It almost never needs to drink.',
      cs: 'Staví se na zadní nohy, aby dosáhla na listy vysoko v trnitých keřích. Skoro nikdy nepotřebuje pít.',
    },
    predators: {
      en: 'Lions, leopards, cheetahs, hyenas and wild dogs hunt it. Eagles and jackals may take its babies.',
      cs: 'Loví ji lvi, levharti, gepardi, hyeny a psi hyenovití. Mláďata mohou ulovit orli a šakalové.',
    },
  },
  {
    id: 'bat-eared-fox',
    name: { en: 'Bat-eared fox', cs: 'Pes ušatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Otocyon',
      species: 'Otocyon megalotis',
    },
    habitat: {
      en: 'It lives in dry grasslands in East Africa and in southern Africa. Its huge ears help it hear insects and keep cool.',
      cs: 'Žije na suchých travnatých pláních ve východní a jižní Africe. Obrovské uši mu pomáhají slyšet hmyz a chladit se.',
    },
    diet: {
      en: 'It mostly eats termites and beetles. It also eats scorpions, mice, lizards and fruit.',
      cs: 'Jí hlavně termity a brouky. Pochutná si i na štírech, myších, ještěrkách a ovoci.',
    },
    predators: {
      en: 'Eagles, jackals, hyenas, leopards and pythons hunt it. It escapes by running in zigzags.',
      cs: 'Loví ho orli, šakalové, hyeny, levharti a krajty. Uniká jim během kličkováním.',
    },
  },
  // ——— South ———
  {
    id: 'aardwolf',
    name: { en: 'Aardwolf', cs: 'Hyenka hřivnatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Hyaenidae', en: 'Hyenas', cs: 'Hyenovití' },
      genus: 'Proteles',
      species: 'Proteles cristatus',
    },
    habitat: {
      en: 'It lives on open grasslands in southern and eastern Africa. It sleeps in a burrow during the day.',
      cs: 'Žije na otevřených travnatých pláních v jižní a východní Africe. Přes den spí v noře.',
    },
    diet: {
      en: 'It is a small hyena that eats termites, not meat. It can lick up thousands of termites in one night!',
      cs: 'Je to malá hyena, která nejí maso, ale termity. Za jedinou noc jich vylíže celé tisíce!',
    },
    predators: {
      en: 'Jackals, leopards, lions and big snakes can hunt it. When scared, it raises its mane to look bigger.',
      cs: 'Ulovit ji může šakal, levhart, lev nebo velký had. Když se lekne, naježí hřívu, aby vypadala větší.',
    },
  },
  {
    id: 'leopard-tortoise',
    name: { en: 'Leopard tortoise', cs: 'Želva pardálí' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Stigmochelys',
      species: 'Stigmochelys pardalis',
    },
    habitat: {
      en: 'It lives on dry grasslands and savannas in southern and eastern Africa. Its shell has spots like a leopard.',
      cs: 'Žije na suchých travnatých pláních a savanách v jižní a východní Africe. Její krunýř je skvrnitý jako levhart.',
    },
    diet: {
      en: 'It eats grass, flowers, juicy cactus plants and fruit. It also chews old bones to get calcium for its shell.',
      cs: 'Jí trávu, květy, šťavnaté kaktusy a ovoce. Okusuje i staré kosti, aby měla dost vápníku pro krunýř.',
    },
    predators: {
      en: 'Big adults are safe in their shells. Young tortoises are eaten by jackals, crows, honey badgers and monitor lizards.',
      cs: 'Velké želvy jsou v krunýři v bezpečí. Mladé želvičky ale sežerou šakalové, vrány, medojedi a varani.',
    },
  },
  {
    id: 'springbok',
    name: { en: 'Springbok', cs: 'Antilopa skákavá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Antidorcas',
      species: 'Antidorcas marsupialis',
    },
    habitat: {
      en: 'It lives in big herds on dry plains and in the Kalahari Desert in southern Africa.',
      cs: 'Žije ve velkých stádech na suchých pláních a v poušti Kalahari na jihu Afriky.',
    },
    diet: {
      en: 'It eats grass, leaves and flowers. It can live without drinking because its food has enough water.',
      cs: 'Jí trávu, listy a květy. Vydrží i bez pití, protože má dost vody v potravě.',
    },
    predators: {
      en: 'Cheetahs, lions, leopards, hyenas and wild dogs hunt it. It jumps high into the air with an arched back to show off.',
      cs: 'Loví ji gepardi, lvi, levharti, hyeny a psi hyenovití. Aby se předvedla, vyskakuje vysoko do vzduchu s prohnutými zády.',
    },
  },
  {
    id: 'rock-hyrax',
    name: { en: 'Rock hyrax', cs: 'Daman skalní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Hyracoidea', en: 'Hyraxes', cs: 'Damani' },
      family: { latin: 'Procaviidae', en: 'Hyraxes', cs: 'Damanovití' },
      genus: 'Procavia',
      species: 'Procavia capensis',
    },
    habitat: {
      en: 'This furry animal lives in groups among rocks and cliffs in much of Africa. It loves sunbathing on warm stones.',
      cs: 'Toto chlupaté zvířátko žije ve skupinách mezi kameny a skalami ve velké části Afriky. Moc rádo se vyhřívá na teplých kamenech.',
    },
    diet: {
      en: 'It eats grass, leaves, fruit and flowers. Although it looks like a big guinea pig, its closest relatives are elephants!',
      cs: 'Jí trávu, listy, ovoce a květy. Vypadá jako velké morče, ale jeho nejbližšími příbuznými jsou sloni!',
    },
    predators: {
      en: 'Eagles, leopards, caracals, jackals and snakes hunt it. One hyrax keeps watch and whistles when danger comes.',
      cs: 'Loví ho orli, levharti, karakalové, šakalové a hadi. Jeden daman vždy hlídá a při nebezpečí zapíská.',
    },
  },
  {
    id: 'ground-pangolin',
    name: { en: 'Ground pangolin', cs: 'Luskoun stepní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Pholidota', en: 'Pangolins', cs: 'Luskouni' },
      family: { latin: 'Manidae', en: 'Pangolins', cs: 'Luskounovití' },
      genus: 'Smutsia',
      species: 'Smutsia temminckii',
    },
    habitat: {
      en: 'It lives in savannas and dry woodlands in southern and eastern Africa. Its body is covered in hard scales like a pine cone.',
      cs: 'Žije na savanách a v suchých lesích na jihu a východě Afriky. Tělo má pokryté tvrdými šupinami jako šiška.',
    },
    diet: {
      en: 'It eats ants and termites. It sniffs them out and licks them up with a tongue longer than its body.',
      cs: 'Jí mravence a termity. Vyčenichá je a vylíže jazykem, který je delší než celé jeho tělo.',
    },
    predators: {
      en: 'When in danger, it rolls into a tight scaly ball. Even lions and hyenas can hardly open it.',
      cs: 'Když mu hrozí nebezpečí, stočí se do pevné šupinaté koule. Tu nedokážou rozlousknout ani lvi a hyeny.',
    },
  },
  {
    id: 'honey-badger',
    name: { en: 'Honey badger', cs: 'Medojed kapský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Mustelidae', en: 'Weasels, otters and badgers', cs: 'Lasicovití' },
      genus: 'Mellivora',
      species: 'Mellivora capensis',
    },
    habitat: {
      en: 'It lives almost everywhere in Africa, from deserts to forests, and also in Asia. It is small but very brave.',
      cs: 'Žije skoro všude v Africe, od pouští až po lesy, a také v Asii. Je malý, ale moc odvážný.',
    },
    diet: {
      en: 'It eats honey and bee babies, and also mice, lizards, scorpions and even snakes.',
      cs: 'Jí med a včelí larvy, ale i myši, ještěrky, štíry a dokonce hady.',
    },
    predators: {
      en: 'It has thick, loose skin and fights fiercely, so few animals dare to attack it. Sometimes lions or leopards do.',
      cs: 'Má tlustou volnou kůži a divoce se bije, a tak si na něj troufne málokdo. Jen občas lev nebo levhart.',
    },
  },
  {
    id: 'giant-manta-ray',
    name: { en: 'Giant oceanic manta ray', cs: 'Manta obrovská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Myliobatiformes', en: 'Stingrays and relatives', cs: 'Trnuchotvární' },
      family: { latin: 'Mobulidae', en: 'Manta and devil rays', cs: 'Mantovití' },
      genus: 'Mobula',
      species: 'Mobula birostris',
    },
    habitat: {
      en: 'It glides through warm oceans all over the world, like the sea off Mozambique. Its wide fins look like giant wings.',
      cs: 'Plachtí teplými oceány po celém světě, třeba v moři u Mosambiku. Její široké ploutve vypadají jako obří křídla.',
    },
    diet: {
      en: 'It swims with its mouth wide open and filters tiny plankton and little fish from the water.',
      cs: 'Plave s doširoka otevřenou tlamou a cedí z vody drobný plankton a malé rybky.',
    },
    predators: {
      en: 'Adults are so big that only large sharks and orcas sometimes attack them.',
      cs: 'Dospělé manty jsou tak velké, že je občas napadnou jen velcí žraloci a kosatky.',
    },
  },
  {
    id: 'cape-fur-seal',
    name: { en: 'Cape fur seal', cs: 'Lachtan jihoafrický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Otariidae', en: 'Eared seals', cs: 'Lachtanovití' },
      genus: 'Arctocephalus',
      species: 'Arctocephalus pusillus',
    },
    habitat: {
      en: 'It lives in huge, noisy colonies on rocky shores and beaches of Namibia and South Africa.',
      cs: 'Žije v obrovských hlučných koloniích na skalnatých pobřežích a plážích Namibie a Jižní Afriky.',
    },
    diet: {
      en: 'It dives into the cold sea to catch fish, squid and crabs.',
      cs: 'Potápí se do studeného moře a loví ryby, olihně a kraby.',
    },
    predators: {
      en: 'Great white sharks and orcas hunt it in the sea. On the beach, jackals and brown hyenas steal its pups.',
      cs: 'V moři ho loví velcí bílí žraloci a kosatky. Na pláži mu mláďata kradou šakalové a hyeny hnědé.',
    },
  },
  {
    id: 'aye-aye',
    name: { en: 'Aye-aye', cs: 'Ksukol ocasatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Daubentoniidae', en: 'Aye-ayes', cs: 'Ksukolovití' },
      genus: 'Daubentonia',
      species: 'Daubentonia madagascariensis',
    },
    habitat: {
      en: 'It lives in the rainforests of Madagascar and comes out only at night. It has big eyes, big ears and a bushy tail.',
      cs: 'Žije v deštných pralesích na Madagaskaru a vychází jen v noci. Má velké oči, velké uši a huňatý ocas.',
    },
    diet: {
      en: 'It taps on trees with its very long, thin middle finger, listens for grubs inside, and pulls them out. It also eats coconuts.',
      cs: 'Ťuká na stromy dlouhým tenkým prostředníčkem, poslouchá, kde jsou uvnitř larvy, a vytáhne je. Jí i kokosy.',
    },
    predators: {
      en: 'The fossa is its main enemy. Snakes and birds of prey may catch young ones.',
      cs: 'Jeho hlavním nepřítelem je fosa. Mláďata mohou chytit i hadi a draví ptáci.',
    },
  },
  {
    id: 'verreauxs-sifaka',
    name: { en: "Verreaux's sifaka", cs: 'Sifaka malý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Indriidae', en: 'Indris and sifakas', cs: 'Indriovití' },
      genus: 'Propithecus',
      species: 'Propithecus verreauxi',
    },
    habitat: {
      en: 'This white lemur lives in dry, spiny forests in the south-west of Madagascar. It leaps huge distances between trees.',
      cs: 'Tenhle bílý lemur žije v suchých trnitých lesích na jihozápadě Madagaskaru. Mezi stromy skáče obrovské skoky.',
    },
    diet: {
      en: 'It eats leaves, flowers, fruit and bark. When it crosses open ground, it hops sideways on its back legs like a dancer.',
      cs: 'Jí listy, květy, ovoce a kůru. Když přechází po zemi, poskakuje bokem po zadních nohou jako tanečník.',
    },
    predators: {
      en: 'The fossa hunts it in the trees. Hawks and big snakes may catch its babies.',
      cs: 'Na stromech ho loví fosa. Mláďata mohou ulovit jestřábi a velcí hadi.',
    },
  },
  // ---------- civets and relatives ----------
  {
    id: 'african-civet',
    name: { en: 'African civet', cs: 'Cibetka africká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: viverridae,
      genus: 'Civettictis',
      species: 'Civettictis civetta',
    },
    habitat: {
      en: 'It lives in savannas and bushy forests across much of Africa, here in Zambia. It comes out at night and has a black mask like a raccoon.',
      cs: 'Žije v savanách a křovinatých lesích ve velké části Afriky, třeba v Zambii. Vychází v noci a na obličeji má černou masku jako mýval.',
    },
    diet: {
      en: 'It eats almost anything: mice, frogs, insects, eggs, fruit and even poisonous millipedes.',
      cs: 'Jí skoro všechno: myši, žáby, hmyz, vejce, ovoce a dokonce i jedovaté mnohonožky.',
    },
    predators: {
      en: 'Lions, leopards and big pythons may catch it. When scared, it lifts the long hair on its back to look bigger.',
      cs: 'Může ji ulovit lev, levhart nebo velká krajta. Když se lekne, naježí dlouhé chlupy na zádech, aby vypadala větší.',
    },
  },
  {
    id: 'cape-genet',
    name: { en: 'Cape genet', cs: 'Ženetka skvrnitá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: viverridae,
      genus: 'Genetta',
      species: 'Genetta tigrina',
    },
    habitat: {
      en: 'It lives in bushes and forests in the south of South Africa. It looks like a slim spotted cat with a long striped tail.',
      cs: 'Žije v křovinách a lesích na jihu Jihoafrické republiky. Vypadá jako štíhlá skvrnitá kočka s dlouhým pruhovaným ocasem.',
    },
    diet: {
      en: 'At night it hunts mice, birds, lizards, frogs and insects. It climbs trees very well.',
      cs: 'V noci loví myši, ptáky, ještěrky, žáby a hmyz. Výborně šplhá po stromech.',
    },
    predators: {
      en: 'Leopards, caracals, eagle-owls and big snakes may catch it.',
      cs: 'Může ji ulovit levhart, karakal, výr nebo velký had.',
    },
  },
  {
    id: 'african-palm-civet',
    name: { en: 'African palm civet', cs: 'Nandinie znamenaná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: nandiniidae,
      genus: 'Nandinia',
      species: 'Nandinia binotata',
    },
    habitat: {
      en: 'It lives high in the trees of rainforests in West and Central Africa. It has two small pale spots on its shoulders.',
      cs: 'Žije vysoko na stromech v deštných pralesích západní a střední Afriky. Na ramenou má dvě malé světlé skvrnky.',
    },
    diet: {
      en: 'It mostly eats ripe fruit, and also rodents, birds, eggs and insects.',
      cs: 'Jí hlavně zralé ovoce, ale také hlodavce, ptáky, vejce a hmyz.',
    },
    predators: {
      en: 'Leopards, big snakes and crowned eagles may catch it.',
      cs: 'Může ji ulovit levhart, velký had nebo orel korunový.',
    },
  },
  {
    id: 'malagasy-civet',
    name: { en: 'Malagasy civet', cs: 'Fanaloka' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: eupleridae,
      genus: 'Fossa',
      species: 'Fossa fossana',
    },
    habitat: {
      en: 'It lives only in the rainforests of Madagascar, near streams. It has rows of dark spots and comes out at night.',
      cs: 'Žije jen v deštných pralesích Madagaskaru, blízko potoků. Má řady tmavých skvrn a vychází v noci.',
    },
    diet: {
      en: 'It eats mice, frogs, crabs, eels, insects and bird eggs. Before winter it stores fat in its tail.',
      cs: 'Jí myši, žáby, kraby, úhoře, hmyz a ptačí vejce. Na zimu si do ocasu ukládá tuk.',
    },
    predators: {
      en: 'The fossa and big boas may hunt it. Dogs brought by people are dangerous for it too.',
      cs: 'Lovit ji může fosa a velcí hroznýši. Nebezpeční jsou pro ni i psi, které přivezli lidé.',
    },
  },
]
