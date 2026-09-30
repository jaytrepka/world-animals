import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, birds, reptiles, rayFinned, cartilaginous,
  carnivora, artiodactyla, perissodactyla, primates, squamata, testudines, accipitriformes,
  felidae, cercopithecidae, cheloniidae, accipitridae,
} from './taxa'

export const southContent: AnimalContent[] = [
  {
    id: 'bengal-tiger',
    name: { en: 'Bengal tiger', cs: 'Tygr indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Panthera',
      species: 'Panthera tigris',
    },
    habitat: {
      en: 'It lives in forests, grasslands and mangrove swamps of India and Bangladesh. It is a very good swimmer.',
      cs: 'Žije v lesích, travnatých pláních a mangrovových bažinách Indie a Bangladéše. Výborně plave.',
    },
    diet: {
      en: 'It hunts deer, wild pigs, buffalo and gaur. It sneaks up quietly, hidden by its stripes.',
      cs: 'Loví jeleny, divoká prasata, buvoly a gaury. Potichu se připlíží a pruhy ho přitom dobře maskují.',
    },
    predators: {
      en: 'Grown-up tigers have no enemies. Cubs can be killed by leopards, wild dogs or other tigers.',
      cs: 'Dospělí tygři nemají žádné nepřátele. Mláďata ale může zabít levhart, dhoulové nebo jiný tygr.',
    },
  },
  {
    id: 'indian-peafowl',
    name: { en: 'Indian peafowl', cs: 'Páv korunkatý' },
    classification: {
      kingdom, phylum: chordata, class: birds,
      order: { latin: 'Galliformes', en: 'Landfowl', cs: 'Hrabaví' },
      family: { latin: 'Phasianidae', en: 'Pheasants and relatives', cs: 'Bažantovití' },
      genus: 'Pavo',
      species: 'Pavo cristatus',
    },
    habitat: {
      en: 'It lives in forests, fields and villages all over India. The male spreads his long, shiny tail like a big fan.',
      cs: 'Žije v lesích, na polích i ve vesnicích po celé Indii. Sameček roztahuje svůj dlouhý lesklý ocas jako velký vějíř.',
    },
    diet: {
      en: 'It eats seeds, grain, berries and insects. It even catches small snakes and lizards.',
      cs: 'Jí semena, obilí, bobule a hmyz. Chytí i malého hada nebo ještěrku.',
    },
    predators: {
      en: 'Tigers, leopards, jackals and wild dogs hunt peafowl. Mongooses and snakes can steal eggs and chicks.',
      cs: 'Pávy loví tygři, levharti, šakalové a dhoulové. Vajíčka a kuřata mohou sebrat promyky a hadi.',
    },
  },
  {
    id: 'king-cobra',
    name: { en: 'King cobra', cs: 'Kobra královská' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: squamata,
      family: { latin: 'Elapidae', en: 'Cobras and their relatives', cs: 'Korálovcovití' },
      genus: 'Ophiophagus',
      species: 'Ophiophagus hannah',
    },
    habitat: {
      en: 'It lives in the rainforests of the Western Ghats mountains in India. It is the longest venomous snake in the world.',
      cs: 'Žije v deštných pralesích pohoří Západní Ghát v Indii. Je to nejdelší jedovatý had na světě.',
    },
    diet: {
      en: 'It mostly eats other snakes, even pythons and cobras. Sometimes it eats lizards.',
      cs: 'Jí hlavně jiné hady, dokonce krajty a kobry. Někdy sní i ještěrku.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but mongooses can fight them. Birds of prey and other snakes can eat young cobras.',
      cs: 'Dospělé kobry mají málo nepřátel, ale promyky se s nimi umí poprat. Mladé kobry mohou sežrat draví ptáci a jiní hadi.',
    },
  },
  {
    id: 'asian-elephant',
    name: { en: 'Asian elephant', cs: 'Slon indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals,
      order: { latin: 'Proboscidea', en: 'Elephants', cs: 'Chobotnatci' },
      family: { latin: 'Elephantidae', en: 'Elephants', cs: 'Slonovití' },
      genus: 'Elephas',
      species: 'Elephas maximus',
    },
    habitat: {
      en: 'It lives in forests and grasslands of India, Sri Lanka and South-East Asia. It has smaller ears than the African elephant.',
      cs: 'Žije v lesích a na travnatých pláních Indie, Srí Lanky a jihovýchodní Asie. Má menší uši než slon africký.',
    },
    diet: {
      en: 'It eats grass, leaves, bark, fruit and bamboo, and lifts it all with its long trunk. It eats almost all day.',
      cs: 'Jí trávu, listí, kůru, ovoce a bambus a všechno si podává dlouhým chobotem. Jí skoro celý den.',
    },
    predators: {
      en: 'Grown-up elephants have no enemies except people. Tigers sometimes catch a calf, so the herd protects the babies.',
      cs: 'Dospělí sloni nemají kromě lidí žádné nepřátele. Tygr občas uloví slůně, a proto stádo mláďata chrání.',
    },
  },
  {
    id: 'whale-shark',
    name: { en: 'Whale shark', cs: 'Žralok obrovský' },
    classification: {
      kingdom, phylum: chordata, class: cartilaginous,
      order: { latin: 'Orectolobiformes', en: 'Carpet sharks', cs: 'Malotlamci' },
      family: { latin: 'Rhincodontidae', en: 'Whale sharks', cs: 'Veležralokovití' },
      genus: 'Rhincodon',
      species: 'Rhincodon typus',
    },
    habitat: {
      en: 'It swims in warm seas, for example around the Maldives in the Indian Ocean. It is the biggest fish in the world.',
      cs: 'Plave v teplých mořích, třeba kolem Malediv v Indickém oceánu. Je to největší ryba na světě.',
    },
    diet: {
      en: 'It is gentle and eats only tiny sea creatures called plankton, small fish and fish eggs. It sieves them from the water.',
      cs: 'Je mírný a jí jen drobounký plankton, malé rybky a rybí jikry, které si cedí z vody.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Killer whales and big sharks can sometimes catch young whale sharks.',
      cs: 'Dospělí žraloci obrovští nemají skoro žádné nepřátele. Mladé žraloky ale občas uloví kosatky nebo velcí žraloci.',
    },
  },
  {
    id: 'olive-ridley-sea-turtle',
    name: { en: 'Olive ridley sea turtle', cs: 'Kareta zelenavá' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: testudines, family: cheloniidae,
      genus: 'Lepidochelys',
      species: 'Lepidochelys olivacea',
    },
    habitat: {
      en: 'It swims in the warm Bay of Bengal. Many thousands of turtles come to the beaches of India at the same time to lay eggs.',
      cs: 'Plave v teplém Bengálském zálivu. Na pláže v Indii jich naráz připlouvají tisíce, aby nakladly vajíčka.',
    },
    diet: {
      en: 'It eats jellyfish, crabs, shrimp, snails and seaweed.',
      cs: 'Jí medúzy, kraby, krevety, plže a mořské řasy.',
    },
    predators: {
      en: 'Sharks and killer whales can catch grown-ups. Dogs, jackals, crabs and birds eat the eggs and baby turtles.',
      cs: 'Dospělé karety mohou ulovit žraloci a kosatky. Vajíčka a malé želvičky sežerou psi, šakalové, krabi a ptáci.',
    },
  },
  {
    id: 'burmese-python',
    name: { en: 'Burmese python', cs: 'Krajta tmavá' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: squamata,
      family: { latin: 'Pythonidae', en: 'Pythons', cs: 'Krajtovití' },
      genus: 'Python',
      species: 'Python bivittatus',
    },
    habitat: {
      en: 'It lives in forests, grasslands and swamps of Myanmar and South-East Asia, always near water. It is one of the biggest snakes.',
      cs: 'Žije v lesích, travnatých pláních a bažinách Myanmaru a jihovýchodní Asie, vždy blízko vody. Patří k největším hadům.',
    },
    diet: {
      en: 'It is not venomous. It squeezes birds, rats, rabbits and even small deer, then swallows them whole.',
      cs: 'Není jedovatá. Ptáky, krysy, králíky a dokonce i malé jeleny udusí a pak je spolkne vcelku.',
    },
    predators: {
      en: 'Big pythons have few enemies. Young ones can be eaten by birds of prey, mongooses, cats and king cobras.',
      cs: 'Velké krajty mají málo nepřátel. Mladé ale mohou sežrat draví ptáci, promyky, kočkovité šelmy a kobry královské.',
    },
  },
  {
    id: 'clouded-leopard',
    name: { en: 'Clouded leopard', cs: 'Levhart obláčkový' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: carnivora, family: felidae,
      genus: 'Neofelis',
      species: 'Neofelis nebulosa',
    },
    habitat: {
      en: 'It lives in thick forests of South-East Asia, from the Himalayas to Laos and Malaysia. Its spots look like clouds.',
      cs: 'Žije v hustých lesích jihovýchodní Asie od Himálaje po Laos a Malajsii. Jeho skvrny vypadají jako obláčky.',
    },
    diet: {
      en: 'It hunts monkeys, squirrels, birds, small deer and wild pigs. It is a great climber and can even walk head-first down a tree.',
      cs: 'Loví opice, veverky, ptáky, malé jeleny a divoká prasata. Skvěle šplhá a umí slézt ze stromu i hlavou dolů.',
    },
    predators: {
      en: 'Tigers and leopards can kill clouded leopards. Big snakes and eagles can catch the cubs.',
      cs: 'Levharty obláčkové mohou zabít tygři a levharti. Koťata mohou ulovit velcí hadi a orli.',
    },
  },
  {
    id: 'lar-gibbon',
    name: { en: 'Lar gibbon', cs: 'Gibon lar' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates,
      family: { latin: 'Hylobatidae', en: 'Gibbons', cs: 'Gibonovití' },
      genus: 'Hylobates',
      species: 'Hylobates lar',
    },
    habitat: {
      en: 'It lives high in the rainforest trees of Thailand and Malaysia. It swings from branch to branch with its long arms.',
      cs: 'Žije vysoko v korunách deštného pralesa v Thajsku a Malajsii. Houpe se z větve na větev na svých dlouhých rukou.',
    },
    diet: {
      en: 'It mostly eats ripe fruit, especially figs. It also eats leaves, flowers and insects.',
      cs: 'Jí hlavně zralé ovoce, nejraději fíky. Jí také listy, květy a hmyz.',
    },
    predators: {
      en: 'Clouded leopards, big snakes and eagles can catch gibbons. Families sing loud songs every morning.',
      cs: 'Gibony mohou ulovit levharti obláčkoví, velcí hadi a orli. Rodinky každé ráno hlasitě zpívají.',
    },
  },
  {
    id: 'mekong-giant-catfish',
    name: { en: 'Mekong giant catfish', cs: 'Pangas velký' },
    classification: {
      kingdom, phylum: chordata, class: rayFinned,
      order: { latin: 'Siluriformes', en: 'Catfishes', cs: 'Sumcotvární' },
      family: { latin: 'Pangasiidae', en: 'Shark catfishes', cs: 'Pangasovití' },
      genus: 'Pangasianodon',
      species: 'Pangasianodon gigas',
    },
    habitat: {
      en: 'It lives in the big Mekong River in Cambodia, Laos and Thailand. It can grow as big as a bear.',
      cs: 'Žije ve velké řece Mekong v Kambodži, Laosu a Thajsku. Může vyrůst velký jako medvěd.',
    },
    diet: {
      en: 'Grown-ups have no teeth and eat water plants and algae. Young fish also eat tiny animals.',
      cs: 'Dospělé ryby nemají zuby a jedí vodní rostliny a řasy. Mladé rybky jedí i drobné živočichy.',
    },
    predators: {
      en: 'Big ones have no enemies except people. Young catfish are eaten by bigger fish and birds.',
      cs: 'Velké pangasy neohrožuje nikdo kromě lidí. Malé rybky ale sežerou větší ryby a ptáci.',
    },
  },
  {
    id: 'dugong',
    name: { en: 'Dugong', cs: 'Dugong indický' },
    classification: {
      kingdom, phylum: chordata, class: mammals,
      order: { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' },
      family: { latin: 'Dugongidae', en: 'Dugongs', cs: 'Dugongovití' },
      genus: 'Dugong',
      species: 'Dugong dugon',
    },
    habitat: {
      en: 'It lives in warm, shallow sea along the coast of Thailand and Malaysia, where seagrass grows.',
      cs: 'Žije v teplém mělkém moři u pobřeží Thajska a Malajsie, kde rostou mořské trávy.',
    },
    diet: {
      en: 'It grazes on seagrass on the sea floor, like a cow in a meadow. That is why it is called a sea cow.',
      cs: 'Spásá mořskou trávu na dně jako kráva na louce. Proto se mu říká mořská kráva.',
    },
    predators: {
      en: 'Big sharks, killer whales and crocodiles can hunt dugongs, especially the calves.',
      cs: 'Dugongy mohou lovit velcí žraloci, kosatky a krokodýli, hlavně mláďata.',
    },
  },
  {
    id: 'malayan-tapir',
    name: { en: 'Malayan tapir', cs: 'Tapír čabrakový' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: perissodactyla,
      family: { latin: 'Tapiridae', en: 'Tapirs', cs: 'Tapírovití' },
      genus: 'Tapirus',
      species: 'Tapirus indicus',
    },
    habitat: {
      en: 'It lives in rainforests of Sumatra and Malaysia, near rivers. It is black with a white back, like it wears a blanket.',
      cs: 'Žije v deštných pralesích Sumatry a Malajsie blízko řek. Je černý a na zádech bílý, jako by měl přehozenou deku.',
    },
    diet: {
      en: 'It eats leaves, twigs, fruit and water plants. It grabs them with its short, bendy nose.',
      cs: 'Jí listí, větvičky, ovoce a vodní rostliny. Trhá je krátkým ohebným nosem.',
    },
    predators: {
      en: 'Tigers hunt tapirs. Leopards and big snakes can catch the striped babies.',
      cs: 'Tapíry loví tygři. Pruhovaná mláďata mohou ulovit levharti a velcí hadi.',
    },
  },
  {
    id: 'bornean-orangutan',
    name: { en: 'Bornean orangutan', cs: 'Orangutan bornejský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates,
      family: { latin: 'Hominidae', en: 'Great apes', cs: 'Hominidé' },
      genus: 'Pongo',
      species: 'Pongo pygmaeus',
    },
    habitat: {
      en: 'It lives high in the rainforest trees on the island of Borneo. Every evening it builds a new bed of leaves.',
      cs: 'Žije vysoko na stromech v deštném pralese na ostrově Borneo. Každý večer si staví novou postýlku z listí.',
    },
    diet: {
      en: 'It mostly eats fruit, like figs and durians. It also eats leaves, bark, honey and insects.',
      cs: 'Jí hlavně ovoce, třeba fíky a duriany. Jí i listy, kůru, med a hmyz.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Clouded leopards and crocodiles sometimes catch young orangutans.',
      cs: 'Dospělí orangutani mají málo nepřátel. Mláďata občas uloví levhart obláčkový nebo krokodýl.',
    },
  },
  {
    id: 'rhinoceros-hornbill',
    name: { en: 'Rhinoceros hornbill', cs: 'Dvojzoborožec nosorožčí' },
    classification: {
      kingdom, phylum: chordata, class: birds,
      order: { latin: 'Bucerotiformes', en: 'Hornbills and hoopoes', cs: 'Zoborožci' },
      family: { latin: 'Bucerotidae', en: 'Hornbills', cs: 'Zoborožcovití' },
      genus: 'Buceros',
      species: 'Buceros rhinoceros',
    },
    habitat: {
      en: 'It lives in the rainforests of Borneo, Sumatra and Malaysia. On its huge beak it has a bright orange horn.',
      cs: 'Žije v deštných pralesích Bornea, Sumatry a Malajsie. Na obrovském zobáku má jasně oranžový roh.',
    },
    diet: {
      en: 'It mostly eats fruit, especially figs. It also catches insects, lizards and frogs.',
      cs: 'Jí hlavně ovoce, nejraději fíky. Chytá také hmyz, ještěrky a žáby.',
    },
    predators: {
      en: 'Grown-ups have few enemies. The mother hides in a tree hole sealed with mud to keep snakes and monkeys away from her eggs.',
      cs: 'Dospělí ptáci mají málo nepřátel. Samička se schová v dutině stromu zazděné blátem, aby k vajíčkům nemohli hadi ani opice.',
    },
  },
  {
    id: 'proboscis-monkey',
    name: { en: 'Proboscis monkey', cs: 'Kahau nosatý' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates, family: cercopithecidae,
      genus: 'Nasalis',
      species: 'Nasalis larvatus',
    },
    habitat: {
      en: 'It lives in mangroves and forests along rivers on Borneo. The males have a huge, droopy nose.',
      cs: 'Žije v mangrovech a lesích podél řek na Borneu. Samci mají obrovský převislý nos.',
    },
    diet: {
      en: 'It eats young leaves, seeds and unripe fruit. It is a good swimmer and jumps into rivers from the trees.',
      cs: 'Jí mladé listy, semena a nezralé ovoce. Dobře plave a do řeky skáče přímo ze stromů.',
    },
    predators: {
      en: 'Crocodiles, clouded leopards, pythons and eagles can catch proboscis monkeys.',
      cs: 'Kahau mohou ulovit krokodýli, levharti obláčkoví, krajty a orli.',
    },
  },
  {
    id: 'ocellaris-clownfish',
    name: { en: 'Ocellaris clownfish', cs: 'Klaun očkatý' },
    classification: {
      kingdom, phylum: chordata, class: rayFinned,
      order: { latin: 'Blenniiformes', en: 'Blennies and relatives', cs: 'Slizouni' },
      family: { latin: 'Pomacentridae', en: 'Damselfishes and clownfishes', cs: 'Sapínovití' },
      genus: 'Amphiprion',
      species: 'Amphiprion ocellaris',
    },
    habitat: {
      en: 'It lives on coral reefs in the warm South China Sea. It hides between the stinging arms of a sea anemone.',
      cs: 'Žije na korálových útesech v teplém Jihočínském moři. Schovává se mezi žahavými rameny sasanky.',
    },
    diet: {
      en: 'It eats tiny animals and plants floating in the water, and leftovers from the anemone’s meals.',
      cs: 'Jí drobné živočichy a řasy vznášející se ve vodě a zbytky z jídla své sasanky.',
    },
    predators: {
      en: 'Bigger fish, eels and octopuses would like to eat it, but the anemone keeps it safe.',
      cs: 'Rády by ho sežraly větší ryby, murény a chobotnice, ale sasanka ho ochrání.',
    },
  },
  {
    id: 'philippine-eagle',
    name: { en: 'Philippine eagle', cs: 'Orel opičí' },
    classification: {
      kingdom, phylum: chordata, class: birds, order: accipitriformes, family: accipitridae,
      genus: 'Pithecophaga',
      species: 'Pithecophaga jefferyi',
    },
    habitat: {
      en: 'It lives in the mountain rainforests of the Philippines. It is one of the biggest and strongest eagles in the world.',
      cs: 'Žije v horských deštných pralesích na Filipínách. Patří k největším a nejsilnějším orlům na světě.',
    },
    diet: {
      en: 'It hunts flying lemurs, monkeys, big squirrels, snakes, bats and birds.',
      cs: 'Loví letuchy, opice, velké veverky, hady, netopýry a ptáky.',
    },
    predators: {
      en: 'Grown-up eagles have no enemies except people. Only one chick is raised at a time, so the parents guard it carefully.',
      cs: 'Dospělí orli nemají kromě lidí žádné nepřátele. Mají vždy jen jedno mládě, a tak ho rodiče pečlivě hlídají.',
    },
  },
  {
    id: 'philippine-tarsier',
    name: { en: 'Philippine tarsier', cs: 'Nártoun filipínský' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: primates,
      family: { latin: 'Tarsiidae', en: 'Tarsiers', cs: 'Nártounovití' },
      genus: 'Carlito',
      species: 'Carlito syrichta',
    },
    habitat: {
      en: 'This tiny primate lives in forests on the Philippine island of Bohol. Its eyes are as big as its brain.',
      cs: 'Tento malinký primát žije v lesích na filipínském ostrově Bohol. Jeho oči jsou stejně velké jako jeho mozek.',
    },
    diet: {
      en: 'At night it jumps from branch to branch and catches insects, spiders, small lizards and birds.',
      cs: 'V noci skáče z větve na větev a chytá hmyz, pavouky, malé ještěrky a ptáčky.',
    },
    predators: {
      en: 'Owls, snakes, monitor lizards and cats can catch tarsiers.',
      cs: 'Nártouny mohou ulovit sovy, hadi, varani a kočky.',
    },
  },
  {
    id: 'babirusa',
    name: { en: 'North Sulawesi babirusa', cs: 'Babirusa celebeská' },
    classification: {
      kingdom, phylum: chordata, class: mammals, order: artiodactyla,
      family: { latin: 'Suidae', en: 'Pigs', cs: 'Prasatovití' },
      genus: 'Babyrousa',
      species: 'Babyrousa celebensis',
    },
    habitat: {
      en: 'This wild pig lives in rainforests on the island of Sulawesi. The males have curly tusks that grow up through their snout.',
      cs: 'Toto divoké prase žije v deštných pralesích na ostrově Sulawesi. Samcům rostou zakroucené kly nahoru skrz rypák.',
    },
    diet: {
      en: 'It eats fruit, nuts, leaves, mushrooms and small animals. It likes to wallow in mud.',
      cs: 'Jí ovoce, oříšky, listí, houby a malá zvířata. Rádo se válí v bahně.',
    },
    predators: {
      en: 'Big pythons can catch babirusas, especially the young ones.',
      cs: 'Babirusy mohou ulovit velké krajty, hlavně mláďata.',
    },
  },
  {
    id: 'komodo-dragon',
    name: { en: 'Komodo dragon', cs: 'Varan komodský' },
    classification: {
      kingdom, phylum: chordata, class: reptiles, order: squamata,
      family: { latin: 'Varanidae', en: 'Monitor lizards', cs: 'Varanovití' },
      genus: 'Varanus',
      species: 'Varanus komodoensis',
    },
    habitat: {
      en: 'It lives on Komodo, Flores and a few other small islands of Indonesia. It is the biggest lizard in the world.',
      cs: 'Žije na ostrovech Komodo, Flores a několika dalších malých indonéských ostrovech. Je to největší ještěr na světě.',
    },
    diet: {
      en: 'It hunts deer, wild pigs and buffalo. It also eats dead animals, which it can smell from far away.',
      cs: 'Loví jeleny, divoká prasata a buvoly. Jí také uhynulá zvířata, která ucítí z velké dálky.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Young dragons live up in trees to hide from big dragons that might eat them.',
      cs: 'Dospělí varani nemají žádné nepřátele. Mláďata žijí na stromech, aby se schovala před velkými varany, kteří by je mohli sežrat.',
    },
  },
]
