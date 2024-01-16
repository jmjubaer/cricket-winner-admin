"use client";
import React from "react";
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

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
const SettingTab = ({ handleSummery, handleCategory }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
                <div className=" h-[calc(100vh-175px)] overflow-auto">
                    <Accordion preExpanded={["a"]} allowZeroExpanded>
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
                                                className="flex gap-3 my-5 items-center"
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
