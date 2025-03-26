import { ChevronDown } from "lucide-react";
import React, {useState} from 'react';

export default function FAQItem({ question, answer, isLast }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className={`border-t border-gray-200 ${isLast ? "border-b" : ""}`}>
        <button
          className="flex justify-between items-center w-full py-6 text-left"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="text-xl font-medium text-[#013167]">{question}</h3>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
        </button>
  
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    )
  }