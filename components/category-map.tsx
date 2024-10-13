import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const categorias = [
    {
      "nome": "Ficção Científica",
      "descricao": "Explorando futuros possíveis e tecnologias avançadas.",
      "icone": "🚀"
    },
    {
      "nome": "Fantasia",
      "descricao": "Mundos mágicos e criaturas míticas.",
      "icone": "🧙‍♂️"
    },
    {
      "nome": "Romance",
      "descricao": "Histórias de amor e relacionamentos.",
      "icone": "❤️"
    },
    {
      "nome": "Mistério",
      "descricao": "Enigmas intrigantes e suspense.",
      "icone": "🕵️"
    },
    {
      "nome": "Horror",
      "descricao": "Contos assustadores e aterrorizantes.",
      "icone": "👻"
    },
    {
      "nome": "Não-ficção",
      "descricao": "Fatos reais e conhecimento.",
      "icone": "📚"
    },
    {
      "nome": "Biografia",
      "descricao": "Histórias sobre a vida de pessoas reais.",
      "icone": "👤"
    },
    {
      "nome": "Autobiografia",
      "descricao": "Narrativa da própria vida do autor.",
      "icone": "✍️"
    },
    {
      "nome": "Poesia",
      "descricao": "Expressões literárias em verso e ritmo.",
      "icone": "📝"
    },
    {
      "nome": "História",
      "descricao": "Relatos de eventos passados.",
      "icone": "🏛️"
    },
    {
      "nome": "Ensaios",
      "descricao": "Explorações pessoais de ideias e temas.",
      "icone": "🖋️"
    },
    {
      "nome": "Filosofia",
      "descricao": "Discussões sobre a natureza da existência, ética e conhecimento.",
      "icone": "🧠"
    },
    {
      "nome": "Direito",
      "descricao": "Estudo das normas jurídicas e regulamentos.",
      "icone": "⚖️"
    },
    {
      "nome": "Ciências Sociais",
      "descricao": "Estudos sobre sociedade e comportamento humano.",
      "icone": "🌍"
    },
    {
      "nome": "Psicologia",
      "descricao": "Análise da mente humana e do comportamento.",
      "icone": "🧠"
    },
    {
      "nome": "Sociologia",
      "descricao": "Estudo das relações sociais e instituições.",
      "icone": "👥"
    },
    {
      "nome": "Antropologia",
      "descricao": "Estudo das culturas e do desenvolvimento humano.",
      "icone": "🗿"
    },
    {
      "nome": "Física",
      "descricao": "Estudo das leis naturais e dos fenômenos do universo.",
      "icone": "🔬"
    },
    {
      "nome": "Química",
      "descricao": "Análise das substâncias e suas reações.",
      "icone": "⚗️"
    },
    {
      "nome": "Biologia",
      "descricao": "Estudo da vida e dos organismos.",
      "icone": "🧬"
    },
    {
      "nome": "Matemática",
      "descricao": "Exploração de números e padrões.",
      "icone": "➗"
    },
    {
      "nome": "Economia",
      "descricao": "Análise de produção, distribuição e consumo de bens e serviços.",
      "icone": "💹"
    },
    {
      "nome": "Administração",
      "descricao": "Estudo de práticas organizacionais e de gestão.",
      "icone": "📊"
    },
    {
      "nome": "Tecnologia da Informação",
      "descricao": "Exploração de sistemas de informação e computação.",
      "icone": "💻"
    },
    {
      "nome": "Engenharia",
      "descricao": "Aplicação de princípios científicos e matemáticos para resolver problemas.",
      "icone": "🛠️"
    },
    {
      "nome": "Medicina",
      "descricao": "Estudo e prática da saúde e cura.",
      "icone": "🩺"
    },
    {
      "nome": "Ciências Ambientais",
      "descricao": "Estudo da interação entre os humanos e o meio ambiente.",
      "icone": "🌱"
    },
    {
      "nome": "Arte",
      "descricao": "Criação visual, auditiva ou performática que expressa imaginação.",
      "icone": "🎨"
    },
    {
      "nome": "Música",
      "descricao": "Composição e performance de sons organizados.",
      "icone": "🎵"
    },
    {
      "nome": "Teatro",
      "descricao": "Dramatizações para o público.",
      "icone": "🎭"
    },
    {
      "nome": "Literatura Infantil",
      "descricao": "Histórias e contos destinados a crianças.",
      "icone": "🧸"
    },
    {
      "nome": "Crítica Literária",
      "descricao": "Análise e avaliação de obras literárias.",
      "icone": "🔍"
    },
    {
      "nome": "Política",
      "descricao": "Estudo das estruturas de poder e governo.",
      "icone": "🏛️"
    },
    {
      "nome": "Religião",
      "descricao": "Estudo das crenças, práticas e textos religiosos.",
      "icone": "🙏"
    },
    {
      "nome": "Autoajuda",
      "descricao": "Guias e estratégias para o desenvolvimento pessoal.",
      "icone": "🌟"
    }
  ]
  
const primeiraLinha = categorias.slice(0, categorias.length / 2);
const segundaLinha = categorias.slice(categorias.length / 2);

const CategoriaCard = ({
  icone,
  nome,
  descricao,
}: {
  icone: string;
  nome: string;
  descricao: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <span className="text-3xl">{icone}</span>
        <figcaption className="text-sm font-medium dark:text-white">
          {nome}
        </figcaption>
      </div>
      <p className="mt-2 text-xs dark:text-white/70">{descricao}</p>
    </figure>
  );
};

export default function MapaCategorias() {
  return (
    <div className="relative  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:60s]">
        {primeiraLinha.map((categoria) => (
          <CategoriaCard key={categoria.nome} {...categoria} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:80s]">
        {segundaLinha.map((categoria) => (
          <CategoriaCard key={categoria.nome} {...categoria} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
