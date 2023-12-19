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
        <div className="shadow-lg">
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
                    className={`absolute top-[50px] left-0 md:static md:h-auto md:w-auto overflow-hidden transition-all duration-500 z-50 ${
                        control
                            ? "w-full bg-white md:bg-transparent h-[calc(100vh-100px)] text-white text-left"
                            : "w-0"
                    }`}
                >
                    <ul
                        className={`flex-col flex md:flex-row text-[#969696] md:items-center gap-y-3 z-50`}
                    >
                        <li>
                            <NavLink exact={true} activeClassName={"active"} className="link" href={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName={"active"} className="link" href={"/news"}>
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName={"active"} className="link" href={"/prediction"}>
                                Match Prediction
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName={"active"} className="link" href={"/fantasyTips"}>
                                Fantasy tips
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName={"active"} className="link" href={"/leaderboard"}>
                                Leader Board
                            </NavLink>
                        </li>
                        <li>
                            <button className="primary_btn-rounded items-center gap-1 md:hidden flex text-black mt-5">
                                <GoArrowUpRight className=" text-3xl" />
                                Be an expert
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-3 items-center">
                    <button className="flex items-center justify-center w-11 h-11 text-xl border border-[#F5F5F5] rounded-full ">
                        <FaMagnifyingGlass />
                    </button>
                    <Link href={"/login"} className="px-5 p-3 border border-[#F5F5F5] rounded-3xl">
                        <FaUser className="inline mr-2" />
                        Login
                    </Link>
                    <button className="primary_btn-rounded items-center gap-1 md:flex hidden">
                        <GoArrowUpRight className=" text-3xl" />
                        Be an expert
                    </button>
                    <button className="lg:block hidden">
                        <FaBars className=" text-3xl" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MainNav;
