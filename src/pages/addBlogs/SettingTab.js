"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { TagsInput } from "react-tag-input-component";
import { IoIosSave } from "react-icons/io";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
const SettingTab = ({
    handleSummery,
    handleCategory,
    selected,
    setSelected,
    handleFeaturedImage,
}) => {
    const {
        watch,
        register,
        setValue,
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

    const handleTag = (tag) => {
        const isAvailable = selected.find((item) => item == tag);
        if (!isAvailable) {
            setSelected([...selected, tag]);
        }
        console.log(isAvailable);
    };
    const [selectedImage, setSelectedImage] = useState(null);

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
    return (
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

            {/*=============== Horizontal ad Tab ================ */}
            <TabPanel className="">
                <div className=" h-[calc(100vh-110px)] overflow-auto">
                    <Accordion
                        preExpanded={["a", "b", "c", "d"]}
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
                                <form
                                    onSubmit={handleSubmit(handleSummery)}
                                    className="mb-4 mt-2"
                                >
                                    <div className="grid my-2 grid-cols-3 text-sm items-center">
                                        <label>Visibility</label>
                                        <div className="col-span-2">
                                            <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                Public
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid my-2 grid-cols-3 text-sm items-center">
                                        <label>Publish</label>
                                        <div className="col-span-2">
                                            <button className="text-blue-400 p-2 rounded-md hover:bg-blue-400 hover:bg-opacity-20">
                                                Immediately
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid my-2 grid-cols-3 text-sm items-center">
                                        <label>Template</label>
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
                                            {...register("stick")}
                                            value={
                                                "Stick to the top of the blog"
                                            }
                                            className="w-5 h-5 cursor-pointer"
                                        />
                                        <label
                                            htmlFor="stick"
                                            className="text-sm cursor-pointer"
                                        >
                                            Stick to the top of the blog
                                        </label>
                                    </div>

                                    <div className="flex gap-3 my-5 items-center">
                                        <input
                                            type="checkbox"
                                            name="review"
                                            id="review"
                                            {...register("review")}
                                            value={"Pending review"}
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
                                                ({ value, label }) => (
                                                    <option
                                                        key={value}
                                                        value={label}
                                                    >
                                                        {label}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </form>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="b">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Category
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <form
                                    onSubmit={handleSubmit(handleCategory)}
                                    className="mb-4 mt-2"
                                >
                                    {categories.map(
                                        ({ value, label, id }, idx) => (
                                            <div
                                                key={id}
                                                className="flex gap-3 my-3 items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={value}
                                                    id={id}
                                                    {...register(label)}
                                                    value={value}
                                                    className="w-5 h-5 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor={id}
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
                                </form>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="c">
                            <AccordionItemHeading>
                                <AccordionItemButton>Tags</AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <h3 className="uppercase text-xs font-medium mb-3">
                                    ADD NEW TAG
                                </h3>
                                <TagsInput
                                    value={selected}
                                    onChange={setSelected}
                                    name="tags"
                                    placeHolder="Enter new tags"
                                />
                                <span className="text-xs">
                                    Separate by the Enter key.
                                </span>
                                <h3 className="text-xs uppercase font-medium mt-4">
                                    Most Used
                                </h3>
                                {mostUsedTags?.map((tag, idx) => (
                                    <button
                                        key={idx}
                                        className="text-xs text-blue-400 cursor-pointer underline mx-2"
                                        onClick={() => handleTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem uuid="d">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Featured Image
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <form
                                    onSubmit={handleSubmit(handleFeaturedImage)}
                                    className=""
                                >
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
                                                    onClick={handleRemoveImage}
                                                    className="px-6 border py-2 bg-gray-300 inline-block rounded text-sm bg-opacity-80"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <Image
                                                width={300}
                                                height={100}
                                                src={selectedImage}
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
                                                Set Featured Image
                                            </span>
                                        </label>
                                    )}
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        className="hidden"
                                        {...register("image")}
                                    />
                                </form>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </TabPanel>
            <TabPanel className="">
                <div className="p-3 overflow-auto text-gray-500"></div>
            </TabPanel>
        </Tabs>
    );
};

export default SettingTab;
