(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [782],
  {
    1942: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { ERC20_ABI: () => D, default: () => E });
      var r = n(5861),
        a = n(885),
        s = n(4687),
        i = n.n(s),
        o = n(7294),
        c = n(3571),
        A = n(1847),
        u = n(8790),
        l = (function () {
          var e = (0, r.Z)(
            i().mark(function e() {
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          window.ethereum.request({
                            method: "wallet_switchEthereumChain",
                            params: [{ chainId: "0x5" }],
                          })
                        );
                      case 4:
                        e.next = 10;
                        break;
                      case 6:
                        (e.prev = 6),
                          (e.t0 = e.catch(1)),
                          console.error(e.t0),
                          4902 === e.t0.code
                            ? console.error("This chain does not exist.")
                            : 4001 === e.t0.code &&
                              console.error("User rejected the request.");
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 6]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        d = n(3379),
        f = n.n(d),
        p = n(7795),
        C = n.n(p),
        h = n(569),
        x = n.n(h),
        b = n(3565),
        m = n.n(b),
        v = n(9216),
        w = n.n(v),
        y = n(4589),
        g = n.n(y),
        k = n(7645),
        B = {};
      (B.styleTagTransform = g()),
        (B.setAttributes = m()),
        (B.insert = x().bind(null, "head")),
        (B.domAPI = C()),
        (B.insertStyleElement = w()),
        f()(k.Z, B),
        k.Z && k.Z.locals && k.Z.locals;
      var D = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint8)",
        "function balanceOf(address) view returns (uint)",
      ];
      const E = function () {
        var e,
          t = (0, o.useContext)(u.S),
          n = t.provider,
          s = t.activeAddress,
          d = (0, o.useState)({}),
          f = (0, a.Z)(d, 2),
          p = f[0],
          C = f[1];
        function h(e) {
          return x.apply(this, arguments);
        }
        function x() {
          return (x = (0, r.Z)(
            i().mark(function e(t) {
              var r, a;
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (s && n) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", "0");
                    case 2:
                      return (
                        (r = new c.CH(t, D, n)), (e.next = 5), r.balanceOf(s)
                      );
                    case 5:
                      return (
                        (a = e.sent),
                        (e.t0 = A),
                        (e.t1 = a),
                        (e.next = 10),
                        r.decimals()
                      );
                    case 10:
                      return (
                        (e.t2 = e.sent),
                        e.abrupt(
                          "return",
                          e.t0.formatUnits.call(e.t0, e.t1, e.t2),
                        )
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
        }
        (0, o.useEffect)(
          function () {
            var e;
            s &&
              5 ==
                +(null === (e = window) || void 0 === e
                  ? void 0
                  : e.ethereum.chainId) &&
              (0, r.Z)(
                i().mark(function e() {
                  var t, n, r, s, o, c;
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = {}), (n = 0), (r = Object.entries(b));
                        case 2:
                          if (!(n < r.length)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (s = (0, a.Z)(r[n], 2)),
                            (o = s[0]),
                            (c = s[1]),
                            (e.next = 6),
                            h(c)
                          );
                        case 6:
                          t[o] = e.sent;
                        case 7:
                          n++, (e.next = 2);
                          break;
                        case 10:
                          C(t);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )();
          },
          [n, s],
        );
        var b = {
          USDT: "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557",
          LINK: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
          DAI: "0x73967c6a0904aA032C103b4104747E88c566B1A2",
          UNI: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        };
        return o.createElement(
          "div",
          { className: "Dashboard" },
          5 !=
            +(null === (e = window) || void 0 === e
              ? void 0
              : e.ethereum.chainId)
            ? o.createElement(
                "button",
                { onClick: l },
                "Switch to Goerli Network",
              )
            : o.createElement(
                "div",
                null,
                o.createElement(
                  "h2",
                  null,
                  s
                    ? "User balance"
                    : "Please connect to metamask to use dashboard",
                ),
                s &&
                  o.createElement(
                    "ul",
                    null,
                    Object.entries(p).map(function (e) {
                      var t = (0, a.Z)(e, 2),
                        n = t[0],
                        r = t[1];
                      return o.createElement(
                        "li",
                        { key: n },
                        o.createElement("strong", null, n, ":"),
                        " ",
                        r,
                      );
                    }),
                  ),
              ),
        );
      };
    },
    7645: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => o });
      var r = n(7537),
        a = n.n(r),
        s = n(3645),
        i = n.n(s)()(a());
      i.push([
        e.id,
        ".Dashboard{margin:0 auto;display:flex;justify-content:center;align-items:center;height:100%}.Dashboard>div>h2{padding:5px;font-style:italic;text-shadow:0 0 10px #fff}.Dashboard>div>ul{list-style:none;box-shadow:0 0 10px #000;border-radius:5pxt}.Dashboard>div>ul>li{font-size:24px;border-bottom:.1px solid #a560c8;margin:10px 0;font-style:italic;text-shadow:0 0 10px #000;display:flex;justify-content:center;padding:10px 5px}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./front-end/components/ux/dashboard/Dashboard.sass",
          ],
          names: [],
          mappings:
            "AAAA,WACI,aAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,kBACI,WAAA,CACA,iBAAA,CACA,yBAAA,CACJ,kBACI,eAAA,CACA,wBAAA,CACA,kBAAA,CACA,qBACI,cAAA,CACA,gCAAA,CACA,aAAA,CACA,iBAAA,CACA,yBAAA,CACA,YAAA,CACA,sBAAA,CACA,gBAAA",
          sourcesContent: [
            ".Dashboard\n    margin: 0 auto\n    display: flex\n    justify-content: center\n    align-items: center\n    height: 100%\n    & > div > h2\n        padding: 5px\n        font-style: italic\n        text-shadow: 0 0 10px #fff\n    & > div > ul\n        list-style: none\n        box-shadow: 0 0 10px #000\n        border-radius: 5pxt\n        > li\n            font-size: 24px\n            border-bottom: 0.1px solid #a560c8\n            margin: 10px 0\n            font-style: italic\n            text-shadow: 0 0 10px #000\n            display: flex\n            justify-content: center\n            padding: 10px 5px",
          ],
          sourceRoot: "",
        },
      ]);
      const o = i;
    },
    5856: () => {},
  },
]);
//# sourceMappingURL=782.index.js.map
