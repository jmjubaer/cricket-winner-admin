"use client";
import VectorBg from "@/components/VectorBg";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaEdit } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight, FaTrash } from "react-icons/fa6";
import { RiSearchEyeLine } from "react-icons/ri";
import Select from "react-select";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
const BlogsPage = () => {
    const [category, setCategory] = useState("All");
    const [date, setDate] = useState("All");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const blogs = [
        {
            id: 1,
            country: "England",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            category: "Cricket Analysis",
            image: "https://i.ibb.co/xz9njP6/image-6.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Waqar Younis praises Virat Kohli as a 'crazy man'. who will shatter records.",
            description:
                "The Indian opener recently smashed a double hundred for Northamptonshire against Somerset in a, earning his moment after what has been a tough time...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/kKtSzMP/my-image.gif",
            },
        },
        {
            id: 2,
            country: "Australia",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            category: "Cricket News",
            image: "https://i.ibb.co/QK5wY3T/image-9.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "Cricket Australia ICC World Cup 2023 Squad Announced",
            description:
                "Virat Kohli is the fittest Indian cricketer and the recent BCCI report revealed that he never visited the National Cricket Academy in Bengaluru for fitness related issues in...",
            tournamentName: "Asia Cup",
            author: {
                name: "Olivia Rhye",
                profile:
                    "https://i.ibb.co/ZBHHzfC/istockphoto-1224641458-612x612.jpg",
            },
        },
        {
            id: 3,
            country: "Australia",
            category: "Cricket Analysis",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "New Zealand cricket team: Strength And Weakness Of Kane Williamson",
            description:
                "Brendon McCullum has become the second man to get to the 9000-run mark in Twenty20 cricket, getting to the milestone during the course of his whirlwind 27-ball 43 for Royal...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/VCzddGZ/login-bg.jpg",
            },
        },
        {
            id: 4,
            country: "Australia",
            category: "Cricket Analysis",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/kKtSzMP/my-image.gif",
            },
        },
        {
            id: 4,
            country: "Australia",
            category: "Cricket Analysis",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/kKtSzMP/my-image.gif",
            },
        },
        {
            id: 4,
            country: "Australia",
            category: "Cricket Analysis",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/kKtSzMP/my-image.gif",
            },
        },
        {
            id: 4,
            country: "Australia",
            category: "Cricket Analysis",
            tags: "KL Rahul, Rohit Sharma, T20 World Cup, Virat Kohli",
            image: "https://i.ibb.co/cTVk71K/Frame-417.png",
            timestamp:
                "Sun Nov 19 2023 02:30:00 GMT+0600 (Bangladesh Standard Time)",
            title: "ICC Cricket World Cup 2015: Top 10 performances",
            description:
                "It was a moment for the ages. With Australian left-arm quick Mitchell Starc ripping through the tail order at the other end, Kane Williamson wrote his name into BLACKCAPS folklore ...",
            tournamentName: "Asia Cup",
            author: {
                name: "Phoenix Baker",
                profile: "https://i.ibb.co/kKtSzMP/my-image.gif",
            },
        },
    ];
    const handleCategoryFilter = ({ value }) => {
        setCategory();
        console.log(value);
    };
    const handleDateFilter = ({ value }) => {
        setDate();
        console.log(value);
    };
    const handleSearchUser = ({ value }) => {
        setFilter();
        console.log(value);
    };

    // Todo: add pagination fn
    const handlePagination = (e) => {};
    return (
        <>
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    All Blogs Control
                </h2>
            </VectorBg>
            <div className="w-[98%] max-w-[1440px] mx-auto py-10">
                <div className="flex flex-wrap gap-5 justify-center sm:justify-between items-center">
                    <Link href={"/addblog"} className="primary_btn text-center w-40">Add Blog</Link>
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
                            value="Search Blogs"
                            className="px-4 py-1 bg-[#FFC305] font-medium hover:bg-[#323232] text-[#323232] hover:text-white cursor-pointer"
                        />
                    </form>
                </div>
                <div className="my-5 flex flex-wrap gap-2 items-center lg:justify-between justify-center">
                    <Select
                        value={date}
                        onChange={handleDateFilter}
                        // Todo: pass dynamic data
                        options={[
                            {
                                value: "All Dates",
                                label: "All Dates",
                            },
                            {
                                value: `${moment().format()}`,
                                label: `${moment().format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(1, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(1, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(2, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(2, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(3, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(3, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(4, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(4, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(5, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(5, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(6, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(6, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(7, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(7, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(8, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(8, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(9, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(9, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(10, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(10, "months")
                                    .format("MMMM YYYY")}`,
                            },
                            {
                                value: `${moment()
                                    .subtract(11, "months")
                                    .format()}`,
                                label: `${moment()
                                    .subtract(11, "months")
                                    .format("MMMM YYYY")}`,
                            },
                        ]}
                        placeholder={`All Dates`}
                        className="w-[200px] outline-none "
                    />{" "}
                    <Select
                        value={category}
                        onChange={handleCategoryFilter}
                        // Todo: pass dynamic data
                        options={[
                            {
                                value: "All Categories",
                                label: "All Categories",
                            },
                            {
                                value: "Cricket Analysis",
                                label: "Cricket Analysis",
                            },
                            {
                                value: "Cricket News",
                                label: "Cricket News",
                            },
                            {
                                value: "Cricket Stats",
                                label: "Cricket Stats",
                            },
                            {
                                value: "Fantasy cricket tips",
                                label: "Fantasy cricket tips",
                            },
                            {
                                value: "Match Preview",
                                label: "Match Preview",
                            },
                            {
                                value: "Today cricket match prediction",
                                label: "Today cricket match prediction",
                            },
                            {
                                value: "Uncategories",
                                label: "Uncategories",
                            },
                        ]}
                        placeholder={`All Categories`}
                        className="w-[300px] outline-none "
                    />
                    <button className="primary_btn-small py-2 text-sm flex items-center gap-1 ">
                        <RiSearchEyeLine className="text-2xl" />
                        View
                    </button>
                    <button className="primary_btn-small py-2 text-sm flex items-center gap-1 ">
                        <FaEdit className="text-2xl" />
                        Edit
                    </button>
                    <button className="px-5 py-[10px] bg-red-500 rounded-md font-medium hover:bg-[#323232] text-white hover:text-white cursor-pointer text-sm flex items-center gap-2 ">
                        <FaTrash className="text-base" />
                        Delete
                    </button>
                    {/* Pagination */}
                    <div className="w-full lg:w-fit mx-auto lg:mx-0">
                        <div className="flex w-fit mx-auto justify-between gap-1 items-center">
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
                </div>
                <div className="overflow-auto w-full">
                    <table className="w-full min-w-[1000px] border-2 ">
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
                                    <h5 className="">Title</h5>
                                </th>
                                <th className="font-medium py-3 text-left">
                                    Author
                                </th>
                                <th className="font-medium py-3 text-left">
                                    Categories
                                </th>
                                <th className="font-medium py-3 text-left">
                                    Tag
                                </th>
                                <th className="font-medium py-3 text-left">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Todo: Change Dynamic data */}
                            {blogs?.map((blog, idx) => (
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
                                        <Link
                                            href={"/"}
                                            className="font-medium text-ellipsis w-80 whitespace-nowrap overflow-hidden hover:text-blue-500 hover:underline"
                                            title={blog?.title}
                                            data-tooltip-id="title"
                                            data-tooltip-content={blog?.title}
                                        >
                                            {blog?.title}
                                        </Link>
                                    </td>
                                    <td className="">{blog?.author?.name}</td>
                                    <td className="py-4">{blog?.category}</td>
                                    <td className="py-4 ">
                                        <p
                                            className="text-ellipsis w-40 whitespace-nowrap overflow-hidden"
                                            data-tooltip-id="title"
                                            data-tooltip-content={blog?.tags}
                                        >
                                            {blog?.tags}
                                        </p>
                                    </td>
                                    <td className="py-4">
                                        {moment(blog?.timestamp).format(
                                            "DD/MM/YYYY ddd - HH:mm A"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Tooltip id="title" place="top" variant="info" />
            <Tooltip id="tags" place="top" variant="info" />
        </>
    );
};

export default BlogsPage;
