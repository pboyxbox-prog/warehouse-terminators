import React, { useMemo, useState } from "react";
import { Hammer, Truck, Boxes, DollarSign, BadgeCheck, PackageSearch, MapPin, Phone, Mail, CalendarCheck, MessageSquare, ShoppingCart, ArrowRight, Facebook, Store, Shield, Clock, Sparkles, Building2, Zap, ChevronDown, ChevronUp } from "lucide-react";

// Image assets — place these files next to this component or replace with public URLs
const ART_URL = "photo_2025-09-21_18-28-32.jpg"; // primary
const ART_FALLBACK_URL = "photo_2025-09-21_18-28-33.jpg"; // fallback

// ==============================
// Warehouse Terminators — Liquidation Sales (Synthwave / New‑Retro‑Wave)
// Single‑file React component using TailwindCSS
// ==============================

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_22px_rgba(217,70,239,0.35)] ring-1 ring-white/20">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const CTAButton = ({ href = "#contact", children, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500 px-5 py-3 text-base font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:shadow-[0_0_45px_rgba(217,70,239,0.45)] ${className}`}
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </a>
);

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`py-16 sm:py-20 ${className}`}>
    <Container>
      {(eyebrow || title || subtitle) && (
        <header className="mb-10 text-center">
          {eyebrow && (
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-3 max-w-3xl text-white/75">{subtitle}</p>}
        </header>
      )}
      {children}
    </Container>
  </section>
);

// === NEON CN TOWER SKYLINE (SVG Backdrop) ===
const NeonSkyline = () => (
  <div className="pointer-events-none absolute inset-x-0 top-24 z-0 select-none opacity-30">
    <svg viewBox="0 0 1200 220" className="mx-auto h-40 w-[92%]">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="50%" stopColor="#8b5cf6"/>
          <stop offset="100%" stopColor="#22d3ee"/>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g stroke="url(#g)" strokeWidth="2" fill="none" filter="url(#glow)">
        {/* simple skyline */}
        <path d="M50 200 L50 140 L80 140 L80 200 M120 200 L120 120 L140 120 L140 200 M200 200 L200 90 L210 90 L210 200 M260 200 L260 110 L280 110 L280 200"/>
        {/* CN Tower */}
        <path d="M600 200 L600 70 M600 70 L600 40"/>
        <circle cx="600" cy="65" r="30"/>
        <path d="M590 90 L610 90 L610 200 L590 200 Z"/>
        {/* more buildings */}
        <path d="M700 200 L700 100 L740 100 L740 200 M780 200 L780 120 L820 120 L820 200 M860 200 L860 140 L880 140 L880 200"/>
      </g>
    </svg>
  </div>
);

const ReviewsBadge = () => (
  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
    <span className="inline-flex items-center">
      {Array.from({length:5}).map((_,i)=>(<span key={i}>⭐</span>))}
    </span>
    <span className="font-semibold">4.9</span>
    <span className="text-white/70">Google rating • 4701 reviews</span>
  </div>
);

// === NAV ===
const Nav = () => {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "#inventory", label: "Inventory" },
    { href: "#services", label: "Services" },
    { href: "#how", label: "How it works" },
    { href: "#auctions", label: "Auctions" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-gray-950/75 backdrop-blur supports-[backdrop-filter]:bg-gray-950/55">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="relative flex items-center gap-3">
          {/* Logo in the corner */}
          <img src={ART_URL} onError={(e)=>{ e.currentTarget.src = ART_FALLBACK_URL; }} alt="Warehouse Terminators Logo" className="h-10 w-10 rounded-lg object-cover shadow-[0_0_18px_rgba(236,72,153,0.6)]" />
          <div className="leading-tight">
            <div className="font-black tracking-tight text-white">Warehouse Terminators</div>
            <div className="text-xs text-white/70">Liquidation Sales • "Shop with us if you wanna live"</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-white/80 hover:text-white">
              {i.label}
            </a>
          ))}
          <CTAButton href="#contact">Get a Quote</CTAButton>
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/15 p-2 text-white md:hidden">
          {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-white/10 bg-gray-950 md:hidden">
          <Container className="grid gap-2 py-3">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="py-2 text-sm font-semibold text-white/85">
                {i.label}
              </a>
            ))}
            <CTAButton href="#contact" className="justify-center">Get a Quote</CTAButton>
          </Container>
        </div>
      )}
    </div>
  );
};

