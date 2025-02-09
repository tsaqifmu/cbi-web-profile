interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`rounded px-6 py-2 text-white transition-colors ${
      isSubmitting
        ? "cursor-not-allowed bg-gray-400"
        : "bg-green-600 hover:bg-green-700"
    }`}
  >
    {isSubmitting ? "Mengirim..." : "Kirim"}
  </button>
);
