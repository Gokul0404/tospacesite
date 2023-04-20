import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { eventimg } from "../event_section/event_img";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import { Pagination, FreeMode, Autoplay, EffectFade, Navigation } from "swiper";
import EventsCard from "./event_data";
import { useSwiperSlide } from "swiper/react";
import "./event.css";

function Event() {
  const swiperSlide = useSwiperSlide();
  return (
    <>
      <div className="event_section  eventbg text-white pb-5 mobile-sm:hidden tablet:block">
        <div className="event_heading text-center pt-10 ">
          <h1 className="fontbold text-fblue text-desk1">Events</h1>
          <h5 className="mobile-sm:text-justify mobile-sm:p-1 tablet:text-center ">
            Instructors from around the world teach millions of students on
            Udemy. <br />
            We provide the tools and skills to teach what you love.
          </h5>
        </div>
        <div className=" pt-[8vh] laptop:block mobile-sm:hidden">
          {/* labtop */}

          <div className="event_images flex gap-x-[5vh] laptop:flex-row laptop-lg:flex-row laptop:items-start py-5">
            <div className="event_main flex gap-x-1 ">
              <div className="laptop-lg:w-[20vw]    laptop:w-[20vw] ">
                <div className="section-1 flex flex-col items-end mt-[15vh] gap-y-1 4k:mt-[19vh] desktop-lg-4k:mt-[16.6vh]">
                  <div className="text-black bg-slate-700 w-[200px] h-[126px] overflow-hidden">
                    <Swiper
                      spaceBetween={30}
                      effect={"fade"}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      modules={[EffectFade, Autoplay]}
                      className="mySwiper w-[100%] h-[100%]"
                    >
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="text-black flex flex-row gap-x-1">
                    <div className="small_image w-[120px] h-[70px] bg-slate-700 overflow-hidden">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[120px] h-[70px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="small_image w-[120px] h-[94px] bg-slate-700 overflow-hidden">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[120px] h-[94px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGolMjBzZXR8ZW58MHx8MHx8&w=1000&q=80" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="w-[40vw] desktop-lg:h-[25vh]   ">
                  <div className="section_2 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[107px] h-[90px] laptop:mt-[16.9vh] overflow-hidden desktop-lg:mt-[15vh] desktop-lg-4k:mt-[16.65vh] ">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[107px] h-[90px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGolMjBzZXR8ZW58MHx8MHx8&w=1000&q=80"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://ma-hub.imgix.net/wp-images/2022/01/07210813/DJ-Sound-Effects-scaled.jpg"
                          />
                        </SwiperSlide>
                      </Swiper>
                      ;
                    </div>
                    <div className="text-black bg-slate-700 w-[140px] h-[197px] laptop-lg:mt-[0vh] overflow-hidden desktop-lg-4k:mt-[4.5vh]  ">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[140px] h-[197px]"
                      >
                        <SwiperSlide>
                          <img
                            className="h-[100%] w-[100%]"
                            src="https://swiperjs.com/demos/images/nature-1.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%] w-[100%]"
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%] w-[100%]"
                            src="https://swiperjs.com/demos/images/nature-3.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%] w-[100%]"
                            src="https://swiperjs.com/demos/images/nature-4.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%] w-[100%]"
                            src="https://images.freeimages.com/images/previews/f3b/mixer-1641816.jpg"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="text-black bg-slate-700 w-[208px] h-[157px]  laptop:mt-[5.8vh] overflow-hidden desktop-lg:mt-[5.1vh] desktop-lg-4k:mt-[8.7vh]  ">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[208px] h-[157px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://i.natgeofe.com/n/88420695-3555-4f84-90be-8f7903a1a57e/01_58_51a_remotesite-2-frame-8_4x3.jpg"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="text-black bg-slate-700 w-[146px] h-[91px] laptop:mt-[15.3vh] overflow-hidden desktop-lg:mt-[13.6vh] desktop-lg-4k:mt-[15.5vh] ">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[146px] h-[91px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://d1y8sb8igg2f8e.cloudfront.net/images/drones-the-science-fiction-techno.2e16d0ba.fill-1200x630.jpg"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    {/* <div className="text-black bg-slate-700 w-[146px] h-[72px] laptop:mt-[18vh] desktop-lg:mt-[16vh] desktop-lg-4k:mt-[17.5vh]  ">
                      <img
                        src="https://imagify.io/blog/wp-content/uploads/2017/03/pexels-firmbee-6961859.jpg"
                        className="w-[100%] h-[100%]"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="w-[35vw]   ">
                  <div className="section_3 flex flex-row gap-x-1">
                    <div className="text-black bg-slate-700 w-[140px] h-[213px] overflow-hidden">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[140px] h-[213px]"
                      >
                        <SwiperSlide>
                          <img
                            className="h-[213px] w-[140px]"
                            src="https://swiperjs.com/demos/images/nature-1.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[213px] w-[140px]"
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[213px] w-[140px]"
                            src="https://swiperjs.com/demos/images/nature-3.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[213px] w-[140px]"
                            src="https://swiperjs.com/demos/images/nature-4.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://i.natgeofe.com/n/88420695-3555-4f84-90be-8f7903a1a57e/01_58_51a_remotesite-2-frame-8_4x3.jpg"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[213px] w-[140px]"
                            src="https://www.arianespace.com/wp-content/uploads/cache/2015/08/ariane5/3245969462.png"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="text-black bg-slate-700 w-[212px] h-[169px] overflow-hidden">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[212px] h-[169px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className=" w-[212px] h-[169px]"
                            src="https://static.ffx.io/images/$zoom_0.3424%2C$multiply_0.5855%2C$ratio_1%2C$width_1059%2C$x_412%2C$y_173/t_crop_custom/q_86%2Cf_auto/94a0095de4acf788a1455caa6ff2679f4282856a"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flexible flex flex-col gap-y-1">
                      <div className="text-black bg-slate-700 w-[146px] h-[72px] overflow-hidden">
                        <Swiper
                          spaceBetween={30}
                          effect={"fade"}
                          loop={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[EffectFade, Autoplay]}
                          className="mySwiper w-[146px] h-[72px]"
                        >
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img
                              className="w-[100%] h-[100%]"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhagA5gXfELxHxK79lDV7bh4UaC5ZaGc6IA&usqp=CAU"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div className="text-black bg-slate-700 w-[146px] h-[129px] overflow-hidden">
                        <Swiper
                          spaceBetween={30}
                          effect={"fade"}
                          loop={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[EffectFade, Autoplay]}
                          className="mySwiper w-[146px] h-[129px]"
                        >
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="https://media.wired.com/photos/5b52582f59269e342890a45a/1:1/w_1800,h_1800,c_limit/Satellite_FHM56J.jpg" />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                    <div className="text-black bg-slate-700 w-[146px] h-[129px] overflow-hidden">
                      <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[EffectFade, Autoplay]}
                        className="mySwiper w-[146px] h-[129px]"
                      >
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            className="h-[100%]"
                            src="https://s3-media0.fl.yelpcdn.com/bphoto/cc_52sPL6SCaVRDop2QhBw/348s.jpg"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* content */}

            <div className="event_main_content   laptop:w-[35vw]  laptop:overflow-y-scroll laptop:mt-12">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 2500 }}
              >
                <SwiperSlide>
                  <h1 className="text-justify ">
                    &nbsp;&nbsp;&nbsp;&nbsp;Instructors from around the world
                    teach millions of students on Udemy. We provide the tools
                    and skills to teach what you love. Instructors from around
                    the world teach millions of students on Udemy. We provide
                    the tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy. We provide the tools and skills to teach
                    what you love.Instructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love.Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy.
                  </h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;tructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love. Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy. We provide the tools and skills to teach
                    what you love.Instructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love.Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy.
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <h1 className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;tructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love. Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy. We provide the tools and skills to teach
                    what you love.Instructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love.Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy.
                  </h1>
                </SwiperSlide>

                <SwiperSlide>
                  <h1 className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;tructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love. Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy. We provide the tools and skills to teach
                    what you love.Instructors from around the world teach
                    millions of students on Udemy. We provide the tools and
                    skills to teach what you love.Instructors from around the
                    world teach millions of students on Udemy. We provide the
                    tools and skills to teach what you love.Instructors from
                    around the world teach millions of students on Udemy. We
                    provide the tools and skills to teach what you
                    love.Instructors from around the world teach millions of
                    students on Udemy.
                  </h1>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="  text-black pt-10">
          {/* //delete the swiper h-[100%] */}
          <Swiper
            onSlideChange={(e) => e.slides.map((res) => console.log(res))}
            onSwiper={(swiper) => console.log(swiper)}
            slidesPerView={3}
            spaceBetween={35}
            freeMode={false}
            centeredSlides={true}
            loop={true}
            autoplay={{
              // pauseOnMouseEnter: false,
              delay: 2500,
              // disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="m "
          >
            {EventsCard.map((cards) => (
              <SwiperSlide key={cards.url}>
                <div class="w-[60%]    border border-gray-200 round shadow dark:bg-gray-800 dark:border-gray-700 m-auto bg-white swipe ">
                  <div className="c">
                    <a href="#">
                      <img class="p-1 h-[30vh]" src={cards.url} alt="" />
                    </a>
                  </div>

                  <div class="px-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {cards.title}
                      </h5>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/*
       */}

      {/*  */}
    </>
  );
}

export default Event;
