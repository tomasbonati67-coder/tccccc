import Link from "next/link"
import { Home, UserRound, ArrowLeft } from "lucide-react"


const characters = [
  {
    id: 1,
    name: "Isaac",
    variant: "Normal",
    image: "/characters/isaac.png",

    description: [
      "Isaac é o personagem principal de The Binding of Isaac e o único personagem disponível inicialmente.",
      "Ele possui atributos equilibrados, permitindo diferentes estilos de jogo durante uma partida.",
      "Sua principal característica é a possibilidade de utilizar o D6 para alterar itens quando essa habilidade está desbloqueada."
    ],

    forms: [],stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "0"
    },
  
    health: "3 coracoes ",
    startingItems: ["d6, 1 bomb"],

    
  },

  {
    id: 2,
    name: "Magdalene",
    variant: "Normal",
    image: "/characters/magdalene.png",

    description: [
      "Magdalene é uma personagem com grande quantidade de vida.",
      "Sua jogabilidade favorece situações em que o jogador precisa recuperar ou administrar sua vida durante a partida.",
      "Ela possui uma abordagem mais resistente quando comparada a personagens com menos vida."
    ],

    forms: [], stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "0.9",
      luck: "0"
    },
  
    health: "4 coracoes",
    startingItems: ["Yum Heart, full health pill"],
    unlockMethod: "Tenha 7 ou mais recipientes de coração vermelho ao mesmo tempo."
  },
  
    
  

  {
    id: 3,
    name: "Cain",
    variant: "Normal",
    image: "/characters/cain.png",

    description: [
      "Cain é um personagem conhecido por suas características relacionadas à sorte.",
      "Sua configuração inicial favorece uma abordagem que pode se beneficiar de recursos encontrados durante a exploração.",
      "Ele possui características diferentes de Isaac, fazendo com que suas partidas tenham uma dinâmica própria."
    ],

    forms: [], 
    
    stats: {
      damage: "3.5 (*1.20)",
      tears: "2.73",
      shotSpeed: "1",
      range: "4,5",
      speed: "1.3",
      luck: "1"
    },

    health: "2 coracoes",
    startingItems: ["1 Key (except in Rebirth) Needs to be unlocked Paper Clip Lucky Foot"],
    unlockMethod: "colete 55 moedas em uma run"
    
    
  },

  {
    id: 4,
    name: "Judas",
    variant: "Normal",
    image: "/characters/judas.png",

    description: [
      "Judas é um personagem focado em causar uma quantidade maior de dano.",
      "Sua configuração inicial favorece uma abordagem mais ofensiva durante os combates.",
      "Apesar de possuir menos margem para receber dano, seu potencial ofensivo pode compensar essa característica."
    ],

    forms: [],
    stats: {
      damage: "3,5 (*1,35)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "1"
    },
  
    health: "1 coracao",
    startingItems: ["3 moedas O Livro de Belial"],
    unlockMethod: "Derrote Satanás"
  },

  {
    id: 5,
    name: "???",
    variant: "Normal",
    image: "/characters/blue-baby.png",

    description: [
      "??? também é conhecido como Blue Baby e possui uma mecânica de vida diferente dos personagens tradicionais.",
      "Ele não utiliza os recipientes de coração vermelhos da mesma maneira que os outros personagens.",
      "Sua configuração faz com que o jogador precise prestar atenção especial aos recursos de vida encontrados durante a partida."
    ],

    forms: [],stats: {
      damage: "3,5 (*1,05)",
      tears: "2,73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1.1",
      luck: "0"
    },
  
    health: "3 coracoes de alma",
    startingItems: ["coco"],
    unlockMethod: "Derrote o coração da mamãe 10 vezes"

    
  },

  {
    id: 6,
    name: "Eve",
    variant: "Normal",
    image: "/characters/eve.png",

    description: [
      "Eve é uma personagem associada a mecânicas que envolvem vida e estados especiais.",
      "Sua jogabilidade pode mudar conforme a quantidade de vida disponível durante a partida.",
      "Ela possui uma identidade própria baseada no gerenciamento desses estados."
    ],

    forms: [],stats: {
      damage: "3.5 (*0.75), (*1.00 when health is at one Red Heart or lower)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1.24",
      luck: "0"
    },
  
    health: "2 coracoes",
    startingItems: ["Whore of Babylon, Dead Bird, Needs to be unlocked (except in Rebirth) Razor Blade"],
    unlockMethod: "nao pegar coraçoes em 2 andares"
  },

  {
    id: 7,
    name: "Samson",
    variant: "Normal",
    image: "/characters/samson.png",

    description: [
      "Samson é um personagem cuja jogabilidade recompensa situações em que ele recebe dano.",
      "Sua mecânica permite que determinados efeitos sejam acumulados durante a partida.",
      "Isso faz com que seu estilo de jogo possa se tornar mais ofensivo conforme a run avança."
    ],

    forms: [],stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73 - 0.1",
      shotSpeed: "1.31",
      range: "5.0",
      speed: "1.1",
      luck: "0"
    },
  
    health: "3 coraçoes",
    startingItems: ["(in Afterbirth † and Repentance) Needs to be unlocked Child's Heart, Bloody Lust"],
    unlockMethod: "Complete 2 andares seguidos sem sofrer dano."
  },
    
    

  {
    id: 8,
    name: "Azazel",
    variant: "Normal",
    image: "/characters/azazel.png",

    description: [
      "Azazel possui uma configuração bastante diferente dos personagens que utilizam lágrimas tradicionais.",
      "Seu ataque principal é baseado em um efeito semelhante ao Brimstone e possui alcance inicialmente reduzido.",
      "Ele também possui grande mobilidade e características que permitem explorar áreas que outros personagens não conseguem acessar da mesma maneira."
    ],

    forms: [],stats: {
      damage: "3,5 (*1,50)",
      tears: "+0,5, x0,267",
      shotSpeed: "1.31",
      range: "4,5",
      speed: "1,25",
      luck: "0"
    },
    health: "3 coraçoes negros",
    startingItems: ["0 - O Louco, Voo Brimstone de curto alcance"],
    unlockMethod: "Faça 3 pactos com o diabo em uma única partida."
  },

  {
    id: 9,
    name: "Lazarus",
    variant: "Normal",
    image: "/characters/lazarus.png",

    description: [
      "Lazarus possui uma mecânica relacionada à ressurreição.",
      "Quando sua condição especial é ativada, ele pode retornar em uma forma diferente.",
      "Essa característica faz com que sua partida possa ser dividida em diferentes momentos."
    ],

    forms: [
      {
        name: "Lazarus",
        image: "/characters/lazarus.png",

        description: [
          "Esta é a forma inicial de Lazarus.",
          "Durante a partida, determinadas condições podem fazer com que Lazarus passe para seu segundo estado."
        ]
      },

      {
        name: "Lazarus Risen",
        image: "/characters/lazarus-risen.png",

        description: [
          "Lazarus Risen é a forma alternativa de Lazarus.",
          "Após sua transformação, suas características são modificadas e o personagem continua a partida em um novo estado."
        ]
      }
    ],
    stats: {
      damage: "3,5 (*1,00)/3,5 (*1,40)",
      tears: "+0/ +0",
      shotSpeed: "1/1",
      range: "4,5/6,5",
      speed: "1,25",
      luck: "0",
    },
    health: "3/ 1 CORAÇAO",
    startingItems: ["Anemic (in Afterbirth † and Repentance) Needs to be unlocked A permanent version of Anemic"],
    unlockMethod: "Ter 4 ou mais Corações de Alma ao mesmo tempo",
  },

  {
    id: 10,
    name: "Eden",
    variant: "Normal",
    image: "/characters/eden.png",

    description: [
      "Eden é um personagem cuja configuração inicial é diferente em cada partida.",
      "Seus atributos, itens e recursos iniciais podem variar de uma run para outra.",
      "Por isso, cada partida com Eden pode apresentar uma combinação diferente de possibilidades."
    ],

    forms: [],  stats: {
      damage: "ALEATÓRIO",
      tears: "ALEATÓRIO",
      shotSpeed: "ALEATÓRIO",
      range: "ALEATÓRIO",
      speed: "ALEATÓRIO",
      luck: "ALEATÓRIO",
    },
    health: "ALEATÓRIO",
    startingItems: ["ALEATÓRIO"],
    unlockMethod: "Complete o Capítulo 4",
  },
    

  {
    id: 11,
    name: "The Lost",
    variant: "Normal",
    image: "/characters/the-lost.png",

    description: [
      "The Lost é um personagem com uma mecânica de sobrevivência completamente diferente.",
      "Ele não possui uma reserva de vida convencional e depende de suas características especiais para sobreviver.",
      "Sua jogabilidade exige maior atenção aos ataques dos inimigos e aos recursos disponíveis."
    ],

    forms: [],stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "0"
    },
    health: "0",
    startingItems: ["Lágrimas Espectrais de Voo Eterno D6 Manto Sagrado"],
    unlockMethod: "morrer em uma Sala de Sacrifícios enquanto segura um pôster de desaparecido.",
  },

  {
    id: 12,
    name: "Lilith",
    variant: "Normal",
    image: "/characters/lilith.png",

    description: [
      "Lilith possui uma jogabilidade baseada principalmente em familiares.",
      "Seus ataques e habilidades trabalham em conjunto com esses familiares.",
      "Essa característica faz com que o posicionamento e a utilização correta de seus recursos sejam importantes durante os combates."
    ],

    forms: [],  stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "0"
    },
    health: "1 CORAÇAO E 2 NEGROS",
    startingItems: ['Íncubo de Olhos Vendados Cambion Concepção Caixa de Amigos'],
    unlockMethod: "Derrote Ultra Greed como Azazel ",
  },

  {
    id: 13,
    name: "Keeper",
    variant: "Normal",
    image: "/characters/keeper.png",

    description: [
      "Keeper possui uma mecânica de vida diferente dos personagens tradicionais.",
      "As moedas possuem uma importância especial para sua sobrevivência.",
      "Por isso, a administração dos recursos encontrados durante a partida possui um papel importante em sua jogabilidade."
    ],

    forms: [],  stats: {
      damage: "3,5 (*1,20)",
      tears: "-2",
      shotSpeed: "1",
      range: "6.5",
      speed: " 0,9",
      luck: "-2"
    },
    health: "3 CORAÇOS DE MOEDAS",
    startingItems: ['1 bomba, Precisa ser desbloqueado x1 moeda Chave da Loja, Níquel de madeira de dose tripla'],
    unlockMethod: "Derrote Ultra Greed como Azazel ",
  },

  {
    id: 14,
    name: "Apollyon",
    variant: "Normal",
    image: "/characters/apollyon.png",

    description: [
      "Apollyon é um personagem adicionado em The Binding of Isaac: Afterbirth † . Ele é desbloqueado após derrotar Mega Satan pela primeira vez.",
      "Apollyon começa com dois recipientes de Coração Vermelho e Vazio . Além disso, ele tem os atributos básicos, assim como Isaac ." 
    ],

    forms: [],  stats: {
      damage: "3.5 (*1.00)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "0"
    },
    health: "2 CORAÇOES VERMELHOS ",
    startingItems: ['THE VOID'],
    unlockMethod: "DERROTAR MEGA SATAN ",
  },

  {
    id: 15,
    name: "The Forgotten",
    variant: "Normal",
    image: "/characters/the-forgotten.png",

    description: [
      'The Forgotten é um personagem secreto adicionado no Pacote de Reforço nº 5 que se assemelha a um Ossudo . Ele não pode disparar lágrimas comuns e, em vez disso, possui um porrete de osso que pode ser usado como arma de combate corpo a corpo ou carregado para ser arremessado.',
      'The Forgotten não pode adquirir recipientes de coração comuns. Quaisquer recipientes de coração comuns adquiridos serão transformados em Corações de Osso , e quaisquer Corações de Alma ou Corações Negros serão dados à Alma. The Forgotten e a Alma compartilham a mesma barra de vida, portanto, cada forma tem um máximo de 6 corações em vez dos 12 normais. ' 
    ],

    forms: [
      {
        name: "The Soul",
        image: "/characters/the-soul.png",

        description: [
          "Pressionar a tecla de troca (CTRL no PC / R2 no PS4 / RT no Xbox / ZR no Switch) alternará o controle para The Soul , um fantasma azul acorrentado a The Forgotten que dispara lágrimas espectrais e pode voar.",
          "Enquanto controla A Alma, O Esquecido permanecerá imóvel e não poderá sofrer dano, bloqueará todos os disparos normais que o atingirem e atrairá disparos em um pequeno raio de menos de um quadrado. Se A Alma ou O Esquecido morrer, a partida terminará."
        ]
      }
    ],  stats: {
      damage: "3.5 (*1.00)/ 3,5 (*1,50)",
      tears: "2.73",
      shotSpeed: "1",
      range: "6.5",
      speed: "1",
      luck: "0"
    },
    health: "1 CORAÇAO E 2 NEGROS",
    startingItems: ['Íncubo de Olhos Vendados Cambion Concepção Caixa de Amigos'],
    unlockMethod: "Derrote Ultra Greed como Azazel ",
  },

  {
    id: 16,
    name: "Bethany",
    variant: "Normal",
    image: "/characters/bethany.png",

    description: [
      "Bethany é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é desbloqueada ao derrotar Mom's Heart ou It Lives no modo difícil com Lazarus sem perder uma vida",
      "Bethany começa com três recipientes de Coração Vermelho , quatro cargas de alma (2 Corações de Alma ) e o Livro das Virtudes . ",
      "Bethany não pode usar Corações de Alma e Corações Negros como cura. Ao serem coletados, eles são convertidos em um recurso exclusivo de Bethany chamado (cargas de alma), na proporção de uma carga para cada meio coração. A quantidade de cargas de alma que Bethany possui é exibida junto com os contadores de coleta. As cargas de alma podem ser consumidas para usar o item ativado de Bethany quando este não estiver totalmente carregado, na proporção de uma carga de alma para cada barra de carga vazia. "
    ],

    forms: [],   stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 17,
    name: "Jacob & Esau",
    variant: "Normal",
    image: "/characters/jacob-and-esau.png",

    description: [
      "Jacob e Esaú são um par de personagens adicionados em The Binding of Isaac: Repentance . Eles são desbloqueados ao derrotar a Mãe com qualquer personagem. ",
      "Jacob e Esaú são controlados como um só, movem-se na mesma velocidade e usam as mesmas moedas , bombas e chaves . Fora isso, são completamente independentes em termos de atributos , itens e saúde . Ambos os personagens têm colisão e podem ser separados, embora o botão (Soltar) possa ser mantido pressionado para que Esaú fique parado enquanto Jacob se move livremente pela sala. ",
      "O jogador precisa administrar os dois personagens ao mesmo tempo para aproveitar completamente suas possibilidades."
    ],

    forms: [
      {
        name: "Jacob",
        image: "/characters/jacob.png",

        description: [
          "Jacob é uma das duas partes da dupla.",
          "Ele possui seus próprios atributos, posição e recursos durante a partida."
        ]
      },

      {
        name: "Esau",
        image: "/characters/esau.png",

        description: [
          "Esau é a segunda parte da dupla.",
          "Ele possui atributos próprios e funciona simultaneamente com Jacob durante a exploração e os combates."
        ]
      }
    ],   stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  // =========================
  // TAINTED
  // =========================

  {
    id: 18,
    name: "Tainted Isaac",
    variant: "Tainted",
    image: "/characters/tainted-isaac.png",

    description: [
      "Isaac Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Isaac . Isaac Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Isaac. ",
    ],

    forms: [],   stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 19,
    name: "Tainted Magdalene",
    variant: "Tainted",
    image: "/characters/tainted-magdalene.png",

    description: [
      "Madalena Corrompida é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é a versão alternativa de Madalena , com metade do cabelo raspado ou arrancado. Madalena Corrompida é desbloqueada ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga com Madalena.",
      "A Madalena Corrompida começa com 2 recipientes de coração, 2 recipientes de coração vazios e um Coração Delicioso no espaço de consumível. ",
    ],

    forms: [],   stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 20,
    name: "Tainted Cain",
    variant: "Tainted",
    image: "/characters/tainted-cain.png",

    description: [
      "Caim Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Caim Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha ou a Chave Rachada para acessar uma sala especial em uma das paredes enquanto joga como Caim. A Alma de Caim não pode ser usada devido ao seu método de desbloqueio envolver Caim Corrompido. Ele tem uma aparência idêntica à de Caim, com exceção de um grande ferimento sangrento atrás de seu tapa-olho esquerdo. ",
      "Tainted Cain começa com 2 recipientes de coração, 1 chave e a Bolsa de Artesanato no espaço de consumíveis. ",
    ],

    forms: [],   stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 21,
    name: "Tainted Judas",
    variant: "Tainted",
    image: "/characters/tainted-judas.png",

    description: [
      "Judas Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Judas e tem uma aparência semelhante à de Judas Sombrio . Judas Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Judas. ",
      "Judas Corrompido começa com 2 corações negros, 3 moedas e Artes das Trevas em seu espaço de consumível. ",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 22,
    name: "Tainted ???",
    variant: "Tainted",
    image: "/characters/tainted-blue-baby.png",

    description: [
      "Corrompido ??? é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de ??? . Corrompido ??? é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como ???. Ele começa com 3 corações de alma, 3 cocôs e a habilidade Segurar no espaço de consumíveis. ",
      "Sua jogabilidade gira em torno de recursos especiais e efeitos relacionados ao personagem.",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 23,
    name: "Tainted Eve",
    variant: "Tainted",
    image: "/characters/tainted-eve.png",

    description: [
      "Eve Corrompida é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é a versão alternativa de Eve , com cabelo desgrenhado, sem o pássaro, rímel borrado como se estivesse chorando e um rastro de sangue ocasional. Eve Corrompida é desbloqueada ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga com Eve. ",
      "Tainted Eve começa com 2 corações vermelhos e possui a menor cadência de tiro base de todos os personagens do jogo, ainda mais lenta que a maioria dos Familiares . Diferentemente de sua contraparte normal, Tainted Eve não começa com Dead Bird ou Whore of Babylon . Em vez disso, Tainted Eve começa com Sumptorium em seu espaço de consumível. ",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 24,
    name: "Tainted Samson",
    variant: "Tainted",
    image: "/characters/tainted-samson.png",

    description: [
      "Sansão Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Sansão , com o cabelo completamente raspado, exceto por um grande tufo. Sansão Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Sansão. Ele começa com 3 corações vermelhos. ",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 25,
    name: "Tainted Azazel",
    variant: "Tainted",
    image: "/characters/tainted-azazel.png",

    description: [
      "Azazel Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Azazel . Seus chifres estão quebrados, com sangue escorrendo do toco esquerdo, e suas asas foram cortadas ou arrancadas. Azazel Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Azazel.",
      "Azazel Corrompido começa com 3 Corações Negros e seu Brimstone curto é substituído por uma versão que dura a sala inteira, com som muito fino e agudo, que causa apenas 0,5× de dano por pulso e tem duração reduzida. ",
      
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 26,
    name: "Tainted Lazarus",
    variant: "Tainted",
    image: "/characters/tainted-lazarus.png",

    description: [
      "Lázaro Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Lázaro , jogável em dois estados diferentes: Lázaro Corrompido e Lázaro Corrompido Morto. Lázaro Corrompido tem cabelos desgrenhados e está coberto de sujeira, enquanto Lázaro Corrompido Morto tem pele branca pálida, olhos vidrados e está coberto de sangue. Cicatrizes horizontais são visíveis nos pulsos de ambas as formas de Lázaro Corrompido. Lázaro Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Lázaro.",
      "Lázaro Corrompido começa com 3 Corações Vermelhos , enquanto Lázaro Corrompido Morto começa com 2 Corações de Alma . Lázaro Corrompido começa com um alcance relativamente baixo, enquanto Lázaro Corrompido Morto tem um multiplicador de dano de 1,5x , lágrimas e velocidade ligeiramente menores e -2 de sorte . Cada personagem possui itens, atributos, acessórios e consumíveis separados, semelhantes a Jacó e Esaú , exceto que cada personagem só pode ser jogado individualmente. Sempre que uma sala é concluída, incluindo cada onda de salas com múltiplas ondas, como no Modo Ganância e nas Salas de Desafio , Lázaro Corrompido alterna entre as duas formas, essencialmente exigindo que o jogador jogue com cada personagem em uma sala sim, uma sala não. Lázaro Corrompido começa com a habilidade Inverter em seu espaço de consumível, que pode ser usada para alternar entre os estados imediatamente. "
    ],

    forms: [
      {
        name: "Lazarus",
        image: "/characters/tainted-lazarus.png",

        description: [
          
        ]
      },

      {
        name: "Dead Lazarus",
        image: "/characters/tainted-lazarus-dead.png",

        description: [
          "Dead Lazarus é a forma alternativa do personagem.",
          "A alternância entre as formas acontece durante a partida e modifica a maneira como o personagem pode ser utilizado."
        ]
      }
    ], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 27,
    name: "Tainted Eden",
    variant: "Tainted",
    image: "/characters/tainted-eden.png",

    description: [
      "Eden Corrompida é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é a versão alternativa de Eden . Ao contrário de outras personagens Corrompidas, Eden Corrompida não apresenta mudanças óbvias em sua aparência física. Eden Corrompida é desbloqueada ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Eden. ",
      "Assim como Eden, Tainted Eden começa com atributos aleatórios, saúde, possivelmente alguns itens coletáveis , um acessório , um item ativo e um item passivo .",
      "Sempre que sofrerem dano que não seja o próprio, todos os seus atributos, itens (passivos e ativos), seu acessório e a carta ou pílula que estiverem segurando são redefinidos."
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 28,
    name: "Tainted Lost",
    variant: "Tainted",
    image: "/characters/tainted-lost.png",

    description: [
      "Tainted Lost é um personagem adicionado em The Binding of Isaac: Repentance . É a versão alternativa de The Lost . Tainted Lost é desbloqueado ao chegar em Home e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como The Lost. ",
      "Tainted Lost é semelhante a The Lost, mas em vez de Holy Mantle , começa com uma Holy Card ; também não começa com o Eternal D6 . Assim como The Lost, Tainted Lost possui voo e lágrimas espectrais , mas não tem pontos de vida. ",
      "Também começa com um multiplicador de dano de 1,3x, o que lhe confere um dano inicial maior e torna a maioria dos aumentos de dano mais poderosos."
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 29,
    name: "Tainted Lilith",
    variant: "Tainted",
    image: "/characters/tainted-lilith.png",

    description: [
      "Lilith Corrompida é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é a versão alternativa de Lilith . Lilith Corrompida é desbloqueada ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga com Lilith. ",
      "Ela começa com um recipiente de coração vermelho e dois corações pretos . Assim como a Lilith normal, ela não pode disparar lágrimas . Em vez de lágrimas, a Lilith Corrompida lança um bebê demoníaco preso por um cordão umbilical de seu estômago, que se comporta de forma muito semelhante ao item Gello , podendo ser recolhido após atacar e causando dano triplicado aos inimigos atingidos. O Gello também dispara lágrimas que causam dano normal enquanto o botão de disparo estiver pressionado e se move na direção do botão; ele não causa dano de contato ao disparar lágrimas. O Gello pode ser lançado em todas as direções, mas requer itens como o analógico para mirar na diagonal. O Gello mira automaticamente nos inimigos próximos e retorna para a Lilith Corrompida assim que o botão de disparo é liberado. Apesar de sua aparência, o Gello não pode pegar itens, mas pode ser usado para lançar ou empurrar itens em direção à Lilith Corrompida. ",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 30,
    name: "Tainted Keeper",
    variant: "Tainted",
    image: "/characters/tainted-keeper.png",

    description: [
      "O Guardião Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa do Guardião . O Guardião Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Guardião.",
      "O Guardião Corrompido começa com (e tem no máximo) 2 corações de moeda e 1 Bomba . O Guardião Corrompido compartilha a mesma mecânica do Guardião normal, incluindo a recuperação de um coração de moeda ao coletar uma moeda, bem como a conversão de quaisquer corações coletados em moscas azuis . Coletar uma moeda para restaurar um coração não adiciona uma moeda ao seu contador de moedas. O Guardião Corrompido dispara quatro lágrimas por vez, similar ao item Aranha Mutante . ",
      "A administração das moedas influencia diretamente as possibilidades disponíveis para o personagem."
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 31,
    name: "Tainted Apollyon",
    variant: "Tainted",
    image: "/characters/tainted-apollyon.png",

    description: [
      "Apollyon Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Apollyon . Apollyon Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga como Apollyon. ",
      "Apollyon Corrompido começa com 2 recipientes de coração, Abismo no espaço de consumível com 4 cargas e 1 gafanhoto familiar vermelho do Abismo que se move erraticamente ao redor de Apollyon. Quando Abismo é usado, os itens na sala atual são destruídos e transformados em mais gafanhotos familiares, com alguns itens concedendo tipos especiais de gafanhotos. Eles avançam na direção em que Apollyon Corrompido está atirando até atingirem algo, causando dano equivalente ao de Apollyon Corrompido a cada pulso.",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 32,
    name: "Tainted Forgotten",
    variant: "Tainted",
    image: "/characters/tainted-forgotten.png",

    description: [
      "O Esquecido Corrompido e a Alma Corrompida são personagens adicionados em The Binding of Isaac: Repentance . Eles são as versões corrompidas do Esquecido e da Alma . O Esquecido Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial no corredor esquerdo enquanto joga com o Esquecido.",
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 33,
    name: "Tainted Bethany",
    variant: "Tainted",
    image: "/characters/tainted-bethany.png",

    description: [
      "Bethany Corrompida é uma personagem adicionada em The Binding of Isaac: Repentance . Ela é a versão alternativa de Bethany . Bethany Corrompida é desbloqueada ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga com Bethany.",
      "Bethany Corrompida não pode usar Corações Vermelhos como cura e não pode obter recipientes de Corações Vermelhos , similar a ??? . Ao serem coletados, os Corações Vermelhos são convertidos em um recurso exclusivo de Bethany Corrompida chamado Cargas de Sangue, na proporção de uma carga por meio coração. A quantidade de Cargas de Sangue que Bethany Corrompida possui é exibida junto com os contadores de coleta. As Cargas de Sangue podem ser consumidas para usar o item ativado de Bethany Corrompida quando o item não estiver totalmente carregado, na proporção de uma carga de sangue por barra de carga vazia.  ",
      "Bethany Corrompida começa com 3 Corações de Alma , 6 cargas de sangue e Lemegeton no espaço de consumível. ."
    ],

    forms: [], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  },

  {
    id: 34,
    name: "Tainted Jacob",
    variant: "Tainted",
    image: "/characters/tainted-jacob.png",

    description: [
      "Tainted Jacob é a versão alternativa de Jacob & Esau.",
      "Sua principal mecânica envolve a presença de uma entidade associada ao personagem durante a partida.",
      "Isso cria uma dinâmica diferente daquela encontrada na versão normal de Jacob & Esau."
    ],

    forms: [
      {
        name: "Tainted Jacob",
        image: "/characters/tainted-jacob.png",

        description: [
          "Jacob Corrompido é um personagem adicionado em The Binding of Isaac: Repentance . Ele é a versão alternativa de Jacob . Jacob Corrompido é desbloqueado ao chegar em Casa e usar a Chave Vermelha , a Chave Rachada ou a Alma de Caim para acessar uma sala especial em uma das paredes enquanto joga com Jacob e Esaú.",
          "Jacob Corrompido surge com 3 recipientes de coração vermelho e Anima Sola em seu espaço de consumível, que congela o inimigo mais próximo por 5 segundos. No entanto, ele é perseguido durante todo o jogo por Esaú Sombrio, que tentará atacá-lo e matá-lo. Anima Sola sempre afeta Esaú Sombrio se ele estiver na tela. ",
          "Se Dark Esaú tocar em Tainted Jacob, Tainted Jacob morre e se torna funcionalmente idêntico a The Lost , mas não terá Holy Mantle . Enquanto estiver nessa forma, ter um Eternal Heart em seu último slot de coração bloqueará o próximo ataque como uma Holy Card . ",
          "Ao chegar a um novo andar, Jacob Corrompido retornará ao seu estado normal."
        ]
      },

      {
        name: "Dark Esau",
        image: "/characters/dark-esau.png",

        description: [
          "Esaú Sombrio é uma versão hostil de Esaú , um mini-chefe . Esaú Sombrio surge de 20 a 40 segundos após Jacob Corrompido entrar em um novo andar, emergindo de uma fenda no chão e criando um círculo de chamas danosas ao seu redor. ",
          "Dark Esau persegue continuamente Tainted Jacob flutuando em sua direção, acelerando conforme se distancia e diminuindo a velocidade até quase parar quando está a uma distância fixa. Se Tainted Jacob permanecer dentro dessa distância fixa por um curto período de tempo, Dark Esau realizará um ataque de investida flamejante, no qual fará uma breve pausa com um sinal sonoro antes de avançar rapidamente em sua direção, causando dano a quaisquer inimigos em seu caminho.",
          'O alvo de Anima Sola sempre prioriza Dark Esau. Ao ser liberado, Dark Esau avança imediatamente em direção à posição atual de Tainted Jacob.',
          'Usar Anima Sola em uma sala sem inimigos fará com que Dark Esau apareça imediatamente, sem consumir a carga do item, ignorando o período de espera normal antes de seu surgimento.',
          'A posição de Dark Esau em todos os momentos é determinada por sua posição em relação ao layout geral do andar, o que significa que ele permanece no mesmo local mesmo quando Tainted Jacob se move pelos cômodos. Entrar em um novo cômodo cancela a investida de Esau, caso ele estivesse preparando uma, ou o liberta se ele estiver preso por Anima Sola.',
        ]
      }
    ], stats: {
      damage: "A confirmar",
      tears: "A confirmar",
      shotSpeed: "A confirmar",
      range: "A confirmar",
      speed: "A confirmar",
      luck: "A confirmar",
    },
    health: "A confirmar",
    startingItems: [],
    unlockMethod: "A confirmar",
  }
]

export default async function CharacterPage({ params }) {
  const { id } = await params;

  const character = characters.find(
    (character) => character.id === Number(id)
  );

  if (!character) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1>Personagem não encontrado</h1>
      </main>
    );
  }

  const stats = character.stats ?? {};

  const statList = [
    { label: "Dano", value: stats.damage },
    { label: "Lágrimas", value: stats.tears },
    { label: "Velocidade do disparo", value: stats.shotSpeed },
    { label: "Alcance", value: stats.range },
    { label: "Velocidade", value: stats.speed },
    { label: "Sorte", value: stats.luck },
  ];

  const startingItems = character.startingItems;
  const description = Array.isArray(character.description)
    ? character.description
    : [character.description];

  return (
    <main className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <header className="flex items-center justify-end gap-4 px-8 py-5">
        <Link
          href="/"
          className="text-gray-500 transition hover:text-gray-900"
        >
          <Home size={16} />
        </Link>

        <button
          type="button"
          aria-label="Perfil do usuário"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200"
        >
          <UserRound size={18} />
        </button>
      </header>

      {/* Conteúdo */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0">
        {/* Informações */}
        <div className="px-4 pt-8 md:px-10 md:pt-16">
          <Link
            href="/"
            className="mb-8 flex w-fit items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            Voltar
          </Link>

          <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">
            {character.variant}
          </p>

          <h1 className="text-4xl font-semibold text-gray-800">
            {character.name}
          </h1>

          {/* Descrição */}
          <div className="mt-6 max-w-md space-y-4 text-sm leading-6 text-gray-500">
            {description.filter(Boolean).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Formas do personagem */}
          {character.forms?.length > 0 && (
            <div className="mt-10 border-t border-gray-300 pt-8">
              <h2 className="text-xl font-semibold text-gray-800">
                Formas
              </h2>

              <div className="mt-8 space-y-10">
                {character.forms.map((form, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {form.name}
                    </h3>

                    {form.image && (
                      <div className="mt-4 overflow-hidden border border-gray-300 bg-gray-100">
                        <img
                          src={form.image}
                          alt={form.name}
                          loading="lazy"
                          className="h-48 w-full object-contain"
                        />
                      </div>
                    )}

                    <div className="mt-4 space-y-4 text-sm leading-6 text-gray-500">
                      {(form.description ?? []).map(
                        (paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="mt-10 text-xs text-gray-400">
            ID: {character.id}
          </p>
        </div>

        {/* Imagem e informações adicionais */}
        <div className="self-start overflow-hidden bg-gray-100">
          <div className="aspect-[4/3] overflow-hidden border border-gray-300">
            <img
              src={character.image}
              alt={character.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-lg font-semibold text-gray-800">
              {character.name}
            </h2>

            <div className="mt-4 border-t border-gray-300" />

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Informações adicionais sobre o personagem.
            </p>

            {/* Estatísticas: sempre visíveis */}
            <section className="mt-6 border-t border-gray-300 pt-6">
              <h3 className="mb-4 text-sm font-bold tracking-widest text-gray-800">
                ESTATÍSTICAS
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {statList.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-md border border-gray-200 bg-white p-3"
                  >
                    <p className="text-xs leading-5 text-gray-500">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-800">
                      {stat.value ?? "Não informado"}
                    </p>
                  </div>
                ))}
              </div>

              {character.health && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Vida inicial
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    {character.health}
                  </p>
                </div>
              )}
            </section>

            {/* Itens iniciais */}
            <section className="mt-6 border-t border-gray-300 pt-6">
              <h3 className="mb-3 text-sm font-bold tracking-widest text-gray-800">
                ITENS INICIAIS
              </h3>

              {startingItems ? (
                Array.isArray(startingItems) ? (
                  <ul className="list-inside list-disc space-y-2 text-sm leading-6 text-gray-500">
                    {startingItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-6 text-gray-500">
                    {startingItems}
                  </p>
                )
              ) : (
                <p className="text-sm leading-6 text-gray-500">
                  Não informado.
                </p>
              )}
            </section>

            {/* Método de desbloqueio */}
            <section className="mt-6 border-t border-gray-300 pt-6">
              <h3 className="mb-3 text-sm font-bold tracking-widest text-gray-800">
                MÉTODO DE DESBLOQUEIO
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {character.unlockMethod || "Não informado."}
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
