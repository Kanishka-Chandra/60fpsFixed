'use client'
import avatar from '@/components/public/images/avatar-01.jpg'
import { useState } from 'react'
import Link from 'next/link'
import ModalVideo from '@/components/modal-video'
import VideoThumb from '@/public/images/explainer.jpg'
import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import { FlipWords } from './ui/FlipWords'
import YouTube, { YouTubeEvent } from 'react-youtube';  // Ensure that you have the correct type import

export default function Hero60() {
    const onPlayerReady = (event: YouTubeEvent) => { // Explicitly type the parameter
        event.target.mute();
        event.target.playVideo();
    };

    const opts = {
        height: '130%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            loop: 1,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
        },
    };

    return (

        <section className="relative overflow-hidden h-[800px] md:h-[750px]  ">
      {/* Bg */}
      <div className="absolute inset-0 bg-black -z-10 " />
      <div className="absolute inset-0 flex justify-center items-center -mt-11 -mr-6 z-[-1]">
      <iframe
            id="youtube-video"
            width="110%"
            height="130%"
            src="https://www.youtube-nocookie.com/embed/oWeFw5ZZpcg?modestbranding=1&showinfo=0&rel=0&autoplay=1&loop=1&controls=0&mute=1&iv_load_policy=3&fs=0&disablekb=1&playlist=oWeFw5ZZpcg"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // style={{ position: "absolute", top: 0, left: 0 }}
            className='inset-0 '
        ></iframe>
      </div>
      <div
              data-aos="fade-up"
              data-aos-delay="100">
        <h1 className=" text-gray-800 lg:text-black text-[16rem] font-bold font -mt-24 ">
                     <a className="">*</a>

              </h1>
        </div>
      <div className="flex flex-col justify-between md:items-end items-center  gap-10  px-4 md:px-6 ">
        

        <div className='pl-[151px] md:pl-0'>

        <div className='border-2 border-white  py-1 pl-1 pr-24 lg:pr-44 lg:py-3 lg:pl-3 text-xl md:text-6xl text-black font-bold font-poppins'>
        Absolutist<br />addition
        </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-5 md:pt-52  md:flex-row md:justify-between md:w-full " >
           <div className="flex justify-center lg:justify-start  items-center text-white font-semibold mb-2  pt-24 pl-[62px] md:pl-0 md:w-2/3 md:pt-0 ">
                <div className="text-3xl  md:text-3xl"> Simplify</div>
                <div className="w-72 md:w-full">
                < FlipWords className='text-3xl md:text-3xl text-red-700 lg:text-red-900' words={['addition', 'subtraction', 'division', 'multiplication']}/>
                </div>
              </div>

              <div className="flex justify-end   items-center gap-3 md:w-full lg:w-1/3">

              <Link
                                        className="btn inline-flex items-center bg-white text-gray-900 lg:text-gray-100 lg:bg-black  hover:bg-gray-700 group  px-4 py-2"
                                        href="/schedule-call"
                                    >
                                        Schedule A Call
                                        <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="8"
                                            >
                                                <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
                                            </svg>
                                        </span>
                                    </Link>

                                    <Link
                                        className="btn flex items-center border-white text-gray-200 lg:border-black lg:text-gray-800 border-solid border-2 group px-4 "
                                        href="/schedule-call"
                                    >
                                        Schedule A Call
                                        <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">hey</span>
                                    </Link>
                  {/* <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                  hey
                </span> */}

              </div>
        </div>
        
      </div>
     
    </section>

        // <section className="relative overflow-hidden ">
        //     {/* Bg */}
        //     <div
        //         className="absolute inset-0 bg-white pointer-events-none -z-10"
        //         aria-hidden="true"
        //     />
        //     <div className="absolute top-0 left-0 w-full h-full object-cover -z-10" data-aos-delay="400">
        //     <iframe
        //     id="youtube-video"
        //     width="110%"
        //     height="130%"
        //     src="https://www.youtube-nocookie.com/embed/oWeFw5ZZpcg?modestbranding=1&showinfo=0&rel=0&autoplay=1&loop=1&controls=0&mute=1&iv_load_policy=3&fs=0&disablekb=1&playlist=oWeFw5ZZpcg"
        //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        //     // style={{ position: "absolute", top: 0, left: 0 }}
        // ></iframe>



        //         {/* <YouTube
        //             videoId="oWeFw5ZZpcg"
        //             opts={opts}
        //             onReady={onPlayerReady}
        //             className="absolute -mt-40  top-0 left-0 w-full h-full"
        //         /> */}


        //     </div>

        //     <div className="mx-auto px-4 sm:px-6">
        //         <div className="lg:pt-28 lg:pb-16 py-20 md:pt-0 md:pb-16 md:pt-0 md:pb-20">
        //             {/* Hero content */}
        //             <div className="md:flex ">
        //                 <div className="ml-auto md:w-3/5 lg:block hidden" data-aos="fade-up" data-aos-delay="100">
        //                     <h1 className="text-12xl md:text-xxxl font-extrabold font-cabinet-grotesk text-black lg:mb-80">

        //                         <a className="md:-ml-8">*</a>
        //                     </h1>

                            
        //                 </div>
        //                 <div className="md:pt-40 md:w-2/5" data-aos="fade-up" data-aos-delay="200">
        //                     <p className=" border-2 border-white text-lg md:text-6xl text-black font-bold font-poppins lg:mb-80 " data-aos="fade-up" data-aos-delay="100">
        //                         Absolutist<br />addition
        //                     </p>


        //                      <div className=" text-lg md:text-3xl text-black font-bold font-poppins md:mb-8 px-4 sm:px-6 md:text-right md:absolute md:bottom-0 md:left-0">
        //                         Absolutist certain
        //                         <FlipWords className='text-red-900' words={['addition', 'subtraction', 'division', 'multiplication']} />
        //                     </div>
        //                     <div className="md:ml-48 flex md:absolute md:bottom-0 md:mb-8 justify-center items-center">
                           
        //                         <div className="mr-4">
        //                             <Link
        //                                 className="btn inline-flex items-center text-gray-100 bg-black hover:bg-gray-700 group"
        //                                 href="/schedule-call"
        //                             >
        //                                 Schedule A Call
        //                                 <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
        //                                     <svg
        //                                         className="fill-current"
        //                                         xmlns="http://www.w3.org/2000/svg"
        //                                         width="16"
        //                                         height="8"
        //                                     >
        //                                         <path d="m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z" />
        //                                     </svg>
        //                                 </span>
        //                             </Link>
        //                         </div>

        //                         <div>
        //                             <Link
        //                                 className="btn inline-flex items-center border-black text-gray-800 border-solid border-2 group md:mx-4"
        //                                 href="/schedule-call"
        //                             >
        //                                 Schedule A Call
        //                                 <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">hey</span>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
                    

        // </section>
    );
}
