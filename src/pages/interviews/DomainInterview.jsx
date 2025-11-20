import { useEffect, useRef } from "react";
import "../../styles/Interview.css";

export default function DomainInterview() {
  const chatWrapperRef = useRef(null);

  useEffect(() => {
    if (!chatWrapperRef.current) return;

    // Create chatbot container inside wrapper
    const container = document.createElement("div");
    container.id = "aipkit-chatbot-container-6335";
    chatWrapperRef.current.appendChild(container);

    // Load chatbot script
    const script = document.createElement("script");
    script.src = "https://www.calnestor.ai/bpai/dist/js/embed-bootstrap.bundle.js";
    script.setAttribute("data-bot-id", "6335");
    script.setAttribute("data-wp-site", "https://www.calnestor.ai");
    script.async = true;

    chatWrapperRef.current.appendChild(script);

    // Cleanup
    return () => {
      container.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="interview-page">
      <h2 className="interview-title">AI Interview Coach – Domain Specific</h2>
      <p className="interview-subtitle">Interview Practice Session</p>

      <div className="chat-wrapper" ref={chatWrapperRef}></div>
    </div>
  );
}
