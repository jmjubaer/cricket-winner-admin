"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// icon ===============
import {
    FaAmazon,
    FaBarsProgress,
    FaBarsStaggered,
    FaChevronRight,
    FaDailymotion,
    FaImages,
    FaKickstarterK,
    FaObjectGroup,
    FaParagraph,
    FaPinterestP,
    FaPlus,
    FaQuoteRight,
    FaRedditAlien,
    FaRegCommentDots,
    FaRss,
    FaScribd,
    FaSlideshare,
    FaSpeakerDeck,
    FaSpotify,
    FaSquareTumblr,
    FaTag,
    FaTiktok,
    FaTwitter,
    FaVimeoV,
    FaWordpressSimple,
    FaWpforms,
    FaYoutube,
} from "react-icons/fa6";
import { FaEdit, FaPlusSquare, FaRegPlusSquare } from "react-icons/fa";
import { RiCornerUpLeftLine, RiCornerUpRightLine } from "react-icons/ri";

import { GoSidebarExpand } from "react-icons/go";
import {
    BsImageAlt,
    BsListNested,
    BsParagraph,
    BsThreeDotsVertical,
} from "react-icons/bs";
import {
    IoBookmarkSharp,
    IoClose,
    IoCodeSlashSharp,
    IoLocationOutline,
    IoSearch,
} from "react-icons/io5";

// Image =================
import fav from "@/assets/favicon.png";
import overview from "@/assets/heading.svg";
import { IoMdLaptop } from "react-icons/io";

