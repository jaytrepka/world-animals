import type { AnimalContent } from '../../types'
import {
  ANIMALIA, CHORDATA, MAMMALIA, AVES,
  PROCELLARIIFORMES, CARNIVORA, OTARIIDAE, ARTIODACTYLA,
} from './taxa'

const PHYSETERIDAE = { latin: 'Physeteridae', en: 'Sperm whales', cs: 'Vorvaňovití' }
const ZIPHIIDAE = { latin: 'Ziphiidae', en: 'Beaked whales', cs: 'Vorvaňovcovití' }
const DIOMEDEIDAE = { latin: 'Diomedeidae', en: 'Albatrosses', cs: 'Albatrosovití' }
const PROCELLARIIDAE = { latin: 'Procellariidae', en: 'Petrels and shearwaters', cs: 'Buřňákovití' }
const ECHINODERMATA = { latin: 'Echinodermata', en: 'Echinoderms', cs: 'Ostnokožci' }
const ASTEROIDEA = { latin: 'Asteroidea', en: 'Sea stars', cs: 'Hvězdice' }
const VALVATIDA = { latin: 'Valvatida', en: 'Valvatid sea stars', cs: 'Valvatida' }
const ODONTASTERIDAE = { latin: 'Odontasteridae', en: 'Odontasterid sea stars', cs: 'Odontasteridae' }
const CNIDARIA = { latin: 'Cnidaria', en: 'Cnidarians', cs: 'Žahavci' }
const SCYPHOZOA = { latin: 'Scyphozoa', en: 'True jellyfish', cs: 'Medúzovci' }
const SEMAEOSTOMEAE = { latin: 'Semaeostomeae', en: 'Flag-mouth jellyfish', cs: 'Talířovky' }
const ULMARIDAE = { latin: 'Ulmaridae', en: 'Moon jellies and relatives', cs: 'Ulmaridae' }

