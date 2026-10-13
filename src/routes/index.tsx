import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  House,
  Palette,
  Printer,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import pinkHouse from "@/assets/1613852601-1281479777.jpg.asset.json";
import kittyRoom from "@/assets/97f56883c249237d2e342d7d2f99bb22.jpg.asset.json";
import kittyHouse from "@/assets/file_000000009960820e9a03979a9bd3ae56.png.asset.json";
import dollHouse from "@/assets/file_000000007a28820eacab5931d1243e1d.png.asset.json";
import fairyHouse from "@/assets/file_00000000c5a8820eab2e83c2bb1f043d.png.asset.json";
import purpleHouse from "@/assets/1613852601-206645978.jpg.asset.json";
import kitchen from "@/assets/16138526011101468689.jpg.asset.json";
import livingRoom from "@/assets/1613852601322581794.jpg.asset.json";
import rooms from "@/assets/16138526011870265434.jpg.asset.json";
import peppaPig from "@/assets/IMG-20261006-WA0024.jpg.asset.json";
import redTruck from "@/assets/IMG-20261006-WA0025.jpg.asset.json";
import hulkHero from "@/assets/IMG-20261006-WA0020.jpg.asset.json";
import pikachu from "@/assets/IMG-20261006-WA0021.jpg.asset.json";
import bluey from "@/assets/IMG-20261006-WA0022.jpg.asset.json";
import kidsPhoto from "@/assets/IMG-20261006-WA0026.jpg.asset.json";
import quartoBoneca from "@/assets/quarto-da-boneca.jpg.asset.json";
import cachorroAzul from "@/assets/cachorro-azul-de-papel.jpg.asset.json";
import astronautaAlex from "@/assets/astronauta-alex.jpg.asset.json";
import gatinhoListrado from "@/assets/gatinho-listrado.jpg.asset.json";
import familiaSafari from "@/assets/familia-safari.jpg.asset.json";
import guardiaoEspacial from "@/assets/guardiao-espacial.jpg.asset.json";
import amiguinhoAmarelo from "@/assets/amiguinho-amarelo.jpg.asset.json";
import gatinhoReciclado from "@/assets/gatinho-reciclado.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samara Criar Art's | Brinquedos de Papel para Imprimir" },
      {
        name: "description",
        content:
          "Coleção de casinhas, personagens e brinquedos de papel digitais. Imprima, recorte, monte e transforme tempo longe das telas em imaginação e criatividade em família.",
      },
      { property: "og:title", content: "Samara Criar Art's — Brinquedos de Papel" },
      {
        property: "og:description",
        content:
          "Coleção completa de brinquedos de papel digitais para imprimir, recortar, montar e brincar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:title", content: "Samara Criar Art's | Brinquedos de Papel para Imprimir" },
      {
        name: "twitter:description",
        content:
          "Arquivos digitais para imprimir, recortar, montar e brincar. Não há envio de brinquedos físicos.",
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Casinha Hello Kitty",
    detail: "Um mundo de laços e fofura",
    category: "Casinhas",
    image: kittyHouse.url,
    tag: "CHEIA DE FOFURA",
  },
  {
    name: "Casinha de Boneca",
    detail: "Pequena casa, grandes histórias",
    category: "Casinhas",
    image: dollHouse.url,
    tag: "PARA IMAGINAR",
  },
  {
    name: "Casinha de Fada",
    detail: "Um cantinho cheio de magia",
    category: "Casinhas",
    image: fairyHouse.url,
    tag: "MUNDO ENCANTADO",
  },
  {
    name: "Chalé Cor-de-rosa",
    detail: "Detalhes que encantam",
    category: "Casinhas",
    image: pinkHouse.url,
    tag: "MINIATURA 3D",
  },
  {
    name: "Quarto Hello Kitty",
    detail: "Um quarto dos sonhos",
    category: "Ambientes",
    image: kittyRoom.url,
    tag: "RECORTE E MONTE",
  },
  {
    name: "Chalé Lilás",
    detail: "Uma nova história a cada dia",
    category: "Casinhas",
    image: purpleHouse.url,
    tag: "MINIATURA 3D",
  },
  {
    name: "Cozinha em Miniatura",
    detail: "Pequenos detalhes, muita diversão",
    category: "Detalhes",
    image: kitchen.url,
    tag: "MÓVEIS DE PAPEL",
  },
  {
    name: "Sala de Estar",
    detail: "Um cantinho para reunir a turma",
    category: "Ambientes",
    image: livingRoom.url,
    tag: "MONTE SEU MUNDO",
  },
  {
    name: "Coleção de Ambientes",
    detail: "Cada cômodo, uma brincadeira",
    category: "Ambientes",
    image: rooms.url,
    tag: "VÁRIOS AMBIENTES",
  },
  {
    name: "Peppa Pig e seu Ônibus",
    detail: "A turma favorita em papel",
    category: "Personagens",
    image: peppaPig.url,
    tag: "RECORTE E MONTE",
  },
  {
    name: "Picape Esportiva",
    detail: "Corridas pela sala de estar",
    category: "Veículos",
    image: redTruck.url,
    tag: "MINIATURA 3D",
  },
  {
    name: "Herói Esmagador",
    detail: "Fúria verde para salvar o dia",
    category: "Personagens",
    image: hulkHero.url,
    tag: "MUNDO DOS HERÓIS",
  },
  {
    name: "Amigo Elétrico",
    detail: "O personagem amarelo favorito",
    category: "Personagens",
    image: pikachu.url,
    tag: "CHEIA DE FOFURA",
  },
  {
    name: "Dupla Aventureira",
    detail: "Irmãs cachorras cheias de ideias",
    category: "Personagens",
    image: bluey.url,
    tag: "PARA IMAGINAR",
  },
  {
    name: "Quarto da Boneca",
    detail: "Quartinho e guarda-roupa cheios de estilo",
    category: "Ambientes",
    image: quartoBoneca.url,
    tag: "QUARTO E CLOSET",
  },
  {
    name: "Cachorrinho Azul",
    detail: "Prontinho para recortar e colar",
    category: "Personagens",
    image: cachorroAzul.url,
    tag: "RECORTE E COLE",
  },
  {
    name: "Astronauta Alex",
    detail: "Pronto para explorar o espaço",
    category: "Personagens",
    image: astronautaAlex.url,
    tag: "MONTE EM 3D",
  },
  {
    name: "Gatinho Listrado",
    detail: "Fofura para montar em minutos",
    category: "Personagens",
    image: gatinhoListrado.url,
    tag: "CHEIO DE ENCANTO",
  },
  {
    name: "Família Safari",
    detail: "Leão, girafa e elefante de papel",
    category: "Personagens",
    image: familiaSafari.url,
    tag: "TRÊS AMIGUINHOS",
  },
  {
    name: "Guardião Espacial",
    detail: "O brinquedo favorito em versão de tubo",
    category: "Personagens",
    image: guardiaoEspacial.url,
    tag: "FEITO DE TUBO",
  },
  {
    name: "Amiguinho Amarelo",
    detail: "O dourado mais divertido do papel",
    category: "Personagens",
    image: amiguinhoAmarelo.url,
    tag: "PURO DIVERSÃO",
  },
  {
    name: "Gatinho Reciclado",
    detail: "Feito com caixinhas em casa",
    category: "Personagens",
    image: gatinhoReciclado.url,
    tag: "RECICLAGEM CRIATIVA",
  },
];

