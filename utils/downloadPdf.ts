import { Document } from "@/components/document/DocumentBrochure";

// Declare window.fs type
declare global {
  interface Window {
    fs: {
      readFile: (filename: string) => Promise<Uint8Array>;
    };
  }
}

// Types

// Utility function to download PDF
export const downloadPDF = async (doc: Document) => {
  try {
    // Gunakan fetch untuk mengambil file dari folder public
    const response = await fetch(`/documents/${doc.fileName}`);
    if (!response.ok) throw new Error("Failed to fetch PDF");

    // Convert response ke blob
    const blob = await response.blob();

    // Buat URL untuk blob
    const url = window.URL.createObjectURL(blob);

    // Buat element anchor untuk download
    const link = document.createElement("a") as HTMLAnchorElement;
    link.href = url;
    link.download = doc.fileName;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup
    window.URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error("Error downloading PDF:", error);
    return false;
  }
};
