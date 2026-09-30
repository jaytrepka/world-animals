import type { AnimalContent } from '../../types'
import {
  ANIMALIA, CHORDATA, MAMMALIA, AVES, ACTINOPTERYGII,
  SPHENISCIFORMES, SPHENISCIDAE, PROCELLARIIFORMES, CARNIVORA, PHOCIDAE,
  ARTIODACTYLA, BALAENOPTERIDAE, DELPHINIDAE, PERCIFORMES,
} from './taxa'

// Around the South Pole: the ice shelves, Dronning Maud Land, the Amundsen and Ross Seas.
export const middleContent: AnimalContent[] = [
  {
    id: 'emperor-penguin',
    name: { en: 'Emperor penguin', cs: 'Tučňák císařský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Aptenodytes',
      species: 'Aptenodytes forsteri',
    },
    habitat: {
      en: 'It is the biggest penguin. It lives on the sea ice around Antarctica, and the dad keeps the egg warm on his feet all winter.',
      cs: 'Je to největší tučňák. Žije na mořském ledu kolem Antarktidy a tatínek celou zimu zahřívá vajíčko na svých nohách.',
    },
    diet: {
      en: 'It dives very deep to catch fish, krill and squid.',
      cs: 'Potápí se velmi hluboko a loví ryby, kril a olihně.',
    },
    predators: {
      en: 'Leopard seals and orcas hunt it in the sea. Giant petrels and skuas can catch the chicks.',
      cs: 'V moři ho loví tuleni leopardí a kosatky. Mláďata mohou ulovit buřňáci obrovští a chaluhy.',
    },
  },
  {
    id: 'snow-petrel',
    name: { en: 'Snow petrel', cs: 'Buřňák sněžní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PROCELLARIIFORMES,
      family: { latin: 'Procellariidae', en: 'Petrels and shearwaters', cs: 'Buřňákovití' },
      genus: 'Pagodroma',
      species: 'Pagodroma nivea',
    },
    habitat: {
      en: 'This snow-white bird nests in cracks between rocks on the coast and in the mountains of Antarctica, sometimes far from the sea.',
      cs: 'Tento sněhobílý pták hnízdí ve skalních puklinách na pobřeží a v horách Antarktidy, někdy i daleko od moře.',
    },
    diet: {
      en: 'It flies over the sea ice and catches krill, small fish and squid.',
      cs: 'Létá nad mořským ledem a chytá kril, malé rybky a olihně.',
    },
    predators: {
      en: 'Grown-ups have few enemies. Skuas steal their eggs and chicks.',
      cs: 'Dospělí ptáci mají málo nepřátel. Vejce a mláďata jim kradou chaluhy.',
    },
  },
  {
    id: 'antarctic-minke-whale',
    name: { en: 'Antarctic minke whale', cs: 'Plejtvák jižní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: BALAENOPTERIDAE,
      genus: 'Balaenoptera',
      species: 'Balaenoptera bonaerensis',
    },
    habitat: {
      en: 'It swims in the cold sea around Antarctica, often right between the floating pieces of ice.',
      cs: 'Plave ve studeném moři kolem Antarktidy, často přímo mezi plovoucími kusy ledu.',
    },
    diet: {
      en: 'It eats krill. It takes a big gulp of water and then strains out the krill.',
      cs: 'Jí kril. Nabere si velký doušek vody a kril z ní pak vycedí.',
    },
    predators: {
      en: 'Orcas are its only real enemy.',
      cs: 'Jeho jediným opravdovým nepřítelem jsou kosatky.',
    },
  },
  {
    id: 'ross-seal',
    name: { en: 'Ross seal', cs: 'Tuleň Rossův' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: PHOCIDAE,
      genus: 'Ommatophoca',
      species: 'Ommatophoca rossii',
    },
    habitat: {
      en: 'It lives far out on the thick pack ice around Antarctica, so people almost never see it. It has very big eyes.',
      cs: 'Žije daleko na hustých ledových krách kolem Antarktidy, takže ho lidé skoro nikdy nevidí. Má moc velké oči.',
    },
    diet: {
      en: 'It dives deep and eats mostly squid and fish.',
      cs: 'Potápí se hluboko a jí hlavně olihně a ryby.',
    },
    predators: {
      en: 'Orcas and leopard seals can hunt it.',
      cs: 'Mohou ho ulovit kosatky a tuleni leopardí.',
    },
  },
  {
    id: 'orca',
    name: { en: 'Orca', cs: 'Kosatka dravá' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: DELPHINIDAE,
      genus: 'Orcinus',
      species: 'Orcinus orca',
    },
    habitat: {
      en: 'It lives in all the world\'s oceans, and many orcas swim in the icy sea around Antarctica. It is the biggest dolphin and lives in family groups.',
      cs: 'Žije ve všech oceánech světa a mnoho kosatek plave i v ledovém moři kolem Antarktidy. Je to největší delfín a žije v rodinných skupinách.',
    },
    diet: {
      en: 'The family hunts together. They eat fish, penguins, seals and even big whales.',
      cs: 'Rodina loví společně. Jedí ryby, tučňáky, tuleně a dokonce i velké velryby.',
    },
    predators: {
      en: 'Nobody hunts the orca. It is the top hunter of the sea.',
      cs: 'Kosatku nikdo neloví. Je to nejsilnější lovec v moři.',
    },
  },
  {
    id: 'weddell-seal',
    name: { en: 'Weddell seal', cs: 'Tuleň Weddellův' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: PHOCIDAE,
      genus: 'Leptonychotes',
      species: 'Leptonychotes weddellii',
    },
    habitat: {
      en: 'It lives on the ice near the coast of Antarctica, further south than any other mammal. It keeps breathing holes in the ice open with its teeth.',
      cs: 'Žije na ledu u pobřeží Antarktidy, dál na jihu než jakýkoli jiný savec. Díry v ledu, kterými dýchá, si prokousává zuby.',
    },
    diet: {
      en: 'It dives under the ice and catches fish, squid and octopuses.',
      cs: 'Potápí se pod led a loví ryby, olihně a chobotnice.',
    },
    predators: {
      en: 'Orcas and leopard seals can hunt it, most of all the young pups.',
      cs: 'Mohou ho ulovit kosatky a tuleni leopardí, hlavně malá mláďata.',
    },
  },
  {
    id: 'antarctic-toothfish',
    name: { en: 'Antarctic toothfish', cs: 'Ledovka Mawsonova' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: ACTINOPTERYGII,
      order: PERCIFORMES,
      family: { latin: 'Nototheniidae', en: 'Cod icefishes', cs: 'Ledovkovití' },
      genus: 'Dissostichus',
      species: 'Dissostichus mawsoni',
    },
    habitat: {
      en: 'This big fish lives deep in the freezing sea around Antarctica. Its blood has a special antifreeze, so it never freezes.',
      cs: 'Tahle velká ryba žije hluboko v mrazivém moři kolem Antarktidy. V krvi má zvláštní nemrznoucí látku, takže nikdy nezmrzne.',
    },
    diet: {
      en: 'It eats smaller fish and squid.',
      cs: 'Jí menší ryby a olihně.',
    },
    predators: {
      en: 'Weddell seals, orcas and sperm whales hunt it. Even giant squid may eat it.',
      cs: 'Loví ji tuleni Weddellovi, kosatky a vorvaně. Mohou ji sníst i obří kalmaři.',
    },
  },
  {
    id: 'hourglass-dolphin',
    name: { en: 'Hourglass dolphin', cs: 'Plískavice pestrá' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: DELPHINIDAE,
      genus: 'Lagenorhynchus',
      species: 'Lagenorhynchus cruciger',
    },
    habitat: {
      en: 'This small black and white dolphin lives in the cold open ocean around Antarctica. It loves to race along next to ships.',
      cs: 'Tahle malá černobílá plískavice žije na otevřeném studeném oceánu kolem Antarktidy. Ráda závodí vedle lodí.',
    },
    diet: {
      en: 'It eats small fish, squid and shrimps.',
      cs: 'Jí malé rybky, olihně a krevety.',
    },
    predators: {
      en: 'Orcas may hunt it.',
      cs: 'Může ji ulovit kosatka.',
    },
  },
]
