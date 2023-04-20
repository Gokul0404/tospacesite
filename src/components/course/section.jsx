import React from "react";
import '../course/Section.css'
export default function Course() {
  return (
    <div>
      <div className="bg-black w-screen  pt-[13vh] ">
        <div
          className="w-screen bg-gray-400 py-6 course_bg_img"
          draggable="false"
        >
          <div className="flex justify-start pl-[10%] gap-x-[3%] ">
            <div className=" w-[70vw] h-[80vh] outline outline-white rounded-[20px] overflow-hidden ">
              <div className=" bg-white opacity-40 w-[100%] h-[100%] ">d</div>
            </div>
            <div className="w-[10vw] h-[80vh] relative flex justify-center items-center">
              <div className="w-[100%]  flex justify-center flex-col items-center gap-5 text-center">
                <div
                  className="w-[5vw] h-[10vh]  bg-gray-600 rounded-md"
                  draggable="true"
                >
                  a
                </div>
                <div
                  className="w-[5vw] h-[10vh] bg-gray-600 rounded-md"
                  draggable="true"
                >
                  a
                </div>
                <div
                  className="w-[5vw] h-[10vh] bg-gray-600  rounded-md"
                  draggable="true"
                >
                  a
                </div>
                <div
                  className="w-[5vw] h-[10vh] bg-gray-600 rounded-md"
                  draggable="true"
                >
                  a
                </div>
                <div
                  className="w-[5vw] h-[10vh]  bg-gray-600 rounded-md"
                  draggable="true"
                >
                  a
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center text-white py-10">
            <h2 className="text-fblue   fontbold">COURSE</h2>
            <p className="text-center w-[80vw]">
              You can use any value defined in your opacity scale, or use
              arbitrary values if you need to deviate from your design tokens
              arbitrary values if you need to deviate from your design tokens.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="w-[80vw] py-5 laptop:flex flex-row flex-wrap
             items-center gap-10 justify-center "
            >
              <div className="flex justify-center py-5 mobile-sm:basis-4/5 tablet:basis-2 laptop:basis-1">
                <div className="bg-white mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col">
                  <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] laptop:h-[20vh] mt-4 rounded-2xl"></div>
                  <div></div>
                </div>
              </div>

              <div className="flex justify-center py-5 mobile-sm:basis-4/5 tablet:basis-2 laptop:basis-1">
                <div className="bg-white mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col">
                  <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] laptop:h-[20vh] mt-4 rounded-2xl"></div>
                  <div></div>
                </div>
              </div>
              <div className="flex justify-center py-5 mobile-sm:basis-4/5 tablet:basis-2 laptop:basis-1">
                <div className="bg-white mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col">
                  <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] laptop:h-[20vh] mt-4 rounded-2xl"></div>
                  <div></div>
                </div>
              </div>
              <div className="flex justify-center py-5 mobile-sm:basis-4/5 tablet:basis-2 laptop:basis-1">
                <div className="bg-white mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col">
                  <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] laptop:h-[20vh] mt-4 rounded-2xl"></div>
                  <div></div>
                </div>
              </div>
              <div className="flex justify-center py-5 mobile-sm:basis-4/5 tablet:basis-2 laptop:basis-1">
                <div className="bg-white mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col">
                  <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh] laptop:h-[20vh] mt-4 rounded-2xl"></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
