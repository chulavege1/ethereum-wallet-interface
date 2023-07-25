/*! For license information please see 766.index.js.LICENSE.txt */
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [766],
  {
    1050: (e, t, r) => {
      "use strict";
      t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
      r(1416);
      const n = r(3350);
      r(7309);
      function i(e) {
        const t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.jQ = 64), (t.KS = 64), (t.aP = 32), (new Uint8Array(32)[0] = 9);
      const s = i(),
        o = i([1]),
        a =
          (i([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          i([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        c = i([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        u = i([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      i([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function l(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function h(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let n = e[r] + t + 65535;
          (t = Math.floor(n / 65536)), (e[r] = n - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function p(e, t, r) {
        const n = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          const i = n & (e[r] ^ t[r]);
          (e[r] ^= i), (t[r] ^= i);
        }
      }
      function f(e, t) {
        const r = i(),
          n = i();
        for (let e = 0; e < 16; e++) n[e] = t[e];
        h(n), h(n), h(n);
        for (let e = 0; e < 2; e++) {
          r[0] = n[0] - 65517;
          for (let e = 1; e < 15; e++)
            (r[e] = n[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
          const e = (r[15] >> 16) & 1;
          (r[14] &= 65535), p(n, r, 1 - e);
        }
        for (let t = 0; t < 16; t++)
          (e[2 * t] = 255 & n[t]), (e[2 * t + 1] = n[t] >> 8);
      }
      function d(e) {
        const t = new Uint8Array(32);
        return f(t, e), 1 & t[0];
      }
      function g(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] + r[n];
      }
      function y(e, t, r) {
        for (let n = 0; n < 16; n++) e[n] = t[n] - r[n];
      }
      function v(e, t, r) {
        let n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          l = 0,
          h = 0,
          p = 0,
          f = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          w = 0,
          _ = 0,
          b = 0,
          E = 0,
          O = 0,
          S = 0,
          I = 0,
          P = 0,
          j = 0,
          x = 0,
          N = 0,
          T = 0,
          A = 0,
          R = 0,
          C = 0,
          L = 0,
          D = 0,
          U = r[0],
          k = r[1],
          M = r[2],
          $ = r[3],
          z = r[4],
          q = r[5],
          V = r[6],
          H = r[7],
          B = r[8],
          F = r[9],
          K = r[10],
          W = r[11],
          G = r[12],
          J = r[13],
          Y = r[14],
          Z = r[15];
        (n = t[0]),
          (s += n * U),
          (o += n * k),
          (a += n * M),
          (c += n * $),
          (u += n * z),
          (l += n * q),
          (h += n * V),
          (p += n * H),
          (f += n * B),
          (d += n * F),
          (g += n * K),
          (y += n * W),
          (v += n * G),
          (m += n * J),
          (w += n * Y),
          (_ += n * Z),
          (n = t[1]),
          (o += n * U),
          (a += n * k),
          (c += n * M),
          (u += n * $),
          (l += n * z),
          (h += n * q),
          (p += n * V),
          (f += n * H),
          (d += n * B),
          (g += n * F),
          (y += n * K),
          (v += n * W),
          (m += n * G),
          (w += n * J),
          (_ += n * Y),
          (b += n * Z),
          (n = t[2]),
          (a += n * U),
          (c += n * k),
          (u += n * M),
          (l += n * $),
          (h += n * z),
          (p += n * q),
          (f += n * V),
          (d += n * H),
          (g += n * B),
          (y += n * F),
          (v += n * K),
          (m += n * W),
          (w += n * G),
          (_ += n * J),
          (b += n * Y),
          (E += n * Z),
          (n = t[3]),
          (c += n * U),
          (u += n * k),
          (l += n * M),
          (h += n * $),
          (p += n * z),
          (f += n * q),
          (d += n * V),
          (g += n * H),
          (y += n * B),
          (v += n * F),
          (m += n * K),
          (w += n * W),
          (_ += n * G),
          (b += n * J),
          (E += n * Y),
          (O += n * Z),
          (n = t[4]),
          (u += n * U),
          (l += n * k),
          (h += n * M),
          (p += n * $),
          (f += n * z),
          (d += n * q),
          (g += n * V),
          (y += n * H),
          (v += n * B),
          (m += n * F),
          (w += n * K),
          (_ += n * W),
          (b += n * G),
          (E += n * J),
          (O += n * Y),
          (S += n * Z),
          (n = t[5]),
          (l += n * U),
          (h += n * k),
          (p += n * M),
          (f += n * $),
          (d += n * z),
          (g += n * q),
          (y += n * V),
          (v += n * H),
          (m += n * B),
          (w += n * F),
          (_ += n * K),
          (b += n * W),
          (E += n * G),
          (O += n * J),
          (S += n * Y),
          (I += n * Z),
          (n = t[6]),
          (h += n * U),
          (p += n * k),
          (f += n * M),
          (d += n * $),
          (g += n * z),
          (y += n * q),
          (v += n * V),
          (m += n * H),
          (w += n * B),
          (_ += n * F),
          (b += n * K),
          (E += n * W),
          (O += n * G),
          (S += n * J),
          (I += n * Y),
          (P += n * Z),
          (n = t[7]),
          (p += n * U),
          (f += n * k),
          (d += n * M),
          (g += n * $),
          (y += n * z),
          (v += n * q),
          (m += n * V),
          (w += n * H),
          (_ += n * B),
          (b += n * F),
          (E += n * K),
          (O += n * W),
          (S += n * G),
          (I += n * J),
          (P += n * Y),
          (j += n * Z),
          (n = t[8]),
          (f += n * U),
          (d += n * k),
          (g += n * M),
          (y += n * $),
          (v += n * z),
          (m += n * q),
          (w += n * V),
          (_ += n * H),
          (b += n * B),
          (E += n * F),
          (O += n * K),
          (S += n * W),
          (I += n * G),
          (P += n * J),
          (j += n * Y),
          (x += n * Z),
          (n = t[9]),
          (d += n * U),
          (g += n * k),
          (y += n * M),
          (v += n * $),
          (m += n * z),
          (w += n * q),
          (_ += n * V),
          (b += n * H),
          (E += n * B),
          (O += n * F),
          (S += n * K),
          (I += n * W),
          (P += n * G),
          (j += n * J),
          (x += n * Y),
          (N += n * Z),
          (n = t[10]),
          (g += n * U),
          (y += n * k),
          (v += n * M),
          (m += n * $),
          (w += n * z),
          (_ += n * q),
          (b += n * V),
          (E += n * H),
          (O += n * B),
          (S += n * F),
          (I += n * K),
          (P += n * W),
          (j += n * G),
          (x += n * J),
          (N += n * Y),
          (T += n * Z),
          (n = t[11]),
          (y += n * U),
          (v += n * k),
          (m += n * M),
          (w += n * $),
          (_ += n * z),
          (b += n * q),
          (E += n * V),
          (O += n * H),
          (S += n * B),
          (I += n * F),
          (P += n * K),
          (j += n * W),
          (x += n * G),
          (N += n * J),
          (T += n * Y),
          (A += n * Z),
          (n = t[12]),
          (v += n * U),
          (m += n * k),
          (w += n * M),
          (_ += n * $),
          (b += n * z),
          (E += n * q),
          (O += n * V),
          (S += n * H),
          (I += n * B),
          (P += n * F),
          (j += n * K),
          (x += n * W),
          (N += n * G),
          (T += n * J),
          (A += n * Y),
          (R += n * Z),
          (n = t[13]),
          (m += n * U),
          (w += n * k),
          (_ += n * M),
          (b += n * $),
          (E += n * z),
          (O += n * q),
          (S += n * V),
          (I += n * H),
          (P += n * B),
          (j += n * F),
          (x += n * K),
          (N += n * W),
          (T += n * G),
          (A += n * J),
          (R += n * Y),
          (C += n * Z),
          (n = t[14]),
          (w += n * U),
          (_ += n * k),
          (b += n * M),
          (E += n * $),
          (O += n * z),
          (S += n * q),
          (I += n * V),
          (P += n * H),
          (j += n * B),
          (x += n * F),
          (N += n * K),
          (T += n * W),
          (A += n * G),
          (R += n * J),
          (C += n * Y),
          (L += n * Z),
          (n = t[15]),
          (_ += n * U),
          (b += n * k),
          (E += n * M),
          (O += n * $),
          (S += n * z),
          (I += n * q),
          (P += n * V),
          (j += n * H),
          (x += n * B),
          (N += n * F),
          (T += n * K),
          (A += n * W),
          (R += n * G),
          (C += n * J),
          (L += n * Y),
          (D += n * Z),
          (s += 38 * b),
          (o += 38 * E),
          (a += 38 * O),
          (c += 38 * S),
          (u += 38 * I),
          (l += 38 * P),
          (h += 38 * j),
          (p += 38 * x),
          (f += 38 * N),
          (d += 38 * T),
          (g += 38 * A),
          (y += 38 * R),
          (v += 38 * C),
          (m += 38 * L),
          (w += 38 * D),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = _ + i + 65535),
          (i = Math.floor(n / 65536)),
          (_ = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = _ + i + 65535),
          (i = Math.floor(n / 65536)),
          (_ = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = l),
          (e[6] = h),
          (e[7] = p),
          (e[8] = f),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = w),
          (e[15] = _);
      }
      function m(e, t) {
        v(e, t, t);
      }
      function w(e, t) {
        const r = i(),
          n = i(),
          s = i(),
          o = i(),
          c = i(),
          u = i(),
          l = i(),
          h = i(),
          p = i();
        y(r, e[1], e[0]),
          y(p, t[1], t[0]),
          v(r, r, p),
          g(n, e[0], e[1]),
          g(p, t[0], t[1]),
          v(n, n, p),
          v(s, e[3], t[3]),
          v(s, s, a),
          v(o, e[2], t[2]),
          g(o, o, o),
          y(c, n, r),
          y(u, o, s),
          g(l, o, s),
          g(h, n, r),
          v(e[0], c, u),
          v(e[1], h, l),
          v(e[2], l, u),
          v(e[3], c, h);
      }
      function _(e, t, r) {
        for (let n = 0; n < 4; n++) p(e[n], t[n], r);
      }
      function b(e, t) {
        const r = i(),
          n = i(),
          s = i();
        (function (e, t) {
          const r = i();
          let n;
          for (n = 0; n < 16; n++) r[n] = t[n];
          for (n = 253; n >= 0; n--) m(r, r), 2 !== n && 4 !== n && v(r, r, t);
          for (n = 0; n < 16; n++) e[n] = r[n];
        })(s, t[2]),
          v(r, t[0], s),
          v(n, t[1], s),
          f(e, n),
          (e[31] ^= d(r) << 7);
      }
      function E(e, t) {
        const r = [i(), i(), i(), i()];
        l(r[0], c),
          l(r[1], u),
          l(r[2], o),
          v(r[3], c, u),
          (function (e, t, r) {
            l(e[0], s), l(e[1], o), l(e[2], o), l(e[3], s);
            for (let n = 255; n >= 0; --n) {
              const i = (r[(n / 8) | 0] >> (7 & n)) & 1;
              _(e, t, i), w(t, e), w(e, e), _(e, t, i);
            }
          })(e, r, t);
      }
      t._w = function (e) {
        if (e.length !== t.aP)
          throw new Error(`ed25519: seed must be ${t.aP} bytes`);
        const r = (0, n.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        const s = new Uint8Array(32),
          o = [i(), i(), i(), i()];
        E(o, r), b(s, o);
        const a = new Uint8Array(64);
        return a.set(e), a.set(s, 32), { publicKey: s, secretKey: a };
      };
      const O = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function S(e, t) {
        let r, n, i, s;
        for (n = 63; n >= 32; --n) {
          for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
            (t[i] += r - 16 * t[n] * O[i - (n - 32)]),
              (r = Math.floor((t[i] + 128) / 256)),
              (t[i] -= 256 * r);
          (t[i] += r), (t[n] = 0);
        }
        for (r = 0, i = 0; i < 32; i++)
          (t[i] += r - (t[31] >> 4) * O[i]), (r = t[i] >> 8), (t[i] &= 255);
        for (i = 0; i < 32; i++) t[i] -= r * O[i];
        for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]);
      }
      function I(e) {
        const t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let t = 0; t < 64; t++) e[t] = 0;
        S(e, t);
      }
      t.Xx = function (e, t) {
        const r = new Float64Array(64),
          s = [i(), i(), i(), i()],
          o = (0, n.hash)(e.subarray(0, 32));
        (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
        const a = new Uint8Array(64);
        a.set(o.subarray(32), 32);
        const c = new n.SHA512();
        c.update(a.subarray(32)), c.update(t);
        const u = c.digest();
        c.clean(),
          I(u),
          E(s, u),
          b(a, s),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        const l = c.digest();
        I(l);
        for (let e = 0; e < 32; e++) r[e] = u[e];
        for (let e = 0; e < 32; e++)
          for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
        return S(a.subarray(32), r), a;
      };
    },
    3350: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(8099),
        i = r(7309);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished.",
              );
            var n = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[n++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize,
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((n = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                n,
                r,
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[n++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  o,
                ),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 8; c++)
              n.writeUint32BE(this._stateHi[c], e, 8 * c),
                n.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.stateHi),
              i.wipe(e.stateLo),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, i, s, a, c) {
        for (
          var u,
            l,
            h,
            p,
            f,
            d,
            g,
            y,
            v = r[0],
            m = r[1],
            w = r[2],
            _ = r[3],
            b = r[4],
            E = r[5],
            O = r[6],
            S = r[7],
            I = i[0],
            P = i[1],
            j = i[2],
            x = i[3],
            N = i[4],
            T = i[5],
            A = i[6],
            R = i[7];
          c >= 128;

        ) {
          for (var C = 0; C < 16; C++) {
            var L = 8 * C + a;
            (e[C] = n.readUint32BE(s, L)), (t[C] = n.readUint32BE(s, L + 4));
          }
          for (C = 0; C < 80; C++) {
            var D,
              U,
              k = v,
              M = m,
              $ = w,
              z = _,
              q = b,
              V = E,
              H = O,
              B = I,
              F = P,
              K = j,
              W = x,
              G = N,
              J = T,
              Y = A;
            if (
              ((f = 65535 & (l = R)),
              (d = l >>> 16),
              (g = 65535 & (u = S)),
              (y = u >>> 16),
              (f +=
                65535 &
                (l =
                  ((N >>> 14) | (b << 18)) ^
                  ((N >>> 18) | (b << 14)) ^
                  ((b >>> 9) | (N << 23)))),
              (d += l >>> 16),
              (g +=
                65535 &
                (u =
                  ((b >>> 14) | (N << 18)) ^
                  ((b >>> 18) | (N << 14)) ^
                  ((N >>> 9) | (b << 23)))),
              (y += u >>> 16),
              (f += 65535 & (l = (N & T) ^ (~N & A))),
              (d += l >>> 16),
              (g += 65535 & (u = (b & E) ^ (~b & O))),
              (y += u >>> 16),
              (u = o[2 * C]),
              (f += 65535 & (l = o[2 * C + 1])),
              (d += l >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = e[C % 16]),
              (d += (l = t[C % 16]) >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (g += (d += (f += 65535 & l) >>> 16) >>> 16),
              (f = 65535 & (l = p = (65535 & f) | (d << 16))),
              (d = l >>> 16),
              (g = 65535 & (u = h = (65535 & g) | ((y += g >>> 16) << 16))),
              (y = u >>> 16),
              (f +=
                65535 &
                (l =
                  ((I >>> 28) | (v << 4)) ^
                  ((v >>> 2) | (I << 30)) ^
                  ((v >>> 7) | (I << 25)))),
              (d += l >>> 16),
              (g +=
                65535 &
                (u =
                  ((v >>> 28) | (I << 4)) ^
                  ((I >>> 2) | (v << 30)) ^
                  ((I >>> 7) | (v << 25)))),
              (y += u >>> 16),
              (d += (l = (I & P) ^ (I & j) ^ (P & j)) >>> 16),
              (g += 65535 & (u = (v & m) ^ (v & w) ^ (m & w))),
              (y += u >>> 16),
              (D =
                (65535 & (g += (d += (f += 65535 & l) >>> 16) >>> 16)) |
                ((y += g >>> 16) << 16)),
              (U = (65535 & f) | (d << 16)),
              (f = 65535 & (l = W)),
              (d = l >>> 16),
              (g = 65535 & (u = z)),
              (y = u >>> 16),
              (d += (l = p) >>> 16),
              (g += 65535 & (u = h)),
              (y += u >>> 16),
              (m = k),
              (w = M),
              (_ = $),
              (b = z =
                (65535 & (g += (d += (f += 65535 & l) >>> 16) >>> 16)) |
                ((y += g >>> 16) << 16)),
              (E = q),
              (O = V),
              (S = H),
              (v = D),
              (P = B),
              (j = F),
              (x = K),
              (N = W = (65535 & f) | (d << 16)),
              (T = G),
              (A = J),
              (R = Y),
              (I = U),
              C % 16 == 15)
            )
              for (L = 0; L < 16; L++)
                (u = e[L]),
                  (f = 65535 & (l = t[L])),
                  (d = l >>> 16),
                  (g = 65535 & u),
                  (y = u >>> 16),
                  (u = e[(L + 9) % 16]),
                  (f += 65535 & (l = t[(L + 9) % 16])),
                  (d += l >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (h = e[(L + 1) % 16]),
                  (f +=
                    65535 &
                    (l =
                      (((p = t[(L + 1) % 16]) >>> 1) | (h << 31)) ^
                      ((p >>> 8) | (h << 24)) ^
                      ((p >>> 7) | (h << 25)))),
                  (d += l >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((h >>> 1) | (p << 31)) ^
                      ((h >>> 8) | (p << 24)) ^
                      (h >>> 7))),
                  (y += u >>> 16),
                  (h = e[(L + 14) % 16]),
                  (d +=
                    (l =
                      (((p = t[(L + 14) % 16]) >>> 19) | (h << 13)) ^
                      ((h >>> 29) | (p << 3)) ^
                      ((p >>> 6) | (h << 26))) >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((h >>> 19) | (p << 13)) ^
                      ((p >>> 29) | (h << 3)) ^
                      (h >>> 6))),
                  (y += u >>> 16),
                  (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
                  (e[L] = (65535 & g) | (y << 16)),
                  (t[L] = (65535 & f) | (d << 16));
          }
          (f = 65535 & (l = I)),
            (d = l >>> 16),
            (g = 65535 & (u = v)),
            (y = u >>> 16),
            (u = r[0]),
            (d += (l = i[0]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[0] = v = (65535 & g) | (y << 16)),
            (i[0] = I = (65535 & f) | (d << 16)),
            (f = 65535 & (l = P)),
            (d = l >>> 16),
            (g = 65535 & (u = m)),
            (y = u >>> 16),
            (u = r[1]),
            (d += (l = i[1]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[1] = m = (65535 & g) | (y << 16)),
            (i[1] = P = (65535 & f) | (d << 16)),
            (f = 65535 & (l = j)),
            (d = l >>> 16),
            (g = 65535 & (u = w)),
            (y = u >>> 16),
            (u = r[2]),
            (d += (l = i[2]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[2] = w = (65535 & g) | (y << 16)),
            (i[2] = j = (65535 & f) | (d << 16)),
            (f = 65535 & (l = x)),
            (d = l >>> 16),
            (g = 65535 & (u = _)),
            (y = u >>> 16),
            (u = r[3]),
            (d += (l = i[3]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[3] = _ = (65535 & g) | (y << 16)),
            (i[3] = x = (65535 & f) | (d << 16)),
            (f = 65535 & (l = N)),
            (d = l >>> 16),
            (g = 65535 & (u = b)),
            (y = u >>> 16),
            (u = r[4]),
            (d += (l = i[4]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[4] = b = (65535 & g) | (y << 16)),
            (i[4] = N = (65535 & f) | (d << 16)),
            (f = 65535 & (l = T)),
            (d = l >>> 16),
            (g = 65535 & (u = E)),
            (y = u >>> 16),
            (u = r[5]),
            (d += (l = i[5]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[5] = E = (65535 & g) | (y << 16)),
            (i[5] = T = (65535 & f) | (d << 16)),
            (f = 65535 & (l = A)),
            (d = l >>> 16),
            (g = 65535 & (u = O)),
            (y = u >>> 16),
            (u = r[6]),
            (d += (l = i[6]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[6] = O = (65535 & g) | (y << 16)),
            (i[6] = A = (65535 & f) | (d << 16)),
            (f = 65535 & (l = R)),
            (d = l >>> 16),
            (g = 65535 & (u = S)),
            (y = u >>> 16),
            (u = r[7]),
            (d += (l = i[7]) >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (y += (g += (d += (f += 65535 & l) >>> 16) >>> 16) >>> 16),
            (r[7] = S = (65535 & g) | (y << 16)),
            (i[7] = R = (65535 & f) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    926: (e, t, r) => {
      "use strict";
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function i() {
        const e = n();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = n),
        (t.getSubtleCrypto = i),
        (t.isBrowserCryptoAvailable = function () {
          return !!n() && !!i();
        });
    },
    8618: (e, t) => {
      "use strict";
      function r() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          "undefined" != typeof process &&
          void 0 !== process.versions &&
          void 0 !== process.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = r),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !r() && !n();
        });
    },
    1468: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(4308);
      n.__exportStar(r(926), t), n.__exportStar(r(8618), t);
    },
    4308: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => l,
          __classPrivateFieldGet: () => I,
          __classPrivateFieldSet: () => P,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => h,
          __importDefault: () => S,
          __importStar: () => O,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function f(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : l(s[0][2], r);
          } catch (e) {
            l(s[0][3], e);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function b(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    2766: (e, t, r) => {
      "use strict";
      r.d(t, {
        EthereumProvider: () => vo,
        OPTIONAL_EVENTS: () => no,
        OPTIONAL_METHODS: () => to,
      });
      var n = r(7187),
        i = r.n(n),
        s = r(5501),
        o = r(512),
        a = r(1416),
        c = r(3294),
        u = r(7664),
        l = r(7466),
        h = r(6736),
        p = (r(2116), r(304), r(7283), r(3368));
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const f = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function d(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      var g = r(5150),
        y = r(772),
        v = r(9107),
        m = r(8200);
      class w extends m.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class _ extends m.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class b {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class E extends m.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class O extends m.q {
        constructor(e) {
          super();
        }
      }
      class S {
        constructor(e, t, r, n) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class I extends m.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class P extends m.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class j {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class x {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class N {
        constructor(e) {
          this.client = e;
        }
      }
      var T = r(1050);
      const A = "base64url",
        R = "utf8",
        C = ":",
        L = "did",
        D = "key",
        U = "base58btc",
        k = "z",
        M = "K36";
      var $ = r(605),
        z = r(2263),
        q = r(2217);
      const V = (e) =>
        JSON.stringify(e, (e, t) =>
          "bigint" == typeof t ? t.toString() + "n" : t,
        );
      function H(e) {
        return (0, z.B)(
          (0, q.m)("string" == typeof (t = e) ? t : V(t) || "", R),
          A,
        );
        var t;
      }
      function B(e) {
        const t = (0, q.m)(M, U),
          r = k + (0, z.B)((0, $.z)([t, e]), U);
        return [L, D, r].join(C);
      }
      function F(e = (0, a.randomBytes)(32)) {
        return T._w(e);
      }
      r(3014);
      var K = function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, s = t.length; i < s; i++)
              (!n && i in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
          return e.concat(n || Array.prototype.slice.call(t));
        },
        W = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        G = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        J = function (e, t, r, n) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = n),
            (this.type = "bot-device");
        },
        Y = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        Z = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        Q =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        X = 3,
        ee = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        te = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function re(e) {
        var t = (function (e) {
          return (
            "" !== e &&
            ee.reduce(function (t, r) {
              var n = r[0],
                i = r[1];
              if (t) return t;
              var s = i.exec(e);
              return !!s && [n, s];
            }, !1)
          );
        })(e);
        if (!t) return null;
        var r = t[0],
          n = t[1];
        if ("searchbot" === r) return new Y();
        var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
        i
          ? i.length < X &&
            (i = K(
              K([], i, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(X - i.length),
              !0,
            ))
          : (i = []);
        var s = i.join("."),
          o = (function (e) {
            for (var t = 0, r = te.length; t < r; t++) {
              var n = te[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          })(e),
          a = Q.exec(e);
        return a && a[1] ? new J(r, s, o, a[1]) : new W(r, s, o);
      }
      var ne = r(8495),
        ie = r(416),
        se = r(7338);
      function oe(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      const ae = "base10",
        ce = "base16",
        ue = "base64pad",
        le = "utf8";
      function he() {
        const e = (0, a.randomBytes)(32);
        return (0, l.BB)(e, ce);
      }
      function pe(e) {
        const t = (0, c.vp)((0, l.mL)(e, le));
        return (0, l.BB)(t, ce);
      }
      function fe(e) {
        return Number((0, l.BB)(e, ae));
      }
      function de(e) {
        const t = (0, l.mL)(e, ue),
          r = t.slice(0, 1);
        if (1 === fe(r)) {
          const e = 33,
            n = e + 12,
            i = t.slice(1, e),
            s = t.slice(e, n);
          return { type: r, sealed: t.slice(n), iv: s, senderPublicKey: i };
        }
        const n = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: n };
      }
      function ge(e) {
        const t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw new Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function ye(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var ve = Object.defineProperty,
        me = Object.getOwnPropertySymbols,
        we = Object.prototype.hasOwnProperty,
        _e = Object.prototype.propertyIsEnumerable,
        be = (e, t, r) =>
          t in e
            ? ve(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ee = (e, t) => {
          for (var r in t || (t = {})) we.call(t, r) && be(e, r, t[r]);
          if (me) for (var r of me(t)) _e.call(t, r) && be(e, r, t[r]);
          return e;
        };
      const Oe = "ReactNative",
        Se = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        },
        Ie = "js";
      function Pe() {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      }
      function je() {
        return (
          !(0, ne.getDocument)() &&
          !!(0, ne.getNavigator)() &&
          navigator.product === Oe
        );
      }
      function xe() {
        return !Pe() && !!(0, ne.getNavigator)();
      }
      function Ne() {
        return je()
          ? Se.reactNative
          : Pe()
          ? Se.node
          : xe()
          ? Se.browser
          : Se.unknown;
      }
      function Te(e, t, n) {
        const i = (function () {
            if (
              Ne() === Se.reactNative &&
              typeof r.g < "u" &&
              typeof (null == r.g ? void 0 : r.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            const e = t
              ? re(t)
              : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new Z()
              : "undefined" != typeof navigator
              ? re(navigator.userAgent)
              : "undefined" != typeof process && process.version
              ? new G(process.version.slice(1))
              : null;
            var t;
            if (null === e) return "unknown";
            const n = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [n, e.name, e.version].join("-")
              : [n, e.version].join("-");
          })(),
          s = (function () {
            var e;
            const t = Ne();
            return t === Se.browser
              ? [
                  t,
                  (null == (e = (0, ne.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [Ie, n].join("-"), i, s].join("/");
      }
      function Ae(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function Re(e) {
        return Object.fromEntries(e.entries());
      }
      function Ce(e) {
        return new Map(Object.entries(e));
      }
      function Le(e = h.FIVE_MINUTES, t) {
        const r = (0, h.toMiliseconds)(e || h.FIVE_MINUTES);
        let n, i, s;
        return {
          resolve: (e) => {
            s && n && (clearTimeout(s), n(e));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (s = setTimeout(() => {
                o(new Error(t));
              }, r)),
                (n = e),
                (i = o);
            }),
        };
      }
      function De(e, t, r) {
        return new Promise(async (n, i) => {
          const s = setTimeout(() => i(new Error(r)), t);
          try {
            n(await e);
          } catch (e) {
            i(e);
          }
          clearTimeout(s);
        });
      }
      function Ue(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic',
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id',
            );
          return `id:${t}`;
        }
        throw new Error(`Unknown expirer target type: ${e}`);
      }
      function ke(e) {
        const [t, r] = e.split(":"),
          n = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) n.topic = r;
        else {
          if ("id" !== t || !Number.isInteger(Number(r)))
            throw new Error(
              `Invalid target, expected id:number or topic:string, got ${t}:${r}`,
            );
          n.id = Number(r);
        }
        return n;
      }
      function Me(e, t) {
        return (0, h.fromMiliseconds)(
          (t || Date.now()) + (0, h.toMiliseconds)(e),
        );
      }
      function $e(e) {
        return Date.now() >= (0, h.toMiliseconds)(e);
      }
      function ze(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function qe(e) {
        return e?.relay || { protocol: "irn" };
      }
      function Ve(e) {
        const t = p.RELAY_JSONRPC[e];
        if (typeof t > "u")
          throw new Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var He = Object.defineProperty,
        Be = Object.getOwnPropertySymbols,
        Fe = Object.prototype.hasOwnProperty,
        Ke = Object.prototype.propertyIsEnumerable,
        We = (e, t, r) =>
          t in e
            ? He(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      function Ge(e, t = "-") {
        const r = {},
          n = "relay" + t;
        return (
          Object.keys(e).forEach((t) => {
            if (t.startsWith(n)) {
              const i = t.replace(n, ""),
                s = e[t];
              r[i] = s;
            }
          }),
          r
        );
      }
      function Je(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function Ye(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [r, n] = e.split(":");
            t.push(`${r}:${n}`);
          }),
          t
        );
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Ze = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        Qe = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function Xe(e, t) {
        const { message: r, code: n } = Qe[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function et(e, t) {
        const { message: r, code: n } = Ze[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function tt(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function rt(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function nt(e) {
        return typeof e > "u";
      }
      function it(e, t) {
        return !(!t || !nt(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function st(e, t) {
        return !(!t || !nt(e)) || ("number" == typeof e && !isNaN(e));
      }
      function ot(e) {
        return !(!it(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function at(e) {
        let t = !0;
        return (
          tt(e) ? e.length && (t = e.every((e) => it(e, !1))) : (t = !1), t
        );
      }
      function ct(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            if (r) return;
            const n = (function (e, t) {
              let r = null;
              return (
                at(e?.methods)
                  ? at(e?.events) ||
                    (r = et(
                      "UNSUPPORTED_EVENTS",
                      `${t}, events should be an array of strings or empty array for no events`,
                    ))
                  : (r = et(
                      "UNSUPPORTED_METHODS",
                      `${t}, methods should be an array of strings or empty array for no methods`,
                    )),
                r
              );
            })(e, `${t}, namespace`);
            n && (r = n);
          }),
          r
        );
      }
      function ut(e, t) {
        let r = null;
        if (e && rt(e)) {
          const n = ct(e, t);
          n && (r = n);
          const i = (function (e, t) {
            let r = null;
            return (
              Object.values(e).forEach((e) => {
                if (r) return;
                const n = (function (e, t) {
                  let r = null;
                  return (
                    tt(e)
                      ? e.forEach((e) => {
                          r ||
                            (function (e) {
                              if (it(e, !1) && e.includes(":")) {
                                const t = e.split(":");
                                if (3 === t.length) {
                                  const e = t[0] + ":" + t[1];
                                  return !!t[2] && ot(e);
                                }
                              }
                              return !1;
                            })(e) ||
                            (r = et(
                              "UNSUPPORTED_ACCOUNTS",
                              `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`,
                            ));
                        })
                      : (r = et(
                          "UNSUPPORTED_ACCOUNTS",
                          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`,
                        )),
                    r
                  );
                })(e?.accounts, `${t} namespace`);
                n && (r = n);
              }),
              r
            );
          })(e, t);
          i && (r = i);
        } else
          r = Xe(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`,
          );
        return r;
      }
      function lt(e) {
        return it(e.protocol, !0);
      }
      function ht(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function pt(e, t) {
        return !(
          !ot(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...Ye(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function ft(e, t, r) {
        let n = null;
        const i = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                var n;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (n = e[r].chains) ||
                    n.forEach((n) => {
                      t[n] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  const n = Ye(e[r].accounts);
                  n?.forEach((n) => {
                    t[n] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${n}:`),
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(i),
          a = Object.keys(s),
          c = dt(Object.keys(e)),
          u = dt(Object.keys(t)),
          l = c.filter((e) => !u.includes(e));
        return (
          l.length &&
            (n = Xe(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(
                t,
              ).toString()}`,
            )),
          Ae(o, a) ||
            (n = Xe(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`,
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || n) return;
            const i = Ye(t[e].accounts);
            i.includes(e) ||
              (n = Xe(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`,
              ));
          }),
          o.forEach((e) => {
            n ||
              (Ae(i[e].methods, s[e].methods)
                ? Ae(i[e].events, s[e].events) ||
                  (n = Xe(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`,
                  ))
                : (n = Xe(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`,
                  )));
          }),
          n
        );
      }
      function dt(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      const gt = "INTERNAL_ERROR",
        yt = "SERVER_ERROR",
        vt = [-32700, -32600, -32601, -32602, -32603],
        mt = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [gt]: { code: -32603, message: "Internal error" },
          [yt]: { code: -32e3, message: "Server error" },
        },
        wt = yt;
      function _t(e) {
        return Object.keys(mt).includes(e) ? mt[e] : mt[wt];
      }
      function bt(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var Et = r(1468);
      function Ot(e = 3) {
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function St(e = 6) {
        return BigInt(Ot(e));
      }
      function It(e, t, r) {
        return { id: r || Ot(), jsonrpc: "2.0", method: e, params: t };
      }
      function Pt(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function jt(e, t, r) {
        return { id: e, jsonrpc: "2.0", error: xt(t, r) };
      }
      function xt(e, t) {
        return void 0 === e
          ? _t(gt)
          : ("string" == typeof e &&
              (e = Object.assign(Object.assign({}, _t(yt)), { message: e })),
            void 0 !== t && (e.data = t),
            (r = e.code),
            vt.includes(r) &&
              (e = (function (e) {
                return Object.values(mt).find((t) => t.code === e) || mt[wt];
              })(e.code)),
            e);
        var r;
      }
      class Nt {}
      class Tt extends Nt {
        constructor() {
          super();
        }
      }
      class At extends Tt {
        constructor(e) {
          super();
        }
      }
      function Rt(e, t) {
        const r = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function Ct(e) {
        return Rt(e, "^https?:");
      }
      function Lt(e) {
        return Rt(e, "^wss?:");
      }
      function Dt(e) {
        return new RegExp("wss?://localhost(:d{2,5})?").test(e);
      }
      function Ut(e) {
        return (
          "object" == typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function kt(e) {
        return Ut(e) && "method" in e;
      }
      function Mt(e) {
        return Ut(e) && ($t(e) || zt(e));
      }
      function $t(e) {
        return "result" in e;
      }
      function zt(e) {
        return "error" in e;
      }
      class qt extends At {
        constructor(e) {
          super(e),
            (this.events = new n.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            It(e.method, e.params || [], e.id || St().toString()),
            t,
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, n) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                n(e);
              }
            this.events.on(`${e.id}`, (e) => {
              zt(e) ? n(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              n(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            Mt(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`,
              ),
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const Vt = (e) => e.split("?")[0],
        Ht =
          void 0 !== r.g && void 0 !== r.g.WebSocket
            ? r.g.WebSocket
            : "undefined" != typeof window && void 0 !== window.WebSocket
            ? window.WebSocket
            : r(7026);
      var Bt = r(2307),
        Ft = r.n(Bt),
        Kt = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            l = Math.log(256) / Math.log(a);
          function h(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var n = 0, i = 0; e[t] === c; ) n++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var l = r[e.charCodeAt(t)];
                if (255 === l) return;
                for (
                  var h = 0, p = s - 1;
                  (0 !== l || h < i) && -1 !== p;
                  p--, h++
                )
                  (l += (a * o[p]) >>> 0),
                    (o[p] = l % 256 >>> 0),
                    (l = (l / 256) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (i = h), t++;
              }
              if (" " !== e[t]) {
                for (var f = s - i; f !== s && 0 === o[f]; ) f++;
                for (var d = new Uint8Array(n + (s - f)), g = n; f !== s; )
                  d[g++] = o[f++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * l + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var h = t[i], p = 0, f = o - 1;
                  (0 !== h || p < n) && -1 !== f;
                  f--, p++
                )
                  (h += (256 * u[f]) >>> 0),
                    (u[f] = h % a >>> 0),
                    (h = (h / a) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (n = p), i++;
              }
              for (var d = o - n; d !== o && 0 === u[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
              return g;
            },
            decodeUnsafe: h,
            decode: function (e) {
              var r = h(e);
              if (r) return r;
              throw new Error(`Non-${t} character`);
            },
          };
        };
      const Wt = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class Gt {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class Jt {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`,
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return Zt(this, e);
        }
      }
      class Yt {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Zt(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e,
            )}, only inputs prefixed with ${Object.keys(
              this.decoders,
            )} are supported`,
          );
        }
      }
      const Zt = (e, t) =>
        new Yt({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class Qt {
        constructor(e, t, r, n) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new Gt(e, t, r)),
            (this.decoder = new Jt(e, t, n));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const Xt = ({ name: e, prefix: t, encode: r, decode: n }) =>
          new Qt(e, t, r, n),
        er = ({ prefix: e, name: t, alphabet: r }) => {
          const { encode: n, decode: i } = Kt(r, t);
          return Xt({ prefix: e, name: t, encode: n, decode: (e) => Wt(i(e)) });
        },
        tr = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) =>
          Xt({
            prefix: t,
            name: e,
            encode: (e) =>
              ((e, t, r) => {
                const n = "=" === t[t.length - 1],
                  i = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let n = 0; n < e.length; ++n)
                  for (a = (a << 8) | e[n], o += 8; o > r; )
                    (o -= r), (s += t[i & (a >> o)]);
                if ((o && (s += t[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(e, n, r),
            decode: (t) =>
              ((e, t, r, n) => {
                const i = {};
                for (let e = 0; e < t.length; ++e) i[t[e]] = e;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let t = 0; t < s; ++t) {
                  const s = i[e[t]];
                  if (void 0 === s) throw new SyntaxError(`Non-${n} character`);
                  (c = (c << r) | s),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(t, n, r, e),
          }),
        rr = Xt({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var nr = Object.freeze({ __proto__: null, identity: rr });
      const ir = tr({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var sr = Object.freeze({ __proto__: null, base2: ir });
      const or = tr({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var ar = Object.freeze({ __proto__: null, base8: or });
      const cr = er({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var ur = Object.freeze({ __proto__: null, base10: cr });
      const lr = tr({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        hr = tr({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var pr = Object.freeze({ __proto__: null, base16: lr, base16upper: hr });
      const fr = tr({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        dr = tr({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        gr = tr({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        yr = tr({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        vr = tr({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        mr = tr({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        wr = tr({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        _r = tr({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        br = tr({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Er = Object.freeze({
        __proto__: null,
        base32: fr,
        base32upper: dr,
        base32pad: gr,
        base32padupper: yr,
        base32hex: vr,
        base32hexupper: mr,
        base32hexpad: wr,
        base32hexpadupper: _r,
        base32z: br,
      });
      const Or = er({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Sr = er({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Ir = Object.freeze({ __proto__: null, base36: Or, base36upper: Sr });
      const Pr = er({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        jr = er({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var xr = Object.freeze({
        __proto__: null,
        base58btc: Pr,
        base58flickr: jr,
      });
      const Nr = tr({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Tr = tr({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Ar = tr({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Rr = tr({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Cr = Object.freeze({
        __proto__: null,
        base64: Nr,
        base64pad: Tr,
        base64url: Ar,
        base64urlpad: Rr,
      });
      const Lr = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂",
        ),
        Dr = Lr.reduce((e, t, r) => ((e[r] = t), e), []),
        Ur = Lr.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        kr = Xt({
          prefix: "🚀",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => e + Dr[t], "");
          },
          decode: function (e) {
            const t = [];
            for (const r of e) {
              const e = Ur[r.codePointAt(0)];
              if (void 0 === e)
                throw new Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var Mr = Object.freeze({ __proto__: null, base256emoji: kr }),
        $r = 128,
        zr = -128,
        qr = Math.pow(2, 31),
        Vr = Math.pow(2, 7),
        Hr = Math.pow(2, 14),
        Br = Math.pow(2, 21),
        Fr = Math.pow(2, 28),
        Kr = Math.pow(2, 35),
        Wr = Math.pow(2, 42),
        Gr = Math.pow(2, 49),
        Jr = Math.pow(2, 56),
        Yr = Math.pow(2, 63),
        Zr = function e(t, r, n) {
          r = r || [];
          for (var i = (n = n || 0); t >= qr; )
            (r[n++] = (255 & t) | $r), (t /= 128);
          for (; t & zr; ) (r[n++] = (255 & t) | $r), (t >>>= 7);
          return (r[n] = 0 | t), (e.bytes = n - i + 1), r;
        },
        Qr = function (e) {
          return e < Vr
            ? 1
            : e < Hr
            ? 2
            : e < Br
            ? 3
            : e < Fr
            ? 4
            : e < Kr
            ? 5
            : e < Wr
            ? 6
            : e < Gr
            ? 7
            : e < Jr
            ? 8
            : e < Yr
            ? 9
            : 10;
        };
      const Xr = (e, t, r = 0) => (Zr(e, t, r), t),
        en = (e) => Qr(e),
        tn = (e, t) => {
          const r = t.byteLength,
            n = en(e),
            i = n + en(r),
            s = new Uint8Array(i + r);
          return Xr(e, s, 0), Xr(r, s, n), s.set(t, i), new rn(e, r, t, s);
        };
      class rn {
        constructor(e, t, r, n) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = n);
        }
      }
      const nn = ({ name: e, code: t, encode: r }) => new sn(e, t, r);
      class sn {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? tn(this.code, t)
              : t.then((e) => tn(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const on = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        an = nn({ name: "sha2-256", code: 18, encode: on("SHA-256") }),
        cn = nn({ name: "sha2-512", code: 19, encode: on("SHA-512") });
      Object.freeze({ __proto__: null, sha256: an, sha512: cn });
      const un = Wt,
        ln = {
          code: 0,
          name: "identity",
          encode: un,
          digest: (e) => tn(0, un(e)),
        };
      Object.freeze({ __proto__: null, identity: ln }),
        new TextEncoder(),
        new TextDecoder();
      const hn = {
        ...nr,
        ...sr,
        ...ar,
        ...ur,
        ...pr,
        ...Er,
        ...Ir,
        ...xr,
        ...Cr,
        ...Mr,
      };
      function pn(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function fn(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const dn = fn(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1)),
        ),
        gn = fn(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            const t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? pn(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          },
        ),
        yn = {
          utf8: dn,
          "utf-8": dn,
          hex: hn.base16,
          latin1: gn,
          ascii: gn,
          binary: gn,
          ...hn,
        },
        vn = "core",
        mn = `wc@2:${vn}:`,
        wn = { database: ":memory:" },
        _n = "client_ed25519_seed",
        bn = h.ONE_DAY,
        En = h.SIX_HOURS,
        On = "wss://relay.walletconnect.com",
        Sn = "wss://relay.walletconnect.org",
        In = "relayer_message",
        Pn = "relayer_message_ack",
        jn = "relayer_connect",
        xn = "relayer_disconnect",
        Nn = "relayer_connection_stalled",
        Tn = "relayer_transport_closed",
        An = "relayer_publish",
        Rn = "disconnect",
        Cn = h.ONE_SECOND / 2,
        Ln = "subscription_created",
        Dn = "subscription_deleted",
        Un = "subscription_resubscribed",
        kn = 1e3 * h.FIVE_SECONDS,
        Mn = {
          wc_pairingDelete: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        $n = "history_created",
        zn = "history_updated",
        qn = "history_deleted",
        Vn = "expirer_created",
        Hn = "expirer_deleted",
        Bn = "expirer_expired",
        Fn = "verify-api",
        Kn = "https://verify.walletconnect.com";
      class Wn {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = Xe(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`,
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, v.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, Re(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? Ce(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Gn {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => (
              this.isInitialized(), B(F(await this.getClientSeed()).publicKey)
            )),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = u.Au();
                return {
                  privateKey: (0, l.BB)(e.secretKey, ce),
                  publicKey: (0, l.BB)(e.publicKey, ce),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = F(await this.getClientSeed()),
                r = he(),
                n = bn;
              return await (async function (
                e,
                t,
                r,
                n,
                i = (0, h.fromMiliseconds)(Date.now()),
              ) {
                const s = { alg: "EdDSA", typ: "JWT" },
                  o = {
                    iss: B(n.publicKey),
                    sub: e,
                    aud: t,
                    iat: i,
                    exp: i + r,
                  },
                  a =
                    ((c = { header: s, payload: o }),
                    (0, q.m)([H(c.header), H(c.payload)].join("."), "utf8"));
                var c;
                return (function (e) {
                  return [
                    H(e.header),
                    H(e.payload),
                    ((t = e.signature), (0, z.B)(t, A)),
                  ].join(".");
                  var t;
                })({ header: s, payload: o, signature: T.Xx(n.secretKey, a) });
              })(r, e, n, t);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = u.gi((0, l.mL)(e, ce), (0, l.mL)(t, ce)),
                  n = new o.t(c.mE, r).expand(32);
                return (0, l.BB)(n, ce);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(n, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r =
                t ||
                (function (e) {
                  const t = (0, c.vp)((0, l.mL)(e, ce));
                  return (0, l.BB)(t, ce);
                })(e);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              const n = ge(r),
                i =
                  "string" == typeof (o = t)
                    ? o
                    : ((c = o),
                      JSON.stringify(c, (e, t) =>
                        "bigint" == typeof t ? t.toString() + "n" : t,
                      ) || "");
              var o, c;
              if (ye(n)) {
                const t = n.senderPublicKey,
                  r = n.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const u = this.getSymKey(e),
                { type: h, senderPublicKey: p } = n;
              return (function (e) {
                const t = (function (e) {
                  return (0, l.mL)(`${e}`, ae);
                })(typeof e.type < "u" ? e.type : 0);
                if (1 === fe(t) && typeof e.senderPublicKey > "u")
                  throw new Error(
                    "Missing sender public key for type 1 envelope",
                  );
                const r =
                    typeof e.senderPublicKey < "u"
                      ? (0, l.mL)(e.senderPublicKey, ce)
                      : void 0,
                  n =
                    typeof e.iv < "u"
                      ? (0, l.mL)(e.iv, ce)
                      : (0, a.randomBytes)(12);
                return (function (e) {
                  if (1 === fe(e.type)) {
                    if (typeof e.senderPublicKey > "u")
                      throw new Error(
                        "Missing sender public key for type 1 envelope",
                      );
                    return (0, l.BB)(
                      (0, l.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]),
                      ue,
                    );
                  }
                  return (0, l.BB)((0, l.zo)([e.type, e.iv, e.sealed]), ue);
                })({
                  type: t,
                  sealed: new s.OK((0, l.mL)(e.symKey, ce)).seal(
                    n,
                    (0, l.mL)(e.message, le),
                  ),
                  iv: n,
                  senderPublicKey: r,
                });
              })({ type: h, symKey: u, message: i, senderPublicKey: p });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              const n = (function (e, t) {
                const r = de(e);
                return ge({
                  type: fe(r.type),
                  senderPublicKey:
                    typeof r.senderPublicKey < "u"
                      ? (0, l.BB)(r.senderPublicKey, ce)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (ye(n)) {
                const t = n.receiverPublicKey,
                  r = n.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const i = (function (e) {
                const t = new s.OK((0, l.mL)(e.symKey, ce)),
                  { sealed: r, iv: n } = de(e.encoded),
                  i = t.open(n, r);
                if (null === i) throw new Error("Failed to decrypt");
                return (0, l.BB)(i, le);
              })({ symKey: this.getSymKey(e), encoded: t });
              return (function (e) {
                if ("string" != typeof e)
                  throw new Error(
                    "Cannot safe json parse value of type " + typeof e,
                  );
                try {
                  return ((e) => {
                    const t = e.replace(
                      /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                      '$1"$2n"$3',
                    );
                    return JSON.parse(t, (e, t) =>
                      "string" == typeof t && t.match(/^\d+n$/)
                        ? BigInt(t.substring(0, t.length - 1))
                        : t,
                    );
                  })(e);
                } catch (t) {
                  return e;
                }
              })(i);
            }),
            (this.getPayloadType = (e) => fe(de(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              const t = de(e);
              return t.senderPublicKey
                ? (0, l.BB)(t.senderPublicKey, ce)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.keychain = r || new Wn(this.core, this.logger));
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(_n);
          } catch {
            (e = he()), await this.keychain.set(_n, e);
          }
          return (function (e, t = "utf8") {
            const r = yn[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${e}`)
              : pn(globalThis.Buffer.from(e, "utf-8"));
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Jn extends b {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`,
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`,
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const r = pe(t);
              let n = this.messages.get(e);
              return (
                typeof n > "u" && (n = {}),
                typeof n[r] < "u" ||
                  ((n[r] = t), this.messages.set(e, n), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), typeof this.get(e)[pe(t)] < "u"
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, v.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, Re(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? Ce(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Yn extends E {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new n.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, h.toMiliseconds)(h.TEN_SECONDS)),
            (this.queueTimeout = (0, h.toMiliseconds)(h.FIVE_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                const n = r?.ttl || En,
                  i = qe(r),
                  s = r?.prompt || !1,
                  o = r?.tag || 0,
                  a = r?.id || St().toString(),
                  c = {
                    topic: e,
                    message: t,
                    opts: { ttl: n, relay: i, prompt: s, tag: o, id: a },
                  },
                  u = setTimeout(() => this.queue.set(a, c), this.queueTimeout);
                try {
                  await await De(
                    this.rpcPublish(e, t, n, i, s, o, a),
                    this.publishTimeout,
                  ),
                    clearTimeout(u),
                    this.relayer.events.emit(An, c);
                } catch {
                  return (
                    this.logger.debug("Publishing Payload stalled"),
                    void (this.needsTransportRestart = !0)
                  );
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, r, n, i, s, o) {
          var a, c, u, l;
          const h = {
            method: Ve(n.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: i, tag: s },
            id: o,
          };
          return (
            nt(null == (a = h.params) ? void 0 : a.prompt) &&
              (null == (c = h.params) || delete c.prompt),
            nt(null == (u = h.params) ? void 0 : u.tag) &&
              (null == (l = h.params) || delete l.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: h,
            }),
            this.relayer.request(h)
          );
        }
        onPublish(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            const { topic: t, message: r, opts: n } = e;
            await this.publish(t, r, n);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(Nn)
              );
            this.checkQueue();
          }),
            this.relayer.on(Pn, (e) => {
              this.onPublish(e.id.toString());
            });
        }
      }
      class Zn {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const n = r.filter((e) => e !== t);
              n.length ? this.map.set(e, n) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Qn = Object.defineProperty,
        Xn = Object.defineProperties,
        ei = Object.getOwnPropertyDescriptors,
        ti = Object.getOwnPropertySymbols,
        ri = Object.prototype.hasOwnProperty,
        ni = Object.prototype.propertyIsEnumerable,
        ii = (e, t, r) =>
          t in e
            ? Qn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        si = (e, t) => {
          for (var r in t || (t = {})) ri.call(t, r) && ii(e, r, t[r]);
          if (ti) for (var r of ti(t)) ni.call(t, r) && ii(e, r, t[r]);
          return e;
        },
        oi = (e, t) => Xn(e, ei(t));
      class ai extends I {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new Zn()),
            (this.events = new n.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = mn),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restart(),
                this.registerEventListeners(),
                this.onEnable(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const r = qe(t),
                  n = { topic: e, relay: r };
                this.pending.set(e, n);
                const i = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(i, n),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  i
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof t?.id < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, r) => {
                const n = new h.Watch();
                n.start(this.pendingSubscriptionWatchLabel);
                const i = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(i),
                    n.stop(this.pendingSubscriptionWatchLabel),
                    t(!0)),
                    n.elapsed(this.pendingSubscriptionWatchLabel) >= kn &&
                      (clearInterval(i),
                      n.stop(this.pendingSubscriptionWatchLabel),
                      r(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t)),
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            const n = qe(r);
            await this.rpcUnsubscribe(e, t, n);
            const i = et("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, i),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          const r = { method: Ve(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await De(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(Nn);
          }
          return pe(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: Ve(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await De(
              this.relayer.request(t),
              this.subscribeTimeout,
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(Nn);
          }
        }
        rpcUnsubscribe(e, t, r) {
          const n = {
            method: Ve(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            }),
            this.relayer.request(n)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, oi(si({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, si({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, si({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(Ln, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = Xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(Dn, oi(si({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit("subscription_sync");
        }
        async reset() {
          if (this.cached.length) {
            const e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit,
            );
            for (let t = 0; t < e; t++) {
              const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(Un);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = Xe("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`,
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`,
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          const t = await this.rpcBatchSubscribe(e);
          tt(t) &&
            this.onBatchSubscribe(t.map((t, r) => oi(si({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (this.relayer.transportExplicitlyClosed) return;
          const e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(jn, async () => {
              await this.onConnect();
            }),
            this.relayer.on(xn, () => {
              this.onDisconnect();
            }),
            this.events.on(Ln, async (e) => {
              const t = Ln;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(Dn, async (e) => {
              const t = Dn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var ci = Object.defineProperty,
        ui = Object.getOwnPropertySymbols,
        li = Object.prototype.hasOwnProperty,
        hi = Object.prototype.propertyIsEnumerable,
        pi = (e, t, r) =>
          t in e
            ? ci(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
      class fi extends O {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new n.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.reconnecting = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(e)
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? (0, v.generateChildLogger)(e.logger, this.name)
                : (0, v.pino)(
                    (0, v.getDefaultLoggerOptions)({
                      level: e.logger || "error",
                    }),
                  )),
            (this.messages = new Jn(this.logger, e.core)),
            (this.subscriber = new ai(this, this.logger)),
            (this.publisher = new Yn(this, this.logger)),
            (this.relayUrl = e?.relayUrl || On),
            (this.projectId = e.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Sn}...`,
            ),
              await this.restartTransport(Sn);
          }
          this.registerEventListeners(),
            (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport",
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          this.isInitialized();
          let n =
            (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
            "";
          return (
            n ||
            (await Promise.all([
              new Promise((t) => {
                this.subscriber.once(Ln, (r) => {
                  r.topic === e && t();
                });
              }),
              new Promise(async (r) => {
                (n = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            n)
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.connected &&
              (await this.provider.disconnect(), this.events.emit(Tn));
        }
        async transportOpen(e) {
          if (((this.transportExplicitlyClosed = !1), !this.reconnecting)) {
            (this.relayUrl = e || this.relayUrl), (this.reconnecting = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  this.initialized || e(),
                    this.subscriber.once(Un, () => {
                      e();
                    });
                }),
                await Promise.race([
                  new Promise(async (e, t) => {
                    await De(
                      this.provider.connect(),
                      5e3,
                      `Socket stalled when trying to connect to ${this.relayUrl}`,
                    )
                      .catch((e) => t(e))
                      .then(() => e())
                      .finally(() =>
                        this.removeListener(Tn, this.rejectTransportOpen),
                      );
                  }),
                  new Promise((e) => this.once(Tn, this.rejectTransportOpen)),
                ]),
              ]);
            } catch (e) {
              this.logger.error(e);
              const t = e;
              if (!this.isConnectionStalled(t.message)) throw e;
              this.events.emit(Tn);
            } finally {
              this.reconnecting = !1;
            }
          }
        }
        async restartTransport(e) {
          this.transportExplicitlyClosed ||
            this.reconnecting ||
            ((this.relayUrl = e || this.relayUrl),
            this.connected &&
              (await Promise.all([
                new Promise((e) => {
                  this.provider.once(Rn, () => {
                    e();
                  });
                }),
                this.transportClose(),
              ])),
            await this.createProvider(),
            await this.transportOpen());
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        rejectTransportOpen() {
          throw new Error(
            "Attempt to connect to relay via `transportOpen` has stalled. Retrying...",
          );
        }
        async createProvider() {
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new qt(
            new (class {
              constructor(e) {
                if (
                  ((this.url = e),
                  (this.events = new n.EventEmitter()),
                  (this.registering = !1),
                  !Lt(e))
                )
                  throw new Error(
                    `Provided URL is not compatible with WebSocket connection: ${e}`,
                  );
                this.url = e;
              }
              get connected() {
                return void 0 !== this.socket;
              }
              get connecting() {
                return this.registering;
              }
              on(e, t) {
                this.events.on(e, t);
              }
              once(e, t) {
                this.events.once(e, t);
              }
              off(e, t) {
                this.events.off(e, t);
              }
              removeListener(e, t) {
                this.events.removeListener(e, t);
              }
              async open(e = this.url) {
                await this.register(e);
              }
              async close() {
                return new Promise((e, t) => {
                  void 0 !== this.socket
                    ? ((this.socket.onclose = (t) => {
                        this.onClose(t), e();
                      }),
                      this.socket.close())
                    : t(new Error("Connection already closed"));
                });
              }
              async send(e, t) {
                void 0 === this.socket && (this.socket = await this.register());
                try {
                  this.socket.send(
                    "string" == typeof (r = e)
                      ? r
                      : ((n = r),
                        JSON.stringify(n, (e, t) =>
                          "bigint" == typeof t ? t.toString() + "n" : t,
                        ) || ""),
                  );
                } catch (t) {
                  this.onError(e.id, t);
                }
                var r, n;
              }
              register(e = this.url) {
                if (!Lt(e))
                  throw new Error(
                    `Provided URL is not compatible with WebSocket connection: ${e}`,
                  );
                if (this.registering) {
                  const e = this.events.getMaxListeners();
                  return (
                    (this.events.listenerCount("register_error") >= e ||
                      this.events.listenerCount("open") >= e) &&
                      this.events.setMaxListeners(e + 1),
                    new Promise((e, t) => {
                      this.events.once("register_error", (e) => {
                        this.resetMaxListeners(), t(e);
                      }),
                        this.events.once("open", () => {
                          if (
                            (this.resetMaxListeners(), void 0 === this.socket)
                          )
                            return t(
                              new Error(
                                "WebSocket connection is missing or invalid",
                              ),
                            );
                          e(this.socket);
                        });
                    })
                  );
                }
                return (
                  (this.url = e),
                  (this.registering = !0),
                  new Promise((t, r) => {
                    const n = (0, Et.isReactNative)()
                        ? void 0
                        : { rejectUnauthorized: !Dt(e) },
                      i = new Ht(e, [], n);
                    "undefined" != typeof window
                      ? (i.onerror = (e) => {
                          const t = e;
                          r(this.emitError(t.error));
                        })
                      : i.on("error", (e) => {
                          r(this.emitError(e));
                        }),
                      (i.onopen = () => {
                        this.onOpen(i), t(i);
                      });
                  })
                );
              }
              onOpen(e) {
                (e.onmessage = (e) => this.onPayload(e)),
                  (e.onclose = (e) => this.onClose(e)),
                  (this.socket = e),
                  (this.registering = !1),
                  this.events.emit("open");
              }
              onClose(e) {
                (this.socket = void 0),
                  (this.registering = !1),
                  this.events.emit("close", e);
              }
              onPayload(e) {
                if (void 0 === e.data) return;
                const t =
                  "string" == typeof e.data
                    ? (function (e) {
                        if ("string" != typeof e)
                          throw new Error(
                            "Cannot safe json parse value of type " + typeof e,
                          );
                        try {
                          return ((e) => {
                            const t = e.replace(
                              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                              '$1"$2n"$3',
                            );
                            return JSON.parse(t, (e, t) =>
                              "string" == typeof t && t.match(/^\d+n$/)
                                ? BigInt(t.substring(0, t.length - 1))
                                : t,
                            );
                          })(e);
                        } catch (t) {
                          return e;
                        }
                      })(e.data)
                    : e.data;
                this.events.emit("payload", t);
              }
              onError(e, t) {
                const r = this.parseError(t),
                  n = jt(e, r.message || r.toString());
                this.events.emit("payload", n);
              }
              parseError(e, t = this.url) {
                return bt(e, Vt(t), "WS");
              }
              resetMaxListeners() {
                this.events.getMaxListeners() > 10 &&
                  this.events.setMaxListeners(10);
              }
              emitError(e) {
                const t = this.parseError(
                  new Error(
                    (null == e ? void 0 : e.message) ||
                      `WebSocket connection failed for host: ${Vt(this.url)}`,
                  ),
                );
                return this.events.emit("register_error", t), t;
              }
            })(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: n,
                auth: i,
                projectId: s,
                useOnCloseEvent: o,
              }) {
                const a = r.split("?"),
                  c = {
                    auth: i,
                    ua: Te(e, t, n),
                    projectId: s,
                    useOnCloseEvent: o || void 0,
                  },
                  u = (function (e, t) {
                    let r = se.parse(e);
                    return (r = Ee(Ee({}, r), t)), se.stringify(r);
                  })(a[1] || "", c);
                return a[0] + "?" + u;
              })({
                sdkVersion: "2.9.0",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
              }),
            ),
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: r } = e;
          return (
            !(await this.subscriber.isSubscribed(t)) || this.messages.has(t, r)
          );
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            kt(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: r, message: n, publishedAt: i } = t.data,
              s = { topic: r, message: n, publishedAt: i };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((e, t) => {
                  for (var r in t || (t = {})) li.call(t, r) && pi(e, r, t[r]);
                  if (ui) for (var r of ui(t)) hi.call(t, r) && pi(e, r, t[r]);
                  return e;
                })({ type: "event", event: t.id }, s),
              ),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else Mt(e) && this.events.emit(Pn, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(In, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = Pt(e.id, !0);
          await this.provider.connection.send(t);
        }
        registerProviderListeners() {
          this.provider.on("payload", (e) => this.onProviderPayload(e)),
            this.provider.on("connect", () => {
              this.events.emit(jn);
            }),
            this.provider.on(Rn, () => {
              this.onProviderDisconnect();
            }),
            this.provider.on("error", (e) => {
              this.logger.error(e), this.events.emit("relayer_error", e);
            });
        }
        registerEventListeners() {
          this.events.on(Nn, async () => {
            await this.restartTransport();
          });
        }
        onProviderDisconnect() {
          this.events.emit(xn), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            setTimeout(
              async () => {
                await this.restartTransport();
              },
              (0, h.toMiliseconds)(Cn),
            );
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          if (!this.connected) {
            if (this.connecting)
              return await new Promise((e) => {
                const t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var di = Object.defineProperty,
        gi = Object.getOwnPropertySymbols,
        yi = Object.prototype.hasOwnProperty,
        vi = Object.prototype.propertyIsEnumerable,
        mi = (e, t, r) =>
          t in e
            ? di(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        wi = (e, t) => {
          for (var r in t || (t = {})) yi.call(t, r) && mi(e, r, t[r]);
          if (gi) for (var r of gi(t)) vi.call(t, r) && mi(e, r, t[r]);
          return e;
        };
      class _i extends S {
        constructor(e, t, r, n = mn, i = void 0) {
          super(e, t, r, n),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !nt(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null == (t = e?.proposer) ? void 0 : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : (function (e) {
                        return e?.topic;
                      })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => Ft()(t[r], e[r])),
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const r = wi(wi({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.storagePrefix = n),
            (this.getKey = i);
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            const { message: t } = Xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = Xe("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class bi {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const e = he(),
                t = await this.core.crypto.setSymKey(e),
                r = Me(h.FIVE_MINUTES),
                n = { protocol: "irn" },
                i = { topic: t, expiry: r, relay: n, active: !1 },
                s = (function (e) {
                  return (
                    `${e.protocol}:${e.topic}@${e.version}?` +
                    se.stringify(
                      ((e, t) => {
                        for (var r in t || (t = {}))
                          Fe.call(t, r) && We(e, r, t[r]);
                        if (Be)
                          for (var r of Be(t)) Ke.call(t, r) && We(e, r, t[r]);
                        return e;
                      })(
                        { symKey: e.symKey },
                        (function (e, t = "-") {
                          const r = {};
                          return (
                            Object.keys(e).forEach((n) => {
                              const i = "relay" + t + n;
                              e[n] && (r[i] = e[n]);
                            }),
                            r
                          );
                        })(e.relay),
                      ),
                    )
                  );
                })({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: n,
                });
              return (
                await this.pairings.set(t, i),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, r),
                { topic: t, uri: s }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              const {
                topic: t,
                symKey: r,
                relay: n,
              } = (function (e) {
                const t = e.indexOf(":"),
                  r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                  n = e.substring(0, t),
                  i = e.substring(t + 1, r).split("@"),
                  s = typeof r < "u" ? e.substring(r) : "",
                  o = se.parse(s);
                return {
                  protocol: n,
                  topic: Je(i[0]),
                  version: parseInt(i[1], 10),
                  symKey: o.symKey,
                  relay: Ge(o),
                };
              })(e.uri);
              if (this.pairings.keys.includes(t))
                throw new Error(`Pairing already exists: ${t}`);
              if (this.core.crypto.hasKeys(t))
                throw new Error(`Keychain already exists: ${t}`);
              const i = Me(h.FIVE_MINUTES),
                s = { topic: t, relay: n, expiry: i, active: !1 };
              return (
                await this.pairings.set(t, s),
                await this.core.crypto.setSymKey(r, t),
                await this.core.relayer.subscribe(t, { relay: n }),
                this.core.expirer.set(t, i),
                e.activatePairing && (await this.activate({ topic: t })),
                s
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              const t = Me(h.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: n, reject: i } = Le();
                this.events.once(ze("pairing_ping", e), ({ error: e }) => {
                  e ? i(e) : n();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  et("USER_DISCONNECTED"),
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              const n = It(t, r),
                i = await this.core.crypto.encode(e, n),
                s = Mn[t].req;
              return (
                this.core.history.set(e, n),
                this.core.relayer.publish(e, i, s),
                n.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const n = Pt(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = Mn[s.request.method].res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, r) => {
              const n = jt(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = Mn[s.request.method]
                  ? Mn[s.request.method].res
                  : Mn.unregistered_method.res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(n);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, et("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => $e(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e,
                n = r.method;
              if (this.pairings.keys.includes(t))
                switch (n) {
                  case "wc_pairingPing":
                    return this.onPairingPingRequest(t, r);
                  case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(t, r);
                  default:
                    return this.onUnknownRpcMethodRequest(t, r);
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.core.history.get(t, r.id)).request.method;
              if (this.pairings.keys.includes(t))
                return "wc_pairingPing" === n
                  ? this.onPairingPingResponse(t, r)
                  : this.onUnknownRpcMethodResponse(n);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit("pairing_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                $t(t)
                  ? this.events.emit(ze("pairing_ping", r), {})
                  : zt(t) &&
                    this.events.emit(ze("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit("pairing_delete", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: r, method: n } = t;
              try {
                if (this.registeredMethods.includes(n)) return;
                const t = et("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(et("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`,
                );
                throw new Error(t);
              }
              if (
                !(function (e) {
                  if (it(e, !1))
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(e.uri)
              ) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`,
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!it(e, !1)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = Xe(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              if ($e(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = Xe("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.pairings = new _i(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix,
            ));
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(In, async (e) => {
            const { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r),
              )
            )
              return;
            const n = await this.core.crypto.decode(t, r);
            kt(n)
              ? (this.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : Mt(n) &&
                (await this.core.history.resolve(n),
                await this.onRelayEventResponse({ topic: t, payload: n }),
                this.core.history.delete(t, n.id));
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(Bn, async (e) => {
            const { topic: t } = ke(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit("pairing_expire", { topic: t }));
          });
        }
      }
      class Ei extends _ {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              const n = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: Me(h.THIRTY_DAYS),
              };
              this.records.set(n.id, n), this.events.emit($n, n);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = zt(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(zn, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(qn, r);
                  }
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, v.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: It(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = Xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values),
            this.events.emit("history_sync");
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = Xe("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on($n, (e) => {
            const t = $n;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(zn, (e) => {
              const t = zn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(qn, (e) => {
              const t = qn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, h.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Oi extends P {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = mn),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e),
                n = { target: r, expiry: t };
              this.expirations.set(r, n),
                this.checkExpiry(r, n),
                this.events.emit(Vn, { target: r, expiration: n });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(Hn, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, v.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return Ue("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return Ue("id", e);
            })(e);
          const { message: t } = Xe("UNKNOWN_TYPE", "Target type: " + typeof e);
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values),
            this.events.emit("expirer_sync");
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = Xe("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`,
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = Xe("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: r } = t;
          (0, h.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(Bn, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(y.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations(),
          ),
            this.events.on(Vn, (e) => {
              const t = Vn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Bn, (e) => {
              const t = Bn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Hn, (e) => {
              const t = Hn;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Si extends j {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = Fn),
            (this.initialized = !1),
            (this.init = async (e) => {
              je() ||
                !xe() ||
                ((this.verifyUrl = e?.verifyUrl || Kn),
                await this.createIframe());
            }),
            (this.register = async (e) => {
              var t;
              if ((this.initialized || (await this.init()), this.iframe))
                try {
                  null == (t = this.iframe.contentWindow) ||
                    t.postMessage(e.attestationId, this.verifyUrl),
                    this.logger.info(
                      `postMessage sent: ${e.attestationId} ${this.verifyUrl}`,
                    );
                } catch {}
            }),
            (this.resolve = async (e) => {
              var t;
              if (this.isDevEnv) return "";
              this.logger.info(`resolving attestation: ${e.attestationId}`);
              const r = this.startAbortTimer(h.FIVE_SECONDS),
                n = await fetch(
                  `${this.verifyUrl}/attestation/${e.attestationId}`,
                  { signal: this.abortController.signal },
                );
              return (
                clearTimeout(r),
                200 === n.status
                  ? null == (t = await n.json())
                    ? void 0
                    : t.origin
                  : ""
              );
            }),
            (this.createIframe = async () => {
              try {
                await Promise.race([
                  new Promise((e, t) => {
                    if (document.getElementById(Fn)) return e();
                    const r = document.createElement("iframe");
                    r.setAttribute("id", Fn),
                      r.setAttribute(
                        "src",
                        `${this.verifyUrl}/${this.projectId}`,
                      ),
                      (r.style.display = "none"),
                      r.addEventListener("load", () => {
                        (this.initialized = !0), e();
                      }),
                      r.addEventListener("error", (e) => {
                        t(e);
                      }),
                      document.body.append(r),
                      (this.iframe = r);
                  }),
                  new Promise((e) => {
                    setTimeout(
                      () => e("iframe load timeout"),
                      (0, h.toMiliseconds)(h.ONE_SECOND / 2),
                    );
                  }),
                ]);
              } catch (e) {
                this.logger.error(
                  `Verify iframe failed to load: ${this.verifyUrl}`,
                ),
                  this.logger.error(e);
              }
            }),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.verifyUrl = Kn),
            (this.abortController = new AbortController()),
            (this.isDevEnv = Pe() && "MISSING_ENV_VAR".IS_VITEST);
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return setTimeout(
            () => this.abortController.abort(),
            (0, h.toMiliseconds)(e),
          );
        }
      }
      var Ii = Object.defineProperty,
        Pi = Object.getOwnPropertySymbols,
        ji = Object.prototype.hasOwnProperty,
        xi = Object.prototype.propertyIsEnumerable,
        Ni = (e, t, r) =>
          t in e
            ? Ii(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ti = (e, t) => {
          for (var r in t || (t = {})) ji.call(t, r) && Ni(e, r, t[r]);
          if (Pi) for (var r of Pi(t)) xi.call(t, r) && Ni(e, r, t[r]);
          return e;
        };
      class Ai extends w {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = vn),
            (this.events = new n.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || On);
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, v.pino)(
                  (0, v.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.heartbeat = new y.HeartBeat()),
            (this.crypto = new Gn(this, this.logger, e?.keychain)),
            (this.history = new Ei(this, this.logger)),
            (this.expirer = new Oi(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new g.ZP(Ti(Ti({}, wn), e?.storageOptions))),
            (this.relayer = new fi({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new bi(this, this.logger)),
            (this.verify = new Si(this.projectId || "", this.logger));
        }
        static async init(e) {
          const t = new Ai(e);
          await t.initialize();
          const r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e,
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const Ri = Ai,
        Ci = "client",
        Li = `wc@2:${Ci}:`,
        Di = Ci,
        Ui = "Proposal expired",
        ki = h.SEVEN_DAYS,
        Mi = {
          wc_sessionPropose: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: h.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: h.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: h.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: h.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: h.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        $i = { min: h.FIVE_MINUTES, max: h.SEVEN_DAYS },
        zi = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var qi = Object.defineProperty,
        Vi = Object.defineProperties,
        Hi = Object.getOwnPropertyDescriptors,
        Bi = Object.getOwnPropertySymbols,
        Fi = Object.prototype.hasOwnProperty,
        Ki = Object.prototype.propertyIsEnumerable,
        Wi = (e, t, r) =>
          t in e
            ? qi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Gi = (e, t) => {
          for (var r in t || (t = {})) Fi.call(t, r) && Wi(e, r, t[r]);
          if (Bi) for (var r of Bi(t)) Ki.call(t, r) && Wi(e, r, t[r]);
          return e;
        },
        Ji = (e, t) => Vi(e, Hi(t));
      class Yi extends N {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.client.core.pairing.register({ methods: Object.keys(Mi) }),
                (this.initialized = !0));
            }),
            (this.connect = async (e) => {
              this.isInitialized();
              const t = Ji(Gi({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: r,
                requiredNamespaces: n,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: o,
              } = t;
              let a,
                c = r,
                u = !1;
              if (
                (c && (u = this.client.core.pairing.pairings.get(c).active),
                !c || !u)
              ) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (a = t);
              }
              const l = await this.client.core.crypto.generateKeyPair(),
                p = Gi(
                  {
                    requiredNamespaces: n,
                    optionalNamespaces: i,
                    relays: o ?? [{ protocol: "irn" }],
                    proposer: { publicKey: l, metadata: this.client.metadata },
                  },
                  s && { sessionProperties: s },
                ),
                { reject: f, resolve: d, done: g } = Le(h.FIVE_MINUTES, Ui);
              if (
                (this.events.once(
                  ze("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) f(e);
                    else if (t) {
                      t.self.publicKey = l;
                      const e = Ji(Gi({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        c &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: c,
                            metadata: t.peer.metadata,
                          })),
                        d(e);
                    }
                  },
                ),
                !c)
              ) {
                const { message: e } = Xe(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`,
                );
                throw new Error(e);
              }
              const y = await this.sendRequest(c, "wc_sessionPropose", p),
                v = Me(h.FIVE_MINUTES);
              return (
                await this.setProposal(y, Gi({ id: y, expiry: v }, p)),
                { uri: a, approval: g }
              );
            }),
            (this.pair = async (e) => (
              this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              this.isInitialized(), await this.isValidApprove(e);
              const {
                  id: t,
                  relayProtocol: r,
                  namespaces: n,
                  sessionProperties: i,
                } = e,
                s = this.client.proposal.get(t);
              let {
                pairingTopic: o,
                proposer: a,
                requiredNamespaces: c,
                optionalNamespaces: u,
              } = s;
              (o = o || ""),
                rt(c) ||
                  (c = (function (e, t) {
                    const r = ut(e, "approve()");
                    if (r) throw new Error(r.message);
                    const n = {};
                    for (const [t, r] of Object.entries(e))
                      n[t] = {
                        methods: r.methods,
                        events: r.events,
                        chains: r.accounts.map(
                          (e) => `${e.split(":")[0]}:${e.split(":")[1]}`,
                        ),
                      };
                    return n;
                  })(n));
              const l = await this.client.core.crypto.generateKeyPair(),
                h = a.publicKey,
                p = await this.client.core.crypto.generateSharedKey(l, h);
              o &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: o,
                  metadata: a.metadata,
                }),
                await this.sendResult(t, o, {
                  relay: { protocol: r ?? "irn" },
                  responderPublicKey: l,
                }),
                await this.client.proposal.delete(t, et("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: o }));
              const f = Gi(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: n,
                  requiredNamespaces: c,
                  optionalNamespaces: u,
                  pairingTopic: o,
                  controller: { publicKey: l, metadata: this.client.metadata },
                  expiry: Me(ki),
                },
                i && { sessionProperties: i },
              );
              await this.client.core.relayer.subscribe(p),
                await this.sendRequest(p, "wc_sessionSettle", f);
              const d = Ji(Gi({}, f), {
                topic: p,
                pairingTopic: o,
                acknowledged: !1,
                self: f.controller,
                peer: { publicKey: a.publicKey, metadata: a.metadata },
                controller: l,
              });
              return (
                await this.client.session.set(p, d),
                await this.setExpiry(p, Me(ki)),
                {
                  topic: p,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(p)), 500),
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              this.isInitialized(), await this.isValidReject(e);
              const { id: t, reason: r } = e,
                { pairingTopic: n } = this.client.proposal.get(t);
              n &&
                (await this.sendError(t, n, r),
                await this.client.proposal.delete(t, et("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.isValidUpdate(e);
              const { topic: t, namespaces: r } = e,
                n = await this.sendRequest(t, "wc_sessionUpdate", {
                  namespaces: r,
                }),
                { done: i, resolve: s, reject: o } = Le();
              return (
                this.events.once(ze("session_update", n), ({ error: e }) => {
                  e ? o(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.isValidExtend(e);
              const { topic: t } = e,
                r = await this.sendRequest(t, "wc_sessionExtend", {}),
                { done: n, resolve: i, reject: s } = Le();
              return (
                this.events.once(ze("session_extend", r), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                await this.setExpiry(t, Me(ki)),
                { acknowledged: n }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized(), await this.isValidRequest(e);
              const { chainId: t, request: n, topic: i, expiry: s } = e,
                o = await this.sendRequest(
                  i,
                  "wc_sessionRequest",
                  { request: n, chainId: t },
                  s,
                ),
                { done: a, resolve: c, reject: u } = Le(s);
              return (
                this.events.once(
                  ze("session_request", o),
                  ({ error: e, result: t }) => {
                    e ? u(e) : c(t);
                  },
                ),
                this.client.events.emit("session_request_sent", {
                  topic: i,
                  request: n,
                  chainId: t,
                  id: o,
                }),
                (async function ({ id: e, topic: t, wcDeepLink: n }) {
                  try {
                    if (!n) return;
                    const i = "string" == typeof n ? JSON.parse(n) : n;
                    let s = i?.href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    const o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                      a = Ne();
                    a === Se.browser
                      ? o.startsWith("https://")
                        ? window.open(o, "_blank", "noreferrer noopener")
                        : window.open(o, "_self", "noreferrer noopener")
                      : a === Se.reactNative &&
                        typeof (null == r.g ? void 0 : r.g.Linking) < "u" &&
                        (await r.g.Linking.openURL(o));
                  } catch (e) {
                    console.error(e);
                  }
                })({
                  id: o,
                  topic: i,
                  wcDeepLink: await this.client.core.storage.getItem(
                    "WALLETCONNECT_DEEPLINK_CHOICE",
                  ),
                }),
                await a()
              );
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: r } = e,
                { id: n } = r;
              $t(r)
                ? await this.sendResult(n, t, r.result)
                : zt(r) && (await this.sendError(n, t, r.error)),
                this.deletePendingSessionRequest(e.response.id, {
                  message: "fulfilled",
                  code: 0,
                });
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_sessionPing", {}),
                  { done: r, resolve: n, reject: i } = Le();
                this.events.once(ze("session_ping", e), ({ error: e }) => {
                  e ? i(e) : n();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(), await this.isValidEmit(e);
              const { topic: t, event: r, chainId: n } = e;
              await this.sendRequest(t, "wc_sessionEvent", {
                event: r,
                chainId: n,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = St().toString();
                let r;
                const n = (t) => {
                  t?.id.toString() === e &&
                    (this.client.core.relayer.events.removeListener(Pn, n),
                    r());
                };
                await Promise.all([
                  new Promise((e) => {
                    (r = e), this.client.core.relayer.on(Pn, n);
                  }),
                  this.sendRequest(
                    t,
                    "wc_sessionDelete",
                    et("USER_DISCONNECTED"),
                    void 0,
                    e,
                  ),
                ]),
                  await this.deleteSession(t);
              } else await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: r } = t,
                    n = Object.keys(e.namespaces),
                    i = Object.keys(r);
                  let s = !0;
                  return (
                    !!Ae(i, n) &&
                    (n.forEach((t) => {
                      const {
                          accounts: n,
                          methods: i,
                          events: o,
                        } = e.namespaces[t],
                        a = Ye(n),
                        c = r[t];
                      (Ae(oe(t, c), a) &&
                        Ae(c.methods, i) &&
                        Ae(c.events, o)) ||
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e),
              )
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic,
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var n, i;
                        return (
                          (null == (n = r.peerMetadata) ? void 0 : n.url) &&
                          (null == (i = r.peerMetadata) ? void 0 : i.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`,
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic }),
                      ),
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished",
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e, t) => {
              const { self: r } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, et("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(r.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e);
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, et("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              const t = Mi.wc_sessionRequest.req.ttl,
                { id: r, topic: n, params: i } = e;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: n,
                params: i,
              }),
                t && this.client.core.expirer.set(r, Me(t));
            }),
            (this.sendRequest = async (e, t, r, n, i) => {
              const s = It(t, r);
              if (xe() && zi.includes(t)) {
                const e = pe(JSON.stringify(s));
                await this.client.core.verify.register({ attestationId: e });
              }
              const o = await this.client.core.crypto.encode(e, s),
                a = Mi[t].req;
              return (
                n && (a.ttl = n),
                i && (a.id = i),
                this.client.core.history.set(e, s),
                this.client.core.relayer.publish(e, o, a),
                s.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              const n = Pt(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = Mi[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.sendError = async (e, t, r) => {
              const n = jt(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = Mi[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                $e(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  $e(e.expiry) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession(e)),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: r } = e,
                n = r.method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${n}`,
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: r } = e,
                n = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${n}`,
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: r } = Xe(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`,
                );
              throw new Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                this.isValidConnect(Gi({}, t.params));
                const i = Me(h.FIVE_MINUTES),
                  s = Gi({ id: n, pairingTopic: e, expiry: i }, r);
                await this.setProposal(n, s);
                const o = pe(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: n,
                  params: s,
                  verifyContext: a,
                });
              } catch (t) {
                await this.sendError(n, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              const { id: r } = t;
              if ($t(t)) {
                const { result: n } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: n,
                });
                const i = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: i,
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = n.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                zt(t) &&
                  (await this.client.proposal.delete(
                    r,
                    et("USER_DISCONNECTED"),
                  ),
                  this.events.emit(ze("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidSessionSettleRequest(n);
                const {
                    relay: r,
                    controller: i,
                    expiry: s,
                    namespaces: o,
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    sessionProperties: u,
                    pairingTopic: l,
                  } = t.params,
                  h = Gi(
                    {
                      topic: e,
                      relay: r,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: l,
                      requiredNamespaces: a,
                      optionalNamespaces: c,
                      controller: i.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: i.publicKey, metadata: i.metadata },
                    },
                    u && { sessionProperties: u },
                  );
                await this.sendResult(t.id, e, !0),
                  this.events.emit(ze("session_connect"), { session: h }),
                  this.cleanupDuplicatePairings(h);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: r } = t;
              $t(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(ze("session_approve", r), {}))
                : zt(t) &&
                  (await this.client.session.delete(e, et("USER_DISCONNECTED")),
                  this.events.emit(ze("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: r, id: n } = t;
              try {
                this.isValidUpdate(Gi({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult(n, e, !0),
                  this.client.events.emit("session_update", {
                    id: n,
                    topic: e,
                    params: r,
                  });
              } catch (t) {
                await this.sendError(n, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: r } = t;
              $t(t)
                ? this.events.emit(ze("session_update", r), {})
                : zt(t) &&
                  this.events.emit(ze("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, Me(ki)),
                  await this.sendResult(r, e, !0),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: r } = t;
              $t(t)
                ? this.events.emit(ze("session_extend", r), {})
                : zt(t) &&
                  this.events.emit(ze("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: r } = t;
              setTimeout(() => {
                $t(t)
                  ? this.events.emit(ze("session_ping", r), {})
                  : zt(t) &&
                    this.events.emit(ze("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(An, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult(r, e, !0),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: r,
                    topic: e,
                  });
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidRequest(Gi({ topic: e }, n)),
                  await this.setPendingSessionRequest({
                    id: r,
                    topic: e,
                    params: n,
                  });
                const i = pe(JSON.stringify(t)),
                  s = this.client.session.get(e),
                  o = await this.getVerifyContext(i, s.peer.metadata);
                this.client.events.emit("session_request", {
                  id: r,
                  topic: e,
                  params: n,
                  verifyContext: o,
                });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: r } = t;
              $t(t)
                ? this.events.emit(ze("session_request", r), {
                    result: t.result,
                  })
                : zt(t) &&
                  this.events.emit(ze("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: r, params: n } = t;
              try {
                this.isValidEmit(Gi({ topic: e }, n)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: n,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.isValidConnect = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`,
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: n,
                sessionProperties: i,
                relays: s,
              } = e;
              if (
                (nt(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let r = !1;
                  return (
                    e
                      ? e &&
                        tt(e) &&
                        e.length &&
                        e.forEach((e) => {
                          r = lt(e);
                        })
                      : (r = !0),
                    r
                  );
                })(s))
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${s}`,
                );
                throw new Error(e);
              }
              !nt(r) &&
                0 !== rt(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !nt(n) &&
                  0 !== rt(n) &&
                  this.validateNamespaces(n, "optionalNamespaces"),
                nt(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const r = (function (e, t, r) {
                let n = null;
                if (e && rt(e)) {
                  const i = ct(e, t);
                  i && (n = i);
                  const s = (function (e, t, r) {
                    let n = null;
                    return (
                      Object.entries(e).forEach(([e, i]) => {
                        if (n) return;
                        const s = (function (e, t, r) {
                          let n = null;
                          return (
                            tt(t) && t.length
                              ? t.forEach((e) => {
                                  n ||
                                    ot(e) ||
                                    (n = et(
                                      "UNSUPPORTED_CHAINS",
                                      `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`,
                                    ));
                                })
                              : ot(e) ||
                                (n = et(
                                  "UNSUPPORTED_CHAINS",
                                  `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`,
                                )),
                            n
                          );
                        })(e, oe(e, i), `${t} ${r}`);
                        s && (n = s);
                      }),
                      n
                    );
                  })(e, t, r);
                  s && (n = s);
                } else
                  n = Xe(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`,
                  );
                return n;
              })(e, "connect()", t);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!ht(e))
                throw new Error(
                  Xe("MISSING_OR_INVALID", `approve() params: ${e}`).message,
                );
              const {
                id: t,
                namespaces: r,
                relayProtocol: n,
                sessionProperties: i,
              } = e;
              await this.isValidProposalId(t);
              const s = this.client.proposal.get(t),
                o = ut(r, "approve()");
              if (o) throw new Error(o.message);
              const a = ft(s.requiredNamespaces, r, "approve()");
              if (a) throw new Error(a.message);
              if (!it(n, !0)) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${n}`,
                );
                throw new Error(e);
              }
              nt(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`,
                );
                throw new Error(t);
              }
              const { id: t, reason: r } = e;
              if (
                (await this.isValidProposalId(t),
                !(function (e) {
                  return !!(
                    e &&
                    "object" == typeof e &&
                    e.code &&
                    st(e.code, !1) &&
                    e.message &&
                    it(e.message, !1)
                  );
                })(r))
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`,
                );
                throw new Error(t);
              }
              const { relay: t, controller: r, namespaces: n, expiry: i } = e;
              if (!lt(t)) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string",
                );
                throw new Error(e);
              }
              const s = (function (e, t) {
                let r = null;
                return (
                  it(e?.publicKey, !1) ||
                    (r = Xe(
                      "MISSING_OR_INVALID",
                      "onSessionSettleRequest() controller public key should be a string",
                    )),
                  r
                );
              })(r);
              if (s) throw new Error(s.message);
              const o = ut(n, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if ($e(i)) {
                const { message: e } = Xe(
                  "EXPIRED",
                  "onSessionSettleRequest()",
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              const n = this.client.session.get(t),
                i = ut(r, "update()");
              if (i) throw new Error(i.message);
              const s = ft(n.requiredNamespaces, r, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, request: r, chainId: n, expiry: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!pt(s, n)) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${n}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(nt(e) || !it(e.method, !1));
                })(r)
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!it(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          Ye(e.accounts).includes(t) && r.push(...e.methods);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(s, n, r.method)
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`,
                );
                throw new Error(e);
              }
              if (
                i &&
                !(function (e, t) {
                  return st(e, !1) && e <= t.max && e >= t.min;
                })(i, $i)
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${i}. Expiry must be a number (in seconds) between ${$i.min} and ${$i.max}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, response: r } = e;
              if (
                (await this.isValidSessionTopic(t),
                !(function (e) {
                  return !(
                    nt(e) ||
                    (nt(e.result) && nt(e.error)) ||
                    !st(e.id, !1) ||
                    !it(e.jsonrpc, !1)
                  );
                })(r))
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t, event: r, chainId: n } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: i } = this.client.session.get(t);
              if (!pt(i, n)) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${n}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(nt(e) || !it(e.name, !1));
                })(r)
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
              if (
                !(function (e, t, r) {
                  return (
                    !!it(r, !1) &&
                    (function (e, t) {
                      const r = [];
                      return (
                        Object.values(e).forEach((e) => {
                          Ye(e.accounts).includes(t) && r.push(...e.events);
                        }),
                        r
                      );
                    })(e, t).includes(r)
                  );
                })(i, n, r.name)
              ) {
                const { message: e } = Xe(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`,
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!ht(e)) {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`,
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              const r = {
                verified: {
                  verifyUrl: t.verifyUrl || "",
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                const n = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                n &&
                  ((r.verified.origin = n),
                  (r.verified.validation = n === t.url ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.error(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!it(e, !1)) {
                  const { message: r } = Xe(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e,
                    )}`,
                  );
                  throw new Error(r);
                }
              });
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = Xe("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(In, async (e) => {
            const { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r),
              )
            )
              return;
            const n = await this.client.core.crypto.decode(t, r);
            kt(n)
              ? (this.client.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : Mt(n)
              ? (await this.client.core.history.resolve(n),
                await this.onRelayEventResponse({ topic: t, payload: n }),
                this.client.core.history.delete(t, n.id))
              : this.onRelayEventUnknownPayload({ topic: t, payload: n });
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(Bn, async (e) => {
            const { topic: t, id: r } = ke(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                Xe("EXPIRED"),
                !0,
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession(t, !0),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        isValidPairingTopic(e) {
          if (!it(e, !1)) {
            const { message: t } = Xe(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = Xe(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if ($e(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = Xe("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!it(e, !1)) {
            const { message: t } = Xe(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            const { message: t } = Xe(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if ($e(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            const { message: t } = Xe("EXPIRED", `session topic: ${e}`);
            throw new Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (it(e, !1)) {
                const { message: t } = Xe(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${e}`,
                );
                throw new Error(t);
              }
              {
                const { message: t } = Xe(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${e}`,
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            const { message: t } = Xe(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`,
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = Xe(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`,
            );
            throw new Error(t);
          }
          if ($e(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            const { message: t } = Xe("EXPIRED", `proposal id: ${e}`);
            throw new Error(t);
          }
        }
      }
      class Zi extends _i {
        constructor(e, t) {
          super(e, t, "proposal", Li), (this.core = e), (this.logger = t);
        }
      }
      class Qi extends _i {
        constructor(e, t) {
          super(e, t, "session", Li), (this.core = e), (this.logger = t);
        }
      }
      class Xi extends _i {
        constructor(e, t) {
          super(e, t, "request", Li, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class es extends x {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Di),
            (this.events = new n.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || Di),
            (this.metadata = e?.metadata ||
              (0, ie.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          const t =
            typeof e?.logger < "u" && "string" != typeof e?.logger
              ? e.logger
              : (0, v.pino)(
                  (0, v.getDefaultLoggerOptions)({
                    level: e?.logger || "error",
                  }),
                );
          (this.core = e?.core || new Ri(e)),
            (this.logger = (0, v.generateChildLogger)(t, this.name)),
            (this.session = new Qi(this.core, this.logger)),
            (this.proposal = new Zi(this.core, this.logger)),
            (this.pendingRequest = new Xi(this.core, this.logger)),
            (this.engine = new Yi(this));
        }
        static async init(e) {
          const t = new es(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, v.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      function ts(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      function rs(e) {
        return e.includes(":");
      }
      function ns(e) {
        return rs(e) ? e.split(":")[0] : e;
      }
      r(3382),
        r(9982),
        r(4543),
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const is = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function ss(e, t) {
        const { message: r, code: n } = is[e];
        return { message: t ? `${r} ${t}` : r, code: n };
      }
      function os(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      var as = r(699),
        cs = r.n(as);
      function us(e) {
        return "string" == typeof e
          ? e
          : ((t = e),
            JSON.stringify(t, (e, t) =>
              "bigint" == typeof t ? t.toString() + "n" : t,
            ) || "");
        var t;
      }
      const ls = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class hs {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new n.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !Ct(e))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`,
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(e, t) {
          this.isAvailable || (await this.register());
          try {
            const t = us(e),
              r = await cs()(
                this.url,
                Object.assign(Object.assign({}, ls), { body: t }),
              ),
              n = await r.json();
            this.onPayload({ data: n });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!Ct(e))
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${e}`,
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), void 0 === this.isAvailable))
                      return t(
                        new Error("HTTP connection is missing or invalid"),
                      );
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const t = us({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await cs()(e, Object.assign(Object.assign({}, ls), { body: t }));
            }
            this.onOpen();
          } catch (e) {
            const t = this.parseError(e);
            throw (this.events.emit("register_error", t), this.onClose(), t);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (void 0 === e.data) return;
          const t =
            "string" == typeof e.data
              ? (function (e) {
                  if ("string" != typeof e)
                    throw new Error(
                      "Cannot safe json parse value of type " + typeof e,
                    );
                  try {
                    return ((e) => {
                      const t = e.replace(
                        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                        '$1"$2n"$3',
                      );
                      return JSON.parse(t, (e, t) =>
                        "string" == typeof t && t.match(/^\d+n$/)
                          ? BigInt(t.substring(0, t.length - 1))
                          : t,
                      );
                    })(e);
                  } catch (t) {
                    return e;
                  }
                })(e.data)
              : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const r = this.parseError(t),
            n = jt(e, r.message || r.toString());
          this.events.emit("payload", n);
        }
        parseError(e, t = this.url) {
          return bt(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      const ps = hs,
        fs = "error",
        ds = "wc@2:universal_provider:",
        gs = "default_chain_changed";
      var ys =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        vs = { exports: {} };
      !(function (e, t) {
        (function () {
          var r,
            n = "Expected a function",
            i = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 32,
            a = 128,
            c = 1 / 0,
            u = 9007199254740991,
            l = NaN,
            h = 4294967295,
            p = [
              ["ary", a],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", o],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            f = "[object Arguments]",
            d = "[object Array]",
            g = "[object Boolean]",
            y = "[object Date]",
            v = "[object Error]",
            m = "[object Function]",
            w = "[object GeneratorFunction]",
            _ = "[object Map]",
            b = "[object Number]",
            E = "[object Object]",
            O = "[object Promise]",
            S = "[object RegExp]",
            I = "[object Set]",
            P = "[object String]",
            j = "[object Symbol]",
            x = "[object WeakMap]",
            N = "[object ArrayBuffer]",
            T = "[object DataView]",
            A = "[object Float32Array]",
            R = "[object Float64Array]",
            C = "[object Int8Array]",
            L = "[object Int16Array]",
            D = "[object Int32Array]",
            U = "[object Uint8Array]",
            k = "[object Uint8ClampedArray]",
            M = "[object Uint16Array]",
            $ = "[object Uint32Array]",
            z = /\b__p \+= '';/g,
            q = /\b(__p \+=) '' \+/g,
            V = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            H = /&(?:amp|lt|gt|quot|#39);/g,
            B = /[&<>"']/g,
            F = RegExp(H.source),
            K = RegExp(B.source),
            W = /<%-([\s\S]+?)%>/g,
            G = /<%([\s\S]+?)%>/g,
            J = /<%=([\s\S]+?)%>/g,
            Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Z = /^\w*$/,
            Q =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            X = /[\\^$.*+?()[\]{}|]/g,
            ee = RegExp(X.source),
            te = /^\s+/,
            re = /\s/,
            ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ie = /\{\n\/\* \[wrapped with (.+)\] \*/,
            se = /,? & /,
            oe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ae = /[()=,{}\[\]\/\s]/,
            ce = /\\(\\)?/g,
            ue = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            le = /\w*$/,
            he = /^[-+]0x[0-9a-f]+$/i,
            pe = /^0b[01]+$/i,
            fe = /^\[object .+?Constructor\]$/,
            de = /^0o[0-7]+$/i,
            ge = /^(?:0|[1-9]\d*)$/,
            ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ve = /($^)/,
            me = /['\n\r\u2028\u2029\\]/g,
            we = "\\ud800-\\udfff",
            _e = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            be = "\\u2700-\\u27bf",
            Ee = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Oe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Se = "\\ufe0e\\ufe0f",
            Ie =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Pe = "[" + we + "]",
            je = "[" + Ie + "]",
            xe = "[" + _e + "]",
            Ne = "\\d+",
            Te = "[" + be + "]",
            Ae = "[" + Ee + "]",
            Re = "[^" + we + Ie + Ne + be + Ee + Oe + "]",
            Ce = "\\ud83c[\\udffb-\\udfff]",
            Le = "[^" + we + "]",
            De = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ue = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            ke = "[" + Oe + "]",
            Me = "\\u200d",
            $e = "(?:" + Ae + "|" + Re + ")",
            ze = "(?:" + ke + "|" + Re + ")",
            qe = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Ve = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            He = "(?:" + xe + "|" + Ce + ")?",
            Be = "[" + Se + "]?",
            Fe =
              Be +
              He +
              "(?:" +
              Me +
              "(?:" +
              [Le, De, Ue].join("|") +
              ")" +
              Be +
              He +
              ")*",
            Ke = "(?:" + [Te, De, Ue].join("|") + ")" + Fe,
            We = "(?:" + [Le + xe + "?", xe, De, Ue, Pe].join("|") + ")",
            Ge = RegExp("['’]", "g"),
            Je = RegExp(xe, "g"),
            Ye = RegExp(Ce + "(?=" + Ce + ")|" + We + Fe, "g"),
            Ze = RegExp(
              [
                ke +
                  "?" +
                  Ae +
                  "+" +
                  qe +
                  "(?=" +
                  [je, ke, "$"].join("|") +
                  ")",
                ze + "+" + Ve + "(?=" + [je, ke + $e, "$"].join("|") + ")",
                ke + "?" + $e + "+" + qe,
                ke + "+" + Ve,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Ne,
                Ke,
              ].join("|"),
              "g",
            ),
            Qe = RegExp("[" + Me + we + _e + Se + "]"),
            Xe =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            et = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            tt = -1,
            rt = {};
          (rt[A] =
            rt[R] =
            rt[C] =
            rt[L] =
            rt[D] =
            rt[U] =
            rt[k] =
            rt[M] =
            rt[$] =
              !0),
            (rt[f] =
              rt[d] =
              rt[N] =
              rt[g] =
              rt[T] =
              rt[y] =
              rt[v] =
              rt[m] =
              rt[_] =
              rt[b] =
              rt[E] =
              rt[S] =
              rt[I] =
              rt[P] =
              rt[x] =
                !1);
          var nt = {};
          (nt[f] =
            nt[d] =
            nt[N] =
            nt[T] =
            nt[g] =
            nt[y] =
            nt[A] =
            nt[R] =
            nt[C] =
            nt[L] =
            nt[D] =
            nt[_] =
            nt[b] =
            nt[E] =
            nt[S] =
            nt[I] =
            nt[P] =
            nt[j] =
            nt[U] =
            nt[k] =
            nt[M] =
            nt[$] =
              !0),
            (nt[v] = nt[m] = nt[x] = !1);
          var it = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            st = parseFloat,
            ot = parseInt,
            at = "object" == typeof ys && ys && ys.Object === Object && ys,
            ct =
              "object" == typeof self && self && self.Object === Object && self,
            ut = at || ct || Function("return this")(),
            lt = t && !t.nodeType && t,
            ht = lt && e && !e.nodeType && e,
            pt = ht && ht.exports === lt,
            ft = pt && at.process,
            dt = (function () {
              try {
                return (
                  (ht && ht.require && ht.require("util").types) ||
                  (ft && ft.binding && ft.binding("util"))
                );
              } catch {}
            })(),
            gt = dt && dt.isArrayBuffer,
            yt = dt && dt.isDate,
            vt = dt && dt.isMap,
            mt = dt && dt.isRegExp,
            wt = dt && dt.isSet,
            _t = dt && dt.isTypedArray;
          function bt(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function Et(e, t, r, n) {
            for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
              var o = e[i];
              t(n, o, r(o), e);
            }
            return n;
          }
          function Ot(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length;
              ++r < n && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function St(e, t) {
            for (
              var r = null == e ? 0 : e.length;
              r-- && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function It(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function Pt(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = 0, s = [];
              ++r < n;

            ) {
              var o = e[r];
              t(o, r, e) && (s[i++] = o);
            }
            return s;
          }
          function jt(e, t) {
            return !(null == e || !e.length) && kt(e, t, 0) > -1;
          }
          function xt(e, t, r) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
              if (r(t, e[n])) return !0;
            return !1;
          }
          function Nt(e, t) {
            for (
              var r = -1, n = null == e ? 0 : e.length, i = Array(n);
              ++r < n;

            )
              i[r] = t(e[r], r, e);
            return i;
          }
          function Tt(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
            return e;
          }
          function At(e, t, r, n) {
            var i = -1,
              s = null == e ? 0 : e.length;
            for (n && s && (r = e[++i]); ++i < s; ) r = t(r, e[i], i, e);
            return r;
          }
          function Rt(e, t, r, n) {
            var i = null == e ? 0 : e.length;
            for (n && i && (r = e[--i]); i--; ) r = t(r, e[i], i, e);
            return r;
          }
          function Ct(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e)) return !0;
            return !1;
          }
          var Lt = qt("length");
          function Dt(e, t, r) {
            var n;
            return (
              r(e, function (e, r, i) {
                if (t(e, r, i)) return (n = r), !1;
              }),
              n
            );
          }
          function Ut(e, t, r, n) {
            for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function kt(e, t, r) {
            return t == t
              ? (function (e, t, r) {
                  for (var n = r - 1, i = e.length; ++n < i; )
                    if (e[n] === t) return n;
                  return -1;
                })(e, t, r)
              : Ut(e, $t, r);
          }
          function Mt(e, t, r, n) {
            for (var i = r - 1, s = e.length; ++i < s; )
              if (n(e[i], t)) return i;
            return -1;
          }
          function $t(e) {
            return e != e;
          }
          function zt(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? Bt(e, t) / r : l;
          }
          function qt(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function Vt(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function Ht(e, t, r, n, i) {
            return (
              i(e, function (e, i, s) {
                r = n ? ((n = !1), e) : t(r, e, i, s);
              }),
              r
            );
          }
          function Bt(e, t) {
            for (var n, i = -1, s = e.length; ++i < s; ) {
              var o = t(e[i]);
              o !== r && (n = n === r ? o : n + o);
            }
            return n;
          }
          function Ft(e, t) {
            for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
            return n;
          }
          function Kt(e) {
            return e && e.slice(0, cr(e) + 1).replace(te, "");
          }
          function Wt(e) {
            return function (t) {
              return e(t);
            };
          }
          function Gt(e, t) {
            return Nt(t, function (t) {
              return e[t];
            });
          }
          function Jt(e, t) {
            return e.has(t);
          }
          function Yt(e, t) {
            for (var r = -1, n = e.length; ++r < n && kt(t, e[r], 0) > -1; );
            return r;
          }
          function Zt(e, t) {
            for (var r = e.length; r-- && kt(t, e[r], 0) > -1; );
            return r;
          }
          var Qt = Vt({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            Xt = Vt({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function er(e) {
            return "\\" + it[e];
          }
          function tr(e) {
            return Qe.test(e);
          }
          function rr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, n) {
                r[++t] = [n, e];
              }),
              r
            );
          }
          function nr(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function ir(e, t) {
            for (var r = -1, n = e.length, i = 0, o = []; ++r < n; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[i++] = r));
            }
            return o;
          }
          function sr(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function or(e) {
            return tr(e)
              ? (function (e) {
                  for (var t = (Ye.lastIndex = 0); Ye.test(e); ) ++t;
                  return t;
                })(e)
              : Lt(e);
          }
          function ar(e) {
            return tr(e)
              ? (function (e) {
                  return e.match(Ye) || [];
                })(e)
              : (function (e) {
                  return e.split("");
                })(e);
          }
          function cr(e) {
            for (var t = e.length; t-- && re.test(e.charAt(t)); );
            return t;
          }
          var ur = Vt({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            lr = (function e(t) {
              var re = (t =
                  null == t ? ut : lr.defaults(ut.Object(), t, lr.pick(ut, et)))
                  .Array,
                we = t.Date,
                _e = t.Error,
                be = t.Function,
                Ee = t.Math,
                Oe = t.Object,
                Se = t.RegExp,
                Ie = t.String,
                Pe = t.TypeError,
                je = re.prototype,
                xe = be.prototype,
                Ne = Oe.prototype,
                Te = t["__core-js_shared__"],
                Ae = xe.toString,
                Re = Ne.hasOwnProperty,
                Ce = 0,
                Le = (function () {
                  var e = /[^.]+$/.exec(
                    (Te && Te.keys && Te.keys.IE_PROTO) || "",
                  );
                  return e ? "Symbol(src)_1." + e : "";
                })(),
                De = Ne.toString,
                Ue = Ae.call(Oe),
                ke = ut._,
                Me = Se(
                  "^" +
                    Ae.call(Re)
                      .replace(X, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?",
                      ) +
                    "$",
                ),
                $e = pt ? t.Buffer : r,
                ze = t.Symbol,
                qe = t.Uint8Array,
                Ve = $e ? $e.allocUnsafe : r,
                He = nr(Oe.getPrototypeOf, Oe),
                Be = Oe.create,
                Fe = Ne.propertyIsEnumerable,
                Ke = je.splice,
                We = ze ? ze.isConcatSpreadable : r,
                Ye = ze ? ze.iterator : r,
                Qe = ze ? ze.toStringTag : r,
                it = (function () {
                  try {
                    var e = os(Oe, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                at = t.clearTimeout !== ut.clearTimeout && t.clearTimeout,
                ct = we && we.now !== ut.Date.now && we.now,
                lt = t.setTimeout !== ut.setTimeout && t.setTimeout,
                ht = Ee.ceil,
                ft = Ee.floor,
                dt = Oe.getOwnPropertySymbols,
                Lt = $e ? $e.isBuffer : r,
                Vt = t.isFinite,
                hr = je.join,
                pr = nr(Oe.keys, Oe),
                fr = Ee.max,
                dr = Ee.min,
                gr = we.now,
                yr = t.parseInt,
                vr = Ee.random,
                mr = je.reverse,
                wr = os(t, "DataView"),
                _r = os(t, "Map"),
                br = os(t, "Promise"),
                Er = os(t, "Set"),
                Or = os(t, "WeakMap"),
                Sr = os(Oe, "create"),
                Ir = Or && new Or(),
                Pr = {},
                jr = Ls(wr),
                xr = Ls(_r),
                Nr = Ls(br),
                Tr = Ls(Er),
                Ar = Ls(Or),
                Rr = ze ? ze.prototype : r,
                Cr = Rr ? Rr.valueOf : r,
                Lr = Rr ? Rr.toString : r;
              function Dr(e) {
                if (Qo(e) && !qo(e) && !(e instanceof $r)) {
                  if (e instanceof Mr) return e;
                  if (Re.call(e, "__wrapped__")) return Ds(e);
                }
                return new Mr(e);
              }
              var Ur = (function () {
                function e() {}
                return function (t) {
                  if (!Zo(t)) return {};
                  if (Be) return Be(t);
                  e.prototype = t;
                  var n = new e();
                  return (e.prototype = r), n;
                };
              })();
              function kr() {}
              function Mr(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = r);
              }
              function $r(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = h),
                  (this.__views__ = []);
              }
              function zr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function qr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function Vr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var n = e[t];
                  this.set(n[0], n[1]);
                }
              }
              function Hr(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new Vr(); ++t < r; ) this.add(e[t]);
              }
              function Br(e) {
                var t = (this.__data__ = new qr(e));
                this.size = t.size;
              }
              function Fr(e, t) {
                var r = qo(e),
                  n = !r && zo(e),
                  i = !r && !n && Fo(e),
                  s = !r && !n && !i && oa(e),
                  o = r || n || i || s,
                  a = o ? Ft(e.length, Ie) : [],
                  c = a.length;
                for (var u in e)
                  (t || Re.call(e, u)) &&
                    (!o ||
                      !(
                        "length" == u ||
                        (i && ("offset" == u || "parent" == u)) ||
                        (s &&
                          ("buffer" == u ||
                            "byteLength" == u ||
                            "byteOffset" == u)) ||
                        fs(u, c)
                      )) &&
                    a.push(u);
                return a;
              }
              function Kr(e) {
                var t = e.length;
                return t ? e[Hn(0, t - 1)] : r;
              }
              function Wr(e, t) {
                return Ns(Si(e), rn(t, 0, e.length));
              }
              function Gr(e) {
                return Ns(Si(e));
              }
              function Jr(e, t, n) {
                ((n !== r && !ko(e[t], n)) || (n === r && !(t in e))) &&
                  en(e, t, n);
              }
              function Yr(e, t, n) {
                var i = e[t];
                (!Re.call(e, t) || !ko(i, n) || (n === r && !(t in e))) &&
                  en(e, t, n);
              }
              function Zr(e, t) {
                for (var r = e.length; r--; ) if (ko(e[r][0], t)) return r;
                return -1;
              }
              function Qr(e, t, r, n) {
                return (
                  cn(e, function (e, i, s) {
                    t(n, e, r(e), s);
                  }),
                  n
                );
              }
              function Xr(e, t) {
                return e && Ii(t, xa(t), e);
              }
              function en(e, t, r) {
                "__proto__" == t && it
                  ? it(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                    })
                  : (e[t] = r);
              }
              function tn(e, t) {
                for (
                  var n = -1, i = t.length, s = re(i), o = null == e;
                  ++n < i;

                )
                  s[n] = o ? r : Oa(e, t[n]);
                return s;
              }
              function rn(e, t, n) {
                return (
                  e == e &&
                    (n !== r && (e = e <= n ? e : n),
                    t !== r && (e = e >= t ? e : t)),
                  e
                );
              }
              function nn(e, t, n, i, s, o) {
                var a,
                  c = 1 & t,
                  u = 2 & t,
                  l = 4 & t;
                if ((n && (a = s ? n(e, i, s, o) : n(e)), a !== r)) return a;
                if (!Zo(e)) return e;
                var h = qo(e);
                if (h) {
                  if (
                    ((a = (function (e) {
                      var t = e.length,
                        r = new e.constructor(t);
                      return (
                        t &&
                          "string" == typeof e[0] &&
                          Re.call(e, "index") &&
                          ((r.index = e.index), (r.input = e.input)),
                        r
                      );
                    })(e)),
                    !c)
                  )
                    return Si(e, a);
                } else {
                  var p = us(e),
                    d = p == m || p == w;
                  if (Fo(e)) return mi(e, c);
                  if (p == E || p == f || (d && !s)) {
                    if (((a = u || d ? {} : hs(e)), !c))
                      return u
                        ? (function (e, t) {
                            return Ii(e, cs(e), t);
                          })(
                            e,
                            (function (e, t) {
                              return e && Ii(t, Na(t), e);
                            })(a, e),
                          )
                        : (function (e, t) {
                            return Ii(e, as(e), t);
                          })(e, Xr(a, e));
                  } else {
                    if (!nt[p]) return s ? e : {};
                    a = (function (e, t, r) {
                      var n = e.constructor;
                      switch (t) {
                        case N:
                          return wi(e);
                        case g:
                        case y:
                          return new n(+e);
                        case T:
                          return (function (e, t) {
                            var r = t ? wi(e.buffer) : e.buffer;
                            return new e.constructor(
                              r,
                              e.byteOffset,
                              e.byteLength,
                            );
                          })(e, r);
                        case A:
                        case R:
                        case C:
                        case L:
                        case D:
                        case U:
                        case k:
                        case M:
                        case $:
                          return _i(e, r);
                        case _:
                          return new n();
                        case b:
                        case P:
                          return new n(e);
                        case S:
                          return (function (e) {
                            var t = new e.constructor(e.source, le.exec(e));
                            return (t.lastIndex = e.lastIndex), t;
                          })(e);
                        case I:
                          return new n();
                        case j:
                          return (function (e) {
                            return Cr ? Oe(Cr.call(e)) : {};
                          })(e);
                      }
                    })(e, p, c);
                  }
                }
                o || (o = new Br());
                var v = o.get(e);
                if (v) return v;
                o.set(e, a),
                  na(e)
                    ? e.forEach(function (r) {
                        a.add(nn(r, t, n, r, e, o));
                      })
                    : Xo(e) &&
                      e.forEach(function (r, i) {
                        a.set(i, nn(r, t, n, i, e, o));
                      });
                var O = h ? r : (l ? (u ? Xi : Qi) : u ? Na : xa)(e);
                return (
                  Ot(O || e, function (r, i) {
                    O && (r = e[(i = r)]), Yr(a, i, nn(r, t, n, i, e, o));
                  }),
                  a
                );
              }
              function sn(e, t, n) {
                var i = n.length;
                if (null == e) return !i;
                for (e = Oe(e); i--; ) {
                  var s = n[i],
                    o = t[s],
                    a = e[s];
                  if ((a === r && !(s in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function on(e, t, i) {
                if ("function" != typeof e) throw new Pe(n);
                return Is(function () {
                  e.apply(r, i);
                }, t);
              }
              function an(e, t, r, n) {
                var i = -1,
                  s = jt,
                  o = !0,
                  a = e.length,
                  c = [],
                  u = t.length;
                if (!a) return c;
                r && (t = Nt(t, Wt(r))),
                  n
                    ? ((s = xt), (o = !1))
                    : t.length >= 200 && ((s = Jt), (o = !1), (t = new Hr(t)));
                e: for (; ++i < a; ) {
                  var l = e[i],
                    h = null == r ? l : r(l);
                  if (((l = n || 0 !== l ? l : 0), o && h == h)) {
                    for (var p = u; p--; ) if (t[p] === h) continue e;
                    c.push(l);
                  } else s(t, h, n) || c.push(l);
                }
                return c;
              }
              (Dr.templateSettings = {
                escape: W,
                evaluate: G,
                interpolate: J,
                variable: "",
                imports: { _: Dr },
              }),
                (Dr.prototype = kr.prototype),
                (Dr.prototype.constructor = Dr),
                (Mr.prototype = Ur(kr.prototype)),
                (Mr.prototype.constructor = Mr),
                ($r.prototype = Ur(kr.prototype)),
                ($r.prototype.constructor = $r),
                (zr.prototype.clear = function () {
                  (this.__data__ = Sr ? Sr(null) : {}), (this.size = 0);
                }),
                (zr.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (zr.prototype.get = function (e) {
                  var t = this.__data__;
                  if (Sr) {
                    var n = t[e];
                    return n === i ? r : n;
                  }
                  return Re.call(t, e) ? t[e] : r;
                }),
                (zr.prototype.has = function (e) {
                  var t = this.__data__;
                  return Sr ? t[e] !== r : Re.call(t, e);
                }),
                (zr.prototype.set = function (e, t) {
                  var n = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (n[e] = Sr && t === r ? i : t),
                    this
                  );
                }),
                (qr.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (qr.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = Zr(t, e);
                  return !(
                    r < 0 ||
                    (r == t.length - 1 ? t.pop() : Ke.call(t, r, 1),
                    --this.size,
                    0)
                  );
                }),
                (qr.prototype.get = function (e) {
                  var t = this.__data__,
                    n = Zr(t, e);
                  return n < 0 ? r : t[n][1];
                }),
                (qr.prototype.has = function (e) {
                  return Zr(this.__data__, e) > -1;
                }),
                (qr.prototype.set = function (e, t) {
                  var r = this.__data__,
                    n = Zr(r, e);
                  return (
                    n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
                  );
                }),
                (Vr.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new zr(),
                      map: new (_r || qr)(),
                      string: new zr(),
                    });
                }),
                (Vr.prototype.delete = function (e) {
                  var t = is(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (Vr.prototype.get = function (e) {
                  return is(this, e).get(e);
                }),
                (Vr.prototype.has = function (e) {
                  return is(this, e).has(e);
                }),
                (Vr.prototype.set = function (e, t) {
                  var r = is(this, e),
                    n = r.size;
                  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
                }),
                (Hr.prototype.add = Hr.prototype.push =
                  function (e) {
                    return this.__data__.set(e, i), this;
                  }),
                (Hr.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Br.prototype.clear = function () {
                  (this.__data__ = new qr()), (this.size = 0);
                }),
                (Br.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (Br.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (Br.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Br.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof qr) {
                    var n = r.__data__;
                    if (!_r || n.length < 199)
                      return n.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new Vr(n);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var cn = xi(yn),
                un = xi(vn, !0);
              function ln(e, t) {
                var r = !0;
                return (
                  cn(e, function (e, n, i) {
                    return (r = !!t(e, n, i));
                  }),
                  r
                );
              }
              function hn(e, t, n) {
                for (var i = -1, s = e.length; ++i < s; ) {
                  var o = e[i],
                    a = t(o);
                  if (null != a && (c === r ? a == a && !sa(a) : n(a, c)))
                    var c = a,
                      u = o;
                }
                return u;
              }
              function pn(e, t) {
                var r = [];
                return (
                  cn(e, function (e, n, i) {
                    t(e, n, i) && r.push(e);
                  }),
                  r
                );
              }
              function fn(e, t, r, n, i) {
                var s = -1,
                  o = e.length;
                for (r || (r = ps), i || (i = []); ++s < o; ) {
                  var a = e[s];
                  t > 0 && r(a)
                    ? t > 1
                      ? fn(a, t - 1, r, n, i)
                      : Tt(i, a)
                    : n || (i[i.length] = a);
                }
                return i;
              }
              var dn = Ni(),
                gn = Ni(!0);
              function yn(e, t) {
                return e && dn(e, t, xa);
              }
              function vn(e, t) {
                return e && gn(e, t, xa);
              }
              function mn(e, t) {
                return Pt(t, function (t) {
                  return Go(e[t]);
                });
              }
              function wn(e, t) {
                for (var n = 0, i = (t = di(t, e)).length; null != e && n < i; )
                  e = e[Cs(t[n++])];
                return n && n == i ? e : r;
              }
              function _n(e, t, r) {
                var n = t(e);
                return qo(e) ? n : Tt(n, r(e));
              }
              function bn(e) {
                return null == e
                  ? e === r
                    ? "[object Undefined]"
                    : "[object Null]"
                  : Qe && Qe in Oe(e)
                  ? (function (e) {
                      var t = Re.call(e, Qe),
                        n = e[Qe];
                      try {
                        e[Qe] = r;
                        var i = !0;
                      } catch {}
                      var s = De.call(e);
                      return i && (t ? (e[Qe] = n) : delete e[Qe]), s;
                    })(e)
                  : (function (e) {
                      return De.call(e);
                    })(e);
              }
              function En(e, t) {
                return e > t;
              }
              function On(e, t) {
                return null != e && Re.call(e, t);
              }
              function Sn(e, t) {
                return null != e && t in Oe(e);
              }
              function In(e, t, n) {
                for (
                  var i = n ? xt : jt,
                    s = e[0].length,
                    o = e.length,
                    a = o,
                    c = re(o),
                    u = 1 / 0,
                    l = [];
                  a--;

                ) {
                  var h = e[a];
                  a && t && (h = Nt(h, Wt(t))),
                    (u = dr(h.length, u)),
                    (c[a] =
                      !n && (t || (s >= 120 && h.length >= 120))
                        ? new Hr(a && h)
                        : r);
                }
                h = e[0];
                var p = -1,
                  f = c[0];
                e: for (; ++p < s && l.length < u; ) {
                  var d = h[p],
                    g = t ? t(d) : d;
                  if (
                    ((d = n || 0 !== d ? d : 0), !(f ? Jt(f, g) : i(l, g, n)))
                  ) {
                    for (a = o; --a; ) {
                      var y = c[a];
                      if (!(y ? Jt(y, g) : i(e[a], g, n))) continue e;
                    }
                    f && f.push(g), l.push(d);
                  }
                }
                return l;
              }
              function Pn(e, t, n) {
                var i = null == (e = Es(e, (t = di(t, e)))) ? e : e[Cs(Ks(t))];
                return null == i ? r : bt(i, e, n);
              }
              function jn(e) {
                return Qo(e) && bn(e) == f;
              }
              function xn(e, t, n, i, s) {
                return (
                  e === t ||
                  (null == e || null == t || (!Qo(e) && !Qo(t))
                    ? e != e && t != t
                    : (function (e, t, n, i, s, o) {
                        var a = qo(e),
                          c = qo(t),
                          u = a ? d : us(e),
                          l = c ? d : us(t),
                          h = (u = u == f ? E : u) == E,
                          p = (l = l == f ? E : l) == E,
                          m = u == l;
                        if (m && Fo(e)) {
                          if (!Fo(t)) return !1;
                          (a = !0), (h = !1);
                        }
                        if (m && !h)
                          return (
                            o || (o = new Br()),
                            a || oa(e)
                              ? Yi(e, t, n, i, s, o)
                              : (function (e, t, r, n, i, s, o) {
                                  switch (r) {
                                    case T:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (t = t.buffer);
                                    case N:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !s(new qe(e), new qe(t))
                                      );
                                    case g:
                                    case y:
                                    case b:
                                      return ko(+e, +t);
                                    case v:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case S:
                                    case P:
                                      return e == t + "";
                                    case _:
                                      var a = rr;
                                    case I:
                                      var c = 1 & n;
                                      if (
                                        (a || (a = sr), e.size != t.size && !c)
                                      )
                                        return !1;
                                      var u = o.get(e);
                                      if (u) return u == t;
                                      (n |= 2), o.set(e, t);
                                      var l = Yi(a(e), a(t), n, i, s, o);
                                      return o.delete(e), l;
                                    case j:
                                      if (Cr) return Cr.call(e) == Cr.call(t);
                                  }
                                  return !1;
                                })(e, t, u, n, i, s, o)
                          );
                        if (!(1 & n)) {
                          var w = h && Re.call(e, "__wrapped__"),
                            O = p && Re.call(t, "__wrapped__");
                          if (w || O) {
                            var x = w ? e.value() : e,
                              A = O ? t.value() : t;
                            return o || (o = new Br()), s(x, A, n, i, o);
                          }
                        }
                        return (
                          !!m &&
                          (o || (o = new Br()),
                          (function (e, t, n, i, s, o) {
                            var a = 1 & n,
                              c = Qi(e),
                              u = c.length;
                            if (u != Qi(t).length && !a) return !1;
                            for (var l = u; l--; ) {
                              var h = c[l];
                              if (!(a ? h in t : Re.call(t, h))) return !1;
                            }
                            var p = o.get(e),
                              f = o.get(t);
                            if (p && f) return p == t && f == e;
                            var d = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++l < u; ) {
                              var y = e[(h = c[l])],
                                v = t[h];
                              if (i)
                                var m = a
                                  ? i(v, y, h, t, e, o)
                                  : i(y, v, h, e, t, o);
                              if (
                                !(m === r ? y === v || s(y, v, n, i, o) : m)
                              ) {
                                d = !1;
                                break;
                              }
                              g || (g = "constructor" == h);
                            }
                            if (d && !g) {
                              var w = e.constructor,
                                _ = t.constructor;
                              w != _ &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof w &&
                                  w instanceof w &&
                                  "function" == typeof _ &&
                                  _ instanceof _
                                ) &&
                                (d = !1);
                            }
                            return o.delete(e), o.delete(t), d;
                          })(e, t, n, i, s, o))
                        );
                      })(e, t, n, i, xn, s))
                );
              }
              function Nn(e, t, n, i) {
                var s = n.length,
                  o = s,
                  a = !i;
                if (null == e) return !o;
                for (e = Oe(e); s--; ) {
                  var c = n[s];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++s < o; ) {
                  var u = (c = n[s])[0],
                    l = e[u],
                    h = c[1];
                  if (a && c[2]) {
                    if (l === r && !(u in e)) return !1;
                  } else {
                    var p = new Br();
                    if (i) var f = i(l, h, u, e, t, p);
                    if (!(f === r ? xn(h, l, 3, i, p) : f)) return !1;
                  }
                }
                return !0;
              }
              function Tn(e) {
                return (
                  !(
                    !Zo(e) ||
                    (function (e) {
                      return !!Le && Le in e;
                    })(e)
                  ) && (Go(e) ? Me : fe).test(Ls(e))
                );
              }
              function An(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? ec
                  : "object" == typeof e
                  ? qo(e)
                    ? Un(e[0], e[1])
                    : Dn(e)
                  : uc(e);
              }
              function Rn(e) {
                if (!ms(e)) return pr(e);
                var t = [];
                for (var r in Oe(e))
                  Re.call(e, r) && "constructor" != r && t.push(r);
                return t;
              }
              function Cn(e, t) {
                return e < t;
              }
              function Ln(e, t) {
                var r = -1,
                  n = Ho(e) ? re(e.length) : [];
                return (
                  cn(e, function (e, i, s) {
                    n[++r] = t(e, i, s);
                  }),
                  n
                );
              }
              function Dn(e) {
                var t = ss(e);
                return 1 == t.length && t[0][2]
                  ? _s(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || Nn(r, e, t);
                    };
              }
              function Un(e, t) {
                return gs(e) && ws(t)
                  ? _s(Cs(e), t)
                  : function (n) {
                      var i = Oa(n, e);
                      return i === r && i === t ? Sa(n, e) : xn(t, i, 3);
                    };
              }
              function kn(e, t, n, i, s) {
                e !== t &&
                  dn(
                    t,
                    function (o, a) {
                      if ((s || (s = new Br()), Zo(o)))
                        !(function (e, t, n, i, s, o, a) {
                          var c = Os(e, n),
                            u = Os(t, n),
                            l = a.get(u);
                          if (l) Jr(e, n, l);
                          else {
                            var h = o ? o(c, u, n + "", e, t, a) : r,
                              p = h === r;
                            if (p) {
                              var f = qo(u),
                                d = !f && Fo(u),
                                g = !f && !d && oa(u);
                              (h = u),
                                f || d || g
                                  ? qo(c)
                                    ? (h = c)
                                    : Bo(c)
                                    ? (h = Si(c))
                                    : d
                                    ? ((p = !1), (h = mi(u, !0)))
                                    : g
                                    ? ((p = !1), (h = _i(u, !0)))
                                    : (h = [])
                                  : ta(u) || zo(u)
                                  ? ((h = c),
                                    zo(c)
                                      ? (h = da(c))
                                      : (!Zo(c) || Go(c)) && (h = hs(u)))
                                  : (p = !1);
                            }
                            p && (a.set(u, h), s(h, u, i, o, a), a.delete(u)),
                              Jr(e, n, h);
                          }
                        })(e, t, a, n, kn, i, s);
                      else {
                        var c = i ? i(Os(e, a), o, a + "", e, t, s) : r;
                        c === r && (c = o), Jr(e, a, c);
                      }
                    },
                    Na,
                  );
              }
              function Mn(e, t) {
                var n = e.length;
                if (n) return fs((t += t < 0 ? n : 0), n) ? e[t] : r;
              }
              function $n(e, t, r) {
                t = t.length
                  ? Nt(t, function (e) {
                      return qo(e)
                        ? function (t) {
                            return wn(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [ec];
                var n = -1;
                return (
                  (t = Nt(t, Wt(ns()))),
                  (function (e, t) {
                    var n = e.length;
                    for (
                      e.sort(function (e, t) {
                        return (function (e, t, r) {
                          for (
                            var n = -1,
                              i = e.criteria,
                              s = t.criteria,
                              o = i.length,
                              a = r.length;
                            ++n < o;

                          ) {
                            var c = bi(i[n], s[n]);
                            if (c)
                              return n >= a ? c : c * ("desc" == r[n] ? -1 : 1);
                          }
                          return e.index - t.index;
                        })(e, t, r);
                      });
                      n--;

                    )
                      e[n] = e[n].value;
                    return e;
                  })(
                    Ln(e, function (e, r, i) {
                      return {
                        criteria: Nt(t, function (t) {
                          return t(e);
                        }),
                        index: ++n,
                        value: e,
                      };
                    }),
                  )
                );
              }
              function zn(e, t, r) {
                for (var n = -1, i = t.length, s = {}; ++n < i; ) {
                  var o = t[n],
                    a = wn(e, o);
                  r(a, o) && Gn(s, di(o, e), a);
                }
                return s;
              }
              function qn(e, t, r, n) {
                var i = n ? Mt : kt,
                  s = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = Si(t)), r && (a = Nt(e, Wt(r))); ++s < o; )
                  for (
                    var c = 0, u = t[s], l = r ? r(u) : u;
                    (c = i(a, l, c, n)) > -1;

                  )
                    a !== e && Ke.call(a, c, 1), Ke.call(e, c, 1);
                return e;
              }
              function Vn(e, t) {
                for (var r = e ? t.length : 0, n = r - 1; r--; ) {
                  var i = t[r];
                  if (r == n || i !== s) {
                    var s = i;
                    fs(i) ? Ke.call(e, i, 1) : oi(e, i);
                  }
                }
                return e;
              }
              function Hn(e, t) {
                return e + ft(vr() * (t - e + 1));
              }
              function Bn(e, t) {
                var r = "";
                if (!e || t < 1 || t > u) return r;
                do {
                  t % 2 && (r += e), (t = ft(t / 2)) && (e += e);
                } while (t);
                return r;
              }
              function Fn(e, t) {
                return Ps(bs(e, t, ec), e + "");
              }
              function Kn(e) {
                return Kr(ka(e));
              }
              function Wn(e, t) {
                var r = ka(e);
                return Ns(r, rn(t, 0, r.length));
              }
              function Gn(e, t, n, i) {
                if (!Zo(e)) return e;
                for (
                  var s = -1, o = (t = di(t, e)).length, a = o - 1, c = e;
                  null != c && ++s < o;

                ) {
                  var u = Cs(t[s]),
                    l = n;
                  if (
                    "__proto__" === u ||
                    "constructor" === u ||
                    "prototype" === u
                  )
                    return e;
                  if (s != a) {
                    var h = c[u];
                    (l = i ? i(h, u, c) : r) === r &&
                      (l = Zo(h) ? h : fs(t[s + 1]) ? [] : {});
                  }
                  Yr(c, u, l), (c = c[u]);
                }
                return e;
              }
              var Jn = Ir
                  ? function (e, t) {
                      return Ir.set(e, t), e;
                    }
                  : ec,
                Yn = it
                  ? function (e, t) {
                      return it(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Za(t),
                        writable: !0,
                      });
                    }
                  : ec;
              function Zn(e) {
                return Ns(ka(e));
              }
              function Qn(e, t, r) {
                var n = -1,
                  i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t),
                  (r = r > i ? i : r) < 0 && (r += i),
                  (i = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                for (var s = re(i); ++n < i; ) s[n] = e[n + t];
                return s;
              }
              function Xn(e, t) {
                var r;
                return (
                  cn(e, function (e, n, i) {
                    return !(r = t(e, n, i));
                  }),
                  !!r
                );
              }
              function ei(e, t, r) {
                var n = 0,
                  i = null == e ? n : e.length;
                if ("number" == typeof t && t == t && i <= 2147483647) {
                  for (; n < i; ) {
                    var s = (n + i) >>> 1,
                      o = e[s];
                    null !== o && !sa(o) && (r ? o <= t : o < t)
                      ? (n = s + 1)
                      : (i = s);
                  }
                  return i;
                }
                return ti(e, t, ec, r);
              }
              function ti(e, t, n, i) {
                var s = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                for (
                  var a = (t = n(t)) != t,
                    c = null === t,
                    u = sa(t),
                    l = t === r;
                  s < o;

                ) {
                  var h = ft((s + o) / 2),
                    p = n(e[h]),
                    f = p !== r,
                    d = null === p,
                    g = p == p,
                    y = sa(p);
                  if (a) var v = i || g;
                  else
                    v = l
                      ? g && (i || f)
                      : c
                      ? g && f && (i || !d)
                      : u
                      ? g && f && !d && (i || !y)
                      : !d && !y && (i ? p <= t : p < t);
                  v ? (s = h + 1) : (o = h);
                }
                return dr(o, 4294967294);
              }
              function ri(e, t) {
                for (var r = -1, n = e.length, i = 0, s = []; ++r < n; ) {
                  var o = e[r],
                    a = t ? t(o) : o;
                  if (!r || !ko(a, c)) {
                    var c = a;
                    s[i++] = 0 === o ? 0 : o;
                  }
                }
                return s;
              }
              function ni(e) {
                return "number" == typeof e ? e : sa(e) ? l : +e;
              }
              function ii(e) {
                if ("string" == typeof e) return e;
                if (qo(e)) return Nt(e, ii) + "";
                if (sa(e)) return Lr ? Lr.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -c ? "-0" : t;
              }
              function si(e, t, r) {
                var n = -1,
                  i = jt,
                  s = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (r) (o = !1), (i = xt);
                else if (s >= 200) {
                  var u = t ? null : Bi(e);
                  if (u) return sr(u);
                  (o = !1), (i = Jt), (c = new Hr());
                } else c = t ? [] : a;
                e: for (; ++n < s; ) {
                  var l = e[n],
                    h = t ? t(l) : l;
                  if (((l = r || 0 !== l ? l : 0), o && h == h)) {
                    for (var p = c.length; p--; ) if (c[p] === h) continue e;
                    t && c.push(h), a.push(l);
                  } else i(c, h, r) || (c !== a && c.push(h), a.push(l));
                }
                return a;
              }
              function oi(e, t) {
                return (
                  null == (e = Es(e, (t = di(t, e)))) || delete e[Cs(Ks(t))]
                );
              }
              function ai(e, t, r, n) {
                return Gn(e, t, r(wn(e, t)), n);
              }
              function ci(e, t, r, n) {
                for (
                  var i = e.length, s = n ? i : -1;
                  (n ? s-- : ++s < i) && t(e[s], s, e);

                );
                return r
                  ? Qn(e, n ? 0 : s, n ? s + 1 : i)
                  : Qn(e, n ? s + 1 : 0, n ? i : s);
              }
              function ui(e, t) {
                var r = e;
                return (
                  r instanceof $r && (r = r.value()),
                  At(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, Tt([e], t.args));
                    },
                    r,
                  )
                );
              }
              function li(e, t, r) {
                var n = e.length;
                if (n < 2) return n ? si(e[0]) : [];
                for (var i = -1, s = re(n); ++i < n; )
                  for (var o = e[i], a = -1; ++a < n; )
                    a != i && (s[i] = an(s[i] || o, e[a], t, r));
                return si(fn(s, 1), t, r);
              }
              function hi(e, t, n) {
                for (
                  var i = -1, s = e.length, o = t.length, a = {};
                  ++i < s;

                ) {
                  var c = i < o ? t[i] : r;
                  n(a, e[i], c);
                }
                return a;
              }
              function pi(e) {
                return Bo(e) ? e : [];
              }
              function fi(e) {
                return "function" == typeof e ? e : ec;
              }
              function di(e, t) {
                return qo(e) ? e : gs(e, t) ? [e] : Rs(ga(e));
              }
              var gi = Fn;
              function yi(e, t, n) {
                var i = e.length;
                return (n = n === r ? i : n), !t && n >= i ? e : Qn(e, t, n);
              }
              var vi =
                at ||
                function (e) {
                  return ut.clearTimeout(e);
                };
              function mi(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  n = Ve ? Ve(r) : new e.constructor(r);
                return e.copy(n), n;
              }
              function wi(e) {
                var t = new e.constructor(e.byteLength);
                return new qe(t).set(new qe(e)), t;
              }
              function _i(e, t) {
                var r = t ? wi(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function bi(e, t) {
                if (e !== t) {
                  var n = e !== r,
                    i = null === e,
                    s = e == e,
                    o = sa(e),
                    a = t !== r,
                    c = null === t,
                    u = t == t,
                    l = sa(t);
                  if (
                    (!c && !l && !o && e > t) ||
                    (o && a && u && !c && !l) ||
                    (i && a && u) ||
                    (!n && u) ||
                    !s
                  )
                    return 1;
                  if (
                    (!i && !o && !l && e < t) ||
                    (l && n && s && !i && !o) ||
                    (c && n && s) ||
                    (!a && s) ||
                    !u
                  )
                    return -1;
                }
                return 0;
              }
              function Ei(e, t, r, n) {
                for (
                  var i = -1,
                    s = e.length,
                    o = r.length,
                    a = -1,
                    c = t.length,
                    u = fr(s - o, 0),
                    l = re(c + u),
                    h = !n;
                  ++a < c;

                )
                  l[a] = t[a];
                for (; ++i < o; ) (h || i < s) && (l[r[i]] = e[i]);
                for (; u--; ) l[a++] = e[i++];
                return l;
              }
              function Oi(e, t, r, n) {
                for (
                  var i = -1,
                    s = e.length,
                    o = -1,
                    a = r.length,
                    c = -1,
                    u = t.length,
                    l = fr(s - a, 0),
                    h = re(l + u),
                    p = !n;
                  ++i < l;

                )
                  h[i] = e[i];
                for (var f = i; ++c < u; ) h[f + c] = t[c];
                for (; ++o < a; ) (p || i < s) && (h[f + r[o]] = e[i++]);
                return h;
              }
              function Si(e, t) {
                var r = -1,
                  n = e.length;
                for (t || (t = re(n)); ++r < n; ) t[r] = e[r];
                return t;
              }
              function Ii(e, t, n, i) {
                var s = !n;
                n || (n = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    u = i ? i(n[c], e[c], c, n, e) : r;
                  u === r && (u = e[c]), s ? en(n, c, u) : Yr(n, c, u);
                }
                return n;
              }
              function Pi(e, t) {
                return function (r, n) {
                  var i = qo(r) ? Et : Qr,
                    s = t ? t() : {};
                  return i(r, e, ns(n, 2), s);
                };
              }
              function ji(e) {
                return Fn(function (t, n) {
                  var i = -1,
                    s = n.length,
                    o = s > 1 ? n[s - 1] : r,
                    a = s > 2 ? n[2] : r;
                  for (
                    o = e.length > 3 && "function" == typeof o ? (s--, o) : r,
                      a && ds(n[0], n[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                      t = Oe(t);
                    ++i < s;

                  ) {
                    var c = n[i];
                    c && e(t, c, i, o);
                  }
                  return t;
                });
              }
              function xi(e, t) {
                return function (r, n) {
                  if (null == r) return r;
                  if (!Ho(r)) return e(r, n);
                  for (
                    var i = r.length, s = t ? i : -1, o = Oe(r);
                    (t ? s-- : ++s < i) && !1 !== n(o[s], s, o);

                  );
                  return r;
                };
              }
              function Ni(e) {
                return function (t, r, n) {
                  for (var i = -1, s = Oe(t), o = n(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++i];
                    if (!1 === r(s[c], c, s)) break;
                  }
                  return t;
                };
              }
              function Ti(e) {
                return function (t) {
                  var n = tr((t = ga(t))) ? ar(t) : r,
                    i = n ? n[0] : t.charAt(0),
                    s = n ? yi(n, 1).join("") : t.slice(1);
                  return i[e]() + s;
                };
              }
              function Ai(e) {
                return function (t) {
                  return At(Ga(za(t).replace(Ge, "")), e, "");
                };
              }
              function Ri(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = Ur(e.prototype),
                    n = e.apply(r, t);
                  return Zo(n) ? n : r;
                };
              }
              function Ci(e) {
                return function (t, n, i) {
                  var s = Oe(t);
                  if (!Ho(t)) {
                    var o = ns(n, 3);
                    (t = xa(t)),
                      (n = function (e) {
                        return o(s[e], e, s);
                      });
                  }
                  var a = e(t, n, i);
                  return a > -1 ? s[o ? t[a] : a] : r;
                };
              }
              function Li(e) {
                return Zi(function (t) {
                  var i = t.length,
                    s = i,
                    o = Mr.prototype.thru;
                  for (e && t.reverse(); s--; ) {
                    var a = t[s];
                    if ("function" != typeof a) throw new Pe(n);
                    if (o && !c && "wrapper" == ts(a)) var c = new Mr([], !0);
                  }
                  for (s = c ? s : i; ++s < i; ) {
                    var u = ts((a = t[s])),
                      l = "wrapper" == u ? es(a) : r;
                    c =
                      l && ys(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9]
                        ? c[ts(l[0])].apply(c, l[3])
                        : 1 == a.length && ys(a)
                        ? c[u]()
                        : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && qo(r)) return c.plant(r).value();
                    for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i; )
                      s = t[n].call(this, s);
                    return s;
                  };
                });
              }
              function Di(e, t, n, i, s, o, c, u, l, h) {
                var p = t & a,
                  f = 1 & t,
                  d = 2 & t,
                  g = 24 & t,
                  y = 512 & t,
                  v = d ? r : Ri(e);
                return function a() {
                  for (var m = arguments.length, w = re(m), _ = m; _--; )
                    w[_] = arguments[_];
                  if (g)
                    var b = rs(a),
                      E = (function (e, t) {
                        for (var r = e.length, n = 0; r--; ) e[r] === t && ++n;
                        return n;
                      })(w, b);
                  if (
                    (i && (w = Ei(w, i, s, g)),
                    o && (w = Oi(w, o, c, g)),
                    (m -= E),
                    g && m < h)
                  ) {
                    var O = ir(w, b);
                    return Vi(e, t, Di, a.placeholder, n, w, O, u, l, h - m);
                  }
                  var S = f ? n : this,
                    I = d ? S[e] : e;
                  return (
                    (m = w.length),
                    u
                      ? (w = (function (e, t) {
                          for (
                            var n = e.length, i = dr(t.length, n), s = Si(e);
                            i--;

                          ) {
                            var o = t[i];
                            e[i] = fs(o, n) ? s[o] : r;
                          }
                          return e;
                        })(w, u))
                      : y && m > 1 && w.reverse(),
                    p && l < m && (w.length = l),
                    this &&
                      this !== ut &&
                      this instanceof a &&
                      (I = v || Ri(I)),
                    I.apply(S, w)
                  );
                };
              }
              function Ui(e, t) {
                return function (r, n) {
                  return (function (e, t, r, n) {
                    return (
                      yn(e, function (e, i, s) {
                        t(n, r(e), i, s);
                      }),
                      n
                    );
                  })(r, e, t(n), {});
                };
              }
              function ki(e, t) {
                return function (n, i) {
                  var s;
                  if (n === r && i === r) return t;
                  if ((n !== r && (s = n), i !== r)) {
                    if (s === r) return i;
                    "string" == typeof n || "string" == typeof i
                      ? ((n = ii(n)), (i = ii(i)))
                      : ((n = ni(n)), (i = ni(i))),
                      (s = e(n, i));
                  }
                  return s;
                };
              }
              function Mi(e) {
                return Zi(function (t) {
                  return (
                    (t = Nt(t, Wt(ns()))),
                    Fn(function (r) {
                      var n = this;
                      return e(t, function (e) {
                        return bt(e, n, r);
                      });
                    })
                  );
                });
              }
              function $i(e, t) {
                var n = (t = t === r ? " " : ii(t)).length;
                if (n < 2) return n ? Bn(t, e) : t;
                var i = Bn(t, ht(e / or(t)));
                return tr(t) ? yi(ar(i), 0, e).join("") : i.slice(0, e);
              }
              function zi(e) {
                return function (t, n, i) {
                  return (
                    i && "number" != typeof i && ds(t, n, i) && (n = i = r),
                    (t = la(t)),
                    n === r ? ((n = t), (t = 0)) : (n = la(n)),
                    (function (e, t, r, n) {
                      for (
                        var i = -1,
                          s = fr(ht((t - e) / (r || 1)), 0),
                          o = re(s);
                        s--;

                      )
                        (o[n ? s : ++i] = e), (e += r);
                      return o;
                    })(t, n, (i = i === r ? (t < n ? 1 : -1) : la(i)), e)
                  );
                };
              }
              function qi(e) {
                return function (t, r) {
                  return (
                    ("string" == typeof t && "string" == typeof r) ||
                      ((t = fa(t)), (r = fa(r))),
                    e(t, r)
                  );
                };
              }
              function Vi(e, t, n, i, s, a, c, u, l, h) {
                var p = 8 & t;
                (t |= p ? o : 64), 4 & (t &= ~(p ? 64 : o)) || (t &= -4);
                var f = [
                    e,
                    t,
                    s,
                    p ? a : r,
                    p ? c : r,
                    p ? r : a,
                    p ? r : c,
                    u,
                    l,
                    h,
                  ],
                  d = n.apply(r, f);
                return ys(e) && Ss(d, f), (d.placeholder = i), js(d, e, t);
              }
              function Hi(e) {
                var t = Ee[e];
                return function (e, r) {
                  if (
                    ((e = fa(e)), (r = null == r ? 0 : dr(ha(r), 292)) && Vt(e))
                  ) {
                    var n = (ga(e) + "e").split("e");
                    return +(
                      (n = (ga(t(n[0] + "e" + (+n[1] + r))) + "e").split(
                        "e",
                      ))[0] +
                      "e" +
                      (+n[1] - r)
                    );
                  }
                  return t(e);
                };
              }
              var Bi =
                Er && 1 / sr(new Er([, -0]))[1] == c
                  ? function (e) {
                      return new Er(e);
                    }
                  : sc;
              function Fi(e) {
                return function (t) {
                  var r = us(t);
                  return r == _
                    ? rr(t)
                    : r == I
                    ? (function (e) {
                        var t = -1,
                          r = Array(e.size);
                        return (
                          e.forEach(function (e) {
                            r[++t] = [e, e];
                          }),
                          r
                        );
                      })(t)
                    : (function (e, t) {
                        return Nt(t, function (t) {
                          return [t, e[t]];
                        });
                      })(t, e(t));
                };
              }
              function Ki(e, t, i, c, u, l, h, p) {
                var f = 2 & t;
                if (!f && "function" != typeof e) throw new Pe(n);
                var d = c ? c.length : 0;
                if (
                  (d || ((t &= -97), (c = u = r)),
                  (h = h === r ? h : fr(ha(h), 0)),
                  (p = p === r ? p : ha(p)),
                  (d -= u ? u.length : 0),
                  64 & t)
                ) {
                  var g = c,
                    y = u;
                  c = u = r;
                }
                var v = f ? r : es(e),
                  m = [e, t, i, c, u, g, y, l, h, p];
                if (
                  (v &&
                    (function (e, t) {
                      var r = e[1],
                        n = t[1],
                        i = r | n,
                        o = i < 131,
                        c =
                          (n == a && 8 == r) ||
                          (n == a && 256 == r && e[7].length <= t[8]) ||
                          (384 == n && t[7].length <= t[8] && 8 == r);
                      if (!o && !c) return e;
                      1 & n && ((e[2] = t[2]), (i |= 1 & r ? 0 : 4));
                      var u = t[3];
                      if (u) {
                        var l = e[3];
                        (e[3] = l ? Ei(l, u, t[4]) : u),
                          (e[4] = l ? ir(e[3], s) : t[4]);
                      }
                      (u = t[5]) &&
                        ((l = e[5]),
                        (e[5] = l ? Oi(l, u, t[6]) : u),
                        (e[6] = l ? ir(e[5], s) : t[6])),
                        (u = t[7]) && (e[7] = u),
                        n & a && (e[8] = null == e[8] ? t[8] : dr(e[8], t[8])),
                        null == e[9] && (e[9] = t[9]),
                        (e[0] = t[0]),
                        (e[1] = i);
                    })(m, v),
                  (e = m[0]),
                  (t = m[1]),
                  (i = m[2]),
                  (c = m[3]),
                  (u = m[4]),
                  !(p = m[9] =
                    m[9] === r ? (f ? 0 : e.length) : fr(m[9] - d, 0)) &&
                    24 & t &&
                    (t &= -25),
                  t && 1 != t)
                )
                  w =
                    8 == t || 16 == t
                      ? (function (e, t, n) {
                          var i = Ri(e);
                          return function s() {
                            for (
                              var o = arguments.length,
                                a = re(o),
                                c = o,
                                u = rs(s);
                              c--;

                            )
                              a[c] = arguments[c];
                            var l =
                              o < 3 && a[0] !== u && a[o - 1] !== u
                                ? []
                                : ir(a, u);
                            return (o -= l.length) < n
                              ? Vi(
                                  e,
                                  t,
                                  Di,
                                  s.placeholder,
                                  r,
                                  a,
                                  l,
                                  r,
                                  r,
                                  n - o,
                                )
                              : bt(
                                  this && this !== ut && this instanceof s
                                    ? i
                                    : e,
                                  this,
                                  a,
                                );
                          };
                        })(e, t, p)
                      : (t != o && 33 != t) || u.length
                      ? Di.apply(r, m)
                      : (function (e, t, r, n) {
                          var i = 1 & t,
                            s = Ri(e);
                          return function t() {
                            for (
                              var o = -1,
                                a = arguments.length,
                                c = -1,
                                u = n.length,
                                l = re(u + a),
                                h =
                                  this && this !== ut && this instanceof t
                                    ? s
                                    : e;
                              ++c < u;

                            )
                              l[c] = n[c];
                            for (; a--; ) l[c++] = arguments[++o];
                            return bt(h, i ? r : this, l);
                          };
                        })(e, t, i, c);
                else
                  var w = (function (e, t, r) {
                    var n = 1 & t,
                      i = Ri(e);
                    return function t() {
                      return (
                        this && this !== ut && this instanceof t ? i : e
                      ).apply(n ? r : this, arguments);
                    };
                  })(e, t, i);
                return js((v ? Jn : Ss)(w, m), e, t);
              }
              function Wi(e, t, n, i) {
                return e === r || (ko(e, Ne[n]) && !Re.call(i, n)) ? t : e;
              }
              function Gi(e, t, n, i, s, o) {
                return (
                  Zo(e) &&
                    Zo(t) &&
                    (o.set(t, e), kn(e, t, r, Gi, o), o.delete(t)),
                  e
                );
              }
              function Ji(e) {
                return ta(e) ? r : e;
              }
              function Yi(e, t, n, i, s, o) {
                var a = 1 & n,
                  c = e.length,
                  u = t.length;
                if (c != u && !(a && u > c)) return !1;
                var l = o.get(e),
                  h = o.get(t);
                if (l && h) return l == t && h == e;
                var p = -1,
                  f = !0,
                  d = 2 & n ? new Hr() : r;
                for (o.set(e, t), o.set(t, e); ++p < c; ) {
                  var g = e[p],
                    y = t[p];
                  if (i) var v = a ? i(y, g, p, t, e, o) : i(g, y, p, e, t, o);
                  if (v !== r) {
                    if (v) continue;
                    f = !1;
                    break;
                  }
                  if (d) {
                    if (
                      !Ct(t, function (e, t) {
                        if (!Jt(d, t) && (g === e || s(g, e, n, i, o)))
                          return d.push(t);
                      })
                    ) {
                      f = !1;
                      break;
                    }
                  } else if (g !== y && !s(g, y, n, i, o)) {
                    f = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), f;
              }
              function Zi(e) {
                return Ps(bs(e, r, qs), e + "");
              }
              function Qi(e) {
                return _n(e, xa, as);
              }
              function Xi(e) {
                return _n(e, Na, cs);
              }
              var es = Ir
                ? function (e) {
                    return Ir.get(e);
                  }
                : sc;
              function ts(e) {
                for (
                  var t = e.name + "",
                    r = Pr[t],
                    n = Re.call(Pr, t) ? r.length : 0;
                  n--;

                ) {
                  var i = r[n],
                    s = i.func;
                  if (null == s || s == e) return i.name;
                }
                return t;
              }
              function rs(e) {
                return (Re.call(Dr, "placeholder") ? Dr : e).placeholder;
              }
              function ns() {
                var e = Dr.iteratee || tc;
                return (
                  (e = e === tc ? An : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function is(e, t) {
                var r = e.__data__;
                return (function (e) {
                  var t = typeof e;
                  return "string" == t ||
                    "number" == t ||
                    "symbol" == t ||
                    "boolean" == t
                    ? "__proto__" !== e
                    : null === e;
                })(t)
                  ? r["string" == typeof t ? "string" : "hash"]
                  : r.map;
              }
              function ss(e) {
                for (var t = xa(e), r = t.length; r--; ) {
                  var n = t[r],
                    i = e[n];
                  t[r] = [n, i, ws(i)];
                }
                return t;
              }
              function os(e, t) {
                var n = (function (e, t) {
                  return null == e ? r : e[t];
                })(e, t);
                return Tn(n) ? n : r;
              }
              var as = dt
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = Oe(e)),
                          Pt(dt(e), function (t) {
                            return Fe.call(e, t);
                          }));
                    }
                  : pc,
                cs = dt
                  ? function (e) {
                      for (var t = []; e; ) Tt(t, as(e)), (e = He(e));
                      return t;
                    }
                  : pc,
                us = bn;
              function ls(e, t, r) {
                for (var n = -1, i = (t = di(t, e)).length, s = !1; ++n < i; ) {
                  var o = Cs(t[n]);
                  if (!(s = null != e && r(e, o))) break;
                  e = e[o];
                }
                return s || ++n != i
                  ? s
                  : !!(i = null == e ? 0 : e.length) &&
                      Yo(i) &&
                      fs(o, i) &&
                      (qo(e) || zo(e));
              }
              function hs(e) {
                return "function" != typeof e.constructor || ms(e)
                  ? {}
                  : Ur(He(e));
              }
              function ps(e) {
                return qo(e) || zo(e) || !!(We && e && e[We]);
              }
              function fs(e, t) {
                var r = typeof e;
                return (
                  !!(t = t ?? u) &&
                  ("number" == r || ("symbol" != r && ge.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function ds(e, t, r) {
                if (!Zo(r)) return !1;
                var n = typeof t;
                return (
                  !!("number" == n
                    ? Ho(r) && fs(t, r.length)
                    : "string" == n && t in r) && ko(r[t], e)
                );
              }
              function gs(e, t) {
                if (qo(e)) return !1;
                var r = typeof e;
                return (
                  !(
                    "number" != r &&
                    "symbol" != r &&
                    "boolean" != r &&
                    null != e &&
                    !sa(e)
                  ) ||
                  Z.test(e) ||
                  !Y.test(e) ||
                  (null != t && e in Oe(t))
                );
              }
              function ys(e) {
                var t = ts(e),
                  r = Dr[t];
                if ("function" != typeof r || !(t in $r.prototype)) return !1;
                if (e === r) return !0;
                var n = es(r);
                return !!n && e === n[0];
              }
              ((wr && us(new wr(new ArrayBuffer(1))) != T) ||
                (_r && us(new _r()) != _) ||
                (br && us(br.resolve()) != O) ||
                (Er && us(new Er()) != I) ||
                (Or && us(new Or()) != x)) &&
                (us = function (e) {
                  var t = bn(e),
                    n = t == E ? e.constructor : r,
                    i = n ? Ls(n) : "";
                  if (i)
                    switch (i) {
                      case jr:
                        return T;
                      case xr:
                        return _;
                      case Nr:
                        return O;
                      case Tr:
                        return I;
                      case Ar:
                        return x;
                    }
                  return t;
                });
              var vs = Te ? Go : fc;
              function ms(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || Ne);
              }
              function ws(e) {
                return e == e && !Zo(e);
              }
              function _s(e, t) {
                return function (n) {
                  return null != n && n[e] === t && (t !== r || e in Oe(n));
                };
              }
              function bs(e, t, n) {
                return (
                  (t = fr(t === r ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        i = -1,
                        s = fr(r.length - t, 0),
                        o = re(s);
                      ++i < s;

                    )
                      o[i] = r[t + i];
                    i = -1;
                    for (var a = re(t + 1); ++i < t; ) a[i] = r[i];
                    return (a[t] = n(o)), bt(e, this, a);
                  }
                );
              }
              function Es(e, t) {
                return t.length < 2 ? e : wn(e, Qn(t, 0, -1));
              }
              function Os(e, t) {
                if (
                  ("constructor" !== t || "function" != typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var Ss = xs(Jn),
                Is =
                  lt ||
                  function (e, t) {
                    return ut.setTimeout(e, t);
                  },
                Ps = xs(Yn);
              function js(e, t, r) {
                var n = t + "";
                return Ps(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var n = r - 1;
                    return (
                      (t[n] = (r > 1 ? "& " : "") + t[n]),
                      (t = t.join(r > 2 ? ", " : " ")),
                      e.replace(ne, "{\n/* [wrapped with " + t + "] */\n")
                    );
                  })(
                    n,
                    (function (e, t) {
                      return (
                        Ot(p, function (r) {
                          var n = "_." + r[0];
                          t & r[1] && !jt(e, n) && e.push(n);
                        }),
                        e.sort()
                      );
                    })(
                      (function (e) {
                        var t = e.match(ie);
                        return t ? t[1].split(se) : [];
                      })(n),
                      r,
                    ),
                  ),
                );
              }
              function xs(e) {
                var t = 0,
                  n = 0;
                return function () {
                  var i = gr(),
                    s = 16 - (i - n);
                  if (((n = i), s > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(r, arguments);
                };
              }
              function Ns(e, t) {
                var n = -1,
                  i = e.length,
                  s = i - 1;
                for (t = t === r ? i : t; ++n < t; ) {
                  var o = Hn(n, s),
                    a = e[o];
                  (e[o] = e[n]), (e[n] = a);
                }
                return (e.length = t), e;
              }
              var Ts,
                As,
                Rs =
                  ((Ts = Ao(
                    function (e) {
                      var t = [];
                      return (
                        46 === e.charCodeAt(0) && t.push(""),
                        e.replace(Q, function (e, r, n, i) {
                          t.push(n ? i.replace(ce, "$1") : r || e);
                        }),
                        t
                      );
                    },
                    function (e) {
                      return 500 === As.size && As.clear(), e;
                    },
                  )),
                  (As = Ts.cache),
                  Ts);
              function Cs(e) {
                if ("string" == typeof e || sa(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -c ? "-0" : t;
              }
              function Ls(e) {
                if (null != e) {
                  try {
                    return Ae.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function Ds(e) {
                if (e instanceof $r) return e.clone();
                var t = new Mr(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = Si(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var Us = Fn(function (e, t) {
                  return Bo(e) ? an(e, fn(t, 1, Bo, !0)) : [];
                }),
                ks = Fn(function (e, t) {
                  var n = Ks(t);
                  return (
                    Bo(n) && (n = r),
                    Bo(e) ? an(e, fn(t, 1, Bo, !0), ns(n, 2)) : []
                  );
                }),
                Ms = Fn(function (e, t) {
                  var n = Ks(t);
                  return (
                    Bo(n) && (n = r), Bo(e) ? an(e, fn(t, 1, Bo, !0), r, n) : []
                  );
                });
              function $s(e, t, r) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var i = null == r ? 0 : ha(r);
                return i < 0 && (i = fr(n + i, 0)), Ut(e, ns(t, 3), i);
              }
              function zs(e, t, n) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var s = i - 1;
                return (
                  n !== r &&
                    ((s = ha(n)), (s = n < 0 ? fr(i + s, 0) : dr(s, i - 1))),
                  Ut(e, ns(t, 3), s, !0)
                );
              }
              function qs(e) {
                return null != e && e.length ? fn(e, 1) : [];
              }
              function Vs(e) {
                return e && e.length ? e[0] : r;
              }
              var Hs = Fn(function (e) {
                  var t = Nt(e, pi);
                  return t.length && t[0] === e[0] ? In(t) : [];
                }),
                Bs = Fn(function (e) {
                  var t = Ks(e),
                    n = Nt(e, pi);
                  return (
                    t === Ks(n) ? (t = r) : n.pop(),
                    n.length && n[0] === e[0] ? In(n, ns(t, 2)) : []
                  );
                }),
                Fs = Fn(function (e) {
                  var t = Ks(e),
                    n = Nt(e, pi);
                  return (
                    (t = "function" == typeof t ? t : r) && n.pop(),
                    n.length && n[0] === e[0] ? In(n, r, t) : []
                  );
                });
              function Ks(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : r;
              }
              var Ws = Fn(Gs);
              function Gs(e, t) {
                return e && e.length && t && t.length ? qn(e, t) : e;
              }
              var Js = Zi(function (e, t) {
                var r = null == e ? 0 : e.length,
                  n = tn(e, t);
                return (
                  Vn(
                    e,
                    Nt(t, function (e) {
                      return fs(e, r) ? +e : e;
                    }).sort(bi),
                  ),
                  n
                );
              });
              function Ys(e) {
                return null == e ? e : mr.call(e);
              }
              var Zs = Fn(function (e) {
                  return si(fn(e, 1, Bo, !0));
                }),
                Qs = Fn(function (e) {
                  var t = Ks(e);
                  return Bo(t) && (t = r), si(fn(e, 1, Bo, !0), ns(t, 2));
                }),
                Xs = Fn(function (e) {
                  var t = Ks(e);
                  return (
                    (t = "function" == typeof t ? t : r),
                    si(fn(e, 1, Bo, !0), r, t)
                  );
                });
              function eo(e) {
                if (!e || !e.length) return [];
                var t = 0;
                return (
                  (e = Pt(e, function (e) {
                    if (Bo(e)) return (t = fr(e.length, t)), !0;
                  })),
                  Ft(t, function (t) {
                    return Nt(e, qt(t));
                  })
                );
              }
              function to(e, t) {
                if (!e || !e.length) return [];
                var n = eo(e);
                return null == t
                  ? n
                  : Nt(n, function (e) {
                      return bt(t, r, e);
                    });
              }
              var ro = Fn(function (e, t) {
                  return Bo(e) ? an(e, t) : [];
                }),
                no = Fn(function (e) {
                  return li(Pt(e, Bo));
                }),
                io = Fn(function (e) {
                  var t = Ks(e);
                  return Bo(t) && (t = r), li(Pt(e, Bo), ns(t, 2));
                }),
                so = Fn(function (e) {
                  var t = Ks(e);
                  return (
                    (t = "function" == typeof t ? t : r), li(Pt(e, Bo), r, t)
                  );
                }),
                oo = Fn(eo),
                ao = Fn(function (e) {
                  var t = e.length,
                    n = t > 1 ? e[t - 1] : r;
                  return (
                    (n = "function" == typeof n ? (e.pop(), n) : r), to(e, n)
                  );
                });
              function co(e) {
                var t = Dr(e);
                return (t.__chain__ = !0), t;
              }
              function uo(e, t) {
                return t(e);
              }
              var lo = Zi(function (e) {
                  var t = e.length,
                    n = t ? e[0] : 0,
                    i = this.__wrapped__,
                    s = function (t) {
                      return tn(t, e);
                    };
                  return !(t > 1 || this.__actions__.length) &&
                    i instanceof $r &&
                    fs(n)
                    ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                        func: uo,
                        args: [s],
                        thisArg: r,
                      }),
                      new Mr(i, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(r), e;
                      }))
                    : this.thru(s);
                }),
                ho = Pi(function (e, t, r) {
                  Re.call(e, r) ? ++e[r] : en(e, r, 1);
                }),
                po = Ci($s),
                fo = Ci(zs);
              function go(e, t) {
                return (qo(e) ? Ot : cn)(e, ns(t, 3));
              }
              function yo(e, t) {
                return (qo(e) ? St : un)(e, ns(t, 3));
              }
              var vo = Pi(function (e, t, r) {
                  Re.call(e, r) ? e[r].push(t) : en(e, r, [t]);
                }),
                mo = Fn(function (e, t, r) {
                  var n = -1,
                    i = "function" == typeof t,
                    s = Ho(e) ? re(e.length) : [];
                  return (
                    cn(e, function (e) {
                      s[++n] = i ? bt(t, e, r) : Pn(e, t, r);
                    }),
                    s
                  );
                }),
                wo = Pi(function (e, t, r) {
                  en(e, r, t);
                });
              function _o(e, t) {
                return (qo(e) ? Nt : Ln)(e, ns(t, 3));
              }
              var bo = Pi(
                  function (e, t, r) {
                    e[r ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  },
                ),
                Eo = Fn(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return (
                    r > 1 && ds(e, t[0], t[1])
                      ? (t = [])
                      : r > 2 && ds(t[0], t[1], t[2]) && (t = [t[0]]),
                    $n(e, fn(t, 1), [])
                  );
                }),
                Oo =
                  ct ||
                  function () {
                    return ut.Date.now();
                  };
              function So(e, t, n) {
                return (
                  (t = n ? r : t),
                  (t = e && null == t ? e.length : t),
                  Ki(e, a, r, r, r, r, t)
                );
              }
              function Io(e, t) {
                var i;
                if ("function" != typeof t) throw new Pe(n);
                return (
                  (e = ha(e)),
                  function () {
                    return (
                      --e > 0 && (i = t.apply(this, arguments)),
                      e <= 1 && (t = r),
                      i
                    );
                  }
                );
              }
              var Po = Fn(function (e, t, r) {
                  var n = 1;
                  if (r.length) {
                    var i = ir(r, rs(Po));
                    n |= o;
                  }
                  return Ki(e, n, t, r, i);
                }),
                jo = Fn(function (e, t, r) {
                  var n = 3;
                  if (r.length) {
                    var i = ir(r, rs(jo));
                    n |= o;
                  }
                  return Ki(t, n, e, r, i);
                });
              function xo(e, t, i) {
                var s,
                  o,
                  a,
                  c,
                  u,
                  l,
                  h = 0,
                  p = !1,
                  f = !1,
                  d = !0;
                if ("function" != typeof e) throw new Pe(n);
                function g(t) {
                  var n = s,
                    i = o;
                  return (s = o = r), (h = t), (c = e.apply(i, n));
                }
                function y(e) {
                  var n = e - l;
                  return l === r || n >= t || n < 0 || (f && e - h >= a);
                }
                function v() {
                  var e = Oo();
                  if (y(e)) return m(e);
                  u = Is(
                    v,
                    (function (e) {
                      var r = t - (e - l);
                      return f ? dr(r, a - (e - h)) : r;
                    })(e),
                  );
                }
                function m(e) {
                  return (u = r), d && s ? g(e) : ((s = o = r), c);
                }
                function w() {
                  var e = Oo(),
                    n = y(e);
                  if (((s = arguments), (o = this), (l = e), n)) {
                    if (u === r)
                      return (function (e) {
                        return (h = e), (u = Is(v, t)), p ? g(e) : c;
                      })(l);
                    if (f) return vi(u), (u = Is(v, t)), g(l);
                  }
                  return u === r && (u = Is(v, t)), c;
                }
                return (
                  (t = fa(t) || 0),
                  Zo(i) &&
                    ((p = !!i.leading),
                    (a = (f = "maxWait" in i) ? fr(fa(i.maxWait) || 0, t) : a),
                    (d = "trailing" in i ? !!i.trailing : d)),
                  (w.cancel = function () {
                    u !== r && vi(u), (h = 0), (s = l = o = u = r);
                  }),
                  (w.flush = function () {
                    return u === r ? c : m(Oo());
                  }),
                  w
                );
              }
              var No = Fn(function (e, t) {
                  return on(e, 1, t);
                }),
                To = Fn(function (e, t, r) {
                  return on(e, fa(t) || 0, r);
                });
              function Ao(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new Pe(n);
                var r = function () {
                  var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    s = r.cache;
                  if (s.has(i)) return s.get(i);
                  var o = e.apply(this, n);
                  return (r.cache = s.set(i, o) || s), o;
                };
                return (r.cache = new (Ao.Cache || Vr)()), r;
              }
              function Ro(e) {
                if ("function" != typeof e) throw new Pe(n);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              Ao.Cache = Vr;
              var Co = gi(function (e, t) {
                  var r = (t =
                    1 == t.length && qo(t[0])
                      ? Nt(t[0], Wt(ns()))
                      : Nt(fn(t, 1), Wt(ns()))).length;
                  return Fn(function (n) {
                    for (var i = -1, s = dr(n.length, r); ++i < s; )
                      n[i] = t[i].call(this, n[i]);
                    return bt(e, this, n);
                  });
                }),
                Lo = Fn(function (e, t) {
                  var n = ir(t, rs(Lo));
                  return Ki(e, o, r, t, n);
                }),
                Do = Fn(function (e, t) {
                  var n = ir(t, rs(Do));
                  return Ki(e, 64, r, t, n);
                }),
                Uo = Zi(function (e, t) {
                  return Ki(e, 256, r, r, r, t);
                });
              function ko(e, t) {
                return e === t || (e != e && t != t);
              }
              var Mo = qi(En),
                $o = qi(function (e, t) {
                  return e >= t;
                }),
                zo = jn(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? jn
                  : function (e) {
                      return (
                        Qo(e) && Re.call(e, "callee") && !Fe.call(e, "callee")
                      );
                    },
                qo = re.isArray,
                Vo = gt
                  ? Wt(gt)
                  : function (e) {
                      return Qo(e) && bn(e) == N;
                    };
              function Ho(e) {
                return null != e && Yo(e.length) && !Go(e);
              }
              function Bo(e) {
                return Qo(e) && Ho(e);
              }
              var Fo = Lt || fc,
                Ko = yt
                  ? Wt(yt)
                  : function (e) {
                      return Qo(e) && bn(e) == y;
                    };
              function Wo(e) {
                if (!Qo(e)) return !1;
                var t = bn(e);
                return (
                  t == v ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !ta(e))
                );
              }
              function Go(e) {
                if (!Zo(e)) return !1;
                var t = bn(e);
                return (
                  t == m ||
                  t == w ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function Jo(e) {
                return "number" == typeof e && e == ha(e);
              }
              function Yo(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= u;
              }
              function Zo(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function Qo(e) {
                return null != e && "object" == typeof e;
              }
              var Xo = vt
                ? Wt(vt)
                : function (e) {
                    return Qo(e) && us(e) == _;
                  };
              function ea(e) {
                return "number" == typeof e || (Qo(e) && bn(e) == b);
              }
              function ta(e) {
                if (!Qo(e) || bn(e) != E) return !1;
                var t = He(e);
                if (null === t) return !0;
                var r = Re.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof r && r instanceof r && Ae.call(r) == Ue
                );
              }
              var ra = mt
                  ? Wt(mt)
                  : function (e) {
                      return Qo(e) && bn(e) == S;
                    },
                na = wt
                  ? Wt(wt)
                  : function (e) {
                      return Qo(e) && us(e) == I;
                    };
              function ia(e) {
                return "string" == typeof e || (!qo(e) && Qo(e) && bn(e) == P);
              }
              function sa(e) {
                return "symbol" == typeof e || (Qo(e) && bn(e) == j);
              }
              var oa = _t
                  ? Wt(_t)
                  : function (e) {
                      return Qo(e) && Yo(e.length) && !!rt[bn(e)];
                    },
                aa = qi(Cn),
                ca = qi(function (e, t) {
                  return e <= t;
                });
              function ua(e) {
                if (!e) return [];
                if (Ho(e)) return ia(e) ? ar(e) : Si(e);
                if (Ye && e[Ye])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[Ye]());
                var t = us(e);
                return (t == _ ? rr : t == I ? sr : ka)(e);
              }
              function la(e) {
                return e
                  ? (e = fa(e)) === c || e === -c
                    ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function ha(e) {
                var t = la(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function pa(e) {
                return e ? rn(ha(e), 0, h) : 0;
              }
              function fa(e) {
                if ("number" == typeof e) return e;
                if (sa(e)) return l;
                if (Zo(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = Zo(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Kt(e);
                var r = pe.test(e);
                return r || de.test(e)
                  ? ot(e.slice(2), r ? 2 : 8)
                  : he.test(e)
                  ? l
                  : +e;
              }
              function da(e) {
                return Ii(e, Na(e));
              }
              function ga(e) {
                return null == e ? "" : ii(e);
              }
              var ya = ji(function (e, t) {
                  if (ms(t) || Ho(t)) Ii(t, xa(t), e);
                  else for (var r in t) Re.call(t, r) && Yr(e, r, t[r]);
                }),
                va = ji(function (e, t) {
                  Ii(t, Na(t), e);
                }),
                ma = ji(function (e, t, r, n) {
                  Ii(t, Na(t), e, n);
                }),
                wa = ji(function (e, t, r, n) {
                  Ii(t, xa(t), e, n);
                }),
                _a = Zi(tn),
                ba = Fn(function (e, t) {
                  e = Oe(e);
                  var n = -1,
                    i = t.length,
                    s = i > 2 ? t[2] : r;
                  for (s && ds(t[0], t[1], s) && (i = 1); ++n < i; )
                    for (
                      var o = t[n], a = Na(o), c = -1, u = a.length;
                      ++c < u;

                    ) {
                      var l = a[c],
                        h = e[l];
                      (h === r || (ko(h, Ne[l]) && !Re.call(e, l))) &&
                        (e[l] = o[l]);
                    }
                  return e;
                }),
                Ea = Fn(function (e) {
                  return e.push(r, Gi), bt(Aa, r, e);
                });
              function Oa(e, t, n) {
                var i = null == e ? r : wn(e, t);
                return i === r ? n : i;
              }
              function Sa(e, t) {
                return null != e && ls(e, t, Sn);
              }
              var Ia = Ui(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = De.call(t)),
                    (e[t] = r);
                }, Za(ec)),
                Pa = Ui(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = De.call(t)),
                    Re.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, ns),
                ja = Fn(Pn);
              function xa(e) {
                return Ho(e) ? Fr(e) : Rn(e);
              }
              function Na(e) {
                return Ho(e)
                  ? Fr(e, !0)
                  : (function (e) {
                      if (!Zo(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var r in Oe(e)) t.push(r);
                          return t;
                        })(e);
                      var t = ms(e),
                        r = [];
                      for (var n in e)
                        ("constructor" == n && (t || !Re.call(e, n))) ||
                          r.push(n);
                      return r;
                    })(e);
              }
              var Ta = ji(function (e, t, r) {
                  kn(e, t, r);
                }),
                Aa = ji(function (e, t, r, n) {
                  kn(e, t, r, n);
                }),
                Ra = Zi(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var n = !1;
                  (t = Nt(t, function (t) {
                    return (t = di(t, e)), n || (n = t.length > 1), t;
                  })),
                    Ii(e, Xi(e), r),
                    n && (r = nn(r, 7, Ji));
                  for (var i = t.length; i--; ) oi(r, t[i]);
                  return r;
                }),
                Ca = Zi(function (e, t) {
                  return null == e
                    ? {}
                    : (function (e, t) {
                        return zn(e, t, function (t, r) {
                          return Sa(e, r);
                        });
                      })(e, t);
                });
              function La(e, t) {
                if (null == e) return {};
                var r = Nt(Xi(e), function (e) {
                  return [e];
                });
                return (
                  (t = ns(t)),
                  zn(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var Da = Fi(xa),
                Ua = Fi(Na);
              function ka(e) {
                return null == e ? [] : Gt(e, xa(e));
              }
              var Ma = Ai(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? $a(t) : t);
              });
              function $a(e) {
                return Wa(ga(e).toLowerCase());
              }
              function za(e) {
                return (e = ga(e)) && e.replace(ye, Qt).replace(Je, "");
              }
              var qa = Ai(function (e, t, r) {
                  return e + (r ? "-" : "") + t.toLowerCase();
                }),
                Va = Ai(function (e, t, r) {
                  return e + (r ? " " : "") + t.toLowerCase();
                }),
                Ha = Ti("toLowerCase"),
                Ba = Ai(function (e, t, r) {
                  return e + (r ? "_" : "") + t.toLowerCase();
                }),
                Fa = Ai(function (e, t, r) {
                  return e + (r ? " " : "") + Wa(t);
                }),
                Ka = Ai(function (e, t, r) {
                  return e + (r ? " " : "") + t.toUpperCase();
                }),
                Wa = Ti("toUpperCase");
              function Ga(e, t, n) {
                return (
                  (e = ga(e)),
                  (t = n ? r : t) === r
                    ? (function (e) {
                        return Xe.test(e);
                      })(e)
                      ? (function (e) {
                          return e.match(Ze) || [];
                        })(e)
                      : (function (e) {
                          return e.match(oe) || [];
                        })(e)
                    : e.match(t) || []
                );
              }
              var Ja = Fn(function (e, t) {
                  try {
                    return bt(e, r, t);
                  } catch (e) {
                    return Wo(e) ? e : new _e(e);
                  }
                }),
                Ya = Zi(function (e, t) {
                  return (
                    Ot(t, function (t) {
                      (t = Cs(t)), en(e, t, Po(e[t], e));
                    }),
                    e
                  );
                });
              function Za(e) {
                return function () {
                  return e;
                };
              }
              var Qa = Li(),
                Xa = Li(!0);
              function ec(e) {
                return e;
              }
              function tc(e) {
                return An("function" == typeof e ? e : nn(e, 1));
              }
              var rc = Fn(function (e, t) {
                  return function (r) {
                    return Pn(r, e, t);
                  };
                }),
                nc = Fn(function (e, t) {
                  return function (r) {
                    return Pn(e, r, t);
                  };
                });
              function ic(e, t, r) {
                var n = xa(t),
                  i = mn(t, n);
                null == r &&
                  (!Zo(t) || (!i.length && n.length)) &&
                  ((r = t), (t = e), (e = this), (i = mn(t, xa(t))));
                var s = !(Zo(r) && "chain" in r && !r.chain),
                  o = Go(e);
                return (
                  Ot(i, function (r) {
                    var n = t[r];
                    (e[r] = n),
                      o &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var r = e(this.__wrapped__);
                            return (
                              (r.__actions__ = Si(this.__actions__)).push({
                                func: n,
                                args: arguments,
                                thisArg: e,
                              }),
                              (r.__chain__ = t),
                              r
                            );
                          }
                          return n.apply(e, Tt([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function sc() {}
              var oc = Mi(Nt),
                ac = Mi(It),
                cc = Mi(Ct);
              function uc(e) {
                return gs(e)
                  ? qt(Cs(e))
                  : (function (e) {
                      return function (t) {
                        return wn(t, e);
                      };
                    })(e);
              }
              var lc = zi(),
                hc = zi(!0);
              function pc() {
                return [];
              }
              function fc() {
                return !1;
              }
              var dc = ki(function (e, t) {
                  return e + t;
                }, 0),
                gc = Hi("ceil"),
                yc = ki(function (e, t) {
                  return e / t;
                }, 1),
                vc = Hi("floor"),
                mc = ki(function (e, t) {
                  return e * t;
                }, 1),
                wc = Hi("round"),
                _c = ki(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (Dr.after = function (e, t) {
                  if ("function" != typeof t) throw new Pe(n);
                  return (
                    (e = ha(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (Dr.ary = So),
                (Dr.assign = ya),
                (Dr.assignIn = va),
                (Dr.assignInWith = ma),
                (Dr.assignWith = wa),
                (Dr.at = _a),
                (Dr.before = Io),
                (Dr.bind = Po),
                (Dr.bindAll = Ya),
                (Dr.bindKey = jo),
                (Dr.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return qo(e) ? e : [e];
                }),
                (Dr.chain = co),
                (Dr.chunk = function (e, t, n) {
                  t = (n ? ds(e, t, n) : t === r) ? 1 : fr(ha(t), 0);
                  var i = null == e ? 0 : e.length;
                  if (!i || t < 1) return [];
                  for (var s = 0, o = 0, a = re(ht(i / t)); s < i; )
                    a[o++] = Qn(e, s, (s += t));
                  return a;
                }),
                (Dr.compact = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = 0, i = [];
                    ++t < r;

                  ) {
                    var s = e[t];
                    s && (i[n++] = s);
                  }
                  return i;
                }),
                (Dr.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = re(e - 1), r = arguments[0], n = e; n--; )
                    t[n - 1] = arguments[n];
                  return Tt(qo(r) ? Si(r) : [r], fn(t, 1));
                }),
                (Dr.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = ns();
                  return (
                    (e = t
                      ? Nt(e, function (e) {
                          if ("function" != typeof e[1]) throw new Pe(n);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    Fn(function (r) {
                      for (var n = -1; ++n < t; ) {
                        var i = e[n];
                        if (bt(i[0], this, r)) return bt(i[1], this, r);
                      }
                    })
                  );
                }),
                (Dr.conforms = function (e) {
                  return (function (e) {
                    var t = xa(e);
                    return function (r) {
                      return sn(r, e, t);
                    };
                  })(nn(e, 1));
                }),
                (Dr.constant = Za),
                (Dr.countBy = ho),
                (Dr.create = function (e, t) {
                  var r = Ur(e);
                  return null == t ? r : Xr(r, t);
                }),
                (Dr.curry = function e(t, n, i) {
                  var s = Ki(t, 8, r, r, r, r, r, (n = i ? r : n));
                  return (s.placeholder = e.placeholder), s;
                }),
                (Dr.curryRight = function e(t, n, i) {
                  var s = Ki(t, 16, r, r, r, r, r, (n = i ? r : n));
                  return (s.placeholder = e.placeholder), s;
                }),
                (Dr.debounce = xo),
                (Dr.defaults = ba),
                (Dr.defaultsDeep = Ea),
                (Dr.defer = No),
                (Dr.delay = To),
                (Dr.difference = Us),
                (Dr.differenceBy = ks),
                (Dr.differenceWith = Ms),
                (Dr.drop = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Qn(e, (t = n || t === r ? 1 : ha(t)) < 0 ? 0 : t, i)
                    : [];
                }),
                (Dr.dropRight = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Qn(
                        e,
                        0,
                        (t = i - (t = n || t === r ? 1 : ha(t))) < 0 ? 0 : t,
                      )
                    : [];
                }),
                (Dr.dropRightWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !0, !0) : [];
                }),
                (Dr.dropWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !0) : [];
                }),
                (Dr.fill = function (e, t, n, i) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (n &&
                        "number" != typeof n &&
                        ds(e, t, n) &&
                        ((n = 0), (i = s)),
                      (function (e, t, n, i) {
                        var s = e.length;
                        for (
                          (n = ha(n)) < 0 && (n = -n > s ? 0 : s + n),
                            (i = i === r || i > s ? s : ha(i)) < 0 && (i += s),
                            i = n > i ? 0 : pa(i);
                          n < i;

                        )
                          e[n++] = t;
                        return e;
                      })(e, t, n, i))
                    : [];
                }),
                (Dr.filter = function (e, t) {
                  return (qo(e) ? Pt : pn)(e, ns(t, 3));
                }),
                (Dr.flatMap = function (e, t) {
                  return fn(_o(e, t), 1);
                }),
                (Dr.flatMapDeep = function (e, t) {
                  return fn(_o(e, t), c);
                }),
                (Dr.flatMapDepth = function (e, t, n) {
                  return (n = n === r ? 1 : ha(n)), fn(_o(e, t), n);
                }),
                (Dr.flatten = qs),
                (Dr.flattenDeep = function (e) {
                  return null != e && e.length ? fn(e, c) : [];
                }),
                (Dr.flattenDepth = function (e, t) {
                  return null != e && e.length
                    ? fn(e, (t = t === r ? 1 : ha(t)))
                    : [];
                }),
                (Dr.flip = function (e) {
                  return Ki(e, 512);
                }),
                (Dr.flow = Qa),
                (Dr.flowRight = Xa),
                (Dr.fromPairs = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, n = {};
                    ++t < r;

                  ) {
                    var i = e[t];
                    n[i[0]] = i[1];
                  }
                  return n;
                }),
                (Dr.functions = function (e) {
                  return null == e ? [] : mn(e, xa(e));
                }),
                (Dr.functionsIn = function (e) {
                  return null == e ? [] : mn(e, Na(e));
                }),
                (Dr.groupBy = vo),
                (Dr.initial = function (e) {
                  return null != e && e.length ? Qn(e, 0, -1) : [];
                }),
                (Dr.intersection = Hs),
                (Dr.intersectionBy = Bs),
                (Dr.intersectionWith = Fs),
                (Dr.invert = Ia),
                (Dr.invertBy = Pa),
                (Dr.invokeMap = mo),
                (Dr.iteratee = tc),
                (Dr.keyBy = wo),
                (Dr.keys = xa),
                (Dr.keysIn = Na),
                (Dr.map = _o),
                (Dr.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = ns(t, 3)),
                    yn(e, function (e, n, i) {
                      en(r, t(e, n, i), e);
                    }),
                    r
                  );
                }),
                (Dr.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = ns(t, 3)),
                    yn(e, function (e, n, i) {
                      en(r, n, t(e, n, i));
                    }),
                    r
                  );
                }),
                (Dr.matches = function (e) {
                  return Dn(nn(e, 1));
                }),
                (Dr.matchesProperty = function (e, t) {
                  return Un(e, nn(t, 1));
                }),
                (Dr.memoize = Ao),
                (Dr.merge = Ta),
                (Dr.mergeWith = Aa),
                (Dr.method = rc),
                (Dr.methodOf = nc),
                (Dr.mixin = ic),
                (Dr.negate = Ro),
                (Dr.nthArg = function (e) {
                  return (
                    (e = ha(e)),
                    Fn(function (t) {
                      return Mn(t, e);
                    })
                  );
                }),
                (Dr.omit = Ra),
                (Dr.omitBy = function (e, t) {
                  return La(e, Ro(ns(t)));
                }),
                (Dr.once = function (e) {
                  return Io(2, e);
                }),
                (Dr.orderBy = function (e, t, n, i) {
                  return null == e
                    ? []
                    : (qo(t) || (t = null == t ? [] : [t]),
                      qo((n = i ? r : n)) || (n = null == n ? [] : [n]),
                      $n(e, t, n));
                }),
                (Dr.over = oc),
                (Dr.overArgs = Co),
                (Dr.overEvery = ac),
                (Dr.overSome = cc),
                (Dr.partial = Lo),
                (Dr.partialRight = Do),
                (Dr.partition = bo),
                (Dr.pick = Ca),
                (Dr.pickBy = La),
                (Dr.property = uc),
                (Dr.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? r : wn(e, t);
                  };
                }),
                (Dr.pull = Ws),
                (Dr.pullAll = Gs),
                (Dr.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length
                    ? qn(e, t, ns(r, 2))
                    : e;
                }),
                (Dr.pullAllWith = function (e, t, n) {
                  return e && e.length && t && t.length ? qn(e, t, r, n) : e;
                }),
                (Dr.pullAt = Js),
                (Dr.range = lc),
                (Dr.rangeRight = hc),
                (Dr.rearg = Uo),
                (Dr.reject = function (e, t) {
                  return (qo(e) ? Pt : pn)(e, Ro(ns(t, 3)));
                }),
                (Dr.remove = function (e, t) {
                  var r = [];
                  if (!e || !e.length) return r;
                  var n = -1,
                    i = [],
                    s = e.length;
                  for (t = ns(t, 3); ++n < s; ) {
                    var o = e[n];
                    t(o, n, e) && (r.push(o), i.push(n));
                  }
                  return Vn(e, i), r;
                }),
                (Dr.rest = function (e, t) {
                  if ("function" != typeof e) throw new Pe(n);
                  return Fn(e, (t = t === r ? t : ha(t)));
                }),
                (Dr.reverse = Ys),
                (Dr.sampleSize = function (e, t, n) {
                  return (
                    (t = (n ? ds(e, t, n) : t === r) ? 1 : ha(t)),
                    (qo(e) ? Wr : Wn)(e, t)
                  );
                }),
                (Dr.set = function (e, t, r) {
                  return null == e ? e : Gn(e, t, r);
                }),
                (Dr.setWith = function (e, t, n, i) {
                  return (
                    (i = "function" == typeof i ? i : r),
                    null == e ? e : Gn(e, t, n, i)
                  );
                }),
                (Dr.shuffle = function (e) {
                  return (qo(e) ? Gr : Zn)(e);
                }),
                (Dr.slice = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? (n && "number" != typeof n && ds(e, t, n)
                        ? ((t = 0), (n = i))
                        : ((t = null == t ? 0 : ha(t)),
                          (n = n === r ? i : ha(n))),
                      Qn(e, t, n))
                    : [];
                }),
                (Dr.sortBy = Eo),
                (Dr.sortedUniq = function (e) {
                  return e && e.length ? ri(e) : [];
                }),
                (Dr.sortedUniqBy = function (e, t) {
                  return e && e.length ? ri(e, ns(t, 2)) : [];
                }),
                (Dr.split = function (e, t, n) {
                  return (
                    n && "number" != typeof n && ds(e, t, n) && (t = n = r),
                    (n = n === r ? h : n >>> 0)
                      ? (e = ga(e)) &&
                        ("string" == typeof t || (null != t && !ra(t))) &&
                        !(t = ii(t)) &&
                        tr(e)
                        ? yi(ar(e), 0, n)
                        : e.split(t, n)
                      : []
                  );
                }),
                (Dr.spread = function (e, t) {
                  if ("function" != typeof e) throw new Pe(n);
                  return (
                    (t = null == t ? 0 : fr(ha(t), 0)),
                    Fn(function (r) {
                      var n = r[t],
                        i = yi(r, 0, t);
                      return n && Tt(i, n), bt(e, this, i);
                    })
                  );
                }),
                (Dr.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? Qn(e, 1, t) : [];
                }),
                (Dr.take = function (e, t, n) {
                  return e && e.length
                    ? Qn(e, 0, (t = n || t === r ? 1 : ha(t)) < 0 ? 0 : t)
                    : [];
                }),
                (Dr.takeRight = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  return i
                    ? Qn(
                        e,
                        (t = i - (t = n || t === r ? 1 : ha(t))) < 0 ? 0 : t,
                        i,
                      )
                    : [];
                }),
                (Dr.takeRightWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3), !1, !0) : [];
                }),
                (Dr.takeWhile = function (e, t) {
                  return e && e.length ? ci(e, ns(t, 3)) : [];
                }),
                (Dr.tap = function (e, t) {
                  return t(e), e;
                }),
                (Dr.throttle = function (e, t, r) {
                  var i = !0,
                    s = !0;
                  if ("function" != typeof e) throw new Pe(n);
                  return (
                    Zo(r) &&
                      ((i = "leading" in r ? !!r.leading : i),
                      (s = "trailing" in r ? !!r.trailing : s)),
                    xo(e, t, { leading: i, maxWait: t, trailing: s })
                  );
                }),
                (Dr.thru = uo),
                (Dr.toArray = ua),
                (Dr.toPairs = Da),
                (Dr.toPairsIn = Ua),
                (Dr.toPath = function (e) {
                  return qo(e) ? Nt(e, Cs) : sa(e) ? [e] : Si(Rs(ga(e)));
                }),
                (Dr.toPlainObject = da),
                (Dr.transform = function (e, t, r) {
                  var n = qo(e),
                    i = n || Fo(e) || oa(e);
                  if (((t = ns(t, 4)), null == r)) {
                    var s = e && e.constructor;
                    r = i
                      ? n
                        ? new s()
                        : []
                      : Zo(e) && Go(s)
                      ? Ur(He(e))
                      : {};
                  }
                  return (
                    (i ? Ot : yn)(e, function (e, n, i) {
                      return t(r, e, n, i);
                    }),
                    r
                  );
                }),
                (Dr.unary = function (e) {
                  return So(e, 1);
                }),
                (Dr.union = Zs),
                (Dr.unionBy = Qs),
                (Dr.unionWith = Xs),
                (Dr.uniq = function (e) {
                  return e && e.length ? si(e) : [];
                }),
                (Dr.uniqBy = function (e, t) {
                  return e && e.length ? si(e, ns(t, 2)) : [];
                }),
                (Dr.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : r),
                    e && e.length ? si(e, r, t) : []
                  );
                }),
                (Dr.unset = function (e, t) {
                  return null == e || oi(e, t);
                }),
                (Dr.unzip = eo),
                (Dr.unzipWith = to),
                (Dr.update = function (e, t, r) {
                  return null == e ? e : ai(e, t, fi(r));
                }),
                (Dr.updateWith = function (e, t, n, i) {
                  return (
                    (i = "function" == typeof i ? i : r),
                    null == e ? e : ai(e, t, fi(n), i)
                  );
                }),
                (Dr.values = ka),
                (Dr.valuesIn = function (e) {
                  return null == e ? [] : Gt(e, Na(e));
                }),
                (Dr.without = ro),
                (Dr.words = Ga),
                (Dr.wrap = function (e, t) {
                  return Lo(fi(t), e);
                }),
                (Dr.xor = no),
                (Dr.xorBy = io),
                (Dr.xorWith = so),
                (Dr.zip = oo),
                (Dr.zipObject = function (e, t) {
                  return hi(e || [], t || [], Yr);
                }),
                (Dr.zipObjectDeep = function (e, t) {
                  return hi(e || [], t || [], Gn);
                }),
                (Dr.zipWith = ao),
                (Dr.entries = Da),
                (Dr.entriesIn = Ua),
                (Dr.extend = va),
                (Dr.extendWith = ma),
                ic(Dr, Dr),
                (Dr.add = dc),
                (Dr.attempt = Ja),
                (Dr.camelCase = Ma),
                (Dr.capitalize = $a),
                (Dr.ceil = gc),
                (Dr.clamp = function (e, t, n) {
                  return (
                    n === r && ((n = t), (t = r)),
                    n !== r && (n = (n = fa(n)) == n ? n : 0),
                    t !== r && (t = (t = fa(t)) == t ? t : 0),
                    rn(fa(e), t, n)
                  );
                }),
                (Dr.clone = function (e) {
                  return nn(e, 4);
                }),
                (Dr.cloneDeep = function (e) {
                  return nn(e, 5);
                }),
                (Dr.cloneDeepWith = function (e, t) {
                  return nn(e, 5, (t = "function" == typeof t ? t : r));
                }),
                (Dr.cloneWith = function (e, t) {
                  return nn(e, 4, (t = "function" == typeof t ? t : r));
                }),
                (Dr.conformsTo = function (e, t) {
                  return null == t || sn(e, t, xa(t));
                }),
                (Dr.deburr = za),
                (Dr.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (Dr.divide = yc),
                (Dr.endsWith = function (e, t, n) {
                  (e = ga(e)), (t = ii(t));
                  var i = e.length,
                    s = (n = n === r ? i : rn(ha(n), 0, i));
                  return (n -= t.length) >= 0 && e.slice(n, s) == t;
                }),
                (Dr.eq = ko),
                (Dr.escape = function (e) {
                  return (e = ga(e)) && K.test(e) ? e.replace(B, Xt) : e;
                }),
                (Dr.escapeRegExp = function (e) {
                  return (e = ga(e)) && ee.test(e) ? e.replace(X, "\\$&") : e;
                }),
                (Dr.every = function (e, t, n) {
                  var i = qo(e) ? It : ln;
                  return n && ds(e, t, n) && (t = r), i(e, ns(t, 3));
                }),
                (Dr.find = po),
                (Dr.findIndex = $s),
                (Dr.findKey = function (e, t) {
                  return Dt(e, ns(t, 3), yn);
                }),
                (Dr.findLast = fo),
                (Dr.findLastIndex = zs),
                (Dr.findLastKey = function (e, t) {
                  return Dt(e, ns(t, 3), vn);
                }),
                (Dr.floor = vc),
                (Dr.forEach = go),
                (Dr.forEachRight = yo),
                (Dr.forIn = function (e, t) {
                  return null == e ? e : dn(e, ns(t, 3), Na);
                }),
                (Dr.forInRight = function (e, t) {
                  return null == e ? e : gn(e, ns(t, 3), Na);
                }),
                (Dr.forOwn = function (e, t) {
                  return e && yn(e, ns(t, 3));
                }),
                (Dr.forOwnRight = function (e, t) {
                  return e && vn(e, ns(t, 3));
                }),
                (Dr.get = Oa),
                (Dr.gt = Mo),
                (Dr.gte = $o),
                (Dr.has = function (e, t) {
                  return null != e && ls(e, t, On);
                }),
                (Dr.hasIn = Sa),
                (Dr.head = Vs),
                (Dr.identity = ec),
                (Dr.includes = function (e, t, r, n) {
                  (e = Ho(e) ? e : ka(e)), (r = r && !n ? ha(r) : 0);
                  var i = e.length;
                  return (
                    r < 0 && (r = fr(i + r, 0)),
                    ia(e)
                      ? r <= i && e.indexOf(t, r) > -1
                      : !!i && kt(e, t, r) > -1
                  );
                }),
                (Dr.indexOf = function (e, t, r) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var i = null == r ? 0 : ha(r);
                  return i < 0 && (i = fr(n + i, 0)), kt(e, t, i);
                }),
                (Dr.inRange = function (e, t, n) {
                  return (
                    (t = la(t)),
                    n === r ? ((n = t), (t = 0)) : (n = la(n)),
                    (function (e, t, r) {
                      return e >= dr(t, r) && e < fr(t, r);
                    })((e = fa(e)), t, n)
                  );
                }),
                (Dr.invoke = ja),
                (Dr.isArguments = zo),
                (Dr.isArray = qo),
                (Dr.isArrayBuffer = Vo),
                (Dr.isArrayLike = Ho),
                (Dr.isArrayLikeObject = Bo),
                (Dr.isBoolean = function (e) {
                  return !0 === e || !1 === e || (Qo(e) && bn(e) == g);
                }),
                (Dr.isBuffer = Fo),
                (Dr.isDate = Ko),
                (Dr.isElement = function (e) {
                  return Qo(e) && 1 === e.nodeType && !ta(e);
                }),
                (Dr.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    Ho(e) &&
                    (qo(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Fo(e) ||
                      oa(e) ||
                      zo(e))
                  )
                    return !e.length;
                  var t = us(e);
                  if (t == _ || t == I) return !e.size;
                  if (ms(e)) return !Rn(e).length;
                  for (var r in e) if (Re.call(e, r)) return !1;
                  return !0;
                }),
                (Dr.isEqual = function (e, t) {
                  return xn(e, t);
                }),
                (Dr.isEqualWith = function (e, t, n) {
                  var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                  return i === r ? xn(e, t, r, n) : !!i;
                }),
                (Dr.isError = Wo),
                (Dr.isFinite = function (e) {
                  return "number" == typeof e && Vt(e);
                }),
                (Dr.isFunction = Go),
                (Dr.isInteger = Jo),
                (Dr.isLength = Yo),
                (Dr.isMap = Xo),
                (Dr.isMatch = function (e, t) {
                  return e === t || Nn(e, t, ss(t));
                }),
                (Dr.isMatchWith = function (e, t, n) {
                  return (
                    (n = "function" == typeof n ? n : r), Nn(e, t, ss(t), n)
                  );
                }),
                (Dr.isNaN = function (e) {
                  return ea(e) && e != +e;
                }),
                (Dr.isNative = function (e) {
                  if (vs(e))
                    throw new _e(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                    );
                  return Tn(e);
                }),
                (Dr.isNil = function (e) {
                  return null == e;
                }),
                (Dr.isNull = function (e) {
                  return null === e;
                }),
                (Dr.isNumber = ea),
                (Dr.isObject = Zo),
                (Dr.isObjectLike = Qo),
                (Dr.isPlainObject = ta),
                (Dr.isRegExp = ra),
                (Dr.isSafeInteger = function (e) {
                  return Jo(e) && e >= -u && e <= u;
                }),
                (Dr.isSet = na),
                (Dr.isString = ia),
                (Dr.isSymbol = sa),
                (Dr.isTypedArray = oa),
                (Dr.isUndefined = function (e) {
                  return e === r;
                }),
                (Dr.isWeakMap = function (e) {
                  return Qo(e) && us(e) == x;
                }),
                (Dr.isWeakSet = function (e) {
                  return Qo(e) && "[object WeakSet]" == bn(e);
                }),
                (Dr.join = function (e, t) {
                  return null == e ? "" : hr.call(e, t);
                }),
                (Dr.kebabCase = qa),
                (Dr.last = Ks),
                (Dr.lastIndexOf = function (e, t, n) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var s = i;
                  return (
                    n !== r &&
                      (s = (s = ha(n)) < 0 ? fr(i + s, 0) : dr(s, i - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var n = r + 1; n--; ) if (e[n] === t) return n;
                          return n;
                        })(e, t, s)
                      : Ut(e, $t, s, !0)
                  );
                }),
                (Dr.lowerCase = Va),
                (Dr.lowerFirst = Ha),
                (Dr.lt = aa),
                (Dr.lte = ca),
                (Dr.max = function (e) {
                  return e && e.length ? hn(e, ec, En) : r;
                }),
                (Dr.maxBy = function (e, t) {
                  return e && e.length ? hn(e, ns(t, 2), En) : r;
                }),
                (Dr.mean = function (e) {
                  return zt(e, ec);
                }),
                (Dr.meanBy = function (e, t) {
                  return zt(e, ns(t, 2));
                }),
                (Dr.min = function (e) {
                  return e && e.length ? hn(e, ec, Cn) : r;
                }),
                (Dr.minBy = function (e, t) {
                  return e && e.length ? hn(e, ns(t, 2), Cn) : r;
                }),
                (Dr.stubArray = pc),
                (Dr.stubFalse = fc),
                (Dr.stubObject = function () {
                  return {};
                }),
                (Dr.stubString = function () {
                  return "";
                }),
                (Dr.stubTrue = function () {
                  return !0;
                }),
                (Dr.multiply = mc),
                (Dr.nth = function (e, t) {
                  return e && e.length ? Mn(e, ha(t)) : r;
                }),
                (Dr.noConflict = function () {
                  return ut._ === this && (ut._ = ke), this;
                }),
                (Dr.noop = sc),
                (Dr.now = Oo),
                (Dr.pad = function (e, t, r) {
                  e = ga(e);
                  var n = (t = ha(t)) ? or(e) : 0;
                  if (!t || n >= t) return e;
                  var i = (t - n) / 2;
                  return $i(ft(i), r) + e + $i(ht(i), r);
                }),
                (Dr.padEnd = function (e, t, r) {
                  e = ga(e);
                  var n = (t = ha(t)) ? or(e) : 0;
                  return t && n < t ? e + $i(t - n, r) : e;
                }),
                (Dr.padStart = function (e, t, r) {
                  e = ga(e);
                  var n = (t = ha(t)) ? or(e) : 0;
                  return t && n < t ? $i(t - n, r) + e : e;
                }),
                (Dr.parseInt = function (e, t, r) {
                  return (
                    r || null == t ? (t = 0) : t && (t = +t),
                    yr(ga(e).replace(te, ""), t || 0)
                  );
                }),
                (Dr.random = function (e, t, n) {
                  if (
                    (n && "boolean" != typeof n && ds(e, t, n) && (t = n = r),
                    n === r &&
                      ("boolean" == typeof t
                        ? ((n = t), (t = r))
                        : "boolean" == typeof e && ((n = e), (e = r))),
                    e === r && t === r
                      ? ((e = 0), (t = 1))
                      : ((e = la(e)),
                        t === r ? ((t = e), (e = 0)) : (t = la(t))),
                    e > t)
                  ) {
                    var i = e;
                    (e = t), (t = i);
                  }
                  if (n || e % 1 || t % 1) {
                    var s = vr();
                    return dr(
                      e + s * (t - e + st("1e-" + ((s + "").length - 1))),
                      t,
                    );
                  }
                  return Hn(e, t);
                }),
                (Dr.reduce = function (e, t, r) {
                  var n = qo(e) ? At : Ht,
                    i = arguments.length < 3;
                  return n(e, ns(t, 4), r, i, cn);
                }),
                (Dr.reduceRight = function (e, t, r) {
                  var n = qo(e) ? Rt : Ht,
                    i = arguments.length < 3;
                  return n(e, ns(t, 4), r, i, un);
                }),
                (Dr.repeat = function (e, t, n) {
                  return (
                    (t = (n ? ds(e, t, n) : t === r) ? 1 : ha(t)), Bn(ga(e), t)
                  );
                }),
                (Dr.replace = function () {
                  var e = arguments,
                    t = ga(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (Dr.result = function (e, t, n) {
                  var i = -1,
                    s = (t = di(t, e)).length;
                  for (s || ((s = 1), (e = r)); ++i < s; ) {
                    var o = null == e ? r : e[Cs(t[i])];
                    o === r && ((i = s), (o = n)), (e = Go(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (Dr.round = wc),
                (Dr.runInContext = e),
                (Dr.sample = function (e) {
                  return (qo(e) ? Kr : Kn)(e);
                }),
                (Dr.size = function (e) {
                  if (null == e) return 0;
                  if (Ho(e)) return ia(e) ? or(e) : e.length;
                  var t = us(e);
                  return t == _ || t == I ? e.size : Rn(e).length;
                }),
                (Dr.snakeCase = Ba),
                (Dr.some = function (e, t, n) {
                  var i = qo(e) ? Ct : Xn;
                  return n && ds(e, t, n) && (t = r), i(e, ns(t, 3));
                }),
                (Dr.sortedIndex = function (e, t) {
                  return ei(e, t);
                }),
                (Dr.sortedIndexBy = function (e, t, r) {
                  return ti(e, t, ns(r, 2));
                }),
                (Dr.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var n = ei(e, t);
                    if (n < r && ko(e[n], t)) return n;
                  }
                  return -1;
                }),
                (Dr.sortedLastIndex = function (e, t) {
                  return ei(e, t, !0);
                }),
                (Dr.sortedLastIndexBy = function (e, t, r) {
                  return ti(e, t, ns(r, 2), !0);
                }),
                (Dr.sortedLastIndexOf = function (e, t) {
                  if (null != e && e.length) {
                    var r = ei(e, t, !0) - 1;
                    if (ko(e[r], t)) return r;
                  }
                  return -1;
                }),
                (Dr.startCase = Fa),
                (Dr.startsWith = function (e, t, r) {
                  return (
                    (e = ga(e)),
                    (r = null == r ? 0 : rn(ha(r), 0, e.length)),
                    (t = ii(t)),
                    e.slice(r, r + t.length) == t
                  );
                }),
                (Dr.subtract = _c),
                (Dr.sum = function (e) {
                  return e && e.length ? Bt(e, ec) : 0;
                }),
                (Dr.sumBy = function (e, t) {
                  return e && e.length ? Bt(e, ns(t, 2)) : 0;
                }),
                (Dr.template = function (e, t, n) {
                  var i = Dr.templateSettings;
                  n && ds(e, t, n) && (t = r),
                    (e = ga(e)),
                    (t = ma({}, t, i, Wi));
                  var s,
                    o,
                    a = ma({}, t.imports, i.imports, Wi),
                    c = xa(a),
                    u = Gt(a, c),
                    l = 0,
                    h = t.interpolate || ve,
                    p = "__p += '",
                    f = Se(
                      (t.escape || ve).source +
                        "|" +
                        h.source +
                        "|" +
                        (h === J ? ue : ve).source +
                        "|" +
                        (t.evaluate || ve).source +
                        "|$",
                      "g",
                    ),
                    d =
                      "//# sourceURL=" +
                      (Re.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++tt + "]") +
                      "\n";
                  e.replace(f, function (t, r, n, i, a, c) {
                    return (
                      n || (n = i),
                      (p += e.slice(l, c).replace(me, er)),
                      r && ((s = !0), (p += "' +\n__e(" + r + ") +\n'")),
                      a && ((o = !0), (p += "';\n" + a + ";\n__p += '")),
                      n &&
                        (p +=
                          "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                      (l = c + t.length),
                      t
                    );
                  }),
                    (p += "';\n");
                  var g = Re.call(t, "variable") && t.variable;
                  if (g) {
                    if (ae.test(g))
                      throw new _e(
                        "Invalid `variable` option passed into `_.template`",
                      );
                  } else p = "with (obj) {\n" + p + "\n}\n";
                  (p = (o ? p.replace(z, "") : p)
                    .replace(q, "$1")
                    .replace(V, "$1;")),
                    (p =
                      "function(" +
                      (g || "obj") +
                      ") {\n" +
                      (g ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (s ? ", __e = _.escape" : "") +
                      (o
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      p +
                      "return __p\n}");
                  var y = Ja(function () {
                    return be(c, d + "return " + p).apply(r, u);
                  });
                  if (((y.source = p), Wo(y))) throw y;
                  return y;
                }),
                (Dr.times = function (e, t) {
                  if ((e = ha(e)) < 1 || e > u) return [];
                  var r = h,
                    n = dr(e, h);
                  (t = ns(t)), (e -= h);
                  for (var i = Ft(n, t); ++r < e; ) t(r);
                  return i;
                }),
                (Dr.toFinite = la),
                (Dr.toInteger = ha),
                (Dr.toLength = pa),
                (Dr.toLower = function (e) {
                  return ga(e).toLowerCase();
                }),
                (Dr.toNumber = fa),
                (Dr.toSafeInteger = function (e) {
                  return e ? rn(ha(e), -u, u) : 0 === e ? e : 0;
                }),
                (Dr.toString = ga),
                (Dr.toUpper = function (e) {
                  return ga(e).toUpperCase();
                }),
                (Dr.trim = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r)) return Kt(e);
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e),
                    s = ar(t);
                  return yi(i, Yt(i, s), Zt(i, s) + 1).join("");
                }),
                (Dr.trimEnd = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r))
                    return e.slice(0, cr(e) + 1);
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e);
                  return yi(i, 0, Zt(i, ar(t)) + 1).join("");
                }),
                (Dr.trimStart = function (e, t, n) {
                  if ((e = ga(e)) && (n || t === r)) return e.replace(te, "");
                  if (!e || !(t = ii(t))) return e;
                  var i = ar(e);
                  return yi(i, Yt(i, ar(t))).join("");
                }),
                (Dr.truncate = function (e, t) {
                  var n = 30,
                    i = "...";
                  if (Zo(t)) {
                    var s = "separator" in t ? t.separator : s;
                    (n = "length" in t ? ha(t.length) : n),
                      (i = "omission" in t ? ii(t.omission) : i);
                  }
                  var o = (e = ga(e)).length;
                  if (tr(e)) {
                    var a = ar(e);
                    o = a.length;
                  }
                  if (n >= o) return e;
                  var c = n - or(i);
                  if (c < 1) return i;
                  var u = a ? yi(a, 0, c).join("") : e.slice(0, c);
                  if (s === r) return u + i;
                  if ((a && (c += u.length - c), ra(s))) {
                    if (e.slice(c).search(s)) {
                      var l,
                        h = u;
                      for (
                        s.global || (s = Se(s.source, ga(le.exec(s)) + "g")),
                          s.lastIndex = 0;
                        (l = s.exec(h));

                      )
                        var p = l.index;
                      u = u.slice(0, p === r ? c : p);
                    }
                  } else if (e.indexOf(ii(s), c) != c) {
                    var f = u.lastIndexOf(s);
                    f > -1 && (u = u.slice(0, f));
                  }
                  return u + i;
                }),
                (Dr.unescape = function (e) {
                  return (e = ga(e)) && F.test(e) ? e.replace(H, ur) : e;
                }),
                (Dr.uniqueId = function (e) {
                  var t = ++Ce;
                  return ga(e) + t;
                }),
                (Dr.upperCase = Ka),
                (Dr.upperFirst = Wa),
                (Dr.each = go),
                (Dr.eachRight = yo),
                (Dr.first = Vs),
                ic(
                  Dr,
                  (function () {
                    var e = {};
                    return (
                      yn(Dr, function (t, r) {
                        Re.call(Dr.prototype, r) || (e[r] = t);
                      }),
                      e
                    );
                  })(),
                  { chain: !1 },
                ),
                (Dr.VERSION = "4.17.21"),
                Ot(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    Dr[e].placeholder = Dr;
                  },
                ),
                Ot(["drop", "take"], function (e, t) {
                  ($r.prototype[e] = function (n) {
                    n = n === r ? 1 : fr(ha(n), 0);
                    var i =
                      this.__filtered__ && !t ? new $r(this) : this.clone();
                    return (
                      i.__filtered__
                        ? (i.__takeCount__ = dr(n, i.__takeCount__))
                        : i.__views__.push({
                            size: dr(n, h),
                            type: e + (i.__dir__ < 0 ? "Right" : ""),
                          }),
                      i
                    );
                  }),
                    ($r.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                Ot(["filter", "map", "takeWhile"], function (e, t) {
                  var r = t + 1,
                    n = 1 == r || 3 == r;
                  $r.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: ns(e, 3), type: r }),
                      (t.__filtered__ = t.__filtered__ || n),
                      t
                    );
                  };
                }),
                Ot(["head", "last"], function (e, t) {
                  var r = "take" + (t ? "Right" : "");
                  $r.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                Ot(["initial", "tail"], function (e, t) {
                  var r = "drop" + (t ? "" : "Right");
                  $r.prototype[e] = function () {
                    return this.__filtered__ ? new $r(this) : this[r](1);
                  };
                }),
                ($r.prototype.compact = function () {
                  return this.filter(ec);
                }),
                ($r.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                ($r.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                ($r.prototype.invokeMap = Fn(function (e, t) {
                  return "function" == typeof e
                    ? new $r(this)
                    : this.map(function (r) {
                        return Pn(r, e, t);
                      });
                })),
                ($r.prototype.reject = function (e) {
                  return this.filter(Ro(ns(e)));
                }),
                ($r.prototype.slice = function (e, t) {
                  e = ha(e);
                  var n = this;
                  return n.__filtered__ && (e > 0 || t < 0)
                    ? new $r(n)
                    : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                      t !== r &&
                        (n = (t = ha(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                      n);
                }),
                ($r.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                ($r.prototype.toArray = function () {
                  return this.take(h);
                }),
                yn($r.prototype, function (e, t) {
                  var n = /^(?:filter|find|map|reject)|While$/.test(t),
                    i = /^(?:head|last)$/.test(t),
                    s = Dr[i ? "take" + ("last" == t ? "Right" : "") : t],
                    o = i || /^find/.test(t);
                  s &&
                    (Dr.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = i ? [1] : arguments,
                        c = t instanceof $r,
                        u = a[0],
                        l = c || qo(t),
                        h = function (e) {
                          var t = s.apply(Dr, Tt([e], a));
                          return i && p ? t[0] : t;
                        };
                      l &&
                        n &&
                        "function" == typeof u &&
                        1 != u.length &&
                        (c = l = !1);
                      var p = this.__chain__,
                        f = !!this.__actions__.length,
                        d = o && !p,
                        g = c && !f;
                      if (!o && l) {
                        t = g ? t : new $r(this);
                        var y = e.apply(t, a);
                        return (
                          y.__actions__.push({
                            func: uo,
                            args: [h],
                            thisArg: r,
                          }),
                          new Mr(y, p)
                        );
                      }
                      return d && g
                        ? e.apply(this, a)
                        : ((y = this.thru(h)),
                          d ? (i ? y.value()[0] : y.value()) : y);
                    });
                }),
                Ot(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = je[e],
                      r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      n = /^(?:pop|shift)$/.test(e);
                    Dr.prototype[e] = function () {
                      var e = arguments;
                      if (n && !this.__chain__) {
                        var i = this.value();
                        return t.apply(qo(i) ? i : [], e);
                      }
                      return this[r](function (r) {
                        return t.apply(qo(r) ? r : [], e);
                      });
                    };
                  },
                ),
                yn($r.prototype, function (e, t) {
                  var r = Dr[t];
                  if (r) {
                    var n = r.name + "";
                    Re.call(Pr, n) || (Pr[n] = []),
                      Pr[n].push({ name: t, func: r });
                  }
                }),
                (Pr[Di(r, 2).name] = [{ name: "wrapper", func: r }]),
                ($r.prototype.clone = function () {
                  var e = new $r(this.__wrapped__);
                  return (
                    (e.__actions__ = Si(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = Si(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = Si(this.__views__)),
                    e
                  );
                }),
                ($r.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new $r(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                ($r.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = qo(e),
                    n = t < 0,
                    i = r ? e.length : 0,
                    s = (function (e, t, r) {
                      for (var n = -1, i = r.length; ++n < i; ) {
                        var s = r[n],
                          o = s.size;
                        switch (s.type) {
                          case "drop":
                            e += o;
                            break;
                          case "dropRight":
                            t -= o;
                            break;
                          case "take":
                            t = dr(t, e + o);
                            break;
                          case "takeRight":
                            e = fr(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, i, this.__views__),
                    o = s.start,
                    a = s.end,
                    c = a - o,
                    u = n ? a : o - 1,
                    l = this.__iteratees__,
                    h = l.length,
                    p = 0,
                    f = dr(c, this.__takeCount__);
                  if (!r || (!n && i == c && f == c))
                    return ui(e, this.__actions__);
                  var d = [];
                  e: for (; c-- && p < f; ) {
                    for (var g = -1, y = e[(u += t)]; ++g < h; ) {
                      var v = l[g],
                        m = v.iteratee,
                        w = v.type,
                        _ = m(y);
                      if (2 == w) y = _;
                      else if (!_) {
                        if (1 == w) continue e;
                        break e;
                      }
                    }
                    d[p++] = y;
                  }
                  return d;
                }),
                (Dr.prototype.at = lo),
                (Dr.prototype.chain = function () {
                  return co(this);
                }),
                (Dr.prototype.commit = function () {
                  return new Mr(this.value(), this.__chain__);
                }),
                (Dr.prototype.next = function () {
                  this.__values__ === r && (this.__values__ = ua(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? r : this.__values__[this.__index__++],
                  };
                }),
                (Dr.prototype.plant = function (e) {
                  for (var t, n = this; n instanceof kr; ) {
                    var i = Ds(n);
                    (i.__index__ = 0),
                      (i.__values__ = r),
                      t ? (s.__wrapped__ = i) : (t = i);
                    var s = i;
                    n = n.__wrapped__;
                  }
                  return (s.__wrapped__ = e), t;
                }),
                (Dr.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof $r) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new $r(this)),
                      (t = t.reverse()).__actions__.push({
                        func: uo,
                        args: [Ys],
                        thisArg: r,
                      }),
                      new Mr(t, this.__chain__)
                    );
                  }
                  return this.thru(Ys);
                }),
                (Dr.prototype.toJSON =
                  Dr.prototype.valueOf =
                  Dr.prototype.value =
                    function () {
                      return ui(this.__wrapped__, this.__actions__);
                    }),
                (Dr.prototype.first = Dr.prototype.head),
                Ye &&
                  (Dr.prototype[Ye] = function () {
                    return this;
                  }),
                Dr
              );
            })();
          ht ? (((ht.exports = lr)._ = lr), (lt._ = lr)) : (ut._ = lr);
        }).call(ys);
      })(vs, vs.exports);
      var ms = Object.defineProperty,
        ws = Object.defineProperties,
        _s = Object.getOwnPropertyDescriptors,
        bs = Object.getOwnPropertySymbols,
        Es = Object.prototype.hasOwnProperty,
        Os = Object.prototype.propertyIsEnumerable,
        Ss = (e, t, r) =>
          t in e
            ? ms(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Is = (e, t) => {
          for (var r in t || (t = {})) Es.call(t, r) && Ss(e, r, t[r]);
          if (bs) for (var r of bs(t)) Os.call(t, r) && Ss(e, r, t[r]);
          return e;
        },
        Ps = (e, t) => ws(e, _s(t));
      function js(e, t, r) {
        let n;
        const i = xs(e);
        return (
          t.rpcMap && (n = t.rpcMap[i]),
          n ||
            (n = `https://rpc.walletconnect.com/v1?chainId=eip155:${i}&projectId=${r}`),
          n
        );
      }
      function xs(e) {
        return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e);
      }
      function Ns(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function Ts(e) {
        var t, r, n, i;
        const s = {};
        if (
          ((o = e),
          Object.getPrototypeOf(o) !== Object.prototype ||
            !Object.keys(o).length)
        )
          return s;
        var o;
        for (const [o, a] of Object.entries(e)) {
          const e = rs(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            l = a.rpcMap || {},
            h = ns(o);
          s[h] = Ps(Is(Is({}, s[h]), a), {
            chains: ts(e, null == (t = s[h]) ? void 0 : t.chains),
            methods: ts(c, null == (r = s[h]) ? void 0 : r.methods),
            events: ts(u, null == (n = s[h]) ? void 0 : n.events),
            rpcMap: Is(Is({}, l), null == (i = s[h]) ? void 0 : i.rpcMap),
          });
        }
        return s;
      }
      function As(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function Rs(e) {
        const t = {};
        for (const [r, n] of Object.entries(e)) {
          const e = n.methods || [],
            i = n.events || [],
            s = n.accounts || [],
            o = rs(r) ? [r] : n.chains ? n.chains : Ns(n.accounts);
          t[r] = { chains: o, methods: e, events: i, accounts: s };
        }
        return t;
      }
      const Cs = {},
        Ls = (e) => Cs[e],
        Ds = (e, t) => {
          Cs[e] = t;
        };
      class Us {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || js(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || js(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      class ks {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          const r = xs(e);
          if (!this.httpProviders[r]) {
            const e =
              t ||
              js(
                `${this.name}:${r}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!e) throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, e);
          }
          (this.chainId = r), this.events.emit(gs, `${this.name}:${r}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          const r =
            t ||
            js(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new qt(new hs(r, Ls("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              const n = xs(t);
              e[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let n = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          n = n.startsWith("0x") ? n : `0x${n}`;
          const i = parseInt(n, 16);
          if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                `Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`,
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: n }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${i}`);
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class Ms {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              js(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || js(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      class $s {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r =
              t ||
              js(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || js(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      class zs {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const r = t || this.getCardanoRPCUrl(e);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const r = this.getCardanoRPCUrl(t);
              e[t] = this.createHttpProvider(t, r);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || this.getCardanoRPCUrl(e);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      class qs {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              js(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || js(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      class Vs {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = Ls("events")),
            (this.client = Ls("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            const r =
              t ||
              js(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId,
              );
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(gs, `${this.name}:${this.chainId}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2]),
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t],
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          const r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          const r = t || js(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new qt(new ps(r, Ls("disableProviderPing")));
        }
      }
      var Hs = Object.defineProperty,
        Bs = Object.defineProperties,
        Fs = Object.getOwnPropertyDescriptors,
        Ks = Object.getOwnPropertySymbols,
        Ws = Object.prototype.hasOwnProperty,
        Gs = Object.prototype.propertyIsEnumerable,
        Js = (e, t, r) =>
          t in e
            ? Hs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        Ys = (e, t) => {
          for (var r in t || (t = {})) Ws.call(t, r) && Js(e, r, t[r]);
          if (Ks) for (var r of Ks(t)) Gs.call(t, r) && Js(e, r, t[r]);
          return e;
        },
        Zs = (e, t) => Bs(e, Fs(t));
      class Qs {
        constructor(e) {
          (this.events = new (i())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              typeof e?.logger < "u" && "string" != typeof e?.logger
                ? e.logger
                : (0, v.pino)(
                    (0, v.getDefaultLoggerOptions)({ level: e?.logger || fs }),
                  )),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          const t = new Qs(e);
          return await t.initialize(), t;
        }
        async request(e, t) {
          const [r, n] = this.validateChain(t);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: Ys({}, e),
            chainId: `${r}:${n}`,
            topic: this.session.topic,
          });
        }
        sendAsync(e, t, r) {
          this.request(e, r)
            .then((e) => t(null, e))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: ss("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt)
              throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw new Error("Max auto pairing attempts reached");
            const { uri: r, approval: n } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await n()
                .then((e) => {
                  (this.session = e),
                    this.namespaces ||
                      ((this.namespaces = Rs(e.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((e) => {
                  if (e.message !== Ui) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [r, n] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(n, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          const t = this.client.pairing.getAll();
          if (os(t)) {
            for (const r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic,
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            const e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e],
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await es.init({
              logger: this.providerOpts.logger || fs,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()",
            );
          const e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => ns(e))),
          ];
          Ds("client", this.client),
            Ds("events", this.events),
            Ds("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e),
                  );
                  if (!r.length) return [];
                  const n = [];
                  return (
                    r.forEach((e) => {
                      const r = t.namespaces[e].accounts;
                      n.push(...r);
                    }),
                    n
                  );
                })(e, this.session),
                r = Ns(t),
                n = (function (e = {}, t = {}) {
                  const r = Ts(e),
                    n = Ts(t);
                  return vs.exports.merge(r, n);
                })(this.namespaces, this.optionalNamespaces),
                i = Zs(Ys({}, n[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new ks({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new Ms({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new $s({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new Us({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new zs({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new qs({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new Vs({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              const { params: t } = e,
                { event: r } = t;
              if ("accountsChanged" === r.name) {
                const e = r.data;
                e && os(e) && this.events.emit("accountsChanged", e.map(As));
              } else
                "chainChanged" === r.name
                  ? this.onChainChanged(t.chainId)
                  : this.events.emit(r.name, r.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r;
              const { namespaces: n } = t,
                i = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = Zs(Ys({}, i), { namespaces: n })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Zs(Ys({}, ss("USER_DISCONNECTED")), { data: e.topic }),
                );
            }),
            this.on(gs, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e])
            throw new Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e],
            );
          });
        }
        setNamespaces(e) {
          const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: n,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = n),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", r);
        }
        validateChain(e) {
          const [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => ns(e))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`,
            );
          if (t && r) return [t, r];
          const n = ns(Object.keys(this.namespaces)[0]);
          return [n, this.rpcProviders[n].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          var r;
          if (!this.namespaces) return;
          const [n, i] = this.validateChain(e);
          t || this.getProvider(n).setDefaultChain(i),
            ((null != (r = this.namespaces[n])
              ? r
              : this.namespaces[`${n}:${i}`]
            ).defaultChain = i),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", i);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${ds}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${ds}/${e}`);
        }
      }
      const Xs = Qs,
        eo = ["eth_sendTransaction", "personal_sign"],
        to = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        ro = ["chainChanged", "accountsChanged"],
        no = ["message", "disconnect", "connect"];
      var io = Object.defineProperty,
        so = Object.defineProperties,
        oo = Object.getOwnPropertyDescriptors,
        ao = Object.getOwnPropertySymbols,
        co = Object.prototype.hasOwnProperty,
        uo = Object.prototype.propertyIsEnumerable,
        lo = (e, t, r) =>
          t in e
            ? io(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ho = (e, t) => {
          for (var r in t || (t = {})) co.call(t, r) && lo(e, r, t[r]);
          if (ao) for (var r of ao(t)) uo.call(t, r) && lo(e, r, t[r]);
          return e;
        },
        po = (e, t) => so(e, oo(t));
      function fo(e) {
        return Number(e[0].split(":")[1]);
      }
      function go(e) {
        return `0x${e.toString(16)}`;
      }
      class yo {
        constructor() {
          (this.events = new n.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          const t = new yo();
          return await t.initialize(e), t;
        }
        async request(e) {
          return await this.signer.request(e, this.formatChainId(this.chainId));
        }
        sendAsync(e, t) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          const { required: t, optional: r } = (function (e) {
            const {
              chains: t,
              optionalChains: r,
              methods: n,
              optionalMethods: i,
              events: s,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!d(t)) throw new Error("Invalid chains");
            const c = {
                chains: t,
                methods: n || eo,
                events: s || ro,
                rpcMap: ho({}, t.length ? { [fo(t)]: a[fo(t)] } : {}),
              },
              u = s?.filter((e) => !ro.includes(e)),
              l = n?.filter((e) => !eo.includes(e));
            if (
              !(
                r ||
                o ||
                i ||
                (null != u && u.length) ||
                (null != l && l.length)
              )
            )
              return { required: t.length ? c : void 0 };
            const h = {
              chains: [
                ...new Set(
                  (u?.length && l?.length) || !r ? c.chains.concat(r || []) : r,
                ),
              ],
              methods: [
                ...new Set(c.methods.concat(null != i && i.length ? i : to)),
              ],
              events: [...new Set(c.events.concat(o || no))],
              rpcMap: a,
            };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? h : void 0,
            };
          })(this.rpc);
          try {
            const n = await new Promise(async (n, i) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    !e.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      i(
                        new Error(
                          "Connection request reset. Please try again.",
                        ),
                      ));
                  })),
                await this.signer
                  .connect(
                    po(
                      ho(
                        { namespaces: ho({}, t && { [this.namespace]: t }) },
                        r && { optionalNamespaces: { [this.namespace]: r } },
                      ),
                      { pairingTopic: e?.pairingTopic },
                    ),
                  )
                  .then((e) => {
                    n(e);
                  })
                  .catch((e) => {
                    i(new Error(e.message));
                  });
            });
            if (!n) return;
            this.setChainIds(this.rpc.chains);
            const i = (function (e, t = []) {
              const r = [];
              return (
                Object.keys(e).forEach((n) => {
                  if (t.length && !t.includes(n)) return;
                  const i = e[n];
                  r.push(...i.accounts);
                }),
                r
              );
            })(n.namespaces, [this.namespace]);
            this.setAccounts(i),
              this.events.emit("connect", { chainId: go(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            const { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              const t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", go(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  po(
                    ho(
                      {},
                      (function (e, t) {
                        const { message: r, code: n } = f[e];
                        return { message: t ? `${r} ${t}` : r, code: n };
                      })("USER_DISCONNECTED"),
                    ),
                    { data: e.topic, name: "USER_DISCONNECTED" },
                  ),
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          const t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", go(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          const [t, r, n] = e.split(":");
          return { chainId: `${t}:${r}`, address: n };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId,
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          const n = null != (t = e?.chains) ? t : [],
            i = null != (r = e?.optionalChains) ? r : [],
            s = n.concat(i);
          if (!s.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`",
            );
          const o = n.length ? e?.methods || eo : [],
            a = n.length ? e?.events || ro : [],
            c = e?.optionalMethods || [],
            u = e?.optionalEvents || [],
            l = e?.rpcMap || this.buildRpcMap(s, e.projectId),
            h = e?.qrModalOptions || void 0;
          return {
            chains: n?.map((e) => this.formatChainId(e)),
            optionalChains: i.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: l,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: h,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          const r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? fo(this.rpc.chains)
              : fo(this.rpc.optionalChains)),
            (this.signer = await Xs.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              const { WalletConnectModal: t } = await r
                .e(343)
                .then(r.bind(r, 9343));
              e = t;
            } catch {
              throw new Error(
                "To use QR modal, please install @walletconnect/modal package",
              );
            }
            if (e)
              try {
                this.modal = new e(
                  ho(
                    {
                      walletConnectVersion: 2,
                      projectId: this.rpc.projectId,
                      standaloneChains: this.rpc.chains,
                    },
                    this.rpc.qrModalOptions,
                  ),
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  new Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          const { chains: t, optionalChains: r, rpcMap: n } = e;
          t &&
            d(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
            })),
            r &&
              d(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = n?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          const e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`,
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId,
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      const vo = yo;
    },
    2116: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    304: (e, t, r) => {
      "use strict";
      r(2116);
    },
    7283: (e, t, r) => {
      "use strict";
      const n = r(610),
        i = r(4020),
        s = r(500),
        o = r(2806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function l(e, t) {
        return t.decode ? i(e) : e;
      }
      function h(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? h(Object.keys(e))
              .sort((e, t) => Number(e) - Number(t))
              .map((t) => e[t])
          : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function f(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      l(r, e).includes(e.arrayFormatSeparator);
                  r = s ? l(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => l(t, e))
                      : null === r
                      ? r
                      : l(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? l(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => l(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat,
                )
              ? o
              : l(o, t)),
            r(l(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = d(r[e], t);
          else n[e] = d(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = h(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = f),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[", i, "]"].join("")]
                      : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[]"].join("")]
                      : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), ":list="].join("")]
                      : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, u(t, e)]
                      : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? u(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? u(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(f(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: l(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let l = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (l = `#${
                r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${n}${c}${l}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    8200: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => n });
      class n {}
    },
    997: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { IEvents: () => n.q });
      var n = r(8200);
    },
    2568: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      const n = r(6736);
      (t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    3401: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(9653).__exportStar(r(2568), t);
    },
    8969: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      const n = r(9653),
        i = r(7187),
        s = r(6736),
        o = r(1614),
        a = r(3401);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return n.__awaiter(this, void 0, void 0, function* () {
            const t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return n.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return n.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval),
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    772: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(9653);
      n.__exportStar(r(8969), t),
        n.__exportStar(r(1614), t),
        n.__exportStar(r(3401), t);
    },
    4174: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      const n = r(997);
      class i extends n.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = i;
    },
    1614: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(9653).__exportStar(r(4174), t);
    },
    9653: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => l,
          __classPrivateFieldGet: () => I,
          __classPrivateFieldSet: () => P,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => h,
          __importDefault: () => S,
          __importStar: () => O,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function f(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : l(s[0][2], r);
          } catch (e) {
            l(s[0][3], e);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function b(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    699: function (e, t) {
      var r = "undefined" != typeof self ? self : this,
        n = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      !(function (e) {
        !(function (t) {
          var r = "URLSearchParams" in e,
            n = "Symbol" in e && "iterator" in Symbol,
            i =
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            s = "FormData" in e,
            o = "ArrayBuffer" in e;
          if (o)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              c =
                ArrayBuffer.isView ||
                function (e) {
                  return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function u(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function l(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function h(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              n &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function p(e) {
            (this.map = {}),
              e instanceof p
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function f(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function d(e) {
            return new Promise(function (t, r) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  r(e.error);
                });
            });
          }
          function g(e) {
            var t = new FileReader(),
              r = d(t);
            return t.readAsArrayBuffer(e), r;
          }
          function y(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function v() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this._bodyInit = e),
                  e
                    ? "string" == typeof e
                      ? (this._bodyText = e)
                      : i && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : s && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : r && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : o && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = y(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                      ? (this._bodyArrayBuffer = y(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" == typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8",
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : r &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8",
                        ));
              }),
              i &&
                ((this.blob = function () {
                  var e = f(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var e,
                  t,
                  r,
                  n = f(this);
                if (n) return n;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (r = d((t = new FileReader()))),
                    t.readAsText(e),
                    r
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          r = new Array(t.length),
                          n = 0;
                        n < t.length;
                        n++
                      )
                        r[n] = String.fromCharCode(t[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer),
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              s &&
                (this.formData = function () {
                  return this.text().then(_);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (p.prototype.append = function (e, t) {
            (e = u(e)), (t = l(t));
            var r = this.map[e];
            this.map[e] = r ? r + ", " + t : t;
          }),
            (p.prototype.delete = function (e) {
              delete this.map[u(e)];
            }),
            (p.prototype.get = function (e) {
              return (e = u(e)), this.has(e) ? this.map[e] : null;
            }),
            (p.prototype.has = function (e) {
              return this.map.hasOwnProperty(u(e));
            }),
            (p.prototype.set = function (e, t) {
              this.map[u(e)] = l(t);
            }),
            (p.prototype.forEach = function (e, t) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
            }),
            (p.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push(r);
                }),
                h(e)
              );
            }),
            (p.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                h(e)
              );
            }),
            (p.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, r) {
                  e.push([r, t]);
                }),
                h(e)
              );
            }),
            n && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function w(e, t) {
            var r,
              n,
              i = (t = t || {}).body;
            if (e instanceof w) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new p(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                i ||
                  null == e._bodyInit ||
                  ((i = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new p(t.headers)),
              (this.method =
                ((n = (r = t.method || this.method || "GET").toUpperCase()),
                m.indexOf(n) > -1 ? n : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && i)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i);
          }
          function _(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var r = e.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      i = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(n), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function b(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new p(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (w.prototype.clone = function () {
            return new w(this, { body: this._bodyInit });
          }),
            v.call(w.prototype),
            v.call(b.prototype),
            (b.prototype.clone = function () {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new p(this.headers),
                url: this.url,
              });
            }),
            (b.error = function () {
              var e = new b(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var E = [301, 302, 303, 307, 308];
          (b.redirect = function (e, t) {
            if (-1 === E.indexOf(t))
              throw new RangeError("Invalid status code");
            return new b(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = e.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var r = Error(e);
              this.stack = r.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function O(e, r) {
            return new Promise(function (n, s) {
              var o = new w(e, r);
              if (o.signal && o.signal.aborted)
                return s(new t.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var e,
                  t,
                  r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers:
                      ((e = a.getAllResponseHeaders() || ""),
                      (t = new p()),
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split(/\r?\n/)
                        .forEach(function (e) {
                          var r = e.split(":"),
                            n = r.shift().trim();
                          if (n) {
                            var i = r.join(":").trim();
                            t.append(n, i);
                          }
                        }),
                      t),
                  };
                r.url =
                  "responseURL" in a
                    ? a.responseURL
                    : r.headers.get("X-Request-URL");
                var i = "response" in a ? a.response : a.responseText;
                n(new b(i, r));
              }),
                (a.onerror = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  s(new t.DOMException("Aborted", "AbortError"));
                }),
                a.open(o.method, o.url, !0),
                "include" === o.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === o.credentials && (a.withCredentials = !1),
                "responseType" in a && i && (a.responseType = "blob"),
                o.headers.forEach(function (e, t) {
                  a.setRequestHeader(t, e);
                }),
                o.signal &&
                  (o.signal.addEventListener("abort", c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      o.signal.removeEventListener("abort", c);
                  })),
                a.send(void 0 === o._bodyInit ? null : o._bodyInit);
            });
          }
          (O.polyfill = !0),
            e.fetch ||
              ((e.fetch = O),
              (e.Headers = p),
              (e.Request = w),
              (e.Response = b)),
            (t.Headers = p),
            (t.Request = w),
            (t.Response = b),
            (t.fetch = O),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill;
      var i = n;
      ((t = i.fetch).default = i.fetch),
        (t.fetch = i.fetch),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response),
        (e.exports = t);
    },
    5150: (e, t, r) => {
      "use strict";
      const n = r(3893),
        i = r(3954),
        s = n.__importDefault(r(653)),
        o = r(9728);
      t.ZP = class {
        constructor() {
          this.localStorage = s.default;
        }
        getKeys() {
          return n.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
          });
        }
        getEntries() {
          return n.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(o.parseEntry);
          });
        }
        getItem(e) {
          return n.__awaiter(this, void 0, void 0, function* () {
            const t = this.localStorage.getItem(e);
            if (null !== t) return i.safeJsonParse(t);
          });
        }
        setItem(e, t) {
          return n.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(e, i.safeJsonStringify(t));
          });
        }
        removeItem(e) {
          return n.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(e);
          });
        }
      };
    },
    653: (e, t, r) => {
      "use strict";
      !(function () {
        let t;
        function n() {}
        (t = n),
          (t.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
          (t.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (t.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (t.prototype.clear = function () {
            const e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (t.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          void 0 !== r.g && r.g.localStorage
            ? (e.exports = r.g.localStorage)
            : "undefined" != typeof window && window.localStorage
            ? (e.exports = window.localStorage)
            : (e.exports = new n());
      })();
    },
    9728: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3893);
      n.__exportStar(r(9076), t), n.__exportStar(r(496), t);
    },
    9076: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IKeyValueStorage = void 0),
        (t.IKeyValueStorage = class {});
    },
    496: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseEntry = void 0);
      const n = r(3954);
      t.parseEntry = function (e) {
        var t;
        return [
          e[0],
          n.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : ""),
        ];
      };
    },
    3893: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => l,
          __classPrivateFieldGet: () => I,
          __classPrivateFieldSet: () => P,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => h,
          __importDefault: () => S,
          __importStar: () => O,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function f(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : l(s[0][2], r);
          } catch (e) {
            l(s[0][3], e);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function b(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    5727: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (t.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    9107: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pino = void 0);
      const n = r(7121),
        i = n.__importDefault(r(6559));
      Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
        n.__exportStar(r(5727), t),
        n.__exportStar(r(8048), t);
    },
    8048: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateChildLogger =
          t.formatChildLoggerContext =
          t.getLoggerContext =
          t.setBrowserLoggerContext =
          t.getBrowserLoggerContext =
          t.getDefaultLoggerOptions =
            void 0);
      const n = r(5727);
      function i(e, t = n.PINO_CUSTOM_CONTEXT_KEY) {
        return e[t] || "";
      }
      function s(e, t, r = n.PINO_CUSTOM_CONTEXT_KEY) {
        return (e[r] = t), e;
      }
      function o(e, t = n.PINO_CUSTOM_CONTEXT_KEY) {
        let r = "";
        return (
          (r = void 0 === e.bindings ? i(e, t) : e.bindings().context || ""), r
        );
      }
      function a(e, t, r = n.PINO_CUSTOM_CONTEXT_KEY) {
        const i = o(e, r);
        return i.trim() ? `${i}/${t}` : t;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), {
          level: (null == e ? void 0 : e.level) || n.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (t.getBrowserLoggerContext = i),
        (t.setBrowserLoggerContext = s),
        (t.getLoggerContext = o),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (
          e,
          t,
          r = n.PINO_CUSTOM_CONTEXT_KEY,
        ) {
          const i = a(e, t, r);
          return s(e.child({ context: i }), i, r);
        });
    },
    7121: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => l,
          __classPrivateFieldGet: () => I,
          __classPrivateFieldSet: () => P,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => h,
          __importDefault: () => S,
          __importStar: () => O,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => y,
          __spreadArrays: () => v,
          __values: () => d,
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          s.apply(this, arguments)
        );
      };
      function o(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function a(e, t, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (i = e[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function l(e, t, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(e) {
            try {
              c(n.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(n.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(o, a);
          }
          c((n = n.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(e, t, r, n) {
        void 0 === n && (n = r), (e[n] = t[r]);
      }
      function f(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(e) {
          i[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                s.push([e, t, r, n]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (r = i[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : l(s[0][2], r);
          } catch (e) {
            l(s[0][3], e);
          }
          var r;
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function l(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[n](t)), done: "return" === n }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function b(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function S(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    3014: () => {},
    8495: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    416: (e, t, r) => {
      "use strict";
      t.D = void 0;
      const n = r(8495);
      t.D = function () {
        let e, t;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function r(...t) {
          const r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            const n = r[e],
              i = ["itemprop", "property", "name"]
                .map((e) => n.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (i.length && i) {
              const e = n.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        const i = (function () {
          let t = r("name", "og:site_name", "og:title", "twitter:title");
          return t || (t = e.title), t;
        })();
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords",
          ),
          url: t.origin,
          icons: (function () {
            const r = e.getElementsByTagName("link"),
              n = [];
            for (let e = 0; e < r.length; e++) {
              const i = r[e],
                s = i.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const e = i.getAttribute("href");
                if (e)
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      const n = t.pathname.split("/");
                      n.pop(), (r += n.join("/") + "/" + e);
                    }
                    n.push(r);
                  } else if (0 === e.indexOf("//")) {
                    const r = t.protocol + e;
                    n.push(r);
                  } else n.push(e);
              }
            }
            return n;
          })(),
          name: i,
        };
      };
    },
    7338: (e, t, r) => {
      "use strict";
      const n = r(610),
        i = r(4020),
        s = r(500),
        o = r(2806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function l(e, t) {
        return t.decode ? i(e) : e;
      }
      function h(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? h(Object.keys(e))
              .sort((e, t) => Number(e) - Number(t))
              .map((t) => e[t])
          : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function f(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      l(r, e).includes(e.arrayFormatSeparator);
                  r = s ? l(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => l(t, e))
                      : null === r
                      ? r
                      : l(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? l(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => l(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat,
                )
              ? o
              : l(o, t)),
            r(l(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = d(r[e], t);
          else n[e] = d(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = h(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = f),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[", i, "]"].join("")]
                      : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[]"].join("")]
                      : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), ":list="].join("")]
                      : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, u(t, e)]
                      : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? u(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? u(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(f(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: l(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let l = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (l = `#${
                r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${n}${c}${l}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    3382: (e, t) => {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function n(e) {
        const t = r(e);
        if (!t) throw new Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = n),
        (t.getDocumentOrThrow = function () {
          return n("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return n("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return n("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return n("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return n("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    9982: (e, t, r) => {
      "use strict";
      r(3382);
    },
    4543: (e, t, r) => {
      "use strict";
      const n = r(610),
        i = r(4020),
        s = r(500),
        o = r(2806),
        a = Symbol("encodeFragmentIdentifier");
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string",
          );
      }
      function u(e, t) {
        return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
      }
      function l(e, t) {
        return t.decode ? i(e) : e;
      }
      function h(e) {
        return Array.isArray(e)
          ? e.sort()
          : "object" == typeof e
          ? h(Object.keys(e))
              .sort((e, t) => Number(e) - Number(t))
              .map((t) => e[t])
          : e;
      }
      function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function f(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t,
          )).arrayFormatSeparator,
        );
        const r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, n) => {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return (e, r, n) => {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "colon-list-separator":
                return (e, r, n) => {
                  (t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return (t, r, n) => {
                  const i =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !i &&
                      l(r, e).includes(e.arrayFormatSeparator);
                  r = s ? l(r, e) : r;
                  const o =
                    i || s
                      ? r.split(e.arrayFormatSeparator).map((t) => l(t, e))
                      : null === r
                      ? r
                      : l(r, e);
                  n[t] = o;
                };
              case "bracket-separator":
                return (t, r, n) => {
                  const i = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !i))
                    return void (n[t] = r ? l(r, e) : r);
                  const s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => l(t, e));
                  void 0 !== n[t] ? (n[t] = [].concat(n[t], s)) : (n[t] = s);
                };
              default:
                return (e, t, r) => {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          n = Object.create(null);
        if ("string" != typeof e) return n;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
        for (const i of e.split("&")) {
          if ("" === i) continue;
          let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat,
                )
              ? o
              : l(o, t)),
            r(l(e, t), o, n);
        }
        for (const e of Object.keys(n)) {
          const r = n[e];
          if ("object" == typeof r && null !== r)
            for (const e of Object.keys(r)) r[e] = d(r[e], t);
          else n[e] = d(r, t);
        }
        return !1 === t.sort
          ? n
          : (!0 === t.sort
              ? Object.keys(n).sort()
              : Object.keys(n).sort(t.sort)
            ).reduce((e, t) => {
              const r = n[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = h(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = f),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t,
            )).arrayFormatSeparator,
          );
          const r = (r) =>
              (t.skipNull && null == e[r]) ||
              (t.skipEmptyString && "" === e[r]),
            n = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, n) => {
                    const i = r.length;
                    return void 0 === n ||
                      (e.skipNull && null === n) ||
                      (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[", i, "]"].join("")]
                      : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), "[]"].join("")]
                      : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, [u(t, e), ":list="].join("")]
                      : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (n, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? n
                      : ((i = null === i ? "" : i),
                        0 === n.length
                          ? [[u(r, e), t, u(i, e)].join("")]
                          : [[n, u(i, e)].join(e.arrayFormatSeparator)]);
                }
                default:
                  return (t) => (r, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? r
                      : null === n
                      ? [...r, u(t, e)]
                      : [...r, [u(t, e), "=", u(n, e)].join("")];
              }
            })(t),
            i = {};
          for (const t of Object.keys(e)) r(t) || (i[t] = e[t]);
          const s = Object.keys(i);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                const i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? u(r, t)
                  : Array.isArray(i)
                  ? 0 === i.length && "bracket-separator" === t.arrayFormat
                    ? u(r, t) + "[]"
                    : i.reduce(n(r), []).join("&")
                  : u(r, t) + "=" + u(i, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          const [r, n] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(f(e), t) },
            t && t.parseFragmentIdentifier && n
              ? { fragmentIdentifier: l(n, t) }
              : {},
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [a]: !0 }, r);
          const n = p(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            s = t.parse(i, { sort: !1 }),
            o = Object.assign(s, e.query);
          let c = t.stringify(o, r);
          c && (c = `?${c}`);
          let l = (function (e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (l = `#${
                r[a] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${n}${c}${l}`
          );
        }),
        (t.pick = (e, r, n) => {
          n = Object.assign({ parseFragmentIdentifier: !0, [a]: !1 }, n);
          const { url: i, query: s, fragmentIdentifier: c } = t.parseUrl(e, n);
          return t.stringifyUrl(
            { url: i, query: o(s, r), fragmentIdentifier: c },
            n,
          );
        }),
        (t.exclude = (e, r, n) => {
          const i = Array.isArray(r)
            ? (e) => !r.includes(e)
            : (e, t) => !r(e, t);
          return t.pick(e, i, n);
        });
    },
    7187: (e) => {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        n =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e),
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var i =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, n) {
            function i(r) {
              e.removeListener(t, s), n(r);
            }
            function s() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", i),
                r([].slice.call(arguments));
            }
            g(e, t, s, { once: !0 }),
              "error" !== t &&
                (function (e, t, r) {
                  "function" == typeof e.on && g(e, "error", t, { once: !0 });
                })(e, i);
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e,
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, r, n) {
        var i, s, o, u;
        if (
          (a(r),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = s[t] = n ? [r, o] : [o, r])
            : n
            ? o.unshift(r)
            : o.push(r),
          (i = c(e)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var l = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit",
          );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = o.length),
            (u = l),
            console && console.warn && console.warn(u);
        }
        return e;
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function h(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          i = l.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function p(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(i)
          : d(i, i.length);
      }
      function f(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
      }
      function g(e, t, r, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e,
            );
          e.addEventListener(t, function i(s) {
            n.once && e.removeEventListener(t, i), r(s);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          o = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var i = "error" === e,
            s = this._events;
          if (void 0 !== s) i = i && void 0 === s.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : ""),
            );
            throw ((a.context = o), a);
          }
          var c = s[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) n(c, this, t);
          else {
            var u = c.length,
              l = d(c, u);
            for (r = 0; r < u; ++r) n(l[r], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return a(t), this.on(e, h(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, h(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var r, n, i, s, o;
          if ((a(t), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[e])) return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (i = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === t || r[s].listener === t) {
                (o = r[s].listener), (i = s);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, i),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              s = Object.keys(r);
            for (n = 0; n < s.length; ++n)
              "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return p(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return p(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : f.call(e, t);
        }),
        (s.prototype.listenerCount = f),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    2307: (e, t, r) => {
      e = r.nmd(e);
      var n = "__lodash_hash_undefined__",
        i = 1,
        s = 2,
        o = 9007199254740991,
        a = "[object Arguments]",
        c = "[object Array]",
        u = "[object AsyncFunction]",
        l = "[object Boolean]",
        h = "[object Date]",
        p = "[object Error]",
        f = "[object Function]",
        d = "[object GeneratorFunction]",
        g = "[object Map]",
        y = "[object Number]",
        v = "[object Null]",
        m = "[object Object]",
        w = "[object Promise]",
        _ = "[object Proxy]",
        b = "[object RegExp]",
        E = "[object Set]",
        O = "[object String]",
        S = "[object Undefined]",
        I = "[object WeakMap]",
        P = "[object ArrayBuffer]",
        j = "[object DataView]",
        x = /^\[object .+?Constructor\]$/,
        N = /^(?:0|[1-9]\d*)$/,
        T = {};
      (T["[object Float32Array]"] =
        T["[object Float64Array]"] =
        T["[object Int8Array]"] =
        T["[object Int16Array]"] =
        T["[object Int32Array]"] =
        T["[object Uint8Array]"] =
        T["[object Uint8ClampedArray]"] =
        T["[object Uint16Array]"] =
        T["[object Uint32Array]"] =
          !0),
        (T[a] =
          T[c] =
          T[P] =
          T[l] =
          T[j] =
          T[h] =
          T[p] =
          T[f] =
          T[g] =
          T[y] =
          T[m] =
          T[b] =
          T[E] =
          T[O] =
          T[I] =
            !1);
      var A = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        R = "object" == typeof self && self && self.Object === Object && self,
        C = A || R || Function("return this")(),
        L = t && !t.nodeType && t,
        D = L && e && !e.nodeType && e,
        U = D && D.exports === L,
        k = U && A.process,
        M = (function () {
          try {
            return k && k.binding && k.binding("util");
          } catch (e) {}
        })(),
        $ = M && M.isTypedArray;
      function z(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e)) return !0;
        return !1;
      }
      function q(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, n) {
            r[++t] = [n, e];
          }),
          r
        );
      }
      function V(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var H,
        B,
        F,
        K = Array.prototype,
        W = Function.prototype,
        G = Object.prototype,
        J = C["__core-js_shared__"],
        Y = W.toString,
        Z = G.hasOwnProperty,
        Q = (H = /[^.]+$/.exec((J && J.keys && J.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + H
          : "",
        X = G.toString,
        ee = RegExp(
          "^" +
            Y.call(Z)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        ),
        te = U ? C.Buffer : void 0,
        re = C.Symbol,
        ne = C.Uint8Array,
        ie = G.propertyIsEnumerable,
        se = K.splice,
        oe = re ? re.toStringTag : void 0,
        ae = Object.getOwnPropertySymbols,
        ce = te ? te.isBuffer : void 0,
        ue =
          ((B = Object.keys),
          (F = Object),
          function (e) {
            return B(F(e));
          }),
        le = De(C, "DataView"),
        he = De(C, "Map"),
        pe = De(C, "Promise"),
        fe = De(C, "Set"),
        de = De(C, "WeakMap"),
        ge = De(Object, "create"),
        ye = $e(le),
        ve = $e(he),
        me = $e(pe),
        we = $e(fe),
        _e = $e(de),
        be = re ? re.prototype : void 0,
        Ee = be ? be.valueOf : void 0;
      function Oe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Se(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Ie(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      function Pe(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new Ie(); ++t < r; ) this.add(e[t]);
      }
      function je(e) {
        var t = (this.__data__ = new Se(e));
        this.size = t.size;
      }
      function xe(e, t) {
        for (var r = e.length; r--; ) if (ze(e[r][0], t)) return r;
        return -1;
      }
      function Ne(e) {
        return null == e
          ? void 0 === e
            ? S
            : v
          : oe && oe in Object(e)
          ? (function (e) {
              var t = Z.call(e, oe),
                r = e[oe];
              try {
                e[oe] = void 0;
                var n = !0;
              } catch (e) {}
              var i = X.call(e);
              return n && (t ? (e[oe] = r) : delete e[oe]), i;
            })(e)
          : (function (e) {
              return X.call(e);
            })(e);
      }
      function Te(e) {
        return We(e) && Ne(e) == a;
      }
      function Ae(e, t, r, n, o) {
        return (
          e === t ||
          (null == e || null == t || (!We(e) && !We(t))
            ? e != e && t != t
            : (function (e, t, r, n, o, u) {
                var f = Ve(e),
                  d = Ve(t),
                  v = f ? c : ke(e),
                  w = d ? c : ke(t),
                  _ = (v = v == a ? m : v) == m,
                  S = (w = w == a ? m : w) == m,
                  I = v == w;
                if (I && He(e)) {
                  if (!He(t)) return !1;
                  (f = !0), (_ = !1);
                }
                if (I && !_)
                  return (
                    u || (u = new je()),
                    f || Ge(e)
                      ? Re(e, t, r, n, o, u)
                      : (function (e, t, r, n, o, a, c) {
                          switch (r) {
                            case j:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case P:
                              return !(
                                e.byteLength != t.byteLength ||
                                !a(new ne(e), new ne(t))
                              );
                            case l:
                            case h:
                            case y:
                              return ze(+e, +t);
                            case p:
                              return e.name == t.name && e.message == t.message;
                            case b:
                            case O:
                              return e == t + "";
                            case g:
                              var u = q;
                            case E:
                              var f = n & i;
                              if ((u || (u = V), e.size != t.size && !f))
                                return !1;
                              var d = c.get(e);
                              if (d) return d == t;
                              (n |= s), c.set(e, t);
                              var v = Re(u(e), u(t), n, o, a, c);
                              return c.delete(e), v;
                            case "[object Symbol]":
                              if (Ee) return Ee.call(e) == Ee.call(t);
                          }
                          return !1;
                        })(e, t, v, r, n, o, u)
                  );
                if (!(r & i)) {
                  var x = _ && Z.call(e, "__wrapped__"),
                    N = S && Z.call(t, "__wrapped__");
                  if (x || N) {
                    var T = x ? e.value() : e,
                      A = N ? t.value() : t;
                    return u || (u = new je()), o(T, A, r, n, u);
                  }
                }
                return (
                  !!I &&
                  (u || (u = new je()),
                  (function (e, t, r, n, s, o) {
                    var a = r & i,
                      c = Ce(e),
                      u = c.length;
                    if (u != Ce(t).length && !a) return !1;
                    for (var l = u; l--; ) {
                      var h = c[l];
                      if (!(a ? h in t : Z.call(t, h))) return !1;
                    }
                    var p = o.get(e);
                    if (p && o.get(t)) return p == t;
                    var f = !0;
                    o.set(e, t), o.set(t, e);
                    for (var d = a; ++l < u; ) {
                      var g = e[(h = c[l])],
                        y = t[h];
                      if (n)
                        var v = a ? n(y, g, h, t, e, o) : n(g, y, h, e, t, o);
                      if (!(void 0 === v ? g === y || s(g, y, r, n, o) : v)) {
                        f = !1;
                        break;
                      }
                      d || (d = "constructor" == h);
                    }
                    if (f && !d) {
                      var m = e.constructor,
                        w = t.constructor;
                      m == w ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof m &&
                          m instanceof m &&
                          "function" == typeof w &&
                          w instanceof w) ||
                        (f = !1);
                    }
                    return o.delete(e), o.delete(t), f;
                  })(e, t, r, n, o, u))
                );
              })(e, t, r, n, Ae, o))
        );
      }
      function Re(e, t, r, n, o, a) {
        var c = r & i,
          u = e.length,
          l = t.length;
        if (u != l && !(c && l > u)) return !1;
        var h = a.get(e);
        if (h && a.get(t)) return h == t;
        var p = -1,
          f = !0,
          d = r & s ? new Pe() : void 0;
        for (a.set(e, t), a.set(t, e); ++p < u; ) {
          var g = e[p],
            y = t[p];
          if (n) var v = c ? n(y, g, p, t, e, a) : n(g, y, p, e, t, a);
          if (void 0 !== v) {
            if (v) continue;
            f = !1;
            break;
          }
          if (d) {
            if (
              !z(t, function (e, t) {
                if (((i = t), !d.has(i) && (g === e || o(g, e, r, n, a))))
                  return d.push(t);
                var i;
              })
            ) {
              f = !1;
              break;
            }
          } else if (g !== y && !o(g, y, r, n, a)) {
            f = !1;
            break;
          }
        }
        return a.delete(e), a.delete(t), f;
      }
      function Ce(e) {
        return (function (e, t, r) {
          var n = t(e);
          return Ve(e)
            ? n
            : (function (e, t) {
                for (var r = -1, n = t.length, i = e.length; ++r < n; )
                  e[i + r] = t[r];
                return e;
              })(n, r(e));
        })(e, Je, Ue);
      }
      function Le(e, t) {
        var r,
          n,
          i = e.__data__;
        return (
          "string" == (n = typeof (r = t)) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
            ? "__proto__" !== r
            : null === r
        )
          ? i["string" == typeof t ? "string" : "hash"]
          : i.map;
      }
      function De(e, t) {
        var r = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return (function (e) {
          return (
            !(
              !Ke(e) ||
              (function (e) {
                return !!Q && Q in e;
              })(e)
            ) && (Be(e) ? ee : x).test($e(e))
          );
        })(r)
          ? r
          : void 0;
      }
      (Oe.prototype.clear = function () {
        (this.__data__ = ge ? ge(null) : {}), (this.size = 0);
      }),
        (Oe.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (Oe.prototype.get = function (e) {
          var t = this.__data__;
          if (ge) {
            var r = t[e];
            return r === n ? void 0 : r;
          }
          return Z.call(t, e) ? t[e] : void 0;
        }),
        (Oe.prototype.has = function (e) {
          var t = this.__data__;
          return ge ? void 0 !== t[e] : Z.call(t, e);
        }),
        (Oe.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = ge && void 0 === t ? n : t),
            this
          );
        }),
        (Se.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (Se.prototype.delete = function (e) {
          var t = this.__data__,
            r = xe(t, e);
          return !(
            r < 0 ||
            (r == t.length - 1 ? t.pop() : se.call(t, r, 1), --this.size, 0)
          );
        }),
        (Se.prototype.get = function (e) {
          var t = this.__data__,
            r = xe(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (Se.prototype.has = function (e) {
          return xe(this.__data__, e) > -1;
        }),
        (Se.prototype.set = function (e, t) {
          var r = this.__data__,
            n = xe(r, e);
          return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }),
        (Ie.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Oe(),
              map: new (he || Se)(),
              string: new Oe(),
            });
        }),
        (Ie.prototype.delete = function (e) {
          var t = Le(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (Ie.prototype.get = function (e) {
          return Le(this, e).get(e);
        }),
        (Ie.prototype.has = function (e) {
          return Le(this, e).has(e);
        }),
        (Ie.prototype.set = function (e, t) {
          var r = Le(this, e),
            n = r.size;
          return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }),
        (Pe.prototype.add = Pe.prototype.push =
          function (e) {
            return this.__data__.set(e, n), this;
          }),
        (Pe.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (je.prototype.clear = function () {
          (this.__data__ = new Se()), (this.size = 0);
        }),
        (je.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (je.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (je.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (je.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof Se) {
            var n = r.__data__;
            if (!he || n.length < 199)
              return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new Ie(n);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var Ue = ae
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (t, r) {
                    for (
                      var n = -1, i = null == t ? 0 : t.length, s = 0, o = [];
                      ++n < i;

                    ) {
                      var a = t[n];
                      (c = a), ie.call(e, c) && (o[s++] = a);
                    }
                    var c;
                    return o;
                  })(ae(e)));
            }
          : function () {
              return [];
            },
        ke = Ne;
      function Me(e, t) {
        return (
          !!(t = null == t ? o : t) &&
          ("number" == typeof e || N.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function $e(e) {
        if (null != e) {
          try {
            return Y.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function ze(e, t) {
        return e === t || (e != e && t != t);
      }
      ((le && ke(new le(new ArrayBuffer(1))) != j) ||
        (he && ke(new he()) != g) ||
        (pe && ke(pe.resolve()) != w) ||
        (fe && ke(new fe()) != E) ||
        (de && ke(new de()) != I)) &&
        (ke = function (e) {
          var t = Ne(e),
            r = t == m ? e.constructor : void 0,
            n = r ? $e(r) : "";
          if (n)
            switch (n) {
              case ye:
                return j;
              case ve:
                return g;
              case me:
                return w;
              case we:
                return E;
              case _e:
                return I;
            }
          return t;
        });
      var qe = Te(
          (function () {
            return arguments;
          })(),
        )
          ? Te
          : function (e) {
              return We(e) && Z.call(e, "callee") && !ie.call(e, "callee");
            },
        Ve = Array.isArray,
        He =
          ce ||
          function () {
            return !1;
          };
      function Be(e) {
        if (!Ke(e)) return !1;
        var t = Ne(e);
        return t == f || t == d || t == u || t == _;
      }
      function Fe(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
      }
      function Ke(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function We(e) {
        return null != e && "object" == typeof e;
      }
      var Ge = $
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })($)
        : function (e) {
            return We(e) && Fe(e.length) && !!T[Ne(e)];
          };
      function Je(e) {
        return null != (t = e) && Fe(t.length) && !Be(t)
          ? (function (e, t) {
              var r = Ve(e),
                n = !r && qe(e),
                i = !r && !n && He(e),
                s = !r && !n && !i && Ge(e),
                o = r || n || i || s,
                a = o
                  ? (function (e, t) {
                      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                      return n;
                    })(e.length, String)
                  : [],
                c = a.length;
              for (var u in e)
                (!t && !Z.call(e, u)) ||
                  (o &&
                    ("length" == u ||
                      (i && ("offset" == u || "parent" == u)) ||
                      (s &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      Me(u, c))) ||
                  a.push(u);
              return a;
            })(e)
          : (function (e) {
              if (
                ((r = (t = e) && t.constructor),
                t !== (("function" == typeof r && r.prototype) || G))
              )
                return ue(e);
              var t,
                r,
                n = [];
              for (var i in Object(e))
                Z.call(e, i) && "constructor" != i && n.push(i);
              return n;
            })(e);
        var t;
      }
      e.exports = function (e, t) {
        return Ae(e, t);
      };
    },
    5346: (e) => {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, n) {
        var i = (n && n.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = new Array(s);
          o[0] = i(e);
          for (var a = 1; a < s; a++) o[a] = i(r[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var u = "", l = 0, h = -1, p = (e && e.length) || 0, f = 0;
          f < p;

        ) {
          if (37 === e.charCodeAt(f) && f + 1 < p) {
            switch (((h = h > -1 ? h : 0), e.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (l >= c) break;
                if (null == r[l]) break;
                h < f && (u += e.slice(h, f)),
                  (u += Number(r[l])),
                  (h = f + 2),
                  f++;
                break;
              case 105:
                if (l >= c) break;
                if (null == r[l]) break;
                h < f && (u += e.slice(h, f)),
                  (u += Math.floor(Number(r[l]))),
                  (h = f + 2),
                  f++;
                break;
              case 79:
              case 111:
              case 106:
                if (l >= c) break;
                if (void 0 === r[l]) break;
                h < f && (u += e.slice(h, f));
                var d = typeof r[l];
                if ("string" === d) {
                  (u += "'" + r[l] + "'"), (h = f + 2), f++;
                  break;
                }
                if ("function" === d) {
                  (u += r[l].name || "<anonymous>"), (h = f + 2), f++;
                  break;
                }
                (u += i(r[l])), (h = f + 2), f++;
                break;
              case 115:
                if (l >= c) break;
                h < f && (u += e.slice(h, f)),
                  (u += String(r[l])),
                  (h = f + 2),
                  f++;
                break;
              case 37:
                h < f && (u += e.slice(h, f)),
                  (u += "%"),
                  (h = f + 2),
                  f++,
                  l--;
            }
            ++l;
          }
          ++f;
        }
        return -1 === h ? e : (h < p && (u += e.slice(h)), u);
      };
    },
    3954: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonParse = function (e) {
          if ("string" != typeof e)
            throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch (t) {
            return e;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, (e, t) => (void 0 === t ? null : t));
        });
    },
    7026: (e) => {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object",
        );
      };
    },
    6559: (e, t, r) => {
      "use strict";
      const n = r(5346);
      e.exports = o;
      const i =
          (function () {
            function e(e) {
              return void 0 !== e && e;
            }
            try {
              return (
                "undefined" != typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        s = {
          mapHttpRequest: p,
          mapHttpResponse: p,
          wrapRequestSerializer: f,
          wrapResponseSerializer: f,
          wrapErrorSerializer: f,
          req: p,
          res: p,
          err: function (e) {
            const t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (const r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        };
      function o(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && "function" != typeof t.send)
          throw Error("pino: transmit option must have a send function");
        const r = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        const n = e.serializers || {},
          s = (function (e, t) {
            return Array.isArray(e)
              ? e.filter(function (e) {
                  return "!stdSerializers.err" !== e;
                })
              : !0 === e && Object.keys(t);
          })(e.browser.serialize, n);
        let p = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (p = !1),
          "function" == typeof r &&
            (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === e.enabled && (e.level = "silent");
        const f = e.level || "info",
          g = Object.create(r);
        g.log || (g.log = d),
          Object.defineProperty(g, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(g, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                a(y, g, "error", "log"),
                a(y, g, "fatal", "error"),
                a(y, g, "warn", "error"),
                a(y, g, "info", "log"),
                a(y, g, "debug", "log"),
                a(y, g, "trace", "log");
            },
          });
        const y = {
          transmit: t,
          serialize: s,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: h(e),
        };
        return (
          (g.levels = o.levels),
          (g.level = f),
          (g.setMaxListeners =
            g.getMaxListeners =
            g.emit =
            g.addListener =
            g.on =
            g.prependListener =
            g.once =
            g.prependOnceListener =
            g.removeListener =
            g.removeAllListeners =
            g.listeners =
            g.listenerCount =
            g.eventNames =
            g.write =
            g.flush =
              d),
          (g.serializers = n),
          (g._serialize = s),
          (g._stdErrSerialize = p),
          (g.child = function (r, i) {
            if (!r) throw new Error("missing bindings for child Pino");
            (i = i || {}),
              s && r.serializers && (i.serializers = r.serializers);
            const o = i.serializers;
            if (s && o) {
              var a = Object.assign({}, n, o),
                h = !0 === e.browser.serialize ? Object.keys(a) : s;
              delete r.serializers, c([r], h, a, this._stdErrSerialize);
            }
            function p(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = u(e, r, "error")),
                (this.fatal = u(e, r, "fatal")),
                (this.warn = u(e, r, "warn")),
                (this.info = u(e, r, "info")),
                (this.debug = u(e, r, "debug")),
                (this.trace = u(e, r, "trace")),
                a && ((this.serializers = a), (this._serialize = h)),
                t && (this._logEvent = l([].concat(e._logEvent.bindings, r)));
            }
            return (p.prototype = this), new p(this);
          }),
          t && (g._logEvent = l()),
          g
        );
      }
      function a(e, t, r, s) {
        const a = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? d
            : a[r]
            ? a[r]
            : i[r] || i[s] || d),
          (function (e, t, r) {
            var s;
            (e.transmit || t[r] !== d) &&
              (t[r] =
                ((s = t[r]),
                function () {
                  const a = e.timestamp(),
                    u = new Array(arguments.length),
                    h =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                        ? i
                        : this;
                  for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      c(
                        u,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize,
                      ),
                    e.asObject
                      ? s.call(
                          h,
                          (function (e, t, r, i) {
                            e._serialize &&
                              c(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize,
                              );
                            const s = r.slice();
                            let a = s[0];
                            const u = {};
                            i && (u.time = i), (u.level = o.levels.values[t]);
                            let l = 1 + (0 | e._childLevel);
                            if (
                              (l < 1 && (l = 1),
                              null !== a && "object" == typeof a)
                            ) {
                              for (; l-- && "object" == typeof s[0]; )
                                Object.assign(u, s.shift());
                              a = s.length ? n(s.shift(), s) : void 0;
                            } else
                              "string" == typeof a && (a = n(s.shift(), s));
                            return void 0 !== a && (u.msg = a), u;
                          })(this, r, u, a),
                        )
                      : s.apply(h, u),
                    e.transmit)
                  ) {
                    const n = e.transmit.level || t.level,
                      i = o.levels.values[n],
                      s = o.levels.values[r];
                    if (s < i) return;
                    !(function (e, t, r) {
                      const n = t.send,
                        i = t.ts,
                        s = t.methodLevel,
                        o = t.methodValue,
                        a = t.val,
                        u = e._logEvent.bindings;
                      c(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize,
                      ),
                        (e._logEvent.ts = i),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === u.indexOf(e);
                        })),
                        (e._logEvent.level.label = s),
                        (e._logEvent.level.value = o),
                        n(s, e._logEvent, a),
                        (e._logEvent = l(u));
                    })(
                      this,
                      {
                        ts: a,
                        methodLevel: r,
                        methodValue: s,
                        transmitLevel: n,
                        transmitValue:
                          o.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      u,
                    );
                  }
                }));
          })(e, t, r);
      }
      function c(e, t, r, n) {
        for (const i in e)
          if (n && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
          else if ("object" == typeof e[i] && !Array.isArray(e[i]))
            for (const n in e[i])
              t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
      }
      function u(e, t, r) {
        return function () {
          const n = new Array(1 + arguments.length);
          n[0] = t;
          for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
          return e[r].apply(this, n);
        };
      }
      function l(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function h(e) {
        return "function" == typeof e.timestamp
          ? e.timestamp
          : !1 === e.timestamp
          ? g
          : y;
      }
      function p() {
        return {};
      }
      function f(e) {
        return e;
      }
      function d() {}
      function g() {
        return !1;
      }
      function y() {
        return Date.now();
      }
      (o.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: g,
            epochTime: y,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          },
        ));
    },
  },
]);
//# sourceMappingURL=766.index.js.map
