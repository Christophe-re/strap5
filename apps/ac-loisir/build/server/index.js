import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as Y from "react";
import Y__default, { useMemo, createElement } from "react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
var re = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function yr() {
  if (ke) return $;
  ke = 1;
  var n = Y__default, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: true, ref: true, __self: true, __source: true };
  function f(h, g, E) {
    var y, T = {}, k = null, L = null;
    E !== void 0 && (k = "" + E), g.key !== void 0 && (k = "" + g.key), g.ref !== void 0 && (L = g.ref);
    for (y in g) p.call(g, y) && !v.hasOwnProperty(y) && (T[y] = g[y]);
    if (h && h.defaultProps) for (y in g = h.defaultProps, g) T[y] === void 0 && (T[y] = g[y]);
    return { $$typeof: o, type: h, key: k, ref: L, props: T, _owner: R.current };
  }
  return $.Fragment = c, $.jsx = f, $.jsxs = f, $;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function xr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Y__default, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ae = "@@iterator";
    function Me(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ne && e[ne] || e[Ae];
      return typeof r == "function" ? r : null;
    }
    var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var i = P.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var d = t.map(function(u) {
          return String(u);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var $e = false, We = false, Ye = false, Le = false, Be = false, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === v || Be || e === R || e === E || e === y || Le || e === L || $e || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === T || e.$$typeof === f || e.$$typeof === h || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case v:
          return "Profiler";
        case R:
          return "StrictMode";
        case E:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return oe(r) + ".Consumer";
          case f:
            var t = e;
            return oe(t._context) + ".Provider";
          case g:
            return Ve(e, e.render, "ForwardRef");
          case T:
            var i = e.displayName || null;
            return i !== null ? i : S(e.type) || "Memo";
          case k: {
            var l = e, d = l._payload, u = l._init;
            try {
              return S(u(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ie, se, ue, ce, le, fe, de;
    function pe() {
    }
    pe.__reactDisabledLog = true;
    function Ne() {
      {
        if (A === 0) {
          ie = console.log, se = console.info, ue = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: true,
            enumerable: true,
            value: pe,
            writable: true
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function qe() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ie
            }),
            info: w({}, e, {
              value: se
            }),
            warn: w({}, e, {
              value: ue
            }),
            error: w({}, e, {
              value: ce
            }),
            group: w({}, e, {
              value: le
            }),
            groupCollapsed: w({}, e, {
              value: fe
            }),
            groupEnd: w({}, e, {
              value: de
            })
          });
        }
        A < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = P.ReactCurrentDispatcher, G;
    function B(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            G = i && i[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = false, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function ve(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      K = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = J.current, J.current = null, Ne();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (_) {
              i = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              i = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            i = _;
          }
          e();
        }
      } catch (_) {
        if (_ && i && typeof _.stack == "string") {
          for (var s = _.stack.split(`
`), j = i.stack.split(`
`), m = s.length - 1, b = j.length - 1; m >= 1 && b >= 0 && s[m] !== j[b]; )
            b--;
          for (; m >= 1 && b >= 0; m--, b--)
            if (s[m] !== j[b]) {
              if (m !== 1 || b !== 1)
                do
                  if (m--, b--, b < 0 || s[m] !== j[b]) {
                    var C = `
` + s[m].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (m >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        K = false, J.current = d, qe(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", O = F ? B(F) : "";
      return typeof e == "function" && U.set(e, O), O;
    }
    function Ge(e, r, t) {
      return ve(e, false);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ke(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case E:
          return B("Suspense");
        case y:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ge(e.render);
          case T:
            return V(e.type, r, t);
          case k: {
            var i = e, l = i._payload, d = i._init;
            try {
              return V(d(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, he = {}, me = P.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function ze(e, r, t, i, l) {
      {
        var d = Function.call.bind(M);
        for (var u in e)
          if (d(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((i || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              s = e[u](r, u, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              s = m;
            }
            s && !(s instanceof Error) && (N(l), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, u, typeof s), N(null)), s instanceof Error && !(s.message in he) && (he[s.message] = true, N(l), x("Failed %s type: %s", t, s.message), N(null));
          }
      }
    }
    var Xe = Array.isArray;
    function z(e) {
      return Xe(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ge(e), false;
      } catch {
        return true;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (He(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ge(e);
    }
    var I = P.ReactCurrentOwner, Ze = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    }, ye, xe, X;
    X = {};
    function er(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return false;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = S(I.current.type);
        X[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(I.current.type), e.ref), X[t] = true);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ye || (ye = true, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "key", {
          get: t,
          configurable: true
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          xe || (xe = true, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = true, Object.defineProperty(e, "ref", {
          get: t,
          configurable: true
        });
      }
    }
    var or = function(e, r, t, i, l, d, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }), Object.defineProperty(s, "_self", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ir(e, r, t, i, l) {
      {
        var d, u = {}, s = null, j = null;
        t !== void 0 && (be(t), s = "" + t), rr(r) && (be(r.key), s = "" + r.key), er(r) && (j = r.ref, tr(r, l));
        for (d in r)
          M.call(r, d) && !Ze.hasOwnProperty(d) && (u[d] = r[d]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (d in m)
            u[d] === void 0 && (u[d] = m[d]);
        }
        if (s || j) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && nr(u, b), j && ar(u, b);
        }
        return or(e, s, j, l, i, I.current, u);
      }
    }
    var Q = P.ReactCurrentOwner, je = P.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var H;
    H = false;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function _e() {
      {
        if (Q.current) {
          var e = S(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      return "";
    }
    var Re = {};
    function ur(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = true;
        var t = ur(r);
        if (Re[t])
          return;
        Re[t] = true;
        var i = "";
        e && e._owner && e._owner !== Q.current && (i = " It was passed a child from " + S(e._owner.type) + "."), D(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), D(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            Z(i) && Ee(i, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = true);
        else if (e) {
          var l = Me(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), u; !(u = d.next()).done; )
              Z(u.value) && Ee(u.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = S(r);
          ze(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = true;
          var l = S(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            D(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Te = {};
    function Se(e, r, t, i, l, d) {
      {
        var u = Ue(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = sr();
          j ? s += j : s += _e();
          var m;
          e === null ? m = "null" : z(e) ? m = "array" : e !== void 0 && e.$$typeof === o ? (m = "<" + (S(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, s);
        }
        var b = ir(e, r, t, l, d);
        if (b == null)
          return b;
        if (u) {
          var C = r.children;
          if (C !== void 0)
            if (i)
              if (z(C)) {
                for (var F = 0; F < C.length; F++)
                  Ce(C[F], e);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(C, e);
        }
        if (M.call(r, "key")) {
          var O = S(e), _ = Object.keys(r).filter(function(mr) {
            return mr !== "key";
          }), ee = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + ee]) {
            var hr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, O, hr, O), Te[O + ee] = true;
          }
        }
        return e === p ? lr(b) : cr(b), b;
      }
    }
    function fr(e, r, t) {
      return Se(e, r, t, true);
    }
    function dr(e, r, t) {
      return Se(e, r, t, false);
    }
    var pr = dr, vr = fr;
    W.Fragment = p, W.jsx = pr, W.jsxs = vr;
  }()), W;
}
process.env.NODE_ENV === "production" ? re.exports = yr() : re.exports = xr();
var a = re.exports;
function Mr({ test: n }) {
  return /* @__PURE__ */ a.jsxs("button", { className: "bg-primary-100 text-secondary-200 w-52 h-52", children: [
    "My Button From Lib ",
    n
  ] });
}
const jr = (n) => /* @__PURE__ */ a.jsxs("div", { children: [
  /* @__PURE__ */ a.jsx("span", { children: "Seo" }),
  /* @__PURE__ */ a.jsx("span", { children: n.metaDescription }),
  /* @__PURE__ */ a.jsx("span", { children: n.metaTitle })
] }), _r = (n) => {
  var o;
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx("span", { children: "Slider" }),
    (o = n.files) == null ? void 0 : o.map((c, p) => /* @__PURE__ */ a.jsx("img", { src: c == null ? void 0 : c.url }, p))
  ] });
}, Rr = (n) => /* @__PURE__ */ a.jsxs("div", { children: [
  /* @__PURE__ */ a.jsx("span", { children: "SharedQuote" }),
  /* @__PURE__ */ a.jsx("span", { children: n.title }),
  /* @__PURE__ */ a.jsx("span", { children: n.body })
] }), Er = ({ text: n, ...o }) => {
  const { modifiers: c, missingModifierTypes: p } = Fe();
  return Object.keys(o).reduce(
    (v, f) => {
      if (!o[f])
        return v;
      const h = c[f];
      return h ? /* @__PURE__ */ a.jsx(h, { children: v }) : (p.includes(f) || (console.warn(
        `[@strapi/block-react-renderer] No component found for modifier "${f}"`
      ), p.push(f)), v);
    },
    // By default, return the text without any wrapper to avoid useless nesting
    /* @__PURE__ */ a.jsx(a.Fragment, { children: n })
  );
}, Cr = ["image"], Tr = (n) => {
  const { children: o, type: c, ...p } = n;
  if (c === "code") {
    const R = (v) => v.reduce((f, h) => h.type === "text" ? f.concat(h.text) : h.type === "link" ? f.concat(R(h.children)) : f, "");
    return {
      ...p,
      plainText: R(n.children)
    };
  }
  return p;
}, Pe = ({ content: n }) => {
  const { children: o, type: c, ...p } = n, { blocks: R, missingBlockTypes: v } = Fe(), f = R[c];
  if (!f)
    return v.includes(c) || (console.warn(`[@strapi/block-react-renderer] No component found for block type "${c}"`), v.push(c)), null;
  if (Cr.includes(c))
    return /* @__PURE__ */ a.jsx(f, { ...p });
  if (c === "paragraph" && o.length === 1 && o[0].type === "text" && o[0].text === "")
    return /* @__PURE__ */ a.jsx("br", {});
  const h = Tr(n);
  return /* @__PURE__ */ a.jsx(f, { ...h, children: o.map((g, E) => {
    if (g.type === "text") {
      const { type: y, ...T } = g;
      return /* @__PURE__ */ createElement(Er, { ...T, key: E });
    }
    return /* @__PURE__ */ a.jsx(Pe, { content: g }, E);
  }) });
}, q = {
  blocks: {
    paragraph: (n) => /* @__PURE__ */ a.jsx("p", { children: n.children }),
    quote: (n) => /* @__PURE__ */ a.jsx("blockquote", { children: n.children }),
    code: (n) => /* @__PURE__ */ a.jsx("pre", { children: /* @__PURE__ */ a.jsx("code", { children: n.plainText }) }),
    heading: ({ level: n, children: o }) => {
      switch (n) {
        case 1:
          return /* @__PURE__ */ a.jsx("h1", { children: o });
        case 2:
          return /* @__PURE__ */ a.jsx("h2", { children: o });
        case 3:
          return /* @__PURE__ */ a.jsx("h3", { children: o });
        case 4:
          return /* @__PURE__ */ a.jsx("h4", { children: o });
        case 5:
          return /* @__PURE__ */ a.jsx("h5", { children: o });
        case 6:
          return /* @__PURE__ */ a.jsx("h6", { children: o });
      }
    },
    link: (n) => /* @__PURE__ */ a.jsx("a", { href: n.url, children: n.children }),
    list: (n) => n.format === "ordered" ? /* @__PURE__ */ a.jsx("ol", { children: n.children }) : /* @__PURE__ */ a.jsx("ul", { children: n.children }),
    "list-item": (n) => /* @__PURE__ */ a.jsx("li", { children: n.children }),
    image: (n) => /* @__PURE__ */ a.jsx("img", { src: n.image.url, alt: n.image.alternativeText || void 0 })
  },
  modifiers: {
    bold: (n) => /* @__PURE__ */ a.jsx("strong", { children: n.children }),
    italic: (n) => /* @__PURE__ */ a.jsx("em", { children: n.children }),
    underline: (n) => /* @__PURE__ */ a.jsx("u", { children: n.children }),
    strikethrough: (n) => /* @__PURE__ */ a.jsx("del", { children: n.children }),
    code: (n) => /* @__PURE__ */ a.jsx("code", { children: n.children })
  },
  missingBlockTypes: [],
  missingModifierTypes: []
}, De = Y.createContext(q), Sr = ({ children: n, value: o = q }) => {
  const c = Y.useMemo(() => o, [o]);
  return /* @__PURE__ */ a.jsx(De.Provider, { value: c, children: n });
};
function Fe() {
  return Y.useContext(De);
}
const kr = (n) => {
  const o = {
    ...q.blocks,
    ...n.blocks
  }, c = {
    ...q.modifiers,
    ...n.modifiers
  }, p = Y.useRef([]), R = Y.useRef([]);
  return /* @__PURE__ */ a.jsx(
    Sr,
    {
      value: {
        blocks: o,
        modifiers: c,
        missingBlockTypes: p.current,
        missingModifierTypes: R.current
      },
      children: n.content.map((v, f) => /* @__PURE__ */ a.jsx(Pe, { content: v }, f))
    }
  );
}, wr = (n) => /* @__PURE__ */ a.jsx(
  kr,
  {
    content: n.bodyBlock,
    blocks: {
      // You can use the default components to set class names...
      paragraph: ({ children: o }) => /* @__PURE__ */ a.jsx("p", { className: "text-neutral900 max-w-prose", children: o }),
      // ...or point to a design system
      heading: ({ children: o, level: c }) => {
        switch (c) {
          case 1:
            return /* @__PURE__ */ a.jsx("h1", { children: o });
          case 2:
            return /* @__PURE__ */ a.jsx("h2", { children: o });
          case 3:
            return /* @__PURE__ */ a.jsx("h2", { children: o });
          case 4:
            return /* @__PURE__ */ a.jsx("h4", { children: o });
          case 5:
            return /* @__PURE__ */ a.jsx("h5", { children: o });
          case 6:
            return /* @__PURE__ */ a.jsx("h6", { children: o });
          default:
            return /* @__PURE__ */ a.jsx("h2", { children: o });
        }
      },
      // For links, you may want to use the component from your router or framework
      link: ({ children: o, url: c }) => /* @__PURE__ */ a.jsxs("span", { children: [
        " ceci est lien vers ",
        c,
        "  -- ",
        o
      ] })
    },
    modifiers: {
      bold: ({ children: o }) => /* @__PURE__ */ a.jsx("strong", { children: o }),
      italic: ({ children: o }) => /* @__PURE__ */ a.jsx("span", { className: "italic", children: o })
    }
  }
), Or = {
  backendUrl: "http://localhost:1337/"
};
let te = { ...Or };
function Ir(n) {
  te = { ...te, ...n };
}
function Pr() {
  return te;
}
function Dr(n) {
  var c;
  const o = Pr();
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx("span", { children: "SharedMEdia" }),
    /* @__PURE__ */ a.jsx("img", { src: `${o.backendUrl}${(c = n.file) == null ? void 0 : c.url}` })
  ] });
}
const Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Media: Dr,
  Quote: Rr,
  RichText: wr,
  Seo: jr,
  Slider: _r
}, Symbol.toStringTag, { value: "Module" })), $r = Object.entries(Fr).reduce(
  (n, [o, c]) => {
    const p = o.charAt(0).toLowerCase() + o.slice(1);
    return {
      ...n,
      [p]: c
    };
  },
  {}
);
function Wr({
  entries: n = [],
  components: o,
  strapiComponentFolder: c
}) {
  function p(v) {
    const f = v.split(".");
    return f.length === 2 && f[0] === c ? f[1].split("-").map((E, y) => y === 0 ? E.toLowerCase() : E.charAt(0).toUpperCase() + E.slice(1)).join("") : v;
  }
  return useMemo(
    () => n.map((v) => {
      const f = p(v.__component), h = o[f];
      return h ? /* @__PURE__ */ a.jsx(h, { ...v }, f + v.id) : null;
    }),
    [n, o]
  );
}
Ir({
  backendUrl: "http://localhost:1337/"
});
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
const loader = async () => {
  const response = await fetch("http://127.0.0.1:1337/api/about?pLevel");
  return response;
};
function Index() {
  const data = useLoaderData();
  const about = data.data;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Remix app with Nx" }),
    /* @__PURE__ */ jsx(Mr, { test: "" }),
    /* @__PURE__ */ jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsx(
      Wr,
      {
        components: $r,
        entries: about.blocks,
        strapiComponentFolder: "shared"
      }
    ) })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dr54A8VU.js", "imports": ["/assets/components-DkrZB9y4.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Ctz0qg0i.js", "imports": ["/assets/components-DkrZB9y4.js", "/assets/index.es-CLia7yKB.js"], "css": ["/assets/root-QVPwW7aW.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BIsHp_8Y.js", "imports": ["/assets/components-DkrZB9y4.js", "/assets/index.es-CLia7yKB.js"], "css": [] } }, "url": "/assets/manifest-c5c5c25f.js", "version": "c5c5c25f" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
