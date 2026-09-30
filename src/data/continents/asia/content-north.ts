import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, birds, amphibians, rayFinned,
  carnivora, artiodactyla, artiodactylaWhales, caudata, accipitriformes,
  felidae, ursidae, canidae, mustelidae, phocidae, otariidae, bovidae, cervidae, accipitridae,
} from './taxa'

export const northContent: AnimalContent[] = [
  {
    id: 'polar-bear',
    name: { en: 'Polar bear', cs: 'Medvěd lední' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: ursidae,
      genus: 'Ursus',
      species: 'Ursus maritimus',
    },
    habitat: {
      en: 'It lives on the sea ice and cold coasts of the Arctic Ocean. Many polar bears have their babies on Wrangel Island.',
      cs: 'Žije na mořském ledu a na studených pobřežích Severního ledového oceánu. Hodně medvědic rodí mláďata na Wrangelově ostrově.',
    },
    diet: {
      en: 'It mostly hunts seals on the ice. Sometimes it also eats walruses, dead whales, birds and eggs.',
      cs: 'Loví hlavně tuleně na ledu. Někdy sní i mrože, uhynulou velrybu, ptáky nebo vajíčka.',
    },
    predators: {
      en: 'Grown-up polar bears have no enemies. Cubs can be killed by wolves or by big male polar bears.',
      cs: 'Dospělí lední medvědi nemají žádné nepřátele. Mláďata ale mohou zabít vlci nebo velcí medvědí samci.',
    },
  },
  {
    id: 'walrus',
    name: { en: 'Walrus', cs: 'Mrož lední' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora,
      family: { latin: 'Odobenidae', en: 'Walruses', cs: 'Mrožovití' },
      genus: 'Odobenus',
      species: 'Odobenus rosmarus',
    },
    habitat: {
      en: 'It lives in the icy seas of the far north, near Chukotka. Big groups rest together on ice and beaches.',
      cs: 'Žije v ledových mořích dalekého severu, u Čukotky. Velká stáda odpočívají pohromadě na ledu a na plážích.',
    },
    diet: {
      en: 'It dives to the sea floor and sucks clams and shells out of the mud. It finds them with its whiskers.',
      cs: 'Potápí se na mořské dno a vysává z bahna škeble a mušle. Hledá je pomocí svých vousů.',
    },
    predators: {
      en: 'Only polar bears and killer whales dare to attack walruses, and they mostly catch the young ones.',
      cs: 'Na mrože si troufnou jen lední medvědi a kosatky a většinou uloví jen mláďata.',
    },
  },
  {
    id: 'reindeer',
    name: { en: 'Reindeer', cs: 'Sob polární' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: cervidae,
      genus: 'Rangifer',
      species: 'Rangifer tarandus',
    },
    habitat: {
      en: 'It lives in the cold, treeless tundra of Siberia. Huge herds walk far every year to find food.',
      cs: 'Žije v chladné tundře bez stromů na Sibiři. Obrovská stáda každý rok putují daleko za potravou.',
    },
    diet: {
      en: 'It eats grass, leaves and moss. In winter it digs in the snow with its hooves to find lichen.',
      cs: 'Jí trávu, listí a mech. V zimě hrabe kopyty ve sněhu a hledá lišejníky.',
    },
    predators: {
      en: 'Wolves hunt reindeer. Bears, wolverines, lynxes and eagles can catch the calves.',
      cs: 'Soby loví vlci. Mláďata mohou ulovit i medvědi, rosomáci, rysi nebo orli.',
    },
  },
  {
    id: 'arctic-fox',
    name: { en: 'Arctic fox', cs: 'Liška polární' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: canidae,
      genus: 'Vulpes',
      species: 'Vulpes lagopus',
    },
    habitat: {
      en: 'It lives in the tundra along the Arctic coast. Its fur is white in winter and brown in summer.',
      cs: 'Žije v tundře u pobřeží Severního ledového oceánu. V zimě má bílý kožich a v létě hnědý.',
    },
    diet: {
      en: 'It hunts lemmings and other small animals, eats birds and eggs, and follows polar bears to eat their leftovers.',
      cs: 'Loví lumíky a jiná malá zvířátka, jí ptáky a vajíčka. Chodí také za ledními medvědy a dojídá, co po nich zbude.',
    },
    predators: {
      en: 'Wolves, polar bears, red foxes, wolverines and big birds like eagles and snowy owls can catch it.',
      cs: 'Mohou ji ulovit vlci, lední medvědi, lišky obecné, rosomáci a velcí ptáci, jako jsou orli nebo sovice sněžní.',
    },
  },
  {
    id: 'muskox',
    name: { en: 'Muskox', cs: 'Pižmoň severní' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Ovibos',
      species: 'Ovibos moschatus',
    },
    habitat: {
      en: 'It lives in the frozen tundra of the Taymyr Peninsula. Its very long, thick coat keeps it warm.',
      cs: 'Žije v zamrzlé tundře na poloostrově Tajmyr. Před mrazem ho chrání dlouhá a hustá srst.',
    },
    diet: {
      en: 'It eats grass, low bushes, moss and lichen. In winter it scrapes away the snow to reach them.',
      cs: 'Jí trávu, nízké keříky, mech a lišejníky. V zimě je vyhrabává zpod sněhu.',
    },
    predators: {
      en: 'Wolves and bears hunt it. The herd stands in a circle with the babies in the middle to protect them.',
      cs: 'Loví ho vlci a medvědi. Stádo se pak postaví do kruhu a mláďata schová doprostřed.',
    },
  },
  {
    id: 'snowy-owl',
    name: { en: 'Snowy owl', cs: 'Sovice sněžní' },
    classification: {
      kingdom, phylum: chordata, class: birds,
      order: { latin: 'Strigiformes', en: 'Owls', cs: 'Sovy' },
      family: { latin: 'Strigidae', en: 'True owls', cs: 'Puštíkovití' },
      genus: 'Bubo',
      species: 'Bubo scandiacus',
    },
    habitat: {
      en: 'It lives in the open, snowy tundra of northern Siberia. It is white, so it hides well in the snow.',
      cs: 'Žije v otevřené zasněžené tundře na severu Sibiře. Je bílá, a tak se ve sněhu dobře schová.',
    },
    diet: {
      en: 'It mostly hunts lemmings. It also catches hares, ducks and other birds, even in daylight.',
      cs: 'Loví hlavně lumíky. Chytá také zajíce, kachny a jiné ptáky, a to i ve dne.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Arctic foxes, wolves and skuas can steal eggs and chicks from the nest on the ground.',
      cs: 'Dospělé sovice mají málo nepřátel. Vajíčka a mláďata z hnízda na zemi ale mohou sebrat polární lišky, vlci nebo chaluhy.',
    },
  },
  {
    id: 'beluga-whale',
    name: { en: 'Beluga whale', cs: 'Běluha severní' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactylaWhales,
      family: { latin: 'Monodontidae', en: 'Narwhals and belugas', cs: 'Narvalovití' },
      genus: 'Delphinapterus',
      species: 'Delphinapterus leucas',
    },
    habitat: {
      en: 'This white whale lives in the cold Kara Sea and other Arctic seas. In summer it swims into big river mouths.',
      cs: 'Tahle bílá velryba žije ve studeném Karském moři a dalších severních mořích. V létě připlouvá do ústí velkých řek.',
    },
    diet: {
      en: 'It eats fish, squid, shrimp and crabs. It chirps and whistles so much that sailors call it the sea canary.',
      cs: 'Jí ryby, olihně, krevety a kraby. Tak moc cvrliká a píská, že jí námořníci říkají mořský kanárek.',
    },
    predators: {
      en: 'Killer whales and polar bears hunt belugas.',
      cs: 'Běluhy loví kosatky a lední medvědi.',
    },
  },
  {
    id: 'moose',
    name: { en: 'Moose', cs: 'Los evropský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: cervidae,
      genus: 'Alces',
      species: 'Alces alces',
    },
    habitat: {
      en: 'It lives in the huge forests and swamps of western Siberia. It is the biggest deer in the world.',
      cs: 'Žije v obrovských lesích a bažinách západní Sibiře. Je to největší jelen na světě.',
    },
    diet: {
      en: 'It eats leaves, twigs and bark. In summer it wades into lakes to eat water plants.',
      cs: 'Jí listí, větvičky a kůru. V létě se brodí jezery a spásá vodní rostliny.',
    },
    predators: {
      en: 'Wolves and brown bears hunt moose, mostly the young and weak ones.',
      cs: 'Losy loví vlci a medvědi hnědí, hlavně mláďata a slabší kusy.',
    },
  },
  {
    id: 'sable',
    name: { en: 'Sable', cs: 'Sobol asijský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: mustelidae,
      genus: 'Martes',
      species: 'Martes zibellina',
    },
    habitat: {
      en: 'It lives in the deep conifer forests of Siberia, called the taiga. It has very soft, dark fur.',
      cs: 'Žije v hlubokých jehličnatých lesích Sibiře, kterým se říká tajga. Má velmi hebký tmavý kožíšek.',
    },
    diet: {
      en: 'It hunts voles, squirrels and birds. It also eats pine nuts and berries.',
      cs: 'Loví hraboše, veverky a ptáky. Jí také piniové oříšky a bobule.',
    },
    predators: {
      en: 'Owls, eagles, lynxes, wolverines and wolves can catch sables.',
      cs: 'Soboly mohou ulovit sovy, orli, rysi, rosomáci a vlci.',
    },
  },
  {
    id: 'wolverine',
    name: { en: 'Wolverine', cs: 'Rosomák sibiřský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: mustelidae,
      genus: 'Gulo',
      species: 'Gulo gulo',
    },
    habitat: {
      en: 'It lives in the cold forests and tundra of Yakutia. It looks like a small bear but is a very strong weasel.',
      cs: 'Žije v chladných lesích a tundře v Jakutsku. Vypadá jako malý medvěd, ale je to velmi silná lasicovitá šelma.',
    },
    diet: {
      en: 'It eats almost anything: dead animals, hares, birds, eggs and berries. It can even hunt a reindeer in deep snow.',
      cs: 'Sní skoro cokoli: uhynulá zvířata, zajíce, ptáky, vajíčka i bobule. V hlubokém sněhu dokáže ulovit i soba.',
    },
    predators: {
      en: 'Grown-ups are fierce and have few enemies. Wolves and bears sometimes kill them, and eagles can catch the young.',
      cs: 'Dospělí rosomáci jsou divocí a nepřátel mají málo. Občas je zabijí vlci nebo medvědi a mláďata mohou chytit orli.',
    },
  },
  {
    id: 'siberian-salamander',
    name: { en: 'Siberian salamander', cs: 'Pamlok sibiřský' },
    classification: {
      kingdom, phylum: chordata, class: amphibians, order: caudata,
      family: { latin: 'Hynobiidae', en: 'Asian salamanders', cs: 'Pamlokovití' },
      genus: 'Salamandrella',
      species: 'Salamandrella keyserlingii',
    },
    habitat: {
      en: 'It lives in wet forests and bogs across Siberia. It can freeze solid in winter and wake up again in spring.',
      cs: 'Žije ve vlhkých lesích a rašeliništích po celé Sibiři. V zimě dokáže úplně zmrznout a na jaře zase ožije.',
    },
    diet: {
      en: 'It eats worms, snails, insects and spiders.',
      cs: 'Jí žížaly, plže, hmyz a pavouky.',
    },
    predators: {
      en: 'Birds, snakes, shrews and fish can eat it. Its eggs and tadpoles are eaten by water beetles and fish.',
      cs: 'Může ho sežrat pták, had, rejsek nebo ryba. Jeho vajíčka a larvy požírají vodní brouci a ryby.',
    },
  },
  {
    id: 'taimen',
    name: { en: 'Siberian taimen', cs: 'Tajmen sibiřský' },
    classification: {
      kingdom, phylum: chordata, class: rayFinned,
      order: { latin: 'Salmoniformes', en: 'Salmon and trout', cs: 'Lososotvární' },
      family: { latin: 'Salmonidae', en: 'Salmon and trout', cs: 'Lososovití' },
      genus: 'Hucho',
      species: 'Hucho taimen',
    },
    habitat: {
      en: 'It lives in cold, clean, fast rivers of Siberia. It is the biggest salmon in the world.',
      cs: 'Žije ve studených, čistých a rychlých řekách Sibiře. Je to největší losos na světě.',
    },
    diet: {
      en: 'It hunts other fish. A big taimen can even catch ducks, frogs and mice swimming in the water.',
      cs: 'Loví jiné ryby. Velký tajmen chytí i kachnu, žábu nebo myš, která plave ve vodě.',
    },
    predators: {
      en: 'Big taimen have almost no enemies except people. Young fish are eaten by bigger fish, otters and birds.',
      cs: 'Velcí tajmeni nemají skoro žádné nepřátele kromě lidí. Malé rybky ale sežerou větší ryby, vydry a ptáci.',
    },
  },
  {
    id: 'baikal-seal',
    name: { en: 'Baikal seal', cs: 'Tuleň bajkalský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: phocidae,
      genus: 'Pusa',
      species: 'Pusa sibirica',
    },
    habitat: {
      en: 'It lives only in Lake Baikal, the deepest lake in the world. It is one of the few seals that live in fresh water.',
      cs: 'Žije jen v jezeře Bajkal, nejhlubším jezeře na světě. Je to jeden z mála tuleňů, kteří žijí ve sladké vodě.',
    },
    diet: {
      en: 'It eats fish, especially the little golomyanka fish that live only in Lake Baikal.',
      cs: 'Jí ryby, hlavně malé rybky golomjanky, které žijí jen v Bajkalu.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Brown bears, wolves and eagles can catch the pups on the ice.',
      cs: 'Dospělí tuleni nemají skoro žádné nepřátele. Mláďata na ledu ale mohou ulovit medvědi, vlci nebo orli.',
    },
  },
  {
    id: 'pallas-cat',
    name: { en: "Pallas's cat", cs: 'Manul' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Otocolobus',
      species: 'Otocolobus manul',
    },
    habitat: {
      en: 'It lives in cold, rocky grasslands near Russia and Mongolia. Its thick, fluffy fur keeps it warm in freezing winters.',
      cs: 'Žije ve studených kamenitých stepích na pomezí Ruska a Mongolska. V mrazivé zimě ho hřeje hustý nadýchaný kožich.',
    },
    diet: {
      en: 'It hunts pikas, voles, gerbils and small birds. It waits quietly near their burrows.',
      cs: 'Loví pišťuchy, hraboše, pískomily a malé ptáky. Tiše na ně čeká u jejich nor.',
    },
    predators: {
      en: 'Eagles, big owls, wolves, foxes and herding dogs can catch it.',
      cs: 'Může ho ulovit orel, velká sova, vlk, liška nebo pastevecký pes.',
    },
  },
  {
    id: 'siberian-musk-deer',
    name: { en: 'Siberian musk deer', cs: 'Kabar pižmový' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla,
      family: { latin: 'Moschidae', en: 'Musk deer', cs: 'Kabarovití' },
      genus: 'Moschus',
      species: 'Moschus moschiferus',
    },
    habitat: {
      en: 'It lives in steep mountain forests of the Sayan Mountains. It has no antlers, but the males have long fangs.',
      cs: 'Žije ve strmých horských lesích Sajanu. Nemá parohy, ale samci mají dlouhé tesáky.',
    },
    diet: {
      en: 'It mostly eats lichen from trees and rocks. It also nibbles leaves, grass and moss.',
      cs: 'Jí hlavně lišejníky ze stromů a skal. Okusuje také listí, trávu a mech.',
    },
    predators: {
      en: 'Lynxes, wolverines, wolves, sables and foxes hunt it. Eagles and owls can catch the young.',
      cs: 'Loví ho rysi, rosomáci, vlci, soboli a lišky. Mláďata mohou chytit orli a sovy.',
    },
  },
  {
    id: 'eurasian-lynx',
    name: { en: 'Eurasian lynx', cs: 'Rys ostrovid' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Lynx',
      species: 'Lynx lynx',
    },
    habitat: {
      en: 'It lives in the big forests of Siberia. It has tufts of black hair on its ears and big furry paws for walking on snow.',
      cs: 'Žije ve velkých lesích Sibiře. Na uších má černé štětičky a velké chlupaté tlapy, se kterými chodí po sněhu.',
    },
    diet: {
      en: 'It hunts roe deer, musk deer, hares and birds. It sneaks up quietly and then jumps.',
      cs: 'Loví srnce, kabary, zajíce a ptáky. Potichu se připlíží a pak skočí.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but wolves and wolverines sometimes kill them. Kittens can be taken by bears and eagles.',
      cs: 'Dospělí rysi mají málo nepřátel, občas je ale zabijí vlci nebo rosomáci. Koťata mohou ulovit medvědi a orli.',
    },
  },
  {
    id: 'stellers-sea-eagle',
    name: { en: "Steller's sea eagle", cs: 'Orel východní' },
    classification: {
      kingdom, phylum: chordata, class: birds, order: accipitriformes, family: accipitridae,
      genus: 'Haliaeetus',
      species: 'Haliaeetus pelagicus',
    },
    habitat: {
      en: 'It lives on the rocky coasts of the Sea of Okhotsk and Kamchatka. It is one of the heaviest eagles in the world.',
      cs: 'Žije na skalnatých pobřežích Ochotského moře a Kamčatky. Patří k nejtěžším orlům na světě.',
    },
    diet: {
      en: 'It mostly catches big fish like salmon with its huge yellow beak and claws. It also eats ducks and dead seals.',
      cs: 'Loví hlavně velké ryby, například lososy. Má obrovský žlutý zobák a silné drápy. Jí i kachny a uhynulé tuleně.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Sables and other martens sometimes climb up and steal eggs or chicks.',
      cs: 'Dospělí orli nemají nepřátele. Vajíčka nebo mláďata z hnízda občas vyberou soboli nebo jiné kuny.',
    },
  },
  {
    id: 'steller-sea-lion',
    name: { en: 'Steller sea lion', cs: 'Lachtan ušatý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: otariidae,
      genus: 'Eumetopias',
      species: 'Eumetopias jubatus',
    },
    habitat: {
      en: 'It lives in the cold Sea of Okhotsk and rests on rocky islands. It is the biggest sea lion in the world.',
      cs: 'Žije ve studeném Ochotském moři a odpočívá na skalnatých ostrovech. Je to největší lachtan na světě.',
    },
    diet: {
      en: 'It eats fish like pollock, herring and salmon, and also octopus and squid.',
      cs: 'Jí ryby, třeba tresky, sledě a lososy, a také chobotnice a olihně.',
    },
    predators: {
      en: 'Killer whales and big sharks hunt sea lions.',
      cs: 'Lachtany loví kosatky a velcí žraloci.',
    },
  },
  {
    id: 'kamchatka-brown-bear',
    name: { en: 'Kamchatka brown bear', cs: 'Medvěd kamčatský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: ursidae,
      genus: 'Ursus',
      species: 'Ursus arctos',
    },
    habitat: {
      en: 'It lives on the Kamchatka peninsula, among volcanoes, forests and rivers. It is one of the biggest bears in the world.',
      cs: 'Žije na poloostrově Kamčatka mezi sopkami, lesy a řekami. Patří k největším medvědům na světě.',
    },
    diet: {
      en: 'In summer it catches lots of salmon in the rivers. It also eats berries, grass, roots and pine nuts.',
      cs: 'V létě chytá v řekách spoustu lososů. Jí také bobule, trávu, kořínky a piniové oříšky.',
    },
    predators: {
      en: 'Grown-up bears have no enemies. Cubs must stay close to their mother, because big male bears or wolves can kill them.',
      cs: 'Dospělí medvědi nemají nepřátele. Mláďata se ale musí držet u mámy, protože je může zabít velký medvědí samec nebo vlci.',
    },
  },
  {
    id: 'sea-otter',
    name: { en: 'Sea otter', cs: 'Vydra mořská' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: mustelidae,
      genus: 'Enhydra',
      species: 'Enhydra lutris',
    },
    habitat: {
      en: 'It lives in the cold sea around the Commander Islands and Kamchatka. It sleeps floating on its back, often holding hands with others.',
      cs: 'Žije ve studeném moři kolem Komandorských ostrovů a Kamčatky. Spí na zádech na hladině a často se drží s ostatními za tlapky.',
    },
    diet: {
      en: 'It eats sea urchins, crabs, clams and fish. It cracks shells open with a stone on its tummy.',
      cs: 'Jí mořské ježky, kraby, škeble a ryby. Skořápky rozbíjí kamenem na svém bříšku.',
    },
    predators: {
      en: 'Killer whales and sharks hunt sea otters. Eagles can snatch the babies from the water.',
      cs: 'Vydry loví kosatky a žraloci. Mláďata mohou z hladiny uchvátit orli.',
    },
  },
  {
    id: 'amur-tiger',
    name: { en: 'Siberian tiger', cs: 'Tygr ussurijský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Panthera',
      species: 'Panthera tigris',
    },
    habitat: {
      en: 'It lives in the snowy forests of the Russian Far East, near the Amur River. It is the biggest cat in the world.',
      cs: 'Žije v zasněžených lesích na ruském Dálném východě u řeky Amur. Je to největší kočkovitá šelma na světě.',
    },
    diet: {
      en: 'It hunts wild boar, red deer and other deer. Sometimes it even catches a bear.',
      cs: 'Loví divoká prasata, jeleny a další zvěř. Někdy uloví i medvěda.',
    },
    predators: {
      en: 'Grown-up tigers have no enemies. Cubs can be killed by bears, wolves or other tigers.',
      cs: 'Dospělí tygři nemají žádné nepřátele. Mláďata ale mohou zabít medvědi, vlci nebo jiní tygři.',
    },
  },
  {
    id: 'red-crowned-crane',
    name: { en: 'Red-crowned crane', cs: 'Jeřáb mandžuský' },
    classification: {
      kingdom, phylum: chordata, class: birds,
      order: { latin: 'Gruiformes', en: 'Cranes and rails', cs: 'Krátkokřídlí' },
      family: { latin: 'Gruidae', en: 'Cranes', cs: 'Jeřábovití' },
      genus: 'Grus',
      species: 'Grus japonensis',
    },
    habitat: {
      en: 'It lives in marshes on the Japanese island of Hokkaido and along the Amur River. It has a bright red cap on its head.',
      cs: 'Žije v mokřadech na japonském ostrově Hokkaidó a u řeky Amur. Na hlavě má jasně červenou čepičku.',
    },
    diet: {
      en: 'It eats fish, frogs, snails, crabs and rice. Pairs dance together, jumping and flapping their wings.',
      cs: 'Jí ryby, žáby, plže, kraby a rýži. Páry spolu tančí, poskakují a mávají křídly.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Foxes, raccoon dogs, crows and eagles can take eggs and chicks.',
      cs: 'Dospělí jeřábi mají málo nepřátel. Vajíčka a mláďata mohou sebrat lišky, psíci mývalovití, vrány nebo orli.',
    },
  },
  {
    id: 'saiga',
    name: { en: 'Saiga antelope', cs: 'Sajga tatarská' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla, family: bovidae,
      genus: 'Saiga',
      species: 'Saiga tatarica',
    },
    habitat: {
      en: 'It lives on the wide, dry grasslands of Kazakhstan. Its big, floppy nose warms cold air in winter and stops dust in summer.',
      cs: 'Žije v širých suchých stepích Kazachstánu. Velký ohebný nos jí v zimě ohřívá studený vzduch a v létě zachytává prach.',
    },
    diet: {
      en: 'It eats grass, herbs and low shrubs, even ones that are salty or bitter.',
      cs: 'Spásá trávu, byliny a nízké keříky, i takové, které jsou slané nebo hořké.',
    },
    predators: {
      en: 'Wolves hunt saigas. Foxes, stray dogs and eagles can catch the young ones.',
      cs: 'Sajgy loví vlci. Mláďata mohou ulovit i lišky, toulaví psi a orli.',
    },
  },
]
