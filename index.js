if (typeof window !== 'undefined' && typeof module !== 'undefined' && window.C3) {
  module.exports = {
    ...window,
    C3Event: window.C3.Event,
  };
} else {
  throw new Error('You cannot use this module in Node.JS or the browser, but only within Construct 3 Games.');
}