"use client";
import VectorBg from "@/components/VectorBg";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuImagePlus } from "react-icons/lu";
const BrandLogoPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(selectedImage);
    const onSubmit = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    if (watch("image")) {
        const reader = new FileReader();
        const file = watch("image")[0];
        if (file) {
            if (/^image\//.test(file.type)) {
                reader.onloadend = () => {
                    setSelectedImage(reader.result);
                };
                reader?.readAsDataURL(file);
            }
        }
    }
    return (
        <div className=" overflow-hidden">
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    Brand Logo Control
                </h2>
            </VectorBg>
            <div className="container my-10 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-5 md:grid-cols-4">
                        <label
                            htmlFor=""
                            className="font-medium text-lg mb-4 block"
                        >
                            Sponsored logo :
                        </label>
                        <div className="col-span-3">
                            <label
                                htmlFor="imageInput"
                                className="relative w-[300px] h-[100px] overflow-hidden rounded-lg block cursor-pointer group"
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
                                    className="object-contain w-auto  bg-black rounded-lg"
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

                    <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                        <label htmlFor="" className="font-medium text-lg block">
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
                    <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                        <label htmlFor="" className="font-medium text-lg block">
                            Gift Section Color :
                        </label>
                        <input
                            {...register("color", {
                                required: true,
                            })}
                            type="color"
                            className={` h-14 col-span-3 rounded-md font-medium outline-none mt-1 w-full`}
                        />
                    </div>
                    <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                        <label htmlFor="" className="font-medium text-lg block">
                            Gift Text:
                        </label>
                        <input
                            {...register("tooltiptext", {
                                required: true,
                            })}
                            className={`border-2 col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                                errors.url && "border-[#E33E38]"
                            }`}
                            placeholder="Enter Gift tooltip text."
                        />
                    </div>



                    <button type="submit" className="primary_btn w-full sm:w-1/2 mx-auto block  mt-8">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default BrandLogoPage;
