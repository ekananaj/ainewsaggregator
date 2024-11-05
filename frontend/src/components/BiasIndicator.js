import React from 'react';

function BiasIndicator({ bias }) {
  return (
    <div>
      <p>Bias Level: {bias ? bias : "No bias detected"}</p>
    </div>
  );
}

export default BiasIndicator;
