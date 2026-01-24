
'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Loader } from '@react-three/drei';
import { LockerModel } from './LockerModel';
import { useDoorController, controller } from '@/hooks/use-door-controller';
import { LucideBox, LucideRotateCcw } from 'lucide-react';

function Overlay() {
    const { doors } = useDoorController();

    return (
        <div className="absolute top-0 right-0 p-6 pointer-events-none flex flex-col gap-4 items-end z-10 w-full sm:w-auto">
            {/* Controls */}
            <div className="flex flex-col gap-3 pointer-events-auto items-end">
                <div className="flex flex-col sm:flex-row gap-2 backdrop-blur-md bg-white/90 p-2 rounded-2xl shadow-xl border border-unlokieGreen/10">
                    {['Door_1', 'Door_2', 'Door_3'].map((id) => (
                        <button
                            key={id}
                            onClick={() => controller.toggleDoor(id)}
                            className={`
                 px-4 py-2 rounded-xl transition-all font-medium text-sm flex items-center gap-2
                 ${doors[id]?.state === 'OPEN' || doors[id]?.state === 'OPENING'
                                    ? 'bg-unlokieGreen text-white shadow-lg'
                                    : 'bg-white hover:bg-gray-50 text-slateGray hover:text-unlokieGreen border border-transparent hover:border-unlokieGreen/20'}
               `}
                        >
                            <LucideBox size={16} />
                            {id.replace('_', ' ')}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => controller.closeAll()}
                    className="text-xs text-slateGray hover:text-unlokieGreen flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full transition-colors pointer-events-auto backdrop-blur-sm"
                >
                    <LucideRotateCcw size={12} /> Reset
                </button>
            </div>
        </div>
    );
}

export function HowItWorks3D() {
    return (
        <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-inner transform transition-all hover:shadow-lg border border-gray-100">
            <Canvas shadows camera={{ position: [1, 1.2, 2], fov: 45 }}>
                <fog attach="fog" args={['#ffffff', 5, 15]} />
                <ambientLight intensity={0.9} />
                <spotLight
                    position={[5, 10, 5]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />

                <Suspense fallback={null}>
                    <group position={[0, 0, -0.1]}>
                        <LockerModel />
                        <ContactShadows position={[0, 0, 0.1]} resolution={1024} scale={10} blur={1} opacity={0.5} far={10} color="#000000" />
                    </group>
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={2}
                    maxDistance={8}
                    target={[0, 0.5, 0]}
                />
            </Canvas>

            <Overlay />
            {/* Loader matches branding colors? Default is B&W but mostly invisible */}
            <Loader />

            {/* Instruction hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none opacity-60">
                <p className="text-xs text-slateGray flex items-center justify-center gap-2">
                    <span className="w-1 h-1 bg-slateGray rounded-full"></span>
                    Click doors or buttons to interact
                    <span className="w-1 h-1 bg-slateGray rounded-full"></span>
                </p>
            </div>
        </div>
    );
}
