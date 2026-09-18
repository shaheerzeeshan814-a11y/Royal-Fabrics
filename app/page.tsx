import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  Palette,
  Truck,
  Award,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Reveal from "./components/Reveal";

const collections = [
  {
    name: "Silks & Satins",
    description:
      "Lustrous mulberry silk and fluid satin, woven for evening wear and bridal couture.",
    price: "From $48 / yard",
    swatch: "from-[#8a1f3d] via-[#b54455] to-[#5c1226]",
    tag: "Bridal",
  },
  {
    name: "Velvets",
    description:
      "Deep-pile cotton velvet in jewel tones — theatre drapes, upholstery and statement jackets.",
    price: "From $36 / yard",
    swatch: "from-[#1e3a5f] via-[#2f5580] to-[#12233c]",
    tag: "Bestseller",
  },
  {
    name: "Brocades & Jacquards",
    description:
      "Gold-threaded jacquard with centuries-old motifs, loomed on our heritage machines.",
    price: "From $62 / yard",
    swatch: "from-[#8b6f2e] via-[#c99b3f] to-[#6b5423]",
    tag: "Heritage",
  },
  {
    name: "Linens & Cottons",
    description:
      "Breathable Belgian linen and long-staple cotton for drapery, suiting and everyday luxury.",
    price: "From $22 / yard",
    swatch: "from-[#7a7263] via-[#a89e8c] to-[#5c554a]",
    tag: "Everyday",
  },
];

const features = [
  {
    icon: Scissors,
    title: "Master Craftsmanship",
    text: "Every bolt is inspected, sheared and finished by artisans with decades at the loom.",
  },
  {
    icon: Palette,
    title: "Bespoke Colour Matching",
    text: "Send us a swatch — we'll dye to match with a colourfastness guarantee.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    text: "Insured, tracked shipping to 40+ countries, cut to your exact yardage.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    text: "OEKO-TEX® certified mills and a 30-day no-questions return promise.",
  },
];

const stats = [
  { value: "1924", label: "Family-run since" },
  { value: "12k+", label: "Designers served" },
  { value: "800+", label: "Fabric lines" },
  { value: "40+", label: "Countries shipped" },
];

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground">
        <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs tracking-[0.18em] uppercase">
          Complimentary swatch card with every order — worldwide
        </p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="flex items-baseline gap-2 cursor-pointer"
            aria-label="Royal Fabrics home"
          >
            <span className="font-serif text-2xl font-semibold tracking-wide text-primary sm:text-3xl">
              Royal
            </span>
            <span className="text-xs font-medium tracking-[0.35em] uppercase text-accent">
              Fabrics
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {["Collections", "Bespoke", "Our Story", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="cursor-pointer rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Request Swatches
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="weave-texture absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary via-[#292420] to-primary"
            aria-hidden="true"
          />
          <div
            className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:items-center md:py-32">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium tracking-[0.22em] uppercase text-gold-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Est. 1924 · Woven to last
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
                Fabrics fit for
                <span className="block italic text-gold">royalty.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                Three generations of weavers. Eight hundred fabric lines. One
                uncompromising standard — cloth you can feel the history in.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#collections"
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-gold-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Explore Collections
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#bespoke"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  Start a Bespoke Order
                </a>
              </div>
            </Reveal>

            {/* Fabric swatch stack */}
            <Reveal delay={150} className="relative hidden md:block">
              <div className="relative mx-auto h-[420px] w-full max-w-md">
                {collections.map((c, i) => (
                  <div
                    key={c.name}
                    className={`absolute inset-x-8 top-0 h-64 rounded-2xl bg-gradient-to-br shadow-2xl weave-texture ${c.swatch}`}
                    style={{
                      top: `${i * 56}px`,
                      transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (2 + i)}deg)`,
                      zIndex: i,
                    }}
                    aria-hidden="true"
                  />
                ))}
                <div className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-full bg-background/95 px-6 py-3 shadow-xl">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                    800+ live swatches in store
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="relative flex justify-center pb-8">
            <a
              href="#collections"
              aria-label="Scroll to collections"
              className="cursor-pointer animate-bounce text-primary-foreground/50 transition-colors hover:text-gold"
            >
              <ChevronDown className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-b border-border bg-card">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <dt className="order-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="order-1 font-serif text-4xl font-semibold text-primary sm:text-5xl">
                  {s.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Collections */}
        <section id="collections" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
            <Reveal className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                The Collections
              </p>
              <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
                Woven for every occasion
              </h2>
              <p className="mt-4 text-muted-foreground">
                Four houses of cloth, each with its own loom, its own dyers and
                its own story.
              </p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {collections.map((c, i) => (
                <Reveal key={c.name} delay={i * 100}>
                  <article className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent">
                    <div
                      className={`relative h-44 bg-gradient-to-br weave-texture ${c.swatch}`}
                    >
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-primary">
                        {c.tag}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-semibold">
                        {c.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.description}
                      </p>
                      <p className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                        <span className="font-semibold text-accent">
                          {c.price}
                        </span>
                        <span className="inline-flex items-center gap-1 font-medium text-primary transition-colors group-hover:text-accent">
                          View
                          <ArrowRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                        </span>
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bespoke banner */}
        <section id="bespoke" className="relative scroll-mt-20 overflow-hidden bg-primary text-primary-foreground">
          <div className="weave-texture absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-gold">
                  Bespoke Service
                </p>
                <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                  Dye-to-match & custom loom work
                </h2>
                <p className="mt-4 text-primary-foreground/70">
                  Send us your reference — a photograph, a thread, a Pantone
                  number. Our colourists will match it on your chosen base and
                  ship a sample within five working days.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-gold-soft"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Talk to a Colourist
              </a>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="our-story" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
            <Reveal className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                Why Royal Fabrics
              </p>
              <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
                A century of cloth, not compromise
              </h2>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
                      <f.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-border bg-muted"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
            <Reveal>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                Visit or Write
              </p>
              <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
                Request your swatch card
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us what you&apos;re making and we&apos;ll hand-pick up to six
                swatches from the collection — posted free, anywhere in the
                world.
              </p>

              <address className="mt-10 space-y-4 not-italic">
                <p className="flex items-center gap-3 text-sm">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  14 Loom Street, Textile Quarter, Manchester M1 5QD
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Phone
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  +44 (0) 161 555 0192
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Mail
                    className="h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  hello@royalfabrics.example
                </p>
              </address>
            </Reveal>

            <Reveal delay={120}>
              <form
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
                action="#"
                method="post"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="project"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    What are you making?
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    placeholder="e.g. Emerald velvet drapes for a period living room…"
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Request Free Swatches
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  No spam — we reply within one business day.
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p className="font-serif text-2xl font-semibold">
                Royal <span className="text-gold">Fabrics</span>
              </p>
              <p className="mt-2 max-w-xs text-sm text-primary-foreground/60">
                Premium textiles, woven and finished in the Textile Quarter
                since 1924.
              </p>
            </div>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
              aria-label="Footer"
            >
              {["Collections", "Bespoke", "Our Story", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="cursor-pointer text-primary-foreground/70 transition-colors hover:text-gold"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="cursor-pointer rounded-full border border-primary-foreground/20 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row">
            <p>© 1924–{new Date().getFullYear()} Royal Fabrics Ltd.</p>
            <p>Cut with care · Shipped worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
