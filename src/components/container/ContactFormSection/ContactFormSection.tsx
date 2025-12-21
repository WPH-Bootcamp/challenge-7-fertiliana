import { useState } from "react";

import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import Checkbox from "../../ui/Checkbox/Checkbox";
import Button from "../../ui/Button/Button";
import Popup from "../../container/Popup/Modal"

export default function CTASection() {
  const [openPopup, setOpenPopup] = useState(false);
  const [result, setResult] = useState<"success" | "error">("success");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔹 simulasi submit (nanti bisa ganti API)
    const isSuccess = true;

    setResult(isSuccess ? "success" : "error");
    setOpenPopup(true);
  };

  return (
    <>
      <section className="px-6 py-24 bg-white dark:bg-black">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-white/60">
          Tell us what you need, and we'll get back to you soon.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6 text-left"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-black dark:text-white/80">Name</label>
              <Input placeholder="Enter your name" required />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-black dark:text-white/80">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-black dark:text-white/80">
                Message
              </label>
              <Textarea placeholder="Enter your message" required />
            </div>

            {/* Services */}
            <div>
              <p className="mb-3 text-sm text-black dark:text-white/80">Services</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Checkbox label="Web Development" />
                <Checkbox label="Cloud Solutions" />
                <Checkbox label="Mobile App Development" />
                <Checkbox label="Software Development" />
                <Checkbox label="UI/UX Design" />
                <Checkbox label="Other" />
              </div>
            </div>

            {/* Submit */}
            <Button variant="cta" fullWidth type="submit">
              Send
            </Button>
          </form>
        </div>
      </section>

      {/* Popup Result */}
      <Popup
        open={openPopup}
        type={result}
        title={
          result === "success"
            ? "Message received!"
            : "Oops! Something went wrong"
        }
        message={
          result === "success"
            ? "Thanks for reaching out. We’ll get back to you soon."
            : "We couldn’t send your message. Please try again."
        }
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}
