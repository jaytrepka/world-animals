import type { AnimalContent } from '../../types'
import {
  animalia, chordata, mammalia, aves, chondrichthyes, carnivora, artiodactyla, lagomorpha,
  ursidae, canidae, felidae, mustelidae, bovidae, cervidae, balaenopteridae,
} from './taxa'

const monodontidae = { latin: 'Monodontidae', en: 'Narwhals and belugas', cs: 'Narvalovití' }

export const northContent: AnimalContent[] = [
  {
    id: 'polar-bear',
    name: { en: 'Polar bear', cs: 'Medvěd lední' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: ursidae,
      genus: 'Ursus',
      species: 'Ursus maritimus',
    },
    habitat: {
      en: 'It lives on the frozen sea ice and cold coasts of the far north, for example around Hudson Bay in Canada.',
      cs: 'Žije na zamrzlém moři a na studených pobřežích dalekého severu, třeba kolem Hudsonova zálivu v Kanadě.',
    },
    diet: {
      en: 'It mostly hunts seals on the ice. Sometimes it also eats birds, eggs or a dead whale.',
      cs: 'Nejčastěji loví tuleně na ledu. Někdy si dá i ptáky, vajíčka nebo mrtvou velrybu.',
    },
    predators: {
      en: 'Grown-up polar bears have no enemies. Small cubs can be killed by wolves or by big male polar bears.',
      cs: 'Dospělí lední medvědi nemají žádné nepřátele. Malá mláďata ale mohou zabít vlci nebo velcí medvědí samci.',
    },
  },
  {
    id: 'muskox',
    name: { en: 'Muskox', cs: 'Pižmoň severní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: bovidae,
      genus: 'Ovibos',
      species: 'Ovibos moschatus',
    },
    habitat: {
      en: 'It lives on the cold, treeless tundra of Greenland, northern Canada and Alaska. Its long, shaggy coat keeps it warm.',
      cs: 'Žije v chladné tundře bez stromů v Grónsku, na severu Kanady a na Aljašce. Hřeje ho dlouhá huňatá srst.',
    },
    diet: {
      en: 'It eats grass, moss, lichens and small willow bushes. In winter it digs them out from under the snow.',
      cs: 'Jí trávu, mech, lišejníky a nízké vrbičky. V zimě si je vyhrabává zpod sněhu.',
    },
    predators: {
      en: 'Wolves and polar bears hunt it. When danger comes, the herd stands in a circle with the babies in the middle.',
      cs: 'Loví ho vlci a lední medvědi. Když hrozí nebezpečí, stádo se postaví do kruhu a mláďata schová doprostřed.',
    },
  },
  {
    id: 'caribou',
    name: { en: 'Caribou', cs: 'Sob polární' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: cervidae,
      genus: 'Rangifer',
      species: 'Rangifer tarandus',
    },
    habitat: {
      en: 'It lives on the tundra and in the northern forests of Canada and Alaska. Big herds walk very far every year.',
      cs: 'Žije v tundře a v severních lesích Kanady a Aljašky. Velká stáda každý rok putují hodně daleko.',
    },
    diet: {
      en: 'It eats grass, leaves and mushrooms in summer. In winter it digs in the snow for a plant called reindeer moss.',
      cs: 'V létě jí trávu, listy a houby. V zimě hrabe ve sněhu a hledá lišejník, kterému se říká sobí mech.',
    },
    predators: {
      en: 'Wolves, bears and wolverines hunt it. Golden eagles and lynxes can catch the babies.',
      cs: 'Loví ho vlci, medvědi a rosomáci. Mláďata mohou ulovit i orli skalní a rysové.',
    },
  },
  {
    id: 'arctic-fox',
    name: { en: 'Arctic fox', cs: 'Liška polární' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: canidae,
      genus: 'Vulpes',
      species: 'Vulpes lagopus',
    },
    habitat: {
      en: 'It lives on the icy tundra of the far north. Its fur is white in winter and brown in summer.',
      cs: 'Žije v ledové tundře na dalekém severu. V zimě má bílý kožich a v létě hnědý.',
    },
    diet: {
      en: 'It eats lemmings, birds, eggs and fish. It also follows polar bears to eat their leftovers.',
      cs: 'Jí lumíky, ptáky, vajíčka a ryby. Chodí také za ledními medvědy a dojídá, co po nich zbude.',
    },
    predators: {
      en: 'Polar bears, wolves, red foxes, snowy owls and eagles can catch it.',
      cs: 'Může ji ulovit lední medvěd, vlk, liška obecná, sovice sněžní nebo orel.',
    },
  },
  {
    id: 'narwhal',
    name: { en: 'Narwhal', cs: 'Narval jednorohý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: monodontidae,
      genus: 'Monodon',
      species: 'Monodon monoceros',
    },
    habitat: {
      en: 'It lives in the icy Arctic sea near Canada and Greenland. The male has a very long, twisted tooth like a unicorn horn.',
      cs: 'Žije v ledovém Severním ledovém oceánu u Kanady a Grónska. Samec má dlouhý stočený zub jako roh jednorožce.',
    },
    diet: {
      en: 'It dives deep and eats fish, squid and shrimp.',
      cs: 'Potápí se hluboko a loví ryby, olihně a krevety.',
    },
    predators: {
      en: 'Orcas and polar bears hunt it. Sometimes Greenland sharks eat it too.',
      cs: 'Loví ho kosatky a lední medvědi. Někdy ho sežere i žralok malohlavý.',
    },
  },
  {
    id: 'walrus',
    name: { en: 'Walrus', cs: 'Mrož lední' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Odobenidae', en: 'Walruses', cs: 'Mrožovití' },
      genus: 'Odobenus',
      species: 'Odobenus rosmarus',
    },
    habitat: {
      en: 'It lives in the cold Arctic sea and rests in big groups on ice and beaches, for example near Alaska.',
      cs: 'Žije ve studeném severním moři a odpočívá ve velkých skupinách na ledu a na plážích, třeba u Aljašky.',
    },
    diet: {
      en: 'It finds clams and shellfish on the sea floor with its whiskers and sucks them out of their shells.',
      cs: 'Na mořském dně si vousky nahmatá mušle a škeble a vysaje je z lastur.',
    },
    predators: {
      en: 'Only polar bears and orcas dare to attack it, mostly the young ones. Its big tusks help it fight back.',
      cs: 'Zaútočit se na něj odváží jen lední medvěd a kosatka, a to hlavně na mláďata. Bránit se mu pomáhají velké kly.',
    },
  },
  {
    id: 'beluga-whale',
    name: { en: 'Beluga whale', cs: 'Běluha severní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: monodontidae,
      genus: 'Delphinapterus',
      species: 'Delphinapterus leucas',
    },
    habitat: {
      en: 'This white whale lives in the cold Arctic sea. In summer thousands swim into Hudson Bay in Canada.',
      cs: 'Tahle bílá velryba žije ve studeném severním moři. V létě jich tisíce připlouvají do Hudsonova zálivu v Kanadě.',
    },
    diet: {
      en: 'It eats fish, squid, shrimp and crabs. It is very chatty and talks with whistles and clicks.',
      cs: 'Jí ryby, olihně, krevety a kraby. Je moc upovídaná a domlouvá se pískáním a cvakáním.',
    },
    predators: {
      en: 'Orcas and polar bears hunt it.',
      cs: 'Loví ji kosatky a lední medvědi.',
    },
  },
  {
    id: 'snowy-owl',
    name: { en: 'Snowy owl', cs: 'Sovice sněžní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Strigiformes', en: 'Owls', cs: 'Sovy' },
      family: { latin: 'Strigidae', en: 'True owls', cs: 'Puštíkovití' },
      genus: 'Bubo',
      species: 'Bubo scandiacus',
    },
    habitat: {
      en: 'This big white owl lives on the open Arctic tundra. It hunts in the daytime too, because in summer the sun never sets there.',
      cs: 'Tahle velká bílá sova žije v otevřené arktické tundře. Loví i ve dne, protože v létě tam slunce vůbec nezapadá.',
    },
    diet: {
      en: 'It mostly eats lemmings. It also catches hares, other birds and fish.',
      cs: 'Nejvíc loví lumíky. Chytá ale i zajíce, jiné ptáky a ryby.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Arctic foxes, wolves and big gulls can eat the eggs and chicks.',
      cs: 'Dospělé sovice nemají skoro žádné nepřátele. Vajíčka a mláďata ale mohou sežrat lišky polární, vlci a velcí rackové.',
    },
  },
  {
    id: 'arctic-hare',
    name: { en: 'Arctic hare', cs: 'Zajíc polární' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: lagomorpha,
      family: { latin: 'Leporidae', en: 'Hares and rabbits', cs: 'Zajícovití' },
      genus: 'Lepus',
      species: 'Lepus arcticus',
    },
    habitat: {
      en: 'It lives on the coldest, snowiest islands of northern Canada and Greenland. Its thick white fur keeps it warm.',
      cs: 'Žije na nejstudenějších a nejzasněženějších ostrovech severní Kanady a Grónska. Hřeje ho hustá bílá srst.',
    },
    diet: {
      en: 'It eats small willow plants, moss, grass and flowers. It digs through the snow to find food.',
      cs: 'Jí malé vrbičky, mech, trávu a kytičky. Potravu si vyhrabává zpod sněhu.',
    },
    predators: {
      en: 'Arctic wolves, arctic foxes, snowy owls and falcons hunt it.',
      cs: 'Loví ho polární vlci, lišky polární, sovice sněžní a sokoli.',
    },
  },
  {
    id: 'grizzly-bear',
    name: { en: 'Grizzly bear', cs: 'Medvěd grizzly' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: ursidae,
      genus: 'Ursus',
      species: 'Ursus arctos',
    },
    habitat: {
      en: 'This big brown bear lives in the mountains, forests and meadows of Alaska and western Canada. In winter it sleeps in a den.',
      cs: 'Tenhle velký hnědý medvěd žije v horách, lesích a na loukách Aljašky a západní Kanady. V zimě spí v brlohu.',
    },
    diet: {
      en: 'It eats berries, roots, grass and insects. It loves catching salmon in rivers.',
      cs: 'Jí bobule, kořínky, trávu a hmyz. Moc rád chytá v řekách lososy.',
    },
    predators: {
      en: 'Grown-up grizzlies have no enemies. Wolves and big male bears can kill the cubs.',
      cs: 'Dospělí grizzlyové nemají žádné nepřátele. Mláďata ale mohou zabít vlci nebo velcí medvědí samci.',
    },
  },
  {
    id: 'moose',
    name: { en: 'Moose', cs: 'Los evropský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: cervidae,
      genus: 'Alces',
      species: 'Alces alces',
    },
    habitat: {
      en: 'It lives in the big northern forests near lakes and swamps in Canada and Alaska. It is the biggest deer in the world.',
      cs: 'Žije ve velkých severních lesích u jezer a bažin v Kanadě a na Aljašce. Je to největší jelen na světě.',
    },
    diet: {
      en: 'It eats leaves, twigs and bark. In summer it wades into lakes to eat water plants.',
      cs: 'Jí listy, větvičky a kůru. V létě se brodí jezery a spásá vodní rostliny.',
    },
    predators: {
      en: 'Wolves and bears hunt it, mostly the young ones.',
      cs: 'Loví ho vlci a medvědi, hlavně mláďata.',
    },
  },
  {
    id: 'canada-lynx',
    name: { en: 'Canada lynx', cs: 'Rys kanadský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: felidae,
      genus: 'Lynx',
      species: 'Lynx canadensis',
    },
    habitat: {
      en: 'It lives in the snowy northern forests of Canada and Alaska. Its big furry paws work like snowshoes.',
      cs: 'Žije v zasněžených severních lesích Kanady a Aljašky. Velké chlupaté tlapy mu fungují jako sněžnice.',
    },
    diet: {
      en: 'It mostly hunts snowshoe hares. It also catches squirrels, birds and mice.',
      cs: 'Nejvíc loví zajíce měnavé. Chytá ale i veverky, ptáky a myši.',
    },
    predators: {
      en: 'Wolves, cougars and wolverines can kill it. Kittens can also be eaten by foxes and owls.',
      cs: 'Může ho zabít vlk, puma nebo rosomák. Koťata mohou sežrat i lišky a sovy.',
    },
  },
  {
    id: 'wolverine',
    name: { en: 'Wolverine', cs: 'Rosomák sibiřský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: mustelidae,
      genus: 'Gulo',
      species: 'Gulo gulo',
    },
    habitat: {
      en: 'It lives in cold, lonely forests, mountains and tundra in Alaska and northern Canada. It is small but very strong and brave.',
      cs: 'Žije v chladných a opuštěných lesích, horách a tundře na Aljašce a v severní Kanadě. Je malý, ale moc silný a odvážný.',
    },
    diet: {
      en: 'It eats small animals, birds and eggs, and it finds leftovers of animals killed by wolves. It also likes berries.',
      cs: 'Jí malá zvířata, ptáky a vajíčka a dojídá zbytky po vlcích. Chutnají mu i bobule.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but wolves, bears and cougars can kill it. Golden eagles may catch the young.',
      cs: 'Dospělí rosomáci mají málo nepřátel, ale zabít je mohou vlci, medvědi nebo pumy. Mláďata může ulovit orel skalní.',
    },
  },
  {
    id: 'harp-seal',
    name: { en: 'Harp seal', cs: 'Tuleň grónský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Pagophilus',
      species: 'Pagophilus groenlandicus',
    },
    habitat: {
      en: 'It lives in the icy North Atlantic near Canada and Greenland. Its babies are born on floating ice with fluffy white fur.',
      cs: 'Žije v ledovém severním Atlantiku u Kanady a Grónska. Mláďata se rodí na plovoucím ledu a mají načechranou bílou srst.',
    },
    diet: {
      en: 'It eats fish, like cod and herring, and small shrimp.',
      cs: 'Jí ryby, třeba tresky a sledě, a malé krevetky.',
    },
    predators: {
      en: 'Polar bears, orcas and Greenland sharks hunt it.',
      cs: 'Loví ho lední medvědi, kosatky a žraloci malohlaví.',
    },
  },
  {
    id: 'humpback-whale',
    name: { en: 'Humpback whale', cs: 'Keporkak' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: balaenopteridae,
      genus: 'Megaptera',
      species: 'Megaptera novaeangliae',
    },
    habitat: {
      en: 'This huge whale spends the summer in cold seas like the Gulf of Alaska and swims to warm seas for the winter. It sings long songs.',
      cs: 'Tahle obrovská velryba tráví léto ve studených mořích, třeba v Aljašském zálivu, a na zimu odplouvá do teplých moří. Zpívá dlouhé písně.',
    },
    diet: {
      en: 'It gulps huge mouthfuls of tiny shrimp called krill and small fish, and strains them out through its baleen.',
      cs: 'Nabírá obrovské doušky drobných krevetek krilu a malých rybek a cedí je přes kostice.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Orcas sometimes attack the babies.',
      cs: 'Dospělí keporkaci nemají skoro žádné nepřátele. Na mláďata ale někdy zaútočí kosatky.',
    },
  },
  {
    id: 'bald-eagle',
    name: { en: 'Bald eagle', cs: 'Orel bělohlavý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: aves,
      order: { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' },
      family: { latin: 'Accipitridae', en: 'Hawks and eagles', cs: 'Jestřábovití' },
      genus: 'Haliaeetus',
      species: 'Haliaeetus leucocephalus',
    },
    habitat: {
      en: 'This big eagle with a white head lives near rivers, lakes and sea coasts all over North America. Many live in Alaska.',
      cs: 'Tenhle velký orel s bílou hlavou žije u řek, jezer a mořských pobřeží po celé Severní Americe. Hodně jich je na Aljašce.',
    },
    diet: {
      en: 'It mostly catches fish, especially salmon. It also eats ducks and dead animals.',
      cs: 'Nejvíc loví ryby, hlavně lososy. Jí ale i kachny a mrtvá zvířata.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Raccoons, bears, owls and crows can steal the eggs and chicks.',
      cs: 'Dospělí orli nemají skoro žádné nepřátele. Vajíčka a mláďata ale mohou vybrat mývalové, medvědi, sovy nebo vrány.',
    },
  },
  {
    id: 'greenland-shark',
    name: { en: 'Greenland shark', cs: 'Žralok malohlavý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: chondrichthyes,
      order: { latin: 'Squaliformes', en: 'Dogfish sharks', cs: 'Ostrouni' },
      family: { latin: 'Somniosidae', en: 'Sleeper sharks', cs: 'Světlošovití' },
      genus: 'Somniosus',
      species: 'Somniosus microcephalus',
    },
    habitat: {
      en: 'It lives deep in the icy sea near Greenland and Canada. It swims very slowly and can live for hundreds of years.',
      cs: 'Žije hluboko v ledovém moři u Grónska a Kanady. Plave hodně pomalu a může se dožít několika set let.',
    },
    diet: {
      en: 'It eats fish, squid and seals. It also eats dead whales that sink to the sea floor.',
      cs: 'Jí ryby, olihně a tuleně. Sežere i mrtvé velryby, které klesnou na mořské dno.',
    },
    predators: {
      en: 'It is so big that almost nobody hunts it. Maybe orcas sometimes do.',
      cs: 'Je tak velký, že ho skoro nikdo neloví. Snad jen občas kosatky.',
    },
  },
  {
    id: 'bearded-seal',
    name: { en: 'Bearded seal', cs: 'Tuleň vousatý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Erignathus',
      species: 'Erignathus barbatus',
    },
    habitat: {
      en: 'It lives in the icy Arctic sea, for example north of Alaska and Canada. It rests alone on floating ice and has a big bushy moustache.',
      cs: 'Žije v ledovém severním moři, třeba na sever od Aljašky a Kanady. Odpočívá sám na plovoucích krách a má velký huňatý knír.',
    },
    diet: {
      en: 'It feels for clams, crabs, shrimp and fish on the sea floor with its long whiskers.',
      cs: 'Dlouhými vousy nahmatá na mořském dně mušle, kraby, krevety a ryby.',
    },
    predators: {
      en: 'Polar bears and orcas hunt it. Walruses sometimes catch the young ones.',
      cs: 'Loví ho lední medvědi a kosatky. Mláďata občas uloví i mrož.',
    },
  },
]
