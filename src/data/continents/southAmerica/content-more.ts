import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, birds, reptiles, amphibians,
  anura, carnivora, primates, rodentia, artiodactyla, squamata, testudines, crocodilia, pilosa, cingulata,
  chinchillidae, felidae, canidae, cervidae, otariidae, chlamyphoridae,
} from './taxa'

const procyonidae = { latin: 'Procyonidae', en: 'Raccoons and coatis', cs: 'Medvídkovití' }
const alligatoridae = { latin: 'Alligatoridae', en: 'Alligators and caimans', cs: 'Aligátorovití' }
const myrmecophagidae = { latin: 'Myrmecophagidae', en: 'Anteaters', cs: 'Mravenečníkovití' }
const sirenia = { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' }
const trichechidae = { latin: 'Trichechidae', en: 'Manatees', cs: 'Kapustňákovití' }

export const moreContent: AnimalContent[] = [
  // ---------- north ----------
  {
    id: 'kinkajou',
    name: { en: 'Kinkajou', cs: 'Kynkažu' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: procyonidae,
      genus: 'Potos',
      species: 'Potos flavus',
    },
    habitat: {
      en: 'It lives high in the treetops of the rainforest. It climbs at night and can hold on to branches with its long tail.',
      cs: 'Žije vysoko v korunách pralesních stromů. Šplhá v noci a na větvích se umí držet svým dlouhým ocasem.',
    },
    diet: {
      en: 'It loves sweet fruit like figs, and licks flower nectar and honey with its very long tongue.',
      cs: 'Miluje sladké ovoce, třeba fíky, a svým předlouhým jazykem vylizuje nektar z květů i med.',
    },
    predators: {
      en: 'Jaguars, ocelots, big snakes and harpy eagles may catch it.',
      cs: 'Může ho ulovit jaguár, ocelot, velký had nebo harpyje.',
    },
  },
  {
    id: 'bald-uakari',
    name: { en: 'Bald uakari', cs: 'Uakari šarlatolící' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Pitheciidae', en: 'Sakis and uakaris', cs: 'Chvostanovití' },
      genus: 'Cacajao',
      species: 'Cacajao calvus',
    },
    habitat: {
      en: 'It lives in Amazon forests that are flooded by rivers for part of the year. Its bald face is bright red, like a tomato.',
      cs: 'Žije v amazonských lesích, které řeky na část roku zaplaví. Jeho lysý obličej je jasně červený jako rajče.',
    },
    diet: {
      en: 'It cracks hard seeds and nuts with its strong teeth, and also eats fruit and flowers.',
      cs: 'Silnými zuby louská tvrdá semena a oříšky a jí také ovoce a květy.',
    },
    predators: {
      en: 'Harpy eagles and other big birds of prey hunt it. Jaguars and big snakes may catch it too.',
      cs: 'Loví ho harpyje a jiní velcí dravci. Chytit ho může i jaguár nebo velký had.',
    },
  },
  {
    id: 'black-caiman',
    name: { en: 'Black caiman', cs: 'Kajman černý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: crocodilia,
      family: alligatoridae,
      genus: 'Melanosuchus',
      species: 'Melanosuchus niger',
    },
    habitat: {
      en: 'It lives in slow rivers, lakes and flooded forests of the Amazon. It is the biggest caiman, as long as a small car.',
      cs: 'Žije v pomalých řekách, jezerech a zaplavených lesích Amazonie. Je to největší kajman, dlouhý jako malé auto.',
    },
    diet: {
      en: 'It eats fish, turtles, birds and even capybaras that come to the water to drink.',
      cs: 'Jí ryby, želvy, ptáky, a dokonce i kapybary, které přijdou k vodě pít.',
    },
    predators: {
      en: 'Big adults have almost no enemies. Jaguars and anacondas can catch young ones, and many animals eat the eggs.',
      cs: 'Velcí dospělí nemají skoro žádné nepřátele. Mláďata může chytit jaguár nebo anakonda a vejce jí mnoho zvířat.',
    },
  },
  {
    id: 'amazonian-manatee',
    name: { en: 'Amazonian manatee', cs: 'Kapustňák jihoamerický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: sirenia,
      family: trichechidae,
      genus: 'Trichechus',
      species: 'Trichechus inunguis',
    },
    habitat: {
      en: 'It lives only in the fresh water of the Amazon River and its lakes. It is the smallest manatee and has a white patch on its chest.',
      cs: 'Žije jen ve sladké vodě řeky Amazonky a jejích jezer. Je to nejmenší kapustňák a na hrudi má bílou skvrnu.',
    },
    diet: {
      en: 'It munches water plants and grasses all day long, like a big gentle underwater cow.',
      cs: 'Celý den spásá vodní rostliny a trávy, jako velká mírná podvodní kráva.',
    },
    predators: {
      en: 'Jaguars and big caimans may sometimes catch one, especially young ones.',
      cs: 'Občas ho může ulovit jaguár nebo velký kajman, hlavně když je mladý.',
    },
  },
  {
    id: 'matamata',
    name: { en: 'Mata mata', cs: 'Matamata třásnitá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Chelidae', en: 'Side-necked turtles', cs: 'Matamatovití' },
      genus: 'Chelus',
      species: 'Chelus fimbriata',
    },
    habitat: {
      en: 'It lives in muddy, slow streams and swamps of the Amazon. Its bumpy shell and flat head look just like old leaves and bark.',
      cs: 'Žije v bahnitých, pomalých potocích a bažinách Amazonie. Hrbolatý krunýř a placatá hlava vypadají jako staré listí a kůra.',
    },
    diet: {
      en: 'It waits without moving, then opens its big mouth very fast and sucks in a fish like a vacuum cleaner.',
      cs: 'Čeká bez hnutí, pak bleskově otevře velkou tlamu a nasaje rybu jako vysavač.',
    },
    predators: {
      en: 'Grown-ups are well hidden and have few enemies. Caimans, birds and big fish may eat the babies.',
      cs: 'Dospělé jsou dobře schované a mají málo nepřátel. Mláďata mohou sníst kajmani, ptáci a velké ryby.',
    },
  },
  {
    id: 'hoatzin',
    name: { en: 'Hoatzin', cs: 'Hoacin chocholatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Opisthocomiformes', en: 'Hoatzins', cs: 'Hoacini' },
      family: { latin: 'Opisthocomidae', en: 'Hoatzins', cs: 'Hoacinovití' },
      genus: 'Opisthocomus',
      species: 'Opisthocomus hoazin',
    },
    habitat: {
      en: 'It lives in bushes over rivers and swamps. The chicks have little claws on their wings to climb back up if they fall into the water.',
      cs: 'Žije v křoví nad řekami a bažinami. Mláďata mají na křídlech drápky, aby vyšplhala zpátky, když spadnou do vody.',
    },
    diet: {
      en: 'It eats leaves. They rot in its big crop like in a cow’s tummy, so it smells a bit like manure!',
      cs: 'Jí listy. Ty mu kvasí ve velkém voleti jako v žaludku krávy, a proto trochu voní jako hnůj!',
    },
    predators: {
      en: 'Hawks and eagles hunt it. Monkeys and snakes steal eggs and chicks.',
      cs: 'Loví ho jestřábi a orli. Opice a hadi mu kradou vejce a mláďata.',
    },
  },
  {
    id: 'surinam-toad',
    name: { en: 'Common Surinam toad', cs: 'Pipa americká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: anura,
      family: { latin: 'Pipidae', en: 'Tongueless frogs', cs: 'Pipovití' },
      genus: 'Pipa',
      species: 'Pipa pipa',
    },
    habitat: {
      en: 'It lives in muddy pools and swamps of the rainforest. It is as flat as a leaf, and the babies grow in little pockets in their mother’s back.',
      cs: 'Žije v bahnitých tůních a bažinách pralesa. Je placatá jako list a mláďata jí vyrůstají v jamkách na zádech.',
    },
    diet: {
      en: 'It feels for small fish, worms and shrimps with the star-shaped tips of its fingers and gulps them down.',
      cs: 'Hvězdičkovými konečky prstů nahmatá malé rybky, červy a krevetky a spolkne je.',
    },
    predators: {
      en: 'Birds, snakes, caimans and big fish eat it.',
      cs: 'Jedí ji ptáci, hadi, kajmani a velké ryby.',
    },
  },
  {
    id: 'boa-constrictor',
    name: { en: 'Boa constrictor', cs: 'Hroznýš královský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Boidae', en: 'Boas', cs: 'Hroznýšovití' },
      genus: 'Boa',
      species: 'Boa constrictor',
    },
    habitat: {
      en: 'It lives in forests, grasslands and even near villages. It is a big snake with no poison, and it climbs trees well.',
      cs: 'Žije v lesích, na travnatých pláních, a dokonce i u vesnic. Je to velký nejedovatý had, který dobře šplhá po stromech.',
    },
    diet: {
      en: 'It catches rats, birds, lizards and small mammals, wraps itself around them and squeezes.',
      cs: 'Loví krysy, ptáky, ještěrky a malé savce. Obtočí se kolem nich a pevně je stiskne.',
    },
    predators: {
      en: 'Jaguars, caimans and big birds of prey may eat it. Young boas are also caught by other snakes.',
      cs: 'Může ho sežrat jaguár, kajman nebo velký dravec. Mladé hroznýše chytají i jiní hadi.',
    },
  },
  {
    id: 'galapagos-sea-lion',
    name: { en: 'Galápagos sea lion', cs: 'Lachtan galapážský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: otariidae,
      genus: 'Zalophus',
      species: 'Zalophus wollebaeki',
    },
    habitat: {
      en: 'It lives only on the Galápagos Islands. It loves lying on sunny beaches and is so curious that it swims right up to divers.',
      cs: 'Žije jen na Galapágách. Rád se vyvaluje na sluníčku na plážích a je tak zvědavý, že připlave až k potápěčům.',
    },
    diet: {
      en: 'It dives for sardines and other fish, and sometimes catches octopuses and squids.',
      cs: 'Potápí se pro sardinky a jiné ryby a občas chytí i chobotnici nebo olihni.',
    },
    predators: {
      en: 'Sharks and killer whales hunt it in the sea.',
      cs: 'V moři ho loví žraloci a kosatky.',
    },
  },

  // ---------- middle ----------
  {
    id: 'andean-flamingo',
    name: { en: 'Andean flamingo', cs: 'Plameňák andský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Phoenicopteriformes', en: 'Flamingos', cs: 'Plameňáci' },
      family: { latin: 'Phoenicopteridae', en: 'Flamingos', cs: 'Plameňákovití' },
      genus: 'Phoenicoparrus',
      species: 'Phoenicoparrus andinus',
    },
    habitat: {
      en: 'It lives on salty lakes high up in the Andes mountains, where it is very cold at night. It has yellow legs.',
      cs: 'Žije na slaných jezerech vysoko v Andách, kde je v noci velká zima. Má žluté nohy.',
    },
    diet: {
      en: 'It puts its bent beak upside down in the water and strains out tiny algae, which make it pink.',
      cs: 'Strčí zahnutý zobák vzhůru nohama do vody a procedí drobné řasy. Právě z nich je růžový.',
    },
    predators: {
      en: 'Foxes and big birds may take chicks and eggs. Grown-ups have few enemies.',
      cs: 'Lišky a velcí ptáci mohou ukořistit mláďata a vejce. Dospělí mají málo nepřátel.',
    },
  },
  {
    id: 'southern-tamandua',
    name: { en: 'Southern tamandua', cs: 'Mravenečník čtyřprstý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: pilosa,
      family: myrmecophagidae,
      genus: 'Tamandua',
      species: 'Tamandua tetradactyla',
    },
    habitat: {
      en: 'It lives in forests and savannas and climbs trees with its strong tail. It looks like it is wearing a black vest.',
      cs: 'Žije v lesích i savanách a po stromech šplhá s pomocí silného ocasu. Vypadá, jako by měl na sobě černou vestičku.',
    },
    diet: {
      en: 'It rips open ant and termite nests with its big claws and licks up the insects with its long sticky tongue.',
      cs: 'Velkými drápy rozdrápne hnízda mravenců a termitů a hmyz vylíže dlouhým lepkavým jazykem.',
    },
    predators: {
      en: 'Jaguars, pumas and harpy eagles hunt it. When scared, it stands up and swings its claws.',
      cs: 'Loví ho jaguáři, pumy a harpyje. Když se lekne, postaví se na zadní a ohání se drápy.',
    },
  },
  {
    id: 'southern-three-banded-armadillo',
    name: { en: 'Southern three-banded armadillo', cs: 'Pásovec kulovitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: cingulata,
      family: chlamyphoridae,
      genus: 'Tolypeutes',
      species: 'Tolypeutes matacus',
    },
    habitat: {
      en: 'It lives in the dry Chaco bush and grasslands. When danger comes, it rolls up into a hard ball, like a little football.',
      cs: 'Žije v suchých křovinách a na pláních Chaca. Když hrozí nebezpečí, stočí se do tvrdé koule jako malý míč.',
    },
    diet: {
      en: 'It sniffs out ants, termites and beetle grubs, and also eats fruit.',
      cs: 'Vyčenichá mravence, termity a larvy brouků a jí také ovoce.',
    },
    predators: {
      en: 'Pumas, jaguars and foxes try to catch it, but its rolled-up shell is very hard to open.',
      cs: 'Snaží se ho chytit pumy, jaguáři a lišky, ale stočený krunýř se jim otevírá jen těžko.',
    },
  },
  {
    id: 'bush-dog',
    name: { en: 'Bush dog', cs: 'Pes pralesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Speothos',
      species: 'Speothos venaticus',
    },
    habitat: {
      en: 'It lives in family packs in forests near rivers. It has short legs and even little webs between its toes, so it swims well.',
      cs: 'Žije v rodinných smečkách v lesích u řek. Má krátké nohy a mezi prsty dokonce malé blány, takže dobře plave.',
    },
    diet: {
      en: 'The pack hunts together for pacas, agoutis, armadillos and other animals, even bigger than themselves.',
      cs: 'Smečka loví společně paky, aguti, pásovce a jiná zvířata, i větší, než jsou sami.',
    },
    predators: {
      en: 'Jaguars and pumas may attack it.',
      cs: 'Napadnout ho může jaguár nebo puma.',
    },
  },
  {
    id: 'jaguarundi',
    name: { en: 'Jaguarundi', cs: 'Jaguarundi' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: felidae,
      genus: 'Herpailurus',
      species: 'Herpailurus yagouaroundi',
    },
    habitat: {
      en: 'It lives in bushy forests and grasslands. This small wild cat has a long body and short legs, a bit like an otter.',
      cs: 'Žije v křovinatých lesích a na pláních. Tahle malá divoká kočka má dlouhé tělo a krátké nohy, trochu jako vydra.',
    },
    diet: {
      en: 'It hunts in the daytime for mice, birds, lizards and rabbits.',
      cs: 'Loví ve dne myši, ptáky, ještěrky a králíky.',
    },
    predators: {
      en: 'Pumas, jaguars and big snakes may catch it.',
      cs: 'Chytit ji může puma, jaguár nebo velký had.',
    },
  },
  {
    id: 'margay',
    name: { en: 'Margay', cs: 'Margay' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: felidae,
      genus: 'Leopardus',
      species: 'Leopardus wiedii',
    },
    habitat: {
      en: 'It lives in rainforests and spends most of its life in trees. It can run head-first down a tree trunk like a squirrel.',
      cs: 'Žije v deštných pralesích a skoro celý život tráví na stromech. Umí seběhnout po kmeni hlavou dolů jako veverka.',
    },
    diet: {
      en: 'At night it catches birds, tree frogs, lizards, squirrels and small monkeys up in the branches.',
      cs: 'V noci chytá v korunách stromů ptáky, rosničky, ještěrky, veverky i malé opičky.',
    },
    predators: {
      en: 'Jaguars, pumas, harpy eagles and big snakes may hunt it.',
      cs: 'Lovit ji může jaguár, puma, harpyje nebo velký had.',
    },
  },
  {
    id: 'mountain-viscacha',
    name: { en: 'Southern viscacha', cs: 'Činčila ušatá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: chinchillidae,
      genus: 'Lagidium',
      species: 'Lagidium viscacia',
    },
    habitat: {
      en: 'It lives among the rocks high in the Andes. It looks like a rabbit with a long curly tail and loves to sunbathe in the morning.',
      cs: 'Žije mezi skalami vysoko v Andách. Vypadá jako králík s dlouhým stočeným ocasem a ráno se ráda vyhřívá na sluníčku.',
    },
    diet: {
      en: 'It nibbles grass, moss and lichens that grow between the rocks.',
      cs: 'Okusuje trávu, mech a lišejníky, které rostou mezi kameny.',
    },
    predators: {
      en: 'Foxes, pumas, Andean cats and big birds of prey hunt it. When one whistles a warning, they all hide.',
      cs: 'Loví ji lišky, pumy, kočky horské a velcí dravci. Když jedna varovně hvízdne, všechny se schovají.',
    },
  },
  {
    id: 'lowland-paca',
    name: { en: 'Lowland paca', cs: 'Paka nížinná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Cuniculidae', en: 'Pacas', cs: 'Pakovití' },
      genus: 'Cuniculus',
      species: 'Cuniculus paca',
    },
    habitat: {
      en: 'It lives in forests close to rivers and streams. This big rodent has white spots in rows on its brown fur.',
      cs: 'Žije v lesích blízko řek a potoků. Tenhle velký hlodavec má na hnědé srsti bílé skvrny v řadách.',
    },
    diet: {
      en: 'At night it looks for fallen fruit, seeds, roots and leaves.',
      cs: 'V noci hledá spadané ovoce, semena, kořínky a listy.',
    },
    predators: {
      en: 'Jaguars, pumas, ocelots and bush dogs hunt it. It escapes by jumping into the water.',
      cs: 'Loví ji jaguáři, pumy, oceloti a psi pralesní. Uniká tak, že skočí do vody.',
    },
  },

  // ---------- south ----------
  {
    id: 'marsh-deer',
    name: { en: 'Marsh deer', cs: 'Jelenec bahenní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Blastocerus',
      species: 'Blastocerus dichotomus',
    },
    habitat: {
      en: 'It lives in big wet marshes, like the Paraná delta and the Pantanal. It is the largest deer in South America.',
      cs: 'Žije ve velkých mokřadech, třeba v deltě řeky Paraná nebo v Pantanalu. Je to největší jelen Jižní Ameriky.',
    },
    diet: {
      en: 'It wades in the water and eats water plants, reeds and grass.',
      cs: 'Brodí se vodou a spásá vodní rostliny, rákos a trávu.',
    },
    predators: {
      en: 'Jaguars and pumas hunt it. Caimans may catch a fawn.',
      cs: 'Loví ho jaguáři a pumy. Kolouška může chytit kajman.',
    },
  },
  {
    id: 'pink-fairy-armadillo',
    name: { en: 'Pink fairy armadillo', cs: 'Pláštník malý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: cingulata,
      family: chlamyphoridae,
      genus: 'Chlamyphorus',
      species: 'Chlamyphorus truncatus',
    },
    habitat: {
      en: 'It lives under the sand in the dry plains of Argentina. It is the smallest armadillo, fits in your hand and has a pink shell.',
      cs: 'Žije pod pískem na suchých pláních Argentiny. Je to nejmenší pásovec, vejde se do dlaně a má růžový krunýř.',
    },
    diet: {
      en: 'It digs underground for ants, beetle grubs and worms, and also eats roots.',
      cs: 'Pod zemí vyhrabává mravence, larvy brouků a červy a jí také kořínky.',
    },
    predators: {
      en: 'Foxes, owls and pet dogs and cats may catch it when it comes up to the surface.',
      cs: 'Když vyleze na povrch, mohou ho chytit lišky, sovy nebo domácí psi a kočky.',
    },
  },
  {
    id: 'geoffroys-cat',
    name: { en: "Geoffroy's cat", cs: 'Kočka slaništní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: felidae,
      genus: 'Leopardus',
      species: 'Leopardus geoffroyi',
    },
    habitat: {
      en: 'It lives in the bushy plains and dry forests of Argentina and Patagonia. This spotted wild cat is about as big as a pet cat.',
      cs: 'Žije v křovinatých pláních a suchých lesích Argentiny a Patagonie. Tahle skvrnitá divoká kočka je velká asi jako domácí kočka.',
    },
    diet: {
      en: 'It hunts mice, hares, birds, lizards and frogs, and can even catch fish.',
      cs: 'Loví myši, zajíce, ptáky, ještěrky a žáby a umí chytit i rybu.',
    },
    predators: {
      en: 'Pumas and big birds of prey may catch it, especially young ones.',
      cs: 'Chytit ji může puma nebo velký dravec, hlavně když je mladá.',
    },
  },
  {
    id: 'degu',
    name: { en: 'Common degu', cs: 'Osmák degu' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: { latin: 'Octodontidae', en: 'Degus and their relatives', cs: 'Osmákovití' },
      genus: 'Octodon',
      species: 'Octodon degus',
    },
    habitat: {
      en: 'It lives in big families in burrows on the dry, bushy hills of central Chile. It is awake in the daytime and chats with squeaks.',
      cs: 'Žije ve velkých rodinách v norách na suchých, křovinatých kopcích středního Chile. Je vzhůru ve dne a povídá si pískáním.',
    },
    diet: {
      en: 'It eats grass, leaves, seeds and bark.',
      cs: 'Jí trávu, listy, semena a kůru.',
    },
    predators: {
      en: 'Foxes, owls, hawks and snakes hunt it. If caught by the tail, it can leave the tail skin behind and run away.',
      cs: 'Loví ho lišky, sovy, jestřábi a hadi. Když ho chytí za ocas, nechá jim kůži z ocasu a uteče.',
    },
  },
  {
    id: 'huemul',
    name: { en: 'South Andean deer', cs: 'Huemul jižní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: cervidae,
      genus: 'Hippocamelus',
      species: 'Hippocamelus bisulcus',
    },
    habitat: {
      en: 'It lives in the cold mountain forests of Patagonia in Chile and Argentina. It is a stocky deer and is on the coat of arms of Chile.',
      cs: 'Žije v chladných horských lesích Patagonie v Chile a Argentině. Je to podsaditý jelen a je ve státním znaku Chile.',
    },
    diet: {
      en: 'It eats leaves of bushes, grass, herbs and moss.',
      cs: 'Jí listy keřů, trávu, byliny a mech.',
    },
    predators: {
      en: 'The puma is its main enemy. Foxes may catch the fawns.',
      cs: 'Jeho hlavním nepřítelem je puma. Koloušky mohou ulovit lišky.',
    },
  },
  {
    id: 'crab-eating-fox',
    name: { en: 'Crab-eating fox', cs: 'Maikong' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Cerdocyon',
      species: 'Cerdocyon thous',
    },
    habitat: {
      en: 'It lives in grasslands, forests and wetlands, often in pairs. It comes out at night and trots along paths and riverbanks.',
      cs: 'Žije na loukách, v lesích i mokřadech, často v páru. Vychází v noci a klusá po stezkách a březích řek.',
    },
    diet: {
      en: 'It eats almost anything: crabs on muddy shores, frogs, mice, insects, eggs and lots of fruit.',
      cs: 'Jí skoro všechno: kraby na bahnitých březích, žáby, myši, hmyz, vejce a hodně ovoce.',
    },
    predators: {
      en: 'Pumas and jaguars may hunt it. Big birds of prey may take the pups.',
      cs: 'Lovit ho může puma nebo jaguár. Štěňata mohou uchvátit velcí dravci.',
    },
  },
]
