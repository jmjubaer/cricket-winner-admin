"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

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
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaArchive,
    FaCalendarAlt,
    FaCloudUploadAlt,
    FaEdit,
    FaRegListAlt,
    FaRegUserCircle,
    FaSearch,
} from "react-icons/fa";
import { RiCornerUpLeftLine, RiCornerUpRightLine } from "react-icons/ri";
import {
    MdHtml,
    MdInsertPageBreak,
    MdLibraryMusic,
    MdManageSearch,
    MdMenuOpen,
    MdOndemandVideo,
    MdOutlineAudiotrack,
    MdOutlineBrokenImage,
    MdOutlinePreview,
    MdOutlineWebStories,
    MdSpeakerPhone,
    MdTitle,
} from "react-icons/md";
import { GoFileDirectory, GoSidebarExpand } from "react-icons/go";
import {
    BsImageAlt,
    BsListNested,
    BsParagraph,
    BsTags,
    BsThreeDotsVertical,
    BsViewList,
} from "react-icons/bs";
import { TbBlockquote, TbSpacingVertical, TbUserHexagon } from "react-icons/tb";
import { AiOutlineDash } from "react-icons/ai";
import { LiaClipboardListSolid, LiaMixcloud } from "react-icons/lia";
import {
    IoBookmarkSharp,
    IoCalendarNumberOutline,
    IoClose,
    IoCodeSlashSharp,
    IoImagesOutline,
    IoLinkOutline,
    IoLocationOutline,
    IoLogInOutline,
    IoShareSocialOutline,
} from "react-icons/io5";
import {
    BiCalendarEdit,
    BiCategory,
    BiCategoryAlt,
    BiColumns,
    BiComment,
    BiCommentDetail,
    BiSolidUserDetail,
} from "react-icons/bi";
import { VscPreview, VscTable } from "react-icons/vsc";
import { GrTextWrap } from "react-icons/gr";
import {
    PiKeyboard,
    PiListNumbersLight,
    PiListPlus,
    PiScreencastBold,
    PiUserList,
    PiUsersThreeLight,
} from "react-icons/pi";
import {
    SiFlickr,
    SiIssuu,
    SiPocketcasts,
    SiReverbnation,
    SiSmugmug,
    SiStudyverse,
    SiWolfram,
} from "react-icons/si";
import { CgArrowsExpandRight } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import {
    TfiLayoutMediaOverlayAlt2,
    TfiLoop,
    TfiShortcode,
} from "react-icons/tfi";
import {
    LuBookPlus,
    LuFileArchive,
    LuListVideo,
    LuScrollText,
} from "react-icons/lu";
import { RxStretchHorizontally, RxVideo } from "react-icons/rx";
import { ImEmbed2 } from "react-icons/im";

// Image =================
import animoto from "@/assets/animoto.png";
import fav from "@/assets/favicon.png";
import overview from "@/assets/heading.svg";
import { IoMdLaptop } from "react-icons/io";