// Extra animals added later, all around the Southern Ocean and its islands.
export const moreContent: AnimalContent[] = [
  {
    id: 'sperm-whale',
    name: { en: 'Sperm whale', cs: 'Vorvaň obrovský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: PHYSETERIDAE,
      genus: 'Physeter',
      species: 'Physeter macrocephalus',
    },
    habitat: {
      en: 'It swims in all the big oceans, and big males travel all the way to the cold sea near Antarctica. It has a huge square head.',
      cs: 'Plave ve všech velkých oceánech a velcí samci připlouvají až do studeného moře u Antarktidy. Má obrovskou hranatou hlavu.',
    },
    diet: {
      en: 'It dives down into the deep, dark sea and eats squid, even giant ones, and fish.',
      cs: 'Potápí se hluboko do tmavého moře a loví olihně, i ty obří, a také ryby.',
    },
    predators: {
      en: 'Grown-up sperm whales have almost no enemies. Groups of orcas sometimes attack the young ones.',
      cs: 'Dospělí vorvani nemají skoro žádné nepřátele. Na mláďata někdy zaútočí skupina kosatek.',
    },
  },
  {
    id: 'southern-bottlenose-whale',
    name: { en: 'Southern bottlenose whale', cs: 'Vorvaňovec plochočelý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: ZIPHIIDAE,
      genus: 'Hyperoodon',
      species: 'Hyperoodon planifrons',
    },
    habitat: {
      en: 'It lives far out in the cold Southern Ocean, near the edge of the Antarctic ice. It has a round bulging forehead and a short beak.',
      cs: 'Žije daleko na širém studeném Jižním oceánu, blízko okraje antarktického ledu. Má kulaté vypouklé čelo a krátký zobák.',
    },
    diet: {
      en: 'It dives very deep and eats mostly squid, and some fish.',
      cs: 'Potápí se velmi hluboko a jí hlavně olihně a trochu ryb.',
    },
    predators: {
      en: 'Only orcas are big enough to hunt it.',
      cs: 'Ulovit ho dokážou jen kosatky.',
    },
  },
  {
    id: 'subantarctic-fur-seal',
    name: { en: 'Subantarctic fur seal', cs: 'Lachtan jižní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: OTARIIDAE,
      genus: 'Arctocephalus',
      species: 'Arctocephalus tropicalis',
    },
    habitat: {
      en: 'It lives on rocky islands in the southern oceans, like Marion Island. The males have a yellow chest and a funny tuft of fur on the head.',
      cs: 'Žije na skalnatých ostrovech v jižních oceánech, třeba na ostrově Marion. Samci mají žlutou hruď a legrační chomáč srsti na hlavě.',
    },
    diet: {
      en: 'It hunts at night for small fish and squid.',
      cs: 'V noci loví malé ryby a olihně.',
    },
    predators: {
      en: 'Orcas and big sharks hunt it in the sea, and sometimes leopard seals do too.',
      cs: 'V moři ho loví kosatky a velcí žraloci a někdy také tuleni leopardí.',
    },
  },
  {
    id: 'light-mantled-albatross',
    name: { en: 'Light-mantled albatross', cs: 'Albatros světlehřbetý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PROCELLARIIFORMES,
      family: DIOMEDEIDAE,
      genus: 'Phoebetria',
      species: 'Phoebetria palpebrata',
    },
    habitat: {
      en: 'It glides over the cold Southern Ocean and nests on steep cliffs of islands like Campbell Island. It is dark grey with a white ring around the eye.',
      cs: 'Plachtí nad studeným Jižním oceánem a hnízdí na strmých útesech ostrovů, jako je Campbellův ostrov. Je tmavě šedý a kolem oka má bílý kroužek.',
    },
    diet: {
      en: 'It catches squid, fish and krill from the surface of the sea.',
      cs: 'Chytá z hladiny moře olihně, ryby a kril.',
    },
    predators: {
      en: 'Adults have hardly any enemies. Skuas sometimes steal its egg or small chick.',
      cs: 'Dospělí ptáci nemají skoro žádné nepřátele. Chaluhy mu někdy ukradnou vejce nebo malé mládě.',
    },
  },
  {
    id: 'southern-giant-petrel',
    name: { en: 'Southern giant petrel', cs: 'Buřňák obrovský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PROCELLARIIFORMES,
      family: PROCELLARIIDAE,
      genus: 'Macronectes',
      species: 'Macronectes giganteus',
    },
    habitat: {
      en: 'It is a huge seabird with a big pale beak. It nests on the Antarctic coast and on islands, and flies far over the sea.',
      cs: 'Je to obrovský mořský pták s velkým světlým zobákem. Hnízdí na pobřeží Antarktidy a na ostrovech a létá daleko nad mořem.',
    },
    diet: {
      en: 'It eats dead seals and penguins, and also catches fish, squid and krill. It is the cleaner of the beaches.',
      cs: 'Jí mrtvé tuleně a tučňáky a také loví ryby, olihně a kril. Uklízí pláže.',
    },
    predators: {
      en: 'Adults have almost no enemies. Skuas can steal its eggs and small chicks.',
      cs: 'Dospělí ptáci nemají skoro žádné nepřátele. Vejce a malá mláďata mu mohou ukrást chaluhy.',
    },
  },
  {
    id: 'antarctic-starfish',
    name: { en: 'Antarctic red sea star', cs: 'Hvězdice antarktická' },
    classification: {
      kingdom: ANIMALIA,
      phylum: ECHINODERMATA,
      class: ASTEROIDEA,
      order: VALVATIDA,
      family: ODONTASTERIDAE,
      genus: 'Odontaster',
      species: 'Odontaster validus',
    },
    habitat: {
      en: 'It crawls slowly on the sea floor all around Antarctica, in icy cold water. It is bright red or orange and has five short arms.',
      cs: 'Pomalu leze po mořském dně všude kolem Antarktidy, v ledově studené vodě. Je jasně červená nebo oranžová a má pět krátkých ramen.',
    },
    diet: {
      en: 'It eats almost anything on the sea floor: tiny plants, sponges and dead animals.',
      cs: 'Na mořském dně sní skoro všechno: drobné řasy, houby i mrtvá zvířata.',
    },
    predators: {
      en: 'Few animals eat it. A bigger sea star and a long sea worm sometimes do.',
      cs: 'Jí ji jen málokdo. Někdy ji sežere větší hvězdice nebo dlouhý mořský červ.',
    },
  },
  {
    id: 'antarctic-jellyfish',
    name: { en: 'Antarctic jellyfish', cs: 'Medúza antarktická' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CNIDARIA,
      class: SCYPHOZOA,
      order: SEMAEOSTOMEAE,
      family: ULMARIDAE,
      genus: 'Diplulmaris',
      species: 'Diplulmaris antarctica',
    },
    habitat: {
      en: 'It drifts in the cold sea under the Antarctic ice. It has a see-through bell and a bright orange middle.',
      cs: 'Vznáší se ve studeném moři pod antarktickým ledem. Má průhledný zvon a jasně oranžový střed.',
    },
    diet: {
      en: 'It catches tiny sea animals, little fish babies and other small jellyfish with its stinging tentacles.',
      cs: 'Žahavými chapadly chytá drobné mořské živočichy, malé rybky a jiné malé medúzy.',
    },
    predators: {
      en: 'Not many animals eat it, but some fish and seabirds do.',
      cs: 'Moc zvířat ji nejí, ale některé ryby a mořští ptáci ano.',
    },
  },
]
