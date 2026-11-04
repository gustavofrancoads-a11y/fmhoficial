import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    quantity: 1,
    title: "1 unidade",
    price: "R$ 89,99",
    unitPrice: "R$ 89,99/un.",
    amount: 89.99,
    label: "QUERO 1 UNIDADE",
    href: "https://entrega.logzz.com.br/pay/mem088284/oxybd-1-unidade-por-8999",
    featured: false,
  },
  {
    quantity: 2,
    title: "2 unidades",
    price: "R$ 119,99",
    unitPrice: "Aproximadamente R$ 60,00/un.",
    amount: 119.99,
    label: "QUERO 2 UNIDADES",
    href: "https://entrega.logzz.com.br/pay/mem088284/wgbyi-2-por-11999",
    featured: false,
  },
  {
    quantity: 3,
    title: "3 unidades",
    price: "R$ 134,99",
    unitPrice: "Aproximadamente R$ 45,00/un.",
    amount: 134.99,
    label: "QUERO 3 UNIDADES",
    href: "https://entrega.logzz.com.br/pay/mem088284/3-por-13499",
    featured: true,
  },
] as const;

type Offer = (typeof offers)[number];
type Placement = "header" | "hero" | "closing" | "mobile";

// Ponto de integração futuro. Não envia dados a provedores nem armazena dados pessoais.
// Um adaptador poderá ouvir "resina-extreme:interaction" após a revisão de consentimento.
function trackInteraction(detail: {
  action: "offers_click" | "checkout_click";
  placement: Placement | "offer";
  quantity?: number;
  value?: number;
  currency?: "BRL";
}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("resina-extreme:interaction", { detail }));
}

const focusClasses = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const buttonClasses = `h-auto min-h-12 max-w-full whitespace-normal rounded-xl px-5 py-4 text-center text-sm font-bold leading-snug ${focusClasses}`;
const deliveryCondition = "Pagamento na entrega sujeito à confirmação de cobertura e condições no checkout.";

function OffersLink({ placement, label, className = "" }: {
  placement: Placement;
  label: string;
  className?: string;
}) {
  return (
    <Button asChild className={`${buttonClasses} ${className}`}>
      <a href="#ofertas" onClick={() => trackInteraction({ action: "offers_click", placement })}>
        {label}
      </a>
    </Button>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      aria-labelledby={`offer-title-${offer.quantity}`}
      className={`flex min-w-0 flex-col rounded-2xl border-2 bg-card p-5 text-card-foreground sm:p-7 ${offer.featured ? "border-primary" : "border-border"}`}
    >
      <div className="mb-5 flex min-h-10 items-center">
        {offer.featured ? (
          <span className="rounded-lg bg-primary px-3 py-2 text-xs font-bold leading-relaxed text-primary-foreground">
            MELHOR CUSTO-BENEFÍCIO
          </span>
        ) : (
          <span className="text-sm font-medium text-muted-foreground">Resina Extreme</span>
        )}
      </div>
      <h3 id={`offer-title-${offer.quantity}`} className="text-2xl font-bold tracking-tight">
        {offer.title}
      </h3>
      <p className="mt-6 text-sm text-muted-foreground">Valor da oferta</p>
      <p className="mt-1 text-4xl font-extrabold leading-tight tracking-tight tabular-nums">
        {offer.price}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.unitPrice}</p>
      <p className="mb-6 mt-7 text-sm font-bold leading-relaxed text-primary">
        PEÇA AGORA E PAGUE NA ENTREGA!
      </p>
      <Button asChild className={`${buttonClasses} mt-auto w-full`}>
        <a
          href={offer.href}
          aria-describedby={`offer-conditions-${offer.quantity}`}
          onClick={() => trackInteraction({
            action: "checkout_click",
            placement: "offer",
            quantity: offer.quantity,
            value: offer.amount,
            currency: "BRL",
          })}
        >
          {offer.label}
        </a>
      </Button>
      <p id={`offer-conditions-${offer.quantity}`} className="mt-4 text-xs leading-relaxed text-muted-foreground">
        {deliveryCondition}
      </p>
    </article>
  );
}

export function ResinaExtremeLanding() {
  const [showMobileCta, setShowMobileCta] = useState(true);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        }
        setShowMobileCta(visibleSections.size === 0);
      },
      { rootMargin: "0px 0px 128px 0px", threshold: 0 },
    );

    document.querySelectorAll("#ofertas, #fechamento, #rodape").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased [overflow-wrap:anywhere] pb-[calc(9rem+env(safe-area-inset-bottom))] md:pb-0">
      <a
        href="#conteudo"
        className={`sr-only z-50 rounded-lg bg-background p-4 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 ${focusClasses}`}
      >
        Pular para o conteúdo
      </a>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">RESINA EXTREME</span>
          <nav aria-label="Navegação principal">
            <a
              href="#ofertas"
              className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-primary underline-offset-4 hover:underline ${focusClasses}`}
              onClick={() => trackInteraction({ action: "offers_click", placement: "header" })}
            >
              Ver ofertas
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <section aria-labelledby="hero-title" className="border-b border-border px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 id="hero-title" className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Resina Extreme
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Escolha o kit ideal para você.
            </p>
            <ul aria-label="Resumo das ofertas" className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-3">
              {offers.map((offer) => (
                <li key={offer.quantity} className="rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-card-foreground">
                  <span className="block text-muted-foreground">{offer.title}</span>
                  <span className="block font-bold tabular-nums">{offer.price}</span>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-2xl font-extrabold leading-tight text-primary sm:text-4xl">
              PEÇA AGORA E PAGUE NA ENTREGA!
            </p>
            <div className="mt-6">
              <OffersLink placement="hero" label="ESCOLHER MINHA OFERTA" className="w-full sm:w-auto sm:min-w-72" />
            </div>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {deliveryCondition}
            </p>
          </div>
        </section>

        <section id="ofertas" aria-labelledby="offers-title" className="scroll-mt-6 px-4 py-12 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="offers-title" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Escolha sua oferta
              </h2>
              <p className="mt-4 text-base font-bold leading-relaxed text-primary">
                PEÇA AGORA E PAGUE NA ENTREGA!
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Confira a quantidade e o valor antes de seguir para o checkout.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {offers.map((offer) => <OfferCard key={offer.quantity} offer={offer} />)}
            </div>
          </div>
        </section>

        <section id="fechamento" aria-labelledby="closing-title" className="border-y border-border bg-card px-4 py-12 text-card-foreground sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="closing-title" className="text-2xl font-extrabold leading-tight text-primary sm:text-4xl">
              PEÇA AGORA E PAGUE NA ENTREGA!
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {deliveryCondition}
            </p>
            <div className="mt-7">
              <OffersLink placement="closing" label="VER AS OFERTAS" className="w-full sm:w-auto sm:min-w-72" />
            </div>
          </div>
        </section>
      </main>

      <footer id="rodape" className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-base font-bold tracking-tight">Resina Extreme</p>
        </div>
      </footer>

      <aside aria-label="Acesso rápido às ofertas" className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden ${showMobileCta ? "" : "hidden focus-within:block md:focus-within:hidden"}`}>
        <div className="mx-auto max-w-lg">
          <OffersLink placement="mobile" label="PEDIR E PAGAR NA ENTREGA" className="w-full py-3" />
          <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
            Consulte cobertura e condições no checkout.
          </p>
        </div>
      </aside>
    </div>
  );
}
