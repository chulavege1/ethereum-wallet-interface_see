/*! For license information please see 847.index.js.LICENSE.txt */
"use strict";
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [847],
  {
    3527: (t, e, n) => {
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw new Error(`Wrong positive integer: ${t}`);
      }
      function s(t, ...e) {
        if (!(t instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        if (e.length > 0 && !e.includes(t.length))
          throw new TypeError(
            `Expected Uint8Array of length ${e}, not of length=${t.length}`,
          );
      }
      n.d(e, { ZP: () => i });
      const i = {
        number: r,
        bool: function (t) {
          if ("boolean" != typeof t)
            throw new Error(`Expected boolean, not ${t}`);
        },
        bytes: s,
        hash: function (t) {
          if ("function" != typeof t || "function" != typeof t.create)
            throw new Error("Hash should be wrapped by utils.wrapConstructor");
          r(t.outputLen), r(t.blockLen);
        },
        exists: function (t, e = !0) {
          if (t.destroyed) throw new Error("Hash instance has been destroyed");
          if (e && t.finished)
            throw new Error("Hash#digest() has already been called");
        },
        output: function (t, e) {
          s(t);
          const n = e.outputLen;
          if (t.length < n)
            throw new Error(
              `digestInto() expects output buffer of length at least ${n}`,
            );
        },
      };
    },
    1881: (t, e, n) => {
      n.d(e, { ZP: () => a });
      const r = BigInt(2 ** 32 - 1),
        s = BigInt(32);
      function i(t, e = !1) {
        return e
          ? { h: Number(t & r), l: Number((t >> s) & r) }
          : { h: 0 | Number((t >> s) & r), l: 0 | Number(t & r) };
      }
      const a = {
        fromBig: i,
        split: function (t, e = !1) {
          let n = new Uint32Array(t.length),
            r = new Uint32Array(t.length);
          for (let s = 0; s < t.length; s++) {
            const { h: a, l: o } = i(t[s], e);
            [n[s], r[s]] = [a, o];
          }
          return [n, r];
        },
        toBig: (t, e) => (BigInt(t >>> 0) << s) | BigInt(e >>> 0),
        shrSH: (t, e, n) => t >>> n,
        shrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
        rotrSH: (t, e, n) => (t >>> n) | (e << (32 - n)),
        rotrSL: (t, e, n) => (t << (32 - n)) | (e >>> n),
        rotrBH: (t, e, n) => (t << (64 - n)) | (e >>> (n - 32)),
        rotrBL: (t, e, n) => (t >>> (n - 32)) | (e << (64 - n)),
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: (t, e, n) => (t << n) | (e >>> (32 - n)),
        rotlSL: (t, e, n) => (e << n) | (t >>> (32 - n)),
        rotlBH: (t, e, n) => (e << (n - 32)) | (t >>> (64 - n)),
        rotlBL: (t, e, n) => (t << (n - 32)) | (e >>> (64 - n)),
        add: function (t, e, n, r) {
          const s = (e >>> 0) + (r >>> 0);
          return { h: (t + n + ((s / 2 ** 32) | 0)) | 0, l: 0 | s };
        },
        add3L: (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
        add3H: (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0,
        add4L: (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
        add4H: (t, e, n, r, s) => (e + n + r + s + ((t / 2 ** 32) | 0)) | 0,
        add5H: (t, e, n, r, s, i) =>
          (e + n + r + s + i + ((t / 2 ** 32) | 0)) | 0,
        add5L: (t, e, n, r, s) =>
          (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (s >>> 0),
      };
    },
    4979: (t, e, n) => {
      n.d(e, {
        kb: () => u,
        oY: () => o,
        U5: () => h,
        GL: () => s,
        np: () => i,
        O0: () => c,
        Jq: () => r,
        hE: () => f,
        K$: () => d,
      }),
        "object" == typeof self && "crypto" in self && self.crypto;
      const r = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        i = (t, e) => (t << (32 - e)) | (t >>> e);
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw new Error("Non little-endian hardware is not supported");
      Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
      const a = async () => {};
      async function o(t, e, n) {
        let r = Date.now();
        for (let s = 0; s < t; s++) {
          n(s);
          const t = Date.now() - r;
          (t >= 0 && t < e) || (await a(), (r += t));
        }
      }
      function c(t) {
        if (
          ("string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw new TypeError(
                  "utf8ToBytes expected string, got " + typeof t,
                );
              return new TextEncoder().encode(t);
            })(t)),
          !(t instanceof Uint8Array))
        )
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof t})`,
          );
        return t;
      }
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      const l = (t) =>
        "[object Object]" === Object.prototype.toString.call(t) &&
        t.constructor === Object;
      function h(t, e) {
        if (void 0 !== e && ("object" != typeof e || !l(e)))
          throw new TypeError("Options should be object or undefined");
        return Object.assign(t, e);
      }
      function f(t) {
        const e = (e) => t().update(c(e)).digest(),
          n = t();
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function d(t) {
        const e = (e, n) => t(n).update(c(e)).digest(),
          n = t({});
        return (
          (e.outputLen = n.outputLen),
          (e.blockLen = n.blockLen),
          (e.create = (e) => t(e)),
          e
        );
      }
    },
    742: (t, e, n) => {
      n.d(e, { i: () => r });
      const r = "6.6.4";
    },
    274: (t, e, n) => {
      n.d(e, { R: () => B });
      var r = n(6024),
        s = n(8135),
        i = n(5556),
        a = n(2229),
        o = n(4249);
      class c extends s.XI {
        constructor(t) {
          super("address", "address", t, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(t, e) {
          let n = o._.dereference(e, "string");
          try {
            n = (0, i.K)(n);
          } catch (t) {
            return this._throwError(t.message, e);
          }
          return t.writeValue(n);
        }
        decode(t) {
          return (0, i.K)((0, a.m9)(t.readValue(), 20));
        }
      }
      var u = n(5857);
      class l extends s.XI {
        coder;
        constructor(t) {
          super(t.name, t.type, "_", t.dynamic), (this.coder = t);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(t, e) {
          return this.coder.encode(t, e);
        }
        decode(t) {
          return this.coder.decode(t);
        }
      }
      function h(t, e, n) {
        let i = [];
        if (Array.isArray(n)) i = n;
        else if (n && "object" == typeof n) {
          let t = {};
          i = e.map((e) => {
            const s = e.localName;
            return (
              (0, r.hu)(
                s,
                "cannot encode object for signature with missing names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: e }, value: n },
              ),
              (0, r.hu)(
                !t[s],
                "cannot encode object for signature with duplicate names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: e }, value: n },
              ),
              (t[s] = !0),
              n[s]
            );
          });
        } else (0, r.en)(!1, "invalid tuple value", "tuple", n);
        (0, r.en)(
          e.length === i.length,
          "types/value length mismatch",
          "tuple",
          n,
        );
        let a = new s.QV(),
          o = new s.QV(),
          c = [];
        e.forEach((t, e) => {
          let n = i[e];
          if (t.dynamic) {
            let e = o.length;
            t.encode(o, n);
            let r = a.writeUpdatableValue();
            c.push((t) => {
              r(t + e);
            });
          } else t.encode(a, n);
        }),
          c.forEach((t) => {
            t(a.length);
          });
        let u = t.appendWriter(a);
        return (u += t.appendWriter(o)), u;
      }
      function f(t, e) {
        let n = [],
          i = [],
          a = t.subReader(0);
        return (
          e.forEach((e) => {
            let s = null;
            if (e.dynamic) {
              let n = t.readIndex(),
                i = a.subReader(n);
              try {
                s = e.decode(i);
              } catch (t) {
                if ((0, r.VZ)(t, "BUFFER_OVERRUN")) throw t;
                (s = t),
                  (s.baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type);
              }
            } else
              try {
                s = e.decode(t);
              } catch (t) {
                if ((0, r.VZ)(t, "BUFFER_OVERRUN")) throw t;
                (s = t),
                  (s.baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type);
              }
            if (null == s) throw new Error("investigate");
            n.push(s), i.push(e.localName || null);
          }),
          s.x4.fromItems(n, i)
        );
      }
      class d extends s.XI {
        coder;
        length;
        constructor(t, e, n) {
          super(
            "array",
            t.type + "[" + (e >= 0 ? e : "") + "]",
            n,
            -1 === e || t.dynamic,
          ),
            (0, u.h)(this, { coder: t, length: e });
        }
        defaultValue() {
          const t = this.coder.defaultValue(),
            e = [];
          for (let n = 0; n < this.length; n++) e.push(t);
          return e;
        }
        encode(t, e) {
          const n = o._.dereference(e, "array");
          Array.isArray(n) || this._throwError("expected array value", n);
          let s = this.length;
          -1 === s && ((s = n.length), t.writeValue(n.length)),
            (0, r.fG)(
              n.length,
              s,
              "coder array" + (this.localName ? " " + this.localName : ""),
            );
          let i = [];
          for (let t = 0; t < n.length; t++) i.push(this.coder);
          return h(t, i, n);
        }
        decode(t) {
          let e = this.length;
          -1 === e &&
            ((e = t.readIndex()),
            (0, r.hu)(
              e * s.Bx <= t.dataLength,
              "insufficient data length",
              "BUFFER_OVERRUN",
              { buffer: t.bytes, offset: e * s.Bx, length: t.dataLength },
            ));
          let n = [];
          for (let t = 0; t < e; t++) n.push(new l(this.coder));
          return f(t, n);
        }
      }
      class p extends s.XI {
        constructor(t) {
          super("bool", "bool", t, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(t, e) {
          const n = o._.dereference(e, "bool");
          return t.writeValue(n ? 1 : 0);
        }
        decode(t) {
          return !!t.readValue();
        }
      }
      var g = n(455);
      class m extends s.XI {
        constructor(t, e) {
          super(t, t, e, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(t, e) {
          e = (0, g.h_)(e);
          let n = t.writeValue(e.length);
          return (n += t.writeBytes(e)), n;
        }
        decode(t) {
          return t.readBytes(t.readIndex(), !0);
        }
      }
      class y extends m {
        constructor(t) {
          super("bytes", t);
        }
        decode(t) {
          return (0, g.Dv)(super.decode(t));
        }
      }
      class w extends s.XI {
        size;
        constructor(t, e) {
          let n = "bytes" + String(t);
          super(n, n, e, !1), (0, u.h)(this, { size: t }, { size: "number" });
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size,
          );
        }
        encode(t, e) {
          let n = (0, g.h_)(o._.dereference(e, this.type));
          return (
            n.length !== this.size &&
              this._throwError("incorrect data length", e),
            t.writeBytes(n)
          );
        }
        decode(t) {
          return (0, g.Dv)(t.readBytes(this.size));
        }
      }
      const A = new Uint8Array([]);
      class b extends s.XI {
        constructor(t) {
          super("null", "", t, !1);
        }
        defaultValue() {
          return null;
        }
        encode(t, e) {
          return null != e && this._throwError("not null", e), t.writeBytes(A);
        }
        decode(t) {
          return t.readBytes(0), null;
        }
      }
      const v = BigInt(0),
        E = BigInt(1),
        P = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      class k extends s.XI {
        size;
        signed;
        constructor(t, e, n) {
          const r = (e ? "int" : "uint") + 8 * t;
          super(r, r, n, !1),
            (0, u.h)(
              this,
              { size: t, signed: e },
              { size: "number", signed: "boolean" },
            );
        }
        defaultValue() {
          return 0;
        }
        encode(t, e) {
          let n = (0, a.yT)(o._.dereference(e, this.type)),
            r = (0, a.sS)(P, 8 * s.Bx);
          if (this.signed) {
            let t = (0, a.sS)(r, 8 * this.size - 1);
            (n > t || n < -(t + E)) &&
              this._throwError("value out-of-bounds", e),
              (n = (0, a.$j)(n, 8 * s.Bx));
          } else
            (n < v || n > (0, a.sS)(r, 8 * this.size)) &&
              this._throwError("value out-of-bounds", e);
          return t.writeValue(n);
        }
        decode(t) {
          let e = (0, a.sS)(t.readValue(), 8 * this.size);
          return this.signed && (e = (0, a._Y)(e, 8 * this.size)), e;
        }
      }
      var N = n(7155);
      class C extends m {
        constructor(t) {
          super("string", t);
        }
        defaultValue() {
          return "";
        }
        encode(t, e) {
          return super.encode(t, (0, N.Y0)(o._.dereference(e, "string")));
        }
        decode(t) {
          return (0, N.ZN)(super.decode(t));
        }
      }
      class T extends s.XI {
        coders;
        constructor(t, e) {
          let n = !1;
          const r = [];
          t.forEach((t) => {
            t.dynamic && (n = !0), r.push(t.type);
          }),
            super("tuple", "tuple(" + r.join(",") + ")", e, n),
            (0, u.h)(this, { coders: Object.freeze(t.slice()) });
        }
        defaultValue() {
          const t = [];
          this.coders.forEach((e) => {
            t.push(e.defaultValue());
          });
          const e = this.coders.reduce((t, e) => {
            const n = e.localName;
            return n && (t[n] || (t[n] = 0), t[n]++), t;
          }, {});
          return (
            this.coders.forEach((n, r) => {
              let s = n.localName;
              s &&
                1 === e[s] &&
                ("length" === s && (s = "_length"),
                null == t[s] && (t[s] = t[r]));
            }),
            Object.freeze(t)
          );
        }
        encode(t, e) {
          const n = o._.dereference(e, "tuple");
          return h(t, this.coders, n);
        }
        decode(t) {
          return f(t, this.coders);
        }
      }
      var I = n(6052);
      const x = new Map();
      x.set(0, "GENERIC_PANIC"),
        x.set(1, "ASSERT_FALSE"),
        x.set(17, "OVERFLOW"),
        x.set(18, "DIVIDE_BY_ZERO"),
        x.set(33, "ENUM_RANGE_ERROR"),
        x.set(34, "BAD_STORAGE_DATA"),
        x.set(49, "STACK_UNDERFLOW"),
        x.set(50, "ARRAY_RANGE_ERROR"),
        x.set(65, "OUT_OF_MEMORY"),
        x.set(81, "UNINITIALIZED_FUNCTION_CALL");
      const R = new RegExp(/^bytes([0-9]*)$/),
        O = new RegExp(/^(u?int)([0-9]*)$/);
      let S = null;
      class B {
        #t(t) {
          if (t.isArray())
            return new d(this.#t(t.arrayChildren), t.arrayLength, t.name);
          if (t.isTuple())
            return new T(
              t.components.map((t) => this.#t(t)),
              t.name,
            );
          switch (t.baseType) {
            case "address":
              return new c(t.name);
            case "bool":
              return new p(t.name);
            case "string":
              return new C(t.name);
            case "bytes":
              return new y(t.name);
            case "":
              return new b(t.name);
          }
          let e = t.type.match(O);
          if (e) {
            let n = parseInt(e[2] || "256");
            return (
              (0, r.en)(
                0 !== n && n <= 256 && n % 8 == 0,
                "invalid " + e[1] + " bit length",
                "param",
                t,
              ),
              new k(n / 8, "int" === e[1], t.name)
            );
          }
          if (((e = t.type.match(R)), e)) {
            let n = parseInt(e[1]);
            return (
              (0, r.en)(0 !== n && n <= 32, "invalid bytes length", "param", t),
              new w(n, t.name)
            );
          }
          (0, r.en)(!1, "invalid type", "type", t.type);
        }
        getDefaultValue(t) {
          const e = t.map((t) => this.#t(I._R.from(t)));
          return new T(e, "_").defaultValue();
        }
        encode(t, e) {
          (0, r.fG)(e.length, t.length, "types/values length mismatch");
          const n = t.map((t) => this.#t(I._R.from(t))),
            i = new T(n, "_"),
            a = new s.QV();
          return i.encode(a, e), a.data;
        }
        decode(t, e, n) {
          const r = t.map((t) => this.#t(I._R.from(t)));
          return new T(r, "_").decode(new s.Ej(e, n));
        }
        static defaultAbiCoder() {
          return null == S && (S = new B()), S;
        }
        static getBuiltinCallException(t, e, n) {
          return (function (t, e, n, s) {
            let a = "missing revert data",
              o = null,
              c = null;
            if (n) {
              a = "execution reverted";
              const t = (0, g.Pw)(n);
              if (((n = (0, g.Dv)(n)), 0 === t.length))
                (a += " (no data present; likely require(false) occurred"),
                  (o = "require(false)");
              else if (t.length % 32 != 4)
                a += " (could not decode reason; invalid data length)";
              else if ("0x08c379a0" === (0, g.Dv)(t.slice(0, 4)))
                try {
                  (o = s.decode(["string"], t.slice(4))[0]),
                    (c = {
                      signature: "Error(string)",
                      name: "Error",
                      args: [o],
                    }),
                    (a += `: ${JSON.stringify(o)}`);
                } catch (t) {
                  a += " (could not decode reason; invalid string data)";
                }
              else if ("0x4e487b71" === (0, g.Dv)(t.slice(0, 4)))
                try {
                  const e = Number(s.decode(["uint256"], t.slice(4))[0]);
                  (c = {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    args: [e],
                  }),
                    (o = `Panic due to ${x.get(e) || "UNKNOWN"}(${e})`),
                    (a += `: ${o}`);
                } catch (t) {
                  a += " (could not decode panic code)";
                }
              else a += " (unknown custom error)";
            }
            const u = {
              to: e.to ? (0, i.K)(e.to) : null,
              data: e.data || "0x",
            };
            return (
              e.from && (u.from = (0, i.K)(e.from)),
              (0, r.wf)(a, "CALL_EXCEPTION", {
                action: t,
                data: n,
                reason: o,
                transaction: u,
                invocation: null,
                revert: c,
              })
            );
          })(t, e, n, B.defaultAbiCoder());
        }
      }
    },
    8135: (t, e, n) => {
      n.d(e, {
        BR: () => d,
        Bx: () => o,
        Ej: () => y,
        QV: () => m,
        XI: () => g,
        x4: () => f,
      });
      var r = n(2229),
        s = n(6024),
        i = n(455),
        a = n(5857);
      const o = 32,
        c = new Uint8Array(o),
        u = ["then"],
        l = {};
      function h(t, e) {
        const n = new Error(
          `deferred error during ABI decoding triggered accessing ${t}`,
        );
        throw ((n.error = e), n);
      }
      class f extends Array {
        #e;
        constructor(...t) {
          const e = t[0];
          let n = t[1],
            s = (t[2] || []).slice(),
            i = !0;
          e !== l && ((n = t), (s = []), (i = !1)),
            super(n.length),
            n.forEach((t, e) => {
              this[e] = t;
            });
          const a = s.reduce(
            (t, e) => (
              "string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t
            ),
            new Map(),
          );
          if (
            ((this.#e = Object.freeze(
              n.map((t, e) => {
                const n = s[e];
                return null != n && 1 === a.get(n) ? n : null;
              }),
            )),
            i)
          )
            return (
              Object.freeze(this),
              new Proxy(this, {
                get: (t, e, n) => {
                  if ("string" == typeof e) {
                    if (e.match(/^[0-9]+$/)) {
                      const n = (0, r.Dx)(e, "%index");
                      if (n < 0 || n >= this.length)
                        throw new RangeError("out of result range");
                      const s = t[n];
                      return s instanceof Error && h(`index ${n}`, s), s;
                    }
                    if (u.indexOf(e) >= 0) return Reflect.get(t, e, n);
                    const s = t[e];
                    if (s instanceof Function)
                      return function (...e) {
                        return s.apply(this === n ? t : this, e);
                      };
                    if (!(e in t))
                      return t.getValue.apply(this === n ? t : this, [e]);
                  }
                  return Reflect.get(t, e, n);
                },
              })
            );
        }
        toArray() {
          const t = [];
          return (
            this.forEach((e, n) => {
              e instanceof Error && h(`index ${n}`, e), t.push(e);
            }),
            t
          );
        }
        toObject() {
          return this.#e.reduce(
            (t, e, n) => (
              (0, s.hu)(
                null != e,
                "value at index ${ index } unnamed",
                "UNSUPPORTED_OPERATION",
                { operation: "toObject()" },
              ),
              e in t || (t[e] = this.getValue(e)),
              t
            ),
            {},
          );
        }
        slice(t, e) {
          null == t && (t = 0),
            t < 0 && (t += this.length) < 0 && (t = 0),
            null == e && (e = this.length),
            e < 0 && (e += this.length) < 0 && (e = 0),
            e > this.length && (e = this.length);
          const n = [],
            r = [];
          for (let s = t; s < e; s++) n.push(this[s]), r.push(this.#e[s]);
          return new f(l, n, r);
        }
        filter(t, e) {
          const n = [],
            r = [];
          for (let s = 0; s < this.length; s++) {
            const i = this[s];
            i instanceof Error && h(`index ${s}`, i),
              t.call(e, i, s, this) && (n.push(i), r.push(this.#e[s]));
          }
          return new f(l, n, r);
        }
        map(t, e) {
          const n = [];
          for (let r = 0; r < this.length; r++) {
            const s = this[r];
            s instanceof Error && h(`index ${r}`, s),
              n.push(t.call(e, s, r, this));
          }
          return n;
        }
        getValue(t) {
          const e = this.#e.indexOf(t);
          if (-1 === e) return;
          const n = this[e];
          return (
            n instanceof Error && h(`property ${JSON.stringify(t)}`, n.error), n
          );
        }
        static fromItems(t, e) {
          return new f(l, t, e);
        }
      }
      function d(t) {
        const e = [],
          n = function (t, r) {
            if (Array.isArray(r))
              for (let s in r) {
                const i = t.slice();
                i.push(s);
                try {
                  n(i, r[s]);
                } catch (t) {
                  e.push({ path: i, error: t });
                }
              }
          };
        return n([], t), e;
      }
      function p(t) {
        let e = (0, r.ot)(t);
        return (
          (0, s.hu)(e.length <= o, "value out-of-bounds", "BUFFER_OVERRUN", {
            buffer: e,
            length: o,
            offset: e.length,
          }),
          e.length !== o &&
            (e = (0, i.h_)((0, i.zo)([c.slice(e.length % o), e]))),
          e
        );
      }
      class g {
        name;
        type;
        localName;
        dynamic;
        constructor(t, e, n, r) {
          (0, a.h)(
            this,
            { name: t, type: e, localName: n, dynamic: r },
            {
              name: "string",
              type: "string",
              localName: "string",
              dynamic: "boolean",
            },
          );
        }
        _throwError(t, e) {
          (0, s.en)(!1, t, this.localName, e);
        }
      }
      class m {
        #n;
        #r;
        constructor() {
          (this.#n = []), (this.#r = 0);
        }
        get data() {
          return (0, i.zo)(this.#n);
        }
        get length() {
          return this.#r;
        }
        #s(t) {
          return this.#n.push(t), (this.#r += t.length), t.length;
        }
        appendWriter(t) {
          return this.#s((0, i.h_)(t.data));
        }
        writeBytes(t) {
          let e = (0, i.h_)(t);
          const n = e.length % o;
          return n && (e = (0, i.h_)((0, i.zo)([e, c.slice(n)]))), this.#s(e);
        }
        writeValue(t) {
          return this.#s(p(t));
        }
        writeUpdatableValue() {
          const t = this.#n.length;
          return (
            this.#n.push(c),
            (this.#r += o),
            (e) => {
              this.#n[t] = p(e);
            }
          );
        }
      }
      class y {
        allowLoose;
        #n;
        #i;
        constructor(t, e) {
          (0, a.h)(this, { allowLoose: !!e }),
            (this.#n = (0, i.h_)(t)),
            (this.#i = 0);
        }
        get data() {
          return (0, i.Dv)(this.#n);
        }
        get dataLength() {
          return this.#n.length;
        }
        get consumed() {
          return this.#i;
        }
        get bytes() {
          return new Uint8Array(this.#n);
        }
        #a(t, e, n) {
          let r = Math.ceil(e / o) * o;
          return (
            this.#i + r > this.#n.length &&
              (this.allowLoose && n && this.#i + e <= this.#n.length
                ? (r = e)
                : (0, s.hu)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: (0, i.h_)(this.#n),
                    length: this.#n.length,
                    offset: this.#i + r,
                  })),
            this.#n.slice(this.#i, this.#i + r)
          );
        }
        subReader(t) {
          return new y(this.#n.slice(this.#i + t), this.allowLoose);
        }
        readBytes(t, e) {
          let n = this.#a(0, t, !!e);
          return (this.#i += n.length), n.slice(0, t);
        }
        readValue() {
          return (0, r.Gh)(this.readBytes(o));
        }
        readIndex() {
          return (0, r.He)(this.readBytes(o));
        }
      }
    },
    6052: (t, e, n) => {
      n.d(e, {
        Eh: () => Z,
        HY: () => H,
        IC: () => Q,
        Js: () => _,
        QV: () => z,
        Xg: () => J,
        YW: () => q,
        _R: () => j,
        xs: () => W,
      });
      var r = n(2229),
        s = n(6024),
        i = n(5857),
        a = n(2186);
      function o(t) {
        const e = new Set();
        return t.forEach((t) => e.add(t)), Object.freeze(e);
      }
      const c = "constant external internal payable private public pure view",
        u = o(c.split(" ")),
        l = "constructor error event fallback function receive struct",
        h = o(l.split(" ")),
        f = "calldata memory storage payable indexed",
        d = o(f.split(" ")),
        p = o([l, f, "tuple returns", c].join(" ").split(" ")),
        g = {
          "(": "OPEN_PAREN",
          ")": "CLOSE_PAREN",
          "[": "OPEN_BRACKET",
          "]": "CLOSE_BRACKET",
          ",": "COMMA",
          "@": "AT",
        },
        m = new RegExp("^(\\s*)"),
        y = new RegExp("^([0-9]+)"),
        w = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
        A = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
        b = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
      class v {
        #i;
        #o;
        get offset() {
          return this.#i;
        }
        get length() {
          return this.#o.length - this.#i;
        }
        constructor(t) {
          (this.#i = 0), (this.#o = t.slice());
        }
        clone() {
          return new v(this.#o);
        }
        reset() {
          this.#i = 0;
        }
        #c(t = 0, e = 0) {
          return new v(
            this.#o.slice(t, e).map((e) =>
              Object.freeze(
                Object.assign({}, e, {
                  match: e.match - t,
                  linkBack: e.linkBack - t,
                  linkNext: e.linkNext - t,
                }),
              ),
            ),
          );
        }
        popKeyword(t) {
          const e = this.peek();
          if ("KEYWORD" !== e.type || !t.has(e.text))
            throw new Error(`expected keyword ${e.text}`);
          return this.pop().text;
        }
        popType(t) {
          if (this.peek().type !== t)
            throw new Error(
              `expected ${t}; got ${JSON.stringify(this.peek())}`,
            );
          return this.pop().text;
        }
        popParen() {
          const t = this.peek();
          if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
          const e = this.#c(this.#i + 1, t.match + 1);
          return (this.#i = t.match + 1), e;
        }
        popParams() {
          const t = this.peek();
          if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
          const e = [];
          for (; this.#i < t.match - 1; ) {
            const t = this.peek().linkNext;
            e.push(this.#c(this.#i + 1, t)), (this.#i = t);
          }
          return (this.#i = t.match + 1), e;
        }
        peek() {
          if (this.#i >= this.#o.length) throw new Error("out-of-bounds");
          return this.#o[this.#i];
        }
        peekKeyword(t) {
          const e = this.peekType("KEYWORD");
          return null != e && t.has(e) ? e : null;
        }
        peekType(t) {
          if (0 === this.length) return null;
          const e = this.peek();
          return e.type === t ? e.text : null;
        }
        pop() {
          const t = this.peek();
          return this.#i++, t;
        }
        toString() {
          const t = [];
          for (let e = this.#i; e < this.#o.length; e++) {
            const n = this.#o[e];
            t.push(`${n.type}:${n.text}`);
          }
          return `<TokenString ${t.join(" ")}>`;
        }
      }
      function E(t) {
        const e = [],
          n = (e) => {
            const n = a < t.length ? JSON.stringify(t[a]) : "$EOI";
            throw new Error(`invalid token ${n} at ${a}: ${e}`);
          };
        let s = [],
          i = [],
          a = 0;
        for (; a < t.length; ) {
          let o = t.substring(a),
            c = o.match(m);
          c && ((a += c[1].length), (o = t.substring(a)));
          const u = {
            depth: s.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: a,
            value: -1,
          };
          e.push(u);
          let l = g[o[0]] || "";
          if (l) {
            if (((u.type = l), (u.text = o[0]), a++, "OPEN_PAREN" === l))
              s.push(e.length - 1), i.push(e.length - 1);
            else if ("CLOSE_PAREN" == l)
              0 === s.length && n("no matching open bracket"),
                (u.match = s.pop()),
                (e[u.match].match = e.length - 1),
                u.depth--,
                (u.linkBack = i.pop()),
                (e[u.linkBack].linkNext = e.length - 1);
            else if ("COMMA" === l)
              (u.linkBack = i.pop()),
                (e[u.linkBack].linkNext = e.length - 1),
                i.push(e.length - 1);
            else if ("OPEN_BRACKET" === l) u.type = "BRACKET";
            else if ("CLOSE_BRACKET" === l) {
              let t = e.pop().text;
              if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                const n = e.pop().text;
                (t = n + t), (e[e.length - 1].value = (0, r.Dx)(n));
              }
              if (0 === e.length || "BRACKET" !== e[e.length - 1].type)
                throw new Error("missing opening bracket");
              e[e.length - 1].text += t;
            }
          } else if (((c = o.match(w)), c)) {
            if (((u.text = c[1]), (a += u.text.length), p.has(u.text))) {
              u.type = "KEYWORD";
              continue;
            }
            if (u.text.match(b)) {
              u.type = "TYPE";
              continue;
            }
            u.type = "ID";
          } else {
            if (((c = o.match(y)), !c))
              throw new Error(
                `unexpected token ${JSON.stringify(o[0])} at position ${a}`,
              );
            (u.text = c[1]), (u.type = "NUMBER"), (a += u.text.length);
          }
        }
        return new v(e.map((t) => Object.freeze(t)));
      }
      function P(t, e) {
        let n = [];
        for (const r in e.keys()) t.has(r) && n.push(r);
        if (n.length > 1) throw new Error(`conflicting types: ${n.join(", ")}`);
      }
      function k(t, e) {
        if (e.peekKeyword(h)) {
          const n = e.pop().text;
          if (n !== t) throw new Error(`expected ${t}, got ${n}`);
        }
        return e.popType("ID");
      }
      function N(t, e) {
        const n = new Set();
        for (;;) {
          const r = t.peekType("KEYWORD");
          if (null == r || (e && !e.has(r))) break;
          if ((t.pop(), n.has(r)))
            throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
          n.add(r);
        }
        return Object.freeze(n);
      }
      function C(t) {
        let e = N(t, u);
        return (
          P(e, o("constant payable nonpayable".split(" "))),
          P(e, o("pure view payable nonpayable".split(" "))),
          e.has("view")
            ? "view"
            : e.has("pure")
            ? "pure"
            : e.has("payable")
            ? "payable"
            : e.has("nonpayable")
            ? "nonpayable"
            : e.has("constant")
            ? "view"
            : "nonpayable"
        );
      }
      function T(t, e) {
        return t.popParams().map((t) => j.from(t, e));
      }
      function I(t) {
        if (t.peekType("AT")) {
          if ((t.pop(), t.peekType("NUMBER"))) return (0, r.yT)(t.pop().text);
          throw new Error("invalid gas");
        }
        return null;
      }
      function x(t) {
        if (t.length) throw new Error(`unexpected tokens: ${t.toString()}`);
      }
      const R = new RegExp(/^(.*)\[([0-9]*)\]$/);
      function O(t) {
        const e = t.match(b);
        if (((0, s.en)(e, "invalid type", "type", t), "uint" === t))
          return "uint256";
        if ("int" === t) return "int256";
        if (e[2]) {
          const n = parseInt(e[2]);
          (0, s.en)(0 !== n && n <= 32, "invalid bytes length", "type", t);
        } else if (e[3]) {
          const n = parseInt(e[3]);
          (0, s.en)(
            0 !== n && n <= 256 && n % 8 == 0,
            "invalid numeric width",
            "type",
            t,
          );
        }
        return t;
      }
      const S = {},
        B = Symbol.for("_ethers_internal"),
        D = "_ParamTypeInternal",
        U = "_ErrorInternal",
        L = "_EventInternal",
        F = "_ConstructorInternal",
        M = "_FallbackInternal",
        G = "_FunctionInternal",
        K = "_StructInternal";
      class j {
        name;
        type;
        baseType;
        indexed;
        components;
        arrayLength;
        arrayChildren;
        constructor(t, e, n, r, a, o, c, u) {
          if (
            ((0, s.NK)(t, S, "ParamType"),
            Object.defineProperty(this, B, { value: D }),
            o && (o = Object.freeze(o.slice())),
            "array" === r)
          ) {
            if (null == c || null == u) throw new Error("");
          } else if (null != c || null != u) throw new Error("");
          if ("tuple" === r) {
            if (null == o) throw new Error("");
          } else if (null != o) throw new Error("");
          (0, i.h)(this, {
            name: e,
            type: n,
            baseType: r,
            indexed: a,
            components: o,
            arrayLength: c,
            arrayChildren: u,
          });
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t)) {
            let e = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0,
            };
            return (
              "boolean" == typeof this.indexed && (e.indexed = this.indexed),
              this.isTuple() &&
                (e.components = this.components.map((e) =>
                  JSON.parse(e.format(t)),
                )),
              JSON.stringify(e)
            );
          }
          let e = "";
          return (
            this.isArray()
              ? ((e += this.arrayChildren.format(t)),
                (e += `[${
                  this.arrayLength < 0 ? "" : String(this.arrayLength)
                }]`))
              : this.isTuple()
              ? ("sighash" !== t && (e += this.type),
                (e +=
                  "(" +
                  this.components
                    .map((e) => e.format(t))
                    .join("full" === t ? ", " : ",") +
                  ")"))
              : (e += this.type),
            "sighash" !== t &&
              (!0 === this.indexed && (e += " indexed"),
              "full" === t && this.name && (e += " " + this.name)),
            e
          );
        }
        isArray() {
          return "array" === this.baseType;
        }
        isTuple() {
          return "tuple" === this.baseType;
        }
        isIndexable() {
          return null != this.indexed;
        }
        walk(t, e) {
          if (this.isArray()) {
            if (!Array.isArray(t)) throw new Error("invalid array value");
            if (-1 !== this.arrayLength && t.length !== this.arrayLength)
              throw new Error("array is wrong length");
            const n = this;
            return t.map((t) => n.arrayChildren.walk(t, e));
          }
          if (this.isTuple()) {
            if (!Array.isArray(t)) throw new Error("invalid tuple value");
            if (t.length !== this.components.length)
              throw new Error("array is wrong length");
            const n = this;
            return t.map((t, r) => n.components[r].walk(t, e));
          }
          return e(this.type, t);
        }
        #u(t, e, n, r) {
          if (this.isArray()) {
            if (!Array.isArray(e)) throw new Error("invalid array value");
            if (-1 !== this.arrayLength && e.length !== this.arrayLength)
              throw new Error("array is wrong length");
            const s = this.arrayChildren,
              i = e.slice();
            return (
              i.forEach((e, r) => {
                s.#u(t, e, n, (t) => {
                  i[r] = t;
                });
              }),
              void r(i)
            );
          }
          if (this.isTuple()) {
            const s = this.components;
            let i;
            if (Array.isArray(e)) i = e.slice();
            else {
              if (null == e || "object" != typeof e)
                throw new Error("invalid tuple value");
              i = s.map((t) => {
                if (!t.name)
                  throw new Error(
                    "cannot use object value with unnamed components",
                  );
                if (!(t.name in e))
                  throw new Error(`missing value for component ${t.name}`);
                return e[t.name];
              });
            }
            if (i.length !== this.components.length)
              throw new Error("array is wrong length");
            return (
              i.forEach((e, r) => {
                s[r].#u(t, e, n, (t) => {
                  i[r] = t;
                });
              }),
              void r(i)
            );
          }
          const s = n(this.type, e);
          s.then
            ? t.push(
                (async function () {
                  r(await s);
                })(),
              )
            : r(s);
        }
        async walkAsync(t, e) {
          const n = [],
            r = [t];
          return (
            this.#u(n, t, e, (t) => {
              r[0] = t;
            }),
            n.length && (await Promise.all(n)),
            r[0]
          );
        }
        static from(t, e) {
          if (j.isParamType(t)) return t;
          if ("string" == typeof t) return j.from(E(t), e);
          if (t instanceof v) {
            let n = "",
              r = "",
              s = null;
            N(t, o(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN")
              ? ((r = "tuple"),
                (s = t.popParams().map((t) => j.from(t))),
                (n = `tuple(${s.map((t) => t.format()).join(",")})`))
              : ((n = O(t.popType("TYPE"))), (r = n));
            let i = null,
              a = null;
            for (; t.length && t.peekType("BRACKET"); ) {
              const e = t.pop();
              (i = new j(S, "", n, r, null, s, a, i)),
                (a = e.value),
                (n += e.text),
                (r = "array"),
                (s = null);
            }
            let c = null;
            if (N(t, d).has("indexed")) {
              if (!e) throw new Error("");
              c = !0;
            }
            const u = t.peekType("ID") ? t.pop().text : "";
            if (t.length) throw new Error("leftover tokens");
            return new j(S, u, n, r, c, s, a, i);
          }
          const n = t.name;
          (0, s.en)(
            !n || ("string" == typeof n && n.match(A)),
            "invalid name",
            "obj.name",
            n,
          );
          let r = t.indexed;
          null != r &&
            ((0, s.en)(
              e,
              "parameter cannot be indexed",
              "obj.indexed",
              t.indexed,
            ),
            (r = !!r));
          let i = t.type,
            a = i.match(R);
          if (a) {
            const e = parseInt(a[2] || "-1"),
              s = j.from({ type: a[1], components: t.components });
            return new j(S, n || "", i, "array", r, null, e, s);
          }
          if ("tuple" === i || i.startsWith("tuple(") || i.startsWith("(")) {
            const e =
              null != t.components ? t.components.map((t) => j.from(t)) : null;
            return new j(S, n || "", i, "tuple", r, e, null, null);
          }
          return (i = O(t.type)), new j(S, n || "", i, i, r, null, null, null);
        }
        static isParamType(t) {
          return t && t[B] === D;
        }
      }
      class H {
        type;
        inputs;
        constructor(t, e, n) {
          (0, s.NK)(t, S, "Fragment"),
            (n = Object.freeze(n.slice())),
            (0, i.h)(this, { type: e, inputs: n });
        }
        static from(t) {
          if ("string" == typeof t) {
            try {
              H.from(JSON.parse(t));
            } catch (t) {}
            return H.from(E(t));
          }
          if (t instanceof v)
            switch (t.peekKeyword(h)) {
              case "constructor":
                return J.from(t);
              case "error":
                return Q.from(t);
              case "event":
                return z.from(t);
              case "fallback":
              case "receive":
                return Z.from(t);
              case "function":
                return q.from(t);
              case "struct":
                return W.from(t);
            }
          else if ("object" == typeof t) {
            switch (t.type) {
              case "constructor":
                return J.from(t);
              case "error":
                return Q.from(t);
              case "event":
                return z.from(t);
              case "fallback":
              case "receive":
                return Z.from(t);
              case "function":
                return q.from(t);
              case "struct":
                return W.from(t);
            }
            (0, s.hu)(
              !1,
              `unsupported type: ${t.type}`,
              "UNSUPPORTED_OPERATION",
              { operation: "Fragment.from" },
            );
          }
          (0, s.en)(!1, "unsupported frgament object", "obj", t);
        }
        static isConstructor(t) {
          return J.isFragment(t);
        }
        static isError(t) {
          return Q.isFragment(t);
        }
        static isEvent(t) {
          return z.isFragment(t);
        }
        static isFunction(t) {
          return q.isFragment(t);
        }
        static isStruct(t) {
          return W.isFragment(t);
        }
      }
      class _ extends H {
        name;
        constructor(t, e, n, r) {
          super(t, e, r),
            (0, s.en)(
              "string" == typeof n && n.match(A),
              "invalid identifier",
              "name",
              n,
            ),
            (r = Object.freeze(r.slice())),
            (0, i.h)(this, { name: n });
        }
      }
      function V(t, e) {
        return (
          "(" + e.map((e) => e.format(t)).join("full" === t ? ", " : ",") + ")"
        );
      }
      class Q extends _ {
        constructor(t, e, n) {
          super(t, "error", e, n), Object.defineProperty(this, B, { value: U });
        }
        get selector() {
          return (0, a.id)(this.format("sighash")).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            "sighash" !== t && e.push("error"),
            e.push(this.name + V(t, this.inputs)),
            e.join(" ")
          );
        }
        static from(t) {
          if (Q.isFragment(t)) return t;
          if ("string" == typeof t) return Q.from(E(t));
          if (t instanceof v) {
            const e = k("error", t),
              n = T(t);
            return x(t), new Q(S, e, n);
          }
          return new Q(S, t.name, t.inputs ? t.inputs.map(j.from) : []);
        }
        static isFragment(t) {
          return t && t[B] === U;
        }
      }
      class z extends _ {
        anonymous;
        constructor(t, e, n, r) {
          super(t, "event", e, n),
            Object.defineProperty(this, B, { value: L }),
            (0, i.h)(this, { anonymous: r });
        }
        get topicHash() {
          return (0, a.id)(this.format("sighash"));
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            "sighash" !== t && e.push("event"),
            e.push(this.name + V(t, this.inputs)),
            "sighash" !== t && this.anonymous && e.push("anonymous"),
            e.join(" ")
          );
        }
        static getTopicHash(t, e) {
          return (
            (e = (e || []).map((t) => j.from(t))), new z(S, t, e, !1).topicHash
          );
        }
        static from(t) {
          if (z.isFragment(t)) return t;
          if ("string" == typeof t) return z.from(E(t));
          if (t instanceof v) {
            const e = k("event", t),
              n = T(t, !0),
              r = !!N(t, o(["anonymous"])).has("anonymous");
            return x(t), new z(S, e, n, r);
          }
          return new z(
            S,
            t.name,
            t.inputs ? t.inputs.map((t) => j.from(t, !0)) : [],
            !!t.anonymous,
          );
        }
        static isFragment(t) {
          return t && t[B] === L;
        }
      }
      class J extends H {
        payable;
        gas;
        constructor(t, e, n, r, s) {
          super(t, e, n),
            Object.defineProperty(this, B, { value: F }),
            (0, i.h)(this, { payable: r, gas: s });
        }
        format(t) {
          if (
            ((0, s.hu)(
              null != t && "sighash" !== t,
              "cannot format a constructor for sighash",
              "UNSUPPORTED_OPERATION",
              { operation: "format(sighash)" },
            ),
            "json" === t)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability: this.payable ? "payable" : "undefined",
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [`constructor${V(t, this.inputs)}`];
          return (
            e.push(this.payable ? "payable" : "nonpayable"),
            null != this.gas && e.push(`@${this.gas.toString()}`),
            e.join(" ")
          );
        }
        static from(t) {
          if (J.isFragment(t)) return t;
          if ("string" == typeof t) return J.from(E(t));
          if (t instanceof v) {
            N(t, o(["constructor"]));
            const e = T(t),
              n = !!N(t, o(["payable"])).has("payable"),
              r = I(t);
            return x(t), new J(S, "constructor", e, n, r);
          }
          return new J(
            S,
            "constructor",
            t.inputs ? t.inputs.map(j.from) : [],
            !!t.payable,
            null != t.gas ? t.gas : null,
          );
        }
        static isFragment(t) {
          return t && t[B] === F;
        }
      }
      class Z extends H {
        payable;
        constructor(t, e, n) {
          super(t, "fallback", e),
            Object.defineProperty(this, B, { value: M }),
            (0, i.h)(this, { payable: n });
        }
        format(t) {
          const e = 0 === this.inputs.length ? "receive" : "fallback";
          if ("json" === t) {
            const t = this.payable ? "payable" : "nonpayable";
            return JSON.stringify({ type: e, stateMutability: t });
          }
          return `${e}()${this.payable ? " payable" : ""}`;
        }
        static from(t) {
          if (Z.isFragment(t)) return t;
          if ("string" == typeof t) return Z.from(E(t));
          if (t instanceof v) {
            const e = t.toString(),
              n = t.peekKeyword(o(["fallback", "receive"]));
            if (
              ((0, s.en)(n, "type must be fallback or receive", "obj", e),
              "receive" === t.popKeyword(o(["fallback", "receive"])))
            ) {
              const e = T(t);
              return (
                (0, s.en)(
                  0 === e.length,
                  "receive cannot have arguments",
                  "obj.inputs",
                  e,
                ),
                N(t, o(["payable"])),
                x(t),
                new Z(S, [], !0)
              );
            }
            let r = T(t);
            r.length
              ? (0, s.en)(
                  1 === r.length && "bytes" === r[0].type,
                  "invalid fallback inputs",
                  "obj.inputs",
                  r.map((t) => t.format("minimal")).join(", "),
                )
              : (r = [j.from("bytes")]);
            const i = C(t);
            if (
              ((0, s.en)(
                "nonpayable" === i || "payable" === i,
                "fallback cannot be constants",
                "obj.stateMutability",
                i,
              ),
              N(t, o(["returns"])).has("returns"))
            ) {
              const e = T(t);
              (0, s.en)(
                1 === e.length && "bytes" === e[0].type,
                "invalid fallback outputs",
                "obj.outputs",
                e.map((t) => t.format("minimal")).join(", "),
              );
            }
            return x(t), new Z(S, r, "payable" === i);
          }
          if ("receive" === t.type) return new Z(S, [], !0);
          if ("fallback" === t.type) {
            const e = [j.from("bytes")],
              n = "payable" === t.stateMutability;
            return new Z(S, e, n);
          }
          (0, s.en)(!1, "invalid fallback description", "obj", t);
        }
        static isFragment(t) {
          return t && t[B] === M;
        }
      }
      class q extends _ {
        constant;
        outputs;
        stateMutability;
        payable;
        gas;
        constructor(t, e, n, r, s, a) {
          super(t, "function", e, r),
            Object.defineProperty(this, B, { value: G }),
            (s = Object.freeze(s.slice()));
          const o = "view" === n || "pure" === n,
            c = "payable" === n;
          (0, i.h)(this, {
            constant: o,
            gas: a,
            outputs: s,
            payable: c,
            stateMutability: n,
          });
        }
        get selector() {
          return (0, a.id)(this.format("sighash")).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
            });
          const e = [];
          return (
            "sighash" !== t && e.push("function"),
            e.push(this.name + V(t, this.inputs)),
            "sighash" !== t &&
              ("nonpayable" !== this.stateMutability &&
                e.push(this.stateMutability),
              this.outputs &&
                this.outputs.length &&
                (e.push("returns"), e.push(V(t, this.outputs))),
              null != this.gas && e.push(`@${this.gas.toString()}`)),
            e.join(" ")
          );
        }
        static getSelector(t, e) {
          return (
            (e = (e || []).map((t) => j.from(t))),
            new q(S, t, "view", e, [], null).selector
          );
        }
        static from(t) {
          if (q.isFragment(t)) return t;
          if ("string" == typeof t) return q.from(E(t));
          if (t instanceof v) {
            const e = k("function", t),
              n = T(t),
              r = C(t);
            let s = [];
            N(t, o(["returns"])).has("returns") && (s = T(t));
            const i = I(t);
            return x(t), new q(S, e, r, n, s, i);
          }
          let e = t.stateMutability;
          return (
            null == e &&
              ((e = "payable"),
              "boolean" == typeof t.constant
                ? ((e = "view"),
                  t.constant ||
                    ((e = "payable"),
                    "boolean" != typeof t.payable ||
                      t.payable ||
                      (e = "nonpayable")))
                : "boolean" != typeof t.payable ||
                  t.payable ||
                  (e = "nonpayable")),
            new q(
              S,
              t.name,
              e,
              t.inputs ? t.inputs.map(j.from) : [],
              t.outputs ? t.outputs.map(j.from) : [],
              null != t.gas ? t.gas : null,
            )
          );
        }
        static isFragment(t) {
          return t && t[B] === G;
        }
      }
      class W extends _ {
        constructor(t, e, n) {
          super(t, "struct", e, n),
            Object.defineProperty(this, B, { value: K });
        }
        format() {
          throw new Error("@TODO");
        }
        static from(t) {
          if ("string" == typeof t) return W.from(E(t));
          if (t instanceof v) {
            const e = k("struct", t),
              n = T(t);
            return x(t), new W(S, e, n);
          }
          return new W(S, t.name, t.inputs ? t.inputs.map(j.from) : []);
        }
        static isFragment(t) {
          return t && t[B] === K;
        }
      }
    },
    2790: (t, e, n) => {
      n.d(e, {
        CC: () => d,
        Dy: () => g,
        Hk: () => m,
        vU: () => A,
        vk: () => p,
      });
      var r = n(5143),
        s = n(2186),
        i = n(5857),
        a = n(6024),
        o = n(455),
        c = n(2229),
        u = n(274),
        l = n(8135),
        h = n(6052),
        f = n(4249);
      class d {
        fragment;
        name;
        signature;
        topic;
        args;
        constructor(t, e, n) {
          const r = t.name,
            s = t.format();
          (0, i.h)(this, {
            fragment: t,
            name: r,
            signature: s,
            topic: e,
            args: n,
          });
        }
      }
      class p {
        fragment;
        name;
        args;
        signature;
        selector;
        value;
        constructor(t, e, n, r) {
          const s = t.name,
            a = t.format();
          (0, i.h)(this, {
            fragment: t,
            name: s,
            args: n,
            signature: a,
            selector: e,
            value: r,
          });
        }
      }
      class g {
        fragment;
        name;
        args;
        signature;
        selector;
        constructor(t, e, n) {
          const r = t.name,
            s = t.format();
          (0, i.h)(this, {
            fragment: t,
            name: r,
            args: n,
            signature: s,
            selector: e,
          });
        }
      }
      class m {
        hash;
        _isIndexed;
        static isIndexed(t) {
          return !(!t || !t._isIndexed);
        }
        constructor(t) {
          (0, i.h)(this, { hash: t, _isIndexed: !0 });
        }
      }
      const y = {
          0: "generic panic",
          1: "assert(false)",
          17: "arithmetic overflow",
          18: "division or modulo by zero",
          33: "enum overflow",
          34: "invalid encoded storage byte array accessed",
          49: "out-of-bounds array access; popping on an empty array",
          50: "out-of-bounds access of an array or bytesN",
          65: "out of memory",
          81: "uninitialized function",
        },
        w = {
          "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: (t) => `reverted with reason string ${JSON.stringify(t)}`,
          },
          "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: (t) => {
              let e = "unknown panic code";
              return (
                t >= 0 && t <= 255 && y[t.toString()] && (e = y[t.toString()]),
                `reverted with panic code 0x${t.toString(16)} (${e})`
              );
            },
          },
        };
      class A {
        fragments;
        deploy;
        fallback;
        receive;
        #l;
        #h;
        #f;
        #d;
        constructor(t) {
          let e = [];
          (e = "string" == typeof t ? JSON.parse(t) : t),
            (this.#f = new Map()),
            (this.#l = new Map()),
            (this.#h = new Map());
          const n = [];
          for (const t of e)
            try {
              n.push(h.HY.from(t));
            } catch (t) {
              console.log("EE", t);
            }
          (0, i.h)(this, { fragments: Object.freeze(n) });
          let r = null,
            s = !1;
          (this.#d = this.getAbiCoder()),
            this.fragments.forEach((t, e) => {
              let n;
              switch (t.type) {
                case "constructor":
                  return this.deploy
                    ? void console.log("duplicate definition - constructor")
                    : void (0, i.h)(this, { deploy: t });
                case "fallback":
                  return void (0 === t.inputs.length
                    ? (s = !0)
                    : ((0, a.en)(
                        !r || t.payable !== r.payable,
                        "conflicting fallback fragments",
                        `fragments[${e}]`,
                        t,
                      ),
                      (r = t),
                      (s = r.payable)));
                case "function":
                  n = this.#f;
                  break;
                case "event":
                  n = this.#h;
                  break;
                case "error":
                  n = this.#l;
                  break;
                default:
                  return;
              }
              const o = t.format();
              n.has(o) || n.set(o, t);
            }),
            this.deploy ||
              (0, i.h)(this, { deploy: h.Xg.from("constructor()") }),
            (0, i.h)(this, { fallback: r, receive: s });
        }
        format(t) {
          const e = t ? "minimal" : "full";
          return this.fragments.map((t) => t.format(e));
        }
        formatJson() {
          const t = this.fragments.map((t) => t.format("json"));
          return JSON.stringify(t.map((t) => JSON.parse(t)));
        }
        getAbiCoder() {
          return u.R.defaultAbiCoder();
        }
        #p(t, e, n) {
          if ((0, o.A7)(t)) {
            const e = t.toLowerCase();
            for (const t of this.#f.values()) if (e === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf("(")) {
            const r = [];
            for (const [e, n] of this.#f) e.split("(")[0] === t && r.push(n);
            if (e) {
              const t = e.length > 0 ? e[e.length - 1] : null;
              let n = e.length,
                s = !0;
              f._.isTyped(t) && "overrides" === t.type && ((s = !1), n--);
              for (let t = r.length - 1; t >= 0; t--) {
                const e = r[t].inputs.length;
                e === n || (s && e === n - 1) || r.splice(t, 1);
              }
              for (let t = r.length - 1; t >= 0; t--) {
                const n = r[t].inputs;
                for (let s = 0; s < e.length; s++)
                  if (f._.isTyped(e[s])) {
                    if (s >= n.length) {
                      if ("overrides" === e[s].type) continue;
                      r.splice(t, 1);
                      break;
                    }
                    if (e[s].type !== n[s].baseType) {
                      r.splice(t, 1);
                      break;
                    }
                  }
              }
            }
            if (1 === r.length && e && e.length !== r[0].inputs.length) {
              const t = e[e.length - 1];
              (null == t || Array.isArray(t) || "object" != typeof t) &&
                r.splice(0, 1);
            }
            if (0 === r.length) return null;
            if (r.length > 1 && n) {
              const e = r.map((t) => JSON.stringify(t.format())).join(", ");
              (0, a.en)(
                !1,
                `ambiguous function description (i.e. matches ${e})`,
                "key",
                t,
              );
            }
            return r[0];
          }
          return this.#f.get(h.YW.from(t).format()) || null;
        }
        getFunctionName(t) {
          const e = this.#p(t, null, !1);
          return (0, a.en)(e, "no matching function", "key", t), e.name;
        }
        hasFunction(t) {
          return !!this.#p(t, null, !1);
        }
        getFunction(t, e) {
          return this.#p(t, e || null, !0);
        }
        forEachFunction(t) {
          const e = Array.from(this.#f.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#f.get(r), n);
          }
        }
        #g(t, e, n) {
          if ((0, o.A7)(t)) {
            const e = t.toLowerCase();
            for (const t of this.#h.values()) if (e === t.topicHash) return t;
            return null;
          }
          if (-1 === t.indexOf("(")) {
            const r = [];
            for (const [e, n] of this.#h) e.split("(")[0] === t && r.push(n);
            if (e) {
              for (let t = r.length - 1; t >= 0; t--)
                r[t].inputs.length < e.length && r.splice(t, 1);
              for (let t = r.length - 1; t >= 0; t--) {
                const n = r[t].inputs;
                for (let s = 0; s < e.length; s++)
                  if (f._.isTyped(e[s]) && e[s].type !== n[s].baseType) {
                    r.splice(t, 1);
                    break;
                  }
              }
            }
            if (0 === r.length) return null;
            if (r.length > 1 && n) {
              const e = r.map((t) => JSON.stringify(t.format())).join(", ");
              (0, a.en)(
                !1,
                `ambiguous event description (i.e. matches ${e})`,
                "key",
                t,
              );
            }
            return r[0];
          }
          return this.#h.get(h.QV.from(t).format()) || null;
        }
        getEventName(t) {
          const e = this.#g(t, null, !1);
          return (0, a.en)(e, "no matching event", "key", t), e.name;
        }
        hasEvent(t) {
          return !!this.#g(t, null, !1);
        }
        getEvent(t, e) {
          return this.#g(t, e || null, !0);
        }
        forEachEvent(t) {
          const e = Array.from(this.#h.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#h.get(r), n);
          }
        }
        getError(t, e) {
          if ((0, o.A7)(t)) {
            const e = t.toLowerCase();
            if (w[e]) return h.IC.from(w[e].signature);
            for (const t of this.#l.values()) if (e === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf("(")) {
            const e = [];
            for (const [n, r] of this.#l) n.split("(")[0] === t && e.push(r);
            if (0 === e.length)
              return "Error" === t
                ? h.IC.from("error Error(string)")
                : "Panic" === t
                ? h.IC.from("error Panic(uint256)")
                : null;
            if (e.length > 1) {
              const n = e.map((t) => JSON.stringify(t.format())).join(", ");
              (0, a.en)(
                !1,
                `ambiguous error description (i.e. ${n})`,
                "name",
                t,
              );
            }
            return e[0];
          }
          if ("Error(string)" === (t = h.IC.from(t).format()))
            return h.IC.from("error Error(string)");
          if ("Panic(uint256)" === t) return h.IC.from("error Panic(uint256)");
          return this.#l.get(t) || null;
        }
        forEachError(t) {
          const e = Array.from(this.#l.keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(this.#l.get(r), n);
          }
        }
        _decodeParams(t, e) {
          return this.#d.decode(t, e);
        }
        _encodeParams(t, e) {
          return this.#d.encode(t, e);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          if ("string" == typeof t) {
            const e = this.getError(t);
            (0, a.en)(e, "unknown error", "fragment", t), (t = e);
          }
          return (
            (0, a.en)(
              (0, o.QB)(e, 0, 4) === t.selector,
              `data signature does not match error ${t.name}.`,
              "data",
              e,
            ),
            this._decodeParams(t.inputs, (0, o.QB)(e, 4))
          );
        }
        encodeErrorResult(t, e) {
          if ("string" == typeof t) {
            const e = this.getError(t);
            (0, a.en)(e, "unknown error", "fragment", t), (t = e);
          }
          return (0, o.zo)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionData(t, e) {
          if ("string" == typeof t) {
            const e = this.getFunction(t);
            (0, a.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (
            (0, a.en)(
              (0, o.QB)(e, 0, 4) === t.selector,
              `data signature does not match function ${t.name}.`,
              "data",
              e,
            ),
            this._decodeParams(t.inputs, (0, o.QB)(e, 4))
          );
        }
        encodeFunctionData(t, e) {
          if ("string" == typeof t) {
            const e = this.getFunction(t);
            (0, a.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (0, o.zo)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionResult(t, e) {
          if ("string" == typeof t) {
            const e = this.getFunction(t);
            (0, a.en)(e, "unknown function", "fragment", t), (t = e);
          }
          let n = "invalid length for result data";
          const r = (0, o.h_)(e);
          if (r.length % 32 == 0)
            try {
              return this.#d.decode(t.outputs, r);
            } catch (t) {
              n = "could not decode result data";
            }
          (0, a.hu)(!1, n, "BAD_DATA", {
            value: (0, o.Dv)(r),
            info: { method: t.name, signature: t.format() },
          });
        }
        makeError(t, e) {
          const n = (0, o.Pw)(t, "data"),
            r = u.R.getBuiltinCallException("call", e, n);
          if (
            r.message.startsWith("execution reverted (unknown custom error)")
          ) {
            const t = (0, o.Dv)(n.slice(0, 4)),
              e = this.getError(t);
            if (e)
              try {
                const t = this.#d.decode(e.inputs, n.slice(4));
                (r.revert = { name: e.name, signature: e.format(), args: t }),
                  (r.reason = r.revert.signature),
                  (r.message = `execution reverted: ${r.reason}`);
              } catch (t) {
                r.message =
                  "execution reverted (coult not decode custom error)";
              }
          }
          const s = this.parseTransaction(e);
          return (
            s &&
              (r.invocation = {
                method: s.name,
                signature: s.signature,
                args: s.args,
              }),
            r
          );
        }
        encodeFunctionResult(t, e) {
          if ("string" == typeof t) {
            const e = this.getFunction(t);
            (0, a.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (0, o.Dv)(this.#d.encode(t.outputs, e || []));
        }
        encodeFilterTopics(t, e) {
          if ("string" == typeof t) {
            const e = this.getEvent(t);
            (0, a.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          (0, a.hu)(
            e.length <= t.inputs.length,
            `too many arguments for ${t.format()}`,
            "UNEXPECTED_ARGUMENT",
            { count: e.length, expectedCount: t.inputs.length },
          );
          const n = [];
          t.anonymous || n.push(t.topicHash);
          const i = (t, e) =>
            "string" === t.type
              ? (0, s.id)(e)
              : "bytes" === t.type
              ? (0, r.w)((0, o.Dv)(e))
              : ("bool" === t.type &&
                  "boolean" == typeof e &&
                  (e = e ? "0x01" : "0x00"),
                t.type.match(/^u?int/) && (e = (0, c.m9)(e)),
                "address" === t.type && this.#d.encode(["address"], [e]),
                (0, o.U3)((0, o.Dv)(e), 32));
          for (
            e.forEach((e, r) => {
              const s = t.inputs[r];
              s.indexed
                ? null == e
                  ? n.push(null)
                  : "array" === s.baseType || "tuple" === s.baseType
                  ? (0, a.en)(
                      !1,
                      "filtering with tuples or arrays not supported",
                      "contract." + s.name,
                      e,
                    )
                  : Array.isArray(e)
                  ? n.push(e.map((t) => i(s, t)))
                  : n.push(i(s, e))
                : (0, a.en)(
                    null == e,
                    "cannot filter non-indexed parameters; must be null",
                    "contract." + s.name,
                    e,
                  );
            });
            n.length && null === n[n.length - 1];

          )
            n.pop();
          return n;
        }
        encodeEventLog(t, e) {
          if ("string" == typeof t) {
            const e = this.getEvent(t);
            (0, a.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          const n = [],
            i = [],
            o = [];
          return (
            t.anonymous || n.push(t.topicHash),
            (0, a.en)(
              e.length === t.inputs.length,
              "event arguments/values mismatch",
              "values",
              e,
            ),
            t.inputs.forEach((t, a) => {
              const c = e[a];
              if (t.indexed)
                if ("string" === t.type) n.push((0, s.id)(c));
                else if ("bytes" === t.type) n.push((0, r.w)(c));
                else {
                  if ("tuple" === t.baseType || "array" === t.baseType)
                    throw new Error("not implemented");
                  n.push(this.#d.encode([t.type], [c]));
                }
              else i.push(t), o.push(c);
            }),
            { data: this.#d.encode(i, o), topics: n }
          );
        }
        decodeEventLog(t, e, n) {
          if ("string" == typeof t) {
            const e = this.getEvent(t);
            (0, a.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          if (null != n && !t.anonymous) {
            const e = t.topicHash;
            (0, a.en)(
              (0, o.A7)(n[0], 32) && n[0].toLowerCase() === e,
              "fragment/topic mismatch",
              "topics[0]",
              n[0],
            ),
              (n = n.slice(1));
          }
          const r = [],
            s = [],
            i = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.baseType ||
                "array" === t.baseType
                ? (r.push(h._R.from({ type: "bytes32", name: t.name })),
                  i.push(!0))
                : (r.push(t), i.push(!1))
              : (s.push(t), i.push(!1));
          });
          const c = null != n ? this.#d.decode(r, (0, o.zo)(n)) : null,
            u = this.#d.decode(s, e, !0),
            f = [],
            d = [];
          let p = 0,
            g = 0;
          return (
            t.inputs.forEach((t, e) => {
              let n = null;
              if (t.indexed)
                if (null == c) n = new m(null);
                else if (i[e]) n = new m(c[g++]);
                else
                  try {
                    n = c[g++];
                  } catch (t) {
                    n = t;
                  }
              else
                try {
                  n = u[p++];
                } catch (t) {
                  n = t;
                }
              f.push(n), d.push(t.name || null);
            }),
            l.x4.fromItems(f, d)
          );
        }
        parseTransaction(t) {
          const e = (0, o.Pw)(t.data, "tx.data"),
            n = (0, c.yT)(null != t.value ? t.value : 0, "tx.value"),
            r = this.getFunction((0, o.Dv)(e.slice(0, 4)));
          if (!r) return null;
          const s = this.#d.decode(r.inputs, e.slice(4));
          return new p(r, r.selector, s, n);
        }
        parseCallResult(t) {
          throw new Error("@TODO");
        }
        parseLog(t) {
          const e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new d(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
        }
        parseError(t) {
          const e = (0, o.Dv)(t),
            n = this.getError((0, o.QB)(e, 0, 4));
          if (!n) return null;
          const r = this.#d.decode(n.inputs, (0, o.QB)(e, 4));
          return new g(n, n.selector, r);
        }
        static from(t) {
          return t instanceof A
            ? t
            : "string" == typeof t
            ? new A(JSON.parse(t))
            : "function" == typeof t.format
            ? new A(t.format("json"))
            : new A(t);
        }
      }
    },
    4249: (t, e, n) => {
      n.d(e, { _: () => u });
      var r = n(6024),
        s = n(5857);
      const i = {};
      function a(t, e) {
        let n = !1;
        return (
          e < 0 && ((n = !0), (e *= -1)),
          new u(i, `${n ? "" : "u"}int${e}`, t, { signed: n, width: e })
        );
      }
      function o(t, e) {
        return new u(i, `bytes${e || ""}`, t, { size: e });
      }
      const c = Symbol.for("_ethers_typed");
      class u {
        type;
        value;
        #m;
        _typedSymbol;
        constructor(t, e, n, a) {
          null == a && (a = null),
            (0, r.NK)(i, t, "Typed"),
            (0, s.h)(this, { _typedSymbol: c, type: e, value: n }),
            (this.#m = a),
            this.format();
        }
        format() {
          if ("array" === this.type) throw new Error("");
          if ("dynamicArray" === this.type) throw new Error("");
          return "tuple" === this.type
            ? `tuple(${this.value.map((t) => t.format()).join(",")})`
            : this.type;
        }
        defaultValue() {
          return 0;
        }
        minValue() {
          return 0;
        }
        maxValue() {
          return 0;
        }
        isBigInt() {
          return !!this.type.match(/^u?int[0-9]+$/);
        }
        isData() {
          return this.type.startsWith("bytes");
        }
        isString() {
          return "string" === this.type;
        }
        get tupleName() {
          if ("tuple" !== this.type) throw TypeError("not a tuple");
          return this.#m;
        }
        get arrayLength() {
          if ("array" !== this.type) throw TypeError("not an array");
          return !0 === this.#m
            ? -1
            : !1 === this.#m
            ? this.value.length
            : null;
        }
        static from(t, e) {
          return new u(i, t, e);
        }
        static uint8(t) {
          return a(t, 8);
        }
        static uint16(t) {
          return a(t, 16);
        }
        static uint24(t) {
          return a(t, 24);
        }
        static uint32(t) {
          return a(t, 32);
        }
        static uint40(t) {
          return a(t, 40);
        }
        static uint48(t) {
          return a(t, 48);
        }
        static uint56(t) {
          return a(t, 56);
        }
        static uint64(t) {
          return a(t, 64);
        }
        static uint72(t) {
          return a(t, 72);
        }
        static uint80(t) {
          return a(t, 80);
        }
        static uint88(t) {
          return a(t, 88);
        }
        static uint96(t) {
          return a(t, 96);
        }
        static uint104(t) {
          return a(t, 104);
        }
        static uint112(t) {
          return a(t, 112);
        }
        static uint120(t) {
          return a(t, 120);
        }
        static uint128(t) {
          return a(t, 128);
        }
        static uint136(t) {
          return a(t, 136);
        }
        static uint144(t) {
          return a(t, 144);
        }
        static uint152(t) {
          return a(t, 152);
        }
        static uint160(t) {
          return a(t, 160);
        }
        static uint168(t) {
          return a(t, 168);
        }
        static uint176(t) {
          return a(t, 176);
        }
        static uint184(t) {
          return a(t, 184);
        }
        static uint192(t) {
          return a(t, 192);
        }
        static uint200(t) {
          return a(t, 200);
        }
        static uint208(t) {
          return a(t, 208);
        }
        static uint216(t) {
          return a(t, 216);
        }
        static uint224(t) {
          return a(t, 224);
        }
        static uint232(t) {
          return a(t, 232);
        }
        static uint240(t) {
          return a(t, 240);
        }
        static uint248(t) {
          return a(t, 248);
        }
        static uint256(t) {
          return a(t, 256);
        }
        static uint(t) {
          return a(t, 256);
        }
        static int8(t) {
          return a(t, -8);
        }
        static int16(t) {
          return a(t, -16);
        }
        static int24(t) {
          return a(t, -24);
        }
        static int32(t) {
          return a(t, -32);
        }
        static int40(t) {
          return a(t, -40);
        }
        static int48(t) {
          return a(t, -48);
        }
        static int56(t) {
          return a(t, -56);
        }
        static int64(t) {
          return a(t, -64);
        }
        static int72(t) {
          return a(t, -72);
        }
        static int80(t) {
          return a(t, -80);
        }
        static int88(t) {
          return a(t, -88);
        }
        static int96(t) {
          return a(t, -96);
        }
        static int104(t) {
          return a(t, -104);
        }
        static int112(t) {
          return a(t, -112);
        }
        static int120(t) {
          return a(t, -120);
        }
        static int128(t) {
          return a(t, -128);
        }
        static int136(t) {
          return a(t, -136);
        }
        static int144(t) {
          return a(t, -144);
        }
        static int152(t) {
          return a(t, -152);
        }
        static int160(t) {
          return a(t, -160);
        }
        static int168(t) {
          return a(t, -168);
        }
        static int176(t) {
          return a(t, -176);
        }
        static int184(t) {
          return a(t, -184);
        }
        static int192(t) {
          return a(t, -192);
        }
        static int200(t) {
          return a(t, -200);
        }
        static int208(t) {
          return a(t, -208);
        }
        static int216(t) {
          return a(t, -216);
        }
        static int224(t) {
          return a(t, -224);
        }
        static int232(t) {
          return a(t, -232);
        }
        static int240(t) {
          return a(t, -240);
        }
        static int248(t) {
          return a(t, -248);
        }
        static int256(t) {
          return a(t, -256);
        }
        static int(t) {
          return a(t, -256);
        }
        static bytes1(t) {
          return o(t, 1);
        }
        static bytes2(t) {
          return o(t, 2);
        }
        static bytes3(t) {
          return o(t, 3);
        }
        static bytes4(t) {
          return o(t, 4);
        }
        static bytes5(t) {
          return o(t, 5);
        }
        static bytes6(t) {
          return o(t, 6);
        }
        static bytes7(t) {
          return o(t, 7);
        }
        static bytes8(t) {
          return o(t, 8);
        }
        static bytes9(t) {
          return o(t, 9);
        }
        static bytes10(t) {
          return o(t, 10);
        }
        static bytes11(t) {
          return o(t, 11);
        }
        static bytes12(t) {
          return o(t, 12);
        }
        static bytes13(t) {
          return o(t, 13);
        }
        static bytes14(t) {
          return o(t, 14);
        }
        static bytes15(t) {
          return o(t, 15);
        }
        static bytes16(t) {
          return o(t, 16);
        }
        static bytes17(t) {
          return o(t, 17);
        }
        static bytes18(t) {
          return o(t, 18);
        }
        static bytes19(t) {
          return o(t, 19);
        }
        static bytes20(t) {
          return o(t, 20);
        }
        static bytes21(t) {
          return o(t, 21);
        }
        static bytes22(t) {
          return o(t, 22);
        }
        static bytes23(t) {
          return o(t, 23);
        }
        static bytes24(t) {
          return o(t, 24);
        }
        static bytes25(t) {
          return o(t, 25);
        }
        static bytes26(t) {
          return o(t, 26);
        }
        static bytes27(t) {
          return o(t, 27);
        }
        static bytes28(t) {
          return o(t, 28);
        }
        static bytes29(t) {
          return o(t, 29);
        }
        static bytes30(t) {
          return o(t, 30);
        }
        static bytes31(t) {
          return o(t, 31);
        }
        static bytes32(t) {
          return o(t, 32);
        }
        static address(t) {
          return new u(i, "address", t);
        }
        static bool(t) {
          return new u(i, "bool", !!t);
        }
        static bytes(t) {
          return new u(i, "bytes", t);
        }
        static string(t) {
          return new u(i, "string", t);
        }
        static array(t, e) {
          throw new Error("not implemented yet");
        }
        static tuple(t, e) {
          throw new Error("not implemented yet");
        }
        static overrides(t) {
          return new u(i, "overrides", Object.assign({}, t));
        }
        static isTyped(t) {
          return (
            t &&
            "object" == typeof t &&
            "_typedSymbol" in t &&
            t._typedSymbol === c
          );
        }
        static dereference(t, e) {
          if (u.isTyped(t)) {
            if (t.type !== e)
              throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);
            return t.value;
          }
          return t;
        }
      }
    },
    5556: (t, e, n) => {
      n.d(e, { K: () => d, v: () => p });
      var r = n(5143),
        s = n(455),
        i = n(6024);
      const a = BigInt(0),
        o = BigInt(36);
      function c(t) {
        const e = (t = t.toLowerCase()).substring(2).split(""),
          n = new Uint8Array(40);
        for (let t = 0; t < 40; t++) n[t] = e[t].charCodeAt(0);
        const i = (0, s.Pw)((0, r.w)(n));
        for (let t = 0; t < 40; t += 2)
          i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return "0x" + e.join("");
      }
      const u = {};
      for (let t = 0; t < 10; t++) u[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        u[String.fromCharCode(65 + t)] = String(10 + t);
      const l = 15;
      function h(t) {
        let e = (t =
          (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
          .split("")
          .map((t) => u[t])
          .join("");
        for (; e.length >= l; ) {
          let t = e.substring(0, l);
          e = (parseInt(t, 10) % 97) + e.substring(t.length);
        }
        let n = String(98 - (parseInt(e, 10) % 97));
        for (; n.length < 2; ) n = "0" + n;
        return n;
      }
      const f = (function () {
        const t = {};
        for (let e = 0; e < 36; e++)
          t["0123456789abcdefghijklmnopqrstuvwxyz"[e]] = BigInt(e);
        return t;
      })();
      function d(t) {
        if (
          ((0, i.en)("string" == typeof t, "invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        ) {
          t.startsWith("0x") || (t = "0x" + t);
          const e = c(t);
          return (
            (0, i.en)(
              !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
              "bad address checksum",
              "address",
              t,
            ),
            e
          );
        }
        if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (0, i.en)(
            t.substring(2, 4) === h(t),
            "bad icap checksum",
            "address",
            t,
          );
          let e = (function (t) {
            t = t.toLowerCase();
            let e = a;
            for (let n = 0; n < t.length; n++) e = e * o + f[t[n]];
            return e;
          })(t.substring(4)).toString(16);
          for (; e.length < 40; ) e = "0" + e;
          return c("0x" + e);
        }
        (0, i.en)(!1, "invalid address", "address", t);
      }
      function p(t) {
        let e = BigInt(d(t)).toString(36).toUpperCase();
        for (; e.length < 30; ) e = "0" + e;
        return "XE" + h("XE00" + e) + e;
      }
    },
    9554: (t, e, n) => {
      n.d(e, { RC: () => i, UJ: () => a, ru: () => c });
      var r = n(6024),
        s = n(5556);
      function i(t) {
        return t && "function" == typeof t.getAddress;
      }
      function a(t) {
        try {
          return (0, s.K)(t), !0;
        } catch (t) {}
        return !1;
      }
      async function o(t, e) {
        const n = await e;
        return (
          (null != n && "0x0000000000000000000000000000000000000000" !== n) ||
            ((0, r.hu)(
              "string" != typeof t,
              "unconfigured name",
              "UNCONFIGURED_NAME",
              { value: t },
            ),
            (0, r.en)(
              !1,
              "invalid AddressLike value; did not resolve to a value address",
              "target",
              t,
            )),
          (0, s.K)(n)
        );
      }
      function c(t, e) {
        return "string" == typeof t
          ? t.match(/^0x[0-9a-f]{40}$/i)
            ? (0, s.K)(t)
            : ((0, r.hu)(
                null != e,
                "ENS resolution requires a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "resolveName" },
              ),
              o(t, e.resolveName(t)))
          : i(t)
          ? o(t, t.getAddress())
          : t && "function" == typeof t.then
          ? o(t, t)
          : void (0, r.en)(!1, "unsupported addressable value", "target", t);
      }
    },
    3571: (t, e, n) => {
      n.d(e, { CH: () => B, Jc: () => b, VZ: () => S, rq: () => v });
      var r = n(4249),
        s = n(2790),
        i = n(9554),
        a = n(4101),
        o = n(5857),
        c = n(6024),
        u = n(2229),
        l = n(455),
        h = n(434);
      const f = BigInt(0);
      function d(t) {
        return t && "function" == typeof t.call;
      }
      function p(t) {
        return t && "function" == typeof t.estimateGas;
      }
      function g(t) {
        return t && "function" == typeof t.resolveName;
      }
      function m(t) {
        return t && "function" == typeof t.sendTransaction;
      }
      class y {
        #y;
        fragment;
        constructor(t, e, n) {
          if (((0, o.h)(this, { fragment: e }), e.inputs.length < n.length))
            throw new Error("too many arguments");
          const r = w(t.runner, "resolveName"),
            s = g(r) ? r : null;
          this.#y = (async function () {
            const r = await Promise.all(
              e.inputs.map((t, e) =>
                null == n[e]
                  ? null
                  : t.walkAsync(n[e], (t, e) =>
                      "address" === t ? (0, i.ru)(e, s) : e,
                    ),
              ),
            );
            return t.interface.encodeFilterTopics(e, r);
          })();
        }
        getTopicFilter() {
          return this.#y;
        }
      }
      function w(t, e) {
        return null == t
          ? null
          : "function" == typeof t[e]
          ? t
          : t.provider && "function" == typeof t.provider[e]
          ? t.provider
          : null;
      }
      function A(t) {
        return null == t ? null : t.provider || null;
      }
      async function b(t, e) {
        const n = (0, a.kK)(r._.dereference(t, "overrides"));
        return (
          (0, c.en)(
            null == n.to || (e || []).indexOf("to") >= 0,
            "cannot override to",
            "overrides.to",
            n.to,
          ),
          (0, c.en)(
            null == n.data || (e || []).indexOf("data") >= 0,
            "cannot override data",
            "overrides.data",
            n.data,
          ),
          n.from && (n.from = await (0, i.ru)(n.from)),
          n
        );
      }
      async function v(t, e, n) {
        const s = w(t, "resolveName"),
          a = g(s) ? s : null;
        return await Promise.all(
          e.map((t, e) =>
            t.walkAsync(
              n[e],
              (t, e) => (
                (e = r._.dereference(e, t)),
                "address" === t ? (0, i.ru)(e, a) : e
              ),
            ),
          ),
        );
      }
      function E(t) {
        const e = async function (e) {
            const n = await b(e, ["data"]);
            n.to = await t.getAddress();
            const r = t.interface,
              s = (0, u.yT)(n.value || f, "overrides.value") === f,
              i = "0x" === (n.data || "0x");
            !r.fallback ||
              r.fallback.payable ||
              !r.receive ||
              i ||
              s ||
              (0, c.en)(
                !1,
                "cannot send data to receive or send value to non-payable fallback",
                "overrides",
                e,
              ),
              (0, c.en)(
                r.fallback || i,
                "cannot send data to receive-only contract",
                "overrides.data",
                n.data,
              );
            const a = r.receive || (r.fallback && r.fallback.payable);
            return (
              (0, c.en)(
                a || s,
                "cannot send value to non-payable fallback",
                "overrides.value",
                n.value,
              ),
              (0, c.en)(
                r.fallback || i,
                "cannot send data to receive-only contract",
                "overrides.data",
                n.data,
              ),
              n
            );
          },
          n = async function (n) {
            const r = t.runner;
            (0, c.hu)(
              m(r),
              "contract runner does not support sending transactions",
              "UNSUPPORTED_OPERATION",
              { operation: "sendTransaction" },
            );
            const s = await r.sendTransaction(await e(n)),
              i = A(t.runner);
            return new h.n0(t.interface, i, s);
          },
          r = async (t) => await n(t);
        return (
          (0, o.h)(r, {
            _contract: t,
            estimateGas: async function (n) {
              const r = w(t.runner, "estimateGas");
              return (
                (0, c.hu)(
                  p(r),
                  "contract runner does not support gas estimation",
                  "UNSUPPORTED_OPERATION",
                  { operation: "estimateGas" },
                ),
                await r.estimateGas(await e(n))
              );
            },
            populateTransaction: e,
            send: n,
            staticCall: async function (n) {
              const r = w(t.runner, "call");
              (0, c.hu)(
                d(r),
                "contract runner does not support calling",
                "UNSUPPORTED_OPERATION",
                { operation: "call" },
              );
              const s = await e(n);
              try {
                return await r.call(s);
              } catch (e) {
                if ((0, c.Hl)(e) && e.data)
                  throw t.interface.makeError(e.data, s);
                throw e;
              }
            },
          }),
          r
        );
      }
      const P = Symbol.for("_ethersInternal_contract"),
        k = new WeakMap();
      function N(t) {
        return k.get(t[P]);
      }
      async function C(t, e) {
        let n,
          r = null;
        if (Array.isArray(e)) {
          const r = function (e) {
            if ((0, l.A7)(e, 32)) return e;
            const n = t.interface.getEvent(e);
            return (0, c.en)(n, "unknown fragment", "name", e), n.topicHash;
          };
          n = e.map((t) =>
            null == t ? null : Array.isArray(t) ? t.map(r) : r(t),
          );
        } else
          "*" === e
            ? (n = [null])
            : "string" == typeof e
            ? (0, l.A7)(e, 32)
              ? (n = [e])
              : ((r = t.interface.getEvent(e)),
                (0, c.en)(r, "unknown fragment", "event", e),
                (n = [r.topicHash]))
            : (s = e) &&
              "object" == typeof s &&
              "getTopicFilter" in s &&
              "function" == typeof s.getTopicFilter &&
              s.fragment
            ? (n = await e.getTopicFilter())
            : "fragment" in e
            ? ((r = e.fragment), (n = [r.topicHash]))
            : (0, c.en)(!1, "unknown event name", "event", e);
        var s;
        return (
          (n = n.map((t) => {
            if (null == t) return null;
            if (Array.isArray(t)) {
              const e = Array.from(
                new Set(t.map((t) => t.toLowerCase())).values(),
              );
              return 1 === e.length ? e[0] : (e.sort(), e);
            }
            return t.toLowerCase();
          })),
          {
            fragment: r,
            tag: n
              .map((t) =>
                null == t ? "null" : Array.isArray(t) ? t.join("|") : t,
              )
              .join("&"),
            topics: n,
          }
        );
      }
      async function T(t, e) {
        const { subs: n } = N(t);
        return n.get((await C(t, e)).tag) || null;
      }
      async function I(t, e, n) {
        const r = A(t.runner);
        (0, c.hu)(
          r,
          "contract runner does not support subscribing",
          "UNSUPPORTED_OPERATION",
          { operation: e },
        );
        const { fragment: s, tag: i, topics: a } = await C(t, n),
          { addr: o, subs: u } = N(t);
        let l = u.get(i);
        if (!l) {
          const e = { address: o || t, topics: a },
            c = (e) => {
              let r = s;
              if (null == r)
                try {
                  r = t.interface.getEvent(e.topics[0]);
                } catch (t) {}
              if (r) {
                const i = r,
                  a = s ? t.interface.decodeEventLog(s, e.data, e.topics) : [];
                R(t, n, a, (r) => new h.Vj(t, r, n, i, e));
              } else R(t, n, [], (r) => new h.Lo(t, r, n, e));
            };
          let f = [];
          (l = {
            tag: i,
            listeners: [],
            start: () => {
              f.length || f.push(r.on(e, c));
            },
            stop: async () => {
              if (0 == f.length) return;
              let t = f;
              (f = []), await Promise.all(t), r.off(e, c);
            },
          }),
            u.set(i, l);
        }
        return l;
      }
      let x = Promise.resolve();
      async function R(t, e, n, r) {
        try {
          await x;
        } catch (t) {}
        const s = (async function (t, e, n, r) {
          await x;
          const s = await T(t, e);
          if (!s) return !1;
          const i = s.listeners.length;
          return (
            (s.listeners = s.listeners.filter(({ listener: e, once: s }) => {
              const i = Array.from(n);
              r && i.push(r(s ? null : e));
              try {
                e.call(t, ...i);
              } catch (t) {}
              return !s;
            })),
            0 === s.listeners.length && (s.stop(), N(t).subs.delete(s.tag)),
            i > 0
          );
        })(t, e, n, r);
        return (x = s), await s;
      }
      const O = ["then"];
      class S {
        target;
        interface;
        runner;
        filters;
        [P];
        fallback;
        constructor(t, e, n, r) {
          (0, c.en)(
            "string" == typeof t || (0, i.RC)(t),
            "invalid value for Contract target",
            "target",
            t,
          ),
            null == n && (n = null);
          const a = s.vU.from(e);
          let u;
          (0, o.h)(this, { target: t, runner: n, interface: a }),
            Object.defineProperty(this, P, { value: {} });
          let f = null,
            d = null;
          if (r) {
            const t = A(n);
            d = new h.n0(this.interface, t, r);
          }
          let p = new Map();
          if ("string" == typeof t)
            if ((0, l.A7)(t)) (f = t), (u = Promise.resolve(t));
            else {
              const e = w(n, "resolveName");
              if (!g(e))
                throw (0, c.wf)(
                  "contract runner does not support name resolution",
                  "UNSUPPORTED_OPERATION",
                  { operation: "resolveName" },
                );
              u = e.resolveName(t).then((e) => {
                if (null == e)
                  throw (0, c.wf)(
                    "an ENS name used for a contract target must be correctly configured",
                    "UNCONFIGURED_NAME",
                    { value: t },
                  );
                return (N(this).addr = e), e;
              });
            }
          else
            u = t.getAddress().then((t) => {
              if (null == t) throw new Error("TODO");
              return (N(this).addr = t), t;
            });
          var m;
          (m = { addrPromise: u, addr: f, deployTx: d, subs: p }),
            k.set(this[P], m);
          const y = new Proxy(
            {},
            {
              get: (t, e, n) => {
                if (O.indexOf(e) >= 0) return Reflect.get(t, e, n);
                const r = String(e),
                  s = this.getEvent(r);
                if (s) return s;
                throw new Error(`unknown contract event: ${r}`);
              },
              has: (t, e) =>
                O.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : Reflect.has(t, e) || this.interface.hasEvent(String(e)),
            },
          );
          return (
            (0, o.h)(this, { filters: y }),
            (0, o.h)(this, {
              fallback: a.receive || a.fallback ? E(this) : null,
            }),
            new Proxy(this, {
              get: (t, e, n) => {
                if (e in t || O.indexOf(e) >= 0) return Reflect.get(t, e, n);
                const r = String(e),
                  s = t.getFunction(r);
                if (s) return s;
                throw new Error(`unknown contract method: ${r}`);
              },
              has: (t, e) =>
                e in t || O.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : t.interface.hasFunction(String(e)),
            })
          );
        }
        connect(t) {
          return new S(this.target, this.interface, t);
        }
        attach(t) {
          return new S(t, this.interface, this.runner);
        }
        async getAddress() {
          return await N(this).addrPromise;
        }
        async getDeployedCode() {
          const t = A(this.runner);
          (0, c.hu)(
            t,
            "runner does not support .provider",
            "UNSUPPORTED_OPERATION",
            { operation: "getDeployedCode" },
          );
          const e = await t.getCode(await this.getAddress());
          return "0x" === e ? null : e;
        }
        async waitForDeployment() {
          const t = this.deploymentTransaction();
          if (t) return await t.wait(), this;
          if (null != (await this.getDeployedCode())) return this;
          const e = A(this.runner);
          return (
            (0, c.hu)(
              null != e,
              "contract runner does not support .provider",
              "UNSUPPORTED_OPERATION",
              { operation: "waitForDeployment" },
            ),
            new Promise((t, n) => {
              const r = async () => {
                try {
                  if (null != (await this.getDeployedCode())) return t(this);
                  e.once("block", r);
                } catch (t) {
                  n(t);
                }
              };
              r();
            })
          );
        }
        deploymentTransaction() {
          return N(this).deployTx;
        }
        getFunction(t) {
          "string" != typeof t && (t = t.format());
          const e = (function (t, e) {
            const n = function (...n) {
                const r = t.interface.getFunction(e, n);
                return (
                  (0, c.hu)(
                    r,
                    "no matching fragment",
                    "UNSUPPORTED_OPERATION",
                    { operation: "fragment" },
                  ),
                  r
                );
              },
              r = async function (...e) {
                const r = n(...e);
                let s = {};
                if (
                  (r.inputs.length + 1 === e.length && (s = await b(e.pop())),
                  r.inputs.length !== e.length)
                )
                  throw new Error(
                    "internal error: fragment inputs doesn't match arguments; should not happen",
                  );
                const i = await v(t.runner, r.inputs, e);
                return Object.assign(
                  {},
                  s,
                  await (0, o.m)({
                    to: t.getAddress(),
                    data: t.interface.encodeFunctionData(r, i),
                  }),
                );
              },
              s = async function (...t) {
                const e = await a(...t);
                return 1 === e.length ? e[0] : e;
              },
              i = async function (...e) {
                const n = t.runner;
                (0, c.hu)(
                  m(n),
                  "contract runner does not support sending transactions",
                  "UNSUPPORTED_OPERATION",
                  { operation: "sendTransaction" },
                );
                const s = await n.sendTransaction(await r(...e)),
                  i = A(t.runner);
                return new h.n0(t.interface, i, s);
              },
              a = async function (...e) {
                const s = w(t.runner, "call");
                (0, c.hu)(
                  d(s),
                  "contract runner does not support calling",
                  "UNSUPPORTED_OPERATION",
                  { operation: "call" },
                );
                const i = await r(...e);
                let a = "0x";
                try {
                  a = await s.call(i);
                } catch (e) {
                  if ((0, c.Hl)(e) && e.data)
                    throw t.interface.makeError(e.data, i);
                  throw e;
                }
                const o = n(...e);
                return t.interface.decodeFunctionResult(o, a);
              },
              u = async (...t) =>
                n(...t).constant ? await s(...t) : await i(...t);
            return (
              (0, o.h)(u, {
                name: t.interface.getFunctionName(e),
                _contract: t,
                _key: e,
                getFragment: n,
                estimateGas: async function (...e) {
                  const n = w(t.runner, "estimateGas");
                  return (
                    (0, c.hu)(
                      p(n),
                      "contract runner does not support gas estimation",
                      "UNSUPPORTED_OPERATION",
                      { operation: "estimateGas" },
                    ),
                    await n.estimateGas(await r(...e))
                  );
                },
                populateTransaction: r,
                send: i,
                staticCall: s,
                staticCallResult: a,
              }),
              Object.defineProperty(u, "fragment", {
                configurable: !1,
                enumerable: !0,
                get: () => {
                  const n = t.interface.getFunction(e);
                  return (
                    (0, c.hu)(
                      n,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment" },
                    ),
                    n
                  );
                },
              }),
              u
            );
          })(this, t);
          return e;
        }
        getEvent(t) {
          return (
            "string" != typeof t && (t = t.format()),
            (function (t, e) {
              const n = function (...n) {
                  const r = t.interface.getEvent(e, n);
                  return (
                    (0, c.hu)(
                      r,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment" },
                    ),
                    r
                  );
                },
                r = function (...e) {
                  return new y(t, n(...e), e);
                };
              return (
                (0, o.h)(r, {
                  name: t.interface.getEventName(e),
                  _contract: t,
                  _key: e,
                  getFragment: n,
                }),
                Object.defineProperty(r, "fragment", {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    const n = t.interface.getEvent(e);
                    return (
                      (0, c.hu)(
                        n,
                        "no matching fragment",
                        "UNSUPPORTED_OPERATION",
                        { operation: "fragment" },
                      ),
                      n
                    );
                  },
                }),
                r
              );
            })(this, t)
          );
        }
        async queryTransaction(t) {
          throw new Error("@TODO");
        }
        async queryFilter(t, e, n) {
          null == e && (e = 0), null == n && (n = "latest");
          const { addr: r, addrPromise: s } = N(this),
            i = r || (await s),
            { fragment: o, topics: u } = await C(this, t),
            l = { address: i, topics: u, fromBlock: e, toBlock: n },
            f = A(this.runner);
          return (
            (0, c.hu)(
              f,
              "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "queryFilter" },
            ),
            (await f.getLogs(l)).map((t) => {
              let e = o;
              if (null == e)
                try {
                  e = this.interface.getEvent(t.topics[0]);
                } catch (t) {}
              return e ? new h.KI(t, this.interface, e) : new a.Zb(t, f);
            })
          );
        }
        async on(t, e) {
          const n = await I(this, "on", t);
          return n.listeners.push({ listener: e, once: !1 }), n.start(), this;
        }
        async once(t, e) {
          const n = await I(this, "once", t);
          return n.listeners.push({ listener: e, once: !0 }), n.start(), this;
        }
        async emit(t, ...e) {
          return await R(this, t, e, null);
        }
        async listenerCount(t) {
          if (t) {
            const e = await T(this, t);
            return e ? e.listeners.length : 0;
          }
          const { subs: e } = N(this);
          let n = 0;
          for (const { listeners: t } of e.values()) n += t.length;
          return n;
        }
        async listeners(t) {
          if (t) {
            const e = await T(this, t);
            return e ? e.listeners.map(({ listener: t }) => t) : [];
          }
          const { subs: e } = N(this);
          let n = [];
          for (const { listeners: t } of e.values())
            n = n.concat(t.map(({ listener: t }) => t));
          return n;
        }
        async off(t, e) {
          const n = await T(this, t);
          if (!n) return this;
          if (e) {
            const t = n.listeners.map(({ listener: t }) => t).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1);
          }
          return (
            (null != e && 0 !== n.listeners.length) ||
              (n.stop(), N(this).subs.delete(n.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            const e = await T(this, t);
            if (!e) return this;
            e.stop(), N(this).subs.delete(e.tag);
          } else {
            const { subs: t } = N(this);
            for (const { tag: e, stop: n } of t.values()) n(), t.delete(e);
          }
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return await this.off(t, e);
        }
        static buildClass(t) {
          return class extends S {
            constructor(e, n = null) {
              super(e, t, n);
            }
          };
        }
        static from(t, e, n) {
          return null == n && (n = null), new this(t, e, n);
        }
      }
      class B extends (function () {
        return S;
      })() {}
    },
    434: (t, e, n) => {
      n.d(e, {
        KI: () => a,
        Lo: () => u,
        Pl: () => o,
        Vj: () => l,
        n0: () => c,
      });
      var r = n(4101),
        s = n(5857),
        i = n(6539);
      class a extends r.Zb {
        interface;
        fragment;
        args;
        constructor(t, e, n) {
          super(t, t.provider);
          const r = e.decodeEventLog(n, t.data, t.topics);
          (0, s.h)(this, { args: r, fragment: n, interface: e });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
      class o extends r.IX {
        #w;
        constructor(t, e, n) {
          super(n, e), (this.#w = t);
        }
        get logs() {
          return super.logs.map((t) => {
            const e = t.topics.length ? this.#w.getEvent(t.topics[0]) : null;
            return e ? new a(t, this.#w, e) : t;
          });
        }
      }
      class c extends r.Mw {
        #w;
        constructor(t, e, n) {
          super(n, e), (this.#w = t);
        }
        async wait(t) {
          const e = await super.wait(t);
          return null == e ? null : new o(this.#w, this.provider, e);
        }
      }
      class u extends i.Z {
        log;
        constructor(t, e, n, r) {
          super(t, e, n), (0, s.h)(this, { log: r });
        }
        async getBlock() {
          return await this.log.getBlock();
        }
        async getTransaction() {
          return await this.log.getTransaction();
        }
        async getTransactionReceipt() {
          return await this.log.getTransactionReceipt();
        }
      }
      class l extends u {
        constructor(t, e, n, r, i) {
          super(t, e, n, new a(i, t.interface, r));
          const o = t.interface.decodeEventLog(
            r,
            this.log.data,
            this.log.topics,
          );
          (0, s.h)(this, { args: o, fragment: r });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
    },
    5143: (t, e, n) => {
      n.d(e, { w: () => T });
      var r = n(3527),
        s = n(1881),
        i = n(4979);
      const [a, o, c] = [[], [], []],
        u = BigInt(0),
        l = BigInt(1),
        h = BigInt(2),
        f = BigInt(7),
        d = BigInt(256),
        p = BigInt(113);
      for (let t = 0, e = l, n = 1, r = 0; t < 24; t++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          a.push(2 * (5 * r + n)),
          o.push((((t + 1) * (t + 2)) / 2) % 64);
        let s = u;
        for (let t = 0; t < 7; t++)
          (e = ((e << l) ^ ((e >> f) * p)) % d),
            e & h && (s ^= l << ((l << BigInt(t)) - l));
        c.push(s);
      }
      const [g, m] = s.ZP.split(c, !0),
        y = (t, e, n) => (n > 32 ? s.ZP.rotlBH(t, e, n) : s.ZP.rotlSH(t, e, n)),
        w = (t, e, n) => (n > 32 ? s.ZP.rotlBL(t, e, n) : s.ZP.rotlSL(t, e, n));
      class A extends i.kb {
        constructor(t, e, n, s = !1, a = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = n),
            (this.enableXOF = s),
            (this.rounds = a),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            r.ZP.number(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, i.Jq)(this.state));
        }
        keccak() {
          !(function (t, e = 24) {
            const n = new Uint32Array(10);
            for (let r = 24 - e; r < 24; r++) {
              for (let e = 0; e < 10; e++)
                n[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
              for (let e = 0; e < 10; e += 2) {
                const r = (e + 8) % 10,
                  s = (e + 2) % 10,
                  i = n[s],
                  a = n[s + 1],
                  o = y(i, a, 1) ^ n[r],
                  c = w(i, a, 1) ^ n[r + 1];
                for (let n = 0; n < 50; n += 10)
                  (t[e + n] ^= o), (t[e + n + 1] ^= c);
              }
              let e = t[2],
                s = t[3];
              for (let n = 0; n < 24; n++) {
                const r = o[n],
                  i = y(e, s, r),
                  c = w(e, s, r),
                  u = a[n];
                (e = t[u]), (s = t[u + 1]), (t[u] = i), (t[u + 1] = c);
              }
              for (let e = 0; e < 50; e += 10) {
                for (let r = 0; r < 10; r++) n[r] = t[e + r];
                for (let r = 0; r < 10; r++)
                  t[e + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
              }
              (t[0] ^= g[r]), (t[1] ^= m[r]);
            }
            n.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          r.ZP.exists(this);
          const { blockLen: e, state: n } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let r = 0; r < s; ) {
            const i = Math.min(e - this.pos, s - r);
            for (let e = 0; e < i; e++) n[this.pos++] ^= t[r++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: t, suffix: e, pos: n, blockLen: r } = this;
          (t[n] ^= e),
            0 != (128 & e) && n === r - 1 && this.keccak(),
            (t[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          r.ZP.exists(this, !1), r.ZP.bytes(t), this.finish();
          const e = this.state,
            { blockLen: n } = this;
          for (let r = 0, s = t.length; r < s; ) {
            this.posOut >= n && this.keccak();
            const i = Math.min(n - this.posOut, s - r);
            t.set(e.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return r.ZP.number(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if ((r.ZP.output(t, this), this.finished))
            throw new Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          const {
            blockLen: e,
            suffix: n,
            outputLen: r,
            rounds: s,
            enableXOF: i,
          } = this;
          return (
            t || (t = new A(e, n, r, i, s)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = s),
            (t.suffix = n),
            (t.outputLen = r),
            (t.enableXOF = i),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      const b = (t, e, n) => (0, i.hE)(() => new A(e, t, n)),
        v =
          (b(6, 144, 28),
          b(6, 136, 32),
          b(6, 104, 48),
          b(6, 72, 64),
          b(1, 144, 28),
          b(1, 136, 32)),
        E =
          (b(1, 104, 48),
          b(1, 72, 64),
          (t, e, n) =>
            (0, i.K$)(
              (r = {}) => new A(e, t, void 0 === r.dkLen ? n : r.dkLen, !0),
            ));
      E(31, 168, 16), E(31, 136, 32);
      var P = n(455);
      let k = !1;
      const N = function (t) {
        return v(t);
      };
      let C = N;
      function T(t) {
        const e = (0, P.Pw)(t, "data");
        return (0, P.Dv)(C(e));
      }
      (T._ = N),
        (T.lock = function () {
          k = !0;
        }),
        (T.register = function (t) {
          if (k) throw new TypeError("keccak256 is locked");
          C = t;
        }),
        Object.freeze(T);
    },
    1847: (t, e, n) => {
      n.r(e),
        n.d(e, {
          AbiCoder: () => c.R,
          AbstractProvider: () => zi,
          AbstractSigner: () => na,
          AlchemyProvider: () => Ea,
          AnkrProvider: () => ba,
          BaseContract: () => D.VZ,
          BaseWallet: () => Uo,
          Block: () => Oi.gO,
          BrowserProvider: () => eo,
          CloudflareProvider: () => Pa,
          ConstructorFragment: () => u.Xg,
          Contract: () => D.CH,
          ContractEventPayload: () => L.Vj,
          ContractFactory: () => U,
          ContractTransactionReceipt: () => L.Pl,
          ContractTransactionResponse: () => L.n0,
          ContractUnknownEventPayload: () => L.Lo,
          EnsPlugin: () => Ds,
          EnsResolver: () => Ai,
          ErrorDescription: () => h.Dy,
          ErrorFragment: () => u.IC,
          EtherSymbol: () => O,
          EtherscanPlugin: () => Na,
          EtherscanProvider: () => Ia,
          EventFragment: () => u.QV,
          EventLog: () => L.KI,
          EventPayload: () => oi.Z,
          FallbackFragment: () => u.Eh,
          FallbackProvider: () => Xa,
          FeeData: () => Oi.jW,
          FeeDataNetworkPlugin: () => Us,
          FetchCancelSignal: () => ks,
          FetchRequest: () => Cs,
          FetchResponse: () => Ts,
          FixedNumber: () => go,
          Fragment: () => u.HY,
          FunctionFragment: () => u.YW,
          GasCostPlugin: () => Bs,
          HDNodeVoidWallet: () => Hc,
          HDNodeWallet: () => jc,
          Indexed: () => h.Hk,
          InfuraProvider: () => Ma,
          InfuraWebSocketProvider: () => Fa,
          Interface: () => h.vU,
          IpcSocketProvider: () => so,
          JsonRpcApiProvider: () => pa,
          JsonRpcProvider: () => ma,
          JsonRpcSigner: () => da,
          LangEn: () => xo,
          Log: () => Oi.Zb,
          LogDescription: () => h.CC,
          MaxInt256: () => x,
          MaxUint256: () => T,
          MessagePrefix: () => S,
          MinInt256: () => I,
          Mnemonic: () => Do,
          MulticoinProviderPlugin: () => mi,
          N: () => N,
          NamedFragment: () => u.Js,
          Network: () => Fs,
          NetworkPlugin: () => Ss,
          NonceManager: () => to,
          ParamType: () => u._R,
          PocketProvider: () => ro,
          QuickNodeProvider: () => Ka,
          Result: () => l.x4,
          Signature: () => pe,
          SigningKey: () => yn,
          SocketBlockSubscriber: () => Oa,
          SocketEventSubscriber: () => Ba,
          SocketPendingSubscriber: () => Sa,
          SocketProvider: () => Da,
          SocketSubscriber: () => Ra,
          StructFragment: () => u.xs,
          Transaction: () => ai,
          TransactionDescription: () => h.vk,
          TransactionReceipt: () => Oi.IX,
          TransactionResponse: () => Oi.Mw,
          Typed: () => f._,
          TypedDataEncoder: () => fs,
          UnmanagedSubscriber: () => ji,
          Utf8ErrorFuncs: () => s.te,
          VoidSigner: () => ra,
          Wallet: () => Zc,
          WebSocketProvider: () => Ua,
          WeiPerEther: () => C,
          Wordlist: () => Co,
          WordlistOwl: () => To,
          WordlistOwlA: () => qc,
          ZeroAddress: () => k,
          ZeroHash: () => R,
          accessListify: () => Os.z,
          assert: () => A.hu,
          assertArgument: () => A.en,
          assertArgumentCount: () => A.fG,
          assertNormalize: () => A.fA,
          assertPrivate: () => A.NK,
          checkResultErrors: () => l.BR,
          computeAddress: () => jr,
          computeHmac: () => lt,
          concat: () => i.zo,
          copyRequest: () => Oi.kK,
          dataLength: () => i.M5,
          dataSlice: () => i.QB,
          decodeBase58: () => pi,
          decodeBase64: () => ps,
          decodeBytes32String: () => o,
          decodeRlp: () => _s,
          decryptCrowdsaleJson: () => zc,
          decryptKeystoreJson: () => Tc,
          decryptKeystoreJsonSync: () => Nc,
          defaultPath: () => Sc,
          defineProperties: () => B.h,
          dnsEncode: () => Kr,
          encodeBase58: () => di,
          encodeBase64: () => gs,
          encodeBytes32String: () => a,
          encodeRlp: () => w,
          encryptKeystoreJson: () => Oc,
          encryptKeystoreJsonSync: () => Rc,
          ensNormalize: () => Fr,
          formatEther: () => Ao,
          formatUnits: () => yo,
          fromTwos: () => p._Y,
          getAccountPath: () => _c,
          getAddress: () => b.K,
          getBigInt: () => p.yT,
          getBytes: () => i.Pw,
          getBytesCopy: () => i.h_,
          getCreate2Address: () => E,
          getCreateAddress: () => v,
          getDefaultProvider: () => $a,
          getIcapAddress: () => b.v,
          getIndexedAccountPath: () => Vc,
          getNumber: () => p.Dx,
          getUint: () => p.Qf,
          hashMessage: () => _r,
          hexlify: () => i.Dv,
          id: () => Xr.id,
          isAddress: () => P.UJ,
          isAddressable: () => P.RC,
          isBytesLike: () => i.Zq,
          isCallException: () => A.Hl,
          isCrowdsaleJson: () => Qc,
          isError: () => A.VZ,
          isHexString: () => i.A7,
          isKeystoreJson: () => Ec,
          isValidName: () => Mr,
          keccak256: () => d.w,
          lock: () => ie,
          makeError: () => A.wf,
          mask: () => p.sS,
          namehash: () => Gr,
          parseEther: () => bo,
          parseUnits: () => wo,
          pbkdf2: () => Bt,
          randomBytes: () => Ft,
          recoverAddress: () => Hr,
          resolveAddress: () => P.ru,
          resolveProperties: () => B.m,
          ripemd160: () => xt,
          scrypt: () => qt,
          scryptSync: () => Wt,
          sha256: () => re,
          sha512: () => se,
          showThrottleMessage: () => Rs,
          solidityPacked: () => qr,
          solidityPackedKeccak256: () => Wr,
          solidityPackedSha256: () => Yr,
          stripZerosLeft: () => i.Ou,
          toBeArray: () => p.ot,
          toBeHex: () => p.m9,
          toBigInt: () => p.Gh,
          toNumber: () => p.He,
          toQuantity: () => p.B4,
          toTwos: () => p.$j,
          toUtf8Bytes: () => s.Y0,
          toUtf8CodePoints: () => s.XL,
          toUtf8String: () => s.ZN,
          uuidV4: () => vo,
          verifyMessage: () => Vr,
          verifyTypedData: () => ds,
          version: () => r.i,
          wordlists: () => Wc,
          zeroPadBytes: () => i.SK,
          zeroPadValue: () => i.U3,
        });
      var r = n(742),
        s = n(7155),
        i = n(455);
      function a(t) {
        const e = (0, s.Y0)(t);
        if (e.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, i.SK)(e, 32);
      }
      function o(t) {
        const e = (0, i.Pw)(t, "bytes");
        if (32 !== e.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== e[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let n = 31;
        for (; 0 === e[n - 1]; ) n--;
        return (0, s.ZN)(e.slice(0, n));
      }
      var c = n(274),
        u = n(6052),
        l = n(8135),
        h = n(2790),
        f = n(4249),
        d = n(5143),
        p = n(2229);
      function g(t) {
        const e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      function m(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(m(t));
            }),
            e.length <= 55)
          )
            return e.unshift(192 + e.length), e;
          const n = g(e.length);
          return n.unshift(247 + n.length), n.concat(e);
        }
        const e = Array.prototype.slice.call((0, i.Pw)(t, "object"));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return e.unshift(128 + e.length), e;
        const n = g(e.length);
        return n.unshift(183 + n.length), n.concat(e);
      }
      const y = "0123456789abcdef";
      function w(t) {
        let e = "0x";
        for (const n of m(t)) (e += y[n >> 4]), (e += y[15 & n]);
        return e;
      }
      var A = n(6024),
        b = n(5556);
      function v(t) {
        const e = (0, b.K)(t.from);
        let n = (0, p.yT)(t.nonce, "tx.nonce").toString(16);
        return (
          (n = "0" === n ? "0x" : n.length % 2 ? "0x0" + n : "0x" + n),
          (0, b.K)((0, i.QB)((0, d.w)(w([e, n])), 12))
        );
      }
      function E(t, e, n) {
        const r = (0, b.K)(t),
          s = (0, i.Pw)(e, "salt"),
          a = (0, i.Pw)(n, "initCodeHash");
        return (
          (0, A.en)(32 === s.length, "salt must be 32 bytes", "salt", e),
          (0, A.en)(
            32 === a.length,
            "initCodeHash must be 32 bytes",
            "initCodeHash",
            n,
          ),
          (0, b.K)((0, i.QB)((0, d.w)((0, i.zo)(["0xff", r, s, a])), 12))
        );
      }
      var P = n(9554);
      const k = "0x0000000000000000000000000000000000000000",
        N = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
        ),
        C = BigInt("1000000000000000000"),
        T = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        ),
        I =
          BigInt(
            "0x8000000000000000000000000000000000000000000000000000000000000000",
          ) * BigInt(-1),
        x = BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        ),
        R =
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        O = "Ξ",
        S = "Ethereum Signed Message:\n";
      var B = n(5857),
        D = n(3571);
      class U {
        interface;
        bytecode;
        runner;
        constructor(t, e, n) {
          const r = h.vU.from(t);
          e instanceof Uint8Array ||
            ("object" == typeof e && (e = e.object),
            e.startsWith("0x") || (e = "0x" + e)),
            (e = (0, i.Dv)((0, i.Pw)(e))),
            (0, B.h)(this, { bytecode: e, interface: r, runner: n || null });
        }
        attach(t) {
          return new D.VZ(t, this.interface, this.runner);
        }
        async getDeployTransaction(...t) {
          let e = {};
          const n = this.interface.deploy;
          if (
            (n.inputs.length + 1 === t.length && (e = await (0, D.Jc)(t.pop())),
            n.inputs.length !== t.length)
          )
            throw new Error("incorrect number of arguments to constructor");
          const r = await (0, D.rq)(this.runner, n.inputs, t),
            s = (0, i.zo)([this.bytecode, this.interface.encodeDeploy(r)]);
          return Object.assign({}, e, { data: s });
        }
        async deploy(...t) {
          const e = await this.getDeployTransaction(...t);
          (0, A.hu)(
            this.runner && "function" == typeof this.runner.sendTransaction,
            "factory runner does not support sending transactions",
            "UNSUPPORTED_OPERATION",
            { operation: "sendTransaction" },
          );
          const n = await this.runner.sendTransaction(e),
            r = v(n);
          return new D.VZ(r, this.interface, this.runner, n);
        }
        connect(t) {
          return new U(this.interface, this.bytecode, t);
        }
        static fromSolidity(t, e) {
          (0, A.en)(null != t, "bad compiler output", "output", t),
            "string" == typeof t && (t = JSON.parse(t));
          const n = t.abi;
          let r = "";
          return (
            t.bytecode
              ? (r = t.bytecode)
              : t.evm && t.evm.bytecode && (r = t.evm.bytecode),
            new this(n, r, e)
          );
        }
      }
      var L = n(434),
        F = n(3527),
        M = n(4979);
      class G extends M.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), F.ZP.hash(t);
          const n = (0, M.O0)(e);
          if (((this.iHash = t.create()), !(this.iHash instanceof M.kb)))
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          const r = (this.blockLen = this.iHash.blockLen);
          this.outputLen = this.iHash.outputLen;
          const s = new Uint8Array(r);
          s.set(
            n.length > this.iHash.blockLen ? t.create().update(n).digest() : n,
          );
          for (let t = 0; t < s.length; t++) s[t] ^= 54;
          this.iHash.update(s), (this.oHash = t.create());
          for (let t = 0; t < s.length; t++) s[t] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(t) {
          return F.ZP.exists(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          F.ZP.exists(this),
            F.ZP.bytes(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          const t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: n,
            finished: r,
            destroyed: s,
            blockLen: i,
            outputLen: a,
          } = this;
          return (
            (t.finished = r),
            (t.destroyed = s),
            (t.blockLen = i),
            (t.outputLen = a),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = n._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      const K = (t, e, n) => new G(t, e).update(n).digest();
      function j(t, e, n, r) {
        const {
          c: s,
          dkLen: i,
          DK: a,
          PRF: o,
          PRFSalt: c,
        } = (function (t, e, n, r) {
          F.ZP.hash(t);
          const s = (0, M.U5)({ dkLen: 32, asyncTick: 10 }, r),
            { c: i, dkLen: a, asyncTick: o } = s;
          if ((F.ZP.number(i), F.ZP.number(a), F.ZP.number(o), i < 1))
            throw new Error("PBKDF2: iterations (c) should be >= 1");
          const c = (0, M.O0)(e),
            u = (0, M.O0)(n),
            l = new Uint8Array(a),
            h = K.create(t, c),
            f = h._cloneInto().update(u);
          return { c: i, dkLen: a, asyncTick: o, DK: l, PRF: h, PRFSalt: f };
        })(t, e, n, r);
        let u;
        const l = new Uint8Array(4),
          h = (0, M.GL)(l),
          f = new Uint8Array(o.outputLen);
        for (let t = 1, e = 0; e < i; t++, e += o.outputLen) {
          const n = a.subarray(e, e + o.outputLen);
          h.setInt32(0, t, !1),
            (u = c._cloneInto(u)).update(l).digestInto(f),
            n.set(f.subarray(0, n.length));
          for (let t = 1; t < s; t++) {
            o._cloneInto(u).update(f).digestInto(f);
            for (let t = 0; t < n.length; t++) n[t] ^= f[t];
          }
        }
        return (function (t, e, n, r, s) {
          return t.destroy(), e.destroy(), r && r.destroy(), s.fill(0), n;
        })(o, c, a, u, f);
      }
      K.create = (t, e) => new G(t, e);
      class H extends M.kb {
        constructor(t, e, n, r) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, M.GL)(this.buffer));
        }
        update(t) {
          F.ZP.exists(this);
          const { view: e, buffer: n, blockLen: r } = this,
            s = (t = (0, M.O0)(t)).length;
          for (let i = 0; i < s; ) {
            const a = Math.min(r - this.pos, s - i);
            if (a !== r)
              n.set(t.subarray(i, i + a), this.pos),
                (this.pos += a),
                (i += a),
                this.pos === r && (this.process(e, 0), (this.pos = 0));
            else {
              const e = (0, M.GL)(t);
              for (; r <= s - i; i += r) this.process(e, i);
            }
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          F.ZP.exists(this), F.ZP.output(t, this), (this.finished = !0);
          const { buffer: e, view: n, blockLen: r, isLE: s } = this;
          let { pos: i } = this;
          (e[i++] = 128),
            this.buffer.subarray(i).fill(0),
            this.padOffset > r - i && (this.process(n, 0), (i = 0));
          for (let t = i; t < r; t++) e[t] = 0;
          !(function (t, e, n, r) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, n, r);
            const s = BigInt(32),
              i = BigInt(4294967295),
              a = Number((n >> s) & i),
              o = Number(n & i),
              c = r ? 4 : 0,
              u = r ? 0 : 4;
            t.setUint32(e + c, a, r), t.setUint32(e + u, o, r);
          })(n, r - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          const a = (0, M.GL)(t);
          this.get().forEach((t, e) => a.setUint32(4 * e, t, s));
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const n = t.slice(0, e);
          return this.destroy(), n;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          const {
            blockLen: e,
            buffer: n,
            length: r,
            finished: s,
            destroyed: i,
            pos: a,
          } = this;
          return (
            (t.length = r),
            (t.pos = a),
            (t.finished = s),
            (t.destroyed = i),
            r % e && t.buffer.set(n),
            t
          );
        }
      }
      const _ = (t, e, n) => (t & e) ^ (t & n) ^ (e & n),
        V = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        Q = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        z = new Uint32Array(64);
      class J extends H {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | Q[0]),
            (this.B = 0 | Q[1]),
            (this.C = 0 | Q[2]),
            (this.D = 0 | Q[3]),
            (this.E = 0 | Q[4]),
            (this.F = 0 | Q[5]),
            (this.G = 0 | Q[6]),
            (this.H = 0 | Q[7]);
        }
        get() {
          const { A: t, B: e, C: n, D: r, E: s, F: i, G: a, H: o } = this;
          return [t, e, n, r, s, i, a, o];
        }
        set(t, e, n, r, s, i, a, o) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | s),
            (this.F = 0 | i),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) z[n] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            const e = z[t - 15],
              n = z[t - 2],
              r = (0, M.np)(e, 7) ^ (0, M.np)(e, 18) ^ (e >>> 3),
              s = (0, M.np)(n, 17) ^ (0, M.np)(n, 19) ^ (n >>> 10);
            z[t] = (s + z[t - 7] + r + z[t - 16]) | 0;
          }
          let { A: n, B: r, C: s, D: i, E: a, F: o, G: c, H: u } = this;
          for (let t = 0; t < 64; t++) {
            const e =
                (u +
                  ((0, M.np)(a, 6) ^ (0, M.np)(a, 11) ^ (0, M.np)(a, 25)) +
                  (((l = a) & o) ^ (~l & c)) +
                  V[t] +
                  z[t]) |
                0,
              h =
                (((0, M.np)(n, 2) ^ (0, M.np)(n, 13) ^ (0, M.np)(n, 22)) +
                  _(n, r, s)) |
                0;
            (u = c),
              (c = o),
              (o = a),
              (a = (i + e) | 0),
              (i = s),
              (s = r),
              (r = n),
              (n = (e + h) | 0);
          }
          var l;
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (s = (s + this.C) | 0),
            (i = (i + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(n, r, s, i, a, o, c, u);
        }
        roundClean() {
          z.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      const Z = (0, M.hE)(() => new J());
      var q = n(1881);
      const [W, Y] = q.ZP.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t)),
        ),
        X = new Uint32Array(80),
        $ = new Uint32Array(80);
      class tt extends H {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          const {
            Ah: t,
            Al: e,
            Bh: n,
            Bl: r,
            Ch: s,
            Cl: i,
            Dh: a,
            Dl: o,
            Eh: c,
            El: u,
            Fh: l,
            Fl: h,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: g,
          } = this;
          return [t, e, n, r, s, i, a, o, c, u, l, h, f, d, p, g];
        }
        set(t, e, n, r, s, i, a, o, c, u, l, h, f, d, p, g) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | s),
            (this.Cl = 0 | i),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4)
            (X[n] = t.getUint32(e)), ($[n] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            const e = 0 | X[t - 15],
              n = 0 | $[t - 15],
              r =
                q.ZP.rotrSH(e, n, 1) ^
                q.ZP.rotrSH(e, n, 8) ^
                q.ZP.shrSH(e, n, 7),
              s =
                q.ZP.rotrSL(e, n, 1) ^
                q.ZP.rotrSL(e, n, 8) ^
                q.ZP.shrSL(e, n, 7),
              i = 0 | X[t - 2],
              a = 0 | $[t - 2],
              o =
                q.ZP.rotrSH(i, a, 19) ^
                q.ZP.rotrBH(i, a, 61) ^
                q.ZP.shrSH(i, a, 6),
              c =
                q.ZP.rotrSL(i, a, 19) ^
                q.ZP.rotrBL(i, a, 61) ^
                q.ZP.shrSL(i, a, 6),
              u = q.ZP.add4L(s, c, $[t - 7], $[t - 16]),
              l = q.ZP.add4H(u, r, o, X[t - 7], X[t - 16]);
            (X[t] = 0 | l), ($[t] = 0 | u);
          }
          let {
            Ah: n,
            Al: r,
            Bh: s,
            Bl: i,
            Ch: a,
            Cl: o,
            Dh: c,
            Dl: u,
            Eh: l,
            El: h,
            Fh: f,
            Fl: d,
            Gh: p,
            Gl: g,
            Hh: m,
            Hl: y,
          } = this;
          for (let t = 0; t < 80; t++) {
            const e =
                q.ZP.rotrSH(l, h, 14) ^
                q.ZP.rotrSH(l, h, 18) ^
                q.ZP.rotrBH(l, h, 41),
              w =
                q.ZP.rotrSL(l, h, 14) ^
                q.ZP.rotrSL(l, h, 18) ^
                q.ZP.rotrBL(l, h, 41),
              A = (l & f) ^ (~l & p),
              b = (h & d) ^ (~h & g),
              v = q.ZP.add5L(y, w, b, Y[t], $[t]),
              E = q.ZP.add5H(v, m, e, A, W[t], X[t]),
              P = 0 | v,
              k =
                q.ZP.rotrSH(n, r, 28) ^
                q.ZP.rotrBH(n, r, 34) ^
                q.ZP.rotrBH(n, r, 39),
              N =
                q.ZP.rotrSL(n, r, 28) ^
                q.ZP.rotrBL(n, r, 34) ^
                q.ZP.rotrBL(n, r, 39),
              C = (n & s) ^ (n & a) ^ (s & a),
              T = (r & i) ^ (r & o) ^ (i & o);
            (m = 0 | p),
              (y = 0 | g),
              (p = 0 | f),
              (g = 0 | d),
              (f = 0 | l),
              (d = 0 | h),
              ({ h: l, l: h } = q.ZP.add(0 | c, 0 | u, 0 | E, 0 | P)),
              (c = 0 | a),
              (u = 0 | o),
              (a = 0 | s),
              (o = 0 | i),
              (s = 0 | n),
              (i = 0 | r);
            const I = q.ZP.add3L(P, N, T);
            (n = q.ZP.add3H(I, E, k, C)), (r = 0 | I);
          }
          ({ h: n, l: r } = q.ZP.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: s, l: i } = q.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | i)),
            ({ h: a, l: o } = q.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)),
            ({ h: c, l: u } = q.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | u)),
            ({ h: l, l: h } = q.ZP.add(0 | this.Eh, 0 | this.El, 0 | l, 0 | h)),
            ({ h: f, l: d } = q.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | d)),
            ({ h: p, l: g } = q.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
            ({ h: m, l: y } = q.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | m, 0 | y)),
            this.set(n, r, s, i, a, o, c, u, l, h, f, d, p, g, m, y);
        }
        roundClean() {
          X.fill(0), $.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      class et extends tt {
        constructor() {
          super(),
            (this.Ah = 573645204),
            (this.Al = -64227540),
            (this.Bh = -1621794909),
            (this.Bl = -934517566),
            (this.Ch = 596883563),
            (this.Cl = 1867755857),
            (this.Dh = -1774684391),
            (this.Dl = 1497426621),
            (this.Eh = -1775747358),
            (this.El = -1467023389),
            (this.Fh = -1101128155),
            (this.Fl = 1401305490),
            (this.Gh = 721525244),
            (this.Gl = 746961066),
            (this.Hh = 246885852),
            (this.Hl = -2117784414),
            (this.outputLen = 32);
        }
      }
      class nt extends tt {
        constructor() {
          super(),
            (this.Ah = -876896931),
            (this.Al = -1056596264),
            (this.Bh = 1654270250),
            (this.Bl = 914150663),
            (this.Ch = -1856437926),
            (this.Cl = 812702999),
            (this.Dh = 355462360),
            (this.Dl = -150054599),
            (this.Eh = 1731405415),
            (this.El = -4191439),
            (this.Fh = -1900787065),
            (this.Fl = 1750603025),
            (this.Gh = -619958771),
            (this.Gl = 1694076839),
            (this.Hh = 1203062813),
            (this.Hl = -1090891868),
            (this.outputLen = 48);
        }
      }
      const rt = (0, M.hE)(() => new tt());
      (0, M.hE)(() => new et()), (0, M.hE)(() => new nt());
      const st = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof global) return global;
          throw new Error("unable to locate global object");
        })(),
        it = st.crypto || st.msCrypto;
      function at(t) {
        switch (t) {
          case "sha256":
            return Z.create();
          case "sha512":
            return rt.create();
        }
        (0, A.en)(!1, "invalid hashing algorithm name", "algorithm", t);
      }
      let ot = !1;
      const ct = function (t, e, n) {
        return (function (t, e) {
          const n = { sha256: Z, sha512: rt }[t];
          return (
            (0, A.en)(null != n, "invalid hmac algorithm", "algorithm", t),
            K.create(n, e)
          );
        })(t, e)
          .update(n)
          .digest();
      };
      let ut = ct;
      function lt(t, e, n) {
        const r = (0, i.Pw)(e, "key"),
          s = (0, i.Pw)(n, "data");
        return (0, i.Dv)(ut(t, r, s));
      }
      (lt._ = ct),
        (lt.lock = function () {
          ot = !0;
        }),
        (lt.register = function (t) {
          if (ot) throw new Error("computeHmac is locked");
          ut = t;
        }),
        Object.freeze(lt);
      const ht = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        ft = Uint8Array.from({ length: 16 }, (t, e) => e),
        dt = ft.map((t) => (9 * t + 5) % 16);
      let pt = [ft],
        gt = [dt];
      for (let t = 0; t < 4; t++)
        for (let e of [pt, gt]) e.push(e[t].map((t) => ht[t]));
      const mt = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => new Uint8Array(t)),
        yt = pt.map((t, e) => t.map((t) => mt[e][t])),
        wt = gt.map((t, e) => t.map((t) => mt[e][t])),
        At = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        bt = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        vt = (t, e) => (t << e) | (t >>> (32 - e));
      function Et(t, e, n, r) {
        return 0 === t
          ? e ^ n ^ r
          : 1 === t
          ? (e & n) | (~e & r)
          : 2 === t
          ? (e | ~n) ^ r
          : 3 === t
          ? (e & r) | (n & ~r)
          : e ^ (n | ~r);
      }
      const Pt = new Uint32Array(16);
      class kt extends H {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          const { h0: t, h1: e, h2: n, h3: r, h4: s } = this;
          return [t, e, n, r, s];
        }
        set(t, e, n, r, s) {
          (this.h0 = 0 | t),
            (this.h1 = 0 | e),
            (this.h2 = 0 | n),
            (this.h3 = 0 | r),
            (this.h4 = 0 | s);
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) Pt[n] = t.getUint32(e, !0);
          let n = 0 | this.h0,
            r = n,
            s = 0 | this.h1,
            i = s,
            a = 0 | this.h2,
            o = a,
            c = 0 | this.h3,
            u = c,
            l = 0 | this.h4,
            h = l;
          for (let t = 0; t < 5; t++) {
            const e = 4 - t,
              f = At[t],
              d = bt[t],
              p = pt[t],
              g = gt[t],
              m = yt[t],
              y = wt[t];
            for (let e = 0; e < 16; e++) {
              const r = (vt(n + Et(t, s, a, c) + Pt[p[e]] + f, m[e]) + l) | 0;
              (n = l), (l = c), (c = 0 | vt(a, 10)), (a = s), (s = r);
            }
            for (let t = 0; t < 16; t++) {
              const n = (vt(r + Et(e, i, o, u) + Pt[g[t]] + d, y[t]) + h) | 0;
              (r = h), (h = u), (u = 0 | vt(o, 10)), (o = i), (i = n);
            }
          }
          this.set(
            (this.h1 + a + u) | 0,
            (this.h2 + c + h) | 0,
            (this.h3 + l + r) | 0,
            (this.h4 + n + i) | 0,
            (this.h0 + s + o) | 0,
          );
        }
        roundClean() {
          Pt.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      const Nt = (0, M.hE)(() => new kt());
      let Ct = !1;
      const Tt = function (t) {
        return Nt(t);
      };
      let It = Tt;
      function xt(t) {
        const e = (0, i.Pw)(t, "data");
        return (0, i.Dv)(It(e));
      }
      (xt._ = Tt),
        (xt.lock = function () {
          Ct = !0;
        }),
        (xt.register = function (t) {
          if (Ct) throw new TypeError("ripemd160 is locked");
          It = t;
        }),
        Object.freeze(xt);
      let Rt = !1;
      const Ot = function (t, e, n, r, s) {
        return (function (t, e, n, r, s) {
          const i = { sha256: Z, sha512: rt }[s];
          return (
            (0, A.en)(null != i, "invalid pbkdf2 algorithm", "algorithm", s),
            j(i, t, e, { c: n, dkLen: r })
          );
        })(t, e, n, r, s);
      };
      let St = Ot;
      function Bt(t, e, n, r, s) {
        const a = (0, i.Pw)(t, "password"),
          o = (0, i.Pw)(e, "salt");
        return (0, i.Dv)(St(a, o, n, r, s));
      }
      (Bt._ = Ot),
        (Bt.lock = function () {
          Rt = !0;
        }),
        (Bt.register = function (t) {
          if (Rt) throw new Error("pbkdf2 is locked");
          St = t;
        }),
        Object.freeze(Bt);
      let Dt = !1;
      const Ut = function (t) {
        return new Uint8Array(
          (function (t) {
            (0, A.hu)(
              null != it,
              "platform does not support secure random numbers",
              "UNSUPPORTED_OPERATION",
              { operation: "randomBytes" },
            ),
              (0, A.en)(
                Number.isInteger(t) && t > 0 && t <= 1024,
                "invalid length",
                "length",
                t,
              );
            const e = new Uint8Array(t);
            return it.getRandomValues(e), e;
          })(t),
        );
      };
      let Lt = Ut;
      function Ft(t) {
        return Lt(t);
      }
      (Ft._ = Ut),
        (Ft.lock = function () {
          Dt = !0;
        }),
        (Ft.register = function (t) {
          if (Dt) throw new Error("randomBytes is locked");
          Lt = t;
        }),
        Object.freeze(Ft);
      const Mt = (t, e) => (t << e) | (t >>> (32 - e));
      function Gt(t, e, n, r, s, i) {
        let a = t[e++] ^ n[r++],
          o = t[e++] ^ n[r++],
          c = t[e++] ^ n[r++],
          u = t[e++] ^ n[r++],
          l = t[e++] ^ n[r++],
          h = t[e++] ^ n[r++],
          f = t[e++] ^ n[r++],
          d = t[e++] ^ n[r++],
          p = t[e++] ^ n[r++],
          g = t[e++] ^ n[r++],
          m = t[e++] ^ n[r++],
          y = t[e++] ^ n[r++],
          w = t[e++] ^ n[r++],
          A = t[e++] ^ n[r++],
          b = t[e++] ^ n[r++],
          v = t[e++] ^ n[r++],
          E = a,
          P = o,
          k = c,
          N = u,
          C = l,
          T = h,
          I = f,
          x = d,
          R = p,
          O = g,
          S = m,
          B = y,
          D = w,
          U = A,
          L = b,
          F = v;
        for (let t = 0; t < 8; t += 2)
          (C ^= Mt((E + D) | 0, 7)),
            (R ^= Mt((C + E) | 0, 9)),
            (D ^= Mt((R + C) | 0, 13)),
            (E ^= Mt((D + R) | 0, 18)),
            (O ^= Mt((T + P) | 0, 7)),
            (U ^= Mt((O + T) | 0, 9)),
            (P ^= Mt((U + O) | 0, 13)),
            (T ^= Mt((P + U) | 0, 18)),
            (L ^= Mt((S + I) | 0, 7)),
            (k ^= Mt((L + S) | 0, 9)),
            (I ^= Mt((k + L) | 0, 13)),
            (S ^= Mt((I + k) | 0, 18)),
            (N ^= Mt((F + B) | 0, 7)),
            (x ^= Mt((N + F) | 0, 9)),
            (B ^= Mt((x + N) | 0, 13)),
            (F ^= Mt((B + x) | 0, 18)),
            (P ^= Mt((E + N) | 0, 7)),
            (k ^= Mt((P + E) | 0, 9)),
            (N ^= Mt((k + P) | 0, 13)),
            (E ^= Mt((N + k) | 0, 18)),
            (I ^= Mt((T + C) | 0, 7)),
            (x ^= Mt((I + T) | 0, 9)),
            (C ^= Mt((x + I) | 0, 13)),
            (T ^= Mt((C + x) | 0, 18)),
            (B ^= Mt((S + O) | 0, 7)),
            (R ^= Mt((B + S) | 0, 9)),
            (O ^= Mt((R + B) | 0, 13)),
            (S ^= Mt((O + R) | 0, 18)),
            (D ^= Mt((F + L) | 0, 7)),
            (U ^= Mt((D + F) | 0, 9)),
            (L ^= Mt((U + D) | 0, 13)),
            (F ^= Mt((L + U) | 0, 18));
        (s[i++] = (a + E) | 0),
          (s[i++] = (o + P) | 0),
          (s[i++] = (c + k) | 0),
          (s[i++] = (u + N) | 0),
          (s[i++] = (l + C) | 0),
          (s[i++] = (h + T) | 0),
          (s[i++] = (f + I) | 0),
          (s[i++] = (d + x) | 0),
          (s[i++] = (p + R) | 0),
          (s[i++] = (g + O) | 0),
          (s[i++] = (m + S) | 0),
          (s[i++] = (y + B) | 0),
          (s[i++] = (w + D) | 0),
          (s[i++] = (A + U) | 0),
          (s[i++] = (b + L) | 0),
          (s[i++] = (v + F) | 0);
      }
      function Kt(t, e, n, r, s) {
        let i = r + 0,
          a = r + 16 * s;
        for (let r = 0; r < 16; r++) n[a + r] = t[e + 16 * (2 * s - 1) + r];
        for (let r = 0; r < s; r++, i += 16, e += 16)
          Gt(n, a, t, e, n, i),
            r > 0 && (a += 16),
            Gt(n, i, t, (e += 16), n, a);
      }
      function jt(t, e, n) {
        const r = (0, M.U5)(
            { dkLen: 32, asyncTick: 10, maxmem: 1073742848 },
            n,
          ),
          {
            N: s,
            r: i,
            p: a,
            dkLen: o,
            asyncTick: c,
            maxmem: u,
            onProgress: l,
          } = r;
        if (
          (F.ZP.number(s),
          F.ZP.number(i),
          F.ZP.number(a),
          F.ZP.number(o),
          F.ZP.number(c),
          F.ZP.number(u),
          void 0 !== l && "function" != typeof l)
        )
          throw new Error("progressCb should be function");
        const h = 128 * i,
          f = h / 4;
        if (s <= 1 || 0 != (s & (s - 1)) || s >= 2 ** (h / 8) || s > 2 ** 32)
          throw new Error(
            "Scrypt: N must be larger than 1, a power of 2, less than 2^(128 * r / 8) and less than 2^32",
          );
        if (a < 0 || a > 137438953440 / h)
          throw new Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
          );
        if (o < 0 || o > 137438953440)
          throw new Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
          );
        const d = h * (s + a);
        if (d > u)
          throw new Error(
            `Scrypt: parameters too large, ${d} (128 * r * (N + p)) > ${u} (maxmem)`,
          );
        const p = j(Z, t, e, { c: 1, dkLen: h * a }),
          g = (0, M.Jq)(p),
          m = (0, M.Jq)(new Uint8Array(h * s)),
          y = (0, M.Jq)(new Uint8Array(h));
        let w = () => {};
        if (l) {
          const t = 2 * s * a,
            e = Math.max(Math.floor(t / 1e4), 1);
          let n = 0;
          w = () => {
            n++, !l || (n % e && n !== t) || l(n / t);
          };
        }
        return {
          N: s,
          r: i,
          p: a,
          dkLen: o,
          blockSize32: f,
          V: m,
          B32: g,
          B: p,
          tmp: y,
          blockMixCb: w,
          asyncTick: c,
        };
      }
      function Ht(t, e, n, r, s) {
        const i = j(Z, t, n, { c: 1, dkLen: e });
        return n.fill(0), r.fill(0), s.fill(0), i;
      }
      let _t = !1,
        Vt = !1;
      const Qt = async function (t, e, n, r, s, i, a) {
          return await (async function (t, e, n) {
            const {
              N: r,
              r: s,
              p: i,
              dkLen: a,
              blockSize32: o,
              V: c,
              B32: u,
              B: l,
              tmp: h,
              blockMixCb: f,
              asyncTick: d,
            } = jt(t, e, n);
            for (let t = 0; t < i; t++) {
              const e = o * t;
              for (let t = 0; t < o; t++) c[t] = u[e + t];
              let n = 0;
              await (0, M.oY)(r - 1, d, (t) => {
                Kt(c, n, c, (n += o), s), f();
              }),
                Kt(c, (r - 1) * o, u, e, s),
                f(),
                await (0, M.oY)(r, d, (t) => {
                  const n = u[e + o - 16] % r;
                  for (let t = 0; t < o; t++) h[t] = u[e + t] ^ c[n * o + t];
                  Kt(h, 0, u, e, s), f();
                });
            }
            return Ht(t, a, l, c, h);
          })(t, e, { N: n, r, p: s, dkLen: i, onProgress: a });
        },
        zt = function (t, e, n, r, s, i) {
          return (function (t, e, n) {
            const {
              N: r,
              r: s,
              p: i,
              dkLen: a,
              blockSize32: o,
              V: c,
              B32: u,
              B: l,
              tmp: h,
              blockMixCb: f,
            } = jt(t, e, n);
            for (let t = 0; t < i; t++) {
              const e = o * t;
              for (let t = 0; t < o; t++) c[t] = u[e + t];
              for (let t = 0, e = 0; t < r - 1; t++)
                Kt(c, e, c, (e += o), s), f();
              Kt(c, (r - 1) * o, u, e, s), f();
              for (let t = 0; t < r; t++) {
                const t = u[e + o - 16] % r;
                for (let n = 0; n < o; n++) h[n] = u[e + n] ^ c[t * o + n];
                Kt(h, 0, u, e, s), f();
              }
            }
            return Ht(t, a, l, c, h);
          })(t, e, { N: n, r, p: s, dkLen: i });
        };
      let Jt = Qt,
        Zt = zt;
      async function qt(t, e, n, r, s, a, o) {
        const c = (0, i.Pw)(t, "passwd"),
          u = (0, i.Pw)(e, "salt");
        return (0, i.Dv)(await Jt(c, u, n, r, s, a, o));
      }
      function Wt(t, e, n, r, s, a) {
        const o = (0, i.Pw)(t, "passwd"),
          c = (0, i.Pw)(e, "salt");
        return (0, i.Dv)(Zt(o, c, n, r, s, a));
      }
      (qt._ = Qt),
        (qt.lock = function () {
          Vt = !0;
        }),
        (qt.register = function (t) {
          if (Vt) throw new Error("scrypt is locked");
          Jt = t;
        }),
        Object.freeze(qt),
        (Wt._ = zt),
        (Wt.lock = function () {
          _t = !0;
        }),
        (Wt.register = function (t) {
          if (_t) throw new Error("scryptSync is locked");
          Zt = t;
        }),
        Object.freeze(Wt);
      const Yt = function (t) {
          return at("sha256").update(t).digest();
        },
        Xt = function (t) {
          return at("sha512").update(t).digest();
        };
      let $t = Yt,
        te = Xt,
        ee = !1,
        ne = !1;
      function re(t) {
        const e = (0, i.Pw)(t, "data");
        return (0, i.Dv)($t(e));
      }
      function se(t) {
        const e = (0, i.Pw)(t, "data");
        return (0, i.Dv)(te(e));
      }
      function ie() {
        lt.lock(),
          d.w.lock(),
          Bt.lock(),
          Ft.lock(),
          xt.lock(),
          qt.lock(),
          Wt.lock(),
          re.lock(),
          se.lock(),
          Ft.lock();
      }
      (re._ = Yt),
        (re.lock = function () {
          ee = !0;
        }),
        (re.register = function (t) {
          if (ee) throw new Error("sha256 is locked");
          $t = t;
        }),
        Object.freeze(re),
        (se._ = Xt),
        (se.lock = function () {
          ne = !0;
        }),
        (se.register = function (t) {
          if (ne) throw new Error("sha512 is locked");
          te = t;
        }),
        Object.freeze(re);
      const ae = BigInt(0),
        oe = BigInt(1),
        ce = BigInt(2),
        ue = BigInt(27),
        le = BigInt(28),
        he = BigInt(35),
        fe = {};
      function de(t) {
        return (0, i.U3)((0, p.ot)(t), 32);
      }
      class pe {
        #A;
        #b;
        #v;
        #E;
        get r() {
          return this.#A;
        }
        set r(t) {
          (0, A.en)(32 === (0, i.M5)(t), "invalid r", "value", t),
            (this.#A = (0, i.Dv)(t));
        }
        get s() {
          return this.#b;
        }
        set s(t) {
          (0, A.en)(32 === (0, i.M5)(t), "invalid s", "value", t);
          const e = (0, i.Dv)(t);
          (0, A.en)(
            parseInt(e.substring(0, 3)) < 8,
            "non-canonical s",
            "value",
            e,
          ),
            (this.#b = e);
        }
        get v() {
          return this.#v;
        }
        set v(t) {
          const e = (0, p.Dx)(t, "value");
          (0, A.en)(27 === e || 28 === e, "invalid v", "v", t), (this.#v = e);
        }
        get networkV() {
          return this.#E;
        }
        get legacyChainId() {
          const t = this.networkV;
          return null == t ? null : pe.getChainId(t);
        }
        get yParity() {
          return 27 === this.v ? 0 : 1;
        }
        get yParityAndS() {
          const t = (0, i.Pw)(this.s);
          return this.yParity && (t[0] |= 128), (0, i.Dv)(t);
        }
        get compactSerialized() {
          return (0, i.zo)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, i.zo)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
        }
        constructor(t, e, n, r) {
          (0, A.NK)(t, fe, "Signature"),
            (this.#A = e),
            (this.#b = n),
            (this.#v = r),
            (this.#E = null);
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
        }
        clone() {
          const t = new pe(fe, this.r, this.s, this.v);
          return this.networkV && (t.#E = this.networkV), t;
        }
        toJSON() {
          const t = this.networkV;
          return {
            _type: "signature",
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v,
          };
        }
        static getChainId(t) {
          const e = (0, p.yT)(t, "v");
          return e == ue || e == le
            ? ae
            : ((0, A.en)(e >= he, "invalid EIP-155 v", "v", t), (e - he) / ce);
        }
        static getChainIdV(t, e) {
          return (0, p.yT)(t) * ce + BigInt(35 + e - 27);
        }
        static getNormalizedV(t) {
          const e = (0, p.yT)(t);
          return e === ae || e === ue
            ? 27
            : e === oe || e === le
            ? 28
            : ((0, A.en)(e >= he, "invalid v", "v", t), e & oe ? 27 : 28);
        }
        static from(t) {
          function e(e, n) {
            (0, A.en)(e, n, "signature", t);
          }
          if (null == t) return new pe(fe, R, R, 27);
          if ("string" == typeof t) {
            const n = (0, i.Pw)(t, "signature");
            if (64 === n.length) {
              const t = (0, i.Dv)(n.slice(0, 32)),
                e = n.slice(32, 64),
                r = 128 & e[0] ? 28 : 27;
              return (e[0] &= 127), new pe(fe, t, (0, i.Dv)(e), r);
            }
            if (65 === n.length) {
              const t = (0, i.Dv)(n.slice(0, 32)),
                r = n.slice(32, 64);
              e(0 == (128 & r[0]), "non-canonical s");
              const s = pe.getNormalizedV(n[64]);
              return new pe(fe, t, (0, i.Dv)(r), s);
            }
            e(!1, "invalid raw signature length");
          }
          if (t instanceof pe) return t.clone();
          const n = t.r;
          e(null != n, "missing r");
          const r = de(n),
            s = (function (t, n) {
              if (null != t) return de(t);
              if (null != n) {
                e((0, i.A7)(n, 32), "invalid yParityAndS");
                const t = (0, i.Pw)(n);
                return (t[0] &= 127), (0, i.Dv)(t);
              }
              e(!1, "missing s");
            })(t.s, t.yParityAndS);
          e(0 == (128 & (0, i.Pw)(s)[0]), "non-canonical s");
          const { networkV: a, v: o } = (function (t, n, r) {
              if (null != t) {
                const e = (0, p.yT)(t);
                return {
                  networkV: e >= he ? e : void 0,
                  v: pe.getNormalizedV(e),
                };
              }
              if (null != n)
                return (
                  e((0, i.A7)(n, 32), "invalid yParityAndS"),
                  { v: 128 & (0, i.Pw)(n)[0] ? 28 : 27 }
                );
              if (null != r) {
                switch ((0, p.Dx)(r, "sig.yParity")) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                e(!1, "invalid yParity");
              }
              e(!1, "missing v");
            })(t.v, t.yParityAndS, t.yParity),
            c = new pe(fe, r, s, o);
          return (
            a && (c.#E = a),
            e(
              null == t.yParity ||
                (0, p.Dx)(t.yParity, "sig.yParity") === c.yParity,
              "yParity mismatch",
            ),
            e(
              null == t.yParityAndS || t.yParityAndS === c.yParityAndS,
              "yParityAndS mismatch",
            ),
            c
          );
        }
      }
      var ge = n(5856),
        me = n.t(ge, 2);
      const ye = BigInt(0),
        we = BigInt(1),
        Ae = BigInt(2),
        be = BigInt(3),
        ve = BigInt(8),
        Ee = Object.freeze({
          a: ye,
          b: BigInt(7),
          P: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: we,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240",
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424",
          ),
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
        }),
        Pe = (t, e) => (t + e / Ae) / e,
        ke = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(t) {
            const { n: e } = Ee,
              n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -we * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              i = n,
              a = BigInt("0x100000000000000000000000000000000"),
              o = Pe(i * t, e),
              c = Pe(-r * t, e);
            let u = Xe(t - o * n - c * s, e),
              l = Xe(-o * r - c * i, e);
            const h = u > a,
              f = l > a;
            if ((h && (u = e - u), f && (l = e - l), u > a || l > a))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
            return { k1neg: h, k1: u, k2neg: f, k2: l };
          },
        },
        Ne = 32,
        Ce = 32,
        Te = Ne + 1,
        Ie = 2 * Ne + 1;
      function xe(t) {
        const { a: e, b: n } = Ee,
          r = Xe(t * t),
          s = Xe(r * t);
        return Xe(s + e * t + n);
      }
      const Re = Ee.a === ye;
      class Oe extends Error {
        constructor(t) {
          super(t);
        }
      }
      function Se(t) {
        if (!(t instanceof Be)) throw new TypeError("JacobianPoint expected");
      }
      class Be {
        constructor(t, e, n) {
          (this.x = t), (this.y = e), (this.z = n);
        }
        static fromAffine(t) {
          if (!(t instanceof Le))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return t.equals(Le.ZERO) ? Be.ZERO : new Be(t.x, t.y, we);
        }
        static toAffineBatch(t) {
          const e = (function (t, e = Ee.P) {
            const n = new Array(t.length),
              r = tn(
                t.reduce(
                  (t, r, s) => (r === ye ? t : ((n[s] = t), Xe(t * r, e))),
                  we,
                ),
                e,
              );
            return (
              t.reduceRight(
                (t, r, s) =>
                  r === ye ? t : ((n[s] = Xe(t * n[s], e)), Xe(t * r, e)),
                r,
              ),
              n
            );
          })(t.map((t) => t.z));
          return t.map((t, n) => t.toAffine(e[n]));
        }
        static normalizeZ(t) {
          return Be.toAffineBatch(t).map(Be.fromAffine);
        }
        equals(t) {
          Se(t);
          const { x: e, y: n, z: r } = this,
            { x: s, y: i, z: a } = t,
            o = Xe(r * r),
            c = Xe(a * a),
            u = Xe(e * c),
            l = Xe(s * o),
            h = Xe(Xe(n * a) * c),
            f = Xe(Xe(i * r) * o);
          return u === l && h === f;
        }
        negate() {
          return new Be(this.x, Xe(-this.y), this.z);
        }
        double() {
          const { x: t, y: e, z: n } = this,
            r = Xe(t * t),
            s = Xe(e * e),
            i = Xe(s * s),
            a = t + s,
            o = Xe(Ae * (Xe(a * a) - r - i)),
            c = Xe(be * r),
            u = Xe(c * c),
            l = Xe(u - Ae * o),
            h = Xe(c * (o - l) - ve * i),
            f = Xe(Ae * e * n);
          return new Be(l, h, f);
        }
        add(t) {
          Se(t);
          const { x: e, y: n, z: r } = this,
            { x: s, y: i, z: a } = t;
          if (s === ye || i === ye) return this;
          if (e === ye || n === ye) return t;
          const o = Xe(r * r),
            c = Xe(a * a),
            u = Xe(e * c),
            l = Xe(s * o),
            h = Xe(Xe(n * a) * c),
            f = Xe(Xe(i * r) * o),
            d = Xe(l - u),
            p = Xe(f - h);
          if (d === ye) return p === ye ? this.double() : Be.ZERO;
          const g = Xe(d * d),
            m = Xe(d * g),
            y = Xe(u * g),
            w = Xe(p * p - m - Ae * y),
            A = Xe(p * (y - w) - h * m),
            b = Xe(r * a * d);
          return new Be(w, A, b);
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiplyUnsafe(t) {
          const e = Be.ZERO;
          if ("bigint" == typeof t && t === ye) return e;
          let n = Ye(t);
          if (n === we) return this;
          if (!Re) {
            let t = e,
              r = this;
            for (; n > ye; )
              n & we && (t = t.add(r)), (r = r.double()), (n >>= we);
            return t;
          }
          let { k1neg: r, k1: s, k2neg: i, k2: a } = ke.splitScalar(n),
            o = e,
            c = e,
            u = this;
          for (; s > ye || a > ye; )
            s & we && (o = o.add(u)),
              a & we && (c = c.add(u)),
              (u = u.double()),
              (s >>= we),
              (a >>= we);
          return (
            r && (o = o.negate()),
            i && (c = c.negate()),
            (c = new Be(Xe(c.x * ke.beta), c.y, c.z)),
            o.add(c)
          );
        }
        precomputeWindow(t) {
          const e = Re ? 128 / t + 1 : 256 / t + 1,
            n = [];
          let r = this,
            s = r;
          for (let i = 0; i < e; i++) {
            (s = r), n.push(s);
            for (let e = 1; e < 2 ** (t - 1); e++) (s = s.add(r)), n.push(s);
            r = s.double();
          }
          return n;
        }
        wNAF(t, e) {
          !e && this.equals(Be.BASE) && (e = Le.BASE);
          const n = (e && e._WINDOW_SIZE) || 1;
          if (256 % n)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = e && Ue.get(e);
          r ||
            ((r = this.precomputeWindow(n)),
            e && 1 !== n && ((r = Be.normalizeZ(r)), Ue.set(e, r)));
          let s = Be.ZERO,
            i = Be.BASE;
          const a = 1 + (Re ? 128 / n : 256 / n),
            o = 2 ** (n - 1),
            c = BigInt(2 ** n - 1),
            u = 2 ** n,
            l = BigInt(n);
          for (let e = 0; e < a; e++) {
            const n = e * o;
            let a = Number(t & c);
            (t >>= l), a > o && ((a -= u), (t += we));
            const h = n,
              f = n + Math.abs(a) - 1,
              d = e % 2 != 0,
              p = a < 0;
            0 === a ? (i = i.add(De(d, r[h]))) : (s = s.add(De(p, r[f])));
          }
          return { p: s, f: i };
        }
        multiply(t, e) {
          let n,
            r,
            s = Ye(t);
          if (Re) {
            const { k1neg: t, k1: i, k2neg: a, k2: o } = ke.splitScalar(s);
            let { p: c, f: u } = this.wNAF(i, e),
              { p: l, f: h } = this.wNAF(o, e);
            (c = De(t, c)),
              (l = De(a, l)),
              (l = new Be(Xe(l.x * ke.beta), l.y, l.z)),
              (n = c.add(l)),
              (r = u.add(h));
          } else {
            const { p: t, f: i } = this.wNAF(s, e);
            (n = t), (r = i);
          }
          return Be.normalizeZ([n, r])[0];
        }
        toAffine(t) {
          const { x: e, y: n, z: r } = this,
            s = this.equals(Be.ZERO);
          null == t && (t = s ? ve : tn(r));
          const i = t,
            a = Xe(i * i),
            o = Xe(a * i),
            c = Xe(e * a),
            u = Xe(n * o),
            l = Xe(r * i);
          if (s) return Le.ZERO;
          if (l !== we) throw new Error("invZ was invalid");
          return new Le(c, u);
        }
      }
      function De(t, e) {
        const n = e.negate();
        return t ? n : e;
      }
      (Be.BASE = new Be(Ee.Gx, Ee.Gy, we)), (Be.ZERO = new Be(ye, we, ye));
      const Ue = new WeakMap();
      class Le {
        constructor(t, e) {
          (this.x = t), (this.y = e);
        }
        _setWindowSize(t) {
          (this._WINDOW_SIZE = t), Ue.delete(this);
        }
        hasEvenY() {
          return this.y % Ae === ye;
        }
        static fromCompressedHex(t) {
          const e = 32 === t.length,
            n = qe(e ? t : t.subarray(1));
          if (!on(n)) throw new Error("Point is not on curve");
          let r = (function (t) {
            const { P: e } = Ee,
              n = BigInt(6),
              r = BigInt(11),
              s = BigInt(22),
              i = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              c = (t * t * t) % e,
              u = (c * c * t) % e,
              l = ($e(u, be) * u) % e,
              h = ($e(l, be) * u) % e,
              f = ($e(h, Ae) * c) % e,
              d = ($e(f, r) * f) % e,
              p = ($e(d, s) * d) % e,
              g = ($e(p, a) * p) % e,
              m = ($e(g, o) * g) % e,
              y = ($e(m, a) * p) % e,
              w = ($e(y, be) * u) % e,
              A = ($e(w, i) * d) % e,
              b = ($e(A, n) * c) % e,
              v = $e(b, Ae);
            if ((v * v) % e !== t) throw new Error("Cannot find square root");
            return v;
          })(xe(n));
          const s = (r & we) === we;
          e ? s && (r = Xe(-r)) : (1 == (1 & t[0])) !== s && (r = Xe(-r));
          const i = new Le(n, r);
          return i.assertValidity(), i;
        }
        static fromUncompressedHex(t) {
          const e = qe(t.subarray(1, Ne + 1)),
            n = qe(t.subarray(Ne + 1, 2 * Ne + 1)),
            r = new Le(e, n);
          return r.assertValidity(), r;
        }
        static fromHex(t) {
          const e = We(t),
            n = e.length,
            r = e[0];
          if (n === Ne) return this.fromCompressedHex(e);
          if (n === Te && (2 === r || 3 === r))
            return this.fromCompressedHex(e);
          if (n === Ie && 4 === r) return this.fromUncompressedHex(e);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${Te} compressed bytes or ${Ie} uncompressed bytes, not ${n}`,
          );
        }
        static fromPrivateKey(t) {
          return Le.BASE.multiply(un(t));
        }
        static fromSignature(t, e, n) {
          const { r, s } = (function (t) {
            if (t instanceof Ge) return t.assertValidity(), t;
            try {
              return Ge.fromDER(t);
            } catch (e) {
              return Ge.fromCompact(t);
            }
          })(e);
          if (![0, 1, 2, 3].includes(n))
            throw new Error("Cannot recover: invalid recovery bit");
          const i = en(We(t)),
            { n: a } = Ee,
            o = 2 === n || 3 === n ? r + a : r,
            c = tn(o, a),
            u = Xe(-i * c, a),
            l = Xe(s * c, a),
            h = 1 & n ? "03" : "02",
            f = Le.fromHex(h + Ve(o)),
            d = Le.BASE.multiplyAndAddUnsafe(f, u, l);
          if (!d)
            throw new Error("Cannot recover signature: point at infinify");
          return d.assertValidity(), d;
        }
        toRawBytes(t = !1) {
          return Ze(this.toHex(t));
        }
        toHex(t = !1) {
          const e = Ve(this.x);
          return t
            ? `${this.hasEvenY() ? "02" : "03"}${e}`
            : `04${e}${Ve(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const t = "Point is not on elliptic curve",
            { x: e, y: n } = this;
          if (!on(e) || !on(n)) throw new Error(t);
          const r = Xe(n * n);
          if (Xe(r - xe(e)) !== ye) throw new Error(t);
        }
        equals(t) {
          return this.x === t.x && this.y === t.y;
        }
        negate() {
          return new Le(this.x, Xe(-this.y));
        }
        double() {
          return Be.fromAffine(this).double().toAffine();
        }
        add(t) {
          return Be.fromAffine(this).add(Be.fromAffine(t)).toAffine();
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiply(t) {
          return Be.fromAffine(this).multiply(t, this).toAffine();
        }
        multiplyAndAddUnsafe(t, e, n) {
          const r = Be.fromAffine(this),
            s =
              e === ye || e === we || this !== Le.BASE
                ? r.multiplyUnsafe(e)
                : r.multiply(e),
            i = Be.fromAffine(t).multiplyUnsafe(n),
            a = s.add(i);
          return a.equals(Be.ZERO) ? void 0 : a.toAffine();
        }
      }
      function Fe(t) {
        return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t;
      }
      function Me(t) {
        if (t.length < 2 || 2 !== t[0])
          throw new Error(`Invalid signature integer tag: ${He(t)}`);
        const e = t[1],
          n = t.subarray(2, e + 2);
        if (!e || n.length !== e)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === n[0] && n[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: qe(n), left: t.subarray(e + 2) };
      }
      (Le.BASE = new Le(Ee.Gx, Ee.Gy)), (Le.ZERO = new Le(ye, ye));
      class Ge {
        constructor(t, e) {
          (this.r = t), (this.s = e), this.assertValidity();
        }
        static fromCompact(t) {
          const e = t instanceof Uint8Array,
            n = "Signature.fromCompact";
          if ("string" != typeof t && !e)
            throw new TypeError(`${n}: Expected string or Uint8Array`);
          const r = e ? He(t) : t;
          if (128 !== r.length) throw new Error(`${n}: Expected 64-byte hex`);
          return new Ge(Je(r.slice(0, 64)), Je(r.slice(64, 128)));
        }
        static fromDER(t) {
          const e = t instanceof Uint8Array;
          if ("string" != typeof t && !e)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: n, s: r } = (function (t) {
            if (t.length < 2 || 48 != t[0])
              throw new Error(`Invalid signature tag: ${He(t)}`);
            if (t[1] !== t.length - 2)
              throw new Error("Invalid signature: incorrect length");
            const { data: e, left: n } = Me(t.subarray(2)),
              { data: r, left: s } = Me(n);
            if (s.length)
              throw new Error(
                `Invalid signature: left bytes after parsing: ${He(s)}`,
              );
            return { r: e, s: r };
          })(e ? t : Ze(t));
          return new Ge(n, r);
        }
        static fromHex(t) {
          return this.fromDER(t);
        }
        assertValidity() {
          const { r: t, s: e } = this;
          if (!an(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!an(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const t = Ee.n >> we;
          return this.s > t;
        }
        normalizeS() {
          return this.hasHighS() ? new Ge(this.r, Xe(-this.s, Ee.n)) : this;
        }
        toDERRawBytes() {
          return Ze(this.toDERHex());
        }
        toDERHex() {
          const t = Fe(ze(this.s)),
            e = Fe(ze(this.r)),
            n = t.length / 2,
            r = e.length / 2,
            s = ze(n),
            i = ze(r);
          return `30${ze(r + n + 4)}02${i}${e}02${s}${t}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return Ze(this.toCompactHex());
        }
        toCompactHex() {
          return Ve(this.r) + Ve(this.s);
        }
      }
      function Ke(...t) {
        if (!t.every((t) => t instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const e = t.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(e);
        for (let e = 0, r = 0; e < t.length; e++) {
          const s = t[e];
          n.set(s, r), (r += s.length);
        }
        return n;
      }
      const je = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function He(t) {
        if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
        let e = "";
        for (let n = 0; n < t.length; n++) e += je[t[n]];
        return e;
      }
      const _e = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function Ve(t) {
        if ("bigint" != typeof t) throw new Error("Expected bigint");
        if (!(ye <= t && t < _e))
          throw new Error("Expected number 0 <= n < 2^256");
        return t.toString(16).padStart(64, "0");
      }
      function Qe(t) {
        const e = Ze(Ve(t));
        if (32 !== e.length) throw new Error("Error: expected 32 bytes");
        return e;
      }
      function ze(t) {
        const e = t.toString(16);
        return 1 & e.length ? `0${e}` : e;
      }
      function Je(t) {
        if ("string" != typeof t)
          throw new TypeError("hexToNumber: expected string, got " + typeof t);
        return BigInt(`0x${t}`);
      }
      function Ze(t) {
        if ("string" != typeof t)
          throw new TypeError("hexToBytes: expected string, got " + typeof t);
        if (t.length % 2)
          throw new Error(
            "hexToBytes: received invalid unpadded hex" + t.length,
          );
        const e = new Uint8Array(t.length / 2);
        for (let n = 0; n < e.length; n++) {
          const r = 2 * n,
            s = t.slice(r, r + 2),
            i = Number.parseInt(s, 16);
          if (Number.isNaN(i) || i < 0)
            throw new Error("Invalid byte sequence");
          e[n] = i;
        }
        return e;
      }
      function qe(t) {
        return Je(He(t));
      }
      function We(t) {
        return t instanceof Uint8Array ? Uint8Array.from(t) : Ze(t);
      }
      function Ye(t) {
        if ("number" == typeof t && Number.isSafeInteger(t) && t > 0)
          return BigInt(t);
        if ("bigint" == typeof t && an(t)) return t;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function Xe(t, e = Ee.P) {
        const n = t % e;
        return n >= ye ? n : e + n;
      }
      function $e(t, e) {
        const { P: n } = Ee;
        let r = t;
        for (; e-- > ye; ) (r *= r), (r %= n);
        return r;
      }
      function tn(t, e = Ee.P) {
        if (t === ye || e <= ye)
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`,
          );
        let n = Xe(t, e),
          r = e,
          s = ye,
          i = we,
          a = we,
          o = ye;
        for (; n !== ye; ) {
          const t = r / n,
            e = r % n,
            c = s - a * t,
            u = i - o * t;
          (r = n), (n = e), (s = a), (i = o), (a = c), (o = u);
        }
        if (r !== we) throw new Error("invert: does not exist");
        return Xe(s, e);
      }
      function en(t, e = !1) {
        const n = (function (t) {
          const e = 8 * t.length - 8 * Ce,
            n = qe(t);
          return e > 0 ? n >> BigInt(e) : n;
        })(t);
        if (e) return n;
        const { n: r } = Ee;
        return n >= r ? n - r : n;
      }
      let nn, rn;
      class sn {
        constructor(t, e) {
          if (
            ((this.hashLen = t),
            (this.qByteLen = e),
            "number" != typeof t || t < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" != typeof e || e < 2)
            throw new Error("qByteLen must be a number");
          (this.v = new Uint8Array(t).fill(1)),
            (this.k = new Uint8Array(t).fill(0)),
            (this.counter = 0);
        }
        hmac(...t) {
          return mn.hmacSha256(this.k, ...t);
        }
        hmacSync(...t) {
          return rn(this.k, ...t);
        }
        checkSync() {
          if ("function" != typeof rn)
            throw new Oe("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(t = new Uint8Array()) {
          (this.k = await this.hmac(this.v, Uint8Array.from([0]), t)),
            (this.v = await this.hmac(this.v)),
            0 !== t.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), t)),
              (this.v = await this.hmac(this.v)));
        }
        reseedSync(t = new Uint8Array()) {
          this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), t)),
            (this.v = this.hmacSync(this.v)),
            0 !== t.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), t)),
              (this.v = this.hmacSync(this.v)));
        }
        async generate() {
          this.incr();
          let t = 0;
          const e = [];
          for (; t < this.qByteLen; ) {
            this.v = await this.hmac(this.v);
            const n = this.v.slice();
            e.push(n), (t += this.v.length);
          }
          return Ke(...e);
        }
        generateSync() {
          this.checkSync(), this.incr();
          let t = 0;
          const e = [];
          for (; t < this.qByteLen; ) {
            this.v = this.hmacSync(this.v);
            const n = this.v.slice();
            e.push(n), (t += this.v.length);
          }
          return Ke(...e);
        }
      }
      function an(t) {
        return ye < t && t < Ee.n;
      }
      function on(t) {
        return ye < t && t < Ee.P;
      }
      function cn(t, e, n, r = !0) {
        const { n: s } = Ee,
          i = en(t, !0);
        if (!an(i)) return;
        const a = tn(i, s),
          o = Le.BASE.multiply(i),
          c = Xe(o.x, s);
        if (c === ye) return;
        const u = Xe(a * Xe(e + n * c, s), s);
        if (u === ye) return;
        let l = new Ge(c, u),
          h = (o.x === l.r ? 0 : 2) | Number(o.y & we);
        return (
          r && l.hasHighS() && ((l = l.normalizeS()), (h ^= 1)),
          { sig: l, recovery: h }
        );
      }
      function un(t) {
        let e;
        if ("bigint" == typeof t) e = t;
        else if ("number" == typeof t && Number.isSafeInteger(t) && t > 0)
          e = BigInt(t);
        else if ("string" == typeof t) {
          if (t.length !== 2 * Ce)
            throw new Error("Expected 32 bytes of private key");
          e = Je(t);
        } else {
          if (!(t instanceof Uint8Array))
            throw new TypeError("Expected valid private key");
          if (t.length !== Ce)
            throw new Error("Expected 32 bytes of private key");
          e = qe(t);
        }
        if (!an(e)) throw new Error("Expected private key: 0 < key < n");
        return e;
      }
      function ln(t) {
        const e = t instanceof Uint8Array,
          n = "string" == typeof t,
          r = (e || n) && t.length;
        return e
          ? r === Te || r === Ie
          : n
          ? r === 2 * Te || r === 2 * Ie
          : t instanceof Le;
      }
      function hn(t) {
        return qe(t.length > Ne ? t.slice(0, Ne) : t);
      }
      function fn(t) {
        const e = hn(t),
          n = Xe(e, Ee.n);
        return dn(n < ye ? e : n);
      }
      function dn(t) {
        return Qe(t);
      }
      Le.BASE._setWindowSize(8);
      const pn = {
          node: me,
          web:
            "object" == typeof self && "crypto" in self ? self.crypto : void 0,
        },
        gn = {},
        mn = {
          bytesToHex: He,
          hexToBytes: Ze,
          concatBytes: Ke,
          mod: Xe,
          invert: tn,
          isValidPrivateKey(t) {
            try {
              return un(t), !0;
            } catch (t) {
              return !1;
            }
          },
          _bigintTo32Bytes: Qe,
          _normalizePrivateKey: un,
          hashToPrivateKey: (t) => {
            t = We(t);
            const e = Ce + 8;
            if (t.length < e || t.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            return Qe(Xe(qe(t), Ee.n - we) + we);
          },
          randomBytes: (t = 32) => {
            if (pn.web) return pn.web.getRandomValues(new Uint8Array(t));
            if (pn.node) {
              const { randomBytes: e } = pn.node;
              return Uint8Array.from(e(t));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => mn.hashToPrivateKey(mn.randomBytes(Ce + 8)),
          precompute(t = 8, e = Le.BASE) {
            const n = e === Le.BASE ? e : new Le(e.x, e.y);
            return n._setWindowSize(t), n.multiply(be), n;
          },
          sha256: async (...t) => {
            if (pn.web) {
              const e = await pn.web.subtle.digest("SHA-256", Ke(...t));
              return new Uint8Array(e);
            }
            if (pn.node) {
              const { createHash: e } = pn.node,
                n = e("sha256");
              return t.forEach((t) => n.update(t)), Uint8Array.from(n.digest());
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async (t, ...e) => {
            if (pn.web) {
              const n = await pn.web.subtle.importKey(
                  "raw",
                  t,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                r = Ke(...e),
                s = await pn.web.subtle.sign("HMAC", n, r);
              return new Uint8Array(s);
            }
            if (pn.node) {
              const { createHmac: n } = pn.node,
                r = n("sha256", t);
              return e.forEach((t) => r.update(t)), Uint8Array.from(r.digest());
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async (t, ...e) => {
            let n = gn[t];
            if (void 0 === n) {
              const e = await mn.sha256(
                Uint8Array.from(t, (t) => t.charCodeAt(0)),
              );
              (n = Ke(e, e)), (gn[t] = n);
            }
            return mn.sha256(n, ...e);
          },
          taggedHashSync: (t, ...e) => {
            if ("function" != typeof nn)
              throw new Oe("sha256Sync is undefined, you need to set it");
            let n = gn[t];
            if (void 0 === n) {
              const e = nn(Uint8Array.from(t, (t) => t.charCodeAt(0)));
              (n = Ke(e, e)), (gn[t] = n);
            }
            return nn(n, ...e);
          },
          _JacobianPoint: Be,
        };
      Object.defineProperties(mn, {
        sha256Sync: {
          configurable: !1,
          get: () => nn,
          set(t) {
            nn || (nn = t);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get: () => rn,
          set(t) {
            rn || (rn = t);
          },
        },
      }),
        (mn.hmacSha256Sync = function (t, ...e) {
          return (0, i.Pw)(lt("sha256", t, (0, i.zo)(e)));
        });
      class yn {
        #P;
        constructor(t) {
          (0, A.en)(
            32 === (0, i.M5)(t),
            "invalid private key",
            "privateKey",
            "[REDACTED]",
          ),
            (this.#P = (0, i.Dv)(t));
        }
        get privateKey() {
          return this.#P;
        }
        get publicKey() {
          return yn.computePublicKey(this.#P);
        }
        get compressedPublicKey() {
          return yn.computePublicKey(this.#P, !0);
        }
        sign(t) {
          (0, A.en)(32 === (0, i.M5)(t), "invalid digest length", "digest", t);
          const [e, n] = (function (t, e, n = {}) {
              const {
                  seed: r,
                  m: s,
                  d: i,
                } = (function (t, e, n) {
                  if (null == t)
                    throw new Error(
                      `sign: expected valid message hash, not "${t}"`,
                    );
                  const r = We(t),
                    s = un(e),
                    i = [dn(s), fn(r)];
                  if (null != n) {
                    !0 === n && (n = mn.randomBytes(Ne));
                    const t = We(n);
                    if (t.length !== Ne)
                      throw new Error(
                        `sign: Expected ${Ne} bytes of extra data`,
                      );
                    i.push(t);
                  }
                  return { seed: Ke(...i), m: hn(r), d: s };
                })(t, e, n.extraEntropy),
                a = new sn(32, Ce);
              let o;
              for (
                a.reseedSync(r);
                !(o = cn(a.generateSync(), s, i, n.canonical));

              )
                a.reseedSync();
              return (function (t, e) {
                const { sig: n, recovery: r } = t,
                  { der: s, recovered: i } = Object.assign(
                    { canonical: !0, der: !0 },
                    e,
                  ),
                  a = s ? n.toDERRawBytes() : n.toCompactRawBytes();
                return i ? [a, r] : a;
              })(o, n);
            })((0, i.h_)(t), (0, i.h_)(this.#P), {
              recovered: !0,
              canonical: !0,
            }),
            r = Ge.fromHex(e);
          return pe.from({
            r: (0, p.m9)("0x" + r.r.toString(16), 32),
            s: (0, p.m9)("0x" + r.s.toString(16), 32),
            v: n ? 28 : 27,
          });
        }
        computeSharedSecret(t) {
          const e = yn.computePublicKey(t);
          return (0, i.Dv)(
            (function (t, e, n = !1) {
              if (ln(t))
                throw new TypeError(
                  "getSharedSecret: first arg must be private key",
                );
              if (!ln(e))
                throw new TypeError(
                  "getSharedSecret: second arg must be public key",
                );
              const r =
                (s = e) instanceof Le ? (s.assertValidity(), s) : Le.fromHex(s);
              var s;
              return r.assertValidity(), r.multiply(un(t)).toRawBytes(n);
            })((0, i.h_)(this.#P), (0, i.Pw)(e)),
          );
        }
        static computePublicKey(t, e) {
          let n = (0, i.Pw)(t, "key");
          if (32 === n.length) {
            const t = (function (t, e = !1) {
              return Le.fromPrivateKey(t).toRawBytes(e);
            })(n, !!e);
            return (0, i.Dv)(t);
          }
          if (64 === n.length) {
            const t = new Uint8Array(65);
            (t[0] = 4), t.set(n, 1), (n = t);
          }
          const r = Le.fromHex(n);
          return (0, i.Dv)(r.toRawBytes(e));
        }
        static recoverPublicKey(t, e) {
          (0, A.en)(32 === (0, i.M5)(t), "invalid digest length", "digest", t);
          const n = pe.from(e),
            r = Ge.fromCompact(
              (0, i.h_)((0, i.zo)([n.r, n.s])),
            ).toDERRawBytes(),
            s = (function (t, e, n, r = !1) {
              return Le.fromSignature(t, e, n).toRawBytes(r);
            })((0, i.h_)(t), r, n.yParity);
          return (
            (0, A.en)(
              null != s,
              "invalid signautre for digest",
              "signature",
              e,
            ),
            (0, i.Dv)(s)
          );
        }
        static addPoints(t, e, n) {
          const r = Le.fromHex(yn.computePublicKey(t).substring(2)),
            s = Le.fromHex(yn.computePublicKey(e).substring(2));
          return "0x" + r.add(s).toHex(!!n);
        }
      }
      function wn(t) {
        return (function (t) {
          let e = 0;
          return () => t[e++];
        })(
          (function (t) {
            let e = 0;
            function n() {
              return (t[e++] << 8) | t[e++];
            }
            let r = n(),
              s = 1,
              i = [0, 1];
            for (let t = 1; t < r; t++) i.push((s += n()));
            let a = n(),
              o = e;
            e += a;
            let c = 0,
              u = 0;
            function l() {
              return (
                0 == c && ((u = (u << 8) | t[e++]), (c = 8)), (u >> --c) & 1
              );
            }
            const h = 2 ** 31,
              f = h >>> 1,
              d = h - 1;
            let p = 0;
            for (let t = 0; t < 31; t++) p = (p << 1) | l();
            let g = [],
              m = 0,
              y = h;
            for (;;) {
              let t = Math.floor(((p - m + 1) * s - 1) / y),
                e = 0,
                n = r;
              for (; n - e > 1; ) {
                let r = (e + n) >>> 1;
                t < i[r] ? (n = r) : (e = r);
              }
              if (0 == e) break;
              g.push(e);
              let a = m + Math.floor((y * i[e]) / s),
                o = m + Math.floor((y * i[e + 1]) / s) - 1;
              for (; 0 == ((a ^ o) & f); )
                (p = ((p << 1) & d) | l()),
                  (a = (a << 1) & d),
                  (o = ((o << 1) & d) | 1);
              for (; a & ~o & 536870912; )
                (p = (p & f) | ((p << 1) & (d >>> 1)) | l()),
                  (a = (a << 1) ^ f),
                  (o = ((o ^ f) << 1) | f | 1);
              (m = a), (y = 1 + o - a);
            }
            let w = r - 4;
            return g.map((e) => {
              switch (e - w) {
                case 3:
                  return w + 65792 + ((t[o++] << 16) | (t[o++] << 8) | t[o++]);
                case 2:
                  return w + 256 + ((t[o++] << 8) | t[o++]);
                case 1:
                  return w + t[o++];
                default:
                  return e - 1;
              }
            });
          })(
            (function (t) {
              let e = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((t, n) => (e[t.charCodeAt(0)] = n));
              let n = t.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let s = 0, i = 0, a = 0, o = 0; s < n; s++)
                (o = (o << 6) | e[t.charCodeAt(s)]),
                  (a += 6),
                  a >= 8 && (r[i++] = o >> (a -= 8));
              return r;
            })(t),
          ),
        );
      }
      function An(t) {
        return 1 & t ? ~t >> 1 : t >> 1;
      }
      function bn(t, e) {
        let n = Array(t);
        for (let r = 0, s = 0; r < t; r++) n[r] = s += An(e());
        return n;
      }
      function vn(t, e = 0) {
        let n = [];
        for (;;) {
          let r = t(),
            s = t();
          if (!s) break;
          e += r;
          for (let t = 0; t < s; t++) n.push(e + t);
          e += s + 1;
        }
        return n;
      }
      function En(t) {
        return kn(() => {
          let e = vn(t);
          if (e.length) return e;
        });
      }
      function Pn(t) {
        let e = [];
        for (;;) {
          let n = t();
          if (0 == n) break;
          e.push(Cn(n, t));
        }
        for (;;) {
          let n = t() - 1;
          if (n < 0) break;
          e.push(Tn(n, t));
        }
        return e.flat();
      }
      function kn(t) {
        let e = [];
        for (;;) {
          let n = t(e.length);
          if (!n) break;
          e.push(n);
        }
        return e;
      }
      function Nn(t, e, n) {
        let r = Array(t)
          .fill()
          .map(() => []);
        for (let s = 0; s < e; s++) bn(t, n).forEach((t, e) => r[e].push(t));
        return r;
      }
      function Cn(t, e) {
        let n = 1 + e(),
          r = e(),
          s = kn(e);
        return Nn(s.length, 1 + t, e).flatMap((t, e) => {
          let [i, ...a] = t;
          return Array(s[e])
            .fill()
            .map((t, e) => {
              let s = e * r;
              return [i + e * n, a.map((t) => t + s)];
            });
        });
      }
      function Tn(t, e) {
        return Nn(1 + e(), 1 + t, e).map((t) => [t[0], t.slice(1)]);
      }
      var In = wn(
        "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",
      );
      const xn = new Map([
          [8217, "apostrophe"],
          [8260, "fraction slash"],
          [12539, "middle dot"],
        ]),
        Rn = 4;
      function On(t) {
        return `{${(function (t) {
          return t.toString(16).toUpperCase().padStart(2, "0");
        })(t)}}`;
      }
      function Sn(t) {
        let e = t.length;
        if (e < 4096) return String.fromCodePoint(...t);
        let n = [];
        for (let r = 0; r < e; )
          n.push(String.fromCodePoint(...t.slice(r, (r += 4096))));
        return n.join("");
      }
      var Bn = wn(
        "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",
      );
      function Dn(t) {
        return (t >> 24) & 255;
      }
      function Un(t) {
        return 16777215 & t;
      }
      const Ln = new Map(
          En(Bn).flatMap((t, e) => t.map((t) => [t, (e + 1) << 24])),
        ),
        Fn = new Set(vn(Bn)),
        Mn = new Map(),
        Gn = new Map();
      for (let [t, e] of Pn(Bn)) {
        if (!Fn.has(t) && 2 == e.length) {
          let [n, r] = e,
            s = Gn.get(n);
          s || ((s = new Map()), Gn.set(n, s)), s.set(r, t);
        }
        Mn.set(t, e.reverse());
      }
      const Kn = 44032,
        jn = 4352,
        Hn = 4449,
        _n = 4519,
        Vn = 28,
        Qn = 21 * Vn,
        zn = Kn + 19 * Qn,
        Jn = jn + 19,
        Zn = Hn + 21,
        qn = _n + Vn;
      function Wn(t) {
        return t >= Kn && t < zn;
      }
      function Yn(t, e) {
        if (t >= jn && t < Jn && e >= Hn && e < Zn)
          return Kn + (t - jn) * Qn + (e - Hn) * Vn;
        if (Wn(t) && e > _n && e < qn && (t - Kn) % Vn == 0)
          return t + (e - _n);
        {
          let n = Gn.get(t);
          return n && ((n = n.get(e)), n) ? n : -1;
        }
      }
      function Xn(t) {
        let e = [],
          n = [],
          r = !1;
        function s(t) {
          let n = Ln.get(t);
          n && ((r = !0), (t |= n)), e.push(t);
        }
        for (let r of t)
          for (;;) {
            if (r < 128) e.push(r);
            else if (Wn(r)) {
              let t = r - Kn,
                e = ((t % Qn) / Vn) | 0,
                n = t % Vn;
              s(jn + ((t / Qn) | 0)), s(Hn + e), n > 0 && s(_n + n);
            } else {
              let t = Mn.get(r);
              t ? n.push(...t) : s(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (r && e.length > 1) {
          let t = Dn(e[0]);
          for (let n = 1; n < e.length; n++) {
            let r = Dn(e[n]);
            if (0 == r || t <= r) {
              t = r;
              continue;
            }
            let s = n - 1;
            for (;;) {
              let n = e[s + 1];
              if (((e[s + 1] = e[s]), (e[s] = n), !s)) break;
              if (((t = Dn(e[--s])), t <= r)) break;
            }
            t = Dn(e[n]);
          }
        }
        return e;
      }
      function $n(t) {
        return Xn(t).map(Un);
      }
      function tr(t) {
        return (function (t) {
          let e = [],
            n = [],
            r = -1,
            s = 0;
          for (let i of t) {
            let t = Dn(i),
              a = Un(i);
            if (-1 == r) 0 == t ? (r = a) : e.push(a);
            else if (s > 0 && s >= t)
              0 == t ? (e.push(r, ...n), (n.length = 0), (r = a)) : n.push(a),
                (s = t);
            else {
              let i = Yn(r, a);
              i >= 0
                ? (r = i)
                : 0 == s && 0 == t
                ? (e.push(r), (r = a))
                : (n.push(a), (s = t));
            }
          }
          return r >= 0 && e.push(r, ...n), e;
        })(Xn(t));
      }
      const er = 65039,
        nr = ".",
        rr = 1,
        sr = 45;
      function ir() {
        return new Set(vn(In));
      }
      const ar = new Map(Pn(In)),
        or = ir(),
        cr = ir(),
        ur = new Set(
          vn(In).map(
            function (t) {
              return this[t];
            },
            [...cr],
          ),
        ),
        lr = ir(),
        hr = (ir(), En(In));
      function fr() {
        return new Set([vn(In).map((t) => hr[t]), vn(In)].flat(2));
      }
      const dr = In(),
        pr = kn((t) => {
          let e = kn(In).map((t) => t + 96);
          if (e.length) {
            let n = t >= dr;
            (e[0] -= 32), (e = Sn(e)), n && (e = `Restricted[${e}]`);
            let r = fr(),
              s = fr(),
              i = [...r, ...s].sort((t, e) => t - e);
            return { N: e, P: r, M: !In(), R: n, V: new Set(i) };
          }
        }),
        gr = ir(),
        mr = new Map();
      [...gr, ...ir()]
        .sort((t, e) => t - e)
        .map((t, e, n) => {
          let r = In(),
            s = (n[e] = r ? n[e - r] : { V: [], M: new Map() });
          s.V.push(t), gr.has(t) || mr.set(t, s);
        });
      for (let { V: t, M: e } of new Set(mr.values())) {
        let n = [];
        for (let e of t) {
          let t = pr.filter((t) => t.V.has(e)),
            r = n.find(({ G: e }) => t.some((t) => e.has(t)));
          r || ((r = { G: new Set(), V: [] }), n.push(r)),
            r.V.push(e),
            t.forEach((t) => r.G.add(t));
        }
        let r = n.flatMap(({ G: t }) => [...t]);
        for (let { G: t, V: s } of n) {
          let n = new Set(r.filter((e) => !t.has(e)));
          for (let t of s) e.set(t, n);
        }
      }
      let yr = new Set(),
        wr = new Set();
      for (let t of pr) for (let e of t.V) (yr.has(e) ? wr : yr).add(e);
      for (let t of yr) mr.has(t) || wr.has(t) || mr.set(t, rr);
      const Ar = new Set([...yr, ...$n(yr)]),
        br = vn(In),
        vr = (function t(e) {
          let n = kn(() => {
              let e = vn(In).map((t) => br[t]);
              if (e.length) return t(e);
            }).sort((t, e) => e.Q.size - t.Q.size),
            r = In(),
            s = r % 3;
          r = (r / 3) | 0;
          let i = 1 & r;
          return (
            (r >>= 1), { B: n, V: s, F: i, S: 1 & r, C: 2 & r, Q: new Set(e) }
          );
        })([]);
      class Er extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function Pr(t, e = On) {
        let n = [];
        var r;
        (r = t[0]), cr.has(r) && n.push("◌");
        let s = 0,
          i = t.length;
        for (let r = 0; r < i; r++) {
          let i = t[r];
          Tr(i) && (n.push(Sn(t.slice(s, r))), n.push(e(i)), (s = r + 1));
        }
        return n.push(Sn(t.slice(s, i))), n.join("");
      }
      function kr(t) {
        return (Tr(t) ? "" : `${Nr(Pr([t]))} `) + On(t);
      }
      function Nr(t) {
        return `"${t}"‎`;
      }
      function Cr(t) {
        for (let e = t.lastIndexOf(95); e > 0; )
          if (95 !== t[--e])
            throw new Error("underscore allowed only at start");
      }
      function Tr(t) {
        return lr.has(t);
      }
      function Ir(t, e) {
        let n = 0;
        return t.split(nr).map((t) => {
          let r,
            s = (function (t) {
              let e = [];
              for (let n = 0, r = t.length; n < r; ) {
                let r = t.codePointAt(n);
                (n += r < 65536 ? 1 : 2), e.push(r);
              }
              return e;
            })(t),
            i = { input: s, offset: n };
          n += s.length + 1;
          try {
            let t,
              n = (i.tokens = (function (t, e) {
                let n = [],
                  r = [];
                for (t = t.slice().reverse(); t.length; ) {
                  let s = Sr(t);
                  if (s) r.length && (n.push(e(r)), (r = [])), n.push(s);
                  else {
                    let e = t.pop();
                    if (Ar.has(e)) r.push(e);
                    else {
                      let t = ar.get(e);
                      if (t) r.push(...t);
                      else if (!or.has(e)) throw xr(e);
                    }
                  }
                }
                return r.length && n.push(e(r)), n;
              })(s, tr)),
              a = n.length;
            if (!a) throw new Error("empty label");
            {
              let s = n[0],
                o = a > 1 || s.is_emoji;
              if (!o && s.every((t) => t < 128))
                (r = s),
                  Cr(r),
                  (function (t) {
                    if (t.length >= 4 && t[2] == sr && t[3] == sr)
                      throw new Error("invalid label extension");
                  })(r),
                  (t = "ASCII");
              else if (
                (o &&
                  ((i.emoji = !0),
                  (s = n.flatMap((t) => (t.is_emoji ? [] : t)))),
                (r = n.flatMap((t) =>
                  !e && t.is_emoji ? t.filter((t) => t != er) : t,
                )),
                Cr(r),
                s.length)
              ) {
                if (cr.has(r[0])) throw Or("leading combining mark");
                for (let t = 1; t < a; t++) {
                  let e = n[t];
                  if (!e.is_emoji && cr.has(e[0]))
                    throw Or(
                      `emoji + combining mark: "${Sn(n[t - 1])} + ${Pr([
                        e[0],
                      ])}"`,
                    );
                }
                !(function (t) {
                  let e = t[0],
                    n = xn.get(e);
                  if (n) throw Or(`leading ${n}`);
                  let r = t.length,
                    s = -1;
                  for (let i = 1; i < r; i++) {
                    e = t[i];
                    let r = xn.get(e);
                    if (r) {
                      if (s == i) throw Or(`${n} + ${r}`);
                      (s = i + 1), (n = r);
                    }
                  }
                  if (s == r) throw Or(`trailing ${n}`);
                })(r);
                let e = [...new Set(s)],
                  [i] = (function (t) {
                    let e = pr;
                    for (let n of t) {
                      let t = e.filter((t) => t.V.has(n));
                      if (!t.length) throw e === pr ? xr(n) : Rr(e[0], n);
                      if (((e = t), 1 == t.length)) break;
                    }
                    return e;
                  })(e);
                !(function (t, e) {
                  let { V: n, M: r } = t;
                  for (let r of e) if (!n.has(r)) throw Rr(t, r);
                  if (r) {
                    let t = $n(e);
                    for (let e = 1, n = t.length; e < n; e++)
                      if (ur.has(t[e])) {
                        let r = e + 1;
                        for (let s; r < n && ur.has((s = t[r])); r++)
                          for (let n = e; n < r; n++)
                            if (t[n] == s)
                              throw new Error(
                                `non-spacing marks: repeated ${kr(s)}`,
                              );
                        if (r - e > Rn)
                          throw new Error(
                            `non-spacing marks: too many ${Nr(
                              Pr(t.slice(e - 1, r)),
                            )} (${r - e}/${Rn})`,
                          );
                        e = r;
                      }
                  }
                })(i, s),
                  (function (t, e) {
                    let n,
                      r = [];
                    for (let t of e) {
                      let e = mr.get(t);
                      if (e === rr) return;
                      if (e) {
                        let r = e.M.get(t);
                        if (
                          ((n = n ? n.filter((t) => r.has(t)) : [...r]),
                          !n.length)
                        )
                          return;
                      } else r.push(t);
                    }
                    if (n)
                      for (let e of n)
                        if (r.every((t) => e.V.has(t)))
                          throw new Error(
                            `whole-script confusable: ${t.N}/${e.N}`,
                          );
                  })(i, e),
                  (t = i.N);
              } else t = "Emoji";
            }
            i.type = t;
          } catch (t) {
            i.error = t;
          }
          return (i.output = r), i;
        });
      }
      function xr(t) {
        return new Error(`disallowed character: ${kr(t)}`);
      }
      function Rr(t, e) {
        let n = kr(e),
          r = pr.find((t) => t.P.has(e));
        return (
          r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${t.N} + ${n}`)
        );
      }
      function Or(t) {
        return new Error(`illegal placement: ${t}`);
      }
      function Sr(t, e) {
        let n,
          r,
          s = vr,
          i = [],
          a = t.length;
        for (e && (e.length = 0); a; ) {
          let o = t[--a];
          if (((s = s.B.find((t) => t.Q.has(o))), !s)) break;
          if (s.S) r = o;
          else if (s.C && o === r) break;
          i.push(o),
            s.F && (i.push(er), a > 0 && t[a - 1] == er && a--),
            s.V &&
              ((n = Br(i, s)),
              e && e.push(...t.slice(a).reverse()),
              (t.length = a));
        }
        return n;
      }
      function Br(t, e) {
        let n = Er.from(t);
        return 2 == e.V && n.splice(1, 1), n;
      }
      const Dr = new Uint8Array(32);
      function Ur(t) {
        return (
          (0, A.en)(
            0 !== t.length,
            "invalid ENS name; empty component",
            "comp",
            t,
          ),
          t
        );
      }
      function Lr(t) {
        const e = (0, s.Y0)(Fr(t)),
          n = [];
        if (0 === t.length) return n;
        let r = 0;
        for (let t = 0; t < e.length; t++)
          46 === e[t] && (n.push(Ur(e.slice(r, t))), (r = t + 1));
        return (
          (0, A.en)(
            r < e.length,
            "invalid ENS name; empty component",
            "name",
            t,
          ),
          n.push(Ur(e.slice(r))),
          n
        );
      }
      function Fr(t) {
        try {
          return (function (t) {
            return (e = Ir(t))
              .map(({ input: t, error: n, output: r }) => {
                if (n) {
                  let r = n.message;
                  throw new Error(
                    1 == e.length ? r : `Invalid label ${Nr(Pr(t))}: ${r}`,
                  );
                }
                return Sn(r);
              })
              .join(nr);
            var e;
          })(t);
        } catch (e) {
          (0, A.en)(!1, `invalid ENS name (${e.message})`, "name", t);
        }
      }
      function Mr(t) {
        try {
          return 0 !== Lr(t).length;
        } catch (t) {}
        return !1;
      }
      function Gr(t) {
        (0, A.en)(
          "string" == typeof t,
          "invalid ENS name; not a string",
          "name",
          t,
        );
        let e = Dr;
        const n = Lr(t);
        for (; n.length; ) e = (0, d.w)((0, i.zo)([e, (0, d.w)(n.pop())]));
        return (0, i.Dv)(e);
      }
      function Kr(t) {
        return (
          (0, i.Dv)(
            (0, i.zo)(
              Lr(t).map((t) => {
                if (t.length > 63)
                  throw new Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes",
                  );
                const e = new Uint8Array(t.length + 1);
                return e.set(t, 1), (e[0] = e.length - 1), e;
              }),
            ),
          ) + "00"
        );
      }
      function jr(t) {
        let e;
        return (
          (e = "string" == typeof t ? yn.computePublicKey(t, !1) : t.publicKey),
          (0, b.K)((0, d.w)("0x" + e.substring(4)).substring(26))
        );
      }
      function Hr(t, e) {
        return jr(yn.recoverPublicKey(t, e));
      }
      function _r(t) {
        return (
          "string" == typeof t && (t = (0, s.Y0)(t)),
          (0, d.w)((0, i.zo)([(0, s.Y0)(S), (0, s.Y0)(String(t.length)), t]))
        );
      }
      function Vr(t, e) {
        return Hr(_r(t), e);
      }
      Dr.fill(0);
      const Qr = new RegExp("^bytes([0-9]+)$"),
        zr = new RegExp("^(u?int)([0-9]*)$"),
        Jr = new RegExp("^(.*)\\[([0-9]*)\\]$");
      function Zr(t, e, n) {
        switch (t) {
          case "address":
            return n ? (0, i.Pw)((0, i.U3)(e, 32)) : (0, i.Pw)((0, b.K)(e));
          case "string":
            return (0, s.Y0)(e);
          case "bytes":
            return (0, i.Pw)(e);
          case "bool":
            return (
              (e = e ? "0x01" : "0x00"),
              n ? (0, i.Pw)((0, i.U3)(e, 32)) : (0, i.Pw)(e)
            );
        }
        let r = t.match(zr);
        if (r) {
          let s = "int" === r[1],
            a = parseInt(r[2] || "256");
          return (
            (0, A.en)(
              (!r[2] || r[2] === String(a)) &&
                a % 8 == 0 &&
                0 !== a &&
                a <= 256,
              "invalid number type",
              "type",
              t,
            ),
            n && (a = 256),
            s && (e = (0, p.$j)(e, a)),
            (0, i.Pw)((0, i.U3)((0, p.ot)(e), a / 8))
          );
        }
        if (((r = t.match(Qr)), r)) {
          const s = parseInt(r[1]);
          return (
            (0, A.en)(
              String(s) === r[1] && 0 !== s && s <= 32,
              "invalid bytes type",
              "type",
              t,
            ),
            (0, A.en)((0, i.M5)(e) === s, `invalid value for ${t}`, "value", e),
            n ? (0, i.Pw)((0, i.SK)(e, 32)) : e
          );
        }
        if (((r = t.match(Jr)), r && Array.isArray(e))) {
          const n = r[1],
            s = parseInt(r[2] || String(e.length));
          (0, A.en)(
            s === e.length,
            `invalid array length for ${t}`,
            "value",
            e,
          );
          const a = [];
          return (
            e.forEach(function (t) {
              a.push(Zr(n, t, !0));
            }),
            (0, i.Pw)((0, i.zo)(a))
          );
        }
        (0, A.en)(!1, "invalid type", "type", t);
      }
      function qr(t, e) {
        (0, A.en)(
          t.length === e.length,
          "wrong number of values; expected ${ types.length }",
          "values",
          e,
        );
        const n = [];
        return (
          t.forEach(function (t, r) {
            n.push(Zr(t, e[r]));
          }),
          (0, i.Dv)((0, i.zo)(n))
        );
      }
      function Wr(t, e) {
        return (0, d.w)(qr(t, e));
      }
      function Yr(t, e) {
        return re(qr(t, e));
      }
      var Xr = n(2186);
      const $r = new Uint8Array(32);
      $r.fill(0);
      const ts = BigInt(-1),
        es = BigInt(0),
        ns = BigInt(1),
        rs = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        ),
        ss = (0, p.m9)(ns, 32),
        is = (0, p.m9)(es, 32),
        as = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        os = ["name", "version", "chainId", "verifyingContract", "salt"];
      function cs(t) {
        return function (e) {
          return (
            (0, A.en)(
              "string" == typeof e,
              `invalid domain value for ${JSON.stringify(t)}`,
              `domain.${t}`,
              e,
            ),
            e
          );
        };
      }
      const us = {
        name: cs("name"),
        version: cs("version"),
        chainId: function (t) {
          const e = (0, p.yT)(t, "domain.chainId");
          return (
            (0, A.en)(e >= 0, "invalid chain ID", "domain.chainId", t),
            Number.isSafeInteger(e) ? Number(e) : (0, p.B4)(e)
          );
        },
        verifyingContract: function (t) {
          try {
            return (0, b.K)(t).toLowerCase();
          } catch (t) {}
          (0, A.en)(
            !1,
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t,
          );
        },
        salt: function (t) {
          const e = (0, i.Pw)(t, "domain.salt");
          return (
            (0, A.en)(
              32 === e.length,
              'invalid domain value "salt"',
              "domain.salt",
              t,
            ),
            (0, i.Dv)(e)
          );
        },
      };
      function ls(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const n = "" === e[1],
              r = parseInt(e[2] || "256");
            (0, A.en)(
              r % 8 == 0 &&
                0 !== r &&
                r <= 256 &&
                (null == e[2] || e[2] === String(r)),
              "invalid numeric width",
              "type",
              t,
            );
            const s = (0, p.sS)(rs, n ? r - 1 : r),
              i = n ? (s + ns) * ts : es;
            return function (e) {
              const r = (0, p.yT)(e, "value");
              return (
                (0, A.en)(
                  r >= i && r <= s,
                  `value out-of-bounds for ${t}`,
                  "value",
                  r,
                ),
                (0, p.m9)(n ? (0, p.$j)(r, 256) : r, 32)
              );
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const n = parseInt(e[1]);
            return (
              (0, A.en)(
                0 !== n && n <= 32 && e[1] === String(n),
                "invalid bytes width",
                "type",
                t,
              ),
              function (e) {
                const r = (0, i.Pw)(e);
                return (
                  (0, A.en)(
                    r.length === n,
                    `invalid length for ${t}`,
                    "value",
                    e,
                  ),
                  (function (t) {
                    const e = (0, i.Pw)(t),
                      n = e.length % 32;
                    return n ? (0, i.zo)([e, $r.slice(n)]) : (0, i.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, i.U3)((0, b.K)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? ss : is;
            };
          case "bytes":
            return function (t) {
              return (0, d.w)(t);
            };
          case "string":
            return function (t) {
              return (0, Xr.id)(t);
            };
        }
        return null;
      }
      function hs(t, e) {
        return `${t}(${e
          .map(({ name: t, type: e }) => e + " " + t)
          .join(",")})`;
      }
      class fs {
        primaryType;
        #k;
        get types() {
          return JSON.parse(this.#k);
        }
        #N;
        #C;
        constructor(t) {
          (this.#k = JSON.stringify(t)),
            (this.#N = new Map()),
            (this.#C = new Map());
          const e = new Map(),
            n = new Map(),
            r = new Map();
          Object.keys(t).forEach((t) => {
            e.set(t, new Set()), n.set(t, []), r.set(t, new Set());
          });
          for (const r in t) {
            const s = new Set();
            for (const i of t[r]) {
              (0, A.en)(
                !s.has(i.name),
                `duplicate variable name ${JSON.stringify(
                  i.name,
                )} in ${JSON.stringify(r)}`,
                "types",
                t,
              ),
                s.add(i.name);
              const a = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
              (0, A.en)(
                a !== r,
                `circular type reference to ${JSON.stringify(a)}`,
                "types",
                t,
              ),
                ls(a) ||
                  ((0, A.en)(
                    n.has(a),
                    `unknown type ${JSON.stringify(a)}`,
                    "types",
                    t,
                  ),
                  n.get(a).push(r),
                  e.get(r).add(a));
            }
          }
          const s = Array.from(n.keys()).filter((t) => 0 === n.get(t).length);
          (0, A.en)(0 !== s.length, "missing primary type", "types", t),
            (0, A.en)(
              1 === s.length,
              `ambiguous primary types or unused types: ${s
                .map((t) => JSON.stringify(t))
                .join(", ")}`,
              "types",
              t,
            ),
            (0, B.h)(this, { primaryType: s[0] }),
            (function s(i, a) {
              (0, A.en)(
                !a.has(i),
                `circular type reference to ${JSON.stringify(i)}`,
                "types",
                t,
              ),
                a.add(i);
              for (const t of e.get(i))
                if (n.has(t)) {
                  s(t, a);
                  for (const e of a) r.get(e).add(t);
                }
              a.delete(i);
            })(this.primaryType, new Set());
          for (const [e, n] of r) {
            const r = Array.from(n);
            r.sort(),
              this.#N.set(e, hs(e, t[e]) + r.map((e) => hs(e, t[e])).join(""));
          }
        }
        getEncoder(t) {
          let e = this.#C.get(t);
          return e || ((e = this.#T(t)), this.#C.set(t, e)), e;
        }
        #T(t) {
          {
            const e = ls(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1],
              n = this.getEncoder(t);
            return (r) => {
              (0, A.en)(
                !e[3] || parseInt(e[3]) === r.length,
                `array length mismatch; expected length ${parseInt(e[3])}`,
                "value",
                r,
              );
              let s = r.map(n);
              return this.#N.has(t) && (s = s.map(d.w)), (0, d.w)((0, i.zo)(s));
            };
          }
          const n = this.types[t];
          if (n) {
            const e = (0, Xr.id)(this.#N.get(t));
            return (t) => {
              const r = n.map(({ name: e, type: n }) => {
                const r = this.getEncoder(n)(t[e]);
                return this.#N.has(n) ? (0, d.w)(r) : r;
              });
              return r.unshift(e), (0, i.zo)(r);
            };
          }
          (0, A.en)(!1, `unknown type: ${t}`, "type", t);
        }
        encodeType(t) {
          const e = this.#N.get(t);
          return (
            (0, A.en)(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, d.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, n) {
          if (ls(t)) return n(t, e);
          const r = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (r)
            return (
              (0, A.en)(
                !r[3] || parseInt(r[3]) === e.length,
                `array length mismatch; expected length ${parseInt(r[3])}`,
                "value",
                e,
              ),
              e.map((t) => this._visit(r[1], t, n))
            );
          const s = this.types[t];
          if (s)
            return s.reduce(
              (t, { name: r, type: s }) => (
                (t[r] = this._visit(s, e[r], n)), t
              ),
              {},
            );
          (0, A.en)(!1, `unknown type: ${t}`, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new fs(t);
        }
        static getPrimaryType(t) {
          return fs.from(t).primaryType;
        }
        static hashStruct(t, e, n) {
          return fs.from(e).hashStruct(t, n);
        }
        static hashDomain(t) {
          const e = [];
          for (const n in t) {
            if (null == t[n]) continue;
            const r = as[n];
            (0, A.en)(
              r,
              `invalid typed-data domain key: ${JSON.stringify(n)}`,
              "domain",
              t,
            ),
              e.push({ name: n, type: r });
          }
          return (
            e.sort((t, e) => os.indexOf(t.name) - os.indexOf(e.name)),
            fs.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, n) {
          return (0, i.zo)(["0x1901", fs.hashDomain(t), fs.from(e).hash(n)]);
        }
        static hash(t, e, n) {
          return (0, d.w)(fs.encode(t, e, n));
        }
        static async resolveNames(t, e, n, r) {
          t = Object.assign({}, t);
          for (const e in t) null == t[e] && delete t[e];
          const s = {};
          t.verifyingContract &&
            !(0, i.A7)(t.verifyingContract, 20) &&
            (s[t.verifyingContract] = "0x");
          const a = fs.from(e);
          a.visit(
            n,
            (t, e) => ("address" !== t || (0, i.A7)(e, 20) || (s[e] = "0x"), e),
          );
          for (const t in s) s[t] = await r(t);
          return (
            t.verifyingContract &&
              s[t.verifyingContract] &&
              (t.verifyingContract = s[t.verifyingContract]),
            {
              domain: t,
              value: (n = a.visit(n, (t, e) =>
                "address" === t && s[e] ? s[e] : e,
              )),
            }
          );
        }
        static getPayload(t, e, n) {
          fs.hashDomain(t);
          const r = {},
            s = [];
          os.forEach((e) => {
            const n = t[e];
            null != n && ((r[e] = us[e](n)), s.push({ name: e, type: as[e] }));
          });
          const a = fs.from(e),
            o = Object.assign({}, e);
          return (
            (0, A.en)(
              null == o.EIP712Domain,
              "types must not contain EIP712Domain type",
              "types.EIP712Domain",
              e,
            ),
            (o.EIP712Domain = s),
            a.encode(n),
            {
              types: o,
              domain: r,
              primaryType: a.primaryType,
              message: a.visit(n, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, i.Dv)((0, i.Pw)(e));
                if (t.match(/^u?int/)) return (0, p.yT)(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      (0, A.en)(
                        "string" == typeof e,
                        "invalid string",
                        "value",
                        e,
                      ),
                      e
                    );
                }
                (0, A.en)(!1, "unsupported type", "type", t);
              }),
            }
          );
        }
      }
      function ds(t, e, n, r) {
        return Hr(fs.hash(t, e, n), r);
      }
      function ps(t) {
        t = atob(t);
        const e = new Uint8Array(t.length);
        for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
        return (0, i.Pw)(e);
      }
      function gs(t) {
        const e = (0, i.Pw)(t);
        let n = "";
        for (let t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
        return btoa(n);
      }
      let ms = async function (t, e) {
        const n = t.url.split(":")[0].toLowerCase();
        let r;
        if (
          ((0, A.hu)(
            "http" === n || "https" === n,
            `unsupported protocol ${n}`,
            "UNSUPPORTED_OPERATION",
            { info: { protocol: n }, operation: "request" },
          ),
          (0, A.hu)(
            "https" === n || !t.credentials || t.allowInsecureAuthentication,
            "insecure authorized connections unsupported",
            "UNSUPPORTED_OPERATION",
            { operation: "request" },
          ),
          e)
        ) {
          const t = new AbortController();
          (r = t.signal),
            e.addListener(() => {
              t.abort();
            });
        }
        const s = {
            method: t.method,
            headers: new Headers(Array.from(t)),
            body: t.body || void 0,
            signal: r,
          },
          i = await fetch(t.url, s),
          a = {};
        i.headers.forEach((t, e) => {
          a[e.toLowerCase()] = t;
        });
        const o = await i.arrayBuffer(),
          c = null == o ? null : new Uint8Array(o);
        return {
          statusCode: i.status,
          statusMessage: i.statusText,
          headers: a,
          body: c,
        };
      };
      const ys = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
        ws = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
      let As = !1;
      async function bs(t, e) {
        try {
          const e = t.match(ys);
          if (!e) throw new Error("invalid data");
          return new Ts(
            200,
            "OK",
            { "content-type": e[1] || "text/plain" },
            e[2]
              ? ps(e[3])
              : ((n = e[3]),
                (0, s.Y0)(
                  n.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                    String.fromCharCode(parseInt(e, 16)),
                  ),
                )),
          );
        } catch (e) {
          return new Ts(
            599,
            "BAD REQUEST (invalid data: URI)",
            {},
            null,
            new Cs(t),
          );
        }
        var n;
      }
      function vs(t) {
        return async function (e, n) {
          try {
            const n = e.match(ws);
            if (!n) throw new Error("invalid link");
            return new Cs(`${t}${n[2]}`);
          } catch (t) {
            return new Ts(
              599,
              "BAD REQUEST (invalid IPFS URI)",
              {},
              null,
              new Cs(e),
            );
          }
        };
      }
      const Es = { data: bs, ipfs: vs("https://gateway.ipfs.io/ipfs/") },
        Ps = new WeakMap();
      class ks {
        #I;
        #x;
        constructor(t) {
          (this.#I = []),
            (this.#x = !1),
            Ps.set(t, () => {
              if (!this.#x) {
                this.#x = !0;
                for (const t of this.#I)
                  setTimeout(() => {
                    t();
                  }, 0);
                this.#I = [];
              }
            });
        }
        addListener(t) {
          (0, A.hu)(
            !this.#x,
            "singal already cancelled",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchCancelSignal.addCancelListener" },
          ),
            this.#I.push(t);
        }
        get cancelled() {
          return this.#x;
        }
        checkSignal() {
          (0, A.hu)(!this.cancelled, "cancelled", "CANCELLED", {});
        }
      }
      function Ns(t) {
        if (null == t) throw new Error("missing signal; should not happen");
        return t.checkSignal(), t;
      }
      class Cs {
        #R;
        #O;
        #S;
        #B;
        #D;
        #U;
        #L;
        #F;
        #M;
        #G;
        #K;
        #j;
        #H;
        #_;
        get url() {
          return this.#U;
        }
        set url(t) {
          this.#U = String(t);
        }
        get body() {
          return null == this.#L ? null : new Uint8Array(this.#L);
        }
        set body(t) {
          if (null == t) (this.#L = void 0), (this.#F = void 0);
          else if ("string" == typeof t)
            (this.#L = (0, s.Y0)(t)), (this.#F = "text/plain");
          else if (t instanceof Uint8Array)
            (this.#L = t), (this.#F = "application/octet-stream");
          else {
            if ("object" != typeof t) throw new Error("invalid body");
            (this.#L = (0, s.Y0)(JSON.stringify(t))),
              (this.#F = "application/json");
          }
        }
        hasBody() {
          return null != this.#L;
        }
        get method() {
          return this.#B ? this.#B : this.hasBody() ? "POST" : "GET";
        }
        set method(t) {
          null == t && (t = ""), (this.#B = String(t).toUpperCase());
        }
        get headers() {
          const t = Object.assign({}, this.#S);
          return (
            this.#M && (t.authorization = `Basic ${gs((0, s.Y0)(this.#M))}`),
            this.allowGzip && (t["accept-encoding"] = "gzip"),
            null == t["content-type"] &&
              this.#F &&
              (t["content-type"] = this.#F),
            this.body && (t["content-length"] = String(this.body.length)),
            t
          );
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        setHeader(t, e) {
          this.#S[String(t).toLowerCase()] = String(e);
        }
        clearHeaders() {
          this.#S = {};
        }
        [Symbol.iterator]() {
          const t = this.headers,
            e = Object.keys(t);
          let n = 0;
          return {
            next: () => {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        get credentials() {
          return this.#M || null;
        }
        setCredentials(t, e) {
          (0, A.en)(
            !t.match(/:/),
            "invalid basic authentication username",
            "username",
            "[REDACTED]",
          ),
            (this.#M = `${t}:${e}`);
        }
        get allowGzip() {
          return this.#O;
        }
        set allowGzip(t) {
          this.#O = !!t;
        }
        get allowInsecureAuthentication() {
          return !!this.#R;
        }
        set allowInsecureAuthentication(t) {
          this.#R = !!t;
        }
        get timeout() {
          return this.#D;
        }
        set timeout(t) {
          (0, A.en)(t >= 0, "timeout must be non-zero", "timeout", t),
            (this.#D = t);
        }
        get preflightFunc() {
          return this.#G || null;
        }
        set preflightFunc(t) {
          this.#G = t;
        }
        get processFunc() {
          return this.#K || null;
        }
        set processFunc(t) {
          this.#K = t;
        }
        get retryFunc() {
          return this.#j || null;
        }
        set retryFunc(t) {
          this.#j = t;
        }
        constructor(t) {
          (this.#U = String(t)),
            (this.#R = !1),
            (this.#O = !0),
            (this.#S = {}),
            (this.#B = ""),
            (this.#D = 3e5),
            (this.#_ = { slotInterval: 250, maxAttempts: 12 });
        }
        toString() {
          return `<FetchRequest method=${JSON.stringify(
            this.method,
          )} url=${JSON.stringify(this.url)} headers=${JSON.stringify(
            this.headers,
          )} body=${this.#L ? (0, i.Dv)(this.#L) : "null"}>`;
        }
        setThrottleParams(t) {
          null != t.slotInterval && (this.#_.slotInterval = t.slotInterval),
            null != t.maxAttempts && (this.#_.maxAttempts = t.maxAttempts);
        }
        async #V(t, e, n, r, s) {
          if (t >= this.#_.maxAttempts)
            return s.makeServerError("exceeded maximum retry limit");
          (0, A.hu)(Is() <= e, "timeout", "TIMEOUT", {
            operation: "request.send",
            reason: "timeout",
            request: r,
          }),
            n > 0 &&
              (await (function (t) {
                return new Promise((e) => setTimeout(e, t));
              })(n));
          let i = this.clone();
          const a = (i.url.split(":")[0] || "").toLowerCase();
          if (a in Es) {
            const t = await Es[a](i.url, Ns(r.#H));
            if (t instanceof Ts) {
              let e = t;
              if (this.processFunc) {
                Ns(r.#H);
                try {
                  e = await this.processFunc(i, e);
                } catch (t) {
                  (null != t.throttle && "number" == typeof t.stall) ||
                    e
                      .makeServerError("error in post-processing function", t)
                      .assertOk();
                }
              }
              return e;
            }
            i = t;
          }
          this.preflightFunc && (i = await this.preflightFunc(i));
          const o = await ms(i, Ns(r.#H));
          let c = new Ts(o.statusCode, o.statusMessage, o.headers, o.body, r);
          if (301 === c.statusCode || 302 === c.statusCode) {
            try {
              const n = c.headers.location || "";
              return i.redirect(n).#V(t + 1, e, 0, r, c);
            } catch (t) {}
            return c;
          }
          if (
            429 === c.statusCode &&
            (null == this.retryFunc || (await this.retryFunc(i, c, t)))
          ) {
            const n = c.headers["retry-after"];
            let s =
              this.#_.slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
            return (
              "string" == typeof n &&
                n.match(/^[1-9][0-9]*$/) &&
                (s = parseInt(n)),
              i.clone().#V(t + 1, e, s, r, c)
            );
          }
          if (this.processFunc) {
            Ns(r.#H);
            try {
              c = await this.processFunc(i, c);
            } catch (n) {
              (null != n.throttle && "number" == typeof n.stall) ||
                c
                  .makeServerError("error in post-processing function", n)
                  .assertOk();
              let s =
                this.#_.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t));
              return (
                n.stall >= 0 && (s = n.stall), i.clone().#V(t + 1, e, s, r, c)
              );
            }
          }
          return c;
        }
        send() {
          return (
            (0, A.hu)(
              null == this.#H,
              "request already sent",
              "UNSUPPORTED_OPERATION",
              { operation: "fetchRequest.send" },
            ),
            (this.#H = new ks(this)),
            this.#V(
              0,
              Is() + this.timeout,
              0,
              this,
              new Ts(0, "", {}, null, this),
            )
          );
        }
        cancel() {
          (0, A.hu)(
            null != this.#H,
            "request has not been sent",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchRequest.cancel" },
          );
          const t = Ps.get(this);
          if (!t) throw new Error("missing signal; should not happen");
          t();
        }
        redirect(t) {
          const e = this.url.split(":")[0].toLowerCase(),
            n = t.split(":")[0].toLowerCase();
          (0, A.hu)(
            "GET" === this.method &&
              ("https" !== e || "http" !== n) &&
              t.match(/^https?:/),
            "unsupported redirect",
            "UNSUPPORTED_OPERATION",
            {
              operation: `redirect(${this.method} ${JSON.stringify(
                this.url,
              )} => ${JSON.stringify(t)})`,
            },
          );
          const r = new Cs(t);
          return (
            (r.method = "GET"),
            (r.allowGzip = this.allowGzip),
            (r.timeout = this.timeout),
            (r.#S = Object.assign({}, this.#S)),
            this.#L && (r.#L = new Uint8Array(this.#L)),
            (r.#F = this.#F),
            r
          );
        }
        clone() {
          const t = new Cs(this.url);
          return (
            (t.#B = this.#B),
            this.#L && (t.#L = this.#L),
            (t.#F = this.#F),
            (t.#S = Object.assign({}, this.#S)),
            (t.#M = this.#M),
            this.allowGzip && (t.allowGzip = !0),
            (t.timeout = this.timeout),
            this.allowInsecureAuthentication &&
              (t.allowInsecureAuthentication = !0),
            (t.#G = this.#G),
            (t.#K = this.#K),
            (t.#j = this.#j),
            t
          );
        }
        static lockConfig() {
          As = !0;
        }
        static getGateway(t) {
          return Es[t.toLowerCase()] || null;
        }
        static registerGateway(t, e) {
          if ("http" === (t = t.toLowerCase()) || "https" === t)
            throw new Error(`cannot intercept ${t}; use registerGetUrl`);
          if (As) throw new Error("gateways locked");
          Es[t] = e;
        }
        static registerGetUrl(t) {
          if (As) throw new Error("gateways locked");
          ms = t;
        }
        static createDataGateway() {
          return bs;
        }
        static createIpfsGatewayFunc(t) {
          return vs(t);
        }
      }
      class Ts {
        #Q;
        #z;
        #S;
        #L;
        #J;
        #Z;
        toString() {
          return `<FetchResponse status=${this.statusCode} body=${
            this.#L ? (0, i.Dv)(this.#L) : "null"
          }>`;
        }
        get statusCode() {
          return this.#Q;
        }
        get statusMessage() {
          return this.#z;
        }
        get headers() {
          return Object.assign({}, this.#S);
        }
        get body() {
          return null == this.#L ? null : new Uint8Array(this.#L);
        }
        get bodyText() {
          try {
            return null == this.#L ? "" : (0, s.ZN)(this.#L);
          } catch (t) {
            (0, A.hu)(
              !1,
              "response body is not valid UTF-8 data",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyText", info: { response: this } },
            );
          }
        }
        get bodyJson() {
          try {
            return JSON.parse(this.bodyText);
          } catch (t) {
            (0, A.hu)(
              !1,
              "response body is not valid JSON",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyJson", info: { response: this } },
            );
          }
        }
        [Symbol.iterator]() {
          const t = this.headers,
            e = Object.keys(t);
          let n = 0;
          return {
            next: () => {
              if (n < e.length) {
                const r = e[n++];
                return { value: [r, t[r]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        constructor(t, e, n, r, s) {
          (this.#Q = t),
            (this.#z = e),
            (this.#S = Object.keys(n).reduce(
              (t, e) => ((t[e.toLowerCase()] = String(n[e])), t),
              {},
            )),
            (this.#L = null == r ? null : new Uint8Array(r)),
            (this.#J = s || null),
            (this.#Z = { message: "" });
        }
        makeServerError(t, e) {
          let n;
          n = t
            ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`
            : `CLIENT ESCALATED SERVER ERROR (${(t = `${this.statusCode} ${this.statusMessage}`)})`;
          const r = new Ts(599, n, this.headers, this.body, this.#J || void 0);
          return (r.#Z = { message: t, error: e }), r;
        }
        throwThrottleError(t, e) {
          null == e
            ? (e = -1)
            : (0, A.en)(
                Number.isInteger(e) && e >= 0,
                "invalid stall timeout",
                "stall",
                e,
              );
          const n = new Error(t || "throttling requests");
          throw ((0, B.h)(n, { stall: e, throttle: !0 }), n);
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        hasBody() {
          return null != this.#L;
        }
        get request() {
          return this.#J;
        }
        ok() {
          return (
            "" === this.#Z.message &&
            this.statusCode >= 200 &&
            this.statusCode < 300
          );
        }
        assertOk() {
          if (this.ok()) return;
          let { message: t, error: e } = this.#Z;
          "" === t &&
            (t = `server response ${this.statusCode} ${this.statusMessage}`),
            (0, A.hu)(!1, t, "SERVER_ERROR", {
              request: this.request || "unknown request",
              response: this,
              error: e,
            });
        }
      }
      function Is() {
        return new Date().getTime();
      }
      const xs = new Set();
      function Rs(t) {
        xs.has(t) ||
          (xs.add(t),
          console.log("========= NOTICE ========="),
          console.log(
            `Request-Rate Exceeded for ${t} (this message will not be repeated)`,
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,",
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping.",
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended",
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your",
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs.",
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.org/api-keys/"),
          console.log("=========================="));
      }
      var Os = n(1891);
      class Ss {
        name;
        constructor(t) {
          (0, B.h)(this, { name: t });
        }
        clone() {
          return new Ss(this.name);
        }
      }
      class Bs extends Ss {
        effectiveBlock;
        txBase;
        txCreate;
        txDataZero;
        txDataNonzero;
        txAccessListStorageKey;
        txAccessListAddress;
        constructor(t, e) {
          null == t && (t = 0),
            super(`org.ethers.network.plugins.GasCost#${t || 0}`);
          const n = { effectiveBlock: t };
          function r(t, r) {
            let s = (e || {})[t];
            null == s && (s = r),
              (0, A.en)(
                "number" == typeof s,
                `invalud value for ${t}`,
                "costs",
                e,
              ),
              (n[t] = s);
          }
          r("txBase", 21e3),
            r("txCreate", 32e3),
            r("txDataZero", 4),
            r("txDataNonzero", 16),
            r("txAccessListStorageKey", 1900),
            r("txAccessListAddress", 2400),
            (0, B.h)(this, n);
        }
        clone() {
          return new Bs(this.effectiveBlock, this);
        }
      }
      class Ds extends Ss {
        address;
        targetNetwork;
        constructor(t, e) {
          super("org.ethers.plugins.network.Ens"),
            (0, B.h)(this, {
              address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              targetNetwork: null == e ? 1 : e,
            });
        }
        clone() {
          return new Ds(this.address, this.targetNetwork);
        }
      }
      class Us extends Ss {
        #q;
        get feeDataFunc() {
          return this.#q;
        }
        constructor(t) {
          super("org.ethers.plugins.network.FeeData"), (this.#q = t);
        }
        async getFeeData(t) {
          return await this.#q(t);
        }
        clone() {
          return new Us(this.#q);
        }
      }
      const Ls = new Map();
      class Fs {
        #W;
        #Y;
        #X;
        constructor(t, e) {
          (this.#W = t), (this.#Y = (0, p.yT)(e)), (this.#X = new Map());
        }
        toJSON() {
          return { name: this.name, chainId: String(this.chainId) };
        }
        get name() {
          return this.#W;
        }
        set name(t) {
          this.#W = t;
        }
        get chainId() {
          return this.#Y;
        }
        set chainId(t) {
          this.#Y = (0, p.yT)(t, "chainId");
        }
        matches(t) {
          if (null == t) return !1;
          if ("string" == typeof t) {
            try {
              return this.chainId === (0, p.yT)(t);
            } catch (t) {}
            return this.name === t;
          }
          if ("number" == typeof t || "bigint" == typeof t) {
            try {
              return this.chainId === (0, p.yT)(t);
            } catch (t) {}
            return !1;
          }
          if ("object" == typeof t) {
            if (null != t.chainId) {
              try {
                return this.chainId === (0, p.yT)(t.chainId);
              } catch (t) {}
              return !1;
            }
            return null != t.name && this.name === t.name;
          }
          return !1;
        }
        get plugins() {
          return Array.from(this.#X.values());
        }
        attachPlugin(t) {
          if (this.#X.get(t.name))
            throw new Error(`cannot replace existing plugin: ${t.name} `);
          return this.#X.set(t.name, t.clone()), this;
        }
        getPlugin(t) {
          return this.#X.get(t) || null;
        }
        getPlugins(t) {
          return this.plugins.filter((e) => e.name.split("#")[0] === t);
        }
        clone() {
          const t = new Fs(this.name, this.chainId);
          return (
            this.plugins.forEach((e) => {
              t.attachPlugin(e.clone());
            }),
            t
          );
        }
        computeIntrinsicGas(t) {
          const e =
            this.getPlugin("org.ethers.plugins.network.GasCost") || new Bs();
          let n = e.txBase;
          if ((null == t.to && (n += e.txCreate), t.data))
            for (let r = 2; r < t.data.length; r += 2)
              "00" === t.data.substring(r, r + 2)
                ? (n += e.txDataZero)
                : (n += e.txDataNonzero);
          if (t.accessList) {
            const r = (0, Os.z)(t.accessList);
            for (const t in r)
              n +=
                e.txAccessListAddress +
                e.txAccessListStorageKey * r[t].storageKeys.length;
          }
          return n;
        }
        static from(t) {
          if (
            ((function () {
              function t(t, e, n) {
                const r = function () {
                  const r = new Fs(t, e);
                  return (
                    null != n.ensNetwork &&
                      r.attachPlugin(new Ds(null, n.ensNetwork)),
                    n.priorityFee,
                    r.attachPlugin(new Bs()),
                    r
                  );
                };
                Fs.register(t, r),
                  Fs.register(e, r),
                  n.altNames &&
                    n.altNames.forEach((t) => {
                      Fs.register(t, r);
                    });
              }
              Ms ||
                ((Ms = !0),
                t("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }),
                t("ropsten", 3, { ensNetwork: 3 }),
                t("rinkeby", 4, { ensNetwork: 4 }),
                t("goerli", 5, { ensNetwork: 5 }),
                t("kovan", 42, { ensNetwork: 42 }),
                t("sepolia", 11155111, {}),
                t("classic", 61, {}),
                t("classicKotti", 6, {}),
                t("xdai", 100, { ensNetwork: 1 }),
                t("optimism", 10, {
                  ensNetwork: 1,
                  etherscan: { url: "https://api-optimistic.etherscan.io/" },
                }),
                t("optimism-goerli", 420, {
                  etherscan: {
                    url: "https://api-goerli-optimistic.etherscan.io/",
                  },
                }),
                t("arbitrum", 42161, {
                  ensNetwork: 1,
                  etherscan: { url: "https://api.arbiscan.io/" },
                }),
                t("arbitrum-goerli", 421613, {
                  etherscan: { url: "https://api-goerli.arbiscan.io/" },
                }),
                t("matic", 137, {
                  ensNetwork: 1,
                  etherscan: { url: "https://api.polygonscan.com/" },
                }),
                t("matic-mumbai", 80001, {
                  altNames: ["maticMumbai", "maticmum"],
                  etherscan: { url: "https://api-testnet.polygonscan.com/" },
                }),
                t("bnb", 56, {
                  ensNetwork: 1,
                  etherscan: { url: "http://api.bscscan.com" },
                }),
                t("bnbt", 97, {
                  etherscan: { url: "http://api-testnet.bscscan.com" },
                }));
            })(),
            null == t)
          )
            return Fs.from("mainnet");
          if (
            ("number" == typeof t && (t = BigInt(t)),
            "string" == typeof t || "bigint" == typeof t)
          ) {
            const e = Ls.get(t);
            if (e) return e();
            if ("bigint" == typeof t) return new Fs("unknown", t);
            (0, A.en)(!1, "unknown network", "network", t);
          }
          if ("function" == typeof t.clone) return t.clone();
          if ("object" == typeof t) {
            (0, A.en)(
              "string" == typeof t.name && "number" == typeof t.chainId,
              "invalid network object name or chainId",
              "network",
              t,
            );
            const e = new Fs(t.name, t.chainId);
            return (
              (t.ensAddress || null != t.ensNetwork) &&
                e.attachPlugin(new Ds(t.ensAddress, t.ensNetwork)),
              e
            );
          }
          (0, A.en)(!1, "invalid network", "network", t);
        }
        static register(t, e) {
          "number" == typeof t && (t = BigInt(t));
          const n = Ls.get(t);
          n &&
            (0, A.en)(
              !1,
              `conflicting network for ${JSON.stringify(n.name)}`,
              "nameOrChainId",
              t,
            ),
            Ls.set(t, e);
        }
      }
      let Ms = !1;
      function Gs(t) {
        let e = t.toString(16);
        for (; e.length < 2; ) e = "0" + e;
        return "0x" + e;
      }
      function Ks(t, e, n) {
        let r = 0;
        for (let s = 0; s < n; s++) r = 256 * r + t[e + s];
        return r;
      }
      function js(t, e, n, r) {
        const s = [];
        for (; n < e + 1 + r; ) {
          const i = Hs(t, n);
          s.push(i.result),
            (n += i.consumed),
            (0, A.hu)(
              n <= e + 1 + r,
              "child data too short",
              "BUFFER_OVERRUN",
              { buffer: t, length: r, offset: e },
            );
        }
        return { consumed: 1 + r, result: s };
      }
      function Hs(t, e) {
        (0, A.hu)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
          buffer: t,
          length: 0,
          offset: 1,
        });
        const n = (e) => {
          (0, A.hu)(
            e <= t.length,
            "data short segment too short",
            "BUFFER_OVERRUN",
            { buffer: t, length: t.length, offset: e },
          );
        };
        if (t[e] >= 248) {
          const r = t[e] - 247;
          n(e + 1 + r);
          const s = Ks(t, e + 1, r);
          return n(e + 1 + r + s), js(t, e, e + 1 + r, r + s);
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return n(e + 1 + r), js(t, e, e + 1, r);
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          n(e + 1 + r);
          const s = Ks(t, e + 1, r);
          return (
            n(e + 1 + r + s),
            {
              consumed: 1 + r + s,
              result: (0, i.Dv)(t.slice(e + 1 + r, e + 1 + r + s)),
            }
          );
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          return (
            n(e + 1 + r),
            { consumed: 1 + r, result: (0, i.Dv)(t.slice(e + 1, e + 1 + r)) }
          );
        }
        return { consumed: 1, result: Gs(t[e]) };
      }
      function _s(t) {
        const e = (0, i.Pw)(t, "data"),
          n = Hs(e, 0);
        return (
          (0, A.en)(
            n.consumed === e.length,
            "unexpected junk after rlp payload",
            "data",
            t,
          ),
          n.result
        );
      }
      const Vs = BigInt(0),
        Qs = BigInt(2),
        zs = BigInt(27),
        Js = BigInt(28),
        Zs = BigInt(35),
        qs = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      function Ws(t) {
        return "0x" === t ? null : (0, b.K)(t);
      }
      function Ys(t, e) {
        try {
          return (0, Os.z)(t);
        } catch (n) {
          (0, A.en)(!1, n.message, e, t);
        }
      }
      function Xs(t, e) {
        return "0x" === t ? 0 : (0, p.Dx)(t, e);
      }
      function $s(t, e) {
        if ("0x" === t) return Vs;
        const n = (0, p.yT)(t, e);
        return (0, A.en)(n <= qs, "value exceeds uint size", e, n), n;
      }
      function ti(t, e) {
        const n = (0, p.yT)(t, "value"),
          r = (0, p.ot)(n);
        return (0, A.en)(r.length <= 32, "value too large", `tx.${e}`, n), r;
      }
      function ei(t) {
        return (0, Os.z)(t).map((t) => [t.address, t.storageKeys]);
      }
      function ni(t, e) {
        const n = [
          ti(t.nonce || 0, "nonce"),
          ti(t.gasPrice || 0, "gasPrice"),
          ti(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, b.K)(t.to) : "0x",
          ti(t.value || 0, "value"),
          t.data || "0x",
        ];
        let r = Vs;
        if (t.chainId != Vs)
          (r = (0, p.yT)(t.chainId, "tx.chainId")),
            (0, A.en)(
              !e || null == e.networkV || e.legacyChainId === r,
              "tx.chainId/sig.v mismatch",
              "sig",
              e,
            );
        else if (t.signature) {
          const e = t.signature.legacyChainId;
          null != e && (r = e);
        }
        if (!e)
          return (
            r !== Vs && (n.push((0, p.ot)(r)), n.push("0x"), n.push("0x")), w(n)
          );
        let s = BigInt(27 + e.yParity);
        return (
          r !== Vs
            ? (s = pe.getChainIdV(r, e.v))
            : BigInt(e.v) !== s &&
              (0, A.en)(!1, "tx.chainId/sig.v mismatch", "sig", e),
          n.push((0, p.ot)(s)),
          n.push((0, p.ot)(e.r)),
          n.push((0, p.ot)(e.s)),
          w(n)
        );
      }
      function ri(t, e) {
        let n;
        try {
          if (((n = Xs(e[0], "yParity")), 0 !== n && 1 !== n))
            throw new Error("bad yParity");
        } catch (t) {
          (0, A.en)(!1, "invalid yParity", "yParity", e[0]);
        }
        const r = (0, i.U3)(e[1], 32),
          s = (0, i.U3)(e[2], 32),
          a = pe.from({ r, s, yParity: n });
        t.signature = a;
      }
      function si(t, e) {
        const n = [
          ti(t.chainId || 0, "chainId"),
          ti(t.nonce || 0, "nonce"),
          ti(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          ti(t.maxFeePerGas || 0, "maxFeePerGas"),
          ti(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, b.K)(t.to) : "0x",
          ti(t.value || 0, "value"),
          t.data || "0x",
          ei(t.accessList || []),
        ];
        return (
          e &&
            (n.push(ti(e.yParity, "yParity")),
            n.push((0, p.ot)(e.r)),
            n.push((0, p.ot)(e.s))),
          (0, i.zo)(["0x02", w(n)])
        );
      }
      function ii(t, e) {
        const n = [
          ti(t.chainId || 0, "chainId"),
          ti(t.nonce || 0, "nonce"),
          ti(t.gasPrice || 0, "gasPrice"),
          ti(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, b.K)(t.to) : "0x",
          ti(t.value || 0, "value"),
          t.data || "0x",
          ei(t.accessList || []),
        ];
        return (
          e &&
            (n.push(ti(e.yParity, "recoveryParam")),
            n.push((0, p.ot)(e.r)),
            n.push((0, p.ot)(e.s))),
          (0, i.zo)(["0x01", w(n)])
        );
      }
      class ai {
        #$;
        #tt;
        #n;
        #et;
        #nt;
        #rt;
        #st;
        #it;
        #at;
        #Y;
        #ot;
        #ct;
        get type() {
          return this.#$;
        }
        set type(t) {
          switch (t) {
            case null:
              this.#$ = null;
              break;
            case 0:
            case "legacy":
              this.#$ = 0;
              break;
            case 1:
            case "berlin":
            case "eip-2930":
              this.#$ = 1;
              break;
            case 2:
            case "london":
            case "eip-1559":
              this.#$ = 2;
              break;
            default:
              (0, A.en)(!1, "unsupported transaction type", "type", t);
          }
        }
        get typeName() {
          switch (this.type) {
            case 0:
              return "legacy";
            case 1:
              return "eip-2930";
            case 2:
              return "eip-1559";
          }
          return null;
        }
        get to() {
          return this.#tt;
        }
        set to(t) {
          this.#tt = null == t ? null : (0, b.K)(t);
        }
        get nonce() {
          return this.#et;
        }
        set nonce(t) {
          this.#et = (0, p.Dx)(t, "value");
        }
        get gasLimit() {
          return this.#nt;
        }
        set gasLimit(t) {
          this.#nt = (0, p.yT)(t);
        }
        get gasPrice() {
          const t = this.#rt;
          return null != t || (0 !== this.type && 1 !== this.type) ? t : Vs;
        }
        set gasPrice(t) {
          this.#rt = null == t ? null : (0, p.yT)(t, "gasPrice");
        }
        get maxPriorityFeePerGas() {
          const t = this.#st;
          return null == t ? (2 === this.type ? Vs : null) : t;
        }
        set maxPriorityFeePerGas(t) {
          this.#st = null == t ? null : (0, p.yT)(t, "maxPriorityFeePerGas");
        }
        get maxFeePerGas() {
          const t = this.#it;
          return null == t ? (2 === this.type ? Vs : null) : t;
        }
        set maxFeePerGas(t) {
          this.#it = null == t ? null : (0, p.yT)(t, "maxFeePerGas");
        }
        get data() {
          return this.#n;
        }
        set data(t) {
          this.#n = (0, i.Dv)(t);
        }
        get value() {
          return this.#at;
        }
        set value(t) {
          this.#at = (0, p.yT)(t, "value");
        }
        get chainId() {
          return this.#Y;
        }
        set chainId(t) {
          this.#Y = (0, p.yT)(t);
        }
        get signature() {
          return this.#ot || null;
        }
        set signature(t) {
          this.#ot = null == t ? null : pe.from(t);
        }
        get accessList() {
          const t = this.#ct || null;
          return null == t
            ? 1 === this.type || 2 === this.type
              ? []
              : null
            : t;
        }
        set accessList(t) {
          this.#ct = null == t ? null : (0, Os.z)(t);
        }
        constructor() {
          (this.#$ = null),
            (this.#tt = null),
            (this.#et = 0),
            (this.#nt = BigInt(0)),
            (this.#rt = null),
            (this.#st = null),
            (this.#it = null),
            (this.#n = "0x"),
            (this.#at = BigInt(0)),
            (this.#Y = BigInt(0)),
            (this.#ot = null),
            (this.#ct = null);
        }
        get hash() {
          return null == this.signature ? null : (0, d.w)(this.serialized);
        }
        get unsignedHash() {
          return (0, d.w)(this.unsignedSerialized);
        }
        get from() {
          return null == this.signature
            ? null
            : Hr(this.unsignedHash, this.signature);
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : yn.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        get serialized() {
          switch (
            ((0, A.hu)(
              null != this.signature,
              "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
              "UNSUPPORTED_OPERATION",
              { operation: ".serialized" },
            ),
            this.inferType())
          ) {
            case 0:
              return ni(this, this.signature);
            case 1:
              return ii(this, this.signature);
            case 2:
              return si(this, this.signature);
          }
          (0, A.hu)(
            !1,
            "unsupported transaction type",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" },
          );
        }
        get unsignedSerialized() {
          switch (this.inferType()) {
            case 0:
              return ni(this);
            case 1:
              return ii(this);
            case 2:
              return si(this);
          }
          (0, A.hu)(
            !1,
            "unsupported transaction type",
            "UNSUPPORTED_OPERATION",
            { operation: ".unsignedSerialized" },
          );
        }
        inferType() {
          return this.inferTypes().pop();
        }
        inferTypes() {
          const t = null != this.gasPrice,
            e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            n = null != this.accessList;
          null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, A.hu)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              "priorityFee cannot be more than maxFee",
              "BAD_DATA",
              { value: this },
            ),
            (0, A.hu)(
              !e || (0 !== this.type && 1 !== this.type),
              "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
              "BAD_DATA",
              { value: this },
            ),
            (0, A.hu)(
              0 !== this.type || !n,
              "legacy transaction cannot have accessList",
              "BAD_DATA",
              { value: this },
            );
          const r = [];
          return (
            null != this.type
              ? r.push(this.type)
              : e
              ? r.push(2)
              : t
              ? (r.push(1), n || r.push(0))
              : n
              ? (r.push(1), r.push(2))
              : (r.push(0), r.push(1), r.push(2)),
            r.sort(),
            r
          );
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        clone() {
          return ai.from(this);
        }
        toJSON() {
          const t = (t) => (null == t ? null : t.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: t(this.gasLimit),
            gasPrice: t(this.gasPrice),
            maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
            maxFeePerGas: t(this.maxFeePerGas),
            value: t(this.value),
            chainId: t(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(t) {
          if (null == t) return new ai();
          if ("string" == typeof t) {
            const e = (0, i.Pw)(t);
            if (e[0] >= 127)
              return ai.from(
                (function (t) {
                  const e = _s(t);
                  (0, A.en)(
                    Array.isArray(e) && (9 === e.length || 6 === e.length),
                    "invalid field count for legacy transaction",
                    "data",
                    t,
                  );
                  const n = {
                    type: 0,
                    nonce: Xs(e[0], "nonce"),
                    gasPrice: $s(e[1], "gasPrice"),
                    gasLimit: $s(e[2], "gasLimit"),
                    to: Ws(e[3]),
                    value: $s(e[4], "value"),
                    data: (0, i.Dv)(e[5]),
                    chainId: Vs,
                  };
                  if (6 === e.length) return n;
                  const r = $s(e[6], "v"),
                    s = $s(e[7], "r"),
                    a = $s(e[8], "s");
                  if (s === Vs && a === Vs) n.chainId = r;
                  else {
                    let s = (r - Zs) / Qs;
                    s < Vs && (s = Vs),
                      (n.chainId = s),
                      (0, A.en)(
                        s !== Vs || r === zs || r === Js,
                        "non-canonical legacy v",
                        "v",
                        e[6],
                      ),
                      (n.signature = pe.from({
                        r: (0, i.U3)(e[7], 32),
                        s: (0, i.U3)(e[8], 32),
                        v: r,
                      })),
                      (n.hash = (0, d.w)(t));
                  }
                  return n;
                })(e),
              );
            switch (e[0]) {
              case 1:
                return ai.from(
                  (function (t) {
                    const e = _s((0, i.Pw)(t).slice(1));
                    (0, A.en)(
                      Array.isArray(e) && (8 === e.length || 11 === e.length),
                      "invalid field count for transaction type: 1",
                      "data",
                      (0, i.Dv)(t),
                    );
                    const n = {
                      type: 1,
                      chainId: $s(e[0], "chainId"),
                      nonce: Xs(e[1], "nonce"),
                      gasPrice: $s(e[2], "gasPrice"),
                      gasLimit: $s(e[3], "gasLimit"),
                      to: Ws(e[4]),
                      value: $s(e[5], "value"),
                      data: (0, i.Dv)(e[6]),
                      accessList: Ys(e[7], "accessList"),
                    };
                    return (
                      8 === e.length ||
                        ((n.hash = (0, d.w)(t)), ri(n, e.slice(8))),
                      n
                    );
                  })(e),
                );
              case 2:
                return ai.from(
                  (function (t) {
                    const e = _s((0, i.Pw)(t).slice(1));
                    (0, A.en)(
                      Array.isArray(e) && (9 === e.length || 12 === e.length),
                      "invalid field count for transaction type: 2",
                      "data",
                      (0, i.Dv)(t),
                    );
                    const n = $s(e[2], "maxPriorityFeePerGas"),
                      r = $s(e[3], "maxFeePerGas"),
                      s = {
                        type: 2,
                        chainId: $s(e[0], "chainId"),
                        nonce: Xs(e[1], "nonce"),
                        maxPriorityFeePerGas: n,
                        maxFeePerGas: r,
                        gasPrice: null,
                        gasLimit: $s(e[4], "gasLimit"),
                        to: Ws(e[5]),
                        value: $s(e[6], "value"),
                        data: (0, i.Dv)(e[7]),
                        accessList: Ys(e[8], "accessList"),
                      };
                    return (
                      9 === e.length ||
                        ((s.hash = (0, d.w)(t)), ri(s, e.slice(9))),
                      s
                    );
                  })(e),
                );
            }
            (0, A.hu)(
              !1,
              "unsupported transaction type",
              "UNSUPPORTED_OPERATION",
              { operation: "from" },
            );
          }
          const e = new ai();
          return (
            null != t.type && (e.type = t.type),
            null != t.to && (e.to = t.to),
            null != t.nonce && (e.nonce = t.nonce),
            null != t.gasLimit && (e.gasLimit = t.gasLimit),
            null != t.gasPrice && (e.gasPrice = t.gasPrice),
            null != t.maxPriorityFeePerGas &&
              (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
            null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
            null != t.data && (e.data = t.data),
            null != t.value && (e.value = t.value),
            null != t.chainId && (e.chainId = t.chainId),
            null != t.signature && (e.signature = pe.from(t.signature)),
            null != t.accessList && (e.accessList = t.accessList),
            null != t.hash &&
              ((0, A.en)(
                e.isSigned(),
                "unsigned transaction cannot define hash",
                "tx",
                t,
              ),
              (0, A.en)(e.hash === t.hash, "hash mismatch", "tx", t)),
            null != t.from &&
              ((0, A.en)(
                e.isSigned(),
                "unsigned transaction cannot define from",
                "tx",
                t,
              ),
              (0, A.en)(
                e.from.toLowerCase() === (t.from || "").toLowerCase(),
                "from mismatch",
                "tx",
                t,
              )),
            e
          );
        }
      }
      var oi = n(6539);
      const ci = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      let ui = null;
      function li(t) {
        if (null == ui) {
          ui = {};
          for (let t = 0; t < ci.length; t++) ui[ci[t]] = BigInt(t);
        }
        const e = ui[t];
        return (0, A.en)(null != e, "invalid base58 value", "letter", t), e;
      }
      const hi = BigInt(0),
        fi = BigInt(58);
      function di(t) {
        let e = (0, p.Gh)((0, i.Pw)(t)),
          n = "";
        for (; e; ) (n = ci[Number(e % fi)] + n), (e /= fi);
        return n;
      }
      function pi(t) {
        let e = hi;
        for (let n = 0; n < t.length; n++) (e *= fi), (e += li(t[n]));
        return e;
      }
      function gi(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : (0, A.en)(!1, "unsupported IPFS format", "link", t),
          `https://gateway.ipfs.io/ipfs/${t}`
        );
      }
      class mi {
        name;
        constructor(t) {
          (0, B.h)(this, { name: t });
        }
        connect(t) {
          return this;
        }
        supportsCoinType(t) {
          return !1;
        }
        async encodeAddress(t, e) {
          throw new Error("unsupported coin");
        }
        async decodeAddress(t, e) {
          throw new Error("unsupported coin");
        }
      }
      const yi = new RegExp("^(ipfs)://(.*)$", "i"),
        wi = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          yi,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      class Ai {
        provider;
        address;
        name;
        #ut;
        #lt;
        constructor(t, e, n) {
          (0, B.h)(this, { provider: t, address: e, name: n }),
            (this.#ut = null),
            (this.#lt = new D.CH(
              e,
              [
                "function supportsInterface(bytes4) view returns (bool)",
                "function resolve(bytes, bytes) view returns (bytes)",
                "function addr(bytes32) view returns (address)",
                "function addr(bytes32, uint) view returns (bytes)",
                "function text(bytes32, string) view returns (string)",
                "function contenthash(bytes32) view returns (bytes)",
              ],
              t,
            ));
        }
        async supportsWildcard() {
          return (
            null == this.#ut &&
              (this.#ut = (async () => {
                try {
                  return await this.#lt.supportsInterface("0x9061b923");
                } catch (t) {
                  if ((0, A.VZ)(t, "CALL_EXCEPTION")) return !1;
                  throw ((this.#ut = null), t);
                }
              })()),
            await this.#ut
          );
        }
        async #ht(t, e) {
          e = (e || []).slice();
          const n = this.#lt.interface;
          e.unshift(Gr(this.name));
          let r = null;
          (await this.supportsWildcard()) &&
            ((r = n.getFunction(t)),
            (0, A.hu)(r, "missing fragment", "UNKNOWN_ERROR", {
              info: { funcName: t },
            }),
            (e = [Kr(this.name), n.encodeFunctionData(r, e)]),
            (t = "resolve(bytes,bytes)")),
            e.push({ enableCcipRead: !0 });
          try {
            const s = await this.#lt[t](...e);
            return r ? n.decodeFunctionResult(r, s)[0] : s;
          } catch (t) {
            if (!(0, A.VZ)(t, "CALL_EXCEPTION")) throw t;
          }
          return null;
        }
        async getAddress(t) {
          if ((null == t && (t = 60), 60 === t))
            try {
              const t = await this.#ht("addr(bytes32)");
              return null == t || t === k ? null : t;
            } catch (t) {
              if ((0, A.VZ)(t, "CALL_EXCEPTION")) return null;
              throw t;
            }
          if (t >= 0 && t < 2147483648) {
            let e = t + 2147483648;
            const n = await this.#ht("addr(bytes32,uint)", [e]);
            if ((0, i.A7)(n, 20)) return (0, b.K)(n);
          }
          let e = null;
          for (const n of this.provider.plugins)
            if (n instanceof mi && n.supportsCoinType(t)) {
              e = n;
              break;
            }
          if (null == e) return null;
          const n = await this.#ht("addr(bytes32,uint)", [t]);
          if (null == n || "0x" === n) return null;
          const r = await e.decodeAddress(t, n);
          if (null != r) return r;
          (0, A.hu)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: `getAddress(${t})`,
            info: { coinType: t, data: n },
          });
        }
        async getText(t) {
          const e = await this.#ht("text(bytes32,string)", [t]);
          return null == e || "0x" === e ? null : e;
        }
        async getContentHash() {
          const t = await this.#ht("contenthash(bytes32)");
          if (null == t || "0x" === t) return null;
          const e = t.match(
            /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
          );
          if (e) {
            const t = "e3010170" === e[1] ? "ipfs" : "ipns",
              n = parseInt(e[4], 16);
            if (e[5].length === 2 * n) return `${t}://${di("0x" + e[2])}`;
          }
          const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
          if (n && 64 === n[1].length) return `bzz://${n[1]}`;
          (0, A.hu)(
            !1,
            "invalid or unsupported content hash data",
            "UNSUPPORTED_OPERATION",
            { operation: "getContentHash()", info: { data: t } },
          );
        }
        async getAvatar() {
          return (await this._getAvatar()).url;
        }
        async _getAvatar() {
          const t = [{ type: "name", value: this.name }];
          try {
            const e = await this.getText("avatar");
            if (null == e)
              return (
                t.push({ type: "!avatar", value: "" }),
                { url: null, linkage: t }
              );
            t.push({ type: "avatar", value: e });
            for (let n = 0; n < wi.length; n++) {
              const r = e.match(wi[n]);
              if (null == r) continue;
              const s = r[1].toLowerCase();
              switch (s) {
                case "https":
                case "data":
                  return (
                    t.push({ type: "url", value: e }), { linkage: t, url: e }
                  );
                case "ipfs": {
                  const n = gi(e);
                  return (
                    t.push({ type: "ipfs", value: e }),
                    t.push({ type: "url", value: n }),
                    { linkage: t, url: n }
                  );
                }
                case "erc721":
                case "erc1155": {
                  const n =
                    "erc721" === s ? "tokenURI(uint256)" : "uri(uint256)";
                  t.push({ type: s, value: e });
                  const a = await this.getAddress();
                  if (null == a)
                    return (
                      t.push({ type: "!owner", value: "" }),
                      { url: null, linkage: t }
                    );
                  const o = (r[2] || "").split("/");
                  if (2 !== o.length)
                    return (
                      t.push({ type: `!${s}caip`, value: r[2] || "" }),
                      { url: null, linkage: t }
                    );
                  const c = o[1],
                    u = new D.CH(
                      o[0],
                      [
                        "function tokenURI(uint) view returns (string)",
                        "function ownerOf(uint) view returns (address)",
                        "function uri(uint) view returns (string)",
                        "function balanceOf(address, uint256) view returns (uint)",
                      ],
                      this.provider,
                    );
                  if ("erc721" === s) {
                    const e = await u.ownerOf(c);
                    if (a !== e)
                      return (
                        t.push({ type: "!owner", value: e }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "owner", value: e });
                  } else if ("erc1155" === s) {
                    const e = await u.balanceOf(a, c);
                    if (!e)
                      return (
                        t.push({ type: "!balance", value: "0" }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "balance", value: e.toString() });
                  }
                  let l = await u[n](c);
                  if (null == l || "0x" === l)
                    return (
                      t.push({ type: "!metadata-url", value: "" }),
                      { url: null, linkage: t }
                    );
                  t.push({ type: "metadata-url-base", value: l }),
                    "erc1155" === s &&
                      ((l = l.replace("{id}", (0, p.m9)(c, 32).substring(2))),
                      t.push({ type: "metadata-url-expanded", value: l })),
                    l.match(/^ipfs:/i) && (l = gi(l)),
                    t.push({ type: "metadata-url", value: l });
                  let h = {};
                  const f = await new Cs(l).send();
                  f.assertOk();
                  try {
                    h = f.bodyJson;
                  } catch (e) {
                    try {
                      t.push({ type: "!metadata", value: f.bodyText });
                    } catch (e) {
                      const n = f.body;
                      return (
                        n && t.push({ type: "!metadata", value: (0, i.Dv)(n) }),
                        { url: null, linkage: t }
                      );
                    }
                    return { url: null, linkage: t };
                  }
                  if (!h)
                    return (
                      t.push({ type: "!metadata", value: "" }),
                      { url: null, linkage: t }
                    );
                  t.push({ type: "metadata", value: JSON.stringify(h) });
                  let d = h.image;
                  if ("string" != typeof d)
                    return (
                      t.push({ type: "!imageUrl", value: "" }),
                      { url: null, linkage: t }
                    );
                  if (d.match(/^(https:\/\/|data:)/i));
                  else {
                    if (null == d.match(yi))
                      return (
                        t.push({ type: "!imageUrl-ipfs", value: d }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "imageUrl-ipfs", value: d }), (d = gi(d));
                  }
                  return (
                    t.push({ type: "url", value: d }), { linkage: t, url: d }
                  );
                }
              }
            }
          } catch (t) {}
          return { linkage: t, url: null };
        }
        static async getEnsAddress(t) {
          const e = await t.getNetwork(),
            n = e.getPlugin("org.ethers.plugins.network.Ens");
          return (
            (0, A.hu)(
              n,
              "network does not support ENS",
              "UNSUPPORTED_OPERATION",
              { operation: "getEnsAddress", info: { network: e } },
            ),
            n.address
          );
        }
        static async #ft(t, e) {
          const n = await Ai.getEnsAddress(t);
          try {
            const r = new D.CH(
                n,
                ["function resolver(bytes32) view returns (address)"],
                t,
              ),
              s = await r.resolver(Gr(e), { enableCcipRead: !0 });
            return s === k ? null : s;
          } catch (t) {
            throw t;
          }
          return null;
        }
        static async fromName(t, e) {
          let n = e;
          for (;;) {
            if ("" === n || "." === n) return null;
            if ("eth" !== e && "eth" === n) return null;
            const r = await Ai.#ft(t, n);
            if (null != r) {
              const s = new Ai(t, r, e);
              return n === e || (await s.supportsWildcard()) ? s : null;
            }
            n = n.split(".").slice(1).join(".");
          }
        }
      }
      const bi = BigInt(0);
      function vi(t, e) {
        return function (n) {
          return null == n ? e : t(n);
        };
      }
      function Ei(t) {
        return (e) => {
          if (!Array.isArray(e)) throw new Error("not an array");
          return e.map((e) => t(e));
        };
      }
      function Pi(t, e) {
        return (n) => {
          const r = {};
          for (const s in t) {
            let i = s;
            if (e && s in e && !(i in n))
              for (const t of e[s])
                if (t in n) {
                  i = t;
                  break;
                }
            try {
              const e = t[s](n[i]);
              void 0 !== e && (r[s] = e);
            } catch (t) {
              const e = t instanceof Error ? t.message : "not-an-error";
              (0, A.hu)(!1, `invalid value for value.${s} (${e})`, "BAD_DATA", {
                value: n,
              });
            }
          }
          return r;
        };
      }
      function ki(t) {
        return (0, A.en)((0, i.A7)(t, !0), "invalid data", "value", t), t;
      }
      function Ni(t) {
        return (0, A.en)((0, i.A7)(t, 32), "invalid hash", "value", t), t;
      }
      const Ci = Pi(
          {
            address: b.K,
            blockHash: Ni,
            blockNumber: p.Dx,
            data: ki,
            index: p.Dx,
            removed: vi(function (t) {
              switch (t) {
                case !0:
                case "true":
                  return !0;
                case !1:
                case "false":
                  return !1;
              }
              (0, A.en)(
                !1,
                `invalid boolean; ${JSON.stringify(t)}`,
                "value",
                t,
              );
            }, !1),
            topics: Ei(Ni),
            transactionHash: Ni,
            transactionIndex: p.Dx,
          },
          { index: ["logIndex"] },
        ),
        Ti = Pi({
          hash: vi(Ni),
          parentHash: Ni,
          number: p.Dx,
          timestamp: p.Dx,
          nonce: vi(ki),
          difficulty: p.yT,
          gasLimit: p.yT,
          gasUsed: p.yT,
          miner: vi(b.K),
          extraData: ki,
          baseFeePerGas: vi(p.yT),
        }),
        Ii = Pi(
          {
            transactionIndex: p.Dx,
            blockNumber: p.Dx,
            transactionHash: Ni,
            address: b.K,
            topics: Ei(Ni),
            data: ki,
            index: p.Dx,
            blockHash: Ni,
          },
          { index: ["logIndex"] },
        ),
        xi = Pi(
          {
            to: vi(b.K, null),
            from: vi(b.K, null),
            contractAddress: vi(b.K, null),
            index: p.Dx,
            root: vi(i.Dv),
            gasUsed: p.yT,
            logsBloom: vi(ki),
            blockHash: Ni,
            hash: Ni,
            logs: Ei(function (t) {
              return Ii(t);
            }),
            blockNumber: p.Dx,
            cumulativeGasUsed: p.yT,
            effectiveGasPrice: vi(p.yT),
            status: vi(p.Dx),
            type: vi(p.Dx, 0),
          },
          {
            effectiveGasPrice: ["gasPrice"],
            hash: ["transactionHash"],
            index: ["transactionIndex"],
          },
        );
      function Ri(t) {
        t.to &&
          (0, p.yT)(t.to) === bi &&
          (t.to = "0x0000000000000000000000000000000000000000");
        const e = Pi(
          {
            hash: Ni,
            type: (t) => ("0x" === t || null == t ? 0 : (0, p.Dx)(t)),
            accessList: vi(Os.z, null),
            blockHash: vi(Ni, null),
            blockNumber: vi(p.Dx, null),
            transactionIndex: vi(p.Dx, null),
            from: b.K,
            gasPrice: vi(p.yT),
            maxPriorityFeePerGas: vi(p.yT),
            maxFeePerGas: vi(p.yT),
            gasLimit: p.yT,
            to: vi(b.K, null),
            value: p.yT,
            nonce: p.Dx,
            data: ki,
            creates: vi(b.K, null),
            chainId: vi(p.yT, null),
          },
          { data: ["input"], gasLimit: ["gas"] },
        )(t);
        if (
          (null == e.to && null == e.creates && (e.creates = v(e)),
          (1 !== t.type && 2 !== t.type) ||
            null != t.accessList ||
            (e.accessList = []),
          t.signature
            ? (e.signature = pe.from(t.signature))
            : (e.signature = pe.from(t)),
          null == e.chainId)
        ) {
          const t = e.signature.legacyChainId;
          null != t && (e.chainId = t);
        }
        return (
          e.blockHash && (0, p.yT)(e.blockHash) === bi && (e.blockHash = null),
          e
        );
      }
      var Oi = n(4101);
      function Si(t) {
        return JSON.parse(JSON.stringify(t));
      }
      class Bi {
        #dt;
        #pt;
        #gt;
        #mt;
        constructor(t) {
          (this.#dt = t), (this.#pt = null), (this.#gt = 4e3), (this.#mt = -2);
        }
        get pollingInterval() {
          return this.#gt;
        }
        set pollingInterval(t) {
          this.#gt = t;
        }
        async #yt() {
          try {
            const t = await this.#dt.getBlockNumber();
            if (-2 === this.#mt) return void (this.#mt = t);
            if (t !== this.#mt) {
              for (let e = this.#mt + 1; e <= t; e++) {
                if (null == this.#pt) return;
                await this.#dt.emit("block", e);
              }
              this.#mt = t;
            }
          } catch (t) {}
          null != this.#pt &&
            (this.#pt = this.#dt._setTimeout(this.#yt.bind(this), this.#gt));
        }
        start() {
          this.#pt ||
            ((this.#pt = this.#dt._setTimeout(this.#yt.bind(this), this.#gt)),
            this.#yt());
        }
        stop() {
          this.#pt && (this.#dt._clearTimeout(this.#pt), (this.#pt = null));
        }
        pause(t) {
          this.stop(), t && (this.#mt = -2);
        }
        resume() {
          this.start();
        }
      }
      class Di {
        #dt;
        #yt;
        #wt;
        constructor(t) {
          (this.#dt = t),
            (this.#wt = !1),
            (this.#yt = (t) => {
              this._poll(t, this.#dt);
            });
        }
        async _poll(t, e) {
          throw new Error("sub-classes must override this");
        }
        start() {
          this.#wt ||
            ((this.#wt = !0), this.#yt(-2), this.#dt.on("block", this.#yt));
        }
        stop() {
          this.#wt && ((this.#wt = !1), this.#dt.off("block", this.#yt));
        }
        pause(t) {
          this.stop();
        }
        resume() {
          this.start();
        }
      }
      class Ui extends Di {
        #y;
        constructor(t, e) {
          super(t), (this.#y = Si(e));
        }
        async _poll(t, e) {
          throw new Error("@TODO");
        }
      }
      class Li extends Di {
        #At;
        constructor(t, e) {
          super(t), (this.#At = e);
        }
        async _poll(t, e) {
          const n = await e.getTransactionReceipt(this.#At);
          n && e.emit(this.#At, n);
        }
      }
      class Fi {
        #dt;
        #y;
        #pt;
        #wt;
        #mt;
        constructor(t, e) {
          (this.#dt = t),
            (this.#y = Si(e)),
            (this.#pt = this.#yt.bind(this)),
            (this.#wt = !1),
            (this.#mt = -2);
        }
        async #yt(t) {
          if (-2 === this.#mt) return;
          const e = Si(this.#y);
          (e.fromBlock = this.#mt + 1), (e.toBlock = t);
          const n = await this.#dt.getLogs(e);
          if (0 !== n.length)
            for (const t of n)
              this.#dt.emit(this.#y, t), (this.#mt = t.blockNumber);
          else this.#mt < t - 60 && (this.#mt = t - 60);
        }
        start() {
          this.#wt ||
            ((this.#wt = !0),
            -2 === this.#mt &&
              this.#dt.getBlockNumber().then((t) => {
                this.#mt = t;
              }),
            this.#dt.on("block", this.#pt));
        }
        stop() {
          this.#wt && ((this.#wt = !1), this.#dt.off("block", this.#pt));
        }
        pause(t) {
          this.stop(), t && (this.#mt = -2);
        }
        resume() {
          this.start();
        }
      }
      const Mi = BigInt(2);
      function Gi(t) {
        return t && "function" == typeof t.then;
      }
      function Ki(t, e) {
        return (
          t +
          ":" +
          JSON.stringify(e, (t, e) => {
            if (null == e) return "null";
            if ("bigint" == typeof e) return `bigint:${e.toString()}`;
            if ("string" == typeof e) return e.toLowerCase();
            if ("object" == typeof e && !Array.isArray(e)) {
              const t = Object.keys(e);
              return t.sort(), t.reduce((t, n) => ((t[n] = e[n]), t), {});
            }
            return e;
          })
        );
      }
      class ji {
        name;
        constructor(t) {
          (0, B.h)(this, { name: t });
        }
        start() {}
        stop() {}
        pause(t) {}
        resume() {}
      }
      function Hi(t) {
        return (t = Array.from(new Set(t).values())).sort(), t;
      }
      async function _i(t, e) {
        if (null == t) throw new Error("invalid event");
        if ((Array.isArray(t) && (t = { topics: t }), "string" == typeof t))
          switch (t) {
            case "block":
            case "pending":
            case "debug":
            case "error":
            case "network":
              return { type: t, tag: t };
          }
        if ((0, i.A7)(t, 32)) {
          const e = t.toLowerCase();
          return { type: "transaction", tag: Ki("tx", { hash: e }), hash: e };
        }
        if (t.orphan) {
          const e = t;
          return {
            type: "orphan",
            tag: Ki("orphan", e),
            filter: ((n = e), JSON.parse(JSON.stringify(n))),
          };
        }
        var n;
        if (t.address || t.topics) {
          const n = t,
            r = {
              topics: (n.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                  ? Hi(t.map((t) => t.toLowerCase()))
                  : t.toLowerCase(),
              ),
            };
          if (n.address) {
            const t = [],
              s = [],
              a = (n) => {
                (0, i.A7)(n)
                  ? t.push(n)
                  : s.push(
                      (async () => {
                        t.push(await (0, P.ru)(n, e));
                      })(),
                    );
              };
            Array.isArray(n.address) ? n.address.forEach(a) : a(n.address),
              s.length && (await Promise.all(s)),
              (r.address = Hi(t.map((t) => t.toLowerCase())));
          }
          return { filter: r, tag: Ki("event", r), type: "event" };
        }
        (0, A.en)(!1, "unknown ProviderEvent", "event", t);
      }
      function Vi() {
        return new Date().getTime();
      }
      const Qi = { cacheTimeout: 250 };
      class zi {
        #bt;
        #X;
        #vt;
        #Et;
        #Pt;
        #kt;
        #Nt;
        #Ct;
        #Tt;
        #It;
        #xt;
        #m;
        constructor(t, e) {
          if (((this.#m = Object.assign({}, Qi, e || {})), "any" === t))
            (this.#kt = !0), (this.#Pt = null);
          else if (t) {
            const e = Fs.from(t);
            (this.#kt = !1),
              (this.#Pt = Promise.resolve(e)),
              setTimeout(() => {
                this.emit("network", e, null);
              }, 0);
          } else (this.#kt = !1), (this.#Pt = null);
          (this.#Ct = -1),
            (this.#Nt = new Map()),
            (this.#bt = new Map()),
            (this.#X = new Map()),
            (this.#vt = null),
            (this.#Et = !1),
            (this.#Tt = 1),
            (this.#It = new Map()),
            (this.#xt = !1);
        }
        get provider() {
          return this;
        }
        get plugins() {
          return Array.from(this.#X.values());
        }
        attachPlugin(t) {
          if (this.#X.get(t.name))
            throw new Error(`cannot replace existing plugin: ${t.name} `);
          return this.#X.set(t.name, t.connect(this)), this;
        }
        getPlugin(t) {
          return this.#X.get(t) || null;
        }
        get disableCcipRead() {
          return this.#xt;
        }
        set disableCcipRead(t) {
          this.#xt = !!t;
        }
        async #Rt(t) {
          const e = this.#m.cacheTimeout;
          if (e < 0) return await this._perform(t);
          const n = Ki(t.method, t);
          let r = this.#Nt.get(n);
          return (
            r ||
              ((r = this._perform(t)),
              this.#Nt.set(n, r),
              setTimeout(() => {
                this.#Nt.get(n) === r && this.#Nt.delete(n);
              }, e)),
            await r
          );
        }
        async ccipReadFetch(t, e, n) {
          if (this.disableCcipRead || 0 === n.length || null == t.to)
            return null;
          const r = t.to.toLowerCase(),
            s = e.toLowerCase(),
            i = [];
          for (let e = 0; e < n.length; e++) {
            const a = n[e],
              o = a.replace("{sender}", r).replace("{data}", s),
              c = new Cs(o);
            -1 === a.indexOf("{data}") && (c.body = { data: s, sender: r }),
              this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: c,
                index: e,
                urls: n,
              });
            let u = "unknown error";
            const l = await c.send();
            try {
              const t = l.bodyJson;
              if (t.data)
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadFetchResult",
                    request: c,
                    result: t,
                  }),
                  t.data
                );
              t.message && (u = t.message),
                this.emit("debug", {
                  action: "receiveCcipReadFetchError",
                  request: c,
                  result: t,
                });
            } catch (t) {}
            (0, A.hu)(
              l.statusCode < 400 || l.statusCode >= 500,
              `response not found during CCIP fetch: ${u}`,
              "OFFCHAIN_FAULT",
              {
                reason: "404_MISSING_RESOURCE",
                transaction: t,
                info: { url: a, errorMessage: u },
              },
            ),
              i.push(u);
          }
          (0, A.hu)(
            !1,
            `error encountered during CCIP fetch: ${i
              .map((t) => JSON.stringify(t))
              .join(", ")}`,
            "OFFCHAIN_FAULT",
            {
              reason: "500_SERVER_ERROR",
              transaction: t,
              info: { urls: n, errorMessages: i },
            },
          );
        }
        _wrapBlock(t, e) {
          return new Oi.gO(
            (function (t) {
              const e = Ti(t);
              return (
                (e.transactions = t.transactions.map((t) =>
                  "string" == typeof t ? t : Ri(t),
                )),
                e
              );
            })(t),
            this,
          );
        }
        _wrapLog(t, e) {
          return new Oi.Zb(
            (function (t) {
              return Ci(t);
            })(t),
            this,
          );
        }
        _wrapTransactionReceipt(t, e) {
          return new Oi.IX(
            (function (t) {
              return xi(t);
            })(t),
            this,
          );
        }
        _wrapTransactionResponse(t, e) {
          return new Oi.Mw(Ri(t), this);
        }
        _detectNetwork() {
          (0, A.hu)(
            !1,
            "sub-classes must implement this",
            "UNSUPPORTED_OPERATION",
            { operation: "_detectNetwork" },
          );
        }
        async _perform(t) {
          (0, A.hu)(
            !1,
            `unsupported method: ${t.method}`,
            "UNSUPPORTED_OPERATION",
            { operation: t.method, info: t },
          );
        }
        async getBlockNumber() {
          const t = (0, p.Dx)(
            await this.#Rt({ method: "getBlockNumber" }),
            "%response",
          );
          return this.#Ct >= 0 && (this.#Ct = t), t;
        }
        _getAddress(t) {
          return (0, P.ru)(t, this);
        }
        _getBlockTag(t) {
          if (null == t) return "latest";
          switch (t) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return t;
          }
          return (0, i.A7)(t)
            ? (0, i.A7)(t, 32)
              ? t
              : (0, p.B4)(t)
            : ("bigint" == typeof t && (t = (0, p.Dx)(t, "blockTag")),
              "number" == typeof t
                ? t >= 0
                  ? (0, p.B4)(t)
                  : this.#Ct >= 0
                  ? (0, p.B4)(this.#Ct + t)
                  : this.getBlockNumber().then((e) => (0, p.B4)(e + t))
                : void (0, A.en)(!1, "invalid blockTag", "blockTag", t));
        }
        _getFilter(t) {
          const e = (t.topics || []).map((t) =>
              null == t
                ? null
                : Array.isArray(t)
                ? Hi(t.map((t) => t.toLowerCase()))
                : t.toLowerCase(),
            ),
            n = "blockHash" in t ? t.blockHash : void 0,
            r = (t, r, s) => {
              let i;
              switch (t.length) {
                case 0:
                  break;
                case 1:
                  i = t[0];
                  break;
                default:
                  t.sort(), (i = t);
              }
              if (n && (null != r || null != s))
                throw new Error("invalid filter");
              const a = {};
              return (
                i && (a.address = i),
                e.length && (a.topics = e),
                r && (a.fromBlock = r),
                s && (a.toBlock = s),
                n && (a.blockHash = n),
                a
              );
            };
          let s,
            i,
            a = [];
          if (t.address)
            if (Array.isArray(t.address))
              for (const e of t.address) a.push(this._getAddress(e));
            else a.push(this._getAddress(t.address));
          return (
            "fromBlock" in t && (s = this._getBlockTag(t.fromBlock)),
            "toBlock" in t && (i = this._getBlockTag(t.toBlock)),
            a.filter((t) => "string" != typeof t).length ||
            (null != s && "string" != typeof s) ||
            (null != i && "string" != typeof i)
              ? Promise.all([Promise.all(a), s, i]).then((t) =>
                  r(t[0], t[1], t[2]),
                )
              : r(a, s, i)
          );
        }
        _getTransactionRequest(t) {
          const e = (0, Oi.kK)(t),
            n = [];
          if (
            (["to", "from"].forEach((t) => {
              if (null == e[t]) return;
              const r = (0, P.ru)(e[t]);
              Gi(r)
                ? n.push(
                    (async function () {
                      e[t] = await r;
                    })(),
                  )
                : (e[t] = r);
            }),
            null != e.blockTag)
          ) {
            const t = this._getBlockTag(e.blockTag);
            Gi(t)
              ? n.push(
                  (async function () {
                    e.blockTag = await t;
                  })(),
                )
              : (e.blockTag = t);
          }
          return n.length
            ? (async function () {
                return await Promise.all(n), e;
              })()
            : e;
        }
        async getNetwork() {
          if (null == this.#Pt) {
            const t = this._detectNetwork().then(
              (t) => (this.emit("network", t, null), t),
              (e) => {
                throw (this.#Pt === t && (this.#Pt = null), e);
              },
            );
            return (this.#Pt = t), (await t).clone();
          }
          const t = this.#Pt,
            [e, n] = await Promise.all([t, this._detectNetwork()]);
          return (
            e.chainId !== n.chainId &&
              (this.#kt
                ? (this.emit("network", n, e),
                  this.#Pt === t && (this.#Pt = Promise.resolve(n)))
                : (0, A.hu)(
                    !1,
                    `network changed: ${e.chainId} => ${n.chainId} `,
                    "NETWORK_ERROR",
                    { event: "changed" },
                  )),
            e.clone()
          );
        }
        async getFeeData() {
          const { block: t, gasPrice: e } = await (0, B.m)({
            block: this.getBlock("latest"),
            gasPrice: (async () => {
              try {
                const t = await this.#Rt({ method: "getGasPrice" });
                return (0, p.yT)(t, "%response");
              } catch (t) {}
              return null;
            })(),
          });
          let n = null,
            r = null;
          return (
            t &&
              t.baseFeePerGas &&
              ((r = BigInt("1000000000")), (n = t.baseFeePerGas * Mi + r)),
            new Oi.jW(e, n, r)
          );
        }
        async estimateGas(t) {
          let e = this._getTransactionRequest(t);
          return (
            Gi(e) && (e = await e),
            (0, p.yT)(
              await this.#Rt({ method: "estimateGas", transaction: e }),
              "%response",
            )
          );
        }
        async #Ot(t, e, n) {
          (0, A.hu)(
            n < 10,
            "CCIP read exceeded maximum redirections",
            "OFFCHAIN_FAULT",
            {
              reason: "TOO_MANY_REDIRECTS",
              transaction: Object.assign({}, t, {
                blockTag: e,
                enableCcipRead: !0,
              }),
            },
          );
          const r = (0, Oi.kK)(t);
          try {
            return (0, i.Dv)(
              await this._perform({
                method: "call",
                transaction: r,
                blockTag: e,
              }),
            );
          } catch (t) {
            if (
              !this.disableCcipRead &&
              (0, A.Hl)(t) &&
              t.data &&
              n >= 0 &&
              "latest" === e &&
              null != r.to &&
              "0x556f1830" === (0, i.QB)(t.data, 0, 4)
            ) {
              const s = t.data,
                a = await (0, P.ru)(r.to, this);
              let o;
              try {
                o = (function (t) {
                  const e = {
                    sender: "",
                    urls: [],
                    calldata: "",
                    selector: "",
                    extraData: "",
                    errorArgs: [],
                  };
                  (0, A.hu)(
                    (0, i.M5)(t) >= 160,
                    "insufficient OffchainLookup data",
                    "OFFCHAIN_FAULT",
                    { reason: "insufficient OffchainLookup data" },
                  );
                  const n = (0, i.QB)(t, 0, 32);
                  (0, A.hu)(
                    (0, i.QB)(n, 0, 12) === (0, i.QB)($i, 0, 12),
                    "corrupt OffchainLookup sender",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup sender" },
                  ),
                    (e.sender = (0, i.QB)(n, 12));
                  try {
                    const n = [],
                      r = (0, p.Dx)((0, i.QB)(t, 32, 64)),
                      s = (0, p.Dx)((0, i.QB)(t, r, r + 32)),
                      a = (0, i.QB)(t, r + 32);
                    for (let t = 0; t < s; t++) {
                      const e = Ji(a, 32 * t);
                      if (null == e) throw new Error("abort");
                      n.push(e);
                    }
                    e.urls = n;
                  } catch (t) {
                    (0, A.hu)(
                      !1,
                      "corrupt OffchainLookup urls",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup urls" },
                    );
                  }
                  try {
                    const n = Zi(t, 64);
                    if (null == n) throw new Error("abort");
                    e.calldata = n;
                  } catch (t) {
                    (0, A.hu)(
                      !1,
                      "corrupt OffchainLookup calldata",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup calldata" },
                    );
                  }
                  (0, A.hu)(
                    (0, i.QB)(t, 100, 128) === (0, i.QB)($i, 0, 28),
                    "corrupt OffchainLookup callbaackSelector",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup callbaackSelector" },
                  ),
                    (e.selector = (0, i.QB)(t, 96, 100));
                  try {
                    const n = Zi(t, 128);
                    if (null == n) throw new Error("abort");
                    e.extraData = n;
                  } catch (t) {
                    (0, A.hu)(
                      !1,
                      "corrupt OffchainLookup extraData",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup extraData" },
                    );
                  }
                  return (
                    (e.errorArgs = "sender,urls,calldata,selector,extraData"
                      .split(/,/)
                      .map((t) => e[t])),
                    e
                  );
                })((0, i.QB)(t.data, 4));
              } catch (t) {
                (0, A.hu)(!1, t.message, "OFFCHAIN_FAULT", {
                  reason: "BAD_DATA",
                  transaction: r,
                  info: { data: s },
                });
              }
              (0, A.hu)(
                o.sender.toLowerCase() === a.toLowerCase(),
                "CCIP Read sender mismatch",
                "CALL_EXCEPTION",
                {
                  action: "call",
                  data: s,
                  reason: "OffchainLookup",
                  transaction: r,
                  invocation: null,
                  revert: {
                    signature:
                      "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: o.errorArgs,
                  },
                },
              );
              const c = await this.ccipReadFetch(r, o.calldata, o.urls);
              (0, A.hu)(
                null != c,
                "CCIP Read failed to fetch data",
                "OFFCHAIN_FAULT",
                {
                  reason: "FETCH_FAILED",
                  transaction: r,
                  info: { data: t.data, errorArgs: o.errorArgs },
                },
              );
              const u = {
                to: a,
                data: (0, i.zo)([o.selector, Xi([c, o.extraData])]),
              };
              this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: u,
              });
              try {
                const t = await this.#Ot(u, e, n + 1);
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, u),
                    result: t,
                  }),
                  t
                );
              } catch (t) {
                throw (
                  (this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, u),
                    error: t,
                  }),
                  t)
                );
              }
            }
            throw t;
          }
        }
        async #St(t) {
          const { value: e } = await (0, B.m)({
            network: this.getNetwork(),
            value: t,
          });
          return e;
        }
        async call(t) {
          const { tx: e, blockTag: n } = await (0, B.m)({
            tx: this._getTransactionRequest(t),
            blockTag: this._getBlockTag(t.blockTag),
          });
          return await this.#St(this.#Ot(e, n, t.enableCcipRead ? 0 : -1));
        }
        async #Bt(t, e, n) {
          let r = this._getAddress(e),
            s = this._getBlockTag(n);
          return (
            ("string" == typeof r && "string" == typeof s) ||
              ([r, s] = await Promise.all([r, s])),
            await this.#St(
              this.#Rt(Object.assign(t, { address: r, blockTag: s })),
            )
          );
        }
        async getBalance(t, e) {
          return (0, p.yT)(
            await this.#Bt({ method: "getBalance" }, t, e),
            "%response",
          );
        }
        async getTransactionCount(t, e) {
          return (0, p.Dx)(
            await this.#Bt({ method: "getTransactionCount" }, t, e),
            "%response",
          );
        }
        async getCode(t, e) {
          return (0, i.Dv)(await this.#Bt({ method: "getCode" }, t, e));
        }
        async getStorage(t, e, n) {
          const r = (0, p.yT)(e, "position");
          return (0, i.Dv)(
            await this.#Bt({ method: "getStorage", position: r }, t, n),
          );
        }
        async broadcastTransaction(t) {
          const {
              blockNumber: e,
              hash: n,
              network: r,
            } = await (0, B.m)({
              blockNumber: this.getBlockNumber(),
              hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: t,
              }),
              network: this.getNetwork(),
            }),
            s = ai.from(t);
          if (s.hash !== n)
            throw new Error("@TODO: the returned hash did not match");
          return this._wrapTransactionResponse(s, r).replaceableTransaction(e);
        }
        async #Dt(t, e) {
          if ((0, i.A7)(t, 32))
            return await this.#Rt({
              method: "getBlock",
              blockHash: t,
              includeTransactions: e,
            });
          let n = this._getBlockTag(t);
          return (
            "string" != typeof n && (n = await n),
            await this.#Rt({
              method: "getBlock",
              blockTag: n,
              includeTransactions: e,
            })
          );
        }
        async getBlock(t, e) {
          const { network: n, params: r } = await (0, B.m)({
            network: this.getNetwork(),
            params: this.#Dt(t, !!e),
          });
          return null == r ? null : this._wrapBlock(r, n);
        }
        async getTransaction(t) {
          const { network: e, params: n } = await (0, B.m)({
            network: this.getNetwork(),
            params: this.#Rt({ method: "getTransaction", hash: t }),
          });
          return null == n ? null : this._wrapTransactionResponse(n, e);
        }
        async getTransactionReceipt(t) {
          const { network: e, params: n } = await (0, B.m)({
            network: this.getNetwork(),
            params: this.#Rt({ method: "getTransactionReceipt", hash: t }),
          });
          if (null == n) return null;
          if (null == n.gasPrice && null == n.effectiveGasPrice) {
            const e = await this.#Rt({ method: "getTransaction", hash: t });
            if (null == e)
              throw new Error(
                "report this; could not find tx or effectiveGasPrice",
              );
            n.effectiveGasPrice = e.gasPrice;
          }
          return this._wrapTransactionReceipt(n, e);
        }
        async getTransactionResult(t) {
          const { result: e } = await (0, B.m)({
            network: this.getNetwork(),
            result: this.#Rt({ method: "getTransactionResult", hash: t }),
          });
          return null == e ? null : (0, i.Dv)(e);
        }
        async getLogs(t) {
          let e = this._getFilter(t);
          Gi(e) && (e = await e);
          const { network: n, params: r } = await (0, B.m)({
            network: this.getNetwork(),
            params: this.#Rt({ method: "getLogs", filter: e }),
          });
          return r.map((t) => this._wrapLog(t, n));
        }
        _getProvider(t) {
          (0, A.hu)(
            !1,
            "provider cannot connect to target network",
            "UNSUPPORTED_OPERATION",
            { operation: "_getProvider()" },
          );
        }
        async getResolver(t) {
          return await Ai.fromName(this, t);
        }
        async getAvatar(t) {
          const e = await this.getResolver(t);
          return e ? await e.getAvatar() : null;
        }
        async resolveName(t) {
          const e = await this.getResolver(t);
          return e ? await e.getAddress() : null;
        }
        async lookupAddress(t) {
          const e = Gr(
            (t = (0, b.K)(t)).substring(2).toLowerCase() + ".addr.reverse",
          );
          try {
            const n = await Ai.getEnsAddress(this),
              r = new D.CH(
                n,
                ["function resolver(bytes32) view returns (address)"],
                this,
              ),
              s = await r.resolver(e);
            if (null == s || s === k) return null;
            const i = new D.CH(
                s,
                ["function name(bytes32) view returns (string)"],
                this,
              ),
              a = await i.name(e);
            return (await this.resolveName(a)) !== t ? null : a;
          } catch (t) {
            if ((0, A.VZ)(t, "BAD_DATA") && "0x" === t.value) return null;
            if ((0, A.VZ)(t, "CALL_EXCEPTION")) return null;
            throw t;
          }
          return null;
        }
        async waitForTransaction(t, e, n) {
          const r = null != e ? e : 1;
          return 0 === r
            ? this.getTransactionReceipt(t)
            : new Promise(async (e, s) => {
                let i = null;
                const a = async (n) => {
                  try {
                    const s = await this.getTransactionReceipt(t);
                    if (null != s && n - s.blockNumber + 1 >= r)
                      return e(s), void (i && (clearTimeout(i), (i = null)));
                  } catch (t) {
                    console.log("EEE", t);
                  }
                  this.once("block", a);
                };
                null != n &&
                  (i = setTimeout(() => {
                    null != i &&
                      ((i = null),
                      this.off("block", a),
                      s(
                        (0, A.wf)("timeout", "TIMEOUT", { reason: "timeout" }),
                      ));
                  }, n)),
                  a(await this.getBlockNumber());
              });
        }
        async waitForBlock(t) {
          (0, A.hu)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock",
          });
        }
        _clearTimeout(t) {
          const e = this.#It.get(t);
          e && (e.timer && clearTimeout(e.timer), this.#It.delete(t));
        }
        _setTimeout(t, e) {
          null == e && (e = 0);
          const n = this.#Tt++,
            r = () => {
              this.#It.delete(n), t();
            };
          if (this.paused) this.#It.set(n, { timer: null, func: r, time: e });
          else {
            const t = setTimeout(r, e);
            this.#It.set(n, { timer: t, func: r, time: Vi() });
          }
          return n;
        }
        _forEachSubscriber(t) {
          for (const e of this.#bt.values()) t(e.subscriber);
        }
        _getSubscriber(t) {
          switch (t.type) {
            case "debug":
            case "error":
            case "network":
              return new ji(t.type);
            case "block":
              return new Bi(this);
            case "event":
              return new Fi(this, t.filter);
            case "transaction":
              return new Li(this, t.hash);
            case "orphan":
              return new Ui(this, t.filter);
          }
          throw new Error(`unsupported event: ${t.type}`);
        }
        _recoverSubscriber(t, e) {
          for (const n of this.#bt.values())
            if (n.subscriber === t) {
              n.started && n.subscriber.stop(),
                (n.subscriber = e),
                n.started && e.start(),
                null != this.#vt && e.pause(this.#vt);
              break;
            }
        }
        async #Ut(t, e) {
          let n = await _i(t, this);
          return (
            "event" === n.type &&
              e &&
              e.length > 0 &&
              !0 === e[0].removed &&
              (n = await _i({ orphan: "drop-log", log: e[0] }, this)),
            this.#bt.get(n.tag) || null
          );
        }
        async #Lt(t) {
          const e = await _i(t, this),
            n = e.tag;
          let r = this.#bt.get(n);
          return (
            r ||
              ((r = {
                subscriber: this._getSubscriber(e),
                tag: n,
                addressableMap: new WeakMap(),
                nameMap: new Map(),
                started: !1,
                listeners: [],
              }),
              this.#bt.set(n, r)),
            r
          );
        }
        async on(t, e) {
          const n = await this.#Lt(t);
          return (
            n.listeners.push({ listener: e, once: !1 }),
            n.started ||
              (n.subscriber.start(),
              (n.started = !0),
              null != this.#vt && n.subscriber.pause(this.#vt)),
            this
          );
        }
        async once(t, e) {
          const n = await this.#Lt(t);
          return (
            n.listeners.push({ listener: e, once: !0 }),
            n.started ||
              (n.subscriber.start(),
              (n.started = !0),
              null != this.#vt && n.subscriber.pause(this.#vt)),
            this
          );
        }
        async emit(t, ...e) {
          const n = await this.#Ut(t, e);
          if (!n || 0 === n.listeners.length) return !1;
          const r = n.listeners.length;
          return (
            (n.listeners = n.listeners.filter(({ listener: n, once: r }) => {
              const s = new oi.Z(this, r ? null : n, t);
              try {
                n.call(this, ...e, s);
              } catch (t) {}
              return !r;
            })),
            0 === n.listeners.length &&
              (n.started && n.subscriber.stop(), this.#bt.delete(n.tag)),
            r > 0
          );
        }
        async listenerCount(t) {
          if (t) {
            const e = await this.#Ut(t);
            return e ? e.listeners.length : 0;
          }
          let e = 0;
          for (const { listeners: t } of this.#bt.values()) e += t.length;
          return e;
        }
        async listeners(t) {
          if (t) {
            const e = await this.#Ut(t);
            return e ? e.listeners.map(({ listener: t }) => t) : [];
          }
          let e = [];
          for (const { listeners: t } of this.#bt.values())
            e = e.concat(t.map(({ listener: t }) => t));
          return e;
        }
        async off(t, e) {
          const n = await this.#Ut(t);
          if (!n) return this;
          if (e) {
            const t = n.listeners.map(({ listener: t }) => t).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1);
          }
          return (
            (e && 0 !== n.listeners.length) ||
              (n.started && n.subscriber.stop(), this.#bt.delete(n.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            const { tag: e, started: n, subscriber: r } = await this.#Lt(t);
            n && r.stop(), this.#bt.delete(e);
          } else
            for (const [t, { started: e, subscriber: n }] of this.#bt)
              e && n.stop(), this.#bt.delete(t);
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return this.off(t, e);
        }
        get destroyed() {
          return this.#Et;
        }
        destroy() {
          this.removeAllListeners();
          for (const t of this.#It.keys()) this._clearTimeout(t);
          this.#Et = !0;
        }
        get paused() {
          return null != this.#vt;
        }
        set paused(t) {
          !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
        }
        pause(t) {
          if (((this.#Ct = -1), null != this.#vt)) {
            if (this.#vt == !!t) return;
            (0, A.hu)(
              !1,
              "cannot change pause type; resume first",
              "UNSUPPORTED_OPERATION",
              { operation: "pause" },
            );
          }
          this._forEachSubscriber((e) => e.pause(t)), (this.#vt = !!t);
          for (const t of this.#It.values())
            t.timer && clearTimeout(t.timer), (t.time = Vi() - t.time);
        }
        resume() {
          if (null != this.#vt) {
            this._forEachSubscriber((t) => t.resume()), (this.#vt = null);
            for (const t of this.#It.values()) {
              let e = t.time;
              e < 0 && (e = 0), (t.time = Vi()), setTimeout(t.func, e);
            }
          }
        }
      }
      function Ji(t, e) {
        try {
          const n = Zi(t, e);
          if (n) return (0, s.ZN)(n);
        } catch (t) {}
        return null;
      }
      function Zi(t, e) {
        if ("0x" === t) return null;
        try {
          const n = (0, p.Dx)((0, i.QB)(t, e, e + 32)),
            r = (0, p.Dx)((0, i.QB)(t, n, n + 32));
          return (0, i.QB)(t, n + 32, n + 32 + r);
        } catch (t) {}
        return null;
      }
      function qi(t) {
        const e = (0, p.ot)(t);
        if (e.length > 32) throw new Error("internal; should not happen");
        const n = new Uint8Array(32);
        return n.set(e, 32 - e.length), n;
      }
      function Wi(t) {
        if (t.length % 32 == 0) return t;
        const e = new Uint8Array(32 * Math.ceil(t.length / 32));
        return e.set(t), e;
      }
      const Yi = new Uint8Array([]);
      function Xi(t) {
        const e = [];
        let n = 0;
        for (let r = 0; r < t.length; r++) e.push(Yi), (n += 32);
        for (let r = 0; r < t.length; r++) {
          const s = (0, i.Pw)(t[r]);
          (e[r] = qi(n)),
            e.push(qi(s.length)),
            e.push(Wi(s)),
            (n += 32 + 32 * Math.ceil(s.length / 32));
        }
        return (0, i.zo)(e);
      }
      const $i =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
      function ta(t, e) {
        if (t.provider) return t.provider;
        (0, A.hu)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
          operation: e,
        });
      }
      async function ea(t, e) {
        let n = (0, Oi.kK)(e);
        if ((null != n.to && (n.to = (0, P.ru)(n.to, t)), null != n.from)) {
          const e = n.from;
          n.from = Promise.all([t.getAddress(), (0, P.ru)(e, t)]).then(
            ([t, e]) => (
              (0, A.en)(
                t.toLowerCase() === e.toLowerCase(),
                "transaction from mismatch",
                "tx.from",
                e,
              ),
              t
            ),
          );
        } else n.from = t.getAddress();
        return await (0, B.m)(n);
      }
      class na {
        provider;
        constructor(t) {
          (0, B.h)(this, { provider: t || null });
        }
        async getNonce(t) {
          return ta(this, "getTransactionCount").getTransactionCount(
            await this.getAddress(),
            t,
          );
        }
        async populateCall(t) {
          return await ea(this, t);
        }
        async populateTransaction(t) {
          const e = ta(this, "populateTransaction"),
            n = await ea(this, t);
          null == n.nonce && (n.nonce = await this.getNonce("pending")),
            null == n.gasLimit && (n.gasLimit = await this.estimateGas(n));
          const r = await this.provider.getNetwork();
          if (null != n.chainId) {
            const e = (0, p.yT)(n.chainId);
            (0, A.en)(
              e === r.chainId,
              "transaction chainId mismatch",
              "tx.chainId",
              t.chainId,
            );
          } else n.chainId = r.chainId;
          const s = null != n.maxFeePerGas || null != n.maxPriorityFeePerGas;
          if (
            (null == n.gasPrice || (2 !== n.type && !s)
              ? (0 !== n.type && 1 !== n.type) ||
                !s ||
                (0, A.en)(
                  !1,
                  "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                  "tx",
                  t,
                )
              : (0, A.en)(
                  !1,
                  "eip-1559 transaction do not support gasPrice",
                  "tx",
                  t,
                ),
            (2 !== n.type && null != n.type) ||
              null == n.maxFeePerGas ||
              null == n.maxPriorityFeePerGas)
          )
            if (0 === n.type || 1 === n.type) {
              const t = await e.getFeeData();
              (0, A.hu)(
                null != t.gasPrice,
                "network does not support gasPrice",
                "UNSUPPORTED_OPERATION",
                { operation: "getGasPrice" },
              ),
                null == n.gasPrice && (n.gasPrice = t.gasPrice);
            } else {
              const t = await e.getFeeData();
              if (null == n.type)
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                  if (((n.type = 2), null != n.gasPrice)) {
                    const t = n.gasPrice;
                    delete n.gasPrice,
                      (n.maxFeePerGas = t),
                      (n.maxPriorityFeePerGas = t);
                  } else
                    null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas),
                      null == n.maxPriorityFeePerGas &&
                        (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                else
                  null != t.gasPrice
                    ? ((0, A.hu)(
                        !s,
                        "network does not support EIP-1559",
                        "UNSUPPORTED_OPERATION",
                        { operation: "populateTransaction" },
                      ),
                      null == n.gasPrice && (n.gasPrice = t.gasPrice),
                      (n.type = 0))
                    : (0, A.hu)(
                        !1,
                        "failed to get consistent fee data",
                        "UNSUPPORTED_OPERATION",
                        { operation: "signer.getFeeData" },
                      );
              else
                2 === n.type &&
                  (null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas),
                  null == n.maxPriorityFeePerGas &&
                    (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
          else n.type = 2;
          return await (0, B.m)(n);
        }
        async estimateGas(t) {
          return ta(this, "estimateGas").estimateGas(
            await this.populateCall(t),
          );
        }
        async call(t) {
          return ta(this, "call").call(await this.populateCall(t));
        }
        async resolveName(t) {
          const e = ta(this, "resolveName");
          return await e.resolveName(t);
        }
        async sendTransaction(t) {
          const e = ta(this, "sendTransaction"),
            n = await this.populateTransaction(t);
          delete n.from;
          const r = ai.from(n);
          return await e.broadcastTransaction(await this.signTransaction(r));
        }
      }
      class ra extends na {
        address;
        constructor(t, e) {
          super(e), (0, B.h)(this, { address: t });
        }
        async getAddress() {
          return this.address;
        }
        connect(t) {
          return new ra(this.address, t);
        }
        #Ft(t, e) {
          (0, A.hu)(
            !1,
            `VoidSigner cannot sign ${t}`,
            "UNSUPPORTED_OPERATION",
            { operation: e },
          );
        }
        async signTransaction(t) {
          this.#Ft("transactions", "signTransaction");
        }
        async signMessage(t) {
          this.#Ft("messages", "signMessage");
        }
        async signTypedData(t, e, n) {
          this.#Ft("typed-data", "signTypedData");
        }
      }
      class sa {
        #dt;
        #Mt;
        #pt;
        #wt;
        #Gt;
        #Kt;
        constructor(t) {
          (this.#dt = t),
            (this.#Mt = null),
            (this.#pt = this.#yt.bind(this)),
            (this.#wt = !1),
            (this.#Gt = null),
            (this.#Kt = !1);
        }
        _subscribe(t) {
          throw new Error("subclasses must override this");
        }
        _emitResults(t, e) {
          throw new Error("subclasses must override this");
        }
        _recover(t) {
          throw new Error("subclasses must override this");
        }
        async #yt(t) {
          try {
            null == this.#Mt && (this.#Mt = this._subscribe(this.#dt));
            let t = null;
            try {
              t = await this.#Mt;
            } catch (t) {
              if (
                !(0, A.VZ)(t, "UNSUPPORTED_OPERATION") ||
                "eth_newFilter" !== t.operation
              )
                throw t;
            }
            if (null == t)
              return (
                (this.#Mt = null),
                void this.#dt._recoverSubscriber(this, this._recover(this.#dt))
              );
            const e = await this.#dt.getNetwork();
            if ((this.#Gt || (this.#Gt = e), this.#Gt.chainId !== e.chainId))
              throw new Error("chaid changed");
            if (this.#Kt) return;
            const n = await this.#dt.send("eth_getFilterChanges", [t]);
            await this._emitResults(this.#dt, n);
          } catch (t) {
            console.log("@TODO", t);
          }
          this.#dt.once("block", this.#pt);
        }
        #jt() {
          const t = this.#Mt;
          t &&
            ((this.#Mt = null),
            t.then((t) => {
              this.#dt.send("eth_uninstallFilter", [t]);
            }));
        }
        start() {
          this.#wt || ((this.#wt = !0), this.#yt(-2));
        }
        stop() {
          this.#wt &&
            ((this.#wt = !1),
            (this.#Kt = !0),
            this.#jt(),
            this.#dt.off("block", this.#pt));
        }
        pause(t) {
          t && this.#jt(), this.#dt.off("block", this.#pt);
        }
        resume() {
          this.start();
        }
      }
      class ia extends sa {
        #Ht;
        constructor(t, e) {
          var n;
          super(t), (this.#Ht = ((n = e), JSON.parse(JSON.stringify(n))));
        }
        _recover(t) {
          return new Fi(t, this.#Ht);
        }
        async _subscribe(t) {
          return await t.send("eth_newFilter", [this.#Ht]);
        }
        async _emitResults(t, e) {
          for (const n of e) t.emit(this.#Ht, t._wrapLog(n, t._network));
        }
      }
      class aa extends sa {
        async _subscribe(t) {
          return await t.send("eth_newPendingTransactionFilter", []);
        }
        async _emitResults(t, e) {
          for (const n of e) t.emit("pending", n);
        }
      }
      const oa = "bigint,boolean,function,number,string,symbol".split(/,/g);
      function ca(t) {
        if (null == t || oa.indexOf(typeof t) >= 0) return t;
        if ("function" == typeof t.getAddress) return t;
        if (Array.isArray(t)) return t.map(ca);
        if ("object" == typeof t)
          return Object.keys(t).reduce((e, n) => ((e[n] = t[n]), e), {});
        throw new Error(`should not happen: ${t} (${typeof t})`);
      }
      function ua(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function la(t) {
        return t ? t.toLowerCase() : t;
      }
      function ha(t) {
        return t && "number" == typeof t.pollingInterval;
      }
      const fa = {
        polling: !1,
        staticNetwork: null,
        batchStallTime: 10,
        batchMaxSize: 1 << 20,
        batchMaxCount: 100,
        cacheTimeout: 250,
      };
      class da extends na {
        address;
        constructor(t, e) {
          super(t), (e = (0, b.K)(e)), (0, B.h)(this, { address: e });
        }
        connect(t) {
          (0, A.hu)(
            !1,
            "cannot reconnect JsonRpcSigner",
            "UNSUPPORTED_OPERATION",
            { operation: "signer.connect" },
          );
        }
        async getAddress() {
          return this.address;
        }
        async populateTransaction(t) {
          return await this.populateCall(t);
        }
        async sendUncheckedTransaction(t) {
          const e = ca(t),
            n = [];
          if (e.from) {
            const r = e.from;
            n.push(
              (async () => {
                const n = await (0, P.ru)(r, this.provider);
                (0, A.en)(
                  null != n && n.toLowerCase() === this.address.toLowerCase(),
                  "from address mismatch",
                  "transaction",
                  t,
                ),
                  (e.from = n);
              })(),
            );
          } else e.from = this.address;
          if (
            (null == e.gasLimit &&
              n.push(
                (async () => {
                  e.gasLimit = await this.provider.estimateGas({
                    ...e,
                    from: this.address,
                  });
                })(),
              ),
            null != e.to)
          ) {
            const t = e.to;
            n.push(
              (async () => {
                e.to = await (0, P.ru)(t, this.provider);
              })(),
            );
          }
          n.length && (await Promise.all(n));
          const r = this.provider.getRpcTransaction(e);
          return this.provider.send("eth_sendTransaction", [r]);
        }
        async sendTransaction(t) {
          const e = await this.provider.getBlockNumber(),
            n = await this.sendUncheckedTransaction(t);
          return await new Promise((t, r) => {
            const s = [1e3, 100],
              i = async () => {
                const r = await this.provider.getTransaction(n);
                null == r
                  ? this.provider._setTimeout(() => {
                      i();
                    }, s.pop() || 4e3)
                  : t(r.replaceableTransaction(e));
              };
            i();
          });
        }
        async signTransaction(t) {
          const e = ca(t);
          if (e.from) {
            const n = await (0, P.ru)(e.from, this.provider);
            (0, A.en)(
              null != n && n.toLowerCase() === this.address.toLowerCase(),
              "from address mismatch",
              "transaction",
              t,
            ),
              (e.from = n);
          } else e.from = this.address;
          const n = this.provider.getRpcTransaction(e);
          return await this.provider.send("eth_signTransaction", [n]);
        }
        async signMessage(t) {
          const e = "string" == typeof t ? (0, s.Y0)(t) : t;
          return await this.provider.send("personal_sign", [
            (0, i.Dv)(e),
            this.address.toLowerCase(),
          ]);
        }
        async signTypedData(t, e, n) {
          const r = ca(n),
            s = await fs.resolveNames(t, e, r, async (t) => {
              const e = await (0, P.ru)(t);
              return (
                (0, A.en)(
                  null != e,
                  "TypedData does not support null address",
                  "value",
                  t,
                ),
                e
              );
            });
          return await this.provider.send("eth_signTypedData_v4", [
            this.address.toLowerCase(),
            JSON.stringify(fs.getPayload(s.domain, e, s.value)),
          ]);
        }
        async unlock(t) {
          return this.provider.send("personal_unlockAccount", [
            this.address.toLowerCase(),
            t,
            null,
          ]);
        }
        async _legacySignMessage(t) {
          const e = "string" == typeof t ? (0, s.Y0)(t) : t;
          return await this.provider.send("eth_sign", [
            this.address.toLowerCase(),
            (0, i.Dv)(e),
          ]);
        }
      }
      class pa extends zi {
        #m;
        #_t;
        #Vt;
        #Qt;
        #zt;
        #Gt;
        #Jt() {
          if (this.#Qt) return;
          const t =
            1 === this._getOption("batchMaxCount")
              ? 0
              : this._getOption("batchStallTime");
          this.#Qt = setTimeout(() => {
            this.#Qt = null;
            const t = this.#Vt;
            for (this.#Vt = []; t.length; ) {
              const e = [t.shift()];
              for (; t.length && e.length !== this.#m.batchMaxCount; )
                if (
                  (e.push(t.shift()),
                  JSON.stringify(e.map((t) => t.payload)).length >
                    this.#m.batchMaxSize)
                ) {
                  t.unshift(e.pop());
                  break;
                }
              (async () => {
                const t =
                  1 === e.length ? e[0].payload : e.map((t) => t.payload);
                this.emit("debug", { action: "sendRpcPayload", payload: t });
                try {
                  const n = await this._send(t);
                  this.emit("debug", { action: "receiveRpcResult", result: n });
                  for (const { resolve: t, reject: r, payload: s } of e) {
                    if (this.destroyed) {
                      r(
                        (0, A.wf)(
                          "provider destroyed; cancelled request",
                          "UNSUPPORTED_OPERATION",
                          { operation: s.method },
                        ),
                      );
                      continue;
                    }
                    const e = n.filter((t) => t.id === s.id)[0];
                    if (null != e)
                      "error" in e ? r(this.getRpcError(s, e)) : t(e.result);
                    else {
                      const t = (0, A.wf)(
                        "missing response for request",
                        "BAD_DATA",
                        { value: n, info: { payload: s } },
                      );
                      this.emit("error", t), r(t);
                    }
                  }
                } catch (t) {
                  this.emit("debug", { action: "receiveRpcError", error: t });
                  for (const { reject: n } of e) n(t);
                }
              })();
            }
          }, t);
        }
        constructor(t, e) {
          const n = {};
          e && null != e.cacheTimeout && (n.cacheTimeout = e.cacheTimeout),
            super(t, n),
            (this.#_t = 1),
            (this.#m = Object.assign({}, fa, e || {})),
            (this.#Vt = []),
            (this.#Qt = null),
            (this.#Gt = null);
          {
            let t = null;
            const e = new Promise((e) => {
              t = e;
            });
            this.#zt = { promise: e, resolve: t };
          }
          const r = this._getOption("staticNetwork");
          r &&
            ((0, A.en)(
              null == t || r.matches(t),
              "staticNetwork MUST match network object",
              "options",
              e,
            ),
            (this.#Gt = r));
        }
        _getOption(t) {
          return this.#m[t];
        }
        get _network() {
          return (
            (0, A.hu)(
              this.#Gt,
              "network is not available yet",
              "NETWORK_ERROR",
            ),
            this.#Gt
          );
        }
        async _perform(t) {
          if ("call" === t.method || "estimateGas" === t.method) {
            let e = t.transaction;
            if (
              e &&
              null != e.type &&
              (0, p.yT)(e.type) &&
              null == e.maxFeePerGas &&
              null == e.maxPriorityFeePerGas
            ) {
              const n = await this.getFeeData();
              null == n.maxFeePerGas &&
                null == n.maxPriorityFeePerGas &&
                (t = Object.assign({}, t, {
                  transaction: Object.assign({}, e, { type: void 0 }),
                }));
            }
          }
          const e = this.getRpcRequest(t);
          return null != e
            ? await this.send(e.method, e.args)
            : super._perform(t);
        }
        async _detectNetwork() {
          const t = this._getOption("staticNetwork");
          if (t) return t;
          if (this.ready)
            return Fs.from((0, p.yT)(await this.send("eth_chainId", [])));
          const e = {
            id: this.#_t++,
            method: "eth_chainId",
            params: [],
            jsonrpc: "2.0",
          };
          let n;
          this.emit("debug", { action: "sendRpcPayload", payload: e });
          try {
            n = (await this._send(e))[0];
          } catch (t) {
            throw (
              (this.emit("debug", { action: "receiveRpcError", error: t }), t)
            );
          }
          if (
            (this.emit("debug", { action: "receiveRpcResult", result: n }),
            "result" in n)
          )
            return Fs.from((0, p.yT)(n.result));
          throw this.getRpcError(e, n);
        }
        _start() {
          null != this.#zt &&
            null != this.#zt.resolve &&
            (this.#zt.resolve(),
            (this.#zt = null),
            (async () => {
              for (; null == this.#Gt && !this.destroyed; )
                try {
                  this.#Gt = await this._detectNetwork();
                } catch (t) {
                  console.log(
                    "JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)",
                  ),
                    this.emit(
                      "error",
                      (0, A.wf)(
                        "failed to bootstrap network detection",
                        "NETWORK_ERROR",
                        {
                          event: "initial-network-discovery",
                          info: { error: t },
                        },
                      ),
                    ),
                    await ua(1e3);
                }
              this.#Jt();
            })());
        }
        async _waitUntilReady() {
          if (null != this.#zt) return await this.#zt.promise;
        }
        _getSubscriber(t) {
          return "pending" === t.type
            ? new aa(this)
            : "event" === t.type
            ? this._getOption("polling")
              ? new Fi(this, t.filter)
              : new ia(this, t.filter)
            : "orphan" === t.type && "drop-log" === t.filter.orphan
            ? new ji("orphan")
            : super._getSubscriber(t);
        }
        get ready() {
          return null == this.#zt;
        }
        getRpcTransaction(t) {
          const e = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach((n) => {
              if (null == t[n]) return;
              let r = n;
              "gasLimit" === n && (r = "gas"),
                (e[r] = (0, p.B4)((0, p.yT)(t[n], `tx.${n}`)));
            }),
            ["from", "to", "data"].forEach((n) => {
              null != t[n] && (e[n] = (0, i.Dv)(t[n]));
            }),
            t.accessList && (e.accessList = (0, Os.z)(t.accessList)),
            e
          );
        }
        getRpcRequest(t) {
          switch (t.method) {
            case "chainId":
              return { method: "eth_chainId", args: [] };
            case "getBlockNumber":
              return { method: "eth_blockNumber", args: [] };
            case "getGasPrice":
              return { method: "eth_gasPrice", args: [] };
            case "getBalance":
              return {
                method: "eth_getBalance",
                args: [la(t.address), t.blockTag],
              };
            case "getTransactionCount":
              return {
                method: "eth_getTransactionCount",
                args: [la(t.address), t.blockTag],
              };
            case "getCode":
              return {
                method: "eth_getCode",
                args: [la(t.address), t.blockTag],
              };
            case "getStorage":
              return {
                method: "eth_getStorageAt",
                args: [
                  la(t.address),
                  "0x" + t.position.toString(16),
                  t.blockTag,
                ],
              };
            case "broadcastTransaction":
              return {
                method: "eth_sendRawTransaction",
                args: [t.signedTransaction],
              };
            case "getBlock":
              if ("blockTag" in t)
                return {
                  method: "eth_getBlockByNumber",
                  args: [t.blockTag, !!t.includeTransactions],
                };
              if ("blockHash" in t)
                return {
                  method: "eth_getBlockByHash",
                  args: [t.blockHash, !!t.includeTransactions],
                };
              break;
            case "getTransaction":
              return { method: "eth_getTransactionByHash", args: [t.hash] };
            case "getTransactionReceipt":
              return { method: "eth_getTransactionReceipt", args: [t.hash] };
            case "call":
              return {
                method: "eth_call",
                args: [this.getRpcTransaction(t.transaction), t.blockTag],
              };
            case "estimateGas":
              return {
                method: "eth_estimateGas",
                args: [this.getRpcTransaction(t.transaction)],
              };
            case "getLogs":
              return (
                t.filter &&
                  null != t.filter.address &&
                  (Array.isArray(t.filter.address)
                    ? (t.filter.address = t.filter.address.map(la))
                    : (t.filter.address = la(t.filter.address))),
                { method: "eth_getLogs", args: [t.filter] }
              );
          }
          return null;
        }
        getRpcError(t, e) {
          const { method: n } = t,
            { error: r } = e;
          if ("eth_estimateGas" === n && r.message) {
            const e = r.message;
            if (!e.match(/revert/i) && e.match(/insufficient funds/i))
              return (0, A.wf)("insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: t.params[0],
                info: { payload: t, error: r },
              });
          }
          if ("eth_call" === n || "eth_estimateGas" === n) {
            const e = ya(r),
              s = c.R.getBuiltinCallException(
                "eth_call" === n ? "call" : "estimateGas",
                t.params[0],
                e ? e.data : null,
              );
            return (s.info = { error: r, payload: t }), s;
          }
          const s = JSON.stringify(
            (function (t) {
              const e = [];
              return wa(t, e), e;
            })(r),
          );
          if (
            "string" == typeof r.message &&
            r.message.match(/user denied|ethers-user-denied/i)
          ) {
            const e = {
              eth_sign: "signMessage",
              personal_sign: "signMessage",
              eth_signTypedData_v4: "signTypedData",
              eth_signTransaction: "signTransaction",
              eth_sendTransaction: "sendTransaction",
              eth_requestAccounts: "requestAccess",
              wallet_requestAccounts: "requestAccess",
            };
            return (0, A.wf)("user rejected action", "ACTION_REJECTED", {
              action: e[n] || "unknown",
              reason: "rejected",
              info: { payload: t, error: r },
            });
          }
          if ("eth_sendRawTransaction" === n || "eth_sendTransaction" === n) {
            const e = t.params[0];
            if (s.match(/insufficient funds|base fee exceeds gas limit/i))
              return (0, A.wf)(
                "insufficient funds for intrinsic transaction cost",
                "INSUFFICIENT_FUNDS",
                { transaction: e, info: { error: r } },
              );
            if (s.match(/nonce/i) && s.match(/too low/i))
              return (0, A.wf)("nonce has already been used", "NONCE_EXPIRED", {
                transaction: e,
                info: { error: r },
              });
            if (s.match(/replacement transaction/i) && s.match(/underpriced/i))
              return (0, A.wf)(
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: e, info: { error: r } },
              );
            if (s.match(/only replay-protected/i))
              return (0, A.wf)(
                "legacy pre-eip-155 transactions not supported",
                "UNSUPPORTED_OPERATION",
                { operation: n, info: { transaction: e, info: { error: r } } },
              );
          }
          let i = !!s.match(/the method .* does not exist/i);
          return (
            i ||
              (r &&
                r.details &&
                r.details.startsWith("Unauthorized method:") &&
                (i = !0)),
            i
              ? (0, A.wf)("unsupported operation", "UNSUPPORTED_OPERATION", {
                  operation: t.method,
                  info: { error: r, payload: t },
                })
              : (0, A.wf)("could not coalesce error", "UNKNOWN_ERROR", {
                  error: r,
                  payload: t,
                })
          );
        }
        send(t, e) {
          if (this.destroyed)
            return Promise.reject(
              (0, A.wf)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: t },
              ),
            );
          const n = this.#_t++,
            r = new Promise((r, s) => {
              this.#Vt.push({
                resolve: r,
                reject: s,
                payload: { method: t, params: e, id: n, jsonrpc: "2.0" },
              });
            });
          return this.#Jt(), r;
        }
        async getSigner(t) {
          null == t && (t = 0);
          const e = this.send("eth_accounts", []);
          if ("number" == typeof t) {
            const n = await e;
            if (t >= n.length) throw new Error("no such account");
            return new da(this, n[t]);
          }
          const { accounts: n } = await (0, B.m)({
            network: this.getNetwork(),
            accounts: e,
          });
          t = (0, b.K)(t);
          for (const e of n) if ((0, b.K)(e) === t) return new da(this, t);
          throw new Error("invalid account");
        }
        async listAccounts() {
          return (await this.send("eth_accounts", [])).map(
            (t) => new da(this, t),
          );
        }
        destroy() {
          this.#Qt && (clearTimeout(this.#Qt), (this.#Qt = null));
          for (const { payload: t, reject: e } of this.#Vt)
            e(
              (0, A.wf)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: t.method },
              ),
            );
          (this.#Vt = []), super.destroy();
        }
      }
      class ga extends pa {
        #Zt;
        constructor(t, e) {
          super(t, e), (this.#Zt = 4e3);
        }
        _getSubscriber(t) {
          const e = super._getSubscriber(t);
          return ha(e) && (e.pollingInterval = this.#Zt), e;
        }
        get pollingInterval() {
          return this.#Zt;
        }
        set pollingInterval(t) {
          if (!Number.isInteger(t) || t < 0)
            throw new Error("invalid interval");
          (this.#Zt = t),
            this._forEachSubscriber((t) => {
              ha(t) && (t.pollingInterval = this.#Zt);
            });
        }
      }
      class ma extends ga {
        #qt;
        constructor(t, e, n) {
          null == t && (t = "http://localhost:8545"),
            super(e, n),
            (this.#qt = "string" == typeof t ? new Cs(t) : t.clone());
        }
        _getConnection() {
          return this.#qt.clone();
        }
        async send(t, e) {
          return await this._start(), await super.send(t, e);
        }
        async _send(t) {
          const e = this._getConnection();
          (e.body = JSON.stringify(t)),
            e.setHeader("content-type", "application/json");
          const n = await e.send();
          n.assertOk();
          let r = n.bodyJson;
          return Array.isArray(r) || (r = [r]), r;
        }
      }
      function ya(t) {
        if (null == t) return null;
        if (
          "string" == typeof t.message &&
          t.message.match(/revert/i) &&
          (0, i.A7)(t.data)
        )
          return { message: t.message, data: t.data };
        if ("object" == typeof t) {
          for (const e in t) {
            const n = ya(t[e]);
            if (n) return n;
          }
          return null;
        }
        if ("string" == typeof t)
          try {
            return ya(JSON.parse(t));
          } catch (t) {}
        return null;
      }
      function wa(t, e) {
        if (null != t) {
          if (
            ("string" == typeof t.message && e.push(t.message),
            "object" == typeof t)
          )
            for (const n in t) wa(t[n], e);
          if ("string" == typeof t)
            try {
              return wa(JSON.parse(t), e);
            } catch (t) {}
        }
      }
      const Aa =
        "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      class ba extends ma {
        apiKey;
        constructor(t, e) {
          null == t && (t = "mainnet");
          const n = Fs.from(t);
          null == e && (e = Aa);
          const r = { polling: !0, staticNetwork: n };
          super(ba.getRequest(n, e), n, r), (0, B.h)(this, { apiKey: e });
        }
        _getProvider(t) {
          try {
            return new ba(t, this.apiKey);
          } catch (t) {}
          return super._getProvider(t);
        }
        static getRequest(t, e) {
          null == e && (e = Aa);
          const n = new Cs(
            `https://${(function (t) {
              switch (t) {
                case "mainnet":
                  return "rpc.ankr.com/eth";
                case "goerli":
                  return "rpc.ankr.com/eth_goerli";
                case "matic":
                  return "rpc.ankr.com/polygon";
                case "arbitrum":
                  return "rpc.ankr.com/arbitrum";
              }
              (0, A.en)(!1, "unsupported network", "network", t);
            })(t.name)}/${e}`,
          );
          return (
            (n.allowGzip = !0),
            e === Aa &&
              (n.retryFunc = async (t, e, n) => (Rs("AnkrProvider"), !0)),
            n
          );
        }
        getRpcError(t, e) {
          return (
            "eth_sendRawTransaction" === t.method &&
              e &&
              e.error &&
              "INTERNAL_ERROR: could not replace existing tx" ===
                e.error.message &&
              (e.error.message = "replacement transaction underpriced"),
            super.getRpcError(t, e)
          );
        }
        isCommunityResource() {
          return this.apiKey === Aa;
        }
      }
      const va = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class Ea extends ma {
        apiKey;
        constructor(t, e) {
          null == t && (t = "mainnet");
          const n = Fs.from(t);
          null == e && (e = va),
            super(Ea.getRequest(n, e), n, { staticNetwork: n }),
            (0, B.h)(this, { apiKey: e });
        }
        _getProvider(t) {
          try {
            return new Ea(t, this.apiKey);
          } catch (t) {}
          return super._getProvider(t);
        }
        async _perform(t) {
          if ("getTransactionResult" === t.method) {
            const { trace: e, tx: n } = await (0, B.m)({
              trace: this.send("trace_transaction", [t.hash]),
              tx: this.getTransaction(t.hash),
            });
            if (null == e || null == n) return null;
            let r,
              s = !1;
            try {
              (r = e[0].result.output), (s = "Reverted" === e[0].error);
            } catch (t) {}
            if (r)
              return (
                (0, A.hu)(
                  !s,
                  "an error occurred during transaction executions",
                  "CALL_EXCEPTION",
                  {
                    action: "getTransactionResult",
                    data: r,
                    reason: null,
                    transaction: n,
                    invocation: null,
                    revert: null,
                  },
                ),
                r
              );
            (0, A.hu)(!1, "could not parse trace result", "BAD_DATA", {
              value: e,
            });
          }
          return await super._perform(t);
        }
        isCommunityResource() {
          return this.apiKey === va;
        }
        static getRequest(t, e) {
          null == e && (e = va);
          const n = new Cs(
            `https://${(function (t) {
              switch (t) {
                case "mainnet":
                  return "eth-mainnet.alchemyapi.io";
                case "goerli":
                  return "eth-goerli.g.alchemy.com";
                case "sepolia":
                  return "eth-sepolia.g.alchemy.com";
                case "arbitrum":
                  return "arb-mainnet.g.alchemy.com";
                case "arbitrum-goerli":
                  return "arb-goerli.g.alchemy.com";
                case "matic":
                  return "polygon-mainnet.g.alchemy.com";
                case "matic-mumbai":
                  return "polygon-mumbai.g.alchemy.com";
                case "optimism":
                  return "opt-mainnet.g.alchemy.com";
                case "optimism-goerli":
                  return "opt-goerli.g.alchemy.com";
              }
              (0, A.en)(!1, "unsupported network", "network", t);
            })(t.name)}/v2/${e}`,
          );
          return (
            (n.allowGzip = !0),
            e === va && (n.retryFunc = async (t, e, n) => (Rs("alchemy"), !0)),
            n
          );
        }
      }
      class Pa extends ma {
        constructor(t) {
          null == t && (t = "mainnet");
          const e = Fs.from(t);
          (0, A.en)("mainnet" === e.name, "unsupported network", "network", t),
            super("https://cloudflare-eth.com/", e, { staticNetwork: e });
        }
      }
      const ka = "org.ethers.plugins.provider.Etherscan";
      class Na extends Ss {
        baseUrl;
        constructor(t) {
          super(ka), (0, B.h)(this, { baseUrl: t });
        }
        clone() {
          return new Na(this.baseUrl);
        }
      }
      const Ca = ["enableCcipRead"];
      let Ta = 1;
      class Ia extends zi {
        network;
        apiKey;
        #Wt;
        constructor(t, e) {
          const n = null != e ? e : null;
          super();
          const r = Fs.from(t);
          (this.#Wt = r.getPlugin(ka)),
            (0, B.h)(this, { apiKey: n, network: r }),
            this.getBaseUrl();
        }
        getBaseUrl() {
          if (this.#Wt) return this.#Wt.baseUrl;
          switch (this.network.name) {
            case "mainnet":
              return "https://api.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "sepolia":
              return "https://api-sepolia.etherscan.io";
            case "arbitrum":
              return "https://api.arbiscan.io";
            case "arbitrum-goerli":
              return "https://api-goerli.arbiscan.io";
            case "matic":
              return "https://api.polygonscan.com";
            case "matic-mumbai":
              return "https://api-testnet.polygonscan.com";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-goerli":
              return "https://api-goerli-optimistic.etherscan.io";
          }
          (0, A.en)(!1, "unsupported network", "network", this.network);
        }
        getUrl(t, e) {
          const n = Object.keys(e).reduce((t, n) => {
              const r = e[n];
              return null != r && (t += `&${n}=${r}`), t;
            }, ""),
            r = this.apiKey ? `&apikey=${this.apiKey}` : "";
          return `${this.getBaseUrl()}/api?module=${t}${n}${r}`;
        }
        getPostUrl() {
          return `${this.getBaseUrl()}/api`;
        }
        getPostData(t, e) {
          return (e.module = t), (e.apikey = this.apiKey), e;
        }
        async detectNetwork() {
          return this.network;
        }
        async fetch(t, e, n) {
          const r = Ta++,
            i = n ? this.getPostUrl() : this.getUrl(t, e),
            a = n ? this.getPostData(t, e) : null;
          this.emit("debug", {
            action: "sendRequest",
            id: r,
            url: i,
            payload: a,
          });
          const o = new Cs(i);
          o.setThrottleParams({ slotInterval: 1e3 }),
            (o.retryFunc = (t, e, n) => (
              this.isCommunityResource() && Rs("Etherscan"), Promise.resolve(!0)
            )),
            (o.processFunc = async (e, n) => {
              const i = n.hasBody() ? JSON.parse((0, s.ZN)(n.body)) : {},
                a =
                  ("string" == typeof i.result ? i.result : "")
                    .toLowerCase()
                    .indexOf("rate limit") >= 0;
              return (
                "proxy" === t
                  ? i &&
                    0 == i.status &&
                    "NOTOK" == i.message &&
                    a &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: r,
                      reason: "proxy-NOTOK",
                      error: i,
                    }),
                    n.throwThrottleError(i.result, 2e3))
                  : a &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: r,
                      reason: "null result",
                      error: i.result,
                    }),
                    n.throwThrottleError(i.result, 2e3)),
                n
              );
            }),
            a &&
              (o.setHeader(
                "content-type",
                "application/x-www-form-urlencoded; charset=UTF-8",
              ),
              (o.body = Object.keys(a)
                .map((t) => `${t}=${a[t]}`)
                .join("&")));
          const c = await o.send();
          try {
            c.assertOk();
          } catch (t) {
            this.emit("debug", {
              action: "receiveError",
              id: r,
              error: t,
              reason: "assertOk",
            }),
              (0, A.hu)(!1, "response error", "SERVER_ERROR", {
                request: o,
                response: c,
              });
          }
          c.hasBody() ||
            (this.emit("debug", {
              action: "receiveError",
              id: r,
              error: "missing body",
              reason: "null body",
            }),
            (0, A.hu)(!1, "missing response", "SERVER_ERROR", {
              request: o,
              response: c,
            }));
          const u = JSON.parse((0, s.ZN)(c.body));
          return "proxy" === t
            ? ("2.0" != u.jsonrpc &&
                (this.emit("debug", {
                  action: "receiveError",
                  id: r,
                  result: u,
                  reason: "invalid JSON-RPC",
                }),
                (0, A.hu)(
                  !1,
                  "invalid JSON-RPC response (missing jsonrpc='2.0')",
                  "SERVER_ERROR",
                  { request: o, response: c, info: { result: u } },
                )),
              u.error &&
                (this.emit("debug", {
                  action: "receiveError",
                  id: r,
                  result: u,
                  reason: "JSON-RPC error",
                }),
                (0, A.hu)(!1, "error response", "SERVER_ERROR", {
                  request: o,
                  response: c,
                  info: { result: u },
                })),
              this.emit("debug", {
                action: "receiveRequest",
                id: r,
                result: u,
              }),
              u.result)
            : 0 != u.status ||
              ("No records found" !== u.message &&
                "No transactions found" !== u.message)
            ? ((1 != u.status ||
                ("string" == typeof u.message && !u.message.match(/^OK/))) &&
                (this.emit("debug", {
                  action: "receiveError",
                  id: r,
                  result: u,
                }),
                (0, A.hu)(!1, "error response", "SERVER_ERROR", {
                  request: o,
                  response: c,
                  info: { result: u },
                })),
              this.emit("debug", {
                action: "receiveRequest",
                id: r,
                result: u,
              }),
              u.result)
            : (this.emit("debug", {
                action: "receiveRequest",
                id: r,
                result: u,
              }),
              u.result);
        }
        _getTransactionPostData(t) {
          const e = {};
          for (let n in t) {
            if (Ca.indexOf(n) >= 0) continue;
            if (null == t[n]) continue;
            let r = t[n];
            ("type" === n && 0 === r) ||
              ((r = {
                type: !0,
                gasLimit: !0,
                gasPrice: !0,
                maxFeePerGs: !0,
                maxPriorityFeePerGas: !0,
                nonce: !0,
                value: !0,
              }[n]
                ? (0, p.B4)(r)
                : "accessList" === n
                ? "[" +
                  (0, Os.z)(r)
                    .map(
                      (t) =>
                        `{address:"${
                          t.address
                        }",storageKeys:["${t.storageKeys.join('","')}"]}`,
                    )
                    .join(",") +
                  "]"
                : (0, i.Dv)(r)),
              (e[n] = r));
          }
          return e;
        }
        _checkError(t, e, n) {
          let r = "";
          if ((0, A.VZ)(e, "SERVER_ERROR")) {
            try {
              r = e.info.result.error.message;
            } catch (t) {}
            if (!r)
              try {
                r = e.info.message;
              } catch (t) {}
          }
          if (
            ("estimateGas" === t.method &&
              !r.match(/revert/i) &&
              r.match(/insufficient funds/i) &&
              (0, A.hu)(!1, "insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: t.transaction,
              }),
            ("call" === t.method || "estimateGas" === t.method) &&
              r.match(/execution reverted/i))
          ) {
            let n = "";
            try {
              n = e.info.result.error.data;
            } catch (e) {}
            const r = c.R.getBuiltinCallException(t.method, t.transaction, n);
            throw ((r.info = { request: t, error: e }), r);
          }
          if (r && "broadcastTransaction" === t.method) {
            const e = ai.from(t.signedTransaction);
            r.match(/replacement/i) &&
              r.match(/underpriced/i) &&
              (0, A.hu)(
                !1,
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: e },
              ),
              r.match(/insufficient funds/) &&
                (0, A.hu)(
                  !1,
                  "insufficient funds for intrinsic transaction cost",
                  "INSUFFICIENT_FUNDS",
                  { transaction: e },
                ),
              r.match(
                /same hash was already imported|transaction nonce is too low|nonce too low/,
              ) &&
                (0, A.hu)(!1, "nonce has already been used", "NONCE_EXPIRED", {
                  transaction: e,
                });
          }
          throw e;
        }
        async _detectNetwork() {
          return this.network;
        }
        async _perform(t) {
          switch (t.method) {
            case "chainId":
              return this.network.chainId;
            case "getBlockNumber":
              return this.fetch("proxy", { action: "eth_blockNumber" });
            case "getGasPrice":
              return this.fetch("proxy", { action: "eth_gasPrice" });
            case "getBalance":
              return this.fetch("account", {
                action: "balance",
                address: t.address,
                tag: t.blockTag,
              });
            case "getTransactionCount":
              return this.fetch("proxy", {
                action: "eth_getTransactionCount",
                address: t.address,
                tag: t.blockTag,
              });
            case "getCode":
              return this.fetch("proxy", {
                action: "eth_getCode",
                address: t.address,
                tag: t.blockTag,
              });
            case "getStorage":
              return this.fetch("proxy", {
                action: "eth_getStorageAt",
                address: t.address,
                position: t.position,
                tag: t.blockTag,
              });
            case "broadcastTransaction":
              return this.fetch(
                "proxy",
                { action: "eth_sendRawTransaction", hex: t.signedTransaction },
                !0,
              ).catch((e) => this._checkError(t, e, t.signedTransaction));
            case "getBlock":
              if ("blockTag" in t)
                return this.fetch("proxy", {
                  action: "eth_getBlockByNumber",
                  tag: t.blockTag,
                  boolean: t.includeTransactions ? "true" : "false",
                });
              (0, A.hu)(
                !1,
                "getBlock by blockHash not supported by Etherscan",
                "UNSUPPORTED_OPERATION",
                { operation: "getBlock(blockHash)" },
              );
            case "getTransaction":
              return this.fetch("proxy", {
                action: "eth_getTransactionByHash",
                txhash: t.hash,
              });
            case "getTransactionReceipt":
              return this.fetch("proxy", {
                action: "eth_getTransactionReceipt",
                txhash: t.hash,
              });
            case "call": {
              if ("latest" !== t.blockTag)
                throw new Error(
                  "EtherscanProvider does not support blockTag for call",
                );
              const e = this._getTransactionPostData(t.transaction);
              (e.module = "proxy"), (e.action = "eth_call");
              try {
                return await this.fetch("proxy", e, !0);
              } catch (e) {
                return this._checkError(t, e, t.transaction);
              }
            }
            case "estimateGas": {
              const e = this._getTransactionPostData(t.transaction);
              (e.module = "proxy"), (e.action = "eth_estimateGas");
              try {
                return await this.fetch("proxy", e, !0);
              } catch (e) {
                return this._checkError(t, e, t.transaction);
              }
            }
          }
          return super._perform(t);
        }
        async getNetwork() {
          return this.network;
        }
        async getEtherPrice() {
          return "mainnet" !== this.network.name
            ? 0
            : parseFloat(
                (await this.fetch("stats", { action: "ethprice" })).ethusd,
              );
        }
        async getContract(t) {
          let e = this._getAddress(t);
          var n;
          (n = e) && "function" == typeof n.then && (e = await e);
          try {
            const t = await this.fetch("contract", {
                action: "getabi",
                address: e,
              }),
              n = JSON.parse(t);
            return new D.CH(e, n, this);
          } catch (t) {
            return null;
          }
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
      }
      const xa = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object");
      })().WebSocket;
      class Ra {
        #dt;
        #y;
        get filter() {
          return JSON.parse(this.#y);
        }
        #Yt;
        #Xt;
        #$t;
        constructor(t, e) {
          (this.#dt = t),
            (this.#y = JSON.stringify(e)),
            (this.#Yt = null),
            (this.#Xt = null),
            (this.#$t = null);
        }
        start() {
          this.#Yt = this.#dt
            .send("eth_subscribe", this.filter)
            .then((t) => (this.#dt._register(t, this), t));
        }
        stop() {
          this.#Yt.then((t) => {
            this.#dt.send("eth_unsubscribe", [t]);
          }),
            (this.#Yt = null);
        }
        pause(t) {
          (0, A.hu)(
            t,
            "preserve logs while paused not supported by SocketSubscriber yet",
            "UNSUPPORTED_OPERATION",
            { operation: "pause(false)" },
          ),
            (this.#Xt = !!t);
        }
        resume() {
          this.#Xt = null;
        }
        _handleMessage(t) {
          if (null != this.#Yt && null === this.#Xt) {
            let e = this.#$t;
            (e =
              null == e
                ? this._emit(this.#dt, t)
                : e.then(async () => {
                    await this._emit(this.#dt, t);
                  })),
              (this.#$t = e.then(() => {
                this.#$t === e && (this.#$t = null);
              }));
          }
        }
        async _emit(t, e) {
          throw new Error("sub-classes must implemente this; _emit");
        }
      }
      class Oa extends Ra {
        constructor(t) {
          super(t, ["newHeads"]);
        }
        async _emit(t, e) {
          t.emit("block", parseInt(e.number));
        }
      }
      class Sa extends Ra {
        constructor(t) {
          super(t, ["newPendingTransactions"]);
        }
        async _emit(t, e) {
          t.emit("pending", e);
        }
      }
      class Ba extends Ra {
        #te;
        get logFilter() {
          return JSON.parse(this.#te);
        }
        constructor(t, e) {
          super(t, ["logs", e]), (this.#te = JSON.stringify(e));
        }
        async _emit(t, e) {
          t.emit(this.logFilter, t._wrapLog(e, t._network));
        }
      }
      class Da extends pa {
        #ee;
        #bt;
        #ne;
        constructor(t) {
          super(t, { batchMaxCount: 1 }),
            (this.#ee = new Map()),
            (this.#bt = new Map()),
            (this.#ne = new Map());
        }
        _getSubscriber(t) {
          switch (t.type) {
            case "close":
              return new ji("close");
            case "block":
              return new Oa(this);
            case "pending":
              return new Sa(this);
            case "event":
              return new Ba(this, t.filter);
            case "orphan":
              if ("drop-log" === t.filter.orphan) return new ji("drop-log");
          }
          return super._getSubscriber(t);
        }
        _register(t, e) {
          this.#bt.set(t, e);
          const n = this.#ne.get(t);
          if (n) {
            for (const t of n) e._handleMessage(t);
            this.#ne.delete(t);
          }
        }
        async _send(t) {
          (0, A.en)(
            !Array.isArray(t),
            "WebSocket does not support batch send",
            "payload",
            t,
          );
          const e = new Promise((e, n) => {
            this.#ee.set(t.id, { payload: t, resolve: e, reject: n });
          });
          return (
            await this._waitUntilReady(),
            await this._write(JSON.stringify(t)),
            [await e]
          );
        }
        async _processMessage(t) {
          const e = JSON.parse(t);
          if (e && "object" == typeof e && "id" in e) {
            const t = this.#ee.get(e.id);
            if (null == t)
              return void this.emit(
                "error",
                (0, A.wf)("received result for unknown id", "UNKNOWN_ERROR", {
                  reasonCode: "UNKNOWN_ID",
                  result: e,
                }),
              );
            this.#ee.delete(e.id), t.resolve(e);
          } else {
            if (!e || "eth_subscription" !== e.method)
              return void this.emit(
                "error",
                (0, A.wf)("received unexpected message", "UNKNOWN_ERROR", {
                  reasonCode: "UNEXPECTED_MESSAGE",
                  result: e,
                }),
              );
            {
              const t = e.params.subscription,
                n = this.#bt.get(t);
              if (n) n._handleMessage(e.params.result);
              else {
                let n = this.#ne.get(t);
                null == n && ((n = []), this.#ne.set(t, n)),
                  n.push(e.params.result);
              }
            }
          }
        }
        async _write(t) {
          throw new Error("sub-classes must override this");
        }
      }
      class Ua extends Da {
        #qt;
        #re;
        get websocket() {
          if (null == this.#re) throw new Error("websocket closed");
          return this.#re;
        }
        constructor(t, e) {
          super(e),
            "string" == typeof t
              ? ((this.#qt = () => new xa(t)), (this.#re = this.#qt()))
              : "function" == typeof t
              ? ((this.#qt = t), (this.#re = t()))
              : ((this.#qt = null), (this.#re = t)),
            (this.websocket.onopen = async () => {
              try {
                await this._start(), this.resume();
              } catch (t) {
                console.log("failed to start WebsocketProvider", t);
              }
            }),
            (this.websocket.onmessage = (t) => {
              this._processMessage(t.data);
            });
        }
        async _write(t) {
          this.websocket.send(t);
        }
        async destroy() {
          null != this.#re && (this.#re.close(), (this.#re = null)),
            super.destroy();
        }
      }
      const La = "84842078b09946638c03157f83405213";
      class Fa extends Ua {
        projectId;
        projectSecret;
        constructor(t, e) {
          const n = new Ma(t, e),
            r = n._getConnection();
          (0, A.hu)(
            !r.credentials,
            "INFURA WebSocket project secrets unsupported",
            "UNSUPPORTED_OPERATION",
            { operation: "InfuraProvider.getWebSocketProvider()" },
          ),
            super(r.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"), t),
            (0, B.h)(this, {
              projectId: n.projectId,
              projectSecret: n.projectSecret,
            });
        }
        isCommunityResource() {
          return this.projectId === La;
        }
      }
      class Ma extends ma {
        projectId;
        projectSecret;
        constructor(t, e, n) {
          null == t && (t = "mainnet");
          const r = Fs.from(t);
          null == e && (e = La),
            null == n && (n = null),
            super(Ma.getRequest(r, e, n), r, { staticNetwork: r }),
            (0, B.h)(this, { projectId: e, projectSecret: n });
        }
        _getProvider(t) {
          try {
            return new Ma(t, this.projectId, this.projectSecret);
          } catch (t) {}
          return super._getProvider(t);
        }
        isCommunityResource() {
          return this.projectId === La;
        }
        static getWebSocketProvider(t, e) {
          return new Fa(t, e);
        }
        static getRequest(t, e, n) {
          null == e && (e = La), null == n && (n = null);
          const r = new Cs(
            `https://${(function (t) {
              switch (t) {
                case "mainnet":
                  return "mainnet.infura.io";
                case "goerli":
                  return "goerli.infura.io";
                case "sepolia":
                  return "sepolia.infura.io";
                case "arbitrum":
                  return "arbitrum-mainnet.infura.io";
                case "arbitrum-goerli":
                  return "arbitrum-goerli.infura.io";
                case "matic":
                  return "polygon-mainnet.infura.io";
                case "matic-mumbai":
                  return "polygon-mumbai.infura.io";
                case "optimism":
                  return "optimism-mainnet.infura.io";
                case "optimism-goerli":
                  return "optimism-goerli.infura.io";
              }
              (0, A.en)(!1, "unsupported network", "network", t);
            })(t.name)}/v3/${e}`,
          );
          return (
            (r.allowGzip = !0),
            n && r.setCredentials("", n),
            e === La &&
              (r.retryFunc = async (t, e, n) => (Rs("InfuraProvider"), !0)),
            r
          );
        }
      }
      const Ga = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
      class Ka extends ma {
        token;
        constructor(t, e) {
          null == t && (t = "mainnet");
          const n = Fs.from(t);
          null == e && (e = Ga),
            super(Ka.getRequest(n, e), n, { staticNetwork: n }),
            (0, B.h)(this, { token: e });
        }
        _getProvider(t) {
          try {
            return new Ka(t, this.token);
          } catch (t) {}
          return super._getProvider(t);
        }
        isCommunityResource() {
          return this.token === Ga;
        }
        static getRequest(t, e) {
          null == e && (e = Ga);
          const n = new Cs(
            `https://${(function (t) {
              switch (t) {
                case "mainnet":
                  return "ethers.quiknode.pro";
                case "goerli":
                  return "ethers.ethereum-goerli.quiknode.pro";
                case "arbitrum":
                  return "ethers.arbitrum-mainnet.quiknode.pro";
                case "arbitrum-goerli":
                  return "ethers.arbitrum-goerli.quiknode.pro";
                case "matic":
                  return "ethers.matic.quiknode.pro";
                case "matic-mumbai":
                  return "ethers.matic-testnet.quiknode.pro";
                case "optimism":
                  return "ethers.optimism.quiknode.pro";
                case "optimism-goerli":
                  return "ethers.optimism-goerli.quiknode.pro";
              }
              (0, A.en)(!1, "unsupported network", "network", t);
            })(t.name)}/${e}`,
          );
          return (
            (n.allowGzip = !0),
            e === Ga &&
              (n.retryFunc = async (t, e, n) => (Rs("QuickNodeProvider"), !0)),
            n
          );
        }
      }
      const ja = BigInt("1"),
        Ha = BigInt("2");
      function _a() {
        return new Date().getTime();
      }
      function Va(t) {
        return JSON.stringify(t, (t, e) =>
          "bigint" == typeof e ? { type: "bigint", value: e.toString() } : e,
        );
      }
      const Qa = { stallTimeout: 400, priority: 1, weight: 1 },
        za = {
          blockNumber: -2,
          requests: 0,
          lateResponses: 0,
          errorResponses: 0,
          outOfSync: -1,
          unsupportedEvents: 0,
          rollingDuration: 0,
          score: 0,
          _network: null,
          _updateNumber: null,
          _totalTime: 0,
          _lastFatalError: null,
          _lastFatalErrorTimestamp: 0,
        };
      function Ja(t) {
        if (null == t) return "null";
        if (Array.isArray(t)) return "[" + t.map(Ja).join(",") + "]";
        if ("object" == typeof t && "function" == typeof t.toJSON)
          return Ja(t.toJSON());
        switch (typeof t) {
          case "boolean":
          case "symbol":
            return t.toString();
          case "bigint":
          case "number":
            return BigInt(t).toString();
          case "string":
            return JSON.stringify(t);
          case "object": {
            const e = Object.keys(t);
            return (
              e.sort(),
              "{" +
                e.map((e) => `${JSON.stringify(e)}:${Ja(t[e])}`).join(",") +
                "}"
            );
          }
        }
        throw (console.log("Could not serialize", t), new Error("Hmm..."));
      }
      function Za(t) {
        if ("error" in t) {
          const e = t.error;
          return { tag: Ja(e), value: e };
        }
        const e = t.result;
        return { tag: Ja(e), value: e };
      }
      function qa(t, e) {
        const n = new Map();
        for (const { value: t, tag: r, weight: s } of e) {
          const e = n.get(r) || { value: t, weight: 0 };
          (e.weight += s), n.set(r, e);
        }
        let r = null;
        for (const e of n.values())
          e.weight >= t && (!r || e.weight > r.weight) && (r = e);
        if (r) return r.value;
      }
      function Wa(t, e) {
        let n = 0;
        const r = new Map();
        let s = null;
        const i = [];
        for (const { value: t, tag: a, weight: o } of e)
          if (t instanceof Error) {
            const e = r.get(a) || { value: t, weight: 0 };
            (e.weight += o),
              r.set(a, e),
              (null == s || e.weight > s.weight) && (s = e);
          } else i.push(BigInt(t)), (n += o);
        if (n < t) return s && s.weight >= t ? s.value : void 0;
        i.sort((t, e) => (t < e ? -1 : e > t ? 1 : 0));
        const a = Math.floor(i.length / 2);
        return i.length % 2 ? i[a] : (i[a - 1] + i[a] + ja) / Ha;
      }
      function Ya(t, e) {
        const n = qa(t, e);
        if (void 0 !== n) return n;
        for (const t of e) if (t.value) return t.value;
      }
      class Xa extends zi {
        quorum;
        eventQuorum;
        eventWorkers;
        #se;
        #ie;
        #ae;
        constructor(t, e) {
          super(e),
            (this.#se = t.map((t) =>
              t instanceof zi
                ? Object.assign({ provider: t }, Qa, za)
                : Object.assign({}, Qa, t, za),
            )),
            (this.#ie = -2),
            (this.#ae = null),
            (this.quorum = 2),
            (this.eventQuorum = 1),
            (this.eventWorkers = 1),
            (0, A.en)(
              this.quorum <= this.#se.reduce((t, e) => t + e.weight, 0),
              "quorum exceed provider wieght",
              "quorum",
              this.quorum,
            );
        }
        get providerConfigs() {
          return this.#se.map((t) => {
            const e = Object.assign({}, t);
            for (const t in e) "_" === t[0] && delete e[t];
            return e;
          });
        }
        async _detectNetwork() {
          return Fs.from((0, p.yT)(await this._perform({ method: "chainId" })));
        }
        async _translatePerform(t, e) {
          switch (e.method) {
            case "broadcastTransaction":
              return await t.broadcastTransaction(e.signedTransaction);
            case "call":
              return await t.call(
                Object.assign({}, e.transaction, { blockTag: e.blockTag }),
              );
            case "chainId":
              return (await t.getNetwork()).chainId;
            case "estimateGas":
              return await t.estimateGas(e.transaction);
            case "getBalance":
              return await t.getBalance(e.address, e.blockTag);
            case "getBlock": {
              const n = "blockHash" in e ? e.blockHash : e.blockTag;
              return await t.getBlock(n, e.includeTransactions);
            }
            case "getBlockNumber":
              return await t.getBlockNumber();
            case "getCode":
              return await t.getCode(e.address, e.blockTag);
            case "getGasPrice":
              return (await t.getFeeData()).gasPrice;
            case "getLogs":
              return await t.getLogs(e.filter);
            case "getStorage":
              return await t.getStorage(e.address, e.position, e.blockTag);
            case "getTransaction":
              return await t.getTransaction(e.hash);
            case "getTransactionCount":
              return await t.getTransactionCount(e.address, e.blockTag);
            case "getTransactionReceipt":
              return await t.getTransactionReceipt(e.hash);
            case "getTransactionResult":
              return await t.getTransactionResult(e.hash);
          }
        }
        #oe(t) {
          const e = Array.from(t).map((t) => t.config),
            n = this.#se.slice();
          !(function (t) {
            for (let e = t.length - 1; e > 0; e--) {
              const n = Math.floor(Math.random() * (e + 1)),
                r = t[e];
              (t[e] = t[n]), (t[n] = r);
            }
          })(n),
            n.sort((t, e) => e.priority - t.priority);
          for (const t of n)
            if (!t._lastFatalError && -1 === e.indexOf(t)) return t;
          return null;
        }
        #ce(t, e) {
          const n = this.#oe(t);
          if (null == n) return null;
          const r = {
              config: n,
              result: null,
              didBump: !1,
              perform: null,
              staller: null,
            },
            s = _a();
          return (
            (r.perform = (async () => {
              try {
                n.requests++;
                const t = await this._translatePerform(n.provider, e);
                r.result = { result: t };
              } catch (t) {
                n.errorResponses++, (r.result = { error: t });
              }
              const t = _a() - s;
              (n._totalTime += t),
                (n.rollingDuration = 0.95 * n.rollingDuration + 0.05 * t),
                (r.perform = null);
            })()),
            (r.staller = (async () => {
              var t;
              await ((t = n.stallTimeout),
              new Promise((e) => {
                setTimeout(e, t);
              })),
                (r.staller = null);
            })()),
            t.add(r),
            r
          );
        }
        async #ue() {
          let t = this.#ae;
          if (!t) {
            const e = [];
            this.#se.forEach((t) => {
              e.push(
                (async () => {
                  await (async function (t, e) {
                    for (
                      ;
                      (t.blockNumber < 0 || t.blockNumber < 0) &&
                      (t._updateNumber ||
                        (t._updateNumber = (async () => {
                          try {
                            const e = await t.provider.getBlockNumber();
                            e > t.blockNumber && (t.blockNumber = e);
                          } catch (e) {
                            (t.blockNumber = -2),
                              (t._lastFatalError = e),
                              (t._lastFatalErrorTimestamp = _a());
                          }
                          t._updateNumber = null;
                        })()),
                      await t._updateNumber,
                      t.outOfSync++,
                      !t._lastFatalError);

                    );
                  })(t),
                    t._lastFatalError ||
                      (t._network = await t.provider.getNetwork());
                })(),
              );
            }),
              (this.#ae = t =
                (async () => {
                  await Promise.all(e);
                  let t = null;
                  for (const e of this.#se) {
                    if (e._lastFatalError) continue;
                    const n = e._network;
                    null == t
                      ? (t = n.chainId)
                      : n.chainId !== t &&
                        (0, A.hu)(
                          !1,
                          "cannot mix providers on different networks",
                          "UNSUPPORTED_OPERATION",
                          { operation: "new FallbackProvider" },
                        );
                  }
                })());
          }
          await t;
        }
        async #le(t, e) {
          const n = [];
          for (const e of t)
            if (null != e.result) {
              const { tag: t, value: r } = Za(e.result);
              n.push({ tag: t, value: r, weight: e.config.weight });
            }
          if (!(n.reduce((t, e) => t + e.weight, 0) < this.quorum)) {
            switch (e.method) {
              case "getBlockNumber": {
                -2 === this.#ie &&
                  (this.#ie = Math.ceil(
                    (0, p.Dx)(
                      Wa(
                        this.quorum,
                        this.#se
                          .filter((t) => !t._lastFatalError)
                          .map((t) => ({
                            value: t.blockNumber,
                            tag: (0, p.Dx)(t.blockNumber).toString(),
                            weight: t.weight,
                          })),
                      ),
                    ),
                  ));
                const t = (function (t, e) {
                  if (1 === t) return (0, p.Dx)(Wa(t, e), "%internal");
                  const n = new Map(),
                    r = (t, e) => {
                      const r = n.get(t) || { result: t, weight: 0 };
                      (r.weight += e), n.set(t, r);
                    };
                  for (const { weight: t, value: n } of e) {
                    const e = (0, p.Dx)(n);
                    r(e - 1, t), r(e, t), r(e + 1, t);
                  }
                  let s,
                    i = 0;
                  for (const { weight: e, result: r } of n.values())
                    e >= t &&
                      (e > i || (null != s && e === i && r > s)) &&
                      ((i = e), (s = r));
                  return s;
                })(this.quorum, n);
                if (void 0 === t) return;
                return t > this.#ie && (this.#ie = t), this.#ie;
              }
              case "getGasPrice":
              case "estimateGas":
                return Wa(this.quorum, n);
              case "getBlock":
                return "blockTag" in e && "pending" === e.blockTag
                  ? Ya(this.quorum, n)
                  : qa(this.quorum, n);
              case "call":
              case "chainId":
              case "getBalance":
              case "getTransactionCount":
              case "getCode":
              case "getStorage":
              case "getTransaction":
              case "getTransactionReceipt":
              case "getLogs":
                return qa(this.quorum, n);
              case "broadcastTransaction":
                return Ya(this.quorum, n);
            }
            (0, A.hu)(!1, "unsupported method", "UNSUPPORTED_OPERATION", {
              operation: `_perform(${Va(e.method)})`,
            });
          }
        }
        async #he(t, e) {
          if (0 === t.size) throw new Error("no runners?!");
          const n = [];
          let r = 0;
          for (const e of t)
            e.perform && n.push(e.perform),
              e.staller
                ? n.push(e.staller)
                : e.didBump || ((e.didBump = !0), r++);
          const s = await this.#le(t, e);
          if (void 0 !== s) {
            if (s instanceof Error) throw s;
            return s;
          }
          for (let n = 0; n < r; n++) this.#ce(t, e);
          return (
            (0, A.hu)(n.length > 0, "quorum not met", "SERVER_ERROR", {
              request: "%sub-requests",
              info: {
                request: e,
                results: Array.from(t).map((t) => Va(t.result)),
              },
            }),
            await Promise.race(n),
            await this.#he(t, e)
          );
        }
        async _perform(t) {
          if ("broadcastTransaction" === t.method) {
            const e = await Promise.all(
                this.#se.map(async ({ provider: e, weight: n }) => {
                  try {
                    const r = await e._perform(t);
                    return Object.assign(Za({ result: r }), { weight: n });
                  } catch (t) {
                    return Object.assign(Za({ error: t }), { weight: n });
                  }
                }),
              ),
              n = Ya(this.quorum, e);
            if (
              ((0, A.hu)(
                void 0 !== n,
                "problem multi-broadcasting",
                "SERVER_ERROR",
                {
                  request: "%sub-requests",
                  info: { request: t, results: e.map(Va) },
                },
              ),
              n instanceof Error)
            )
              throw n;
            return n;
          }
          await this.#ue();
          const e = new Set();
          for (let n = 0; n < this.quorum; n++) this.#ce(e, t);
          const n = await this.#he(e, t);
          for (const t of e)
            t.perform && null == t.result && t.config.lateResponses++;
          return n;
        }
        async destroy() {
          for (const { provider: t } of this.#se) t.destroy();
          super.destroy();
        }
      }
      function $a(t, e) {
        if (
          (null == e && (e = {}), "string" == typeof t && t.match(/^https?:/))
        )
          return new ma(t);
        if (
          ("string" == typeof t && t.match(/^wss?:/)) ||
          ((n = t) &&
            "function" == typeof n.send &&
            "function" == typeof n.close)
        )
          return new Ua(t);
        var n;
        const r = [];
        if ("-" !== e.alchemy)
          try {
            r.push(new Ea(t, e.alchemy));
          } catch (t) {}
        if ("-" !== e.ankr && null != e.ankr)
          try {
            r.push(new ba(t, e.ankr));
          } catch (t) {}
        if ("-" !== e.cloudflare)
          try {
            r.push(new Pa(t));
          } catch (t) {}
        if ("-" !== e.etherscan)
          try {
            r.push(new Ia(t, e.etherscan));
          } catch (t) {}
        if ("-" !== e.infura)
          try {
            let n,
              s = e.infura;
            "object" == typeof s && ((n = s.projectSecret), (s = s.projectId)),
              r.push(new Ma(t, s, n));
          } catch (t) {}
        if ("-" !== e.quicknode)
          try {
            let n = e.quicknode;
            r.push(new Ka(t, n));
          } catch (t) {}
        return (
          (0, A.hu)(
            r.length,
            "unsupported default network",
            "UNSUPPORTED_OPERATION",
            { operation: "getDefaultProvider" },
          ),
          1 === r.length ? r[0] : new Xa(r)
        );
      }
      class to extends na {
        signer;
        #fe;
        #de;
        constructor(t) {
          super(t.provider),
            (0, B.h)(this, { signer: t }),
            (this.#fe = null),
            (this.#de = 0);
        }
        async getAddress() {
          return this.signer.getAddress();
        }
        connect(t) {
          return new to(this.signer.connect(t));
        }
        async getNonce(t) {
          if ("pending" === t) {
            null == this.#fe && (this.#fe = super.getNonce("pending"));
            const t = this.#de;
            return (await this.#fe) + t;
          }
          return super.getNonce(t);
        }
        increment() {
          this.#de++;
        }
        reset() {
          (this.#de = 0), (this.#fe = null);
        }
        async sendTransaction(t) {
          const e = this.getNonce("pending");
          return (
            this.increment(),
            ((t = await this.signer.populateTransaction(t)).nonce = await e),
            await this.signer.sendTransaction(t)
          );
        }
        signTransaction(t) {
          return this.signer.signTransaction(t);
        }
        signMessage(t) {
          return this.signer.signMessage(t);
        }
        signTypedData(t, e, n) {
          return this.signer.signTypedData(t, e, n);
        }
      }
      class eo extends ga {
        #J;
        constructor(t, e) {
          super(e, { batchMaxCount: 1 }),
            (this.#J = async (e, n) => {
              const r = { method: e, params: n };
              this.emit("debug", { action: "sendEip1193Request", payload: r });
              try {
                const e = await t.request(r);
                return (
                  this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: e,
                  }),
                  e
                );
              } catch (t) {
                const e = new Error(t.message);
                throw (
                  ((e.code = t.code),
                  (e.data = t.data),
                  (e.payload = r),
                  this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: e,
                  }),
                  e)
                );
              }
            });
        }
        async send(t, e) {
          return await this._start(), await super.send(t, e);
        }
        async _send(t) {
          (0, A.en)(
            !Array.isArray(t),
            "EIP-1193 does not support batch request",
            "payload",
            t,
          );
          try {
            const e = await this.#J(t.method, t.params || []);
            return [{ id: t.id, result: e }];
          } catch (e) {
            return [
              {
                id: t.id,
                error: { code: e.code, data: e.data, message: e.message },
              },
            ];
          }
        }
        getRpcError(t, e) {
          switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
            case 4001:
              e.error.message = `ethers-user-denied: ${e.error.message}`;
              break;
            case 4200:
              e.error.message = `ethers-unsupported: ${e.error.message}`;
          }
          return super.getRpcError(t, e);
        }
        async hasSigner(t) {
          null == t && (t = 0);
          const e = await this.send("eth_accounts", []);
          return "number" == typeof t
            ? e.length > t
            : ((t = t.toLowerCase()),
              0 !== e.filter((e) => e.toLowerCase() === t).length);
        }
        async getSigner(t) {
          if ((null == t && (t = 0), !(await this.hasSigner(t))))
            try {
              await this.#J("eth_requestAccounts", []);
            } catch (t) {
              const e = t.payload;
              throw this.getRpcError(e, { id: e.id, error: t });
            }
          return await super.getSigner(t);
        }
      }
      const no = "62e1ad51b37b8e00394bda3b";
      class ro extends ma {
        applicationId;
        applicationSecret;
        constructor(t, e, n) {
          null == t && (t = "mainnet");
          const r = Fs.from(t);
          null == e && (e = no), null == n && (n = null);
          const s = { staticNetwork: r };
          super(ro.getRequest(r, e, n), r, s),
            (0, B.h)(this, { applicationId: e, applicationSecret: n });
        }
        _getProvider(t) {
          try {
            return new ro(t, this.applicationId, this.applicationSecret);
          } catch (t) {}
          return super._getProvider(t);
        }
        static getRequest(t, e, n) {
          null == e && (e = no);
          const r = new Cs(
            `https://${(function (t) {
              switch (t) {
                case "mainnet":
                  return "eth-mainnet.gateway.pokt.network";
                case "goerli":
                  return "eth-goerli.gateway.pokt.network";
                case "matic":
                  return "poly-mainnet.gateway.pokt.network";
                case "matic-mumbai":
                  return "polygon-mumbai-rpc.gateway.pokt.network";
              }
              (0, A.en)(!1, "unsupported network", "network", t);
            })(t.name)}/v1/lb/${e}`,
          );
          return (
            (r.allowGzip = !0),
            n && r.setCredentials("", n),
            e === no &&
              (r.retryFunc = async (t, e, n) => (Rs("PocketProvider"), !0)),
            r
          );
        }
        isCommunityResource() {
          return this.applicationId === no;
        }
      }
      const so = void 0,
        io = BigInt(-1),
        ao = BigInt(0),
        oo = BigInt(1),
        co = BigInt(5),
        uo = {};
      let lo = "0000";
      for (; lo.length < 80; ) lo += lo;
      function ho(t) {
        let e = lo;
        for (; e.length < t; ) e += e;
        return BigInt("1" + e.substring(0, t));
      }
      function fo(t, e, n) {
        const r = BigInt(e.width);
        if (e.signed) {
          const e = oo << (r - oo);
          (0, A.hu)(
            null == n || (t >= -e && t < e),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: t },
          ),
            (t =
              t > ao
                ? (0, p._Y)((0, p.sS)(t, r), r)
                : -(0, p._Y)((0, p.sS)(-t, r), r));
        } else {
          const e = oo << r;
          (0, A.hu)(
            null == n || (t >= 0 && t < e),
            "overflow",
            "NUMERIC_FAULT",
            { operation: n, fault: "overflow", value: t },
          ),
            (t = ((t % e) + e) % e & (e - oo));
        }
        return t;
      }
      function po(t) {
        "number" == typeof t && (t = `fixed128x${t}`);
        let e = !0,
          n = 128,
          r = 18;
        if ("string" == typeof t)
          if ("fixed" === t);
          else if ("ufixed" === t) e = !1;
          else {
            const s = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            (0, A.en)(s, "invalid fixed format", "format", t),
              (e = "u" !== s[1]),
              (n = parseInt(s[2])),
              (r = parseInt(s[3]));
          }
        else if (t) {
          const s = t,
            i = (t, e, n) =>
              null == s[t]
                ? n
                : ((0, A.en)(
                    typeof s[t] === e,
                    "invalid fixed format (" + t + " not " + e + ")",
                    "format." + t,
                    s[t],
                  ),
                  s[t]);
          (e = i("signed", "boolean", e)),
            (n = i("width", "number", n)),
            (r = i("decimals", "number", r));
        }
        return (
          (0, A.en)(
            n % 8 == 0,
            "invalid FixedNumber width (not byte aligned)",
            "format.width",
            n,
          ),
          (0, A.en)(
            r <= 80,
            "invalid FixedNumber decimals (too large)",
            "format.decimals",
            r,
          ),
          {
            signed: e,
            width: n,
            decimals: r,
            name: (e ? "" : "u") + "fixed" + String(n) + "x" + String(r),
          }
        );
      }
      class go {
        format;
        #pe;
        #ge;
        #me;
        _value;
        constructor(t, e, n) {
          (0, A.NK)(t, uo, "FixedNumber"), (this.#ge = e), (this.#pe = n);
          const r = (function (t, e) {
            let n = "";
            t < ao && ((n = "-"), (t *= io));
            let r = t.toString();
            if (0 === e) return n + r;
            for (; r.length <= e; ) r = lo + r;
            const s = r.length - e;
            for (
              r = r.substring(0, s) + "." + r.substring(s);
              "0" === r[0] && "." !== r[1];

            )
              r = r.substring(1);
            for (; "0" === r[r.length - 1] && "." !== r[r.length - 2]; )
              r = r.substring(0, r.length - 1);
            return n + r;
          })(e, n.decimals);
          (0, B.h)(this, { format: n.name, _value: r }),
            (this.#me = ho(n.decimals));
        }
        get signed() {
          return this.#pe.signed;
        }
        get width() {
          return this.#pe.width;
        }
        get decimals() {
          return this.#pe.decimals;
        }
        get value() {
          return this.#ge;
        }
        #ye(t) {
          (0, A.en)(
            this.format === t.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            t,
          );
        }
        #we(t, e) {
          return (t = fo(t, this.#pe, e)), new go(uo, t, this.#pe);
        }
        #Ae(t, e) {
          return this.#ye(t), this.#we(this.#ge + t.#ge, e);
        }
        addUnsafe(t) {
          return this.#Ae(t);
        }
        add(t) {
          return this.#Ae(t, "add");
        }
        #be(t, e) {
          return this.#ye(t), this.#we(this.#ge - t.#ge, e);
        }
        subUnsafe(t) {
          return this.#be(t);
        }
        sub(t) {
          return this.#be(t, "sub");
        }
        #ve(t, e) {
          return this.#ye(t), this.#we((this.#ge * t.#ge) / this.#me, e);
        }
        mulUnsafe(t) {
          return this.#ve(t);
        }
        mul(t) {
          return this.#ve(t, "mul");
        }
        mulSignal(t) {
          this.#ye(t);
          const e = this.#ge * t.#ge;
          return (
            (0, A.hu)(
              e % this.#me === ao,
              "precision lost during signalling mul",
              "NUMERIC_FAULT",
              { operation: "mulSignal", fault: "underflow", value: this },
            ),
            this.#we(e / this.#me, "mulSignal")
          );
        }
        #Ee(t, e) {
          return (
            (0, A.hu)(t.#ge !== ao, "division by zero", "NUMERIC_FAULT", {
              operation: "div",
              fault: "divide-by-zero",
              value: this,
            }),
            this.#ye(t),
            this.#we((this.#ge * this.#me) / t.#ge, e)
          );
        }
        divUnsafe(t) {
          return this.#Ee(t);
        }
        div(t) {
          return this.#Ee(t, "div");
        }
        divSignal(t) {
          (0, A.hu)(t.#ge !== ao, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this,
          }),
            this.#ye(t);
          const e = this.#ge * this.#me;
          return (
            (0, A.hu)(
              e % t.#ge === ao,
              "precision lost during signalling div",
              "NUMERIC_FAULT",
              { operation: "divSignal", fault: "underflow", value: this },
            ),
            this.#we(e / t.#ge, "divSignal")
          );
        }
        cmp(t) {
          let e = this.value,
            n = t.value;
          const r = this.decimals - t.decimals;
          return (
            r > 0 ? (n *= ho(r)) : r < 0 && (e *= ho(-r)),
            e < n ? -1 : e > n ? 1 : 0
          );
        }
        eq(t) {
          return 0 === this.cmp(t);
        }
        lt(t) {
          return this.cmp(t) < 0;
        }
        lte(t) {
          return this.cmp(t) <= 0;
        }
        gt(t) {
          return this.cmp(t) > 0;
        }
        gte(t) {
          return this.cmp(t) >= 0;
        }
        floor() {
          let t = this.#ge;
          return (
            this.#ge < ao && (t -= this.#me - oo),
            (t = (this.#ge / this.#me) * this.#me),
            this.#we(t, "floor")
          );
        }
        ceiling() {
          let t = this.#ge;
          return (
            this.#ge > ao && (t += this.#me - oo),
            (t = (this.#ge / this.#me) * this.#me),
            this.#we(t, "ceiling")
          );
        }
        round(t) {
          if ((null == t && (t = 0), t >= this.decimals)) return this;
          const e = this.decimals - t,
            n = co * ho(e - 1);
          let r = this.value + n;
          const s = ho(e);
          return (
            (r = (r / s) * s), fo(r, this.#pe, "round"), new go(uo, r, this.#pe)
          );
        }
        isZero() {
          return this.#ge === ao;
        }
        isNegative() {
          return this.#ge < ao;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return go.fromString(this.toString(), t);
        }
        static fromValue(t, e, n) {
          const r = null == e ? 0 : (0, p.Dx)(e),
            s = po(n);
          let i = (0, p.yT)(t, "value");
          const a = r - s.decimals;
          if (a > 0) {
            const e = ho(a);
            (0, A.hu)(
              i % e === ao,
              "value loses precision for format",
              "NUMERIC_FAULT",
              { operation: "fromValue", fault: "underflow", value: t },
            ),
              (i /= e);
          } else a < 0 && (i *= ho(-a));
          return fo(i, s, "fromValue"), new go(uo, i, s);
        }
        static fromString(t, e) {
          const n = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, A.en)(
            n && n[2].length + n[3].length > 0,
            "invalid FixedNumber string value",
            "value",
            t,
          );
          const r = po(e);
          let s = n[2] || "0",
            i = n[3] || "";
          for (; i.length < r.decimals; ) i += lo;
          (0, A.hu)(
            i.substring(r.decimals).match(/^0*$/),
            "too many decimals for format",
            "NUMERIC_FAULT",
            { operation: "fromString", fault: "underflow", value: t },
          ),
            (i = i.substring(0, r.decimals));
          const a = BigInt(n[1] + s + i);
          return fo(a, r, "fromString"), new go(uo, a, r);
        }
        static fromBytes(t, e) {
          let n = (0, p.Gh)((0, i.Pw)(t, "value"));
          const r = po(e);
          return (
            r.signed && (n = (0, p._Y)(n, r.width)),
            fo(n, r, "fromBytes"),
            new go(uo, n, r)
          );
        }
      }
      const mo = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function yo(t, e) {
        let n = 18;
        if ("string" == typeof e) {
          const t = mo.indexOf(e);
          (0, A.en)(t >= 0, "invalid unit", "unit", e), (n = 3 * t);
        } else null != e && (n = (0, p.Dx)(e, "unit"));
        return go.fromValue(t, n, { decimals: n, width: 512 }).toString();
      }
      function wo(t, e) {
        (0, A.en)("string" == typeof t, "value must be a string", "value", t);
        let n = 18;
        if ("string" == typeof e) {
          const t = mo.indexOf(e);
          (0, A.en)(t >= 0, "invalid unit", "unit", e), (n = 3 * t);
        } else null != e && (n = (0, p.Dx)(e, "unit"));
        return go.fromString(t, { decimals: n, width: 512 }).value;
      }
      function Ao(t) {
        return yo(t, 18);
      }
      function bo(t) {
        return wo(t, 18);
      }
      function vo(t) {
        const e = (0, i.Pw)(t, "randomBytes");
        (e[6] = (15 & e[6]) | 64), (e[8] = (63 & e[8]) | 128);
        const n = (0, i.Dv)(e);
        return [
          n.substring(2, 10),
          n.substring(10, 14),
          n.substring(14, 18),
          n.substring(18, 22),
          n.substring(22, 34),
        ].join("-");
      }
      const Eo = " !#$%&'()*+,-./<=>?@[]^_`{|}~",
        Po = /^[a-z]*$/i;
      function ko(t, e) {
        let n = 97;
        return t.reduce(
          (t, r) => (
            r === e
              ? n++
              : r.match(Po)
              ? t.push(String.fromCharCode(n) + r)
              : ((n = 97), t.push(r)),
            t
          ),
          [],
        );
      }
      function No(t) {
        return (
          (0, A.en)("0" === t[0], "unsupported auwl data", "data", t),
          (function (t, e) {
            for (let n = Eo.length - 1; n >= 0; n--)
              t = t.split(Eo[n]).join(e.substring(2 * n, 2 * n + 2));
            const n = [],
              r = t.replace(/(:|([0-9])|([A-Z][a-z]*))/g, (t, e, r, s) => {
                if (r) for (let t = parseInt(r); t >= 0; t--) n.push(";");
                else n.push(e.toLowerCase());
                return "";
              });
            if (r) throw new Error(`leftovers: ${JSON.stringify(r)}`);
            return ko(ko(n, ";"), ":");
          })(t.substring(1 + 2 * Eo.length), t.substring(1, 1 + 2 * Eo.length))
        );
      }
      class Co {
        locale;
        constructor(t) {
          (0, B.h)(this, { locale: t });
        }
        split(t) {
          return t.toLowerCase().split(/\s+/g);
        }
        join(t) {
          return t.join(" ");
        }
      }
      class To extends Co {
        #n;
        #Pe;
        constructor(t, e, n) {
          super(t), (this.#n = e), (this.#Pe = n), (this.#ke = null);
        }
        get _data() {
          return this.#n;
        }
        _decodeWords() {
          return No(this.#n);
        }
        #ke;
        #Ne() {
          if (null == this.#ke) {
            const t = this._decodeWords();
            if ((0, Xr.id)(t.join("\n") + "\n") !== this.#Pe)
              throw new Error(`BIP39 Wordlist for ${this.locale} FAILED`);
            this.#ke = t;
          }
          return this.#ke;
        }
        getWord(t) {
          const e = this.#Ne();
          return (
            (0, A.en)(
              t >= 0 && t < e.length,
              `invalid word index: ${t}`,
              "index",
              t,
            ),
            e[t]
          );
        }
        getWordIndex(t) {
          return this.#Ne().indexOf(t);
        }
      }
      let Io = null;
      class xo extends To {
        constructor() {
          super(
            "en",
            "0erleonalorenseinceregesticitStanvetearctssi#ch2Athck&tneLl0And#Il.yLeOutO=S|S%b/ra@SurdU'0Ce[Cid|CountCu'Hie=IdOu,-Qui*Ro[TT]T%T*[Tu$0AptDD-tD*[Ju,M.UltV<)Vi)0Rob-0FairF%dRaid0A(EEntRee0Ead0MRRp%tS!_rmBumCoholErtI&LLeyLowMo,O}PhaReadySoT Ways0A>urAz(gOngOuntU'd0Aly,Ch%Ci|G G!GryIm$K!Noun)Nu$O` Sw T&naTiqueXietyY1ArtOlogyPe?P!Pro=Ril1ChCt-EaEnaGueMMedM%MyOundR<+Re,Ri=RowTTefa@Ti,Tw%k0KPe@SaultSetSi,SumeThma0H!>OmTa{T&dT.udeTra@0Ct]D.Gu,NtTh%ToTumn0Era+OcadoOid0AkeA*AyEsomeFulKw?d0Is:ByChel%C#D+GL<)Lc#y~MbooN<aNn RRelyRga(R*lSeS-SketTt!3A^AnAutyCau'ComeEfF%eG(Ha=H(dLie=LowLtN^Nef./TrayTt Twe&Y#d3Cyc!DKeNdOlogyRdR`Tt _{AdeAmeAnketA,EakE[IndOodO[omOu'UeUrUsh_rdAtDyIlMbNeNusOkO,Rd R(gRrowSsTtomUn)XY_{etA(AndA[A=EadEezeI{Id+IefIghtIngIskOccoliOk&OnzeOomO` OwnUsh2Bb!DdyD+tFf$oIldLbLkL!tNd!Nk Rd&Rg R,SS(e[SyTt Y Zz:Bba+B(B!CtusGeKe~LmM aMpNN$N)lNdyNn#NoeNvasNy#Pab!P.$Pta(RRb#RdRgoRpetRryRtSeShS(o/!Su$TT$ogT^Teg%yTt!UghtU'Ut]Ve3Il(gL yM|NsusNturyRe$Rta(_irAlkAmp]An+AosApt Ar+A'AtEapE{Ee'EfErryE,I{&IefIldIm}yOi)Oo'R#-U{!UnkUrn0G?Nnam#Rc!Tiz&TyVil_imApArifyAwAyE<ErkEv I{I|IffImbIn-IpO{OgO'O`OudOwnUbUmpU, Ut^_^A,C#utDeFfeeIlInL!@L%LumnMb(eMeMf%tM-Mm#Mp<yNc tNdu@NfirmNg*[N}@Nsid NtrolNv()OkOlPp PyR$ReRnR*@/Tt#U^UntryUp!Ur'Us(V Yo>_{Ad!AftAmA}AshAt AwlAzyEamEd.EekEwI{etImeIspIt-OpO[Ou^OwdUci$UelUi'Umb!Un^UshYY,$2BeLtu*PPbo?dRiousRr|Rta(R=Sh]/omTe3C!:DMa+MpN)Ng R(gShUght WnY3AlBa>BrisCadeCemb CideCl(eC%a>C*a'ErF&'F(eFyG*eLayLiv M<dMi'Ni$Nti,NyP?tP&dPos.P`PutyRi=ScribeS tSignSkSpair/royTailTe@VelopVi)Vo>3AgramAlAm#dAryCeE'lEtFf G.$Gn.yLemmaNn NosaurRe@RtSag*eScov Sea'ShSmi[S%d Splay/<)V tVideV%)Zzy5Ct%Cum|G~Lph(Ma(Na>NkeyN%OrSeUb!Ve_ftAg#AmaA,-AwEamE[IftIllInkIpI=OpUmY2CkMbNeR(g/T^Ty1Arf1Nam-:G G!RlyRnR`Sily/Sy1HoOlogyOnomy0GeItUca>1F%t0G1GhtTh 2BowD E@r-Eg<tEm|Eph<tEvat%I>Se0B?kBodyBra)Er+Ot]PloyPow Pty0Ab!A@DD![D%'EmyErgyF%)Ga+G(eH<)JoyLi,OughR-hRollSu*T Ti*TryVelope1Isode0U$Uip0AA'OdeOs]R%Upt0CapeSayS&)Ta>0Ern$H-s1Id&)IlOkeOl=1A@Amp!Ce[Ch<+C.eCludeCu'Ecu>Erci'Hau,Hib.I!I,ItOt-P<dPe@Pi*Pla(Po'P*[T&dTra0EEbrow:Br-CeCultyDeIntI`~L'MeMilyMousNNcyNtasyRmSh]TT$Th TigueUltV%.e3Atu*Bru?yD $EEdElMa!N)/iv$T^V W3B Ct]EldGu*LeLmLt N$NdNeNg NishReRmR,Sc$ShTT}[X_gAmeAshAtAv%EeIghtIpOatO{O%Ow UidUshY_mCusGIlLd~owOdOtR)Re,R+tRkRtu}RumRw?dSsil/ UndX_gi!AmeEqu|EshI&dIn+OgOntO,OwnOz&U.2ElNNnyRna)RyTu*:D+tInLaxy~ yMePRa+Rba+Rd&Rl-Rm|SSpTeTh U+Ze3N $NiusN*Nt!Nu(e/u*2O,0AntFtGg!Ng RaffeRlVe_dAn)A*A[IdeImp'ObeOomOryO=OwUe_tDde[LdOdO'RillaSpelSsipV nWn_bA)A(AntApeA[Av.yEatE&IdIefItOc yOupOwUnt_rdE[IdeIltIt?N3M:B.IrLfMm M, NdPpyRb%RdRshR=,TVeWkZ?d3AdAl`ArtAvyD+hogIght~oLmetLpNRo3Dd&Gh~NtPRe/%y5BbyCkeyLdLeLiday~owMeNeyOdPeRnRr%R'Sp.$/TelUrV 5BGeM<Mb!M%Nd*dNgryNtRd!RryRtSb<d3Brid:1EOn0EaEntifyLe2N%e4LLeg$L}[0A+Ita>M&'Mu}Pa@Po'Pro=Pul'0ChCludeComeC*a'DexD-a>Do%Du,ryF<tFl-tF%mHa!H .Iti$Je@JuryMa>N Noc|PutQuiryS<eSe@SideSpi*/$lTa@T e,ToVe,V.eVol=3On0L<dOla>Sue0Em1Ory:CketGu?RZz3AlousAns~yWel9BInKeUr}yY5D+I)MpNg!Ni%Nk/:Ng?oo3EnEpT^upY3CkDD}yNdNgdomSsTT^&TeTt&Wi4EeIfeO{Ow:BBelB%Dd DyKeMpNgua+PtopR+T T(UghUndryVaWWnWsu.Y Zy3Ad AfArnA=Ctu*FtGG$G&dIsu*M#NdNg`NsOp?dSs#Tt Vel3ArB tyBr?yC&'FeFtGhtKeMbM.NkOnQuid/Tt!VeZ?d5AdAnB, C$CkG-NelyNgOpTt yUdUn+VeY$5CkyGga+Mb N?N^Xury3R-s:Ch(eDG-G}tIdIlInJ%KeMm$NNa+Nda>NgoNs]Nu$P!Rb!R^Rg(R(eRketRria+SkSs/ T^T i$ThTrixTt XimumZe3AdowAnAsu*AtCh<-D$DiaLodyLtMb M%yNt]NuRcyR+R.RryShSsa+T$Thod3Dd!DnightLk~]M-NdNimumN%Nu>Rac!Rr%S ySs/akeXXedXtu*5Bi!DelDifyMM|N.%NkeyN, N`OnR$ReRn(gSqu.oTh T]T%Unta(U'VeVie5ChFf(LeLtiplySc!SeumShroomS-/Tu$3Self/ yTh:I=MePk(Rrow/yT]Tu*3ArCkEdGati=G!@I` PhewR=/TTw%kUtr$V WsXt3CeGht5B!I'M(eeOd!Rm$R`SeTab!TeTh(gTi)VelW5C!?Mb R'T:K0EyJe@Li+Scu*S =Ta(Vious0CurE<Tob 0Or1FF Fi)T&2L1Ay0DI=Ymp-0It0CeEI#L(eLy1EnEraIn]Po'T]1An+B.Ch?dD D(?yG<I|Ig($Ph<0Tr-h0H 0Tdo%T TputTside0AlEnEr0NN 0Yg&0/ 0O}:CtDd!GeIrLa)LmNdaNelN-N` P RadeR|RkRrotRtySsT^ThTi|TrolTt nU'VeYm|3A)AnutArAs<tL-<NN$tyNcilOp!Pp Rfe@Rm.Rs#T2O}OtoRa'Ys-$0AnoCn-Ctu*E)GGe#~LotNkO} Pe/olT^Zza_)A}tA,-A>AyEa'Ed+U{UgUn+2EmEtIntL?LeLi)NdNyOlPul?Rt]S.]Ssib!/TatoTt yV tyWd W _@i)Ai'Ed-tEf Epa*Es|EttyEv|I)IdeIm?yIntI%.yIs#Iva>IzeOb!mO)[Odu)Of.OgramOje@Omo>OofOp tyOsp O>@OudOvide2Bl-Dd(g~LpL'Mpk(N^PilPpyR^a'R.yRpo'R'ShTZz!3Ramid:99Al.yAntumArt E,]I{ItIzO>:Bb.Cco#CeCkD?DioIlInI'~yMpN^NdomN+PidReTeTh V&WZ%3AdyAlAs#BelBuildC$lCei=CipeC%dCyc!Du)F!@F%mFu'G]G*tGul?Je@LaxLea'LiefLyMa(Memb M(dMo=Nd NewNtOp&PairPeatPla)P%tQui*ScueSemb!Si,Sour)Sp#'SultTi*T*atTurnUn]Ve$ViewW?d2Y`m0BBb#CeChDeD+F!GhtGidNgOtPp!SkTu$V$V 5AdA,BotBu,CketM<)OfOkieOmSeTa>UghUndU>Y$5Bb DeGLeNNwayR$:DDd!D}[FeIlLadLm#L#LtLu>MeMp!NdTisfyToshiU)Usa+VeY1A!AnA*Att E}HemeHoolI&)I[%sOrp]OutRapRe&RiptRub1AAr^As#AtC#dC*tCt]Cur.yEdEkGm|Le@~M(?Ni%N'Nt&)RiesRvi)Ss]Tt!TupV&_dowAftAllowA*EdEllEriffIeldIftI}IpIv O{OeOotOpOrtOuld O=RimpRugUff!Y0Bl(gCkDeE+GhtGnL|Lk~yLv Mil?Mp!N)NgR&/ Tua>XZe1A>Et^IIllInIrtUll0AbAmEepEnd I)IdeIghtImOg<OtOwUsh0AllArtI!OkeOo`0A{AkeApIffOw0ApCc Ci$CkDaFtL?Ldi LidLut]L=Me#eNgOnRryRtUlUndUpUr)U`0A)A*Ati$AwnEakEci$EedEllEndH eI)Id IkeInIr.L.OilOns%O#OrtOtRayReadR(gY0Ua*UeezeUir*l_b!AdiumAffA+AirsAmpAndArtA>AyEakEelEmEpE*oI{IllIngO{Oma^O}OolOryO=Ra>gyReetRikeR#gRugg!Ud|UffUmb!Y!0Bje@Bm.BwayC)[ChDd&Ff G?G+,ItMm NNnyN'tP PplyP*meReRfa)R+Rpri'RroundR=ySpe@/a(1AllowAmpApArmE?EetIftImIngIt^Ord1MbolMptomRup/em:B!Ck!GIlL|LkNkPeR+tSk/eTtooXi3A^Am~NN<tNnisNtRm/Xt_nkAtEmeEnE%yE*EyIngIsOughtReeRi=RowUmbUnd 0CketDeG LtMb MeNyPRedSsueT!5A,BaccoDayDdl EGe` I!tK&MatoM%rowNeNgueNightOlO`PP-Pp!R^RnadoRtoi'SsT$Uri,W?dW WnY_{AdeAff-Ag-A(Ansf ApAshA=lAyEatEeEndI$IbeI{Igg ImIpOphyOub!U{UeUlyUmpetU,U`Y2BeIt]Mb!NaN}lRkeyRnRt!1El=EntyI)InI,O1PeP-$:5Ly5B*lla0Ab!Awa*C!Cov D DoFairFoldHappyIf%mIqueItIv 'KnownLo{TilUsu$Veil1Da>GradeHoldOnP Set1B<Ge0A+EEdEfulE![U$0Il.y:C<tCuumGueLidL!yL=NNishP%Rious/Ult3H-!L=tNd%Ntu*NueRbRifyRs]RyS'lT <3Ab!Br<tCiousCt%yDeoEw~a+Nta+Ol(Rtu$RusSaS.Su$T$Vid5C$I)IdLc<oLumeTeYa+:GeG#ItLk~LnutNtRfa*RmRri%ShSp/eT VeY3Al`Ap#ArA'lA` BDd(gEk&dIrdLcome/T_!AtEatEelEnE*IpIsp 0DeD`FeLd~NNdowNeNgNkNn Nt ReSdomSeShT}[5LfM<Nd OdOlRdRkRldRryR`_pE{E,!I,I>Ong::Rd3Ar~ow9UUngU`:3BraRo9NeO",
            "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60",
          );
        }
        static wordlist() {
          return null == Io && (Io = new xo()), Io;
        }
      }
      function Ro(t) {
        return (((1 << t) - 1) << (8 - t)) & 255;
      }
      function Oo(t, e) {
        (0, A.fA)("NFKD"), null == e && (e = xo.wordlist());
        const n = e.split(t);
        (0, A.en)(
          n.length % 3 == 0 && n.length >= 12 && n.length <= 24,
          "invalid mnemonic length",
          "mnemonic",
          "[ REDACTED ]",
        );
        const r = new Uint8Array(Math.ceil((11 * n.length) / 8));
        let s = 0;
        for (let t = 0; t < n.length; t++) {
          let i = e.getWordIndex(n[t].normalize("NFKD"));
          (0, A.en)(
            i >= 0,
            `invalid mnemonic word at index ${t}`,
            "mnemonic",
            "[ REDACTED ]",
          );
          for (let t = 0; t < 11; t++)
            i & (1 << (10 - t)) && (r[s >> 3] |= 1 << (7 - (s % 8))), s++;
        }
        const a = (32 * n.length) / 3,
          o = Ro(n.length / 3),
          c = (0, i.Pw)(re(r.slice(0, a / 8)))[0] & o;
        return (
          (0, A.en)(
            c === (r[r.length - 1] & o),
            "invalid mnemonic checksum",
            "mnemonic",
            "[ REDACTED ]",
          ),
          (0, i.Dv)(r.slice(0, a / 8))
        );
      }
      function So(t, e) {
        (0, A.en)(
          t.length % 4 == 0 && t.length >= 16 && t.length <= 32,
          "invalid entropy size",
          "entropy",
          "[ REDACTED ]",
        ),
          null == e && (e = xo.wordlist());
        const n = [0];
        let r = 11;
        for (let e = 0; e < t.length; e++)
          r > 8
            ? ((n[n.length - 1] <<= 8), (n[n.length - 1] |= t[e]), (r -= 8))
            : ((n[n.length - 1] <<= r),
              (n[n.length - 1] |= t[e] >> (8 - r)),
              n.push(t[e] & ((1 << (8 - r)) - 1) & 255),
              (r += 3));
        const s = t.length / 4,
          i = parseInt(re(t).substring(2, 4), 16) & Ro(s);
        return (
          (n[n.length - 1] <<= s),
          (n[n.length - 1] |= i >> (8 - s)),
          e.join(n.map((t) => e.getWord(t)))
        );
      }
      const Bo = {};
      class Do {
        phrase;
        password;
        wordlist;
        entropy;
        constructor(t, e, n, r, s) {
          null == r && (r = ""),
            null == s && (s = xo.wordlist()),
            (0, A.NK)(t, Bo, "Mnemonic"),
            (0, B.h)(this, { phrase: n, password: r, wordlist: s, entropy: e });
        }
        computeSeed() {
          const t = (0, s.Y0)("mnemonic" + this.password, "NFKD");
          return Bt((0, s.Y0)(this.phrase, "NFKD"), t, 2048, 64, "sha512");
        }
        static fromPhrase(t, e, n) {
          const r = Oo(t, n);
          return (t = So((0, i.Pw)(r), n)), new Do(Bo, r, t, e, n);
        }
        static fromEntropy(t, e, n) {
          const r = (0, i.Pw)(t, "entropy"),
            s = So(r, n);
          return new Do(Bo, (0, i.Dv)(r), s, e, n);
        }
        static entropyToPhrase(t, e) {
          return So((0, i.Pw)(t, "entropy"), e);
        }
        static phraseToEntropy(t, e) {
          return Oo(t, e);
        }
        static isValidMnemonic(t, e) {
          try {
            return Oo(t, e), !0;
          } catch (t) {}
          return !1;
        }
      }
      class Uo extends na {
        address;
        #Ce;
        constructor(t, e) {
          super(e),
            (0, A.en)(
              t && "function" == typeof t.sign,
              "invalid private key",
              "privateKey",
              "[ REDACTED ]",
            ),
            (this.#Ce = t);
          const n = jr(this.signingKey.publicKey);
          (0, B.h)(this, { address: n });
        }
        get signingKey() {
          return this.#Ce;
        }
        get privateKey() {
          return this.signingKey.privateKey;
        }
        async getAddress() {
          return this.address;
        }
        connect(t) {
          return new Uo(this.#Ce, t);
        }
        async signTransaction(t) {
          const { to: e, from: n } = await (0, B.m)({
            to: t.to ? (0, P.ru)(t.to, this.provider) : void 0,
            from: t.from ? (0, P.ru)(t.from, this.provider) : void 0,
          });
          null != e && (t.to = e),
            null != n && (t.from = n),
            null != t.from &&
              ((0, A.en)(
                (0, b.K)(t.from) === this.address,
                "transaction from address mismatch",
                "tx.from",
                t.from,
              ),
              delete t.from);
          const r = ai.from(t);
          return (
            (r.signature = this.signingKey.sign(r.unsignedHash)), r.serialized
          );
        }
        async signMessage(t) {
          return this.signMessageSync(t);
        }
        signMessageSync(t) {
          return this.signingKey.sign(_r(t)).serialized;
        }
        async signTypedData(t, e, n) {
          const r = await fs.resolveNames(t, e, n, async (t) => {
            (0, A.hu)(
              null != this.provider,
              "cannot resolve ENS names without a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "resolveName", info: { name: t } },
            );
            const e = await this.provider.resolveName(t);
            return (
              (0, A.hu)(
                null != e,
                "unconfigured ENS name",
                "UNCONFIGURED_NAME",
                { value: t },
              ),
              e
            );
          });
          return this.signingKey.sign(fs.hash(r.domain, e, r.value)).serialized;
        }
      }
      var Lo,
        Fo,
        Mo,
        Go = function (t, e, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        },
        Ko = function (t, e, n, r, s) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !s)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof e ? t !== e || !s : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
        };
      const jo = { 16: 10, 24: 12, 32: 14 },
        Ho = [
          1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
          188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
        ],
        _o = [
          99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171,
          118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156,
          164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241,
          113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226,
          235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179,
          41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190,
          57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2,
          127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182,
          218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196,
          167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136,
          70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92,
          194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
          78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
          166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181,
          102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248,
          152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140,
          161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
        ],
        Vo = [
          82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
          251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222,
          233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
          250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73,
          109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164,
          92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
          21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10,
          247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
          193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
          151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
          53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
          41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
          198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221,
          168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81,
          127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
          224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97,
          23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125,
        ],
        Qo = [
          3328402341, 4168907908, 4000806809, 4135287693, 4294111757,
          3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241,
          1445669757, 3892248089, 3050821474, 1303096294, 3967186586,
          2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171,
          2387036105, 4226871307, 1101901292, 3017069671, 1604494077,
          1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402,
          3791519004, 1033081774, 1277568618, 1815492186, 2118074177,
          4126668546, 2211236943, 1748251740, 1369810420, 3521504564,
          4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908,
          2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135,
          798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438,
          1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972,
          874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614,
          1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
          1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
          1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
          2378943302, 1740553945, 1916352843, 2487896798, 2555137236,
          2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
          3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663,
          3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106,
          1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413,
          563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573,
          1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300,
          403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436,
          773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
          3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905,
          2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882,
          3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493,
          2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571,
          201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935,
          3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010,
          2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682,
          1235855840, 3630984372, 2891339514, 4092916743, 3488279077,
          3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016,
          1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513,
          3421038627, 2715671932, 3899946140, 1042226977, 2521517021,
          1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956,
          3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891,
          1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535,
          664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707,
          2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602,
          3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671,
          1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982,
          3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163,
          2824099068, 1841019862, 739644986,
        ],
        zo = [
          2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027,
          2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147,
          434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938,
          1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592,
          3963727277, 1739838676, 4250903202, 3930435503, 3206782108,
          4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059,
          1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980,
          4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049,
          1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536,
          2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848,
          1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793,
          2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018,
          4217086112, 4137964114, 1299594043, 1639438038, 3464344499,
          2068982057, 1054729187, 1901997871, 2534638724, 4121318227,
          1757008337, 0, 750906861, 1614815264, 535035132, 3363418545,
          3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
          3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087,
          3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261,
          3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428,
          3123027871, 3813386408, 4087501137, 4267549603, 3229630528,
          2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548,
          3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083,
          1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855,
          2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534,
          1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144,
          2551808385, 3516813135, 2141445340, 1715741218, 2119445034,
          2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540,
          2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026,
          1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516,
          1570751170, 1857934291, 4014189740, 2797888098, 2822345105,
          2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319,
          3084545389, 2348912013, 1689376213, 3533459022, 3762923945,
          3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810,
          3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758,
          607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877,
          2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234,
          2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067,
          33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753,
          2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800,
          3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444,
          3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045,
          2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245,
          3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313,
          2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766,
        ],
        Jo = [
          1671808611, 2089089148, 2006576759, 2072901243, 4061003762,
          1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671,
          729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426,
          2191335298, 3376449993, 2106063485, 4195741690, 1508618841,
          1204391495, 4027317232, 2917941677, 3563566036, 2734514082,
          2951366063, 2629772188, 2767672228, 1922491506, 3227229120,
          3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767,
          4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329,
          1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279,
          593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466,
          118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711,
          2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610,
          455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283,
          3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444,
          1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412,
          2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753,
          1256100938, 1289001036, 1491644504, 3477767631, 3496721360,
          4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739,
          2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960,
          1011120188, 2679776671, 2833468328, 1374921297, 2751356323,
          1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005,
          3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895,
          4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324,
          1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711,
          2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699,
          1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154,
          2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740,
          3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546,
          978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276,
          3260915650, 3547250131, 2901361580, 1655096418, 2443721105,
          2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799,
          1840765549, 2374762893, 3580146133, 1322425422, 2850048425,
          1823791212, 1459268694, 4094161908, 3928346602, 1706019429,
          2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469,
          779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072,
          3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315,
          2323976074, 1888542832, 1044544574, 3049550261, 1722469478,
          1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
          1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430,
          3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385,
          2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169,
          3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649,
          2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440,
          1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308,
          3151392187, 372911126,
        ],
        Zo = [
          1667474886, 2088535288, 2004326894, 2071694838, 4075949567,
          1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926,
          724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711,
          2189597983, 3385409673, 2105378810, 4210693615, 1499065266,
          1195886990, 4042263547, 2913856577, 3570689971, 2728590687,
          2947541573, 2627518243, 2762274643, 1920112356, 3233831835,
          3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142,
          4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529,
          1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789,
          589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191,
          117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286,
          2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380,
          454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198,
          3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939,
          1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667,
          2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178,
          1246420628, 1280103576, 1482221744, 3486468741, 3503319995,
          4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214,
          2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760,
          1010582648, 2678045221, 2829640523, 1364325282, 2745433693,
          1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505,
          3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645,
          4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699,
          1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621,
          2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854,
          1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924,
          2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440,
          3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716,
          976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736,
          3267517855, 3553849021, 2897014595, 1650632388, 2442242105,
          2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254,
          1835907034, 2374863873, 3587531953, 1313788572, 2846482505,
          1819063512, 1448540844, 4109633523, 3941213647, 1701162954,
          2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314,
          774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627,
          3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845,
          2324333839, 1886425312, 1044267644, 3048588401, 1718004428,
          1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
          1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215,
          3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025,
          2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609,
          3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649,
          2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520,
          1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848,
          3149649517, 370555436,
        ],
        qo = [
          1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
          2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485,
          1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703,
          1172967064, 1576976609, 3274667266, 2169303058, 2370213795,
          1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213,
          1484005843, 1239443753, 2395588676, 1975683434, 4102977912,
          2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444,
          1675577880, 3843699074, 2538681184, 1649639237, 2976151520,
          3144396420, 4269907996, 4178062228, 1883793496, 2403728665,
          2497604743, 1383856311, 2876494627, 1917518562, 3810496343,
          1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610,
          599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432,
          1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293,
          2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582,
          3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
          2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
          2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483,
          2709260871, 2084704233, 4169408201, 0, 159417987, 841739592,
          504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415,
          168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535,
          3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374,
          3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893,
          766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109,
          4144047775, 1551037884, 1147550661, 1543208500, 2336434550,
          3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808,
          2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059,
          3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
          1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455,
          3644379585, 2362090238, 2564033334, 2801107407, 2776292904,
          3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698,
          4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924,
          1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923,
          3441850377, 1851332852, 3969562369, 2203032232, 3868552805,
          2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284,
          699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047,
          4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806,
          395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715,
          1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171,
          4211818798, 3009879386, 2463879762, 3910161971, 1842759443,
          2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029,
          3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775,
          1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
          3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
          4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265,
          3576870512, 1215061108, 3501741890,
        ],
        Wo = [
          1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
          4045380933, 2880240216, 2471224067, 1428173050, 4138563181,
          2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155,
          1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728,
          2743944855, 3328955385, 3875770207, 2501218972, 3955191162,
          3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409,
          2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132,
          3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975,
          2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428,
          3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120,
          53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122,
          1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468,
          3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033,
          1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602,
          1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868,
          4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618,
          2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166,
          0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663,
          1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604,
          975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021,
          2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560,
          487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081,
          1286567175, 3152976349, 4255350624, 2683765030, 3160175349,
          3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617,
          3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061,
          296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347,
          1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879,
          3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419,
          3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554,
          2607439820, 1649704518, 3270937875, 3901806776, 1580087799,
          4118987695, 3198115200, 2087309459, 2842678573, 3016697106,
          1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472,
          32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392,
          3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259,
          818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840,
          1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904,
          1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889,
          77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242,
          870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476,
          4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235,
          2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891,
          2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253,
          2334669897, 1107234197, 1899603969, 3725069491, 2631447780,
          2422494913, 1635502980, 1893020342, 1950903388, 1120974935,
        ],
        Yo = [
          2807058932, 1699970625, 2764249623, 1586903591, 1808481195,
          1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228,
          1277555970, 3623636965, 3419915562, 1149249077, 2744104290,
          1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588,
          2544078150, 4190530515, 1608975247, 2627016082, 2062270317,
          1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554,
          2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312,
          984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180,
          2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798,
          4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195,
          3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107,
          2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658,
          3201631749, 1646252340, 4270507174, 1402811438, 1436590835,
          3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366,
          2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892,
          3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497,
          1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938,
          516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170,
          4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260,
          1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075,
          3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128,
          3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854,
          428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354,
          1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452,
          3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051,
          840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177,
          376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744,
          752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444,
          2177869557, 3727205754, 2384911031, 3215212461, 2648976442,
          2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569,
          2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044,
          2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634,
          2594734927, 1852171925, 3867060991, 3473416636, 3907448597,
          2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639,
          2486224549, 1723872674, 3157750862, 3399941250, 3501252752,
          3625268135, 2555048196, 3673637356, 1343127501, 4130281361,
          3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410,
          532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963,
          492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225,
          344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695,
          3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069,
          1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571,
          3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716,
          3835484340, 3247465558, 2220981195, 3060847922, 1551124588,
          1463996600,
        ],
        Xo = [
          4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623,
          4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
          3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053,
          3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
          2405426947, 2459735317, 1836772287, 1381620373, 3196267988,
          1948373848, 3764988233, 3385345166, 3263785589, 2390325492,
          1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789,
          3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355,
          2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426,
          1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895,
          3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221,
          3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454,
          878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212,
          2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718,
          1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912,
          2566595609, 3186202582, 1078185097, 3651041127, 3896688048,
          2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296,
          0, 2156299017, 736970802, 292596766, 1517440620, 251657213,
          2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339,
          908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416,
          3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620,
          454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591,
          1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156,
          4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431,
          1669664834, 2535604243, 3323011204, 1243905413, 3141400786,
          4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727,
          3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
          4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628,
          3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
          2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814,
          3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
          410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844,
          1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
          1865862730, 2668221674, 2960971305, 2763173681, 1059270954,
          2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
          2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550,
          4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417,
          1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011,
          3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729,
          322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828,
          4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015,
          1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990,
          3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240,
          1455525988, 3414450555, 850817237, 1817998408, 3092726480,
        ],
        $o = [
          0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
          708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
          1181045119, 1417561698, 1517767529, 3767586992, 4003061179,
          4236429990, 4069246893, 3635733660, 3602770327, 3299278474,
          3400528769, 2430122216, 2664543715, 2362090238, 2193862645,
          2835123396, 2801107407, 3035535058, 3135740889, 3678124923,
          3576870512, 3341394285, 3374361702, 3810496343, 3977675356,
          4279080257, 4043610186, 2876494627, 2776292904, 3076639029,
          3110650942, 2472011535, 2640243204, 2403728665, 2169303058,
          1001089995, 899835584, 666464733, 699432150, 59727847, 226906860,
          530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414,
          1942435775, 2110667444, 1876241833, 1641816226, 2910219766,
          2743034109, 2976151520, 3211623147, 2505202138, 2606453969,
          2302690252, 2269728455, 3711829422, 3543599269, 3240894392,
          3475313331, 3843699074, 3943906441, 4178062228, 4144047775,
          1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
          2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896,
          800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
          2017778566, 1784663195, 1683407248, 1315562145, 1080094634,
          1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864,
          1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334,
          2328828971, 2227573024, 2935566865, 2700099354, 3001755655,
          3168937228, 3868552805, 3902563182, 4203181171, 4102977912,
          3736164937, 3501741890, 3265478751, 3433712980, 1106041591,
          1340463100, 1576976609, 1408749034, 2043211483, 2009195472,
          1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354,
          159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380,
          3178106961, 3009879386, 2572697195, 2538681184, 2236228733,
          2336434550, 3509871135, 3745345300, 3441850377, 3274667266,
          3910161971, 3877198648, 4110568485, 4211818798, 2597806476,
          2497604743, 2261089178, 2295101073, 2733856160, 2902087851,
          3202437046, 2968011453, 3936291284, 3835036895, 4136440770,
          4169408201, 3535486456, 3702665459, 3467192302, 3231722213,
          2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
          1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330,
          404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
          3801332234, 4035489047, 4269907996, 3569255213, 3669462566,
          3366754619, 3332740144, 2631065433, 2463879762, 2160117071,
          2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497,
          33778362, 270040487, 504459436, 875451293, 975658646, 675039627,
          641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
          1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972,
          632953703, 260388950, 25965917, 328671808, 496906059, 1206477858,
          1239443753, 1543208500, 1441952575, 2144161806, 1908694277,
          1675577880, 1842759443, 3610369226, 3644379585, 3408119516,
          3307916247, 4011190502, 3776767469, 4077384432, 4245618683,
          2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
          2438237621, 2203032232, 2370213795,
        ],
        tc = [
          0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
          824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388,
          2135319889, 1649704518, 1767536459, 2967507152, 3152976349,
          2801566410, 2918353863, 2631447780, 2547432937, 2328143614,
          2177544179, 3901806776, 3818836405, 4270639778, 4118987695,
          3299409036, 3483825537, 3535072918, 3652904859, 2077965243,
          1893020342, 1841768865, 1724457132, 1474502543, 1559041666,
          1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372,
          261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454,
          3710368113, 3593056380, 3875770207, 3960309330, 4045380933,
          4195456072, 2471224067, 2554718734, 2237133081, 2388260884,
          3212035895, 3028143674, 2842678573, 2724322336, 4138563181,
          4255350624, 3769721975, 3955191162, 3667219033, 3516619604,
          3431546947, 3347532110, 2933734917, 2782082824, 3099667487,
          3016697106, 2196052529, 2313884476, 2499348523, 2683765030,
          1179510461, 1296297904, 1347548327, 1533017514, 1786102409,
          1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751,
          53458370, 839224033, 957055980, 605657339, 790073846, 2373340630,
          2256028891, 2607439820, 2422494913, 2706270690, 2856345839,
          3075636216, 3160175349, 3573941694, 3725069491, 3273267108,
          3356761769, 4181598602, 4063242375, 4011996048, 3828103837,
          1033297158, 915985419, 730517276, 545572369, 296679730, 446754879,
          129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177,
          1239331162, 1120974935, 1606591296, 1422699085, 4148292826,
          4233094615, 3781033664, 3931371469, 3682191598, 3497509347,
          3446004468, 3328955385, 2939266226, 2755636671, 3106780840,
          2988687269, 2198438022, 2282195339, 2501218972, 2652609425,
          1201765386, 1286567175, 1371368976, 1521706781, 1805211710,
          1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672,
          46346101, 870912086, 954669403, 636813900, 788204353, 2358957921,
          2274680428, 2592523643, 2441661558, 2695033685, 2880240216,
          3065962831, 3182487618, 3572145929, 3756299780, 3270937875,
          3388507166, 4174560061, 4091327024, 4006521127, 3854606378,
          1014646705, 930369212, 711349675, 560487590, 272786309, 457992840,
          106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326,
          1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114,
          401639597, 486441376, 768917123, 651868046, 1003007129, 818324884,
          1503449823, 1385356242, 1333838021, 1150208456, 1973745387,
          2125135846, 1673061617, 1756818940, 2970356327, 3120694122,
          2802849917, 2887651696, 2637442643, 2520393566, 2334669897,
          2149987652, 3917234703, 3799141122, 4284502037, 4100872472,
          3309594171, 3460984630, 3545789473, 3629546796, 2050466060,
          1899603969, 1814803222, 1730525723, 1443857720, 1560382517,
          1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235,
          243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545,
          3704300486, 3620022987, 3874428392, 3990953189, 4042459122,
          4227665663, 2460449204, 2578018489, 2226875310, 2411029155,
          3198115200, 3046200461, 2827177882, 2743944855,
        ],
        ec = [
          0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
          590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588,
          1367295589, 1180849278, 1265195639, 3501252752, 3720081049,
          3399941250, 3350065803, 3835484340, 3919042237, 4270507174,
          4085369519, 3102249176, 3051593425, 2734591178, 2952102595,
          2361698556, 2177869557, 2530391278, 2614737639, 3145456443,
          3060847922, 2708326185, 2892417312, 2404901663, 2187128086,
          2504130317, 2555048196, 3542330227, 3727205754, 3375740769,
          3292445032, 3876557655, 3926170974, 4246310725, 4027744588,
          1808481195, 1723872674, 1910319033, 2094410160, 1608975247,
          1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201,
          344873464, 935293895, 984907214, 766078933, 547512796, 1844882806,
          1627235199, 2011214180, 2062270317, 1507497298, 1423022939,
          1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861,
          830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679,
          2807058932, 2858115069, 2305455554, 2220981195, 2474404304,
          2658625497, 3575528878, 3625268135, 3473416636, 3254988725,
          3778151818, 3963161475, 4213447064, 4130281361, 3599595085,
          3683022916, 3432737375, 3247465558, 3802222185, 4020912224,
          4172763771, 4122762354, 3201631749, 3017672716, 2764249623,
          2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613,
          188127444, 472615631, 287343814, 840019705, 1058709744, 671593195,
          621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577,
          1463996600, 1080017571, 1297403050, 3673637356, 3623636965,
          3235995134, 3454686199, 4007360968, 3822090177, 4107101658,
          4190530515, 2997825956, 3215212461, 2830708150, 2779915199,
          2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165,
          273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755,
          1646252340, 1863638845, 2013908262, 1963115311, 1446242576,
          1530455833, 1277555970, 1093597963, 1636604631, 1820824798,
          2073724613, 1989249228, 1436590835, 1487645946, 1337376481,
          1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051,
          821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645,
          2787207260, 2232435299, 2283490410, 2667994737, 2450346104,
          3647212047, 3564045318, 3279033885, 3464042516, 3980931627,
          3762502690, 4150144569, 4199882800, 3070356634, 3121275539,
          2904027272, 2686254721, 2200818878, 2384911031, 2570832044,
          2486224549, 3747192018, 3528626907, 3310321856, 3359936201,
          3950355702, 3867060991, 4049844452, 4234721005, 1739656202,
          1790575107, 2108100632, 1890328081, 1402811438, 1586903591,
          1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217,
          1002783846, 919489135, 567498868, 752375421, 209336225, 24197544,
          376187827, 459744698, 945164165, 895287692, 574624663, 793451934,
          1679968233, 1764313568, 2117360635, 1933530610, 1343127501,
          1560637892, 1243112415, 1192455638, 3704280881, 3519142200,
          3336358691, 3419915562, 3907448597, 3857572124, 4075877127,
          4294704398, 3029510009, 3113855344, 2927934315, 2744104290,
          2159976285, 2377486676, 2594734927, 2544078150,
        ],
        nc = [
          0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
          1059270954, 1214797936, 1097159550, 1517440620, 1400849762,
          1817998408, 1699839814, 2118541908, 2001430874, 2429595872,
          2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
          2801699524, 2951971274, 3635996816, 3518358430, 3399679628,
          3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
          1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
          227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
          1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
          2724642869, 3111247143, 2960971305, 2405426947, 2253581325,
          2638606623, 2487810577, 3808662347, 3926825029, 4044981591,
          4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
          1986918061, 2137062819, 1685577905, 1836772287, 1381620373,
          1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417,
          621982671, 439452389, 322734571, 137073913, 19308535, 3871163981,
          4021308739, 4104605777, 4255800159, 3263785589, 3414450555,
          3499326569, 3651041127, 2933202493, 2815956275, 3167684641,
          3049390895, 2330014213, 2213296395, 2566595609, 2448830231,
          1305906550, 1155237496, 1607244650, 1455525988, 1776460110,
          1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818,
          514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718,
          3557504664, 3474729866, 3323011204, 4180808110, 4030667424,
          3945269170, 3794078908, 2507040230, 2623762152, 2272556026,
          2390325492, 2975484382, 3092726480, 2738905026, 2857194700,
          3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
          3252932727, 3673476453, 3556361835, 2763173681, 2915017791,
          3064510765, 3215307299, 2156299017, 2307622919, 2459735317,
          2610011675, 2081048481, 1963412655, 1846563261, 1729977011,
          1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015,
          645401037, 796197571, 274084841, 425408743, 38544885, 188821243,
          3613494426, 3731654548, 3313212038, 3430322568, 4082475170,
          4200115116, 3780097726, 3896688048, 2668221674, 2516901860,
          2366882550, 2216610296, 3141400786, 2989552604, 2837966542,
          2687165888, 1202797690, 1320957812, 1437280870, 1554391400,
          1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348,
          499347990, 349075736, 736970802, 585122620, 972512814, 821712160,
          2595684844, 2478443234, 2293045232, 2174754046, 3196267988,
          3079546586, 2895723464, 2777952454, 3537852828, 3687994002,
          3234156416, 3385345166, 4142626212, 4293295786, 3841024952,
          3992742070, 174567692, 57326082, 410887952, 292596766, 777231668,
          660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912,
          1494807662, 1715193156, 1865862730, 1948373848, 2100090966,
          2701949495, 2818666809, 3004591147, 3122358053, 2235061775,
          2352307457, 2535604243, 2653899549, 3915653703, 3764988233,
          4219352155, 4067639125, 3444575871, 3294430577, 3746175075,
          3594982253, 836553431, 953270745, 600235211, 718002117, 367585007,
          484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355,
          1654886325, 1568718495, 1418573201, 1335535747, 1184342925,
        ];
      function rc(t) {
        const e = [];
        for (let n = 0; n < t.length; n += 4)
          e.push((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]);
        return e;
      }
      class sc {
        get key() {
          return Go(this, Lo, "f").slice();
        }
        constructor(t) {
          if (
            (Lo.set(this, void 0),
            Fo.set(this, void 0),
            Mo.set(this, void 0),
            !(this instanceof sc))
          )
            throw Error("AES must be instanitated with `new`");
          Ko(this, Lo, new Uint8Array(t), "f");
          const e = jo[this.key.length];
          if (null == e)
            throw new TypeError(
              "invalid key size (must be 16, 24 or 32 bytes)",
            );
          Ko(this, Mo, [], "f"), Ko(this, Fo, [], "f");
          for (let t = 0; t <= e; t++)
            Go(this, Mo, "f").push([0, 0, 0, 0]),
              Go(this, Fo, "f").push([0, 0, 0, 0]);
          const n = 4 * (e + 1),
            r = this.key.length / 4,
            s = rc(this.key);
          let i;
          for (let t = 0; t < r; t++)
            (i = t >> 2),
              (Go(this, Mo, "f")[i][t % 4] = s[t]),
              (Go(this, Fo, "f")[e - i][t % 4] = s[t]);
          let a,
            o = 0,
            c = r;
          for (; c < n; ) {
            if (
              ((a = s[r - 1]),
              (s[0] ^=
                (_o[(a >> 16) & 255] << 24) ^
                (_o[(a >> 8) & 255] << 16) ^
                (_o[255 & a] << 8) ^
                _o[(a >> 24) & 255] ^
                (Ho[o] << 24)),
              (o += 1),
              8 != r)
            )
              for (let t = 1; t < r; t++) s[t] ^= s[t - 1];
            else {
              for (let t = 1; t < r / 2; t++) s[t] ^= s[t - 1];
              (a = s[r / 2 - 1]),
                (s[r / 2] ^=
                  _o[255 & a] ^
                  (_o[(a >> 8) & 255] << 8) ^
                  (_o[(a >> 16) & 255] << 16) ^
                  (_o[(a >> 24) & 255] << 24));
              for (let t = r / 2 + 1; t < r; t++) s[t] ^= s[t - 1];
            }
            let t,
              i,
              u = 0;
            for (; u < r && c < n; )
              (t = c >> 2),
                (i = c % 4),
                (Go(this, Mo, "f")[t][i] = s[u]),
                (Go(this, Fo, "f")[e - t][i] = s[u++]),
                c++;
          }
          for (let t = 1; t < e; t++)
            for (let e = 0; e < 4; e++)
              (a = Go(this, Fo, "f")[t][e]),
                (Go(this, Fo, "f")[t][e] =
                  $o[(a >> 24) & 255] ^
                  tc[(a >> 16) & 255] ^
                  ec[(a >> 8) & 255] ^
                  nc[255 & a]);
        }
        encrypt(t) {
          if (16 != t.length)
            throw new TypeError("invalid plaintext size (must be 16 bytes)");
          const e = Go(this, Mo, "f").length - 1,
            n = [0, 0, 0, 0];
          let r = rc(t);
          for (let t = 0; t < 4; t++) r[t] ^= Go(this, Mo, "f")[0][t];
          for (let t = 1; t < e; t++) {
            for (let e = 0; e < 4; e++)
              n[e] =
                Qo[(r[e] >> 24) & 255] ^
                zo[(r[(e + 1) % 4] >> 16) & 255] ^
                Jo[(r[(e + 2) % 4] >> 8) & 255] ^
                Zo[255 & r[(e + 3) % 4]] ^
                Go(this, Mo, "f")[t][e];
            r = n.slice();
          }
          const s = new Uint8Array(16);
          let i = 0;
          for (let t = 0; t < 4; t++)
            (i = Go(this, Mo, "f")[e][t]),
              (s[4 * t] = 255 & (_o[(r[t] >> 24) & 255] ^ (i >> 24))),
              (s[4 * t + 1] =
                255 & (_o[(r[(t + 1) % 4] >> 16) & 255] ^ (i >> 16))),
              (s[4 * t + 2] =
                255 & (_o[(r[(t + 2) % 4] >> 8) & 255] ^ (i >> 8))),
              (s[4 * t + 3] = 255 & (_o[255 & r[(t + 3) % 4]] ^ i));
          return s;
        }
        decrypt(t) {
          if (16 != t.length)
            throw new TypeError("invalid ciphertext size (must be 16 bytes)");
          const e = Go(this, Fo, "f").length - 1,
            n = [0, 0, 0, 0];
          let r = rc(t);
          for (let t = 0; t < 4; t++) r[t] ^= Go(this, Fo, "f")[0][t];
          for (let t = 1; t < e; t++) {
            for (let e = 0; e < 4; e++)
              n[e] =
                qo[(r[e] >> 24) & 255] ^
                Wo[(r[(e + 3) % 4] >> 16) & 255] ^
                Yo[(r[(e + 2) % 4] >> 8) & 255] ^
                Xo[255 & r[(e + 1) % 4]] ^
                Go(this, Fo, "f")[t][e];
            r = n.slice();
          }
          const s = new Uint8Array(16);
          let i = 0;
          for (let t = 0; t < 4; t++)
            (i = Go(this, Fo, "f")[e][t]),
              (s[4 * t] = 255 & (Vo[(r[t] >> 24) & 255] ^ (i >> 24))),
              (s[4 * t + 1] =
                255 & (Vo[(r[(t + 3) % 4] >> 16) & 255] ^ (i >> 16))),
              (s[4 * t + 2] =
                255 & (Vo[(r[(t + 2) % 4] >> 8) & 255] ^ (i >> 8))),
              (s[4 * t + 3] = 255 & (Vo[255 & r[(t + 1) % 4]] ^ i));
          return s;
        }
      }
      (Lo = new WeakMap()), (Fo = new WeakMap()), (Mo = new WeakMap());
      class ic {
        constructor(t, e, n) {
          if (n && !(this instanceof n))
            throw new Error(`${t} must be instantiated with "new"`);
          Object.defineProperties(this, {
            aes: { enumerable: !0, value: new sc(e) },
            name: { enumerable: !0, value: t },
          });
        }
      }
      var ac,
        oc,
        cc = function (t, e, n, r, s) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !s)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof e ? t !== e || !s : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
        },
        uc = function (t, e, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        };
      class lc extends ic {
        constructor(t, e) {
          if (
            (super("ECC", t, lc), ac.set(this, void 0), oc.set(this, void 0), e)
          ) {
            if (e.length % 16)
              throw new TypeError("invalid iv size (must be 16 bytes)");
            cc(this, ac, new Uint8Array(e), "f");
          } else cc(this, ac, new Uint8Array(16), "f");
          cc(this, oc, this.iv, "f");
        }
        get iv() {
          return new Uint8Array(uc(this, ac, "f"));
        }
        encrypt(t) {
          if (t.length % 16)
            throw new TypeError(
              "invalid plaintext size (must be multiple of 16 bytes)",
            );
          const e = new Uint8Array(t.length);
          for (let n = 0; n < t.length; n += 16) {
            for (let e = 0; e < 16; e++) uc(this, oc, "f")[e] ^= t[n + e];
            cc(this, oc, this.aes.encrypt(uc(this, oc, "f")), "f"),
              e.set(uc(this, oc, "f"), n);
          }
          return e;
        }
        decrypt(t) {
          if (t.length % 16)
            throw new TypeError(
              "invalid ciphertext size (must be multiple of 16 bytes)",
            );
          const e = new Uint8Array(t.length);
          for (let n = 0; n < t.length; n += 16) {
            const r = this.aes.decrypt(t.subarray(n, n + 16));
            for (let s = 0; s < 16; s++)
              (e[n + s] = r[s] ^ uc(this, oc, "f")[s]),
                (uc(this, oc, "f")[s] = t[n + s]);
          }
          return e;
        }
      }
      (ac = new WeakMap()), (oc = new WeakMap());
      new WeakMap(), new WeakMap(), new WeakSet();
      var hc,
        fc,
        dc,
        pc = function (t, e, n, r, s) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !s)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof e ? t !== e || !s : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === r ? s.call(t, n) : s ? (s.value = n) : e.set(t, n), n;
        },
        gc = function (t, e, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
        };
      class mc extends ic {
        constructor(t, e) {
          super("CTR", t, mc),
            hc.set(this, void 0),
            fc.set(this, void 0),
            dc.set(this, void 0),
            pc(this, dc, new Uint8Array(16), "f"),
            gc(this, dc, "f").fill(0),
            pc(this, hc, gc(this, dc, "f"), "f"),
            pc(this, fc, 16, "f"),
            null == e && (e = 1),
            "number" == typeof e
              ? this.setCounterValue(e)
              : this.setCounterBytes(e);
        }
        get counter() {
          return new Uint8Array(gc(this, dc, "f"));
        }
        setCounterValue(t) {
          if (!Number.isInteger(t) || t < 0 || t > Number.MAX_SAFE_INTEGER)
            throw new TypeError("invalid counter initial integer value");
          for (let e = 15; e >= 0; --e)
            (gc(this, dc, "f")[e] = t % 256), (t = Math.floor(t / 256));
        }
        setCounterBytes(t) {
          if (16 !== t.length)
            throw new TypeError(
              "invalid counter initial Uint8Array value length",
            );
          gc(this, dc, "f").set(t);
        }
        increment() {
          for (let t = 15; t >= 0; t--) {
            if (255 !== gc(this, dc, "f")[t]) {
              gc(this, dc, "f")[t]++;
              break;
            }
            gc(this, dc, "f")[t] = 0;
          }
        }
        encrypt(t) {
          var e, n;
          const r = new Uint8Array(t);
          for (let t = 0; t < r.length; t++)
            16 === gc(this, fc, "f") &&
              (pc(this, hc, this.aes.encrypt(gc(this, dc, "f")), "f"),
              pc(this, fc, 0, "f"),
              this.increment()),
              (r[t] ^= gc(this, hc, "f")[
                (pc(this, fc, ((n = gc(this, fc, "f")), (e = n++), n), "f"), e)
              ]);
          return r;
        }
        decrypt(t) {
          return this.encrypt(t);
        }
      }
      function yc(t) {
        return (
          "string" != typeof t || t.startsWith("0x") || (t = "0x" + t),
          (0, i.h_)(t)
        );
      }
      function wc(t, e) {
        for (t = String(t); t.length < e; ) t = "0" + t;
        return t;
      }
      function Ac(t) {
        return "string" == typeof t ? (0, s.Y0)(t, "NFKC") : (0, i.h_)(t);
      }
      function bc(t, e) {
        const n = e.match(/^([a-z0-9$_.-]*)(:([a-z]+))?(!)?$/i);
        (0, A.en)(null != n, "invalid path", "path", e);
        const r = n[1],
          s = n[3],
          i = "!" === n[4];
        let a = t;
        for (const t of r.toLowerCase().split(".")) {
          if (Array.isArray(a)) {
            if (!t.match(/^[0-9]+$/)) break;
            a = a[parseInt(t)];
          } else if ("object" == typeof a) {
            let e = null;
            for (const n in a)
              if (n.toLowerCase() === t) {
                e = a[n];
                break;
              }
            a = e;
          } else a = null;
          if (null == a) break;
        }
        if (
          ((0, A.en)(!i || null != a, "missing required value", "path", r),
          s && null != a)
        ) {
          if ("int" === s) {
            if ("string" == typeof a && a.match(/^-?[0-9]+$/))
              return parseInt(a);
            if (Number.isSafeInteger(a)) return a;
          }
          if ("number" === s && "string" == typeof a && a.match(/^-?[0-9.]*$/))
            return parseFloat(a);
          if ("data" === s && "string" == typeof a) return yc(a);
          if ("array" === s && Array.isArray(a)) return a;
          if (s === typeof a) return a;
          (0, A.en)(!1, `wrong type found for ${s} `, "path", r);
        }
        return a;
      }
      (hc = new WeakMap()),
        (fc = new WeakMap()),
        (dc = new WeakMap()),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      const vc = "m/44'/60'/0'/0/0";
      function Ec(t) {
        try {
          const e = JSON.parse(t);
          if (3 === (null != e.version ? parseInt(e.version) : 0)) return !0;
        } catch (t) {}
        return !1;
      }
      function Pc(t, e) {
        const n = (0, i.Pw)(e),
          r = bc(t, "crypto.ciphertext:data!"),
          s = (0, i.Dv)((0, d.w)((0, i.zo)([n.slice(16, 32), r]))).substring(2);
        (0, A.en)(
          s === bc(t, "crypto.mac:string!").toLowerCase(),
          "incorrect password",
          "password",
          "[ REDACTED ]",
        );
        const a = (function (t, e, n) {
            if ("aes-128-ctr" === bc(t, "crypto.cipher:string")) {
              const r = bc(t, "crypto.cipherparams.iv:data!"),
                s = new mc(e, r);
              return (0, i.Dv)(s.decrypt(n));
            }
            (0, A.hu)(!1, "unsupported cipher", "UNSUPPORTED_OPERATION", {
              operation: "decrypt",
            });
          })(t, n.slice(0, 16), r),
          o = jr(a);
        if (t.address) {
          let e = t.address.toLowerCase();
          e.startsWith("0x") || (e = "0x" + e),
            (0, A.en)(
              (0, b.K)(e) === o,
              "keystore address/privateKey mismatch",
              "address",
              t.address,
            );
        }
        const c = { address: o, privateKey: a };
        if ("0.1" === bc(t, "x-ethers.version:string")) {
          const e = n.slice(32, 64),
            r = bc(t, "x-ethers.mnemonicCiphertext:data!"),
            s = bc(t, "x-ethers.mnemonicCounter:data!"),
            a = new mc(e, s);
          c.mnemonic = {
            path: bc(t, "x-ethers.path:string") || vc,
            locale: bc(t, "x-ethers.locale:string") || "en",
            entropy: (0, i.Dv)((0, i.Pw)(a.decrypt(r))),
          };
        }
        return c;
      }
      function kc(t) {
        const e = bc(t, "crypto.kdf:string");
        if (e && "string" == typeof e) {
          if ("scrypt" === e.toLowerCase()) {
            const n = bc(t, "crypto.kdfparams.salt:data!"),
              r = bc(t, "crypto.kdfparams.n:int!"),
              s = bc(t, "crypto.kdfparams.r:int!"),
              i = bc(t, "crypto.kdfparams.p:int!");
            (0, A.en)(r > 0 && 0 == (r & (r - 1)), "invalid kdf.N", "kdf.N", r),
              (0, A.en)(s > 0 && i > 0, "invalid kdf", "kdf", e);
            const a = bc(t, "crypto.kdfparams.dklen:int!");
            return (
              (0, A.en)(32 === a, "invalid kdf.dklen", "kdf.dflen", a),
              { name: "scrypt", salt: n, N: r, r: s, p: i, dkLen: 64 }
            );
          }
          if ("pbkdf2" === e.toLowerCase()) {
            const e = bc(t, "crypto.kdfparams.salt:data!"),
              n = bc(t, "crypto.kdfparams.prf:string!"),
              r = n.split("-").pop();
            (0, A.en)(
              "sha256" === r || "sha512" === r,
              "invalid kdf.pdf",
              "kdf.pdf",
              n,
            );
            const s = bc(t, "crypto.kdfparams.c:int!"),
              i = bc(t, "crypto.kdfparams.dklen:int!");
            return (
              (0, A.en)(32 === i, "invalid kdf.dklen", "kdf.dklen", i),
              { name: "pbkdf2", salt: e, count: s, dkLen: i, algorithm: r }
            );
          }
        }
        (0, A.en)(!1, "unsupported key-derivation function", "kdf", e);
      }
      function Nc(t, e) {
        const n = JSON.parse(t),
          r = Ac(e),
          s = kc(n);
        if ("pbkdf2" === s.name) {
          const { salt: t, count: e, dkLen: i, algorithm: a } = s;
          return Pc(n, Bt(r, t, e, i, a));
        }
        (0, A.hu)("scrypt" === s.name, "cannot be reached", "UNKNOWN_ERROR", {
          params: s,
        });
        const { salt: i, N: a, r: o, p: c, dkLen: u } = s;
        return Pc(n, Wt(r, i, a, o, c, u));
      }
      function Cc(t) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      }
      async function Tc(t, e, n) {
        const r = JSON.parse(t),
          s = Ac(e),
          i = kc(r);
        if ("pbkdf2" === i.name) {
          n && (n(0), await Cc(0));
          const { salt: t, count: e, dkLen: a, algorithm: o } = i,
            c = Bt(s, t, e, a, o);
          return n && (n(1), await Cc(0)), Pc(r, c);
        }
        (0, A.hu)("scrypt" === i.name, "cannot be reached", "UNKNOWN_ERROR", {
          params: i,
        });
        const { salt: a, N: o, r: c, p: u, dkLen: l } = i;
        return Pc(r, await qt(s, a, o, c, u, l, n));
      }
      function Ic(t) {
        const e = null != t.salt ? (0, i.Pw)(t.salt, "options.salt") : Ft(32);
        let n = 1 << 17,
          r = 8,
          s = 1;
        return (
          t.scrypt &&
            (t.scrypt.N && (n = t.scrypt.N),
            t.scrypt.r && (r = t.scrypt.r),
            t.scrypt.p && (s = t.scrypt.p)),
          (0, A.en)(
            "number" == typeof n &&
              n > 0 &&
              Number.isSafeInteger(n) &&
              (BigInt(n) & BigInt(n - 1)) === BigInt(0),
            "invalid scrypt N parameter",
            "options.N",
            n,
          ),
          (0, A.en)(
            "number" == typeof r && r > 0 && Number.isSafeInteger(r),
            "invalid scrypt r parameter",
            "options.r",
            r,
          ),
          (0, A.en)(
            "number" == typeof s && s > 0 && Number.isSafeInteger(s),
            "invalid scrypt p parameter",
            "options.p",
            s,
          ),
          { name: "scrypt", dkLen: 32, salt: e, N: n, r, p: s }
        );
      }
      function xc(t, e, n, s) {
        const a = (0, i.Pw)(n.privateKey, "privateKey"),
          o = null != s.iv ? (0, i.Pw)(s.iv, "options.iv") : Ft(16);
        (0, A.en)(
          16 === o.length,
          "invalid options.iv length",
          "options.iv",
          s.iv,
        );
        const c = null != s.uuid ? (0, i.Pw)(s.uuid, "options.uuid") : Ft(16);
        (0, A.en)(
          16 === c.length,
          "invalid options.uuid length",
          "options.uuid",
          s.iv,
        );
        const u = t.slice(0, 16),
          l = t.slice(16, 32),
          h = new mc(u, o),
          f = (0, i.Pw)(h.encrypt(a)),
          p = (0, d.w)((0, i.zo)([l, f])),
          g = {
            address: n.address.substring(2).toLowerCase(),
            id: vo(c),
            version: 3,
            Crypto: {
              cipher: "aes-128-ctr",
              cipherparams: { iv: (0, i.Dv)(o).substring(2) },
              ciphertext: (0, i.Dv)(f).substring(2),
              kdf: "scrypt",
              kdfparams: {
                salt: (0, i.Dv)(e.salt).substring(2),
                n: e.N,
                dklen: 32,
                p: e.p,
                r: e.r,
              },
              mac: p.substring(2),
            },
          };
        if (n.mnemonic) {
          const e = null != s.client ? s.client : `ethers/${r.i}`,
            a = n.mnemonic.path || vc,
            o = n.mnemonic.locale || "en",
            c = t.slice(32, 64),
            u = (0, i.Pw)(n.mnemonic.entropy, "account.mnemonic.entropy"),
            l = Ft(16),
            h = new mc(c, l),
            f = (0, i.Pw)(h.encrypt(u)),
            d = new Date(),
            p =
              "UTC--" +
              d.getUTCFullYear() +
              "-" +
              wc(d.getUTCMonth() + 1, 2) +
              "-" +
              wc(d.getUTCDate(), 2) +
              "T" +
              wc(d.getUTCHours(), 2) +
              "-" +
              wc(d.getUTCMinutes(), 2) +
              "-" +
              wc(d.getUTCSeconds(), 2) +
              ".0Z--" +
              g.address;
          g["x-ethers"] = {
            client: e,
            gethFilename: p,
            path: a,
            locale: o,
            mnemonicCounter: (0, i.Dv)(l).substring(2),
            mnemonicCiphertext: (0, i.Dv)(f).substring(2),
            version: "0.1",
          };
        }
        return JSON.stringify(g);
      }
      function Rc(t, e, n) {
        null == n && (n = {});
        const r = Ac(e),
          s = Ic(n),
          a = Wt(r, s.salt, s.N, s.r, s.p, 64);
        return xc((0, i.Pw)(a), s, t, n);
      }
      async function Oc(t, e, n) {
        null == n && (n = {});
        const r = Ac(e),
          s = Ic(n),
          a = await qt(r, s.salt, s.N, s.r, s.p, 64, n.progressCallback);
        return xc((0, i.Pw)(a), s, t, n);
      }
      const Sc = "m/44'/60'/0'/0/0",
        Bc = new Uint8Array([
          66, 105, 116, 99, 111, 105, 110, 32, 115, 101, 101, 100,
        ]),
        Dc = 2147483648,
        Uc = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
        );
      function Lc(t, e) {
        let n = "";
        for (; t; )
          (n = "0123456789abcdef"[t % 16] + n), (t = Math.trunc(t / 16));
        for (; n.length < 2 * e; ) n = "0" + n;
        return "0x" + n;
      }
      function Fc(t) {
        const e = (0, i.Pw)(t),
          n = (0, i.QB)(re(re(e)), 0, 4);
        return di((0, i.zo)([e, n]));
      }
      const Mc = {};
      function Gc(t, e, n, r) {
        const s = new Uint8Array(37);
        t & Dc
          ? ((0, A.hu)(
              null != r,
              "cannot derive child of neutered node",
              "UNSUPPORTED_OPERATION",
              { operation: "deriveChild" },
            ),
            s.set((0, i.Pw)(r), 1))
          : s.set((0, i.Pw)(n));
        for (let e = 24; e >= 0; e -= 8)
          s[33 + (e >> 3)] = (t >> (24 - e)) & 255;
        const a = (0, i.Pw)(lt("sha512", e, s));
        return { IL: a.slice(0, 32), IR: a.slice(32) };
      }
      function Kc(t, e) {
        const n = e.split("/");
        (0, A.en)(
          n.length > 0 && ("m" === n[0] || t.depth > 0),
          "invalid path",
          "path",
          e,
        ),
          "m" === n[0] && n.shift();
        let r = t;
        for (let t = 0; t < n.length; t++) {
          const e = n[t];
          if (e.match(/^[0-9]+'$/)) {
            const n = parseInt(e.substring(0, e.length - 1));
            (0, A.en)(n < Dc, "invalid path index", `path[${t}]`, e),
              (r = r.deriveChild(Dc + n));
          } else if (e.match(/^[0-9]+$/)) {
            const n = parseInt(e);
            (0, A.en)(n < Dc, "invalid path index", `path[${t}]`, e),
              (r = r.deriveChild(n));
          } else (0, A.en)(!1, "invalid path component", `path[${t}]`, e);
        }
        return r;
      }
      class jc extends Uo {
        publicKey;
        fingerprint;
        parentFingerprint;
        mnemonic;
        chainCode;
        path;
        index;
        depth;
        constructor(t, e, n, r, s, a, o, c, u) {
          super(e, u),
            (0, A.NK)(t, Mc, "HDNodeWallet"),
            (0, B.h)(this, { publicKey: e.compressedPublicKey });
          const l = (0, i.QB)(xt(re(this.publicKey)), 0, 4);
          (0, B.h)(this, {
            parentFingerprint: n,
            fingerprint: l,
            chainCode: r,
            path: s,
            index: a,
            depth: o,
          }),
            (0, B.h)(this, { mnemonic: c });
        }
        connect(t) {
          return new jc(
            Mc,
            this.signingKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.mnemonic,
            t,
          );
        }
        #Te() {
          const t = { address: this.address, privateKey: this.privateKey },
            e = this.mnemonic;
          return (
            this.path &&
              e &&
              "en" === e.wordlist.locale &&
              "" === e.password &&
              (t.mnemonic = {
                path: this.path,
                locale: "en",
                entropy: e.entropy,
              }),
            t
          );
        }
        async encrypt(t, e) {
          return await Oc(this.#Te(), t, { progressCallback: e });
        }
        encryptSync(t) {
          return Rc(this.#Te(), t);
        }
        get extendedKey() {
          return (
            (0, A.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" },
            ),
            Fc(
              (0, i.zo)([
                "0x0488ADE4",
                Lc(this.depth, 1),
                this.parentFingerprint,
                Lc(this.index, 4),
                this.chainCode,
                (0, i.zo)(["0x00", this.privateKey]),
              ]),
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        neuter() {
          return new Hc(
            Mc,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            this.provider,
          );
        }
        deriveChild(t) {
          const e = (0, p.Dx)(t, "index");
          (0, A.en)(e <= 4294967295, "invalid index", "index", e);
          let n = this.path;
          n && ((n += "/" + (e & ~Dc)), e & Dc && (n += "'"));
          const { IR: r, IL: s } = Gc(
              e,
              this.chainCode,
              this.publicKey,
              this.privateKey,
            ),
            a = new yn(
              (0, p.m9)(((0, p.Gh)(s) + BigInt(this.privateKey)) % Uc, 32),
            );
          return new jc(
            Mc,
            a,
            this.fingerprint,
            (0, i.Dv)(r),
            n,
            e,
            this.depth + 1,
            this.mnemonic,
            this.provider,
          );
        }
        derivePath(t) {
          return Kc(this, t);
        }
        static #Ie(t, e) {
          (0, A.en)((0, i.Zq)(t), "invalid seed", "seed", "[REDACTED]");
          const n = (0, i.Pw)(t, "seed");
          (0, A.en)(
            n.length >= 16 && n.length <= 64,
            "invalid seed",
            "seed",
            "[REDACTED]",
          );
          const r = (0, i.Pw)(lt("sha512", Bc, n)),
            s = new yn((0, i.Dv)(r.slice(0, 32)));
          return new jc(
            Mc,
            s,
            "0x00000000",
            (0, i.Dv)(r.slice(32)),
            "m",
            0,
            0,
            e,
            null,
          );
        }
        static fromExtendedKey(t) {
          const e = (0, p.ot)(pi(t));
          (0, A.en)(
            82 === e.length || Fc(e.slice(0, 78)) === t,
            "invalid extended key",
            "extendedKey",
            "[ REDACTED ]",
          );
          const n = e[4],
            r = (0, i.Dv)(e.slice(5, 9)),
            s = parseInt((0, i.Dv)(e.slice(9, 13)).substring(2), 16),
            a = (0, i.Dv)(e.slice(13, 45)),
            o = e.slice(45, 78);
          switch ((0, i.Dv)(e.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf": {
              const t = (0, i.Dv)(o);
              return new Hc(Mc, jr(t), t, r, a, null, s, n, null);
            }
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== o[0]) break;
              return new jc(
                Mc,
                new yn(o.slice(1)),
                r,
                a,
                null,
                s,
                n,
                null,
                null,
              );
          }
          (0, A.en)(
            !1,
            "invalid extended key prefix",
            "extendedKey",
            "[ REDACTED ]",
          );
        }
        static createRandom(t, e, n) {
          null == t && (t = ""),
            null == e && (e = Sc),
            null == n && (n = xo.wordlist());
          const r = Do.fromEntropy(Ft(16), t, n);
          return jc.#Ie(r.computeSeed(), r).derivePath(e);
        }
        static fromMnemonic(t, e) {
          return e || (e = Sc), jc.#Ie(t.computeSeed(), t).derivePath(e);
        }
        static fromPhrase(t, e, n, r) {
          null == e && (e = ""),
            null == n && (n = Sc),
            null == r && (r = xo.wordlist());
          const s = Do.fromPhrase(t, e, r);
          return jc.#Ie(s.computeSeed(), s).derivePath(n);
        }
        static fromSeed(t) {
          return jc.#Ie(t, null);
        }
      }
      class Hc extends ra {
        publicKey;
        fingerprint;
        parentFingerprint;
        chainCode;
        path;
        index;
        depth;
        constructor(t, e, n, r, s, a, o, c, u) {
          super(e, u),
            (0, A.NK)(t, Mc, "HDNodeVoidWallet"),
            (0, B.h)(this, { publicKey: n });
          const l = (0, i.QB)(xt(re(n)), 0, 4);
          (0, B.h)(this, {
            publicKey: n,
            fingerprint: l,
            parentFingerprint: r,
            chainCode: s,
            path: a,
            index: o,
            depth: c,
          });
        }
        connect(t) {
          return new Hc(
            Mc,
            this.address,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.path,
            this.index,
            this.depth,
            t,
          );
        }
        get extendedKey() {
          return (
            (0, A.hu)(
              this.depth < 256,
              "Depth too deep",
              "UNSUPPORTED_OPERATION",
              { operation: "extendedKey" },
            ),
            Fc(
              (0, i.zo)([
                "0x0488B21E",
                Lc(this.depth, 1),
                this.parentFingerprint,
                Lc(this.index, 4),
                this.chainCode,
                this.publicKey,
              ]),
            )
          );
        }
        hasPath() {
          return null != this.path;
        }
        deriveChild(t) {
          const e = (0, p.Dx)(t, "index");
          (0, A.en)(e <= 4294967295, "invalid index", "index", e);
          let n = this.path;
          n && ((n += "/" + (e & ~Dc)), e & Dc && (n += "'"));
          const { IR: r, IL: s } = Gc(e, this.chainCode, this.publicKey, null),
            a = yn.addPoints(s, this.publicKey, !0),
            o = jr(a);
          return new Hc(
            Mc,
            o,
            a,
            this.fingerprint,
            (0, i.Dv)(r),
            n,
            e,
            this.depth + 1,
            this.provider,
          );
        }
        derivePath(t) {
          return Kc(this, t);
        }
      }
      function _c(t) {
        const e = (0, p.Dx)(t, "index");
        return (
          (0, A.en)(e >= 0 && e < Dc, "invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
      function Vc(t) {
        const e = (0, p.Dx)(t, "index");
        return (
          (0, A.en)(e >= 0 && e < Dc, "invalid account index", "index", e),
          `m/44'/60'/0'/0/${e}`
        );
      }
      function Qc(t) {
        try {
          if (JSON.parse(t).encseed) return !0;
        } catch (t) {}
        return !1;
      }
      function zc(t, e) {
        const n = JSON.parse(t),
          r = Ac(e),
          s = (0, b.K)(bc(n, "ethaddr:string!")),
          a = yc(bc(n, "encseed:string!"));
        (0, A.en)(a && a.length % 16 == 0, "invalid encseed", "json", t);
        const o = (0, i.Pw)(Bt(r, r, 2e3, 32, "sha256")).slice(0, 16),
          c = a.slice(0, 16),
          u = a.slice(16),
          l = new lc(o, c),
          h = (function (t) {
            if (t.length < 16) throw new TypeError("PKCS#7 invalid length");
            const e = t[t.length - 1];
            if (e > 16) throw new TypeError("PKCS#7 padding byte out of range");
            const n = t.length - e;
            for (let r = 0; r < e; r++)
              if (t[n + r] !== e)
                throw new TypeError("PKCS#7 invalid padding byte");
            return new Uint8Array(t.subarray(0, n));
          })((0, i.Pw)(l.decrypt(u)));
        let f = "";
        for (let t = 0; t < h.length; t++) f += String.fromCharCode(h[t]);
        return { address: s, privateKey: (0, Xr.id)(f) };
      }
      function Jc(t) {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      }
      class Zc extends Uo {
        constructor(t, e) {
          "string" != typeof t || t.startsWith("0x") || (t = "0x" + t),
            super("string" == typeof t ? new yn(t) : t, e);
        }
        connect(t) {
          return new Zc(this.signingKey, t);
        }
        async encrypt(t, e) {
          const n = { address: this.address, privateKey: this.privateKey };
          return await Oc(n, t, { progressCallback: e });
        }
        encryptSync(t) {
          return Rc({ address: this.address, privateKey: this.privateKey }, t);
        }
        static #xe(t) {
          if (
            ((0, A.en)(t, "invalid JSON wallet", "json", "[ REDACTED ]"),
            "mnemonic" in t && t.mnemonic && "en" === t.mnemonic.locale)
          ) {
            const e = Do.fromEntropy(t.mnemonic.entropy),
              n = jc.fromMnemonic(e, t.mnemonic.path);
            if (n.address === t.address && n.privateKey === t.privateKey)
              return n;
            console.log(
              "WARNING: JSON mismatch address/privateKey != mnemonic; fallback onto private key",
            );
          }
          const e = new Zc(t.privateKey);
          return (
            (0, A.en)(
              e.address === t.address,
              "address/privateKey mismatch",
              "json",
              "[ REDACTED ]",
            ),
            e
          );
        }
        static async fromEncryptedJson(t, e, n) {
          let r = null;
          return (
            Ec(t)
              ? (r = await Tc(t, e, n))
              : Qc(t) &&
                (n && (n(0), await Jc(0)),
                (r = zc(t, e)),
                n && (n(1), await Jc(0))),
            Zc.#xe(r)
          );
        }
        static fromEncryptedJsonSync(t, e) {
          let n = null;
          return (
            Ec(t)
              ? (n = Nc(t, e))
              : Qc(t)
              ? (n = zc(t, e))
              : (0, A.en)(!1, "invalid JSON wallet", "json", "[ REDACTED ]"),
            Zc.#xe(n)
          );
        }
        static createRandom(t) {
          const e = jc.createRandom();
          return t ? e.connect(t) : e;
        }
        static fromPhrase(t, e) {
          const n = jc.fromPhrase(t);
          return e ? n.connect(e) : n;
        }
      }
      class qc extends To {
        #Re;
        constructor(t, e, n, r) {
          super(t, e, r), (this.#Re = n);
        }
        get _accent() {
          return this.#Re;
        }
        _decodeWords() {
          return (function (t, e) {
            let n = No(t).join(",");
            return (
              e.split(/,/g).forEach((t) => {
                const r = t.match(/^([a-z]*)([0-9]+)([0-9])(.*)$/);
                (0, A.en)(
                  null !== r,
                  "internal error parsing accents",
                  "accents",
                  e,
                );
                let s = 0;
                const i = (function (t, e) {
                    const n = (1 << t) - 1,
                      r = [];
                    let s = 0,
                      i = 0,
                      a = 0;
                    for (let o = 0; o < e.length; o++)
                      for (
                        s =
                          (s << 6) |
                          ")!@#$%^&*(ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".indexOf(
                            e[o],
                          ),
                          i += 6;
                        i >= t;

                      ) {
                        const e = s >> (i - t);
                        (s &= (1 << (i - t)) - 1),
                          (i -= t),
                          0 === e ? (a += n) : (r.push(e + a), (a = 0));
                      }
                    return r;
                  })(parseInt(r[3]), r[4]),
                  a = parseInt(r[2]),
                  o = new RegExp(`([${r[1]}])`, "g");
                n = n.replace(
                  o,
                  (t, e) => (
                    0 == --i[s] &&
                      ((e = String.fromCharCode(e.charCodeAt(0), a)), s++),
                    e
                  ),
                );
              }),
              n.split(",")
            );
          })(this._data, this._accent);
        }
      }
      const Wc = { en: xo.wordlist() };
    },
    2186: (t, e, n) => {
      n.d(e, { id: () => i });
      var r = n(5143),
        s = n(7155);
      function i(t) {
        return (0, r.w)((0, s.Y0)(t));
      }
    },
    4101: (t, e, n) => {
      n.d(e, {
        IX: () => g,
        Mw: () => m,
        Zb: () => p,
        gO: () => d,
        jW: () => h,
        kK: () => f,
      });
      var r = n(5857),
        s = n(455),
        i = n(2229),
        a = n(6024),
        o = n(1891);
      const c = BigInt(0);
      function u(t) {
        return null == t ? null : t;
      }
      function l(t) {
        return null == t ? null : t.toString();
      }
      class h {
        gasPrice;
        maxFeePerGas;
        maxPriorityFeePerGas;
        constructor(t, e, n) {
          (0, r.h)(this, {
            gasPrice: u(t),
            maxFeePerGas: u(e),
            maxPriorityFeePerGas: u(n),
          });
        }
        toJSON() {
          const {
            gasPrice: t,
            maxFeePerGas: e,
            maxPriorityFeePerGas: n,
          } = this;
          return {
            _type: "FeeData",
            gasPrice: l(t),
            maxFeePerGas: l(e),
            maxPriorityFeePerGas: l(n),
          };
        }
      }
      function f(t) {
        const e = {};
        t.to && (e.to = t.to),
          t.from && (e.from = t.from),
          t.data && (e.data = (0, s.Dv)(t.data));
        const n =
          "chainId,gasLimit,gasPrice,maxFeePerGas,maxPriorityFeePerGas,value".split(
            /,/,
          );
        for (const r of n)
          r in t && null != t[r] && (e[r] = (0, i.yT)(t[r], `request.${r}`));
        const r = "type,nonce".split(/,/);
        for (const n of r)
          n in t && null != t[n] && (e[n] = (0, i.Dx)(t[n], `request.${n}`));
        return (
          t.accessList && (e.accessList = (0, o.z)(t.accessList)),
          "blockTag" in t && (e.blockTag = t.blockTag),
          "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead),
          "customData" in t && (e.customData = t.customData),
          e
        );
      }
      class d {
        provider;
        number;
        hash;
        timestamp;
        parentHash;
        nonce;
        difficulty;
        gasLimit;
        gasUsed;
        miner;
        extraData;
        baseFeePerGas;
        #Oe;
        constructor(t, e) {
          (this.#Oe = t.transactions.map((t) =>
            "string" != typeof t ? new m(t, e) : t,
          )),
            (0, r.h)(this, {
              provider: e,
              hash: u(t.hash),
              number: t.number,
              timestamp: t.timestamp,
              parentHash: t.parentHash,
              nonce: t.nonce,
              difficulty: t.difficulty,
              gasLimit: t.gasLimit,
              gasUsed: t.gasUsed,
              miner: t.miner,
              extraData: t.extraData,
              baseFeePerGas: u(t.baseFeePerGas),
            });
        }
        get transactions() {
          return this.#Oe.map((t) => ("string" == typeof t ? t : t.hash));
        }
        get prefetchedTransactions() {
          const t = this.#Oe.slice();
          return 0 === t.length
            ? []
            : ((0, a.hu)(
                "object" == typeof t[0],
                "transactions were not prefetched with block request",
                "UNSUPPORTED_OPERATION",
                { operation: "transactionResponses()" },
              ),
              t);
        }
        toJSON() {
          const {
            baseFeePerGas: t,
            difficulty: e,
            extraData: n,
            gasLimit: r,
            gasUsed: s,
            hash: i,
            miner: a,
            nonce: o,
            number: c,
            parentHash: u,
            timestamp: h,
            transactions: f,
          } = this;
          return {
            _type: "Block",
            baseFeePerGas: l(t),
            difficulty: l(e),
            extraData: n,
            gasLimit: l(r),
            gasUsed: l(s),
            hash: i,
            miner: a,
            nonce: o,
            number: c,
            parentHash: u,
            timestamp: h,
            transactions: f,
          };
        }
        [Symbol.iterator]() {
          let t = 0;
          const e = this.transactions;
          return {
            next: () =>
              t < this.length
                ? { value: e[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get length() {
          return this.#Oe.length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(t) {
          let e;
          if ("number" == typeof t) e = this.#Oe[t];
          else {
            const n = t.toLowerCase();
            for (const t of this.#Oe) {
              if ("string" == typeof t) {
                if (t !== n) continue;
                e = t;
                break;
              }
              if (t.hash !== n) {
                e = t;
                break;
              }
            }
          }
          if (null == e) throw new Error("no such tx");
          return "string" == typeof e
            ? await this.provider.getTransaction(e)
            : e;
        }
        getPrefetchedTransaction(t) {
          const e = this.prefetchedTransactions;
          if ("number" == typeof t) return e[t];
          t = t.toLowerCase();
          for (const n of e) if (n.hash === t) return n;
          (0, a.en)(!1, "no matching transaction", "indexOrHash", t);
        }
        isMined() {
          return !!this.hash;
        }
        isLondon() {
          return !!this.baseFeePerGas;
        }
        orphanedEvent() {
          if (!this.isMined()) throw new Error("");
          return { orphan: "drop-block", hash: this.hash, number: this.number };
        }
      }
      class p {
        provider;
        transactionHash;
        blockHash;
        blockNumber;
        removed;
        address;
        data;
        topics;
        index;
        transactionIndex;
        constructor(t, e) {
          this.provider = e;
          const n = Object.freeze(t.topics.slice());
          (0, r.h)(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: n,
            index: t.index,
            transactionIndex: t.transactionIndex,
          });
        }
        toJSON() {
          const {
            address: t,
            blockHash: e,
            blockNumber: n,
            data: r,
            index: s,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c,
          } = this;
          return {
            _type: "log",
            address: t,
            blockHash: e,
            blockNumber: n,
            data: r,
            index: s,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c,
          };
        }
        async getBlock() {
          const t = await this.provider.getBlock(this.blockHash);
          return (
            (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransaction() {
          const t = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, a.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransactionReceipt() {
          const t = await this.provider.getTransactionReceipt(
            this.transactionHash,
          );
          return (
            (0, a.hu)(
              !!t,
              "failed to find transaction receipt",
              "UNKNOWN_ERROR",
              {},
            ),
            t
          );
        }
        removedEvent() {
          return {
            orphan: "drop-log",
            log: {
              transactionHash: (t = this).transactionHash,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              address: t.address,
              data: t.data,
              topics: Object.freeze(t.topics.slice()),
              index: t.index,
            },
          };
          var t;
        }
      }
      class g {
        provider;
        to;
        from;
        contractAddress;
        hash;
        index;
        blockHash;
        blockNumber;
        logsBloom;
        gasUsed;
        cumulativeGasUsed;
        gasPrice;
        type;
        status;
        root;
        #Se;
        constructor(t, e) {
          this.#Se = Object.freeze(t.logs.map((t) => new p(t, e)));
          let n = c;
          null != t.effectiveGasPrice
            ? (n = t.effectiveGasPrice)
            : null != t.gasPrice && (n = t.gasPrice),
            (0, r.h)(this, {
              provider: e,
              to: t.to,
              from: t.from,
              contractAddress: t.contractAddress,
              hash: t.hash,
              index: t.index,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              logsBloom: t.logsBloom,
              gasUsed: t.gasUsed,
              cumulativeGasUsed: t.cumulativeGasUsed,
              gasPrice: n,
              type: t.type,
              status: t.status,
              root: t.root,
            });
        }
        get logs() {
          return this.#Se;
        }
        toJSON() {
          const {
            to: t,
            from: e,
            contractAddress: n,
            hash: r,
            index: s,
            blockHash: i,
            blockNumber: a,
            logsBloom: o,
            logs: c,
            status: u,
            root: h,
          } = this;
          return {
            _type: "TransactionReceipt",
            blockHash: i,
            blockNumber: a,
            contractAddress: n,
            cumulativeGasUsed: l(this.cumulativeGasUsed),
            from: e,
            gasPrice: l(this.gasPrice),
            gasUsed: l(this.gasUsed),
            hash: r,
            index: s,
            logs: c,
            logsBloom: o,
            root: h,
            status: u,
            to: t,
          };
        }
        get length() {
          return this.logs.length;
        }
        [Symbol.iterator]() {
          let t = 0;
          return {
            next: () =>
              t < this.length
                ? { value: this.logs[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get fee() {
          return this.gasUsed * this.gasPrice;
        }
        async getBlock() {
          const t = await this.provider.getBlock(this.blockHash);
          if (null == t) throw new Error("TODO");
          return t;
        }
        async getTransaction() {
          const t = await this.provider.getTransaction(this.hash);
          if (null == t) throw new Error("TODO");
          return t;
        }
        async getResult() {
          return await this.provider.getTransactionResult(this.hash);
        }
        async confirmations() {
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        removedEvent() {
          return w(this);
        }
        reorderedEvent(t) {
          return (
            (0, a.hu)(
              !t || t.isMined(),
              "unmined 'other' transction cannot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "reorderedEvent(other)" },
            ),
            y(this, t)
          );
        }
      }
      class m {
        provider;
        blockNumber;
        blockHash;
        index;
        hash;
        type;
        to;
        from;
        nonce;
        gasLimit;
        gasPrice;
        maxPriorityFeePerGas;
        maxFeePerGas;
        data;
        value;
        chainId;
        signature;
        accessList;
        #Be;
        constructor(t, e) {
          (this.provider = e),
            (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
            (this.blockHash = null != t.blockHash ? t.blockHash : null),
            (this.hash = t.hash),
            (this.index = t.index),
            (this.type = t.type),
            (this.from = t.from),
            (this.to = t.to || null),
            (this.gasLimit = t.gasLimit),
            (this.nonce = t.nonce),
            (this.data = t.data),
            (this.value = t.value),
            (this.gasPrice = t.gasPrice),
            (this.maxPriorityFeePerGas =
              null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
            (this.maxFeePerGas =
              null != t.maxFeePerGas ? t.maxFeePerGas : null),
            (this.chainId = t.chainId),
            (this.signature = t.signature),
            (this.accessList = null != t.accessList ? t.accessList : null),
            (this.#Be = -1);
        }
        toJSON() {
          const {
            blockNumber: t,
            blockHash: e,
            index: n,
            hash: r,
            type: s,
            to: i,
            from: a,
            nonce: o,
            data: c,
            signature: u,
            accessList: h,
          } = this;
          return {
            _type: "TransactionReceipt",
            accessList: h,
            blockNumber: t,
            blockHash: e,
            chainId: l(this.chainId),
            data: c,
            from: a,
            gasLimit: l(this.gasLimit),
            gasPrice: l(this.gasPrice),
            hash: r,
            maxFeePerGas: l(this.maxFeePerGas),
            maxPriorityFeePerGas: l(this.maxPriorityFeePerGas),
            nonce: o,
            signature: u,
            to: i,
            index: n,
            type: s,
            value: l(this.value),
          };
        }
        async getBlock() {
          let t = this.blockNumber;
          if (null == t) {
            const e = await this.getTransaction();
            e && (t = e.blockNumber);
          }
          if (null == t) return null;
          const e = this.provider.getBlock(t);
          if (null == e) throw new Error("TODO");
          return e;
        }
        async getTransaction() {
          return this.provider.getTransaction(this.hash);
        }
        async confirmations() {
          if (null == this.blockNumber) {
            const { tx: t, blockNumber: e } = await (0, r.m)({
              tx: this.getTransaction(),
              blockNumber: this.provider.getBlockNumber(),
            });
            return null == t || null == t.blockNumber
              ? 0
              : e - t.blockNumber + 1;
          }
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        async wait(t, e) {
          const n = null == t ? 1 : t,
            s = null == e ? 0 : e;
          let i = this.#Be,
            o = -1,
            u = -1 === i;
          const l = async () => {
              if (u) return null;
              const { blockNumber: t, nonce: e } = await (0, r.m)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (e < this.nonce) return void (i = t);
              if (u) return null;
              const s = await this.getTransaction();
              if (!s || null == s.blockNumber)
                for (
                  -1 === o && ((o = i - 3), o < this.#Be && (o = this.#Be));
                  o <= t;

                ) {
                  if (u) return null;
                  const e = await this.provider.getBlock(o, !0);
                  if (null == e) return;
                  for (const t of e) if (t === this.hash) return;
                  for (let r = 0; r < e.length; r++) {
                    const s = await e.getTransaction(r);
                    if (s.from === this.from && s.nonce === this.nonce) {
                      if (u) return null;
                      const e = await this.provider.getTransactionReceipt(
                        s.hash,
                      );
                      if (null == e) return;
                      if (t - e.blockNumber + 1 < n) return;
                      let r = "replaced";
                      s.data === this.data &&
                      s.to === this.to &&
                      s.value === this.value
                        ? (r = "repriced")
                        : "0x" === s.data &&
                          s.from === s.to &&
                          s.value === c &&
                          (r = "cancelled"),
                        (0, a.hu)(
                          !1,
                          "transaction was replaced",
                          "TRANSACTION_REPLACED",
                          {
                            cancelled: "replaced" === r || "cancelled" === r,
                            reason: r,
                            replacement: s.replaceableTransaction(i),
                            hash: s.hash,
                            receipt: e,
                          },
                        );
                    }
                  }
                  o++;
                }
            },
            h = await this.provider.getTransactionReceipt(this.hash);
          if (0 === n) return h;
          if (h) {
            if ((await h.confirmations()) >= n) return h;
          } else if ((await l(), 0 === n)) return null;
          const f = new Promise((t, e) => {
            const r = [],
              o = () => {
                r.forEach((t) => t());
              };
            if (
              (r.push(() => {
                u = !0;
              }),
              s > 0)
            ) {
              const t = setTimeout(() => {
                o(), e((0, a.wf)("wait for transaction timeout", "TIMEOUT"));
              }, s);
              r.push(() => {
                clearTimeout(t);
              });
            }
            const c = async (e) => {
              (await e.confirmations()) >= n && (o(), t(e));
            };
            if (
              (r.push(() => {
                this.provider.off(this.hash, c);
              }),
              this.provider.on(this.hash, c),
              i >= 0)
            ) {
              const t = async () => {
                try {
                  await l();
                } catch (t) {
                  if ((0, a.VZ)(t, "TRANSACTION_REPLACED"))
                    return o(), void e(t);
                }
                u || this.provider.once("block", t);
              };
              r.push(() => {
                this.provider.off("block", t);
              }),
                this.provider.once("block", t);
            }
          });
          return await f;
        }
        isMined() {
          return null != this.blockHash;
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        removedEvent() {
          return (
            (0, a.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" },
            ),
            w(this)
          );
        }
        reorderedEvent(t) {
          return (
            (0, a.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" },
            ),
            (0, a.hu)(
              !t || t.isMined(),
              "unmined 'other' transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" },
            ),
            y(this, t)
          );
        }
        replaceableTransaction(t) {
          (0, a.en)(
            Number.isInteger(t) && t >= 0,
            "invalid startBlock",
            "startBlock",
            t,
          );
          const e = new m(this, this.provider);
          return (e.#Be = t), e;
        }
      }
      function y(t, e) {
        return { orphan: "reorder-transaction", tx: t, other: e };
      }
      function w(t) {
        return { orphan: "drop-transaction", tx: t };
      }
    },
    1891: (t, e, n) => {
      n.d(e, { z: () => o });
      var r = n(5556),
        s = n(6024),
        i = n(455);
      function a(t, e) {
        return {
          address: (0, r.K)(t),
          storageKeys: e.map(
            (t, e) => (
              (0, s.en)(
                (0, i.A7)(t, 32),
                "invalid slot",
                `storageKeys[${e}]`,
                t,
              ),
              t.toLowerCase()
            ),
          ),
        };
      }
      function o(t) {
        if (Array.isArray(t))
          return t.map((e, n) =>
            Array.isArray(e)
              ? ((0, s.en)(
                  2 === e.length,
                  "invalid slot set",
                  `value[${n}]`,
                  e,
                ),
                a(e[0], e[1]))
              : ((0, s.en)(
                  null != e && "object" == typeof e,
                  "invalid address-slot set",
                  "value",
                  t,
                ),
                a(e.address, e.storageKeys)),
          );
        (0, s.en)(
          null != t && "object" == typeof t,
          "invalid access list",
          "value",
          t,
        );
        const e = Object.keys(t).map((e) => {
          const n = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return a(e, Object.keys(n).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
    },
    455: (t, e, n) => {
      n.d(e, {
        A7: () => o,
        Dv: () => l,
        M5: () => f,
        Ou: () => p,
        Pw: () => i,
        QB: () => d,
        SK: () => y,
        U3: () => m,
        Zq: () => c,
        h_: () => a,
        zo: () => h,
      });
      var r = n(6024);
      function s(t, e, n) {
        if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
        if ("string" == typeof t && t.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
          const e = new Uint8Array((t.length - 2) / 2);
          let n = 2;
          for (let r = 0; r < e.length; r++)
            (e[r] = parseInt(t.substring(n, n + 2), 16)), (n += 2);
          return e;
        }
        (0, r.en)(!1, "invalid BytesLike value", e || "value", t);
      }
      function i(t, e) {
        return s(t, e, !1);
      }
      function a(t, e) {
        return s(t, e, !0);
      }
      function o(t, e) {
        return !(
          "string" != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          ("number" == typeof e && t.length !== 2 + 2 * e) ||
          (!0 === e && t.length % 2 != 0)
        );
      }
      function c(t) {
        return o(t, !0) || t instanceof Uint8Array;
      }
      const u = "0123456789abcdef";
      function l(t) {
        const e = i(t);
        let n = "0x";
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          n += u[(240 & r) >> 4] + u[15 & r];
        }
        return n;
      }
      function h(t) {
        return "0x" + t.map((t) => l(t).substring(2)).join("");
      }
      function f(t) {
        return o(t, !0) ? (t.length - 2) / 2 : i(t).length;
      }
      function d(t, e, n) {
        const s = i(t);
        return (
          null != n &&
            n > s.length &&
            (0, r.hu)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
              buffer: s,
              length: s.length,
              offset: n,
            }),
          l(s.slice(null == e ? 0 : e, null == n ? s.length : n))
        );
      }
      function p(t) {
        let e = l(t).substring(2);
        for (; e.startsWith("00"); ) e = e.substring(2);
        return "0x" + e;
      }
      function g(t, e, n) {
        const s = i(t);
        (0, r.hu)(
          e >= s.length,
          "padding exceeds data length",
          "BUFFER_OVERRUN",
          { buffer: new Uint8Array(s), length: e, offset: e + 1 },
        );
        const a = new Uint8Array(e);
        return a.fill(0), n ? a.set(s, e - s.length) : a.set(s, 0), l(a);
      }
      function m(t, e) {
        return g(t, e, !0);
      }
      function y(t, e) {
        return g(t, e, !1);
      }
    },
    6024: (t, e, n) => {
      n.d(e, {
        Hl: () => o,
        NK: () => p,
        VZ: () => a,
        en: () => l,
        fA: () => d,
        fG: () => h,
        hu: () => u,
        wf: () => c,
      });
      var r = n(742),
        s = n(5857);
      function i(t) {
        if (null == t) return "null";
        if (Array.isArray(t)) return "[ " + t.map(i).join(", ") + " ]";
        if (t instanceof Uint8Array) {
          const e = "0123456789abcdef";
          let n = "0x";
          for (let r = 0; r < t.length; r++)
            (n += e[t[r] >> 4]), (n += e[15 & t[r]]);
          return n;
        }
        if ("object" == typeof t && "function" == typeof t.toJSON)
          return i(t.toJSON());
        switch (typeof t) {
          case "boolean":
          case "symbol":
          case "number":
            return t.toString();
          case "bigint":
            return BigInt(t).toString();
          case "string":
            return JSON.stringify(t);
          case "object": {
            const e = Object.keys(t);
            return (
              e.sort(),
              "{ " + e.map((e) => `${i(e)}: ${i(t[e])}`).join(", ") + " }"
            );
          }
        }
        return "[ COULD NOT SERIALIZE ]";
      }
      function a(t, e) {
        return t && t.code === e;
      }
      function o(t) {
        return a(t, "CALL_EXCEPTION");
      }
      function c(t, e, n) {
        {
          const s = [];
          if (n) {
            if ("message" in n || "code" in n || "name" in n)
              throw new Error(`value will overwrite populated values: ${i(n)}`);
            for (const t in n) {
              const e = n[t];
              s.push(t + "=" + i(e));
            }
          }
          s.push(`code=${e}`),
            s.push(`version=${r.i}`),
            s.length && (t += " (" + s.join(", ") + ")");
        }
        let a;
        switch (e) {
          case "INVALID_ARGUMENT":
            a = new TypeError(t);
            break;
          case "NUMERIC_FAULT":
          case "BUFFER_OVERRUN":
            a = new RangeError(t);
            break;
          default:
            a = new Error(t);
        }
        return (0, s.h)(a, { code: e }), n && Object.assign(a, n), a;
      }
      function u(t, e, n, r) {
        if (!t) throw c(e, n, r);
      }
      function l(t, e, n, r) {
        u(t, e, "INVALID_ARGUMENT", { argument: n, value: r });
      }
      function h(t, e, n) {
        null == n && (n = ""),
          n && (n = ": " + n),
          u(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
            count: t,
            expectedCount: e,
          }),
          u(t <= e, "too many arguemnts" + n, "UNEXPECTED_ARGUMENT", {
            count: t,
            expectedCount: e,
          });
      }
      const f = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
        try {
          if ("test" !== "test".normalize(e)) throw new Error("bad");
          if ("NFD" === e) {
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw new Error("broken");
          }
          t.push(e);
        } catch (t) {}
        return t;
      }, []);
      function d(t) {
        u(
          f.indexOf(t) >= 0,
          "platform missing String.prototype.normalize",
          "UNSUPPORTED_OPERATION",
          { operation: "String.prototype.normalize", info: { form: t } },
        );
      }
      function p(t, e, n) {
        if ((null == n && (n = ""), t !== e)) {
          let t = n,
            e = "new";
          n && ((t += "."), (e += " " + n)),
            u(
              !1,
              `private constructor; use ${t}from* methods`,
              "UNSUPPORTED_OPERATION",
              { operation: e },
            );
        }
      }
    },
    6539: (t, e, n) => {
      n.d(e, { Z: () => s });
      var r = n(5857);
      class s {
        filter;
        emitter;
        #De;
        constructor(t, e, n) {
          (this.#De = e), (0, r.h)(this, { emitter: t, filter: n });
        }
        async removeListener() {
          null != this.#De && (await this.emitter.off(this.filter, this.#De));
        }
      }
    },
    2229: (t, e, n) => {
      n.d(e, {
        $j: () => u,
        B4: () => A,
        Dx: () => g,
        Gh: () => p,
        He: () => m,
        Qf: () => f,
        _Y: () => c,
        m9: () => y,
        ot: () => w,
        sS: () => l,
        yT: () => h,
      });
      var r = n(455),
        s = n(6024);
      const i = BigInt(0),
        a = BigInt(1),
        o = 9007199254740991;
      function c(t, e) {
        const n = f(t, "value"),
          r = BigInt(g(e, "width"));
        return (
          (0, s.hu)(n >> r === i, "overflow", "NUMERIC_FAULT", {
            operation: "fromTwos",
            fault: "overflow",
            value: t,
          }),
          n >> (r - a) ? -((~n & ((a << r) - a)) + a) : n
        );
      }
      function u(t, e) {
        let n = h(t, "value");
        const r = BigInt(g(e, "width")),
          o = a << (r - a);
        return n < i
          ? ((n = -n),
            (0, s.hu)(n <= o, "too low", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: t,
            }),
            (~n & ((a << r) - a)) + a)
          : ((0, s.hu)(n < o, "too high", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: t,
            }),
            n);
      }
      function l(t, e) {
        const n = f(t, "value"),
          r = BigInt(g(e, "bits"));
        return n & ((a << r) - a);
      }
      function h(t, e) {
        switch (typeof t) {
          case "bigint":
            return t;
          case "number":
            return (
              (0, s.en)(Number.isInteger(t), "underflow", e || "value", t),
              (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t),
              BigInt(t)
            );
          case "string":
            try {
              if ("" === t) throw new Error("empty string");
              return "-" === t[0] && "-" !== t[1]
                ? -BigInt(t.substring(1))
                : BigInt(t);
            } catch (n) {
              (0, s.en)(
                !1,
                `invalid BigNumberish string: ${n.message}`,
                e || "value",
                t,
              );
            }
        }
        (0, s.en)(!1, "invalid BigNumberish value", e || "value", t);
      }
      function f(t, e) {
        const n = h(t, e);
        return (
          (0, s.hu)(
            n >= i,
            "unsigned value cannot be negative",
            "NUMERIC_FAULT",
            { fault: "overflow", operation: "getUint", value: t },
          ),
          n
        );
      }
      const d = "0123456789abcdef";
      function p(t) {
        if (t instanceof Uint8Array) {
          let e = "0x0";
          for (const n of t) (e += d[n >> 4]), (e += d[15 & n]);
          return BigInt(e);
        }
        return h(t);
      }
      function g(t, e) {
        switch (typeof t) {
          case "bigint":
            return (
              (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t),
              Number(t)
            );
          case "number":
            return (
              (0, s.en)(Number.isInteger(t), "underflow", e || "value", t),
              (0, s.en)(t >= -o && t <= o, "overflow", e || "value", t),
              t
            );
          case "string":
            try {
              if ("" === t) throw new Error("empty string");
              return g(BigInt(t), e);
            } catch (n) {
              (0, s.en)(
                !1,
                `invalid numeric string: ${n.message}`,
                e || "value",
                t,
              );
            }
        }
        (0, s.en)(!1, "invalid numeric value", e || "value", t);
      }
      function m(t) {
        return g(p(t));
      }
      function y(t, e) {
        let n = f(t, "value").toString(16);
        if (null == e) n.length % 2 && (n = "0" + n);
        else {
          const r = g(e, "width");
          for (
            (0, s.hu)(
              2 * r >= n.length,
              `value exceeds width (${r} bits)`,
              "NUMERIC_FAULT",
              { operation: "toBeHex", fault: "overflow", value: t },
            );
            n.length < 2 * r;

          )
            n = "0" + n;
        }
        return "0x" + n;
      }
      function w(t) {
        const e = f(t, "value");
        if (e === i) return new Uint8Array([]);
        let n = e.toString(16);
        n.length % 2 && (n = "0" + n);
        const r = new Uint8Array(n.length / 2);
        for (let t = 0; t < r.length; t++) {
          const e = 2 * t;
          r[t] = parseInt(n.substring(e, e + 2), 16);
        }
        return r;
      }
      function A(t) {
        let e = (0, r.Dv)((0, r.Zq)(t) ? t : w(t)).substring(2);
        for (; e.startsWith("0"); ) e = e.substring(1);
        return "" === e && (e = "0"), "0x" + e;
      }
    },
    5857: (t, e, n) => {
      function r(t, e, n) {
        const r = e.split("|").map((t) => t.trim());
        for (let n = 0; n < r.length; n++)
          switch (e) {
            case "any":
              return;
            case "bigint":
            case "boolean":
            case "number":
            case "string":
              if (typeof t === e) return;
          }
        const s = new Error(`invalid value for type ${e}`);
        throw (
          ((s.code = "INVALID_ARGUMENT"),
          (s.argument = `value.${n}`),
          (s.value = t),
          s)
        );
      }
      async function s(t) {
        const e = Object.keys(t);
        return (await Promise.all(e.map((e) => Promise.resolve(t[e])))).reduce(
          (t, n, r) => ((t[e[r]] = n), t),
          {},
        );
      }
      function i(t, e, n) {
        for (let s in e) {
          let i = e[s];
          const a = n ? n[s] : null;
          a && r(i, a, s),
            Object.defineProperty(t, s, {
              enumerable: !0,
              value: i,
              writable: !1,
            });
        }
      }
      n.d(e, { h: () => i, m: () => s });
    },
    7155: (t, e, n) => {
      n.d(e, { XL: () => l, Y0: () => c, ZN: () => u, te: () => a });
      var r = n(455),
        s = n(6024);
      function i(t, e, n, r, s) {
        if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
          let t = 0;
          for (let r = e + 1; r < n.length && n[r] >> 6 == 2; r++) t++;
          return t;
        }
        return "OVERRUN" === t ? n.length - e - 1 : 0;
      }
      const a = Object.freeze({
        error: function (t, e, n, r, i) {
          (0, s.en)(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", n);
        },
        ignore: i,
        replace: function (t, e, n, r, a) {
          return "OVERLONG" === t
            ? ((0, s.en)(
                "number" == typeof a,
                "invalid bad code point for replacement",
                "badCodepoint",
                a,
              ),
              r.push(a),
              0)
            : (r.push(65533), i(t, e, n));
        },
      });
      function o(t, e) {
        null == e && (e = a.error);
        const n = (0, r.Pw)(t, "bytes"),
          s = [];
        let i = 0;
        for (; i < n.length; ) {
          const t = n[i++];
          if (t >> 7 == 0) {
            s.push(t);
            continue;
          }
          let r = null,
            a = null;
          if (192 == (224 & t)) (r = 1), (a = 127);
          else if (224 == (240 & t)) (r = 2), (a = 2047);
          else {
            if (240 != (248 & t)) {
              i += e(
                128 == (192 & t) ? "UNEXPECTED_CONTINUE" : "BAD_PREFIX",
                i - 1,
                n,
                s,
              );
              continue;
            }
            (r = 3), (a = 65535);
          }
          if (i - 1 + r >= n.length) {
            i += e("OVERRUN", i - 1, n, s);
            continue;
          }
          let o = t & ((1 << (8 - r - 1)) - 1);
          for (let t = 0; t < r; t++) {
            let t = n[i];
            if (128 != (192 & t)) {
              (i += e("MISSING_CONTINUE", i, n, s)), (o = null);
              break;
            }
            (o = (o << 6) | (63 & t)), i++;
          }
          null !== o &&
            (o > 1114111
              ? (i += e("OUT_OF_RANGE", i - 1 - r, n, s, o))
              : o >= 55296 && o <= 57343
              ? (i += e("UTF16_SURROGATE", i - 1 - r, n, s, o))
              : o <= a
              ? (i += e("OVERLONG", i - 1 - r, n, s, o))
              : s.push(o));
        }
        return s;
      }
      function c(t, e) {
        null != e && ((0, s.fA)(e), (t = t.normalize(e)));
        let n = [];
        for (let e = 0; e < t.length; e++) {
          const r = t.charCodeAt(e);
          if (r < 128) n.push(r);
          else if (r < 2048) n.push((r >> 6) | 192), n.push((63 & r) | 128);
          else if (55296 == (64512 & r)) {
            e++;
            const i = t.charCodeAt(e);
            (0, s.en)(
              e < t.length && 56320 == (64512 & i),
              "invalid surrogate pair",
              "str",
              t,
            );
            const a = 65536 + ((1023 & r) << 10) + (1023 & i);
            n.push((a >> 18) | 240),
              n.push(((a >> 12) & 63) | 128),
              n.push(((a >> 6) & 63) | 128),
              n.push((63 & a) | 128);
          } else
            n.push((r >> 12) | 224),
              n.push(((r >> 6) & 63) | 128),
              n.push((63 & r) | 128);
        }
        return new Uint8Array(n);
      }
      function u(t, e) {
        return o(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t),
                )),
          )
          .join("");
      }
      function l(t, e) {
        return o(c(t, e));
      }
    },
  },
]);
//# sourceMappingURL=847.index.js.map
