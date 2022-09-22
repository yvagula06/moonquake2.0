/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Wave(props) {
  const { quake } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/wave.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.wave.play();
  });

  useFrame(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  const r = 1.99;

  // 0.6 3.2

  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  return (
    <group {...props} dispose={null}>
      <group
        ref={group}
        name='Scene'
        position={[
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.sin(degToRad(quake.longitude)),
          r * Math.cos(Math.PI / 2 - degToRad(quake.latitude)),
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.cos(degToRad(quake.longitude)),
        ]}
      >
        <mesh
          name='Icosphere'
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.005']}
          morphTargetDictionary={nodes.Icosphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Icosphere.morphTargetInfluences}
          scale={.1*quake.magnitude}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/wave.glb');
