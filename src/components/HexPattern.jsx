import { useTheme } from "../context/ThemeContext";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// fmix32 — avalanche hash, consecutive inputs have zero correlation
function pr(seed) {
  let h = seed >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 0x100000000;
}

// ── Easing (keyframe-level animation-timing-function) ─────────────────────────
const E_SO = 'cubic-bezier(0,0,.2,1)';    // ease-out  — sweep rise, sparkle fall
const E_SI = 'cubic-bezier(.8,0,1,1)';    // ease-in   — sweep fall
const E_BF = 'cubic-bezier(.42,0,1,1)';   // ease-in   — breath fwd rise
const E_BB = 'cubic-bezier(0,0,.58,1)';   // ease-out  — breath bwd fall
const E_SP = 'cubic-bezier(.1,.9,.6,1)';  // punchy    — sparkle rise

// ── Timing (seconds) ──────────────────────────────────────────────────────────
const TOTAL = 32;

// Sweep — 8 groups
const SF_STEP = 0.55;
const SF_RISE = 0.25, SF_HOLD = 2.0, SF_FALL = 0.35;
const SF_VIS  = SF_RISE + SF_HOLD + SF_FALL;    // 2.60s
const SF_DUR  = 7 * SF_STEP + SF_VIS;           // 6.45s

// Sparkle window
const SP_WIN  = 5.0;   // duration of each sparkle window

// Breathe — 12 groups, unified bloom: rise staggered → all at peak → fall in reverse
// Shapes hold at bOp between bf1 and bb0 (CSS interpolates bOp→bOp = constant hold)
const BF_STEP   = 0.28;
const BF_RISE   = 0.22, BF_FALL = 0.32;
const PEAK_HOLD = 0.80;  // window when ALL shapes are simultaneously at full peak

// Sequence: SF → SB → SP1 → [rise] → PEAK → [fall] → SP2 → quiet → loop
const T_SF  = 0;
const T_SB  = T_SF  + SF_DUR;                              //  6.45s
const T_SP1 = T_SB  + SF_DUR;                              // 12.90s
const T_BF  = T_SP1 + SP_WIN;                              // 17.90s  first shape starts rising
const T_BB  = T_BF  + 11 * BF_STEP + BF_RISE + PEAK_HOLD; // 22.00s  first shape starts falling
const T_SP2 = T_BB  + 11 * BF_STEP + BF_FALL;             // 25.40s  last shape back to base
// Ends at T_SP2 + SP_WIN = 30.40s → quiet until 38s

function p(t) { return (t / TOTAL * 100).toFixed(3); }

// ── Step assignment ────────────────────────────────────────────────────────────
// Sweep fwd: IO sub1→0..sub4→3, Border sub4→4..sub1→7
// Sweep bwd: Border sub1→0..sub4→3, IO sub4→4..sub1→7
function sfStep(i) { const s = (i % 4) + 1; return i < 48 ? s - 1 : 8 - s; }
function sbStep(i) { const s = (i % 4) + 1; return i < 48 ? 8 - s : s - 1; }

// Breath fwd: Inner(1→0,4→1,2→2,3→3), Outter(2→4,3→5,1→6,4→7), Border(4→8,3→9,2→10,1→11)
function bfStep(i) {
  const s = (i % 4) + 1;
  if (i < 24)  { if (s===1) return 0; if (s===4) return 1; if (s===2) return 2; return 3; }
  if (i < 48)  { if (s===2) return 4; if (s===3) return 5; if (s===1) return 6; return 7; }
  if (s===4) return 8; if (s===3) return 9; if (s===2) return 10; return 11;
}

// Breath bwd (exact inverse): Border(1→0,2→1,3→2,4→3), Outter(4→4,1→5,3→6,2→7), Inner(3→8,2→9,4→10,1→11)
function bbStep(i) {
  const s = (i % 4) + 1;
  if (i >= 48) { if (s===1) return 0; if (s===2) return 1; if (s===3) return 2; return 3; }
  if (i >= 24) { if (s===4) return 4; if (s===1) return 5; if (s===3) return 6; return 7; }
  if (s===3) return 8; if (s===2) return 9; if (s===4) return 10; return 11;
}

