import { ReactNode, useEffect, useState } from "react";
import withKinecticCursor from "../kinectic-cursor/withKinecticCursor";
import { useInterval } from "usehooks-ts";
import KinecticCursorProps from "../kinectic-cursor/KinecticCursorProps";
import "./kinectic-button.css";

interface KinecticButtonProps {
    children?: ReactNode,
    duration?: number | undefined,
    kinecticCursor: KinecticCursorProps,
    className: string,
    onClick?: () => void,
    onHold?: () => void,
};

const IntervalDelay = 50;

const KinecticButton = ({ children, duration, kinecticCursor, className, onClick, onHold }: KinecticButtonProps) => {
    duration = duration ?? 1500;

    const [clicking, setClicking] = useState(false);
    const [timerValue, setTimerValue] = useState(0);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        kinecticCursor.setTimer(0);
        setTimerValue(0);
        setClicking(hovering && kinecticCursor.mouseDown);
    }, [hovering, kinecticCursor.mouseDown]);

    useInterval(() => {
        if (timerValue < 100) {
            const increment = 100 / (duration! / IntervalDelay);
            setTimerValue(timerValue + increment);
            kinecticCursor.setTimer(timerValue + increment);
            
            if (timerValue + increment >= 100 && onClick != null) {
                setTimeout(() => {
                    onClick();
                }, 500);
            }
        } else if (onHold != null) {
            onHold();
        }
    }, clicking ? IntervalDelay : null);

    return (
        <div className={`w-max h-max kinectic-button ${className}`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            {children}
        </div>
    )
}

export default withKinecticCursor(KinecticButton);