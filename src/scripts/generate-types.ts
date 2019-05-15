require('tsconfig-paths/register');
const generateTypes = require('src/utils/generate-types').generateTypes;

console.log('Generating types')
generateTypes()
