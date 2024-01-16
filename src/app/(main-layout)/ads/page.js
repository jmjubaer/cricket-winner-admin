"use client";
import VectorBg from "@/components/VectorBg";
import React, { useState } from "react";

import Image from "next/image";
import { LuImagePlus } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { BsArrows, BsArrowsVertical } from "react-icons/bs";
const AdManagementPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const handleVerticalAd = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    const handleHorizontalAd = (data) => {
        // Handle form submission with data including the image
        console.log(data);
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
    return (
        <section>
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    Ad Management
                </h2>
            </VectorBg>
            <div className="container overflow-hidden my-5">
                <Tabs>
                    <div className="flex justify-center my-5">
                        <TabList className="flex mb-5 content_tab text-[#323232] font-medium">
                            <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_left px-3">
                                <BsArrowsVertical className="inline text-lg sm:text-2xl mr-1" />
                                Vertical
                            </Tab>
                            <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_right px-3">
                                <BsArrows className="inline text-lg sm:text-2xl mr-1" />
                                Horizontal
                            </Tab>
                        </TabList>
                    </div>

                    {/*=============== Vertical ad Tab -================= */}
                    <TabPanel>
                        <form onSubmit={handleSubmit(handleVerticalAd)}>
                            <div className="grid gap-5 md:grid-cols-4 mb-5 items-center">
                                <label
                                    htmlFor=""
                                    className="font-medium text-lg block"
                                >
                                    Sponsored URL :
                                </label>
                                <input
                                    {...register("url", {
                                        required: true,
                                    })}
                                    type="url"
                                    className={`border-2 col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.url && "border-[#E33E38]"
                                    }`}
                                    placeholder="Enter URL ...."
                                />
                            </div>

                            <div className="grid gap-5 md:grid-cols-4">
                                <label
                                    htmlFor=""
                                    className="font-medium text-lg mb-4 block"
                                >
                                    Sponsored Image :
                                </label>
                                <div className="md:col-span-3">
                                    <label
                                        htmlFor="imageInput"
                                        className="relative w-[300px] h-[500px] overflow-hidden rounded-lg block cursor-pointer group"
                                    >
                                        {/* overlay */}
                                        <div className="w-full h-full absolute bg-slate-100 bg-opacity-70 top-0 left-0 group-hover:opacity-100 sm:opacity-0 duration-500 transition-all"></div>

                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-4xl group-hover:opacity-100 sm:opacity-0 duration-500 transition-all">
                                            <LuImagePlus />
                                        </span>
                                        <Image
                                            width={300}
                                            height={100}
                                            src={
                                                selectedImage
                                                    ? selectedImage
                                                    : "https://i.ibb.co/cbqx9yY/1xlogo.png"
                                            }
                                            alt="Image Preview"
                                            className="object-contain w-[300px] h-[500px] bg-black rounded-lg"
                                        />
                                    </label>
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        className="hidden"
                                        {...register("image")}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="primary_btn w-full  mx-auto bloc mt-8"
                            >
                                Submit
                            </button>
                        </form>
                    </TabPanel>

                    {/*=============== Horizontal ad Tab ================ */}
                    <TabPanel>
                        <form onSubmit={handleSubmit(handleHorizontalAd)}>
                            <div className="grid gap-5 md:grid-cols-4 mb-5 items-center">
                                <label
                                    htmlFor=""
                                    className="font-medium text-lg block"
                                >
                                    Sponsored URL :
                                </label>
                                <input
                                    {...register("url", {
                                        required: true,
                                    })}
                                    type="url"
                                    className={`border-2 col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                        errors.url && "border-[#E33E38]"
                                    }`}
                                    placeholder="Enter URL ...."
                                />
                            </div>

                            <div className="grid gap-5 md:grid-cols-4">
                                <label
                                    htmlFor=""
                                    className="font-medium text-lg mb-4 block"
                                >
                                    Sponsored Image :
                                </label>
                                <div className="md:col-span-3">
                                    <label
                                        htmlFor="imageInput"
                                        className="relative w-full h-[300px] overflow-hidden rounded-lg block cursor-pointer group"
                                    >
                                        {/* overlay */}
                                        <div className="w-full h-full absolute bg-slate-100 bg-opacity-70 top-0 left-0 group-hover:opacity-100 sm:opacity-0 duration-500 transition-all"></div>

                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-4xl group-hover:opacity-100 sm:opacity-0 duration-500 transition-all">
                                            <LuImagePlus />
                                        </span>
                                        <Image
                                            width={500}
                                            height={300}
                                            src={
                                                selectedImage
                                                    ? selectedImage
                                                    : "https://i.ibb.co/cbqx9yY/1xlogo.png"
                                            }
                                            alt="Image Preview"
                                            className="object-contain w-full h-[300px] bg-black rounded-lg"
                                        />
                                    </label>
                                    <input
                                        type="file"
                                        id="imageInput"
                                        accept="image/*"
                                        className="hidden"
                                        {...register("image")}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="primary_btn w-full  mx-auto bloc mt-8"
                            >
                                Submit
                            </button>
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default AdManagementPage;
