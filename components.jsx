/* Shared UI: Icon set + small building blocks. Exported to window. */

function Icon({ name, size = 24, stroke = 1.6, style, className }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "home":
      return (<svg {...p}><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-5.5h5V20"/></svg>);
    case "ruler":
      return (<svg {...p}><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/></svg>);
    case "land":
      return (<svg {...p}><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 13l9 5 9-5"/></svg>);
    case "bed":
      return (<svg {...p}><path d="M3 7v11M3 12h18v6M21 18v-4a3 3 0 0 0-3-3H9v3"/><circle cx="6.5" cy="9.5" r="1.5"/></svg>);
    case "bath":
      return (<svg {...p}><path d="M4 12V6.5A2.5 2.5 0 0 1 6.5 4 2 2 0 0 1 9 6"/><path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2Z"/><path d="M7 18l-1 2M18 18l1 2"/></svg>);
    case "car":
      return (<svg {...p}><path d="M4 13l1.6-4.2A2 2 0 0 1 7.5 7.5h9a2 2 0 0 1 1.9 1.3L20 13"/><path d="M3 13h18v4H3z"/><circle cx="7" cy="17.5" r="1.4"/><circle cx="17" cy="17.5" r="1.4"/></svg>);
    case "trash":
      return (<svg {...p}><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/></svg>);
    case "people":
      return (<svg {...p}><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-2.7-4.7"/></svg>);
    case "check":
      return (<svg {...p}><path d="M5 12.5 10 17l9-10"/></svg>);
    case "phone":
      return (<svg {...p}><path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5V18a3 3 0 0 1-3 3A16 16 0 0 1 3 6a3 3 0 0 1 3-3Z"/></svg>);
    case "pin":
      return (<svg {...p}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>);
    case "arrow":
      return (<svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrowDown":
      return (<svg {...p}><path d="M12 5v14M6 13l6 6 6-6"/></svg>);
    case "close":
      return (<svg {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>);
    case "left":
      return (<svg {...p}><path d="M15 5l-7 7 7 7"/></svg>);
    case "right":
      return (<svg {...p}><path d="M9 5l7 7-7 7"/></svg>);
    case "globe":
      return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>);
    case "expand":
      return (<svg {...p}><path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"/></svg>);
    case "owner":
      return (<svg {...p}><path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><circle cx="12" cy="14" r="2"/></svg>);
    case "shield":
      return (<svg {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"/></svg>);
    case "wrench":
      return (<svg {...p}><path d="M14.5 6.5a4 4 0 0 1-5 5L4 17v3h3l5.5-5.5a4 4 0 0 1 5-5l-2.2 2.2-1.8-.4-.4-1.8L14.5 6.5Z"/></svg>);
    case "siren":
      return (<svg {...p}><path d="M6 18v-4a6 6 0 0 1 12 0v4M4 18h16M12 4V2M5 7 3.5 5.5M19 7l1.5-1.5"/></svg>);
    default:
      return (<svg {...p}><circle cx="12" cy="12" r="9"/></svg>);
  }
}

/* Section header used across sections */
function SectionHead({ eyebrow, title, sub, align = "left" }) {
  return (
    <div className={"sec-head " + (align === "center" ? "sec-head--center" : "")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="sec-title">{title}</h2>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </div>
  );
}

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, as = "div", className = "", style = {} }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={"reveal " + (shown ? "is-in " : "") + className}
      style={{ ...style, transitionDelay: shown ? delay + "ms" : "0ms" }}
    >
      {children}
    </Tag>
  );
}

Object.assign(window, { Icon, SectionHead, Reveal });
