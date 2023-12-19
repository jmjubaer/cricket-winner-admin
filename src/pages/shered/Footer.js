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
            <div className="grid md:grid-cols-3 py-16">
                <div className="col-span-2 w-full sm:w-4/5 lg:w-[60%]">
                    <Image width={135} height={25} src={logo} alt="logo" />
                    <h2 className="text-3xl font-bold mt-5">Stay updated</h2>
                    <p className="my-3 text-[#D8D8D8]">
                        Subscribe to stay in the loop with our newest news
                    </p>
                    {/* Search bar */}
                    <form
                        onSubmit={handleSubscribe}
                        className="bg-[#323232] border rounded-full flex p-[10px] items-center"
                    >
                        <div className="w-full flex gap-2 text-[#969696]">
                            <MdEmail className="text-2xl ml-2" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                className="bg-transparent placeholder:text-[#969696] outline-none w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="primary_btn-rounded text-black"
                        >
                            Subscribe
                        </button>
                    </form>

                    <ul className="flex gap-2 mt-8">
                        <li>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center bg-[#323232] rounded-full text-xl"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center bg-[#323232] rounded-full text-xl"
                            >
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center bg-[#323232] rounded-full text-xl"
                            >
                                <FaXTwitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center bg-[#323232] rounded-full text-xl"
                            >
                                <FaPaperPlane />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="w-12 h-12 flex items-center justify-center bg-[#323232] rounded-full text-xl"
                            >
                                <FaDiscord />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white flex gap-10 mt-5 md:mt-0">
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Information</h3>
                        <ul className="text-[#969696]">
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    terms & condition
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Information</h3>
                        <ul className="text-[#969696]">
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    terms & condition
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="my-2 leading-9">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="border-t border-[#323232] text-[#969696] text-center py-3 ">
                Copyright © 2023 Cricketwinner. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