// ── CSS generation ────────────────────────────────────────────────────────────
function buildCSS(count) {
  // Sparkle: each path flashes independently — random groups emerge naturally
  // from ~25 shapes being simultaneously in different rise/peak/fall phases.
  // Seed = f(path_index, flash_index, window_id) with large prime mixing
  // so adjacent paths have zero timing correlation.
  const N_FLASH = 2;
  const SP_RISE = 0.28, SP_HOLD = 0.18, SP_FALL = 0.65;
  const SP_VIS  = SP_RISE + SP_HOLD + SP_FALL;  // 1.11s
  const E_EAIO  = 'cubic-bezier(.42,0,.58,1)';

  const rules = [];

  for (let i = 0; i < count; i++) {
    const isInner  = i < 24;
    const isOutter = i >= 24 && i < 48;
    const isIO     = i < 48;

    const base = isInner ? 0.08 : isOutter ? 0.06 : 0.04;
    const sOp  = isIO ? 0.87 : 0.70;
    const bOp  = isIO ? 0.90 : 0.63;  // Border capped at 63% → star effect at peak

    const sf0 = T_SF  + sfStep(i) * SF_STEP;
    const sf1 = sf0 + SF_RISE, sf2 = sf1 + SF_HOLD, sf3 = sf2 + SF_FALL;
    const sb0 = T_SB  + sbStep(i) * SF_STEP;
    const sb1 = sb0 + SF_RISE, sb2 = sb1 + SF_HOLD, sb3 = sb2 + SF_FALL;

    // Unified bloom: shape rises at bf0, holds at bOp until bb0, then falls
    const bf0 = T_BF + bfStep(i) * BF_STEP;
    const bf1 = bf0 + BF_RISE;                   // reaches peak
    const bb0 = T_BB + bbStep(i) * BF_STEP;      // starts falling (bfStep+bbStep=11 always)
    const bb1 = bb0 + BF_FALL;                   // back to base

    function sparkStops(winStart, winId) {
      const out = [];
      for (let k = 0; k < N_FLASH; k++) {
        // Mix path × flash × window with large primes — zero inter-path correlation
        const st = (Math.imul(i, 0x1e35a7bd) ^ Math.imul(k, 0x7f4a7c15) ^ winId) >>> 0;
        const so = (st ^ 0xdeadbeef) >>> 0;
        const t  = winStart + pr(st) * (SP_WIN - SP_VIS);
        const op = +(0.40 + pr(so) * 0.50).toFixed(3);
        out.push(
          [t,                       base, E_EAIO],
          [t + SP_RISE,             op,   null],
          [t + SP_RISE + SP_HOLD,   op,   E_EAIO],
          [t + SP_VIS,              base, null],
        );
      }
      return out;
    }

    const raw = [
      [0, base, null],
      [sf0, base, E_SO], [sf1, sOp, null], [sf2, sOp, E_SI], [sf3, base, null],
      [sb0, base, E_SO], [sb1, sOp, null], [sb2, sOp, E_SI], [sb3, base, null],
      ...sparkStops(T_SP1, 0x1337cafe),
      [bf0, base, E_BF], [bf1, bOp, null],  // rise  — holds at bOp until bb0
      [bb0, bOp,  E_BB], [bb1, base, null], // fall
      ...sparkStops(T_SP2, 0x7777abcd),
      [TOTAL, base, null],
    ];

    raw.sort((a, b) => a[0] - b[0]);
    const stops = raw.filter((s, idx) => idx === 0 || s[0] - raw[idx - 1][0] > 0.005);

    const kf = stops.map(([t, v, fn]) => {
      let s = `${p(t)}%{opacity:${v.toFixed(3)}`;
      if (fn) s += `;animation-timing-function:${fn}`;
      return s + '}';
    }).join('');

    rules.push(`@keyframes h${i}{${kf}}`);
  }

  return rules.join('\n');
}

