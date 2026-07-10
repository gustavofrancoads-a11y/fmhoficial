import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroMobileCropped from "@/assets/hero-mobile-cropped.webp";
import heroAsset from "@/assets/hero.jpg.asset.json";
import frustratedMobileAsset from "@/assets/frustrated-context.jpg.asset.json";
import mentorAsset from "@/assets/mentor-marcelo.jpg.asset.json";
import result1Asset from "@/assets/result1.jpg.asset.json";
import result2Asset from "@/assets/result2.jpg.asset.json";
import result3Asset from "@/assets/result3.jpg.asset.json";
import tanara1Asset from "@/assets/tanara1.jpg.asset.json";
import tanara2Asset from "@/assets/tanara2.jpg.asset.json";
import tanara3Asset from "@/assets/tanara3.jpg.asset.json";
import tanara4Asset from "@/assets/tanara4.jpg.asset.json";
import anapaula1Asset from "@/assets/anapaula1.jpg.asset.json";
import anapaula2Asset from "@/assets/anapaula2.jpg.asset.json";
import anapaula3Asset from "@/assets/anapaula3.jpg.asset.json";
import anapaula4Asset from "@/assets/anapaula4.jpg.asset.json";
import daiane1Asset from "@/assets/daiane1.jpg.asset.json";
import daiane2Asset from "@/assets/daiane2.jpg.asset.json";
import daiane3Asset from "@/assets/daiane3.jpg.asset.json";
import daiane4Asset from "@/assets/daiane4.jpg.asset.json";
import logoDesktopAsset from "@/assets/logo-desktop.png.asset.json";
import logoMobileAsset from "@/assets/logo-mobile.png.asset.json";
import logoWhiteAsset from "@/assets/logo-white.png.asset.json";
import certificateAsset from "@/assets/certificate.jpeg.asset.json";
import quemE1Asset from "@/assets/quemE1.png.asset.json";
import quemE2Asset from "@/assets/quemE2.png.asset.json";
import quemE3Asset from "@/assets/quemE3.png.asset.json";
import paraquemAsset from "@/assets/paraquem2.jpg.asset.json";
import printKatiaAsset from "@/assets/print-katia.png.asset.json";
import printPatriciaAsset from "@/assets/print-patricia.png.asset.json";
import printQueziaAsset from "@/assets/print-quezia.png.asset.json";
import printPriscillaAsset from "@/assets/print-priscilla.png.asset.json";
import bonusAtracaoAsset from "@/assets/bonus-atracao-funil.png.asset.json";
import bonusVendasAsset from "@/assets/bonus-vendas-foto.png.asset.json";
import seloGarantiaAsset from "@/assets/selo-garantia-7dias.png.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const heroImage = heroAsset.url;
const mentorImg = mentorAsset.url;
const resultImgs = [result1Asset.url, result2Asset.url, result3Asset.url];
const tanaraImgs = [tanara1Asset.url, tanara2Asset.url, tanara3Asset.url, tanara4Asset.url];
const anapaulaImgs = [anapaula1Asset.url, anapaula2Asset.url, anapaula3Asset.url, anapaula4Asset.url];
const daianeImgs = [daiane1Asset.url, daiane2Asset.url, daiane3Asset.url, daiane4Asset.url];
const logoDesktop = logoDesktopAsset.url;
const logoMobile = logoMobileAsset.url;
const logoWhite = logoWhiteAsset.url;
const paraquemImg = paraquemAsset.url;
const printImgs = [
  { src: printKatiaAsset.url, name: "Kátia Ribeiro" },
  { src: printPatriciaAsset.url, name: "Patricia Leite" },
  { src: printQueziaAsset.url, name: "Quezia Leal" },
  { src: printPriscillaAsset.url, name: "Priscilla Oliveira" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Formação Micropigmentador Hiper-Realista | Marcelo Alves" },
      {
        name: "description",
        content:
          "Domine a técnica italiana de micropigmentação hiper-realista, cobre até R$1.000 por atendimento e torne-se referência na sua cidade.",
      },
      { property: "og:title", content: "Formação Micropigmentador Hiper-Realista" },
      {
        property: "og:description",
        content:
          "Aprenda design, colorimetria e fixação de fios hiper-realistas com Marcelo Alves.",
      },
      { property: "og:image", content: heroImage },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImage,
        fetchpriority: "high",
        media: "(min-width: 768px)",
      },
      {
        rel: "preload",
        as: "image",
        href: heroMobileCropped,
        fetchpriority: "high",
        media: "(max-width: 767px)",
      },
    ],
  }),

  component: LandingPage,
});

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5561985029362&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20a%20forma%C3%A7%C3%A3o%20de%20micro%20hiper-realista.";
const CHECKOUT_URL = "https://sun.eduzz.com/60EEZQQK03?";

/* ------------------------------ UI Primitives ------------------------------ */

