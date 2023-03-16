import './Summarized_box.css';


function Summarizebox(){
    return(
        <div className="flex flex-col items-center justify-center">

        
        <div className="max-w-[1250px] w-[93%] relative mx-auto flex flex-col border-solid border-2 border-black min-h-[360px] mt-10">
            <div className="w-full flex flex-row min-h-[48px] ">
                <div  className=" min-w-[300px] flex flex-row justify-between ml-12 items-center">
                    <h2 className=" text-2xl text-Heading_tag font-Heebo">Summarizer</h2>
                    <h2 className="text-xl text-para font-Heebo cursor-pointer">Upload Doc</h2>
                </div>
                {/* <!-- <div> --> */}
                    <h2 className=" ml-[26%] text-2xl font-Heebo text-Heading_tag  font-medium flex items-center">Summarized Text</h2>
                {/* <!-- </div> --> */}
                
            </div>

            <div className=" w-full mx-auto flex flex-row gap-x-[2px]">
                <div className="border-solid border-2 border-black min-w-[624px] min-h-[360px] bg-box_inside border-r-4">
                    
                    <form >
                     <textarea placeholder="Enter your input text here. . ." className="min-w-[621px] min-h-[360px]  resize-none border-none"></textarea>
                    </form>
                </div>
                <div className="border-solid border-t-[2px] border-black min-w-[624px] min-h-[360px]">
                <form >
                     <textarea placeholder="" className="min-w-[621px] min-h-[360px] resize-none border-l-2 border-black" ></textarea>
                    </form>
                </div>
            </div>
        </div>
        <div className=" bg-Hero_section max-w-[199px] h-[48px] text-center pt-[10px] rounded-2xl cursor-pointer mt-3 text-white font-Mulish text-lg px-5 pg ">Summarize Now</div>
        </div>
    )
}

export default Summarizebox