import { Dispatch, SetStateAction } from "react";

export default interface KinecticCursorProps {
    setTimer: Dispatch<SetStateAction<number>>,
    mouseDown: boolean,
};