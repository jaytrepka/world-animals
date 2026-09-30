import type { AnimalContent } from '../../types'
import {
  ANIMALIA, CHORDATA, ARTHROPODA, MAMMALIA, AVES, ACTINOPTERYGII, MALACOSTRACA,
  SPHENISCIFORMES, SPHENISCIDAE, CARNIVORA, OTARIIDAE, PHOCIDAE, ARTIODACTYLA, BALAENOPTERIDAE, PERCIFORMES,
} from './taxa'

// Antarctic Peninsula, Scotia Sea, South Georgia, South Shetland and South Orkney Islands.
export const northContent: AnimalContent[] = [
  {
    id: 'king-penguin',
    name: { en: 'King penguin', cs: 'Tučňák patagonský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Aptenodytes',
      species: 'Aptenodytes patagonicus',
    },
    habitat: {
      en: 'It lives on islands near Antarctica, like South Georgia. Huge crowds of king penguins stand together on the beaches.',
      cs: 'Žije na ostrovech kolem Antarktidy, třeba na Jižní Georgii. Na plážích stojí pohromadě obrovské zástupy těchto tučňáků.',
    },
    diet: {
      en: 'It dives deep into the sea to catch small fish and squid.',
      cs: 'Potápí se hluboko do moře a loví malé rybky a olihně.',
    },
    predators: {
      en: 'In the sea it must watch out for leopard seals and orcas. On land, big seabirds called skuas and giant petrels steal eggs and chicks.',
      cs: 'V moři si musí dávat pozor na tuleně leopardí a kosatky. Na souši mu vejce a mláďata kradou chaluhy a buřňáci obrovští.',
    },
  },
  {
    id: 'antarctic-fur-seal',
    name: { en: 'Antarctic fur seal', cs: 'Lachtan antarktický' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: OTARIIDAE,
      genus: 'Arctocephalus',
      species: 'Arctocephalus gazella',
    },
    habitat: {
      en: 'It lives on rocky beaches of islands near Antarctica, most of all on South Georgia. It can walk on its big flippers.',
      cs: 'Žije na kamenitých plážích ostrovů kolem Antarktidy, nejvíc na Jižní Georgii. Na velkých ploutvích umí i chodit.',
    },
    diet: {
      en: 'It eats krill, fish and squid that it catches in the cold sea.',
      cs: 'Jí kril, ryby a olihně, které loví ve studeném moři.',
    },
    predators: {
      en: 'Leopard seals and orcas hunt fur seals in the water. Skuas and giant petrels can grab young pups on the beach.',
      cs: 'Ve vodě je loví tuleni leopardí a kosatky. Malá mláďata na pláži mohou ulovit chaluhy a buřňáci obrovští.',
    },
  },
  {
    id: 'antarctic-krill',
    name: { en: 'Antarctic krill', cs: 'Krunýřovka krillová' },
    classification: {
      kingdom: ANIMALIA,
      phylum: ARTHROPODA,
      class: MALACOSTRACA,
      order: { latin: 'Euphausiacea', en: 'Krill', cs: 'Krunýřovky' },
      family: { latin: 'Euphausiidae', en: 'Krill', cs: 'Krunýřovkovití' },
      genus: 'Euphausia',
      species: 'Euphausia superba',
    },
    habitat: {
      en: 'This tiny shrimp-like animal lives in the cold Southern Ocean. Billions of them swim together in huge swarms.',
      cs: 'Tenhle drobný korýš podobný krevetce žije ve studeném Jižním oceánu. Miliardy krunýřovek plavou pohromadě v obrovských hejnech.',
    },
    diet: {
      en: 'It eats tiny green plants that float in the water and grow under the sea ice.',
      cs: 'Jí maličké zelené řasy, které se vznášejí ve vodě a rostou pod mořským ledem.',
    },
    predators: {
      en: 'Almost everyone! Whales, seals, penguins, fish and seabirds all eat krill. It is the most important food in Antarctica.',
      cs: 'Skoro všichni! Kril jedí velryby, tuleni, tučňáci, ryby i mořští ptáci. Je to nejdůležitější potrava v Antarktidě.',
    },
  },
  {
    id: 'chinstrap-penguin',
    name: { en: 'Chinstrap penguin', cs: 'Tučňák uzdičkový' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Pygoscelis',
      species: 'Pygoscelis antarcticus',
    },
    habitat: {
      en: 'It lives on rocky islands and coasts around the Antarctic Peninsula. The thin black line under its chin looks like a helmet strap.',
      cs: 'Žije na skalnatých ostrovech a pobřeží Antarktického poloostrova. Tenký černý proužek pod bradou vypadá jako řemínek od helmy.',
    },
    diet: {
      en: 'It eats mostly krill, and sometimes small fish.',
      cs: 'Jí hlavně kril a někdy i malé rybky.',
    },
    predators: {
      en: 'Leopard seals hunt it in the sea. Skuas and sheathbills steal its eggs and chicks.',
      cs: 'V moři ho loví tuleni leopardí. Vejce a mláďata mu kradou chaluhy a štítonosi.',
    },
  },
  {
    id: 'leopard-seal',
    name: { en: 'Leopard seal', cs: 'Tuleň leopardí' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: PHOCIDAE,
      genus: 'Hydrurga',
      species: 'Hydrurga leptonyx',
    },
    habitat: {
      en: 'It lives in the icy sea and on floating ice all around Antarctica. Its fur has dark spots like a leopard.',
      cs: 'Žije v ledovém moři a na plovoucích krách všude kolem Antarktidy. Na kožichu má tmavé skvrny jako leopard.',
    },
    diet: {
      en: 'It is a strong hunter with a huge mouth. It catches penguins, other seals, fish and also krill.',
      cs: 'Je to silný lovec s obrovskou tlamou. Loví tučňáky, jiné tuleně, ryby a také kril.',
    },
    predators: {
      en: 'Only orcas are strong enough to hunt a leopard seal.',
      cs: 'Tuleně leopardího dokážou ulovit jen kosatky.',
    },
  },
  {
    id: 'crocodile-icefish',
    name: { en: 'Crocodile icefish', cs: 'Ledařka' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: ACTINOPTERYGII,
      order: PERCIFORMES,
      family: { latin: 'Channichthyidae', en: 'Crocodile icefishes', cs: 'Ledařkovití' },
      genus: 'Chionodraco',
      species: 'Chionodraco hamatus',
    },
    habitat: {
      en: 'It lives near the bottom of the freezing sea around Antarctica. Its blood is not red but almost see-through!',
      cs: 'Žije u dna mrazivého moře kolem Antarktidy. Její krev není červená, ale skoro průhledná!',
    },
    diet: {
      en: 'It has a long mouth like a crocodile. It eats krill and small fish.',
      cs: 'Má dlouhou tlamu jako krokodýl. Jí kril a malé rybky.',
    },
    predators: {
      en: 'Weddell seals, penguins and bigger fish like to eat icefish.',
      cs: 'Ledařky rádi jedí tuleni Weddellovi, tučňáci a větší ryby.',
    },
  },
  {
    id: 'gentoo-penguin',
    name: { en: 'Gentoo penguin', cs: 'Tučňák oslí' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Pygoscelis',
      species: 'Pygoscelis papua',
    },
    habitat: {
      en: 'It lives on the Antarctic Peninsula and nearby islands. It builds its nest from little stones and has a bright orange beak.',
      cs: 'Žije na Antarktickém poloostrově a okolních ostrovech. Hnízdo si staví z malých kamínků a má jasně oranžový zobák.',
    },
    diet: {
      en: 'It eats krill, small fish and squid. It is the fastest swimmer of all penguins.',
      cs: 'Jí kril, malé rybky a olihně. Ze všech tučňáků plave nejrychleji.',
    },
    predators: {
      en: 'Leopard seals and orcas hunt it in the sea. Skuas steal its eggs and chicks.',
      cs: 'V moři ho loví tuleni leopardí a kosatky. Vejce a mláďata mu kradou chaluhy.',
    },
  },
  {
    id: 'humpback-whale',
    name: { en: 'Humpback whale', cs: 'Keporkak' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: BALAENOPTERIDAE,
      genus: 'Megaptera',
      species: 'Megaptera novaeangliae',
    },
    habitat: {
      en: 'In summer it comes to the cold Antarctic sea to eat. In winter it swims far away to warm seas to have its babies.',
      cs: 'V létě připlouvá do studeného antarktického moře, aby se najedl. V zimě odplouvá daleko do teplých moří, kde se mu rodí mláďata.',
    },
    diet: {
      en: 'It eats krill and small fish. It blows a net of bubbles around them and then gulps them all up.',
      cs: 'Jí kril a malé rybky. Obklopí je sítí z bublinek a pak je všechny najednou spolkne.',
    },
    predators: {
      en: 'Grown-up whales are too big to be hunted. Orcas sometimes attack young calves.',
      cs: 'Dospělí keporkaci jsou na lov moc velcí. Kosatky ale někdy napadají malá mláďata.',
    },
  },
]
