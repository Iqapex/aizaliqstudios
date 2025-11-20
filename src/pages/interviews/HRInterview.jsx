import { useEffect, useRef } from "react";
import "../../styles/hr.css";

export default function HRInterview() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Create chatbot container INSIDE the wrapper
    const container = document.createElement("div");
    container.id = "aipkit-chatbot-container-6337";
    wrapperRef.current.appendChild(container);

    // Load script
    const script = document.createElement("script");
    script.src = "https://www.calnestor.ai/bpai/dist/js/embed-bootstrap.bundle.js";
    script.setAttribute("data-bot-id", "6337");
    script.setAttribute("data-wp-site", "https://www.calnestor.ai");
    script.async = true;

    wrapperRef.current.appendChild(script);

    // Cleanup
    return () => {
      wrapperRef.current?.removeChild(container);
      wrapperRef.current?.removeChild(script);
    };
  }, []);

  return (
    <div className="interview-page">
      <h2>AI Interview Coach – HR Interview</h2>
      <p>Interview Practice Session</p>

      <div className="aipkit-container-wrapper" ref={wrapperRef}>
        {/* Chatbot will be injected here */}
      </div>
    </div>
  );
}
