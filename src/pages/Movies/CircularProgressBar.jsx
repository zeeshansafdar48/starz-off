/* eslint-disable react/prop-types */
const CircularProgressBar = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage } = props;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;
  const statusMessage = `${Math.round(percentage)}%`;

  let strokeColor = "";
  if (percentage > 70) {
    strokeColor = "#10B981";
  } else if (percentage > 50 && percentage < 70) {
    strokeColor = "#F59E0B";
  } else {
    strokeColor = "#EF4444";
  }

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-gray-300"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className={`fill-gray-200 transition-all delay-200 ease-in`}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          stroke: strokeColor
        }}
      />
      <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="text-xs font-semibold">
        {statusMessage}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
