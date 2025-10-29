import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ConfidentialityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfidentialityModal({
  isOpen,
  onClose,
}: ConfidentialityModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white max-w-2xl w-full mx-4 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                Confidentiality Notice
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition cursor-p"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 text-gray-700 overflow-y-auto max-h-[70vh]">
              <p className="text-sm italic text-gray-600 text-center">
                *State of Michigan Notarial Services*
              </p>

              <section>
                <h3 className="font-semibold text-gray-800 mb-1">
                  1. Commitment to Confidentiality
                </h3>
                <p>
                  As a commissioned{" "}
                  <strong>Notary Public in the State of Michigan</strong>, I am
                  legally and ethically obligated to protect the privacy of all
                  individuals and entities who utilize my notarial services. All
                  information, documents, and identification provided are
                  treated as strictly confidential and are handled solely for
                  the purpose of performing lawful notarial acts.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-800 mb-1">
                  2. Legal Compliance
                </h3>
                <p>
                  All notarial acts are conducted in accordance with the{" "}
                  <strong>
                    Michigan Notary Public Act (MCL 55.261 et seq.)
                  </strong>{" "}
                  and any other applicable state and federal laws. Personal data
                  and documentation are used exclusively to verify identity and
                  execute the notarial act as required by law.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-800 mb-1">
                  3. Retention and Disclosure
                </h3>
                <p>
                  Information obtained during a notarial act will not be
                  disclosed, copied, or retained beyond what is required by{" "}
                  <strong>MCL 55.285</strong> or other statutory recordkeeping
                  obligations. Disclosure of any information shall only occur
                  when mandated by a{" "}
                  <strong>
                    court order, subpoena, law enforcement request,
                  </strong>{" "}
                  or other lawful authority.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-800 mb-1">
                  4. Privacy and Security
                </h3>
                <p>
                  All client information, whether written, electronic, or
                  verbal, is maintained with the highest degree of care to
                  prevent unauthorized access, loss, or misuse. I am committed
                  to preserving the{" "}
                  <strong>integrity, confidentiality, and security</strong> of
                  all records and interactions associated with my notarial
                  duties.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gray-800 mb-1">
                  5. Questions or Concerns
                </h3>
                <p>
                  If you have any questions regarding this Confidentiality
                  Notice or the handling of your information, please contact
                  this office directly prior to your appointment.
                </p>
              </section>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t flex justify-end">
              <button
                onClick={onClose}
                className="cursor-pointer px-4 py-2 rounded-lg bg-black text-white font-medium hover:bg-[gray] transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
