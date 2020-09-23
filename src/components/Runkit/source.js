export default `` +
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
