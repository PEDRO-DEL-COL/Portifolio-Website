"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

const skills = [
  { name: "React", color: "cyan" },
  { name: "Next.js", color: "white" },
  { name: "Tailwind", color: "teal" },
  { name: "Node.js", color: "green" },
  { name: "TypeScript", color: "blue" },
]

function SkillPoints() {
  const radius = 5
  const groupRef = useRef<THREE.Group>(null!)

  // gera posições dos pontos na esfera
  const points = useMemo(() => {
    return skills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi
      return {
        ...skill,
        position: new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ),
      }
    })
  }, [])

  // anima a rotação da esfera devagar (opcional)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <SkillPoint key={i} {...point} />
      ))}
    </group>
  )
}

function SkillPoint({
  position,
  color,
  name,
}: {
  position: THREE.Vector3
  color: string
  name: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const textRef = useRef<THREE.Mesh>(null)

  useFrame(({ camera }) => {
    if (!meshRef.current) return

    const vector = meshRef.current.position.clone()
    vector.project(camera)

    const scale = 1 + (1 - Math.abs(vector.z)) * 1.5
    meshRef.current.scale.set(scale, scale, scale)

    if (textRef.current) {
      textRef.current.visible = vector.z < 0.3
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.4}
        color={color}
        anchorY="bottom"
        position={[0, 0.5, 0]}
      >
        {name}
      </Text>
    </group>
  )
}


export default function SkillsSphere() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SkillPoints />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
