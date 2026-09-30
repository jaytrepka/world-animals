import type { AnimalContent } from '../../types'
import {
  animalia, chordata, mammalia, reptilia, carnivora, artiodactyla, rodentia, squamata, crocodilia,
  ursidae, canidae, felidae, mustelidae, bovidae, cervidae, sciuridae, balaenopteridae, delphinidae,
} from './taxa'

export const middleContent: AnimalContent[] = [
  {
    id: 'american-bison',
    name: { en: 'American bison', cs: 'Bizon americký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: bovidae,
      genus: 'Bison',
      species: 'Bison bison',
    },
    habitat: {
      en: 'It lives in big herds on grassy plains and in parks like Yellowstone in the USA. It is the heaviest land animal in North America.',
      cs: 'Žije ve velkých stádech na travnatých pláních a v parcích, jako je Yellowstone v USA. Je to nejtěžší suchozemské zvíře Severní Ameriky.',
    },
    diet: {
      en: 'It eats grass all day long. In winter it pushes snow away with its big head to find it.',
      cs: 'Celý den spásá trávu. V zimě odhrnuje sníh svou velkou hlavou, aby se k ní dostal.',
    },
    predators: {
      en: 'Wolves hunt it, and sometimes grizzly bears. They mostly catch calves or old and sick bison.',
      cs: 'Loví ho vlci a někdy i medvědi grizzly. Chytí ale hlavně telata nebo staré a nemocné bizony.',
    },
  },
  {
    id: 'pronghorn',
    name: { en: 'Pronghorn', cs: 'Vidloroh americký' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: { latin: 'Antilocapridae', en: 'Pronghorns', cs: 'Vidlorohovití' },
      genus: 'Antilocapra',
      species: 'Antilocapra americana',
    },
    habitat: {
      en: 'It lives on wide, open grasslands and dry plains in the western USA. It is the fastest runner in America.',
      cs: 'Žije na širokých otevřených prériích a suchých pláních na západě USA. Je to nejrychlejší běžec v Americe.',
    },
    diet: {
      en: 'It eats grass, flowers, cactus and small bushes like sagebrush.',
      cs: 'Jí trávu, kytky, kaktusy a nízké keříky, třeba pelyněk.',
    },
    predators: {
      en: 'Grown-ups are hard to catch. Coyotes, bobcats, eagles and wolves hunt the babies.',
      cs: 'Dospělé vidlorohy je těžké chytit. Na mláďata ale číhají kojoti, rysové červení, orli a vlci.',
    },
  },
  {
    id: 'grey-wolf',
    name: { en: 'Grey wolf', cs: 'Vlk obecný' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: canidae,
      genus: 'Canis',
      species: 'Canis lupus',
    },
    habitat: {
      en: 'It lives in forests, mountains and plains in Canada and the northern USA. Wolves live together in a family called a pack.',
      cs: 'Žije v lesích, horách a na pláních v Kanadě a na severu USA. Vlci žijí pohromadě v rodině, které se říká smečka.',
    },
    diet: {
      en: 'The pack hunts together. They catch deer, elk, moose and bison, and also beavers and hares.',
      cs: 'Smečka loví společně. Chytají jeleny, wapiti, losy a bizony, ale také bobry a zajíce.',
    },
    predators: {
      en: 'Grown-up wolves have almost no enemies except bears and other wolves. Eagles and cougars can catch the pups.',
      cs: 'Dospělí vlci nemají skoro žádné nepřátele kromě medvědů a jiných vlků. Vlčata může ulovit orel nebo puma.',
    },
  },
  {
    id: 'american-black-bear',
    name: { en: 'American black bear', cs: 'Medvěd baribal' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: ursidae,
      genus: 'Ursus',
      species: 'Ursus americanus',
    },
    habitat: {
      en: 'It lives in forests all over North America, for example in the Great Smoky Mountains. It climbs trees very well.',
      cs: 'Žije v lesích po celé Severní Americe, třeba v Great Smoky Mountains. Výborně šplhá po stromech.',
    },
    diet: {
      en: 'It eats berries, nuts, grass and insects, and loves honey. Sometimes it catches fish or small animals.',
      cs: 'Jí bobule, ořechy, trávu a hmyz a moc miluje med. Někdy si chytí rybu nebo malé zvíře.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Grizzly bears, wolves and cougars can kill the cubs.',
      cs: 'Dospělí baribalové mají málo nepřátel. Mláďata ale mohou zabít grizzlyové, vlci a pumy.',
    },
  },
  {
    id: 'raccoon',
    name: { en: 'Raccoon', cs: 'Mýval severní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Procyonidae', en: 'Raccoons and coatis', cs: 'Medvídkovití' },
      genus: 'Procyon',
      species: 'Procyon lotor',
    },
    habitat: {
      en: 'It lives in forests near water, and also in towns and gardens. It has a black mask around its eyes.',
      cs: 'Žije v lesích u vody, ale i ve městech a na zahradách. Kolem očí má černou masku.',
    },
    diet: {
      en: 'It eats almost anything: fruit, nuts, frogs, fish, crayfish, eggs and even food from rubbish bins. It feels its food with its nimble paws.',
      cs: 'Jí skoro všechno: ovoce, ořechy, žáby, ryby, raky, vajíčka, a dokonce i jídlo z popelnic. Potravu ohmatává šikovnými tlapkami.',
    },
    predators: {
      en: 'Coyotes, bobcats, cougars, big owls and eagles can catch it.',
      cs: 'Může ho ulovit kojot, rys červený, puma, velká sova nebo orel.',
    },
  },
  {
    id: 'striped-skunk',
    name: { en: 'Striped skunk', cs: 'Skunk pruhovaný' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: { latin: 'Mephitidae', en: 'Skunks', cs: 'Skunkovití' },
      genus: 'Mephitis',
      species: 'Mephitis mephitis',
    },
    habitat: {
      en: 'It lives in fields, woods and even gardens in Canada, the USA and Mexico. It has black fur with white stripes.',
      cs: 'Žije na polích, v lesích, a dokonce i na zahradách v Kanadě, USA a Mexiku. Má černou srst s bílými pruhy.',
    },
    diet: {
      en: 'It eats insects, worms, mice, eggs, fruit and berries.',
      cs: 'Jí hmyz, žížaly, myši, vajíčka, ovoce a bobule.',
    },
    predators: {
      en: 'When it is scared, it sprays a terrible smell, so most animals leave it alone. Only big owls often catch it.',
      cs: 'Když se lekne, vystříkne strašně smradlavou tekutinu, a tak ho většina zvířat nechá být. Často ho loví jen velké sovy.',
    },
  },
  {
    id: 'north-american-beaver',
    name: { en: 'North American beaver', cs: 'Bobr kanadský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: rodentia,
      family: { latin: 'Castoridae', en: 'Beavers', cs: 'Bobrovití' },
      genus: 'Castor',
      species: 'Castor canadensis',
    },
    habitat: {
      en: 'It lives in rivers and lakes in forests of Canada and the USA. It builds dams and a house called a lodge out of sticks and mud.',
      cs: 'Žije v řekách a jezerech v lesích Kanady a USA. Z klacků a bahna staví hráze a domeček, kterému se říká hrad.',
    },
    diet: {
      en: 'It eats bark, twigs, leaves and water plants. It cuts down trees with its strong orange teeth.',
      cs: 'Jí kůru, větvičky, listy a vodní rostliny. Svými silnými oranžovými zuby umí pokácet strom.',
    },
    predators: {
      en: 'Wolves, coyotes, bears, lynxes and otters can catch it.',
      cs: 'Může ho ulovit vlk, kojot, medvěd, rys nebo vydra.',
    },
  },
  {
    id: 'cougar',
    name: { en: 'Cougar', cs: 'Puma americká' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: felidae,
      genus: 'Puma',
      species: 'Puma concolor',
    },
    habitat: {
      en: 'This big, quiet cat lives in mountains, forests and deserts, from Canada all the way to South America.',
      cs: 'Tahle velká a tichá kočka žije v horách, lesích i pouštích, od Kanady až po Jižní Ameriku.',
    },
    diet: {
      en: 'It mostly hunts deer. It also catches bighorn sheep, rabbits, raccoons and other animals.',
      cs: 'Nejvíc loví jeleny. Chytá ale i ovce tlustorohé, králíky, mývaly a další zvířata.',
    },
    predators: {
      en: 'Grown-ups have almost no enemies, but wolves and bears sometimes fight them. Kittens can be killed by wolves or other cougars.',
      cs: 'Dospělé pumy nemají skoro žádné nepřátele, jen občas se utkají s vlky nebo medvědy. Koťata mohou zabít vlci nebo jiné pumy.',
    },
  },
  {
    id: 'coyote',
    name: { en: 'Coyote', cs: 'Kojot prérijní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: canidae,
      genus: 'Canis',
      species: 'Canis latrans',
    },
    habitat: {
      en: 'It lives on prairies, in deserts and forests, and even in big cities. At night it howls and yips.',
      cs: 'Žije na prériích, v pouštích a v lesích, a dokonce i ve velkých městech. V noci vyje a štěká.',
    },
    diet: {
      en: 'It eats mice, rabbits, birds, lizards, fruit and dead animals. It eats almost anything it finds.',
      cs: 'Jí myši, králíky, ptáky, ještěrky, ovoce i mrtvá zvířata. Sní skoro všechno, co najde.',
    },
    predators: {
      en: 'Wolves and cougars can kill it. Eagles and big owls sometimes catch the pups.',
      cs: 'Může ho zabít vlk nebo puma. Štěňata někdy uloví orli a velké sovy.',
    },
  },
  {
    id: 'bighorn-sheep',
    name: { en: 'Bighorn sheep', cs: 'Ovce tlustorohá' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: bovidae,
      genus: 'Ovis',
      species: 'Ovis canadensis',
    },
    habitat: {
      en: 'It lives on steep, rocky mountains, like the Rocky Mountains in Canada and the USA. Males have huge curled horns.',
      cs: 'Žije na strmých skalnatých horách, třeba ve Skalistých horách v Kanadě a USA. Samci mají obrovské zatočené rohy.',
    },
    diet: {
      en: 'It eats grass, flowers and leaves of small bushes.',
      cs: 'Jí trávu, kytky a listy nízkých keřů.',
    },
    predators: {
      en: 'Cougars, wolves, coyotes and bears hunt it. Golden eagles can snatch the lambs.',
      cs: 'Loví ji pumy, vlci, kojoti a medvědi. Jehňata může uchvátit orel skalní.',
    },
  },
  {
    id: 'western-diamondback-rattlesnake',
    name: { en: 'Western diamondback rattlesnake', cs: 'Chřestýš západní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Viperidae', en: 'Vipers', cs: 'Zmijovití' },
      genus: 'Crotalus',
      species: 'Crotalus atrox',
    },
    habitat: {
      en: 'It lives in hot, dry deserts and rocky hills in the south-western USA and Mexico. It shakes the rattle on its tail to warn you.',
      cs: 'Žije v horkých suchých pouštích a skalnatých kopcích na jihozápadě USA a v Mexiku. Chřestítkem na ocase varuje, ať se k němu nepřibližuješ.',
    },
    diet: {
      en: 'It hunts mice, rats, rabbits, squirrels and birds with its venomous bite.',
      cs: 'Jedovatým kousnutím loví myši, krysy, králíky, sysly a ptáky.',
    },
    predators: {
      en: 'Hawks, eagles, roadrunners, coyotes and kingsnakes can eat it.',
      cs: 'Může ho sežrat jestřáb, orel, kukačka kohoutí, kojot nebo korálovka.',
    },
  },
  {
    id: 'gila-monster',
    name: { en: 'Gila monster', cs: 'Korovec jedovatý' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: squamata,
      family: { latin: 'Helodermatidae', en: 'Beaded lizards', cs: 'Korovcovití' },
      genus: 'Heloderma',
      species: 'Heloderma suspectum',
    },
    habitat: {
      en: 'This big, slow lizard with pink and black beads on its skin lives in the deserts of Arizona and northern Mexico.',
      cs: 'Tahle velká pomalá ještěrka s růžovými a černými korálky na kůži žije v pouštích Arizony a severního Mexika.',
    },
    diet: {
      en: 'It eats eggs of birds and turtles, and baby mice and rabbits. It stores fat in its thick tail.',
      cs: 'Jí vajíčka ptáků a želv a mláďata myší a králíků. V tlustém ocase si ukládá tuk do zásoby.',
    },
    predators: {
      en: 'It has a venomous bite, so few animals attack it. Coyotes, hawks and eagles sometimes do.',
      cs: 'Jedovatě kouše, a proto ho napadne jen málokdo. Občas se na něj odváží kojot, jestřáb nebo orel.',
    },
  },
  {
    id: 'sea-otter',
    name: { en: 'Sea otter', cs: 'Vydra mořská' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: carnivora,
      family: mustelidae,
      genus: 'Enhydra',
      species: 'Enhydra lutris',
    },
    habitat: {
      en: 'It lives in the cold Pacific Ocean along the coasts of California and Alaska. It sleeps floating on its back and wraps itself in seaweed.',
      cs: 'Žije ve studeném Tichém oceánu u pobřeží Kalifornie a Aljašky. Spí na zádech na hladině a zabalí se do chaluh.',
    },
    diet: {
      en: 'It eats sea urchins, crabs, clams and snails. It cracks the shells open with a stone on its tummy.',
      cs: 'Jí mořské ježky, kraby, mušle a plže. Skořápky si rozbíjí kamenem na bříšku.',
    },
    predators: {
      en: 'Orcas and great white sharks can catch it. Bald eagles sometimes take the pups.',
      cs: 'Může ji ulovit kosatka nebo žralok bílý. Mláďata si občas odnese orel bělohlavý.',
    },
  },
  {
    id: 'orca',
    name: { en: 'Orca', cs: 'Kosatka dravá' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: delphinidae,
      genus: 'Orcinus',
      species: 'Orcinus orca',
    },
    habitat: {
      en: 'It lives in all oceans. Many families of orcas swim along the coast of British Columbia in Canada. It is the biggest dolphin.',
      cs: 'Žije ve všech oceánech. U pobřeží Britské Kolumbie v Kanadě plave hodně kosatčích rodin. Je to největší delfín.',
    },
    diet: {
      en: 'It hunts in family groups. It eats fish like salmon, and also seals, sea lions and even big whales.',
      cs: 'Loví v rodinných skupinách. Jí ryby, třeba lososy, ale i tuleně, lachtany, a dokonce velké velryby.',
    },
    predators: {
      en: 'Nobody hunts the orca. It is the top hunter of the sea.',
      cs: 'Kosatku neloví nikdo. Je to největší lovec v moři.',
    },
  },
  {
    id: 'american-alligator',
    name: { en: 'American alligator', cs: 'Aligátor severoamerický' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: reptilia,
      order: crocodilia,
      family: { latin: 'Alligatoridae', en: 'Alligators and caimans', cs: 'Aligátorovití' },
      genus: 'Alligator',
      species: 'Alligator mississippiensis',
    },
    habitat: {
      en: 'It lives in warm swamps, rivers and lakes in the south-eastern USA, like Louisiana and Florida.',
      cs: 'Žije v teplých bažinách, řekách a jezerech na jihovýchodě USA, třeba v Louisianě a na Floridě.',
    },
    diet: {
      en: 'It eats fish, turtles, snakes, birds and animals that come to the water, like raccoons and deer.',
      cs: 'Jí ryby, želvy, hady, ptáky a zvířata, která přijdou k vodě, třeba mývaly a jeleny.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Raccoons, birds, big fish and bigger alligators eat the eggs and babies.',
      cs: 'Dospělí aligátoři nemají žádné nepřátele. Vajíčka a mláďata ale sežerou mývalové, ptáci, velké ryby a větší aligátoři.',
    },
  },
  {
    id: 'eastern-chipmunk',
    name: { en: 'Eastern chipmunk', cs: 'Čipmank východní' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: rodentia,
      family: sciuridae,
      genus: 'Tamias',
      species: 'Tamias striatus',
    },
    habitat: {
      en: 'This little striped squirrel lives in forests and gardens in the eastern USA and Canada. It lives in a burrow under the ground.',
      cs: 'Tahle malá pruhovaná veverka žije v lesích a na zahradách na východě USA a Kanady. Bydlí v noře pod zemí.',
    },
    diet: {
      en: 'It eats nuts, seeds, berries and mushrooms. It carries food in its puffy cheeks to store for winter.',
      cs: 'Jí ořechy, semínka, bobule a houby. Potravu nosí v nafouklých lících a schovává si ji na zimu.',
    },
    predators: {
      en: 'Hawks, owls, foxes, snakes, weasels and cats hunt it.',
      cs: 'Loví ho jestřábi, sovy, lišky, hadi, lasice a kočky.',
    },
  },
  {
    id: 'blue-whale',
    name: { en: 'Blue whale', cs: 'Plejtvák obrovský' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: balaenopteridae,
      genus: 'Balaenoptera',
      species: 'Balaenoptera musculus',
    },
    habitat: {
      en: 'It lives in the open ocean. In summer many come to the sea off California. It is the biggest animal that has ever lived.',
      cs: 'Žije na širém oceánu. V létě jich hodně připlouvá k pobřeží Kalifornie. Je to největší zvíře, jaké kdy žilo.',
    },
    diet: {
      en: 'It eats tiny shrimp called krill, lots and lots of them every day.',
      cs: 'Jí drobné krevetky, kterým se říká kril, a to obrovské množství každý den.',
    },
    predators: {
      en: 'Grown-ups are too big to be hunted. Orcas sometimes attack the babies.',
      cs: 'Dospělí plejtváci jsou moc velcí, aby je někdo lovil. Na mláďata ale někdy zaútočí kosatky.',
    },
  },
  {
    id: 'black-tailed-prairie-dog',
    name: { en: 'Black-tailed prairie dog', cs: 'Psoun prériový' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: rodentia,
      family: sciuridae,
      genus: 'Cynomys',
      species: 'Cynomys ludovicianus',
    },
    habitat: {
      en: 'It lives on the grassy prairies of the USA in big underground towns with many tunnels. It barks like a little dog to warn its friends.',
      cs: 'Žije na travnatých prériích v USA ve velkých podzemních městech s mnoha chodbami. Když hrozí nebezpečí, varuje ostatní štěkáním jako pejsek.',
    },
    diet: {
      en: 'It eats grass, seeds, roots and flowers.',
      cs: 'Jí trávu, semínka, kořínky a kytky.',
    },
    predators: {
      en: 'Coyotes, badgers, eagles, hawks, rattlesnakes and black-footed ferrets hunt it.',
      cs: 'Loví ho kojoti, jezevci, orli, jestřábi, chřestýši a tchoři černonozí.',
    },
  },
  {
    id: 'elk',
    name: { en: 'Elk', cs: 'Jelen wapiti' },
    classification: {
      kingdom: animalia,
      phylum: chordata,
      class: mammalia,
      order: artiodactyla,
      family: cervidae,
      genus: 'Cervus',
      species: 'Cervus canadensis',
    },
    habitat: {
      en: 'This big deer lives in forests and mountain meadows in the western USA and Canada. In autumn the males call with a loud, high bugle.',
      cs: 'Tenhle velký jelen žije v lesích a na horských loukách na západě USA a Kanady. Na podzim samci hlasitě a vysoko troubí.',
    },
    diet: {
      en: 'It eats grass, leaves, twigs and bark.',
      cs: 'Jí trávu, listy, větvičky a kůru.',
    },
    predators: {
      en: 'Wolves, cougars and bears hunt it. Coyotes can catch the calves.',
      cs: 'Loví ho vlci, pumy a medvědi. Kojoti mohou chytit kolouchy.',
    },
  },
]
