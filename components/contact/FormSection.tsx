"use client";

import React from "react";

const FormSection = () => {
  const handleSubmit = () => {};
  return (
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
            memperoleh, mengumpulkan, mengolah serta menganalisis data pribadi
            saya untuk tujuan penawaran dan penyediaan produk & layanan.
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
  );
};

export default FormSection;
