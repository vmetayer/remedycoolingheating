export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Remedy Cooling & Heating"
    >
      {/* Rx symbol mark */}
      <g>
        {/* R */}
        <text
          x="2"
          y="40"
          fontFamily="'Barlow Semi Condensed', Arial Narrow, sans-serif"
          fontWeight="800"
          fontSize="44"
          fill="#CC2222"
        >
          R
        </text>
        {/* Heartbeat / EKG line through the Rx mark */}
        <polyline
          points="18,34 22,34 25,26 28,42 31,30 34,34 38,34"
          stroke="#CC2222"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* x subscript */}
        <text
          x="28"
          y="48"
          fontFamily="'Barlow Semi Condensed', Arial Narrow, sans-serif"
          fontWeight="700"
          fontSize="16"
          fill="#CC2222"
        >
          x
        </text>
      </g>

      {/* REMEDY wordmark */}
      <text
        x="46"
        y="30"
        fontFamily="'Barlow Semi Condensed', Arial Narrow, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#CC2222"
        letterSpacing="2"
      >
        REMEDY
      </text>

      {/* COOLING & HEATING */}
      <text
        x="47"
        y="50"
        fontFamily="'Barlow Semi Condensed', Arial Narrow, sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="#1B3899"
        letterSpacing="1"
      >
        COOLING &amp; HEATING
      </text>
    </svg>
  );
}
