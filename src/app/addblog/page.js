import Image from "next/image";
import React from "react";
import fav from "@/assets/favicon.png";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiCornerUpLeftLine, RiCornerUpRightLine } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";
import { GoSidebarExpand } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
const AddBlogPage = () => {
    return (
        <section className="max-w-[1440px] mx-auto">
            <nav className="flex justify-between items-center border-b border fixed top-0  w-full">
                <div className="flex items-center">
                    <Image src={fav} alt="logo image" height={60} width={60}/>
                    <ul className="flex items-center gap-5 mx-5">
                        <li>
                            <button className="p-2 bg-blue-500 text-white cursor-pointer">
                                <FaPlus />
                            </button>
                        </li>
                        <li>
                            <button className="text-xl cursor-pointer">
                                <FaEdit />
                            </button>
                        </li>
                        <li>
                            <button className="text-2xl cursor-pointer">
                                <RiCornerUpLeftLine />
                            </button>
                        </li>
                        <li>
                            <button className="text-2xl cursor-pointer">
                                <RiCornerUpRightLine />
                            </button>
                        </li>
                        <li>
                            <button className="text-2xl cursor-pointer">
                                <MdOutlinePreview />
                            </button>
                        </li>
                    </ul>
                </div>
                <ul className="flex gap-5 mx-5 items-center">
                    <li>
                        <button className="primary_btn cursor-pointer">Publish</button>
                    </li>
                    <li>
                        <button className="cursor-pointer">
                            <GoSidebarExpand className="text-3xl mt-1"/>
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer">
                            <BsThreeDotsVertical className="text-2xl mt-1"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default AddBlogPage;
