import React from 'react';
import { IoBookmarkSharp, IoCodeSlashSharp } from "react-icons/io5";
import { LuLassoSelect, LuListVideo } from "react-icons/lu";
import { MdDone, MdInsertPageBreak, MdLink, MdLinkOff, MdOndemandVideo, MdOutlineAudiotrack, MdOutlineWidgets } from "react-icons/md";import { PiDotsThreeVertical, PiDotsThreeVerticalBold, PiKeyboard, PiListNumbersLight } from "react-icons/pi";
import { GoArrowSwitch, GoFileDirectory } from "react-icons/go";
import { RiPlayListAddFill } from "react-icons/ri";
import { VscPreview, VscTable } from "react-icons/vsc";
import { BsViewList } from "react-icons/bs";
import { SiMaterialdesignicons, SiStudyverse } from "react-icons/si";
import { CiImageOn } from "react-icons/ci";
import { TfiLayoutMediaOverlayAlt2 } from "react-icons/tfi";
import { GrTextWrap } from "react-icons/gr";
import {
    FaBarsProgress,
    FaMinus,
    FaObjectGroup,
    FaParagraph,
    FaPlus,
    FaQuoteLeft,
    FaStrikethrough,
    FaUnderline,
} from "react-icons/fa6";
import { BiColumns } from 'react-icons/bi';
import { TbSpacingVertical } from 'react-icons/tb';
import { AiOutlineDash } from 'react-icons/ai';
import { RxStretchHorizontally } from 'react-icons/rx';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { ImEmbed2 } from 'react-icons/im';
const SettingHead = ({block}) => {
    return (
        <div className="flex gap-3 p-5">
        <div className="mt-1">
            {block == "heading" ? (
                <IoBookmarkSharp className="text-2xl" />
            ) : block == "paragraph" ? (
                <FaParagraph className="text-2xl" />
            ) : block == "list" || block == "list-item" ? (
                <RiPlayListAddFill className="text-2xl" />
            ) : block == "quote" ? (
                <FaQuoteLeft className="text-2xl" />
            ) : block == "code" ? (
                <IoCodeSlashSharp className="text-2xl" />
            ) : block == "preformatted" ? (
                <VscPreview className="text-2xl" />
            ) : block == "pullquote" ? (
                <BsViewList className="text-2xl" />
            ) : block == "verse" ? (
                <SiStudyverse className="text-2xl" />
            ) : block == "footnotes" ? (
                <PiListNumbersLight className="text-2xl" />
            ) : block == "classic" ? (
                <PiKeyboard className="text-2xl" />
            ) : block == "table" ? (
                <VscTable className="text-2xl" />
            ): block == "details-list" ? (
                <LuListVideo className="text-2xl" />
            ) : block == "image" ? (
                <CiImageOn className="text-2xl" />
            ) : block == "audio" ? (
                <MdOutlineAudiotrack className="text-2xl" />
            ) : block == "cover" ? (
                <TfiLayoutMediaOverlayAlt2 className="text-2xl" />
            ) : block == "file" ? (
                <GoFileDirectory className="text-2xl" />
            ) : block == "MediaText" ? (
                <GrTextWrap className="text-2xl" />
            ) : block == "video" ? (
                <MdOndemandVideo className="text-2xl" />
            ) : block == "button" ? (
                <FaBarsProgress className="text-2xl" />
            ) : block == "columns" ? (
                <BiColumns className="text-2xl" />
            ) : block == "row" ? (
                <TbSpacingVertical className="text-2xl" />
            ) : block == "group" ? (
                <FaObjectGroup className="text-2xl" />
            ) : block == "stack" ? (
                <TbSpacingVertical className="text-2xl" />
            ) : block == "more" ? (
                <AiOutlineDash className="text-2xl" />
            ) : block == "Page break" ? (
                <MdInsertPageBreak className="text-2xl" />
            ) : block == "separator" ? (
                <RxStretchHorizontally className="text-2xl" />
            ) : block == "spacer" ? (
                <CgArrowsExpandRight className="text-2xl" />
            ) : block == "widgets" ? (
                <MdOutlineWidgets className="text-2xl" />
            ) :  block == "theme" ? (
                <SiMaterialdesignicons className="text-2xl" />
            ) :  block == "embed" ? (
                <ImEmbed2 className="text-2xl" />
            ) : (
                <LuLassoSelect className="text-2xl" />
            )}
        </div>
        <div className="">
            <h4 className="font-medium text-sm capitalize">
                {block}
            </h4>
            <p className="text-sm mt-2">
                {block == "heading"
                    ? "Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content."
                    : block == "paragraph"
                    ? "Start with the basic building block of all narrative."
                    : block == "list"
                    ? "Create a bulleted or numbered list."
                    : block == "list-item"
                    ? "Create a list item."
                    : block == "quote"
                    ? "Give quoted text visual emphasis. 'In quoting others, we cite ourselves.' — Julio Cortázar"
                    : block == "code"
                    ? "Display code snippets that respect your spacing and tabs."
                    : block == "preformatted"
                    ? "Add text that respects your spacing and tabs, and also allows styling."
                    : block == "pullquote"
                    ? "Give special visual emphasis to a quote from your text."
                    : block == "verse"
                    ? "Insert poetry. Use special spacing formats. Or quote song lyrics."
                    : block == "classic"
                    ? "Use the classic editor."
                    : block == "table"
                    ? "Create structured content in rows and columns to display information."
                    : block == "details-list"
                    ? "Hide and show additional content."
                    : block == "image"
                    ? "Insert an image to make a visual statement."
                    : block == "audio"
                    ? "Embed a simple audio player."
                    : block == "cover"
                    ? "Add an image or video with a text overlay."
                    : block == "file"
                    ? "Add a link to a downloadable file."
                    : block == "MediaText"
                    ? "Set media and words side-by-side for a richer layout."
                    : block == "video"
                    ? "Embed a video from your media library or upload a new one."
                    : block == "button"
                    ? "Prompt visitors to take action with a button-style link."
                    : block == "columns"
                    ? "Display content in multiple columns, with blocks added to each column."
                    : block == "row"
                    ? "Arrange blocks horizontally."
                    : block == "row"
                    ? "Gather blocks in a container."
                    : block == "stack"
                    ? "Arrange blocks vertically."
                    : block == "more"
                    ? "Content before this block will be shown in the excerpt on your archives page."
                    : block == "Page break"
                    ? "Separate your content into a multi-page experience."
                    : block == "separator"
                    ? "Create a break between ideas or sections with a horizontal separator."
                    : block == "spacer"
                    ? "Add white space between blocks and customize its height."
                    : block == "widgets"
                    ? "Display widgets of your posts."
                    : block == "theme"
                    ? "Display theme of your posts."
                    : block == "embed"
                    ? "Add a block that displays content pulled from other sites, like Twitter or YouTube."
                    : ""}
            </p>
        </div>
    </div>
    );
};

export default SettingHead;