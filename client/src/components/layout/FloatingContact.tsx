import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, FileText, X, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveredQuote, setIsHoveredQuote] = useState(false);

  return (
    <>
      {/* Floating Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-end">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919872364476"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 cursor-pointer transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </motion.a>

        {/* Free Quote Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHoveredQuote(true)}
          onMouseLeave={() => setIsHoveredQuote(false)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-500 text-white h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer pr-4 pl-3.5 relative overflow-hidden transition-colors"
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex items-center gap-2"
          >
            <FileText className="w-6 h-6" />
            <AnimatePresence mode="popLayout">
              {(isHoveredQuote || isOpen) && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-sm whitespace-nowrap"
                >
                  Free Quote
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </div>

      {/* Quote Form Modal PopUp */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[90vh] overflow-y-auto">
                <LeadForm className="border-none shadow-none bg-transparent" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
