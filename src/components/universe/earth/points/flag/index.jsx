import React from "react";

const Flag = React.forwardRef((_, ref) => {
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[.005, .005, .5, 20]}/>
        <meshStandardMaterial color='#FFFFFF'/>
      </mesh>
    </group>
  )
})

export default Flag