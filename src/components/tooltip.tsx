import {FC, ReactNode} from "react";
import React from "react";

interface TooltipProps {
    text: string;
    position?: string;
    children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({text, position, children}) => {
    return (
        <div className="group relative inline-block justify-center ease-in-out transform-gpu">
            <div className="text-black">
                {text}
            </div>
            <div
                className={`absolute bottom-5 ${position} w-24 scale-0 rounded p-2 text-xs text-black lg:group-hover:scale-125 md:group-hover:scale-125 transition-colors ease-in-out`}>
                {children}
            </div>
        </div>
    );
}

export default Tooltip;