const categories = ["Todos", "Casinhas", "Ambientes", "Personagens", "Veículos", "Detalhes"];

const benefits = [
  {
    icon: "Printer",
    title: "Pronto para Imprimir",
    description:
      "Arquivos digitais para imprimir em casa. Confira os detalhes de cada modelo antes de comprar.",
  },
  {
    icon: "Scissors",
    title: "Recorte e Monte",
    description: "Recorte e monte as peças conforme as orientações disponíveis em cada modelo.",
  },
  {
    icon: "Heart",
    title: "Tempo em Família",
    description: "Uma atividade que une gerações ao redor da criatividade.",
  },
  {
    icon: "Download",
    title: "Formato Digital",
    description: "Arquivos digitais para imprimir e montar em casa.",
  },
];

const faqs = [
  [
    "Os arquivos são digitais?",
    "Sim. Este produto é digital: você compra arquivos para imprimir, não um brinquedo físico enviado pelos Correios. Confira no checkout as condições de acesso aos arquivos.",
  ],
  [
    "Como recebo os arquivos?",
    "Os produtos são digitais. Antes de finalizar a compra, confira no checkout as condições e instruções de acesso aos arquivos.",
  ],
  [
    "Preciso de uma impressora colorida?",
    "Confira a descrição do modelo escolhido para verificar os requisitos de impressão e os materiais necessários.",
  ],
  [
    "Como monto os brinquedos?",
    "A proposta é imprimir, recortar e montar as peças. Confira a descrição do modelo escolhido para verificar as orientações específicas de montagem.",
  ],
  [
    "Posso imprimir mais de uma vez?",
    "Consulte as condições de uso e impressão informadas junto ao produto antes de comprar.",
  ],
  [
    "Como acesso os arquivos no celular?",
    "Consulte as instruções de acesso informadas no checkout após escolher o produto. Para brincar com o modelo em papel, será necessário imprimir as peças.",
  ],
  [
    "Como funciona o pagamento?",
    "O pagamento é realizado pelo checkout atual. Confira nele as formas de pagamento e as condições apresentadas antes de concluir a compra.",
  ],
  [
    "O produto é físico?",
    "Não. Você está comprando arquivos digitais para imprimir. Nenhum brinquedo físico será enviado pelos Correios.",
  ],
];

