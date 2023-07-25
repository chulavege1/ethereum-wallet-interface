"use strict";
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [663],
  {
    6663: (e, a, t) => {
      t.d(a, { offchainLookup: () => g, offchainLookupSignature: () => m });
      var r = t(5291),
        s = t(1344),
        n = t(9977),
        o = t(3678);
      class c extends n.G {
        constructor({
          callbackSelector: e,
          cause: a,
          data: t,
          extraData: r,
          sender: s,
          urls: n,
        }) {
          super(
            a.shortMessage ||
              "An error occurred while fetching for an offchain result.",
            {
              cause: a,
              metaMessages: [
                ...(a.metaMessages || []),
                a.metaMessages?.length ? "" : [],
                "Offchain Gateway Call:",
                n && [
                  "  Gateway URL(s):",
                  ...n.map((e) => `    ${(0, o.Gr)(e)}`),
                ],
                `  Sender: ${s}`,
                `  Data: ${t}`,
                `  Callback selector: ${e}`,
                `  Extra data: ${r}`,
              ].flat(),
            },
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "OffchainLookupError",
            });
        }
      }
      class l extends n.G {
        constructor({ result: e, url: a }) {
          super(
            "Offchain gateway response is malformed. Response data must be a hex value.",
            {
              metaMessages: [
                `Gateway URL: ${(0, o.Gr)(a)}`,
                `Response: ${(0, s.P)(e)}`,
              ],
            },
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "OffchainLookupResponseMalformedError",
            });
        }
      }
      class d extends n.G {
        constructor({ sender: e, to: a }) {
          super(
            "Reverted sender address does not match target contract address (`to`).",
            {
              metaMessages: [
                `Contract address: ${a}`,
                `OffchainLookup sender address: ${e}`,
              ],
            },
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "OffchainLookupSenderMismatchError",
            });
        }
      }
      var u = t(8822),
        i = t(1856),
        f = t(2546),
        h = t(2960),
        b = t(7451),
        p = t(9040),
        w = t(5493);
      const m = "0x556f1830",
        y = {
          name: "OffchainLookup",
          type: "error",
          inputs: [
            { name: "sender", type: "address" },
            { name: "urls", type: "string[]" },
            { name: "callData", type: "bytes" },
            { name: "callbackFunction", type: "bytes4" },
            { name: "extraData", type: "bytes" },
          ],
        };
      async function g(e, { blockNumber: a, blockTag: t, data: n, to: o }) {
        const { args: m } = (0, i.p)({ data: n, abi: [y] }),
          [g, k, O, x, G] = m;
        try {
          if (
            !(function (e, a) {
              if (!(0, b.U)(e)) throw new h.b({ address: e });
              if (!(0, b.U)(a)) throw new h.b({ address: a });
              return e.toLowerCase() === a.toLowerCase();
            })(o, g)
          )
            throw new d({ sender: g, to: o });
          const n = await (async function ({ data: e, sender: a, urls: t }) {
              let r = new Error("An unknown error occurred.");
              for (let n = 0; n < t.length; n++) {
                const o = t[n],
                  c =
                    o.includes("{sender}") || o.includes("{data}")
                      ? "GET"
                      : "POST",
                  d = "POST" === c ? { data: e, sender: a } : void 0;
                try {
                  const t = await fetch(
                    o.replace("{sender}", a).replace("{data}", e),
                    { body: JSON.stringify(d), method: c },
                  );
                  let n;
                  if (
                    ((n = t.headers
                      .get("Content-Type")
                      ?.startsWith("application/json")
                      ? (await t.json()).data
                      : await t.text()),
                    !t.ok)
                  ) {
                    r = new u.Gg({
                      body: d,
                      details: (0, s.P)(n.error) || t.statusText,
                      headers: t.headers,
                      status: t.status,
                      url: o,
                    });
                    continue;
                  }
                  if (!(0, w.v)(n)) {
                    r = new l({ result: n, url: o });
                    continue;
                  }
                  return n;
                } catch (e) {
                  r = new u.Gg({ body: d, details: e.message, url: o });
                }
              }
              throw r;
            })({ data: O, sender: g, urls: k }),
            { data: c } = await (0, r.R)(e, {
              blockNumber: a,
              blockTag: t,
              data: (0, p.zo)([
                x,
                (0, f.E)([{ type: "bytes" }, { type: "bytes" }], [n, G]),
              ]),
              to: o,
            });
          return c;
        } catch (e) {
          throw new c({
            callbackSelector: x,
            cause: e,
            data: n,
            extraData: G,
            sender: g,
            urls: k,
          });
        }
      }
    },
  },
]);
//# sourceMappingURL=663.index.js.map