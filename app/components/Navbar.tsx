
import Link from "next/link"
import Themetoggle from "./Themetoggle"

const Navbar = () => {
    return (
        <div className="mx-auto mt-5 max-w-5xl px-6">
            <div className="flex justify-between items-center h-16 w-full">
                <Link href="/" className="font-jetBrains text-[#969292] hover:text-green-600 transition-all duration-300 ease-in-out">
                    <span className="mx-auto font-bold">/</span>@boihendo
                </Link>
                <Themetoggle />
            </div>
        </div>
    )
}
export default Navbar
