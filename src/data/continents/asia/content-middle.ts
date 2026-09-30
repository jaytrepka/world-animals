import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, reptiles, amphibians,
  carnivora, artiodactyla, perissodactyla, primates, caudata, crocodilia, testudines,
  felidae, ursidae, phocidae, bovidae, camelidae, cercopithecidae, cheloniidae,
} from './taxa'

export const middleContent: AnimalContent[] = [
  {
    id: 'amur-leopard',
    name: { en: 'Amur leopard', cs: 'Levhart mandžuský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Panthera',
      species: 'Panthera pardus',
    },
    habitat: {
      en: 'It lives in snowy forests where Russia, China and Korea meet. It is one of the rarest big cats in the world.',
      cs: 'Žije v zasněžených lesích tam, kde se stýká Rusko, Čína a Korea. Patří k nejvzácnějším velkým kočkám na světě.',
    },
    diet: {
      en: 'It hunts roe deer, sika deer, wild boar and hares.',
      cs: 'Loví srnce, jeleny sika, divoká prasata a zajíce.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but Siberian tigers can kill them. Cubs can be caught by wolves and bears.',
      cs: 'Dospělí levharti mají málo nepřátel, ale může je zabít tygr ussurijský. Mláďata mohou ulovit vlci a medvědi.',
    },
  },
  {
    id: 'japanese-macaque',
    name: { en: 'Japanese macaque', cs: 'Makak červenolící' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates, family: cercopithecidae,
      genus: 'Macaca',
      species: 'Macaca fuscata',
    },
    habitat: {
      en: 'It lives in the mountain forests of Japan, where it snows in winter. Some of these snow monkeys warm up in hot springs.',
      cs: 'Žije v horských lesích Japonska, kde v zimě sněží. Některé z těchto sněžných opic se zahřívají v horkých pramenech.',
    },
    diet: {
      en: 'It eats fruit, seeds, leaves, buds and bark. It also likes insects and bird eggs.',
      cs: 'Jí ovoce, semena, listy, pupeny a kůru. Chutná mu i hmyz a ptačí vajíčka.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Eagles, wild dogs and bears can sometimes catch the young ones.',
      cs: 'Dospělí makakové mají málo nepřátel. Mláďata ale občas uloví orli, psi nebo medvědi.',
    },
  },
  {
    id: 'japanese-giant-salamander',
    name: { en: 'Japanese giant salamander', cs: 'Velemlok japonský' },
    classification: {
      kingdom, phylum: chordata, class: amphibians, order: caudata,
      family: { latin: 'Cryptobranchidae', en: 'Giant salamanders', cs: 'Velemlokovití' },
      genus: 'Andrias',
      species: 'Andrias japonicus',
    },
    habitat: {
      en: 'It lives in cold, clear mountain streams in the south of Japan. It is as long as a child is tall.',
      cs: 'Žije ve studených a čistých horských potocích na jihu Japonska. Je dlouhý jako malé dítě.',
    },
    diet: {
      en: 'It waits hidden under rocks and snaps up fish, frogs, crabs and worms that come close.',
      cs: 'Číhá schovaný pod kameny a chňapne po rybách, žábách, krabech a červech, kteří připlavou blízko.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Fish and bigger salamanders can eat the eggs and babies.',
      cs: 'Dospělí velemloci nemají skoro žádné nepřátele. Vajíčka a mláďata ale mohou sežrat ryby a větší velemloci.',
    },
  },
  {
    id: 'chinese-alligator',
    name: { en: 'Chinese alligator', cs: 'Aligátor čínský' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: crocodilia,
      family: { latin: 'Alligatoridae', en: 'Alligators and caimans', cs: 'Aligátorovití' },
      genus: 'Alligator',
      species: 'Alligator sinensis',
    },
    habitat: {
      en: 'It lives in ponds, marshes and slow streams near the Yangtze River in China. It spends the winter asleep in a burrow.',
      cs: 'Žije v rybnících, bažinách a pomalých potocích u řeky Jang-c’-ťiang v Číně. Zimu prospí v noře.',
    },
    diet: {
      en: 'It eats snails, clams, fish, frogs and small animals.',
      cs: 'Jí plže, škeble, ryby, žáby a malá zvířata.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Birds, snakes and rats can eat the eggs and babies.',
      cs: 'Dospělí aligátoři mají málo nepřátel. Vajíčka a mláďata mohou sežrat ptáci, hadi a krysy.',
    },
  },
  {
    id: 'giant-panda',
    name: { en: 'Giant panda', cs: 'Panda velká' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: ursidae,
      genus: 'Ailuropoda',
      species: 'Ailuropoda melanoleuca',
    },
    habitat: {
      en: 'It lives in cool, misty bamboo forests in the mountains of central China.',
      cs: 'Žije v chladných a mlhavých bambusových lesích v horách střední Číny.',
    },
    diet: {
      en: 'It eats bamboo almost all day long. It needs a huge pile of bamboo every day.',
      cs: 'Skoro celý den jí bambus. Každý den ho potřebuje obrovskou hromadu.',
    },
    predators: {
      en: 'Grown-up pandas have almost no enemies. Leopards, wild dogs and yellow-throated martens can catch the cubs.',
      cs: 'Dospělé pandy nemají skoro žádné nepřátele. Mláďata ale mohou ulovit levharti, dhoulové nebo charzy.',
    },
  },
  {
    id: 'golden-snub-nosed-monkey',
    name: { en: 'Golden snub-nosed monkey', cs: 'Langur čínský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates, family: cercopithecidae,
      genus: 'Rhinopithecus',
      species: 'Rhinopithecus roxellana',
    },
    habitat: {
      en: 'It lives high in snowy mountain forests of central China. It has golden fur, a blue face and a tiny turned-up nose.',
      cs: 'Žije vysoko v zasněžených horských lesích střední Číny. Má zlatou srst, modrý obličej a malinký nosík otočený nahoru.',
    },
    diet: {
      en: 'It eats leaves, buds, fruit and seeds. In winter it eats lichen and tree bark.',
      cs: 'Jí listy, pupeny, ovoce a semena. V zimě jí lišejníky a kůru stromů.',
    },
    predators: {
      en: 'Leopards, wild dogs and golden eagles can hunt it, especially the young ones.',
      cs: 'Mohou ho ulovit levharti, dhoulové a orli skalní, hlavně mláďata.',
    },
  },
  {
    id: 'bactrian-camel',
    name: { en: 'Bactrian camel', cs: 'Velbloud dvouhrbý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: camelidae,
      genus: 'Camelus',
      species: 'Camelus bactrianus',
    },
    habitat: {
      en: 'It lives in the Gobi Desert of Mongolia and China, which is very hot in summer and freezing in winter. It has two humps.',
      cs: 'Žije v poušti Gobi v Mongolsku a Číně, kde je v létě velké horko a v zimě mráz. Má dva hrby.',
    },
    diet: {
      en: 'It eats dry grass, thorny bushes and leaves. It can go many days without drinking.',
      cs: 'Jí suchou trávu, trnité keře a listí. Dokáže vydržet mnoho dní bez pití.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Wolves can hunt young or weak camels.',
      cs: 'Dospělí velbloudi mají málo nepřátel. Mladé nebo slabé velbloudy mohou ulovit vlci.',
    },
  },
  {
    id: 'przewalskis-horse',
    name: { en: "Przewalski's horse", cs: 'Kůň Převalského' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: perissodactyla,
      family: { latin: 'Equidae', en: 'Horses, donkeys and zebras', cs: 'Koňovití' },
      genus: 'Equus',
      species: 'Equus ferus',
    },
    habitat: {
      en: 'This wild horse lives on the grassy plains of Mongolia. Horses from Prague Zoo helped bring it back there.',
      cs: 'Tento divoký kůň žije v travnatých stepích Mongolska. Pomohli ho tam vrátit koně z pražské zoo.',
    },
    diet: {
      en: 'It eats grass and other plants of the steppe. It has to drink water every day or two.',
      cs: 'Spásá trávu a další stepní rostliny. Každý den nebo dva se musí napít.',
    },
    predators: {
      en: 'Wolves hunt these horses, especially the foals. The stallion bravely protects his family.',
      cs: 'Tyto koně loví vlci, hlavně hříbata. Hřebec svou rodinu statečně chrání.',
    },
  },
  {
    id: 'yak',
    name: { en: 'Yak', cs: 'Jak domácí' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Bos',
      species: 'Bos grunniens',
    },
    habitat: {
      en: 'It lives high up on the cold, windy Tibetan Plateau, where people keep big herds. Its long, shaggy hair almost touches the ground.',
      cs: 'Žije vysoko na chladné a větrné Tibetské náhorní plošině, kde ho lidé chovají ve velkých stádech. Dlouhá huňatá srst mu sahá skoro až na zem.',
    },
    diet: {
      en: 'It eats grass, herbs, moss and lichen. It licks snow and ice when it is thirsty.',
      cs: 'Jí trávu, byliny, mech a lišejníky. Když má žízeň, olizuje sníh a led.',
    },
    predators: {
      en: 'Grown-up yaks are big and strong. Wolves and sometimes snow leopards or bears can catch young ones.',
      cs: 'Dospělí jaci jsou velcí a silní. Mláďata ale mohou ulovit vlci a někdy i irbisové nebo medvědi.',
    },
  },
  {
    id: 'red-panda',
    name: { en: 'Red panda', cs: 'Panda červená' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora,
      family: { latin: 'Ailuridae', en: 'Red pandas', cs: 'Pandovití' },
      genus: 'Ailurus',
      species: 'Ailurus fulgens',
    },
    habitat: {
      en: 'It lives in cool mountain forests in the eastern Himalayas. It spends a lot of time up in the trees.',
      cs: 'Žije v chladných horských lesích ve východním Himálaji. Hodně času tráví nahoře na stromech.',
    },
    diet: {
      en: 'It mostly eats bamboo leaves. It also likes fruit, acorns, mushrooms and sometimes eggs.',
      cs: 'Jí hlavně bambusové listy. Chutná jí i ovoce, žaludy, houby a někdy vajíčka.',
    },
    predators: {
      en: 'Snow leopards and martens hunt red pandas. Cubs can also be taken by birds of prey.',
      cs: 'Pandy červené loví irbisové a kuny. Mláďata mohou ulovit i draví ptáci.',
    },
  },
  {
    id: 'indian-rhinoceros',
    name: { en: 'Indian rhinoceros', cs: 'Nosorožec indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: perissodactyla,
      family: { latin: 'Rhinocerotidae', en: 'Rhinoceroses', cs: 'Nosorožcovití' },
      genus: 'Rhinoceros',
      species: 'Rhinoceros unicornis',
    },
    habitat: {
      en: 'It lives in tall grass and swamps in north-eastern India and Nepal. It has one horn and skin that looks like armour.',
      cs: 'Žije ve vysoké trávě a v bažinách na severovýchodě Indie a v Nepálu. Má jeden roh a kůži, která vypadá jako brnění.',
    },
    diet: {
      en: 'It eats grass, leaves, fruit and water plants. It loves to cool off in muddy pools.',
      cs: 'Jí trávu, listí, ovoce a vodní rostliny. Rád se chladí v bahnitých tůních.',
    },
    predators: {
      en: 'Grown-ups have no enemies except people. Tigers sometimes catch the calves.',
      cs: 'Dospělí nosorožci nemají kromě lidí žádné nepřátele. Mláďata občas uloví tygr.',
    },
  },
  {
    id: 'gharial',
    name: { en: 'Gharial', cs: 'Gaviál indický' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: crocodilia,
      family: { latin: 'Gavialidae', en: 'Gharials', cs: 'Gaviálovití' },
      genus: 'Gavialis',
      species: 'Gavialis gangeticus',
    },
    habitat: {
      en: 'It lives in big, clean rivers in northern India and Nepal. It has a very long, thin snout.',
      cs: 'Žije ve velkých čistých řekách na severu Indie a v Nepálu. Má velmi dlouhý a úzký čenich.',
    },
    diet: {
      en: 'It eats fish. It swings its thin snout quickly sideways through the water to snap them up.',
      cs: 'Jí ryby. Rychle švihne úzkým čenichem ve vodě do strany a rybu chňapne.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Jackals, monitor lizards, birds and big fish can eat the eggs and babies.',
      cs: 'Dospělí gaviálové nemají nepřátele. Vajíčka a mláďata ale mohou sežrat šakalové, varani, ptáci a velké ryby.',
    },
  },
  {
    id: 'snow-leopard',
    name: { en: 'Snow leopard', cs: 'Irbis horský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Panthera',
      species: 'Panthera uncia',
    },
    habitat: {
      en: 'It lives high in the rocky, snowy mountains of Central Asia. Its long, fluffy tail keeps it warm and helps it balance.',
      cs: 'Žije vysoko ve skalnatých zasněžených horách Střední Asie. Dlouhý huňatý ocas ho hřeje a pomáhá mu udržet rovnováhu.',
    },
    diet: {
      en: 'It hunts wild sheep and goats like ibex and argali. It also catches marmots, hares and birds.',
      cs: 'Loví divoké ovce a kozy, třeba kozorožce a argali. Chytá také svišty, zajíce a ptáky.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Wolves and eagles can sometimes catch the cubs.',
      cs: 'Dospělí irbisové nemají nepřátele. Mláďata ale někdy uloví vlci nebo orli.',
    },
  },
  {
    id: 'caspian-seal',
    name: { en: 'Caspian seal', cs: 'Tuleň kaspický' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: phocidae,
      genus: 'Pusa',
      species: 'Pusa caspica',
    },
    habitat: {
      en: 'It lives only in the Caspian Sea, the biggest lake in the world. In winter the pups are born on the ice in the north.',
      cs: 'Žije jen v Kaspickém moři, největším jezeře na světě. V zimě se mláďata rodí na ledu na jeho severu.',
    },
    diet: {
      en: 'It eats small fish like sprats and gobies, and also shrimp.',
      cs: 'Jí malé ryby, třeba šproty a hlaváčky, a také krevety.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Wolves and white-tailed eagles can catch the pups on the ice.',
      cs: 'Dospělí tuleni nemají skoro žádné nepřátele. Mláďata na ledu ale mohou ulovit vlci a orli mořští.',
    },
  },
  {
    id: 'asiatic-cheetah',
    name: { en: 'Asiatic cheetah', cs: 'Gepard indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Acinonyx',
      species: 'Acinonyx jubatus',
    },
    habitat: {
      en: 'It lives only in the dry hills and deserts of Iran. Very few are left, so people work hard to protect them.',
      cs: 'Žije už jen v suchých kopcích a pouštích Íránu. Zbývá jich jen pár, a tak se je lidé snaží chránit.',
    },
    diet: {
      en: 'It chases gazelles, wild sheep and hares. It is the fastest runner of all animals.',
      cs: 'Loví gazely, divoké ovce a zajíce. Je to nejrychlejší běžec ze všech zvířat.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Leopards, wolves and wild dogs can kill the cubs.',
      cs: 'Dospělí gepardi mají málo nepřátel. Mláďata ale mohou zabít levharti, vlci nebo toulaví psi.',
    },
  },
  {
    id: 'striped-hyena',
    name: { en: 'Striped hyena', cs: 'Hyena žíhaná' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora,
      family: { latin: 'Hyaenidae', en: 'Hyenas', cs: 'Hyenovití' },
      genus: 'Hyaena',
      species: 'Hyaena hyaena',
    },
    habitat: {
      en: 'It lives in dry, rocky hills and deserts of the Middle East. When it is scared, the long hair on its back stands up.',
      cs: 'Žije v suchých kamenitých kopcích a pouštích Blízkého východu. Když se lekne, dlouhá srst na zádech se jí zježí.',
    },
    diet: {
      en: 'It mostly eats leftovers and bones of dead animals. It also eats fruit, insects and small animals.',
      cs: 'Jí hlavně zbytky a kosti uhynulých zvířat. Sní i ovoce, hmyz a malá zvířata.',
    },
    predators: {
      en: 'Leopards and wolves can kill striped hyenas, especially the young.',
      cs: 'Hyeny žíhané mohou zabít levharti a vlci, hlavně mláďata.',
    },
  },
  {
    id: 'nubian-ibex',
    name: { en: 'Nubian ibex', cs: 'Kozorožec núbijský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Capra',
      species: 'Capra nubiana',
    },
    habitat: {
      en: 'It lives on steep desert cliffs in Israel, Jordan and Arabia. It climbs rocks very well.',
      cs: 'Žije na strmých pouštních skalách v Izraeli, Jordánsku a Arábii. Výborně šplhá po skalách.',
    },
    diet: {
      en: 'It eats grass, leaves and desert bushes. The males have huge curved horns.',
      cs: 'Jí trávu, listí a pouštní keře. Samci mají obrovské zahnuté rohy.',
    },
    predators: {
      en: 'Leopards, wolves and hyenas hunt it. Eagles and foxes can catch the kids.',
      cs: 'Loví ho levharti, vlci a hyeny. Kůzlata mohou ulovit orli a lišky.',
    },
  },
  {
    id: 'dromedary',
    name: { en: 'Dromedary', cs: 'Velbloud jednohrbý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: camelidae,
      genus: 'Camelus',
      species: 'Camelus dromedarius',
    },
    habitat: {
      en: 'It lives in the hot deserts of Arabia. It has one hump full of fat and wide feet for walking on sand.',
      cs: 'Žije v horkých pouštích Arábie. Má jeden hrb plný tuku a široká chodidla na chůzi po písku.',
    },
    diet: {
      en: 'It eats dry grass, thorny plants and leaves. It can drink a whole bathtub of water at once.',
      cs: 'Jí suchou trávu, trnité rostliny a listí. Najednou dokáže vypít celou vanu vody.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Wolves and hyenas may attack young camels.',
      cs: 'Dospělí velbloudi mají málo nepřátel. Na mláďata mohou zaútočit vlci a hyeny.',
    },
  },
  {
    id: 'arabian-oryx',
    name: { en: 'Arabian oryx', cs: 'Přímorožec arabský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Oryx',
      species: 'Oryx leucoryx',
    },
    habitat: {
      en: 'It lives in the sandy and stony deserts of Arabia. Its white coat reflects the hot sun.',
      cs: 'Žije v písečných a kamenitých pouštích Arábie. Bílá srst odráží horké slunce.',
    },
    diet: {
      en: 'It eats grass, leaves and roots. It can smell rain far away and walks there to find fresh plants.',
      cs: 'Jí trávu, listí a kořínky. Déšť ucítí z velké dálky a vydá se tam za čerstvými rostlinami.',
    },
    predators: {
      en: 'Wolves used to hunt it. Today its babies are sometimes caught by wolves, hyenas or caracals.',
      cs: 'Dříve ho lovili vlci. Dnes mláďata občas uloví vlk, hyena nebo karakal.',
    },
  },
  {
    id: 'loggerhead-sea-turtle',
    name: { en: 'Loggerhead sea turtle', cs: 'Kareta obecná' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: testudines, family: cheloniidae,
      genus: 'Caretta',
      species: 'Caretta caretta',
    },
    habitat: {
      en: 'It swims in warm seas. Many loggerheads lay their eggs on the beaches of Masirah Island in Oman.',
      cs: 'Plave v teplých mořích. Mnoho karet klade vajíčka na plážích ostrova Masíra v Ománu.',
    },
    diet: {
      en: 'It has a big head and strong jaws for crushing crabs, clams, snails and sea urchins. It also eats jellyfish.',
      cs: 'Má velkou hlavu a silné čelisti, kterými drtí kraby, škeble, plže a mořské ježky. Jí také medúzy.',
    },
    predators: {
      en: 'Big sharks and killer whales can catch grown-ups. Foxes, crabs, birds and fish eat the eggs and babies.',
      cs: 'Dospělé karety mohou ulovit velcí žraloci a kosatky. Vajíčka a mláďata sežerou lišky, krabi, ptáci a ryby.',
    },
  },
]
