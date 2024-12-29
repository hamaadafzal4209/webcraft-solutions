import { ChevronDown, ChevronUp } from "lucide-react";

export const Accordion = ({ question, answer, isOpen, onToggle }) => {
    return (
      <div className="border border-gray-400 group rounded-xl overflow-hidden">
        <button
          className="w-full flex justify-between items-start p-4 text-left bg-slate-800 group-hover:bg-slate-700 transition-all duration-300 focus:outline-none"
          onClick={onToggle}
        >
          <span className="text-lg font-medium text-gray-200">{question}</span>
          {isOpen ? (
            <ChevronUp className="text-gray-400" />
          ) : (
            <ChevronDown className="text-gray-400" />
          )}
        </button>
        <div
          className={`transition-max-height group-hover:bg-slate-700 bg-slate-800 duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
          style={{ overflow: "hidden" }}
        >
          <p className="px-4 pb-4 text-gray-300 text-sm">{answer}</p>
        </div>
      </div>
    );
  };