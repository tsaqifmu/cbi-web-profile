"use client";
import { useEffect, useState } from 'react';

interface CustomSvgIconProps {
  url: string;
}

const CustomSvgIcon = ({ url }: CustomSvgIconProps) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(url);
        let svgText = await response.text();

        // Remove any existing fill and stroke colors
        svgText = svgText
          .replace(/fill="[^"]*"/g, "")
          .replace(/stroke="[^"]*"/g, "")
          .replace(/style="[^"]*fill:[^;]*;/g, "")
          .replace(/style="[^"]*stroke:[^;]*;/g, "");

        // Add the SVG element with proper classes
        svgText = svgText.replace(
          /<svg/,
          `<svg class="h-8 w-8 stroke-[#C46617] group-hover:stroke-white transition-colors duration-300 lg:h-12 lg:w-12" fill="none"`,
        );

        setSvgContent(svgText);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };
    fetchSvg();
  }, [url]);

  if (!url?.endsWith(".svg")) return null;

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default CustomSvgIcon;
