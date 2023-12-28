"use client";
import VectorBg from "@/components/VectorBg";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaBan, FaEnvelope } from "react-icons/fa6";
import { MdLockReset } from "react-icons/md";
import Select from "react-select";

const PlayerPage = () => {
    const [filter, setFilter] = useState("All");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const usersInfo = [
        {
            id: 1,
            name: "John Doe",
            image: "https://i.ibb.co/kKtSzMP/my-image.gif",
            username: "john_doe",
            email: "john.doe@gmail.com",
            role: "Subscriber",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: "https://i.ibb.co/ZBHHzfC/istockphoto-1224641458-612x612.jpg",
            username: "jane_smith",
            email: "jane.smith@gmail.com",
            role: "Subscriber",
        },
        {
            id: 3,
            name: "Michael Johnson",
            image: "https://i.ibb.co/VCzddGZ/login-bg.jpg",
            username: "michael_j",
            email: "michael.johnson@gmail.com",
            role: "Subscriber",
        },
        {
            id: 4,
            name: "Emily Brown",
            image: "https://i.ibb.co/1M9VFxq/shiful.gif",

            username: "emily_b",
            email: "emily.brown@gmail.com",
            role: "Subscriber",
        },
        {
            id: 5,
            name: "Daniel Wilson",
            image: "https://i.ibb.co/z43WCJV/banner-1.jpg",

            username: "daniel_w",
            email: "daniel.wilson@gmail.com",
            role: "Subscriber",
        },
        {
            id: 6,
            name: "Sophia Lee",
            image: "https://i.ibb.co/hK7QMCM/chef-6.jpg",

            username: "sophia_lee",
            email: "sophia.lee@gmail.com",
            role: "Subscriber",
        },
        {
            id: 7,
            name: "Ethan Carter",
            image: "https://i.ibb.co/ck3p02f/chef-4.jpg",

            username: "ethan_c",
            email: "ethan.carter@gmail.com",
            role: "Subscriber",
        },
        {
            id: 8,
            name: "Ava Martinez",
            image: "https://i.ibb.co/kKtSzMP/my-image.gif",
            username: "ava_m",
            email: "ava.martinez@gmail.com",
            role: "Subscriber",
        },
        {
            id: 9,
            name: "Liam Davis",
            image: "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=",
            username: "liam_d",
            email: "liam.davis@gmail.com",
            role: "Subscriber",
        },
        {
            id: 10,
            name: "Olivia Taylor",
            image: "https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=612x612&w=0&k=20&c=NtTebZxpAfw964hJJut8WFa__eZEfO07CAKdqeFBrFU=",
            username: "olivia_t",
            email: "olivia.taylor@gmail.com",
            role: "Subscriber",
        },
        {
            id: 11,
            name: "Noah Anderson",
            image: "https://media.istockphoto.com/id/1473323104/photo/handsome-mid-adult-man-dressed-in-denim-shirt-screaming-and-cheerfully-pumping-fist-while.jpg?s=612x612&w=0&k=20&c=KUPCm3h2v3lgJbuRQFIWWDg95Fwkgjsta5OzmmscZHE=",
            username: "noah_a",
            email: "noah.anderson@gmail.com",
            role: "Subscriber",
        },
        {
            id: 12,
            name: "Emma Garcia",
            image: "https://i.ibb.co/ZBHHzfC/istockphoto-1224641458-612x612.jpg",
            username: "emma_g",
            email: "emma.garcia@gmail.com",
            role: "Subscriber",
        },
        {
            id: 13,
            name: "William Brown",
            image: "https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.jpg?s=612x612&w=0&k=20&c=OGRd22Usakx9wHTQsKto0qagIlH38sWDPEmmmXcIBSQ=",
            username: "william_b",
            email: "william.brown@gmail.com",
            role: "Subscriber",
        },
        {
            id: 14,
            name: "Isabella Wilson",
            image: "https://i.ibb.co/ZBHHzfC/istockphoto-1224641458-612x612.jpg",
            username: "isabella_w",
            email: "isabella.wilson@gmail.com",
            role: "Subscriber",
        },
        {
            id: 15,
            name: "Mason Thomas",
            image: "https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.jpg?s=612x612&w=0&k=20&c=OGRd22Usakx9wHTQsKto0qagIlH38sWDPEmmmXcIBSQ=",
            username: "mason_t",
            email: "mason.thomas@gmail.com",
            role: "Subscriber",
        },
    ];
    const handleFilter = ({ value }) => {
        setFilter();
        console.log(value);
    };
    const handleSearchUser = ({ value }) => {
        setFilter();
        console.log(value);
    };
    const handleChangeRole = (data) => {
        console.log(data);
    };
    // Todo: add pagination fn
    const handlePagination = (e) => {};
    return (
        <>
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    All User Control
                </h2>
            </VectorBg>
            <div className="w-[98%] max-w-[1440px] mx-auto py-10">
                <div className="flex justify-between items-center">
                    <button className="primary_btn w-40">Add User</button>
                    <form
                        onSubmit={handleSubmit(handleSearchUser)}
                        className="border rounded-lg overflow-hidden flex"
                    >
                        <input
                            {...register("searchText")}
                            className="w-[250px] px-3 outline-none py-2 mr-1"
                        />
                        <input
                            type="submit"
                            value="Search User"
                            className="px-4 py-1 bg-[#FFC305] font-medium hover:bg-[#323232] text-[#323232] hover:text-white cursor-pointer"
                        />
                    </form>
                </div>
                <div className="my-5 flex flex-wrap gap-2 items-center justify-between">
                    <Select
                        value={filter}
                        onChange={handleFilter}
                        // Todo: pass dynamic data
                        options={[
                            {
                                value: `All`,
                                label: `All  (${usersInfo?.length})`,
                            },
                            {
                                value: "SEO Editor",
                                label: `SEO Editor  (${usersInfo?.length})`,
                            },
                            {
                                value: "SEO Manager",
                                label: `SEO Manager  (${usersInfo?.length})`,
                            },
                            {
                                value: "Subscriber",
                                label: `Subscriber  (${usersInfo?.length})`,
                            },
                            {
                                value: "Contributor",
                                label: `Contributor  (${usersInfo?.length})`,
                            },
                            {
                                value: "Author",
                                label: `Author  (${usersInfo?.length})`,
                            },
                            {
                                value: "Editor",
                                label: `Editor  (${usersInfo?.length})`,
                            },
                            {
                                value: "Administrator",
                                label: `Administrator  (${usersInfo?.length})`,
                            },
                        ]}
                        placeholder={`All  (${usersInfo?.length})`}
                        className="w-[200px] outline-none "
                    />
                    <form
                        onSubmit={handleSubmit(handleChangeRole)}
                        className="border rounded-lg overflow-hidden flex"
                    >
                        <select
                            {...register("role")}
                            className="w-[200px] px-3 outline-none py-2 mr-1"
                        >
                            <option value="SEO Editor">SEO Editor</option>
                            <option value="SEO Manager">SEO Manager</option>
                            <option value="Subscriber">Subscriber</option>
                            <option value="Contributor">Contributor</option>
                            <option value="Author">Author</option>
                            <option value="Editor">Editor</option>
                            <option value="Administrator">Administrator</option>
                        </select>
                        <input
                            type="submit"
                            value="Change"
                            className="px-4 py-1 bg-[#FFC305] font-medium hover:bg-[#323232] text-[#323232] hover:text-white cursor-pointer"
                        />
                    </form>
                    {/* <div className=" flex gap-2"> */}
                    <button className="primary_btn-small py-2 text-sm flex items-center gap-1 ">
                        <MdLockReset className="text-2xl" />
                        Reset Password
                    </button>
                    <button className="primary_btn-small py-[10px] text-sm flex items-center gap-2 ">
                        <FaEnvelope className="text-lg" />
                        Sent Mail
                    </button>
                    <button className="px-5 py-[10px] bg-red-500 rounded-md font-medium hover:bg-[#323232] text-white hover:text-white cursor-pointer text-sm flex items-center gap-2 ">
                        <FaBan className="text-base" />
                        Ban
                    </button>
                    {/* </div> */}
                    <div className="flex w-fit justify-between gap-1 items-center">
                        <button className="bg-slate-300 p-2">
                            <FaAngleDoubleLeft />
                        </button>
                        <button className="bg-slate-300 p-2 mx-1">
                            <FaAngleLeft />
                        </button>
                        {/* Todo: dynamic page quantity */}
                        <input
                            type="text"
                            onChange={handlePagination}
                            className="w-16 outline-none border-2 px-2 py-1 text-center"
                            value={1}
                        />
                        <p>of {"20"}</p>
                        <button className="bg-slate-300 p-2 mx-1">
                            <FaAngleRight />
                        </button>
                        <button className="bg-slate-300 p-2">
                            <FaAngleDoubleRight />
                        </button>
                    </div>
                </div>
                <table className="w-full min-w-[600px] border-2 ">
                    {/* head */}
                    <thead className="">
                        <tr className="font-medium my-3 text-[#969696] bg-[#EAECF0]">
                            <th className="font-medium py-3 px-5 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="w-5 h-5 cursor-pointer"
                                />
                                <h5 className="">Username</h5>
                            </th>
                            <th className="font-medium py-3 text-left">Name</th>
                            <th className="font-medium py-3 text-left">
                                Email
                            </th>
                            <th className="font-medium py-3 text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Todo: Change Dynamic data */}
                        {usersInfo?.map((user, idx) => (
                            <tr
                                key={idx}
                                className="even:bg-[#EAECF0] bg-white"
                            >
                                <td className="flex items-center gap-5 px-5 py-2">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    <div className="flex items-center gap-3">
                                        <Image
                                            width={50}
                                            height={50}
                                            className="w-[50px] h-[50px] object-cover rounded-full border"
                                            src={user?.image}
                                            alt="User Image"
                                        />
                                        <p className="font-medium">
                                            {user?.username}
                                        </p>
                                    </div>
                                </td>
                                <td className="">{user?.name}</td>
                                <td className="py-4">{user?.email}</td>
                                <td className="py-4">{user?.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PlayerPage;
