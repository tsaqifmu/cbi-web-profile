"use client";

import { FC, ReactNode, useState } from "react";

import { cn } from "@/lib/utils";
import { downloadPDF } from "@/utils/downloadPdf";

import { Button } from "@/components/ui/button";
import ContainerSection from "@/components/layout/container";
import { DocumentCard } from "@/components/document/DocumentCard";

enum DocumentType {
  BROCHURE = "brochure",
  CERTIFICATE = "certificate",
}

export interface Document {
  id: number;
  title: string;
  description: string;
  type: DocumentType;
  fileName: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Brosur Produk 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    type: DocumentType.BROCHURE,
    fileName: "contoh-file.pdf",
  },
  {
    id: 2,
    title: "Brosur Produk 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    type: DocumentType.BROCHURE,
    fileName: "contoh-file.pdf",
  },
  {
    id: 3,
    title: "Brosur Produk 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    type: DocumentType.BROCHURE,
    fileName: "contoh-file.pdf",
  },
  {
    id: 4,
    title: "Sertifikat Pupuk 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    type: DocumentType.CERTIFICATE,
    fileName: "contoh-file.pdf",
  },
  {
    id: 5,
    title: "Sertifikat Pupuk 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    type: DocumentType.CERTIFICATE,
    fileName: "contoh-file.pdf",
  },
];

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TabButton: FC<TabButtonProps> = ({ isActive, onClick, children }) => (
  <Button
    onClick={onClick}
    variant={"ghost"}
    className={cn(
      "rounded-full px-4 py-2 transition-colors",
      isActive
        ? "bg-[#009933] text-white hover:bg-[#009933] hover:text-white"
        : "border border-[#EEEEEE] bg-[#FDFDFD] text-[#666666] hover:bg-[#009933] hover:text-white",
    )}
  >
    {children}
  </Button>
);

const DocumentBrochure = () => {
  const [activeTab, setActiveTab] = useState<DocumentType>(
    DocumentType.BROCHURE,
  );
  const [isDownloading, setIsDownloading] = useState<number | null>(null);

  const filteredDocument = documents.filter(
    (document) => document.type === activeTab,
  );

  const handleDownload = async (documentId: number) => {
    setIsDownloading(documentId);

    try {
      const document = documents.find((doc) => doc.id === documentId);
      if (!document) {
        throw new Error("Document not found");
      }

      const success = await downloadPDF(document);
      if (!success) {
        throw new Error("Failed to download document");
      }
    } catch (error) {
      console.error(error);
      // Tambahkan toast atau alert di sini
      // contoh dengan toast dari shadcn/ui:
      // toast.error("Gagal mengunduh dokumen");
    } finally {
      setIsDownloading(null);
    }
  };

  return (
    <section>
      <ContainerSection>
        <div className="mb-8 flex gap-4">
          <TabButton
            isActive={activeTab === DocumentType.BROCHURE}
            onClick={() => setActiveTab(DocumentType.BROCHURE)}
          >
            Brosur
          </TabButton>
          <TabButton
            isActive={activeTab === DocumentType.CERTIFICATE}
            onClick={() => setActiveTab(DocumentType.CERTIFICATE)}
          >
            Sertifikat Pupuk
          </TabButton>
        </div>

        {/* Card Document */}
        <div className="space-y-6">
          {filteredDocument.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
              onDownload={handleDownload}
              isDownloading={isDownloading === document.id}
            />
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default DocumentBrochure;
