
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { useDoorController, controller } from '../../hooks/use-door-controller';
import * as THREE from 'three';

export function LockerModel() {
    // Load the GLB. Note: You must place the GLB in /public/models/unlokie.glb
    const { nodes, materials } = useGLTF('/models/unlokie.glb') as any;
    const { doors } = useDoorController();

    // Update controller animation loop
    useFrame((_, delta) => {
        controller.update(delta);
    });

    // Discovery: Register doors that exist in the GLB
    useEffect(() => {
        ['Door_1', 'Door_2', 'Door_3'].forEach(id => {
            // Check for the Group node or Frame node
            if (nodes[`${id}_Group`] || nodes[`${id}_Frame`]) {
                controller.registerDoor(id, id);
            }
        });
    }, [nodes]);

    const handlePointerDown = (e: ThreeEvent<MouseEvent>, id: string) => {
        e.stopPropagation();
        controller.toggleDoor(id);
    };

    const getRotation = (id: string) => doors[id]?.rotation ?? 0;
    const isOpen = (id: string) => doors[id]?.state === 'OPEN' || doors[id]?.state === 'OPENING';

    // Material override: User requested specific branding
    // Cabinet: #007243, Doors: White
    const cabinetMat = new THREE.MeshStandardMaterial({ color: '#007243', roughness: 0.4, metalness: 0.1 });
    const doorMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4, metalness: 0.1 });

    return (
        <group dispose={null}>
            {/* Cabinet Body - Render everything that isn't a door */}
            {Object.keys(nodes).map((key) => {
                // Skip doors and non-meshes
                if (key.startsWith('Door_') || !nodes[key].geometry) return null;

                return (
                    <mesh
                        key={key}
                        geometry={nodes[key].geometry}
                        material={cabinetMat}
                        castShadow
                        receiveShadow
                    />
                );
            })}

            {/* Interactive Doors */}
            {['Door_1', 'Door_2', 'Door_3'].map((id) => {
                const groupNode = nodes[`${id}_Group`];
                if (!groupNode) return null;

                // Apply Materials (Side-effect, but safe if consistent)
                const frameNode = nodes[`${id}_Frame`];
                if (frameNode) {
                    frameNode.material = doorMat;
                    frameNode.castShadow = true;
                    frameNode.receiveShadow = true;
                }

                const glassNode = nodes[`${id}_Glass`];
                if (glassNode) {
                    glassNode.material = new THREE.MeshPhysicalMaterial({
                        color: '#ffffff',
                        transmission: 0.9,
                        opacity: 0.3,
                        transparent: true,
                        roughness: 0.1,
                        metalness: 0
                    });
                }

                return (
                    <primitive
                        key={id}
                        object={groupNode}
                        rotation={[0, getRotation(id), 0]}
                        onClick={(e: ThreeEvent<MouseEvent>) => handlePointerDown(e, id)}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                    />
                );
            })}
        </group>
    );
}

useGLTF.preload('/models/unlokie.glb');
