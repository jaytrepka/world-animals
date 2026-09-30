import type { AnimalContent } from '../../types'
import {
  kingdom, chordata, mammals, birds, reptiles, amphibians, rayFinned, cartilaginous,
  anura, carnivora, primates, whales, squamata, testudines, pilosa, iguanidae, callitrichidae,
} from './taxa'

export const northContent: AnimalContent[] = [
  {
    id: 'golden-poison-frog',
    name: { en: 'Golden poison frog', cs: 'Pralesnička strašná' },
    classification: {
      kingdom,
      phylum: chordata,
      class: amphibians,
      order: anura,
      family: { latin: 'Dendrobatidae', en: 'Poison dart frogs', cs: 'Pralesničkovití' },
      genus: 'Phyllobates',
      species: 'Phyllobates terribilis',
    },
    habitat: {
      en: 'It lives on the wet floor of a small patch of rainforest near the Pacific coast of Colombia.',
      cs: 'Žije na vlhké zemi v malém kousku deštného pralesa u tichomořského pobřeží Kolumbie.',
    },
    diet: {
      en: 'It catches ants, termites and other tiny bugs with its sticky tongue.',
      cs: 'Lepkavým jazykem chytá mravence, termity a další drobný hmyz.',
    },
    predators: {
      en: 'Its bright yellow skin warns that it is very poisonous, so almost nobody eats it. Only one kind of snake can eat young frogs.',
      cs: 'Jasně žlutá kůže všechny varuje, že je velmi jedovatá, a tak ji skoro nikdo nejí. Jen jeden druh hada si troufne na mladé žabky.',
    },
  },
  {
    id: 'spectacled-bear',
    name: { en: 'Spectacled bear', cs: 'Medvěd brýlatý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Ursidae', en: 'Bears', cs: 'Medvědovití' },
      genus: 'Tremarctos',
      species: 'Tremarctos ornatus',
    },
    habitat: {
      en: 'It lives in misty forests and grassy slopes high in the Andes mountains. It has pale rings around its eyes, like glasses.',
      cs: 'Žije v mlžných lesích a na travnatých svazích vysoko v horách And. Kolem očí má světlé kroužky, jako by nosil brýle.',
    },
    diet: {
      en: 'It mostly eats plants: bromeliad leaves, fruit, cactus and palm hearts. Sometimes it eats small animals.',
      cs: 'Jí hlavně rostliny: listy bromélií, ovoce, kaktusy a palmová srdce. Občas si dá i malé zvíře.',
    },
    predators: {
      en: 'Grown-up bears have almost no enemies. Pumas and jaguars sometimes catch cubs.',
      cs: 'Dospělí medvědi nemají skoro žádné nepřátele. Mláďata ale někdy uloví puma nebo jaguár.',
    },
  },
  {
    id: 'galapagos-tortoise',
    name: { en: 'Galápagos tortoise', cs: 'Želva sloní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Testudinidae', en: 'Tortoises', cs: 'Testudovití' },
      genus: 'Chelonoidis',
      species: 'Chelonoidis niger',
    },
    habitat: {
      en: 'It lives only on the Galápagos Islands in the Pacific Ocean. It is the biggest tortoise in the world and can live over 100 years.',
      cs: 'Žije jen na Galapážských ostrovech v Tichém oceánu. Je to největší suchozemská želva na světě a může se dožít víc než sta let.',
    },
    diet: {
      en: 'It eats grass, leaves, fruit and even spiky cactus.',
      cs: 'Spásá trávu, listy, ovoce, a dokonce i pichlavé kaktusy.',
    },
    predators: {
      en: 'Grown-ups are too big and hard for any enemy. Hawks eat tiny babies, and rats and pigs brought by people dig up the eggs.',
      cs: 'Dospělé želvy jsou na každého nepřítele moc velké a tvrdé. Malá želvátka loví káně a vajíčka vyhrabávají krysy a prasata, která přivezli lidé.',
    },
  },
  {
    id: 'marine-iguana',
    name: { en: 'Marine iguana', cs: 'Leguán mořský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: iguanidae,
      genus: 'Amblyrhynchus',
      species: 'Amblyrhynchus cristatus',
    },
    habitat: {
      en: 'It lives on the black rocky shores of the Galápagos Islands. It is the only lizard in the world that swims in the sea.',
      cs: 'Žije na černých skalnatých pobřežích Galapážských ostrovů. Je to jediná ještěrka na světě, která plave v moři.',
    },
    diet: {
      en: 'It dives into the cold sea and scrapes seaweed off the rocks. Then it warms up in the sun.',
      cs: 'Potápí se do studeného moře a spásá mořské řasy ze skal. Potom se ohřívá na sluníčku.',
    },
    predators: {
      en: 'Hawks, herons, snakes and sharks can catch it. Cats and rats brought by people eat the young.',
      cs: 'Může ho ulovit káně, volavka, had nebo žralok. Mláďata žerou i kočky a krysy, které přivezli lidé.',
    },
  },
  {
    id: 'scalloped-hammerhead',
    name: { en: 'Scalloped hammerhead', cs: 'Kladivoun bronzový' },
    classification: {
      kingdom,
      phylum: chordata,
      class: cartilaginous,
      order: { latin: 'Carcharhiniformes', en: 'Ground sharks', cs: 'Žralouni' },
      family: { latin: 'Sphyrnidae', en: 'Hammerhead sharks', cs: 'Kladivounovití' },
      genus: 'Sphyrna',
      species: 'Sphyrna lewini',
    },
    habitat: {
      en: 'It swims in warm seas. Around the islands of Malpelo and Galápagos hundreds of them swim together in big groups.',
      cs: 'Plave v teplých mořích. U ostrovů Malpelo a Galapágy jich plavou stovky pohromadě ve velkých hejnech.',
    },
    diet: {
      en: 'It hunts fish, squid and octopuses. Its hammer-shaped head helps it find food hidden in the sand.',
      cs: 'Loví ryby, kalmary a chobotnice. Hlava ve tvaru kladiva mu pomáhá najít potravu schovanou v písku.',
    },
    predators: {
      en: 'Big sharks and orcas can eat it. Young hammerheads are eaten by other sharks.',
      cs: 'Může ho sežrat velký žralok nebo kosatka. Mladé kladivouny loví jiní žraloci.',
    },
  },
  {
    id: 'green-anaconda',
    name: { en: 'Green anaconda', cs: 'Anakonda velká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: { latin: 'Boidae', en: 'Boas', cs: 'Hroznýšovití' },
      genus: 'Eunectes',
      species: 'Eunectes murinus',
    },
    habitat: {
      en: 'It lives in swamps, slow rivers and flooded grasslands in the warm north of South America. It is the heaviest snake in the world.',
      cs: 'Žije v bažinách, pomalých řekách a zaplavených travnatých pláních na teplém severu Jižní Ameriky. Je to nejtěžší had na světě.',
    },
    diet: {
      en: 'It waits in the water and catches fish, birds, capybaras and even caimans. It squeezes them and swallows them whole.',
      cs: 'Číhá ve vodě a loví ryby, ptáky, kapybary, a dokonce i kajmany. Kořist obtočí, zmáčkne a spolkne vcelku.',
    },
    predators: {
      en: 'Big anacondas have almost no enemies, only jaguars. Young snakes are eaten by caimans, birds and big fish.',
      cs: 'Velké anakondy nemají skoro žádné nepřátele, jen jaguára. Mladé hady žerou kajmani, ptáci a velké ryby.',
    },
  },
  {
    id: 'colombian-red-howler',
    name: { en: 'Colombian red howler', cs: 'Vřešťan rezavý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Atelidae', en: 'Howler and spider monkeys', cs: 'Chápanovití' },
      genus: 'Alouatta',
      species: 'Alouatta seniculus',
    },
    habitat: {
      en: 'It lives high in the trees of forests in Colombia, Venezuela and the Amazon. Its loud howl can be heard far away.',
      cs: 'Žije vysoko v korunách stromů v lesích Kolumbie, Venezuely a Amazonie. Jeho hlasité vřeštění je slyšet hodně daleko.',
    },
    diet: {
      en: 'It eats leaves, fruit and flowers.',
      cs: 'Jí listy, ovoce a květy.',
    },
    predators: {
      en: 'Harpy eagles, jaguars and big snakes can catch it.',
      cs: 'Může ho ulovit harpyje, jaguár nebo velký had.',
    },
  },
  {
    id: 'giant-otter',
    name: { en: 'Giant otter', cs: 'Vydra obrovská' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: carnivora,
      family: { latin: 'Mustelidae', en: 'Weasels, badgers and otters', cs: 'Lasicovití' },
      genus: 'Pteronura',
      species: 'Pteronura brasiliensis',
    },
    habitat: {
      en: 'It lives in family groups in rivers, lakes and swamps of the Amazon, the Guianas and the Pantanal. It is the longest otter in the world.',
      cs: 'Žije v rodinných skupinách v řekách, jezerech a bažinách Amazonie, Guyany a Pantanalu. Je to nejdelší vydra na světě.',
    },
    diet: {
      en: 'It mostly eats fish. Sometimes it catches crabs, snakes and even small caimans.',
      cs: 'Jí hlavně ryby. Někdy uloví i kraby, hady, a dokonce malé kajmany.',
    },
    predators: {
      en: 'Grown-ups have few enemies, but jaguars and caimans sometimes attack. Young otters can be caught by anacondas.',
      cs: 'Dospělé vydry mají málo nepřátel, občas je ale napadne jaguár nebo kajman. Mláďata může ulovit anakonda.',
    },
  },
  {
    id: 'leatherback-sea-turtle',
    name: { en: 'Leatherback sea turtle', cs: 'Kožatka velká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: testudines,
      family: { latin: 'Dermochelyidae', en: 'Leatherback turtles', cs: 'Kožatkovití' },
      genus: 'Dermochelys',
      species: 'Dermochelys coriacea',
    },
    habitat: {
      en: 'It swims across the oceans. Many come to the beaches of French Guiana and Suriname to lay their eggs in the sand.',
      cs: 'Plave přes celé oceány. Mnoho jich připlouvá na pláže Francouzské Guyany a Surinamu, kde kladou vajíčka do písku.',
    },
    diet: {
      en: 'It eats jellyfish, lots and lots of them.',
      cs: 'Jí medúzy, a to opravdu hodně medúz.',
    },
    predators: {
      en: 'Grown-ups are huge, only orcas and big sharks attack them. Crabs, birds and dogs eat the eggs and baby turtles.',
      cs: 'Dospělé kožatky jsou obrovské, napadnou je jen kosatky a velcí žraloci. Vajíčka a malá želvátka žerou krabi, ptáci a psi.',
    },
  },
  {
    id: 'harpy-eagle',
    name: { en: 'Harpy eagle', cs: 'Harpyje pralesní' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Accipitriformes', en: 'Birds of prey', cs: 'Dravci' },
      family: { latin: 'Accipitridae', en: 'Hawks and eagles', cs: 'Jestřábovití' },
      genus: 'Harpia',
      species: 'Harpia harpyja',
    },
    habitat: {
      en: 'It lives in tall rainforests and builds its huge nest at the top of the biggest trees. It is one of the strongest eagles in the world.',
      cs: 'Žije ve vysokých deštných pralesích a obrovské hnízdo si staví na vrcholcích největších stromů. Patří k nejsilnějším orlům na světě.',
    },
    diet: {
      en: 'It snatches sloths and monkeys from the tree tops with its giant claws.',
      cs: 'Obrovskými drápy loví v korunách stromů lenochody a opice.',
    },
    predators: {
      en: 'Grown-ups have no natural enemies. Chicks in the nest are guarded by their parents.',
      cs: 'Dospělé harpyje nemají v přírodě žádné nepřátele. Mládě v hnízdě hlídají rodiče.',
    },
  },
  {
    id: 'west-indian-manatee',
    name: { en: 'West Indian manatee', cs: 'Kapustňák širokonosý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: { latin: 'Sirenia', en: 'Sea cows', cs: 'Sirény' },
      family: { latin: 'Trichechidae', en: 'Manatees', cs: 'Kapustňákovití' },
      genus: 'Trichechus',
      species: 'Trichechus manatus',
    },
    habitat: {
      en: 'It lives in warm, shallow sea water, river mouths and lagoons along the Caribbean coast, near Trinidad and the Orinoco River.',
      cs: 'Žije v teplé mělké mořské vodě, v ústích řek a v lagunách u karibského pobřeží, u Trinidadu a řeky Orinoko.',
    },
    diet: {
      en: 'It slowly munches sea grass and water plants, like a cow in the water.',
      cs: 'Pomalu spásá mořskou trávu a vodní rostliny, jako kráva pod vodou.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Sharks and crocodiles can sometimes catch a young one.',
      cs: 'Dospělí kapustňáci nemají skoro žádné nepřátele. Mládě může občas ulovit žralok nebo krokodýl.',
    },
  },
  {
    id: 'scarlet-macaw',
    name: { en: 'Scarlet macaw', cs: 'Ara arakanga' },
    classification: {
      kingdom,
      phylum: chordata,
      class: birds,
      order: { latin: 'Psittaciformes', en: 'Parrots', cs: 'Papoušci' },
      family: { latin: 'Psittacidae', en: 'American and African parrots', cs: 'Papouškovití' },
      genus: 'Ara',
      species: 'Ara macao',
    },
    habitat: {
      en: 'It lives in the tall trees of the Amazon rainforest. It is bright red, yellow and blue and flies in noisy pairs.',
      cs: 'Žije ve vysokých stromech amazonského pralesa. Je zářivě červený, žlutý a modrý a létá v hlučných párech.',
    },
    diet: {
      en: 'It cracks hard nuts and seeds with its strong beak. It also eats fruit and flowers, and licks clay from river banks.',
      cs: 'Silným zobákem louská tvrdé ořechy a semena. Jí také ovoce a květy a olizuje jíl z břehů řek.',
    },
    predators: {
      en: 'Harpy eagles and hawks can catch it. Snakes and monkeys eat eggs and chicks from the nest.',
      cs: 'Může ho ulovit harpyje nebo jiný dravec. Vajíčka a mláďata z hnízda sežerou hadi a opice.',
    },
  },
  {
    id: 'arapaima',
    name: { en: 'Arapaima', cs: 'Arapaima velká' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Osteoglossiformes', en: 'Bony-tongued fishes', cs: 'Ostnojazyční' },
      family: { latin: 'Arapaimidae', en: 'Arapaimas', cs: 'Arapaimovití' },
      genus: 'Arapaima',
      species: 'Arapaima gigas',
    },
    habitat: {
      en: 'It lives in rivers and flooded forests of the Amazon. It is one of the biggest river fish in the world and comes up to breathe air.',
      cs: 'Žije v řekách a zaplavených lesích Amazonie. Je to jedna z největších říčních ryb na světě a vyplouvá k hladině dýchat vzduch.',
    },
    diet: {
      en: 'It eats other fish. Sometimes it jumps up and grabs a bird from a branch.',
      cs: 'Jí jiné ryby. Někdy vyskočí z vody a chytí ptáka z větve.',
    },
    predators: {
      en: 'Grown-ups have few enemies except people, caimans and giant otters. Young fish are guarded by their father.',
      cs: 'Dospělé ryby mají málo nepřátel, jen lidi, kajmany a vydry obrovské. Mladé rybky hlídá jejich táta.',
    },
  },
  {
    id: 'amazon-river-dolphin',
    name: { en: 'Amazon river dolphin', cs: 'Delfínovec amazonský' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: whales,
      family: { latin: 'Iniidae', en: 'Amazon river dolphins', cs: 'Iniovití' },
      genus: 'Inia',
      species: 'Inia geoffrensis',
    },
    habitat: {
      en: 'It lives in the Amazon and Orinoco rivers. It is pink and swims among the tree trunks in flooded forests.',
      cs: 'Žije v řekách Amazonce a Orinoku. Je růžový a proplouvá mezi kmeny stromů v zaplavených lesích.',
    },
    diet: {
      en: 'It catches fish, crabs and small turtles with its long, thin beak.',
      cs: 'Dlouhým úzkým zobákem loví ryby, kraby a malé želvy.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies. Jaguars, anacondas or caimans may sometimes catch a young one.',
      cs: 'Dospělí delfínovci nemají skoro žádné nepřátele. Mládě může občas ulovit jaguár, anakonda nebo kajman.',
    },
  },
  {
    id: 'red-bellied-piranha',
    name: { en: 'Red-bellied piranha', cs: 'Piraňa červená' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Characiformes', en: 'Characins', cs: 'Trnobřiší' },
      family: { latin: 'Serrasalmidae', en: 'Piranhas and pacus', cs: 'Piraňovití' },
      genus: 'Pygocentrus',
      species: 'Pygocentrus nattereri',
    },
    habitat: {
      en: 'It swims in big groups in the rivers and lakes of the Amazon and other warm South American rivers.',
      cs: 'Plave ve velkých hejnech v řekách a jezerech Amazonie a dalších teplých jihoamerických řek.',
    },
    diet: {
      en: 'It has very sharp teeth. It eats fish, insects, snails, and bits of dead animals and plants.',
      cs: 'Má velmi ostré zuby. Jí ryby, hmyz, plže a zbytky mrtvých zvířat i rostlin.',
    },
    predators: {
      en: 'River dolphins, caimans, giant otters, herons and big fish eat piranhas.',
      cs: 'Piraně žerou delfínovci, kajmani, vydry obrovské, volavky a velké ryby.',
    },
  },
  {
    id: 'brown-throated-sloth',
    name: { en: 'Brown-throated sloth', cs: 'Lenochod hnědokrký' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: pilosa,
      family: { latin: 'Bradypodidae', en: 'Three-toed sloths', cs: 'Lenochodovití' },
      genus: 'Bradypus',
      species: 'Bradypus variegatus',
    },
    habitat: {
      en: 'It hangs upside down in the trees of the rainforest. It moves very, very slowly and climbs down only about once a week.',
      cs: 'Visí hlavou dolů na stromech v deštném pralese. Pohybuje se strašně pomalu a dolů leze jen asi jednou za týden.',
    },
    diet: {
      en: 'It eats leaves, buds and flowers.',
      cs: 'Jí listy, pupeny a květy.',
    },
    predators: {
      en: 'Harpy eagles, jaguars, ocelots and big snakes hunt it.',
      cs: 'Loví ho harpyje, jaguáři, ocelot a velcí hadi.',
    },
  },
  {
    id: 'electric-eel',
    name: { en: 'Electric eel', cs: 'Paúhoř elektrický' },
    classification: {
      kingdom,
      phylum: chordata,
      class: rayFinned,
      order: { latin: 'Gymnotiformes', en: 'Knifefishes', cs: 'Nahohřbetí' },
      family: { latin: 'Gymnotidae', en: 'Naked-back knifefishes', cs: 'Paúhořovití' },
      genus: 'Electrophorus',
      species: 'Electrophorus electricus',
    },
    habitat: {
      en: 'It lives in muddy rivers and swamps of the Amazon and the Guianas. It is not a real eel, but a long fish.',
      cs: 'Žije v kalných řekách a bažinách Amazonie a Guyany. Není to opravdový úhoř, ale dlouhá ryba.',
    },
    diet: {
      en: 'It stuns fish and frogs with a strong electric shock and then eats them.',
      cs: 'Ryby a žáby omráčí silnou elektrickou ranou a pak je sní.',
    },
    predators: {
      en: 'Because of its electric shocks, grown-ups have almost no enemies. Caimans and big fish can eat the young.',
      cs: 'Kvůli elektrickým ranám nemají dospělí skoro žádné nepřátele. Mláďata ale mohou sežrat kajmani a velké ryby.',
    },
  },
  {
    id: 'green-iguana',
    name: { en: 'Green iguana', cs: 'Leguán zelený' },
    classification: {
      kingdom,
      phylum: chordata,
      class: reptiles,
      order: squamata,
      family: iguanidae,
      genus: 'Iguana',
      species: 'Iguana iguana',
    },
    habitat: {
      en: 'It lives in trees near rivers in warm forests, from the Caribbean coast of Colombia and Venezuela to the Amazon.',
      cs: 'Žije na stromech u řek v teplých lesích, od karibského pobřeží Kolumbie a Venezuely až po Amazonii.',
    },
    diet: {
      en: 'It eats leaves, flowers and fruit.',
      cs: 'Jí listy, květy a ovoce.',
    },
    predators: {
      en: 'Hawks, snakes, ocelots and caimans hunt it. When scared, it jumps from a branch into the water.',
      cs: 'Loví ho dravci, hadi, oceloti a kajmani. Když se lekne, skočí z větve do vody.',
    },
  },
  {
    id: 'pygmy-marmoset',
    name: { en: 'Pygmy marmoset', cs: 'Kosman zakrslý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: callitrichidae,
      genus: 'Cebuella',
      species: 'Cebuella pygmaea',
    },
    habitat: {
      en: 'It lives in the trees of the western Amazon rainforest. It is the smallest monkey in the world and would fit in your hand.',
      cs: 'Žije na stromech v západní části amazonského pralesa. Je to nejmenší opice na světě a vešla by se ti do dlaně.',
    },
    diet: {
      en: 'It chews little holes in tree bark and licks the sweet sap. It also eats insects.',
      cs: 'Vykouše do kůry stromů dírky a olizuje sladkou mízu. Jí také hmyz.',
    },
    predators: {
      en: 'Hawks, snakes and wild cats can catch it.',
      cs: 'Může ho ulovit dravý pták, had nebo divoká kočka.',
    },
  },
  {
    id: 'common-squirrel-monkey',
    name: { en: 'Common squirrel monkey', cs: 'Kotul veverovitý' },
    classification: {
      kingdom,
      phylum: chordata,
      class: mammals,
      order: primates,
      family: { latin: 'Cebidae', en: 'Capuchins and squirrel monkeys', cs: 'Malpovití' },
      genus: 'Saimiri',
      species: 'Saimiri sciureus',
    },
    habitat: {
      en: 'It lives in big, busy groups in the rainforests of the eastern Amazon and the Guianas.',
      cs: 'Žije ve velkých a hlučných tlupách v deštných pralesích východní Amazonie a Guyany.',
    },
    diet: {
      en: 'It eats insects, spiders, fruit and sometimes small frogs.',
      cs: 'Jí hmyz, pavouky, ovoce a někdy i malé žabky.',
    },
    predators: {
      en: 'Eagles, hawks, snakes and wild cats hunt it.',
      cs: 'Loví ho orli, jiní dravci, hadi a divoké kočky.',
    },
  },
]
