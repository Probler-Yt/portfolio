// Bar comparison drawn like a dimensioned sketch: hatched original, solid optimised part,
// and a dimension line across the material that was removed.
export default function MassDiagram({ reduction }: { reduction: number }) {
  const x0 = 1;
  const full = 336;
  const kept = full * (1 - reduction / 100);
  const xk = x0 + kept;
  const xe = x0 + full;

  return (
    <figure className="mass">
      <svg
        viewBox="0 0 340 152"
        role="img"
        aria-label={`Mass of the optimised upright compared with the original: ${(100 - reduction).toFixed(1)}% of the original, a ${reduction}% reduction.`}
      >
        <defs>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" className="mass__hatch" />
          </pattern>
          <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 1.5 L10 5 L0 8.5 Z" className="mass__arrowhead" />
          </marker>
        </defs>

        <text x={x0} y="18" className="mass__label">Original upright, 100%</text>
        <rect x={x0} y="26" width={full} height="24" fill="url(#hatch)" className="mass__outline" />

        <text x={x0} y="76" className="mass__label">Optimised upright, {(100 - reduction).toFixed(1)}%</text>
        <rect x={x0} y="84" width={kept} height="24" className="mass__kept" />

        {/* extension lines */}
        <line x1={xk} y1="112" x2={xk} y2="148" className="mass__thin" />
        <line x1={xe} y1="54" x2={xe} y2="148" className="mass__thin" />
        {/* dimension line */}
        <line x1={xk + 1} y1="142" x2={xe - 1} y2="142" className="mass__dim" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
        <text x={(xk + xe) / 2} y="134" textAnchor="middle" className="mass__value">
          {reduction}% lighter
        </text>
      </svg>
    </figure>
  );
}
