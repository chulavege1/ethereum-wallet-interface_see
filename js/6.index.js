"use strict";
(self.webpackChunkethereum_wallet_interface =
  self.webpackChunkethereum_wallet_interface || []).push([
  [6],
  {
    1006: (e, n, A) => {
      A.r(n), A.d(n, { default: () => v });
      var t = A(2982),
        i = A(885),
        a = A(7294),
        l = A(6286),
        d = A(3468),
        r = A(3379),
        o = A.n(r),
        c = A(7795),
        s = A.n(c),
        C = A(569),
        u = A.n(C),
        f = A(3565),
        m = A.n(f),
        p = A(9216),
        h = A.n(p),
        g = A(4589),
        y = A.n(g),
        x = A(286),
        b = {};
      (b.styleTagTransform = y()),
        (b.setAttributes = m()),
        (b.insert = u().bind(null, "head")),
        (b.domAPI = s()),
        (b.insertStyleElement = h()),
        o()(x.Z, b),
        x.Z && x.Z.locals && x.Z.locals;
      const v = function () {
        var e = (0, l.mA)().isConnected,
          n = (0, l.LN)().chain,
          A = (0, d.A)(),
          r = A.tokenAddresses,
          o = A.balances,
          c = (0, a.useState)("name"),
          s = (0, i.Z)(c, 2),
          C = s[0],
          u = s[1],
          f = (0, a.useState)("name"),
          m = (0, i.Z)(f, 2),
          p = m[0],
          h = m[1],
          g = (0, a.useState)("asc"),
          y = (0, i.Z)(g, 2),
          x = y[0],
          b = y[1],
          v = (0, a.useState)(!0),
          k = (0, i.Z)(v, 2),
          w = k[0],
          B = k[1];
        (0, a.useEffect)(
          function () {
            o.length > 0 && B(!1);
          },
          [o],
        );
        var E = function (e) {
            p === e ? b("asc" === x ? "desc" : "asc") : (u(e), b("asc"), h(e));
          },
          q = (0, t.Z)(o).sort(function (e, n) {
            var A = e[C],
              t = n[C],
              i = 0;
            return (
              A > t ? (i = 1) : A < t && (i = -1), "balance" === C ? -1 * i : i
            );
          });
        return e
          ? w
            ? a.createElement(
                "div",
                { className: "isLoadPool" },
                1 === n.id || 137 === n.id
                  ? "Loading pool data..."
                  : "Connect to polygon or ethereum net",
              )
            : a.createElement(
                "div",
                { className: "Liquidity_market" },
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    "button",
                    {
                      onClick: function () {
                        return E("name");
                      },
                    },
                    "Name",
                  ),
                  a.createElement("button", null),
                  a.createElement(
                    "button",
                    {
                      onClick: function () {
                        return E("balance");
                      },
                    },
                    "Balance",
                  ),
                ),
                a.createElement(
                  "div",
                  null,
                  q.map(function (e, n) {
                    return a.createElement(
                      "div",
                      { key: n },
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
                          { style: { fontSize: "16px" } },
                          r[n],
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
              )
          : a.createElement(
              "div",
              { className: "isLoadPool" },
              "To continue connect your wallet",
            );
      };
    },
    286: (e, n, A) => {
      A.d(n, { Z: () => d });
      var t = A(7537),
        i = A.n(t),
        a = A(3645),
        l = A.n(a)()(i());
      l.push([
        e.id,
        ".Liquidity_market{display:flex;justify-content:space-between;flex-direction:column;padding:10px 0;background:rgba(0,0,0,.5);font-weight:bold;font-size:20px;line-height:100%;width:99%;border-radius:4px;margin:0 auto}.Liquidity_market>div:first-child{width:100%;justify-content:space-around;display:flex}.Liquidity_market>div:first-child button{width:100%;background:none;border:.1px solid rgba(255,255,255,.2156862745);color:#fff;height:30px}.Liquidity_market>div:last-child{width:100%;display:flex;flex-direction:column}.Liquidity_market>div:last-child>div{display:flex;align-items:center;color:#fff;background:rgba(255,255,255,.1);margin:10px 0px;border-radius:10px}.Liquidity_market>div:last-child>div>div{display:flex;justify-content:center;align-items:center;width:100%;height:100%;min-height:60px;border:.1px solid rgba(255,255,255,.2156862745)}.Liquidity_market>div:last-child>div>div:first-child{display:flex;justify-content:space-around}.Liquidity_market>div:last-child>div>div h2{font-size:18px;margin:0}.isLoadPool{height:100vh;display:flex;justify-content:center;align-content:center;font-style:italic;margin-top:10px}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./front-end/components/ux/liquidity-market/liquidity_market.sass",
          ],
          names: [],
          mappings:
            "AAAA,kBACI,YAAA,CACA,6BAAA,CACA,qBAAA,CACA,cAAA,CACA,yBAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,SAAA,CACA,iBAAA,CACA,aAAA,CACA,kCACI,UAAA,CACA,4BAAA,CACA,YAAA,CACA,yCACI,UAAA,CACA,eAAA,CACA,+CAAA,CACA,UAAA,CACA,WAAA,CACR,iCACI,UAAA,CACA,YAAA,CACA,qBAAA,CACA,qCACI,YAAA,CACA,kBAAA,CACA,UAAA,CACA,+BAAA,CACA,eAAA,CACA,kBAAA,CACA,yCACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,+CAAA,CACA,qDACI,YAAA,CACA,4BAAA,CAEJ,4CACI,cAAA,CACA,QAAA,CAIpB,YACI,YAAA,CACA,YAAA,CACA,sBAAA,CACA,oBAAA,CACA,iBAAA,CACA,eAAA",
          sourcesContent: [
            ".Liquidity_market\n    display: flex\n    justify-content: space-between\n    flex-direction: column\n    padding: 10px 0\n    background: rgba(0, 0, 0, 0.5)\n    font-weight: bold\n    font-size: 20px\n    line-height: 100%\n    width: 99%\n    border-radius: 4px\n    margin: 0 auto\n    & > div:first-child\n        width: 100%\n        justify-content: space-around\n        display: flex\n        button\n            width: 100%\n            background: none\n            border: 0.1px solid #ffffff37\n            color: #fff\n            height: 30px   \n    & > div:last-child\n        width: 100%\n        display: flex\n        flex-direction: column\n        & > div\n            display: flex\n            align-items: center\n            color: #fff\n            background: rgba(255, 255, 255, 0.1)\n            margin: 10px 0px\n            border-radius: 10px\n            & > div \n                display: flex\n                justify-content: center\n                align-items: center\n                width: 100%\n                height: 100%\n                min-height: 60px\n                border: 0.1px solid #ffffff37\n                &:first-child\n                    display: flex\n                    justify-content: space-around\n                    \n                h2\n                    font-size: 18px\n                    margin: 0\n\n\n\n.isLoadPool\n    height: 100vh\n    display: flex\n    justify-content: center\n    align-content: center\n    font-style: italic\n    margin-top: 10px",
          ],
          sourceRoot: "",
        },
      ]);
      const d = l;
    },
  },
]);
//# sourceMappingURL=6.index.js.map
