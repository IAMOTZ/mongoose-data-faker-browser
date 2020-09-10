# Mongoose Data Faker
Generate random fake data with your mongoose schema.  
> This is a browser wrapper around the core package that handles the actual data generation. Feel free to install and use the core package on your local machine.

## Summary
- [Usage](#usage)
- [SchemaType options](#schematype-options)
- [Using FakerJS](#using-fakerjs)
- [Limitations](#limitations)
- [Contribution](#contribution)

## Usage  
This project uses RunKit to execute your NodeJS code; Runkit is an online NodeJS playground with every version of every package on npm pre-installed, read more about it [here](https://runkit.com/home).
 
By default, the web app should load a default script to generate data for a simple mongoose schema, you can edit onward from there. Use the steps below as a guide to understanding the default script:

1. Require the necessary modules from the core package:
```javascript
const { generate, runkitJSONView } = require('mongoose-random-data'); 
```

More details about the `mongoose-random-data` package [here](https://www.npmjs.com/package/mongoose-random-data).

2. Compose your schema
```javascript
// This is just an example schema, feel free to write something more complicated
const { Schema } = require('mongoose');

const schema = new Schema({
  name: String,
  age: Number
})
```

3. Generate and display result
```NodeJS
// Pass your schema to the generate method and specify the number of data objects to generate
const data = generate(schema, 50);

// Use this to display data result with a custom RunKit view
runkitJSONView(data);
```


## SchemaType options
Mongoose-data-faker would try as much as possible to respect the standard mongoose [schemaType option](https://mongoosejs.com/docs/schematypes.html#schematype-options) that makes sense for data generation. This is a list of some schema type options and how mongose-data-faker would use them for data generation:

### String
- String#lowercase - Generated string is always in lower case
- String#uppercase - Generated string is always in uppercase
- String#enum - Generated string is always one of the provided enum values
- String#maxlength - Generated string length is always lesser or equal to a max length value

### Numbers
- Number#min - Generated number is always greater than or equal to `min`
- Number#max - Generated number is always lesser than or equal to `max`
- String#enum - Generated number is always one of the provided enum values

### Date
- Date#min - Generated date is always greater than or equal to `min`
- Date#max - Generated date is always lesser than or equal to `max`

For eample:

```javascript
const schema = new Schema({
  // Name would always be one of 'olaide', 'oyindamola' or 'gbemisola'
  name: {
    type: String,
    enum: ['olaide', 'oyindamola', 'gbemisola']
  },
  // age would always be greater than or equal to 18
  age: {
    type: Number,
    min: 18,
  },
  // createdAt would always be greated than or equal to 
  // 1598308338428(unix time stamp)
  createdAt: {
    type: Date,
    min: 1598308338428,
  }
})
```

## Using FakerJS
Mongoose-data-faker supports using [Faker](https://www.npmjs.com/package/faker) for generating specific types of string values. You can specify a faker property in the schemaTypeOption to use a specific faker API, for example:

```javascript
const schema = new Schema({
  email: {
    type: String,
	// Using faker property, you can specify the path to any valid FakerJS API
	faker: 'internet.email',
 }
})

// Generate 10 random emails
generate(schema, 10);
```

## Limitations
### Speed of execution
Runkit Handles the execution of whatever code you write in the editor. While I try my best to optimize to core package to be as fast as possible, the node environment where the code is executed on RunKit ultimately determines how long the execution takes.  
If you want to take control of the speed of execution, you can consider installing the core package on your machine and run the generation locally, like this, your machine decides how fast the execution runs. A CLI tool is on its way to make this process even more seamless.

### Custom schema type
Mongoose-data-faker currently does not support generation for custom schema type and this is simply because it does not recognize a custom schema type and consequently can't tell what data to generate for them. In the future, I hope to be able to add a way with which you can register your custom data types as well as custom generators to the core package. For now, the package would throw an error if it comes across a schema type it does not recognize.

### Support for older versions of mongoose
Mongoose-data-faker is built and tested with mongoose version `5.9.24`, I would continuously test for backward compatibility with older versions and update this space.

## Contribution
The project source code is available on [Github](https://github.com/IAMOTZ/mrd-browser). Contributions are highly welcomed. Feel free to also contribute to the core package whose source code is available here.
I strongly advise we discuss an issue via Github Issues before you go ahead to raise a Pull Request. To contribute:

- Fork this repository
- Create a new branch for your contribution in the forked repo, ensure you check out from the develop branch.
- Commit your changes with detailed commit messages
- Raise a pull request from your forked repository to the main repository.
