import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronRight, Download, Heart, House, Palette, Printer, Scissors, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pinkHouse from '@/assets/1613852601-1281479777.jpg.asset.json';
import kittyRoom from '@/assets/97f56883c249237d2e342d7d2f99bb22.jpg.asset.json';
import kittyHouse from '@/assets/file_000000009960820e9a03979a9bd3ae56.png.asset.json';
import dollHouse from '@/assets/file_000000007a28820eacab5931d1243e1d.png.asset.json';
import fairyHouse from '@/assets/file_00000000c5a8820eab2e83c2bb1f043d.png.asset.json';
import purpleHouse from '@/assets/1613852601-206645978.jpg.asset.json';
import kitchen from '@/assets/16138526011101468689.jpg.asset.json';
import livingRoom from '@/assets/1613852601322581794.jpg.asset.json';
import rooms from '@/assets/16138526011870265434.jpg.asset.json';
import peppaPig from '@/assets/IMG-20261006-WA0024.jpg.asset.json';
import redTruck from '@/assets/IMG-20261006-WA0025.jpg.asset.json';
import hulkHero from '@/assets/IMG-20261006-WA0020.jpg.asset.json';
import pikachu from '@/assets/IMG-20261006-WA0021.jpg.asset.json';
import bluey from '@/assets/IMG-20261006-WA0022.jpg.asset.json';
import kidsPhoto from '@/assets/IMG-20261006-WA0026.jpg.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: "Samara Criar Art's | Brinquedos de Papel para Imprimir" },
    { name: 'description', content: 'Coleção de casinhas, personagens e brinquedos de papel digitais. Imprima, recorte, monte e transforme tempo longe das telas em imaginação e criatividade em família.' },
    { property: 'og:title', content: "Samara Criar Art's — Brinquedos de Papel" },
    { property: 'og:description', content: 'Coleção completa de brinquedos de papel digitais para imprimir, recortar, montar e brincar.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const products = [
  { name: 'Casinha Hello Kitty', detail: 'Um mundo de laços e fofura', category: 'Casinhas', image: kittyHouse.url, tag: 'CHEIA DE FOFURA' },
  { name: 'Casinha de Boneca', detail: 'Pequena casa, grandes histórias', category: 'Casinhas', image: dollHouse.url, tag: 'PARA IMAGINAR' },
  { name: 'Casinha de Fada', detail: 'Um cantinho cheio de magia', category: 'Casinhas', image: fairyHouse.url, tag: 'MUNDO ENCANTADO' },
  { name: 'Chalé Cor-de-rosa', detail: 'Detalhes que encantam', category: 'Casinhas', image: pinkHouse.url, tag: 'MINIATURA 3D' },
  { name: 'Quarto Hello Kitty', detail: 'Um quarto dos sonhos', category: 'Ambientes', image: kittyRoom.url, tag: 'RECORTE E MONTE' },
  { name: 'Chalé Lilás', detail: 'Uma nova história a cada dia', category: 'Casinhas', image: purpleHouse.url, tag: 'MINIATURA 3D' },
  { name: 'Cozinha em Miniatura', detail: 'Pequenos detalhes, muita diversão', category: 'Detalhes', image: kitchen.url, tag: 'MÓVEIS DE PAPEL' },
  { name: 'Sala de Estar', detail: 'Um cantinho para reunir a turma', category: 'Ambientes', image: livingRoom.url, tag: 'MONTE SEU MUNDO' },
  { name: 'Coleção de Ambientes', detail: 'Cada cômodo, uma brincadeira', category: 'Ambientes', image: rooms.url, tag: 'VÁRIOS AMBIENTES' },
  { name: 'Peppa Pig e seu Ônibus', detail: 'A turma favorita em papel', category: 'Personagens', image: peppaPig.url, tag: 'RECORTE E MONTE' },
  { name: 'Picape Esportiva', detail: 'Corridas pela sala de estar', category: 'Veículos', image: redTruck.url, tag: 'MINIATURA 3D' },
  { name: 'Herói Esmagador', detail: 'Fúria verde para salvar o dia', category: 'Personagens', image: hulkHero.url, tag: 'MUNDO DOS HERÓIS' },
  { name: 'Amigo Elétrico', detail: 'O personagem amarelo favorito', category: 'Personagens', image: pikachu.url, tag: 'CHEIA DE FOFURA' },
  { name: 'Dupla Aventureira', detail: 'Irmãs cachorras cheias de ideias', category: 'Personagens', image: bluey.url, tag: 'PARA IMAGINAR' },
];

const categories = ['Todos', 'Casinhas', 'Ambientes', 'Personagens', 'Veículos', 'Detalhes'];

