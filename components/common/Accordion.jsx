import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-400 group rounded-xl overflow-hidden">
      <button
        className="w-full flex justify-between items-start p-4 gap-4 text-left group-hover:bg-slate-700 transition-all duration-300 focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-200">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-gray-400" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden group-hover:bg-slate-700"
      >
        <p className="px-4 pb-4 text-gray-300 text-sm">{answer}</p>
      </motion.div>
    </div>
  );
};
