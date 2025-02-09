import { ChangeEvent } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  rows,
}: FormFieldProps) => (
  <div>
    <label className="mb-1 block text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded border p-2 focus:outline-green-500"
        required={required}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border p-2 focus:outline-green-500"
        required={required}
      />
    )}
  </div>
);
