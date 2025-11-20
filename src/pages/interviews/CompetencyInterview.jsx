import { useEffect, useRef } from "react";
import "../../styles/competency.css";

export default function CompetencyInterview() {
  const chatRef = useRef(null);

  useEffect(() => {
    if (!chatRef.current) return;

    // Create chatbot container inside wrapper
    const container = document.createElement("div");
    container.id = "aipkit-chatbot-container-6336";
    chatRef.current.appendChild(container);

    // Load chatbot script
    const script = document.createElement("script");
    script.src = "https://www.calnestor.ai/bpai/dist/js/embed-bootstrap.bundle.js";
    script.setAttribute("data-bot-id", "6336");
    script.setAttribute("data-wp-site", "https://www.calnestor.ai");
    script.async = true;

    chatRef.current.appendChild(script);

    // Cleanup
    return () => {
      container.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="interview-wrapper">
      <h2 className="interview-title">AI Interview Coach – Competency Based</h2>
      <p className="interview-subtext">Interview Practice Session</p>

      <div className="chatbox-wrapper" ref={chatRef}></div>
    </div>
  );
}
