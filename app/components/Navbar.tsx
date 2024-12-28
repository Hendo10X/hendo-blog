
import Link from "next/link"
import Themetoggle from "./Themetoggle"

const Navbar = () => {
    return (
        <div className="mx-auto max-w-5xl px-6">
            <div className="flex justify-between items-center h-16 w-full">
                <Link href="/" className="font-jetBrains text-[#969292]">
                    @boihendo
                </Link>
                <Themetoggle />
            </div>
        </div>
    )
}

export default Navbar
