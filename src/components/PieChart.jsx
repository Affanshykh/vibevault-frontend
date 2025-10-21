const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  }
}

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y, 'L', x, y, 'Z'].join(' ')
}

const PieChart = ({ data }) => {
  const total = data.reduce((sum, slice) => sum + slice.value, 0)
  let startAngle = 0

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 200 200" className="h-60 w-60">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {data.map((slice) => {
          const angle = (slice.value / total) * 360
          const endAngle = startAngle + angle
          const path = describeArc(100, 100, 90, startAngle, endAngle)
          const midAngle = startAngle + angle / 2
          const labelPosition = polarToCartesian(100, 100, 60, midAngle)
          const currentStart = startAngle
          startAngle = endAngle

          return (
            <g key={slice.label} filter="url(#glow)">
              <path d={path} fill={slice.color} opacity="0.9" />
              {angle > 10 && (
                <text
                  x={labelPosition.x}
                  y={labelPosition.y}
                  fill="#0f172a"
                  className="text-[10px] font-semibold"
                  textAnchor="middle"
                >
                  {slice.label}
                </text>
              )}
              <title>{`${slice.label}: ${Math.round((slice.value / total) * 100)}%`}</title>
            </g>
          )
        })}
        {data.length === 0 && <circle cx="100" cy="100" r="90" fill="#1f2937" />}
      </svg>
      <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-300">
        {data.map((slice) => (
          <span key={slice.label} className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: slice.color }}></span>
            {slice.label}
          </span>
        ))}
        {data.length === 0 && <span className="text-slate-500">No genre data available yet.</span>}
      </div>
    </div>
  )
}

export default PieChart
