"use client";
import React, { useState } from "react";
import { BlockPicker, SketchPicker } from "react-color";
import { IoBookmarkSharp, IoCodeSlashSharp } from "react-icons/io5";
import { LuLassoSelect } from "react-icons/lu";
import { MdDone, MdLink, MdLinkOff } from "react-icons/md";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { PiDotsThreeVertical, PiDotsThreeVerticalBold, PiKeyboard, PiListNumbersLight } from "react-icons/pi";
import PopoverBody from "./PopoverBody";
import ColorPopover from "./ColorPopover";
import { GoArrowSwitch } from "react-icons/go";
import ListBox from "./ListBox";
import {
    FaMinus,
    FaParagraph,
    FaPlus,
    FaQuoteLeft,
    FaStrikethrough,
    FaUnderline,
} from "react-icons/fa6";
import Image from "next/image";
import paddingImg from "@/assets/padding.svg";
import paddingTopImg from "@/assets/paddingtop.svg";
import paddingBImg from "@/assets/paddingbottom.svg";
import paddingLeftImg from "@/assets/paddingleft.svg";
import paddingRightImg from "@/assets/paddingright.svg";
import horizontalPaddingImg from "@/assets/verticalPadding.svg";
import verticalPaddingImg from "@/assets/horizontalPadding.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { BsViewList } from "react-icons/bs";
import { SiStudyverse } from "react-icons/si";
const SettingBlockTab = () => {
// block name = heading,paragraph,list,list-item,quote,code,preformatted,pullquote,verse,footnotes,classic
    const block = "classic";
    // Toggle filed control==============
    const [TextColorField, setTextColorField] = useState(true);
    const [BgColorField, setBgColorField] = useState(block == "footnotes" ? false :true);
    const [linkColorField, setLinkColorField] = useState(block == "footnotes" ? true :false);
    const [FontSizeField, setFontSizeField] = useState(true);
    const [AppearanceField, setAppearanceField] = useState(
        block == "heading" || block == "quote" || block == "pullquote" || block == "verse"
            ? true
            : false
    );
    const [LetterCaseField, setLetterCaseField] = useState(
        block == "heading" ? true : false
    );
    const [FontFamilyField, setFontFamilyField] = useState(false);
    const [LineHField, setLineHField] = useState(false);
    const [LetterSPField, setLetterSPField] = useState(false);
    const [TextDecorationField, setTextDecorationField] = useState(false);
    const [CustomSize, setCustomSize] = useState(false);
    const [PaddingField, setPaddingField] = useState(
        block == "preformatted" ? true : false
    );
    const [PaddingTypeField, setPaddingTypeField] = useState("H&V");
    const [MarginField, setMarginField] = useState(
        block == "preformatted" ? true : false
    );
    const [MarginTypeField, setMarginTypeField] = useState("H&V");
    const [BorderField, setBorderField] = useState( true);
    const [BorderRadiusField, setBorderRadiusField] = useState(true);
    const [UnlinkBorder, setUnlinkBorder] = useState(false);
    const [UnlinkBorderRadius, setUnlinkBorderRadius] = useState(false);

    // Control Data============
    const [fontSize, setFontSize] = useState(16); //px
    const [fontStyle, setFontStyle] = useState("Default"); //number  500.600,700,
    const [fontCase, setFontCase] = useState("normal"); //text  uppercase,lowercase
    const [lineHeight, setLineHeight] = useState(1.5); // auto
    const [letterSpacing, setLetterSpacing] = useState(0); //px
    const [textDecoration, setTextDecoration] = useState("normal"); //text underline,line-throw
    const [fontFamily, setFontFamily] = useState("normal"); //text Robot,sans

    //Padding------  top-right-left-bottom
    const [paddingTop, setPaddingTop] = useState(0); //px
    const [paddingLeft, setPaddingLeft] = useState(0); //px
    const [paddingBottom, setPaddingBottom] = useState(0); //px
    const [paddingRight, setPaddingRight] = useState(0); //px
    //Margin------  top-right-left-bottom
    const [marginTop, setMarginTop] = useState(0); //px
    const [marginLeft, setMarginLeft] = useState(0); //px
    const [marginBottom, setMarginBottom] = useState(0); //px
    const [marginRight, setMarginRight] = useState(0); //px
    //Border------  top-right-left-bottom
    const [borderTop, setBorderTop] = useState(0); //px
    const [borderLeft, setBorderLeft] = useState(0); //px
    const [borderBottom, setBorderBottom] = useState(0); //px
    const [borderRight, setBorderRight] = useState(0); //px
    //Border radius------  top-right-left-bottom
    const [borderRadiusTop, setBorderRadiusTop] = useState(0); //px
    const [borderRadiusLeft, setBorderRadiusLeft] = useState(0); //px
    const [borderRadiusBottom, setBorderRadiusBottom] = useState(0); //px
    const [borderRadiusRight, setBorderRadiusRight] = useState(0); //px

    const [htmlAnchor, setHtmlAnchor] = useState(""); //text
    const [cssClass, setCssClass] = useState(""); //text

    // Color control=================
    const [textColor, setTextColor] = useState({
        hex: "#000000",
        source: "hex",
    });
    const [bgColor, setBgColor] = useState({ hex: "#ffffff", source: "hex" });
    const [linkColor, setLinkColor] = useState({
        hex: "#0000ff",
        source: "hex",
    });
    const [linkHoverColor, setLinkHoverColor] = useState({
        hex: "#333333",
        source: "hex",
    });

    const [borderTopColor, setBorderTopColor] = useState({
        hex: "#333333",
        source: "hex",
    });
    const [borderRightColor, setBorderRightColor] = useState({
        hex: "#333333",
        source: "hex",
    });
    const [borderBottomColor, setBorderBottomColor] = useState({
        hex: "#333333",
        source: "hex",
    });
    const [borderLeftColor, setBorderLeftColor] = useState({
        hex: "#333333",
        source: "hex",
    });

    // function is here
    const verticalPadding = (e) => {
        setPaddingTop(e.target.value);
        setPaddingBottom(e.target.value);
    };
    const horizontalPadding = (e) => {
        setPaddingRight(e.target.value);
        setPaddingLeft(e.target.value);
    };

    const verticalMargin = (e) => {
        setMarginTop(e.target.value);
        setMarginBottom(e.target.value);
    };
    const horizontalMargin = (e) => {
        setMarginRight(e.target.value);
        setMarginLeft(e.target.value);
    };

    const handleBorderControl = (e) => {
        setBorderTop(e.target.value);
        setBorderLeft(e.target.value);
        setBorderBottom(e.target.value);
        setBorderRight(e.target.value);
    };

    const handleBorderColor = (color) => {
        setBorderTopColor(color);
        setBorderRightColor(color);
        setBorderBottomColor(color);
        setBorderLeftColor(color);
    };

    const handleBorderRadius = (radius) => {
        setBorderRadiusTop(radius);
        setBorderRadiusLeft(radius);
        setBorderRadiusBottom(radius);
        setBorderRadiusRight(radius);
    };
    return (
        <div>
            {block ? (
                <div className="">
                    {/* head part or tile area */}

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
                                    : ""}
                            </p>
                        </div>
                    </div>

                    {/* body or main part */}
                    <div className="">
                        {/* Color control */}
                        {!(block == "list-item") && (
                            <div className="border-t p-5">
                                <div className="flex justify-between items-center relative">
                                    <h4 className="font-medium">Color</h4>
                                    <PopoverBody>
                                        <div>
                                            <div className="p-1 text-sm text-gray-500 border-t">
                                                <h4 className="p-3 text-gray-600 font-medium">
                                                    Tools
                                                </h4>
                                                <button
                                                    onClick={() =>
                                                        setTextColorField(!TextColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Link</span>
                                                    {TextColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setBgColorField(!BgColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Link</span>
                                                    {BgColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setLinkColorField(!linkColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Link</span>
                                                    {linkColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                            </div>
                                            <div className="border-t">
                                                <button
                                                    onClick={() =>
                                                        setLinkField(false)
                                                    }
                                                    className="w-full text-xs text-blue-500 p-3">
                                                    Reset all
                                                </button>
                                            </div>
                                        </div>
                                    </PopoverBody>
                                </div>
                                <table className="border w-4/5 mt-5 rounded-md">
                                    <tbody>
                                        {TextColorField && <tr className="border">
                                            <ColorPopover
                                                btnText={"Text Color"}
                                                color={textColor}>
                                                {
                                                    <BlockPicker
                                                        color={textColor}
                                                        onChange={setTextColor}
                                                        className="border z-10"
                                                    />
                                                }
                                            </ColorPopover>
                                        </tr>}
                                        {BgColorField &&  <tr className="border">
                                            <ColorPopover
                                                btnText={"Background Color"}
                                                color={bgColor}>
                                                {
                                                    <BlockPicker
                                                        color={bgColor}
                                                        onChange={setBgColor}
                                                        className="border z-10"
                                                    />
                                                }
                                            </ColorPopover>
                                        </tr>}
                                        {linkColorField && (
                                            <tr className="border">
                                                <ColorPopover
                                                    btnText={"Link Color"}
                                                    color={linkColor}>
                                                    {
                                                        <BlockPicker
                                                            color={linkColor}
                                                            onChange={
                                                                setLinkColor
                                                            }
                                                            className="border z-10"
                                                        />
                                                    }
                                                </ColorPopover>
                                            </tr>
                                        )}
                                        {linkColorField && (
                                            <tr className="border">
                                                <ColorPopover
                                                    btnText={"Link Hover Color"}
                                                    color={linkHoverColor}>
                                                    {
                                                        <BlockPicker
                                                            color={
                                                                linkHoverColor
                                                            }
                                                            onChange={
                                                                setLinkHoverColor
                                                            }
                                                            className="border z-10"
                                                        />
                                                    }
                                                </ColorPopover>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {/* Typography */}
                        <div className="border-t p-5">
                            <div className="flex justify-between items-center relative">
                                <h4 className="font-medium">Typography</h4>
                                <PopoverBody>
                                    <div className="h-80 overflow-auto">
                                        <div className="p-1 text-sm text-gray-500 border-t">
                                            <h4 className="p-3 uppercase text-gray-600 font-medium">
                                                Tools
                                            </h4>
                                            <button
                                                onClick={() =>
                                                    setFontSizeField(
                                                        !FontSizeField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Font Size</span>
                                                {FontSizeField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setAppearanceField(
                                                        !AppearanceField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Appearance</span>
                                                {AppearanceField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setLetterCaseField(
                                                        !LetterCaseField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Font Size</span>
                                                {LetterCaseField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setFontFamilyField(
                                                        !FontFamilyField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Font Family</span>
                                                {FontFamilyField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setLineHField(!LineHField)
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Line height</span>
                                                {LineHField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setLetterSPField(
                                                        !LetterSPField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Letter Spacing</span>
                                                {LetterSPField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setTextDecorationField(
                                                        !TextDecorationField
                                                    )
                                                }
                                                className="w-full z-10 flex justify-between items-center p-3">
                                                <span>Text Decoration</span>
                                                {TextDecorationField && (
                                                    <MdDone className="text-xl text-black" />
                                                )}
                                            </button>
                                        </div>
                                        <div className="border-t">
                                            <button
                                                onClick={() =>
                                                    setLinkField(false)
                                                }
                                                className="w-full text-xs text-blue-500 p-3">
                                                Reset all
                                            </button>
                                        </div>
                                    </div>
                                </PopoverBody>
                            </div>

                            {/* Font Size control */}
                            {FontSizeField && (
                                <div className="">
                                    <div className="flex justify-between items-center mt-3">
                                        <h4 className="text-xs uppercase font-medium">
                                            SIZE
                                        </h4>
                                        <button
                                            onClick={() =>
                                                setCustomSize(!CustomSize)
                                            }>
                                            <GoArrowSwitch className="text-lg hover:text-blue-500" />
                                        </button>
                                    </div>
                                    <div className=" mt-3">
                                        {!CustomSize ? (
                                            <ul className="border rounded p-1 flex justify-between">
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setFontSize(14)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            fontSize == 14 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        S
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setFontSize(18)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            fontSize == 18 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        M
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setFontSize(24)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            fontSize == 24 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        L
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setFontSize(32)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            fontSize == 32 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        XL
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setFontSize(48)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            fontSize == 48 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        XXl
                                                    </button>
                                                </li>
                                            </ul>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <div className="relative w-1/2 border border-gray-900 rounded">
                                                    <span className="absolute bottom-2 right-1 text-xl">
                                                        px
                                                    </span>
                                                    <input
                                                        className="w-full rounded pr-7 p-2 outline-none  "
                                                        type="number"
                                                        max={100}
                                                        maxLength={2}
                                                        name=""
                                                        value={fontSize}
                                                        onChange={(e) =>
                                                            setFontSize(
                                                                e.target.value
                                                            )
                                                        }
                                                        id=""
                                                    />
                                                </div>
                                                <input
                                                    className="block w-1/2 h-[5px]"
                                                    type="range"
                                                    name=""
                                                    max={100}
                                                    value={fontSize}
                                                    min={0}
                                                    id=""
                                                    onChange={(e) =>
                                                        setFontSize(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Font family */}
                            {FontFamilyField && (
                                <div className="mt-5">
                                    <h4>Font Family</h4>
                                    <select
                                        name=""
                                        id=""
                                        onChange={(e) =>
                                            setFontFamily(e.target.value)
                                        }
                                        className="w-full border mt-2  outline-blue-500 p-2 rounded border-gray-800">
                                        <option value="Default">Default</option>
                                        <option value="DM Sans">DM Sans</option>
                                        <option value="IBM Plex Mono">
                                            IBM Plex Mono
                                        </option>
                                        <option value="Inter">Inter</option>
                                        <option value="System Font">
                                            System Font
                                        </option>
                                        <option value="Source Serif pro">
                                            Source Serif pro
                                        </option>
                                    </select>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-3 items-end">
                                {/* Font Style control */}
                                {AppearanceField && (
                                    <div className="mt-5 ">
                                        <h4>Appearance</h4>
                                        <ListBox
                                            selected={fontStyle}
                                            setSelected={
                                                setFontStyle
                                            }></ListBox>
                                    </div>
                                )}
                                {/* Line height control */}
                                {LineHField && (
                                    <div className="mt-5 ">
                                        <h4>Line Height</h4>
                                        <div className="grid grid-cols-4 gap-2 border items-center justify-between w-full p-1 mt-2 border-gray-900 rounded">
                                            <button
                                                onClick={() =>
                                                    setLineHeight(
                                                        lineHeight == 0
                                                            ? lineHeight
                                                            : lineHeight - 0.5
                                                    )
                                                }
                                                className="text-xl text-center block text-blue-500">
                                                <FaMinus className="mx-auto" />
                                            </button>
                                            <input
                                                className="outline-none col-span-2 p-[2px]"
                                                onChange={(e) =>
                                                    setLineHeight(
                                                        e.target.value
                                                    )
                                                }
                                                type="number"
                                                name=""
                                                // min={0}
                                                value={lineHeight}
                                                id=""
                                            />
                                            <button
                                                onClick={() =>
                                                    setLineHeight(
                                                        lineHeight + 0.5
                                                    )
                                                }
                                                className="text-xl w-full text-center text-blue-500">
                                                <FaPlus className="mx-auto" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-3 items-end">
                                {/* Letter Spacing */}
                                {LetterSPField && (
                                    <div className="mt-5 ">
                                        <h4>Letter Spacing</h4>
                                        <div className="grid grid-cols-4 border items-center justify-between w-full p-1 mt-2 border-gray-900 rounded">
                                            <button
                                                onClick={() =>
                                                    setLetterSpacing(
                                                        letterSpacing == 0
                                                            ? letterSpacing
                                                            : letterSpacing - 1
                                                    )
                                                }
                                                className="text-xl text-center block text-blue-500">
                                                <FaMinus className="mx-auto" />
                                            </button>
                                            <div className="relative col-span-2 border-gray-900 rounded">
                                                <span className="absolute bottom-2 top-[1px] right-0">
                                                    px
                                                </span>
                                                <input
                                                    className="w-full rounded pr-5 p-[2px] outline-none  "
                                                    type="number"
                                                    max={100}
                                                    min={0}
                                                    maxLength={2}
                                                    name=""
                                                    value={letterSpacing}
                                                    onChange={(e) =>
                                                        setLetterSpacing(
                                                            e.target.value
                                                        )
                                                    }
                                                    id=""
                                                />
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setLetterSpacing(
                                                        letterSpacing + 1
                                                    )
                                                }
                                                className="text-xl w-full text-center text-blue-500">
                                                <FaPlus className="mx-auto" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {TextDecorationField && (
                                    <div className="mt-5 ">
                                        <h4>Decoration</h4>
                                        <ul className=" rounded mt-2 p-1 flex items-center">
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        setTextDecoration(
                                                            "normal"
                                                        )
                                                    }
                                                    className={`p-2 px-3 rounded ${
                                                        textDecoration ==
                                                            "normal" &&
                                                        "bg-gray-800 text-white"
                                                    }`}>
                                                    <FaMinus />
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        setTextDecoration(
                                                            "underline"
                                                        )
                                                    }
                                                    className={`p-2 px-3 rounded ${
                                                        textDecoration ==
                                                            "underline" &&
                                                        "bg-gray-800 text-white"
                                                    }`}>
                                                    <FaUnderline />
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        setTextDecoration(
                                                            "lineTrough"
                                                        )
                                                    }
                                                    className={`p-2 px-3 rounded ${
                                                        textDecoration ==
                                                            "lineTrough" &&
                                                        "bg-gray-800 text-white"
                                                    }`}>
                                                    <FaStrikethrough />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            {/* Letter Case control */}
                            {LetterCaseField && (
                                <div className="mt-5">
                                    <h4>Letter Case</h4>
                                    <ul className=" rounded mt-2 p-1 flex items-center">
                                        <li>
                                            <button
                                                onClick={() =>
                                                    setFontCase("normal")
                                                }
                                                className={`p-2 px-3 rounded ${
                                                    fontCase == "normal" &&
                                                    "bg-gray-800 text-white"
                                                }`}>
                                                <FaMinus />
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    setFontCase("uppercase")
                                                }
                                                className={`p-1 px-3 rounded ${
                                                    fontCase == "uppercase" &&
                                                    "bg-gray-800 text-white"
                                                }`}>
                                                AB
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    setFontCase("lowercase")
                                                }
                                                className={`p-1 px-3 rounded ${
                                                    fontCase == "lowercase" &&
                                                    "bg-gray-800 text-white"
                                                }`}>
                                                ab
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() =>
                                                    setFontCase("capitalize")
                                                }
                                                className={`p-1 px-3 rounded ${
                                                    fontCase == "capitalize" &&
                                                    "bg-gray-800  text-white"
                                                }`}>
                                                Ab
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* Dimensions */}
                        {(!(block == "list-item") && !(block == "pullquote")) && (
                            <div className="border-t p-5">
                                <div className="flex justify-between items-center relative">
                                    <h4 className="font-medium">Dimensions</h4>
                                    <PopoverBody
                                        customBtn={
                                            PaddingField || MarginField
                                                ? null
                                                : "plus"
                                        }>
                                        <div className="bg-white z-10">
                                            <div className="p-1 text-sm text-gray-500 border-t">
                                                <h4 className="p-3 text-gray-600 font-medium">
                                                    Tools
                                                </h4>
                                                <button
                                                    onClick={() =>
                                                        setPaddingField(
                                                            !PaddingField
                                                        )
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Padding</span>
                                                    {PaddingField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setMarginField(
                                                            !MarginField
                                                        )
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Margin</span>
                                                    {MarginField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                            </div>
                                            <div className="border-t">
                                                <button
                                                    onClick={() =>
                                                        setLinkField(false)
                                                    }
                                                    className="w-full text-xs text-blue-500 p-3">
                                                    Reset all
                                                </button>
                                            </div>
                                        </div>
                                    </PopoverBody>
                                </div>
                                {/* Padding control */}
                                {PaddingField && (
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center">
                                            <h4>
                                                {PaddingTypeField == "H&V"
                                                    ? "Padding"
                                                    : PaddingTypeField == "top"
                                                    ? "Padding Top"
                                                    : PaddingTypeField ==
                                                      "right"
                                                    ? "Padding Right"
                                                    : PaddingTypeField ==
                                                      "bottom"
                                                    ? "Padding Bottom"
                                                    : PaddingTypeField == "left"
                                                    ? "Padding Left"
                                                    : "Custom Padding"}
                                            </h4>
                                            <PopoverBody customBtn={"padding"}>
                                                <div className="p-1 border bg-white">
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "H&V"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={paddingImg}
                                                                alt="padding"
                                                            />
                                                            Horizontal &
                                                            Vertical
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "H&V" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "top"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingTopImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Top
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "top" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "right"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingRightImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Right
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "right" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "bottom"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingBImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Bottom
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "bottom" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "left"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingLeftImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Left
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "left" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setPaddingTypeField(
                                                                "custom"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={paddingImg}
                                                                alt="padding"
                                                            />
                                                            Custom
                                                        </span>
                                                        {PaddingTypeField ==
                                                            "custom" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                </div>
                                            </PopoverBody>
                                        </div>
                                        <div className="mt-3">
                                            {PaddingTypeField == "H&V" && (
                                                <>
                                                    {/* horizontal padding */}
                                                    <div className="flex gap-2 items-center">
                                                        <Image
                                                            src={
                                                                horizontalPaddingImg
                                                            }
                                                            alt="image"
                                                            className="w-10"
                                                        />
                                                        <div className="w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative w-1/2 border border-gray-900 rounded">
                                                                    <span className="absolute bottom-1 right-1 text-xl">
                                                                        px
                                                                    </span>
                                                                    <input
                                                                        className="w-full rounded pr-7 p-1 outline-none  "
                                                                        type="number"
                                                                        max={
                                                                            300
                                                                        }
                                                                        min={0}
                                                                        maxLength={
                                                                            2
                                                                        }
                                                                        name=""
                                                                        value={
                                                                            paddingLeft
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            horizontalPadding(
                                                                                e
                                                                            )
                                                                        }
                                                                        id=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    className="block w-1/2 h-[5px]"
                                                                    type="range"
                                                                    name=""
                                                                    max={300}
                                                                    value={
                                                                        paddingRight
                                                                    }
                                                                    min={0}
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        horizontalPadding(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* vertical padding */}
                                                    <div className="flex gap-2 mt-2 items-center">
                                                        <Image
                                                            src={
                                                                verticalPaddingImg
                                                            }
                                                            alt="image"
                                                            className="w-10"
                                                        />
                                                        <div className="w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative w-1/2 border border-gray-900 rounded">
                                                                    <span className="absolute bottom-1 right-1 text-xl">
                                                                        px
                                                                    </span>
                                                                    <input
                                                                        className="w-full rounded pr-7 p-1 outline-none  "
                                                                        type="number"
                                                                        max={
                                                                            300
                                                                        }
                                                                        min={0}
                                                                        maxLength={
                                                                            2
                                                                        }
                                                                        name=""
                                                                        value={
                                                                            paddingTop
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            verticalPadding(
                                                                                e
                                                                            )
                                                                        }
                                                                        id=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    className="block w-1/2 h-[5px]"
                                                                    type="range"
                                                                    name=""
                                                                    max={300}
                                                                    value={
                                                                        paddingTop
                                                                    }
                                                                    min={0}
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        verticalPadding(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* top padding */}
                                            {(PaddingTypeField == "top" ||
                                                PaddingTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingTopImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        paddingTop
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaddingTop(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    paddingTop
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setPaddingTop(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* right padding */}
                                            {(PaddingTypeField == "right" ||
                                                PaddingTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingRightImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        paddingRight
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaddingRight(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    paddingRight
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setPaddingRight(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* bottom padding */}
                                            {(PaddingTypeField == "bottom" ||
                                                PaddingTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingBImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        paddingBottom
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaddingBottom(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    paddingBottom
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setPaddingBottom(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* left padding */}
                                            {(PaddingTypeField == "left" ||
                                                PaddingTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingLeftImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        paddingLeft
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPaddingLeft(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    paddingLeft
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setPaddingLeft(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Margin control */}
                                {MarginField && (
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center">
                                            <h4>
                                                {MarginTypeField == "H&V"
                                                    ? "Margin"
                                                    : MarginTypeField == "top"
                                                    ? "Margin Top"
                                                    : MarginTypeField == "right"
                                                    ? "Margin Right"
                                                    : MarginTypeField ==
                                                      "bottom"
                                                    ? "Margin Bottom"
                                                    : MarginTypeField == "left"
                                                    ? "Margin Left"
                                                    : "Custom Margin"}
                                            </h4>
                                            <PopoverBody customBtn={"padding"}>
                                                <div className="p-1 border">
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "H&V"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={paddingImg}
                                                                alt="padding"
                                                            />
                                                            Horizontal &
                                                            Vertical
                                                        </span>
                                                        {MarginTypeField ==
                                                            "H&V" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "top"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingTopImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Top
                                                        </span>
                                                        {MarginTypeField ==
                                                            "top" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "right"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingRightImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Right
                                                        </span>
                                                        {MarginTypeField ==
                                                            "right" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "bottom"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingBImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Bottom
                                                        </span>
                                                        {MarginTypeField ==
                                                            "bottom" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "left"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={
                                                                    paddingLeftImg
                                                                }
                                                                alt="padding"
                                                            />
                                                            Left
                                                        </span>
                                                        {MarginTypeField ==
                                                            "left" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setMarginTypeField(
                                                                "custom"
                                                            )
                                                        }
                                                        className="w-full z-10 flex justify-between items-center p-2">
                                                        <span className="flex items-center gap-2">
                                                            <Image
                                                                src={paddingImg}
                                                                alt="padding"
                                                            />
                                                            Custom
                                                        </span>
                                                        {MarginTypeField ==
                                                            "custom" && (
                                                            <MdDone className="text-xl text-black" />
                                                        )}
                                                    </button>
                                                </div>
                                            </PopoverBody>
                                        </div>
                                        <div className="mt-3">
                                            {MarginTypeField == "H&V" && (
                                                <>
                                                    {/* horizontal padding */}
                                                    <div className="flex gap-2 items-center">
                                                        <Image
                                                            src={
                                                                horizontalPaddingImg
                                                            }
                                                            alt="image"
                                                            className="w-10"
                                                        />
                                                        <div className="w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative w-1/2 border border-gray-900 rounded">
                                                                    <span className="absolute bottom-1 right-1 text-xl">
                                                                        px
                                                                    </span>
                                                                    <input
                                                                        className="w-full rounded pr-7 p-1 outline-none  "
                                                                        type="number"
                                                                        max={
                                                                            300
                                                                        }
                                                                        min={0}
                                                                        maxLength={
                                                                            2
                                                                        }
                                                                        name=""
                                                                        value={
                                                                            marginLeft
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            horizontalMargin(
                                                                                e
                                                                            )
                                                                        }
                                                                        id=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    className="block w-1/2 h-[5px]"
                                                                    type="range"
                                                                    name=""
                                                                    max={300}
                                                                    value={
                                                                        marginLeft
                                                                    }
                                                                    min={0}
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        horizontalMargin(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* vertical padding */}
                                                    <div className="flex gap-2 mt-2 items-center">
                                                        <Image
                                                            src={
                                                                verticalPaddingImg
                                                            }
                                                            alt="image"
                                                            className="w-10"
                                                        />
                                                        <div className="w-full">
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative w-1/2 border border-gray-900 rounded">
                                                                    <span className="absolute bottom-1 right-1 text-xl">
                                                                        px
                                                                    </span>
                                                                    <input
                                                                        className="w-full rounded pr-7 p-1 outline-none  "
                                                                        type="number"
                                                                        max={
                                                                            300
                                                                        }
                                                                        min={0}
                                                                        maxLength={
                                                                            2
                                                                        }
                                                                        name=""
                                                                        value={
                                                                            marginTop
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            verticalMargin(
                                                                                e
                                                                            )
                                                                        }
                                                                        id=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    className="block w-1/2 h-[5px]"
                                                                    type="range"
                                                                    name=""
                                                                    max={300}
                                                                    value={
                                                                        paddingTop
                                                                    }
                                                                    min={0}
                                                                    id=""
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        verticalMargin(
                                                                            e
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {/* top padding */}
                                            {(MarginTypeField == "top" ||
                                                MarginTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingTopImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        marginTop
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setMarginTop(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    marginTop
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setMarginTop(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {/* right padding */}
                                            {(MarginTypeField == "right" ||
                                                MarginTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingRightImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        marginRight
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setMarginRight(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    marginRight
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setMarginRight(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* bottom padding */}
                                            {(MarginTypeField == "bottom" ||
                                                MarginTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingBImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        marginBottom
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setMarginBottom(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    marginBottom
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setMarginBottom(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* left padding */}
                                            {(MarginTypeField == "left" ||
                                                MarginTypeField ==
                                                    "custom") && (
                                                <div className="flex gap-2 mt-2 items-center">
                                                    <Image
                                                        src={paddingLeftImg}
                                                        alt="image"
                                                        className="w-10"
                                                    />
                                                    <div className="w-full">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-1/2 border border-gray-900 rounded">
                                                                <span className="absolute bottom-1 right-1 text-xl">
                                                                    px
                                                                </span>
                                                                <input
                                                                    className="w-full rounded pr-7 p-1 outline-none  "
                                                                    type="number"
                                                                    max={300}
                                                                    min={0}
                                                                    maxLength={
                                                                        2
                                                                    }
                                                                    name=""
                                                                    value={
                                                                        marginLeft
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setMarginLeft(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            </div>
                                                            <input
                                                                className="block w-1/2 h-[5px]"
                                                                type="range"
                                                                name=""
                                                                max={300}
                                                                value={
                                                                    marginLeft
                                                                }
                                                                min={0}
                                                                id=""
                                                                onChange={(e) =>
                                                                    setMarginLeft(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {/* Border */}
                        {(block == "code" || block == "pullquote" || block == "verse" || block == "footnotes" ) && (
                            <div className="border-t p-5">
                                <div className="flex justify-between items-center relative">
                                    <h4 className="font-medium">Border</h4>
                                    <PopoverBody>
                                        <div className="">
                                            <div className="p-1 text-sm text-gray-500 border-t">
                                                <h4 className="p-3 uppercase text-gray-600 font-medium">
                                                    Tools
                                                </h4>
                                                <button
                                                    onClick={() =>
                                                        setBorderField(
                                                            !BorderField
                                                        )
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Border</span>
                                                    {BorderField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setBorderRadiusField(
                                                            !BorderRadiusField
                                                        )
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Radius</span>
                                                    {BorderRadiusField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>
                                            </div>
                                            <div className="border-t">
                                                <button
                                                    onClick={() =>
                                                        setLinkField(false)
                                                    }
                                                    className="w-full text-xs text-blue-500 p-3">
                                                    Reset all
                                                </button>
                                            </div>
                                        </div>
                                    </PopoverBody>
                                </div>
                                {/* Border control */}
                                <div className="">
                                    {/* Border */}
                                    {BorderField && (
                                        <div className="flex items-start gap-3 mt-3">
                                            {!UnlinkBorder ? (
                                                <div className="flex w-full items-center gap-2">
                                                    <div className="relative w-1/2 border border-gray-900 rounded flex items-center">
                                                        <div className="w-2/5">
                                                            <ColorPopover
                                                                btnText={""}
                                                                color={
                                                                    borderTopColor ===
                                                                        borderLeftColor &&
                                                                    borderRightColor ===
                                                                        borderBottomColor &&
                                                                    borderTopColor ===
                                                                        borderRightColor
                                                                        ? borderTopColor
                                                                        : {
                                                                              hex: "#ffffff",
                                                                              source: "hex",
                                                                          }
                                                                }>
                                                                {
                                                                    <BlockPicker
                                                                        color={
                                                                            borderTopColor ===
                                                                                borderLeftColor &&
                                                                            borderRightColor ===
                                                                                borderBottomColor &&
                                                                            borderTopColor ===
                                                                                borderRightColor
                                                                                ? borderTopColor
                                                                                : {
                                                                                      hex: "#ffffff",
                                                                                      source: "hex",
                                                                                  }
                                                                        }
                                                                        onChange={
                                                                            handleBorderColor
                                                                        }
                                                                        className="border cursor-pointer z-30"
                                                                    />
                                                                }
                                                            </ColorPopover>
                                                        </div>
                                                        {borderTop ===
                                                            borderLeft &&
                                                        borderRight ===
                                                            borderBottom &&
                                                        borderTop ===
                                                            borderRight ? (
                                                            <input
                                                                className=" border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none"
                                                                type="number"
                                                                max={100}
                                                                maxLength={3}
                                                                name=""
                                                                value={
                                                                    borderTop
                                                                }
                                                                onChange={
                                                                    handleBorderControl
                                                                }
                                                                id=""
                                                            />
                                                        ) : (
                                                            <span className="border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none block text-center">
                                                                Mixed
                                                            </span>
                                                        )}
                                                        <span
                                                            className={`absolute bottom-2 right-1 ${
                                                                borderTop ===
                                                                    borderLeft &&
                                                                borderRight ===
                                                                    borderBottom &&
                                                                borderTop ===
                                                                    borderRight
                                                                    ? "block"
                                                                    : "hidden"
                                                            }`}>
                                                            px
                                                        </span>
                                                    </div>

                                                    <input
                                                        className="block w-1/2 h-[5px]"
                                                        type="range"
                                                        name=""
                                                        max={100}
                                                        min={0}
                                                        value={
                                                            borderTop ===
                                                                borderLeft &&
                                                            borderRight ===
                                                                borderBottom &&
                                                            borderTop ===
                                                                borderRight
                                                                ? borderTop
                                                                : 0
                                                        }
                                                        onChange={
                                                            handleBorderControl
                                                        }
                                                    />
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-3">
                                                    {/* Top */}
                                                    <div className="relative w-full border border-gray-900 rounded flex items-center">
                                                        <div className="w-2/5">
                                                            <ColorPopover
                                                                btnText={""}
                                                                color={
                                                                    borderTopColor
                                                                }>
                                                                {
                                                                    <BlockPicker
                                                                        color={
                                                                            borderTopColor
                                                                        }
                                                                        onChange={
                                                                            setBorderTopColor
                                                                        }
                                                                        className="border cursor-pointer z-20"
                                                                    />
                                                                }
                                                            </ColorPopover>
                                                        </div>
                                                        <input
                                                            className=" border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            maxLength={2}
                                                            name=""
                                                            value={borderTop}
                                                            onChange={(e) =>
                                                                setBorderTop(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id=""
                                                        />
                                                        <span className="absolute bottom-2 right-1 text-">
                                                            px
                                                        </span>
                                                    </div>
                                                    {/* Right */}
                                                    <div className="relative w-full border border-gray-900 rounded flex items-center">
                                                        <div className="w-2/5">
                                                            <ColorPopover
                                                                btnText={""}
                                                                color={
                                                                    borderRightColor
                                                                }>
                                                                {
                                                                    <BlockPicker
                                                                        color={
                                                                            borderRightColor
                                                                        }
                                                                        onChange={
                                                                            setBorderRightColor
                                                                        }
                                                                        className="border cursor-pointer z-20"
                                                                    />
                                                                }
                                                            </ColorPopover>
                                                        </div>
                                                        <input
                                                            className=" border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            maxLength={2}
                                                            name=""
                                                            value={borderRight}
                                                            onChange={(e) =>
                                                                setBorderRight(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id=""
                                                        />
                                                        <span className="absolute bottom-2 right-1 text-">
                                                            px
                                                        </span>
                                                    </div>
                                                    {/* Bottom */}
                                                    <div className="relative w-full border border-gray-900 rounded flex items-center">
                                                        <div className="w-2/5">
                                                            <ColorPopover
                                                                btnText={""}
                                                                color={
                                                                    borderBottomColor
                                                                }>
                                                                <BlockPicker
                                                                    color={
                                                                        borderBottomColor
                                                                    }
                                                                    onChange={
                                                                        setBorderBottomColor
                                                                    }
                                                                    className="border cursor-pointer z-20"
                                                                />
                                                            </ColorPopover>
                                                        </div>
                                                        <input
                                                            className=" border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            maxLength={2}
                                                            name=""
                                                            value={borderBottom}
                                                            onChange={(e) =>
                                                                setBorderBottom(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id=""
                                                        />
                                                        <span className="absolute bottom-2 right-1 text-">
                                                            px
                                                        </span>
                                                    </div>
                                                    {/* Left */}
                                                    <div className="relative w-full border border-gray-900 rounded flex items-center">
                                                        <div className="w-2/5">
                                                            <ColorPopover
                                                                btnText={""}
                                                                color={
                                                                    borderLeftColor
                                                                }>
                                                                <BlockPicker
                                                                    color={
                                                                        borderLeftColor
                                                                    }
                                                                    onChange={
                                                                        setBorderLeftColor
                                                                    }
                                                                    className="border cursor-pointer z-20"
                                                                />
                                                            </ColorPopover>
                                                        </div>
                                                        <input
                                                            className=" border-l border-black rounded rounded-l-none w-3/5 pr-6 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            maxLength={2}
                                                            name=""
                                                            value={borderLeft}
                                                            onChange={(e) =>
                                                                setBorderLeft(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            id=""
                                                        />
                                                        <span className="absolute bottom-2 right-1 text-">
                                                            px
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <button
                                                onClick={() =>
                                                    setUnlinkBorder(
                                                        !UnlinkBorder
                                                    )
                                                }
                                                className="text-2xl mt-2">
                                                {UnlinkBorder ? (
                                                    <MdLinkOff />
                                                ) : (
                                                    <MdLink />
                                                )}
                                            </button>
                                        </div>
                                    )}
                                    {/* Border Radius */}
                                
                                    {BorderRadiusField && (
                                        <div className="">
                                            <h4 className="flex-none font-medium mt-3 ">
                                                Radius
                                            </h4>
                                            
                                            <div className="flex items-start gap-3 mt-2">
                                                
                                                {!UnlinkBorderRadius ? (
                                                    <div className="flex items-center w-full gap-2">
                                                        <div className="relative w-1/2 border border-gray-900 rounded">
                                                            {borderRadiusTop ===
                                                                borderRadiusLeft &&
                                                            borderRadiusRight ===
                                                                borderRadiusBottom &&
                                                            borderRadiusTop ===
                                                                borderRadiusRight ? (
                                                                <input
                                                                    className="rounded w-full pr-6 p-2 outline-none"
                                                                    type="number"
                                                                    max={100}
                                                                    min={0}
                                                                    maxLength={3}
                                                                    name=""
                                                                    value={
                                                                        borderRadiusTop
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleBorderRadius(
                                                                            e.target
                                                                                .value
                                                                        )
                                                                    }
                                                                    id=""
                                                                />
                                                            ) : (
                                                                <span className="rounded w-full pr-6 p-2 outline-none block">
                                                                    Mixed
                                                                </span>
                                                            )}
                                                            <span
                                                                className={`absolute bottom-2 right-1 ${
                                                                    borderRadiusTop ===
                                                                        borderRadiusLeft &&
                                                                    borderRadiusRight ===
                                                                        borderRadiusBottom &&
                                                                    borderRadiusTop ===
                                                                        borderRadiusRight
                                                                        ? "block"
                                                                        : "hidden"
                                                                }`}>
                                                                px
                                                            </span>
                                                        </div>

                                                        <input
                                                            className="block w-1/2 h-[5px]"
                                                            type="range"
                                                            name=""
                                                            max={100}
                                                            value={
                                                                borderRadiusTop ===
                                                                    borderRadiusLeft &&
                                                                borderRadiusRight ===
                                                                    borderRadiusBottom &&
                                                                borderRadiusTop ===
                                                                    borderRadiusRight
                                                                    ? borderRadiusTop
                                                                    : 0
                                                            }
                                                            min={0}
                                                            id=""
                                                            onChange={(e) =>
                                                                handleBorderRadius(
                                                                    e.target.value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {/* Top */}
                                                        <div className="relative w-full border border-gray-900 rounded">
                                                            <input
                                                                className="rounded w-full pr-6 p-2 outline-none"
                                                                type="number"
                                                                max={100}
                                                                min={0}
                                                                maxLength={3}
                                                                name=""
                                                                value={
                                                                    borderRadiusTop
                                                                }
                                                                onChange={(e) =>
                                                                    setBorderRadiusTop(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id=""
                                                            />
                                                            <span className="absolute bottom-2 right-1 text-">
                                                                px
                                                            </span>
                                                        </div>
                                                        {/* Right */}
                                                        <div className="relative w-full border border-gray-900 rounded">
                                                            <input
                                                                className="rounded w-full pr-6 p-2 outline-none"
                                                                type="number"
                                                                max={100}
                                                                maxLength={2}
                                                                name=""
                                                                value={
                                                                    borderRadiusRight
                                                                }
                                                                onChange={(e) =>
                                                                    setBorderRadiusRight(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id=""
                                                            />
                                                            <span className="absolute bottom-2 right-1 text-">
                                                                px
                                                            </span>
                                                        </div>
                                                        {/* Bottom */}
                                                        <div className="relative w-full border border-gray-900 rounded">
                                                            <input
                                                                className="rounded w-full pr-6 p-2 outline-none"
                                                                type="number"
                                                                max={100}
                                                                maxLength={2}
                                                                name=""
                                                                value={
                                                                    borderRadiusBottom
                                                                }
                                                                onChange={(e) =>
                                                                    setBorderRadiusBottom(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id=""
                                                            />
                                                            <span className="absolute bottom-2 right-1 text-">
                                                                px
                                                            </span>
                                                        </div>
                                                        {/* Left */}
                                                        <div className="relative w-full border border-gray-900 rounded">
                                                            <input
                                                                className="rounded w-full pr-6 p-2 outline-none"
                                                                type="number"
                                                                max={100}
                                                                maxLength={2}
                                                                name=""
                                                                value={
                                                                    borderRadiusLeft
                                                                }
                                                                onChange={(e) =>
                                                                    setBorderRadiusLeft(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                id=""
                                                            />
                                                            <span className="absolute bottom-2 right-1 text-">
                                                                px
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                <button
                                                    onClick={() =>
                                                        setUnlinkBorderRadius(
                                                            !UnlinkBorderRadius
                                                        )
                                                    }
                                                    className="text-2xl mt-2">
                                                    {UnlinkBorder ? (
                                                        <MdLinkOff />
                                                    ) : (
                                                        <MdLink />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Advanced */}
                        <Accordion
                            preExpanded={["a"]}
                            allowZeroExpanded
                            allowMultipleExpanded
                            className="border">
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <p className="text-base">Advanced</p>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="">
                                        {!(block == "list-item") && (
                                            <div className="">
                                                <label
                                                    htmlFor="anchor"
                                                    className="text-xs font-medium">
                                                    HTML ANCHOR
                                                </label>
                                                <input
                                                    id="anchor"
                                                    onChange={(e) =>
                                                        setHtmlAnchor(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    className="p-1 mt-3 w-full border rounded outline-blue-500 outline-1"
                                                />
                                                <p className="text-xs mt-2 leading-relaxed text-gray-400">
                                                    Enter a word or two —
                                                    without spaces — to make a
                                                    unique web address just for
                                                    this block, called an
                                                    “anchor.” Then, you’ll be
                                                    able to link directly to
                                                    this section of your page.
                                                </p>
                                                <a
                                                    href="#"
                                                    target="_blank"
                                                    className="text-xs underline text-blue-500">
                                                    Learn more about anchors
                                                    <FaExternalLinkAlt className="inline text-xs ml-1" />
                                                </a>
                                            </div>
                                        )}

                                        <label
                                            htmlFor="anchor"
                                            className="text-xs mt-3 block font-medium">
                                            ADDITIONAL CSS CLASS(ES)
                                        </label>
                                        <input
                                            id="anchor"
                                            onChange={(e) =>
                                                setCssClass(e.target.value)
                                            }
                                            type="text"
                                            className="p-1 mt-3 w-full border rounded outline-blue-500 outline-1"
                                        />
                                        <p className="text-xs mt-2 leading-relaxed text-gray-400">
                                            Separate multiple classes with
                                            spaces.
                                        </p>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            ) : (
                <p className="text-sm m-5 text-center">No block selected.</p>
            )}
        </div>
    );
};

export default SettingBlockTab;
("");
