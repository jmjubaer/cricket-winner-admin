"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdCalendarMonth, MdVideoLibrary } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import VectorBg from "@/components/VectorBg";
import { useForm } from "react-hook-form";
const LeaderBoard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleMonthlyLeaderBoard = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    const handleLeagueLeaderBoard = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    return (
        <>
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    Leader Board Control
                </h2>
            </VectorBg>
            <Tabs>
                <div className="flex justify-center my-5">
                    <TabList className="flex mb-5 content_tab text-[#323232] font-medium">
                        <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_left px-3">
                            <MdCalendarMonth className="inline text-lg sm:text-2xl mr-1" />
                            Monthly
                        </Tab>
                        <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_right px-3">
                            <FaUsers className="inline text-lg sm:text-2xl mr-1" />
                            League
                        </Tab>
                    </TabList>
                </div>

                {/*================== Article Tab -====================== */}
                <TabPanel>
                    <form
                        onSubmit={handleSubmit(handleMonthlyLeaderBoard)}
                        className="container my-10"
                    >
                        <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                            <label
                                htmlFor=""
                                className="font-medium text-lg block"
                            >
                                Participating Percentage :
                            </label>
                            <input
                                {...register("participatingPercentage", {
                                    required: true,
                                })}
                                type="number"
                                max={"100"}
                                className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                    errors.participatingPercentage &&
                                    "border-[#E33E38]"
                                }`}
                                placeholder="Enter Participating Percentage ...."  
                            />
                        </div>
                        <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                            <label
                                htmlFor=""
                                className="font-medium text-lg block"
                            >
                                Position:
                            </label>
                            <input
                                {...register("position", {
                                    required: true,
                                })}
                                type="number"
                                max={"100"}
                                className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                    errors.position && "border-[#E33E38]"
                                }`}
                                placeholder="Enter Leader board Position ....."
                            />
                        </div>

                        <button
                            type="submit"
                            className="primary_btn w-full sm:w-1/2 mx-auto block  mt-8"
                        >
                            Submit
                        </button>
                    </form>
                </TabPanel>

                {/*================= Prediction Tab -=================== */}
                <TabPanel>
                    <form
                        onSubmit={handleSubmit(handleLeagueLeaderBoard)}
                        className="container my-10"
                    >
                        <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                            <label
                                htmlFor=""
                                className="font-medium text-lg block"
                            >
                                Select League :
                            </label>
                            <select
                                {...register("league", {
                                    required: true,
                                })}
                                className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                    errors.url && "border-[#E33E38]"
                                }`}
                            >
                                <option value="Caribbean Premier League">
                                    Caribbean Premier League
                                </option>
                                <option value="ICC World Cup">
                                    ICC World Cup
                                </option>
                                <option value="One Day International">
                                    One Day International
                                </option>
                                <option value="One Day International Women">
                                    One Day International Women
                                </option>
                                <option value="The Hundred">The Hundred</option>
                                <option value="Twenty20 International Women">
                                    Twenty20 International Women
                                </option>
                                <option value="Twenty20 International">
                                    Twenty20 International
                                </option>
                            </select>
                        </div>
                        <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                            <label
                                htmlFor=""
                                className="font-medium text-lg block"
                            >
                                Participating Percentage :
                            </label>
                            <input
                                {...register("participatingPercentage", {
                                    required: true,
                                })}
                                type="number"
                                max={"100"}
                                className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                    errors.participatingPercentage &&
                                    "border-[#E33E38]"
                                }`}
                                placeholder="Enter Participating Percentage ...."
                            />
                        </div>
                        <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                            <label
                                htmlFor=""
                                className="font-medium text-lg block"
                            >
                                Position:
                            </label>
                            <input
                                {...register("position", {
                                    required: true,
                                })}
                                type="number"
                                max={"100"}
                                className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                    errors.position && "border-[#E33E38]"
                                }`}
                                placeholder="Enter Leader board Position ...."
                            />
                        </div>

                        <button
                            type="submit"
                            className="primary_btn w-full sm:w-1/2 mx-auto block  mt-8"
                        >
                            Submit
                        </button>
                    </form>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default LeaderBoard;
