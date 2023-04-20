import React, { useState } from "react";
import "../course/Section.css";
import drop from '../course/images/drop.png'
import { coursedata } from "../course/SectionData";
export default function Course() {
  const [dragStatus, setdragStatus] = useState(false);
  const [dragData, setDragData] = useState(false);
  return (
    <div>
      <div className="bg-black w-screen  pt-[13vh] ">
        <div
          className="w-screen bg-gray-400 py-6 course_bg_img"
          draggable="false"
        >
          <div className="flex justify-start pl-[10%] gap-x-[3%] ">
            <div className=" w-[70vw] h-[80vh] outline outline-white rounded-[20px] overflow-hidden ">
              {/* screen */}
              {console.log(dragData)}
              <div
                className=" bg-white  w-[100%] h-[100%] "
                onDragEnter={(e) => setdragStatus(true)}
              >
                {dragStatus ? (
                  <video autoPlay muted loop className=" object-cover">
                    <source src={dragData} />
                  </video>
                ) : (
                  <img
                    className="object-cover w-full h-full border-[8px] border-black "
                    src={drop}
                  />
                )}
              </div>
            </div>

            {/* tool */}
            <div className="w-[10vw] h-[80vh] relative flex justify-center items-center">
              <div className="w-[100%]  flex justify-center flex-col items-center gap-5 text-center">
                <div
                  className="w-[70px] h-[65px]  bg-gray-600 rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v1.mp4");

                    // "https://media.tenor.com/evhtGNYJy3sAAAAC/bucksin6-austinpowersjohnson.gif"
                  }}
                >
                  first
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600 rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData(
                      "./v2.mp4"
                    );
                  }}
                >
                  second
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600  rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v3.mp4");
                  }}
                >
                  third
                </div>
                <div
                  className="w-[70px] h-[65px] bg-gray-600 rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v4.mp4");
                  }}
                >
                  fourth
                </div>
                <div
                  className="w-[70px] h-[65px]  bg-gray-600 rounded-md"
                  draggable="true"
                  onDragStart={() => {
                    setdragStatus(false);
                    setDragData("./v5.mp4");
                  }}
                >
                  fifth
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center text-white py-[10vh]">
            <h2 className="text-fblue   fontbold">COURSE</h2>
            <p className="text-center w-[80vw]">
              You can use any value defined in your opacity scale, or use
              arbitrary values if you need to deviate from your design tokens
              arbitrary values if you need to deviate from your design tokens.
            </p>
          </div>

          <div className={`flex flex-row flex-wrap w-screen justify-center  `}>
            {coursedata.map((res) => {
              return (
                <>
                  <div className="laptop:basis-1/4 py-10 px-10">
                    <div
                      className={`bg-white  mobile-sm:w-[80vw] mobile-sm:h-[70vh] mobile-md:w-[60vw] mobile-md:h-[75vh] tablet:w-[40vw] laptop:w-[20vw] laptop:h-[65vh] rounded-2xl flex items-center flex-col`}
                    >
                      <div className="bg-gray-400 w-[90%] mobile-sm:h-[30vh]  laptop:h-[20vh] mt-4 rounded-2xl"></div>
                      <div className="text-mes self-start pl-5 pt-3 gap-y-2 flex flex-col">
                        <div className="flex">
                          <p className="minih">COURSE TITLE:</p>
                          <p>{res.title}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">COURSE DESCRIPTION:</p>
                          <p>{res.description}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">DURATION:</p>
                          <p>{res.duration}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">PREREQUISITES:</p>
                          <p>{res.prerequisites}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">COURSE FORMATE:</p>
                          <p>{res.formate}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">COURSE MATERIALS:</p>
                          <p>{res.materials}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">ASSESMENT AND GRADING:</p>
                          <p>{res.assesment}</p>
                        </div>
                        <div className="flex">
                          <p className="minih">COURSE FEE:</p>
                          <p>{res.fee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
