import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpg.asset.json";
import frustratedAsset from "@/assets/frustrated.png.asset.json";
import mentorAsset from "@/assets/mentor-marcelo.jpg.asset.json";
import result1Asset from "@/assets/result1.jpg.asset.json";
import result2Asset from "@/assets/result2.jpg.asset.json";
import result3Asset from "@/assets/result3.jpg.asset.json";

const heroImage = heroAsset.url;
const frustratedImg = frustratedAsset.url;
const mentorImg = mentorAsset.url;
const resultImgs = [result1Asset.url, result2Asset.url, result3Asset.url];

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
  }),
  component: LandingPage,
});

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5561985029362&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20a%20forma%C3%A7%C3%A3o%20de%20micro%20hiper-realista.";

function CtaButton({
  children,
  href = "#inscricao",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-[var(--gradient-gold)] px-8 py-4 text-base font-bold tracking-wide text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground uppercase tracking-tight">
      {children}
    </h2>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Micropigmentador profissional realizando atendimento de sobrancelha hiper-realista"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-8 inline-block">
              <div className="text-primary text-sm font-semibold tracking-[0.3em]">
                FORMAÇÃO
              </div>
              <div className="text-foreground text-2xl md:text-3xl font-extrabold tracking-wider">
                MICROPIGMENTADOR
              </div>
              <div className="text-primary text-xs font-semibold tracking-[0.4em]">
                HIPER-REALISTA
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold uppercase leading-tight">
              Domine a técnica que vai te posicionar como referência na sua cidade
              e te permitir{" "}
              <span className="text-primary">
                cobrar até R$1.000 por atendimento!
              </span>
            </h1>

            <p className="mt-6 text-sm md:text-base font-semibold uppercase tracking-wider text-primary">
              Exclusivo para micropigmentadoras e designers de sobrancelha
            </p>

            <div className="mt-10">
              <CtaButton>Inscreva-se</CtaButton>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Você não aguenta mais trabalhar muito e ganhar pouco com a
            micropigmentação?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você está presa em um ciclo que rouba seu tempo e te frustra:
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
            <div className="grid gap-4 text-left">
              {[
                "Você não sabe como se diferenciar da concorrência",
                "Acaba competindo por preço e cobrando mais barato",
                "Demora mais do que gostaria nos atendimentos",
                "Atende poucas pessoas que pagam pouco",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <p className="font-semibold">{t}</p>
                </div>
              ))}
            </div>
            <img
              src={frustratedImg}
              alt="Profissional frustrada"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-2xl mx-auto max-w-sm w-full object-cover"
            />
          </div>

          <div className="mt-16">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A forma mais rápida de resolver todos esses problemas de uma vez é
              melhorar sua técnica. Com a técnica certa, você começa a:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-left">
              {[
                "Ter mais segurança na hora de fazer um atendimento",
                "Ter resultados com aspecto mais natural",
                "Reduzir seu tempo de atendimento pela metade",
                "Cobrar mais caro pelos seus atendimentos",
                "Ser reconhecida pelas suas clientes e seguidoras",
              ].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-primary/30 bg-card/60 p-5"
                >
                  <p className="font-medium">✨ {t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle>
            Veja os resultados dos atendimentos das alunas da formação
          </SectionTitle>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { name: "Tanara Miranda", handle: "@magnifictanara" },
              { name: "Ana Paula C.", handle: "@anapaullacarvalho_01" },
              { name: "Daiane Silva", handle: "@daianesilvadesigner" },
            ].map((a) => (
              <div
                key={a.name}
                className="rounded-2xl overflow-hidden border border-border bg-card"
              >
                <img
                  src={eyebrowImg}
                  alt={`Resultado da aluna ${a.name}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <p className="font-bold">{a.name}</p>
                  <p className="text-primary text-sm">{a.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle>Pra quem é a formação?</SectionTitle>
          <div className="mt-10 grid gap-5 text-left">
            {[
              "Micropigmentadoras que já atuam na área e querem melhorar a qualidade do seu atendimento para ganhar mais e ser reconhecida",
              "Designers de sobrancelha que querem migrar para a micropigmentação com segurança, sem medo de errar o rosto da cliente",
              "Profissionais da área de saúde/estética que querem entrar no mercado de micropigmentação através de uma fonte confiável e com resultados comprovados",
            ].map((t) => (
              <div
                key={t}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <span className="text-primary text-xl">✅</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle>
            E é por isso que você precisa da FMH:{" "}
            <span className="text-primary">
              Formação de Micropigmentação Hiper Realista
            </span>
          </SectionTitle>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa pra trabalhar menos e ganhar mais na
            micropigmentação é focar em 3 pilares apenas:
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Design",
                d: "Você vai aprender uma técnica italiana para te dar segurança na etapa mais crucial do seu atendimento — o design.",
              },
              {
                n: "2",
                t: "Colorimetria",
                d: "Nesse pilar, você vai aprender a chegar em qualquer tom de pele/pêlo usando apenas 3 cores com uma técnica simples.",
              },
              {
                n: "3",
                t: "Fixação dos fios",
                d: "Crie fios finos e delicados e entenda como impedir que os fios fiquem com um aspecto artificial/estourado.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-primary/30 bg-card p-8 text-left"
              >
                <div className="text-5xl font-extrabold text-primary">
                  {p.n}
                </div>
                <h3 className="mt-3 text-xl font-bold uppercase">
                  Pilar {p.n} — {p.t}
                </h3>
                <p className="mt-3 text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle>Tudo o que você vai aprender na FMH</SectionTitle>
          <div className="mt-10 grid gap-3 md:grid-cols-2 text-left">
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
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="text-primary">▸</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle>
            Você ainda vai levar de bônus:{" "}
            <span className="text-primary">
              Treinamento completo em marketing e vendas
            </span>
          </SectionTitle>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Aprenda a captar pessoas interessadas no seu serviço através do
            Instagram e convertê-las em clientes no WhatsApp. Ao unir uma
            estrutura mínima de marketing e vendas com uma técnica refinada, seu
            negócio vai ter muito mais previsibilidade e crescer.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 text-left">
            <div className="rounded-2xl border border-primary/30 bg-card p-8">
              <h3 className="text-xl font-bold uppercase text-primary">
                Atração
              </h3>
              <p className="mt-3 font-semibold">
                Nunca mais veja a sua agenda vazia!
              </p>
              <p className="mt-2 text-muted-foreground">
                Com essa estratégia você terá uma rotatividade de clientes
                mensal que vai te trazer a sonhada estabilidade para seu
                negócio.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-card p-8">
              <h3 className="text-xl font-bold uppercase text-primary">
                Vendas
              </h3>
              <p className="mt-3 text-muted-foreground">
                Aprenda os segredos para apresentar seu trabalho com técnicas de
                vendas testadas para <strong>fidelizar e demonstrar valor</strong>{" "}
                para suas clientes. São técnicas que utilizo no meu centro
                estético há mais de 10 anos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle>
            Veja o que nossas alunas dizem sobre a formação
          </SectionTitle>
          <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
            {[
              "Tanara desistiu de estudar para carreira pública e se tornou especialista em design e micropigmentação, chegando a faturar R$20.000 por mês.",
              "Ana Paula lotou sua agenda como designer de sobrancelhas e no primeiro mês como micropigmentadora ganhou mais de R$10.000.",
              "Vera Lúcia já atuava na área há alguns anos, mas não conseguia crescer. Em poucos meses ela quadruplicou o seu faturamento!",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-primary text-3xl leading-none">❝</p>
                <p className="mt-2 text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>
            Finalizou o curso? <span className="text-primary">Receba seu certificado!</span>
          </SectionTitle>
          <p className="mt-6 text-muted-foreground">
            Temos um certificado elegante pra você utilizar no seu espaço de
            atendimento e ser vista com mais credibilidade e autoridade.
          </p>
          <div className="mt-10 mx-auto max-w-xl rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-card to-background p-10">
            <p className="text-sm tracking-[0.3em] text-primary">CERTIFICADO</p>
            <p className="mt-2 text-2xl font-bold">
              Formação Micropigmentador Hiper-Realista
            </p>
            <p className="mt-4 text-muted-foreground text-sm">
              Concedido pela conclusão integral da formação.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER / RECAP */}
      <section id="inscricao" className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle>
            Recapitulando, ao se inscrever na formação você terá acesso a:
          </SectionTitle>

          <div className="mt-10 grid gap-3 text-left max-w-2xl mx-auto">
            {[
              ["Curso completo de Design de Sobrancelhas", "R$297"],
              ["Curso completo de Colorimetria e Pigmentologia", "R$497"],
              ["Curso completo de Fios Hiper Realistas", "R$497"],
              ["Bônus: Marketing e Vendas pelo Instagram/WhatsApp", "R$297"],
              ["Certificado", "R$50"],
            ].map(([t, p]) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4"
              >
                <span className="flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  <span className="font-medium">{t}</span>
                </span>
                <span className="text-muted-foreground line-through text-sm">
                  {p}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted-foreground">
            Tudo isso junto ultrapassa o valor de R$1.500. Mas nessa oferta,
            você vai pagar apenas:
          </p>

          <div className="mt-8 mx-auto max-w-md rounded-3xl bg-[var(--gradient-gold)] p-10 text-primary-foreground shadow-[var(--shadow-gold)]">
            <p className="text-sm uppercase tracking-widest font-bold">
              12x de
            </p>
            <p className="text-6xl font-extrabold">R$9,70</p>
            <p className="mt-2 font-semibold">ou R$97,00 à vista</p>
          </div>

          <div className="mt-10">
            <CtaButton>Quero entrar na formação</CtaButton>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary text-primary text-3xl font-extrabold">
            7
          </div>
          <h2 className="mt-6 text-3xl font-extrabold uppercase">
            Garantia de 7 dias
          </h2>
          <p className="mt-6 text-muted-foreground">
            Eu garanto 100% de segurança para você e vou liberar um teste de 7
            dias totalmente gratuito! Assista às aulas durante 7 dias e, se
            você não acreditar que a Formação Micropigmentador Hiper-Realista
            vai revolucionar a sua vida, devolvo 100% do seu dinheiro. Sem
            perguntas. Apenas o seu dinheiro de volta.
          </p>
          <div className="mt-10">
            <CtaButton>Sim, eu quero testar por 7 dias!</CtaButton>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle>Apenas 3 passos</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Após sua compra, você vai receber a Formação no seu e-mail
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 text-left">
            {[
              {
                n: "1",
                t: "Acesse seu e-mail",
                d: "Está com o nome de FORMAÇÃO EM MICROPIGMENTAÇÃO HIPER REALISTA.",
              },
              {
                n: "2",
                t: "Acesse a plataforma",
                d: "As aulas já estão 100% liberadas pra você acessar.",
              },
              {
                n: "3",
                t: "Tudo pronto!",
                d: "Finalize o curso no seu ritmo e nos envie um e-mail com a tarefa final para receber o certificado.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="text-5xl font-extrabold text-primary">
                  {s.n}
                </div>
                <h3 className="mt-3 text-lg font-bold uppercase">{s.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTOR */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2 items-center">
          <img
            src={mentorImg}
            alt="Marcelo Alves, mentor da formação"
            loading="lazy"
            width={1024}
            height={1280}
            className="rounded-2xl w-full max-w-sm mx-auto object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold uppercase">
              Quem é seu mentor?
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Marcelo Alves é micropigmentador há mais de 12 anos. Formou-se
                com as maiores referências nacionais (Alan Spadone, James Olaya)
                e internacionais (Ennio Orsine e Toni Bellfato, criadores da
                técnica italiana de hiper-realismo).
              </p>
              <p>
                Além de suas habilidades como micropigmentador, tornou-se
                também especialista em despigmentação a laser pela primeira
                escola europeia sobre o tema, com o Dr. André Dorring.
              </p>
              <p>
                Tudo isso o tornou uma referência na área, com um studio
                privado que fatura mais de R$40 mil todos os meses — resultado
                da aplicação de tudo aquilo que ele ensina e defende:
                desenvolvimento técnico, marketing e vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Comece agora mesmo a formação!</SectionTitle>
          <div className="mt-8 mx-auto max-w-md rounded-3xl bg-[var(--gradient-gold)] p-10 text-primary-foreground shadow-[var(--shadow-gold)]">
            <p className="text-sm uppercase tracking-widest font-bold">
              12x de
            </p>
            <p className="text-6xl font-extrabold">R$9,70</p>
            <p className="mt-2 font-semibold">ou R$97,00 à vista</p>
          </div>
          <div className="mt-10">
            <CtaButton>Quero entrar na formação</CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card/40 py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionTitle>Perguntas frequentes</SectionTitle>
            <p className="mt-3 text-muted-foreground">Ficou alguma dúvida?</p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Quais as formas de pagamento?",
                a: "Você pode pagar à vista, com cartão de crédito ou pix. Ou parcelado em até 12x pelo cartão de crédito.",
              },
              {
                q: "Posso cancelar?",
                a: "Assinando agora, você terá acesso a todas as aulas de forma imediata. Caso, em até 7 dias, você não goste, devolvemos todo o seu dinheiro de forma simples e segura.",
              },
              {
                q: "Posso dividir com mais pessoas?",
                a: "A inscrição na Formação é individual, então outras pessoas precisam adquirir sua inscrição caso desejem participar.",
              },
              {
                q: "Vai ter certificado?",
                a: "Sim. Ao final do curso, você nos envia a tarefa final por e-mail e nós enviamos seu certificado pronto para impressão.",
              },
              {
                q: "Como saber se é pra mim?",
                a: "Se você quer ganhar mais trabalhando menos na micropigmentação, a Formação é pra você.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5"
              >
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle>Ficou com dúvida?</SectionTitle>
          <p className="mt-4 text-muted-foreground">
            Chama a Luísa que ela vai conversar com você!
          </p>
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-primary px-8 py-4 text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/60 py-12 px-6">
        <div className="mx-auto max-w-4xl text-center text-xs text-muted-foreground space-y-3">
          <p className="font-semibold">
            M.V. CURSOS E TREINAMENTOS EIRELI – CNPJ 37.800.789/0001-75
          </p>
          <p>
            No âmbito do consentimento para tratamento dos dados pessoais,
            incluem-se autorização para contatar o titular via telefone, e-mail
            e SMS. Os dados coletados serão utilizados para envio de informações
            sobre os produtos da M.V. Cursos e Treinamentos EIRELI.
          </p>
          <p>
            Este site não faz parte do site do META ou do META, Inc. Este site
            não é endossado pela META de forma alguma. META é uma marca
            comercial da META, Inc.
          </p>
          <p>Política de Privacidade e Termos de Uso | Aviso Legal</p>
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
