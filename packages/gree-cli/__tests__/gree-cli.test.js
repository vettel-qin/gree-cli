'use strict';

const greeCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(greeCli(), 'Hello from greeCli');
console.info('greeCli tests passed');
