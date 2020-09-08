import React, { useState } from "react";
import { Remarkable } from "remarkable";
import styled from "styled-components";
import hljs from "highlight.js";
import "highlight.js/styles/solarized-light.css";
import contentURI from "./content.md";



// @todo: I need to chose one of using external style files or styled components
const DocsCloseButton = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  height: 45px;
  width: 45px;
  cursor: pointer;
`;

const DocsContent = styled.div`
  position: relative;
`;

export default ({ isOpen, close }) => {
  const [docsContent, setDocsContent] = useState("");

  if (!docsContent) {
    window
      .fetch(contentURI)
      .then((res) => res.text())
      .then((content) => setDocsContent(content))
      .catch((err) => console.log(err));
  }

  const md = new Remarkable("full", {
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (__) {}

      return "";
    },
  });

  const content = {
    __html: md.render(docsContent),
  };

  return (
    <div className={`docs ${isOpen ? "open" : "close"}`}>
      <DocsContent>
        <div dangerouslySetInnerHTML={content} className="markdown-body"></div>
        <DocsCloseButton className="close-button" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </DocsCloseButton>
      </DocsContent>
    </div>
  );
};
