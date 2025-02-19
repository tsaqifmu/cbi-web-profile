"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  // Mapping URL ke judul Bahasa Indonesia
  const getIndonesianTitle = (path: string): string => {
    const pathMap: { [key: string]: string } = {
      "/": "Beranda",
      "/about-us": "Tentang Kami",
      "/product": "Produk & Layanan",
      "/product/agriculture": "Pertanian",
      "/product/livestock": "Peternakan",
      "/product/fishery": "Perikanan",
      "/news": "Berita",
      "/blog": "Blog",
      "/contact": "Kontak",
      "/documents": "Brosur & Dokumen",
      "/career": "Karir",
      // Tambahkan mapping URL lainnya di sini
    };

    return pathMap[path] || path.split("/").pop()?.replace(/-/g, " ") || "";
  };

  // Mengubah path menjadi array breadcrumb
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter((segment) => segment !== "");
    
    const breadcrumbs = segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        label: getIndonesianTitle(path),
        path,
      };
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className={className}>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto w-full px-6 pt-10 lg:max-w-7xl lg:px-9 xl:px-0"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <Home className="h-4 w-4" />
              <span className="ml-2">Beranda</span>
            </Link>
          </li>

          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-gray-900">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.path}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;