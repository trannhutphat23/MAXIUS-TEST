'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { AppContext } from '@/context/AppContext';

const Logo = () => {
    const pathname = usePathname();
    const router = useRouter();
    const {currentPage, setCurrentPage} = useContext(AppContext);

    const handleNavigateLogo = (e) => {
        // if (pathname !== "/") {
        //     e.preventDefault();
        //     setCurrentPage(0)
        //     router.push("/");
        // }
        setCurrentPage(0);
    }

    return (
        <Link href="/#firstpage" onClick={(e) => handleNavigateLogo(e)}>  
            <h1 className={`text-[20.5px] font-bold ${currentPage === 1 || currentPage === 2 || currentPage === 4 ? "text-white" : "text-[#222]"} fixed z-50 top-[50px] left-[100px]`}>MAXIUS</h1>
        </Link>
    );
};

export default Logo;