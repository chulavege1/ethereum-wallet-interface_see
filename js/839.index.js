(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [839],
  {
    5905: (t, e, r) => {
      const o = r(9414),
        n = r(9474),
        a = r(164),
        i = r(4672);
      function l(t, e, r, a, i) {
        const l = [].slice.call(arguments, 1),
          c = l.length,
          s = "function" == typeof l[c - 1];
        if (!s && !o()) throw new Error("Callback required as last argument");
        if (!s) {
          if (c < 1) throw new Error("Too few arguments provided");
          return (
            1 === c
              ? ((r = e), (e = a = void 0))
              : 2 !== c || e.getContext || ((a = r), (r = e), (e = void 0)),
            new Promise(function (o, i) {
              try {
                const i = n.create(r, a);
                o(t(i, e, a));
              } catch (t) {
                i(t);
              }
            })
          );
        }
        if (c < 2) throw new Error("Too few arguments provided");
        2 === c
          ? ((i = r), (r = e), (e = a = void 0))
          : 3 === c &&
            (e.getContext && void 0 === i
              ? ((i = a), (a = void 0))
              : ((i = a), (a = r), (r = e), (e = void 0)));
        try {
          const o = n.create(r, a);
          i(null, t(o, e, a));
        } catch (t) {
          i(t);
        }
      }
      (e.create = n.create),
        (e.toCanvas = l.bind(null, a.render)),
        (e.toDataURL = l.bind(null, a.renderToDataURL)),
        (e.toString = l.bind(null, function (t, e, r) {
          return i.render(t, r);
        }));
    },
    9414: (t) => {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    7634: (t, e, r) => {
      const o = r(8292).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        const e = Math.floor(t / 7) + 2,
          r = o(t),
          n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
          a = [r - 7];
        for (let t = 1; t < e - 1; t++) a[t] = a[t - 1] - n;
        return a.push(6), a.reverse();
      }),
        (e.getPositions = function (t) {
          const r = [],
            o = e.getRowColCoords(t),
            n = o.length;
          for (let t = 0; t < n; t++)
            for (let e = 0; e < n; e++)
              (0 === t && 0 === e) ||
                (0 === t && e === n - 1) ||
                (t === n - 1 && 0 === e) ||
                r.push([o[t], o[e]]);
          return r;
        });
    },
    6044: (t, e, r) => {
      const o = r(8555),
        n = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function a(t) {
        (this.mode = o.ALPHANUMERIC), (this.data = t);
      }
      (a.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (a.prototype.getLength = function () {
          return this.data.length;
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length);
        }),
        (a.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let r = 45 * n.indexOf(this.data[e]);
            (r += n.indexOf(this.data[e + 1])), t.put(r, 11);
          }
          this.data.length % 2 && t.put(n.indexOf(this.data[e]), 6);
        }),
        (t.exports = a);
    },
    6745: (t) => {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          const e = Math.floor(t / 8);
          return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
        },
        put: function (t, e) {
          for (let r = 0; r < e; r++)
            this.putBit(1 == ((t >>> (e - r - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          const e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    2648: (t) => {
      function e(t) {
        if (!t || t < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, r, o) {
        const n = t * this.size + e;
        (this.data[n] = r), o && (this.reservedBit[n] = !0);
      }),
        (e.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (e.prototype.xor = function (t, e, r) {
          this.data[t * this.size + e] ^= r;
        }),
        (e.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = e);
    },
    2488: (t, e, r) => {
      const o = r(2378),
        n = r(8555);
      function a(t) {
        (this.mode = n.BYTE),
          "string" == typeof t && (t = o(t)),
          (this.data = new Uint8Array(t));
      }
      (a.getBitsLength = function (t) {
        return 8 * t;
      }),
        (a.prototype.getLength = function () {
          return this.data.length;
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length);
        }),
        (a.prototype.write = function (t) {
          for (let e = 0, r = this.data.length; e < r; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = a);
    },
    5427: (t, e, r) => {
      const o = r(1141),
        n = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        a = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case o.L:
            return n[4 * (t - 1) + 0];
          case o.M:
            return n[4 * (t - 1) + 1];
          case o.Q:
            return n[4 * (t - 1) + 2];
          case o.H:
            return n[4 * (t - 1) + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case o.L:
              return a[4 * (t - 1) + 0];
            case o.M:
              return a[4 * (t - 1) + 1];
            case o.Q:
              return a[4 * (t - 1) + 2];
            case o.H:
              return a[4 * (t - 1) + 3];
            default:
              return;
          }
        });
    },
    1141: (t, e) => {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw new Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    2825: (t, e, r) => {
      const o = r(8292).getSymbolSize;
      e.getPositions = function (t) {
        const e = o(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    1110: (t, e, r) => {
      const o = r(8292),
        n = o.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        const r = (t.bit << 3) | e;
        let a = r << 10;
        for (; o.getBCHDigit(a) - n >= 0; ) a ^= 1335 << (o.getBCHDigit(a) - n);
        return 21522 ^ ((r << 10) | a);
      };
    },
    379: (t, e) => {
      const r = new Uint8Array(512),
        o = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++)
          (r[e] = t), (o[t] = e), (t <<= 1), 256 & t && (t ^= 285);
        for (let t = 255; t < 512; t++) r[t] = r[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw new Error("log(" + t + ")");
          return o[t];
        }),
        (e.exp = function (t) {
          return r[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : r[o[t] + o[e]];
        });
    },
    818: (t, e, r) => {
      const o = r(8555),
        n = r(8292);
      function a(t) {
        (this.mode = o.KANJI), (this.data = t);
      }
      (a.getBitsLength = function (t) {
        return 13 * t;
      }),
        (a.prototype.getLength = function () {
          return this.data.length;
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length);
        }),
        (a.prototype.write = function (t) {
          let e;
          for (e = 0; e < this.data.length; e++) {
            let r = n.toSJIS(this.data[e]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else {
              if (!(r >= 57408 && r <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[e] +
                    "\nMake sure your charset is UTF-8",
                );
              r -= 49472;
            }
            (r = 192 * ((r >>> 8) & 255) + (255 & r)), t.put(r, 13);
          }
        }),
        (t.exports = a);
    },
    4042: (t, e) => {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      function r(t, r, o) {
        switch (t) {
          case e.Patterns.PATTERN000:
            return (r + o) % 2 == 0;
          case e.Patterns.PATTERN001:
            return r % 2 == 0;
          case e.Patterns.PATTERN010:
            return o % 3 == 0;
          case e.Patterns.PATTERN011:
            return (r + o) % 3 == 0;
          case e.Patterns.PATTERN100:
            return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 == 0;
          case e.Patterns.PATTERN101:
            return ((r * o) % 2) + ((r * o) % 3) == 0;
          case e.Patterns.PATTERN110:
            return (((r * o) % 2) + ((r * o) % 3)) % 2 == 0;
          case e.Patterns.PATTERN111:
            return (((r * o) % 3) + ((r + o) % 2)) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + t);
        }
      }
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          const e = t.size;
          let r = 0,
            o = 0,
            n = 0,
            a = null,
            i = null;
          for (let l = 0; l < e; l++) {
            (o = n = 0), (a = i = null);
            for (let c = 0; c < e; c++) {
              let e = t.get(l, c);
              e === a ? o++ : (o >= 5 && (r += o - 5 + 3), (a = e), (o = 1)),
                (e = t.get(c, l)),
                e === i ? n++ : (n >= 5 && (r += n - 5 + 3), (i = e), (n = 1));
            }
            o >= 5 && (r += o - 5 + 3), n >= 5 && (r += n - 5 + 3);
          }
          return r;
        }),
        (e.getPenaltyN2 = function (t) {
          const e = t.size;
          let r = 0;
          for (let o = 0; o < e - 1; o++)
            for (let n = 0; n < e - 1; n++) {
              const e =
                t.get(o, n) +
                t.get(o, n + 1) +
                t.get(o + 1, n) +
                t.get(o + 1, n + 1);
              (4 !== e && 0 !== e) || r++;
            }
          return 3 * r;
        }),
        (e.getPenaltyN3 = function (t) {
          const e = t.size;
          let r = 0,
            o = 0,
            n = 0;
          for (let a = 0; a < e; a++) {
            o = n = 0;
            for (let i = 0; i < e; i++)
              (o = ((o << 1) & 2047) | t.get(a, i)),
                i >= 10 && (1488 === o || 93 === o) && r++,
                (n = ((n << 1) & 2047) | t.get(i, a)),
                i >= 10 && (1488 === n || 93 === n) && r++;
          }
          return 40 * r;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0;
          const r = t.data.length;
          for (let o = 0; o < r; o++) e += t.data[o];
          return 10 * Math.abs(Math.ceil((100 * e) / r / 5) - 10);
        }),
        (e.applyMask = function (t, e) {
          const o = e.size;
          for (let n = 0; n < o; n++)
            for (let a = 0; a < o; a++)
              e.isReserved(a, n) || e.xor(a, n, r(t, a, n));
        }),
        (e.getBestMask = function (t, r) {
          const o = Object.keys(e.Patterns).length;
          let n = 0,
            a = 1 / 0;
          for (let i = 0; i < o; i++) {
            r(i), e.applyMask(i, t);
            const o =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(i, t), o < a && ((a = o), (n = i));
          }
          return n;
        });
    },
    8555: (t, e, r) => {
      const o = r(6459),
        n = r(5920);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw new Error("Invalid mode: " + t);
          if (!o.isValid(e)) throw new Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return n.testNumeric(t)
            ? e.NUMERIC
            : n.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : n.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw new Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t)
                throw new Error("Param is not a string");
              switch (t.toLowerCase()) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw new Error("Unknown mode: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    3787: (t, e, r) => {
      const o = r(8555);
      function n(t) {
        (this.mode = o.NUMERIC), (this.data = t.toString());
      }
      (n.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e, r, o;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (r = this.data.substr(e, 3)), (o = parseInt(r, 10)), t.put(o, 10);
          const n = this.data.length - e;
          n > 0 &&
            ((r = this.data.substr(e)),
            (o = parseInt(r, 10)),
            t.put(o, 3 * n + 1));
        }),
        (t.exports = n);
    },
    2805: (t, e, r) => {
      const o = r(379);
      (e.mul = function (t, e) {
        const r = new Uint8Array(t.length + e.length - 1);
        for (let n = 0; n < t.length; n++)
          for (let a = 0; a < e.length; a++) r[n + a] ^= o.mul(t[n], e[a]);
        return r;
      }),
        (e.mod = function (t, e) {
          let r = new Uint8Array(t);
          for (; r.length - e.length >= 0; ) {
            const t = r[0];
            for (let n = 0; n < e.length; n++) r[n] ^= o.mul(e[n], t);
            let n = 0;
            for (; n < r.length && 0 === r[n]; ) n++;
            r = r.slice(n);
          }
          return r;
        }),
        (e.generateECPolynomial = function (t) {
          let r = new Uint8Array([1]);
          for (let n = 0; n < t; n++)
            r = e.mul(r, new Uint8Array([1, o.exp(n)]));
          return r;
        });
    },
    9474: (t, e, r) => {
      const o = r(8292),
        n = r(1141),
        a = r(6745),
        i = r(2648),
        l = r(7634),
        c = r(2825),
        s = r(4042),
        d = r(5427),
        m = r(1629),
        h = r(3541),
        g = r(1110),
        u = r(8555),
        w = r(4332);
      function p(t, e, r) {
        const o = t.size,
          n = g.getEncodedBits(e, r);
        let a, i;
        for (a = 0; a < 15; a++)
          (i = 1 == ((n >> a) & 1)),
            a < 6
              ? t.set(a, 8, i, !0)
              : a < 8
              ? t.set(a + 1, 8, i, !0)
              : t.set(o - 15 + a, 8, i, !0),
            a < 8
              ? t.set(8, o - a - 1, i, !0)
              : a < 9
              ? t.set(8, 15 - a - 1 + 1, i, !0)
              : t.set(8, 15 - a - 1, i, !0);
        t.set(o - 8, 8, 1, !0);
      }
      function f(t, e, r, n) {
        let g;
        if (Array.isArray(t)) g = w.fromArray(t);
        else {
          if ("string" != typeof t) throw new Error("Invalid data");
          {
            let o = e;
            if (!o) {
              const e = w.rawSplit(t);
              o = h.getBestVersionForData(e, r);
            }
            g = w.fromString(t, o || 40);
          }
        }
        const f = h.getBestVersionForData(g, r);
        if (!f)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code",
          );
        if (e) {
          if (e < f)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                f +
                ".\n",
            );
        } else e = f;
        const v = (function (t, e, r) {
            const n = new a();
            r.forEach(function (e) {
              n.put(e.mode.bit, 4),
                n.put(e.getLength(), u.getCharCountIndicator(e.mode, t)),
                e.write(n);
            });
            const i =
              8 *
              (o.getSymbolTotalCodewords(t) - d.getTotalCodewordsCount(t, e));
            for (
              n.getLengthInBits() + 4 <= i && n.put(0, 4);
              n.getLengthInBits() % 8 != 0;

            )
              n.putBit(0);
            const l = (i - n.getLengthInBits()) / 8;
            for (let t = 0; t < l; t++) n.put(t % 2 ? 17 : 236, 8);
            return (function (t, e, r) {
              const n = o.getSymbolTotalCodewords(e),
                a = n - d.getTotalCodewordsCount(e, r),
                i = d.getBlocksCount(e, r),
                l = i - (n % i),
                c = Math.floor(n / i),
                s = Math.floor(a / i),
                h = s + 1,
                g = c - s,
                u = new m(g);
              let w = 0;
              const p = new Array(i),
                f = new Array(i);
              let v = 0;
              const b = new Uint8Array(t.buffer);
              for (let t = 0; t < i; t++) {
                const e = t < l ? s : h;
                (p[t] = b.slice(w, w + e)),
                  (f[t] = u.encode(p[t])),
                  (w += e),
                  (v = Math.max(v, e));
              }
              const x = new Uint8Array(n);
              let y,
                C,
                E = 0;
              for (y = 0; y < v; y++)
                for (C = 0; C < i; C++) y < p[C].length && (x[E++] = p[C][y]);
              for (y = 0; y < g; y++) for (C = 0; C < i; C++) x[E++] = f[C][y];
              return x;
            })(n, t, e);
          })(e, r, g),
          b = o.getSymbolSize(e),
          x = new i(b);
        return (
          (function (t, e) {
            const r = t.size,
              o = c.getPositions(e);
            for (let e = 0; e < o.length; e++) {
              const n = o[e][0],
                a = o[e][1];
              for (let e = -1; e <= 7; e++)
                if (!(n + e <= -1 || r <= n + e))
                  for (let o = -1; o <= 7; o++)
                    a + o <= -1 ||
                      r <= a + o ||
                      ((e >= 0 && e <= 6 && (0 === o || 6 === o)) ||
                      (o >= 0 && o <= 6 && (0 === e || 6 === e)) ||
                      (e >= 2 && e <= 4 && o >= 2 && o <= 4)
                        ? t.set(n + e, a + o, !0, !0)
                        : t.set(n + e, a + o, !1, !0));
            }
          })(x, e),
          (function (t) {
            const e = t.size;
            for (let r = 8; r < e - 8; r++) {
              const e = r % 2 == 0;
              t.set(r, 6, e, !0), t.set(6, r, e, !0);
            }
          })(x),
          (function (t, e) {
            const r = l.getPositions(e);
            for (let e = 0; e < r.length; e++) {
              const o = r[e][0],
                n = r[e][1];
              for (let e = -2; e <= 2; e++)
                for (let r = -2; r <= 2; r++)
                  -2 === e ||
                  2 === e ||
                  -2 === r ||
                  2 === r ||
                  (0 === e && 0 === r)
                    ? t.set(o + e, n + r, !0, !0)
                    : t.set(o + e, n + r, !1, !0);
            }
          })(x, e),
          p(x, r, 0),
          e >= 7 &&
            (function (t, e) {
              const r = t.size,
                o = h.getEncodedBits(e);
              let n, a, i;
              for (let e = 0; e < 18; e++)
                (n = Math.floor(e / 3)),
                  (a = (e % 3) + r - 8 - 3),
                  (i = 1 == ((o >> e) & 1)),
                  t.set(n, a, i, !0),
                  t.set(a, n, i, !0);
            })(x, e),
          (function (t, e) {
            const r = t.size;
            let o = -1,
              n = r - 1,
              a = 7,
              i = 0;
            for (let l = r - 1; l > 0; l -= 2)
              for (6 === l && l--; ; ) {
                for (let r = 0; r < 2; r++)
                  if (!t.isReserved(n, l - r)) {
                    let o = !1;
                    i < e.length && (o = 1 == ((e[i] >>> a) & 1)),
                      t.set(n, l - r, o),
                      a--,
                      -1 === a && (i++, (a = 7));
                  }
                if (((n += o), n < 0 || r <= n)) {
                  (n -= o), (o = -o);
                  break;
                }
              }
          })(x, v),
          isNaN(n) && (n = s.getBestMask(x, p.bind(null, x, r))),
          s.applyMask(n, x),
          p(x, r, n),
          {
            modules: x,
            version: e,
            errorCorrectionLevel: r,
            maskPattern: n,
            segments: g,
          }
        );
      }
      e.create = function (t, e) {
        if (void 0 === t || "" === t) throw new Error("No input text");
        let r,
          a,
          i = n.M;
        return (
          void 0 !== e &&
            ((i = n.from(e.errorCorrectionLevel, n.M)),
            (r = h.from(e.version)),
            (a = s.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          f(t, r, i, a)
        );
      };
    },
    1629: (t, e, r) => {
      const o = r(2805);
      function n(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (n.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (n.prototype.encode = function (t) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          const e = new Uint8Array(t.length + this.degree);
          e.set(t);
          const r = o.mod(e, this.genPoly),
            n = this.degree - r.length;
          if (n > 0) {
            const t = new Uint8Array(this.degree);
            return t.set(r, n), t;
          }
          return r;
        }),
        (t.exports = n);
    },
    5920: (t, e) => {
      const r = "[0-9]+";
      let o =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      o = o.replace(/u/g, "\\u");
      const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + o + ")(?:.|[\r\n]))+";
      (e.KANJI = new RegExp(o, "g")),
        (e.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = new RegExp(n, "g")),
        (e.NUMERIC = new RegExp(r, "g")),
        (e.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      const a = new RegExp("^" + o + "$"),
        i = new RegExp("^" + r + "$"),
        l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return a.test(t);
      }),
        (e.testNumeric = function (t) {
          return i.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return l.test(t);
        });
    },
    4332: (t, e, r) => {
      const o = r(8555),
        n = r(3787),
        a = r(6044),
        i = r(2488),
        l = r(818),
        c = r(5920),
        s = r(8292),
        d = r(5987);
      function m(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function h(t, e, r) {
        const o = [];
        let n;
        for (; null !== (n = t.exec(r)); )
          o.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
        return o;
      }
      function g(t) {
        const e = h(c.NUMERIC, o.NUMERIC, t),
          r = h(c.ALPHANUMERIC, o.ALPHANUMERIC, t);
        let n, a;
        return (
          s.isKanjiModeEnabled()
            ? ((n = h(c.BYTE, o.BYTE, t)), (a = h(c.KANJI, o.KANJI, t)))
            : ((n = h(c.BYTE_KANJI, o.BYTE, t)), (a = [])),
          e
            .concat(r, n, a)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function u(t, e) {
        switch (e) {
          case o.NUMERIC:
            return n.getBitsLength(t);
          case o.ALPHANUMERIC:
            return a.getBitsLength(t);
          case o.KANJI:
            return l.getBitsLength(t);
          case o.BYTE:
            return i.getBitsLength(t);
        }
      }
      function w(t, e) {
        let r;
        const c = o.getBestModeForData(t);
        if (((r = o.from(e, c)), r !== o.BYTE && r.bit < c.bit))
          throw new Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              o.toString(r) +
              ".\n Suggested mode is: " +
              o.toString(c),
          );
        switch ((r !== o.KANJI || s.isKanjiModeEnabled() || (r = o.BYTE), r)) {
          case o.NUMERIC:
            return new n(t);
          case o.ALPHANUMERIC:
            return new a(t);
          case o.KANJI:
            return new l(t);
          case o.BYTE:
            return new i(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(w(e, null))
              : e.data && t.push(w(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, r) {
          const n = (function (t) {
              const e = [];
              for (let r = 0; r < t.length; r++) {
                const n = t[r];
                switch (n.mode) {
                  case o.NUMERIC:
                    e.push([
                      n,
                      { data: n.data, mode: o.ALPHANUMERIC, length: n.length },
                      { data: n.data, mode: o.BYTE, length: n.length },
                    ]);
                    break;
                  case o.ALPHANUMERIC:
                    e.push([
                      n,
                      { data: n.data, mode: o.BYTE, length: n.length },
                    ]);
                    break;
                  case o.KANJI:
                    e.push([
                      n,
                      { data: n.data, mode: o.BYTE, length: m(n.data) },
                    ]);
                    break;
                  case o.BYTE:
                    e.push([{ data: n.data, mode: o.BYTE, length: m(n.data) }]);
                }
              }
              return e;
            })(g(t, s.isKanjiModeEnabled())),
            a = (function (t, e) {
              const r = {},
                n = { start: {} };
              let a = ["start"];
              for (let i = 0; i < t.length; i++) {
                const l = t[i],
                  c = [];
                for (let t = 0; t < l.length; t++) {
                  const s = l[t],
                    d = "" + i + t;
                  c.push(d), (r[d] = { node: s, lastCount: 0 }), (n[d] = {});
                  for (let t = 0; t < a.length; t++) {
                    const i = a[t];
                    r[i] && r[i].node.mode === s.mode
                      ? ((n[i][d] =
                          u(r[i].lastCount + s.length, s.mode) -
                          u(r[i].lastCount, s.mode)),
                        (r[i].lastCount += s.length))
                      : (r[i] && (r[i].lastCount = s.length),
                        (n[i][d] =
                          u(s.length, s.mode) +
                          4 +
                          o.getCharCountIndicator(s.mode, e)));
                  }
                }
                a = c;
              }
              for (let t = 0; t < a.length; t++) n[a[t]].end = 0;
              return { map: n, table: r };
            })(n, r),
            i = d.find_path(a.map, "start", "end"),
            l = [];
          for (let t = 1; t < i.length - 1; t++) l.push(a.table[i[t]].node);
          return e.fromArray(
            l.reduce(function (t, e) {
              const r = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return r && r.mode === e.mode
                ? ((t[t.length - 1].data += e.data), t)
                : (t.push(e), t);
            }, []),
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(g(t, s.isKanjiModeEnabled()));
        });
    },
    8292: (t, e) => {
      let r;
      const o = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (e.getSymbolSize = function (t) {
        if (!t) throw new Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return o[t];
        }),
        (e.getBCHDigit = function (t) {
          let e = 0;
          for (; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" != typeof t)
            throw new Error('"toSJISFunc" is not a valid function.');
          r = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (e.toSJIS = function (t) {
          return r(t);
        });
    },
    6459: (t, e) => {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    3541: (t, e, r) => {
      const o = r(8292),
        n = r(5427),
        a = r(1141),
        i = r(8555),
        l = r(6459),
        c = o.getBCHDigit(7973);
      function s(t, e) {
        return i.getCharCountIndicator(t, e) + 4;
      }
      function d(t, e) {
        let r = 0;
        return (
          t.forEach(function (t) {
            const o = s(t.mode, e);
            r += o + t.getBitsLength();
          }),
          r
        );
      }
      (e.from = function (t, e) {
        return l.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, r) {
          if (!l.isValid(t)) throw new Error("Invalid QR Code version");
          void 0 === r && (r = i.BYTE);
          const a =
            8 * (o.getSymbolTotalCodewords(t) - n.getTotalCodewordsCount(t, e));
          if (r === i.MIXED) return a;
          const c = a - s(r, t);
          switch (r) {
            case i.NUMERIC:
              return Math.floor((c / 10) * 3);
            case i.ALPHANUMERIC:
              return Math.floor((c / 11) * 2);
            case i.KANJI:
              return Math.floor(c / 13);
            case i.BYTE:
            default:
              return Math.floor(c / 8);
          }
        }),
        (e.getBestVersionForData = function (t, r) {
          let o;
          const n = a.from(r, a.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, r) {
                for (let o = 1; o <= 40; o++)
                  if (d(t, o) <= e.getCapacity(o, r, i.MIXED)) return o;
              })(t, n);
            if (0 === t.length) return 1;
            o = t[0];
          } else o = t;
          return (function (t, r, o) {
            for (let n = 1; n <= 40; n++)
              if (r <= e.getCapacity(n, o, t)) return n;
          })(o.mode, o.getLength(), n);
        }),
        (e.getEncodedBits = function (t) {
          if (!l.isValid(t) || t < 7)
            throw new Error("Invalid QR Code version");
          let e = t << 12;
          for (; o.getBCHDigit(e) - c >= 0; )
            e ^= 7973 << (o.getBCHDigit(e) - c);
          return (t << 12) | e;
        });
    },
    164: (t, e, r) => {
      const o = r(2287);
      (e.render = function (t, e, r) {
        let n = r,
          a = e;
        void 0 !== n || (e && e.getContext) || ((n = e), (e = void 0)),
          e ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (n = o.getOptions(n));
        const i = o.getImageWidth(t.modules.size, n),
          l = a.getContext("2d"),
          c = l.createImageData(i, i);
        return (
          o.qrToImageData(c.data, t, n),
          (function (t, e, r) {
            t.clearRect(0, 0, e.width, e.height),
              e.style || (e.style = {}),
              (e.height = r),
              (e.width = r),
              (e.style.height = r + "px"),
              (e.style.width = r + "px");
          })(l, a, i),
          l.putImageData(c, 0, 0),
          a
        );
      }),
        (e.renderToDataURL = function (t, r, o) {
          let n = o;
          void 0 !== n || (r && r.getContext) || ((n = r), (r = void 0)),
            n || (n = {});
          const a = e.render(t, r, n),
            i = n.type || "image/png",
            l = n.rendererOpts || {};
          return a.toDataURL(i, l.quality);
        });
    },
    4672: (t, e, r) => {
      const o = r(2287);
      function n(t, e) {
        const r = t.a / 255,
          o = e + '="' + t.hex + '"';
        return r < 1
          ? o + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : o;
      }
      function a(t, e, r) {
        let o = t + e;
        return void 0 !== r && (o += " " + r), o;
      }
      e.render = function (t, e, r) {
        const i = o.getOptions(e),
          l = t.modules.size,
          c = t.modules.data,
          s = l + 2 * i.margin,
          d = i.color.light.a
            ? "<path " +
              n(i.color.light, "fill") +
              ' d="M0 0h' +
              s +
              "v" +
              s +
              'H0z"/>'
            : "",
          m =
            "<path " +
            n(i.color.dark, "stroke") +
            ' d="' +
            (function (t, e, r) {
              let o = "",
                n = 0,
                i = !1,
                l = 0;
              for (let c = 0; c < t.length; c++) {
                const s = Math.floor(c % e),
                  d = Math.floor(c / e);
                s || i || (i = !0),
                  t[c]
                    ? (l++,
                      (c > 0 && s > 0 && t[c - 1]) ||
                        ((o += i ? a("M", s + r, 0.5 + d + r) : a("m", n, 0)),
                        (n = 0),
                        (i = !1)),
                      (s + 1 < e && t[c + 1]) || ((o += a("h", l)), (l = 0)))
                    : n++;
              }
              return o;
            })(c, l, i.margin) +
            '"/>',
          h = 'viewBox="0 0 ' + s + " " + s + '"',
          g =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (i.width
              ? 'width="' + i.width + '" height="' + i.width + '" '
              : "") +
            h +
            ' shape-rendering="crispEdges">' +
            d +
            m +
            "</svg>\n";
        return "function" == typeof r && r(null, g), g;
      };
    },
    2287: (t, e) => {
      function r(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw new Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw new Error("Invalid hex color: " + t);
        (3 !== e.length && 4 !== e.length) ||
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            }),
          )),
          6 === e.length && e.push("F", "F");
        const r = parseInt(e.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        const e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          o = t.width && t.width >= 21 ? t.width : void 0,
          n = t.scale || 4;
        return {
          width: o,
          scale: o ? 4 : n,
          margin: e,
          color: {
            dark: r(t.color.dark || "#000000ff"),
            light: r(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, r) {
          const o = e.getScale(t, r);
          return Math.floor((t + 2 * r.margin) * o);
        }),
        (e.qrToImageData = function (t, r, o) {
          const n = r.modules.size,
            a = r.modules.data,
            i = e.getScale(n, o),
            l = Math.floor((n + 2 * o.margin) * i),
            c = o.margin * i,
            s = [o.color.light, o.color.dark];
          for (let e = 0; e < l; e++)
            for (let r = 0; r < l; r++) {
              let d = 4 * (e * l + r),
                m = o.color.light;
              e >= c &&
                r >= c &&
                e < l - c &&
                r < l - c &&
                (m =
                  s[
                    a[Math.floor((e - c) / i) * n + Math.floor((r - c) / i)]
                      ? 1
                      : 0
                  ]),
                (t[d++] = m.r),
                (t[d++] = m.g),
                (t[d++] = m.b),
                (t[d] = m.a);
            }
        });
    },
    4839: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { WcmModal: () => te, WcmQrCode: () => lt }), r(7898);
      var o = r(3692),
        n = r(8922),
        a = r(5713),
        i = r(9662),
        l = r(9158),
        c = (r(7935), r(43), r(3057)),
        s = r(8448),
        d = r(4213),
        m = r(577),
        h = r(5905),
        g = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        f = (t, e, r) =>
          e in t
            ? g(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        v = (t, e) => {
          for (var r in e || (e = {})) w.call(e, r) && f(t, r, e[r]);
          if (u) for (var r of u(e)) p.call(e, r) && f(t, r, e[r]);
          return t;
        };
      const b = {
          getPreset: (t) =>
            ({
              "--wcm-accent-color": "#3396FF",
              "--wcm-accent-fill-color": "#FFFFFF",
              "--wcm-z-index": "89",
              "--wcm-background-color": "#3396FF",
              "--wcm-background-border-radius": "8px",
              "--wcm-container-border-radius": "30px",
              "--wcm-wallet-icon-border-radius": "15px",
              "--wcm-wallet-icon-large-border-radius": "30px",
              "--wcm-wallet-icon-small-border-radius": "7px",
              "--wcm-input-border-radius": "28px",
              "--wcm-button-border-radius": "10px",
              "--wcm-notification-border-radius": "36px",
              "--wcm-secondary-button-border-radius": "28px",
              "--wcm-icon-button-border-radius": "50%",
              "--wcm-button-hover-highlight-border-radius": "10px",
              "--wcm-text-big-bold-size": "20px",
              "--wcm-text-big-bold-weight": "600",
              "--wcm-text-big-bold-line-height": "24px",
              "--wcm-text-big-bold-letter-spacing": "-0.03em",
              "--wcm-text-big-bold-text-transform": "none",
              "--wcm-text-xsmall-bold-size": "10px",
              "--wcm-text-xsmall-bold-weight": "700",
              "--wcm-text-xsmall-bold-line-height": "12px",
              "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
              "--wcm-text-xsmall-bold-text-transform": "uppercase",
              "--wcm-text-xsmall-regular-size": "12px",
              "--wcm-text-xsmall-regular-weight": "600",
              "--wcm-text-xsmall-regular-line-height": "14px",
              "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
              "--wcm-text-xsmall-regular-text-transform": "none",
              "--wcm-text-small-thin-size": "14px",
              "--wcm-text-small-thin-weight": "500",
              "--wcm-text-small-thin-line-height": "16px",
              "--wcm-text-small-thin-letter-spacing": "-0.03em",
              "--wcm-text-small-thin-text-transform": "none",
              "--wcm-text-small-regular-size": "14px",
              "--wcm-text-small-regular-weight": "600",
              "--wcm-text-small-regular-line-height": "16px",
              "--wcm-text-small-regular-letter-spacing": "-0.03em",
              "--wcm-text-small-regular-text-transform": "none",
              "--wcm-text-medium-regular-size": "16px",
              "--wcm-text-medium-regular-weight": "600",
              "--wcm-text-medium-regular-line-height": "20px",
              "--wcm-text-medium-regular-letter-spacing": "-0.03em",
              "--wcm-text-medium-regular-text-transform": "none",
              "--wcm-font-family":
                "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
              "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
              "--wcm-success-color": "rgb(38,181,98)",
              "--wcm-error-color": "rgb(242, 90, 103)",
              "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
              "--wcm-overlay-backdrop-filter": "none",
            })[t],
          setTheme() {
            const t = document.querySelector(":root"),
              { themeVariables: e } = s.ThemeCtrl.state;
            if (t) {
              const r = v(
                v(
                  v(
                    {},
                    (function () {
                      var t;
                      const e = {
                        light: {
                          foreground: {
                            1: "rgb(20,20,20)",
                            2: "rgb(121,134,134)",
                            3: "rgb(158,169,169)",
                          },
                          background: {
                            1: "rgb(255,255,255)",
                            2: "rgb(241,243,243)",
                            3: "rgb(228,231,231)",
                          },
                          overlay: "rgba(0,0,0,0.1)",
                        },
                        dark: {
                          foreground: {
                            1: "rgb(228,231,231)",
                            2: "rgb(148,158,158)",
                            3: "rgb(110,119,119)",
                          },
                          background: {
                            1: "rgb(20,20,20)",
                            2: "rgb(39,42,42)",
                            3: "rgb(59,64,64)",
                          },
                          overlay: "rgba(255,255,255,0.1)",
                        },
                      }[null != (t = s.ThemeCtrl.state.themeMode) ? t : "dark"];
                      return {
                        "--wcm-color-fg-1": e.foreground[1],
                        "--wcm-color-fg-2": e.foreground[2],
                        "--wcm-color-fg-3": e.foreground[3],
                        "--wcm-color-bg-1": e.background[1],
                        "--wcm-color-bg-2": e.background[2],
                        "--wcm-color-bg-3": e.background[3],
                        "--wcm-color-overlay": e.overlay,
                      };
                    })(),
                  ),
                  {
                    "--wcm-accent-color": "#3396FF",
                    "--wcm-accent-fill-color": "#FFFFFF",
                    "--wcm-z-index": "89",
                    "--wcm-background-color": "#3396FF",
                    "--wcm-background-border-radius": "8px",
                    "--wcm-container-border-radius": "30px",
                    "--wcm-wallet-icon-border-radius": "15px",
                    "--wcm-wallet-icon-large-border-radius": "30px",
                    "--wcm-wallet-icon-small-border-radius": "7px",
                    "--wcm-input-border-radius": "28px",
                    "--wcm-button-border-radius": "10px",
                    "--wcm-notification-border-radius": "36px",
                    "--wcm-secondary-button-border-radius": "28px",
                    "--wcm-icon-button-border-radius": "50%",
                    "--wcm-button-hover-highlight-border-radius": "10px",
                    "--wcm-text-big-bold-size": "20px",
                    "--wcm-text-big-bold-weight": "600",
                    "--wcm-text-big-bold-line-height": "24px",
                    "--wcm-text-big-bold-letter-spacing": "-0.03em",
                    "--wcm-text-big-bold-text-transform": "none",
                    "--wcm-text-xsmall-bold-size": "10px",
                    "--wcm-text-xsmall-bold-weight": "700",
                    "--wcm-text-xsmall-bold-line-height": "12px",
                    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
                    "--wcm-text-xsmall-bold-text-transform": "uppercase",
                    "--wcm-text-xsmall-regular-size": "12px",
                    "--wcm-text-xsmall-regular-weight": "600",
                    "--wcm-text-xsmall-regular-line-height": "14px",
                    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--wcm-text-xsmall-regular-text-transform": "none",
                    "--wcm-text-small-thin-size": "14px",
                    "--wcm-text-small-thin-weight": "500",
                    "--wcm-text-small-thin-line-height": "16px",
                    "--wcm-text-small-thin-letter-spacing": "-0.03em",
                    "--wcm-text-small-thin-text-transform": "none",
                    "--wcm-text-small-regular-size": "14px",
                    "--wcm-text-small-regular-weight": "600",
                    "--wcm-text-small-regular-line-height": "16px",
                    "--wcm-text-small-regular-letter-spacing": "-0.03em",
                    "--wcm-text-small-regular-text-transform": "none",
                    "--wcm-text-medium-regular-size": "16px",
                    "--wcm-text-medium-regular-weight": "600",
                    "--wcm-text-medium-regular-line-height": "20px",
                    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
                    "--wcm-text-medium-regular-text-transform": "none",
                    "--wcm-font-family":
                      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--wcm-font-feature-settings":
                      "'tnum' on, 'lnum' on, 'case' on",
                    "--wcm-success-color": "rgb(38,181,98)",
                    "--wcm-error-color": "rgb(242, 90, 103)",
                    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
                    "--wcm-overlay-backdrop-filter": "none",
                  },
                ),
                e,
              );
              Object.entries(r).forEach(([e, r]) => t.style.setProperty(e, r));
            }
          },
          globalCss: n.iv`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
        },
        x = n.iv`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
      var y = Object.defineProperty,
        C = Object.getOwnPropertyDescriptor,
        E = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? C(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && y(e, r, a), a;
        };
      let k = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          const t = {
            "wcm-icon-left": void 0 !== this.iconLeft,
            "wcm-icon-right": void 0 !== this.iconRight,
            "wcm-ghost": "ghost" === this.variant,
            "wcm-outline": "outline" === this.variant,
          };
          let e = "inverse";
          return (
            "ghost" === this.variant && (e = "secondary"),
            "outline" === this.variant && (e = "accent"),
            n.dy`<button class="${(0, c.$)(t)}" ?disabled="${
              this.disabled
            }" @click="${this.onClick}">${
              this.iconLeft
            }<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (k.styles = [b.globalCss, x]),
        E([(0, i.C)({ type: Boolean })], k.prototype, "disabled", 2),
        E([(0, i.C)()], k.prototype, "iconLeft", 2),
        E([(0, i.C)()], k.prototype, "iconRight", 2),
        E([(0, i.C)()], k.prototype, "onClick", 2),
        E([(0, i.C)()], k.prototype, "variant", 2),
        (k = E([(0, a.M)("wcm-button")], k));
      const I = n.iv`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
      var O = Object.defineProperty,
        M = Object.getOwnPropertyDescriptor,
        A = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? M(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && O(e, r, a), a;
        };
      let $ = class extends n.oi {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          const t = { "wcm-secondary": "secondary" === this.variant };
          return n.dy`<button ?disabled="${this.disabled}" class="${(0, c.$)(
            t,
          )}"><slot></slot></button>`;
        }
      };
      ($.styles = [b.globalCss, I]),
        A([(0, i.C)({ type: Boolean })], $.prototype, "disabled", 2),
        A([(0, i.C)()], $.prototype, "variant", 2),
        ($ = A([(0, a.M)("wcm-button-big")], $));
      const P = n.iv`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let T = class extends n.oi {
        render() {
          return n.dy`<div><slot></slot></div>`;
        }
      };
      (T.styles = [b.globalCss, P]),
        (T = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-info-footer")], T));
      const R = {
          CROSS_ICON: o.YP`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: o.YP`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: o.YP`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: o.YP`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: o.YP`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: o.YP`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: o.YP`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: o.YP`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: o.YP`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: o.YP`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: o.YP`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: o.YP`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: o.YP`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: o.YP`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: o.YP`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          SEARCH_ICON: o.YP`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          WALLET_PLACEHOLDER: o.YP`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          GLOBE_ICON: o.YP`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        L = n.iv`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let N = class extends n.oi {
        render() {
          return n.dy`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${R.WALLET_CONNECT_LOGO} <button @click="${s.jb.close}">${R.CROSS_ICON}</button></div>`;
        }
      };
      (N.styles = [b.globalCss, L]),
        (N = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-backcard")], N));
      const B = n.iv`main{padding:20px;padding-top:0;width:100%}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let W = class extends n.oi {
        render() {
          return n.dy`<main><slot></slot></main>`;
        }
      };
      (W.styles = [b.globalCss, B]),
        (W = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-content")], W));
      const j = n.iv`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let D = class extends n.oi {
        render() {
          return n.dy`<footer><slot></slot></footer>`;
        }
      };
      (D.styles = [b.globalCss, j]),
        (D = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-modal-footer")], D));
      const S = n.iv`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
      var z = Object.defineProperty,
        _ = Object.getOwnPropertyDescriptor,
        U = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? _(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && z(e, r, a), a;
        };
      let H = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return n.dy`<button class="wcm-back-btn" @click="${s.AV.goBack}">${R.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return n.dy`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          const t = { "wcm-border": this.border },
            e = s.AV.state.history.length > 1,
            r = this.title
              ? n.dy`<wcm-text variant="big-bold">${this.title}</wcm-text>`
              : n.dy`<slot></slot>`;
          return n.dy`<header class="${(0, c.$)(t)}">${
            e ? this.backBtnTemplate() : null
          } ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (H.styles = [b.globalCss, S]),
        U([(0, i.C)()], H.prototype, "title", 2),
        U([(0, i.C)()], H.prototype, "onAction", 2),
        U([(0, i.C)()], H.prototype, "actionIcon", 2),
        U([(0, i.C)({ type: Boolean })], H.prototype, "border", 2),
        (H = U([(0, a.M)("wcm-modal-header")], H));
      const Z = {
          MOBILE_BREAKPOINT: 600,
          WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          getShadowRootElement(t, e) {
            const r = t.renderRoot.querySelector(e);
            if (!r) throw new Error(`${e} not found`);
            return r;
          },
          getWalletIcon({ id: t, image_id: e }) {
            const { walletImages: r } = s.ConfigCtrl.state;
            return null != r && r[t]
              ? r[t]
              : e
              ? s.ExplorerCtrl.getWalletImageUrl(e)
              : "";
          },
          getWalletName: (t, e = !1) => (e ? t.split(" ")[0] : t),
          isMobileAnimation: () => window.innerWidth <= Z.MOBILE_BREAKPOINT,
          async preloadImage(t) {
            const e = new Promise((e, r) => {
              const o = new Image();
              (o.onload = e), (o.onerror = r), (o.src = t);
            });
            return Promise.race([e, s.zv.wait(3e3)]);
          },
          getErrorMessage: (t) =>
            t instanceof Error ? t.message : "Unknown Error",
          debounce(t, e = 500) {
            let r;
            return (...o) => {
              r && clearTimeout(r),
                (r = setTimeout(function () {
                  t(...o);
                }, e));
            };
          },
          handleMobileLinking(t) {
            const { walletConnectUri: e } = s.OptionsCtrl.state,
              { mobile: r, name: o } = t,
              n = r?.native,
              a = r?.universal;
            Z.setRecentWallet(t),
              e &&
                (function (t) {
                  let e = "";
                  n
                    ? (e = s.zv.formatUniversalUrl(n, t, o))
                    : a && (e = s.zv.formatNativeUrl(a, t, o)),
                    s.zv.openHref(e, "_self");
                })(e);
          },
          handleAndroidLinking() {
            const { walletConnectUri: t } = s.OptionsCtrl.state;
            t &&
              (s.zv.setWalletConnectAndroidDeepLink(t),
              s.zv.openHref(t, "_self"));
          },
          async handleUriCopy() {
            const { walletConnectUri: t } = s.OptionsCtrl.state;
            if (t)
              try {
                await navigator.clipboard.writeText(t),
                  s.ToastCtrl.openToast("Link copied", "success");
              } catch {
                s.ToastCtrl.openToast("Failed to copy", "error");
              }
          },
          getCustomImageUrls() {
            const { walletImages: t } = s.ConfigCtrl.state,
              e = Object.values(t ?? {});
            return Object.values(e);
          },
          truncate: (t, e = 8) =>
            t.length <= e
              ? t
              : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`,
          setRecentWallet(t) {
            try {
              localStorage.setItem(Z.WCM_RECENT_WALLET_DATA, JSON.stringify(t));
            } catch {
              console.info("Unable to set recent wallet");
            }
          },
          getRecentWallet() {
            try {
              const t = localStorage.getItem(Z.WCM_RECENT_WALLET_DATA);
              return t ? JSON.parse(t) : void 0;
            } catch {
              console.info("Unable to get recent wallet");
            }
          },
          caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
          openWalletExplorerUrl() {
            s.zv.openHref(Z.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            const { desktop: t, mobile: e } = s.zv.getWalletRouterData(),
              r = Boolean(t?.native),
              o = Boolean(t?.universal);
            return {
              isDesktop: r,
              isMobile: Boolean(e?.native) || Boolean(e?.universal),
              isWeb: o,
            };
          },
          goToConnectingView(t) {
            s.AV.setData({ Wallet: t });
            const e = s.zv.isMobile(),
              {
                isDesktop: r,
                isWeb: o,
                isMobile: n,
              } = Z.getCachedRouterWalletPlatforms();
            e
              ? n
                ? s.AV.push("MobileConnecting")
                : o
                ? s.AV.push("WebConnecting")
                : s.AV.push("InstallWallet")
              : r
              ? s.AV.push("DesktopConnecting")
              : o
              ? s.AV.push("WebConnecting")
              : n
              ? s.AV.push("MobileQrcodeConnecting")
              : s.AV.push("InstallWallet");
          },
        },
        F = n.iv`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
      var V = Object.defineProperty,
        Y = Object.getOwnPropertyDescriptor,
        K = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Y(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && V(e, r, a), a;
        };
      let q = class extends n.oi {
        constructor() {
          super(),
            (this.view = s.AV.state.view),
            (this.prevView = s.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = s.AV.subscribe((t) => {
              this.view !== t.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([t]) => {
            const e = `${t.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              (0, d.j)(
                this.routerEl,
                { height: [this.oldHeight, e] },
                { duration: 0.2 },
              ),
              (this.oldHeight = e);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var t, e;
          null == (t = this.unsubscribe) || t.call(this),
            null == (e = this.resizeObserver) || e.disconnect();
        }
        get routerEl() {
          return Z.getShadowRootElement(this, ".wcm-router");
        }
        get contentEl() {
          return Z.getShadowRootElement(this, ".wcm-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return n.dy`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
            case "DesktopConnecting":
              return n.dy`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
            case "MobileConnecting":
              return n.dy`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
            case "WebConnecting":
              return n.dy`<wcm-web-connecting-view></wcm-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return n.dy`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
            case "WalletExplorer":
              return n.dy`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
            case "Qrcode":
              return n.dy`<wcm-qrcode-view></wcm-qrcode-view>`;
            case "InstallWallet":
              return n.dy`<wcm-install-wallet-view></wcm-install-wallet-view>`;
            default:
              return n.dy`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await (0, d.j)(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 },
          ).finished,
            (this.view = s.AV.state.view),
            (0, d.j)(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 },
            );
        }
        render() {
          return n.dy`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (q.styles = [b.globalCss, F]),
        K([(0, l.S)()], q.prototype, "view", 2),
        K([(0, l.S)()], q.prototype, "prevView", 2),
        (q = K([(0, a.M)("wcm-modal-router")], q));
      const J = n.iv`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
      var Q = Object.defineProperty,
        G = Object.getOwnPropertyDescriptor,
        X = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? G(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Q(e, r, a), a;
        };
      let tt = class extends n.oi {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = s.ToastCtrl.subscribe((t) => {
              t.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => s.ToastCtrl.closeToast(),
                    2200,
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribe) || t.call(this),
            clearTimeout(this.timeout),
            s.ToastCtrl.closeToast();
        }
        render() {
          const { message: t, variant: e } = s.ToastCtrl.state,
            r = { "wcm-success": "success" === e, "wcm-error": "error" === e };
          return this.open
            ? n.dy`<div class="${(0, c.$)(r)}">${
                "success" === e ? R.CHECKMARK_ICON : null
              } ${
                "error" === e ? R.CROSS_ICON : null
              }<wcm-text variant="small-regular">${t}</wcm-text></div>`
            : null;
        }
      };
      function et(t, e, r) {
        return t !== e && (t - e < 0 ? e - t : t - e) <= r + 0.1;
      }
      (tt.styles = [b.globalCss, J]),
        X([(0, l.S)()], tt.prototype, "open", 2),
        (tt = X([(0, a.M)("wcm-modal-toast")], tt));
      const rt = {
          generate(t, e, r) {
            const o = "#141414",
              a = [],
              i = (function (t, e) {
                const r = Array.prototype.slice.call(
                    h.create(t, { errorCorrectionLevel: "Q" }).modules.data,
                    0,
                  ),
                  o = Math.sqrt(r.length);
                return r.reduce(
                  (t, e, r) =>
                    (r % o == 0 ? t.push([e]) : t[t.length - 1].push(e)) && t,
                  [],
                );
              })(t),
              l = e / i.length,
              c = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            c.forEach(({ x: t, y: e }) => {
              const r = (i.length - 7) * l * t,
                s = (i.length - 7) * l * e;
              for (let t = 0; t < c.length; t += 1) {
                const e = l * (7 - 2 * t);
                a.push(
                  n.YP`<rect fill="${
                    t % 2 == 0 ? o : "#ffffff"
                  }" height="${e}" rx="${0.45 * e}" ry="${
                    0.45 * e
                  }" width="${e}" x="${r + l * t}" y="${s + l * t}">`,
                );
              }
            });
            const s = Math.floor((r + 25) / l),
              d = i.length / 2 - s / 2,
              m = i.length / 2 + s / 2 - 1,
              g = [];
            i.forEach((t, e) => {
              t.forEach((t, r) => {
                if (
                  i[e][r] &&
                  !(
                    (e < 7 && r < 7) ||
                    (e > i.length - 8 && r < 7) ||
                    (e < 7 && r > i.length - 8)
                  ) &&
                  !(e > d && e < m && r > d && r < m)
                ) {
                  const t = e * l + l / 2,
                    o = r * l + l / 2;
                  g.push([t, o]);
                }
              });
            });
            const u = {};
            return (
              g.forEach(([t, e]) => {
                u[t] ? u[t].push(e) : (u[t] = [e]);
              }),
              Object.entries(u)
                .map(([t, e]) => {
                  const r = e.filter((t) => e.every((e) => !et(t, e, l)));
                  return [Number(t), r];
                })
                .forEach(([t, e]) => {
                  e.forEach((e) => {
                    a.push(
                      n.YP`<circle cx="${t}" cy="${e}" fill="${o}" r="${
                        l / 2.5
                      }">`,
                    );
                  });
                }),
              Object.entries(u)
                .filter(([t, e]) => e.length > 1)
                .map(([t, e]) => {
                  const r = e.filter((t) => e.some((e) => et(t, e, l)));
                  return [Number(t), r];
                })
                .map(([t, e]) => {
                  e.sort((t, e) => (t < e ? -1 : 1));
                  const r = [];
                  for (const t of e) {
                    const e = r.find((e) => e.some((e) => et(t, e, l)));
                    e ? e.push(t) : r.push([t]);
                  }
                  return [t, r.map((t) => [t[0], t[t.length - 1]])];
                })
                .forEach(([t, e]) => {
                  e.forEach(([e, r]) => {
                    a.push(
                      n.YP`<line x1="${t}" x2="${t}" y1="${e}" y2="${r}" stroke="${o}" stroke-width="${
                        l / 1.25
                      }" stroke-linecap="round">`,
                    );
                  });
                }),
              a
            );
          },
        },
        ot = n.iv`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
      var nt = Object.defineProperty,
        at = Object.getOwnPropertyDescriptor,
        it = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? at(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && nt(e, r, a), a;
        };
      let lt = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          const t =
            "light" === s.ThemeCtrl.state.themeMode
              ? this.size
              : this.size - 36;
          return n.YP`<svg height="${t}" width="${t}">${rt.generate(
            this.uri,
            t,
            t / 4,
          )}</svg>`;
        }
        render() {
          const t = { "wcm-dark": "dark" === s.ThemeCtrl.state.themeMode };
          return n.dy`<div style="${`width: ${this.size}px`}" class="${(0, c.$)(
            t,
          )}">${
            this.walletId || this.imageUrl
              ? n.dy`<wcm-wallet-image walletId="${(0, m.o)(
                  this.walletId,
                )}" imageId="${(0, m.o)(this.imageId)}" imageUrl="${(0, m.o)(
                  this.imageUrl,
                )}"></wcm-wallet-image>`
              : R.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}</div>`;
        }
      };
      (lt.styles = [b.globalCss, ot]),
        it([(0, i.C)()], lt.prototype, "uri", 2),
        it([(0, i.C)({ type: Number })], lt.prototype, "size", 2),
        it([(0, i.C)()], lt.prototype, "imageId", 2),
        it([(0, i.C)()], lt.prototype, "walletId", 2),
        it([(0, i.C)()], lt.prototype, "imageUrl", 2),
        (lt = it([(0, a.M)("wcm-qrcode")], lt));
      const ct = n.iv`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
      var st = Object.defineProperty,
        dt = Object.getOwnPropertyDescriptor,
        mt = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? dt(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && st(e, r, a), a;
        };
      let ht = class extends n.oi {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return n.dy`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${R.SEARCH_ICON}`;
        }
      };
      (ht.styles = [b.globalCss, ct]),
        mt([(0, i.C)()], ht.prototype, "onChange", 2),
        (ht = mt([(0, a.M)("wcm-search-input")], ht));
      const gt = n.iv`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let ut = class extends n.oi {
        render() {
          return n.dy`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (ut.styles = [b.globalCss, gt]),
        (ut = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-spinner")], ut));
      const wt = n.iv`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
      var pt = Object.defineProperty,
        ft = Object.getOwnPropertyDescriptor,
        vt = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? ft(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && pt(e, r, a), a;
        };
      let bt = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          const t = {
            "wcm-big-bold": "big-bold" === this.variant,
            "wcm-medium-regular": "medium-regular" === this.variant,
            "wcm-small-regular": "small-regular" === this.variant,
            "wcm-small-thin": "small-thin" === this.variant,
            "wcm-xsmall-regular": "xsmall-regular" === this.variant,
            "wcm-xsmall-bold": "xsmall-bold" === this.variant,
            "wcm-color-primary": "primary" === this.color,
            "wcm-color-secondary": "secondary" === this.color,
            "wcm-color-tertiary": "tertiary" === this.color,
            "wcm-color-inverse": "inverse" === this.color,
            "wcm-color-accnt": "accent" === this.color,
            "wcm-color-error": "error" === this.color,
          };
          return n.dy`<span><slot class="${(0, c.$)(t)}"></slot></span>`;
        }
      };
      (bt.styles = [b.globalCss, wt]),
        vt([(0, i.C)()], bt.prototype, "variant", 2),
        vt([(0, i.C)()], bt.prototype, "color", 2),
        (bt = vt([(0, a.M)("wcm-text")], bt));
      const xt = n.iv`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
      var yt = Object.defineProperty,
        Ct = Object.getOwnPropertyDescriptor,
        Et = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Ct(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && yt(e, r, a), a;
        };
      let kt = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? n.dy`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
            : this.installed
            ? n.dy`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
            : null;
        }
        handleClick() {
          s.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var t;
          return n.dy`<button @click="${this.handleClick.bind(
            this,
          )}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${(0,
          m.o)(
            this.imageId,
          )}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${
            null != (t = this.label) ? t : Z.getWalletName(this.name, !0)
          }</wcm-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (kt.styles = [b.globalCss, xt]),
        Et([(0, i.C)()], kt.prototype, "onClick", 2),
        Et([(0, i.C)()], kt.prototype, "name", 2),
        Et([(0, i.C)()], kt.prototype, "walletId", 2),
        Et([(0, i.C)()], kt.prototype, "label", 2),
        Et([(0, i.C)()], kt.prototype, "imageId", 2),
        Et([(0, i.C)({ type: Boolean })], kt.prototype, "installed", 2),
        Et([(0, i.C)({ type: Boolean })], kt.prototype, "recent", 2),
        (kt = Et([(0, a.M)("wcm-wallet-button")], kt));
      const It = n.iv`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var Ot = Object.defineProperty,
        Mt = Object.getOwnPropertyDescriptor,
        At = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Mt(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Ot(e, r, a), a;
        };
      let $t = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var t;
          const e =
            null != (t = this.imageUrl) && t.length
              ? this.imageUrl
              : Z.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return n.dy`${
            e.length
              ? n.dy`<div><img src="${e}" alt="${this.id}"></div>`
              : R.WALLET_PLACEHOLDER
          }`;
        }
      };
      ($t.styles = [b.globalCss, It]),
        At([(0, i.C)()], $t.prototype, "walletId", 2),
        At([(0, i.C)()], $t.prototype, "imageId", 2),
        At([(0, i.C)()], $t.prototype, "imageUrl", 2),
        ($t = At([(0, a.M)("wcm-wallet-image")], $t));
      var Pt = Object.defineProperty,
        Tt = Object.getOwnPropertyDescriptor,
        Rt = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Tt(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Pt(e, r, a), a;
        };
      let Lt = class extends n.oi {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(t) {
          try {
            null != t &&
              t.length &&
              (await Promise.all(t.map(async (t) => Z.preloadImage(t))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images", t);
          }
        }
        async preloadListings() {
          if (s.ConfigCtrl.state.enableExplorer) {
            await s.ExplorerCtrl.getRecomendedWallets(),
              s.OptionsCtrl.setIsDataLoaded(!0);
            const { recomendedWallets: t } = s.ExplorerCtrl.state,
              e = t.map((t) => Z.getWalletIcon(t));
            await this.loadImages(e);
          } else s.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          const t = Z.getCustomImageUrls();
          await this.loadImages(t);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (t) {
            console.error(t),
              s.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      Rt([(0, l.S)()], Lt.prototype, "preload", 2),
        (Lt = Rt([(0, a.M)("wcm-explorer-context")], Lt));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Nt = class extends n.oi {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            b.setTheme(),
            (this.unsubscribeTheme = s.ThemeCtrl.subscribe(b.setTheme));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeTheme) || t.call(this);
        }
      };
      Nt = ((t, e, r, o) => {
        for (var n, a = e, i = t.length - 1; i >= 0; i--)
          (n = t[i]) && (a = n(a) || a);
        return a;
      })([(0, a.M)("wcm-theme-context")], Nt);
      const Bt = n.iv`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Wt = class extends n.oi {
        onGoToQrcode() {
          s.AV.push("Qrcode");
        }
        render() {
          const { recomendedWallets: t } = s.ExplorerCtrl.state,
            e = [...t, ...t],
            r = 2 * s.zv.RECOMMENDED_WALLET_AMOUNT;
          return n.dy`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            R.QRCODE_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${
            R.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
            ...Array(r),
          ].map((t, r) => {
            const o = e[r % e.length];
            return o
              ? n.dy`<wcm-wallet-image walletId="${o.id}" imageId="${o.image_id}"></wcm-wallet-image>`
              : R.WALLET_PLACEHOLDER;
          })}</div><wcm-button-big @click="${
            Z.handleAndroidLinking
          }"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
        }
      };
      (Wt.styles = [b.globalCss, Bt]),
        (Wt = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-android-wallet-selection")], Wt));
      const jt = n.iv`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
      var Dt = Object.defineProperty,
        St = Object.getOwnPropertyDescriptor,
        zt = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? St(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Dt(e, r, a), a;
        };
      let _t = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var t, e;
          const r =
            null !=
            (e =
              null == (t = s.ThemeCtrl.state.themeVariables)
                ? void 0
                : t["--wcm-wallet-icon-large-border-radius"])
              ? e
              : b.getPreset("--wcm-wallet-icon-large-border-radius");
          let o = 0;
          (o = r.includes("%") ? 0.88 * parseInt(r, 10) : parseInt(r, 10)),
            (o *= 1.17);
          const a = 317 - 1.57 * o,
            i = 425 - 1.8 * o;
          return n.dy`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${a}" stroke-dashoffset="${i}"></use></svg>`;
        }
        render() {
          const t = { "wcm-error": this.isError, "wcm-stale": this.isStale };
          return n.dy`<div class="${(0, c.$)(
            t,
          )}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${(0, m.o)(
            this.walletId,
          )}" imageId="${(0, m.o)(
            this.imageId,
          )}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
        }
      };
      (_t.styles = [b.globalCss, jt]),
        zt([(0, i.C)()], _t.prototype, "walletId", 2),
        zt([(0, i.C)()], _t.prototype, "imageId", 2),
        zt([(0, i.C)({ type: Boolean })], _t.prototype, "isError", 2),
        zt([(0, i.C)({ type: Boolean })], _t.prototype, "isStale", 2),
        zt([(0, i.C)()], _t.prototype, "label", 2),
        (_t = zt([(0, a.M)("wcm-connector-waiting")], _t));
      const Ut = {
          manualWallets() {
            var t, e;
            const { mobileWallets: r, desktopWallets: o } = s.ConfigCtrl.state,
              n = null == (t = Ut.recentWallet()) ? void 0 : t.id,
              a = s.zv.isMobile() ? r : o,
              i = a?.filter((t) => n !== t.id);
            return null !=
              (e = s.zv.isMobile()
                ? i?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    mobile: r,
                    links: r,
                  }))
                : i?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    desktop: r,
                    links: r,
                  })))
              ? e
              : [];
          },
          recentWallet: () => Z.getRecentWallet(),
          recomendedWallets(t = !1) {
            var e;
            const r = t || null == (e = Ut.recentWallet()) ? void 0 : e.id,
              { recomendedWallets: o } = s.ExplorerCtrl.state;
            return o.filter((t) => r !== t.id);
          },
        },
        Ht = {
          onConnecting(t) {
            Z.goToConnectingView(t);
          },
          manualWalletsTemplate() {
            return Ut.manualWallets().map(
              (t) =>
                n.dy`<wcm-wallet-button walletId="${t.id}" name="${
                  t.name
                }" .onClick="${() =>
                  this.onConnecting(t)}"></wcm-wallet-button>`,
            );
          },
          recomendedWalletsTemplate(t = !1) {
            return Ut.recomendedWallets(t).map(
              (t) =>
                n.dy`<wcm-wallet-button name="${t.name}" walletId="${
                  t.id
                }" imageId="${t.image_id}" .onClick="${() =>
                  this.onConnecting(t)}"></wcm-wallet-button>`,
            );
          },
          recentWalletTemplate() {
            const t = Ut.recentWallet();
            if (t)
              return n.dy`<wcm-wallet-button name="${t.name}" walletId="${
                t.id
              }" imageId="${(0, m.o)(
                t.image_id,
              )}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(t)}"></wcm-wallet-button>`;
          },
        },
        Zt = n.iv`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Ft = class extends n.oi {
        render() {
          const { explorerExcludedWalletIds: t, enableExplorer: e } =
              s.ConfigCtrl.state,
            r = "ALL" !== t && e,
            o = Ht.manualWalletsTemplate(),
            a = Ht.recomendedWalletsTemplate();
          let i = [Ht.recentWalletTemplate(), ...o, ...a];
          i = i.filter(Boolean);
          const l = i.length > 4 || r;
          let c = [];
          c = l ? i.slice(0, 3) : i;
          const d = Boolean(c.length);
          return n.dy`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
            Z.handleUriCopy
          }" .actionIcon="${
            R.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${
            R.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${
            R.SCAN_ICON
          }<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${
            d
              ? n.dy`<wcm-modal-footer><div class="wcm-desktop-title">${
                  R.DESKTOP_ICON
                }<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${c} ${
                  l
                    ? n.dy`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-footer>`
              : null
          }`;
        }
      };
      (Ft.styles = [b.globalCss, Zt]),
        (Ft = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-desktop-wallet-selection")], Ft));
      const Vt = n.iv`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Yt = class extends n.oi {
        render() {
          const { termsOfServiceUrl: t, privacyPolicyUrl: e } =
            s.ConfigCtrl.state;
          return t ?? e
            ? n.dy`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                t
                  ? n.dy`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${t && e ? "and" : null} ${
                e
                  ? n.dy`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</wcm-text></div>`
            : null;
        }
      };
      (Yt.styles = [b.globalCss, Vt]),
        (Yt = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-legal-notice")], Yt));
      const Kt = n.iv`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let qt = class extends n.oi {
        onQrcode() {
          s.AV.push("Qrcode");
        }
        render() {
          const { explorerExcludedWalletIds: t, enableExplorer: e } =
              s.ConfigCtrl.state,
            r = "ALL" !== t && e,
            o = Ht.manualWalletsTemplate(),
            a = Ht.recomendedWalletsTemplate();
          let i = [Ht.recentWalletTemplate(), ...o, ...a];
          i = i.filter(Boolean);
          const l = i.length > 8 || r;
          let c = [];
          c = l ? i.slice(0, 7) : i;
          const d = Boolean(c.length);
          return n.dy`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onQrcode
          }" .actionIcon="${R.QRCODE_ICON}"></wcm-modal-header>${
            d
              ? n.dy`<wcm-modal-content><div>${c} ${
                  l
                    ? n.dy`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-content>`
              : null
          }`;
        }
      };
      (qt.styles = [b.globalCss, Kt]),
        (qt = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-mobile-wallet-selection")], qt));
      const Jt = n.iv`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
      var Qt = Object.defineProperty,
        Gt = Object.getOwnPropertyDescriptor,
        Xt = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Gt(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Qt(e, r, a), a;
        };
      let te = class extends n.oi {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = s.jb.subscribe((t) => {
              t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeModal) || t.call(this);
        }
        get overlayEl() {
          return Z.getShadowRootElement(this, ".wcm-overlay");
        }
        get containerEl() {
          return Z.getShadowRootElement(this, ".wcm-container");
        }
        toggleBodyScroll(t) {
          if (document.querySelector("body"))
            if (t) {
              const t = document.getElementById("wcm-styles");
              t?.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>',
              );
        }
        onCloseModal(t) {
          t.target === t.currentTarget && s.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              const t = Z.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                (0, d.j)(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 },
                ).finished,
                (0, d.j)(this.containerEl, t, { delay: 0.1, duration: 0.2 })
                  .finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          const t = Z.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            (0, d.j)(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 })
              .finished,
            (0, d.j)(this.containerEl, t, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (t) => {
                var e;
                "Escape" === t.key
                  ? s.jb.close()
                  : "Tab" === t.key &&
                    ((null != (e = t.target) && e.tagName.includes("wcm-")) ||
                      this.containerEl.focus());
              },
              this.abortController,
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var t;
          null == (t = this.abortController) || t.abort(),
            (this.abortController = void 0);
        }
        render() {
          const t = { "wcm-overlay": !0, "wcm-active": this.active };
          return n.dy`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${(0,
          c.$)(t)}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${
            this.open
              ? n.dy`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (te.styles = [b.globalCss, Jt]),
        Xt([(0, l.S)()], te.prototype, "open", 2),
        Xt([(0, l.S)()], te.prototype, "active", 2),
        (te = Xt([(0, a.M)("wcm-modal")], te));
      const ee = n.iv`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
      var re = Object.defineProperty,
        oe = Object.getOwnPropertyDescriptor,
        ne = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? oe(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && re(e, r, a), a;
        };
      let ae = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          s.zv.isMobile()
            ? s.AV.replace("MobileConnecting")
            : s.AV.replace("MobileQrcodeConnecting");
        }
        onDesktop() {
          s.AV.replace("DesktopConnecting");
        }
        onWeb() {
          s.AV.replace("WebConnecting");
        }
        render() {
          return n.dy`<div>${this.isRetry ? n.dy`<slot></slot>` : null} ${
            this.isMobile
              ? n.dy`<wcm-button .onClick="${this.onMobile}" .iconLeft="${R.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`
              : null
          } ${
            this.isDesktop
              ? n.dy`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${R.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`
              : null
          } ${
            this.isWeb
              ? n.dy`<wcm-button .onClick="${this.onWeb}" .iconLeft="${R.GLOBE_ICON}" variant="outline">Web</wcm-button>`
              : null
          }</div>`;
        }
      };
      (ae.styles = [b.globalCss, ee]),
        ne([(0, i.C)({ type: Boolean })], ae.prototype, "isMobile", 2),
        ne([(0, i.C)({ type: Boolean })], ae.prototype, "isDesktop", 2),
        ne([(0, i.C)({ type: Boolean })], ae.prototype, "isWeb", 2),
        ne([(0, i.C)({ type: Boolean })], ae.prototype, "isRetry", 2),
        (ae = ne([(0, a.M)("wcm-platform-selection")], ae));
      const ie = n.iv`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let le = class extends n.oi {
        onClick() {
          s.AV.push("WalletExplorer");
        }
        render() {
          const { recomendedWallets: t } = s.ExplorerCtrl.state,
            e = [...t, ...Ut.manualWallets()].reverse().slice(0, 4);
          return n.dy`<button @click="${
            this.onClick
          }"><div class="wcm-icons">${e.map((t) => {
            const e = Z.getWalletIcon(t);
            if (e) return n.dy`<img src="${e}">`;
            const r = Z.getWalletIcon({ id: t.id });
            return r ? n.dy`<img src="${r}">` : R.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - e.length)].map(
            () => R.WALLET_PLACEHOLDER,
          )}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
        }
      };
      (le.styles = [b.globalCss, ie]),
        (le = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-view-all-wallets-button")], le));
      const ce = n.iv`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var se = Object.defineProperty,
        de = Object.getOwnPropertyDescriptor,
        me = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? de(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && se(e, r, a), a;
        };
      let he = class extends n.oi {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            setTimeout(() => {
              const { walletConnectUri: t } = s.OptionsCtrl.state;
              this.uri = t;
            }, 0);
        }
        get overlayEl() {
          return Z.getShadowRootElement(this, ".wcm-qr-container");
        }
        render() {
          return n.dy`<div class="wcm-qr-container">${
            this.uri
              ? n.dy`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${
                  this.uri
                }" walletId="${(0, m.o)(this.walletId)}" imageId="${(0, m.o)(
                  this.imageId,
                )}"></wcm-qrcode>`
              : n.dy`<wcm-spinner></wcm-spinner>`
          }</div>`;
        }
      };
      (he.styles = [b.globalCss, ce]),
        me([(0, i.C)()], he.prototype, "walletId", 2),
        me([(0, i.C)()], he.prototype, "imageId", 2),
        me([(0, l.S)()], he.prototype, "uri", 2),
        (he = me([(0, a.M)("wcm-walletconnect-qr")], he));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let ge = class extends n.oi {
        viewTemplate() {
          return s.zv.isAndroid()
            ? n.dy`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
            : s.zv.isMobile()
            ? n.dy`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
            : n.dy`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
        }
        render() {
          return n.dy`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
        }
      };
      (ge.styles = [b.globalCss]),
        (ge = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-connect-wallet-view")], ge));
      const ue = n.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var we = Object.defineProperty,
        pe = Object.getOwnPropertyDescriptor,
        fe = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? pe(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && we(e, r, a), a;
        };
      let ve = class extends n.oi {
        constructor() {
          super(), (this.isError = !1), this.openDesktopApp();
        }
        onFormatAndRedirect(t) {
          const { desktop: e, name: r } = s.zv.getWalletRouterData(),
            o = e?.native;
          if (o) {
            const e = s.zv.formatNativeUrl(o, t, r);
            s.zv.openHref(e, "_self");
          }
        }
        openDesktopApp() {
          const { walletConnectUri: t } = s.OptionsCtrl.state,
            e = s.zv.getWalletRouterData();
          Z.setRecentWallet(e), t && this.onFormatAndRedirect(t);
        }
        render() {
          const { name: t, id: e, image_id: r } = s.zv.getWalletRouterData(),
            { isMobile: o, isWeb: a } = Z.getCachedRouterWalletPlatforms();
          return n.dy`<wcm-modal-header title="${t}" .onAction="${
            Z.handleUriCopy
          }" .actionIcon="${
            R.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${(0,
          m.o)(r)}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${a}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(
            this,
          )}" .iconRight="${
            R.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (ve.styles = [b.globalCss, ue]),
        fe([(0, l.S)()], ve.prototype, "isError", 2),
        (ve = fe([(0, a.M)("wcm-desktop-connecting-view")], ve));
      const be = n.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let xe = class extends n.oi {
        onInstall(t) {
          t && s.zv.openHref(t, "_blank");
        }
        render() {
          const {
            name: t,
            id: e,
            image_id: r,
            homepage: o,
          } = s.zv.getWalletRouterData();
          return n.dy`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${(0,
          m.o)(
            r,
          )}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${() =>
            this.onInstall(o)}" .iconLeft="${
            R.ARROW_DOWN_ICON
          }">Download</wcm-button></wcm-info-footer>`;
        }
      };
      (xe.styles = [b.globalCss, be]),
        (xe = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-install-wallet-view")], xe));
      const ye = n.iv`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
      var Ce = Object.defineProperty,
        Ee = Object.getOwnPropertyDescriptor,
        ke = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Ee(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Ce(e, r, a), a;
        };
      let Ie = class extends n.oi {
        constructor() {
          super(), (this.isError = !1), this.openMobileApp();
        }
        onFormatAndRedirect(t, e = !1) {
          const { mobile: r, name: o } = s.zv.getWalletRouterData(),
            n = r?.native,
            a = r?.universal;
          if (n && !e) {
            const e = s.zv.formatNativeUrl(n, t, o);
            s.zv.openHref(e, "_self");
          } else if (a) {
            const e = s.zv.formatUniversalUrl(a, t, o);
            s.zv.openHref(e, "_self");
          }
        }
        openMobileApp(t = !1) {
          const { walletConnectUri: e } = s.OptionsCtrl.state,
            r = s.zv.getWalletRouterData();
          Z.setRecentWallet(r), e && this.onFormatAndRedirect(e, t);
        }
        onGoToAppStore(t) {
          t && s.zv.openHref(t, "_blank");
        }
        render() {
          const {
              name: t,
              id: e,
              image_id: r,
              app: o,
              mobile: a,
            } = s.zv.getWalletRouterData(),
            { isWeb: i } = Z.getCachedRouterWalletPlatforms(),
            l = o?.ios,
            c = a?.universal;
          return n.dy`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${(0,
          m.o)(r)}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            R.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection>${
            c
              ? n.dy`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
                  this.openMobileApp(
                    !0,
                  )}">Try this alternate link</span></wcm-text>`
              : null
          }</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${(0,
          m.o)(
            r,
          )}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${
            R.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              l,
            )}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
        }
      };
      (Ie.styles = [b.globalCss, ye]),
        ke([(0, l.S)()], Ie.prototype, "isError", 2),
        (Ie = ke([(0, a.M)("wcm-mobile-connecting-view")], Ie));
      const Oe = n.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Me = class extends n.oi {
        render() {
          const { name: t, id: e, image_id: r } = s.zv.getWalletRouterData(),
            { isDesktop: o, isWeb: a } = Z.getCachedRouterWalletPlatforms();
          return n.dy`<wcm-modal-header title="${t}" .onAction="${
            Z.handleUriCopy
          }" .actionIcon="${
            R.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${(0,
          m.o)(
            r,
          )}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${a}"></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (Me.styles = [b.globalCss, Oe]),
        (Me = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-mobile-qr-connecting-view")], Me));
      Object.defineProperty, Object.getOwnPropertyDescriptor;
      let Ae = class extends n.oi {
        render() {
          return n.dy`<wcm-modal-header title="Scan the code" .onAction="${Z.handleUriCopy}" .actionIcon="${R.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
        }
      };
      (Ae.styles = [b.globalCss]),
        (Ae = ((t, e, r, o) => {
          for (var n, a = e, i = t.length - 1; i >= 0; i--)
            (n = t[i]) && (a = n(a) || a);
          return a;
        })([(0, a.M)("wcm-qrcode-view")], Ae));
      const $e = n.iv`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var Pe = Object.defineProperty,
        Te = Object.getOwnPropertyDescriptor,
        Re = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? Te(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Pe(e, r, a), a;
        };
      let Le = class extends n.oi {
        constructor() {
          super(...arguments),
            (this.loading = !s.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !s.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = Z.debounce((t) => {
              t.length >= 3
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = t),
                  s.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  s.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var t;
          null == (t = this.intersectionObserver) || t.disconnect();
        }
        get placeholderEl() {
          return Z.getShadowRootElement(this, ".wcm-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([t]) => {
            t.isIntersecting &&
              (!this.search || !this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          const { wallets: t, search: e } = s.ExplorerCtrl.state,
            { listings: r, total: o } = this.search ? e : t;
          return o <= 40 || r.length >= o;
        }
        async fetchWallets() {
          var t;
          const { wallets: e, search: r } = s.ExplorerCtrl.state,
            { listings: o, total: n, page: a } = this.search ? r : e;
          if (!this.endReached && (this.firstFetch || (n > 40 && o.length < n)))
            try {
              this.loading = !0;
              const e =
                  null == (t = s.OptionsCtrl.state.chains)
                    ? void 0
                    : t.join(","),
                { listings: r } = await s.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : a + 1,
                  entries: 40,
                  search: this.search,
                  version: 2,
                  chains: e,
                }),
                o = r.map((t) => Z.getWalletIcon(t));
              await Promise.all([
                ...o.map(async (t) => Z.preloadImage(t)),
                s.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (t) {
              console.error(t),
                s.ToastCtrl.openToast(Z.getErrorMessage(t), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(t) {
          s.zv.isAndroid() ? Z.handleMobileLinking(t) : Z.goToConnectingView(t);
        }
        onSearchChange(t) {
          const { value: e } = t.target;
          this.searchDebounce(e);
        }
        render() {
          const { wallets: t, search: e } = s.ExplorerCtrl.state,
            { listings: r } = this.search ? e : t,
            o = this.loading && !r.length,
            a = this.search.length >= 3;
          let i = Ht.manualWalletsTemplate(),
            l = Ht.recomendedWalletsTemplate(!0);
          a &&
            ((i = i.filter(({ values: t }) =>
              Z.caseSafeIncludes(t[0], this.search),
            )),
            (l = l.filter(({ values: t }) =>
              Z.caseSafeIncludes(t[0], this.search),
            )));
          const d = !this.loading && !r.length && !l.length,
            m = {
              "wcm-loading": o,
              "wcm-end-reached": this.endReached || !this.loading,
              "wcm-empty": d,
            };
          return n.dy`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(
            this,
          )}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${(0,
          c.$)(m)}"><div class="wcm-grid">${o ? null : i} ${o ? null : l} ${
            o
              ? null
              : r.map(
                  (t) =>
                    n.dy`${
                      t
                        ? n.dy`<wcm-wallet-button imageId="${
                            t.image_id
                          }" name="${t.name}" walletId="${
                            t.id
                          }" .onClick="${() =>
                            this.onConnect(t)}"></wcm-wallet-button>`
                        : null
                    }`,
                )
          }</div><div class="wcm-placeholder-block">${
            d
              ? n.dy`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`
              : null
          } ${
            !d && this.loading ? n.dy`<wcm-spinner></wcm-spinner>` : null
          }</div></wcm-modal-content>`;
        }
      };
      (Le.styles = [b.globalCss, $e]),
        Re([(0, l.S)()], Le.prototype, "loading", 2),
        Re([(0, l.S)()], Le.prototype, "firstFetch", 2),
        Re([(0, l.S)()], Le.prototype, "search", 2),
        Re([(0, l.S)()], Le.prototype, "endReached", 2),
        (Le = Re([(0, a.M)("wcm-wallet-explorer-view")], Le));
      const Ne = n.iv`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var Be = Object.defineProperty,
        We = Object.getOwnPropertyDescriptor,
        je = (t, e, r, o) => {
          for (
            var n, a = o > 1 ? void 0 : o ? We(e, r) : e, i = t.length - 1;
            i >= 0;
            i--
          )
            (n = t[i]) && (a = (o ? n(e, r, a) : n(a)) || a);
          return o && a && Be(e, r, a), a;
        };
      let De = class extends n.oi {
        constructor() {
          super(), (this.isError = !1), this.openWebWallet();
        }
        onFormatAndRedirect(t) {
          const { desktop: e, name: r } = s.zv.getWalletRouterData(),
            o = e?.universal;
          if (o) {
            const e = s.zv.formatUniversalUrl(o, t, r);
            s.zv.openHref(e, "_blank");
          }
        }
        openWebWallet() {
          const { walletConnectUri: t } = s.OptionsCtrl.state,
            e = s.zv.getWalletRouterData();
          Z.setRecentWallet(e), t && this.onFormatAndRedirect(t);
        }
        render() {
          const { name: t, id: e, image_id: r } = s.zv.getWalletRouterData(),
            { isMobile: o, isDesktop: a } = Z.getCachedRouterWalletPlatforms(),
            i = s.zv.isMobile();
          return n.dy`<wcm-modal-header title="${t}" .onAction="${
            Z.handleUriCopy
          }" .actionIcon="${
            R.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${(0,
          m.o)(r)}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${
            !i && a
          }" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(
            this,
          )}" .iconRight="${
            R.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (De.styles = [b.globalCss, Ne]),
        je([(0, l.S)()], De.prototype, "isError", 2),
        (De = je([(0, a.M)("wcm-web-connecting-view")], De));
    },
  },
]);
//# sourceMappingURL=839.index.js.map