// === HERO ===
const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="absolute inset-0">
      {/* Dark neon gradient + scanline grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-fuchsia-600 opacity-40 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-cyan-500 opacity-40 blur-3xl" />
    </div>
    {/* Artwork watermark top-left */}
    <img
      src={ART_URL}
      alt="Warehouse Terminators — Synthwave artwork"
      className="pointer-events-none absolute left-4 top-4 z-10 h-44 w-44 select-none object-contain opacity-95 drop-shadow-[0_0_28px_rgba(236,72,153,0.55)]"
      onError={(e)=>{ e.currentTarget.src = ART_FALLBACK_URL; }}
    />
    <NeonSkyline />
    <Container className="relative grid min-h-[72vh] items-center py-20 text-white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Pill>GTA • Canada‑wide Delivery</Pill>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Liquidation deals in neon — electronics, home goods & more at retro prices
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We source Amazon & big‑box returns/overstock, test and grade them, and pass the savings to you. Local pickup Mon–Sat 12–7 PM and evening deliveries across the GTA.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="#inventory">Browse Inventory</CTAButton>
            <a
              href="#auctions"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Join Auctions <Hammer className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/90">
            <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Quality‑checked</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4" /> GTA delivery 7–10 PM</li>
            <li className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> Fair prices</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> Honest grading</li>
          </ul>
          <ReviewsBadge />
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-3xl border border-white/20 bg-white/5 p-4 shadow-xl">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-700/40 to-cyan-700/30 text-white">
              <div className="p-6 text-center">
                <div className="text-sm uppercase tracking-widest text-white/70">Featured</div>
                <div className="mt-2 text-3xl font-extrabold">This Week’s Hot Deals</div>
                <div className="mt-2 text-white/80">Dyson vacuums • Gaming consoles • Monitors • Coffee machines</div>
                <a
                  href="#inventory"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
                >
                  See deals <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// === INVENTORY ===
const initialItems = [
  { id: 1, name: "Dyson V15 Detect", tag: "Vacuums", price: 499, status: "Tested • Ready", desc: "Lightly used • accessories included" },
  { id: 2, name: "PlayStation 5 (Disc)", tag: "Gaming", price: 549, status: "Refurb • Warranty", desc: "Cleaned • re‑pasted • filters" },
  { id: 3, name: "LG 34″ Ultrawide", tag: "Monitors", price: 329, status: "Open Box", desc: "160 Hz • curved • inspected" },
  { id: 4, name: "De’Longhi Espresso", tag: "Kitchen", price: 249, status: "A‑Grade", desc: "Descaled • parts verified" },
  { id: 5, name: "Shark AI Ultra Robot", tag: "Home", price: 279, status: "B‑Grade", desc: "Battery good • new brushes" },
  { id: 6, name: "Zotac RTX 4080", tag: "PC Parts", price: 1029, status: "In Box", desc: "Bench‑tested • receipt avail" },
];
const filters = ["All", "Gaming", "Vacuums", "Monitors", "Kitchen", "Home", "PC Parts"];

const Inventory = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    return initialItems.filter((i) => {
      const byTag = active === "All" || i.tag === active;
      const byQuery = (i.name + " " + i.desc).toLowerCase().includes(query.toLowerCase());
      return byTag && byQuery;
    });
  }, [query, active]);

  return (
    <Section
      id="inventory"
      eyebrow="Live Stock"
      title="Browse current inventory"
      subtitle="Message us for the full list (1000+ SKUs). We test, grade, and price to move."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 overflow-x-auto">
          {filters.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === t
                  ? "border-fuchsia-500/50 bg-fuchsia-600/20 text-white shadow-[0_0_18px_rgba(217,70,239,0.4)]"
                  : "border-white/20 bg-white/5 text-white/85 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="relative">
          <PackageSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            className="rounded-2xl border border-white/20 bg-white/10 px-10 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            placeholder="Search (e.g., Dyson, PS5, monitor)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <article
            key={i.id}
            className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_0_22px_rgba(255,255,255,0.06)] transition hover:shadow-[0_0_35px_rgba(6,182,212,0.22)]"
          >
            <div className="grid aspect-video place-items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white/70">
              {i.tag}
            </div>
            <div className="p-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{i.name}</h3>
                <Pill>${i.price}</Pill>
              </div>
              <p className="mt-1 text-sm text-white/75">{i.desc}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
                <BadgeCheck className="h-4 w-4" /> {i.status}
              </div>
              <div className="mt-5 flex gap-2">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-600/90 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-600">
                  <ShoppingCart className="h-4 w-4" /> Reserve
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
                  More info
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-white/80">
        Looking for full pallets or truckloads? <a className="font-semibold text-white underline" href="#contact">Contact sales</a>.
      </div>
    </Section>
  );
};

