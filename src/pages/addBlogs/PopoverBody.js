import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import paddingImg from "@/assets/padding.svg"
import paddingTopImg from "@/assets/paddingtop.svg";
import paddingBImg from "@/assets/paddingbottom.svg";
import paddingLeftImg from "@/assets/paddingleft.svg";
import paddingRightImg from "@/assets/paddingright.svg";
const PopoverBody = ({ customBtn, children }) => {
    return (
        <div className="">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="outline-none z-10">
                            {customBtn == "plus" ? (
                                <FaPlus className="" />
                            ) : customBtn == "padding" ? (
                                <Image src={paddingImg} alt="image" />
                            ) : (
                                <PiDotsThreeVerticalBold className="text-2xl" />
                            )}
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute right-0 top-7 z-20 w-64">
                                <div className="overflow-hidden bg-white  rounded-md shadow-lg ring-1 ring-black/5">
                                    {children}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default PopoverBody;
