import React from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa6";
import logo from "@/assets/CRICKETWINNER.png";
import Image from "next/image";
import Link from "next/link";
const TopNav = () => {
    return (
        <div className="bg-[#323232] p-5">
            <nav className="container flex justify-center md:justify-between items-center">
                <ul className="text-white hidden md:flex text-2xl gap-5">
                    <li>
                        <a target="_blank" href="">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
                <div className="">
                    <Link href={"/"}>
                        <Image
                            priority
                            width={170}
                            src={logo}
                            alt="Logo image"
                        />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;
