import exp from "constants";
import Papa from "papaparse";

/**
 * Fetch and parse CSV data from a given URL.
 * @param {string} url - The path or URL to the CSV file.
 * @returns {Promise<any[]>} - Parsed data as an array of objects.
 */
export const fetchCSVData = async (url: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    fetch(url) // Use the provided URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        Papa.parse(text, {
          header: true, // Treat the first row as headers
          skipEmptyLines: true, // Ignore empty lines
          complete: (results) => resolve(results.data), // Return parsed data
          error: (err: any) => reject(err), // Handle parsing errors
        });
      })
      .catch((error) => reject(error)); // Handle network errors
  });
};


export const SOCIAL_LINKS = [
    {
      links: [
        {
          title: "Facebook",
          icon: "/icons/facebook.png",
          link: "https://www.facebook.com/tangphucofficial/",
        },
        {
          title: "Instagram",
          icon: "/icons/instagram.png",
          link: "https://www.instagram.com/tang.phuc2205/",
        },
  
        {
          title: "Threads",
          icon: "/icons/threads.png",
          link: "https://www.threads.net/@tang.phuc2205",
        },
      ],
    },
    {
      links: [
        {
          title: "Spotify",
          icon: "/icons/spotify.png",
          link: "https://open.spotify.com/artist/5TSjLaWHQ69GaALubAM7gR",
        },
        {
          title: "Youtube",
          icon: "/icons/youtube.png",
          link: "https://www.youtube.com/channel/UCqosN4QGo-pmyWVoaiVAIEA",
        },
  
        {
          title: "Apple Music",
          icon: "/icons/apple-music.png",
          link: "https://music.apple.com/us/artist/t%C4%83ng-ph%C3%BAc/1493760964",
        },
      ],
    },
  ];

export const DEVICE = {
    MOBILE: "mobile",
    TABLET: "tablet",
    DESKTOP: "desktop",
  };

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "https://www.tangphucofficial.com/", label: "Hải Ly ỏn ẻn" },
    { href: "/fansite", label: "đi vào gừng" },
    { href: "/about", label: "đi tìm củi" },
    { href: "/schedule", label: "xây đập" },
  ];

export const DAYS_OF_WEEK = [
    { full: "Thứ hai", short: "Hai" },
    { full: "Thứ ba", short: "Ba" },
    { full: "Thứ tư", short: "Tư" },
    { full: "Thứ năm", short: "Năm" },
    { full: "Thứ sáu", short: "Sáu" },
    { full: "Thứ bảy", short: "Bảy" },
    { full: "Chủ nhật", short: "CN" },
  ];
  