const benefits = [
  { icon: 'Printer', title: 'Pronto para Imprimir', description: 'Arquivos otimizados para impressoras comuns, coloridas ou em preto e branco.' },
  { icon: 'Scissors', title: 'Fácil de Montar', description: 'Instruções claras para cada brinquedo e processo de montagem.' },
  { icon: 'Heart', title: 'Tempo em Família', description: 'Uma atividade que une gerações ao redor da criatividade.' },
  { icon: 'Download', title: 'Acesso Imediato', description: 'Baixe os arquivos no mesmo momento da compra.' },
];

const faqs = [
  ['Os arquivos são digitais?', 'Sim! Você recebe arquivos para imprimir (PDF), não um brinquedo físico enviado pelos Correios. A entrega é 100% digital e imediata após o pagamento.'],
  ['Como funciona a entrega?', 'Após confirmar o pagamento, você recebe acesso imediato aos arquivos e pode baixá-los quando quiser.'],
  ['Preciso de uma impressora colorida?', 'Uma impressora comum funciona. Se tiver impressora colorida, as cores ficam mais vibrantes; em preto e branco, você pode colorir à mão.'],
  ['É fácil montar?', 'Sim! É só imprimir, recortar e montar seguindo as indicações de cada modelo. Crianças a partir de 4 anos conseguem com ajuda de um adulto.'],
  ['Posso imprimir mais de uma vez?', 'Sim, os arquivos podem ser impressos novamente para uso pessoal, quantas vezes quiser.'],
  ['Como acesso os arquivos no celular?', 'Os arquivos digitais podem ser acessados por celular ou computador. Para montar os brinquedos, você precisará imprimi-los.'],
  ['Como funciona o pagamento?', 'A compra é feita no checkout atual, com confirmação por email e acesso imediato ao material digital.'],
  ['Há garantia de satisfação?', 'A página apresenta os detalhes dos produtos e qualquer dúvida pode ser esclarecida antes da compra.'],
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

const checkoutUrl = 'https://pay.wiapy.com/MwhZ2YuYJPKY';

function Index() {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };
    document.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', close);
    };
  }, [selected]);

  const filteredProducts = filter === 'Todos' ? products : products.filter((product) => product.category === filter);
  const active = selected === null ? null : filteredProducts[selected];

  return (
    <>
      <div id="inicio" className="promo-bar">
        MENOS TELAS <span className="mx-2">•</span> MAIS BRINCADEIRA <span className="mx-2">•</span> BRINQUEDOS DE PAPEL PARA CRIAR JUNTOS
      </div>

      <header className="site-header" role="banner">
        <div className="container-site header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Menu principal">
            <a className="nav-link" href="#o-que-e">O que é</a>
            <a className="nav-link" href="#colecao">Coleção</a>
            <a className="nav-link" href="#como-funciona">Como funciona</a>
            <a className="nav-link" href="#duvidas">Dúvidas</a>
            <Button variant="playful" size="sm" className="ml-4" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Comprar agora
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={kittyHouse.url}
            alt="Casinha de papel Hello Kitty com quarto, banheiro, sala, cozinha e móveis detalhados para montar"
            fetchPriority="high"
          />
          <div className="container-site hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                <Sparkles size={15} aria-hidden="true" /> Brinquedos de papel
              </p>
              <h1 id="hero-title">
                Imprima, recorte, <span>monte</span> e <span>brinque</span> juntos
              </h1>
              <p className="hero-description">
                Uma coleção completa de casinhas, personagens e brinquedos em papel. Entrega 100% digital, pronta para imprimir em casa.
              </p>
              <div className="hero-tags">
                <span>
                  <Download size={15} aria-hidden="true" /> Acesso imediato
                </span>
                <span>
                  <Heart size={15} aria-hidden="true" /> Presentes que unem
                </span>
              </div>
              <p className="trust-line">
                <Check size={16} aria-hidden="true" /> Arquivos digitais entregues por email
              </p>
              <Button variant="playful" size="lg" className="mt-6" asChild>
                <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                  <Heart size={18} aria-hidden="true" /> Quero a coleção completa
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </Button>
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
              <h2 id="pitch-title">Uma coleção digital completa</h2>
              <p>
                Após a compra, você acessa imediatamente uma biblioteca de arquivos em PDF prontos para imprimir. Cada modelo inclui instruções simples e todas as peças já dimensionadas para recorte.
              </p>
              <ul className="pitch-points">
                <li><Check size={15} aria-hidden="true" /> 14 modelos diferentes</li>
                <li><Check size={15} aria-hidden="true" /> Arquivos em alta resolução</li>
                <li><Check size={15} aria-hidden="true" /> Instruções ilustradas</li>
                <li><Check size={15} aria-hidden="true" /> Uso pessoal ilimitado</li>
              </ul>
            </div>
            <div className="pitch-mosaic">
              <img src={kittyHouse.url} alt="Casinha Hello Kitty montada com detalhes de móveis" />
              <img src={dollHouse.url} alt="Casinha de boneca em três dimensões" />
              <img src={fairyHouse.url} alt="Casinha de fada colorida e encantada" />
              <img src={peppaPig.url} alt="Peppa Pig e personagens em papel" />
            </div>
          </div>
        </section>

        <section id="colecao" className="section container-site" aria-labelledby="products-title">
          <div className="section-heading">
            <p className="eyebrow">
              <Palette size={15} aria-hidden="true" /> Um universo para criar
            </p>
            <h2 id="products-title">A coleção completa</h2>
            <p>14 modelos cuidadosamente desenvolvidos para literalmente transformar a criatividade em brincadeira.</p>
          </div>

          <div className="filter-row" role="group" aria-label="Filtrar produtos por categoria">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <article key={product.name} className="product">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-info">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                  </div>
                  <button
                    onClick={() => setSelected(filteredProducts.findIndex((item) => item.name === product.name))}
                    className="view-button"
                    aria-label={`Ver detalhes de ${product.name}`}
                  >
                    <ChevronRight size={20} aria-hidden="true" />
                  </button>
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

        <section id="como-funciona" className="section benefit-band" aria-labelledby="benefits-title">
          <div className="container-site">
            <div className="section-heading">
              <p className="eyebrow">
                <Heart size={15} aria-hidden="true" /> O que torna especial
              </p>
              <h2 id="benefits-title">Tudo pensado em você</h2>
              <p>Desde a qualidade dos arquivos até a experiência de compra, cada detalhe foi pensado.</p>
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
                <Sparkles size={15} aria-hidden="true" /> Já compraram e amaram
              </p>
              <h2 id="offer-title">Crianças e famílias em todo Brasil</h2>
              <p>
                Pais, tias e educadoras descobriram que os brinquedos de papel criam momentos reais longe das telas. Cada casinha montada é uma história criada juntos.
              </p>
              <img src={kidsPhoto.url} alt="Crianças montando e brincando com brinquedos de papel" />
            </div>

            <div className="offer-card">
              <div className="offer-ribbon">
                <strong>COLEÇÃO COMPLETA — 14 MODELOS</strong>
              </div>
              <div className="offer-body">
                <h3>Tudo que você precisa</h3>
                <ul className="offer-list">
                  <li><Check size={18} aria-hidden="true" /> 14 brinquedos diferentes</li>
                  <li><Check size={18} aria-hidden="true" /> Arquivos em PDF para imprimir</li>
                  <li><Check size={18} aria-hidden="true" /> Instruções passo a passo</li>
                  <li><Check size={18} aria-hidden="true" /> Uso pessoal ilimitado</li>
                  <li><Check size={18} aria-hidden="true" /> Acesso imediato por email</li>
                  <li><Check size={18} aria-hidden="true" /> Compatível com impressoras comuns</li>
                </ul>
                <div className="price-area">
                  <p>Investimento na criatividade e na família</p>
                  <div className="price"><small>R$</small> 14,99</div>
                  <Button variant="playful" size="lg" className="mt-6 w-full" asChild>
                    <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                      Comprar agora
                      <ArrowRight size={18} aria-hidden="true" />
                    </a>
                  </Button>
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
              Hoje à noite, em vez de mais um vídeo…
              <br />
              <span>uma casinha montada com as próprias mãos.</span>
            </h2>
            <p>Coleção completa por apenas R$ 14,99</p>
            <Button variant="primary" size="lg" asChild>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                Comprar agora
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <a className="sticky-buy" href={checkoutUrl} target="_blank" rel="noopener noreferrer" aria-label="Comprar coleção completa">
        <span>
          <small>Coleção completa</small>
          <strong>R$ 14,99</strong>
        </span>
        <em>
          Quero a minha <ArrowRight size={16} aria-hidden="true" />
        </em>
      </a>

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

      {active && (
        <div className="modal-overlay" onClick={() => setSelected(null)} role="presentation">
          <article className="image-modal" role="dialog" aria-modal="true" aria-label={active.name} onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="modal-close" aria-label="Fechar visualização">
              <X size={28} />
            </button>
            <img src={active.image} alt={active.name} />
            <div className="modal-caption">
              <div>
                <h3>{active.name}</h3>
                <p>{active.detail}</p>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

const iconMap = {
  Printer,
  Scissors,
  Heart,
  Download,
};

export { Index };
