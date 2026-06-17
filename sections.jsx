/* All page sections. Expects window.Icon, SectionHead, Reveal */

/* ---------------- HERO ---------------- */
function Hero({ t, heroBg, photos, onOpen }) {
  const bg = heroBg || photos[0].src;
  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <img src={bg} alt="" className="hero__img" loading="eager" />
        <div className="hero__scrim" />
      </div>
      <div className="hero__inner">
        <Reveal className="hero__card">
          <p className="hero__sub">{t.hero.sub}</p>
          <p className="hero__body">{t.hero.body}</p>
          {t.hero.nextEvent && (
            <div className="hero__event">
              <span className="hero__event-dot" />
              <span className="hero__event-label">{t.hero.nextEvent.label}</span>
              <span className="hero__event-sep">·</span>
              <span>{t.hero.nextEvent.desc}</span>
              <span className="hero__event-sep">·</span>
              <span>{t.hero.nextEvent.date}</span>
            </div>
          )}
          <div className="hero__cta">
            <a className="btn btn--primary" href="#living">
              {t.hero.ctaPrimary}<Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href="#contacts">
              <Icon name="phone" size={18} />{t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
      <a href="#gallery" className="hero__scroll" aria-label="scroll">
        <Icon name="arrowDown" size={20} />
      </a>
    </header>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery({ t, photos, onOpen }) {
  const [expanded, setExpanded] = React.useState(false);
  const INITIAL = 9;
  const shown = expanded ? photos : photos.slice(0, INITIAL);
  return (
    <section className="section section--gallery" id="gallery">
      <div className="wrap">
        <SectionHead eyebrow={t.gallery.eyebrow} title={t.gallery.title} sub={t.gallery.sub} />
        <div className="gallery-grid">
          {shown.map((ph, i) => (
            <Reveal as="button" key={ph.n} delay={(i % 3) * 60}
              className={"tile " + (i === 0 ? "tile--wide" : "")}
              onClick={() => onOpen(ph.n - 1)}
            >
              <span className="tile__btn" role="button">
                <img src={ph.src} alt={"House photo " + ph.n} loading="lazy" />
                <span className="tile__num">{String(ph.n).padStart(2, "0")}</span>
                <span className="tile__zoom"><Icon name="expand" size={18} /></span>
              </span>
            </Reveal>
          ))}
        </div>
        {photos.length > INITIAL && (
          <div className="gallery-more">
            <button className="btn btn--outline" onClick={() => setExpanded((v) => !v)}>
              {expanded ? t.gallery.showLess : t.gallery.viewAll}
              <span className="pill">{t.gallery.count(photos.length)}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- ASSET LIST (inside Details) ---------------- */
function AssetList({ t }) {
  if (!t.assetRooms) return null;
  const totalItems = t.assetRooms.reduce((sum, r) => sum + r.items.length, 0);
  return (
    <Reveal className="asset-list">
      <h3 className="asset-list__heading">{t.assetHeading}</h3>
      {t.assetRooms.map((roomData) => (
        <details key={roomData.room} className="asset-room">
          <summary>
            <span className="asset-room__name">{roomData.room}</span>
            <span className="asset-room__count">{roomData.items.length}</span>
          </summary>
          <div className="asset-table-wrap">
            <table className="asset-table">
              <thead>
                <tr>
                  <th>{t.assetColItem}</th>
                  <th>{t.assetColModel}</th>
                  <th>{t.assetColQty}</th>
                  <th className="asset-th-price">{t.assetColPrice}</th>
                </tr>
              </thead>
              <tbody>
                {roomData.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td className="asset-td-model">{item.model}</td>
                    <td>{item.amount}</td>
                    <td className="asset-td-price">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ))}
      <p className="asset-list__total">{t.assetTotal(totalItems)}</p>
    </Reveal>
  );
}

/* ---------------- DETAILS ---------------- */
function Details({ t, photos }) {
  return (
    <section className="section section--details" id="details">
      <div className="wrap">
        <SectionHead eyebrow={t.details.eyebrow} title={t.details.title} sub={t.details.sub} />
        <div className="details-grid">
          <Reveal className="spec-card">
            <div className="spec-list">
              {t.details.specs.map((s) => (
                <div className="spec" key={s.label}>
                  <span className="spec__ic"><Icon name={s.icon} size={22} /></span>
                  <span className="spec__txt">
                    <span className="spec__label">{s.label}</span>
                    <span className="spec__value">{s.value}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="addr">
              <span className="addr__label"><Icon name="pin" size={16} />{t.details.addressLabel}</span>
              <p className="addr__text">{t.details.address}</p>
              <a className="btn btn--primary btn--sm addr__map-btn" href={t.details.mapUrl} target="_blank" rel="noopener">
                <Icon name="pin" size={16} />{t.details.mapButton}
              </a>
            </div>
          </Reveal>
        </div>

        <AssetList t={t.details} />
      </div>
    </section>
  );
}

/* ---------------- LIVING GUIDE ---------------- */
function renderKvValue(v) {
  const lines = v.split('\n');
  return lines.map((line, i) => (
    React.createElement(React.Fragment, { key: i },
      line.startsWith('*') ? React.createElement('span', { className: 'kv__warn' }, line) : line,
      i < lines.length - 1 ? '\n' : null
    )
  ));
}

function Living({ t }) {
  return (
    <section className="section section--living" id="living">
      <div className="wrap">
        <SectionHead eyebrow={t.living.eyebrow} title={t.living.title} sub={t.living.sub} />
        <div className="guide-grid">
          {t.living.cards.map((c, i) => (
            <Reveal className="guide-card" key={c.title} delay={i * 70}>
              <span className="guide-card__ic"><Icon name={c.icon} size={24} /></span>
              <h3 className="guide-card__title">{c.title}</h3>
              <dl className="kv">
                {c.items.map((it) => (
                  <div className="kv__row" key={it.k}>
                    <dt>{it.k}</dt>
                    <dd>{renderKvValue(it.v)}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACTS ---------------- */
const GROUP_ICON = { 0: "owner", 1: "shield", 2: "siren", 3: "wrench" };
function Contacts({ t }) {
  return (
    <section className="section section--contacts" id="contacts">
      <div className="wrap">
        <SectionHead eyebrow={t.contacts.eyebrow} title={t.contacts.title} sub={t.contacts.sub} />
        <div className="contact-grid">
          {t.contacts.groups.map((g, gi) => (
            <Reveal className="contact-col" key={g.label} delay={gi * 60}>
              <div className="contact-col__head">
                <span className="contact-col__ic"><Icon name={GROUP_ICON[gi] || "phone"} size={18} /></span>
                <span className="contact-col__label">{g.label}</span>
              </div>
              <div className="contact-col__body">
                {g.items.map((it) => (
                  <a className="contact" href={"tel:" + it.phone.replace(/[^0-9+]/g, "")} key={it.name}>
                    <span className="contact__txt">
                      <span className="contact__name">{it.name}</span>
                      <span className="contact__role">{it.role}</span>
                    </span>
                    <span className="contact__phone">
                      <span className="contact__num">{it.phone}</span>
                      <span className="contact__call"><Icon name="phone" size={15} /></span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__mark">
          <span className="brandmark">Anya</span>
          <span className="footer__village">{t.village}</span>
        </div>
        <p className="footer__thanks">{t.footer.thanks}</p>
        <a href="#top" className="footer__top">
          {t.footer.top}<Icon name="arrowDown" size={16} style={{ transform: "rotate(180deg)" }} />
        </a>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, Gallery, Details, Living, Contacts, Footer });
