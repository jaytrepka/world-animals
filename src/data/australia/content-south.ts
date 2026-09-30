import type { AnimalContent } from '../types'

const ANIMALIA = { latin: 'Animalia', en: 'Animals', cs: 'Živočichové' }
const CHORDATA = { latin: 'Chordata', en: 'Chordates', cs: 'Strunatci' }
const MAMMALIA = { latin: 'Mammalia', en: 'Mammals', cs: 'Savci' }
const AVES = { latin: 'Aves', en: 'Birds', cs: 'Ptáci' }
const REPTILIA = { latin: 'Reptilia', en: 'Reptiles', cs: 'Plazi' }
const CHONDRICHTHYES = { latin: 'Chondrichthyes', en: 'Cartilaginous fishes', cs: 'Paryby' }
const ACTINOPTERYGII = { latin: 'Actinopterygii', en: 'Ray-finned fishes', cs: 'Paprskoploutví' }

const DIPROTODONTIA = { latin: 'Diprotodontia', en: 'Diprotodont marsupials', cs: 'Dvojitozubci' }
const DASYUROMORPHIA = { latin: 'Dasyuromorphia', en: 'Carnivorous marsupials', cs: 'Kunovci' }
const DASYURIDAE = { latin: 'Dasyuridae', en: 'Dasyurids', cs: 'Kunovcovití' }
const MACROPODIDAE = { latin: 'Macropodidae', en: 'Kangaroos and wallabies', cs: 'Klokanovití' }
const CARNIVORA = { latin: 'Carnivora', en: 'Carnivorans', cs: 'Šelmy' }
const OTARIIDAE = { latin: 'Otariidae', en: 'Eared seals', cs: 'Lachtanovití' }
const ARTIODACTYLA = { latin: 'Artiodactyla', en: 'Even-toed ungulates', cs: 'Sudokopytníci' }
const PSITTACIFORMES = { latin: 'Psittaciformes', en: 'Parrots', cs: 'Papoušci' }
const STRIGOPIDAE = { latin: 'Strigopidae', en: 'New Zealand parrots', cs: 'Kakapovití' }
const SQUAMATA = { latin: 'Squamata', en: 'Lizards and snakes', cs: 'Šupinatí' }

