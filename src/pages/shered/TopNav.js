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
        <div className="bg-[#323232] sm:p-5">
            <nav className="container flex justify-between items-center">
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
                <h2 className="text-[#FFC305] text-2xl sm:text-3xl">Admin Panel</h2>
            </nav>
        </div>
    );
};

export default TopNav;
