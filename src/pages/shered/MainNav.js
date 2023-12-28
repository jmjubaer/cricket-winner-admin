"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import NavLink from "@/components/NavLink";
const MainNav = () => {
    const [control, setControl] = useState(false);
    // console.log(control);
    return (
        <div className="shadow-lg z-20">
            <nav className="flex justify-between w-[1136px] mx-auto max-w-[96%] items-center relative">
                <button
                    onClick={() => setControl(!control)}
                    className="block md:hidden text-[#323232] cursor-pointer"
                >
                    {control ? (
                        <FaTimes className="text-3xl" />
                    ) : (
                        <FaBars className="text-3xl" />
                    )}
                </button>
                <div
                    className={`absolute top-[52px] -left-[2%] md:static md:h-auto md:w-auto overflow-hidden transition-all duration-500 z-50 ${
                        control
                            ? "w-[104%] bg-white md:bg-transparent h-[calc(100vh-100px)] text-white text-left"
                            : "w-0"
                    }`}
                >
                    <ul
                        className={`flex-col flex md:flex-row text-[#969696] md:items-center gap-y-3 z-50`}
                    >
                        <li>
                            <NavLink
                                exact={true}
                                activeClassName={"active"}
                                className="link"
                                href={"/"}
                            >
                                Leader Board
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/brandlogo"}
                            >
                                Brand Logo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/authimage"}
                            >
                                Auth Images
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/players"}
                            >
                                Player
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/ads"}
                            >
                                Ads Management
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/tweet"}
                            >
                                Tweet
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/webstory"}
                            >
                                Web Stories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={"active"}
                                className="link"
                                href={"/blogs"}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 items-center my-2">
                    <button className=" border-2 border-[#FFC305] rounded-3xl overflow-hidden">
                        <span className="bg-[#FFC305] font-black rounded-3xl m-2 inline-block px-3 ">
                            Log Out
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MainNav;
