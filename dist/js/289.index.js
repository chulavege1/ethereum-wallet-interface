"use strict";
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [289],
  {
    5289: (e, o, t) => {
      t.r(o), t.d(o, { default: () => c });
      var n = null;
      "undefined" != typeof WebSocket
        ? (n = WebSocket)
        : "undefined" != typeof MozWebSocket
        ? (n = MozWebSocket)
        : void 0 !== t.g
        ? (n = t.g.WebSocket || t.g.MozWebSocket)
        : "undefined" != typeof window
        ? (n = window.WebSocket || window.MozWebSocket)
        : "undefined" != typeof self &&
          (n = self.WebSocket || self.MozWebSocket);
      const c = n;
    },
  },
]);
//# sourceMappingURL=289.index.js.map