export const southContent: AnimalContent[] = [
  {
    id: 'tasmanian-devil',
    name: { en: 'Tasmanian devil', cs: 'Ďábel medvědovitý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DASYUROMORPHIA,
      family: DASYURIDAE,
      genus: 'Sarcophilus',
      species: 'Sarcophilus harrisii',
    },
    habitat: {
      en: 'It lives only on the island of Tasmania, in forests and bushland.',
      cs: 'Žije jen na ostrově Tasmánie, v lesích a v buši.',
    },
    diet: {
      en: 'It eats meat, mostly dead animals it finds. It munches everything – even the bones and fur!',
      cs: 'Jí maso, hlavně mrtvá zvířata, která najde. Sní úplně všechno – i kosti a srst!',
    },
    predators: {
      en: 'Grown-ups have few enemies. Young devils can be eaten by quolls, owls and eagles.',
      cs: 'Dospělí ďáblové mají málo nepřátel. Mláďata mohou ulovit kunovci, sovy a orli.',
    },
  },
  {
    id: 'common-wombat',
    name: { en: 'Common wombat', cs: 'Vombat obecný' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DIPROTODONTIA,
      family: { latin: 'Vombatidae', en: 'Wombats', cs: 'Vombatovití' },
      genus: 'Vombatus',
      species: 'Vombatus ursinus',
    },
    habitat: {
      en: 'It lives in forests and hills of south-eastern Australia and Tasmania. It digs long burrows under the ground.',
      cs: 'Žije v lesích a kopcích na jihovýchodě Austrálie a v Tasmánii. Pod zemí si hrabe dlouhé nory.',
    },
    diet: {
      en: 'It eats grass, roots and other plants. It munches mostly at night.',
      cs: 'Jí trávu, kořínky a jiné rostliny. Pase se hlavně v noci.',
    },
    predators: {
      en: 'Dingoes and wild dogs can hunt wombats. Young wombats can be caught by foxes and Tasmanian devils.',
      cs: 'Vombaty mohou lovit dingové a zdivočelí psi. Mláďata mohou ulovit lišky a ďáblové medvědovití.',
    },
  },
  {
    id: 'platypus',
    name: { en: 'Platypus', cs: 'Ptakopysk podivný' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: { latin: 'Monotremata', en: 'Monotremes (egg-laying mammals)', cs: 'Ptakořitní' },
      family: { latin: 'Ornithorhynchidae', en: 'Platypuses', cs: 'Ptakopyskovití' },
      genus: 'Ornithorhynchus',
      species: 'Ornithorhynchus anatinus',
    },
    habitat: {
      en: 'It lives in rivers and streams in eastern Australia and Tasmania. It sleeps in a burrow in the riverbank.',
      cs: 'Žije v řekách a potocích na východě Austrálie a v Tasmánii. Spí v noře v břehu řeky.',
    },
    diet: {
      en: 'It eats worms, insect larvae and little shrimps. It finds them on the river bottom with its duck-like bill.',
      cs: 'Jí červy, larvy hmyzu a malé krevetky. Hledá je na dně řeky svým kachním zobákem.',
    },
    predators: {
      en: 'Foxes, dogs, cats, snakes, eagles and big fish can catch platypuses, especially young ones.',
      cs: 'Ptakopysky, hlavně ty mladé, mohou ulovit lišky, psi, kočky, hadi, orli i velké ryby.',
    },
  },
  {
    id: 'quokka',
    name: { en: 'Quokka', cs: 'Klokan quokka' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DIPROTODONTIA,
      family: MACROPODIDAE,
      genus: 'Setonix',
      species: 'Setonix brachyurus',
    },
    habitat: {
      en: 'It lives in south-western Australia, mostly on Rottnest Island, in scrub and bushland.',
      cs: 'Žije na jihozápadě Austrálie, hlavně na ostrově Rottnest, v křovinách a v buši.',
    },
    diet: {
      en: 'It eats leaves, grass and other plants.',
      cs: 'Jí listy, trávu a další rostliny.',
    },
    predators: {
      en: 'On the mainland, foxes, cats and dingoes hunt quokkas. On Rottnest Island there are no foxes, so quokkas are safer there.',
      cs: 'Na pevnině je loví lišky, kočky a dingové. Na ostrově Rottnest lišky nejsou, a tak jsou tam klokani quokka v bezpečí.',
    },
  },
  {
    id: 'numbat',
    name: { en: 'Numbat', cs: 'Mravencojed žíhaný' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DASYUROMORPHIA,
      family: { latin: 'Myrmecobiidae', en: 'Numbats', cs: 'Mravencojedovití' },
      genus: 'Myrmecobius',
      species: 'Myrmecobius fasciatus',
    },
    habitat: {
      en: 'It lives in eucalyptus woodlands in south-western Australia. It hides in hollow logs.',
      cs: 'Žije v eukalyptových lesích na jihozápadě Austrálie. Schovává se v dutých kmenech.',
    },
    diet: {
      en: 'It eats termites – thousands of them every day! It licks them up with its long, sticky tongue.',
      cs: 'Jí termity – každý den jich sní tisíce! Vylizuje je svým dlouhým lepkavým jazykem.',
    },
    predators: {
      en: 'Foxes and cats are its biggest danger. Eagles, hawks and pythons can catch it too.',
      cs: 'Největší nebezpečí jsou pro něj lišky a kočky. Chytit ho mohou i orli, jestřábi a krajty.',
    },
  },
  {
    id: 'eastern-grey-kangaroo',
    name: { en: 'Eastern grey kangaroo', cs: 'Klokan obrovský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DIPROTODONTIA,
      family: MACROPODIDAE,
      genus: 'Macropus',
      species: 'Macropus giganteus',
    },
    habitat: {
      en: 'It lives in grassy fields and open forests of eastern Australia and Tasmania.',
      cs: 'Žije na travnatých pláních a ve světlých lesích na východě Austrálie a v Tasmánii.',
    },
    diet: {
      en: 'It eats grass and other small plants.',
      cs: 'Jí trávu a jiné nízké rostliny.',
    },
    predators: {
      en: 'Dingoes hunt grown-up kangaroos. Baby kangaroos, called joeys, can be caught by foxes and eagles.',
      cs: 'Dospělé klokany loví dingové. Malá klokaňata mohou ulovit lišky a orli.',
    },
  },
  {
    id: 'little-penguin',
    name: { en: 'Little penguin', cs: 'Tučňák nejmenší' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: { latin: 'Sphenisciformes', en: 'Penguins', cs: 'Tučňáci' },
      family: { latin: 'Spheniscidae', en: 'Penguins', cs: 'Tučňákovití' },
      genus: 'Eudyptula',
      species: 'Eudyptula minor',
    },
    habitat: {
      en: 'It lives on the southern coasts of Australia and New Zealand. It swims in the sea all day and sleeps in a burrow on the beach.',
      cs: 'Žije na jižních pobřežích Austrálie a Nového Zélandu. Celý den plave v moři a spí v noře na pláži.',
    },
    diet: {
      en: 'It eats small fish, squid and tiny shrimps called krill.',
      cs: 'Jí malé rybky, olihně a drobné korýše zvané kril.',
    },
    predators: {
      en: 'In the sea, seals and sharks hunt it. On land, foxes, cats, dogs and stoats are a big danger.',
      cs: 'V moři ho loví tuleni a žraloci. Na souši jsou pro něj velkým nebezpečím lišky, kočky, psi a hranostajové.',
    },
  },
  {
    id: 'australian-sea-lion',
    name: { en: 'Australian sea lion', cs: 'Lachtan šedý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: OTARIIDAE,
      genus: 'Neophoca',
      species: 'Neophoca cinerea',
    },
    habitat: {
      en: 'It lives on the sandy beaches and rocky islands of southern and western Australia.',
      cs: 'Žije na písečných plážích a skalnatých ostrovech na jihu a západě Austrálie.',
    },
    diet: {
      en: 'It dives in the sea to catch fish, squid, octopus and lobsters.',
      cs: 'Potápí se v moři a loví ryby, olihně, chobotnice a langusty.',
    },
    predators: {
      en: 'Great white sharks and killer whales can hunt sea lions.',
      cs: 'Lachtany mohou lovit žraloci bílí a kosatky.',
    },
  },
  {
    id: 'great-white-shark',
    name: { en: 'Great white shark', cs: 'Žralok bílý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: CHONDRICHTHYES,
      order: { latin: 'Lamniformes', en: 'Mackerel sharks', cs: 'Obrouni' },
      family: { latin: 'Lamnidae', en: 'White sharks and makos', cs: 'Lamnovití' },
      genus: 'Carcharodon',
      species: 'Carcharodon carcharias',
    },
    habitat: {
      en: 'It lives in cool seas all around the world, also along the southern coast of Australia.',
      cs: 'Žije v chladnějších mořích po celém světě, také u jižního pobřeží Austrálie.',
    },
    diet: {
      en: 'It hunts seals, sea lions and big fish. It also eats dead whales it finds.',
      cs: 'Loví tuleně, lachtany a velké ryby. Sní i mrtvé velryby, které najde.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies, only killer whales. Young sharks can be eaten by bigger sharks.',
      cs: 'Dospělí žraloci nemají skoro žádné nepřátele, jen kosatky. Mladé žraloky mohou sníst větší žraloci.',
    },
  },
  {
    id: 'southern-right-whale',
    name: { en: 'Southern right whale', cs: 'Velryba jižní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: { latin: 'Balaenidae', en: 'Right whales', cs: 'Velrybovití' },
      genus: 'Eubalaena',
      species: 'Eubalaena australis',
    },
    habitat: {
      en: 'It lives in the cold southern oceans. In winter it swims to calm bays in southern Australia to have its babies.',
      cs: 'Žije v chladných jižních oceánech. V zimě připlouvá do klidných zátok na jihu Austrálie, kde rodí mláďata.',
    },
    diet: {
      en: 'It eats tiny sea animals like krill. It strains them from the water with its long mouth bristles, called baleen.',
      cs: 'Jí drobné mořské živočichy, třeba kril. Cedí je z vody dlouhými štětinami v tlamě, kterým se říká kostice.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Baby whales can be attacked by killer whales and big sharks.',
      cs: 'Dospělé velryby mají málo nepřátel. Na mláďata mohou zaútočit kosatky a velcí žraloci.',
    },
  },
  {
    id: 'north-island-brown-kiwi',
    name: { en: 'North Island brown kiwi', cs: 'Kivi hnědý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: { latin: 'Apterygiformes', en: 'Kiwis', cs: 'Kiviové' },
      family: { latin: 'Apterygidae', en: 'Kiwis', cs: 'Kiviovití' },
      genus: 'Apteryx',
      species: 'Apteryx mantelli',
    },
    habitat: {
      en: 'It lives in forests and bushes on the North Island of New Zealand. It cannot fly and comes out at night.',
      cs: 'Žije v lesích a křovinách na Severním ostrově Nového Zélandu. Neumí létat a ven chodí v noci.',
    },
    diet: {
      en: 'It eats worms, beetle grubs, insects and fallen fruit. It sniffs them out with the nostrils at the tip of its long beak.',
      cs: 'Jí žížaly, larvy brouků, hmyz a spadané ovoce. Vyčmuchá je nosními dírkami na špičce svého dlouhého zobáku.',
    },
    predators: {
      en: 'Stoats and cats, brought to New Zealand by people, eat most kiwi chicks. Dogs and ferrets can kill grown-up kiwis.',
      cs: 'Většinu kuřat kivi sežerou hranostajové a kočky, které na Nový Zéland přivezli lidé. Dospělé kivi mohou zabít psi a fretky.',
    },
  },
  {
    id: 'kea',
    name: { en: 'Kea', cs: 'Nestor kea' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PSITTACIFORMES,
      family: STRIGOPIDAE,
      genus: 'Nestor',
      species: 'Nestor notabilis',
    },
    habitat: {
      en: 'It lives high in the mountains of the South Island of New Zealand. It is the only parrot that lives in snowy mountains.',
      cs: 'Žije vysoko v horách na Jižním ostrově Nového Zélandu. Je to jediný papoušek, který žije v zasněžených horách.',
    },
    diet: {
      en: 'It eats berries, leaves, roots, seeds and insects. Sometimes it eats meat too.',
      cs: 'Jí bobule, listy, kořínky, semena a hmyz. Někdy si dá i maso.',
    },
    predators: {
      en: 'It nests in holes on the ground. Stoats, cats and possums, brought by people, eat its eggs and chicks.',
      cs: 'Hnízdí v dírách na zemi. Vajíčka a mláďata mu sežerou hranostajové, kočky a vakoveverky, které přivezli lidé.',
    },
  },
  {
    id: 'tuatara',
    name: { en: 'Tuatara', cs: 'Hatérie novozélandská' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: REPTILIA,
      order: { latin: 'Rhynchocephalia', en: 'Beak-heads (tuataras)', cs: 'Hatérie' },
      family: { latin: 'Sphenodontidae', en: 'Tuataras', cs: 'Hatériovití' },
      genus: 'Sphenodon',
      species: 'Sphenodon punctatus',
    },
    habitat: {
      en: 'It lives on small islands near New Zealand. It sleeps in a burrow, sometimes together with a seabird.',
      cs: 'Žije na malých ostrovech u Nového Zélandu. Spí v noře, někdy dokonce společně s mořským ptákem.',
    },
    diet: {
      en: 'It eats beetles, spiders, worms and big insects called weta. Sometimes it eats bird eggs and chicks.',
      cs: 'Jí brouky, pavouky, žížaly a velký hmyz zvaný weta. Někdy sní i ptačí vejce a mláďata.',
    },
    predators: {
      en: 'Rats eat tuatara eggs and babies, so tuataras live on islands without rats. Birds and bigger tuataras can eat young ones too.',
      cs: 'Krysy žerou vajíčka a mláďata hatérií, a proto hatérie žijí na ostrovech bez krys. Mláďata mohou sníst i ptáci a větší hatérie.',
    },
  },
  {
    id: 'hectors-dolphin',
    name: { en: "Hector's dolphin", cs: 'Plískavice novozélandská' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: { latin: 'Delphinidae', en: 'Oceanic dolphins', cs: 'Delfínovití' },
      genus: 'Cephalorhynchus',
      species: 'Cephalorhynchus hectori',
    },
    habitat: {
      en: 'It lives only in the shallow sea close to the coast of New Zealand. It is one of the smallest dolphins in the world.',
      cs: 'Žije jen v mělkém moři blízko pobřeží Nového Zélandu. Patří k nejmenším delfínům na světě.',
    },
    diet: {
      en: 'It eats small fish and squid.',
      cs: 'Jí malé ryby a olihně.',
    },
    predators: {
      en: 'Big sharks sometimes hunt these dolphins. Fishing nets are also a big danger for them.',
      cs: 'Občas je loví velcí žraloci. Velkým nebezpečím jsou pro ně také rybářské sítě.',
    },
  },
  {
    id: 'new-zealand-fur-seal',
    name: { en: 'New Zealand fur seal', cs: 'Lachtan Forsterův' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: OTARIIDAE,
      genus: 'Arctocephalus',
      species: 'Arctocephalus forsteri',
    },
    habitat: {
      en: 'It lives on rocky coasts of New Zealand and southern Australia. It rests on the rocks and swims in the sea.',
      cs: 'Žije na skalnatých pobřežích Nového Zélandu a jižní Austrálie. Odpočívá na skalách a plave v moři.',
    },
    diet: {
      en: 'It eats fish, squid and octopus. It dives deep to catch them.',
      cs: 'Jí ryby, olihně a chobotnice. Loví je hluboko pod vodou.',
    },
    predators: {
      en: 'Sharks and killer whales can hunt fur seals. Pups can be caught by sea lions.',
      cs: 'Lovit je mohou žraloci a kosatky. Mláďata mohou ulovit i lachtani.',
    },
  },
  {
    id: 'kakapo',
    name: { en: 'Kakapo', cs: 'Kakapo soví' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PSITTACIFORMES,
      family: STRIGOPIDAE,
      genus: 'Strigops',
      species: 'Strigops habroptilus',
    },
    habitat: {
      en: 'It is a big green parrot that cannot fly. Today it lives only on a few small islands of New Zealand where it is kept safe.',
      cs: 'Je to velký zelený papoušek, který neumí létat. Dnes žije jen na několika malých ostrovech Nového Zélandu, kde je v bezpečí.',
    },
    diet: {
      en: 'It eats leaves, seeds, roots and fruit. It loves the fruit of the rimu tree.',
      cs: 'Jí listy, semena, kořínky a plody. Nejraději má plody stromu rimu.',
    },
    predators: {
      en: 'Cats, stoats and rats, brought to New Zealand by people, hunted kakapos and ate their eggs. That is why kakapos now live on islands without these animals.',
      cs: 'Kočky, hranostajové a krysy, které přivezli lidé, lovili kakapy a žrali jejich vajíčka. Proto kakapové teď žijí na ostrovech, kde tato zvířata nejsou.',
    },
  },
  {
    id: 'tiger-snake',
    name: { en: 'Tiger snake', cs: 'Pakobra páskovaná' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: REPTILIA,
      order: SQUAMATA,
      family: { latin: 'Elapidae', en: 'Elapids (cobras and relatives)', cs: 'Korálovcovití' },
      genus: 'Notechis',
      species: 'Notechis scutatus',
    },
    habitat: {
      en: 'It lives in southern Australia and Tasmania, near swamps, creeks and wet grassland. It is very venomous.',
      cs: 'Žije na jihu Austrálie a v Tasmánii, u bažin, potoků a na vlhkých loukách. Je velmi jedovatá.',
    },
    diet: {
      en: 'It mostly eats frogs. It also catches lizards, mice, fish and small birds.',
      cs: 'Jí hlavně žáby. Loví také ještěrky, myši, ryby a malé ptáky.',
    },
    predators: {
      en: 'Eagles, hawks, kookaburras and other big birds can catch tiger snakes. Cats may catch young ones.',
      cs: 'Pakobry mohou ulovit orli, jestřábi, ledňáci kookaburra a další velcí ptáci. Mláďata mohou chytit kočky.',
    },
  },
  {
    id: 'spotted-tailed-quoll',
    name: { en: 'Spotted-tailed quoll', cs: 'Kunovec velký' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DASYUROMORPHIA,
      family: DASYURIDAE,
      genus: 'Dasyurus',
      species: 'Dasyurus maculatus',
    },
    habitat: {
      en: 'It lives in forests of eastern Australia and Tasmania. It climbs trees very well.',
      cs: 'Žije v lesích na východě Austrálie a v Tasmánii. Výborně šplhá po stromech.',
    },
    diet: {
      en: 'It hunts possums, birds, rabbits, lizards and insects. It is a meat eater.',
      cs: 'Loví vakoveverky, ptáky, králíky, ještěrky a hmyz. Je to masožravec.',
    },
    predators: {
      en: 'Dingoes, foxes and cats can hunt quolls. Owls may catch young ones.',
      cs: 'Kunovce mohou lovit dingové, lišky a kočky. Mláďata mohou ulovit sovy.',
    },
  },
  {
    id: 'leafy-seadragon',
    name: { en: 'Leafy seadragon', cs: 'Řasovník rozedraný' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: ACTINOPTERYGII,
      order: { latin: 'Syngnathiformes', en: 'Seahorses and pipefishes', cs: 'Jehly' },
      family: { latin: 'Syngnathidae', en: 'Seahorses and pipefishes', cs: 'Jehlovití' },
      genus: 'Phycodurus',
      species: 'Phycodurus eques',
    },
    habitat: {
      en: 'It lives in shallow seas along the southern coast of Australia, among seaweed. Its leafy body looks just like seaweed.',
      cs: 'Žije v mělkém moři u jižního pobřeží Austrálie mezi chaluhami. Jeho tělo s lístečky vypadá úplně jako mořská řasa.',
    },
    diet: {
      en: 'It eats tiny shrimps. It sucks them up through its long, thin snout like a straw.',
      cs: 'Jí malinké krevetky. Nasává je svým dlouhým tenkým čumáčkem jako brčkem.',
    },
    predators: {
      en: 'It hides so well that few animals find it. Young seadragons can be eaten by fish.',
      cs: 'Schovává se tak dobře, že ho najde jen málokdo. Mladé řasovníky mohou sežrat ryby.',
    },
  },
  {
    id: 'common-brushtail-possum',
    name: { en: 'Common brushtail possum', cs: 'Kusu liščí' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: DIPROTODONTIA,
      family: { latin: 'Phalangeridae', en: 'Brushtail possums and cuscuses', cs: 'Kuskusovití' },
      genus: 'Trichosurus',
      species: 'Trichosurus vulpecula',
    },
    habitat: {
      en: 'It lives in forests all over Australia, and even in town gardens and roofs. It sleeps in tree holes by day.',
      cs: 'Žije v lesích po celé Austrálii, dokonce i na zahradách a ve střechách domů ve městech. Přes den spí v dutinách stromů.',
    },
    diet: {
      en: 'It eats leaves, flowers and fruit. Sometimes it eats insects or bird eggs.',
      cs: 'Jí listy, květy a ovoce. Občas sní i hmyz nebo ptačí vejce.',
    },
    predators: {
      en: 'Owls, pythons, quolls, foxes and cats can hunt possums.',
      cs: 'Kusu mohou lovit sovy, krajty, kunovci, lišky a kočky.',
    },
  },
  {
    id: 'eastern-blue-tongued-lizard',
    name: { en: 'Eastern blue-tongued lizard', cs: 'Tilikva australská' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: REPTILIA,
      order: SQUAMATA,
      family: { latin: 'Scincidae', en: 'Skinks', cs: 'Scinkovití' },
      genus: 'Tiliqua',
      species: 'Tiliqua scincoides',
    },
    habitat: {
      en: 'It lives in eastern and south-eastern Australia, in grassland, bushland and even in gardens.',
      cs: 'Žije na východě a jihovýchodě Austrálie, na loukách, v buši a dokonce i na zahradách.',
    },
    diet: {
      en: 'It eats snails, insects, flowers and berries.',
      cs: 'Jí šneky, hmyz, květy a bobule.',
    },
    predators: {
      en: 'Snakes, kookaburras, birds of prey, dogs, cats and foxes can catch it. It sticks out its blue tongue to scare them away.',
      cs: 'Ulovit ji mohou hadi, ledňáci kookaburra, draví ptáci, psi, kočky a lišky. Aby je vylekala, vyplazuje na ně svůj modrý jazyk.',
    },
  },
  {
    id: 'superb-lyrebird',
    name: { en: 'Superb lyrebird', cs: 'Lyrochvost nádherný' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: { latin: 'Passeriformes', en: 'Perching birds', cs: 'Pěvci' },
      family: { latin: 'Menuridae', en: 'Lyrebirds', cs: 'Lyrochvostovití' },
      genus: 'Menura',
      species: 'Menura novaehollandiae',
    },
    habitat: {
      en: 'It lives in forests of south-eastern Australia. It is famous for copying the sounds it hears.',
      cs: 'Žije v lesích na jihovýchodě Austrálie. Je slavný tím, že umí napodobit zvuky, které slyší.',
    },
    diet: {
      en: 'It eats insects, worms and spiders. It scratches for them in the leaves on the forest floor.',
      cs: 'Jí hmyz, žížaly a pavouky. Vyhrabává je z listí na zemi v lese.',
    },
    predators: {
      en: 'Foxes, cats, dogs and birds of prey can catch lyrebirds. Foxes and cats also eat their chicks.',
      cs: 'Lyrochvosty mohou ulovit lišky, kočky, psi a draví ptáci. Lišky a kočky žerou i jejich mláďata.',
    },
  },
]
