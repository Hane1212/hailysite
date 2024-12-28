"use client";
import '../globals.css';
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Container from "@/themes/Container";
import Navbar from '@/components/Navbar';
import {fetchCSVData} from "@/utils/constants";

const AboutPage = () => {

  // State to store fetched data
  const [gameShows, setGameShows] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);
  // const [gameShows, setGameShows] = useState(typeof window !== 'undefined' ? 'Peter' : 'Rick');

  
  // Fetch data when the component loads
  useEffect(() => {
    setIsClient(true); // Marks the component as rendered on the client
    const loadGameShows = async () => {
      try {
        const data = await fetchCSVData("/data/gameShow.csv");
        setGameShows(data); // Set fetched data
        // console.log("Fetched Data:", data);
      } catch (error) {
        console.error("Failed to fetch game shows:", error);
      }
    };
    loadGameShows();
  }, []);

  // Avoid rendering on the server side to fix hydration mismatch
  if (!isClient) return null;

  return (

    // <div style={{ backgroundColor: "#FACEB3", height: "100vh", width: "100vw" }}>
    <div>

    <Container style="my-12 esm:my-0 esm:mt-0 ">
    {/* <Navbar/>
    <div className="video-container w-[60%] esm:w-full esm:h-80 esm:mb-10 h-[500px] mb-12 mx-auto mt-60">
        <iframe
          src={`https://www.youtube.com/embed/MfvuNYlLaM8`}
          className="w-full h-full"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

    <div className="px-6 py-10 rounded-lg shadow-lg esm:px-4 esm:py-6 relative bg-custom-gradient flex justify-center">
      <div className="w-[80%] esm:w-full"> {/* Chiều rộng đầy đủ cho màn hình nhỏ */}
        <h2 className="text-center text-xl text-textSecondaryTwo mb-2 esm:text-lg">Tìm hiểu thêm về Tăng Phúc tại đây!</h2>
        <h1 className="text-center text-4xl text-textSecondaryTwo font-semibold mb-10 esm:text-2xl"> Hải Ly </h1>

        {/* Scrollable Container */}
        <div className="rounded-lg rounded-md h-[500px] overflow-y-auto esm:h-[400px]"> {/* Giảm chiều cao trên mobile */}
          {gameShows.map((show, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-none p-6 esm:p-4 flex-col esm:items-start" // Điều chỉnh flex thành cột trên mobile
            >
              {/* Left Section - Date, Role, Title, Description */}
              <div className="flex items-center space-x-6 w-full esm:flex-col esm:items-start esm:space-x-0 esm:space-y-2"> {/* Stack cột cho mobile */}
                {/* Date Section */}
                <div className="w-[15%] text-sm font-light text-textSecondaryTwo whitespace-nowrap esm:w-full">
                  {show.date}
                </div>

                {/* Role Section */}
                <div className="w-[15%] text-sm font-medium text-textSecondaryTwo whitespace-nowrap esm:w-full">
                  {show.role}
                </div>

                {/* Title and Description - Displayed Vertically */}
                <div className="w-[70%] flex flex-col esm:w-full">
                  <h3 className="text-textSecondaryTwo font-bold mb-1">{show.title}</h3>
                  <p className="text-textSecondaryTwo">{show.descipt}</p>
                </div>
              </div>

              {/* Right Section - Button */}
              <div className="mt-3 esm:mt-2 self-end esm:self-start"> {/* Điều chỉnh margin và căn chỉnh trên mobile */}
                <a
                  href={show.showLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#CC5C62] text-white uppercase text-sm font-semibold rounded-md hover:bg-blue-800 whitespace-nowrap esm:px-4 esm:py-1 esm:text-xs"
                >
                  Xem Ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
    </div>
    
  );
};

export default AboutPage;
