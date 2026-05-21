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
    <header className="sticky top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center">
            <Dna className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">BDL <span className="text-muted-foreground font-normal">— BIOGENE</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#protocolos" className="hover:text-foreground transition-colors">Protocolos</a>
          <a href="#ciencia" className="hover:text-foreground transition-colors">Ciência</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
          
        </nav>
        <a href="#protocolos" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          Ver protocolos
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 lg:pt-32 lg:pb-32 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Genética de precisão — 2026
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Sua genética.<br />
            <span className="text-gradient">Seu protocolo.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Identificamos os genes que regulam seu metabolismo, sua estética e sua performance.
            Cada protocolo é desenhado a partir do que está escrito no seu DNA — não em um manual genérico.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#protocolos" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-primary">
              Iniciar minha análise
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#ciencia" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors">
              Como funciona
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-6 text-sm text-muted-foreground">
            <div><div className="text-foreground font-display font-semibold text-2xl">+120</div>marcadores</div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-foreground font-display font-semibold text-2xl">98%</div>precisão</div>
            <div className="h-10 w-px bg-border" />
            <div><div className="text-foreground font-display font-semibold text-2xl">14d</div>de resultado</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <img
            src={heroDna}
            alt="Hélice de DNA"
            width={1536}
            height={1280}
            className="relative rounded-2xl border border-border shadow-elevated"
          />
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-border bg-background p-4 shadow-elevated max-w-[240px]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Gene FTO</div>
            <div className="font-display font-semibold text-xl mt-1">Variante AA</div>
            <div className="text-xs text-primary mt-1">Predisposição a gordura visceral</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const protocolos = [
  { icon: Sparkles, title: "Estética", desc: "Genes de colágeno, elastina e estresse oxidativo. Protocolos para pele, cabelo e celulite alinhados ao seu DNA.", tags: ["MMP1", "COL1A1", "SOD2"] },
  { icon: Flame, title: "Emagrecimento", desc: "Mapeamos metabolismo de gorduras, resposta à insulina e saciedade para um plano alimentar verdadeiramente seu.", tags: ["FTO", "MC4R", "PPARG"] },
  { icon: Activity, title: "Performance", desc: "Tipo de fibra muscular, recuperação, VO₂ e risco de lesão. Treino prescrito pela sua biologia.", tags: ["ACTN3", "ACE", "IL6"] },
];

function Protocolos() {
  return (
    <section id="protocolos" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Três frentes. Um DNA.</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Protocolos escritos no <span className="text-gradient">seu código</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {protocolos.map(({ icon: Icon, title, desc, tags }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-soft transition-all">
              <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center mb-6">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-foreground border border-border">
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
    <section id="ciencia" className="py-24 lg:py-32 border-t border-border bg-subtle">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={performance}
            alt="DNA envolvendo silhueta atlética"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-2xl border border-border shadow-elevated"
          />
          <div className="absolute top-5 right-5 rounded-xl border border-border bg-background px-4 py-3 shadow-soft">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">VO₂ máx.</div>
            <div className="font-display font-semibold text-2xl text-gradient">62 ml/kg</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Ciência aplicada</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
            Mais de <span className="text-gradient">120 marcadores</span> genéticos analisados.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sequenciamos regiões-chave do seu genoma em laboratório certificado e cruzamos com a literatura mais atual em
            nutrigenômica, dermatogenética e fisiologia do exercício.
          </p>
          <ul className="space-y-3">
            {[
              "Painel completo de SNPs validados clinicamente",
              "Relatório interativo com explicação por gene",
              "Acompanhamento com equipe médica e nutricional",
              "Dados criptografados — você é o dono da sua informação",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary grid place-items-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-foreground">{t}</span>
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
    <section id="processo" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">Processo</div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">Simples como uma <span className="text-gradient">amostra</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ n, icon: Icon, title, desc }) => (
            <div key={n} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between mb-6">
                <div className="h-11 w-11 rounded-lg bg-primary/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{n}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTA() {
  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center">
          <img src={lab} alt="" aria-hidden width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Pare de seguir <span className="text-gradient">a média</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Seu corpo já tem as respostas. Nós só ajudamos você a ouvi-las.
            </p>
            <a href="#protocolos" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-primary">
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
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-primary grid place-items-center">
            <Dna className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-foreground">BDL <span className="text-muted-foreground font-normal">— BIOGENE</span></span>
          <span className="ml-3">© 2026</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Protocolos />
      <Ciencia />
      <Processo />
      
      <CTA />
      <Footer />
    </main>
  );
}
