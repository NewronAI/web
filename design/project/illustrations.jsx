/* global React */
/* =========================================================
   Newron — schematic SVG illustrations (one per page hero).
   On-brand: crisp geometry, indigo→orange gradient accents,
   node terminals echoing the logo. Theme-aware via
   stroke="currentColor" (svg color = var(--ink)) so they
   read in light and dark mode. No text content.
   ========================================================= */

function Frame({ id, children }) {
  return (
    <svg viewBox="0 0 440 320" width="100%" role="img" aria-hidden="true"
      style={{ display: "block", color: "var(--ink)", maxWidth: 540, margin: "0 auto" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3730a3" /><stop offset="0.55" stopColor="#4f46e5" /><stop offset="1" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id={id + "b"} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60a5fa" /><stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="424" height="304" rx="16" fill="rgba(99,102,241,0.045)" stroke="currentColor" strokeOpacity="0.12" />
      {children}
    </svg>);
}
const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
// faint / mid structural strokes
const f = (o) => ({ ...S, strokeOpacity: o });

// node terminal (logo echo)
function Node({ x, y, r = 5, grad }) {
  return <circle cx={x} cy={y} r={r} fill={grad ? grad : "currentColor"} stroke="var(--bg)" strokeWidth="2" />;
}

// ── 01 Lending — credit memo + bar chart + check ─────────
function IlloLending() {
  const id = "il-lend";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <rect x="42" y="54" width="190" height="212" rx="10" />
        <line x1="64" y1="86" x2="180" y2="86" /><line x1="64" y1="108" x2="210" y2="108" strokeOpacity="0.28" />
        <line x1="64" y1="128" x2="200" y2="128" strokeOpacity="0.28" /><line x1="64" y1="148" x2="160" y2="148" strokeOpacity="0.28" />
      </g>
      <rect x="64" y="74" width="74" height="6" rx="3" fill={`url(#${id})`} />
      {/* bar chart card */}
      <g {...f(0.5)}><rect x="258" y="120" width="138" height="146" rx="10" /></g>
      {[["188", "70"], ["218", "104"], ["248", "58"], ["278", "118"]].map(([x, h], i) =>
        <rect key={i} x={Number(x) + 76} y={246 - Number(h)} width="16" height={h} rx="3" fill={i === 3 ? `url(#${id})` : "currentColor"} fillOpacity={i === 3 ? 1 : 0.22} />)}
      {/* check badge */}
      <circle cx="300" cy="74" r="26" fill={`url(#${id})`} />
      <path d="M289 74 l8 8 l15 -16" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <g {...f(0.22)}><line x1="42" y1="206" x2="232" y2="206" /></g>
      <Node x="42" y="54" grad={`url(#${id})`} /><Node x="396" y="266" r="4" />
    </Frame>);
}

// ── 02 Insurance AI — claim doc + risk gauge ─────────────
function IlloInsurance() {
  const id = "il-ins";
  return (
    <Frame id={id}>
      <g {...f(0.5)}><rect x="44" y="60" width="150" height="200" rx="10" />
        <line x1="66" y1="92" x2="150" y2="92" /><line x1="66" y1="116" x2="172" y2="116" strokeOpacity="0.28" />
        <line x1="66" y1="138" x2="172" y2="138" strokeOpacity="0.28" /><line x1="66" y1="160" x2="140" y2="160" strokeOpacity="0.28" /></g>
      <rect x="66" y="80" width="60" height="6" rx="3" fill={`url(#${id})`} />
      {/* gauge */}
      <g transform="translate(312,150)">
        <path d="M-66 28 A66 66 0 0 1 66 28" {...f(0.25)} strokeWidth="10" />
        <path d="M-66 28 A66 66 0 0 1 18 -62" fill="none" stroke={`url(#${id})`} strokeWidth="10" strokeLinecap="round" />
        <line x1="0" y1="28" x2="30" y2="-30" {...S} strokeWidth="3" />
        <circle cx="0" cy="28" r="6" fill="currentColor" />
      </g>
      <g {...f(0.5)}><circle cx="312" cy="150" r="92" /></g>
      <Node x="44" y="60" grad={`url(#${id})`} /><Node x="194" y="260" r="4" />
    </Frame>);
}

// ── 03 Governance — speech bubbles + waveform ────────────
function IlloGovernance() {
  const id = "il-gov";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <path d="M48 86 h150 a12 12 0 0 1 12 12 v44 a12 12 0 0 1 -12 12 h-104 l-26 22 v-22 a12 12 0 0 1 -12 -12 v-44 a12 12 0 0 1 12 -12 z" />
      </g>
      {/* waveform inside */}
      <g stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" fill="none">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const hx = 70 + i * 16; const hh = [14, 26, 40, 22, 34, 18, 30, 12][i];
          return <line key={i} x1={hx} y1={120 - hh / 2} x2={hx} y2={120 + hh / 2} strokeOpacity={i === 2 ? 1 : 0.55} />;
        })}
      </g>
      <g {...f(0.5)}>
        <path d="M242 168 h150 a12 12 0 0 1 12 12 v44 a12 12 0 0 1 -12 12 h-150 a12 12 0 0 1 -12 -12 v-22 l-18 -10 l18 -10 v-2 a12 12 0 0 1 12 -12 z" />
        <line x1="256" y1="196" x2="372" y2="196" strokeOpacity="0.3" /><line x1="256" y1="216" x2="344" y2="216" strokeOpacity="0.3" />
      </g>
      <rect x="256" y="184" width="56" height="6" rx="3" fill={`url(#${id})`} />
      <Node x="392" y="168" grad={`url(#${id})`} /><Node x="48" y="86" r="4" />
    </Frame>);
}

