import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const isMobileRef = useRef(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            isMobileRef.current = isMobile;
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="md:h-screen w-full md:w-64 border-r border-b relative">
            <div className="md:h-screen flex flex-col">
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src="/sidebarlogo.png" alt="" className="h-7.5 w-7" />
                            <h1 className="text-2xl font-santoshi font-normal text-[#181D27]">CodeAnt AI</h1>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => { setIsMenuOpen(c => !c) }}>
                                {isMenuOpen ? <img src="/close.svg" alt="menu" className="size-8" /> : <img src="/menu.svg" alt="menu" className="size-8" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMobile ?
                    (isMenuOpen &&
                        <div className="absolute top-16 transition-all broder-b -2 bg-white w-full z-10 flex flex-1 flex-col justify-between">
                            <div className="flex flex-col gap-1 w-full p-3" >
                                <div className="mb-2">
                                    <span className="flex items-center gap-2 border py-2 px-4 rounded-lg justify-between">
                                        <span className="text-base font-normal">{isMobile ? "UtkarshDhairyaPanwar" : "UtkarshDhairyaPa..."}</span>
                                        <img src="/chevron-down.png" alt="" className="h-2 w-3" />
                                    </span>
                                </div>
                                <div className="flex-1 w-full flex flex-col gap-2 justify-between">
                                    <button className="md:bg-[#1570EF] md:text-white text-md mt-2 font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        {isMobile ? <img src="/home.svg" alt="" className="size-5" /> : <img src="/homewhite.svg" alt="" className="size-5" />}    Repositories
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/code.svg" alt="" className="size-5" />    AI Code Review
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/cloud.svg" alt="" className="size-5" />    Cloud Security
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/book.svg" alt="" className="size-5" />    How to Use
                                    </button>
                                    <button className="text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/settings.svg" alt="" className="size-5" />    Settings
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full p-3">
                                <button className=" text-md text-[#414651] hover:bg-[#D5D7DA] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                    <img src="/phone.svg" alt="" className="size-5" /> Support
                                </button>
                                <button className="text-md text-[#414651] hover:bg-[#D5D7DA] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center" onClick={() => { navigate("/") }}>
                                    <img src="/logout.svg" alt="" className="size-5" /> Logout
                                </button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="flex flex-1 flex-col justify-between">
                            <div className="flex flex-col gap-1 w-full p-3" >
                                <div className="mb-2">
                                    <span className="flex items-center gap-2 border py-2 px-4 rounded-lg justify-between">
                                        <span className="text-base font-normal">{isMobile ? "UtkarshDhairyaPanwar" : "UtkarshDhairyaPa..."}</span>
                                        <img src="/chevron-down.png" alt="" className="h-2 w-3" />
                                    </span>
                                </div >
                                <div className="flex-1 w-full flex flex-col gap-2 justify-between">
                                    <button className="md:bg-[#1570EF] md:text-white text-md mt-2 font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        {isMobile ? <img src="/home.svg" alt="" className="size-5" /> : <img src="/homewhite.svg" alt="" className="size-5" />}    Repositories
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/code.svg" alt="" className="size-5" />    AI Code Review
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/cloud.svg" alt="" className="size-5" />    Cloud Security
                                    </button>
                                    <button className=" text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/book.svg" alt="" className="size-5" />    How to Use
                                    </button>
                                    <button className="text-md hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                        <img src="/settings.svg" alt="" className="size-5" />    Settings
                                    </button>
                                </div>
                            </div >
                            <div className="flex flex-col gap-2 w-full p-3">
                                <button className=" text-md text-[#414651] hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center">
                                    <img src="/phone.svg" alt="" className="size-5" /> Support
                                </button>
                                <button className="text-md text-[#414651] hover:bg-[#F5F5F5] font-semibold py-3 px-4 rounded-lg flex gap-2 items-center" onClick={() => { navigate("/") }}>
                                    <img src="/logout.svg" alt="" className="size-5" /> Logout
                                </button>
                            </div>
                        </div >
                    )
                }
            </div >
        </div >
    )
}

export default SideBar