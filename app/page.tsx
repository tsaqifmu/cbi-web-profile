import { ApiPath, apiRequest } from "@/utils/apiClient";
import { getDashboardQuery } from "@/utils/queries/dashboardQuery";

import { DashboardResponse } from "@/types/responseTypes";

import WhySection from "@/components/home/WhySection";
import HeroSection from "@/components/home/HeroSection";
import OurImpactSection from "@/components/home/OurImpactSection";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import ProductServiceSection from "@/components/home/ProductServiceSection";
import BannerContactSection from "@/components/home/BannerContactSection";

// Fungsi untuk mengambil data dari API
async function getDashboardData() {
  try {
    const query = getDashboardQuery();
    const { data } = await apiRequest<DashboardResponse>({
      path: ApiPath.DASHBOARD,
      queryParams: query,
    });
    return data;
  } catch (e) {
    console.error("Error fetching dashboard data:", e);
    return null;
  }
}

// Fungsi generateMetadata untuk metadata dinamis
export async function generateMetadata() {
  const data = await getDashboardData();

  // Default metadata jika data gagal diambil
  if (!data || !data.metadata) {
    return {
      title: "Centra Biotech Indonesia",
      description:
        "Solusi bioteknologi terintegrasi untuk pertanian, peternakan, dan perikanan.",
    };
  }

  // Metadata dari API
  return {
    title: data.metadata.titleTag,
    description: data.metadata.metaDesc,
    openGraph: {
      title: data.metadata.titleTag,
      description: data.metadata.metaDesc,
      // Jika memiliki image untuk OG, bisa ditambahkan di sini
      images: [
        {
          url: data.headline?.image?.url || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: data.headline?.title || "Centra Biotech Indonesia",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metadata.titleTag,
      description: data.metadata.metaDesc,
      images: [data.headline?.image?.url || "/default-og-image.jpg"],
    },
  };
}

const Home = async () => {
  const data = await getDashboardData();

  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      <HeroSection data={data.headline} />
      <WhySection data={data.whySection} />
      <ProductServiceSection data={data.productService} />
      <OurImpactSection data={data.ourImpact} />
      <LatestNewsSection data={data.latestNews} />
      <BannerContactSection data={data.bannerCTA} />
    </>
  );
};

export default Home;
