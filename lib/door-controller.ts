
export interface DoorState {
    id: string;
    name: string; // "Door_1", etc.
    rotation: number; // Current rotation in radians
    targetRotation: number; // Target rotation
    state: 'OPEN' | 'CLOSED' | 'OPENING' | 'CLOSING';
}

export interface DoorConfig {
    openRotation: number; // Radians, default ~-95 deg
    animationDuration: number; // Seconds, default 0.6
}

export type Listener = (doors: Record<string, DoorState>) => void;

/**
 * Shared logic for managing locker doors.
 * Ported for Landing Page integration.
 */
export class DoorController {
    public doors: Record<string, DoorState> = {};
    private listeners: Listener[] = [];
    private config: DoorConfig;

    constructor(config: Partial<DoorConfig> = {}) {
        this.config = {
            openRotation: config.openRotation ?? -1.658, // ~ -95 deg (Negative for outward)
            animationDuration: config.animationDuration ?? 0.6,
        };
    }

    /**
     * Register a door found in the scene.
     */
    registerDoor(id: string, name: string) {
        if (!this.doors[id]) {
            this.doors[id] = {
                id,
                name,
                rotation: 0,
                targetRotation: 0,
                state: 'CLOSED',
            };
        }
    }

    /**
     * Toggle a door. Closes others if one is opened.
     */
    toggleDoor(id: string) {
        const door = this.doors[id];
        if (!door) return;

        if (door.state === 'OPEN' || door.state === 'OPENING') {
            this.closeDoor(id);
        } else {
            this.closeAll(); // Enforce "one open at a time"
            this.openDoor(id);
        }
    }

    openDoor(id: string) {
        const door = this.doors[id];
        if (!door) return;
        door.targetRotation = this.config.openRotation;
        door.state = 'OPENING';
        this.notify();
    }

    closeDoor(id: string) {
        const door = this.doors[id];
        if (!door) return;
        door.targetRotation = 0;
        door.state = 'CLOSING';
        this.notify();
    }

    closeAll() {
        Object.keys(this.doors).forEach((id) => this.closeDoor(id));
    }

    /**
     * Animation loop ticker.
     * Call this in your frame loop (useFrame).
     * @param dt Delta time in seconds
     */
    update(dt: number) {
        let changed = false;
        // Speed must be scalar magnitude
        const speed = Math.abs(this.config.openRotation) / this.config.animationDuration; // rad/sec

        for (const id in this.doors) {
            const door = this.doors[id];
            const diff = door.targetRotation - door.rotation;

            if (Math.abs(diff) < 0.001) {
                if (door.rotation !== door.targetRotation) {
                    door.rotation = door.targetRotation;
                    door.state = door.targetRotation !== 0 ? 'OPEN' : 'CLOSED';
                    changed = true;
                }
                continue;
            }

            const step = speed * dt;

            if (Math.abs(diff) <= step) {
                door.rotation = door.targetRotation;
            } else {
                door.rotation += Math.sign(diff) * step;
            }
            changed = true;
        }

        if (changed) this.notify(); // Trigger React render
    }

    // -- Reactivity helpers --

    subscribe(listener: Listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify() {
        const snapshot = { ...this.doors };
        this.listeners.forEach(l => l(snapshot));
    }

    getSnapshot() {
        return this.doors;
    }
}
