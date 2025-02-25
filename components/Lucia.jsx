/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/characters/4_lucia.glb -o components/Lucia.jsx -r public -k
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Lucia(props) {
  const { nodes, materials } = useGLTF("/models/characters/4_lucia.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="mesh_0"
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload("/models/characters/4_lucia.glb");