function CtaButton({
  children,
  href = "#inscricao",
  className = "",
  pulse = false,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  pulse?: boolean;
}) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`shimmer-btn group relative inline-flex max-w-full items-center justify-center rounded-full px-6 py-4 md:px-10 md:py-5 text-[0.65rem] md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase text-primary-foreground transition-all duration-500 hover:scale-[1.03] text-center leading-tight ${pulse ? "pulse-gold" : ""} ${className}`}
      style={{
        background: "var(--gradient-gold)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 ml-2 md:ml-3 transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.4em] uppercase text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <h2
      className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-foreground break-words ${align === "center" ? "text-center" : ""}`}
    >
      {children}
    </h2>
  );
}

/* ------------------------------ Reveal Hook ------------------------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ------------------------------ Scroll Progress --------------------------- */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{ width: `${progress}%`, background: "var(--gradient-gold)" }}
      />
    </div>
  );
}

/* --------------------------------- Counter -------------------------------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/* -------------------------------- Countdown ------------------------------- */

function Countdown() {
  const target = useRef(Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 47);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.current - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  const Box = ({ v, l }: { v: string; l: string }) => (
    <div className="flex flex-col items-center">
      <div className="font-display text-4xl md:text-5xl font-light text-primary tabular-nums">
        {v}
      </div>
      <div className="mt-1 text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
        {l}
      </div>
    </div>
  );
  return (
    <div className="inline-flex items-center gap-6 md:gap-10 rounded-2xl glass-card px-8 py-5">
      <Box v={pad(h)} l="Horas" />
      <span className="text-primary/40 text-2xl">:</span>
      <Box v={pad(m)} l="Min" />
      <span className="text-primary/40 text-2xl">:</span>
      <Box v={pad(s)} l="Seg" />
    </div>
  );
}

/* --------------------------------- Icons ---------------------------------- */

function PillarIcon({ kind }: { kind: "design" | "color" | "needle" }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "design")
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-primary">
        <path {...common} d="M6 34c8-6 14-8 20-8s10 2 16 6" />
        <path {...common} d="M10 30c6-10 14-14 22-12" />
        <circle {...common} cx="36" cy="14" r="2" />
      </svg>
    );
  if (kind === "color")
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 text-primary">
        <circle {...common} cx="18" cy="22" r="10" />
        <circle {...common} cx="30" cy="22" r="10" />
        <circle {...common} cx="24" cy="32" r="10" />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 text-primary">
      <path {...common} d="M8 40 L30 18 L34 22 L12 44 Z" transform="translate(0 -4)" />
      <path {...common} d="M30 14 L34 18" />
      <path {...common} d="M36 8 L42 14" />
    </svg>
  );
}

/* --------------------------------- Page ----------------------------------- */

function ResultCard({
  name,
  handle,
  avatar,
  slides,
}: {
  name: string;
  handle: string;
  avatar: string;
  slides: string[];
}) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className="reveal group rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-gold)]">
      <div className="p-5 flex items-center gap-4">
        <div className="h-14 w-14 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/40">
          <img src={avatar} alt={name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-lg truncate">{name}</p>
          <p className="text-primary text-xs tracking-wider mt-1 truncate">{handle}</p>
        </div>
      </div>
      <div className="h-2 w-full" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Resultado ${i + 1} de ${name}`}
              loading="lazy" decoding="async"
              className="w-full h-72 sm:h-80 md:h-96 object-cover shrink-0"
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/70 backdrop-blur text-primary hover:bg-background transition"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full bg-background/70 backdrop-blur text-primary hover:bg-background transition"
        >
          ›
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-1.5 bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />

      {/* Top brand bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <div className="font-display text-sm sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase truncate">
            <span className="text-foreground">Marcelo</span>{" "}
            <span className="text-gold-gradient italic">Alves</span>
          </div>
          <a
            href="#inscricao"
            className="hidden md:inline-flex shrink-0 text-[0.7rem] font-medium tracking-[0.3em] uppercase text-primary hover:text-foreground transition-colors"
          >
            Garantir minha vaga →
          </a>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden min-h-[100svh] bg-background md:min-h-[100dvh] md:h-[100dvh] md:flex md:items-center md:pt-20">
        <div className="absolute inset-0 hidden md:block">
          <img
            src={heroImage}
            alt="Micropigmentador profissional realizando atendimento de sobrancelha hiper-realista"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="hero-zoom hidden md:block h-full w-full object-cover opacity-100"
          />

          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-background via-transparent to-background/40" />
          {/* film grain accent */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, oklch(0.78 0.13 85 / 0.5), transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full bg-background px-4 pb-3 pt-[4.75rem] sm:px-6 md:mx-auto md:flex md:max-w-7xl md:items-center md:bg-transparent md:py-6">
          <div className="max-w-3xl fade-in-down md:max-w-3xl">
            <img
              src={logoWhite}
              alt="Formação Micropigmentador Hiper-Realista"
              className="mb-4 hidden h-20 w-auto md:block"
              loading="eager"
            />
            <h1 className="font-display max-w-[20.5rem] text-[1.6rem] leading-[1.08] sm:text-4xl md:max-w-none md:text-5xl lg:text-6xl font-light tracking-tight break-words">
              A técnica italiana usada por menos de{" "}
              <em className="text-gold-gradient not-italic font-medium">1%</em>{" "}
              das micropigmentadoras — que permite cobrar{" "}
              <em className="text-gold-gradient not-italic font-medium">R$1.000 por atendimento</em>{" "}
              sem depender de desconto, indicação ou sorte
            </h1>

            <p className="mt-3 md:mt-5 max-w-[21rem] md:max-w-xl text-[0.875rem] sm:text-lg text-muted-foreground leading-relaxed font-light">
              Enquanto a maioria compete por preço e se esgota atendendo muito para ganhar pouco, micropigmentadoras que dominam o <span className="text-primary font-medium">hiper-realismo</span> constroem uma agenda fechada, cobram o que querem e são reconhecidas como referência — antes mesmo de completar 6 meses no método.
            </p>


            <div className="mt-5 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <CtaButton href={CHECKOUT_URL}>Inscreva-se</CtaButton>
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {resultImgs.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full object-cover border-2 border-background"
                    />
                  ))}
                </div>
                <span className="font-light">
                  Centenas de alunas formadas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 h-[50svh] min-h-[340px] md:hidden">
          <img
            src={heroMobileCropped}
            alt="Marcelo Alves realizando procedimento de micropigmentação hiper-realista"
            className="block h-full w-full object-cover object-bottom opacity-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1080}
            height={1350}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent" />
        </div>


        {/* scroll cue removed */}
      </header>

      {/* PROBLEM */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="reveal">
            <Eyebrow>O dilema</Eyebrow>
            <SectionTitle>
              Você não aguenta mais trabalhar muito{" "}
              <em className="text-gold-gradient not-italic">e ganhar pouco</em>{" "}
              com a micropigmentação?
            </SectionTitle>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light">
              Você está presa em um ciclo que rouba seu tempo e te frustra.
            </p>
          </div>

          <div className="mt-20 flex flex-col gap-12 md:grid md:grid-cols-2 items-center">
            <div className="relative reveal order-1 md:order-2">
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: "var(--gradient-gold-soft)" }}
              />
              <img
                src={frustratedMobileAsset.url}
                alt="Profissional de micropigmentação frustrada no estúdio"
                loading="lazy" decoding="async"
                width={1024}
                height={1280}
                className="relative rounded-2xl mx-auto max-w-sm w-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="grid gap-4 text-left reveal order-2 md:order-1">
              {[
                "Você não sabe como se diferenciar da concorrência",
                "Acaba competindo por preço e cobrando mais barato",
                "Demora mais do que gostaria nos atendimentos",
                "Atende poucas pessoas que pagam pouco",
              ].map((t, i) => (
                <div
                  key={t}
                  className="glass-card rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl text-primary/60 tabular-nums">
                      0{i + 1}
                    </span>
                    <p className="font-light text-base">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 reveal max-w-3xl mx-auto">
            <div className="hairline w-32 mx-auto mb-8" />
            <p className="font-display text-2xl md:text-3xl font-light leading-tight text-center">
              O problema não é você.{" "}
              <em className="text-gold-gradient not-italic font-medium">
                É que ninguém te ensinou a técnica certa.
              </em>
            </p>

            <div className="mt-10 space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Micropigmentadoras que não crescem não falharam por falta de esforço — falharam porque foram formadas com métodos genéricos que não entregam o resultado visual que justifica um preço alto. A cliente não paga R$800, R$1.000 por atendimento porque você <span className="text-foreground">"é boa"</span>. Ela paga porque o resultado parece impossível de ser feito.
              </p>
              <p>
                E é exatamente isso que a <span className="text-foreground">técnica italiana de hiper-realismo</span> entrega: fios tão naturais, tão precisos, que as próprias clientes não conseguem identificar que é micropigmentação.
              </p>
              <p>
                Quando o resultado fala por si, você para de negociar preço. Para de depender de indicação. E começa a construir uma <span className="text-primary">agenda que se paga</span>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MENTOR */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-5xl grid gap-10 md:gap-16 md:grid-cols-2 items-center">
          <div className="relative reveal">
            <div
              className="absolute -inset-6 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <img
              src={mentorImg}
              alt="Marcelo Alves, mentor da formação"
              loading="lazy" decoding="async"
              width={1024}
              height={1280}
              className="relative rounded-2xl w-full max-w-sm mx-auto object-cover"
            />
          </div>
          <div className="reveal">
            <Eyebrow>Quem vai te ensinar isso</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-light leading-[1.05]">
              Marcelo{" "}
              <em className="text-gold-gradient not-italic">Alves</em>
            </h2>
            <div className="hairline mt-8 w-16" />
            <div className="mt-8 space-y-5 text-muted-foreground font-light leading-relaxed">
              <p>
                Micropigmentador há <span className="text-foreground">14 anos</span>, foi formado pelas maiores referências do Brasil — Alan Spadone e James Olaya — e aprendeu a técnica de hiper-realismo diretamente com seus criadores: <span className="text-foreground">Ennio Orsine e Toni Bellfato</span>.
              </p>
              <p>
                Buscando se aprofundar em casos de correção, fez a especialização em laserterapia com a maior referência mundial em despigmentação a laser, <span className="text-foreground">Dr. André Borring</span>, na primeira escola europeia de laserterapia em Portugal.
              </p>
              <p>
                Não aplica o que ensina em teoria. Aplica no seu studio privado — que fatura mais de{" "}
                <span className="text-foreground">R$40.000 por mês</span>.
              </p>
              <p>
                Hoje forma micropigmentadoras com o mesmo método que usa nos próprios atendimentos: sem atalho, sem técnica genérica, sem "receita de bolo". O que você aprende aqui é o que funciona de verdade na prática real, testado durante mais de uma década.
              </p>
              <p>
                Mais de <span className="text-foreground">500 alunas</span> já passaram pela formação. Os resultados estão abaixo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}

      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: "var(--gradient-gold-soft)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center reveal">
            <Eyebrow>Galeria</Eyebrow>
            <SectionTitle>
              Resultados reais das{" "}
              <em className="text-gold-gradient not-italic">alunas</em>
            </SectionTitle>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { name: "Tanara Miranda", handle: "@magnifictanara", avatar: resultImgs[2], slides: tanaraImgs },
              { name: "Ana Paula C.", handle: "@anapaullacarvalho_01", avatar: resultImgs[0], slides: anapaulaImgs },
              { name: "Daiane Silva", handle: "@daianesilvadesigner", avatar: resultImgs[1], slides: daianeImgs },
            ].map((a) => (
              <ResultCard key={a.name} {...a} />
            ))}
          </div>

          {/* counters */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            {[
              { n: null, s: "", l: "Alunas formadas", text: "Centenas" },
              { n: 12, s: "+", l: "Anos de experiência" },
              { n: 40, s: "k", l: "R$/mês no studio" },
              { n: 98, s: "%", l: "Avaliações 5★" },
            ].map((c) => (
              <div key={c.l} className="text-center">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gold-gradient">
                  {c.n === null ? <span className="text-3xl sm:text-4xl md:text-5xl">{c.text}</span> : <Counter to={c.n} suffix={c.s} />}
                </div>
                <div className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {c.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHO IS IT FOR */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center reveal">
            <Eyebrow>Para você</Eyebrow>
            <SectionTitle>Para quem é a formação?</SectionTitle>
          </div>
          <div className="mt-10 max-w-3xl mx-auto reveal">
            <img
              src={paraquemImg}
              alt="Micropigmentação de sobrancelha hiper-realista"
              loading="lazy" decoding="async"
              className="w-full h-64 md:h-80 rounded-2xl object-cover"
            />
          </div>
          <div className="mt-10 grid gap-5 text-left">
            {[
              "Micropigmentadoras que já atuam na área e querem melhorar a qualidade do seu atendimento para ganhar mais e ser reconhecida",
              "Designers de sobrancelha que querem migrar para a micropigmentação com segurança, sem medo de errar o rosto da cliente",
              "Profissionais da área de saúde/estética que querem entrar no mercado de micropigmentação através de uma fonte confiável e com resultados comprovados",
            ].map((t, i) => (
              <div
                key={t}
                className="reveal glass-card rounded-2xl p-5 md:p-7 flex gap-6 items-start transition hover:border-primary/40"
              >
                <span className="font-display text-3xl text-primary/70 tabular-nums shrink-0">
                  0{i + 1}
                </span>
                <p className="font-light text-lg leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center reveal">
            <Eyebrow>Metodologia FMH</Eyebrow>
            <SectionTitle>
              Três pilares.{" "}
              <em className="text-gold-gradient not-italic">Uma técnica.</em>
            </SectionTitle>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Tudo o que você precisa pra trabalhar menos e ganhar mais é dominar
              três fundamentos.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "design" as const,
                n: "01",
                t: "Design",
                d: "Técnica italiana para te dar segurança absoluta na etapa mais crucial do atendimento — o design.",
                img: quemE1Asset.url,
              },
              {
                icon: "color" as const,
                n: "02",
                t: "Colorimetria",
                d: "Chegue a qualquer tom de pele ou pelo usando apenas 3 cores com um método simples e previsível.",
                img: quemE2Asset.url,
              },
              {
                icon: "needle" as const,
                n: "03",
                t: "Fixação dos fios",
                d: "Crie fios finos, delicados, naturais — sem aspecto artificial, sem estouro.",
                img: quemE3Asset.url,
              },
            ].map((p, i) => (
              <div
                key={p.n}
                className="reveal group glass-card rounded-2xl overflow-hidden text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              >
                <img
                  src={p.img}
                  alt={`Pilar ${p.t}`}
                  loading="lazy" decoding="async"
                  className="w-full h-44 sm:h-56 object-cover"
                />
                <div className="p-6 md:p-10">
                  <div className="flex items-center justify-between">
                    <PillarIcon kind={p.icon} />
                    <span className="font-display text-3xl text-primary/40 tabular-nums">
                      {p.n}
                    </span>
                  </div>
                  <div className="hairline mt-8 w-12" />
                  <h3 className="mt-6 font-display text-3xl font-light">{p.t}</h3>
                  <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center reveal">
            <img
              src={logoWhite}
              alt="Logo FHM"
              className="mx-auto mb-8 h-16 md:h-20 w-auto opacity-90"
            />
            <Eyebrow>Conteúdo</Eyebrow>
            <SectionTitle>
              Tudo o que você vai aprender na{" "}
              <em className="text-gold-gradient not-italic">FMH</em>
            </SectionTitle>
          </div>
          <div className="mt-16 grid gap-2 md:grid-cols-2 text-left reveal">
            {[
              "Design de sobrancelhas",
              "Design e visagismo",
              "Medidas e marcação",
              "Simulação de fios",
              "Fotografia",
              "Consultoria pré-design",
              "Henna ombré",
              "Aplicação de tintura nos pelos — refectocil",
              "Colorimetria e pigmentologia avançada",
              "Degradação das cores",
              "Criação de tons com 3 pigmentos",
              "Peso molecular das cores",
              "Estrela de Oswald (correção de tons)",
              "Correção de tons acinzentados",
              "Correção de tons avermelhados",
              "Pigmentos RB Colors",
              "Pigmentos Iron Works",
              "Fio teste",
              "Retoques e correções",
              "Fios hiper realistas",
              "Fios hiper realistas com dermógrafo",
              "Microblading hiper realista",
              "Tipos de agulha",
              "Tipos de lâminas",
              "Profundidade",
              "Tipos de pele",
              "Exercício peresintético",
              "Exercícios de precisão",
              "Biossegurança",
              "Retoque hiper realista",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-border/40 py-3 transition-colors hover:border-primary/40"
              >
                <span className="font-display text-base md:text-lg text-primary/50 tabular-nums w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Facebook prints */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center reveal">
            <Eyebrow>Provas reais</Eyebrow>
            <SectionTitle>
              Alunas que já aprenderam a{" "}
              <em className="text-gold-gradient not-italic">crescer na área</em>{" "}
              e ganhar mais
            </SectionTitle>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Depoimentos espontâneos publicados no Facebook por alunas que
              passaram pela formação.
            </p>
          </div>

          <div className="mt-16 reveal">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-4">
                {printImgs.map((p) => (
                  <CarouselItem
                    key={p.name}
                    className="pl-4 md:basis-1/2"
                  >
                    <div className="glass-card rounded-2xl p-3 md:p-4 h-full">
                      <img
                        src={p.src}
                        alt={`Depoimento de ${p.name} no Facebook`}
                        className="w-full h-auto rounded-xl"
                        loading="lazy" decoding="async"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>
        </div>
      </section>



      {/* BONUS */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center reveal">
            <Eyebrow>Bônus exclusivo</Eyebrow>
            <SectionTitle>
              Treinamento completo em{" "}
              <em className="text-gold-gradient not-italic">marketing e vendas</em>
            </SectionTitle>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-light text-lg">
              Aprenda a captar interessadas no Instagram e convertê-las em
              clientes pelo WhatsApp. Técnica refinada + estrutura mínima de
              vendas = previsibilidade no seu negócio.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 text-left">
            {[
              {
                t: "Atração",
                lead: "Nunca mais veja a sua agenda vazia.",
                d: "Com essa estratégia você terá uma rotatividade de clientes mensal que vai te trazer a sonhada estabilidade para o seu negócio.",
                img: bonusAtracaoAsset.url,
              },
              {
                t: "Vendas",
                lead: "Apresente seu trabalho com autoridade.",
                d: "Aprenda os segredos para apresentar seu trabalho com técnicas testadas para fidelizar e demonstrar valor. As mesmas que uso no meu centro estético há mais de 10 anos.",
                img: bonusVendasAsset.url,
              },
            ].map((b) => (
              <div
                key={b.t}
                className="reveal glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.t}
                    className="w-full h-full object-cover"
                    loading="lazy" decoding="async"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <p className="text-[0.7rem] tracking-[0.4em] uppercase text-primary">
                    {b.t}
                  </p>
                  <p className="mt-4 font-display text-2xl">{b.lead}</p>
                  <div className="hairline mt-6 w-12" />
                  <p className="mt-6 text-muted-foreground font-light leading-relaxed">
                    {b.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center reveal">
            <Eyebrow>Depoimentos</Eyebrow>
            <SectionTitle>
              O que dizem nossas{" "}
              <em className="text-gold-gradient not-italic">alunas</em>
            </SectionTitle>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3 text-left">
            {[
              {
                name: "Tanara Miranda",
                role: "Especialista em micropigmentação",
                img: resultImgs[2],
                videoId: "rh0P7GPmfAw",
                t: "Desisti de estudar para carreira pública e me tornei especialista em design e micropigmentação. Hoje chego a faturar R$20.000 por mês.",
              },
              {
                name: "Ana Paula C.",
                role: "Micropigmentadora",
                img: resultImgs[0],
                videoId: "y3BQKruLkDw",
                t: "Lotei minha agenda como designer e, no primeiro mês como micropigmentadora, ganhei mais de R$10.000.",
              },
              {
                name: "Vera Lúcia",
                role: "Micropigmentadora",
                img: resultImgs[1],
                videoId: "61p2K_JfkCs",
                t: "Já atuava na área há alguns anos mas não conseguia crescer. Em poucos meses quadrupliquei o meu faturamento.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1`}
                    title={`Depoimento de ${t.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="p-5 md:p-8">
                  <div className="flex text-primary text-sm">★★★★★</div>
                  <p className="mt-5 font-light text-base leading-relaxed text-foreground/90">
                    “{t.t}”
                  </p>
                  <div className="hairline mt-7 w-12" />
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-12 w-12 rounded-full object-cover border border-primary/40"
                    />
                    <div>
                      <p className="font-display text-lg">{t.name}</p>
                      <p className="text-[0.7rem] tracking-wider uppercase text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="reveal">
            <Eyebrow>Certificação</Eyebrow>
            <SectionTitle>
              Receba seu{" "}
              <em className="text-gold-gradient not-italic">certificado</em>
            </SectionTitle>
            <p className="mt-6 text-muted-foreground font-light text-lg">
              Um certificado elegante para o seu espaço — credibilidade e
              autoridade visíveis a cada cliente que entra.
            </p>
          </div>
          <div className="reveal mt-12 mx-auto max-w-2xl rounded-2xl border border-primary/40 overflow-hidden relative">
            <div
              className="absolute -inset-8 opacity-40 blur-3xl"
              style={{ background: "var(--gradient-gold-soft)" }}
            />
            <img
              src={certificateAsset.url}
              alt="Certificado de conclusão da Formação Micropigmentador Hiper-Realista"
              className="relative w-full h-auto block"
              loading="lazy" decoding="async"
            />
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="inscricao" className="py-16 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.13 85 / 0.15), transparent 60%), radial-gradient(ellipse at 50% 100%, oklch(0.78 0.13 85 / 0.1), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center reveal">
            <Eyebrow>Oferta especial</Eyebrow>
            <SectionTitle>
              Tudo o que você recebe ao{" "}
              <em className="text-gold-gradient not-italic">se inscrever</em>
            </SectionTitle>
          </div>

          <div className="mt-14 grid gap-4 text-left max-w-2xl mx-auto reveal">
            {[
              ["Curso completo de Design de Sobrancelhas", "R$297"],
              ["Curso completo de Colorimetria e Pigmentologia", "R$497"],
              ["Curso completo de Fios Hiper Realistas", "R$497"],
              ["Bônus: Marketing e Vendas (Instagram/WhatsApp)", "R$297"],
              ["Certificado de conclusão", "R$50"],
            ].map(([t, p]) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-xl border border-primary/20 bg-card/60 backdrop-blur-sm px-5 py-4"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">
                    ✓
                  </span>
                  <span className="font-medium">{t}</span>
                </span>
                <span className="text-muted-foreground line-through text-sm tabular-nums shrink-0 ml-3">
                  {p}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal space-y-3">
            <p className="text-muted-foreground font-light">
              Valor total acima de{" "}
              <span className="line-through">R$1.638</span>.
            </p>
            <p className="font-light text-foreground/90">
              Você não paga <span className="line-through">R$1.638</span>.
              <br />
              Não paga <span className="line-through">R$497</span>.
              <br />
              Não paga nem <span className="line-through">R$297</span>.
            </p>
            <p className="text-muted-foreground font-light">
              Hoje, por tempo limitado:
            </p>
          </div>


          {/* Price card */}
          <div className="reveal mt-10 mx-auto max-w-lg relative">
            <div
              className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-60"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative rounded-3xl bg-background border-2 border-primary/50 p-6 md:p-10 text-center overflow-hidden shadow-2xl">
              <div
                className="absolute top-0 right-0 px-6 py-2.5 text-[0.7rem] tracking-[0.3em] uppercase font-bold"
                style={{
                  background: "var(--gradient-gold)",
                  color: "var(--primary-foreground)",
                  borderBottomLeftRadius: "1.25rem",
                }}
              >
                Oferta
              </div>
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mt-4">
                12x de
              </p>
              <p className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-gold-gradient leading-none mt-3">
                R$9,70
              </p>
              <div className="hairline mt-8 mx-auto w-16" />
              <p className="mt-6 font-light text-muted-foreground">
                ou{" "}
                <span className="text-foreground font-medium">R$97,00</span>{" "}
                à vista
              </p>
              <div className="mt-10">
                <CtaButton href={CHECKOUT_URL} pulse>Quero entrar na formação</CtaButton>
              </div>
              <p className="mt-6 text-[0.7rem] tracking-widest uppercase text-muted-foreground">
                Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>

          <div className="reveal mt-10 mx-auto max-w-2xl text-center space-y-4">
            <p className="text-sm md:text-base font-light text-foreground/90 leading-relaxed">
              <span aria-hidden="true">⚠️</span>{" "}
              <span className="font-medium text-gold-gradient">Atenção:</span>{" "}
              Este preço é de lançamento. Quando encerrar esta fase, o valor
              volta ao preço cheio sem aviso prévio.
            </p>
            <p className="text-[0.7rem] md:text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Acesso imediato · Garantia incondicional de 7 dias · Sem risco
            </p>
          </div>

        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-3xl text-center reveal">
          <img
            src={seloGarantiaAsset.url}
            alt="Selo 7 dias - Reembolso garantido"
            className="mx-auto h-40 md:h-48 w-auto drop-shadow-[0_10px_30px_rgba(212,175,55,0.35)]"
          />
          <Eyebrow>
            <span className="mt-6 inline-block">Sem risco</span>
          </Eyebrow>
          <h2 className="mt-6 font-display text-4xl md:text-5xl font-light">
            Garantia incondicional de{" "}
            <em className="text-gold-gradient not-italic">7 dias</em>
          </h2>
          <p className="mt-8 text-muted-foreground font-light text-lg leading-relaxed">
            Garanto 100% de segurança para você. Assista às aulas durante 7 dias
            e, se não acreditar que a Formação vai revolucionar a sua vida,
            devolvo 100% do seu dinheiro. Sem perguntas.
          </p>
          <div className="mt-12">
            <CtaButton href={CHECKOUT_URL}>Sim, quero testar por 7 dias</CtaButton>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center reveal">
            <Eyebrow>Como funciona</Eyebrow>
            <SectionTitle>Apenas 3 passos</SectionTitle>
            <p className="mt-6 text-muted-foreground font-light">
              Após sua compra, você recebe a Formação no seu e-mail.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 text-left">
            {[
              {
                n: "01",
                t: "Acesse seu e-mail",
                d: "Procure pela mensagem com o nome FORMAÇÃO EM MICROPIGMENTAÇÃO HIPER REALISTA.",
              },
              {
                n: "02",
                t: "Entre na plataforma",
                d: "As aulas já estarão 100% liberadas para você acessar a hora que quiser.",
              },
              {
                n: "03",
                t: "Conclua e certifique-se",
                d: "Finalize no seu ritmo e nos envie a tarefa final por e-mail para receber seu certificado.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="reveal glass-card rounded-2xl p-5 md:p-8 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="font-display text-5xl font-light text-primary/70">
                  {s.n}
                </div>
                <div className="hairline mt-6 w-10" />
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-4 text-muted-foreground text-sm font-light leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center reveal">
          <Eyebrow>Última chamada</Eyebrow>
          <SectionTitle>
            Comece agora mesmo a{" "}
            <em className="text-gold-gradient not-italic">formação</em>
          </SectionTitle>
          <div className="mt-12 mx-auto max-w-md relative">
            <div
              className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-50"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative rounded-3xl bg-background border border-primary/40 p-6 md:p-10">
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
                12x de
              </p>
              <p className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-gold-gradient leading-none mt-3">
                R$9,70
              </p>
              <p className="mt-4 font-light text-muted-foreground">
                ou R$97,00 à vista
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CtaButton href={CHECKOUT_URL} pulse>Quero entrar na formação</CtaButton>
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center reveal">
            <Eyebrow>A escolha é sua</Eyebrow>
            <SectionTitle>
              Você tem{" "}
              <em className="text-gold-gradient not-italic">três caminhos</em>{" "}
              daqui pra frente
            </SectionTitle>
          </div>

          <div className="mt-16 space-y-6">
            {[
              {
                n: "01",
                t: "Não faz nada",
                d: "Continua atendendo pelo mesmo preço, no mesmo ritmo, esperando que algo mude por conta própria. Talvez mude. Provavelmente não.",
                muted: true,
              },
              {
                n: "02",
                t: "Continua tentando evoluir sozinha",
                d: "Assistindo tutoriais no YouTube, testando técnicas nas clientes, errando e corrigindo. Pode funcionar. Vai levar anos e vai custar muito mais em produto desperdiçado, clientes insatisfeitas e confiança abalada.",
                muted: true,
              },
              {
                n: "03",
                t: "Entra na formação hoje por R$97",
                d: "Em 7 dias, se não estiver satisfeita com o que viu, devolvo 100% do seu dinheiro — sem perguntas, sem burocracia.",
                muted: false,
              },
            ].map((p) => (
              <div
                key={p.n}
                className={`reveal glass-card rounded-3xl p-6 md:p-10 flex flex-col md:flex-row md:items-start gap-6 ${
                  p.muted ? "opacity-70" : "border-2 border-primary/50"
                }`}
              >
                <div
                  className={`font-display text-5xl md:text-6xl font-light leading-none shrink-0 ${
                    p.muted ? "text-muted-foreground/60" : "text-gold-gradient"
                  }`}
                >
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-light">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-muted-foreground font-light leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal space-y-6">
            <p className="font-display text-2xl md:text-3xl font-light">
              O risco é <em className="text-gold-gradient not-italic">zero</em>.
              A decisão é sua.
            </p>
            <div>
              <CtaButton href={CHECKOUT_URL} pulse>
                Quero entrar agora por R$97
              </CtaButton>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-3xl">
          <div className="text-center reveal">
            <Eyebrow>FAQ</Eyebrow>
            <SectionTitle>Perguntas frequentes</SectionTitle>
          </div>

          <div className="mt-16 space-y-3">
            {[
              {
                q: "Funciona para quem está começando na micropigmentação?",
                a: "Sim. A formação foi desenhada tanto para quem quer começar com o pé direito quanto para quem já atua e quer melhorar resultados. Você não precisa de experiência prévia com a técnica hiper-realista — é exatamente isso que vamos construir do zero.",
              },
              {
                q: "Preciso de equipamento especial para aplicar o que aprendo?",
                a: "Não. A metodologia funciona com os equipamentos mais comuns do mercado. Dentro da formação você aprende a adaptar a técnica para o que você já tem.",
              },
              {
                q: "Em quanto tempo consigo cobrar mais depois de concluir o curso?",
                a: "Depende da sua dedicação, mas alunas relatam mudança nos primeiros atendimentos após aplicar o método. Quanto mais rápido você praticar, mais rápido os resultados aparecem na sua agenda e no seu faturamento.",
              },
              {
                q: "Tem suporte após a compra?",
                a: "Sim. Qualquer dúvida técnica pode ser enviada por e-mail. Além disso, você terá acesso a um grupo VIP no WhatsApp para te ajudar no que precisar.",
              },
              {
                q: "Posso cancelar?",
                a: "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do valor pago, sem perguntas. Além disso, temos uma garantia condicional de 30 dias: se você assistir o curso todo, aplicar o que está lá e não tiver aumento do seu faturamento ou desenvolvimento da sua técnica, devolvemos seu dinheiro.",
              },
            ].map((f) => (

              <details
                key={f.q}
                className="reveal group glass-card rounded-2xl p-6 transition-all hover:border-primary/40"
              >
                <summary className="cursor-pointer font-light text-lg flex justify-between items-center list-none">
                  <span>{f.q}</span>
                  <span className="text-primary text-2xl font-light ml-4 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="hairline mt-5 w-12" />
                <p className="mt-5 text-muted-foreground font-light leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TEXT TESTIMONIALS */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-card/30" />
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center reveal">
            <Eyebrow>O que dizem sobre o método</Eyebrow>
            <SectionTitle>
              Depoimentos de{" "}
              <em className="text-gold-gradient not-italic">alunas</em>
            </SectionTitle>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "Rosimeire Mendonça",
                t: "Explicações claras e objetivas de fácil entendimento.",
              },
              {
                n: "Ana Cristina Ferreira Lima",
                t: "Ele me tirou da minha zona de conforto, estou mais segura e quero mais e mais. Venha conhecer o Marcelo, tenho certeza que nunca mais será a mesma assim como eu!",
              },
              {
                n: "Quezia Leal",
                t: "Super indico, ele é top!! Estou aprendendo muito com ele.",
              },
              {
                n: "Suelly Souza",
                t: "Assisti a primeira aula e fiquei muito satisfeita. Este é um curso online muito bom e proveitoso pelo jeito.",
              },
              {
                n: "Alessandra Lima",
                t: "Estou adorando as aulas, ele é excelente, tem um linguajar prático e profissional, nos dá toda base para se tornar um micropigmentador de sucesso.",
              },
              {
                n: "Kátia Ribeiro",
                t: "Melhor curso que já vi, com Marcelo Alves. Super indico!",
              },
              {
                n: "Diana Veras",
                t: "Excelente trabalho, acompanho tudo que é postado, tenho vontade de fazer o curso.",
              },
              {
                n: "Fernanda Estevão",
                t: "Esse menino é top!!! Tive o prazer de assistir alguns vídeos onde o rapaz mostra que sabe mesmo. Sem estrelismo, na simpatia, respondeu minhas mensagens muito atencioso.",
              },
            ].map((d) => (
              <figure
                key={d.n}
                className="reveal glass-card rounded-3xl p-6 md:p-8 flex flex-col h-full"
              >
                <div
                  className="font-display text-5xl leading-none text-gold-gradient"
                  aria-hidden="true"
                >
                  “
                </div>
                <blockquote className="mt-2 text-muted-foreground font-light leading-relaxed flex-1">
                  {d.t}
                </blockquote>
                <div className="hairline mt-6 w-10" />
                <figcaption className="mt-4 text-xs tracking-[0.25em] uppercase text-foreground/90">
                  {d.n}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <CtaButton href={CHECKOUT_URL} pulse>
              Quero entrar agora por R$97
            </CtaButton>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="py-16 md:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center reveal">
          <Eyebrow>Atendimento</Eyebrow>
          <SectionTitle>Ainda com dúvida?</SectionTitle>
          <p className="mt-6 text-muted-foreground font-light text-lg">
            Chama a Luísa — ela vai conversar com você.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/60 px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-[1.03]"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-16 px-6">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="font-display text-xl tracking-[0.3em] uppercase">
            <span className="text-foreground">Marcelo</span>{" "}
            <span className="text-gold-gradient italic">Alves</span>
          </div>
          <div className="hairline mx-auto w-24" />
          <div className="text-xs text-muted-foreground space-y-3 font-light leading-relaxed">
            <p className="font-medium tracking-wider">
              M.V. CURSOS E TREINAMENTOS EIRELI · CNPJ 37.800.789/0001-75
            </p>
            <p>
              No âmbito do consentimento para tratamento dos dados pessoais,
              incluem-se autorização para contatar o titular via telefone,
              e-mail e SMS. Os dados coletados serão utilizados para envio de
              informações sobre os produtos da M.V. Cursos e Treinamentos
              EIRELI.
            </p>
            <p>
              Este site não faz parte do site do META ou do META, Inc. Este site
              não é endossado pela META de forma alguma. META é uma marca
              comercial da META, Inc.
            </p>
            <p>Política de Privacidade · Termos de Uso · Aviso Legal</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 1 1 22 12c0 5.52-4.48 10-10 10zm5.47-7.5c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
