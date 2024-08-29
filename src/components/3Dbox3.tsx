import React from 'react';

const Three3DBox2= () => {
  return (
    <mesh position={[0, 1, 1]} castShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

export default Three3DBox2;