import SettingTab from "@/pages/addBlogs/SettingTab";
const AddBlogPage = () => {
    const [toolDrawer, setToolDrawer] = useState(false);
    const [overviewDrawer, setOverviewDrawer] = useState(false);
    const [settingDrawer, setSettingDrawer] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Function=============
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
    const handleSummery = (data) => {
        console.log(data)
    }
    const handleCategory = (data) => {
        console.log(data)
    }
    const handleToolSearch = (e) => {
        console.log(e.target.value);
    };
    return (
        <section className="max-w-[1440px] mx-auto">
            <nav className="flex bg-white justify-between items-center border-b border fixed top-0  w-full">
                <div className="flex items-center">
                    <Image src={fav} alt="logo image" height={60} width={60} />
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
                                    overviewDrawer ? "bg-black text-white" : ""
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
                        <button className="primary_btn cursor-pointer">
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
                        <button className="cursor-pointer">
                            <BsThreeDotsVertical className="text-2xl mt-1" />
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="mt-[61px] h-[calc(100vh-61px)] overflow-hidden grid grid-cols-7">
                {/* Tool bar */}
                {toolDrawer && (
                    <div className="border-r col-span-2">
                        <form action="" className="overflow-hidden m-4">
                            <input
                                onChange={handleToolSearch}
                                autoFocus
                                type="search"
                                name="toolSearchText"
                                id=""
                                placeholder="Search"
                                className="bg-slate-200 focus:bg-transparent p-3 outline-2 w-full outline-blue-500"
                            />
                        </form>
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
                                <div className="p-3 h-[calc(100vh-175px)] overflow-auto">
                                    <h3 className="uppercase text-sm">Text</h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BsParagraph className="text-xl" />
                                            <span className="text-sm">
                                                Paragraph
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoBookmarkSharp className="text-xl" />
                                            <span className="text-sm">
                                                Heading
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiListPlus className="text-xl" />
                                            <span className="text-sm">
                                                List
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaQuoteRight className="text-xl" />
                                            <span className="text-sm">
                                                Quote
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoCodeSlashSharp className="text-xl" />
                                            <span className="text-sm">
                                                Code
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <LuListVideo className="text-xl" />
                                            <span className="text-sm">
                                                Details
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <VscPreview className="text-xl" />
                                            <span className="text-sm">
                                                Preformatted
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BsViewList className="text-xl" />
                                            <span className="text-sm">
                                                Pullquote
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <VscTable className="text-xl" />
                                            <span className="text-sm">
                                                Table
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiStudyverse className="text-xl" />
                                            <span className="text-sm">
                                                Verse
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiListNumbersLight className="text-xl" />
                                            <span className="text-sm">
                                                Footnotes
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiKeyboard className="text-xl" />
                                            <span className="text-sm">
                                                Classic
                                            </span>
                                        </button>
                                    </div>

                                    <h3 className="uppercase text-sm">Media</h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <CiImageOn className="text-xl" />
                                            <span className="text-sm">
                                                Image
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoImagesOutline className="text-xl" />
                                            <span className="text-sm">
                                                Gallery
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdOutlineAudiotrack className="text-xl" />
                                            <span className="text-sm">
                                                Audio
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TfiLayoutMediaOverlayAlt2 className="text-xl" />
                                            <span className="text-sm">
                                                Cover
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <GoFileDirectory className="text-xl" />
                                            <span className="text-sm">
                                                File
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                                            <GrTextWrap className="text-xl" />
                                            <span className="text-sm">
                                                Media & Text
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdOndemandVideo className="text-xl" />
                                            <span className="text-sm">
                                                Video
                                            </span>
                                        </button>
                                    </div>

                                    <h3 className="uppercase text-sm">
                                        Design
                                    </h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaBarsProgress className="text-xl" />
                                            <span className="text-sm">
                                                Buttons
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiColumns className="text-xl" />
                                            <span className="text-sm">
                                                Columns
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaObjectGroup className="text-xl" />
                                            <span className="text-sm">
                                                Group
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TbSpacingVertical className="text-xl rotate-90" />
                                            <span className="text-sm">Row</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TbSpacingVertical className="text-xl" />
                                            <span className="text-sm">
                                                Stack
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <AiOutlineDash className="text-xl" />
                                            <span className="text-sm">
                                                More
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                                            <MdInsertPageBreak className="text-xl" />
                                            <span className="text-sm">
                                                Page Break
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <RxStretchHorizontally className="text-xl" />
                                            <span className="text-sm">
                                                Separator
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <CgArrowsExpandRight className="text-xl" />
                                            <span className="text-sm">
                                                Spacer
                                            </span>
                                        </button>
                                    </div>

                                    <h3 className="uppercase text-sm">
                                        Widgets
                                    </h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaArchive className="text-xl" />
                                            <span className="text-sm">
                                                Archives
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaCalendarAlt className="text-xl" />
                                            <span className="text-sm">
                                                Calender
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiCategory className="text-xl" />
                                            <span className="text-sm">
                                                Categories List
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdHtml className="text-xl" />
                                            <span className="text-sm">
                                                Custom HTML
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiComment className="text-xl" />
                                            <span className="text-sm">
                                                Latest Comment
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaRegListAlt className="text-xl" />
                                            <span className="text-sm">
                                                Latest Post
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                                            <LiaClipboardListSolid className="text-xl" />
                                            <span className="text-sm">
                                                Page List
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaRss className="text-xl" />
                                            <span className="text-sm">RSS</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaSearch className="text-xl" />
                                            <span className="text-sm">
                                                Search
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TfiShortcode className="text-xl" />
                                            <span className="text-sm">
                                                Short Code
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoShareSocialOutline className="text-xl" />
                                            <span className="text-sm">
                                                Social Icon
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaTag className="text-xl" />
                                            <span className="text-sm">
                                                Tag Cloud
                                            </span>
                                        </button>
                                    </div>

                                    <h3 className="uppercase text-sm">Theme</h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdMenuOpen className="text-xl" />
                                            <span className="text-sm">
                                                Navigation
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BsImageAlt className="text-xl border border-black rounded-full" />
                                            <span className="text-sm">
                                                Site Logo
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoLocationOutline className="text-xl" />
                                            <span className="text-sm">
                                                Site Title
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaBarsStaggered className="text-xl" />
                                            <span className="text-sm">
                                                Site Tagline
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TfiLoop className="text-xl" />
                                            <span className="text-sm">
                                                Query Loop{" "}
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaRegListAlt className="text-xl" />
                                            <span className="text-sm">
                                                Posts List
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                                            <FaRegUserCircle className="text-xl" />
                                            <span className="text-sm">
                                                Avatar
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdTitle className="text-xl" />
                                            <span className="text-sm">
                                                Title
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TbBlockquote className="text-xl" />
                                            <span className="text-sm">
                                                Excerpt
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdOutlineBrokenImage className="text-xl" />
                                            <span className="text-sm">
                                                Featured Image
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <TbUserHexagon className="text-xl" />
                                            <span className="text-sm">
                                                Author
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiSolidUserDetail className="text-xl" />
                                            <span className="text-sm">
                                                Author Name
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoCalendarNumberOutline className="text-xl" />
                                            <span className="text-sm">
                                                Date
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiCalendarEdit className="text-xl" />
                                            <span className="text-sm">
                                                Modified Date
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiCategoryAlt className="text-xl" />
                                            <span className="text-sm">
                                                Categories
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BsTags className="text-xl" />
                                            <span className="text-sm">
                                                Tags
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiUsersThreeLight className="text-xl" />
                                            <span className="text-sm">
                                                Leagues
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaWpforms className="text-xl" />
                                            <span className="text-sm">
                                                Formats
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <LuBookPlus className="text-xl" />
                                            <span className="text-sm">
                                                Bookmaker Types
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaAngleDoubleRight className="text-xl" />
                                            <span className="text-sm">
                                                Next Post
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaAngleDoubleLeft className="text-xl" />
                                            <span className="text-sm">
                                                Previous Post
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoLinkOutline className="text-xl" />
                                            <span className="text-sm">
                                                Read More
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaRegCommentDots className="text-xl" />
                                            <span className="text-sm">
                                                Comments
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <BiCommentDetail className="text-xl" />
                                            <span className="text-sm">
                                                Comments Form
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <IoLogInOutline className="text-xl" />
                                            <span className="text-sm">
                                                Login/out
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <LuScrollText className="text-xl" />
                                            <span className="text-sm">
                                                Term Description
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <LuFileArchive className="text-xl" />
                                            <span className="text-sm">
                                                Archive Title
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdManageSearch className="text-xl" />
                                            <span className="text-sm">
                                                Search Result Title
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiUserList className="text-xl" />
                                            <span className="text-sm">
                                                Author Biography
                                            </span>
                                        </button>
                                    </div>

                                    <h3 className="uppercase text-sm">
                                        Embeds
                                    </h3>
                                    <div className="grid grid-cols-3 my-5">
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <ImEmbed2 className="text-xl" />
                                            <span className="text-sm">
                                                Embed
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaTwitter className="text- text-[#1DA1F2]" />
                                            <span className="text-sm">
                                                Twitter
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaYoutube className="text-xl text-red-500" />
                                            <span className="text-sm">
                                                Youtube
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaWordpressSimple className="text-xl" />
                                            <span className="text-sm text-[#21759b]">
                                                Wordpress
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdLibraryMusic className="text-xl" />
                                            <span className="text-sm">
                                                SoundCloud
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaSpotify className="text-xl" />
                                            <span className="text-sm text-[#1ED760]">
                                                Spotify
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                                            <SiFlickr className="text-xl" />
                                            <span className="text-sm">
                                                Flickr
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaVimeoV className="text-xl text-[#1AB7EA]" />
                                            <span className="text-sm">
                                                Vimeo
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <Image
                                                src={animoto}
                                                alt="Animoto logo "
                                                className="w-7"
                                            />
                                            <span className="text-sm">
                                                Animoto
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaCloudUploadAlt className="text-xl" />
                                            <span className="text-sm">
                                                CloudUp
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdSpeakerPhone className="text-xl" />
                                            <span className="text-sm">
                                                Crowdsignal
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaDailymotion className="text-xl" />
                                            <span className="text-sm">
                                                Dailymotion
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <CiImageOn className="text-xl" />
                                            <span className="text-sm">
                                                Imagur
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiIssuu className="text-xl" />
                                            <span className="text-sm">
                                                Issuu
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaKickstarterK className="text-xl" />
                                            <span className="text-sm">
                                                Kickstarter
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <LiaMixcloud className="text-xl" />
                                            <span className="text-sm">
                                                Mixcloud
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiPocketcasts className="text-xl text-[#D00908]" />
                                            <span className="text-sm ">
                                                Pocket Casts
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaRedditAlien className="text-xl" />
                                            <span className="text-sm">
                                                Reddit
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiReverbnation className="text-xl" />
                                            <span className="text-sm">
                                                Reverbnation
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <PiScreencastBold className="text-xl" />
                                            <span className="text-sm">
                                                Screen Cast
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaScribd className="text-xl" />
                                            <span className="text-sm">
                                                Scribd
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaSlideshare className="text-xl" />
                                            <span className="text-sm">
                                                Slideshare
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiSmugmug className="text-xl" />
                                            <span className="text-sm">
                                                Smugmug
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaSpeakerDeck className="text-xl" />
                                            <span className="text-sm">
                                                Speaker Deck
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaTiktok className="text-xl" />
                                            <span className="text-sm">
                                                Tik Tok
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <RxVideo className="text-xl" />
                                            <span className="text-sm">TED</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaSquareTumblr className="text-xl" />
                                            <span className="text-sm">
                                                Tumblr
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <RxVideo className="text-xl" />
                                            <span className="text-sm">
                                                VideoPress
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <RxVideo className="text-xl" />
                                            <span className="text-sm">
                                                Wordpress.tv
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaAmazon className="text-xl" />
                                            <span className="text-sm">
                                                Amazon Kindle
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <FaPinterestP className="text-xl" />
                                            <span className="text-sm">
                                                Pinterest
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <SiWolfram className="text-xl" />
                                            <span className="text-sm">
                                                Wolfram
                                            </span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                                            <MdOutlineWebStories className="text-xl" />
                                            <span className="text-sm">
                                                Web Stories
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </TabPanel>

                            {/*=============== Horizontal ad Tab ================ */}
                            <TabPanel className="">
                                <div className="p-3 h-[calc(100vh-175px)] overflow-auto">
                                    <ul>
                                        <li className="px-5">
                                            <button className="w-full flex justify-between items-center hover:text-blue-500 text-sm py-3">
                                                All Patterns <FaChevronRight />
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
                                            <h3 className="w-24">Words: </h3>
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
                                        Navigate the structure of your document
                                        and address issues like empty or
                                        incorrect heading levels.
                                    </p>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                )}
                <form
                    onSubmit={handleSubmit(handlePublish)}
                    className={`my-16 mx-auto ${
                        toolDrawer || overviewDrawer || settingDrawer
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
                </form>
                {/* Setting Drawer */}
                {settingDrawer && (
                    <div className="border-l col-span-2">
                        <SettingTab handleSummery={handleSummery} handleCategory={handleCategory}></SettingTab>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AddBlogPage;
