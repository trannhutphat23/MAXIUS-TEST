"use client"
import { useState, useContext, useEffect, useRef } from "react";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { AppContext } from '@/context/AppContext';

const Navbar = () => {
    const {currentPage, isEnLan, setIsEnLan, isClick, setIsClick} = useContext(AppContext);
    const router = useRouter();
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isProposalOpen, setIsProposalOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef(null);

    console.log("Current pathname:", pathname);

    const handleClick = () => {
        setIsClick(!isClick);
    };

    const returnToHome = () => {
        setIsClick(!isClick);
        router.push("/");
    };

    const handleChangeLan = () => {
        setIsEnLan(!isEnLan);
    };

    const toggleBrochureDropdown = () => {
        if (isProposalOpen) {
            setIsProposalOpen(false);
        }
        setIsBrochureOpen(!isBrochureOpen);
    };

    const toggleProposalDropdown = () => {
        if (isBrochureOpen) {
            setIsBrochureOpen(false);
        }
        setIsProposalOpen(!isProposalOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsClick(false);
            }
        };

        if (isClick) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isClick]);

    return (
        <div className={`fixed top-0 right-0 z-50 transition-transform duration-500 ${isClick ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
            <div className="fixed flex gap-4 font-light text-[21px] right-[100px] top-[85px] font-sans">
                <span onClick={handleChangeLan} className={`${isEnLan ? "text-[#FF8A00]" : (isClick ? "text-white" : ((currentPage===0 || currentPage===3) ? "text-black" : "text-white"))} cursor-pointer`}>EN</span>
                <span onClick={handleChangeLan} className={`${!isEnLan ? "text-[#FF8A00]" : (isClick ? "text-white" : ((currentPage===0 || currentPage===3) ? "text-black" : "text-white"))} cursor-pointer`}>KR</span>
            </div>
            {isClick ? (
                <nav ref={menuRef} className="w-[530px] h-screen bg-[#0B1437] text-white">
                    <div className="flex justify-between items-center p-8">
                        <div className="ml-auto">
                            <button onClick={handleClick} className="text-white/60 hover:text-white text-right">
                                <FaTimes className="text-[50px] mr-[60px]"/>
                            </button>
                        </div>
                    </div>

                    <div className="px-8 mt-5">
                        <ul className="space-y-6 text-[32px] font-light">
                            <li>
                                <div onClick={returnToHome} className={`${pathname==="/" ? "text-[#FF8A00]" : "text-white"} hover:text-[#FF8A00] cursor-pointer`}>
                                    Home
                                </div>
                            </li>
                            <li>
                                <div onClick={toggleBrochureDropdown} className="text-white hover:text-[#FF8A00] cursor-pointer">
                                    Brochure
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isBrochureOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {isBrochureOpen && (
                                        <ul className="mt-2 ml-4 space-y-2 text-[17.5px]">
                                            <li><Link href="/brochure/hjs-2224" className="text-[#d1d4da] hover:text-[#FF8A00]">HJS 2224</Link></li>
                                            <li><Link href="/brochure/tjs-2125g" className="text-[#d1d4da] hover:text-[#FF8A00]">TJS 2125G</Link></li>
                                            <li><Link href="/brochure/hgs-4024" className="text-[#d1d4da] hover:text-[#FF8A00]">HGS 4024</Link></li>
                                            <li><Link href="/brochure/tjs-104s" className="text-[#d1d4da] hover:text-[#FF8A00]">TJS 104S</Link></li>
                                            <li><Link href="/brochure/tjs-212s" className="text-[#d1d4da] hover:text-[#FF8A00]">TJS 212S+</Link></li>
                                            <li><Link href="/brochure/hss-2224" className="text-[#d1d4da] hover:text-[#FF8A00]">HSS 2224</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                            <li>
                                <div onClick={toggleProposalDropdown} className="text-white hover:text-[#FF8A00] cursor-pointer">
                                    Proposal
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProposalOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {isProposalOpen && (
                                        <ul className="mt-2 ml-4 space-y-2 text-[17.5px]">
                                            <li><Link href="/brochure/hjs-2224" className="text-[#d1d4da] hover:text-[#FF8A00]">IPFS Data Center Development & Operation Consulting</Link></li>
                                            <li><Link href="/brochure/tjs-2125g" className="text-[#d1d4da] hover:text-[#FF8A00]">IPFS Data Center Build Vision</Link></li>
                                            <li><Link href="/brochure/hgs-4024" className="text-[#d1d4da] hover:text-[#FF8A00]">Technology Application</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </li>
                            <li>
                                <Link href="/contact" className={`${pathname==="/contact" ? "text-[#FF8A00]" : "text-white"} hover:text-[#FF8A00]`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-[30px] flex justify-center">
                        <div className="w-full max-w-screen-lg h-[1px] bg-white"></div>
                    </div>

                    <div className="mt-[30px] px-8">
                        {isEnLan ? (
                            <p className="text-sm text-[#d1d4da] leading-relaxed mb-1">
                                5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea 
                            </p>
                        ) : (
                            <p className="text-sm text-[#d1d4da] leading-relaxed mb-1">
                                경기도 안양시 동안구 시민대로327번길 12-30 5층
                            </p>
                        )}
                        <p className="text-sm mb-4 text-[#d1d4da]">
                            Tel 02. 851. 2662 / Fax 02. 851. 2655
                        </p>
                        <Link href="/" className="text-sm text-[#d1d4da] block mb-8">
                            View Map
                        </Link>

                        <div className="mb-4">
                            <p className="text-sm mb-1 text-[#d1d4da]">Company.</p>
                            <a href="mailto:support@maxius.io" className="text-sm text-[#d1d4da] cursor-pointer">support@maxius.io</a>
                        </div>

                        <div>
                            <p className="text-sm mb-1 text-[#d1d4da]">Technical support</p>
                            <a href="mailto:support@maxius.io" className="text-sm text-[#d1d4da] cursor-pointer">support@maxius.io</a>
                        </div>
                    </div>
                </nav>
            ) : (
                <div 
                    onClick={handleClick}
                    className="fixed top-[40px] right-[90px] text-black hover:text-gray-600 cursor-pointer"
                >
                    <IoMdMenu className={`text-[50px] ${(currentPage===0 || currentPage===3) ? "text-black" : "text-white" }`}/>
                </div>
            )}
        </div>
    );
};

export default Navbar;