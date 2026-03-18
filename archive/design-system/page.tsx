import Link from "next/link"
import {
  Palette,
  TextT,
  SquaresFour,
  Star,
  Ruler,
  Sparkle,
  ArrowRight,
  GitBranch,
  Stack,
  Rows,
  CornersIn,
  ClipboardText,
  NavigationArrow,
  ChartBar,
  Bell,
  ChatText,
  Layout,
  Coin,
  Lightning,
  Devices,
  Screencast,
  Moon,
  Wheelchair,
} from "@phosphor-icons/react/dist/ssr"

const sections = [
  {
    group: "Fundamentos",
    items: [
      { icon: Palette,         title: "Cores",          description: "Paleta com tokens semânticos, escalas e suporte a dark mode.",                  href: "/colors",      tag: "60-30-10" },
      { icon: TextT,           title: "Tipografia",     description: "Inter com Modular Scale (Major Third 1.25). Hierarquia e tracking.",             href: "/typography",  tag: "Modular Scale" },
      { icon: Ruler,           title: "Espaçamento",    description: "Grid de 4px. Gap, padding e margin consistentes em todo o sistema.",             href: "/spacing",     tag: "4px Grid" },
      { icon: Rows,            title: "Grid & Layout",  description: "Sistema de colunas, containers e templates de página responsivos.",              href: "/grid",        tag: "12 cols" },
      { icon: Stack,           title: "Elevação",       description: "6 níveis de sombra e escala de z-index para organizar camadas da UI.",           href: "/elevation",   tag: "z-index" },
      { icon: CornersIn,       title: "Bordas",         description: "Espessuras, estilos, raios e divisores para contornos consistentes.",            href: "/borders",     tag: "Radius" },
      { icon: Coin,            title: "Tokens",         description: "Todos os design tokens semânticos prontos para exportação.",                     href: "/tokens",      tag: "DTCG" },
      { icon: Lightning,       title: "Motion",         description: "Durações, curvas de easing e animações de entrada com Tailwind.",                href: "/motion",      tag: "Easing" },
      { icon: Devices,         title: "Breakpoints",    description: "Breakpoints mobile-first e padrões responsivos com Tailwind.",                   href: "/breakpoints", tag: "Mobile First" },
      { icon: Moon,            title: "Dark Mode",      description: "Tokens semânticos para temas claro e escuro com next-themes.",                   href: "/dark-mode",   tag: "next-themes" },
    ],
  },
  {
    group: "Componentes",
    items: [
      { icon: SquaresFour,     title: "Componentes",    description: "Buttons, Cards, Inputs, Badges, Alerts, Tabs e muito mais prontos para uso.",    href: "/components",  tag: "shadcn/ui" },
      { icon: ClipboardText,   title: "Formulários",    description: "Campos, validação inline, agrupamentos e layouts de formulário completos.",       href: "/forms",       tag: "Validação" },
      { icon: NavigationArrow, title: "Navegação",      description: "Sidebar, tabs, breadcrumbs, pagination e steppers documentados.",                href: "/navigation",  tag: "Patterns" },
      { icon: Bell,            title: "Feedback",       description: "Toasts, banners, dialogs de confirmação, estados vazios e de progresso.",        href: "/feedback",    tag: "Notificações" },
      { icon: Screencast,      title: "Estados",        description: "Default, hover, focus, disabled e loading para cada componente.",                href: "/states",      tag: "7 States" },
      { icon: Star,            title: "Ícones",         description: "Phosphor Icons com todos os pesos: Regular, Bold, Fill, Duotone, Light e Thin.", href: "/icons",       tag: "Phosphor" },
    ],
  },
  {
    group: "UX & Padrões",
    items: [
      { icon: Sparkle,         title: "Princípios UX",  description: "Hick's, Fitts', Miller's, Jakob's e mais de 20 leis aplicadas ao design.",       href: "/principles",  tag: "UX Laws" },
      { icon: GitBranch,       title: "Padrões",        description: "Padrões de composição: forms, tabelas, modals e navegação.",                     href: "/patterns",    tag: "Composition" },
      { icon: ChartBar,        title: "Data Viz",       description: "Paleta de gráficos, tipos de visualização e princípios para comunicar dados.",   href: "/data-viz",    tag: "Charts" },
      { icon: ChatText,        title: "Writing",        description: "Tom de voz, microcopy, labels de botão e regras de capitalização.",              href: "/writing",     tag: "Copy" },
      { icon: Layout,          title: "Templates",      description: "Layouts prontos: dashboard, settings, auth, lista e detalhe.",                   href: "/templates",   tag: "Layouts" },
      { icon: Wheelchair,      title: "Acessibilidade", description: "WCAG 2.1, contraste, navegação por teclado e checklist de acessibilidade.",      href: "/accessibility", tag: "WCAG 2.1" },
    ],
  },
]

export default function HomePage() {
  const totalPages = sections.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
          <Sparkle size={12} weight="fill" />
          Next.js 15 · shadcn/ui · Tailwind v4 · Phosphor Icons
        </div>
        <h1 className="text-[3.052rem] font-bold tracking-tight text-foreground leading-[1.15] mb-4">
          Design System
        </h1>
        <p className="text-[1.25rem] text-muted-foreground leading-relaxed max-w-2xl">
          Um sistema de design completo e consistente. Cores, tipografia, componentes
          e padrões documentados e prontos para uso.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { value: String(totalPages), label: "Seções documentadas" },
          { value: "44",               label: "Componentes UI" },
          { value: "800+",             label: "Ícones" },
          { value: "WCAG AA",          label: "Acessibilidade" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
            <p className="text-[1.953rem] font-bold text-foreground leading-none">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Grupos de seções */}
      <div className="space-y-10">
        {sections.map((group) => (
          <div key={group.group}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {group.group}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((section) => {
                const Icon = section.icon
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon size={18} weight="duotone" className="text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {section.tag}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver documentação
                      <ArrowRight size={12} weight="bold" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
