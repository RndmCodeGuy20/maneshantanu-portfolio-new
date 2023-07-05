import {FC, ReactNode} from "react";
import React from "react";

interface TooltipProps {
    text: string;
    position?: string;
    children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({text, position, children}) => {
    return (
        <div className="group relative inline-block">
            {children}
            <div
                className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-400 text-white p-1 rounded-full top-0`}>
                {text}
            </div>
        </div>
    );
}

export default Tooltip;
