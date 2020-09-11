import React, { useRef, useState } from "react";
import ReactRunkit from "react-runkit";
import ReactLoading from "react-loading";
import Docs from "./Docs";
import "./App.css";

// @todo: How can I have this in a different file
const source =
  `` +
  `const { generate, runkitJSONView } = require('mongoose-data-faker')

const { Schema } = require('mongoose');

// Example
const schema = new Schema({
  name: String,
  age: Number
})

const data = generate(schema, 50);

runkitJSONView(data);
`;

// I'm just going to implement the whole thing in a single file and breakdown as neededd

function App() {
  const embedRef = useRef(null);

  const resultScrollGuideRef = useRef(null);

  // @todo: Improve the state names below
  const [docsIsOpen, setDocsIsOpen] = useState(false);
  const [displayNotebook, setDisplayNotebook] = useState(false);

  const [isGenerating, setIsGenerating] = useState(false);

  const evaluate = () => {
    embedRef.current.evaluate();
    setIsGenerating(true);
  };

  const scrollToResult = () => {
    resultScrollGuideRef.current.scrollIntoView(false);
  }

  const reset = () => {
    // figure out a way to re-render the default source
  };

  const setNoteBookWidth = () => {
    const runkitIframe = document.querySelector('iframe[name="runkit-embed-0"]');
    if(!runkitIframe) return;
    runkitIframe.style.width = '100%';
    runkitIframe.style.marginLeft = "0";
  }

  const openDocs = () => setDocsIsOpen(true);
  const closeDocs = () => setDocsIsOpen(false);

  return (
    <>
      <Docs isOpen={docsIsOpen} close={closeDocs} />
      <div
        className="App"
        onClick={(event) => event.target.id !== "open-docs" && closeDocs()}
      >
        <div className="header">
          <div className="content-wrap">
            <div className="title">Mongoose Data Faker</div>
          </div>
        </div>
        <div className="content">
          <div className="content-wrap">
            <div className="controls">
              <button
                onClick={evaluate}
                disabled={isGenerating}
                className="btn btn-blue btn-link evaluate-button"
              >
                <span>Generate</span>
                {/* {isGenerating && (
                  <>
                    <span>Running</span>
                    <ReactLoading
                      type={"spinningBubbles"}
                      color={"var(--text-white)"}
                      height={12}
                      width={12}
                    />
                  </>
                )} */}
              </button>
              {/* <button onClick={reset} className="btn btn-blue btn-link">
                Reset
              </button> */}
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
              <div
                className={`runkitNotebook ${!displayNotebook ? "hide" : ""}`}
              >
                <ReactRunkit
                  source={source}
                  ref={embedRef}
                  onLoad={() => { setDisplayNotebook(true); setNoteBookWidth(); }}
                  // onEvaluate={() => { setIsGenerating(false); scrollToResult(); }}
                  hidesActionButton
                />
                <div ref={resultScrollGuideRef}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="content-wrap">
            <p>
              Source code is available on{" "}
              <a
                className="source-code-link"
                href="https://github.com/IAMOTZ/mrd-browser"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
