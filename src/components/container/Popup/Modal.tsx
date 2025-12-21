import Button from "../../ui/Button/Button";

type PopupProps = {
  open: boolean;
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
};

export default function Popup({
  open,
  type,
  title,
  message,
  onClose,
}: PopupProps) {
  if (!open) return null;

  const imageSrc =
    type === "success"
      ? "/Message-success.svg"
      : "/Message-failed.svg";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl
       bg-white dark:bg-[#0E0E0E] p-6 text-center shadow-xl">
        <img
          src={imageSrc}
          alt={type}
          className="mx-auto mb-4 h-46 w-46"
        />

        {/* Title */}
        <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>

        {/* Message */}
        <p className="mt-2 text-sm text-gray-600 dark:text-white/60">{message}</p>

        {/* Action */}
        <div className="mt-6">
          <Button variant="cta" fullWidth onClick={onClose}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}