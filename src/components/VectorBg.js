import Image from "next/image";
import React from "react";
import { MdSportsCricket } from "react-icons/md";
import line from "@/assets/Line.png";
const VectorBg = ({ children, rounded = false}) => {
    return (
        <div
            className={`bg-[#3391B2] relative overflow-hidden ${
                rounded && "rounded-xl"
            }`}
        >
            {children}

            {/* Vector Image for overlay */}
            <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -top-6 -left-4" />
            <MdSportsCricket className="text-8xl text-white text-opacity-20 absolute -bottom-9 left-[10%]" />
            <Image
                src={line}
                alt="vector image"
                className="absolute top-5 -right-4"
            />
            <Image
                src={line}
                alt="vector image"
                className="absolute top-[72px] -right-6"
            />
            <Image
                src={line}
                alt="vector image"
                className="absolute top-32 -right-10"
            />
        </div>
    );
};

export default VectorBg;
