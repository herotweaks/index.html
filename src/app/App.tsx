import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { MessageCircle, Twitter, Star, ChevronRight, Phone, Calendar, Users, Zap, Shield, Monitor } from "lucide-react";
import heroLogo from "@/imports/image.png";
import feedback1 from "@/imports/image-1.png";
import feedback2 from "@/imports/image-2.png";
import feedback3 from "@/imports/image-3.png";
import feedback4 from "@/imports/image-4.png";
import feedback5 from "@/imports/image-5.png";
import feedback6 from "@/imports/image-6.png";
import feedback7 from "@/imports/image-7.png";
import feedback8 from "@/imports/image-8.png";
import feedback9 from "@/imports/image-9.png";

type Tab = "home" | "feedbacks" | "agendamento";

const feedbacks = [
  {
    user: "davizrrk1",
    date: "19/06/2026",
    text: "otimizacao 10 de 10, salvou minha bomba aumentou cerca de 100 fps, o nome delay nao existe mais",
    img: feedback1,
    platform: "discord",
  },
  {
    user: "kauanzinho.00",
    date: "14/06/2026",
    text: "muito obrigado, otima otimizaçao salvou minha batata gamer, simplesmente da agua pro vinho",
    img: feedback2,
    platform: "discord",
  },
  {
    user: "euphzxn",
    date: "14/06/2026",
    text: "muito obrigado pela otimização, salvou muito meus fps, ganhei +40 fps em jogos competitivos, tmj @HeroTweaks",
    img: feedback3,
    platform: "discord",
  },
  {
    user: "Fly™",
    date: "14/06/2026",
    text: "Otimização muito boa",
    img: feedback4,
    platform: "discord",
  },
  {
    user: "Nepew",
    date: "14/06/2026",
    text: "Muito obrigado por essa otimização incrível",
    img: feedback5,
    platform: "discord",
  },
  {
    user: "MagrãoZL",
    date: "14/06/2026",
    text: "otimização perfeita, deixou o meu pc insano além de ter realizado a montagem presencialmente",
    img: feedback6,
    platform: "discord",
  },
  {
    user: "v",
    date: "14/06/2026",
    text: "opa hero tudo certo? sua otm salvou meu pc dmssss kk, meu pc é uma batata literal com uma rx580 e um i5 de 4ª, rodou tudo sem lag e travamentosss vlw dmsss hero",
    img: feedback7,
    platform: "discord",
  },
  {
    user: "ass 🍎 STK",
    date: "14/06/2026",
    text: "slk irmão salvouuu muito de verdade mesmo, sua otimização salvou, eu complemente em FPS, estabilidade de FPS principalmente, não tá caindo o FPS de forma alguma, muitíssimo obrigado, salvou muito",
    img: feedback8,
    platform: "discord",
  },
  {
    user: "@Gustavofj7",
    date: "Nov 12, 2025",
    text: "10/10 otimização do @herotweaks jogo tá liso",
    img: feedback9,
    platform: "twitter",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <ImageWithFallback
              src={heroLogo}
              alt="HeroTweaks logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Tabs */}
          <div className="flex items-center gap-1">
            {(["home", "feedbacks", "agendamento"] as Tab[]).map((tab) => {
              const labels: Record<Tab, string> = {
                home: "Início",
                feedbacks: "Feedbacks",
                agendamento: "Agendamento",
              };
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main>
        {activeTab === "home" && <HomeSection onNavigate={setActiveTab} />}
        {activeTab === "feedbacks" && <FeedbacksSection />}
        {activeTab === "agendamento" && <AgendamentoSection />}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ImageWithFallback
            src={heroLogo}
            alt="HeroTweaks"
            className="h-8 w-auto object-contain opacity-60"
          />
          <p className="text-muted-foreground text-sm text-center">
            © Todos os direitos reservados 2026 HeroTweaks
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/herotweaks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://discord.gg/5Wp4pT4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
          <ImageWithFallback
            src={heroLogo}
            alt="HeroTweaks logo"
            className="w-48 sm:w-64 h-auto object-contain"
          />

          <div className="space-y-4">
            <h1
              className="text-4xl sm:text-6xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.02em" }}
            >
              OTIMIZE SEU PC.
              <br />
              <span className="text-primary">ELEVE SEU JOGO.</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
              Especialistas em otimização de Windows e hardware para máximo desempenho nos jogos. Mais FPS, zero travamento, performance real.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate("agendamento")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-semibold rounded hover:bg-white/80 transition-colors"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em", fontSize: "1rem" }}
            >
              AGENDAR AGORA
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => onNavigate("feedbacks")}
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 font-semibold rounded hover:bg-white/5 transition-colors"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em", fontSize: "1rem" }}
            >
              VER FEEDBACKS
              <Star size={18} />
            </button>
          </div>

          {/* stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            {[
              { value: "BIOS", label: "Alterações que realmente fazem diferença" },
              { value: "1000+", label: "Feedbacks verificados" },
              { value: "100%", label: "Clientes satisfeitos" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              O QUE FAZEMOS
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Serviços completos para tirar o máximo do seu hardware e deixar tudo rodando no limite.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={28} className="text-primary" />,
                title: "Otimização de Windows",
                desc: "Limpeza profunda do sistema, desativação de processos desnecessários e ajuste fino para máximo desempenho.",
              },
              {
                icon: <Monitor size={28} className="text-primary" />,
                title: "Boost de FPS",
                desc: "Configurações avançadas de GPU, CPU e memória para extrair o máximo de FPS nos seus jogos favoritos.",
              },
              {
                icon: <Shield size={28} className="text-primary" />,
                title: "Eliminação de Lag",
                desc: "Redução de latência, otimização de rede e eliminação de stutters para uma experiência fluida e sem travamentos.",
              },
              {
                icon: <Calendar size={28} className="text-primary" />,
                title: "Atendimento Presencial",
                desc: "Visita técnica para montagem, manutenção e otimização do seu setup completo, do jeito certo.",
              },
              {
                icon: <Users size={28} className="text-primary" />,
                title: "Suporte Dedicado",
                desc: "Acompanhamento pós-serviço via Discord e WhatsApp para garantir que tudo continue funcionando perfeitamente.",
              },
              {
                icon: <Star size={28} className="text-primary" />,
                title: "Resultados Reais",
                desc: "Clientes reais relatam ganhos de +40 a +100 FPS. Sem promessas vazias, só performance comprovada.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="mb-4">{s.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-xl overflow-hidden p-10 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              PRONTO PARA TURBINAR SEU PC?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Entre em contato agora mesmo e agende sua otimização. Atendimento rápido e resultado garantido.
            </p>
            <button
              onClick={() => onNavigate("agendamento")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-3 font-semibold rounded hover:bg-white/80 transition-colors"
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em", fontSize: "1rem" }}
            >
              AGENDAR AGORA
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function FeedbacksSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            FEEDBACKS DOS CLIENTES
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Resultados reais de quem já otimizou o PC com a HeroTweaks.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {feedbacks.map((fb) => (
            <div key={fb.user} className="break-inside-avoid">
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                <ImageWithFallback
                  src={fb.img}
                  alt={`Feedback de ${fb.user}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Quer adicionar seu feedback?{" "}
            <a
              href="https://discord.gg/5Wp4pT4x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Acesse nosso Discord
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function AgendamentoSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            AGENDAMENTO
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Entre em contato pelos canais abaixo para agendar sua otimização. Atendemos com hora marcada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511980596585"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-4 hover:border-green-500/40 hover:bg-green-900/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-600/10 border border-green-600/20 group-hover:border-green-500/50 transition-colors">
              <Phone size={26} className="text-green-500" />
            </div>
            <div className="text-center">
              <p
                className="font-bold text-lg mb-1 group-hover:text-green-400 transition-colors"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                WHATSAPP
              </p>
              <p className="text-muted-foreground text-sm">Somente agendamentos</p>
              <p className="text-foreground font-medium mt-2 text-sm">+55 11 98059-6585</p>
            </div>
          </a>

          {/* Discord */}
          <a
            href="https://discord.gg/5Wp4pT4x"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-4 hover:border-indigo-500/40 hover:bg-indigo-900/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-indigo-600/10 border border-indigo-600/20 group-hover:border-indigo-500/50 transition-colors">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
            </div>
            <div className="text-center">
              <p
                className="font-bold text-lg mb-1 group-hover:text-indigo-400 transition-colors"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                DISCORD
              </p>
              <p className="text-muted-foreground text-sm">Comunidade & suporte</p>
              <p className="text-foreground font-medium mt-2 text-sm">discord.gg/5Wp4pT4x</p>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/herotweaks"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-4 hover:border-sky-500/40 hover:bg-sky-900/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-sky-600/10 border border-sky-600/20 group-hover:border-sky-500/50 transition-colors">
              <Twitter size={26} className="text-sky-400" />
            </div>
            <div className="text-center">
              <p
                className="font-bold text-lg mb-1 group-hover:text-sky-400 transition-colors"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                TWITTER / X
              </p>
              <p className="text-muted-foreground text-sm">Novidades & updates</p>
              <p className="text-foreground font-medium mt-2 text-sm">@herotweaks</p>
            </div>
          </a>
        </div>

        {/* Instructions */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3
            className="font-bold text-xl mb-6"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            COMO FUNCIONA O AGENDAMENTO
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
            {[
              {
                step: "01",
                title: "Entre em contato",
                desc: "Mande uma mensagem no WhatsApp ou Discord informando que deseja agendar uma otimização.",
              },
              {
                step: "02",
                title: "Informe seu setup",
                desc: "Descreva seu PC (processador, placa de vídeo, memória RAM) para que possamos preparar o melhor serviço.",
              },
              {
                step: "03",
                title: "Confirme a data",
                desc: "Escolha um horário disponível e confirme o agendamento. Atendimentos online e presenciais disponíveis.",
              },
              {
                step: "04",
                title: "Receba os resultados",
                desc: "Após a otimização, você vai notar a diferença imediatamente — mais FPS, menos lag, PC novo.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span
                  className="text-3xl font-bold text-primary shrink-0"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/5511980596585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 font-bold rounded-lg transition-colors"
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em", fontSize: "1rem" }}
          >
            <Phone size={20} />
            AGENDAR VIA WHATSAPP
          </a>
          <p className="text-muted-foreground text-xs mt-3">
            WhatsApp somente para agendamentos • +55 11 98059-6585
          </p>
        </div>
      </div>
    </section>
  );
}
