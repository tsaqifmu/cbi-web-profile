"use client";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import HeroSectionGeneral from "@/components/common/HeroSectionGeneral";
import ContainerSection from "@/components/layout/container";

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <>
      <HeroSectionGeneral
        imgUrl="/img-contact-hero.jpeg"
        title={<h1 className="text-white">Hubungi Kami</h1>}
      />
      <ContainerSection className="flex flex-col gap-12 lg:flex-row">
        <div className="flex-1">
          <h1>Kami Siap Mendukung Kesuksesan Anda!</h1>
          <div className="mt-8">
            <p>
              Apakah Anda memiliki pertanyaan seputar produk dan layanan kami?
            </p>
            <p>Isi formulir berikut dan kami akan segera menghubungi Anda.</p>
          </div>
          <div className="mt-8 flex max-w-md flex-col gap-2 text-xs text-[#222] lg:text-sm xl:text-base">
            <div className="flex gap-4">
              <Mail />
              <a
                href="mailto:centrabioindo@gmail.com"
                className="hover:underline"
                target="_blank"
              >
                centrabioindo@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <Phone />
              <a
                className="hover:underline"
                href="https://wa.me/6285183284691"
                target="_blank"
              >
                0851 8328 4691
              </a>
            </div>

            <div className="flex gap-4">
              <MapPin />
              <a
                className="hover:underline"
                href="https://maps.app.goo.gl/aa6DmHF1iHUP5LMk6"
                target="_blank"
              >
                Sawahan RT 02 RW 07 Pasungan, Ceper, Klaten <br />
                Jawa Tengah, Indonesia 57465
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/aa6DmHF1iHUP5LMk6"
                target="_blank"
                className="flex items-center gap-2 text-sm text-green-500 underline lg:text-base"
              >
                Buka di Google Maps <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-gray-700">
                  Nama Depan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama Depan Anda"
                  className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-gray-700">
                  Nama Belakang <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama Belakang Anda"
                  className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-gray-700">
                Nama Perusahaan/Instansi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nama Perusahaan/Instansi Anda"
                className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Alamat Email Anda"
                  className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-gray-700">
                  Nomor Telepon/HP <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+62"
                  className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-gray-700">
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Tuliskan pesanmu..."
                rows={4}
                className="w-full rounded border p-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" required />
              <label className="text-sm text-gray-600">
                Pelanggan/Calon Pelanggan dengan ini memahami, menyetujui dan
                memberikan persetujuan kepada PT Centra Biotech Indonesia untuk
                memperoleh, mengumpulkan, mengolah serta menganalisis data
                pribadi saya untuk tujuan penawaran dan penyediaan produk &
                layanan.
              </label>
            </div>

            <button
              type="submit"
              className="rounded bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
            >
              Kirim
            </button>
          </form>
        </div>
      </ContainerSection>
    </>
  );
};

export default Contact;