// ── Path data — 96 paths from Motif-Hexa.svg ─────────────────────────────────
// Inner (0–23) → Outter (24–47) → Border (48–95)
// Within each group: directions A→F (Inner/Outter), A→L (Border), sub-shapes 1→4
const PATHS = [
  // Inner A
  "M46.272,25.894L60.14,49.957L62.249,46.303L50.473,25.908L46.272,25.894Z",
  "M55.292,30.913L58.179,25.912L62.391,25.907L57.394,34.562L55.292,30.913Z",
  "M60.285,39.589L58.183,35.94L63.996,25.912L68.197,25.926L60.285,39.589Z",
  "M63.201,44.654L61.099,41.005L69.831,25.923L74.042,25.919L63.201,44.654Z",
  // Inner B
  "M76.132,27.104L62.227,51.146L66.445,51.146L78.221,30.749L76.132,27.104Z",
  "M76.296,37.425L82.07,37.425L84.18,41.07L74.186,41.07L76.296,37.425Z",
  "M71.278,46.087L73.388,42.442L84.978,42.463L87.067,46.108L71.278,46.087Z",
  "M68.35,51.146L70.459,47.5L87.886,47.521L89.996,51.166L68.35,51.146Z",
  // Inner C
  "M90.014,53.569L62.241,53.547L64.35,57.201L87.901,57.2L90.014,53.569Z",
  "M81.157,58.871L84.045,63.872L81.943,67.521L76.946,58.867L81.157,58.871Z",
  "M71.147,58.857L75.359,58.861L81.136,68.909L79.024,72.541L71.147,58.857Z",
  "M65.302,58.85L69.514,58.854L78.21,73.957L76.108,77.606L65.302,58.85Z",
  // Inner D
  "M74.036,78.823L60.168,54.761L58.059,58.414L69.835,78.809L74.036,78.823Z",
  "M65.016,73.805L62.128,78.806L57.917,78.81L62.914,70.155L65.016,73.805Z",
  "M60.023,65.128L62.125,68.778L56.312,78.805L52.11,78.791L60.023,65.128Z",
  "M57.106,60.063L59.209,63.712L50.477,78.794L46.266,78.799L57.106,60.063Z",
  // Inner E
  "M44.176,77.613L58.081,53.572L53.862,53.572L42.087,73.968L44.176,77.613Z",
  "M44.012,67.292L38.237,67.292L36.128,63.647L46.121,63.647L44.012,67.292Z",
  "M49.029,58.63L46.92,62.275L35.329,62.254L33.24,58.609L49.029,58.63Z",
  "M51.958,53.572L49.849,57.217L32.421,57.196L30.312,53.551L51.958,53.572Z",
  // Inner F
  "M30.294,51.149L58.067,51.17L55.958,47.516L32.406,47.517L30.294,51.149Z",
  "M39.15,45.846L36.263,40.845L38.365,37.196L43.362,45.85L39.15,45.846Z",
  "M49.161,45.86L44.949,45.856L39.172,35.808L41.284,32.176L49.161,45.86Z",
  "M55.005,45.867L50.794,45.863L42.098,30.761L44.2,27.111L55.005,45.867Z",
  // Outter A
  "M46.266,25.982L60.134,1.919L62.243,5.572L50.467,25.968L46.266,25.982Z",
  "M55.286,20.963L58.173,25.964L62.385,25.968L57.388,17.314L55.286,20.963Z",
  "M60.279,12.287L58.177,15.936L63.99,25.963L68.191,25.95L60.279,12.287Z",
  "M63.195,7.222L61.093,10.871L69.825,25.953L74.036,25.957L63.195,7.222Z",
  // Outter B
  "M76.053,27.143L103.826,27.122L101.717,30.775L78.165,30.774L76.053,27.143Z",
  "M84.909,32.445L82.022,37.446L84.124,41.096L89.121,32.441L84.909,32.445Z",
  "M94.92,32.431L90.708,32.435L84.931,42.483L87.043,46.115L94.92,32.431Z",
  "M100.764,32.424L96.553,32.428L87.857,47.531L89.959,51.18L100.764,32.424Z",
  // Outter C
  "M89.941,53.52L103.846,77.561L99.627,77.561L87.852,57.165L89.941,53.52Z",
  "M89.777,63.841L84.002,63.841L81.893,67.486L91.887,67.486L89.777,63.841Z",
  "M94.794,72.503L92.685,68.858L81.094,68.879L79.006,72.524L94.794,72.503Z",
  "M97.723,77.561L95.614,73.916L78.187,73.937L76.077,77.582L97.723,77.561Z",
  // Outter D
  "M74.042,78.736L60.174,102.798L58.065,99.145L69.841,78.749L74.042,78.736Z",
  "M65.022,83.754L62.134,78.753L57.923,78.749L62.919,87.404L65.022,83.754Z",
  "M60.029,92.431L62.131,88.781L56.318,78.754L52.116,78.767L60.029,92.431Z",
  "M57.112,97.496L59.214,93.846L50.483,78.764L46.272,78.76L57.112,97.496Z",
  // Outter E
  "M44.255,77.575L16.482,77.596L18.591,73.942L42.142,73.943L44.255,77.575Z",
  "M35.398,72.272L38.286,67.271L36.184,63.622L31.187,72.276L35.398,72.272Z",
  "M25.388,72.286L29.599,72.282L35.377,62.234L33.264,58.602L25.388,72.286Z",
  "M19.543,72.293L23.755,72.289L32.45,57.186L30.348,53.537L19.543,72.293Z",
  // Outter F
  "M30.367,51.197L16.462,27.156L20.68,27.156L32.455,47.552L30.367,51.197Z",
  "M30.53,40.876L36.305,40.876L38.414,37.231L28.421,37.231L30.53,40.876Z",
  "M25.513,32.214L27.622,35.859L39.213,35.839L41.302,32.194L25.513,32.214Z",
  "M22.585,27.156L24.694,30.801L42.121,30.781L44.23,27.136L22.585,27.156Z",
  // Border A
  "M89.823,0.237L62.05,0.216L64.159,3.87L87.71,3.869L89.823,0.237Z",
  "M80.966,5.54L83.854,10.541L81.751,14.19L76.755,5.536L80.966,5.54Z",
  "M70.956,5.526L75.167,5.53L80.945,15.578L78.832,19.21L70.956,5.526Z",
  "M65.111,5.519L69.323,5.523L78.018,20.625L75.916,24.275L65.111,5.519Z",
  // Border B
  "M89.75,0.188L103.655,24.23L99.436,24.23L87.661,3.834L89.75,0.188Z",
  "M89.586,10.509L83.811,10.509L81.702,14.155L91.695,14.155L89.586,10.509Z",
  "M94.603,19.172L92.494,15.527L80.903,15.547L78.814,19.192L94.603,19.172Z",
  "M97.532,24.23L95.422,20.585L77.995,20.605L75.886,24.25L97.532,24.23Z",
  // Border C
  "M119.641,51.972L105.773,27.909L103.664,31.563L115.44,51.958L119.641,51.972Z",
  "M110.621,46.953L107.733,51.955L103.522,51.959L108.519,43.304L110.621,46.953Z",
  "M105.628,38.277L107.73,41.926L101.917,51.954L97.716,51.94L105.628,38.277Z",
  "M102.711,33.212L104.814,36.861L96.082,51.943L91.871,51.947L102.711,33.212Z",
  // Border D
  "M119.647,51.885L105.779,75.947L103.67,72.294L115.446,51.898L119.647,51.885Z",
  "M110.627,56.903L107.739,51.902L103.528,51.898L108.525,60.552L110.627,56.903Z",
  "M105.634,65.579L107.736,61.93L101.923,51.903L97.722,51.916L105.634,65.579Z",
  "M102.717,70.644L104.819,66.995L96.088,51.913L91.877,51.909L102.717,70.644Z",
  // Border E
  "M89.747,103.663L103.652,79.621L99.433,79.621L87.658,100.018L89.747,103.663Z",
  "M89.583,93.342L83.808,93.342L81.699,89.697L91.692,89.697L89.583,93.342Z",
  "M94.6,84.68L92.491,88.325L80.9,88.304L78.811,84.659L94.6,84.68Z",
  "M97.529,79.621L95.419,83.266L77.992,83.246L75.883,79.601L97.529,79.621Z",
  // Border F
  "M89.826,103.624L62.053,103.645L64.162,99.992L87.713,99.993L89.826,103.624Z",
  "M80.969,98.322L83.857,93.321L81.754,89.671L76.758,98.326L80.969,98.322Z",
  "M70.959,98.336L75.17,98.332L80.948,88.284L78.835,84.652L70.959,98.336Z",
  "M65.114,98.343L69.326,98.339L78.021,83.236L75.919,79.587L65.114,98.343Z",
  // Border G
  "M30.034,103.619L57.807,103.64L55.698,99.987L32.147,99.988L30.034,103.619Z",
  "M38.89,98.317L36.003,93.316L38.105,89.666L43.102,98.321L38.89,98.317Z",
  "M48.901,98.331L44.69,98.326L38.912,88.278L41.024,84.647L48.901,98.331Z",
  "M54.745,98.338L50.534,98.334L41.838,83.231L43.941,79.582L54.745,98.338Z",
  // Border H
  "M30.107,103.668L16.202,79.626L20.421,79.626L32.196,100.023L30.107,103.668Z",
  "M30.271,93.347L36.045,93.347L38.155,89.702L28.161,89.702L30.271,93.347Z",
  "M25.253,84.685L27.363,88.33L38.953,88.309L41.042,84.664L25.253,84.685Z",
  "M22.325,79.626L24.434,83.272L41.861,83.251L43.971,79.606L22.325,79.626Z",
  // Border I
  "M0.216,51.885L14.084,75.947L16.193,72.294L4.417,51.898L0.216,51.885Z",
  "M9.236,56.903L12.123,51.902L16.335,51.898L11.338,60.552L9.236,56.903Z",
  "M14.229,65.579L12.127,61.93L17.94,51.903L22.141,51.916L14.229,65.579Z",
  "M17.145,70.644L15.043,66.995L23.774,51.913L27.986,51.909L17.145,70.644Z",
  // Border J
  "M0.21,51.972L14.078,27.909L16.187,31.563L4.411,51.958L0.21,51.972Z",
  "M9.23,46.953L12.117,51.955L16.329,51.959L11.332,43.304L9.23,46.953Z",
  "M14.223,38.277L12.121,41.926L17.934,51.954L22.135,51.94L14.223,38.277Z",
  "M17.139,33.212L15.037,36.861L23.768,51.943L27.98,51.947L17.139,33.212Z",
  // Border K
  "M30.11,0.194L16.205,24.235L20.424,24.235L32.199,3.839L30.11,0.194Z",
  "M30.274,10.515L36.048,10.515L38.158,14.16L28.164,14.16L30.274,10.515Z",
  "M25.256,19.177L27.366,15.532L38.956,15.552L41.045,19.198L25.256,19.177Z",
  "M22.328,24.235L24.437,20.59L41.864,20.61L43.974,24.256L22.328,24.235Z",
  // Border L
  "M30.031,0.232L57.804,0.211L55.695,3.864L32.144,3.864L30.031,0.232Z",
  "M38.888,5.535L36,10.536L38.102,14.185L43.099,5.531L38.888,5.535Z",
  "M48.898,5.521L44.687,5.525L38.909,15.573L41.021,19.204L48.898,5.521Z",
  "M54.742,5.514L50.531,5.518L41.835,20.62L43.938,24.27L54.742,5.514Z",
];

const ANIMATION_CSS = buildCSS(PATHS.length);

// Transforms from Motif-Hexa.svg (45° tilt)
const OUTER_T = "matrix(0.896552,0,0,0.983607,2.689655,10.819672)";
const INNER_T = "matrix(0.965951,-0.508333,0.557692,0.880459,-31.847724,34.742859)";

export default function HexPattern() {
  const { tokens: T } = useTheme();
  return (
    <>
      <style>{ANIMATION_CSS}</style>
      <div style={{
        width: "100%", height: "100%",
        clipPath: HEX_CLIP,
        background: "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <svg
          viewBox="0 0 104 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", flexShrink: 0, color: T.accent }}
        >
          <g transform={OUTER_T}>
            <g transform={INNER_T}>
              {PATHS.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="currentColor"
                  style={{ animation: `h${i} ${TOTAL}s linear infinite` }}
                />
              ))}
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
