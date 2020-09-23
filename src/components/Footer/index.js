import React from "react";
import GitHubButton from "react-github-btn";
import styled from "styled-components";

const GitButtonWrap = styled.span`
  margin-left: 10px;
`;

const Footer = () => (
  <div className="footer">
    <div className="content-wrap">
      <p>
        Source code is available on{" "}
        <a
          className="source-code-link"
          href="https://github.com/IAMOTZ/mongoose-data-faker-browser"
        >
          Github
        </a>
      </p>
      <GitButtonWrap>
        <GitHubButton
          href="https://github.com/IAMOTZ/mongoose-data-faker-browser"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          data-show-count="true"
          aria-label="Star IAMOTZ/mongoose-data-faker-browser on GitHub"
          className="github-star-button"
        >
          Star
        </GitHubButton>
      </GitButtonWrap>
      <GitButtonWrap>
        <GitHubButton
          href="https://github.com/IAMOTZ/mongoose-data-faker-browser/issues"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Issue IAMOTZ/mongoose-data-faker-browser on GitHub"
        >
          Issue
        </GitHubButton>
      </GitButtonWrap>
    </div>
  </div>
);

export default Footer;
