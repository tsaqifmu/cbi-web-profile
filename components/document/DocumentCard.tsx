import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Document } from "@/components/document/DocumentBrochure";

interface DocumentCardProps {
  document: Document;
  onDownload: (id: number) => void;
  isDownloading: boolean;
}

export const DocumentCard: FC<DocumentCardProps> = ({
  document,
  onDownload,
  isDownloading,
}) => (
  <div className="flex flex-col gap-6 rounded-lg bg-white p-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.1)] lg:flex-row lg:items-center lg:p-8">
    <Image
      src="/placeholder-image.png"
      alt={`${document.title} thumbnail`}
      width={144}
      height={144}
      className="flex h-36 w-full flex-none rounded-lg object-cover object-center lg:w-36"
    />

    <div className="flex-grow">
      <h5 className="text-xl font-bold text-[#222222] lg:text-2xl">
        {document.title}
      </h5>
      <p className="mt-4">{document.description}</p>
    </div>

    <Button
      className={`w-fit bg-[#009933] hover:bg-[#009933]/70 lg:text-base xl:text-xl`}
      onClick={() => onDownload(document.id)}
      disabled={isDownloading}
    >
      {isDownloading ? "Mengunduh..." : "Unduh"}
    </Button>
  </div>
);
