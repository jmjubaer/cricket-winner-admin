import React from "react";
// icon ===============
import {
    FaAmazon,
    FaBarsProgress,
    FaBarsStaggered,
    FaDailymotion,
    FaKickstarterK,
    FaObjectGroup,
    FaPinterestP,
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
    FaRegListAlt,
    FaRegUserCircle,
    FaSearch,
} from "react-icons/fa";
import {
    MdHtml,
    MdInsertPageBreak,
    MdLibraryMusic,
    MdManageSearch,
    MdMenuOpen,
    MdOndemandVideo,
    MdOutlineAudiotrack,
    MdOutlineBrokenImage,
    MdOutlineWebStories,
    MdSpeakerPhone,
    MdTitle,
} from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import {
    BsImageAlt,
    BsParagraph,
    BsTags,
    BsViewList,
} from "react-icons/bs";
import { TbBlockquote, TbSpacingVertical, TbUserHexagon } from "react-icons/tb";
import { AiOutlineDash } from "react-icons/ai";
import { LiaClipboardListSolid, LiaMixcloud } from "react-icons/lia";
import {
    IoBookmarkSharp,
    IoCalendarNumberOutline,
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
import Image from "next/image";
const BlocksTab = () => {
    return (
        <div className="p-3 h-[calc(100vh-175px)] overflow-auto">
            <h3 className="uppercase text-sm">Text</h3>
            <div className="grid grid-cols-3 my-5">
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
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <VscPreview className="text-xl" />
                    <span className="text-sm">Preformatted</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BsViewList className="text-xl" />
                    <span className="text-sm">Pullquote</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <VscTable className="text-xl" />
                    <span className="text-sm">Table</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiStudyverse className="text-xl" />
                    <span className="text-sm">Verse</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <PiListNumbersLight className="text-xl" />
                    <span className="text-sm">Footnotes</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <PiKeyboard className="text-xl" />
                    <span className="text-sm">Classic</span>
                </button>
            </div>

            <h3 className="uppercase text-sm">Media</h3>
            <div className="grid grid-cols-3 my-5">
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <CiImageOn className="text-xl" />
                    <span className="text-sm">Image</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoImagesOutline className="text-xl" />
                    <span className="text-sm">Gallery</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdOutlineAudiotrack className="text-xl" />
                    <span className="text-sm">Audio</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TfiLayoutMediaOverlayAlt2 className="text-xl" />
                    <span className="text-sm">Cover</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <GoFileDirectory className="text-xl" />
                    <span className="text-sm">File</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                    <GrTextWrap className="text-xl" />
                    <span className="text-sm">Media & Text</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdOndemandVideo className="text-xl" />
                    <span className="text-sm">Video</span>
                </button>
            </div>

            <h3 className="uppercase text-sm">Design</h3>
            <div className="grid grid-cols-3 my-5">
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaBarsProgress className="text-xl" />
                    <span className="text-sm">Buttons</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiColumns className="text-xl" />
                    <span className="text-sm">Columns</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaObjectGroup className="text-xl" />
                    <span className="text-sm">Group</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TbSpacingVertical className="text-xl rotate-90" />
                    <span className="text-sm">Row</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TbSpacingVertical className="text-xl" />
                    <span className="text-sm">Stack</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <AiOutlineDash className="text-xl" />
                    <span className="text-sm">More</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                    <MdInsertPageBreak className="text-xl" />
                    <span className="text-sm">Page Break</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <RxStretchHorizontally className="text-xl" />
                    <span className="text-sm">Separator</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <CgArrowsExpandRight className="text-xl" />
                    <span className="text-sm">Spacer</span>
                </button>
            </div>

            <h3 className="uppercase text-sm">Widgets</h3>
            <div className="grid grid-cols-3 my-5">
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaArchive className="text-xl" />
                    <span className="text-sm">Archives</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaCalendarAlt className="text-xl" />
                    <span className="text-sm">Calender</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiCategory className="text-xl" />
                    <span className="text-sm">Categories List</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdHtml className="text-xl" />
                    <span className="text-sm">Custom HTML</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiComment className="text-xl" />
                    <span className="text-sm">Latest Comment</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaRegListAlt className="text-xl" />
                    <span className="text-sm">Latest Post</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                    <LiaClipboardListSolid className="text-xl" />
                    <span className="text-sm">Page List</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaRss className="text-xl" />
                    <span className="text-sm">RSS</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaSearch className="text-xl" />
                    <span className="text-sm">Search</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TfiShortcode className="text-xl" />
                    <span className="text-sm">Short Code</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoShareSocialOutline className="text-xl" />
                    <span className="text-sm">Social Icon</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaTag className="text-xl" />
                    <span className="text-sm">Tag Cloud</span>
                </button>
            </div>

            <h3 className="uppercase text-sm">Theme</h3>
            <div className="grid grid-cols-3 my-5">
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdMenuOpen className="text-xl" />
                    <span className="text-sm">Navigation</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BsImageAlt className="text-xl border border-black rounded-full" />
                    <span className="text-sm">Site Logo</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoLocationOutline className="text-xl" />
                    <span className="text-sm">Site Title</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaBarsStaggered className="text-xl" />
                    <span className="text-sm">Site Tagline</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TfiLoop className="text-xl" />
                    <span className="text-sm">Query Loop </span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaRegListAlt className="text-xl" />
                    <span className="text-sm">Posts List</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                    <FaRegUserCircle className="text-xl" />
                    <span className="text-sm">Avatar</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdTitle className="text-xl" />
                    <span className="text-sm">Title</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TbBlockquote className="text-xl" />
                    <span className="text-sm">Excerpt</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdOutlineBrokenImage className="text-xl" />
                    <span className="text-sm">Featured Image</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <TbUserHexagon className="text-xl" />
                    <span className="text-sm">Author</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiSolidUserDetail className="text-xl" />
                    <span className="text-sm">Author Name</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoCalendarNumberOutline className="text-xl" />
                    <span className="text-sm">Date</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiCalendarEdit className="text-xl" />
                    <span className="text-sm">Modified Date</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiCategoryAlt className="text-xl" />
                    <span className="text-sm">Categories</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BsTags className="text-xl" />
                    <span className="text-sm">Tags</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <PiUsersThreeLight className="text-xl" />
                    <span className="text-sm">Leagues</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaWpforms className="text-xl" />
                    <span className="text-sm">Formats</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <LuBookPlus className="text-xl" />
                    <span className="text-sm">Bookmaker Types</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaAngleDoubleRight className="text-xl" />
                    <span className="text-sm">Next Post</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaAngleDoubleLeft className="text-xl" />
                    <span className="text-sm">Previous Post</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoLinkOutline className="text-xl" />
                    <span className="text-sm">Read More</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaRegCommentDots className="text-xl" />
                    <span className="text-sm">Comments</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <BiCommentDetail className="text-xl" />
                    <span className="text-sm">Comments Form</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <IoLogInOutline className="text-xl" />
                    <span className="text-sm">Login/out</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <LuScrollText className="text-xl" />
                    <span className="text-sm">Term Description</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <LuFileArchive className="text-xl" />
                    <span className="text-sm">Archive Title</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdManageSearch className="text-xl" />
                    <span className="text-sm">Search Result Title</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <PiUserList className="text-xl" />
                    <span className="text-sm">Author Biography</span>
                </button>
            </div>

            <h3 className="uppercase text-sm">Embeds</h3>
            <div className="grid grid-cols-3 my-5">
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab   hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <ImEmbed2 className="text-xl" />
                    <span className="text-sm">Embed</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaTwitter className="text- text-[#1DA1F2]" />
                    <span className="text-sm">Twitter</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaYoutube className="text-xl text-red-500" />
                    <span className="text-sm">Youtube</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaWordpressSimple className="text-xl" />
                    <span className="text-sm text-[#21759b]">Wordpress</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdLibraryMusic className="text-xl" />
                    <span className="text-sm">SoundCloud</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaSpotify className="text-xl" />
                    <span className="text-sm text-[#1ED760]">Spotify</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-3 rounded-md hover:text-[#3858e9]">
                    <SiFlickr className="text-xl" />
                    <span className="text-sm">Flickr</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaVimeoV className="text-xl text-[#1AB7EA]" />
                    <span className="text-sm">Vimeo</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <Image src={animoto} alt="Animoto logo " className="w-7" />
                    <span className="text-sm">Animoto</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaCloudUploadAlt className="text-xl" />
                    <span className="text-sm">CloudUp</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdSpeakerPhone className="text-xl" />
                    <span className="text-sm">Crowdsignal</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaDailymotion className="text-xl" />
                    <span className="text-sm">Dailymotion</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <CiImageOn className="text-xl" />
                    <span className="text-sm">Imagur</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiIssuu className="text-xl" />
                    <span className="text-sm">Issuu</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaKickstarterK className="text-xl" />
                    <span className="text-sm">Kickstarter</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <LiaMixcloud className="text-xl" />
                    <span className="text-sm">Mixcloud</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiPocketcasts className="text-xl text-[#D00908]" />
                    <span className="text-sm ">Pocket Casts</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaRedditAlien className="text-xl" />
                    <span className="text-sm">Reddit</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiReverbnation className="text-xl" />
                    <span className="text-sm">Reverbnation</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <PiScreencastBold className="text-xl" />
                    <span className="text-sm">Screen Cast</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaScribd className="text-xl" />
                    <span className="text-sm">Scribd</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaSlideshare className="text-xl" />
                    <span className="text-sm">Slideshare</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiSmugmug className="text-xl" />
                    <span className="text-sm">Smugmug</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaSpeakerDeck className="text-xl" />
                    <span className="text-sm">Speaker Deck</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaTiktok className="text-xl" />
                    <span className="text-sm">Tik Tok</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <RxVideo className="text-xl" />
                    <span className="text-sm">TED</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaSquareTumblr className="text-xl" />
                    <span className="text-sm">Tumblr</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <RxVideo className="text-xl" />
                    <span className="text-sm">VideoPress</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <RxVideo className="text-xl" />
                    <span className="text-sm">Wordpress.tv</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaAmazon className="text-xl" />
                    <span className="text-sm">Amazon Kindle</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <FaPinterestP className="text-xl" />
                    <span className="text-sm">Pinterest</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <SiWolfram className="text-xl" />
                    <span className="text-sm">Wolfram</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 hover:bg-[#3858e9] cursor-grab  hover:bg-opacity-10 p-5 rounded-md hover:text-[#3858e9]">
                    <MdOutlineWebStories className="text-xl" />
                    <span className="text-sm">Web Stories</span>
                </button>
            </div>
        </div>
    );
};

export default BlocksTab;
