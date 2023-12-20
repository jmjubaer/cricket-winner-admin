"use client"
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdCalendarMonth, MdVideoLibrary } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
const LeaderBoard = () => {
    return (
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
                {/* <ArticleTab></ArticleTab> */}
            </TabPanel>

            {/*================= Prediction Tab -=================== */}
            <TabPanel>
                {/* <PredictionTab></PredictionTab> */}
            </TabPanel>

            {/*================= Videos Tab -==================== */}
            <TabPanel>
                {/* <VideosTab></VideosTab> */}
            </TabPanel>
        </Tabs>
    );
};

export default LeaderBoard;
