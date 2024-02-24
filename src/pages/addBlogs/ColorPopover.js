import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ColorPopover = ({color,btnText, children }) => {
    return (
        <div className="w-full ">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className="outline-none w-full block z-10">
                            <div className="p-2 w-full cursor-pointer px-3 flex items-center gap-2 text-sm">
                                <div className="w-6 h-6 rounded-full overflow-hidden relative border border-gray-600">
                                    <input
                                        type="color"
                                        name=""
                                        id=""
                                        value={color?.hex}
                                        className="w-10  h-10 rounded-full absolute -left-2 -top-2"
                                    />
                                </div>
                                {btnText}
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
                            <Popover.Panel className="absolute left-11 top-10 w-64">
                                <div className="overflow-hidden w-fit bg-white z-20 rounded-md shadow-lg ring-1 ring-black/5">
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

export default ColorPopover;
