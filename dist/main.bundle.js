(() => {
  "use strict";
  var e = {
      402: (e, t, n) => {
        n.d(t, { Z: () => a });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "body {\r\n  background-color: coral;\r\n  color: snow;\r\n}\r\n",
          "",
        ]);
        const a = o;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (r && o[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = "".concat(n, " and ").concat(s[2]))
                      : (s[2] = n)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      379: (e, t, n) => {
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          a = [];
        function i(e) {
          for (var t = -1, n = 0; n < a.length; n++)
            if (a[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function c(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var c = e[o],
              s = t.base ? c[0] + t.base : c[0],
              u = n[s] || 0,
              l = "".concat(s, " ").concat(u);
            n[s] = u + 1;
            var f = i(l),
              d = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (a[f].references++, a[f].updater(d))
              : a.push({ identifier: l, updater: b(d, t), references: 1 }),
              r.push(l);
          }
          return r;
        }
        function s(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var a = n.nc;
            a && (r.nonce = a);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(t);
          }
          return t;
        }
        var u,
          l =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join("\n");
            });
        function f(e, t, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = l(t, o);
          else {
            var a = document.createTextNode(o),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
          }
        }
        function d(e, t, n) {
          var r = n.css,
            o = n.media,
            a = n.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            a &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          v = 0;
        function b(e, t) {
          var n, r, o;
          if (t.singleton) {
            var a = v++;
            (n = p || (p = s(t))),
              (r = f.bind(null, n, a, !1)),
              (o = f.bind(null, n, a, !0));
          } else
            (n = s(t)),
              (r = d.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = c((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = i(n[r]);
                a[o].references--;
              }
              for (var s = c(e, t), u = 0; u < n.length; u++) {
                var l = i(n[u]);
                0 === a[l].references && (a[l].updater(), a.splice(l, 1));
              }
              n = s;
            }
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(402);
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t()(r.Z, { insert: "head", singleton: !1 }),
        r.Z.locals,
        console.log("add(2, 3, 5) =", 10),
        console.log("say(kazkas):", "I am saying " + "everything how");
      var c = a(a({}, { age: 30, name: "Bob" }), {}, { gender: "male" });
      console.log("copy of obj:", c);
    })();
})();
