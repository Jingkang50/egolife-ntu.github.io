/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/characters/6_shure.glb -o components/Shure.jsx -r public -k
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Shure(props) {
  const { nodes, materials } = useGLTF("/models/characters/6_shure.glb");
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

useGLTF.preload("/models/characters/6_shure.glb");
