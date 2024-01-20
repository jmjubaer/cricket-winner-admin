import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const OptionsTab = ({ setTopToolbar, topToolbar }) => {
    return (
        <div>
            <div className="p-2 border-b">
                <h2 className="uppercase text-sm p-3">View</h2>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <div className="flex flex-col text-left w-4/5">
                        <span className="text-sm font-medium group-hover:text-blue-500">
                            Top Toolbar
                        </span>
                        <span className="text-gray-400">
                            Access all block and document tools in a single
                            place
                        </span>
                    </div>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <div className="flex flex-col text-left w-4/5">
                        <span className="text-sm font-medium group-hover:text-blue-500">
                            Spotlight mode
                        </span>
                        <span className="text-gray-400">
                            Focus on one block at a time
                        </span>
                    </div>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <div className="flex flex-col text-left w-4/5">
                        <span className="text-sm font-medium group-hover:text-blue-500">
                            Fullscreen mode
                        </span>
                        <span className="text-gray-400">
                            Show and hide admin UI
                        </span>
                    </div>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <div className="flex flex-col text-left w-4/5">
                        <span className="text-sm font-medium group-hover:text-blue-500">
                            Distraction free
                        </span>
                        <span className="text-gray-400">
                            Write with calmness
                        </span>
                    </div>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
            </div>
            <div className="p-2 border-b">
                <h2 className="uppercase text-sm p-3">EDITOR</h2>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Visual editor
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Code editor{" "}
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
            </div>
            <div className="p-2 border-b">
                <h2 className="uppercase text-sm p-3">Tools</h2>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Manage patterns
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Keyboard shortcuts
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Welcome Guide
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <button
                    onClick={() => setTopToolbar(!topToolbar)}
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 group border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium group-hover:text-blue-500">
                        Copy all blocks
                    </span>
                    <span>{topToolbar && <MdDone className="text-xl" />}</span>
                </button>
                <a
                    href="#"
                    className=" flex items-center gap-3 justify-between text-xs p-3 hover:border-slate-200 hover:text-blue-500 border border-transparent rounded w-full"
                >
                    <span className="text-sm font-medium ">Help</span>
                    <span>
                        <FaExternalLinkAlt className="text-lg" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default OptionsTab;
