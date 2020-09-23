import React, { useState, useRef } from "react";
import ReactLoading from "react-loading";
import ReactRunkit from "react-runkit";
import source from "./source";

export default ({ openDocs }) => {
  const [displayNotebook, setDisplayNotebook] = useState(false);
  const resultScrollGuideRef = useRef(null);
  const embedRef = useRef(null);

  const setNoteBookWidth = () => {
    const runkitIframe = document.querySelector(
      'iframe[name="runkit-embed-0"]'
    );
    if (!runkitIframe) return;
    runkitIframe.style.width = "100%";
    runkitIframe.style.marginLeft = "0";
  };

  const scrollToResult = () => {
    resultScrollGuideRef.current.scrollIntoView(false);
  };

  const evaluate = () => {
    embedRef.current.evaluate();
  };

  return (
    <div className="runkit content-wrap">
      <div className="controls">
        <button
          onClick={evaluate}
          className="btn btn-blue btn-link evaluate-button"
        >
          <span>Generate</span>
        </button>
        <button
          id="open-docs"
          onClick={openDocs}
          className="btn btn-blue btn-link"
        >
          Docs
        </button>
      </div>
      <div className="runkitNotebook-container">
        {!displayNotebook && (
          <div className="spinner-container">
            <ReactLoading
              type={"spinningBubbles"}
              color={"var(--blackish-color)"}
              height={80}
              width={80}
            />
          </div>
        )}
        <div className={`runkitNotebook ${!displayNotebook ? "hide" : ""}`}>
          <ReactRunkit
            source={source}
            ref={embedRef}
            onLoad={() => {
              setDisplayNotebook(true);
              setNoteBookWidth();
            }}
            onEvaluate={() => scrollToResult()}
            hidesActionButton
          />
          <div ref={resultScrollGuideRef}></div>
        </div>
      </div>
    </div>
  );
};
