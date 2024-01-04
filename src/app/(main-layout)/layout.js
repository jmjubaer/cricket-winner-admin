import Footer from "@/pages/shered/Footer";
import MainNav from "@/pages/shered/MainNav";
import TopNav from "@/pages/shered/TopNav";
import React from "react";

const layout = ({ children }) => {
    return (
        <>
            <header>
                <TopNav></TopNav>
                <MainNav></MainNav>
            </header>
            <main className="bg-[#FBFBFB] min-h-[calc(100vh-150px)] relative">
                {children}
            </main>
            <footer className="bg-black text-white">
                <Footer></Footer>
            </footer>
        </>
    );
};

export default layout;