// ── 04 Custom AI — model node graph ──────────────────────
function IlloCustom() {
  const id = "il-cus";
  const L = [[70, 96], [70, 160], [70, 224]];
  const M = [[200, 128], [200, 192]];
  const R = [[330, 160]];
  return (
    <Frame id={id}>
      <g {...f(0.32)}>
        {L.map((a, i) => M.map((b, j) => <line key={`l${i}${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />))}
        {M.map((a, i) => R.map((b, j) => <line key={`r${i}${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />))}
      </g>
      {L.map((p, i) => <Node key={`L${i}`} x={p[0]} y={p[1]} r={7} />)}
      {M.map((p, i) => <circle key={`M${i}`} cx={p[0]} cy={p[1]} r="9" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.4" />)}
      <circle cx={R[0][0]} cy={R[0][1]} r="14" fill={`url(#${id})`} />
      <path d={`M${R[0][0] - 6} ${R[0][1]} l5 5 l9 -10`} stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g {...f(0.5)}><rect x="300" y="70" width="96" height="40" rx="8" /></g>
      <rect x="316" y="86" width="40" height="6" rx="3" fill={`url(#${id})`} />
      <Node x="396" y="250" r="4" />
    </Frame>);
}

// ── 05 Banks — columned building + ledger ────────────────
function IlloBank() {
  const id = "il-bank";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <path d="M120 92 L220 56 L320 92" />
        <line x1="112" y1="104" x2="328" y2="104" />
        {[132, 168, 204, 240, 276, 308].map((x) => <line key={x} x1={x} y1="116" x2={x} y2="208" strokeOpacity="0.45" />)}
        <line x1="112" y1="220" x2="328" y2="220" /><line x1="100" y1="234" x2="340" y2="234" />
      </g>
      <rect x="170" y="70" width="100" height="8" rx="4" fill={`url(#${id})`} transform="rotate(-19 220 74)" />
      <circle cx="220" cy="92" r="6" fill={`url(#${id})`} />
      {/* ledger card */}
      <g {...f(0.45)}><rect x="248" y="232" width="150" height="64" rx="9" />
        <line x1="266" y1="256" x2="360" y2="256" strokeOpacity="0.3" /><line x1="266" y1="274" x2="380" y2="274" strokeOpacity="0.3" /></g>
      <rect x="266" y="248" width="40" height="6" rx="3" fill={`url(#${id})`} />
      <Node x="120" y="92" r="4" /><Node x="398" y="232" grad={`url(#${id})`} r="4" />
    </Frame>);
}

// ── 06 NBFCs — speed gauge + stacked coins ───────────────
function IlloNBFC() {
  const id = "il-nbfc";
  return (
    <Frame id={id}>
      <g transform="translate(150,168)">
        <circle r="92" {...f(0.45)} />
        <path d="M-66 28 A66 66 0 1 1 66 28" {...f(0.25)} strokeWidth="9" />
        <path d="M-66 28 A66 66 0 0 1 52 -42" fill="none" stroke={`url(#${id})`} strokeWidth="9" strokeLinecap="round" />
        <line x1="0" y1="0" x2="40" y2="-40" {...S} strokeWidth="3.2" />
        <circle r="6" fill="currentColor" />
        {[-50, -25, 0, 25, 50].map((a) => <line key={a} x1={Math.cos((a - 90) * Math.PI / 180) * 60} y1={Math.sin((a - 90) * Math.PI / 180) * 60} x2={Math.cos((a - 90) * Math.PI / 180) * 70} y2={Math.sin((a - 90) * Math.PI / 180) * 70} {...f(0.4)} />)}
      </g>
      {/* coins */}
      <g {...f(0.5)}>
        {[256, 232, 208].map((y, i) => <ellipse key={y} cx="330" cy={y} rx="46" ry="15" fill={i === 2 ? `url(#${id})` : "none"} fillOpacity={i === 2 ? 1 : 0} />)}
        <line x1="284" y1="208" x2="284" y2="256" /><line x1="376" y1="208" x2="376" y2="256" />
      </g>
      <Node x="330" y="208" r="4" /><Node x="58" y="168" r="4" />
    </Frame>);
}

// ── 07 Insurance industry — shield + pulse line ──────────
function IlloInsuranceInd() {
  const id = "il-insi";
  return (
    <Frame id={id}>
      <path d="M150 58 L226 84 V160 C226 208 192 236 150 256 C108 236 74 208 74 160 V84 Z" {...f(0.5)} />
      <path d="M150 58 L226 84 V160 C226 208 192 236 150 256 C108 236 74 208 74 160 V84 Z" fill={`url(#${id})`} fillOpacity="0.08" />
      <path d="M92 158 h28 l12 -28 l20 56 l12 -28 h64" fill="none" stroke={`url(#${id})`} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* doc */}
      <g {...f(0.45)}><rect x="262" y="96" width="128" height="150" rx="10" />
        <line x1="282" y1="128" x2="356" y2="128" /><line x1="282" y1="150" x2="372" y2="150" strokeOpacity="0.3" />
        <line x1="282" y1="172" x2="372" y2="172" strokeOpacity="0.3" /><line x1="282" y1="194" x2="340" y2="194" strokeOpacity="0.3" /></g>
      <rect x="282" y="116" width="48" height="6" rx="3" fill={`url(#${id})`} />
      <Node x="150" y="58" grad={`url(#${id})`} /><Node x="390" y="246" r="4" />
    </Frame>);
}

// ── 08 Public sector — map pin + people ──────────────────
function IlloPublic() {
  const id = "il-pub";
  return (
    <Frame id={id}>
      <g {...f(0.32)}>
        <rect x="44" y="60" width="352" height="200" rx="12" />
        <path d="M44 150 C120 120 180 200 256 168 S360 120 396 150" /><path d="M44 200 C120 176 190 236 256 214 S350 188 396 210" strokeOpacity="0.5" />
      </g>
      <path d="M186 96 c-26 0 -46 20 -46 46 c0 32 46 70 46 70 c0 0 46 -38 46 -70 c0 -26 -20 -46 -46 -46 z" {...f(0.55)} />
      <path d="M186 96 c-26 0 -46 20 -46 46 c0 32 46 70 46 70 c0 0 46 -38 46 -70 c0 -26 -20 -46 -46 -46 z" fill={`url(#${id})`} fillOpacity="0.12" />
      <circle cx="186" cy="140" r="16" fill={`url(#${id})`} />
      {/* people */}
      <g {...f(0.5)}>
        {[296, 332, 368].map((x, i) => <g key={x}><circle cx={x} cy="206" r="11" fillOpacity={i === 1 ? 1 : 0} fill={i === 1 ? `url(#${id})` : "none"} /><path d={`M${x - 16} 244 c0 -16 8 -24 16 -24 s16 8 16 24`} /></g>)}
      </g>
      <Node x="396" y="60" r="4" /><Node x="44" y="260" r="4" />
    </Frame>);
}

// ── 09 About — constellation network ─────────────────────
function IlloAbout() {
  const id = "il-abt";
  const pts = [[88, 92], [170, 150], [110, 226], [232, 104], [262, 210], [330, 150], [360, 250], [300, 78]];
  const edges = [[0, 1], [1, 2], [1, 3], [3, 5], [1, 4], [4, 5], [5, 6], [3, 7], [5, 7]];
  return (
    <Frame id={id}>
      <g {...f(0.3)}>{edges.map(([a, b], i) => <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />)}</g>
      {pts.map((p, i) => i === 1 || i === 5
        ? <circle key={i} cx={p[0]} cy={p[1]} r="11" fill={`url(#${id})`} />
        : <Node key={i} x={p[0]} y={p[1]} r={6} />)}
    </Frame>);
}

// ── 10 Careers — growth / org tree ───────────────────────
function IlloCareers() {
  const id = "il-car";
  return (
    <Frame id={id}>
      <g {...f(0.32)}>
        <line x1="220" y1="92" x2="120" y2="168" /><line x1="220" y1="92" x2="320" y2="168" />
        <line x1="120" y1="168" x2="80" y2="244" /><line x1="120" y1="168" x2="160" y2="244" />
        <line x1="320" y1="168" x2="280" y2="244" /><line x1="320" y1="168" x2="360" y2="244" />
      </g>
      <circle cx="220" cy="92" r="13" fill={`url(#${id})`} />
      {[[120, 168], [320, 168]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="9" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.4" />)}
      {[[80, 244], [160, 244], [280, 244], [360, 244]].map((p, i) => <Node key={i} x={p[0]} y={p[1]} r={6} grad={i === 1 ? `url(#${id})` : null} />)}
      {/* upward arrow */}
      <path d="M386 150 l0 -54 M374 110 l12 -16 l12 16" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>);
}

// ── 11 Press — broadcast waves + card ────────────────────
function IlloPress() {
  const id = "il-press";
  return (
    <Frame id={id}>
      <g transform="translate(120,150)">
        <circle r="13" fill={`url(#${id})`} />
        {[30, 52, 74].map((r, i) => <path key={r} d={`M0 ${-r} A${r} ${r} 0 0 1 0 ${r}`} {...f(0.52 - i * 0.14)} strokeWidth="2.8" />)}
      </g>
      <g {...f(0.5)}><rect x="244" y="92" width="152" height="136" rx="10" />
        <line x1="266" y1="158" x2="374" y2="158" strokeOpacity="0.3" /><line x1="266" y1="178" x2="374" y2="178" strokeOpacity="0.3" /><line x1="266" y1="198" x2="338" y2="198" strokeOpacity="0.3" /></g>
      <rect x="266" y="112" width="108" height="30" rx="6" fill={`url(#${id})`} fillOpacity="0.16" />
      <rect x="266" y="120" width="54" height="6" rx="3" fill={`url(#${id})`} />
      <Node x="396" y="92" r="4" /><Node x="120" y="150" r="0" />
    </Frame>);
}

// ── 12 Open source — git branch + cube ───────────────────
function IlloOpenSource() {
  const id = "il-oss";
  return (
    <Frame id={id}>
      <g {...f(0.4)}>
        <line x1="110" y1="80" x2="110" y2="248" />
        <path d="M110 150 C110 120 200 132 200 104" /><path d="M110 196 C110 226 250 214 250 244" />
      </g>
      <Node x="110" y="80" r="6" /><Node x="110" y="248" r="6" />
      <circle cx="200" cy="104" r="11" fill={`url(#${id})`} /><circle cx="250" cy="244" r="9" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.4" />
      {/* iso cube */}
      <g transform="translate(322,150)">
        <path d="M0 -54 L48 -28 L48 28 L0 54 L-48 28 L-48 -28 Z" {...f(0.45)} />
        <path d="M0 -54 L48 -28 L0 0 L-48 -28 Z" fill={`url(#${id})`} fillOpacity="0.9" />
        <path d="M0 0 L48 -28 L48 28 L0 54 Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M0 0 L0 54 M0 0 L-48 -28 M0 0 L48 -28" {...f(0.4)} />
      </g>
    </Frame>);
}

// ── 13 Privacy — lock + key ──────────────────────────────
function IlloPrivacy() {
  const id = "il-priv";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <path d="M150 150 v-20 a40 40 0 0 1 80 0 v20" />
        <rect x="124" y="150" width="132" height="104" rx="14" />
      </g>
      <rect x="124" y="150" width="132" height="104" rx="14" fill={`url(#${id})`} fillOpacity="0.08" />
      <circle cx="190" cy="194" r="13" fill={`url(#${id})`} /><rect x="186" y="200" width="8" height="26" rx="4" fill={`url(#${id})`} />
      {/* key */}
      <g transform="translate(322,176)" stroke={`url(#${id})`} strokeWidth="3.2" fill="none" strokeLinecap="round">
        <circle r="22" /><circle r="9" />
        <line x1="22" y1="0" x2="70" y2="0" /><line x1="52" y1="0" x2="52" y2="16" /><line x1="66" y1="0" x2="66" y2="14" />
      </g>
      <Node x="124" y="254" r="4" /><Node x="392" y="176" r="0" />
    </Frame>);
}

// ── 14 Terms — document + balance ────────────────────────
function IlloTerms() {
  const id = "il-terms";
  return (
    <Frame id={id}>
      <g {...f(0.5)}>
        <path d="M96 56 h120 l40 40 v168 a8 8 0 0 1 -8 8 h-152 a8 8 0 0 1 -8 -8 V64 a8 8 0 0 1 8 -8 z" />
        <path d="M216 56 v40 h40" strokeOpacity="0.5" />
        <line x1="118" y1="120" x2="200" y2="120" strokeOpacity="0.3" /><line x1="118" y1="144" x2="238" y2="144" strokeOpacity="0.3" />
        <line x1="118" y1="168" x2="238" y2="168" strokeOpacity="0.3" /><line x1="118" y1="192" x2="200" y2="192" strokeOpacity="0.3" />
      </g>
      <rect x="118" y="98" width="64" height="7" rx="3.5" fill={`url(#${id})`} />
      {/* balance */}
      <g transform="translate(330,150)">
        <g {...f(0.5)}>
          <line x1="0" y1="-54" x2="0" y2="58" />
          <line x1="-24" y1="62" x2="24" y2="62" />
          <path d="M-15 62 L0 40 L15 62" />
        </g>
        <line x1="-54" y1="-42" x2="54" y2="-42" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
        <g {...f(0.5)}>
          <line x1="-54" y1="-42" x2="-70" y2="2" /><line x1="-54" y1="-42" x2="-38" y2="2" />
          <path d="M-72 2 a18 10 0 0 0 36 0" />
          <line x1="54" y1="-42" x2="38" y2="2" /><line x1="54" y1="-42" x2="70" y2="2" />
          <path d="M36 2 a18 10 0 0 0 36 0" />
        </g>
        <circle cx="0" cy="-42" r="6" fill={`url(#${id})`} />
      </g>
      <Node x="96" y="56" r="4" />
    </Frame>);
}

// ── 15 Security — layered shield + grid ──────────────────
function IlloSecurity() {
  const id = "il-sec";
  return (
    <Frame id={id}>
      <g {...f(0.22)}>{[0, 1, 2, 3, 4].map((i) => <line key={"v" + i} x1={300 + i * 26} y1="74" x2={300 + i * 26} y2="250" />)}{[0, 1, 2, 3, 4, 5].map((i) => <line key={"h" + i} x1="296" y1={78 + i * 30} x2="412" y2={78 + i * 30} />)}</g>
      <path d="M158 50 L246 80 V164 C246 218 208 250 158 272 C108 250 70 218 70 164 V80 Z" {...f(0.5)} />
      <path d="M158 76 L222 98 V162 C222 202 194 226 158 242 C122 226 94 202 94 162 V98 Z" fill={`url(#${id})`} fillOpacity="0.12" {...f(0.35)} />
      <path d="M158 50 L246 80 V164 C246 218 208 250 158 272" fill="none" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
      <path d="M132 158 l18 18 l34 -40" fill="none" stroke={`url(#${id})`} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      <Node x="158" y="50" grad={`url(#${id})`} /><Node x="412" y="78" r="4" />
    </Frame>);
}

// ── 16 Responsible AI — balance of human + model ─────────
function IlloResponsible() {
  const id = "il-resp";
  return (
    <Frame id={id}>
      <g {...f(0.4)}><line x1="220" y1="70" x2="220" y2="250" /><line x1="120" y1="104" x2="320" y2="104" /></g>
      <circle cx="220" cy="70" r="9" fill={`url(#${id})`} />
      {/* left pan: human */}
      <g {...f(0.5)}><line x1="120" y1="104" x2="100" y2="168" /><line x1="120" y1="104" x2="140" y2="168" /><path d="M96 172 h48" /></g>
      <circle cx="120" cy="196" r="13" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.45" />
      <path d="M100 232 c0 -18 9 -28 20 -28 s20 10 20 28" {...f(0.45)} />
      {/* right pan: model node cluster */}
      <g {...f(0.5)}><line x1="320" y1="104" x2="300" y2="168" /><line x1="320" y1="104" x2="340" y2="168" /><path d="M296 172 h48" /></g>
      <g transform="translate(320,206)">
        <circle r="20" fill={`url(#${id})`} fillOpacity="0.1" stroke={`url(#${id})`} strokeWidth="2" />
        {[[-8, -6], [9, -7], [0, 9]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4.5" fill={`url(#${id})`} />)}
        <path d="M-8 -6 L9 -7 L0 9 Z" fill="none" stroke={`url(#${id})`} strokeWidth="1.4" strokeOpacity="0.6" />
      </g>
      <Node x="220" y="250" r="4" />
    </Frame>);
}

Object.assign(window, {
  IlloLending, IlloInsurance, IlloGovernance, IlloCustom,
  IlloBank, IlloNBFC, IlloInsuranceInd, IlloPublic,
  IlloAbout, IlloCareers, IlloPress, IlloOpenSource,
  IlloPrivacy, IlloTerms, IlloSecurity, IlloResponsible
});
