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
  <div className="flex flex-col gap-6 rounded-lg bg-white p-4 shadow lg:flex-row lg:items-center">
    <Image
      src="/placeholder-image.png"
      alt={`${document.title} thumbnail`}
      width={144}
      height={144}
      className="h-36 w-full rounded-lg object-cover object-center lg:w-36"
    />

    <div className="flex-grow">
      <h5 className="text-xl font-bold text-[#222222] lg:text-2xl">
        {document.title}
      </h5>
      <p>{document.description}</p>
    </div>

    <Button
      className={`w-fit bg-[#009933] hover:bg-[#009933]/70`}
      onClick={() => onDownload(document.id)}
      disabled={isDownloading}
    >
      {isDownloading ? "Mengunduh..." : "Unduh"}
    </Button>
  </div>
);
