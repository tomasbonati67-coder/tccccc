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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
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
    ]
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

    forms: []
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

    forms: []
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

    forms: []
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

    forms: []
  },

  {
    id: 14,
    name: "Apollyon",
    variant: "Normal",
    image: "/characters/apollyon.png",

    description: [
      "Apollyon possui uma mecânica especial relacionada ao Void.",
      "Essa habilidade permite interagir de uma maneira diferente com determinados itens.",
      "Sua jogabilidade recompensa o jogador que consegue avaliar quais recursos devem ser utilizados e quais devem ser mantidos."
    ],

    forms: []
  },

  {
    id: 15,
    name: "The Forgotten",
    variant: "Normal",
    image: "/characters/the-forgotten.png",

    description: [
      "The Forgotten possui uma das mecânicas mais diferentes entre os personagens.",
      "Ele está ligado diretamente a uma segunda forma chamada The Soul.",
      "As duas formas possuem funções diferentes e podem ser utilizadas durante a mesma partida."
    ],

    forms: [
      {
        name: "The Forgotten",
        image: "/characters/the-forgotten.png",

        description: [
          "The Forgotten utiliza um osso como sua principal arma.",
          "Sua forma é voltada para o combate corpo a corpo e possui uma jogabilidade diferente dos personagens que utilizam lágrimas."
        ]
      },

      {
        name: "The Soul",
        image: "/characters/the-soul.png",

        description: [
          "The Soul é a segunda forma associada a The Forgotten.",
          "Essa forma possui características diferentes e complementa a jogabilidade do personagem.",
          "O jogador pode alternar entre as duas formas conforme a situação da partida."
        ]
      }
    ]
  },

  {
    id: 16,
    name: "Bethany",
    variant: "Normal",
    image: "/characters/bethany.png",

    description: [
      "Bethany possui uma mecânica baseada em cargas de alma.",
      "Ela utiliza essas cargas para potencializar suas habilidades e interações com determinados recursos.",
      "Sua jogabilidade envolve administrar essas cargas para aproveitar melhor suas habilidades."
    ],

    forms: []
  },

  {
    id: 17,
    name: "Jacob & Esau",
    variant: "Normal",
    image: "/characters/jacob-and-esau.png",

    description: [
      "Jacob & Esau são dois personagens controlados simultaneamente durante a partida.",
      "Cada um possui características próprias e ocupa seu próprio espaço na sala.",
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
    ]
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
      "Tainted Isaac é a versão alternativa de Isaac.",
      "Sua principal característica é oferecer diferentes opções de itens, mas limitar a quantidade que pode ser carregada.",
      "Isso transforma o gerenciamento do inventário em uma parte importante da sua jogabilidade."
    ],

    forms: []
  },

  {
    id: 19,
    name: "Tainted Magdalene",
    variant: "Tainted",
    image: "/characters/tainted-magdalene.png",

    description: [
      "Tainted Magdalene apresenta uma versão alternativa da personagem original.",
      "Sua jogabilidade é mais voltada para situações de combate próximo.",
      "Suas habilidades modificam a maneira como a personagem utiliza sua vida e causa dano."
    ],

    forms: []
  },

  {
    id: 20,
    name: "Tainted Cain",
    variant: "Tainted",
    image: "/characters/tainted-cain.png",

    description: [
      "Tainted Cain possui uma mecânica de criação de itens.",
      "Durante a partida, diferentes recursos podem ser utilizados para produzir novos itens.",
      "Essa característica faz com que a coleta e a administração dos recursos sejam fundamentais."
    ],

    forms: []
  },

  {
    id: 21,
    name: "Tainted Judas",
    variant: "Tainted",
    image: "/characters/tainted-judas.png",

    description: [
      "Tainted Judas é uma versão alternativa de Judas focada em habilidades ofensivas.",
      "Sua jogabilidade utiliza sombras e efeitos especiais para aumentar suas possibilidades durante o combate.",
      "Ele mantém a identidade ofensiva de Judas, mas apresenta uma mecânica diferente."
    ],

    forms: []
  },

  {
    id: 22,
    name: "Tainted ???",
    variant: "Tainted",
    image: "/characters/tainted-blue-baby.png",

    description: [
      "Tainted ??? apresenta uma versão alternativa das mecânicas de ???.",
      "Sua jogabilidade gira em torno de recursos especiais e efeitos relacionados ao personagem.",
      "Isso cria uma abordagem diferente daquela encontrada na versão normal."
    ],

    forms: []
  },

  {
    id: 23,
    name: "Tainted Eve",
    variant: "Tainted",
    image: "/characters/tainted-eve.png",

    description: [
      "Tainted Eve apresenta uma versão alternativa das mecânicas de Eve.",
      "Sua jogabilidade possui forte relação com familiares e gerenciamento de recursos.",
      "A utilização desses recursos altera a maneira como a personagem enfrenta os inimigos."
    ],

    forms: []
  },

  {
    id: 24,
    name: "Tainted Samson",
    variant: "Tainted",
    image: "/characters/tainted-samson.png",

    description: [
      "Tainted Samson apresenta uma versão alternativa da mecânica ofensiva de Samson.",
      "Sua forma de combate é mais agressiva e possui habilidades próprias.",
      "A versão Tainted transforma a maneira como o personagem utiliza o dano recebido durante uma partida."
    ],

    forms: []
  },

  {
    id: 25,
    name: "Tainted Azazel",
    variant: "Tainted",
    image: "/characters/tainted-azazel.png",

    description: [
      "Tainted Azazel é uma versão alternativa de Azazel.",
      "Sua principal diferença está na maneira como seu ataque e suas habilidades funcionam.",
      "Apesar de manter a identidade demoníaca do personagem original, sua jogabilidade é modificada."
    ],

    forms: []
  },

  {
    id: 26,
    name: "Tainted Lazarus",
    variant: "Tainted",
    image: "/characters/tainted-lazarus.png",

    description: [
      "Tainted Lazarus possui uma mecânica baseada na alternância entre diferentes estados.",
      "As formas do personagem possuem características próprias e precisam ser administradas durante a partida.",
      "Essa dinâmica torna o controle dos estados uma parte central da jogabilidade."
    ],

    forms: [
      {
        name: "Lazarus",
        image: "/characters/tainted-lazarus.png",

        description: [
          "Esta é uma das formas utilizadas por Tainted Lazarus.",
          "Enquanto estiver nessa forma, o personagem possui suas próprias características e habilidades."
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
    ]
  },

  {
    id: 27,
    name: "Tainted Eden",
    variant: "Tainted",
    image: "/characters/tainted-eden.png",

    description: [
      "Tainted Eden apresenta uma versão alternativa da mecânica aleatória de Eden.",
      "Sua configuração pode sofrer alterações durante a partida.",
      "Isso faz com que o jogador precise se adaptar constantemente às novas condições."
    ],

    forms: []
  },

  {
    id: 28,
    name: "Tainted Lost",
    variant: "Tainted",
    image: "/characters/tainted-lost.png",

    description: [
      "Tainted Lost é a versão alternativa de The Lost.",
      "Ele mantém a identidade de um personagem extremamente vulnerável, mas apresenta regras diferentes para sua sobrevivência.",
      "Sua jogabilidade depende bastante da capacidade do jogador de evitar situações perigosas."
    ],

    forms: []
  },

  {
    id: 29,
    name: "Tainted Lilith",
    variant: "Tainted",
    image: "/characters/tainted-lilith.png",

    description: [
      "Tainted Lilith apresenta uma abordagem diferente para as mecânicas de Lilith.",
      "Sua jogabilidade é fortemente baseada em um familiar especial.",
      "O familiar possui um papel central na maneira como a personagem causa dano."
    ],

    forms: []
  },

  {
    id: 30,
    name: "Tainted Keeper",
    variant: "Tainted",
    image: "/characters/tainted-keeper.png",

    description: [
      "Tainted Keeper apresenta uma versão alternativa da mecânica baseada em moedas.",
      "Os recursos financeiros possuem uma função ainda mais importante durante suas partidas.",
      "A administração das moedas influencia diretamente as possibilidades disponíveis para o personagem."
    ],

    forms: []
  },

  {
    id: 31,
    name: "Tainted Apollyon",
    variant: "Tainted",
    image: "/characters/tainted-apollyon.png",

    description: [
      "Tainted Apollyon apresenta uma versão alternativa das mecânicas relacionadas ao Void.",
      "Sua habilidade possui uma interação diferente com os itens encontrados durante a partida.",
      "O personagem exige que o jogador escolha cuidadosamente como utilizar seus recursos."
    ],

    forms: []
  },

  {
    id: 32,
    name: "Tainted Forgotten",
    variant: "Tainted",
    image: "/characters/tainted-forgotten.png",

    description: [
      "Tainted Forgotten é a versão alternativa de The Forgotten.",
      "Sua mecânica modifica a relação entre o personagem e sua forma associada.",
      "O resultado é uma experiência diferente da encontrada na versão normal."
    ],

    forms: []
  },

  {
    id: 33,
    name: "Tainted Bethany",
    variant: "Tainted",
    image: "/characters/tainted-bethany.png",

    description: [
      "Tainted Bethany apresenta uma versão alternativa das mecânicas de Bethany.",
      "Sua jogabilidade modifica a maneira como a personagem utiliza seus familiares e recursos.",
      "A administração dessas habilidades é importante para aproveitar seu potencial durante a partida."
    ],

    forms: []
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
          "Tainted Jacob é controlado normalmente no início da partida.",
          "A presença da entidade associada ao personagem altera progressivamente a maneira como a run é jogada."
        ]
      },

      {
        name: "Dark Esau",
        image: "/characters/dark-esau.png",

        description: [
          "Dark Esau é a entidade associada à mecânica de Tainted Jacob.",
          "Ele acompanha a partida e possui um papel importante na mecânica exclusiva do personagem."
        ]
      }
    ]
  }
]
export default async function CharacterPage({ params }) {
  const { id } = await params

  const character = characters.find(
    (character) => character.id === Number(id)
  )

  if (!character) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1>Personagem não encontrado</h1>
      </main>
    )
  }

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

        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          <UserRound size={18} />
        </button>
      </header>

      {/* Conteúdo */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-2">
        {/* Informações */}
        <div className="px-10 pt-16">
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

          {/* Descrição com vários parágrafos */}
          <div className="mt-6 max-w-md space-y-4 text-sm leading-6 text-gray-500">
            {character.description.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
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

                    {/* Imagem da forma */}
                    {form.image && (
                      <div className="mt-4 overflow-hidden border border-gray-300 bg-gray-100">
                        <img
                          src={form.image}
                          alt={form.name}
                          className="h-48 w-full object-contain"
                        />
                      </div>
                    )}

                    {/* Descrição da forma */}
                    <div className="mt-4 space-y-4 text-sm leading-6 text-gray-500">
                      {form.description.map(
                        (paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>
                            {paragraph}
                          </p>
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

        {/* Imagem principal */}
        <div className="bg-gray-100">
          <div className="aspect-[4/3] overflow-hidden border border-gray-300">
            <img
              src={character.image}
              alt={character.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-h-[250px] p-8">
            <h2 className="text-lg font-semibold text-gray-800">
              {character.name}
            </h2>

            <div className="mt-4 border-t border-gray-300" />

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Informações adicionais sobre o personagem.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}