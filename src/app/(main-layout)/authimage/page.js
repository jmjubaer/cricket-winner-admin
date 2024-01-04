"use client";
import VectorBg from "@/components/VectorBg";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdLogin } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import Image from "next/image";
import loginImage from "@/assets/loing-page.png";
import signUpImage from "@/assets/sign_up.png";
import { LuImagePlus } from "react-icons/lu";
import { IoIosSave } from "react-icons/io";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
const AuthImagePage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const handleLoginBanner = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    const handleSignUpBanner = (data) => {
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
                    Login and Sing up page banner control
                </h2>
            </VectorBg>
            <div className="container overflow-hidden">
                <Tabs>
                    <div className="flex justify-center my-5">
                        <TabList className="flex mb-5 content_tab text-[#323232] font-medium">
                            <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_left px-3">
                                <MdLogin className="inline text-lg sm:text-2xl mr-1" />
                                Login
                            </Tab>
                            <Tab className="w-fit text-sm sm:text-base sm:w-44 border text-center p-1 sm:p-3 cursor-pointer outline-none rounded_right px-3">
                                <ImUserPlus className="inline text-lg sm:text-2xl mr-1" />
                                Sign Up
                            </Tab>
                        </TabList>
                    </div>

                    {/*================== login Tab -====================== */}
                    <TabPanel>
                        <div className="grid sm:grid-cols-2 overflow-hidden rounded-xl my-10 border w-4/5 mx-auto relative">
                            <form
                                onSubmit={handleSubmit(handleLoginBanner)}
                                className=""
                            >
                                <label
                                    htmlFor="imageInput"
                                    className="relative w-full h-full block cursor-pointer group"
                                >
                                    {/* overlay */}
                                    <div className="w-full h-full absolute bg-slate-100 bg-opacity-70 top-0 left-0 group-hover:opacity-100 sm:opacity-0 duration-500 transition-all"></div>

                                    <span className="absolute top-5 right-5 text-black text-4xl group-hover:opacity-100 sm:opacity-0 duration-500 transition-all">
                                        <FaEdit />
                                    </span>
                                    <Image
                                        width={300}
                                        height={100}
                                        src={
                                            selectedImage
                                                ? selectedImage
                                                : "https://i.ibb.co/9nQmBkm/cover-image.jpg"
                                        }
                                        alt="Image Preview"
                                        className="w-full h-full object-cover max-h-[550px]"
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    className="hidden"
                                    {...register("image")}
                                />
                                <button
                                    type="submit"
                                    className={`absolute z-20 top-5 right-5 primary_btn flex gap-1 items-center ${
                                        selectedImage ? "block" : "hidden"
                                    }`}
                                >
                                    <IoIosSave className="text-xl" /> Save
                                    Change
                                </button>
                            </form>
                            <Image
                                src={loginImage}
                                alt="Login page demo"
                                className="w-full h-full object-cover max-h-[550px]"
                            />
                        </div>
                    </TabPanel>

                    {/*================= Prediction Tab -=================== */}
                    <TabPanel>
                        <div className="grid sm:grid-cols-2 overflow-hidden rounded-xl my-10 border w-4/5 mx-auto relative">
                            <form
                                onSubmit={handleSubmit(handleSignUpBanner)}
                                className=""
                            >
                                <label
                                    htmlFor="imageInput"
                                    className="relative w-full h-full block cursor-pointer group"
                                >
                                    {/* overlay */}
                                    <div className="w-full h-full absolute bg-slate-100 bg-opacity-70 top-0 left-0 group-hover:opacity-100 sm:opacity-0 duration-500 transition-all"></div>

                                    <span className="absolute top-5 right-5 text-black text-4xl group-hover:opacity-100 sm:opacity-0 duration-500 transition-all">
                                        <FaEdit />
                                    </span>
                                    <Image
                                        width={300}
                                        height={100}
                                        src={
                                            selectedImage
                                                ? selectedImage
                                                : "https://i.ibb.co/9nQmBkm/cover-image.jpg"
                                        }
                                        alt="Image Preview"
                                        className="w-full h-full object-cover max-h-[600px]"
                                    />
                                </label>
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    className="hidden"
                                    {...register("image")}
                                />
                                <button
                                    type="submit"
                                    className={`absolute z-20 top-5 right-5 primary_btn flex gap-1 items-center ${
                                        selectedImage ? "block" : "hidden"
                                    }`}
                                >
                                    <IoIosSave className="text-xl" /> Save
                                    Change
                                </button>
                            </form>
                            <Image
                                src={signUpImage}
                                alt="Login page demo"
                                className="w-full h-full object-cover max-h-[600px]"
                            />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default AuthImagePage;
