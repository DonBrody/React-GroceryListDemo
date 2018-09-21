/**
 * Variable decleration not required here.
 * Color will be attached to String.prototype
 */
require('colors');

/* eslint-disable no-console */
const consoleLog = console.log.bind(console);

const logger = {
  log(...args) {
    const tag = '[ ✨ LOG ✨ ]'.green;

    /**
     * arguments is an array like object containing all
     * of the arguments passed into this function.
     */
    const output = args.map((arg) => {
      if (typeof arg === 'object') {
        /**
         * Turn the object to a string so that we can
         * color it, then log it.
         */
        const string = JSON.stringify(arg, null, 2);
        return `${tag} ${string.cyan}`;
      } return `${tag} ${arg.cyan}`;
    });

    /**
     * Call either console.log or noop here.
     * The console object is the context, and the
     * args are a colored string.
     */
    consoleLog.apply(console, output);
  },
  error(...args) {
    const output = args.map((arg) => {
      const err = arg.stack || arg;
      const name = err.name || '[ ❌ ERROR ❌ ]';
      const log = `${name.yellow} ${err.red}`;
      return log;
    });

    consoleLog.apply(console, output);
  },
};

module.exports = logger;
