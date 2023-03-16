
// import react
function Navbar(){
    return(
        <div className="relative bg-background_color">
        <div className="max-w-[1350px] w-[93%] relative mx-auto flex flex-row justify-between items-center py-4">
            <div className="font-Mulish text-para1 text-[28px] cursor-pointer relative">
                Summarizer
            </div>
             {/* list */}
            <div className=" max-w-[400px]   ">
                <ul className="flex  flex-row gap-x-12 items-center">
                    <li className=" font-Mulish text-[20px] text-para1">
                        <a href="">Home</a>
                    </li>
                    <li className=" font-Mulish text-[20px]">
                        <a href="">Contact</a>
                    </li>
                    <li className=" font-Mulish text-[20px]">
                        <a href="">Log in</a>
                    </li>
                    <li className=" font-Mulish text-[20px]">
                        <a href="">Sign up</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Navbar;