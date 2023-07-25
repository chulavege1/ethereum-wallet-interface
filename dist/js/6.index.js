"use strict";
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [6],
  {
    1006: (e, A, n) => {
      n.r(A), n.d(A, { default: () => v });
      var t = n(2982),
        i = n(885),
        a = n(7294),
        l = n(6286),
        d = n(555),
        r = n(3468),
        s = n(3379),
        c = n.n(s),
        C = n(7795),
        o = n.n(C),
        u = n(569),
        f = n.n(u),
        m = n(3565),
        p = n.n(m),
        h = n(9216),
        x = n.n(h),
        b = n(4589),
        g = n.n(b),
        y = n(286),
        k = {};
      (k.styleTagTransform = g()),
        (k.setAttributes = p()),
        (k.insert = f().bind(null, "head")),
        (k.domAPI = o()),
        (k.insertStyleElement = x()),
        c()(y.Z, k),
        y.Z && y.Z.locals && y.Z.locals;
      const v = function () {
        var e = (0, l.mA)(),
          A =
            (e.address, e.connector, (0, d.k_)().open, (0, a.useState)("name")),
          n = (0, i.Z)(A, 2),
          s = n[0],
          c = n[1],
          C = (0, a.useState)("asc"),
          o = (0, i.Z)(C, 2),
          u = o[0],
          f = o[1],
          m = (0, r.A)(),
          p = m.tokenAddresses,
          h = (m.setTokenAddresses, m.balances),
          x =
            (m.setBalances,
            (0, t.Z)(h).sort(function (e, A) {
              var n = e[s],
                t = A[s],
                i = 0;
              return (
                n > t ? (i = 1) : n < t && (i = -1),
                "balance" === s ? -1 * i : i
              );
            }));
        return a.createElement(
          "div",
          { className: "Liquidity_market" },
          a.createElement(
            "div",
            null,
            a.createElement(
              "button",
              {
                onClick: function () {
                  c("name"), f("asc" === u ? "desc" : "asc");
                },
              },
              "Name",
            ),
            a.createElement("button", null),
            a.createElement(
              "button",
              {
                onClick: function () {
                  c("balance"), f("asc" === u ? "desc" : "asc");
                },
              },
              "Balance",
            ),
          ),
          a.createElement(
            "div",
            null,
            x.map(function (e, A) {
              return a.createElement(
                "div",
                { key: A },
                a.createElement(
                  "div",
                  null,
                  a.createElement("h2", null, e.name),
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "p",
                    null,
                    p[A].slice(0, 6),
                    "...",
                    p[A].slice(-4),
                  ),
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement("p", null, e.balance),
                ),
              );
            }),
          ),
        );
      };
    },
    286: (e, A, n) => {
      n.d(A, { Z: () => d });
      var t = n(7537),
        i = n.n(t),
        a = n(3645),
        l = n.n(a)()(i());
      l.push([
        e.id,
        ".Liquidity_market{display:flex;justify-content:space-between;flex-direction:column;padding:10px 0;background:rgba(0,0,0,.5);font-weight:bold;font-size:20px;line-height:100%;width:99%;border-radius:4px;margin:0 auto}.Liquidity_market>div:first-child{width:100%;justify-content:space-around;display:flex}.Liquidity_market>div:first-child button{width:100%;background:none;border:.1px solid rgba(255,255,255,.2156862745);color:#fff;height:30px}.Liquidity_market>div:last-child{width:100%;display:flex;flex-direction:column}.Liquidity_market>div:last-child>div{display:flex;align-items:center;color:#fff;background:rgba(255,255,255,.1);margin:10px 0px;border-radius:10px}.Liquidity_market>div:last-child>div>div{display:flex;justify-content:center;align-items:center;width:100%;height:100%;min-height:60px;border:.1px solid rgba(255,255,255,.2156862745)}.Liquidity_market>div:last-child>div>div:first-child{display:flex;justify-content:space-around}.Liquidity_market>div:last-child>div>div h2{font-size:18px;margin:0}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./front-end/components/ux/liquidity-market/liquidity_market.sass",
          ],
          names: [],
          mappings:
            "AAAA,kBACI,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,cAAA,CACA,yBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,SAAA,CACA,iBAAA,CACA,aAAA,CACA,kCACI,UAAA,CACA,4BAAA,CACA,YAAA,CACA,yCACI,UAAA,CACA,eAAA,CACA,+CAAA,CACA,UAAA,CACA,WAAA,CACR,iCACI,UAAA,CACA,YAAA,CACA,qBAAA,CACA,qCACI,YAAA,CACA,kBAAA,CACA,UAAA,CACA,+BAAA,CACA,eAAA,CACA,kBAAA,CACA,yCACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,+CAAA,CACA,qDACI,YAAA,CACA,4BAAA,CAEJ,4CACI,cAAA,CACA,QAAA",
          sourcesContent: [
            ".Liquidity_market\n    display: flex\n    justify-content: space-between\n    flex-direction: column\n    padding: 10px 0\n    background: rgba(0, 0, 0, 0.5)\n    font-weight: bold\n    font-size: 20px\n    line-height: 100%\n    width: 99%\n    border-radius: 4px\n    margin: 0 auto\n    & > div:first-child\n        width: 100%\n        justify-content: space-around\n        display: flex\n        button\n            width: 100%\n            background: none\n            border: 0.1px solid #ffffff37\n            color: #fff\n            height: 30px   \n    & > div:last-child\n        width: 100%\n        display: flex\n        flex-direction: column\n        & > div\n            display: flex\n            align-items: center\n            color: #fff\n            background: rgba(255, 255, 255, 0.1)\n            margin: 10px 0px\n            border-radius: 10px\n            & > div \n                display: flex\n                justify-content: center\n                align-items: center\n                width: 100%\n                height: 100%\n                min-height: 60px\n                border: 0.1px solid #ffffff37\n                &:first-child\n                    display: flex\n                    justify-content: space-around\n                    \n                h2\n                    font-size: 18px\n                    margin: 0\n",
          ],
          sourceRoot: "",
        },
      ]);
      const d = l;
    },
  },
]);
//# sourceMappingURL=6.index.js.map
