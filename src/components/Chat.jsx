import React, { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { HiChatAlt } from "react-icons/hi";
import TypingAnimation from "../animation/typingAnimation";
import { createContext } from "react";
import WarnBanner from './warnBanner'
const ChatBot = () => {
  const MessagesContext = createContext(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello Sudeep! How Can I Help you today?",
      sender: "comp",
    },
  ]);
  const scrollRef = useRef();

  const handleCloseWelcomeMessage = () => {
    setShowWelcomeMessage(false);
  };

  const handleSendMessage = async () => {
    if (inputValue) {
      setTyping(true);

      setMessages((prevState) => [
        ...prevState,
        { text: inputValue, sender: "user" },
      ]);

      try {
        if (inputValue.trim() !== "") {
          const response = await fetch(
            ``,
            {
              method: "POST",
            }
          );
          const data = await response.json();
          if (data.response) {
            setMessages((prevState) => [
              ...prevState,
              { text: data.response, sender: "comp" },
            ]);
          }
          setTyping(false);
          setInputValue("");
        }
      } catch (e) {
        console.log(e);
        setTyping(false);
      }
    }
  };

  useEffect(() => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div id="section-1 ">
      <div className="flex justify-center mt-16">
        <div className="bg-white rounded-lg shadow-md p-4 w-full">
          {showWelcomeMessage && <WarnBanner />}

          <div className="flex flex-col mt-5 space-y-2 ">
            <div className="flex flex-col mt-5 space-y-2 h-3/4 overflow-y-scroll">
              {/* messages go here */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-${
                    message.sender === "user" ? "end" : "start"
                  }`}
                  ref={scrollRef}
                >
                  {message.sender === "comp" && (
                    <>
                      <img
                        src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
                        className="h-10 w-10 rounded-3xl inline mr-2"
                      ></img>
                    </>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gray-200"
                        : "bg-card text-black"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <img
                      src="https://media.licdn.com/dms/image/C4E03AQEhVgp_U6h51w/profile-displayphoto-shrink_400_400/0/1652729918694?e=1684368000&v=beta&t=Z-wXaTcgnq7xOWqPpovGG9z-XhRis_ccoSDzRor-anI"
                      className="h-10 w-10 rounded-3xl inline ml-2"
                    ></img>
                  )}
                </div>
              ))}

              {/* IF COMPUTER IS TYPING .... ANIMATION */}

              {typing && (
                <div className={`flex items-center justify-start`}>
                  <>
                    <img
                      src="https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white.png"
                      className="h-10 w-10 rounded-3xl inline mr-2"
                    ></img>
                  </>

                  <div
                    className={`px-4 py-2 rounded-lg 
                        : "bg-customBlue text-white"
                    }`}
                  >
                    <TypingAnimation></TypingAnimation>
                  </div>
                </div>
              )}

              {/* IF COMPUTER IS TYPING END  */}
            </div>
          </div>

          <div className="flex mt-4">
            <input
              type="text"
              placeholder="Type something.."
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-4 py-2 rounded-lg outline-none focus:outline-none border border-gray-200"
            />
            <button onClick={handleSendMessage} className="ml-2">
              <HiChatAlt className="h-6 w-6 text-blue-500 hover:text-blue-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
