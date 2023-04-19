import React from "react";

export default function Course() {
  return (
    <div>
      <div className="bg-black w-screen h-[100vh] pt-[13vh]">
        <div className="w-screen bg-gray-400 py-6 course_bg_img">
          <div className="flex justify-start pl-[10%] gap-x-[3%] ">
            <div className=" w-[70vw] h-[80vh] outline outline-white rounded-[20px] overflow-hidden ">
              <div className=" bg-white opacity-40 w-[100%] h-[100%] ">d</div>
            </div>
            <div className="!w-[10vw] h-[80vh] relative flex justify-center items-center">
              <div className="w-[100%] absolute flex justify-center flex-col items-center gap-5 text-center">
                <div className="w-[5vw] h-[10vh]  bg-gray-600 rounded-md">
                  a
                </div>
                <div className="w-[5vw] h-[10vh] bg-gray-600 rounded-md">a</div>
                <div className="w-[5vw] h-[10vh] bg-gray-600 rounded-md">a</div>
                <div className="w-[5vw] h-[10vh] bg-gray-600 rounded-md">a</div>
                <div className="w-[5vw] h-[10vh]  bg-gray-600 rounded-md">
                  a
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