function Logo() {
  return (
    <a href="#inicio" className="logo" aria-label="Samara Criar Art's, início">
      <span className="logo-mark" aria-hidden="true">
        <House size={22} strokeWidth={2.2} />
      </span>
      <span className="logo-word">Samara Criar Art's</span>
    </a>
  );
}

const checkoutUrl = "https://pay.wiapy.com/MwhZ2YuYJPKY";

function Index() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<number | null>(null);
  const galleryTrigger = useRef<HTMLButtonElement | null>(null);

  const filteredProducts =
    filter === "Todos" ? products : products.filter((product) => product.category === filter);
  const active = selected === null ? null : filteredProducts[selected];
  const navigateGallery = (direction: number) =>
    setSelected((current) =>
      current === null
        ? 0
        : (current + direction + filteredProducts.length) % filteredProducts.length,
    );

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <div id="inicio" className="promo-bar">
        MENOS TELAS <span className="mx-2">•</span> MAIS BRINCADEIRA <span className="mx-2">•</span>{" "}
        BRINQUEDOS DE PAPEL PARA CRIAR JUNTOS
      </div>

      <header className="site-header" role="banner">
        <div className="container-site header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Menu principal">
            <a className="nav-link" href="#o-que-e">
              O que é
            </a>
            <a className="nav-link" href="#colecao">
              Coleção
            </a>
            <a className="nav-link" href="#como-funciona">
              Como funciona
            </a>
            <a className="nav-link" href="#duvidas">
              Dúvidas
            </a>
            <Button variant="pink" size="sm" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Comprar agora
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={kittyHouse.url}
            alt="Casinha de papel Hello Kitty com quarto, banheiro, sala, cozinha e móveis detalhados para montar"
            fetchPriority="high"
            decoding="async"
          />
          <div className="container-site hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                <Sparkles size={15} aria-hidden="true" /> Imaginação fora das telas
              </p>
              <h1 id="hero-title">
                Tire seu filho das telas
                <br />
                <span>e devolva a magia de brincar!</span>
              </h1>
              <p className="hero-description">
                Mais de 200 brinquedos de papel para imprimir, recortar e montar em casa. Uma forma prática e econômica de estimular a imaginação e criar momentos especiais em família.
              </p>
              <div className="hero-tags">
                <span>
                  <Download size={15} aria-hidden="true" /> Arquivo digital
                </span>
                <span>
                  <Heart size={15} aria-hidden="true" /> +200 brinquedos para criar
                </span>
              </div>
              <div className="hero-actions">
                <Button variant="pink" size="lg" asChild>
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    Comprar coleção · R$ 14,99
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="link" asChild>
                  <a href="#colecao">
                    Explorar os modelos <ChevronRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <p className="trust-line">
                <Download size={20} aria-hidden="true" />{" "}
                <span>
                  <strong>Você recebe arquivos digitais.</strong>
                  <br />
                  Não são brinquedos físicos enviados pelos Correios.
                </span>
              </p>
            </div>
          </div>
        </section>

        <div className="process-strip" aria-label="Como usar">
          <div className="container-site process-inner">
            <span>
              <Printer size={23} aria-hidden="true" /> Imprima
            </span>
            <Sparkles size={16} aria-hidden="true" className="process-separator" />
            <span>
              <Scissors size={23} aria-hidden="true" /> Recorte
            </span>
            <Sparkles size={16} aria-hidden="true" className="process-separator" />
            <span>
              <House size={23} aria-hidden="true" /> Monte
            </span>
            <Sparkles size={16} aria-hidden="true" className="process-separator" />
            <span>
              <Heart size={23} aria-hidden="true" /> Brinque
            </span>
          </div>
        </div>

        <section className="pitch container-site" aria-labelledby="pitch-title" id="o-que-e">
          <div className="pitch-card">
            <div className="pitch-copy">
              <p className="eyebrow">
                <Sparkles size={15} aria-hidden="true" /> O que você recebe
              </p>
              <h2 id="pitch-title">Mais de 200 brinquedos de papel para imaginar e criar</h2>
              <p>
                Transforme folhas de papel em casinhas, personagens, veículos e muito mais! Uma coleção digital com mais de 200 brinquedos para imprimir, recortar, montar e brincar.
              </p>
              <ul className="pitch-points">
                <li>
                  <Check size={15} aria-hidden="true" /> +200 brinquedos de papel
                </li>
                <li>
                  <Download size={15} aria-hidden="true" /> Arquivos digitais
                </li>
              </ul>
              <p className="conditions-note">
                Confira a descrição dos produtos e as condições de acesso no checkout antes de
                comprar.
              </p>
            </div>
            <div className="pitch-mosaic">
              <img
                src={kittyHouse.url}
                alt="Casinha Hello Kitty montada com detalhes de móveis"
                loading="lazy"
                decoding="async"
              />
              <img
                src={dollHouse.url}
                alt="Casinha de boneca em três dimensões"
                loading="lazy"
                decoding="async"
              />
              <img
                src={fairyHouse.url}
                alt="Casinha de fada colorida e encantada"
                loading="lazy"
                decoding="async"
              />
              <img
                src={peppaPig.url}
                alt="Peppa Pig e personagens em papel"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="showcase-section" aria-labelledby="showcase-title">
          <div className="container-site">
            <div className="section-heading">
              <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> Veja de pertinho</p>
              <h2 id="showcase-title">Um pedacinho da diversão</h2>
              <p>Deslize para explorar os modelos ou veja as imagens passando em uma vitrine cheia de cor.</p>
            </div>
          </div>
          <div className="moving-gallery" aria-label="Carrossel animado de brinquedos de papel">
            <div className="moving-gallery-track">
              {[...products, ...products].map((product, index) => (
                <figure className="moving-gallery-card" key={`${product.name}-${index}`}>
                  <img src={product.image} alt={`${product.name} — brinquedo de papel digital`} loading="lazy" decoding="async" />
                  <figcaption>{product.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="container-site showcase-details">
            <div className="showcase-detail">
              <span className="showcase-number">01</span>
              <h3>Escolha seu mundo favorito</h3>
              <p>Explore casinhas, quartos, móveis, veículos e personagens para inventar histórias diferentes.</p>
            </div>
            <div className="showcase-detail">
              <span className="showcase-number">02</span>
              <h3>Prepare os materiais</h3>
              <p>Tenha à mão impressora, papel adequado, tesoura e cola conforme as instruções do modelo escolhido.</p>
            </div>
            <div className="showcase-detail">
              <span className="showcase-number">03</span>
              <h3>Monte e crie histórias</h3>
              <p>Recorte as peças com a supervisão de um adulto quando necessário e transforme cada montagem em uma nova brincadeira.</p>
            </div>
          </div>
        </section>

        <section id="colecao" className="section container-site" aria-labelledby="products-title">
          <div className="section-heading">
            <p className="eyebrow">
              <Palette size={15} aria-hidden="true" /> Um universo para criar
            </p>
            <h2 id="products-title">Explore alguns modelos da coleção</h2>
            <p>Veja alguns exemplos dos mais de 200 brinquedos de papel incluídos na oferta.</p>
          </div>

          <div className="filter-row" role="group" aria-label="Filtrar produtos por categoria">
            {categories.map((cat) => (
              <Button
                variant={filter === cat ? "selected" : "filter"}
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelected(null);
                }}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                aria-pressed={filter === cat}
              >
                {cat}
              </Button>
            ))}
          </div>

          <p className="catalog-count" role="status" aria-live="polite">
            {filteredProducts.length} modelos{" "}
            {filter === "Todos" ? "na coleção" : `em ${filter.toLowerCase()}`}
          </p>
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <article key={product.name} className="product">
                <div className="product-image-wrap">
                  <Button
                    variant="ghost"
                    className="product-image-button"
                    onClick={(event) => {
                      galleryTrigger.current = event.currentTarget;
                      setSelected(index);
                    }}
                    aria-label={`Ampliar imagem de ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name}, modelo de papel montado`}
                      loading="lazy"
                      decoding="async"
                    />
                  </Button>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                    <span className="product-category">{product.category}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(event) => {
                      galleryTrigger.current = event.currentTarget;
                      setSelected(index);
                    }}
                    className="view-button"
                    aria-label={`Ver detalhes de ${product.name}`}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="center-cta">
            <Button variant="playful" size="lg" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                <Heart size={18} aria-hidden="true" /> Comprar agora
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <section
          id="como-funciona"
          className="section benefit-band"
          aria-labelledby="benefits-title"
        >
          <div className="container-site">
            <div className="section-heading">
              <p className="eyebrow">
                <Heart size={15} aria-hidden="true" /> Do papel à brincadeira
              </p>
              <h2 id="benefits-title">Um tempo para criar juntos</h2>
              <p>Uma proposta de atividade manual para imprimir, recortar, montar e brincar.</p>
            </div>

            <div className="benefit-grid">
              {benefits.map((benefit, index) => {
                const IconComponent = {
                  Printer: Printer,
                  Scissors: Scissors,
                  Heart: Heart,
                  Download: Download,
                }[benefit.icon as keyof typeof iconMap];

                return (
                  <article key={index} className="benefit">
                    <div className="benefit-icon">
                      <IconComponent size={28} aria-hidden="true" />
                    </div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="offer-section" aria-labelledby="offer-title">
          <div className="container-site offer-layout">
            <div className="offer-story">
              <p className="eyebrow">
                <Sparkles size={15} aria-hidden="true" /> Brincadeira criativa
              </p>
              <h2 id="offer-title">Mais imaginação em cada montagem</h2>
              <p>
                Escolha um modelo, imprima as páginas, recorte as peças e monte seu brinquedo de
                papel. Uma atividade manual para explorar a criatividade e criar novas histórias.
              </p>
              <figure className="play-photo">
                <img
                  src={kidsPhoto.url}
                  alt="Montagem de fotos de crianças segurando personagens de papel"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Imprimir. Criar. Inventar novas histórias.</figcaption>
              </figure>
            </div>

            <div className="offer-card">
              <div className="offer-ribbon">
                <strong>COLEÇÃO COM +200 BRINQUEDOS DE PAPEL</strong>
              </div>
              <div className="offer-body">
                <h3>Sua próxima brincadeira começa aqui</h3>
                <ul className="offer-list">
                  <li>
                    <Check size={18} aria-hidden="true" /> Mais de 200 brinquedos de papel
                  </li>
                  <li>
                    <Check size={18} aria-hidden="true" /> Arquivos digitais para imprimir
                  </li>
                  <li>
                    <Check size={18} aria-hidden="true" /> Casinhas, ambientes, personagens e
                    veículo
                  </li>
                  <li>
                    <Check size={18} aria-hidden="true" /> Produto digital, sem envio físico
                  </li>
                </ul>
                <div className="price-area">
                  <p>Valor da coleção digital</p>
                  <div className="price">
                    <small>R$</small> 14,99
                  </div>
                  <Button variant="pink" size="lg" className="mt-6 w-full" asChild>
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                      Comprar agora
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
                  </Button>
                  <p className="conditions-note">
                    Consulte as formas de pagamento e as condições de acesso no checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section container-site" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">
              <Heart size={15} aria-hidden="true" /> Antes de começar
            </p>
            <h2 id="faq-title">Perguntas frequentes</h2>
            <p>Tudo que você precisa saber antes de comprar.</p>
          </div>

          <div className="faq-wrap">
            {faqs.map(([question, answer], index) => (
              <details key={index} className="faq-item">
                <summary>
                  {question}
                  <X size={18} aria-hidden="true" className="faq-icon" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-cta-title">
          <div className="container-site final-inner">
            <h2 id="final-cta-title">
              Menos telas. Mais tempo juntos.
              <br />
              <span>A próxima história pode começar no papel.</span>
            </h2>
            <p>+200 brinquedos de papel para imprimir, recortar, montar e brincar · R$ 14,99</p>
            <Button variant="pink" size="lg" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Comprar agora
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Button variant="pink" asChild className="sticky-buy">
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar coleção digital por R$ 14,99"
        >
          <span>
            <small>Coleção digital</small>
            <strong>R$ 14,99</strong>
          </span>
          <em>
            Comprar <ArrowRight size={16} aria-hidden="true" />
          </em>
        </a>
      </Button>

      <footer className="footer" role="contentinfo">
        <div className="container-site footer-inner">
          <Logo />
          <p>
            Pequenos mundos feitos de papel. Grandes momentos feitos juntos.
            <br />
            © 2026 Samara Criar Art's · Produto digital
            <br />
            <a href="mailto:contato@samaracriararts.com" className="footer-link">
              contato@samaracriararts.com
            </a>
          </p>
        </div>
      </footer>

      <DialogPrimitive.Root
        open={Boolean(active)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {active && (
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="modal-overlay" />
            <DialogPrimitive.Content
              className="image-modal"
              onCloseAutoFocus={(event) => {
                event.preventDefault();
                galleryTrigger.current?.focus();
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                  event.preventDefault();
                  navigateGallery(event.key === "ArrowLeft" ? -1 : 1);
                }
              }}
            >
              <DialogPrimitive.Close asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="modal-close"
                  aria-label="Fechar visualização"
                >
                  <X size={24} />
                </Button>
              </DialogPrimitive.Close>
              <img
                src={active.image}
                alt={`${active.name}, visualização ampliada do modelo de papel`}
                decoding="async"
              />
              <div className="modal-caption">
                <div>
                  <DialogPrimitive.Title asChild>
                    <h3>{active.name}</h3>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description>{active.detail}</DialogPrimitive.Description>
                  <small aria-live="polite">
                    {(selected ?? 0) + 1} de {filteredProducts.length} produtos nesta categoria
                  </small>
                </div>
                <div className="modal-navigation" aria-label="Navegar pelos produtos">
                  <Button
                    variant="outline"
                    size="icon"
                    type="button"
                    className="modal-nav"
                    aria-label="Produto anterior"
                    onClick={() => navigateGallery(-1)}
                  >
                    <ChevronLeft size={22} aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    type="button"
                    className="modal-nav"
                    aria-label="Próximo produto"
                    onClick={() => navigateGallery(1)}
                  >
                    <ChevronRight size={22} aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </DialogPrimitive.Root>
    </>
  );
}

const iconMap = {
  Printer,
  Scissors,
  Heart,
  Download,
};
