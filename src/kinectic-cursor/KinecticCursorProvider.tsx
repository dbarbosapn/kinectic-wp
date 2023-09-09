import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import "./kinectic-cursor.css";
import handClosed from "../img/hand-closed.png";
import handOpen from "../img/hand-open.png";
import { CircularProgressbar } from 'react-circular-progressbar';
import KinecticCursorProps from './KinecticCursorProps';

interface MousePosition {
    x: number,
    y: number,
}

export const KinecticCursorContext = createContext<KinecticCursorProps>({ setTimer: (_) => {}, mouseDown: false });

const KinecticCursorProvider = ({ children }: PropsWithChildren) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [mouseDown, setMouseDown] = useState(false);
    const [timer, setTimer] = useState(0);

    const onMouseMove = (event: MouseEvent) => {
        const { clientX: x, clientY: y } = event;
        setMousePosition({ x, y });
    };

    const onMouseDown = (_: MouseEvent) => {
        setMouseDown(true);
    };

    const onMouseUp = (_: MouseEvent) => {
        setMouseDown(false);
    };

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };
    });

    const { x, y } = mousePosition;

    return (
        <KinecticCursorContext.Provider value={{ setTimer, mouseDown }}>
            <div
                style={{ left: x, top: y }}
                className={`kinectic-cursor ${mouseDown ? "h-10 w-10" : "h-14 w-14"}`}>
                <img alt='' src={mouseDown ? handClosed : handOpen} />
            </div>
            <div
                style={{ left: x, top: y, display: mouseDown && timer > 0 ? "block" : "none" }}
                className="kinectic-cursor-progress h-16 w-16">
                <CircularProgressbar value={timer} />
            </div>
            {children}
        </KinecticCursorContext.Provider>
    )
}

export default KinecticCursorProvider;