import SettingTab from "@/pages/addBlogs/SettingTab";
import OptionsTab from "@/pages/addBlogs/OptionsTab";
import BlocksTab from "@/pages/addBlogs/BlocksTab";
import { TagsInput } from "react-tag-input-component";
import Modal from "@/pages/addBlogs/Modal";
import { MdMenuOpen } from "react-icons/md";
import { LuListVideo } from "react-icons/lu";
import { PiListPlus } from "react-icons/pi";
const AddBlogPage = () => {
    const [toolDrawer, setToolDrawer] = useState(false);
    const [overviewDrawer, setOverviewDrawer] = useState(false);
    const [settingDrawer, setSettingDrawer] = useState(true);
    const [optionsDrawer, setOptionsDrawer] = useState(false);
    const [topToolbar, setTopToolbar] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [tags, setTags] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // Todo data=============
    const options = [
        { value: "Test User1", label: "Test User1" },
        { value: "Test User2", label: "Test User2" },
        { value: "Test User3", label: "Test User3" },
        { value: "Test User4", label: "Test User4" },
        { value: "Test User5", label: "Test User5" },
    ];
    const categories = [
        {
            value: "Cricket Analysis",
            label: "Cricket Analysis",
            id: 1,
        },
        {
            value: "Cricket News",
            label: "Cricket News",
            id: 2,
        },
        {
            value: "Cricket Stats",
            label: "Cricket Stats",
            id: 3,
        },
        {
            value: "Fantasy cricket tips",
            label: "Fantasy cricket tips",
            id: 4,
        },
        {
            value: "Match Preview",
            label: "Match Preview",
            id: 5,
        },
        {
            value: "Today cricket match prediction",
            label: "Today cricket match prediction",
            id: 6,
        },
        {
            value: "Uncategories",
            label: "Uncategories",
            id: 7,
        },
    ];
    const mostUsedTags = [
        "Match Prediction",
        "DREAM 11 PREDICTION",
        "Fantasy cricket tips",
        "IPL 2023India",
        "Virat Kohli",
        "T20 World Cup 2022",
        "Rohit Sharma",
        "IND vs AUS",
        "BBL 2022",
    ];
    // Function=============

    const handleTag = (tag) => {
        const isAvailable = tags.find((item) => item == tag);
        if (!isAvailable) {
            setTags([...tags, tag]);
        }
        console.log(isAvailable);
    };

    if (watch("image")) {
        const reader = new FileReader();
        const file = watch("image")[0];
        if (file) {
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader?.readAsDataURL(file);
        }
    }

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setValue("image", "");
    };

    const handleDrawer = (action) => {
        if (action == "toolbar") {
            setToolDrawer(!toolDrawer);
            setSettingDrawer(false);
            setOverviewDrawer(false);
        } else if (action == "overview") {
            setOverviewDrawer(!overviewDrawer);
            setToolDrawer(false);
            setSettingDrawer(false);
        } else if (action == "setting") {
            setSettingDrawer(!settingDrawer);
            setOverviewDrawer(false);
            setToolDrawer(false);
        } else if (action == "options") {
            setOptionsDrawer(!optionsDrawer);
            setSettingDrawer(false);
            setOverviewDrawer(false);
            setToolDrawer(false);
        } else {
            setToolDrawer(false);
            setOverviewDrawer(false);
            setSettingDrawer(false);
        }
    };
    const handlePublish = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };

    // SettingTab Function=============

    const handleToolSearch = (e) => {
        console.log(e.target.value);
    };

    const handleAllTools = () => {
        setIsOpen(false)
        setToolDrawer(true)
    }
    return (
        <section className="max-w-[1440px] mx-auto">
            <form onSubmit={handleSubmit(handlePublish)}>
                <nav className="flex bg-white justify-between items-center border-b border fixed top-0  w-full">
                    <div className="flex items-center">
                        <Image
                            src={fav}
                            alt="logo image"
                            height={60}
                            width={60}
                        />
                        <ul className="flex items-center gap-5 mx-5">
                            <li>
                                <button
                                    onClick={() => handleDrawer("toolbar")}
                                    className={`p-2 text-white cursor-pointer duration-500 ${
                                        toolDrawer ? "bg-black" : "bg-[#FFC305]"
                                    }`}
                                >
                                    {toolDrawer ? <IoClose /> : <FaPlus />}
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
                                <button
                                    onClick={() => handleDrawer("overview")}
                                    className={`text-xl p-2 rounded-md cursor-pointer ${
                                        overviewDrawer
                                            ? "bg-black text-white"
                                            : ""
                                    }`}
                                >
                                    <BsListNested />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex gap-5 mx-5 items-center">
                        <li>
                            <button className="text-sm text-gray-400 cursor-pointer">
                                Save draft
                            </button>
                        </li>
                        <li>
                            <button className="cursor-pointer text-gray-400">
                                <IoMdLaptop className="text-2xl mt-1" />
                            </button>
                        </li>
                        <li>
                            <button
                                type="submit"
                                className="primary_btn cursor-pointer"
                            >
                                Publish
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleDrawer("setting")}
                                className={`text-xl p-1 pt-0 rounded-md cursor-pointer ${
                                    settingDrawer ? "bg-black text-white" : ""
                                }`}
                            >
                                <GoSidebarExpand className="text-3xl mt-1" />
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleDrawer("options")}
                                className="cursor-pointer"
                            >
                                <BsThreeDotsVertical className="text-2xl mt-1" />
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="mt-[61px] h-[calc(100vh-61px)] overflow-hidden grid grid-cols-7">
                    {/* Tool bar */}
                    {toolDrawer && (
                        <div className="border-r col-span-2">
                            <div className="overflow-hidden m-4 relative">
                                <input
                                    onChange={handleToolSearch}
                                    autoFocus
                                    type="search"
                                    name="toolSearchText"
                                    id=""
                                    placeholder="Search"
                                    className="bg-slate-200 focus:bg-transparent p-3 outline-2 w-full outline-blue-500"
                                />
                                <span className="absolute top-1/2 text-xl -translate-y-1/2 right-4">
                                    <IoSearch />
                                </span>
                            </div>
                            <Tabs>
                                <div className="flex">
                                    <TabList className="grid grid-cols-3 blog_tab text-[#323232] font-medium justify-between w-full">
                                        <Tab className="p-3 px-5 text-sm pt-0 border-b cursor-pointer outline-none">
                                            Blocks
                                        </Tab>
                                        <Tab className="p-3 px-5 text-sm pt-0 border-b cursor-pointer outline-none">
                                            Patterns
                                        </Tab>
                                        <Tab className="p-3 px-5 text-sm pt-0 border-b cursor-pointer outline-none">
                                            Media
                                        </Tab>
                                    </TabList>
                                </div>

                                {/*=============== Blocks Tab -================= */}
                                <TabPanel className="">
                                    <BlocksTab></BlocksTab>
                                </TabPanel>

                                {/*=============== Patterns Tab ================ */}
                                <TabPanel className="">
                                    <div className="p-3 h-[calc(100vh-175px)] overflow-auto">
                                        <ul>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    All Patterns{" "}
                                                    <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Banners <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Call to Action{" "}
                                                    <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Featured <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Footers <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Gallery <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Headers <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Posts <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Text <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="px-5">
                                                <button className="w-full text-sm p-2 rounded-sm text-blue-500 border border-blue-500">
                                                    Explore all Patterns
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </TabPanel>
                                {/*=============== Media Tab ================ */}
                                <TabPanel className="">
                                    <div className="p-3 h-[calc(100vh-175px)] overflow-auto flex flex-col justify-between px-5">
                                        <ul>
                                            <li className="">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Images <FaChevronRight />
                                                </button>
                                            </li>
                                            <li className="">
                                                <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                    Openverse <FaChevronRight />
                                                </button>
                                            </li>
                                        </ul>

                                        <button className="w-full text-sm p-2 rounded-sm text-blue-500 border border-blue-500">
                                            Explore all Patterns
                                        </button>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    )}
                    {/* Overview tab */}
                    {overviewDrawer && (
                        <div className="border-r col-span-2">
                            <Tabs>
                                <div className="flex">
                                    <TabList className="grid grid-cols-2 blog_tab text-[#323232] font-medium justify-between w-full">
                                        <Tab className="p-3 px-5 text-sm border-b cursor-pointer outline-none">
                                            List View
                                        </Tab>
                                        <Tab className="p-3 px-5 text-sm border-b cursor-pointer outline-none">
                                            Outline
                                        </Tab>
                                    </TabList>
                                </div>

                                {/*=============== Horizontal ad Tab ================ */}
                                <TabPanel className="">
                                    <div className="p-3 h-[calc(100vh-175px)] overflow-auto"></div>
                                </TabPanel>
                                <TabPanel className="">
                                    <div className="p-3 overflow-auto text-gray-500">
                                        <div className="border-b pb-2">
                                            <div className="flex my-3 text-xs items-center">
                                                <h3 className="w-24">
                                                    Characters:{" "}
                                                </h3>
                                                <span>{"0"}</span>
                                            </div>
                                            <div className="flex my-3 text-xs items-center">
                                                <h3 className="w-24">
                                                    Words:{" "}
                                                </h3>
                                                <span>{"0"}</span>
                                            </div>
                                            <div className="flex my-3 text-xs items-center">
                                                <h3 className="w-24">
                                                    Time to read:{" "}
                                                </h3>
                                                <span>{"< 1 Minute"}</span>
                                            </div>
                                        </div>
                                        <Image
                                            src={overview}
                                            alt=""
                                            className="mx-auto my-9"
                                        />
                                        <p className="text-gray-500 text-sm mx-8 text-center">
                                            Navigate the structure of your
                                            document and address issues like
                                            empty or incorrect heading levels.
                                        </p>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    )}
                    <div
                        className={`my-16 mx-auto h-fit relative ${
                            toolDrawer ||
                            overviewDrawer ||
                            settingDrawer ||
                            optionsDrawer
                                ? "col-span-5 w-4/5"
                                : "col-span-7 w-3/5"
                        }`}
                    >
                        <input
                            {...register("title")}
                            type="text"
                            className="text-6xl placeholder:text-slate-600 outline-none"
                            placeholder="Add Title"
                        />
                        <input
                            {...register("title")}
                            type="text"
                            className="text-lg placeholder:text-slate-600 outline-none my-5"
                            placeholder="Type / to choose a block"
                        />
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-3xl cursor-pointer hover:text-blue-500 absolute right-0 bottom-5"
                        >
                            <FaRegPlusSquare />
                        </button>
                    </div>
                    {/* Modal */}
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                        <div className="m-3 relative">
                            <input
                                // onChange={handleToolSearch}
                                autoFocus
                                type="search"
                                name="toolSearchText"
                                id=""
                                placeholder="Search"
                                className="bg-slate-200 focus:bg-transparent p-3 outline-2 w-full outline-blue-500"
                            />
                            <span className="absolute top-1/2 text-xl -translate-y-1/2 right-4">
                                <IoSearch />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 m-3">
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <BsParagraph className="text-xl" />
                                <span className="text-sm">Paragraph</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <IoBookmarkSharp className="text-xl" />
                                <span className="text-sm">Heading</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <PiListPlus className="text-xl" />
                                <span className="text-sm">List</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <FaQuoteRight className="text-xl" />
                                <span className="text-sm">Quote</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <IoCodeSlashSharp className="text-xl" />
                                <span className="text-sm">Code</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                <LuListVideo className="text-xl" />
                                <span className="text-sm">Details</span>
                            </button>
                        </div>
                        <button onClick={handleAllTools} className="w-full rounded-b p-3 bg-[#333] text-white text-sm mt-2">
                            Browse all
                        </button>
                    </Modal>
                    {/* Setting Drawer */}
                    {settingDrawer && (
                        <div className="border-l col-span-2 ">
                            <Tabs>
                                <div className="flex">
                                    <TabList className="grid grid-cols-2 blog_tab text-[#323232] font-medium justify-between w-full">
                                        <Tab className="p-3 px-5 text-sm border-b cursor-pointer outline-none">
                                            Post
                                        </Tab>
                                        <Tab className="p-3 px-5 text-sm border-b cursor-pointer outline-none">
                                            Block
                                        </Tab>
                                    </TabList>
                                </div>

                                {/*=============== Post Tab ================ */}
                                <TabPanel className="">
                                    <div className=" h-[calc(100vh-110px)] overflow-auto">
                                        <Accordion
                                            preExpanded={[
                                                "a",
                                                "b",
                                                "c",
                                                "d",
                                                "f",
                                            ]}
                                            allowZeroExpanded
                                            allowMultipleExpanded
                                        >
                                            <AccordionItem uuid="a">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Summery
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="mb-4 mt-2">
                                                        <div className="grid my-2 grid-cols-3 text-sm items-center">
                                                            <label>
                                                                Visibility
                                                            </label>
                                                            <div className="col-span-2">
                                                                <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                                    Public
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="grid my-2 grid-cols-3 text-sm items-center">
                                                            <label>
                                                                Publish
                                                            </label>
                                                            <div className="col-span-2">
                                                                <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                                    Immediately
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="grid my-2 grid-cols-3 text-sm items-center">
                                                            <label>
                                                                Template
                                                            </label>
                                                            <div className="col-span-2">
                                                                <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                                    Single Posts
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="grid my-2 grid-cols-3 text-sm items-center">
                                                            <label>URL</label>
                                                            <div className="col-span-2">
                                                                <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                                    cricketwinner.xyz/?p=60487
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-3 my-5 items-center">
                                                            <input
                                                                type="checkbox"
                                                                name="stick"
                                                                id="stick"
                                                                {...register(
                                                                    "stick"
                                                                )}
                                                                value={
                                                                    "Stick to the top of the blog"
                                                                }
                                                                className="w-5 h-5 cursor-pointer"
                                                            />
                                                            <label
                                                                htmlFor="stick"
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                Stick to the top
                                                                of the blog
                                                            </label>
                                                        </div>

                                                        <div className="flex gap-3 my-5 items-center">
                                                            <input
                                                                type="checkbox"
                                                                name="review"
                                                                id="review"
                                                                {...register(
                                                                    "review"
                                                                )}
                                                                value={
                                                                    "Pending review"
                                                                }
                                                                className="w-5 h-5 cursor-pointer"
                                                            />
                                                            <label
                                                                htmlFor="review"
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                Pending review
                                                            </label>
                                                        </div>

                                                        <h2 className="text-sm font-medium">
                                                            Author
                                                        </h2>
                                                        <div className="w-full mt-2">
                                                            <select className="w-full border-2 block p-2 text-sm outline-none border-blue-500">
                                                                {options?.map(
                                                                    ({
                                                                        value,
                                                                        label,
                                                                    }) => (
                                                                        <option
                                                                            key={
                                                                                value
                                                                            }
                                                                            value={
                                                                                label
                                                                            }
                                                                        >
                                                                            {
                                                                                label
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem uuid="b">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Category
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="mb-4 mt-2">
                                                        {categories.map(
                                                            ({
                                                                value,
                                                                label,
                                                                id,
                                                            }) => (
                                                                <div
                                                                    key={id}
                                                                    className="flex gap-3 my-3 items-center"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        name={
                                                                            value
                                                                        }
                                                                        id={id}
                                                                        {...register(
                                                                            label
                                                                        )}
                                                                        value={
                                                                            value
                                                                        }
                                                                        className="w-5 h-5 cursor-pointer"
                                                                        y7
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            id
                                                                        }
                                                                        className="text-sm cursor-pointer"
                                                                    >
                                                                        {label}
                                                                    </label>
                                                                </div>
                                                            )
                                                        )}
                                                        <div className="">
                                                            <button className="text-sm text-blue-500 underline">
                                                                Add New Category
                                                            </button>
                                                        </div>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem uuid="c">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Tags
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <h3 className="uppercase text-xs font-medium mb-3">
                                                        ADD NEW TAG
                                                    </h3>
                                                    <TagsInput
                                                        value={tags}
                                                        onChange={setTags}
                                                        name="tags"
                                                        placeHolder="Enter new tags"
                                                    />
                                                    <span className="text-xs">
                                                        Separate by the Enter
                                                        key.
                                                    </span>
                                                    <h3 className="text-xs uppercase font-medium mt-4">
                                                        Most Used
                                                    </h3>
                                                    {mostUsedTags?.map(
                                                        (tag, idx) => (
                                                            <button
                                                                key={idx}
                                                                className="text-xs text-blue-400 cursor-pointer underline mx-2"
                                                                onClick={() =>
                                                                    handleTag(
                                                                        tag
                                                                    )
                                                                }
                                                            >
                                                                {tag}
                                                            </button>
                                                        )
                                                    )}
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem uuid="d">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Featured Image
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="">
                                                        {selectedImage ? (
                                                            <div className="relative w-full h-full block">
                                                                <div className="absolute bottom-4 right-0 text-black duration-500 transition-all w-full flex justify-evenly gap-3">
                                                                    <label
                                                                        className="px-6 border py-2 bg-gray-300 inline-block rounded cursor-pointer text-sm bg-opacity-80"
                                                                        htmlFor="imageInput"
                                                                    >
                                                                        Replace
                                                                    </label>
                                                                    <button
                                                                        onClick={
                                                                            handleRemoveImage
                                                                        }
                                                                        className="px-6 border py-2 bg-gray-300 inline-block rounded text-sm bg-opacity-80"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                                <Image
                                                                    width={300}
                                                                    height={100}
                                                                    src={
                                                                        selectedImage
                                                                    }
                                                                    alt="Image Preview"
                                                                    className="w-full border h-[200px] object-cover rounded-md"
                                                                />
                                                            </div>
                                                        ) : (
                                                            <label
                                                                htmlFor="imageInput"
                                                                className="w-full h-32 rounded cursor-pointer bg-slate-200 flex items-center justify-center"
                                                            >
                                                                <span className="text-sm">
                                                                    Set Featured
                                                                    Image
                                                                </span>
                                                            </label>
                                                        )}
                                                        <input
                                                            type="file"
                                                            id="imageInput"
                                                            accept="image/*"
                                                            className="hidden"
                                                            {...register(
                                                                "image"
                                                            )}
                                                        />
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem uuid="e">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Excerpt
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <label
                                                        htmlFor="excerpt"
                                                        className="text-xs"
                                                    >
                                                        WRITE AN EXCERPT
                                                        (OPTIONAL)
                                                    </label>
                                                    <div className="">
                                                        <textarea
                                                            {...register(
                                                                "excerpt"
                                                            )}
                                                            id="excerpt"
                                                            className="border border-black rounded mt-3 p-2 h-32 w-full outline-none"
                                                        ></textarea>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        target="_blank"
                                                        className="text-blue-500 underline text-xs"
                                                    >
                                                        Learn more about manual
                                                        excerpts
                                                    </a>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem uuid="f">
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        Discussion
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div className="">
                                                        <div className="flex gap-3 my-5 items-center">
                                                            <input
                                                                type="checkbox"
                                                                name="comments"
                                                                id="comments"
                                                                {...register(
                                                                    "comments"
                                                                )}
                                                                value={
                                                                    "Allow comment"
                                                                }
                                                                className="w-5 h-5 cursor-pointer"
                                                            />
                                                            <label
                                                                htmlFor="comments"
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                Allow comment
                                                            </label>
                                                        </div>
                                                        <div className="flex gap-3 my-5 items-center">
                                                            <input
                                                                type="checkbox"
                                                                name="pingbacksTrackbacks"
                                                                id="pingbacksTrackbacks"
                                                                {...register(
                                                                    "pingbacksTrackbacks"
                                                                )}
                                                                value={
                                                                    "Allow Allow pingbacks & trackbacks"
                                                                }
                                                                className="w-5 h-5 cursor-pointer"
                                                            />
                                                            <label
                                                                htmlFor="pingbacksTrackbacks"
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                Allow Allow
                                                                pingbacks &
                                                                trackbacks
                                                            </label>
                                                        </div>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </TabPanel>
                                {/*=============== block Tab ================ */}
                                <TabPanel className="">
                                    <div className="p-3 overflow-auto text-gray-500"></div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    )}
                    {/* Options Drawer */}
                    {optionsDrawer && (
                        <div className="border-l col-span-2 h-[calc(100vh-110px)] overflow-auto">
                            <OptionsTab
                                topToolbar={topToolbar}
                                setTopToolbar={setTopToolbar}
                            ></OptionsTab>
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
};

export default AddBlogPage;
