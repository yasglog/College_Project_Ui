


function Footer(){
    return(
        <section className=" bg-backg2 w-full relative">
        <div className=" max-w-[1186px] flex flex-col md:flex-row items-center  mx-auto relative pt-20 pb-16 gap-x-8">
          {/* <img src="./Image/asset 1.png" alt="" class=" md:max-w-[18%] max-w-20 h-7 mt-2"> */}
          <div className=" max-w-[1186px] flex flex-col md:flex-row mx-auto items-center  md:mt-0 mt-8">
            {/* <!-- list 1 --> */}
            <div className=" max-w-[128px] flex flex-col gap-y-4 md:pl-0 pl-8">
              <h2 className=" font-roboto text-xl">Quick Link</h2>
              <ul className=" text-para">
                <li><a href="" class="hover:text-blue-500">Privacy  Policy</a></li>
                <li className=" mt-2"><a href="" class="hover:text-blue-500">terms and conditions</a></li>
                <li className=" mt-2"><a href="" class="hover:text-blue-500">Contact Us</a></li>               
              </ul>
            </div>
            {/* <!-- list 2 --> */}
            <div className=" max-w-[128px] flex flex-col gap-y-4  md:ml-32 mt-8 md:mt-0 md:pl-0 pl-8 ">
              <h2 className="font-roboto text-xl">Resources</h2>
              <ul className=" text-para">
                <li><a href="" class="hover:text-blue-500">Blong</a></li>
                
                
              </ul>
            </div>
            {/* <!-- list 3 --> */}
            <div className=" max-w-[128px] flex flex-col gap-y-4 md:ml-32  mt-8 md:mt-0 md:pl-0 pl-8 ">
              <h2 className="font-roboto text-xl">Contact us</h2>
              <ul className=" text-para">
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer;