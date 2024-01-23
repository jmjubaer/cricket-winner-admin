import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsImageAlt, BsParagraph, BsViewList } from "react-icons/bs";
import { FaBarsStaggered, FaQuoteRight } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import {
    IoBookmarkSharp,
    IoCodeSlashSharp,
    IoLocationOutline,
} from "react-icons/io5";
import { LuListVideo } from "react-icons/lu";
import { MdMenuOpen } from "react-icons/md";
import { PiListPlus } from "react-icons/pi";
import { VscPreview } from "react-icons/vsc";

export default function Modal({ isOpen, setIsOpen, children }) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 border" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[350px] transform bg-white rounded text-left align-middle shadow-xl transition-all border">
                                    {children}
                                <button onClick={closeModal} className="absolute -top-3 -right-3 text-red-500 text-[26px] bg-white rounded-full">
                                    <IoIosCloseCircle />
                                </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
