"use client";

import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent, FormEvent } from "react";

import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";

// Types
interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  agreement: boolean;
}

// Constants
const INITIAL_FORM_STATE: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  agreement: false,
};

const EMAIL_CONFIG = {
  TO_EMAIL: "mushoddaqt@gmail.com",
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
  };

  const createEmailTemplateParams = (
    formData: FormData,
  ): Record<string, unknown> => ({
    to_email: EMAIL_CONFIG.TO_EMAIL,
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    company: formData.company,
    phone: formData.phone,
    message: formData.message,
  });

  const validateEmailConfig = () => {
    if (
      !EMAIL_CONFIG.SERVICE_ID ||
      !EMAIL_CONFIG.TEMPLATE_ID ||
      !EMAIL_CONFIG.PUBLIC_KEY
    ) {
      throw new Error("EmailJS credentials are not properly configured");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailPromise = new Promise(async (resolve, reject) => {
      try {
        validateEmailConfig();

        const templateParams = createEmailTemplateParams(formData);

        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID!,
          EMAIL_CONFIG.TEMPLATE_ID!,
          templateParams,
          EMAIL_CONFIG.PUBLIC_KEY,
        );

        resetForm();
        resolve("Pesan berhasil dikirim! Kami akan menghubungi Anda segera.");
      } catch (error) {
        reject(error);
      } finally {
        setIsSubmitting(false);
      }
    });

    toast.promise(emailPromise, {
      loading: "Sedang mengirim pesan...",
      success: (data) => data as string,
      error: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
    });
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Nama Depan"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Nama Depan Anda"
            required
          />
          <FormField
            label="Nama Belakang"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Nama Belakang Anda"
            required
          />
        </div>

        <FormField
          label="Nama Perusahaan/Instansi"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Nama Perusahaan/Instansi Anda"
          required
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Alamat Email Anda"
            required
          />
          <FormField
            label="Nomor Telepon/HP"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+62"
            required
          />
        </div>

        <FormField
          label="Pesan"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tuliskan pesanmu..."
          required
          rows={4}
        />

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleInputChange}
            className="mt-1"
            required
          />
          <label className="text-sm text-gray-600">
            Pelanggan/Calon Pelanggan dengan ini memahami, menyetujui dan
            memberikan persetujuan kepada PT Centra Biotech Indonesia untuk
            memperoleh, mengumpulkan, mengolah serta menganalisis data pribadi
            saya untuk tujuan penawaran dan penyediaan produk & layanan.
          </label>
        </div>

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

// Components

export default FormSection;
