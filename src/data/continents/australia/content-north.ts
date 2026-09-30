import type { AnimalContent } from '../../types'

const kingdom = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const chordata = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const mammals = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const birds = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const reptiles = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const rayFinned = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }
const amphibians = { latin: 'Amphibia', en: 'Amphibians', cs: 'Obojživelníci' }
const diprotodontia = { latin: 'Diprotodontia', en: 'Diprotodont marsupials', cs: 'Dvojitozubci' }
const macropodidae = { latin: 'Macropodidae', en: 'Kangaroos and wallabies', cs: 'Klokanovití' }
const squamata = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }

export const northContent: AnimalContent[] = [
  {
    id: 'saltwater-crocodile',
    name: { en: 'Saltwater crocodile', cs: 'Krokodýl mořský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Crocodilia', en: 'Crocodiles and alligators', cs: 'Krokodýli' },
      family: { latin: 'Crocodylidae', en: 'True crocodiles', cs: 'Krokodýlovití' },
      genus: 'Crocodylus',
      species: 'Crocodylus porosus',
    },
    habitat: {
      en: 'It lives in rivers, swamps and along the sea coast of northern Australia, New Guinea and South-East Asia.',
      cs: 'Žije v řekách, bažinách a u mořského pobřeží severní Austrálie, Nové Guineje a jihovýchodní Asie.',
    },
    diet: {
      en: 'It eats fish, turtles, birds and even big animals like wild pigs and buffalo that come to drink.',
      cs: 'Loví ryby, želvy, ptáky, a dokonce i velká zvířata, jako jsou divoká prasata nebo buvoli, když se přijdou napít.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Its eggs and babies are eaten by monitor lizards, big fish and birds.',
      cs: 'Dospělí krokodýli nemají skoro žádné nepřátele. Jejich vajíčka a mláďata ale sežerou varani, velké ryby a ptáci.',
    },
  },
  {
    id: 'southern-cassowary',
    name: { en: 'Southern cassowary', cs: 'Kasuár přilbový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Casuariiformes', en: 'Cassowaries and emus', cs: 'Kasuáři' },
      family: { latin: 'Casuariidae', en: 'Cassowaries and emus', cs: 'Kasuárovití' },
      genus: 'Casuarius',
      species: 'Casuarius casuarius',
    },
    habitat: {
      en: 'It lives in thick, warm rainforests in north-eastern Australia and New Guinea.',
      cs: 'Žije v hustých teplých deštných pralesích na severovýchodě Austrálie a na Nové Guineji.',
    },
    diet: {
      en: 'It mostly eats fallen fruit. It also eats snails, insects and small animals.',
      cs: 'Nejraději jí spadané ovoce. Občas si dá i plže, hmyz nebo malá zvířátka.',
    },
    predators: {
      en: 'Grown-ups are big and strong, so few animals attack them. Eggs and chicks can be eaten by dingoes, dogs and wild pigs.',
      cs: 'Dospělí kasuáři jsou velcí a silní, a tak je napadne jen málokdo. Vajíčka a kuřata ale mohou sežrat dingové, psi a divoká prasata.',
    },
  },
  {
    id: 'goodfellows-tree-kangaroo',
    name: { en: "Goodfellow's tree-kangaroo", cs: 'Klokan Goodfellowův' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: diprotodontia,
      family: macropodidae,
      genus: 'Dendrolagus',
      species: 'Dendrolagus goodfellowi',
    },
    habitat: {
      en: 'It lives high up in the trees of cool, misty mountain rainforests in New Guinea.',
      cs: 'Žije vysoko v korunách stromů v chladných a mlžných horských pralesích na Nové Guineji.',
    },
    diet: {
      en: 'It eats leaves, fruit, flowers and plants that grow on tree branches.',
      cs: 'Jí listy, ovoce, květy a rostliny, které rostou na větvích stromů.',
    },
    predators: {
      en: 'Big pythons and eagles can catch it. People also hunt it, so it is now rare.',
      cs: 'Může ho ulovit velká krajta nebo orel. Loví ho i lidé, a proto je dnes vzácný.',
    },
  },
  {
    id: 'common-spotted-cuscus',
    name: { en: 'Common spotted cuscus', cs: 'Kuskus skvrnitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: diprotodontia,
      family: { latin: 'Phalangeridae', en: 'Cuscuses and brushtail possums', cs: 'Kuskusovití' },
      genus: 'Spilocuscus',
      species: 'Spilocuscus maculatus',
    },
    habitat: {
      en: 'It lives in the trees of rainforests in New Guinea, nearby islands and the far north of Australia.',
      cs: 'Žije na stromech v deštných pralesích na Nové Guineji, okolních ostrovech a na úplném severu Austrálie.',
    },
    diet: {
      en: 'It eats leaves, fruit and flowers. Sometimes it also eats small animals or eggs.',
      cs: 'Jí listy, ovoce a květy. Někdy si dá i malé živočichy nebo vajíčka.',
    },
    predators: {
      en: 'Big pythons and eagles hunt it. People in New Guinea hunt it too.',
      cs: 'Loví ho velké krajty a orli. Na Nové Guineji ho loví i lidé.',
    },
  },
  {
    id: 'frilled-lizard',
    name: { en: 'Frilled-neck lizard', cs: 'Agama límcová' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Agamidae', en: 'Dragon lizards', cs: 'Agamovití' },
      genus: 'Chlamydosaurus',
      species: 'Chlamydosaurus kingii',
    },
    habitat: {
      en: 'It lives in warm woodlands and grassy forests of northern Australia and southern New Guinea. It spends most of its time in trees.',
      cs: 'Žije v teplých řídkých lesích a travnatých lesích severní Austrálie a jižní Nové Guineje. Většinu času tráví na stromech.',
    },
    diet: {
      en: 'It eats insects like ants, termites and beetles. It also eats spiders and small lizards.',
      cs: 'Jí hmyz, například mravence, termity a brouky. Chutnají jí i pavouci a malé ještěrky.',
    },
    predators: {
      en: 'Birds of prey, snakes, dingoes and big lizards hunt it. To scare them, it opens its big frill and hisses.',
      cs: 'Loví ji draví ptáci, hadi, dingové a velcí varani. Když se jich chce zbavit, roztáhne svůj velký límec a zasyčí.',
    },
  },
  {
    id: 'agile-wallaby',
    name: { en: 'Agile wallaby', cs: 'Klokan hbitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: diprotodontia,
      family: macropodidae,
      genus: 'Notamacropus',
      species: 'Notamacropus agilis',
    },
    habitat: {
      en: 'It lives in grassy places near rivers and creeks in northern Australia and southern New Guinea.',
      cs: 'Žije na travnatých místech u řek a potoků v severní Austrálii a na jihu Nové Guineje.',
    },
    diet: {
      en: 'It eats grass, leaves and fruit. It can also dig up roots to eat.',
      cs: 'Jí trávu, listy a plody. Umí si také vyhrabat kořínky.',
    },
    predators: {
      en: 'Dingoes, crocodiles, big pythons and eagles can catch it. It thumps its foot to warn its friends.',
      cs: 'Může ho ulovit dingo, krokodýl, velká krajta nebo orel. Dupnutím nohy varuje ostatní klokany.',
    },
  },
  {
    id: 'antilopine-kangaroo',
    name: { en: 'Antilopine kangaroo', cs: 'Klokan antilopí' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: diprotodontia,
      family: macropodidae,
      genus: 'Osphranter',
      species: 'Osphranter antilopinus',
    },
    habitat: {
      en: 'It lives in warm, grassy woodlands across the tropical north of Australia.',
      cs: 'Žije v teplých travnatých lesích na tropickém severu Austrálie.',
    },
    diet: {
      en: 'It eats mostly grass, especially fresh green grass after rain.',
      cs: 'Jí hlavně trávu, nejraději čerstvou a zelenou po dešti.',
    },
    predators: {
      en: 'Dingoes hunt it. Its babies can be caught by eagles, and crocodiles wait for it near water.',
      cs: 'Loví ho dingové. Mláďata může uchvátit orel a u vody na něj číhají krokodýli.',
    },
  },
  {
    id: 'dugong',
    name: { en: 'Dugong', cs: 'Dugong indický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' },
      family: { latin: 'Dugongidae', en: 'Dugongs', cs: 'Dugongovití' },
      genus: 'Dugong',
      species: 'Dugong dugon',
    },
    habitat: {
      en: 'It lives in warm, shallow seas along the coasts of northern Australia, Asia and Africa.',
      cs: 'Žije v teplých mělkých mořích u pobřeží severní Austrálie, Asie a Afriky.',
    },
    diet: {
      en: 'It eats seagrass that grows on the sea floor, like a cow grazing in a meadow.',
      cs: 'Spásá mořskou trávu na dně, podobně jako kráva na louce.',
    },
    predators: {
      en: 'Big sharks, killer whales and saltwater crocodiles can attack it, especially its babies.',
      cs: 'Mohou ho napadnout velcí žraloci, kosatky a krokodýli mořští. Nejvíc ohrožená jsou mláďata.',
    },
  },
  {
    id: 'green-sea-turtle',
    name: { en: 'Green sea turtle', cs: 'Kareta obrovská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: { latin: 'Testudines', en: 'Turtles', cs: 'Želvy' },
      family: { latin: 'Cheloniidae', en: 'Sea turtles', cs: 'Karetovití' },
      genus: 'Chelonia',
      species: 'Chelonia mydas',
    },
    habitat: {
      en: 'It swims in warm seas all around the world. It comes onto sandy beaches to lay its eggs.',
      cs: 'Plave v teplých mořích po celém světě. Vajíčka klade na písečných plážích.',
    },
    diet: {
      en: 'Grown-ups eat seagrass and seaweed. Babies also eat jellyfish and other small sea animals.',
      cs: 'Dospělé karety jedí mořskou trávu a řasy. Mláďata jedí i medúzy a jiné malé mořské živočichy.',
    },
    predators: {
      en: 'Big tiger sharks can catch grown-ups. Eggs and babies are eaten by crabs, birds, fish and lizards.',
      cs: 'Dospělou karetu může ulovit velký žralok tygří. Vajíčka a mláďata sežerou krabi, ptáci, ryby a varani.',
    },
  },
  {
    id: 'orange-clownfish',
    name: { en: 'Orange clownfish', cs: 'Klaun zdobený' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Blenniiformes', en: 'Blennies and relatives', cs: 'Slizouni' },
      family: { latin: 'Pomacentridae', en: 'Damselfishes and clownfishes', cs: 'Sapínovití' },
      genus: 'Amphiprion',
      species: 'Amphiprion percula',
    },
    habitat: {
      en: 'It lives on coral reefs near northern Australia and New Guinea. It makes its home inside a sea anemone.',
      cs: 'Žije na korálových útesech u severní Austrálie a Nové Guineje. Bydlí uvnitř mořské sasanky.',
    },
    diet: {
      en: 'It eats tiny sea animals floating in the water and bits of algae.',
      cs: 'Jí drobounké živočichy, kteří se vznášejí ve vodě, a kousky řas.',
    },
    predators: {
      en: 'Bigger fish would like to eat it. It hides in its anemone, whose stinging arms keep enemies away.',
      cs: 'Rády by ho sežraly větší ryby. Schová se ale do sasanky, jejíž žahavá ramena nepřátele odeženou.',
    },
  },
  {
    id: 'northern-quoll',
    name: { en: 'Northern quoll', cs: 'Kunovec severní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Dasyuromorphia', en: 'Carnivorous marsupials', cs: 'Kunovci' },
      family: { latin: 'Dasyuridae', en: 'Quolls and their relatives', cs: 'Kunovcovití' },
      genus: 'Dasyurus',
      species: 'Dasyurus hallucatus',
    },
    habitat: {
      en: 'It lives among rocks and in open woodlands across northern Australia.',
      cs: 'Žije mezi skalami a ve světlých lesích na severu Austrálie.',
    },
    diet: {
      en: 'It hunts at night for insects, frogs, lizards and small animals. It also eats fruit.',
      cs: 'V noci loví hmyz, žáby, ještěrky a malá zvířátka. Jí také ovoce.',
    },
    predators: {
      en: 'Dingoes, owls, snakes and cats hunt it. Poisonous cane toads are also very dangerous if it tries to eat them.',
      cs: 'Loví ho dingové, sovy, hadi a kočky. Velmi nebezpečné jsou pro něj i jedovaté ropuchy obrovské, když se je pokusí sníst.',
    },
  },
  {
    id: 'western-long-beaked-echidna',
    name: { en: 'Western long-beaked echidna', cs: 'Paježura Bruijnova' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Monotremata', en: 'Egg-laying mammals', cs: 'Ptakořitní' },
      family: { latin: 'Tachyglossidae', en: 'Echidnas', cs: 'Ježurovití' },
      genus: 'Zaglossus',
      species: 'Zaglossus bruijni',
    },
    habitat: {
      en: 'It lives in cool mountain forests and meadows in the west of New Guinea.',
      cs: 'Žije v chladných horských lesích a na loukách na západě Nové Guineje.',
    },
    diet: {
      en: 'It sniffs out earthworms with its long snout and slurps them up with its sticky tongue.',
      cs: 'Dlouhým čenichem vyčmuchá žížaly a vtáhne je lepkavým jazykem.',
    },
    predators: {
      en: 'Its spines protect it, so it has few wild enemies. Dogs and people who hunt it are its biggest danger.',
      cs: 'Chrání ji bodliny, a tak má v přírodě málo nepřátel. Největším nebezpečím jsou pro ni psi a lidé, kteří ji loví.',
    },
  },
  {
    id: 'sugar-glider',
    name: { en: 'Sugar glider', cs: 'Vakoveverka létavá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: diprotodontia,
      family: { latin: 'Petauridae', en: 'Gliders', cs: 'Vakoveverkovití' },
      genus: 'Petaurus',
      species: 'Petaurus breviceps',
    },
    habitat: {
      en: 'It lives in the trees of forests in Australia and New Guinea. It glides from tree to tree on skin flaps like a little kite.',
      cs: 'Žije na stromech v lesích Austrálie a Nové Guineje. Mezi stromy plachtí na kožních blanách jako malý drak.',
    },
    diet: {
      en: 'It licks sweet tree sap and flower nectar. It also eats insects.',
      cs: 'Olizuje sladkou stromovou mízu a květní nektar. Jí také hmyz.',
    },
    predators: {
      en: 'Owls, snakes, goannas and cats hunt it at night.',
      cs: 'V noci ji loví sovy, hadi, varani a kočky.',
    },
  },
  {
    id: 'spectacled-flying-fox',
    name: { en: 'Spectacled flying fox', cs: 'Kaloň zlatotýlý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Chiroptera', en: 'Bats', cs: 'Letouni' },
      family: { latin: 'Pteropodidae', en: 'Fruit bats', cs: 'Kaloňovití' },
      genus: 'Pteropus',
      species: 'Pteropus conspicillatus',
    },
    habitat: {
      en: 'It lives in rainforests in north-eastern Australia and New Guinea. Many bats hang together in big trees during the day.',
      cs: 'Žije v deštných pralesích na severovýchodě Austrálie a na Nové Guineji. Přes den visí spousta kaloňů pohromadě na velkých stromech.',
    },
    diet: {
      en: 'It eats juicy fruit, flowers and sweet nectar. It helps spread seeds around the forest.',
      cs: 'Jí šťavnaté ovoce, květy a sladký nektar. Pomáhá tak roznášet semínka po pralese.',
    },
    predators: {
      en: 'Pythons, owls and eagles can catch it.',
      cs: 'Může ho ulovit krajta, sova nebo orel.',
    },
  },
  {
    id: 'green-tree-python',
    name: { en: 'Green tree python', cs: 'Krajta zelená' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Pythonidae', en: 'Pythons', cs: 'Krajtovití' },
      genus: 'Morelia',
      species: 'Morelia viridis',
    },
    habitat: {
      en: 'It lives in the trees of rainforests in New Guinea and the far north of Australia. It rests coiled over a branch.',
      cs: 'Žije na stromech v deštných pralesích Nové Guineje a nejsevernější Austrálie. Odpočívá stočená na větvi.',
    },
    diet: {
      en: 'It catches small animals like mice, rats, birds and lizards.',
      cs: 'Loví malá zvířata, jako jsou myši, krysy, ptáci a ještěrky.',
    },
    predators: {
      en: 'Birds of prey can catch it. Its babies are also eaten by monitor lizards and other snakes.',
      cs: 'Může ji ulovit dravý pták. Mláďata sežerou i varani a jiní hadi.',
    },
  },
  {
    id: 'raggiana-bird-of-paradise',
    name: { en: 'Raggiana bird-of-paradise', cs: 'Rajka volavá' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Passeriformes', en: 'Perching birds', cs: 'Pěvci' },
      family: { latin: 'Paradisaeidae', en: 'Birds-of-paradise', cs: 'Rajkovití' },
      genus: 'Paradisaea',
      species: 'Paradisaea raggiana',
    },
    habitat: {
      en: 'It lives in forests in the south and north-east of New Guinea. The males dance in the treetops to show off their red feathers.',
      cs: 'Žije v lesích na jihu a severovýchodě Nové Guineje. Samečci tančí v korunách stromů a předvádějí svá červená pera.',
    },
    diet: {
      en: 'It eats fruit, especially figs, and also insects and spiders.',
      cs: 'Jí ovoce, hlavně fíky, a také hmyz a pavouky.',
    },
    predators: {
      en: 'Birds of prey can catch it. Snakes and tree animals may steal its eggs and chicks.',
      cs: 'Může ji ulovit dravý pták. Vajíčka a mláďata jí mohou vybrat hadi a jiná zvířata ze stromů.',
    },
  },
  {
    id: 'barramundi',
    name: { en: 'Barramundi', cs: 'Lates stříbřitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Carangiformes', en: 'Jacks and relatives', cs: 'Kranasi a příbuzní' },
      family: { latin: 'Latidae', en: 'Lates perches', cs: 'Latesovití' },
      genus: 'Lates',
      species: 'Lates calcarifer',
    },
    habitat: {
      en: 'It lives in rivers, river mouths and along the sea coast of northern Australia, New Guinea and South-East Asia.',
      cs: 'Žije v řekách, v jejich ústích a u mořského pobřeží severní Austrálie, Nové Guineje a jihovýchodní Asie.',
    },
    diet: {
      en: 'It eats smaller fish, prawns and crabs. It opens its big mouth and sucks them in.',
      cs: 'Jí menší ryby, krevety a kraby. Otevře velkou tlamu a prostě je nasaje.',
    },
    predators: {
      en: 'Crocodiles, sharks and big birds like sea eagles catch it. Young fish are eaten by bigger fish.',
      cs: 'Loví ho krokodýli, žraloci a velcí ptáci, například orli. Malé rybky sežerou větší ryby.',
    },
  },
  {
    id: 'australian-green-tree-frog',
    name: { en: 'Australian green tree frog', cs: 'Rosnice siná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: { latin: 'Anura', en: 'Frogs and toads', cs: 'Žáby' },
      family: { latin: 'Pelodryadidae', en: 'Australian tree frogs', cs: 'Australské rosnice' },
      genus: 'Pelodryas',
      species: 'Pelodryas caerulea',
    },
    habitat: {
      en: 'It lives in trees and bushes near water in northern and eastern Australia and New Guinea. It even lives in gardens and houses.',
      cs: 'Žije na stromech a keřích blízko vody v severní a východní Austrálii a na Nové Guineji. Bydlí i na zahradách a v domech.',
    },
    diet: {
      en: 'It eats insects like moths, crickets and beetles, and also spiders.',
      cs: 'Jí hmyz, třeba můry, cvrčky a brouky, a také pavouky.',
    },
    predators: {
      en: 'Snakes, birds and lizards eat it. Its tadpoles are eaten by fish and water insects.',
      cs: 'Požírají ji hadi, ptáci a ještěrky. Její pulce sežerou ryby a vodní hmyz.',
    },
  },
]
