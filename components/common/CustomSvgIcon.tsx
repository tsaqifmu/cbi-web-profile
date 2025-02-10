"use client";

import { useEffect, useState } from 'react';

export const getSecureUrl = (url: string) => {
  if (!url) return url;

  if (url.startsWith("https://")) return url;

  if (url.startsWith("http://")) {
    return url.replace("http://", "//");
  }

  return url;
};

interface CustomSvgIconProps {
  url: string;
  className?: string;
}

const CustomSvgIcon = ({
  url,
  className = "h-8 w-8 stroke-[#C46617] group-hover:stroke-white transition-colors duration-300 lg:h-12 lg:w-12",
}: CustomSvgIconProps) => {
  const [svgContent, setSvgContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  console.log("ini url svg", url)
  useEffect(() => {
    const fetchSvg = async () => {
      if (!url?.endsWith(".svg")) {
        setError("URL must end with .svg");
        return;
      }

      try {
        const secureUrl = getSecureUrl(url);
        const response = await fetch(secureUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let svgText = await response.text();

        svgText = svgText
          .replace(/fill="[^"]*"/g, "")
          .replace(/stroke="[^"]*"/g, "")
          .replace(/style="[^"]*fill:[^;]*;/g, "")
          .replace(/style="[^"]*stroke:[^;]*;/g, "");

        svgText = svgText.replace(
          /<svg/,
          `<svg class="${className}" fill="none"`,
        );

        setSvgContent(svgText);
        setError(null);
      } catch (error) {
        console.error("Error fetching SVG:", error);
        setError(error instanceof Error ? error.message : "Failed to load SVG");
      }
    };

    if (url) {
      fetchSvg();
    }
  }, [url, className]);

  if (error) {
    return <div className="text-sm text-red-500">Error: {error}</div>;
  }

  if (!svgContent) {
    return (
      <div className="h-8 w-8 animate-pulse bg-gray-200 lg:h-12 lg:w-12" />
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default CustomSvgIcon;
