import React, { useRef, useState } from 'react';
import ReactRunkit from 'react-runkit';
import './App.css';

// @todo: How can I have this in a different file
const source = `` +
`const { generate, runkitJSONView } = require('mongoose-random-data')

const { Schema } = require('mongoose');

// Example
const schema = new Schema({
  name: String,
  age: Number
})

const data = generate(schema, 50);

runkitJSONView(data);
`

// I'm just going to implement the whole thing in a single file and breakdown as neededd

function App() {

  const embedRef = useRef(null);

  const [docsIsOpen, setDocsIsOpen] = useState(false);

  const evaluate = () => {
    embedRef.current.evaluate()
  }

  const reset = () => {
    // figure out a way to re-render the default source
  }

  const openDocs = () => setDocsIsOpen(true);
  const closeDocs = () => setDocsIsOpen(false);

  return (
    <>
    <div id="docs-container" className={`docs ${docsIsOpen ? 'open' : 'close'}`}>
      {/* Implement a close button withing the docs too */}
    </div>
    <div className="App" onClick={(event) => event.target.id !== 'open-docs' && closeDocs()}>
      <div className="header">
        <div className="content-wrap">
          <div className="title">Mongoose Data Faker</div>
        </div>
      </div>
      <div className="content">
        <div className="content-wrap">
          <div className="controls">
            <button onClick={evaluate} className="btn btn-blue btn-link">Generate</button>
            <button onClick={reset} className="btn btn-blue btn-link">Reset</button>
            <button id="open-docs" onClick={openDocs} className="btn btn-blue btn-link">Docs</button>
          </div>
          <div className="runkitNotebook">
            <ReactRunkit source={source} ref={embedRef} hidesActionButton />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="content-wrap">
        <p>Source code is available on <a className="source-code-link" href="https://github.com/IAMOTZ/mrd-browser">Github</a></p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
