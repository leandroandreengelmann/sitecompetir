import type { Metadata } from "next"
import { Inter, Bangers } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Shell } from "@/components/layout/shell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
  display: "swap",
})

const SITE_URL = "https://competir.esp.br"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "COMPETIR — Gestão de Campeonatos de JiuJitsu",
  description:
    "Crie, gerencie e monetize seus campeonatos de JiuJitsu. Inscrições online, PIX integrado, chaveamento inteligente gerado em 1 clique. Sem planilha, sem bagunça.",
  keywords: [
    "sistema campeonato jiujitsu",
    "software torneio artes marciais",
    "inscrição online campeonato bjj",
    "chaveamento bjj online",
    "gestão eventos esportivos",
    "organizar torneio jiu-jitsu",
    "sistema inscrição bjj",
    "software campeonato judô karatê",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "COMPETIR",
    title: "COMPETIR — Gestão de Campeonatos de JiuJitsu",
    description:
      "Inscrições online, PIX integrado e chaveamento inteligente em 1 clique. Sem planilha, sem bagunça.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COMPETIR — Gestão profissional de campeonatos de JiuJitsu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COMPETIR — Gestão de Campeonatos de JiuJitsu",
    description:
      "Inscrições online, PIX integrado e chaveamento inteligente em 1 clique.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${bangers.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Shell>{children}</Shell>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
