"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { FC } from "react";

// Define the allowed languages
type Language = "en" | "ur" | "sd";

const Chat: FC = () => {
  const [language, setLanguage] = useState<Language>("en"); // Default language is "en"

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language); // Cast to Language type
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-custom-blue/10 border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex justify-between flex-col">
            <AccordionTrigger className="px-6 border-b border-zinc-300">
              <div className="flex justify-between items-center">
                <ChatHeader />
                {/* Language selection dropdown */}
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="ml-4 px-2 py-1 border rounded-md text-sm"
                >
                  <option value="en">English</option>
                  <option value="ur">Urdu</option>
                  <option value="sd">Sindhi</option>
                </select>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                {/* Pass the selected language to ChatMessages and ChatInput */}
                <ChatMessages
                  className="px-2 py-3 flex-1"
                  language={language}
                />
                <ChatInput className="px-4" language={language} />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
