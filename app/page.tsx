import Image from "next/image"
import {
  ClipboardText,
  CurrencyDollar,
  TreeStructure,
  Users,
  ChartBar,
  DeviceMobile,
  CheckCircle,
  ArrowRight,
  Table,
  Clock,
  WarningCircle,
  CurrencyDollarSimple,
  TrendDown,
  Ghost,
} from "@phosphor-icons/react/dist/ssr"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { AccentRotator } from "@/components/landing/accent-rotator"
import { NavClient } from "@/components/landing/nav-client"
import { Reveal } from "@/components/landing/reveal"

/* ─── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#D5D7DA 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-[clamp(40px,6vw,76px)] font-black text-[#181D27] leading-[1.05] tracking-tight mb-6">
          Seus campeonatos de JiuJitsu,{" "}
          <span className="transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            profissionalizados.
          </span>
        </h1>

        <p className="text-lg text-[#717680] max-w-2xl mx-auto leading-relaxed mb-10">
          Inscrições online, PIX integrado e chaveamento inteligente gerado em 1 clique.
          Sem planilha, sem bagunça, sem dor de cabeça.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <a
            href="https://wa.me/556697249532"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-700 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--c-accent)" }}
          >
            Crie seu primeiro evento grátis, fale com a gente
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Problem ─────────────────────────────────────────────────────────────── */
const PAINS = [
  { icon: Table, text: "Planilhas de Excel impossíveis de manter com 200 atletas" },
  { icon: Clock, text: "Horas montando chaveamento manual — e ainda erra na hora" },
  { icon: WarningCircle, text: "Atletas da mesma academia na mesma chave na primeira rodada" },
  { icon: CurrencyDollarSimple, text: "PIX avulso sem controle: não sabe quem pagou, quem não pagou" },
  { icon: TrendDown, text: "Nenhum relatório financeiro para prestação de contas" },
  { icon: Ghost, text: "Atletas que somem sem pagar e você só descobre no dia do evento" },
]

function Problem() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            O problema
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-4">
            Ainda gerenciando campeonato em planilha?
          </h2>
          <p className="text-[#717680] text-lg max-w-xl mb-12">
            Você passa mais tempo organizando o evento do que sendo o organizador. Isso tem que mudar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.text} delay={i * 70}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-[#E9EAEB] bg-white hover:border-[#D5D7DA] hover:shadow-sm transition-all">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-700"
                    style={{ background: "var(--c-accent-12)", color: "var(--c-accent)" }}
                  >
                    <Icon size={22} weight="duotone" />
                  </div>
                  <p className="text-sm text-[#414651] leading-relaxed pt-1.5">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Features ────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: ClipboardText,
    title: "Inscrições Online Profissionais",
    desc: "Página pública do evento com link para compartilhar no WhatsApp e Instagram. Atletas se inscrevem pelo celular em menos de 2 minutos.",
  },
  {
    icon: CurrencyDollar,
    title: "PIX Integrado",
    desc: "Cobrança automática, dinheiro direto na sua conta. Relatório em tempo real de quem pagou e quem ainda deve.",
  },
  {
    icon: TreeStructure,
    title: "Chaveamento Inteligente",
    desc: "Gerado em 1 clique. Algoritmo garante que atletas da mesma academia só se encontrem nas fases finais. PDF pronto para imprimir.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Gestão de Atletas",
    desc: "Cadastro centralizado com faixa, peso e histórico. Inscreva uma academia inteira em lote — sem digitar um por um.",
  },
  {
    icon: ChartBar,
    title: "Relatórios Completos",
    desc: "Receita total, taxas, saldo a receber, atletas por categoria. Lista de presença exportável em PDF para o dia do evento.",
  },
  {
    icon: DeviceMobile,
    title: "Painel do Atleta",
    desc: "Cada competidor vê suas inscrições e campeonatos pelo celular. Sem precisar baixar nenhum aplicativo.",
  },
]

