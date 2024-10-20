


import React, { useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default function Sparkline({ currentColor, id, height, width, data, color }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  // Ensure the height and width are numbers
  const numericHeight = parseInt(height, 10);
  const numericWidth = parseInt(width, 10);

  // Tooltip positioning and content logic
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div id={id} style={{ height: numericHeight, width: numericWidth, position: 'relative' }}>
      <Sparklines data={data} width={numericWidth} height={numericHeight}>
        <SparklinesLine color={color || currentColor} />
        <SparklinesSpots
          size={4}
          spotColors={{ '-1': color || currentColor, '0': color || currentColor }}
        />
      </Sparklines>

      {/* Custom tooltip */}
      {hoverIndex !== null && (
        <div
          style={{
            position: 'absolute',
            left: `${(hoverIndex / data.length) * numericWidth}px`,
            top: '-25px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '12px',
          }}
        >
          {data[hoverIndex]}
        </div>
      )}

      {/* Add hover event listeners to the spots */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: numericWidth,
          height: numericHeight,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {data.map((_, index) => (
          <div
            key={index}
            style={{ flex: 1, height: '100%', cursor: 'pointer' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
}


// import * as React from 'react';
// import { Sparklines, SparklinesLine } from 'react-sparklines';

// export default function Sparkline({ currentColor, id, height, width, data, color }) {
//   // Ensure the height and width are passed as numbers, not strings
//   const numericHeight = parseInt(height, 10);
//   const numericWidth = parseInt(width, 10);

//   return (
//     <div id={id} style={{ height: numericHeight, width: numericWidth }}>
//       <Sparklines data={data} width={numericWidth} height={numericHeight}>
//         <SparklinesLine color={color || currentColor} />
//       </Sparklines>
//     </div>
//   );
// }

