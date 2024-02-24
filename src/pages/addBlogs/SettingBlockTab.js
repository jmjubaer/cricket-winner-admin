"use client";
import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import PopoverBody from "./PopoverBody";
import ColorPopover from "./ColorPopover";
import ListBox from "./ListBox";

import Image from "next/image";
import paddingImg from "@/assets/padding.svg";
import paddingTopImg from "@/assets/paddingtop.svg";
import paddingBImg from "@/assets/paddingbottom.svg";
import paddingLeftImg from "@/assets/paddingleft.svg";
import paddingRightImg from "@/assets/paddingright.svg";
import horizontalPaddingImg from "@/assets/verticalPadding.svg";
import verticalPaddingImg from "@/assets/horizontalPadding.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Toggle from "react-toggle";
import "react-toggle/style.css" 
import FilterPopover from "./FilterPopover";
import { IoMdDoneAll } from "react-icons/io";
import { MdAlignHorizontalCenter, MdAlignHorizontalLeft, MdAlignHorizontalRight, MdDone, MdLink, MdLinkOff } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { FaMinus, FaPlus, FaStrikethrough, FaUnderline } from "react-icons/fa6";
import { BlockPicker } from "react-color";
import SettingHead from "./SettingHead";
import { RxSpaceBetweenHorizontally } from "react-icons/rx";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
const SettingBlockTab = () => {
// block name = heading,paragraph,list,list-item,quote,code,preformatted,pullquote,verse,footnotes,classic,table,details-list,audio,cover,MediaText,video,button,columns,row,group.more,Page break,separator,spacer,widgets,theme,embed
    const block = "embed";
    // Toggle filed control==============
    const [TextColorField, setTextColorField] = useState( block == "file" ? false : true);
    const [BgColorField, setBgColorField] = useState(
        (block == "footnotes" || block == "cover" )? false : true
        );
    const [OverlayColorField, setOverlayColorField] = useState(block == "cover" ? true : false);
    const [linkColorField, setLinkColorField] = useState(
        (block == "footnotes" || block == "file") ? true : false);
    const [FontSizeField, setFontSizeField] = useState(true);
    const [AppearanceField, setAppearanceField] = useState(
       (block == "heading" || block == "quote" || block == "pullquote" || block == "verse")
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
        (block == "preformatted" || block == "cover" || block == "file" || block == "MediaText" || block == "button" || block == "columns" || block == "stack"  || block == "embed" || block == "row" || block == "group") ? true : false
    );
    const [PaddingTypeField, setPaddingTypeField] = useState("H&V");
    const [MarginField, setMarginField] = useState(
        (block == "preformatted" || block == "cover" || block == "file"  || block == "MediaText" || block == "columns" || block == "stack"  || block == "row" || block == "group" || block == "separator" || block == "spacer" || block == "embed") ? true : false
    );
    const [BlockSpacingField, setBlockSpacingField] = useState(
        (block == "details-list" || block == "cover" || block == "stack" || block == "row" || block == "group") ? true : false
        );
    const [ColumnSpacingField, setColumnSpacingField] = useState(true)
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

    const [blockSpacing, setBlockSpacing] = useState(0); //number
    const [blockJustification, setBlockJustification] = useState("left"); //number
    const [isInnerContentWidth,setIsInnerContentWidth] = useState(
        (block == "row" || block == "stack") ? true : false); //boolean
    const [isLineWrap,setIsLineWrap] = useState(false); //boolean

     // style========
    const [styles, setStyles] = useState(block == "button" ? "fill" : "default"); //text


    const [htmlAnchor, setHtmlAnchor] = useState(""); //text
    const [cssClass, setCssClass] = useState(""); //text
    // alr text
    const [altText, setAltText] = useState(""); //text 
    
    // Image data ================
    const [imageFilter, setImageFilter] = useState("none"); //text 
    const [imageRatio, setImageRatio] = useState("Original"); //text 
    const [imageScale, setImageScale] = useState("cover"); //text 
    const [imageWidth, setImageWidth] = useState("auto"); //number 
    const [imageHeight, setImageHeight] = useState("auto"); //number 
    const [imageResolution, setImageResolution] = useState("auto"); //number 
    const [imageTitle, setImageTitle] = useState(""); //text 
    const [expandOnClick, setExpandOnClick] = useState(false); //boolean
    
    // Cover Data ==================
    const [minHeight,setMinHeight] = useState("auto"); //number
    const [innerContentWidth,setInnerContentWidth] = useState("auto"); //number
    const [overlayOpacity,setOverlayOpacity] = useState(50); //percent number
    const [bgPositionTop,setBgPositionTop] = useState(50); //percent number
    const [bgPositionLeft,setBgPositionLeft] = useState(50); //percent number

    const [fixedBg,setFixedBg] = useState(false); //boolean
    const [RepeatBg,setRepeatBg] = useState(false); //boolean

    // Table setting
    const [fixedWidth, setFixedWidth] = useState(false); //boolean
    const [header, setHeader] = useState(false); //boolean
    const [footer, setFooter] = useState(false); //boolean

    // Table setting
    const [defaultOpen, setDefaultOpen] = useState(false); //boolean

    // audio setting
    const [autoplay, setAutoplay] = useState(false); //boolean
    const [audioLoop, setAudioLoop] = useState(false); //boolean
    const [preload, setPreload] = useState(false); //boolean

    // File setting
    const [linkTo, setLinkTo] = useState(false); //boolean
    const [openNewTab, setOpenNewTab] = useState(false); //boolean
    const [downloadButton, setDownloadButton] = useState(false); //boolean

    // Media and text setting
    const [stackOnMobile, setStackOnMobile] = useState(false); //boolean
    const [mediaWidth, setMediaWidth] = useState(50); //Percent

    // Video setting
    const [videoAutoPlay, setVideoAutoPlay] = useState(false); //boolean
    const [videoLoop, setVideoLoop] = useState(false); //boolean
    const [videoMuted, setVideoMuted] = useState(false); //boolean
    const [videoPlayback, setVideoPlayback] = useState(false); //boolean
    const [videoPlayInline, setVideoPlayInline] = useState(false); //boolean
    const [videoPreloaded, setVideoPreloaded] = useState("auto"); //text
    const [videoPosterImage, setVideoPosterImage] = useState(null); //text

    // Button setting
    const [buttonSize, setButtonSize] = useState(25); //text

    // Columns setting
    const [horizontalBlockSpacing, setHorizontalBlockSpacing] = useState(25); //text
    const [verticalBlockSpacing, setVerticalBlockSpacing] = useState(25); //text
    const [columnsCount, setColumnsCount] = useState(0); //text
    const [columnStackOnMobile, setColumnStackOnMobile] = useState(false); //boolean

    // more setting
    const [isExcerpt, setIsExcerpt] = useState(false); //boolean

    // spacer setting
    const [height, setHeight] = useState(50); //number


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

    const [overlayColor, setOverlayColor] = useState({
        hex: "#ffffff",
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

                    <SettingHead block={block}></SettingHead>

                    {/* body or main part */}
                    {(block == "more" || block == "Page break") || <div className="">
                       {/* Styles */}
                        {(block == "table" || block == "image" || block == "button" || block == "separator") &&
                        <div className="border-t p-5">  
                            <h4 className="font-medium">Styles</h4>
                            <div className=" mt-3">
                                <ul className=" p-1 grid grid-cols-2 gap-3 justify-between">
                                    {/* Commmon */}
                                    {block == "button" || <li>
                                        <button
                                            onClick={() =>
                                                setStyles("default")
                                            }
                                            className={`p-2 w-full border-2 px-5 rounded ${
                                                styles == "default" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Default
                                        </button>
                                    </li>}
                                    {/* Table */}
                                    {block == "table" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("stripes")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "stripes" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Stripes
                                        </button>
                                    </li>}
                                      {/* Image */}
                                    {block == "image" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("rounded")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "rounded" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Rounded
                                        </button>
                                    </li>}
                                      {/* Button */}
                                    {block == "button" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("fill")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "fill" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Fill
                                        </button>
                                    </li>}
                                    {block == "button" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("outline")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "outline" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Outline
                                        </button>
                                    </li>}
                                    {block == "separator" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("wide-line")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "wide-line" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Wide line
                                        </button>
                                    </li>}
                                    {block == "separator" && <li>
                                        <button
                                            onClick={() =>
                                                setStyles("dots")
                                            }
                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                styles == "dots" &&
                                                "bg-gray-800 text-white"
                                            }`}>
                                            Dots
                                        </button>
                                    </li>}

                                </ul>
                            </div>
                        </div>
                        } 

                        {/* Color control */}
                        {(block == "list-item" || block == "image" || block == "audio" || block == "video" || block == "spacer") || (
                            <div className="border-t p-5">
                                <div className="flex justify-between items-center relative">
                                    <h4 className="font-medium">Color</h4>
                                    <PopoverBody>
                                        <div>
                                            <div className="p-1 text-sm text-gray-500 border-t">
                                                <h4 className="p-3 text-gray-600 font-medium">
                                                    Tools
                                                </h4>
                                                {block=="separator" || <button
                                                    onClick={() =>
                                                        setTextColorField(!TextColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Text</span>
                                                    {TextColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>}
                                                {block == "cover" || <button
                                                    onClick={() =>
                                                        setBgColorField(!BgColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Background</span>
                                                    {BgColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button> }
                                                {block == "cover" || <button
                                                    onClick={() =>
                                                        setLinkColorField(!linkColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Link</span>
                                                    {linkColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>}
                                                {block == "cover" && <button
                                                    onClick={() =>
                                                        setOverlayColorField(!OverlayColorField)
                                                    }
                                                    className="w-full z-10 flex justify-between items-center p-3">
                                                    <span>Overlay</span>
                                                    {OverlayColorField && (
                                                        <MdDone className="text-xl text-black" />
                                                    )}
                                                </button>}
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
                                        {(TextColorField && !(block=="separator")) && <tr className="border">
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

                                        {OverlayColorField && (
                                            <tr className="border">
                                                <ColorPopover
                                                    btnText={"Overlay Color"}
                                                    color={overlayColor}>
                                                    {
                                                        <BlockPicker
                                                            color={
                                                                overlayColor
                                                            }
                                                            onChange={
                                                                setOverlayColor
                                                            }
                                                            className="border z-10"
                                                        />
                                                    }
                                                </ColorPopover>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                {block == "cover"  && (
                                <>
                                    <h3 className="text-xs uppercase mt-5 font-semibold">OVERLAY OPACITY</h3>
                                    <div className="grid grid-cols-3 items-center w-4/5 gap-2 mt-1">
                                        <input
                                            className="block col-span-2 h-[5px]"
                                            type="range" name="" step={10}
                                            max={100}
                                            value={overlayOpacity}
                                            min={0}
                                            onChange={
                                                (e) => setOverlayOpacity(
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            className="rounded border p-2 outline-none"
                                            type="number"
                                            max={100}
                                            min={0}
                                            step={10}
                                            maxLength={3}
                                            value={overlayOpacity}
                                            onChange={
                                                (e) =>setOverlayOpacity(
                                                    e.target
                                                        .value
                                                )
                                            }
                                            id=""
                                        />
                                    </div>
                                </>
                                )}
                            </div>
                        )}

                        { /* filter */}
                        {(block == "image" || block == "cover" ) &&
                        <div className="border-t p-5">
                            <h4 className="font-medium mb-3">Filters</h4>
                            <FilterPopover filter={imageFilter}>
                                <div className="">
                                    <h3 className="text-sm">Create a two-tone color effect without losing your original image.</h3>
                                    <div className="grid grid-cols-6 mt-4 gap-3">
                                        <div onClick={() => setImageFilter("unset")} title="Unset" className="w-8 h-8 grid grid-cols-2 cursor-pointer rounded-full overflow-hidden relative border border-gray-600 rotate-45">
                                            <div className="border-r "></div> 
                                            <div className="border-l "></div> 
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("dark-grayscale")}
                                         className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative rotate-45"
                                         title=" Dark Grayscale"
                                         >
                                            <div className="bg-black"></div> 
                                            <div className="bg-gray-500 "></div> 

                                            {imageFilter == "dark-grayscale" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />}
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("grayscale")}
                                        title="Grayscale"
                                        className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border border-gray-600 rotate-45">
                                            <div className="bg-black"></div> 
                                            <div className="bg-white"></div> 

                                            {imageFilter == "grayscale" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-green-500" />}
                                        </div>
                                        <div
                                         onClick={() => setImageFilter("purple-yellow")}
                                         title="Purple and Yellow"
                                         className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-purple-500"></div> 
                                            <div className="bg-yellow-300"></div> 
                                            
                                            {imageFilter == "purple-yellow" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />}
                                        </div>
                                        <div
                                        onClick={() => setImageFilter("blue-red")}
                                        title="Blue and Red"
                                         className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-blue-800"></div> 
                                            <div className="bg-red-500"></div>
                                            
                                            {imageFilter == "blue-red" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />} 
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("midnight")}
                                        title="Midnight"
                                        className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-black"></div> 
                                            <div className="bg-sky-400"></div> 
                                            {imageFilter == "midnight" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />} 
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("magenta-yellow")}
                                        title="Magenta and Yellow"
                                        className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-red-700"></div> 
                                            <div className="bg-yellow-400"></div> 

                                            {imageFilter == "magenta-yellow" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />} 
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("purple-green")}
                                        title="Purple and Green"
                                        className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-red-800"></div> 
                                            <div className="bg-green-400"></div> 
                                            {imageFilter == "purple-green" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />} 
                                        </div>
                                        <div 
                                        onClick={() => setImageFilter("blue-orange")}
                                        title="Blue and Orange"
                                        className="w-8 h-8 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                            <div className="bg-blue-500"></div> 
                                            <div className="bg-orange-400"></div> 

                                            {imageFilter == "blue-orange" && 
                                            <IoMdDoneAll className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-white" />}
                                        </div>
                                    </div>
                                </div>
                            </FilterPopover>
                        </div>}

                        {/* Typography */}
                        {(block == "image" || block == "audio" || block == "file" || block == "video" || block == "separator" || block == "spacer") ||
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
                        }

                        {/* Dimensions */}
                        {(block == "list-item" || block == "pullquote") || (
                            <div className="border-t p-5">
                                <div className="flex justify-between items-center relative">
                                    <h4 className="font-medium">Dimensions</h4>
                                    <PopoverBody
                                        customBtn={
                                            PaddingField || MarginField || BlockSpacingField
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
                                                                <div className="relative w-1/2 border -z-10 border-gray-900 rounded">
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
                                                                <div className="relative w-1/2 border  -z-10 border-gray-900 rounded">
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
                                                            <div className="relative w-1/2 border border-gray-900  -z-10 rounded">
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
                                                            <div className="relative w-1/2 border border-gray-900  -z-10 rounded">
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
                                                            <div className="relative w-1/2 border border-gray-900  -z-10 rounded">
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
                                                            <div className="relative w-1/2 border border-gray-900 -z-10 rounded">
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

                                {/* Block Spacing control */}
                                {BlockSpacingField && (
                                    <div className="mt-4">
                                        <h4>Block Spacing</h4>
                                        <div className="w-full mt-3">
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
                                                        maxLength={3}
                                                        name=""
                                                        value={blockSpacing}
                                                        onChange={(e) => setBlockSpacing(e.target.value)}
                                                        id=""
                                                    />
                                                </div>
                                                <input
                                                    className="block w-1/2 h-[5px]"
                                                    type="range"
                                                    name=""
                                                    max={300}
                                                    min={0}
                                                    id=""
                                                    value={blockSpacing}
                                                    onChange={(e) =>setBlockSpacing(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {block=="columns" &&
                                <div className="mt-5">
                                    <h4>Block Spacing</h4>
                                    {/* horizontal */}
                                    <div className="flex gap-2 items-center mt-3">
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
                                                            horizontalBlockSpacing
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                        setHorizontalBlockSpacing(
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
                                                        horizontalBlockSpacing
                                                    }
                                                    min={0}
                                                    id=""
                                                    onChange={(
                                                        e
                                                    ) =>
                                                    setHorizontalBlockSpacing(
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* vertical */}
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
                                                            setVerticalBlockSpacing
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
                                                        verticalBlockSpacing
                                                    }
                                                    min={0}
                                                    id=""
                                                    onChange={(
                                                        e
                                                    ) =>
                                                    setVerticalBlockSpacing(
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }

                                {(block=="cover" || block=="stack" || block=="row" || block=="group") && <div className="mt-5">
                                    <h4>Minimum height</h4>
                                    <div className="relative w-[100px] mt-2 border border-gray-900 rounded">
                                        <span className="absolute bottom-2 right-1 ">
                                            px
                                        </span>
                                        <input
                                            className="w-full rounded pr-7 p-2 outline-none"
                                            type="number"
                                            max={1000}
                                            min={0}
                                            placeholder="Auto"
                                            maxLength={4}
                                            name=""
                                            value={minHeight}
                                            onChange={(e) => setMinHeight(e.target.value)}
                                            id=""
                                        />
                                    </div>
                                </div>}
                            </div>
                        )}

                        {/* Border */}
                        {(block == "code" || block == "pullquote" || block == "verse" || block == "footnotes" || block == "table"  || block == "details-list" || block == "image" || block == "button" || block == "columns" || block == "row"  || block == "group" ) && (
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
                                                { block == "details-list" ||
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
                                                }
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
                                
                                    {(BorderRadiusField && !(block == "details-list")) && (
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
                    </div>}

                   {block == "more" && <div className="border-t p-5">
                        <label className="flex item-center gap-5">
                            <Toggle
                                checked={isExcerpt}
                                icons={false}
                                onChange={
                                    (e) => setIsExcerpt(e.target.checked)
                                }
                                />
                            <span className="">Hide the excerpt on the full content page</span>
                        </label>
                        <p className="text-xs text-gray-500 mt-2">{isExcerpt? 
                        "The excerpt is hidden." 
                        : "The excerpt is visible."}</p>
                    </div>  } 

                    {/* Advanced */}
                    <Accordion
                        preExpanded={["a","b","c"]}
                        allowZeroExpanded
                        allowMultipleExpanded
                        className="border">
                        {(block == "cover" || block == "group" || block == "row" || block == "stack") &&
                        <AccordionItem uuid="c">
                            <AccordionItemHeading >
                                <AccordionItemButton >
                                    <p className="text-base">Layout</p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="">
                                    {(block == "row" ||block == "stack") ||
                                    <>
                                        <label className="flex item-center gap-3">
                                            <Toggle
                                                checked={isInnerContentWidth}
                                                icons={false}
                                                onChange={
                                                    (e) => setIsInnerContentWidth(e.target.checked)
                                                }
                                                />
                                            <span className="">Inner blocks use content width</span>
                                        </label>
                                        <p className="text-xs text-gray-500 mt-2">{isInnerContentWidth ? 
                                        "Nested blocks use content width with options for full and wide widths." 
                                        : "Nested blocks will fill the width of this container. Toggle to constrain."}</p>
                                    </>
                                    }

                                    {isInnerContentWidth && 
                                        <div className="">
                                            {(block == "row" || block == "stack") || <>
                                            <h3 className=" uppercase my-5 text-sm">Content width</h3>
                                            <div className="relative w-1/2 mt-2 border border-gray-900 rounded">
                                                <span className="absolute bottom-2 right-1 text-xl">
                                                    px
                                                </span>
                                                <input
                                                    className="w-full rounded pr-7 p-2 outline-none"
                                                    type="number"
                                                    min={0}
                                                    placeholder="Full"
                                                    name=""
                                                    value={innerContentWidth}
                                                    onChange={(e) => setInnerContentWidth(e.target.value)}
                                                    id=""
                                                />
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Customize the width for all elements that are assigned to the center or wide columns.</p>
                                            </>}

                                        <div className="flex justify-between">
                                            <div className="">
                                                <h3 className=" uppercase  text-sm">Justification</h3>
                                                <ul className="border w-fit rounded p-1 flex justify-between mt-3">
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockJustification("left")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockJustification == "left" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <MdAlignHorizontalLeft />
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockJustification("center")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockJustification == "center" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <MdAlignHorizontalCenter />
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockJustification("right")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockJustification == "right" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <MdAlignHorizontalRight />
                                                        </button>
                                                    </li>
                                                    {(block == "row" || block == "stack") && <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockJustification("between")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockJustification == "between" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <RxSpaceBetweenHorizontally />
                                                        </button>
                                                    </li>}
                                                </ul>
                                            </div>
                                            {/* {block == "row" && <div className="">
                                                <h3 className="uppercase  text-sm">Justification</h3>
                                                <ul className="border w-fit rounded p-1 flex justify-between mt-3">
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockOrientation("horizontal")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockOrientation == "horizontal" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <BsArrowRight/>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setBlockOrientation("vertical")
                                                            }
                                                            className={`p-1 px-3 rounded ${
                                                                blockOrientation == "vertical" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            <BsArrowDown />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>} */}
                                        </div>   
                                        {(block == "row" || block == "stack") && <label className="flex item-center gap-3 mt-4">
                                            <Toggle
                                                checked={isLineWrap}
                                                icons={false}
                                                onChange={
                                                    (e) => setIsLineWrap(e.target.checked)
                                                }
                                                />
                                            <span className="">Inner blocks use content width</span>
                                        </label>}
                                    </div>}
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>}

                        {/* Setting tab */}
                        {(block == "table" || block == "details-list" || block == "image" || block == "audio"|| block == "cover" || block == "file" || block == "MediaText" || block == "video" || block == "button"|| block == "columns" || block == "spacer") &&
                            <AccordionItem uuid="a" >
                                <AccordionItemHeading >
                                    <AccordionItemButton>
                                        <p className="text-base">Settings</p>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="">
                                        {/* table setting */}
                                        {block == "table" &&
                                        <>
                                            <label className="flex item-center gap-5">
                                                <Toggle
                                                    checked={fixedWidth}
                                                    icons={false}
                                                    onChange={(e) =>setFixedWidth(e.target.checked)}
                                                    />
                                                <span className="">Fixed width table cells</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-5">
                                                <Toggle
                                                    checked={header}
                                                    icons={false}
                                                    onChange={(e) =>setHeader(e.target.checked)}
                                                    />
                                                <span className="">Header section</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-5">
                                                <Toggle
                                                    checked={footer}
                                                    icons={false}
                                                    onChange={(e) =>setFooter(e.target.checked)}
                                                    />
                                                <span className="">Footer section</span>
                                            </label>
                                        </>
                                        }
                                        {/* details-list setting */}
                                        {block == "details-list" &&
                                            <label className="flex item-center gap-5">
                                                <Toggle
                                                    checked={defaultOpen}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setDefaultOpen(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Open by default</span>
                                            </label>
                                        }
                                        {/* Image setting */}
                                        {block == "image" &&
                                        <div>
                                            <h3 className="text-xs font-semibold uppercase">ALTERNATIVE TEXT</h3>
                                            <textarea 
                                            onChange={(e)=> setAltText(e.target.value)} className="border outline-none w-full min-h-[110px] rounded p-1 mt-3"></textarea>
                                            <a
                                            href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
                                            target="_blank"
                                            className="text-xs underline text-blue-500">
                                            Describe the purpose of the image.
                                            <FaExternalLinkAlt className="inline text-xs ml-1" /></a>
                                            <p className="text-xs text-gray-500">Leave empty if decorative.</p>
                                            
                                            
                                            <h3 className="text-xs font-semibold uppercase mt-5">ASPECT RATIO</h3>
                                            <select
                                                onChange={(e)=> setImageRatio(e.target.value)} 
                                                className="w-full outline-none border rounded mt-3 p-3">
                                                <option value="Original">Original</option>
                                                <option value="Square-1:1">Square - 1:1</option>
                                                <option value="Standard-4:3">Standard - 4:3</option>
                                                <option value="Portrait-3:4">Portrait - 3:4</option>
                                                <option value="Classic-3:2">Classic - 3:2</option>
                                                <option value="ClassicPortrait-2:3">
                                                    Classic Portrait
                                                </option>
                                                <option value="Wide-16:9">Wide - 16:9</option>
                                                <option value="Tall-9:16">Tall - 9:16</option>
                                            </select>

                                            <h4 className="text-xs font-semibold uppercase mt-5">Scale</h4>
                                            <div className=" mt-3">
                                                <ul className=" p-1 grid grid-cols-2 gap-3 justify-between">
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setImageScale("cover")
                                                            }
                                                            className={`p-2 w-full border-2 px-5 rounded ${
                                                                imageScale == "cover" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            Cover
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() =>
                                                                setImageScale("contain")
                                                            }
                                                            className={`p-2 w-full capitalize border-2 px-5 rounded ${
                                                                imageScale == "contain" &&
                                                                "bg-gray-800 text-white"
                                                            }`}>
                                                            Contain
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p className="text-xs text-gray-500">Image covers the space evenly.</p>

                                            <div className="grid grid-cols-2 gap-5 mt-5">
                                                <div className="">
                                                    <h3 className="text-sm">Width</h3>
                                                    <div className="flex items-center border border-gray-700 mt-3">
                                                        <input 
                                                        type="number" 
                                                        min={0}
                                                        onChange={(e)=>setImageWidth(e.target.value)}
                                                        placeholder="Auto"
                                                        className="outline-none p-2 w-full"/>
                                                        <span className="px-2">px</span>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h3 className="text-sm">Height</h3>
                                                    <div className="flex items-center border border-gray-700 mt-3">
                                                        <input 
                                                        min={0}
                                                        type="number" 
                                                        onChange={(e)=>setImageHeight(e.target.value)}
                                                        placeholder="Auto"
                                                        className="outline-none p-2 w-full"/>
                                                        <span className="px-2">px</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-xs font-semibold uppercase mt-5">RESOLUTION</h3>
                                            <select
                                                onChange={(e)=> setImageResolution(e.target.value)} 
                                                className="w-full outline-none border rounded mt-3 p-3">
                                                <option value="Thumbnail">Thumbnail</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                                <option value="FullSize">Full Size</option>
                                            </select>
                                            <p className="text-xs text-gray-500 mt-1">Select the size of the source image.</p>
                                            <label className="flex item-center gap-5 mt-5">
                                                <Toggle
                                                    checked={expandOnClick}
                                                    icons={false}
                                                    onChange={(e) =>setExpandOnClick(e.target.checked)}
                                                    />
                                                <span className="">Expand on click</span>
                                            </label>
                                        </div>
                                        }

                                        {/* Audio setting */}
                                        {block == "audio" &&
                                        <>
                                            <label className="flex item-center gap-5">
                                                <Toggle
                                                    checked={autoplay}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setAutoplay(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Autoplay</span>
                                            </label>
                                            {autoplay && <p className="text-xs text-gray-500 mt-1">Autoplay may cause usability issues for some users.</p>}
                                            <label className="flex item-center gap-5 mt-4">
                                                <Toggle
                                                    checked={audioLoop}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setAudioLoop(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Loop</span>
                                            </label>

                                            <h3 className="text-xs font-semibold uppercase mt-5">PRELOAD</h3>

                                            <select
                                                onChange={(e)=> setPreload(e.target.value)} 
                                                className="w-full outline-none border rounded mt-3 p-2">
                                                <option value="browser-default">Browser default</option>
                                                <option value="auto">Auto</option>
                                                <option value="metadata">Metadata</option>
                                                <option value="none">None</option>
                                            </select>
                                        </>}

                                        {/* cover setting */}
                                        {(block == "cover") &&
                                        <>
                                            <label className="flex item-center gap-5">
                                                <Toggle
                                                    checked={fixedBg}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setFixedBg(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Fixed background</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-4">
                                                <Toggle
                                                    checked={RepeatBg}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setRepeatBg(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Repeated background</span>
                                            </label>

                                            <h4 className="mt-5">Background Position</h4>
                                            <div className="grid grid-cols-2 gap-5 mt-4">
                                                <div>
                                                    <h4 className="text-sm font-medium">Top</h4>
                                                    <div className="relative mt-2 border border-gray-900 rounded">
                                                        <span className="absolute bottom-2 right-1 ">%</span>
                                                        <input
                                                            className="w-full rounded pr-7 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            min={0}
                                                            placeholder="Auto"
                                                            maxLength={3}
                                                            name=""
                                                            value={bgPositionTop}
                                                            onChange={(e) => setBgPositionTop(e.target.value)}
                                                            id=""
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium">Left</h4>
                                                    <div className="relative mt-2 border border-gray-900 rounded">
                                                        <span className="absolute bottom-2 right-1 ">%</span>
                                                        <input
                                                            className="w-full rounded pr-7 p-2 outline-none"
                                                            type="number"
                                                            max={100}
                                                            min={0}
                                                            placeholder="Auto"
                                                            maxLength={3}
                                                            name=""
                                                            value={bgPositionLeft}
                                                            onChange={(e) => setBgPositionLeft(e.target.value)}
                                                            id=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-xs font-semibold uppercase mt-5">ALTERNATIVE TEXT</h3>
                                            <textarea 
                                            onChange={(e)=> setAltText(e.target.value)} className="border outline-none w-full min-h-[110px] rounded p-1 mt-3"></textarea>
                                            <a
                                            href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
                                            target="_blank"
                                            className="text-xs underline text-blue-500">
                                            Describe the purpose of the image.
                                            <FaExternalLinkAlt className="inline text-xs ml-1" /></a>
                                            <p className="text-xs text-gray-500">Leave empty if decorative.</p>
                                        </>}

                                        {/* File setting */}
                                        {block == "file" &&
                                        <>

                                            <h3 className="text-xs font-semibold uppercase mt-5">LINK TO</h3>
                                            <select
                                            onChange={(e)=> setLinkTo(e.target.value)} 
                                            className="w-full outline-none border rounded mt-3 p-2">
                                                <option value="media-file">Media File</option>
                                                <option value="attachment-page">Attachment Page</option>
                                            </select>

                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={openNewTab}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setOpenNewTab(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Open in new tab</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-4">
                                                <Toggle
                                                    checked={downloadButton}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setDownloadButton(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Show download button</span>
                                            </label>
                                        </>}

                                        {/* File setting */}
                                        {block == "MediaText" &&
                                        <>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={stackOnMobile}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setStackOnMobile(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Stack On Mobile</span>
                                            </label>

                                            <h3 className="text-xs uppercase mt-5 font-semibold">MEDIA WIDTH</h3>
                                            <div className="grid grid-cols-3 items-center w-4/5 gap-2 mt-1">
                                                <input
                                                    className="block col-span-2 h-[5px]"
                                                    type="range" name="" step={10}
                                                    max={100}
                                                    value={mediaWidth}
                                                    min={0}
                                                    onChange={(e) =>
                                                        setMediaWidth(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <input
                                                    className="rounded border p-2 outline-none"
                                                    type="number"
                                                    max={100}
                                                    min={0}
                                                    step={10}
                                                    maxLength={3}
                                                    name=""
                                                    value={
                                                        mediaWidth
                                                    }
                                                    onChange={(e) =>
                                                        setMediaWidth(
                                                            e.target
                                                                .value
                                                        )
                                                    }
                                                    id=""
                                                />
                                            </div>
                                        </>}

                                        {/* video setting */}
                                        {block == "video" &&
                                        <>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={videoAutoPlay}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setVideoAutoPlay(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Autoplay</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={videoLoop}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setVideoLoop(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Loop</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={videoMuted}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setVideoMuted(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Muted</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={videoPlayback}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setVideoPlayback(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Playback Control</span>
                                            </label>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={videoPlayInline}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setVideoPlayInline(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Playback Control</span>
                                            </label>

                                            <h3 className="text-xs font-semibold uppercase mt-5">PRELOAD</h3>
                                            <select
                                                onChange={(e)=> setVideoPreloaded(e.target.value)} 
                                                className="w-full outline-none border rounded mt-3 p-2">
                                                <option value="auto">Auto</option>
                                                <option value="metadata">Metadata</option>
                                                <option value="none">None</option>
                                            </select>

                                            <h3 className="text-xs font-semibold uppercase mt-5">Poster Image</h3>
                                            <label htmlFor="poster" className="px-3 py-2 bg-blue-500 rounded inline-block w-fit cursor-pointer text-white mt-4">Select</label>
                                            <input 
                                            onChange={(e)=>setVideoPosterImage(e.target.value)} type="file" id="poster" accept="image/*" className="hidden" />
                                            {videoPosterImage && <button onClick={()=> setVideoPosterImage(null)} className="text-blue-500 hover:underline ml-3">Remove</button>}   
                                        </>}

                                        {/* video setting */}
                                        {block == "button" &&
                                        <>
                                            <h3 className="text-xs font-semibold uppercase mt-5">Button Width</h3>
                                            <ul className="border rounded p-1 flex justify-between">
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setButtonSize(25)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            buttonSize == 25 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        25%
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setButtonSize(50)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            buttonSize == 50 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        50%
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setButtonSize(75)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            buttonSize == 75 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        75%
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            setButtonSize(100)
                                                        }
                                                        className={`p-2 px-5 rounded ${
                                                            buttonSize == 100 &&
                                                            "bg-gray-800 text-white"
                                                        }`}>
                                                        100%
                                                    </button>
                                                </li>
                                            </ul>
                                        </>
                                        }
                                        {/* columns setting */}
                                        {block == "columns" &&
                                        <>
                                            <h3 className="text-xs uppercase mt-5 font-semibold">Columns</h3>
                                            <div className="grid grid-cols-3 items-center w-4/5 gap-2 mt-1">
                                                <input
                                                    className="block col-span-2 h-[5px]"
                                                    type="range" name=""
                                                    max={6}
                                                    value={columnsCount}
                                                    min={0}
                                                    onChange={(e) =>
                                                        setColumnsCount(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <input
                                                    className="rounded border p-2 outline-none"
                                                    type="number"
                                                    max={6}
                                                    min={0}
                                                    maxLength={3}
                                                    name=""
                                                    value={
                                                        columnsCount
                                                    }
                                                    onChange={(e) =>
                                                        setColumnsCount(
                                                            e.target
                                                                .value
                                                        )
                                                    }
                                                    id=""
                                                />
                                            </div>
                                            <label className="flex item-center gap-5 mt-6">
                                                <Toggle
                                                    checked={columnStackOnMobile}
                                                    icons={false}
                                                    onChange={
                                                        (e) => setColumnStackOnMobile(e.target.checked)
                                                    }
                                                    />
                                                <span className="">Stack on mobile</span>
                                            </label>
                                        </>
                                        }

                                        {/* spacer setting */}
                                        {block == "spacer" &&
                                        <>
                                            <h3 className="text-xs uppercase mt-5 font-semibold">HEIGHT</h3>
                                            <div className="grid grid-cols-3 items-center w-full gap-2 mt-1">
                                                <input
                                                    className="rounded border p-2 outline-none"
                                                    type="number"
                                                    max={300}
                                                    min={0}
                                                    maxLength={3}
                                                    name=""
                                                    value={
                                                        height
                                                    }
                                                    onChange={(e) =>
                                                        setHeight(
                                                            e.target
                                                                .value
                                                        )
                                                    }
                                                    id=""
                                                />
                                                <input
                                                    className="block col-span-2 h-[5px]"
                                                    type="range" name=""
                                                    max={300}
                                                    value={height}
                                                    min={0}
                                                    onChange={(e) =>
                                                        setHeight(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </>
                                        }
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        }

                        {(block == "more" || block == "Page break") || <AccordionItem uuid="b">
                            <AccordionItemHeading >
                                <AccordionItemButton >
                                    <p className="text-base">Advanced</p>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="">
                                    {(block == "image") && (
                                        <div className="mb-3">
                                            <label
                                                htmlFor="anchor"
                                                className="text-xs font-medium">
                                                TITLE ATTRIBUTE
                                            </label>
                                            <input
                                                id="anchor"
                                                onChange={(e) =>
                                                    imageTitle(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                className="p-1 mt-3 w-full border rounded outline-blue-500 outline-1"
                                            />
                                            <p className="text-xs mt-2 leading-relaxed text-gray-400">Describe the role of this image on the page.</p>
                                            <a
                                                href="#"
                                                target="_blank"
                                                className="text-xs underline text-blue-500">
                                                (Note: many devices and browsers do not display this text.)
                                                <FaExternalLinkAlt className="inline text-xs ml-1" />
                                            </a>
                                        </div>
                                    )}

                                    {(block == "list-item" || block == "details-list") || (
                                        <div >
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
                                        htmlFor="title"
                                        className="text-xs mt-3 block font-medium">
                                        ADDITIONAL CSS CLASS(ES)
                                    </label>
                                    <input
                                        id="title"
                                        onChange={(e) =>
                                            setImageTitle(e.target.value)
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
                        </AccordionItem>}
                    </Accordion>
                </div>
            ) : (
                <p className="text-sm m-5 text-center">No block selected.</p>
            )}
        </div>
    );
};

export default SettingBlockTab;
("");
