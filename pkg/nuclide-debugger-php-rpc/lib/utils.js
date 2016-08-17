Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.makeExpressionHphpdCompatible = makeExpressionHphpdCompatible;

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _nuclideLogging2;

function _nuclideLogging() {
  return _nuclideLogging2 = require('../../nuclide-logging');
}

var DEBUGGER_LOGGER_CATEGORY = 'nuclide-debugger-php';

exports.default = (0, (_nuclideLogging2 || _nuclideLogging()).getCategoryLogger)(DEBUGGER_LOGGER_CATEGORY);

function makeExpressionHphpdCompatible(params) {
  // Hphpd requires that '=' is prefixed to expressions, but xdebug doesn't require this, so
  // we remove leading '=' if necessary.
  var expr = params.expression;
  if (expr.startsWith('=')) {
    params.expression = expr.substring(1);
  }
  return params;
}