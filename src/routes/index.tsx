import { createFileRoute } from "@tanstack/react-router";
import heroDna from "@/assets/hero-dna.jpg";
import performance from "@/assets/performance.jpg";
import lab from "@/assets/lab.jpg";
import { Dna, Sparkles, Flame, Activity, Microscope, ShieldCheck, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
              <Dna className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl tracking-wide">GENOMA</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#protocolos" className="hover:text-foreground transition">Protocolos</a>
            <a href="#ciencia" className="hover:text-foreground transition">Ciência</a>
            <a href="#processo" className="hover:text-foreground transition">Processo</a>
            <a href="#planos" className="hover:text-foreground transition">Planos</a>
          </nav>
          <a href="#planos" className="rounded-full bg-gradient-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-gold transition">
            Agendar análise
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero pt-32">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Genética de precisão — 2026
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Sua genética. <br />
            <span className="text-gradient italic">Seu protocolo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Identificamos os genes que regulam seu metabolismo, sua estética e sua performance.
            Cada protocolo é desenhado a partir do que está escrito no seu DNA — não em um manual genérico.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#planos" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-medium text-primary-foreground shadow-glow hover:shadow-gold transition">
              Iniciar minha análise
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#ciencia" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium hover:border-primary/40 transition">
              Como funciona
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold text-2xl font-display">+120</span> marcadores</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="text-foreground font-semibold text-2xl font-display">98%</span> precisão</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="text-foreground font-semibold text-2xl font-display">14d</span> de resultado</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
          <img
            src={heroDna}
            alt="Hélice de DNA dourada e esmeralda"
            width={1536}
            height={1280}
            className="relative rounded-3xl shadow-glow animate-float border border-primary/20"
          />
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-glow max-w-[220px]">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Gene FTO</div>
            <div className="font-display text-2xl mt-1">Variante AA</div>
            <div className="text-xs text-primary mt-1">Predisposição a acúmulo de gordura visceral</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const protocolos = [
  {
    icon: Sparkles,
    title: "Estética",
    desc: "Genes de colágeno, elastina e estresse oxidativo. Protocolos para pele, cabelo e celulite alinhados ao seu DNA.",
    tags: ["MMP1", "COL1A1", "SOD2"],
  },
  {
    icon: Flame,
    title: "Emagrecimento",
    desc: "Mapeamos metabolismo de gorduras, resposta à insulina e saciedade para um plano alimentar verdadeiramente seu.",
    tags: ["FTO", "MC4R", "PPARG"],
  },
  {
    icon: Activity,
    title: "Performance",
    desc: "Tipo de fibra muscular, recuperação, VO₂ e risco de lesão. Treino prescrito pela sua biologia.",
    tags: ["ACTN3", "ACE", "IL6"],
  },
];

function Protocolos() {
  return (
    <section id="protocolos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Três frentes. Um DNA.</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Protocolos escritos no <span className="text-gradient italic">seu código</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {protocolos.map(({ icon: Icon, title, desc, tags }) => (
            <article key={title} className="group relative rounded-3xl glass p-8 hover:border-primary/40 transition overflow-hidden">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
              <Icon className="h-8 w-8 text-accent mb-8" />
              <h3 className="font-display text-3xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ciencia() {
  return (
    <section id="ciencia" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={performance}
            alt="DNA brilhante envolvendo silhueta atlética"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-3xl border border-primary/20 shadow-glow"
          />
          <div className="absolute top-6 right-6 glass rounded-2xl px-4 py-3">
            <div className="text-xs text-muted-foreground">VO₂ máx. estimado</div>
            <div className="font-display text-3xl text-gradient">62 ml/kg</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Ciência aplicada</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
            Mais de <span className="text-gradient">120 marcadores</span> genéticos analisados.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
            Sequenciamos regiões-chave do seu genoma em laboratório certificado e cruzamos com a literatura mais atual em
            nutrigenômica, dermatogenética e fisiologia do exercício.
          </p>
          <ul className="space-y-4">
            {[
              "Painel completo de SNPs validados clinicamente",
              "Relatório interativo com explicação por gene",
              "Acompanhamento com equipe médica e nutricional",
              "Dados criptografados — você é o dono da sua informação",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-primary grid place-items-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", icon: Microscope, title: "Coleta em casa", desc: "Kit discreto com swab bucal. Você coleta em 2 minutos." },
  { n: "02", icon: Dna, title: "Análise no laboratório", desc: "Sequenciamento de alta precisão em até 10 dias úteis." },
  { n: "03", icon: ShieldCheck, title: "Protocolo entregue", desc: "Plataforma com seu mapa genético e protocolos personalizados." },
];

function Processo() {
  return (
    <section id="processo" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Processo</div>
          <h2 className="font-display text-5xl md:text-6xl">Simples como uma <span className="italic text-gradient">amostra</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <div key={n} className="relative text-center">
              <div className="relative mx-auto h-32 w-32 rounded-full glass grid place-items-center mb-8 shadow-glow">
                <Icon className="h-10 w-10 text-accent" />
                <span className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-gradient-primary text-primary-foreground font-display text-sm grid place-items-center">{n}</span>
              </div>
              <h3 className="font-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const planos = [
  {
    name: "Essencial",
    price: "R$ 1.290",
    desc: "Foco em emagrecimento e metabolismo.",
    features: ["40+ marcadores", "Plano nutricional genético", "Relatório digital", "1 consulta de devolutiva"],
  },
  {
    name: "Performance",
    price: "R$ 1.890",
    desc: "Tudo do Essencial + treino e recuperação.",
    features: ["80+ marcadores", "Protocolo de treino", "Suplementação personalizada", "2 consultas de acompanhamento"],
    highlight: true,
  },
  {
    name: "Signature",
    price: "R$ 2.690",
    desc: "Mapa completo: estética, peso e performance.",
    features: ["120+ marcadores", "Protocolo estético dermatológico", "Acesso anual à plataforma", "Acompanhamento trimestral"],
  },
];

function Planos() {
  return (
    <section id="planos" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Planos</div>
          <h2 className="font-display text-5xl md:text-6xl">Escolha sua <span className="italic text-gradient">jornada</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {planos.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-gradient-primary text-primary-foreground shadow-gold scale-[1.03]"
                  : "glass"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                {p.highlight && (
                  <span className="text-[10px] uppercase tracking-widest bg-background/20 px-2 py-1 rounded-full">Popular</span>
                )}
              </div>
              <p className={`mt-2 text-sm ${p.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="font-display text-5xl mt-6">{p.price}</div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 ${p.highlight ? "text-primary-foreground" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 rounded-full py-3 font-medium transition ${
                  p.highlight
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-gold"
                }`}
              >
                Quero este plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center border border-primary/30">
          <img src={lab} alt="" aria-hidden width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="relative">
            <h2 className="font-display text-5xl md:text-7xl leading-tight">
              Pare de seguir <br /> <span className="italic text-gradient">a média</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Seu corpo já tem as respostas. Nós só ajudamos você a ouvi-las.
            </p>
            <a href="#planos" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-medium text-primary-foreground shadow-glow hover:shadow-gold transition">
              Decifrar meu DNA
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-primary grid place-items-center">
            <Dna className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg text-foreground">GENOMA</span>
          <span className="ml-3">© 2026 — Todos os direitos reservados</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">Termos</a>
          <a href="#" className="hover:text-foreground">Contato</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Protocolos />
      <Ciencia />
      <Processo />
      <Planos />
      <CTA />
      <Footer />
    </main>
  );
}
