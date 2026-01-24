
import { useState, useEffect } from 'react';
import { DoorController, DoorState } from '@/lib/door-controller';

// Singleton instance
export const controller = new DoorController();

export function useDoorController() {
    const [doors, setDoors] = useState<Record<string, DoorState>>(controller.getSnapshot());

    useEffect(() => {
        return controller.subscribe((newDoors) => {
            setDoors(newDoors);
        });
    }, []);

    return { doors, controller };
}
