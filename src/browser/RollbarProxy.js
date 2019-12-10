var RollbarProxy = function () {
};

RollbarProxy.prototype.sendJsonPayload = function (json, success, error) {
  console.log('rollbar stub doing nothing but calling success()');
  success()
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = RollbarProxy;
}
