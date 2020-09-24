import React, { useState } from "react";
import Docs from "./components/Docs";
import Runkit from "./components/Runkit";
import Footer from "./components/Footer";

function App() {
  const [docsIsOpen, setDocsIsOpen] = useState(false);

  const openDocs = () => setDocsIsOpen(true);

  const closeDocs = ({ backdrop = false, event } = {}) => {
    if (backdrop) return event.target.id !== "open-docs" && closeDocs();
    setDocsIsOpen(false);
  };

  return (
    <>
      <Docs isOpen={docsIsOpen} close={closeDocs} />
      <div
        className="app"
        onClick={(event) => closeDocs({ backdrop: true, event })}
      >
        <div className="header">
          <div className="content-wrap">
            <div className="title">Mongoose Data Faker</div>
          </div>
        </div>
        <Runkit openDocs={openDocs} />
        <Footer />
      </div>
    </>
  );
}

export default App;