// === SERVICES ===
const Services = () => (
  <Section
    id="services"
    eyebrow="What we do"
    title="Liquidation, truckloads & consignments"
    subtitle="Electronics, home goods, small appliances, tools, mixed lots. Honest grading, clear photos, and smooth logistics."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {[{
        icon: <Boxes className="h-6 w-6" />, title: "Retail Returns & Overstock",
        text: "Amazon & big‑box liquidation — tested, graded, and priced fairly."
      }, {
        icon: <Truck className="h-6 w-6" />, title: "Pallets & Truckloads",
        text: "Buy by the pallet or scale to truckloads. Category or mixed. Canada‑wide quotes."
      }, {
        icon: <Building2 className="h-6 w-6" />, title: "Consignments & Clear‑outs",
        text: "We list, photo, and move your stock fast through our channels and auctions."
      }].map((s, i) => (
        <div key={i} className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white">
              {s.icon}
            </div>
            <h3 className="font-bold">{s.title}</h3>
          </div>
          <p className="mt-3 text-sm text-white/75">{s.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

// === HOW IT WORKS ===
const HowItWorks = () => (
  <Section id="how" eyebrow="Fast & Simple" title="How it works" subtitle="Pick what you like, message us, and choose pickup or delivery. Liquidation made easy.">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[{
        icon: <Zap className="h-6 w-6" />, title: "We source smart",
        text: "Trusted suppliers • returns/overstock • shelf‑pulls"
      }, {
        icon: <BadgeCheck className="h-6 w-6" />, title: "We test & grade",
        text: "A/B/C • Open Box • Refurb • issues disclosed"
      }, {
        icon: <MessageSquare className="h-6 w-6" />, title: "Reserve by message",
        text: "DM us (Facebook/Kijiji) or use the form"
      }, {
        icon: <CalendarCheck className="h-6 w-6" />, title: "Pickup or delivery",
        text: "Pickup Mon–Sat 12–7 PM • GTA delivery 7–10 PM"
      }].map((step, idx) => (
        <div key={idx} className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white">{step.icon}</div>
            <h3 className="font-bold">{step.title}</h3>
          </div>
          <p className="mt-3 text-sm text-white/75">{step.text}</p>
        </div>
      ))}
    </div>
  </Section>
);

// === AUCTIONS ===
const Auctions = () => (
  <Section id="auctions" eyebrow="HiBid & More" title="Join our online auctions" subtitle="Score deals on mixed lots and single items. Clear photos, honest descriptions, scheduled pickups.">
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white"><Hammer className="h-5 w-5" /></div>
          <h3 className="font-bold">Why bid with us</h3>
        </div>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-white/80">
          <li>Transparent grading and multiple photos per lot</li>
          <li>No‑nonsense pickup windows with lane‑style handoff</li>
          <li>Optional delivery after the auction (fees by location)</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-600/90 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-600">Get verified to bid</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">Consign with us</a>
        </div>
      </div>
      <div className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-cyan-500 text-white"><CalendarCheck className="h-5 w-5" /></div>
          <h3 className="font-bold">Pickup scheduling</h3>
        </div>
        <p className="mt-3 text-sm text-white/75">Winners book a pickup slot in seconds. We stage items by order number for fast hand‑off. Bring ID and order confirmation.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-white/15 p-4">
            <div className="text-xs text-white/60">Pickup window</div>
            <div className="font-semibold">Mon–Sat 12:00–19:00</div>
          </div>
          <div className="rounded-2xl border border-white/15 p-4">
            <div className="text-xs text-white/60">Delivery window</div>
            <div className="font-semibold">19:00–22:00 (GTA)</div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

// === GRADING GUIDE ===
const GradingGuide = () => (
  <Section id="grading" eyebrow="Know your grade" title="Transparent grading & warranty" subtitle="Exactly what you’re getting—no surprises.">
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-cyan-500/30 bg-white/5 p-6 text-white shadow-[0_0_30px_rgba(6,182,212,0.25)]">
        <ul className="space-y-3 text-sm text-white/80">
          <li><strong>A‑Grade / Open Box:</strong> Like new. Full functionality, minimal cosmetic marks. Accessories included.</li>
          <li><strong>B‑Grade:</strong> Light wear or minor marks. Fully functional; minor accessory may be missing.</li>
          <li><strong>C‑Grade:</strong> Noticeable wear or minor disclosed faults (e.g., battery wear). Still a deal.</li>
          <li><strong>Refurbished:</strong> Professionally repaired/serviced, tested, and cleaned.</li>
        </ul>
      </div>
      <div className="rounded-3xl border border-fuchsia-500/30 bg-white/5 p-6 text-white shadow-[0_0_30px_rgba(217,70,239,0.25)]">
        <h4 className="font-bold">Warranty & returns</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/80">
          <li>48‑hour DOA guarantee on tested items (message within 48 hours).</li>
          <li>Auctions follow platform policies; check each lot description.</li>
          <li>Keep packaging and serials for any return support.</li>
        </ul>
      </div>
    </div>
  </Section>
);

// === TESTIMONIALS ===
const Testimonials = () => (
  <Section id="testimonials" eyebrow="Happy buyers" title="Real reviews from the community" subtitle="We thrive on repeat customers and referrals.">
    <div className="grid gap-6 lg:grid-cols-3">
      {["Got a pallet from these guys, everything was as they said. Already sold half.", "Great experience — item matched description, pickup was fast.", "Best liquidation deals in Toronto. Honest grading, fair prices."].map((t, i) => (
        <figure key={i} className="rounded-3xl border border-fuchsia-500/30 bg-white/10 p-6 text-white shadow-[0_0_30px_rgba(217,70,239,0.25)] backdrop-blur">
          <blockquote className="text-white">“{t}”</blockquote>
          <figcaption className="mt-4 text-sm text-white/70">— Facebook/Kijiji buyer</figcaption>
        </figure>
      ))}
    </div>
  </Section>
);

// === SERVICE AREAS ===
const ServiceAreas = () => (
  <Section id="service" eyebrow="GTA & beyond" title="Pickup location & delivery zones" subtitle="Flat, transparent fees. Ask for quotes outside the GTA.">
    <div className="rounded-3xl border border-white/20 bg-white/5 p-6 text-white backdrop-blur">
      <div className="grid gap-6 text-sm md:grid-cols-2">
        <div>
          <h4 className="font-bold">Pickup (Mon–Sat 12–7 PM)</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
            <li>126A Oakdale Rd, North York, ON M3N 1V9</li>
            <li>Bring ID and order number</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Delivery (7–10 PM)</h4>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-white/80">
            <li>Zone A (Local GTA): $15–$25</li>
            <li>Zone B (905 belt): $25–$40</li>
            <li>Zone C (Outer GTA): $40–$60</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-white/70">Fees depend on distance/size. Multi‑item discounts available.</p>
    </div>
  </Section>
);

// === FAQ ===
const faqs = [
  { q: "Do you test items?", a: "Yes. Most items are inspected and tested. We describe issues and grade honestly (A/B/C, Open Box, Refurb)." },
  { q: "Where are you located?", a: "126A Oakdale Rd, North York, ON M3N 1V9. Evening deliveries available within the GTA." },
  { q: "Do you ship across Canada?", a: "Yes. We can quote shipping by postal code and item size/weight." },
  { q: "Can I buy a full pallet or truckload?", a: "Absolutely. Tell us your category preference (electronics, home, tools, mixed) and we’ll quote current availability." },
  { q: "What payment methods do you accept?", a: "e‑Transfer, cash, and card for local. Auction settlements follow platform rules." },
];
const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" eyebrow="Questions" title="FAQ">
      <div className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
        {faqs.map((f, idx) => (
          <div key={idx} className="p-5">
            <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen(open === idx ? -1 : idx)}>
              <span className="font-semibold">{f.q}</span>
              {open === idx ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {open === idx && <p className="mt-3 text-sm text-white/80">{f.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
};

// === CONTACT ===
const Contact = () => (
  <Section id="contact" eyebrow="Get in touch" title="Contact sales" subtitle="Tell us what you’re looking for. We reply fast during business hours.">
    <div className="grid items-start gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
        <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We’ll get back to you shortly.");}} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input required className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" placeholder="you@email.com"/>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">What are you looking for?</label>
            <input className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" placeholder="e.g., Dyson V15, PS5, 34″ monitor, mixed pallet"/>
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" rows={4} placeholder="Tell us details, preferred pickup area, budget, etc."/>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">By submitting, you agree to be contacted about your request.</div>
            <button className="rounded-2xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-2.5 font-semibold text-white hover:opacity-95" type="submit">Send</button>
          </div>
        </form>
      </div>
      <aside className="rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_0_22px_rgba(255,255,255,0.06)]">
        <h3 className="font-bold">Direct contacts</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:+14373333316">+1 437 333 3316</a></li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 126A Oakdale Rd, North York, ON M3N 1V9</li>
          <li className="flex items-center gap-2"><Clock className="h-4 w-4"/> Mon–Sat 12–7 PM • Delivery 7–10 PM</li>
        </ul>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <a href="https://www.facebook.com/marketplace/profile/61551543384217/" className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:bg-white/10"><Facebook className="h-4 w-4"/>Facebook</a>
          <a href="https://www.kijiji.ca/m-profile/listings/1" className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:bg-white/10"><Store className="h-4 w-4"/>Kijiji</a>
          <a href="tel:+14373333316" className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-white/90 hover:bg-white/10"><Phone className="h-4 w-4"/>Call</a>
        </div>
        <p className="mt-3 text-xs text-white/60">Pickup Mon–Sat 12–7 PM • Address above</p>
      </aside>
    </div>
  </Section>
);

// === FOOTER ===
const Footer = () => (
  <footer className="border-t border-white/10 bg-gray-950 py-10 text-white">
    <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/80 md:flex-row md:text-left">
      <div>© {new Date().getFullYear()} Warehouse Terminators • Toronto / GTA • All rights reserved</div>
      <div className="flex items-center gap-4">
        <a href="#faq" className="hover:text-white">Terms</a>
        <a href="#faq" className="hover:text-white">Privacy</a>
      </div>
    </Container>
  </footer>
);

// === JSON‑LD ===
const LocalBusinessJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Warehouse Terminators",
        slogan: "Shop with us if you wanna live",
        url: "https://warehouseterminators.example",
        areaServed: "Canada",
        address: { "@type": "PostalAddress", streetAddress: "126A Oakdale Rd", addressLocality: "North York", addressRegion: "ON", postalCode: "M3N 1V9", addressCountry: "CA" },
        openingHours: ["Mo-Sa 12:00-19:00"],
        telephone: "+1-437-333-3316",
        sameAs: [
          "https://www.facebook.com/marketplace/profile/61551543384217/",
          "https://www.kijiji.ca/m-profile/listings/1"
        ],
        aggregateRating: {"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"4701"}
      }),
    }}
  />
);

// === PAGE ===
export default function WarehouseTerminatorsSynthwave() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "radial-gradient(60rem 30rem at 50% -10%, rgba(236,72,153,0.14), transparent), radial-gradient(40rem 20rem at 100% 110%, rgba(34,211,238,0.12), transparent), #0a0a0a",
      }}
    >
      <LocalBusinessJsonLd />
      <Nav />
      <Hero />
      <Inventory />
      <Services />
      <HowItWorks />
      <Auctions />
      <GradingGuide />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
