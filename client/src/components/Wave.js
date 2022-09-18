/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Wave(props) {
  const { quake } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/wave.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.wave.play();
  });

  const r = 2;

  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name='Scene'
        position={[
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.sin(degToRad(quake.longitude)),

          r * Math.cos(Math.PI / 2 - degToRad(quake.latitude)),

          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.cos(degToRad(quake.longitude)),
        ]}
        rotation={[Math.PI / 2 - degToRad(quake.latitude), 0, -degToRad(quake.longitude)]}
      >
        <mesh
          name='Icosphere'
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.005']}
          morphTargetDictionary={nodes.Icosphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Icosphere.morphTargetInfluences}
          scale={1}
        />
        {/* <pointLight position={[0, 1, 0]} intensity={50 / 100} angle={-0.3} /> */}
      </group>
    </group>
  );
}

useGLTF.preload('/wave.glb');
