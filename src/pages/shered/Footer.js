"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/CRICKETWINNER.png";
import { MdEmail } from "react-icons/md";
import {
    FaDiscord,
    FaFacebook,
    FaInstagram,
    FaPaperPlane,
    FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
    const handleSubscribe = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
    };
    return (
        <div className="container">
            <p className="border-t border-[#323232] text-[#969696] text-center py-3 ">
                Copyright © 2023 Cricketwinner. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
