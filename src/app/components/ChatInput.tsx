"use client";
import React, { HTMLAttributes, useContext, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

// Extend the ChatInputProps to include a language prop
interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {
  language: string; // Add language prop
}

const ChatInput: FC<ChatInputProps> = ({ className, language, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>("");

  // Function to determine the placeholder text based on the language
  const getPlaceholderText = (lang: string) => {
    switch (lang) {
      case "ur":
        return "پیغام لکھیں...";
      case "sd":
        return "هڪ پيغام لکجي...";
      case "en":
      default:
        return "Write a message...";
    }
  };

  return (
    <div {...props} className={cn("border-t border-zinc-300", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <ReactTextareaAutosize
          rows={2}
          maxRows={4}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={getPlaceholderText(language)} // Set placeholder based on the selected language
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-white py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
