if (window.C3) {
  module.exports = {
    ...self,
    C3Event: self.C3.Event,
  };
} else {
  throw new Error(
    "You cannot use this module in Node.JS or the browser, but only within Construct 3 Games."
  );
}
