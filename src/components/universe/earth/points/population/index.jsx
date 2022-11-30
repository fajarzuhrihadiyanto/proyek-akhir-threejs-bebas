import React, {forwardRef} from "react";
import * as THREE from 'three'

import Bar from "./Bar";

const Population = forwardRef((_, ref) => {

  const width = 0.05
  const max_height = 0.5

  const data = [
    {
      year: 2017,
      pop: 450000
    },
    {
      year: 2018,
      pop: 625000
    },
    {
      year: 2019,
      pop: 775000
    },
    {
      year: 2020,
      pop: 900000
    },
    {
      year: 2021,
      pop: 1000000
    }
  ]
  const max_population = Math.max(...data.map(e => e.pop))

  data.forEach((e, index) => {
    e.x = (index - (data.length - 1) / 2) * width
    e.height = e.pop * max_height / max_population

    const colorDiff = 360 / data.length
    e.color = `#${(new THREE.Color(`hsl(${index * colorDiff}, 100%, 50%)`)).getHexString()}`
  })

  return (
    <group ref={ref}>

      {data.map(e => (
        <Bar year={e.year} pop={e.pop} height={e.height} x={e.x} color={e.color}/>
      ))}
      {/*<mesh position={[.06,0,0]}>*/}
      {/*  <boxGeometry args={[.03,.6,.03]}/>*/}
      {/*  <meshStandardMaterial color='#FF0000'/>*/}
      {/*</mesh>*/}
      {/*<mesh position={[.03,0,0]}>*/}
      {/*  <boxGeometry args={[.03,.5,.03]}/>*/}
      {/*  <meshStandardMaterial color='#FF8800'/>*/}
      {/*</mesh>*/}
      {/*<mesh position={[0,0,0]}>*/}
      {/*  <boxGeometry args={[.03,.4,.03]}/>*/}
      {/*  <meshStandardMaterial color='#FFFF00'/>*/}
      {/*</mesh>*/}
      {/*<mesh position={[-.03,0,0]}>*/}
      {/*  <boxGeometry args={[.03,.3,.03]}/>*/}
      {/*  <meshStandardMaterial color='#88FF00'/>*/}
      {/*</mesh>*/}
      {/*<mesh position={[-.06,0,0]}>*/}
      {/*  <boxGeometry args={[.03,.2,.03]}/>*/}
      {/*  <meshStandardMaterial color='#00FF00'/>*/}
      {/*</mesh>*/}
    </group>
  )
})

export default Population