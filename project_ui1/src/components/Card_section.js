
import img1 from './Assest/Vector.png'

function Card(){
    return(
        <div class=" w-full relative bg-bckg mt-16">
        <div class="max-w-[1100px] w-11/12 mx-auto relative flex flex-col justify-center items-center pb-12 ">
            <h2 class=" text-Heading_tag text-3xl font-Heebo font-bold pt-8 text-center">Who can use it?</h2>
            <div class=" flex flex-col mt-10 gap-y-10">
                <div class=" flex flex-row gap-x-20 justify-center items-center">
                    <div class="max-w-[235px] min-h-[272px] flex flex-col hello">
                        <div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
                            <img src={img1} alt="" width="15%" id="chn"/>
                        </div>
                        <div
                            class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
                            <h3 class=" font-Heebo ">Students</h3>
                            <p class=" text-sm  font-Mulish text-para2">This tool helps students summarize
                                information into a concise, easy-to-digest text.</p>
                        </div>
                    </div>
                    <div class="max-w-[235px] min-h-[272px] flex flex-col hello">
                        <div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
                            <img src={img1} alt="" width="15%"/>
                        </div>
                        <div
                            class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
                            <h3 class=" font-Heebo ">Writers</h3>
                            <p class=" text-sm  font-Mulish text-para2">Quickly summarize articles for easier writing and easier reading.</p>
                        </div>
                    </div>
                    <div class="max-w-[235px] min-h-[272px] flex flex-col hello">
                        <div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
                            <img src={img1} alt="" width="15%"/>
                        </div>
                        <div
                            class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
                            <h3 class=" font-Heebo ">Teacher</h3>
                            <p class=" text-sm  font-Mulish text-para2">This is for teachers who want to summarize a long document or chapter for their students.</p>
                        </div>
                    </div>
                </div>

                <div class=" flex flex-row gap-x-20 items-center justify-center">
                    <div class="max-w-[235px] min-h-[272px] flex flex-col hello">
                        <div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
                            <img src={img1} alt="" width="15%"/>
                        </div>
                        <div
                            class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
                            <h3 class=" font-Heebo ">Institutions</h3>
                            <p class=" text-sm  font-Mulish text-para2">Corporations and institutions need to condense content to make it easy to digest for employees/students.</p>
                        </div>
                    </div>
                    <div class="max-w-[235px] min-h-[272px] flex flex-col hello">
                        <div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
                            <img src={img1} alt="" width="15%"/>
                        </div>
                        <div
                            class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
                            <h3 class=" font-Heebo ">Journalists</h3>
                            <p class=" text-sm  font-Mulish text-para2">Journalists need to summarize long articles for their newspaper or magazine.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Card;