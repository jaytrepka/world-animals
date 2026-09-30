import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const amphibians = { latin: 'Amphibia', en: 'Amphibians', cs: 'Obojživelníci' }
const carnivora = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const artiodactyla = { latin: 'Artiodactyla', en: 'Even-toed hoofed mammals and whales', cs: 'Sudokopytníci' }
const rodentia = { latin: 'Rodentia', en: 'Rodents', cs: 'Hlodavci' }
const caudata = { latin: 'Caudata', en: 'Salamanders and newts', cs: 'Ocasatí' }
const bovidae = { latin: 'Bovidae', en: 'Cattle, goats and antelopes', cs: 'Turovití' }
const sciuridae = { latin: 'Sciuridae', en: 'Squirrels', cs: 'Veverkovití' }

export const middleContent: AnimalContent[] = [
  {
    id: 'eurasian-lynx',
    name: { en: 'Eurasian lynx', cs: 'Rys ostrovid' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Felidae', en: 'Cats', cs: 'Kočkovití' },
      genus: 'Lynx',
      species: 'Lynx lynx',
    },
    habitat: {
      en: 'It lives in big, quiet forests, like in the Šumava mountains in Czechia. It has tufts of black hair on its ears.',
      cs: 'Žije ve velkých tichých lesích, třeba na Šumavě. Na špičkách uší má černé štětičky.',
    },
    diet: {
      en: 'It sneaks up quietly and hunts roe deer, hares, foxes and birds.',
      cs: 'Potichu se připlíží a loví srnce, zajíce, lišky a ptáky.',
    },
    predators: {
      en: 'Grown-up lynxes have almost no enemies. Kittens can be caught by wolves or foxes.',
      cs: 'Dospělí rysové nemají skoro žádné nepřátele. Koťata mohou ulovit vlci nebo lišky.',
    },
  },
  {
    id: 'red-fox',
    name: { en: 'Red fox', cs: 'Liška obecná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Canidae', en: 'Dogs, wolves and foxes', cs: 'Psovití' },
      genus: 'Vulpes',
      species: 'Vulpes vulpes',
    },
    habitat: {
      en: 'It lives almost everywhere in Europe: in forests, fields and even in towns. It sleeps in a burrow called a den.',
      cs: 'Žije skoro všude v Evropě: v lesích, na polích, a dokonce i ve městech. Spí v noře.',
    },
    diet: {
      en: 'It pounces on mice in the grass. It also eats rabbits, birds, beetles, fruit and berries.',
      cs: 'Skáče na myši v trávě. Jí také králíky, ptáky, brouky, ovoce a bobule.',
    },
    predators: {
      en: 'Wolves, lynxes and golden eagles can catch foxes. Eagle-owls may take the little cubs.',
      cs: 'Lišky mohou ulovit vlci, rysové a orli skalní. Malá liščata si může odnést výr.',
    },
  },
  {
    id: 'roe-deer',
    name: { en: 'Roe deer', cs: 'Srnec obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Cervidae', en: 'Deer', cs: 'Jelenovití' },
      genus: 'Capreolus',
      species: 'Capreolus capreolus',
    },
    habitat: {
      en: 'It lives at the edges of forests and in meadows and fields all over Europe. Its babies have white spots.',
      cs: 'Žije na okrajích lesů, na loukách a polích po celé Evropě. Jeho mláďata, srnčata, mají bílé skvrnky.',
    },
    diet: {
      en: 'It nibbles grass, herbs, leaves, buds and berries.',
      cs: 'Okusuje trávu, byliny, listy, pupeny a bobule.',
    },
    predators: {
      en: 'Wolves and lynxes hunt roe deer. Foxes can catch the little fawns.',
      cs: 'Srnce loví vlci a rysové. Malá srnčata může ulovit i liška.',
    },
  },
  {
    id: 'european-hedgehog',
    name: { en: 'European hedgehog', cs: 'Ježek západní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Eulipotyphla', en: 'Hedgehogs, shrews and moles', cs: 'Hmyzožravci' },
      family: { latin: 'Erinaceidae', en: 'Hedgehogs', cs: 'Ježkovití' },
      genus: 'Erinaceus',
      species: 'Erinaceus europaeus',
    },
    habitat: {
      en: 'It lives in gardens, parks, hedges and forest edges in western and central Europe. In winter it sleeps in a pile of leaves.',
      cs: 'Žije v zahradách, parcích, křovinách a na okrajích lesů v západní a střední Evropě. V zimě spí v hromadě listí.',
    },
    diet: {
      en: 'At night it snuffles around for beetles, worms, snails and caterpillars.',
      cs: 'V noci funí a hledá brouky, žížaly, slimáky a housenky.',
    },
    predators: {
      en: 'When scared it rolls into a spiky ball. Only badgers, foxes and eagle-owls can still eat it.',
      cs: 'Když se lekne, stočí se do pichlavé kuličky. Sníst ho dokážou jen jezevci, lišky a výři.',
    },
  },
  {
    id: 'wild-boar',
    name: { en: 'Wild boar', cs: 'Prase divoké' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Suidae', en: 'Pigs', cs: 'Prasatovití' },
      genus: 'Sus',
      species: 'Sus scrofa',
    },
    habitat: {
      en: 'It lives in forests all over Europe, like in Germany. It loves to roll in mud, and its piglets have stripes.',
      cs: 'Žije v lesích po celé Evropě, třeba v Německu. Rádo se válí v bahně a jeho selátka jsou pruhovaná.',
    },
    diet: {
      en: 'It digs in the ground with its snout for roots, acorns, beech nuts, mushrooms, worms and grubs.',
      cs: 'Rypákem ryje v zemi a hledá kořínky, žaludy, bukvice, houby, žížaly a larvy.',
    },
    predators: {
      en: 'Wolves and bears hunt wild boars. Lynxes and foxes can catch the little piglets.',
      cs: 'Divoká prasata loví vlci a medvědi. Malá selátka mohou ulovit i rysové a lišky.',
    },
  },
  {
    id: 'eurasian-beaver',
    name: { en: 'Eurasian beaver', cs: 'Bobr evropský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Castoridae', en: 'Beavers', cs: 'Bobrovití' },
      genus: 'Castor',
      species: 'Castor fiber',
    },
    habitat: {
      en: 'It lives by rivers and ponds, like the river Elbe in Germany. It builds dams and a house of branches called a lodge.',
      cs: 'Žije u řek a rybníků, třeba u Labe v Německu. Staví hráze a domeček z větví, kterému se říká hrad.',
    },
    diet: {
      en: 'It gnaws trees with its big orange teeth and eats the bark, twigs, leaves and water plants.',
      cs: 'Velkými oranžovými zuby ohryzává stromy a jí kůru, větvičky, listy a vodní rostliny.',
    },
    predators: {
      en: 'Wolves, lynxes and bears can catch beavers on land. Young beavers may be taken by foxes.',
      cs: 'Na souši mohou bobry ulovit vlci, rysové a medvědi. Mladé bobříky někdy chytí liška.',
    },
  },
  {
    id: 'white-stork',
    name: { en: 'White stork', cs: 'Čáp bílý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Ciconiiformes', en: 'Storks', cs: 'Brodiví' },
      family: { latin: 'Ciconiidae', en: 'Storks', cs: 'Čápovití' },
      genus: 'Ciconia',
      species: 'Ciconia ciconia',
    },
    habitat: {
      en: 'It builds big nests on roofs and chimneys in villages, and there are lots in Poland. In autumn it flies far away to Africa.',
      cs: 'Staví si velká hnízda na střechách a komínech ve vesnicích a hodně jich je v Polsku. Na podzim odlétá daleko do Afriky.',
    },
    diet: {
      en: 'It walks through wet meadows and catches frogs, mice, worms, grasshoppers and small fish.',
      cs: 'Brodí se mokrými loukami a chytá žáby, myši, žížaly, kobylky a malé rybky.',
    },
    predators: {
      en: 'Grown-up storks have few enemies. Martens, crows or eagle-owls may take eggs and chicks from the nest.',
      cs: 'Dospělí čápi mají jen málo nepřátel. Vajíčka a mláďata z hnízda ale mohou vzít kuny, vrány nebo výři.',
    },
  },
  {
    id: 'european-bison',
    name: { en: 'European bison', cs: 'Zubr evropský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Bison',
      species: 'Bison bonasus',
    },
    habitat: {
      en: 'It lives in old forests, most famously in the Białowieża Forest in Poland. It is the heaviest land animal in Europe.',
      cs: 'Žije ve starých pralesích, nejznámější je Bělověžský prales v Polsku. Je to nejtěžší suchozemské zvíře v Evropě.',
    },
    diet: {
      en: 'It eats grass, leaves, twigs, bark and acorns.',
      cs: 'Jí trávu, listy, větvičky, kůru a žaludy.',
    },
    predators: {
      en: 'Grown-up bison are too big to hunt. Only wolves sometimes catch a young or sick one.',
      cs: 'Dospělí zubři jsou na lov moc velcí. Jen vlci občas uloví mládě nebo nemocné zvíře.',
    },
  },
  {
    id: 'brown-hare',
    name: { en: 'European hare', cs: 'Zajíc polní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Lagomorpha', en: 'Rabbits and hares', cs: 'Zajícovci' },
      family: { latin: 'Leporidae', en: 'Rabbits and hares', cs: 'Zajícovití' },
      genus: 'Lepus',
      species: 'Lepus europaeus',
    },
    habitat: {
      en: 'It lives in open fields and meadows, like in Austria. It has no burrow and hides in a little hollow in the ground.',
      cs: 'Žije na otevřených polích a loukách, třeba v Rakousku. Noru nemá, schovává se v mělkém důlku v zemi.',
    },
    diet: {
      en: 'It eats grass, clover, herbs, and in winter twigs and bark.',
      cs: 'Jí trávu, jetel a byliny, v zimě i větvičky a kůru.',
    },
    predators: {
      en: 'Foxes, lynxes, eagles and buzzards hunt hares. It escapes by running very fast in zigzags.',
      cs: 'Zajíce loví lišky, rysové, orli a káně. Uteče jim tak, že běží hodně rychle a kličkuje.',
    },
  },
  {
    id: 'european-ground-squirrel',
    name: { en: 'European ground squirrel', cs: 'Sysel obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: sciuridae,
      genus: 'Spermophilus',
      species: 'Spermophilus citellus',
    },
    habitat: {
      en: 'It lives in short-grass meadows in Hungary and nearby countries, also in Czechia. It digs burrows and stands up to look around.',
      cs: 'Žije na loukách s nízkou trávou v Maďarsku a okolních zemích, i u nás. Hrabe si nory a panáčkuje, aby se rozhlédl.',
    },
    diet: {
      en: 'It eats seeds, grass, flowers, roots and sometimes insects.',
      cs: 'Jí semínka, trávu, květy, kořínky a někdy i hmyz.',
    },
    predators: {
      en: 'Foxes, polecats, eagles, falcons and buzzards hunt ground squirrels.',
      cs: 'Sysly loví lišky, tchoři, orli, sokoli a káně.',
    },
  },
  {
    id: 'european-badger',
    name: { en: 'European badger', cs: 'Jezevec lesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Mustelidae', en: 'Weasels, otters and badgers', cs: 'Lasicovití' },
      genus: 'Meles',
      species: 'Meles meles',
    },
    habitat: {
      en: 'It lives in forests and hedges across Europe, like in England. Badger families dig big burrows with many rooms.',
      cs: 'Žije v lesích a remízcích po celé Evropě, třeba v Anglii. Jezevčí rodiny si hrabou velké nory s mnoha komůrkami.',
    },
    diet: {
      en: 'It comes out at night and eats lots of earthworms, plus beetles, roots, fruit and mushrooms.',
      cs: 'Vychází v noci a jí hlavně žížaly, ale také brouky, kořínky, ovoce a houby.',
    },
    predators: {
      en: 'Grown-up badgers have few enemies, only wolves and lynxes. Young badgers can be taken by foxes or eagle-owls.',
      cs: 'Dospělí jezevci mají málo nepřátel, jen vlky a rysy. Mláďata mohou ulovit lišky nebo výři.',
    },
  },
  {
    id: 'fire-salamander',
    name: { en: 'Fire salamander', cs: 'Mlok skvrnitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: caudata,
      family: { latin: 'Salamandridae', en: 'Salamanders and newts', cs: 'Mlokovití' },
      genus: 'Salamandra',
      species: 'Salamandra salamandra',
    },
    habitat: {
      en: 'This black and yellow salamander lives in damp, shady forests with streams, like the Black Forest in Germany. It comes out when it rains.',
      cs: 'Tenhle černožlutý mlok žije ve vlhkých stinných lesích s potůčky, třeba ve Schwarzwaldu v Německu. Ven leze, když prší.',
    },
    diet: {
      en: 'It eats slugs, earthworms, spiders and beetles.',
      cs: 'Jí slimáky, žížaly, pavouky a brouky.',
    },
    predators: {
      en: 'Its bright colours warn that its skin is poisonous, so few animals eat it. Its babies in streams are eaten by fish.',
      cs: 'Pestré barvy varují, že má jedovatou kůži, a tak ho sní jen málokdo. Jeho larvy v potocích ale požírají ryby.',
    },
  },
  {
    id: 'chamois',
    name: { en: 'Chamois', cs: 'Kamzík horský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Rupicapra',
      species: 'Rupicapra rupicapra',
    },
    habitat: {
      en: 'It lives high in the mountains, like the Alps in Austria, and jumps easily over steep rocks.',
      cs: 'Žije vysoko v horách, třeba v rakouských Alpách, a lehce skáče po strmých skalách.',
    },
    diet: {
      en: 'It eats mountain grass, herbs and flowers. In winter it nibbles twigs, moss and lichen.',
      cs: 'Jí horskou trávu, byliny a květiny. V zimě okusuje větvičky, mech a lišejníky.',
    },
    predators: {
      en: 'Wolves and lynxes hunt chamois. Golden eagles can catch the young kids.',
      cs: 'Kamzíky loví vlci a rysové. Malá kůzlata mohou ulovit orli skalní.',
    },
  },
  {
    id: 'alpine-marmot',
    name: { en: 'Alpine marmot', cs: 'Svišť horský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: sciuridae,
      genus: 'Marmota',
      species: 'Marmota marmota',
    },
    habitat: {
      en: 'It lives in family burrows on high mountain meadows in the Alps, like in Switzerland. It sleeps all winter long.',
      cs: 'Žije s rodinou v norách na vysokohorských loukách v Alpách, třeba ve Švýcarsku. Celou zimu prospí.',
    },
    diet: {
      en: 'It eats grass, herbs, flowers and roots, and gets very fat before winter.',
      cs: 'Jí trávu, byliny, květiny a kořínky a před zimou pořádně ztloustne.',
    },
    predators: {
      en: 'Golden eagles and foxes hunt marmots. When a marmot sees danger, it whistles loudly to warn the others.',
      cs: 'Sviště loví orli skalní a lišky. Když svišť uvidí nebezpečí, hlasitě hvízdne a varuje ostatní.',
    },
  },
  {
    id: 'alpine-ibex',
    name: { en: 'Alpine ibex', cs: 'Kozorožec horský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Capra',
      species: 'Capra ibex',
    },
    habitat: {
      en: 'This wild goat with huge curved horns lives on steep rocks high in the Alps, like in France and Italy.',
      cs: 'Tahle divoká koza s obrovskými zahnutými rohy žije na strmých skalách vysoko v Alpách, třeba ve Francii a v Itálii.',
    },
    diet: {
      en: 'It eats grass, herbs, leaves and moss. It even climbs steep walls to lick salt.',
      cs: 'Jí trávu, byliny, listy a mech. Dokonce šplhá po strmých stěnách, aby si olízl sůl.',
    },
    predators: {
      en: 'Grown-ups have few enemies, sometimes wolves or lynxes. Golden eagles can catch the young kids.',
      cs: 'Dospělí kozorožci mají málo nepřátel, občas vlky nebo rysy. Kůzlata mohou ulovit orli skalní.',
    },
  },
  {
    id: 'harbour-seal',
    name: { en: 'Harbour seal', cs: 'Tuleň obecný' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Phocidae', en: 'True seals', cs: 'Tuleňovití' },
      genus: 'Phoca',
      species: 'Phoca vitulina',
    },
    habitat: {
      en: 'It lives along the coasts of the North Sea and the Atlantic. At low tide it rests on sandbanks in the Wadden Sea.',
      cs: 'Žije u pobřeží Severního moře a Atlantiku. Při odlivu odpočívá na písečných mělčinách ve Waddenském moři.',
    },
    diet: {
      en: 'It eats fish, like herring and flatfish, and also squid and crabs.',
      cs: 'Jí ryby, třeba sledě a platýse, a také olihně a kraby.',
    },
    predators: {
      en: 'Orcas and big sharks sometimes hunt harbour seals.',
      cs: 'Občas je loví kosatky a velcí žraloci.',
    },
  },
  {
    id: 'saiga',
    name: { en: 'Saiga antelope', cs: 'Sajga tatarská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: bovidae,
      genus: 'Saiga',
      species: 'Saiga tatarica',
    },
    habitat: {
      en: 'It lives in herds on the dry, flat steppe of Kalmykia in southern Russia. Its big funny nose filters out dust.',
      cs: 'Žije ve stádech na suché rovné stepi v Kalmycku na jihu Ruska. Velký legrační nos jí pomáhá čistit vzduch od prachu.',
    },
    diet: {
      en: 'It eats grasses, herbs and small shrubs of the steppe.',
      cs: 'Jí stepní trávy, byliny a nízké keříky.',
    },
    predators: {
      en: 'Wolves hunt saigas. Foxes and eagles can catch the young calves.',
      cs: 'Sajgy loví vlci. Mláďata mohou ulovit i lišky a orli.',
    },
  },
  {
    id: 'olm',
    name: { en: 'Olm', cs: 'Macarát jeskynní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: caudata,
      family: { latin: 'Proteidae', en: 'Olms and mudpuppies', cs: 'Macarátovití' },
      genus: 'Proteus',
      species: 'Proteus anguinus',
    },
    habitat: {
      en: 'This pale pink salamander lives in dark underground cave waters, like in Slovenia. It is almost blind.',
      cs: 'Tenhle bledě růžový obojživelník žije v temné vodě v podzemních jeskyních, třeba ve Slovinsku. Skoro nic nevidí.',
    },
    diet: {
      en: 'It eats tiny water creatures like small shrimps, snails and larvae. It can live for years without food.',
      cs: 'Jí drobné vodní živočichy, třeba malé korýše, plže a larvy. Bez jídla vydrží i několik let.',
    },
    predators: {
      en: 'Deep in its caves, almost nobody hunts it.',
      cs: 'Hluboko v jeskyních ho skoro nikdo neloví.',
    },
  },
]
