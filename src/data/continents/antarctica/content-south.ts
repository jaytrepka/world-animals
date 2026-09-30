import type { AnimalContent } from '../../types'
import {
  ANIMALIA, CHORDATA, MAMMALIA, AVES,
  SPHENISCIFORMES, SPHENISCIDAE, PROCELLARIIFORMES, CARNIVORA, PHOCIDAE, ARTIODACTYLA, BALAENOPTERIDAE,
} from './taxa'

// East Antarctica facing the Indian Ocean and Australia, and the islands Crozet, Kerguelen, Heard and Macquarie.
export const southContent: AnimalContent[] = [
  {
    id: 'adelie-penguin',
    name: { en: 'Adélie penguin', cs: 'Tučňák kroužkový' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Pygoscelis',
      species: 'Pygoscelis adeliae',
    },
    habitat: {
      en: 'It lives on the rocky coasts all around Antarctica. It has a white ring around each eye.',
      cs: 'Žije na skalnatých pobřežích všude kolem Antarktidy. Kolem každého oka má bílý kroužek.',
    },
    diet: {
      en: 'It eats mostly krill, and also small fish.',
      cs: 'Jí hlavně kril a také malé rybky.',
    },
    predators: {
      en: 'Leopard seals wait for it at the edge of the ice. Skuas steal its eggs and chicks.',
      cs: 'Na okraji ledu na něj číhají tuleni leopardí. Vejce a mláďata mu kradou chaluhy.',
    },
  },
  {
    id: 'southern-elephant-seal',
    name: { en: 'Southern elephant seal', cs: 'Rypouš sloní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: PHOCIDAE,
      genus: 'Mirounga',
      species: 'Mirounga leonina',
    },
    habitat: {
      en: 'It is the biggest seal in the world. It rests on the beaches of islands like Macquarie and Kerguelen, and the males have a big floppy nose like a short trunk.',
      cs: 'Je to největší tuleň na světě. Odpočívá na plážích ostrovů, jako je Macquarie nebo Kerguelen, a samci mají velký nos jako krátký chobot.',
    },
    diet: {
      en: 'It dives very deep into the dark sea and eats squid and fish.',
      cs: 'Potápí se velmi hluboko do tmavého moře a jí olihně a ryby.',
    },
    predators: {
      en: 'Big adults have few enemies. Orcas and big sharks can catch the younger seals.',
      cs: 'Velcí dospělí rypouši mají málo nepřátel. Mladší zvířata mohou ulovit kosatky a velcí žraloci.',
    },
  },
  {
    id: 'blue-whale',
    name: { en: 'Blue whale', cs: 'Plejtvák obrovský' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: ARTIODACTYLA,
      family: BALAENOPTERIDAE,
      genus: 'Balaenoptera',
      species: 'Balaenoptera musculus',
    },
    habitat: {
      en: 'It is the biggest animal that has ever lived! In summer it comes to the cold sea around Antarctica to eat.',
      cs: 'Je to největší zvíře, které kdy žilo! V létě připlouvá do studeného moře kolem Antarktidy, aby se najedl.',
    },
    diet: {
      en: 'This giant eats tiny krill – millions of them every day.',
      cs: 'Tenhle obr jí maličký kril – každý den ho spořádá miliony kousků.',
    },
    predators: {
      en: 'Grown-ups are too big for anyone to hunt. Orcas sometimes attack young calves.',
      cs: 'Dospělí jsou tak velcí, že je nikdo neloví. Kosatky někdy napadají malá mláďata.',
    },
  },
  {
    id: 'macaroni-penguin',
    name: { en: 'Macaroni penguin', cs: 'Tučňák žlutorohý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Eudyptes',
      species: 'Eudyptes chrysolophus',
    },
    habitat: {
      en: 'It lives on rocky islands near Antarctica, like Heard Island and South Georgia. It has long orange-yellow feathers on its head.',
      cs: 'Žije na skalnatých ostrovech u Antarktidy, třeba na Heardově ostrově a Jižní Georgii. Na hlavě má dlouhá oranžovožlutá pírka.',
    },
    diet: {
      en: 'It eats mostly krill, and also small fish and squid.',
      cs: 'Jí hlavně kril, ale také malé rybky a olihně.',
    },
    predators: {
      en: 'Leopard seals, fur seals and orcas hunt it in the sea. Skuas and giant petrels steal its eggs and chicks.',
      cs: 'V moři ho loví tuleni leopardí, lachtani a kosatky. Vejce a mláďata mu kradou chaluhy a buřňáci obrovští.',
    },
  },
  {
    id: 'southern-rockhopper-penguin',
    name: { en: 'Southern rockhopper penguin', cs: 'Tučňák skalní' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: SPHENISCIFORMES,
      family: SPHENISCIDAE,
      genus: 'Eudyptes',
      species: 'Eudyptes chrysocome',
    },
    habitat: {
      en: 'It lives on steep rocky islands like Kerguelen and Crozet. It does not waddle – it hops from rock to rock with both feet together!',
      cs: 'Žije na strmých skalnatých ostrovech, jako je Kerguelen nebo Crozetovy ostrovy. Nekolébá se, ale skáče z kamene na kámen snožmo!',
    },
    diet: {
      en: 'It eats krill, small fish and squid.',
      cs: 'Jí kril, malé rybky a olihně.',
    },
    predators: {
      en: 'Fur seals, leopard seals and orcas hunt it in the sea. Skuas steal its eggs and chicks.',
      cs: 'V moři ho loví lachtani, tuleni leopardí a kosatky. Vejce a mláďata mu kradou chaluhy.',
    },
  },
  {
    id: 'wandering-albatross',
    name: { en: 'Wandering albatross', cs: 'Albatros stěhovavý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: AVES,
      order: PROCELLARIIFORMES,
      family: { latin: 'Diomedeidae', en: 'Albatrosses', cs: 'Albatrosovití' },
      genus: 'Diomedea',
      species: 'Diomedea exulans',
    },
    habitat: {
      en: 'It has the longest wings of any bird. It nests on islands like Crozet and South Georgia and glides over the ocean for days without flapping.',
      cs: 'Má nejdelší křídla ze všech ptáků. Hnízdí na ostrovech, jako jsou Crozetovy ostrovy a Jižní Georgie, a celé dny plachtí nad oceánem skoro bez mávnutí.',
    },
    diet: {
      en: 'It catches squid and fish from the surface of the sea.',
      cs: 'Loví olihně a ryby na hladině moře.',
    },
    predators: {
      en: 'Grown-ups have no enemies. Skuas sometimes steal an egg or a small chick.',
      cs: 'Dospělí albatrosi nemají nepřátele. Chaluhy jim občas ukradnou vejce nebo malé mládě.',
    },
  },
  {
    id: 'crabeater-seal',
    name: { en: 'Crabeater seal', cs: 'Tuleň krabožravý' },
    classification: {
      kingdom: ANIMALIA,
      phylum: CHORDATA,
      class: MAMMALIA,
      order: CARNIVORA,
      family: PHOCIDAE,
      genus: 'Lobodon',
      species: 'Lobodon carcinophaga',
    },
    habitat: {
      en: 'It lives on the floating ice all around Antarctica. There are more crabeater seals than any other seal in the world.',
      cs: 'Žije na plovoucích krách všude kolem Antarktidy. Je jich víc než jakýchkoli jiných tuleňů na světě.',
    },
    diet: {
      en: 'Funny – it does not eat crabs! It eats krill and strains it through its bumpy teeth like through a sieve.',
      cs: 'Představ si – kraby vůbec nejí! Jí kril a cedí ho přes zvláštní zuby s mnoha hroty jako přes sítko.',
    },
    predators: {
      en: 'Leopard seals hunt the young pups, and orcas hunt the grown-ups.',
      cs: 'Mláďata loví tuleni leopardí a dospělé tuleně loví kosatky.',
    },
  },
]
