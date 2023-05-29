/* eslint-env node */
/**
 * @author Michael FIG
 * See LICENSE file in root directory for full license.
 */

'use strict';

const { makeAwaitAllowedVisitor } = require('../tools.js');

module.exports = {
  meta: {
    docs: {
      description: `ensure all \`await\`s in an \`async\` function are not nested`,
      category: 'Possible Errors',
      recommended: true,
      url:
        'https://github.com/endojs/Jessie/blob/main/packages/eslint-plugin/lib/rules/no-nested-await.js',
    },
    type: 'problem',
    fixable: null,
    messages: {
      unexpectedNestedAwait: 'Nested `await`s are not permitted in Jessie',
    },
    schema: [],
    supported: true,
  },
  create(context) {
    const makeReport = node => {
      context.report({
        node,
        messageId: 'unexpectedNestedAwait',
      });
    };
    return makeAwaitAllowedVisitor(context, makeReport);
  },
};
