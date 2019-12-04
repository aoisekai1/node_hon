const hbs = require('express-hbs');
hbs.registerHelper('tes', (v1, v2, options) => {
  return (v1 == v2) ? options.fn(this) : options.inverse(this);
})