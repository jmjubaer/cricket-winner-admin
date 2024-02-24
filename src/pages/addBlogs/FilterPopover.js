import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const FilterPopover = ({filter,children }) => {
    return (
        <div className="w-full ">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="outline-none w-full block z-10">
                            <div className="p-2 border rounded w-full cursor-pointer px-3 flex items-center gap-2 text-sm">
                                {filter == "dark-grayscale" ? 
                                <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative rotate-45">
                                    <div className="bg-black"></div> 
                                    <div className="bg-gray-500 "></div> 
                                </div>
                                : filter == "grayscale" 
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border border-gray-600 rotate-45">
                                    <div className="bg-black"></div> 
                                    <div className="bg-white"></div> 
                                </div>
                                : filter == "purple-yellow"
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-purple-500"></div> 
                                    <div className="bg-yellow-300"></div> 
                                </div>
                                : filter == "blue-red" 
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-blue-800"></div> 
                                    <div className="bg-red-500"></div>
                                </div>
                                : filter == "midnight" 
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-black"></div> 
                                    <div className="bg-sky-400"></div> 
                                </div>
                                : filter == "magenta-yellow" 
                                ? <div 
                                onClick={() => setImageFilter("magenta-yellow")}
                                title="Magenta and Yellow"
                                className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-red-700"></div> 
                                    <div className="bg-yellow-400"></div> 
                                </div>
                                : filter == "purple-green" 
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-red-800"></div> 
                                    <div className="bg-green-400"></div> 
                                </div>
                                : filter == "blue-orange" 
                                ? <div className="w-6 h-6 grid grid-cols-2 rounded-full overflow-hidden relative border rotate-45">
                                    <div className="bg-blue-500"></div> 
                                    <div className="bg-orange-400"></div> 
                                </div>
                                : <div onClick={() => setImageFilter("unset")} title="Unset" className="w-6 h-6 grid grid-cols-2 cursor-pointer rounded-full overflow-hidden relative border border-gray-600 rotate-45">
                                    <div className="border-r "></div> 
                                    <div className="border-l "></div> 
                                </div>}
                                Duotone
                            </div>
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
                            <Popover.Panel className="absolute rounded-md shadow-lg border bg-white z-20 left-0 top-11 w-full p-5">
                                {children}
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default FilterPopover;
