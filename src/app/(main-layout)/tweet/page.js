"use client";
import VectorBg from "@/components/VectorBg";
import React from "react";
import { useForm } from "react-hook-form";

const TweetPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleTweet = (data) => {
        // Handle form submission with data including the image
        console.log(data);
    };
    return (
        <div className="">
            <VectorBg>
                <h2 className="container my-16 font-bold text-3xl sm:text-5xl text-white text-center">
                    Tweet Control
                </h2>
            </VectorBg>
            <form onSubmit={handleSubmit(handleTweet)} className="container my-10">
                <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                    <label htmlFor="" className="font-medium text-lg block">
                        Tweet text :
                    </label>
                    <input
                        {...register("tweetText", {
                            required: true,
                        })}
                        type="text"
                        className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                            errors.url && "border-[#E33E38]"
                        }`}
                        placeholder="Write your Tweet ...."
                    />
                </div>
                <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                    <label htmlFor="" className="font-medium text-lg block">
                        Tweet short Description :
                    </label>
                    <input
                        {...register("tweetDes", {
                            required: true,
                        })}
                        type="text"
                        className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                            errors.url && "border-[#E33E38]"
                        }`}
                        placeholder="Tweet description ...."
                    />
                </div>
                <div className="grid gap-5 md:grid-cols-4 mt-5 items-center">
                    <label htmlFor="" className="font-medium text-lg block">
                        Tweet Link :
                    </label>
                    <input
                        {...register("TweetUrl", {
                            required: true,
                        })}
                        type="url"
                        className={`border-2 md:col-span-3 rounded-md p-[10px] font-medium outline-none mt-1 w-full ${
                            errors.url && "border-[#E33E38]"
                        }`}
                        placeholder="Enter tweet URL ...."
                    />
                </div>

                <button
                    type="submit"
                    className="primary_btn w-full sm:w-1/2 mx-auto block  mt-8"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TweetPage;
