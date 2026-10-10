import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Download, Heart, House, LockKeyhole, MonitorOff, PackageOpen, Palette, Plus, Printer, Quote, Scissors, ShieldCheck, Sparkles, X } from 'lucide-react';
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
    { title: 'Criando 3D | Menos telas, mais brincadeira de papel' },
    { name: 'description', content: 'Descubra um mundo de casinhas, personagens e brinquedos de papel. Imprima, recorte, monte e transforme tempo longe das telas em imaginação.' },
    { property: 'og:title', content: 'Criando 3D | A diversão começa no papel' },
    { property: 'og:description', content: 'Casinhas encantadas e brinquedos de papel para imprimir, montar e brincar em família.' },
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
const faqs = [
 ['É um produto físico?', 'Não. A proposta é uma coleção digital de arquivos para imprimir, recortar, montar e brincar. Nenhuma casinha física é enviada.'],
 ['Como recebo os arquivos?', 'O acesso digital é disponibilizado após a confirmação do pagamento. Os detalhes da entrega devem ser conferidos no momento da compra.'],
 ['Preciso de uma impressora colorida?', 'Uma impressora colorida reproduz as cores dos modelos. Você também pode usar uma gráfica ou imprimir em preto e branco e colorir as peças.'],
 ['É fácil montar?', 'É só imprimir, recortar e montar seguindo as indicações de cada modelo. Algumas peças podem precisar da ajuda de um adulto, principalmente ao usar a tesoura.'],
 ['Posso imprimir mais de uma vez?', 'Sim, os arquivos podem ser impressos novamente para uso pessoal. Assim, a brincadeira pode recomeçar com novas histórias.'],
 ['Posso acessar pelo celular?', 'Sim, os arquivos digitais podem ser acessados por celular ou computador. Para montar os brinquedos, é necessário imprimi-los.'],
];
const testimonials = [
  ['Minha filha passou a tarde inteira montando a casinha. Nunca a vi tão concentrada em uma brincadeira!', 'Mamãe da Alice'],
  ['Imprimimos, recortamos juntos e virou brincadeira de todo dia. Diversão longe das telas, do jeito que a gente queria.', 'Papai do Theo'],
  ['As crianças amaram! Cada uma montou seu personagem e ainda inventou histórias para brincar junto.', 'Professora Ana'],
  ['As pecinhas são fofas e fáceis de montar. Virou presente certo para os amiguinhos.', 'Tia da Lara'],
];
function Logo() { return <a href="#inicio" className="logo" aria-label="Criando 3D, início"><span className="logo-mark"><House size={25} strokeWidth={2.2}/></span><span>criando<span className="text-primary">3D</span><span className="text-aqua">.</span></span></a>; }
function CollectionCTA({ purchase = false, onPurchase }: { purchase?: boolean; onPurchase?: () => void }) {
  return <><Button variant="playful" size="lg" className="h-13 px-7 text-sm" asChild={!purchase} onClick={purchase ? onPurchase : undefined}>{purchase ? <><Heart size={18}/> Quero a coleção completa <ArrowRight size={18}/></> : <a href="#oferta"><Heart size={18}/> Quero a coleção completa <ArrowRight size={18}/></a>}</Button><div className="trust-line"><LockKeyhole size={12}/> Produto digital <span>•</span> Imprima e monte em casa</div></>;
}
function Index() {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<number | null>(null);
  const [purchase, setPurchase] = useState(false);
  useEffect(() => {
    if (selected === null && !purchase) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setSelected(null); setPurchase(false); } };
    document.addEventListener('keydown', close);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', close); };
  }, [selected, purchase]);
  const active = selected === null ? null : products[selected];
  return <>
    <div id="inicio" className="promo-bar">MENOS TELAS. MAIS DESCOBERTAS. <span className="mx-2">✦</span> BRINQUEDOS DE PAPEL PARA CRIAR JUNTOS</div>
    <header className="site-header"><div className="container-site header-inner"><Logo/><nav className="desktop-nav" aria-label="Menu principal"><a className="nav-link" href="#colecao">A coleção</a><a className="nav-link" href="#como-funciona">Como funciona</a><a className="nav-link" href="#depoimentos">Depoimentos</a><a className="nav-link" href="#duvidas">Dúvidas</a><Button asChild variant="pink" className="h-10 px-4 text-xs"><a href="#oferta">Quero criar <ArrowUpRight size={15}/></a></Button></nav></div></header>
    <main>
      <section className="hero"><img className="hero-image" src={kittyHouse.url} alt="Casinha de papel Hello Kitty com quarto, banheiro, sala, cozinha e móveis para montar" fetchPriority="high"/><div className="container-site hero-content"><div className="hero-copy"><div className="eyebrow"><MonitorOff size={15}/> O próximo brinquedo não precisa de uma tela.</div><h1>Brinquedos de papel.<br/><span>Menos tela.<br/>Mais infância.</span></h1><p className="hero-description">Troque mais um vídeo por uma história criada por vocês. Imprima, monte e veja casinhas e personagens ganharem vida nas mãos das crianças.</p><div className="hero-tags"><span><Check/> Acesso digital</span><span><Check/> Para imprimir</span><span><Check/> Diversão em família</span></div><CollectionCTA/></div></div><div className="hero-label">Papel nas mãos. Imaginação no mundo.</div></section>
      <div className="process-strip"><div className="container-site process-inner"><span><Printer size={23}/> Imprima</span><Sparkles/><span><Scissors size={23}/> Recorte</span><Sparkles/><span><House size={23}/> Monte</span><Sparkles/><span><Heart size={23}/> Brinque!</span></div></div>
      <section id="colecao" className="section container-site"><div className="section-heading"><div className="eyebrow"><Palette size={15}/> Um universo para criar</div><h2>Um mundo que não cabe numa tela.</h2><p>Casinhas, personagens e pequenas aventuras para montar.<br/>Deixe a criança escolher. A próxima história começa aqui.</p></div><div className="filter-row" role="group" aria-label="Filtrar coleção">{['Todos','Casinhas','Ambientes','Personagens','Detalhes','Veículos'].map(item => <Button key={item} variant={filter === item ? 'selected' : 'filter'} size="sm" aria-pressed={filter === item} onClick={()=>setFilter(item)}>{item === 'Todos' && <Sparkles size={13}/>} {item}</Button>)}</div><div className="product-grid">{products.map((product,index) => filter !== 'Todos' && product.category !== filter ? null : <article className="product" key={product.name}><a href={product.image} onClick={event=>{event.preventDefault();setSelected(index);}} aria-label={`Ver ${product.name}`}><div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy"/><span className="product-tag">{product.tag}</span></div></a><div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><Button variant="ghost" size="icon" className="view-button text-primary" aria-label={`Ampliar ${product.name}`} onClick={()=>setSelected(index)}><ArrowUpRight/></Button></div></article>)}</div><p className="mt-5 text-center text-xs text-muted-foreground">Imagens de referência da coleção. Confira os modelos incluídos antes de comprar.</p><div className="center-cta"><CollectionCTA/></div></section>
      <section id="como-funciona" className="section benefit-band"><div className="container-site"><div className="section-heading"><div className="eyebrow"><Heart size={15}/> Mais presença, mais brincadeira</div><h2>Desligue a tela. Ligue a imaginação.</h2><p>Não é sobre proibir o celular. É sobre oferecer algo que dê vontade de largá-lo.</p></div><div className="benefit-grid">{[{icon:Download,title:'Escolha e imprima',text:'Arquivos digitais para começar uma nova brincadeira em casa.'},{icon:Scissors,title:'Recorte e monte',text:'Cada pecinha vira uma descoberta. Crie junto com as crianças.'},{icon:Palette,title:'Solte a imaginação',text:'Invente histórias, decore os ambientes e crie seu próprio mundo.'},{icon:MonitorOff,title:'Crie momentos juntos',text:'Mais tempo em família e pequenas aventuras longe das telas.'}].map(({icon:Icon,title,text})=><div className="benefit" key={title}><div className="benefit-icon"><Icon size={26}/></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
      <section id="depoimentos" className="section testimonial-band"><div className="container-site testimonial-layout"><div className="testimonial-photo"><img src={kidsPhoto.url} alt="Crianças sorrindo segurando seus personagens de papel montados" loading="lazy"/><div className="testimonial-photo-label"><Heart size={16}/> Pequenas mãos. Grandes conquistas.</div></div><div className="testimonial-copy"><div className="eyebrow"><Heart size={15}/> Tempo juntos vale mais</div><h2>A melhor conexão<br/>acontece fora da tela.</h2><p>O orgulho de terminar uma montagem. A alegria de inventar uma história. Aquele “olha o que eu fiz!” que merece toda a sua atenção.</p><p className="review-note">Depoimentos ilustrativos — aguardando relatos reais das famílias.</p><div className="testimonials-grid">{testimonials.map(([quote,author])=><figure className="testimonial-card" key={author}><div className="review-label">EXEMPLO DE DEPOIMENTO</div><blockquote><Quote size={16}/> {quote}</blockquote><figcaption>Texto ilustrativo · não é uma avaliação real</figcaption></figure>)}</div></div></div></section>
      <section id="oferta" className="section offer-section"><div className="container-site offer-layout"><div className="offer-story"><div className="eyebrow"><Sparkles size={15}/> A criatividade sai do papel</div><h2>Hoje pode ser<br/><span className="text-primary">um dia de criar.</span></h2><p>Em vez de “só mais um vídeo”, que tal “vamos montar juntos”? Separe o papel, a tesoura e um tempo para estar presente. O resto é imaginação.</p><div className="flex items-center gap-3 justify-center sm:justify-start mt-6 text-sm font-bold text-accent-foreground"><PackageOpen size={22}/> Digital para você. Diversão para toda a família.</div><img src={rooms.url} alt="Quatro ambientes coloridos de papel montados: banheiro, cozinha, sala e quarto" loading="lazy"/></div><div className="offer-card"><div className="offer-ribbon">✦ COLEÇÃO COMPLETA · UM MUNDO PARA CRIAR ✦</div><div className="offer-body"><h3>Seu próximo momento de diversão</h3><ul className="offer-list"><li><Check/> Brinquedos de papel para imprimir</li><li><Check/> Casinhas e ambientes em miniatura</li><li><Check/> Personagens para inventar histórias</li><li><Check/> Móveis e acessórios para montar</li><li><Check/> Arquivos digitais para uso pessoal</li></ul><div className="price-area"><p>Coleção digital · valor do site de referência</p><div className="price"><small>R$</small> 14,99</div><p>Pagamento único</p><div className="center-cta mt-5"><CollectionCTA purchase onPurchase={()=>setPurchase(true)}/></div></div></div></div></div></section>
      <section id="duvidas" className="section container-site"><div className="section-heading"><div className="eyebrow"><Plus size={15}/> Antes de começar</div><h2>Uma dúvida por aí?</h2><p>Vamos deixar tudo prontinho para a sua próxima criação.</p></div><div className="faq-wrap">{faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<Plus/></summary><p>{answer}</p></details>)}</div></section>
    </main>
    <footer className="footer"><div className="container-site footer-inner"><Logo/><p>Pequenos mundos feitos de papel. Grandes momentos feitos juntos.<br/>© 2026 Criando 3D · Produto digital</p><div className="flex items-center gap-2 text-xs text-muted-foreground"><Heart size={15} className="text-primary"/> Feito para imaginar</div></div></footer>
    {active && <div className="modal-overlay" onClick={()=>setSelected(null)}><div className="image-modal" role="dialog" aria-modal="true" aria-label={active.name} onClick={event=>event.stopPropagation()}><Button variant="secondary" size="icon" className="modal-close" aria-label="Fechar imagem" autoFocus onClick={()=>setSelected(null)}><X/></Button><img src={active.image} alt={active.name}/><div className="modal-caption"><h3>{active.name}</h3><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Imagem anterior" onClick={()=>setSelected(((selected ?? 0)-1+products.length)%products.length)}><ChevronLeft/></Button><Button variant="outline" size="icon" aria-label="Próxima imagem" onClick={()=>setSelected(((selected ?? 0)+1)%products.length)}><ChevronRight/></Button></div></div></div></div>}
    {purchase && <div className="modal-overlay" onClick={()=>setPurchase(false)}><div className="purchase-modal" role="dialog" aria-modal="true" aria-labelledby="purchase-title" onClick={event=>event.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" autoFocus aria-label="Fechar" onClick={()=>setPurchase(false)}><X/></Button><ShieldCheck size={44} className="mx-auto text-aqua"/><h2 id="purchase-title">Sua próxima aventura está chegando!</h2><p>As compras ainda não estão disponíveis. Estamos preparando os detalhes para você começar a criar.</p><Button variant="pink" className="mt-4" onClick={()=>setPurchase(false)}>Continuar explorando <ArrowRight/></Button></div></div>}
  </>;
}
