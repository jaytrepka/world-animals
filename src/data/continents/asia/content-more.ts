import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, reptiles, amphibians, rayFinned,
  carnivora, artiodactyla, artiodactylaWhales, perissodactyla, primates, caudata, crocodilia, testudines,
  felidae, ursidae, canidae, bovidae, cercopithecidae,
} from './taxa'

const lagomorpha = { latin: 'Lagomorpha', en: 'Rabbits, hares and pikas', cs: 'Zajícovci' }
const rodentia = { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' }
const chiroptera = { latin: 'Chiroptera', en: 'Bats', cs: 'Letouni' }
const anura = { latin: 'Anura', en: 'Frogs and toads', cs: 'Žáby' }
const phocoenidae = { latin: 'Phocoenidae', en: 'Porpoises', cs: 'Sviňuchovití' }
const delphinidae = { latin: 'Delphinidae', en: 'Oceanic dolphins', cs: 'Delfínovití' }

export const moreContent: AnimalContent[] = [
  // ---------- north ----------
  {
    id: 'bowhead-whale',
    name: { en: 'Bowhead whale', cs: 'Velryba grónská' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactylaWhales,
      family: { latin: 'Balaenidae', en: 'Right whales', cs: 'Velrybovití' },
      genus: 'Balaena',
      species: 'Balaena mysticetus',
    },
    habitat: {
      en: 'It lives in icy Arctic seas and spends the winter in the Bering Sea. It can break thick ice with its huge head and live for 200 years.',
      cs: 'Žije v ledových arktických mořích a zimu tráví v Beringově moři. Obrovskou hlavou prorazí i silný led a může se dožít až 200 let.',
    },
    diet: {
      en: 'It swims with its mouth open and strains millions of tiny shrimp-like animals from the water.',
      cs: 'Plave s otevřenou tlamou a z vody si procedí miliony drobných korýšů.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Orcas sometimes attack the young ones.',
      cs: 'Dospělé velryby nemají skoro žádné nepřátele. Kosatky ale občas napadnou mláďata.',
    },
  },
  {
    id: 'raccoon-dog',
    name: { en: 'Common raccoon dog', cs: 'Psík mývalovitý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: canidae,
      genus: 'Nyctereutes',
      species: 'Nyctereutes procyonoides',
    },
    habitat: {
      en: 'It lives in forests and by rivers along the Amur River in the Far East. It looks like a raccoon, but it is a wild dog that sleeps through cold winters.',
      cs: 'Žije v lesích a u řek v okolí řeky Amur na Dálném východě. Vypadá jako mýval, ale je to divoký pes, který v zimě hodně spí.',
    },
    diet: {
      en: 'It eats almost anything: mice, frogs, fish, eggs, berries and fallen fruit.',
      cs: 'Sní skoro všechno: myši, žáby, ryby, vajíčka, bobule i spadané ovoce.',
    },
    predators: {
      en: 'Wolves, lynxes and tigers can hunt it. Big eagles and owls can catch the pups.',
      cs: 'Mohou ho ulovit vlci, rysové a tygři. Štěňata mohou chytit velcí orli a výři.',
    },
  },
  {
    id: 'argali',
    name: { en: 'Argali', cs: 'Argali altajský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Ovis',
      species: 'Ovis ammon',
    },
    habitat: {
      en: 'It lives on high, windy mountains and hills of the Altai. It is the biggest wild sheep in the world, and the male has huge curled horns.',
      cs: 'Žije ve vysokých větrných horách a kopcích Altaje. Je to největší divoká ovce na světě a samec má obrovské stočené rohy.',
    },
    diet: {
      en: 'It grazes on grasses, herbs and small bushes.',
      cs: 'Spásá trávu, byliny a nízké keříky.',
    },
    predators: {
      en: 'Wolves and snow leopards hunt it. Golden eagles can catch the lambs.',
      cs: 'Loví ho vlci a sněžní levharti. Jehňata mohou chytit orli skalní.',
    },
  },
  {
    id: 'northern-pika',
    name: { en: 'Northern pika', cs: 'Pišťucha severní' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: lagomorpha,
      family: { latin: 'Ochotonidae', en: 'Pikas', cs: 'Pišťuchovití' },
      genus: 'Ochotona',
      species: 'Ochotona hyperborea',
    },
    habitat: {
      en: 'It lives among rocks in the mountains and forests of Siberia. This little cousin of the rabbit has round ears and squeaks loudly.',
      cs: 'Žije mezi kameny v horách a lesích Sibiře. Tahle malá příbuzná králíka má kulaté uši a hlasitě piští.',
    },
    diet: {
      en: 'It eats grass, leaves and moss. In summer it dries piles of hay to eat in winter.',
      cs: 'Jí trávu, listy a mech. V létě si suší hromádky sena na zimu.',
    },
    predators: {
      en: 'Sables, weasels, foxes and owls hunt it.',
      cs: 'Loví ji sobolové, lasice, lišky a sovy.',
    },
  },
  {
    id: 'snow-sheep',
    name: { en: 'Snow sheep', cs: 'Ovce sněžná' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Ovis',
      species: 'Ovis nivicola',
    },
    habitat: {
      en: 'It lives on cold, rocky mountains in the far north-east of Siberia. Its thick coat keeps it warm in the snow.',
      cs: 'Žije v chladných skalnatých horách na dalekém severovýchodě Sibiře. Hustá srst ji ve sněhu dobře hřeje.',
    },
    diet: {
      en: 'It eats grass, moss and lichens. In winter it digs them out from under the snow.',
      cs: 'Jí trávu, mech a lišejníky. V zimě je vyhrabává zpod sněhu.',
    },
    predators: {
      en: 'Wolves, wolverines, lynxes and bears hunt it. Golden eagles can catch the lambs.',
      cs: 'Loví ji vlci, rosomáci, rysové a medvědi. Jehňata mohou chytit orli skalní.',
    },
  },
  {
    id: 'bobak-marmot',
    name: { en: 'Bobak marmot', cs: 'Svišť stepní' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: rodentia,
      family: { latin: 'Sciuridae', en: 'Squirrels and marmots', cs: 'Veverkovití' },
      genus: 'Marmota',
      species: 'Marmota bobak',
    },
    habitat: {
      en: 'It lives in big families in burrows on the grassy steppes of Kazakhstan. It whistles loudly to warn the others and sleeps through the whole winter.',
      cs: 'Žije ve velkých rodinách v norách na travnatých stepích Kazachstánu. Hlasitým pískáním varuje ostatní a celou zimu prospí.',
    },
    diet: {
      en: 'It eats grasses, flowers, leaves and roots.',
      cs: 'Jí trávu, květy, listy a kořínky.',
    },
    predators: {
      en: 'Wolves, foxes, badgers and eagles hunt it.',
      cs: 'Loví ho vlci, lišky, jezevci a orli.',
    },
  },
  {
    id: 'siberian-sturgeon',
    name: { en: 'Siberian sturgeon', cs: 'Jeseter sibiřský' },
    classification: {
      kingdom, phylum: chordata, class: rayFinned,
      order: { latin: 'Acipenseriformes', en: 'Sturgeons and paddlefishes', cs: 'Jeseteři' },
      family: { latin: 'Acipenseridae', en: 'Sturgeons', cs: 'Jeseterovití' },
      genus: 'Acipenser',
      species: 'Acipenser baerii',
    },
    habitat: {
      en: 'It lives in the big rivers of Siberia, like the Ob. It has bony plates on its back instead of scales, and whiskers on its long nose.',
      cs: 'Žije ve velkých sibiřských řekách, třeba v Obu. Místo šupin má na zádech kostěné štítky a na dlouhém čenichu vousky.',
    },
    diet: {
      en: 'It feels for food on the river bottom with its whiskers and eats worms, snails, insect larvae and small fish.',
      cs: 'Vousky hledá potravu na dně řeky a jí červy, plže, larvy hmyzu a malé rybky.',
    },
    predators: {
      en: 'Big sturgeons have almost no enemies. Taimen and pike eat young ones.',
      cs: 'Velcí jeseteři nemají skoro žádné nepřátele. Mladé jesetery sežerou tajmeni a štiky.',
    },
  },

  // ---------- middle ----------
  {
    id: 'north-chinese-leopard',
    name: { en: 'North-Chinese leopard', cs: 'Levhart čínský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Panthera',
      species: 'Panthera pardus japonensis',
    },
    habitat: {
      en: 'It lives in mountain forests of northern China. Its thick golden fur has black rosettes that help it hide.',
      cs: 'Žije v horských lesích severní Číny. Má hustou zlatavou srst s černými rozetami, které ho pomáhají ukrýt.',
    },
    diet: {
      en: 'It hunts roe deer, wild boar, hares and pheasants. It often drags its food up into a tree.',
      cs: 'Loví srnce, divoká prasata, zajíce a bažanty. Kořist často vytáhne nahoru na strom.',
    },
    predators: {
      en: 'Grown-up leopards have no enemies. Wolves can kill the cubs.',
      cs: 'Dospělí levharti nemají žádné nepřátele. Mláďata ale mohou zabít vlci.',
    },
  },
  {
    id: 'markhor',
    name: { en: 'Markhor', cs: 'Koza šrouborohá' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Capra',
      species: 'Capra falconeri',
    },
    habitat: {
      en: 'It lives on steep mountains in Pakistan and Afghanistan. The male has long horns twisted like a corkscrew.',
      cs: 'Žije na strmých horách v Pákistánu a Afghánistánu. Samec má dlouhé rohy stočené jako vývrtka.',
    },
    diet: {
      en: 'It eats grass and leaves. It can even climb into trees to reach juicy leaves.',
      cs: 'Jí trávu a listí. Umí dokonce vylézt i na strom, aby dosáhla na šťavnaté listy.',
    },
    predators: {
      en: 'Snow leopards, wolves and lynxes hunt it. Golden eagles can catch the kids.',
      cs: 'Loví ji sněžní levharti, vlci a rysové. Kůzlata mohou chytit orli skalní.',
    },
  },
  {
    id: 'tibetan-antelope',
    name: { en: 'Tibetan antelope', cs: 'Čiru' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Pantholops',
      species: 'Pantholops hodgsonii',
    },
    habitat: {
      en: 'It lives high up on the cold, windy plateau of Tibet. Its very soft, warm wool keeps it cosy in the freezing wind.',
      cs: 'Žije vysoko na studené větrné náhorní plošině v Tibetu. Velmi jemná a teplá vlna ho chrání před mrazivým větrem.',
    },
    diet: {
      en: 'It eats grasses, herbs and mosses.',
      cs: 'Jí trávu, byliny a mechy.',
    },
    predators: {
      en: 'Wolves, snow leopards and lynxes hunt it. Foxes and eagles can catch the young.',
      cs: 'Loví ho vlci, sněžní levharti a rysové. Mláďata mohou chytit lišky a orli.',
    },
  },
  {
    id: 'kiang',
    name: { en: 'Kiang', cs: 'Kiang východní' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: perissodactyla,
      family: { latin: 'Equidae', en: 'Horses, donkeys and zebras', cs: 'Koňovití' },
      genus: 'Equus',
      species: 'Equus kiang',
    },
    habitat: {
      en: 'It lives in herds on the high grassy plains of Tibet and Qinghai. It is the biggest wild donkey in the world.',
      cs: 'Žije ve stádech na vysokých travnatých pláních Tibetu a provincie Čching-chaj. Je to největší divoký osel na světě.',
    },
    diet: {
      en: 'It grazes on grass and eats low plants. In summer it gets nice and fat for the cold winter.',
      cs: 'Spásá trávu a nízké rostliny. V létě si naje zásoby tuku na studenou zimu.',
    },
    predators: {
      en: 'Wolves are its main enemy. Snow leopards can sometimes catch a foal.',
      cs: 'Jeho hlavním nepřítelem jsou vlci. Hříbě může občas ulovit sněžný levhart.',
    },
  },
  {
    id: 'takin',
    name: { en: 'Takin', cs: 'Takin indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Budorcas',
      species: 'Budorcas taxicolor',
    },
    habitat: {
      en: 'It lives in misty mountain forests of the eastern Himalayas. It looks a bit like a mix of a cow and a goat, with a big bumpy nose.',
      cs: 'Žije v mlžných horských lesích východního Himálaje. Vypadá trochu jako kříženec krávy a kozy a má velký hrbolatý nos.',
    },
    diet: {
      en: 'It eats leaves, grass, bamboo shoots and bark. It also licks salty rocks.',
      cs: 'Jí listí, trávu, bambusové výhonky a kůru. Rád také olizuje slané kameny.',
    },
    predators: {
      en: 'Bears, wolves, dholes and leopards can hunt takins, mostly the young ones.',
      cs: 'Takiny mohou lovit medvědi, vlci, dhoulové a levharti, hlavně mláďata.',
    },
  },
  {
    id: 'chinese-giant-salamander',
    name: { en: 'Chinese giant salamander', cs: 'Velemlok čínský' },
    classification: {
      kingdom, phylum: chordata, class: amphibians, order: caudata,
      family: { latin: 'Cryptobranchidae', en: 'Giant salamanders', cs: 'Velemlokovití' },
      genus: 'Andrias',
      species: 'Andrias davidianus',
    },
    habitat: {
      en: 'It lives in cold, clear mountain streams and caves in China. It is the biggest amphibian in the world, as long as a grown-up person.',
      cs: 'Žije ve studených čistých horských potocích a jeskyních v Číně. Je to největší obojživelník na světě, dlouhý jako dospělý člověk.',
    },
    diet: {
      en: 'At night it catches fish, frogs, crabs and worms with a quick snap of its wide mouth.',
      cs: 'V noci chytá ryby, žáby, kraby a červy. Rychle je chňapne širokou tlamou.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Fish and other salamanders eat the eggs and babies.',
      cs: 'Dospělí velemloci nemají skoro žádné nepřátele. Vajíčka a mláďata sežerou ryby a jiní mloci.',
    },
  },
  {
    id: 'asian-black-bear',
    name: { en: 'Asian black bear', cs: 'Medvěd ušatý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: ursidae,
      genus: 'Ursus',
      species: 'Ursus thibetanus',
    },
    habitat: {
      en: 'It lives in mountain forests of Korea and other parts of Asia. It has big round ears and a white moon shape on its chest.',
      cs: 'Žije v horských lesích Koreje a dalších částí Asie. Má velké kulaté uši a na hrudi bílou skvrnu ve tvaru měsíčku.',
    },
    diet: {
      en: 'It eats acorns, nuts, fruit, honey and insects, and sometimes small animals. It is a great tree climber.',
      cs: 'Jí žaludy, oříšky, ovoce, med a hmyz, někdy i malá zvířata. Výborně šplhá po stromech.',
    },
    predators: {
      en: 'Tigers can attack grown-up bears. Cubs can be caught by wolves, leopards or other bears.',
      cs: 'Dospělého medvěda může napadnout tygr. Mláďata mohou ulovit vlci, levharti nebo jiní medvědi.',
    },
  },
  {
    id: 'russian-tortoise',
    name: { en: 'Central Asian tortoise', cs: 'Želva stepní' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Testudo',
      species: 'Testudo horsfieldii',
    },
    habitat: {
      en: 'It lives on dry steppes and deserts of Central Asia. It digs deep burrows and sleeps in them for most of the year.',
      cs: 'Žije na suchých stepích a v pouštích Střední Asie. Hrabe si hluboké nory a většinu roku v nich prospí.',
    },
    diet: {
      en: 'It eats grass, flowers and juicy leaves in spring, when the desert turns green.',
      cs: 'Na jaře, když poušť zezelená, jí trávu, květy a šťavnaté listy.',
    },
    predators: {
      en: 'Foxes, jackals, eagles and ravens can catch tortoises, mostly the small ones.',
      cs: 'Želvy mohou ulovit lišky, šakalové, orli a havrani, hlavně ty malé.',
    },
  },
  {
    id: 'blackbuck',
    name: { en: 'Blackbuck', cs: 'Antilopa jelení' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Antilope',
      species: 'Antilope cervicapra',
    },
    habitat: {
      en: 'It lives on open grasslands in India. The male is black and white with long spiral horns, and it can run very fast.',
      cs: 'Žije na otevřených travnatých pláních v Indii. Samec je černobílý, má dlouhé šroubovité rohy a umí velmi rychle běhat.',
    },
    diet: {
      en: 'It grazes on grass and also eats leaves, flowers and seed pods.',
      cs: 'Spásá trávu a jí také listy, květy a lusky.',
    },
    predators: {
      en: 'Wolves and leopards hunt it. Jackals can catch the babies.',
      cs: 'Loví ji vlci a levharti. Mláďata mohou chytit šakalové.',
    },
  },
  {
    id: 'sloth-bear',
    name: { en: 'Sloth bear', cs: 'Medvěd pyskatý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: ursidae,
      genus: 'Melursus',
      species: 'Melursus ursinus',
    },
    habitat: {
      en: 'It lives in forests and grasslands of India. It has shaggy black fur, and the mother carries her cubs on her back.',
      cs: 'Žije v lesích a na travnatých pláních Indie. Má huňatou černou srst a samice nosí mláďata na zádech.',
    },
    diet: {
      en: 'It digs up termites and ants with its long claws and sucks them up like a vacuum cleaner. It also loves fruit and honey.',
      cs: 'Dlouhými drápy vyhrabává termity a mravence a vysává je jako vysavač. Také miluje ovoce a med.',
    },
    predators: {
      en: 'Tigers can attack it. Leopards sometimes catch the cubs.',
      cs: 'Může ho napadnout tygr. Mláďata občas uloví levhart.',
    },
  },
  {
    id: 'mugger-crocodile',
    name: { en: 'Mugger crocodile', cs: 'Krokodýl bahenní' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: crocodilia,
      family: { latin: 'Crocodylidae', en: 'True crocodiles', cs: 'Krokodýlovití' },
      genus: 'Crocodylus',
      species: 'Crocodylus palustris',
    },
    habitat: {
      en: 'It lives in rivers, lakes and marshes of Pakistan and India. It has a very wide snout and can walk far over land to find new water.',
      cs: 'Žije v řekách, jezerech a bažinách Pákistánu a Indie. Má velmi široký čenich a po souši dokáže dojít daleko k nové vodě.',
    },
    diet: {
      en: 'It eats fish, birds, snakes and animals that come to drink.',
      cs: 'Jí ryby, ptáky, hady a zvířata, která přijdou k vodě pít.',
    },
    predators: {
      en: 'Big muggers have almost no enemies except tigers. Birds, jackals and big lizards eat eggs and babies.',
      cs: 'Velcí krokodýli nemají skoro žádné nepřátele kromě tygrů. Vejce a mláďata sežerou ptáci, šakalové a varani.',
    },
  },

  // ---------- south ----------
  {
    id: 'indian-grey-mongoose',
    name: { en: 'Indian grey mongoose', cs: 'Promyka indická' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora,
      family: { latin: 'Herpestidae', en: 'Mongooses', cs: 'Promykovití' },
      genus: 'Urva',
      species: 'Urva edwardsii',
    },
    habitat: {
      en: 'It lives in bushes, fields and near villages in India. It is so quick and brave that it can fight a cobra.',
      cs: 'Žije v křovinách, na polích i u vesnic v Indii. Je tak rychlá a odvážná, že se umí poprat i s kobrou.',
    },
    diet: {
      en: 'It eats mice, rats, snakes, lizards, eggs and insects.',
      cs: 'Jí myši, krysy, hady, ještěrky, vajíčka a hmyz.',
    },
    predators: {
      en: 'Leopards, jackals, eagles and big owls can catch it.',
      cs: 'Mohou ji chytit levharti, šakalové, orli a velké sovy.',
    },
  },
  {
    id: 'irrawaddy-dolphin',
    name: { en: 'Irrawaddy dolphin', cs: 'Orcela tuponosá' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactylaWhales, family: delphinidae,
      genus: 'Orcaella',
      species: 'Orcaella brevirostris',
    },
    habitat: {
      en: 'It lives in warm coastal seas and big rivers like the Irrawaddy in Myanmar. It has a round head and no long beak.',
      cs: 'Žije v teplých pobřežních mořích a velkých řekách, jako je Iravádí v Myanmaru. Má kulatou hlavu a žádný dlouhý zobák.',
    },
    diet: {
      en: 'It eats fish, squid and shrimp. It can spit water to herd fish together.',
      cs: 'Jí ryby, olihně a krevety. Umí stříkat vodu z tlamy, aby ryby nahnala k sobě.',
    },
    predators: {
      en: 'Big sharks can attack it.',
      cs: 'Mohou ji napadnout velcí žraloci.',
    },
  },
  {
    id: 'red-shanked-douc',
    name: { en: 'Red-shanked douc', cs: 'Langur duk' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates, family: cercopithecidae,
      genus: 'Pygathrix',
      species: 'Pygathrix nemaeus',
    },
    habitat: {
      en: 'It lives high in the rainforest trees of Vietnam and Laos. It is very colourful and looks like it is wearing red socks.',
      cs: 'Žije vysoko v korunách deštných pralesů Vietnamu a Laosu. Je velmi pestrý a vypadá, jako by měl na nohou červené podkolenky.',
    },
    diet: {
      en: 'It eats mostly leaves, and also fruit, seeds and flowers.',
      cs: 'Jí hlavně listy, ale také ovoce, semena a květy.',
    },
    predators: {
      en: 'Leopards, clouded leopards, pythons and big eagles can catch it.',
      cs: 'Mohou ho ulovit levharti, levharti obláčkoví, krajty a velcí orli.',
    },
  },
  {
    id: 'sunda-slow-loris',
    name: { en: 'Sunda slow loris', cs: 'Outloň váhavý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates,
      family: { latin: 'Lorisidae', en: 'Lorises', cs: 'Outloňovití' },
      genus: 'Nycticebus',
      species: 'Nycticebus coucang',
    },
    habitat: {
      en: 'It lives in the rainforests of Malaysia and Indonesia. It has huge round eyes, moves very slowly and comes out at night.',
      cs: 'Žije v deštných pralesích Malajsie a Indonésie. Má obrovské kulaté oči, pohybuje se velmi pomalu a ven vychází v noci.',
    },
    diet: {
      en: 'It eats insects, tree sap, flower nectar and fruit.',
      cs: 'Jí hmyz, stromovou mízu, nektar z květů a ovoce.',
    },
    predators: {
      en: 'Pythons, eagles and orangutans can catch it. It protects itself with a venomous bite.',
      cs: 'Může ho chytit krajta, orel nebo orangutan. Brání se jedovatým kousnutím.',
    },
  },
  {
    id: 'siamang',
    name: { en: 'Siamang', cs: 'Siamang' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates,
      family: { latin: 'Hylobatidae', en: 'Gibbons', cs: 'Gibonovití' },
      genus: 'Symphalangus',
      species: 'Symphalangus syndactylus',
    },
    habitat: {
      en: 'It lives in the rainforests of Sumatra. It is the biggest gibbon and sings very loudly by blowing up a big balloon under its chin.',
      cs: 'Žije v deštných pralesích Sumatry. Je to největší gibon a zpívá velmi hlasitě, přitom si nafukuje velký vak pod bradou.',
    },
    diet: {
      en: 'It eats leaves, fruit, figs, flowers and some insects.',
      cs: 'Jí listy, ovoce, fíky, květy a trochu hmyzu.',
    },
    predators: {
      en: 'Tigers, clouded leopards, pythons and big eagles can catch it, mostly the young ones.',
      cs: 'Mohou ho ulovit tygři, levharti obláčkoví, krajty a velcí orli, hlavně mláďata.',
    },
  },
  {
    id: 'wallaces-flying-frog',
    name: { en: "Wallace's flying frog", cs: 'Létavka černoblanná' },
    classification: {
      kingdom, phylum: chordata, class: amphibians, order: anura,
      family: { latin: 'Rhacophoridae', en: 'Tree frogs of Asia and Africa', cs: 'Létavkovití' },
      genus: 'Rhacophorus',
      species: 'Rhacophorus nigropalmatus',
    },
    habitat: {
      en: 'It lives high in the rainforest trees of Borneo. It spreads its huge webbed feet like parachutes and glides from tree to tree.',
      cs: 'Žije vysoko na stromech v deštných pralesích Bornea. Roztáhne obrovské blanité nohy jako padáky a plachtí ze stromu na strom.',
    },
    diet: {
      en: 'It eats insects like crickets, moths and beetles.',
      cs: 'Jí hmyz, třeba cvrčky, můry a brouky.',
    },
    predators: {
      en: 'Snakes, birds and lizards can catch it. Fish and insects eat the tadpoles.',
      cs: 'Mohou ji chytit hadi, ptáci a ještěři. Pulce sežerou ryby a hmyz.',
    },
  },
  {
    id: 'large-flying-fox',
    name: { en: 'Large flying fox', cs: 'Kaloň malajský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: chiroptera,
      family: { latin: 'Pteropodidae', en: 'Fruit bats', cs: 'Kaloňovití' },
      genus: 'Pteropus',
      species: 'Pteropus vampyrus',
    },
    habitat: {
      en: 'It lives in forests and mangroves of Java and nearby lands. It is one of the biggest bats in the world and sleeps upside down in big groups.',
      cs: 'Žije v lesích a mangrovech Jávy a okolních zemí. Je to jeden z největších netopýrů na světě a spí hlavou dolů ve velkých skupinách.',
    },
    diet: {
      en: 'It eats fruit, flowers and nectar. It helps new trees grow by spreading their seeds.',
      cs: 'Jí ovoce, květy a nektar. Roznáší semena a tím pomáhá růst novým stromům.',
    },
    predators: {
      en: 'Big eagles and pythons can catch it.',
      cs: 'Mohou ho chytit velcí orli a krajty.',
    },
  },
  {
    id: 'binturong',
    name: { en: 'Binturong', cs: 'Binturong' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora,
      family: { latin: 'Viverridae', en: 'Civets and genets', cs: 'Cibetkovití' },
      genus: 'Arctictis',
      species: 'Arctictis binturong',
    },
    habitat: {
      en: 'It lives in rainforest trees, here on the island of Palawan. It holds on to branches with its long tail and smells like popcorn.',
      cs: 'Žije na stromech v deštných pralesích, třeba na ostrově Palawan. Dlouhým ocasem se drží větví a voní jako popcorn.',
    },
    diet: {
      en: 'It loves figs and other fruit, and sometimes eats eggs, birds and small animals.',
      cs: 'Miluje fíky a jiné ovoce, někdy sní i vajíčka, ptáčky a malá zvířata.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Pythons and big birds of prey sometimes catch young ones.',
      cs: 'Dospělí binturongové mají málo nepřátel. Mláďata občas chytí krajty a velcí draví ptáci.',
    },
  },
  {
    id: 'finless-porpoise',
    name: { en: 'Indo-Pacific finless porpoise', cs: 'Sviňucha hladkohřbetá' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactylaWhales, family: phocoenidae,
      genus: 'Neophocaena',
      species: 'Neophocaena phocaenoides',
    },
    habitat: {
      en: 'It lives in warm, shallow seas along the coast of southern China. It has no fin on its back and a face that looks like it is smiling.',
      cs: 'Žije v teplých mělkých mořích u pobřeží jižní Číny. Nemá na zádech žádnou ploutev a vypadá, jako by se usmívala.',
    },
    diet: {
      en: 'It eats small fish, squid and shrimp.',
      cs: 'Jí malé ryby, olihně a krevety.',
    },
    predators: {
      en: 'Big sharks and orcas can hunt it.',
      cs: 'Mohou ji ulovit velcí žraloci a kosatky.',
    },
  },
  {
    id: 'sperm-whale',
    name: { en: 'Sperm whale', cs: 'Vorvaň obrovský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactylaWhales,
      family: { latin: 'Physeteridae', en: 'Sperm whales', cs: 'Vorvaňovití' },
      genus: 'Physeter',
      species: 'Physeter macrocephalus',
    },
    habitat: {
      en: 'It lives in deep oceans, for example near Sri Lanka. It has a huge square head and can dive deeper than any other whale.',
      cs: 'Žije v hlubokých oceánech, třeba u Srí Lanky. Má obrovskou hranatou hlavu a potopí se hlouběji než jakákoli jiná velryba.',
    },
    diet: {
      en: 'Deep in the dark sea it hunts squid, even giant squid, and big fish.',
      cs: 'Hluboko v tmavém moři loví olihně, dokonce i obří krakatice, a velké ryby.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Orcas sometimes attack the babies.',
      cs: 'Dospělí vorvani nemají skoro žádné nepřátele. Kosatky občas napadnou mláďata.',
    },
  },
]
