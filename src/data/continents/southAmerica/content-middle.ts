import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mollusca, mammals, birds, reptiles, amphibians, cephalopods,
  anura, carnivora, primates, rodentia, artiodactyla, whales, crocodilia, pilosa, cingulata,
  callitrichidae, camelidae, caviidae, felidae, canidae, chlamyphoridae,
} from './taxa'

export const middleContent: AnimalContent[] = [
  {
    id: 'jaguar',
    name: { en: 'Jaguar', cs: 'Jaguár americký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: felidae,
      genus: 'Panthera',
      species: 'Panthera onca',
    },
    habitat: {
      en: 'It lives in rainforests and big wetlands like the Pantanal. It is the biggest cat in the Americas and loves to swim.',
      cs: 'Žije v deštných pralesích a velkých mokřadech, jako je Pantanal. Je to největší kočkovitá šelma Ameriky a rád plave.',
    },
    diet: {
      en: 'It hunts capybaras, deer, peccaries, turtles and even caimans. Its bite is super strong.',
      cs: 'Loví kapybary, jeleny, pekari, želvy, a dokonce i kajmany. Má neuvěřitelně silný stisk čelistí.',
    },
    predators: {
      en: 'Grown-up jaguars have no natural enemies. Cubs can be caught by anacondas or caimans.',
      cs: 'Dospělí jaguáři nemají v přírodě žádné nepřátele. Mláďata může ulovit anakonda nebo kajman.',
    },
  },
  {
    id: 'capybara',
    name: { en: 'Capybara', cs: 'Kapybara' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: rodentia,
      family: caviidae,
      genus: 'Hydrochoerus',
      species: 'Hydrochoerus hydrochaeris',
    },
    habitat: {
      en: 'It lives in groups near rivers, lakes and marshes, like the Iberá wetlands in Argentina. It is the biggest rodent in the world.',
      cs: 'Žije ve skupinách u řek, jezer a bažin, třeba v mokřadech Iberá v Argentině. Je to největší hlodavec na světě.',
    },
    diet: {
      en: 'It eats grass and water plants.',
      cs: 'Spásá trávu a vodní rostliny.',
    },
    predators: {
      en: 'Jaguars, pumas, anacondas and caimans hunt it. Young ones can also be caught by big birds of prey.',
      cs: 'Loví ji jaguáři, pumy, anakondy a kajmani. Mláďata mohou ulovit i velcí draví ptáci.',
    },
  },
  {
    id: 'yacare-caiman',
    name: { en: 'Yacare caiman', cs: 'Kajman yakaré' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: crocodilia,
      family: { latin: 'Alligatoridae', en: 'Alligators and caimans', cs: 'Aligátorovití' },
      genus: 'Caiman',
      species: 'Caiman yacare',
    },
    habitat: {
      en: 'It lives in rivers, lakes and swamps. In the Pantanal you can see thousands of them lying in the sun.',
      cs: 'Žije v řekách, jezerech a bažinách. V Pantanalu jich můžeš vidět tisíce, jak se vyhřívají na slunci.',
    },
    diet: {
      en: 'It mostly eats fish, especially piranhas. It also catches snails, birds and small animals.',
      cs: 'Jí hlavně ryby, nejvíc piraně. Chytá také plže, ptáky a malá zvířata.',
    },
    predators: {
      en: 'Jaguars and anacondas can catch grown-ups. Eggs and babies are eaten by birds, foxes, lizards and big fish.',
      cs: 'Dospělého kajmana může ulovit jaguár nebo anakonda. Vajíčka a mláďata žerou ptáci, lišky, ještěři a velké ryby.',
    },
  },
  {
    id: 'toco-toucan',
    name: { en: 'Toco toucan', cs: 'Tukan obrovský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Piciformes', en: 'Woodpeckers and toucans', cs: 'Šplhavci' },
      family: { latin: 'Ramphastidae', en: 'Toucans', cs: 'Tukanovití' },
      genus: 'Ramphastos',
      species: 'Ramphastos toco',
    },
    habitat: {
      en: 'It lives in open woods, savannas and along rivers in the middle of South America. Its huge orange beak is very light.',
      cs: 'Žije v řídkých lesích, savanách a podél řek ve střední části Jižní Ameriky. Jeho obrovský oranžový zobák je velmi lehký.',
    },
    diet: {
      en: 'It mostly eats fruit. Sometimes it also eats insects, eggs and baby birds.',
      cs: 'Jí hlavně ovoce. Někdy si dá i hmyz, vajíčka nebo ptačí mláďata.',
    },
    predators: {
      en: 'Eagles, hawks and owls can catch it. Snakes and monkeys eat eggs and chicks.',
      cs: 'Může ho ulovit orel, jiný dravec nebo sova. Vajíčka a mláďata žerou hadi a opice.',
    },
  },
  {
    id: 'giant-anteater',
    name: { en: 'Giant anteater', cs: 'Mravenečník velký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: pilosa,
      family: { latin: 'Myrmecophagidae', en: 'Anteaters', cs: 'Mravenečníkovití' },
      genus: 'Myrmecophaga',
      species: 'Myrmecophaga tridactyla',
    },
    habitat: {
      en: 'It lives in grasslands, savannas and forests. It has a long nose and a big bushy tail.',
      cs: 'Žije na travnatých pláních, v savanách a lesích. Má dlouhý čenich a velký huňatý ocas.',
    },
    diet: {
      en: 'It rips open ant and termite nests with its big claws and licks up thousands of insects with its long sticky tongue.',
      cs: 'Silnými drápy rozhrabe mraveniště a termitiště a dlouhým lepkavým jazykem vylíže tisíce mravenců a termitů.',
    },
    predators: {
      en: 'Jaguars and pumas can hunt it, but it defends itself with its sharp claws.',
      cs: 'Může ho ulovit jaguár nebo puma, ale mravenečník se brání ostrými drápy.',
    },
  },
  {
    id: 'maned-wolf',
    name: { en: 'Maned wolf', cs: 'Pes hřivnatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: canidae,
      genus: 'Chrysocyon',
      species: 'Chrysocyon brachyurus',
    },
    habitat: {
      en: 'It lives in the grasslands and savannas of Brazil. It looks like a red fox on very long legs.',
      cs: 'Žije na travnatých pláních a v savanách Brazílie. Vypadá jako liška na hodně dlouhých nohách.',
    },
    diet: {
      en: 'It eats small animals like rodents, birds and armadillos, and lots of fruit, especially the "wolf apple".',
      cs: 'Loví malá zvířata, jako jsou hlodavci, ptáci a pásovci, a jí hodně ovoce, hlavně takzvané „vlčí jablko“.',
    },
    predators: {
      en: 'Grown-ups have few enemies, sometimes pumas or jaguars. Pups can be caught by big birds of prey.',
      cs: 'Dospělí mají málo nepřátel, občas je napadne puma nebo jaguár. Štěňata mohou ulovit velcí draví ptáci.',
    },
  },
  {
    id: 'giant-armadillo',
    name: { en: 'Giant armadillo', cs: 'Pásovec velký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: cingulata,
      family: chlamyphoridae,
      genus: 'Priodontes',
      species: 'Priodontes maximus',
    },
    habitat: {
      en: 'It lives in forests and grasslands and digs big burrows. It is the biggest armadillo in the world and comes out only at night.',
      cs: 'Žije v lesích a na travnatých pláních a hrabe si velké nory. Je to největší pásovec na světě a ven vychází jen v noci.',
    },
    diet: {
      en: 'It digs up termites and ants with its huge front claws. It also eats worms and spiders.',
      cs: 'Obrovskými předními drápy vyhrabává termity a mravence. Jí také žížaly a pavouky.',
    },
    predators: {
      en: 'Its hard armour protects it. Only jaguars and pumas sometimes catch one.',
      cs: 'Chrání ho tvrdý pancíř. Jen občas ho uloví jaguár nebo puma.',
    },
  },
  {
    id: 'golden-lion-tamarin',
    name: { en: 'Golden lion tamarin', cs: 'Lvíček zlatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: callitrichidae,
      genus: 'Leontopithecus',
      species: 'Leontopithecus rosalia',
    },
    habitat: {
      en: 'It lives only in the Atlantic rainforest near Rio de Janeiro in Brazil. Its shiny golden fur looks like a lion’s mane.',
      cs: 'Žije jen v atlantském deštném lese nedaleko Rio de Janeira v Brazílii. Jeho lesklá zlatá srst vypadá jako lví hříva.',
    },
    diet: {
      en: 'It eats fruit, flowers, nectar, insects and small frogs and lizards.',
      cs: 'Jí ovoce, květy, nektar, hmyz a malé žáby a ještěrky.',
    },
    predators: {
      en: 'Hawks, snakes, owls and wild cats hunt it.',
      cs: 'Loví ho dravci, hadi, sovy a divoké kočky.',
    },
  },
  {
    id: 'humpback-whale',
    name: { en: 'Humpback whale', cs: 'Keporkak' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: whales,
      family: { latin: 'Balaenopteridae', en: 'Rorquals', cs: 'Plejtvákovití' },
      genus: 'Megaptera',
      species: 'Megaptera novaeangliae',
    },
    habitat: {
      en: 'It swims in all oceans. Every winter many come to the warm, shallow sea near the Abrolhos islands in Brazil to have their babies.',
      cs: 'Plave ve všech oceánech. Každou zimu jich mnoho připlouvá do teplého mělkého moře u ostrovů Abrolhos v Brazílii, kde rodí mláďata.',
    },
    diet: {
      en: 'It gulps huge mouthfuls of tiny shrimp called krill and small fish.',
      cs: 'Nabírá do tlamy obrovské doušky drobných korýšů zvaných kril a malých rybek.',
    },
    predators: {
      en: 'Grown-ups are too big for most enemies. Orcas and big sharks sometimes attack calves.',
      cs: 'Dospělí keporkaci jsou pro většinu nepřátel moc velcí. Mláďata ale občas napadnou kosatky nebo velcí žraloci.',
    },
  },
  {
    id: 'common-marmoset',
    name: { en: 'Common marmoset', cs: 'Kosman bělovousý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: callitrichidae,
      genus: 'Callithrix',
      species: 'Callithrix jacchus',
    },
    habitat: {
      en: 'It lives in dry forests and bushland in north-eastern Brazil. It has fluffy white tufts on its ears.',
      cs: 'Žije v suchých lesích a křovinách na severovýchodě Brazílie. Na uších má nadýchané bílé chomáčky.',
    },
    diet: {
      en: 'It gnaws holes in trees to lick the sticky sap. It also eats insects, fruit and flowers.',
      cs: 'Ohryzává do stromů dírky a olizuje lepkavou mízu. Jí také hmyz, ovoce a květy.',
    },
    predators: {
      en: 'Hawks, snakes, owls and wild cats hunt it.',
      cs: 'Loví ho dravci, hadi, sovy a divoké kočky.',
    },
  },
  {
    id: 'south-american-tapir',
    name: { en: 'South American tapir', cs: 'Tapír jihoamerický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Perissodactyla', en: 'Odd-toed ungulates', cs: 'Lichokopytníci' },
      family: { latin: 'Tapiridae', en: 'Tapirs', cs: 'Tapírovití' },
      genus: 'Tapirus',
      species: 'Tapirus terrestris',
    },
    habitat: {
      en: 'It lives in rainforests and wetlands near water. It is a great swimmer and has a short, bendy nose like a tiny trunk.',
      cs: 'Žije v deštných pralesích a mokřadech blízko vody. Výborně plave a má krátký ohebný nos jako malý chobot.',
    },
    diet: {
      en: 'It eats leaves, fruit, twigs and water plants.',
      cs: 'Jí listy, ovoce, větvičky a vodní rostliny.',
    },
    predators: {
      en: 'Jaguars and pumas hunt it. Young tapirs can also be caught by caimans or anacondas.',
      cs: 'Loví ho jaguáři a pumy. Mláďata mohou ulovit i kajmani nebo anakondy.',
    },
  },
  {
    id: 'emperor-tamarin',
    name: { en: 'Emperor tamarin', cs: 'Tamarín vousatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: callitrichidae,
      genus: 'Saguinus',
      species: 'Saguinus imperator',
    },
    habitat: {
      en: 'It lives in the trees of the rainforest in Peru, Bolivia and western Brazil. It has a long white moustache.',
      cs: 'Žije na stromech v deštném pralese v Peru, Bolívii a západní Brazílii. Má dlouhý bílý knír.',
    },
    diet: {
      en: 'It eats fruit, flowers, tree sap and insects.',
      cs: 'Jí ovoce, květy, stromovou mízu a hmyz.',
    },
    predators: {
      en: 'Hawks, snakes and wild cats hunt it.',
      cs: 'Loví ho dravci, hadi a divoké kočky.',
    },
  },
  {
    id: 'llama',
    name: { en: 'Llama', cs: 'Lama krotká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: camelidae,
      genus: 'Lama',
      species: 'Lama glama',
    },
    habitat: {
      en: 'It lives with people high in the Andes mountains of Bolivia and Peru. People keep it to carry loads and for its wool.',
      cs: 'Žije s lidmi vysoko v horách And v Bolívii a Peru. Lidé ji chovají, aby nosila náklad a dávala vlnu.',
    },
    diet: {
      en: 'It eats grass and small mountain plants.',
      cs: 'Spásá trávu a nízké horské rostliny.',
    },
    predators: {
      en: 'Pumas and Andean foxes can attack it. Its herders and dogs protect it.',
      cs: 'Může ji napadnout puma nebo liška. Chrání ji pastevci a jejich psi.',
    },
  },
  {
    id: 'alpaca',
    name: { en: 'Alpaca', cs: 'Alpaka' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: camelidae,
      genus: 'Vicugna',
      species: 'Vicugna pacos',
    },
    habitat: {
      en: 'It lives in herds on high, cold grasslands in the Andes of Peru. People keep it for its soft, warm wool.',
      cs: 'Žije ve stádech na vysokých a chladných pastvinách v peruánských Andách. Lidé ji chovají kvůli měkké a teplé vlně.',
    },
    diet: {
      en: 'It eats grass and other small plants.',
      cs: 'Spásá trávu a další nízké rostliny.',
    },
    predators: {
      en: 'Pumas and foxes can attack it, but herders and dogs protect the herd.',
      cs: 'Může ji napadnout puma nebo liška, ale stádo chrání pastevci a psi.',
    },
  },
  {
    id: 'vicuna',
    name: { en: 'Vicuña', cs: 'Vikuňa' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: camelidae,
      genus: 'Vicugna',
      species: 'Vicugna vicugna',
    },
    habitat: {
      en: 'It lives wild on high, cold, dry plains in the Andes, higher than most other animals. Its wool is the finest in the world.',
      cs: 'Žije volně na vysokých, studených a suchých planinách And, výš než většina ostatních zvířat. Má nejjemnější vlnu na světě.',
    },
    diet: {
      en: 'It eats short grass and small plants.',
      cs: 'Spásá nízkou trávu a drobné rostliny.',
    },
    predators: {
      en: 'Pumas and Andean foxes hunt it, especially the babies. Condors may take a newborn.',
      cs: 'Loví ji pumy a lišky, hlavně mláďata. Čerstvě narozené mládě může uchvátit i kondor.',
    },
  },
  {
    id: 'titicaca-water-frog',
    name: { en: 'Titicaca water frog', cs: 'Vodnice posvátná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: anura,
      family: { latin: 'Telmatobiidae', en: 'Andean water frogs', cs: 'Vodnice a bezblanky' },
      genus: 'Telmatobius',
      species: 'Telmatobius culeus',
    },
    habitat: {
      en: 'It lives only at the bottom of Lake Titicaca, high in the Andes. Its baggy, wrinkly skin helps it breathe underwater.',
      cs: 'Žije jen na dně jezera Titicaca vysoko v Andách. Díky volné, vrásčité kůži může dýchat pod vodou.',
    },
    diet: {
      en: 'It eats snails, water insects, little shrimp and small fish.',
      cs: 'Jí plže, vodní hmyz, drobné korýše a malé rybky.',
    },
    predators: {
      en: 'Water birds and big fish eat it. People catch it too, so it is now rare.',
      cs: 'Žerou ji vodní ptáci a velké ryby. Loví ji i lidé, a proto je dnes vzácná.',
    },
  },
  {
    id: 'humboldt-squid',
    name: { en: 'Humboldt squid', cs: 'Krakatice obrovská' },
    classification: {
      kingdom,
      phylum: mollusca,
      class: cephalopods,
      order: { latin: 'Oegopsida', en: 'Open-eyed squids', cs: 'Kalmaři a krakatice' },
      family: { latin: 'Ommastrephidae', en: 'Flying squids', cs: 'Kalmarovití' },
      genus: 'Dosidicus',
      species: 'Dosidicus gigas',
    },
    habitat: {
      en: 'It lives in the cold, deep sea off Peru and Chile. At night it swims up in big groups, and it can glow and change colour.',
      cs: 'Žije v chladném a hlubokém moři u Peru a Chile. V noci vyplouvá ve velkých hejnech k hladině a umí svítit a měnit barvu.',
    },
    diet: {
      en: 'It grabs fish, shrimp and other squid with its ten arms full of suckers.',
      cs: 'Deseti rameny s přísavkami chytá ryby, korýše a jiné kalmary.',
    },
    predators: {
      en: 'Sperm whales, sharks, sea lions, dolphins and big fish like swordfish eat it.',
      cs: 'Žerou ji vorvani, žraloci, lachtani, delfíni a velké ryby, třeba mečouni.',
    },
  },
  {
    id: 'chacoan-peccary',
    name: { en: 'Chacoan peccary', cs: 'Pekari Wagnerův' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: artiodactyla,
      family: { latin: 'Tayassuidae', en: 'Peccaries', cs: 'Pekariovití' },
      genus: 'Catagonus',
      species: 'Catagonus wagneri',
    },
    habitat: {
      en: 'It lives in the hot, dry, thorny bush of the Gran Chaco in Paraguay, Bolivia and Argentina. It looks like a small hairy pig.',
      cs: 'Žije v horké, suché a trnité buši Gran Chaco v Paraguayi, Bolívii a Argentině. Vypadá jako malé chlupaté prasátko.',
    },
    diet: {
      en: 'It eats cactus, but first it rubs the spines off on the ground. It also eats roots and fruit.',
      cs: 'Jí kaktusy, ale nejdřív z nich o zem otře trny. Jí také kořínky a plody.',
    },
    predators: {
      en: 'Jaguars and pumas hunt it.',
      cs: 'Loví ho jaguáři a pumy.',
    },
  },
  {
    id: 'south-american-coati',
    name: { en: 'South American coati', cs: 'Nosál červený' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Procyonidae', en: 'Raccoons and coatis', cs: 'Medvídkovití' },
      genus: 'Nasua',
      species: 'Nasua nasua',
    },
    habitat: {
      en: 'It lives in groups in forests, for example around the huge Iguazú waterfalls. It has a long nose and a striped tail held up high.',
      cs: 'Žije ve skupinách v lesích, třeba kolem obrovských vodopádů Iguazú. Má dlouhý nos a pruhovaný ocas, který nosí vztyčený.',
    },
    diet: {
      en: 'It sniffs out insects, spiders, worms, eggs and fruit. It also eats small lizards and mice.',
      cs: 'Očichává a vyhrabává hmyz, pavouky, žížaly, vajíčka a ovoce. Jí i malé ještěrky a myši.',
    },
    predators: {
      en: 'Jaguars, pumas, ocelots, big snakes and eagles hunt it.',
      cs: 'Loví ho jaguáři, pumy, oceloti, velcí hadi a orli.',
    },
  },
]