function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            Funcionalidades
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-4">
            Tudo que seu evento precisa, em um só lugar
          </h2>
          <p className="text-[#717680] text-lg max-w-xl mb-12">
            Do cadastro do evento até o chaveamento no dia — o COMPETIR gerencia tudo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.title} delay={i * 60}>
                <Card
                  className={`h-full hover:-translate-y-0.5 transition-transform ${f.highlight ? "ring-2" : ""}`}
                  style={f.highlight ? { "--tw-ring-color": "var(--c-accent-66)" } as React.CSSProperties : {}}
                >
                  <CardHeader>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-1 transition-all duration-700"
                      style={{ background: "var(--c-accent-15)", color: "var(--c-accent)" }}
                    >
                      <Icon size={18} weight="duotone" />
                    </div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-[#181D27]">{f.title}</CardTitle>
                      {f.highlight && (
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide transition-all duration-700"
                          style={{ background: "var(--c-accent-15)", color: "var(--c-accent)" }}
                        >
                          Único
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#717680] leading-relaxed text-sm">
                      {f.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Chaveamento spotlight ───────────────────────────────────────────────── */
function Chaveamento() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-5">
            Chaveamento inteligente gerado em{" "}
            <span className="transition-colors duration-700" style={{ color: "var(--c-accent)" }}>1 clique</span>
          </h2>
          <p className="text-[#717680] text-lg leading-relaxed mb-8">
            O único sistema do mercado que garante que atletas da mesma academia
            só se encontrem nas fases finais. Acabou a confusão antes mesmo de começar.
          </p>
        </Reveal>

        <div className="space-y-3">
          {[
            "Algoritmo avançado — nenhuma academia repete no bracket",
            "Zero BYE vs BYE no chaveamento",
            "Gerado em segundos após fechar inscrições",
            "PDF profissional pronto para imprimir no tatame",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="shrink-0 mt-0.5 transition-colors duration-700"
                  style={{ color: "var(--c-accent)" }}
                />
                <span className="text-[#414651] text-sm leading-relaxed">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How it works ────────────────────────────────────────────────────────── */
const STEPS = [
  { n: "01", title: "Entre em contato e nós criamos a sua conta", desc: "Atendimento humano via WhatsApp. Sem formulários intermináveis." },
  { n: "02", title: "Cadastre seu evento", desc: "Nome, data, local, imagem e regulamento do campeonato." },
  { n: "03", title: "Nós configuramos as categorias para você", desc: "Peso, faixa, idade — a gente cuida da estrutura do seu evento." },
  { n: "04", title: "Compartilhe o link", desc: "Um link único para WhatsApp e Instagram. Atletas se inscrevem no celular." },
  { n: "05", title: "Receba as inscrições na sua conta", desc: "Dinheiro direto na sua conta. Painel em tempo real de pagamentos." },
  { n: "06", title: "Gere o chaveamento", desc: "1 clique. Algoritmo inteligente. PDF profissional." },
  { n: "07", title: "Seja o melhor organizador da região", desc: "Evento profissional, atletas satisfeitos, você no controle total." },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            Como funciona
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-4">
            Do zero ao campeonato em 7 passos
          </h2>
          <p className="text-[#717680] text-lg leading-relaxed">
            Configure seu primeiro evento em menos de 10 minutos. Sem tutoriais intermináveis, sem suporte por formulário.
          </p>
        </Reveal>

        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <div className="flex gap-4 pb-6 relative">
                {i < STEPS.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#E9EAEB]" />
                )}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 z-10 transition-all duration-700"
                  style={
                    i === STEPS.length - 1
                      ? { background: "var(--c-accent)", color: "#fff" }
                      : { background: "#fff", border: "1px solid #E9EAEB", color: "#A4A7AE" }
                  }
                >
                  {step.n}
                </div>
                <div className="pt-1.5">
                  <p className="text-sm font-semibold text-[#181D27] mb-0.5">{step.title}</p>
                  <p className="text-sm text-[#717680]">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─────────────────────────────────────────────────────────────── */
const PLAN_FEATURES = [
  "Eventos ilimitados",
  "Atletas ilimitados por evento",
  "Chaveamento inteligente em 1 clique",
  "PIX integrado — receba na hora",
  "Relatórios e exportação em PDF",
  "Painel do atleta mobile-first",
  "Suporte via WhatsApp",
  "Sem instalação — 100% pelo browser",
]

function Pricing() {
  return (
    <section id="preços" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            Preços
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-4">
            Sem mensalidade. Sem risco.
          </h2>
          <p className="text-[#717680] text-lg mb-12">
            Você só paga quando tem inscrições. Uma taxa por atleta inscrito — o organizador não paga nada adiantado.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="rounded-xl border-2 bg-white overflow-hidden text-left transition-all duration-700"
            style={{ borderColor: "var(--c-accent)" }}
          >
            <div className="px-8 pt-8 pb-6 border-b border-[#E9EAEB]">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-5xl font-black text-[#181D27]">R$ 0</span>
                <span className="text-[#717680] mb-1.5">por mês</span>
              </div>
              <p className="text-sm text-[#717680]">
                Taxa por atleta inscrito · fale conosco para valores
              </p>
            </div>

            <div className="px-8 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {PLAN_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={16} weight="fill" className="shrink-0 transition-colors duration-700" style={{ color: "var(--c-accent)" }} />
                    <span className="text-sm text-[#414651]">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/556697249532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-base font-semibold text-white transition-all duration-700 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--c-accent)" }}
              >
                Crie seu primeiro evento grátis, fale com a gente
                <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── FAQ ─────────────────────────────────────────────────────────────────── */
const FAQS = [
  { q: "É complicado de usar?", a: "Configure seu primeiro evento em menos de 10 minutos. Nosso suporte via WhatsApp fica do seu lado durante todo o processo — sem chatbot, sem formulário." },
  { q: "Meus atletas vão conseguir se inscrever?", a: "Atletas se inscrevem pelo celular sem precisar baixar app. Basta compartilhar o link do evento no WhatsApp ou Instagram. O processo leva menos de 2 minutos." },
  { q: "Quanto custa exatamente?", a: "Você só paga quando tem inscrições. Sem mensalidade fixa, sem risco. Uma pequena taxa é adicionada ou descontada por atleta inscrito. Entre em contato para saber os valores exatos." },
  { q: "E se eu já tenho planilha funcionando?", a: "Sua planilha não cobra os atletas automaticamente, não gera chaveamento, não avisa quem não pagou e não produz relatório financeiro. O COMPETIR faz tudo isso." },
  { q: "E se der problema no dia do evento?", a: "Suporte via WhatsApp disponível no dia do evento. O chaveamento vem em PDF para você ter impresso como backup — zero dependência de internet no tatame." },
  { q: "Funciona para outros esportes além de JiuJitsu?", a: "Sim. Qualquer esporte com categorias por faixa, peso ou idade: Judô, Karatê, Wrestling, Boxe, Submission Grappling." },
  { q: "Meus dados estão seguros?", a: "Banco de dados criptografado, autenticação segura com OTP, isolamento por tenant. Hospedagem na Vercel com 99.9% de uptime." },
]

function FAQ() {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-700" style={{ color: "var(--c-accent)" }}>
            Dúvidas frequentes
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-[#181D27] leading-tight mb-12">
            Respondemos sem enrolação
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion>
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-[#181D27] font-medium text-sm py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#717680] leading-relaxed text-sm">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── CTA final ───────────────────────────────────────────────────────────── */
function CTAFinal() {
  return (
    <section
      id="comecar"
      className="py-28 px-6 text-white transition-all duration-700"
      style={{ background: "var(--c-accent)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-[clamp(32px,5vw,64px)] font-black leading-tight mb-5">
            Pronto para profissionalizar seu campeonato?
          </h2>
          <p className="text-lg opacity-80 mb-10 leading-relaxed">
            Comece agora. Crie seu primeiro evento grátis.
            Sem cartão de crédito, sem burocracia.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/556697249532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold bg-white hover:bg-white/90 transition-all hover:-translate-y-0.5"
              style={{ color: "var(--c-accent)" }}
            >
              Crie seu primeiro evento grátis, fale com a gente
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[#E9EAEB] bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <Image src="/logo.png" alt="Competir Logo" width={240} height={60} className="w-auto h-12 mb-2" />
          <p className="text-xs text-[#A4A7AE] mt-0.5">Gestão profissional de campeonatos esportivos</p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {[
            { label: "Funcionalidades", href: "#funcionalidades" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Preços", href: "#preços" },
            { label: "Contato", href: "https://wa.me/556697249532" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-[#A4A7AE] hover:text-[#414651] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-[#D5D7DA]">© 2026 COMPETIR. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

/* ─── JSON-LD Schema ──────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://competir.esp.br/#organization",
      name: "COMPETIR",
      url: "https://competir.esp.br",
      logo: "https://competir.esp.br/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "COMPETIR",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "Sistema de gestão de campeonatos de JiuJitsu. Inscrições online, PIX integrado e chaveamento inteligente.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        description: "Sem mensalidade. Taxa por atleta inscrito.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function CompetirPage() {
  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <AccentRotator />
      <NavClient />
      <Hero />
      <Problem />
      <Features />
      <Chaveamento />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  )
}
