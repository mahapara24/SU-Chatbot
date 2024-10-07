import { FC } from "react";

// Define the possible languages as a union type
type Language = "en" | "ur" | "sd";

// Translation object with English, Urdu, and Sindhi translations
const translations: Record<Language, { welcome: string; ask: string }> = {
  en: {
    welcome: "Welcome to the chat!",
    ask: "How can I assist you?",
  },
  ur: {
    welcome: "چیٹ میں خوش آمدید!",
    ask: "میں آپ کی کس طرح مدد کر سکتا ہوں؟",
  },
  sd: {
    welcome: "چيٽ ۾ ڀلي ڪري آيا!",
    ask: "مان توهان جي مدد ڪيئن ڪري سگھان ٿو؟",
  },
};

interface ChatMessagesProps {
  language: Language; // Use the Language type for the language prop
  className?: string; // Optional className for styling
}

const ChatMessages: FC<ChatMessagesProps> = ({ language, className }) => {
  // Now TypeScript knows that `language` is a valid key
  return (
    <div className={className}>
      <div className="message">
        <p>{translations[language].welcome}</p>
      </div>
      <div className="message">
        <p>{translations[language].ask}</p>
      </div>
    </div>
  );
};

export default ChatMessages;
