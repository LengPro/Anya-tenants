/* App shell: nav, language toggle, lightbox, tweaks. */
const { useState, useEffect, useCallback, useRef } = React;

const THEMES = {
  terracotta: { "--accent": "#bd6443", "--accent-deep": "#9a4e32", "--accent-soft": "#f0d9cd", "--accent-tint": "#f7ece4" },
  sage:       { "--accent": "#6f7d57", "--accent-deep": "#566143", "--accent-soft": "#dde2cf", "--accent-tint": "#eef0e6" },
  stone:      { "--accent": "#5f7585", "--accent-deep": "#475a68", "--accent-soft": "#d4dde3", "--accent-tint": "#e8eef1" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "terracotta",
  "headingFont": "serif",
  "radius": 18
}/*EDITMODE-END*/;

function LanguageToggle({ lang, setLang }) {
  return (
    <div className="lang" role="group" aria-label="language">
      {["en", "th"].map((l) => (
        <button key={l} className={"lang__btn " + (lang === l ? "is-on" : "")} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function TopNav({ t, lang, setLang, scrolled }) {
  const links = [
    ["#details", t.nav.details],
    ["#living", t.nav.living],
    ["#gallery", t.nav.gallery],
    ["#contacts", t.nav.contacts],
  ];
  return (
    <nav className={"topnav " + (scrolled ? "is-scrolled" : "")}>
      <div className="wrap topnav__inner">
        <a href="#top" className="topnav__brand">
          <span className="brandmark">Anya</span>
          <span className="topnav__village">{t.village}</span>
        </a>
        <div className="topnav__links">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="topnav__link">{label}</a>
          ))}
        </div>
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>
    </nav>
  );
}

function MobileNav({ t }) {
  const links = [
    ["#details", t.nav.details, "home"],
    ["#living", t.nav.living, "check"],
    ["#gallery", t.nav.gallery, "expand"],
    ["#contacts", t.nav.contacts, "phone"],
  ];
  return (
    <nav className="mobnav">
      {links.map(([href, label, icon]) => (
        <a key={href} href={href} className="mobnav__item">
          <Icon name={icon} size={20} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

function Lightbox({ photos, index, setIndex, onClose, ofLabel }) {
  const startX = useRef(null);
  const go = useCallback((d) => {
    setIndex((i) => (i + d + photos.length) % photos.length);
  }, [photos.length, setIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  if (index == null) return null;
  const ph = photos[index];
  return (
    <div className="lb" onClick={onClose}>
      <div className="lb__bar" onClick={(e) => e.stopPropagation()}>
        <span className="lb__count">{String(index + 1).padStart(2, "0")} <i>{ofLabel}</i> {photos.length}</span>
        <button className="lb__close" onClick={onClose} aria-label="close"><Icon name="close" size={22} /></button>
      </div>
      <button className="lb__nav lb__nav--prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="prev"><Icon name="left" size={26} /></button>
      <figure className="lb__stage" onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (startX.current == null) return;
          const dx = e.changedTouches[0].clientX - startX.current;
          if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          startX.current = null;
        }}>
        <img src={ph.src} alt={"House photo " + ph.n} key={ph.n} />
      </figure>
      <button className="lb__nav lb__nav--next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="next"><Icon name="right" size={26} /></button>
      <div className="lb__thumbs" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button key={p.n} className={"lb__thumb " + (i === index ? "is-on" : "")} onClick={() => setIndex(i)}>
            <img src={p.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const data = window.ANYA_DATA;
  const [lang, setLang] = useState(() => localStorage.getItem("anya_lang") || "en");
  const [lbIndex, setLbIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const L = data[lang];

  useEffect(() => { localStorage.setItem("anya_lang", lang); }, [lang]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = THEMES[t.theme] || THEMES.terracotta;
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
    root.style.setProperty("--radius", (t.radius || 18) + "px");
    root.dataset.heading = t.headingFont || "serif";
    root.dataset.lang = lang;
  }, [t.theme, t.radius, t.headingFont, lang]);

  return (
    <div className="app">
      <TopNav t={L} lang={lang} setLang={setLang} scrolled={scrolled} />
      <main>
        <Hero t={L} heroBg={data.heroBg} photos={data.photos} onOpen={setLbIndex} />
        <Details t={L} photos={data.photos} />
        <Living t={L} />
        <Gallery t={L} photos={data.photos} onOpen={setLbIndex} />
        <Contacts t={L} />
      </main>
      <Footer t={L} />
      <MobileNav t={L} />

      {lbIndex != null && (
        <Lightbox photos={data.photos} index={lbIndex} setIndex={setLbIndex}
          onClose={() => setLbIndex(null)} ofLabel={L.gallery.of} />
      )}

      <TweaksPanel>
        <TweakSection label={lang === "th" ? "ธีมสี" : "Theme"} />
        <TweakRadio label={lang === "th" ? "โทนสี" : "Color"} value={t.theme}
          options={["terracotta", "sage", "stone"]}
          onChange={(v) => setTweak("theme", v)} />
        <TweakSection label={lang === "th" ? "ตัวอักษร" : "Type"} />
        <TweakRadio label={lang === "th" ? "หัวข้อ" : "Headings"} value={t.headingFont}
          options={["serif", "sans"]}
          onChange={(v) => setTweak("headingFont", v)} />
        <TweakSlider label={lang === "th" ? "ความโค้งมุม" : "Corner radius"} value={t.radius}
          min={0} max={28} unit="px" onChange={(v) => setTweak("radius", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
