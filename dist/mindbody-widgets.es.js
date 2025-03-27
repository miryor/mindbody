var Ud = Object.defineProperty;
var Vd = (e, t, n) => t in e ? Ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rn = (e, t, n) => Vd(e, typeof t != "symbol" ? t + "" : t, n);
import * as b from "react";
import Nt, { forwardRef as zd, useContext as qd, isValidElement as ao, cloneElement as lo, Children as Hd, useState as st, useEffect as Ss } from "react";
import * as Yd from "react-dom";
import gr from "react-dom";
function Kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function dn(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Gi, Qr = gr;
if (process.env.NODE_ENV === "production")
  Gi = Qr.createRoot, Qr.hydrateRoot;
else {
  var xa = Qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Gi = function(e, t) {
    xa.usingClientEntryPoint = !0;
    try {
      return Qr.createRoot(e, t);
    } finally {
      xa.usingClientEntryPoint = !1;
    }
  };
}
var Xi = { exports: {} }, ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Gd() {
  if (Ea) return ir;
  Ea = 1;
  var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, u) {
    var d, f = {}, m = null, y = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (d in c) r.call(c, d) && !s.hasOwnProperty(d) && (f[d] = c[d]);
    if (l && l.defaultProps) for (d in c = l.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: t, type: l, key: m, ref: y, props: f, _owner: i.current };
  }
  return ir.Fragment = n, ir.jsx = a, ir.jsxs = a, ir;
}
var sr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function Xd() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.iterator, p = "@@iterator";
    function g(C) {
      if (C === null || typeof C != "object")
        return null;
      var D = h && C[h] || C[p];
      return typeof D == "function" ? D : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(C) {
      {
        for (var D = arguments.length, G = new Array(D > 1 ? D - 1 : 0), fe = 1; fe < D; fe++)
          G[fe - 1] = arguments[fe];
        x("error", C, G);
      }
    }
    function x(C, D, G) {
      {
        var fe = T.ReactDebugCurrentFrame, Pe = fe.getStackAddendum();
        Pe !== "" && (D += "%s", G = G.concat([Pe]));
        var Fe = G.map(function(Te) {
          return String(Te);
        });
        Fe.unshift("Warning: " + D), Function.prototype.apply.call(console[C], console, Fe);
      }
    }
    var S = !1, v = !1, P = !1, R = !1, I = !1, q;
    q = Symbol.for("react.module.reference");
    function $(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === s || I || C === i || C === u || C === d || R || C === y || S || v || P || typeof C == "object" && C !== null && (C.$$typeof === m || C.$$typeof === f || C.$$typeof === a || C.$$typeof === l || C.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === q || C.getModuleId !== void 0));
    }
    function F(C, D, G) {
      var fe = C.displayName;
      if (fe)
        return fe;
      var Pe = D.displayName || D.name || "";
      return Pe !== "" ? G + "(" + Pe + ")" : G;
    }
    function z(C) {
      return C.displayName || "Context";
    }
    function j(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case l:
            var D = C;
            return z(D) + ".Consumer";
          case a:
            var G = C;
            return z(G._context) + ".Provider";
          case c:
            return F(C, C.render, "ForwardRef");
          case f:
            var fe = C.displayName || null;
            return fe !== null ? fe : j(C.type) || "Memo";
          case m: {
            var Pe = C, Fe = Pe._payload, Te = Pe._init;
            try {
              return j(Te(Fe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, U = 0, W, Y, L, de, k, B, J;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function V() {
      {
        if (U === 0) {
          W = console.log, Y = console.info, L = console.warn, de = console.error, k = console.group, B = console.groupCollapsed, J = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        U++;
      }
    }
    function Q() {
      {
        if (U--, U === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, C, {
              value: W
            }),
            info: M({}, C, {
              value: Y
            }),
            warn: M({}, C, {
              value: L
            }),
            error: M({}, C, {
              value: de
            }),
            group: M({}, C, {
              value: k
            }),
            groupCollapsed: M({}, C, {
              value: B
            }),
            groupEnd: M({}, C, {
              value: J
            })
          });
        }
        U < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = T.ReactCurrentDispatcher, ee;
    function te(C, D, G) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (Pe) {
            var fe = Pe.stack.trim().match(/\n( *(at )?)/);
            ee = fe && fe[1] || "";
          }
        return `
` + ee + C;
      }
    }
    var re = !1, oe;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new le();
    }
    function N(C, D) {
      if (!C || re)
        return "";
      {
        var G = oe.get(C);
        if (G !== void 0)
          return G;
      }
      var fe;
      re = !0;
      var Pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Fe;
      Fe = H.current, H.current = null, V();
      try {
        if (D) {
          var Te = function() {
            throw Error();
          };
          if (Object.defineProperty(Te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Te, []);
            } catch (pt) {
              fe = pt;
            }
            Reflect.construct(C, [], Te);
          } else {
            try {
              Te.call();
            } catch (pt) {
              fe = pt;
            }
            C.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            fe = pt;
          }
          C();
        }
      } catch (pt) {
        if (pt && fe && typeof pt.stack == "string") {
          for (var xe = pt.stack.split(`
`), ut = fe.stack.split(`
`), Ke = xe.length - 1, Ze = ut.length - 1; Ke >= 1 && Ze >= 0 && xe[Ke] !== ut[Ze]; )
            Ze--;
          for (; Ke >= 1 && Ze >= 0; Ke--, Ze--)
            if (xe[Ke] !== ut[Ze]) {
              if (Ke !== 1 || Ze !== 1)
                do
                  if (Ke--, Ze--, Ze < 0 || xe[Ke] !== ut[Ze]) {
                    var Ct = `
` + xe[Ke].replace(" at new ", " at ");
                    return C.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", C.displayName)), typeof C == "function" && oe.set(C, Ct), Ct;
                  }
                while (Ke >= 1 && Ze >= 0);
              break;
            }
        }
      } finally {
        re = !1, H.current = Fe, Q(), Error.prepareStackTrace = Pe;
      }
      var Pn = C ? C.displayName || C.name : "", mn = Pn ? te(Pn) : "";
      return typeof C == "function" && oe.set(C, mn), mn;
    }
    function ae(C, D, G) {
      return N(C, !1);
    }
    function ue(C) {
      var D = C.prototype;
      return !!(D && D.isReactComponent);
    }
    function ge(C, D, G) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return N(C, ue(C));
      if (typeof C == "string")
        return te(C);
      switch (C) {
        case u:
          return te("Suspense");
        case d:
          return te("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case c:
            return ae(C.render);
          case f:
            return ge(C.type, D, G);
          case m: {
            var fe = C, Pe = fe._payload, Fe = fe._init;
            try {
              return ge(Fe(Pe), D, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Le = {}, ze = T.ReactDebugCurrentFrame;
    function tt(C) {
      if (C) {
        var D = C._owner, G = ge(C.type, C._source, D ? D.type : null);
        ze.setExtraStackFrame(G);
      } else
        ze.setExtraStackFrame(null);
    }
    function Qe(C, D, G, fe, Pe) {
      {
        var Fe = Function.call.bind(Be);
        for (var Te in C)
          if (Fe(C, Te)) {
            var xe = void 0;
            try {
              if (typeof C[Te] != "function") {
                var ut = Error((fe || "React class") + ": " + G + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ut.name = "Invariant Violation", ut;
              }
              xe = C[Te](D, Te, fe, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              xe = Ke;
            }
            xe && !(xe instanceof Error) && (tt(Pe), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", G, Te, typeof xe), tt(null)), xe instanceof Error && !(xe.message in Le) && (Le[xe.message] = !0, tt(Pe), O("Failed %s type: %s", G, xe.message), tt(null));
          }
      }
    }
    var Me = Array.isArray;
    function nt(C) {
      return Me(C);
    }
    function rt(C) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, G = D && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return G;
      }
    }
    function je(C) {
      try {
        return ot(C), !1;
      } catch {
        return !0;
      }
    }
    function ot(C) {
      return "" + C;
    }
    function Tt(C) {
      if (je(C))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(C)), ot(C);
    }
    var yt = T.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ce, at;
    function St(C) {
      if (Be.call(C, "ref")) {
        var D = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function Ft(C) {
      if (Be.call(C, "key")) {
        var D = Object.getOwnPropertyDescriptor(C, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function pn(C, D) {
      typeof C.ref == "string" && yt.current;
    }
    function ie(C, D) {
      {
        var G = function() {
          ce || (ce = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function A(C, D) {
      {
        var G = function() {
          at || (at = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var K = function(C, D, G, fe, Pe, Fe, Te) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: C,
        key: D,
        ref: G,
        props: Te,
        // Record the component responsible for creating this element.
        _owner: Fe
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function he(C, D, G, fe, Pe) {
      {
        var Fe, Te = {}, xe = null, ut = null;
        G !== void 0 && (Tt(G), xe = "" + G), Ft(D) && (Tt(D.key), xe = "" + D.key), St(D) && (ut = D.ref, pn(D, Pe));
        for (Fe in D)
          Be.call(D, Fe) && !we.hasOwnProperty(Fe) && (Te[Fe] = D[Fe]);
        if (C && C.defaultProps) {
          var Ke = C.defaultProps;
          for (Fe in Ke)
            Te[Fe] === void 0 && (Te[Fe] = Ke[Fe]);
        }
        if (xe || ut) {
          var Ze = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          xe && ie(Te, Ze), ut && A(Te, Ze);
        }
        return K(C, xe, ut, Pe, fe, yt.current, Te);
      }
    }
    var ye = T.ReactCurrentOwner, We = T.ReactDebugCurrentFrame;
    function qe(C) {
      if (C) {
        var D = C._owner, G = ge(C.type, C._source, D ? D.type : null);
        We.setExtraStackFrame(G);
      } else
        We.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Gt(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function It() {
      {
        if (ye.current) {
          var C = j(ye.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function or(C) {
      return "";
    }
    var ha = {};
    function Md(C) {
      {
        var D = It();
        if (!D) {
          var G = typeof C == "string" ? C : C.displayName || C.name;
          G && (D = `

Check the top-level render call using <` + G + ">.");
        }
        return D;
      }
    }
    function ba(C, D) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var G = Md(D);
        if (ha[G])
          return;
        ha[G] = !0;
        var fe = "";
        C && C._owner && C._owner !== ye.current && (fe = " It was passed a child from " + j(C._owner.type) + "."), qe(C), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, fe), qe(null);
      }
    }
    function ga(C, D) {
      {
        if (typeof C != "object")
          return;
        if (nt(C))
          for (var G = 0; G < C.length; G++) {
            var fe = C[G];
            Gt(fe) && ba(fe, D);
          }
        else if (Gt(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Pe = g(C);
          if (typeof Pe == "function" && Pe !== C.entries)
            for (var Fe = Pe.call(C), Te; !(Te = Fe.next()).done; )
              Gt(Te.value) && ba(Te.value, D);
        }
      }
    }
    function Id(C) {
      {
        var D = C.type;
        if (D == null || typeof D == "string")
          return;
        var G;
        if (typeof D == "function")
          G = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === f))
          G = D.propTypes;
        else
          return;
        if (G) {
          var fe = j(D);
          Qe(G, C.props, "prop", fe, C);
        } else if (D.PropTypes !== void 0 && !ft) {
          ft = !0;
          var Pe = j(D);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Pe || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jd(C) {
      {
        for (var D = Object.keys(C.props), G = 0; G < D.length; G++) {
          var fe = D[G];
          if (fe !== "children" && fe !== "key") {
            qe(C), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), qe(null);
            break;
          }
        }
        C.ref !== null && (qe(C), O("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var ya = {};
    function va(C, D, G, fe, Pe, Fe) {
      {
        var Te = $(C);
        if (!Te) {
          var xe = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = or();
          ut ? xe += ut : xe += It();
          var Ke;
          C === null ? Ke = "null" : nt(C) ? Ke = "array" : C !== void 0 && C.$$typeof === t ? (Ke = "<" + (j(C.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof C, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, xe);
        }
        var Ze = he(C, D, G, Pe, Fe);
        if (Ze == null)
          return Ze;
        if (Te) {
          var Ct = D.children;
          if (Ct !== void 0)
            if (fe)
              if (nt(Ct)) {
                for (var Pn = 0; Pn < Ct.length; Pn++)
                  ga(Ct[Pn], C);
                Object.freeze && Object.freeze(Ct);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ga(Ct, C);
        }
        if (Be.call(D, "key")) {
          var mn = j(C), pt = Object.keys(D).filter(function(Wd) {
            return Wd !== "key";
          }), Si = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ya[mn + Si]) {
            var Bd = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Si, mn, Bd, mn), ya[mn + Si] = !0;
          }
        }
        return C === r ? jd(Ze) : Id(Ze), Ze;
      }
    }
    function Ad(C, D, G) {
      return va(C, D, G, !0);
    }
    function Dd(C, D, G) {
      return va(C, D, G, !1);
    }
    var Fd = Dd, Ld = Ad;
    sr.Fragment = r, sr.jsx = Fd, sr.jsxs = Ld;
  }()), sr;
}
process.env.NODE_ENV === "production" ? Xi.exports = Gd() : Xi.exports = Xd();
var w = Xi.exports;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wr.apply(this, arguments);
}
var cn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(cn || (cn = {}));
const Ta = "popstate";
function Jd(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: s,
      search: a,
      hash: l
    } = r.location;
    return Ji(
      "",
      {
        pathname: s,
        search: a,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Tr(i);
  }
  return Zd(t, n, null, e);
}
function be(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function qt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Qd() {
  return Math.random().toString(36).substr(2, 8);
}
function Sa(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Ji(e, t, n, r) {
  return n === void 0 && (n = null), wr({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Yn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Qd()
  });
}
function Tr(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Zd(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: s = !1
  } = r, a = i.history, l = cn.Pop, c = null, u = d();
  u == null && (u = 0, a.replaceState(wr({}, a.state, {
    idx: u
  }), ""));
  function d() {
    return (a.state || {
      idx: null
    }).idx;
  }
  function f() {
    l = cn.Pop;
    let g = d(), T = g == null ? null : g - u;
    u = g, c && c({
      action: l,
      location: p.location,
      delta: T
    });
  }
  function m(g, T) {
    l = cn.Push;
    let O = Ji(p.location, g, T);
    u = d() + 1;
    let x = Sa(O, u), S = p.createHref(O);
    try {
      a.pushState(x, "", S);
    } catch (v) {
      if (v instanceof DOMException && v.name === "DataCloneError")
        throw v;
      i.location.assign(S);
    }
    s && c && c({
      action: l,
      location: p.location,
      delta: 1
    });
  }
  function y(g, T) {
    l = cn.Replace;
    let O = Ji(p.location, g, T);
    u = d();
    let x = Sa(O, u), S = p.createHref(O);
    a.replaceState(x, "", S), s && c && c({
      action: l,
      location: p.location,
      delta: 0
    });
  }
  function h(g) {
    let T = i.location.origin !== "null" ? i.location.origin : i.location.href, O = typeof g == "string" ? g : Tr(g);
    return O = O.replace(/ $/, "%20"), be(T, "No window.location.(origin|href) available to create URL for href: " + O), new URL(O, T);
  }
  let p = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(g) {
      if (c)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Ta, f), c = g, () => {
        i.removeEventListener(Ta, f), c = null;
      };
    },
    createHref(g) {
      return t(i, g);
    },
    createURL: h,
    encodeLocation(g) {
      let T = h(g);
      return {
        pathname: T.pathname,
        search: T.search,
        hash: T.hash
      };
    },
    push: m,
    replace: y,
    go(g) {
      return a.go(g);
    }
  };
  return p;
}
var Ca;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ca || (Ca = {}));
function ef(e, t, n) {
  return n === void 0 && (n = "/"), tf(e, t, n);
}
function tf(e, t, n, r) {
  let i = typeof t == "string" ? Yn(t) : t, s = un(i.pathname || "/", n);
  if (s == null)
    return null;
  let a = vc(e);
  nf(a);
  let l = null;
  for (let c = 0; l == null && c < a.length; ++c) {
    let u = mf(s);
    l = ff(a[c], u);
  }
  return l;
}
function vc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, a, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: a,
      route: s
    };
    c.relativePath.startsWith("/") && (be(c.relativePath.startsWith(r), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(r.length));
    let u = Zt([r, c.relativePath]), d = n.concat(c);
    s.children && s.children.length > 0 && (be(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), vc(s.children, t, d, u)), !(s.path == null && !s.index) && t.push({
      path: u,
      score: uf(u, s.index),
      routesMeta: d
    });
  };
  return e.forEach((s, a) => {
    var l;
    if (s.path === "" || !((l = s.path) != null && l.includes("?")))
      i(s, a);
    else
      for (let c of xc(s.path))
        i(s, a, c);
  }), t;
}
function xc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [s, ""] : [s];
  let a = xc(r.join("/")), l = [];
  return l.push(...a.map((c) => c === "" ? s : [s, c].join("/"))), i && l.push(...a), l.map((c) => e.startsWith("/") && c === "" ? "/" : c);
}
function nf(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : df(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const rf = /^:[\w-]+$/, of = 3, sf = 2, af = 1, lf = 10, cf = -2, Oa = (e) => e === "*";
function uf(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Oa) && (r += cf), t && (r += sf), n.filter((i) => !Oa(i)).reduce((i, s) => i + (rf.test(s) ? of : s === "" ? af : lf), r);
}
function df(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ff(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, s = "/", a = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l], u = l === r.length - 1, d = s === "/" ? t : t.slice(s.length) || "/", f = Qi({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: u
    }, d), m = c.route;
    if (!f)
      return null;
    Object.assign(i, f.params), a.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Zt([s, f.pathname]),
      pathnameBase: yf(Zt([s, f.pathnameBase])),
      route: m
    }), f.pathnameBase !== "/" && (s = Zt([s, f.pathnameBase]));
  }
  return a;
}
function Qi(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = pf(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let s = i[0], a = s.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let {
        paramName: m,
        isOptional: y
      } = d;
      if (m === "*") {
        let p = l[f] || "";
        a = s.slice(0, s.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const h = l[f];
      return y && !h ? u[m] = void 0 : u[m] = (h || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e
  };
}
function pf(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), qt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (r.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function mf(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return qt(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function un(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hf(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Yn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : bf(n, t) : t,
    search: vf(r),
    hash: xf(i)
  };
}
function bf(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Ci(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function gf(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Ec(e, t) {
  let n = gf(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function wc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Yn(e) : (i = wr({}, e), be(!i.pathname || !i.pathname.includes("?"), Ci("?", "pathname", "search", i)), be(!i.pathname || !i.pathname.includes("#"), Ci("#", "pathname", "hash", i)), be(!i.search || !i.search.includes("#"), Ci("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "", a = s ? "/" : i.pathname, l;
  if (a == null)
    l = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith("..")) {
      let m = a.split("/");
      for (; m[0] === ".."; )
        m.shift(), f -= 1;
      i.pathname = m.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = hf(i, l), u = a && a !== "/" && a.endsWith("/"), d = (s || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Zt = (e) => e.join("/").replace(/\/\/+/g, "/"), yf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), vf = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, xf = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ef(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Tc = ["post", "put", "patch", "delete"];
new Set(Tc);
const wf = ["get", ...Tc];
new Set(wf);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sr.apply(this, arguments);
}
const jr = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (jr.displayName = "DataRouter");
const Cs = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Cs.displayName = "DataRouterState");
const Tf = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Tf.displayName = "Await");
const jt = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (jt.displayName = "Navigation");
const Ar = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Ar.displayName = "Location");
const nn = /* @__PURE__ */ b.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (nn.displayName = "Route");
const Os = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Os.displayName = "RouteError");
function Sf(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Dr() || (process.env.NODE_ENV !== "production" ? be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : be(!1));
  let {
    basename: r,
    navigator: i
  } = b.useContext(jt), {
    hash: s,
    pathname: a,
    search: l
  } = Fr(e, {
    relative: n
  }), c = a;
  return r !== "/" && (c = a === "/" ? r : Zt([r, a])), i.createHref({
    pathname: c,
    search: l,
    hash: s
  });
}
function Dr() {
  return b.useContext(Ar) != null;
}
function Kn() {
  return Dr() || (process.env.NODE_ENV !== "production" ? be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : be(!1)), b.useContext(Ar).location;
}
const Sc = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Cc(e) {
  b.useContext(jt).static || b.useLayoutEffect(e);
}
function Cf() {
  let {
    isDataRoute: e
  } = b.useContext(nn);
  return e ? Lf() : Of();
}
function Of() {
  Dr() || (process.env.NODE_ENV !== "production" ? be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : be(!1));
  let e = b.useContext(jr), {
    basename: t,
    future: n,
    navigator: r
  } = b.useContext(jt), {
    matches: i
  } = b.useContext(nn), {
    pathname: s
  } = Kn(), a = JSON.stringify(Ec(i, n.v7_relativeSplatPath)), l = b.useRef(!1);
  return Cc(() => {
    l.current = !0;
  }), b.useCallback(function(u, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && qt(l.current, Sc), !l.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let f = wc(u, JSON.parse(a), s, d.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Zt([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d);
  }, [t, r, a, s, e]);
}
function Fr(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = b.useContext(jt), {
    matches: i
  } = b.useContext(nn), {
    pathname: s
  } = Kn(), a = JSON.stringify(Ec(i, r.v7_relativeSplatPath));
  return b.useMemo(() => wc(e, JSON.parse(a), s, n === "path"), [e, a, s, n]);
}
function Rf(e, t) {
  return Pf(e, t);
}
function Pf(e, t, n, r) {
  Dr() || (process.env.NODE_ENV !== "production" ? be(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : be(!1));
  let {
    navigator: i,
    static: s
  } = b.useContext(jt), {
    matches: a
  } = b.useContext(nn), l = a[a.length - 1], c = l ? l.params : {}, u = l ? l.pathname : "/", d = l ? l.pathnameBase : "/", f = l && l.route;
  if (process.env.NODE_ENV !== "production") {
    let x = f && f.path || "";
    Rc(u, !f || x.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + x + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + x + '"> to <Route ') + ('path="' + (x === "/" ? "*" : x + "/*") + '">.'));
  }
  let m = Kn(), y;
  if (t) {
    var h;
    let x = typeof t == "string" ? Yn(t) : t;
    d === "/" || (h = x.pathname) != null && h.startsWith(d) || (process.env.NODE_ENV !== "production" ? be(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + d + '" ') + ('but pathname "' + x.pathname + '" was given in the `location` prop.')) : be(!1)), y = x;
  } else
    y = m;
  let p = y.pathname || "/", g = p;
  if (d !== "/") {
    let x = d.replace(/^\//, "").split("/");
    g = "/" + p.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let T = ef(e, {
    pathname: g
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && qt(f || T != null, 'No routes matched location "' + y.pathname + y.search + y.hash + '" '), process.env.NODE_ENV !== "production" && qt(T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + y.pathname + y.search + y.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let O = Mf(T && T.map((x) => Object.assign({}, x, {
    params: Object.assign({}, c, x.params),
    pathname: Zt([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname
    ]),
    pathnameBase: x.pathnameBase === "/" ? d : Zt([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
    ])
  })), a, n, r);
  return t && O ? /* @__PURE__ */ b.createElement(Ar.Provider, {
    value: {
      location: Sr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, y),
      navigationType: cn.Pop
    }
  }, O) : O;
}
function Nf() {
  let e = Ff(), t = Ef(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: r
  }, s = {
    padding: "2px 4px",
    backgroundColor: r
  }, a = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), a = /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ b.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ b.createElement("code", {
    style: s
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ b.createElement("code", {
    style: s
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ b.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ b.createElement("pre", {
    style: i
  }, n) : null, a);
}
const _f = /* @__PURE__ */ b.createElement(Nf, null);
class kf extends b.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ b.createElement(nn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ b.createElement(Os.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function $f(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = b.useContext(jr);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ b.createElement(nn.Provider, {
    value: t
  }, r);
}
function Mf(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var s;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let a = e, l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let d = a.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    d >= 0 || (process.env.NODE_ENV !== "production" ? be(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : be(!1)), a = a.slice(0, Math.min(a.length, d + 1));
  }
  let c = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
        let {
          loaderData: m,
          errors: y
        } = n, h = f.route.loader && m[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
        if (f.route.lazy || h) {
          c = !0, u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((d, f, m) => {
    let y, h = !1, p = null, g = null;
    n && (y = l && f.route.id ? l[f.route.id] : void 0, p = f.route.errorElement || _f, c && (u < 0 && m === 0 ? (Rc("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), h = !0, g = null) : u === m && (h = !0, g = f.route.hydrateFallbackElement || null)));
    let T = t.concat(a.slice(0, m + 1)), O = () => {
      let x;
      return y ? x = p : h ? x = g : f.route.Component ? x = /* @__PURE__ */ b.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d, /* @__PURE__ */ b.createElement($f, {
        match: f,
        routeContext: {
          outlet: d,
          matches: T,
          isDataRoute: n != null
        },
        children: x
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? /* @__PURE__ */ b.createElement(kf, {
      location: n.location,
      revalidation: n.revalidation,
      component: p,
      error: y,
      children: O(),
      routeContext: {
        outlet: null,
        matches: T,
        isDataRoute: !0
      }
    }) : O();
  }, null);
}
var Oc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Oc || {}), Cr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Cr || {});
function Rs(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function If(e) {
  let t = b.useContext(jr);
  return t || (process.env.NODE_ENV !== "production" ? be(!1, Rs(e)) : be(!1)), t;
}
function jf(e) {
  let t = b.useContext(Cs);
  return t || (process.env.NODE_ENV !== "production" ? be(!1, Rs(e)) : be(!1)), t;
}
function Af(e) {
  let t = b.useContext(nn);
  return t || (process.env.NODE_ENV !== "production" ? be(!1, Rs(e)) : be(!1)), t;
}
function Ps(e) {
  let t = Af(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? be(!1, e + ' can only be used on routes that contain a unique "id"') : be(!1)), n.route.id;
}
function Df() {
  return Ps(Cr.UseRouteId);
}
function Ff() {
  var e;
  let t = b.useContext(Os), n = jf(Cr.UseRouteError), r = Ps(Cr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Lf() {
  let {
    router: e
  } = If(Oc.UseNavigateStable), t = Ps(Cr.UseNavigateStable), n = b.useRef(!1);
  return Cc(() => {
    n.current = !0;
  }), b.useCallback(function(i, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && qt(n.current, Sc), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Sr({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
const Ra = {};
function Rc(e, t, n) {
  !t && !Ra[e] && (Ra[e] = !0, process.env.NODE_ENV !== "production" && qt(!1, n));
}
const Pa = {};
function Bf(e, t) {
  process.env.NODE_ENV !== "production" && !Pa[t] && (Pa[t] = !0, console.warn(t));
}
const Na = (e, t, n) => Bf(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function Wf(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 && Na("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && Na("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function bn(e) {
  process.env.NODE_ENV !== "production" ? be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : be(!1);
}
function Uf(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = cn.Pop,
    navigator: s,
    static: a = !1,
    future: l
  } = e;
  Dr() && (process.env.NODE_ENV !== "production" ? be(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : be(!1));
  let c = t.replace(/^\/*/, "/"), u = b.useMemo(() => ({
    basename: c,
    navigator: s,
    static: a,
    future: Sr({
      v7_relativeSplatPath: !1
    }, l)
  }), [c, l, s, a]);
  typeof r == "string" && (r = Yn(r));
  let {
    pathname: d = "/",
    search: f = "",
    hash: m = "",
    state: y = null,
    key: h = "default"
  } = r, p = b.useMemo(() => {
    let g = un(d, c);
    return g == null ? null : {
      location: {
        pathname: g,
        search: f,
        hash: m,
        state: y,
        key: h
      },
      navigationType: i
    };
  }, [c, d, f, m, y, h, i]);
  return process.env.NODE_ENV !== "production" && qt(p != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + d + f + m + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), p == null ? null : /* @__PURE__ */ b.createElement(jt.Provider, {
    value: u
  }, /* @__PURE__ */ b.createElement(Ar.Provider, {
    children: n,
    value: p
  }));
}
function Vf(e) {
  let {
    children: t,
    location: n
  } = e;
  return Rf(Zi(t), n);
}
new Promise(() => {
});
function Zi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return b.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ b.isValidElement(r))
      return;
    let s = [...t, i];
    if (r.type === b.Fragment) {
      n.push.apply(n, Zi(r.props.children, s));
      return;
    }
    r.type !== bn && (process.env.NODE_ENV !== "production" ? be(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : be(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? be(!1, "An index route cannot have child routes.") : be(!1));
    let a = {
      id: r.props.id || s.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (a.children = Zi(r.props.children, s)), n.push(a);
  }), n;
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Un.apply(this, arguments);
}
function Ns(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const co = "get", uo = "application/x-www-form-urlencoded";
function Lo(e) {
  return e != null && typeof e.tagName == "string";
}
function zf(e) {
  return Lo(e) && e.tagName.toLowerCase() === "button";
}
function qf(e) {
  return Lo(e) && e.tagName.toLowerCase() === "form";
}
function Hf(e) {
  return Lo(e) && e.tagName.toLowerCase() === "input";
}
function Yf(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Kf(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Yf(e);
}
let Zr = null;
function Gf() {
  if (Zr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Zr = !1;
    } catch {
      Zr = !0;
    }
  return Zr;
}
const Xf = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Oi(e) {
  return e != null && !Xf.has(e) ? (process.env.NODE_ENV !== "production" && qt(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + uo + '"')), null) : e;
}
function Jf(e, t) {
  let n, r, i, s, a;
  if (qf(e)) {
    let l = e.getAttribute("action");
    r = l ? un(l, t) : null, n = e.getAttribute("method") || co, i = Oi(e.getAttribute("enctype")) || uo, s = new FormData(e);
  } else if (zf(e) || Hf(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? un(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || co, i = Oi(e.getAttribute("formenctype")) || Oi(l.getAttribute("enctype")) || uo, s = new FormData(l, e), !Gf()) {
      let {
        name: u,
        type: d,
        value: f
      } = e;
      if (d === "image") {
        let m = u ? u + "." : "";
        s.append(m + "x", "0"), s.append(m + "y", "0");
      } else u && s.append(u, f);
    }
  } else {
    if (Lo(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = co, r = null, i = uo, a = e;
  }
  return s && i === "text/plain" && (a = s, s = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: s,
    body: a
  };
}
const Qf = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Zf = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], ep = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], tp = "6";
try {
  window.__reactRouterVersion = tp;
} catch {
}
const Pc = /* @__PURE__ */ b.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Pc.displayName = "ViewTransition");
const np = /* @__PURE__ */ b.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (np.displayName = "Fetchers");
const rp = "startTransition", _a = b[rp];
function op(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, s = b.useRef();
  s.current == null && (s.current = Jd({
    window: i,
    v5Compat: !0
  }));
  let a = s.current, [l, c] = b.useState({
    action: a.action,
    location: a.location
  }), {
    v7_startTransition: u
  } = r || {}, d = b.useCallback((f) => {
    u && _a ? _a(() => c(f)) : c(f);
  }, [c, u]);
  return b.useLayoutEffect(() => a.listen(d), [a, d]), b.useEffect(() => Wf(r), [r]), /* @__PURE__ */ b.createElement(Uf, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: a,
    future: r
  });
}
process.env.NODE_ENV;
const ip = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", sp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xn = /* @__PURE__ */ b.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: s,
    replace: a,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d,
    viewTransition: f
  } = t, m = Ns(t, Qf), {
    basename: y
  } = b.useContext(jt), h, p = !1;
  if (typeof u == "string" && sp.test(u) && (h = u, ip))
    try {
      let x = new URL(window.location.href), S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u), v = un(S.pathname, y);
      S.origin === x.origin && v != null ? u = v + S.search + S.hash : p = !0;
    } catch {
      process.env.NODE_ENV !== "production" && qt(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let g = Sf(u, {
    relative: i
  }), T = up(u, {
    replace: a,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: i,
    viewTransition: f
  });
  function O(x) {
    r && r(x), x.defaultPrevented || T(x);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ b.createElement("a", Un({}, m, {
      href: h || g,
      onClick: p || s ? r : O,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (xn.displayName = "Link");
const ap = /* @__PURE__ */ b.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: s = "",
    end: a = !1,
    style: l,
    to: c,
    viewTransition: u,
    children: d
  } = t, f = Ns(t, Zf), m = Fr(c, {
    relative: f.relative
  }), y = Kn(), h = b.useContext(Cs), {
    navigator: p,
    basename: g
  } = b.useContext(jt), T = h != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  bp(m) && u === !0, O = p.encodeLocation ? p.encodeLocation(m).pathname : m.pathname, x = y.pathname, S = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  i || (x = x.toLowerCase(), S = S ? S.toLowerCase() : null, O = O.toLowerCase()), S && g && (S = un(S, g) || S);
  const v = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let P = x === O || !a && x.startsWith(O) && x.charAt(v) === "/", R = S != null && (S === O || !a && S.startsWith(O) && S.charAt(O.length) === "/"), I = {
    isActive: P,
    isPending: R,
    isTransitioning: T
  }, q = P ? r : void 0, $;
  typeof s == "function" ? $ = s(I) : $ = [s, P ? "active" : null, R ? "pending" : null, T ? "transitioning" : null].filter(Boolean).join(" ");
  let F = typeof l == "function" ? l(I) : l;
  return /* @__PURE__ */ b.createElement(xn, Un({}, f, {
    "aria-current": q,
    className: $,
    ref: n,
    style: F,
    to: c,
    viewTransition: u
  }), typeof d == "function" ? d(I) : d);
});
process.env.NODE_ENV !== "production" && (ap.displayName = "NavLink");
const lp = /* @__PURE__ */ b.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: i,
    replace: s,
    state: a,
    method: l = co,
    action: c,
    onSubmit: u,
    relative: d,
    preventScrollReset: f,
    viewTransition: m
  } = e, y = Ns(e, ep), h = mp(), p = hp(c, {
    relative: d
  }), g = l.toLowerCase() === "get" ? "get" : "post", T = (O) => {
    if (u && u(O), O.defaultPrevented) return;
    O.preventDefault();
    let x = O.nativeEvent.submitter, S = (x == null ? void 0 : x.getAttribute("formmethod")) || l;
    h(x || O.currentTarget, {
      fetcherKey: n,
      method: S,
      navigate: r,
      replace: s,
      state: a,
      relative: d,
      preventScrollReset: f,
      viewTransition: m
    });
  };
  return /* @__PURE__ */ b.createElement("form", Un({
    ref: t,
    method: g,
    action: p,
    onSubmit: i ? u : T
  }, y));
});
process.env.NODE_ENV !== "production" && (lp.displayName = "Form");
process.env.NODE_ENV;
var wo;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(wo || (wo = {}));
var ka;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(ka || (ka = {}));
function cp(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Nc(e) {
  let t = b.useContext(jr);
  return t || (process.env.NODE_ENV !== "production" ? be(!1, cp(e)) : be(!1)), t;
}
function up(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: s,
    relative: a,
    viewTransition: l
  } = t === void 0 ? {} : t, c = Cf(), u = Kn(), d = Fr(e, {
    relative: a
  });
  return b.useCallback((f) => {
    if (Kf(f, n)) {
      f.preventDefault();
      let m = r !== void 0 ? r : Tr(u) === Tr(d);
      c(e, {
        replace: m,
        state: i,
        preventScrollReset: s,
        relative: a,
        viewTransition: l
      });
    }
  }, [u, c, d, r, i, n, e, s, a, l]);
}
function dp() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let fp = 0, pp = () => "__" + String(++fp) + "__";
function mp() {
  let {
    router: e
  } = Nc(wo.UseSubmit), {
    basename: t
  } = b.useContext(jt), n = Df();
  return b.useCallback(function(r, i) {
    i === void 0 && (i = {}), dp();
    let {
      action: s,
      method: a,
      encType: l,
      formData: c,
      body: u
    } = Jf(r, t);
    if (i.navigate === !1) {
      let d = i.fetcherKey || pp();
      e.fetch(d, n, i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: c,
        body: u,
        formMethod: i.method || a,
        formEncType: i.encType || l,
        flushSync: i.flushSync
      });
    } else
      e.navigate(i.action || s, {
        preventScrollReset: i.preventScrollReset,
        formData: c,
        body: u,
        formMethod: i.method || a,
        formEncType: i.encType || l,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
        flushSync: i.flushSync,
        viewTransition: i.viewTransition
      });
  }, [e, t, n]);
}
function hp(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = b.useContext(jt), i = b.useContext(nn);
  i || (process.env.NODE_ENV !== "production" ? be(!1, "useFormAction must be used inside a RouteContext") : be(!1));
  let [s] = i.matches.slice(-1), a = Un({}, Fr(e || ".", {
    relative: n
  })), l = Kn();
  if (e == null) {
    a.search = l.search;
    let c = new URLSearchParams(a.search), u = c.getAll("index");
    if (u.some((f) => f === "")) {
      c.delete("index"), u.filter((m) => m).forEach((m) => c.append("index", m));
      let f = c.toString();
      a.search = f ? "?" + f : "";
    }
  }
  return (!e || e === ".") && s.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (a.pathname = a.pathname === "/" ? r : Zt([r, a.pathname])), Tr(a);
}
function bp(e, t) {
  t === void 0 && (t = {});
  let n = b.useContext(Pc);
  n == null && (process.env.NODE_ENV !== "production" ? be(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : be(!1));
  let {
    basename: r
  } = Nc(wo.useViewTransitionState), i = Fr(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let s = un(n.currentLocation.pathname, r) || n.currentLocation.pathname, a = un(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Qi(i.pathname, a) != null || Qi(i.pathname, s) != null;
}
const Or = {
  black: "#000",
  white: "#fff"
}, Nn = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, _n = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, kn = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, $n = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Mn = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, ar = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, gp = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Sn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" })), Bo = "$$material";
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, E.apply(null, arguments);
}
function ne(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function vp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ep = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xp(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = vp(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), lt = "-ms-", To = "-moz-", Oe = "-webkit-", _c = "comm", _s = "rule", ks = "decl", wp = "@import", kc = "@keyframes", Tp = "@layer", Sp = Math.abs, Wo = String.fromCharCode, Cp = Object.assign;
function Op(e, t) {
  return it(e, 0) ^ 45 ? (((t << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function $c(e) {
  return e.trim();
}
function Rp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, n) {
  return e.replace(t, n);
}
function es(e, t) {
  return e.indexOf(t);
}
function it(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rr(e, t, n) {
  return e.slice(t, n);
}
function Bt(e) {
  return e.length;
}
function $s(e) {
  return e.length;
}
function eo(e, t) {
  return t.push(e), e;
}
function Pp(e, t) {
  return e.map(t).join("");
}
var Uo = 1, Vn = 1, Mc = 0, gt = 0, et = 0, Gn = "";
function Vo(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: Uo, column: Vn, length: a, return: "" };
}
function lr(e, t) {
  return Cp(Vo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Np() {
  return et;
}
function _p() {
  return et = gt > 0 ? it(Gn, --gt) : 0, Vn--, et === 10 && (Vn = 1, Uo--), et;
}
function xt() {
  return et = gt < Mc ? it(Gn, gt++) : 0, Vn++, et === 10 && (Vn = 1, Uo++), et;
}
function zt() {
  return it(Gn, gt);
}
function fo() {
  return gt;
}
function Lr(e, t) {
  return Rr(Gn, e, t);
}
function Pr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ic(e) {
  return Uo = Vn = 1, Mc = Bt(Gn = e), gt = 0, [];
}
function jc(e) {
  return Gn = "", e;
}
function po(e) {
  return $c(Lr(gt - 1, ts(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kp(e) {
  for (; (et = zt()) && et < 33; )
    xt();
  return Pr(e) > 2 || Pr(et) > 3 ? "" : " ";
}
function $p(e, t) {
  for (; --t && xt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return Lr(e, fo() + (t < 6 && zt() == 32 && xt() == 32));
}
function ts(e) {
  for (; xt(); )
    switch (et) {
      case e:
        return gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ts(et);
        break;
      case 40:
        e === 41 && ts(e);
        break;
      case 92:
        xt();
        break;
    }
  return gt;
}
function Mp(e, t) {
  for (; xt() && e + et !== 57; )
    if (e + et === 84 && zt() === 47)
      break;
  return "/*" + Lr(t, gt - 1) + "*" + Wo(e === 47 ? e : xt());
}
function Ip(e) {
  for (; !Pr(zt()); )
    xt();
  return Lr(e, gt);
}
function jp(e) {
  return jc(mo("", null, null, null, [""], e = Ic(e), 0, [0], e));
}
function mo(e, t, n, r, i, s, a, l, c) {
  for (var u = 0, d = 0, f = a, m = 0, y = 0, h = 0, p = 1, g = 1, T = 1, O = 0, x = "", S = i, v = s, P = r, R = x; g; )
    switch (h = O, O = xt()) {
      case 40:
        if (h != 108 && it(R, f - 1) == 58) {
          es(R += Re(po(O), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += po(O);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += kp(h);
        break;
      case 92:
        R += $p(fo() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            eo(Ap(Mp(xt(), fo()), t, n), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * p:
        l[u++] = Bt(R) * T;
      case 125 * p:
      case 59:
      case 0:
        switch (O) {
          case 0:
          case 125:
            g = 0;
          case 59 + d:
            T == -1 && (R = Re(R, /\f/g, "")), y > 0 && Bt(R) - f && eo(y > 32 ? Ma(R + ";", r, n, f - 1) : Ma(Re(R, " ", "") + ";", r, n, f - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (eo(P = $a(R, t, n, u, d, i, l, x, S = [], v = [], f), s), O === 123)
              if (d === 0)
                mo(R, t, P, P, S, s, f, l, v);
              else
                switch (m === 99 && it(R, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mo(e, P, P, r && eo($a(e, P, P, 0, 0, i, l, x, i, S = [], f), v), i, v, f, l, r ? S : v);
                    break;
                  default:
                    mo(R, P, P, P, [""], v, 0, l, v);
                }
        }
        u = d = y = 0, p = T = 1, x = R = "", f = a;
        break;
      case 58:
        f = 1 + Bt(R), y = h;
      default:
        if (p < 1) {
          if (O == 123)
            --p;
          else if (O == 125 && p++ == 0 && _p() == 125)
            continue;
        }
        switch (R += Wo(O), O * p) {
          case 38:
            T = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (Bt(R) - 1) * T, T = 1;
            break;
          case 64:
            zt() === 45 && (R += po(xt())), m = zt(), d = f = Bt(x = R += Ip(fo())), O++;
            break;
          case 45:
            h === 45 && Bt(R) == 2 && (p = 0);
        }
    }
  return s;
}
function $a(e, t, n, r, i, s, a, l, c, u, d) {
  for (var f = i - 1, m = i === 0 ? s : [""], y = $s(m), h = 0, p = 0, g = 0; h < r; ++h)
    for (var T = 0, O = Rr(e, f + 1, f = Sp(p = a[h])), x = e; T < y; ++T)
      (x = $c(p > 0 ? m[T] + " " + O : Re(O, /&\f/g, m[T]))) && (c[g++] = x);
  return Vo(e, t, n, i === 0 ? _s : l, c, u, d);
}
function Ap(e, t, n) {
  return Vo(e, t, n, _c, Wo(Np()), Rr(e, 2, -2), 0);
}
function Ma(e, t, n, r) {
  return Vo(e, t, n, ks, Rr(e, 0, r), Rr(e, r + 1, -1), r);
}
function Ln(e, t) {
  for (var n = "", r = $s(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Dp(e, t, n, r) {
  switch (e.type) {
    case Tp:
      if (e.children.length) break;
    case wp:
    case ks:
      return e.return = e.return || e.value;
    case _c:
      return "";
    case kc:
      return e.return = e.value + "{" + Ln(e.children, r) + "}";
    case _s:
      e.value = e.props.join(",");
  }
  return Bt(n = Ln(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fp(e) {
  var t = $s(e);
  return function(n, r, i, s) {
    for (var a = "", l = 0; l < t; l++)
      a += e[l](n, r, i, s) || "";
    return a;
  };
}
function Lp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ac(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Bp = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = zt(), i === 38 && s === 12 && (n[r] = 1), !Pr(s); )
    xt();
  return Lr(t, gt);
}, Wp = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Pr(i)) {
      case 0:
        i === 38 && zt() === 12 && (n[r] = 1), t[r] += Bp(gt - 1, n, r);
        break;
      case 2:
        t[r] += po(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = zt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Wo(i);
    }
  while (i = xt());
  return t;
}, Up = function(t, n) {
  return jc(Wp(Ic(t), n));
}, Ia = /* @__PURE__ */ new WeakMap(), Vp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ia.get(r)) && !i) {
      Ia.set(t, !0);
      for (var s = [], a = Up(n, s), l = r.props, c = 0, u = 0; c < a.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? a[c].replace(/&\f/g, l[d]) : l[d] + " " + a[c];
    }
  }
}, zp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Dc(e, t) {
  switch (Op(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + To + e + lt + e + e;
    case 6828:
    case 4268:
      return Oe + e + lt + e + e;
    case 6165:
      return Oe + e + lt + "flex-" + e + e;
    case 5187:
      return Oe + e + Re(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + lt + "flex-$1$2") + e;
    case 5443:
      return Oe + e + lt + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return Oe + e + lt + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Oe + e + lt + Re(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + lt + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return Oe + "box-" + Re(e, "-grow", "") + Oe + e + lt + Re(e, "grow", "positive") + e;
    case 4554:
      return Oe + Re(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Bt(e) - 1 - t > 6) switch (it(e, t + 1)) {
        case 109:
          if (it(e, t + 4) !== 45) break;
        case 102:
          return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + To + (it(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~es(e, "stretch") ? Dc(Re(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (it(e, t + 1) !== 115) break;
    case 6444:
      switch (it(e, Bt(e) - 3 - (~es(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Oe) + e;
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + lt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (it(e, t + 11)) {
        case 114:
          return Oe + e + lt + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + lt + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + lt + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + lt + e + e;
  }
  return e;
}
var qp = function(t, n, r, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ks:
      t.return = Dc(t.value, t.length);
      break;
    case kc:
      return Ln([lr(t, {
        value: Re(t.value, "@", "@" + Oe)
      })], i);
    case _s:
      if (t.length) return Pp(t.props, function(s) {
        switch (Rp(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ln([lr(t, {
              props: [Re(s, /:(read-\w+)/, ":" + To + "$1")]
            })], i);
          case "::placeholder":
            return Ln([lr(t, {
              props: [Re(s, /:(plac\w+)/, ":" + Oe + "input-$1")]
            }), lr(t, {
              props: [Re(s, /:(plac\w+)/, ":" + To + "$1")]
            }), lr(t, {
              props: [Re(s, /:(plac\w+)/, lt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Hp = [qp], Fc = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var g = p.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Hp, s = {}, a, l = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var g = p.getAttribute("data-emotion").split(" "), T = 1; T < g.length; T++)
        s[g[T]] = !0;
      l.push(p);
    }
  );
  var c, u = [Vp, zp];
  {
    var d, f = [Dp, Lp(function(p) {
      d.insert(p);
    })], m = Fp(u.concat(i, f)), y = function(g) {
      return Ln(jp(g), m);
    };
    c = function(g, T, O, x) {
      d = O, y(g ? g + "{" + T.styles + "}" : T.styles), x && (h.inserted[T.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new Ep({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(l), h;
}, ns = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Yp() {
  if (ja) return Ne;
  ja = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function x(v) {
    if (typeof v == "object" && v !== null) {
      var P = v.$$typeof;
      switch (P) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case h:
                case y:
                case a:
                  return v;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function S(v) {
    return x(v) === u;
  }
  return Ne.AsyncMode = c, Ne.ConcurrentMode = u, Ne.ContextConsumer = l, Ne.ContextProvider = a, Ne.Element = t, Ne.ForwardRef = d, Ne.Fragment = r, Ne.Lazy = h, Ne.Memo = y, Ne.Portal = n, Ne.Profiler = s, Ne.StrictMode = i, Ne.Suspense = f, Ne.isAsyncMode = function(v) {
    return S(v) || x(v) === c;
  }, Ne.isConcurrentMode = S, Ne.isContextConsumer = function(v) {
    return x(v) === l;
  }, Ne.isContextProvider = function(v) {
    return x(v) === a;
  }, Ne.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Ne.isForwardRef = function(v) {
    return x(v) === d;
  }, Ne.isFragment = function(v) {
    return x(v) === r;
  }, Ne.isLazy = function(v) {
    return x(v) === h;
  }, Ne.isMemo = function(v) {
    return x(v) === y;
  }, Ne.isPortal = function(v) {
    return x(v) === n;
  }, Ne.isProfiler = function(v) {
    return x(v) === s;
  }, Ne.isStrictMode = function(v) {
    return x(v) === i;
  }, Ne.isSuspense = function(v) {
    return x(v) === f;
  }, Ne.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === s || v === i || v === f || v === m || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === y || v.$$typeof === a || v.$$typeof === l || v.$$typeof === d || v.$$typeof === g || v.$$typeof === T || v.$$typeof === O || v.$$typeof === p);
  }, Ne.typeOf = x, Ne;
}
var _e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Kp() {
  return Aa || (Aa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function x(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === u || N === s || N === i || N === f || N === m || typeof N == "object" && N !== null && (N.$$typeof === h || N.$$typeof === y || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === g || N.$$typeof === T || N.$$typeof === O || N.$$typeof === p);
    }
    function S(N) {
      if (typeof N == "object" && N !== null) {
        var ae = N.$$typeof;
        switch (ae) {
          case t:
            var ue = N.type;
            switch (ue) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case f:
                return ue;
              default:
                var ge = ue && ue.$$typeof;
                switch (ge) {
                  case l:
                  case d:
                  case h:
                  case y:
                  case a:
                    return ge;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var v = c, P = u, R = l, I = a, q = t, $ = d, F = r, z = h, j = y, M = n, U = s, W = i, Y = f, L = !1;
    function de(N) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(N) || S(N) === c;
    }
    function k(N) {
      return S(N) === u;
    }
    function B(N) {
      return S(N) === l;
    }
    function J(N) {
      return S(N) === a;
    }
    function X(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function V(N) {
      return S(N) === d;
    }
    function Q(N) {
      return S(N) === r;
    }
    function H(N) {
      return S(N) === h;
    }
    function ee(N) {
      return S(N) === y;
    }
    function te(N) {
      return S(N) === n;
    }
    function re(N) {
      return S(N) === s;
    }
    function oe(N) {
      return S(N) === i;
    }
    function le(N) {
      return S(N) === f;
    }
    _e.AsyncMode = v, _e.ConcurrentMode = P, _e.ContextConsumer = R, _e.ContextProvider = I, _e.Element = q, _e.ForwardRef = $, _e.Fragment = F, _e.Lazy = z, _e.Memo = j, _e.Portal = M, _e.Profiler = U, _e.StrictMode = W, _e.Suspense = Y, _e.isAsyncMode = de, _e.isConcurrentMode = k, _e.isContextConsumer = B, _e.isContextProvider = J, _e.isElement = X, _e.isForwardRef = V, _e.isFragment = Q, _e.isLazy = H, _e.isMemo = ee, _e.isPortal = te, _e.isProfiler = re, _e.isStrictMode = oe, _e.isSuspense = le, _e.isValidElementType = x, _e.typeOf = S;
  }()), _e;
}
process.env.NODE_ENV === "production" ? ns.exports = Yp() : ns.exports = Kp();
var Gp = ns.exports, Lc = Gp, Xp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bc = {};
Bc[Lc.ForwardRef] = Xp;
Bc[Lc.Memo] = Jp;
var Qp = !0;
function Wc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var Ms = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Qp === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Is = function(t, n, r) {
  Ms(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Zp(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var em = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tm = /[A-Z]|^ms/g, nm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Uc = function(t) {
  return t.charCodeAt(1) === 45;
}, Da = function(t) {
  return t != null && typeof t != "boolean";
}, Ri = /* @__PURE__ */ Ac(function(e) {
  return Uc(e) ? e : e.replace(tm, "-$&").toLowerCase();
}), Fa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(nm, function(r, i, s) {
          return Wt = {
            name: i,
            styles: s,
            next: Wt
          }, i;
        });
  }
  return em[t] !== 1 && !Uc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Nr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Wt = {
          name: i.name,
          styles: i.styles,
          next: Wt
        }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Wt = {
              name: a.name,
              styles: a.styles,
              next: Wt
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return rm(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Wt, u = n(e);
        return Wt = c, Nr(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var f = t[d];
  return f !== void 0 ? f : d;
}
function rm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Nr(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object") {
        var l = a;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Da(l) && (r += Ri(s) + ":" + Fa(s, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var c = 0; c < a.length; c++)
          Da(a[c]) && (r += Ri(s) + ":" + Fa(s, a[c]) + ";");
      else {
        var u = Nr(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            r += Ri(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var La = /label:\s*([^\s;{]+)\s*(;|$)/g, Wt;
function zo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Wt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, i += Nr(n, t, s);
  else {
    var a = s;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Nr(n, t, e[l]), r) {
      var c = s;
      i += c[l];
    }
  La.lastIndex = 0;
  for (var u = "", d; (d = La.exec(i)) !== null; )
    u += "-" + d[1];
  var f = Zp(i) + u;
  return {
    name: f,
    styles: i,
    next: Wt
  };
}
var om = function(t) {
  return t();
}, Vc = b.useInsertionEffect ? b.useInsertionEffect : !1, zc = Vc || om, Ba = Vc || b.useLayoutEffect, qc = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Fc({
    key: "css"
  }) : null
), im = qc.Provider, js = function(t) {
  return /* @__PURE__ */ zd(function(n, r) {
    var i = qd(qc);
    return t(n, i, r);
  });
}, Br = /* @__PURE__ */ b.createContext({}), As = {}.hasOwnProperty, rs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", sm = function(t, n) {
  var r = {};
  for (var i in n)
    As.call(n, i) && (r[i] = n[i]);
  return r[rs] = t, r;
}, am = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Ms(n, r, i), zc(function() {
    return Is(n, r, i);
  }), null;
}, lm = /* @__PURE__ */ js(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[rs], s = [r], a = "";
  typeof e.className == "string" ? a = Wc(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var l = zo(s, void 0, b.useContext(Br));
  a += t.key + "-" + l.name;
  var c = {};
  for (var u in e)
    As.call(e, u) && u !== "css" && u !== rs && (c[u] = e[u]);
  return c.className = a, n && (c.ref = n), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(am, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ b.createElement(i, c));
}), cm = lm, Pi = { exports: {} }, Wa;
function Hc() {
  return Wa || (Wa = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          for (var s in i) ({}).hasOwnProperty.call(i, s) && (n[s] = i[s]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Pi)), Pi.exports;
}
Hc();
var Ua = function(t, n) {
  var r = arguments;
  if (n == null || !As.call(n, "css"))
    return b.createElement.apply(void 0, r);
  var i = r.length, s = new Array(i);
  s[0] = cm, s[1] = sm(t, n);
  for (var a = 2; a < i; a++)
    s[a] = r[a];
  return b.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ua || (Ua = {}));
var um = /* @__PURE__ */ js(function(e, t) {
  var n = e.styles, r = zo([n], void 0, b.useContext(Br)), i = b.useRef();
  return Ba(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), a.hydrate([c])), i.current = [a, l], function() {
      a.flush();
    };
  }, [t]), Ba(function() {
    var s = i.current, a = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Is(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Yc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return zo(t);
}
function qo() {
  var e = Yc.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var dm = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fm = /* @__PURE__ */ Ac(
  function(e) {
    return dm.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pm = fm, mm = function(t) {
  return t !== "theme";
}, Va = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? pm : mm;
}, za = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, hm = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Ms(n, r, i), zc(function() {
    return Is(n, r, i);
  }), null;
}, bm = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var l = za(t, n, r), c = l || Va(i), u = !c("as");
  return function() {
    var d = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && f.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      f.push.apply(f, d);
    else {
      var m = d[0];
      f.push(m[0]);
      for (var y = d.length, h = 1; h < y; h++)
        f.push(d[h], m[h]);
    }
    var p = js(function(g, T, O) {
      var x = u && g.as || i, S = "", v = [], P = g;
      if (g.theme == null) {
        P = {};
        for (var R in g)
          P[R] = g[R];
        P.theme = b.useContext(Br);
      }
      typeof g.className == "string" ? S = Wc(T.registered, v, g.className) : g.className != null && (S = g.className + " ");
      var I = zo(f.concat(v), T.registered, P);
      S += T.key + "-" + I.name, a !== void 0 && (S += " " + a);
      var q = u && l === void 0 ? Va(x) : c, $ = {};
      for (var F in g)
        u && F === "as" || q(F) && ($[F] = g[F]);
      return $.className = S, O && ($.ref = O), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(hm, {
        cache: T,
        serialized: I,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ b.createElement(x, $));
    });
    return p.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", p.defaultProps = t.defaultProps, p.__emotion_real = p, p.__emotion_base = i, p.__emotion_styles = f, p.__emotion_forwardProp = l, Object.defineProperty(p, "toString", {
      value: function() {
        return "." + a;
      }
    }), p.withComponent = function(g, T) {
      var O = e(g, E({}, n, T, {
        shouldForwardProp: za(p, T, !0)
      }));
      return O.apply(void 0, f);
    }, p;
  };
}, gm = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], os = bm.bind(null);
gm.forEach(function(e) {
  os[e] = os(e);
});
var is = { exports: {} }, to = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qa;
function ym() {
  if (qa) return ke;
  qa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function x(v) {
    if (typeof v == "object" && v !== null) {
      var P = v.$$typeof;
      switch (P) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case s:
            case i:
            case f:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case h:
                case y:
                case a:
                  return v;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function S(v) {
    return x(v) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = a, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = h, ke.Memo = y, ke.Portal = n, ke.Profiler = s, ke.StrictMode = i, ke.Suspense = f, ke.isAsyncMode = function(v) {
    return S(v) || x(v) === c;
  }, ke.isConcurrentMode = S, ke.isContextConsumer = function(v) {
    return x(v) === l;
  }, ke.isContextProvider = function(v) {
    return x(v) === a;
  }, ke.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, ke.isForwardRef = function(v) {
    return x(v) === d;
  }, ke.isFragment = function(v) {
    return x(v) === r;
  }, ke.isLazy = function(v) {
    return x(v) === h;
  }, ke.isMemo = function(v) {
    return x(v) === y;
  }, ke.isPortal = function(v) {
    return x(v) === n;
  }, ke.isProfiler = function(v) {
    return x(v) === s;
  }, ke.isStrictMode = function(v) {
    return x(v) === i;
  }, ke.isSuspense = function(v) {
    return x(v) === f;
  }, ke.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === s || v === i || v === f || v === m || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === y || v.$$typeof === a || v.$$typeof === l || v.$$typeof === d || v.$$typeof === g || v.$$typeof === T || v.$$typeof === O || v.$$typeof === p);
  }, ke.typeOf = x, ke;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ha;
function vm() {
  return Ha || (Ha = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function x(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === r || N === u || N === s || N === i || N === f || N === m || typeof N == "object" && N !== null && (N.$$typeof === h || N.$$typeof === y || N.$$typeof === a || N.$$typeof === l || N.$$typeof === d || N.$$typeof === g || N.$$typeof === T || N.$$typeof === O || N.$$typeof === p);
    }
    function S(N) {
      if (typeof N == "object" && N !== null) {
        var ae = N.$$typeof;
        switch (ae) {
          case t:
            var ue = N.type;
            switch (ue) {
              case c:
              case u:
              case r:
              case s:
              case i:
              case f:
                return ue;
              default:
                var ge = ue && ue.$$typeof;
                switch (ge) {
                  case l:
                  case d:
                  case h:
                  case y:
                  case a:
                    return ge;
                  default:
                    return ae;
                }
            }
          case n:
            return ae;
        }
      }
    }
    var v = c, P = u, R = l, I = a, q = t, $ = d, F = r, z = h, j = y, M = n, U = s, W = i, Y = f, L = !1;
    function de(N) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(N) || S(N) === c;
    }
    function k(N) {
      return S(N) === u;
    }
    function B(N) {
      return S(N) === l;
    }
    function J(N) {
      return S(N) === a;
    }
    function X(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function V(N) {
      return S(N) === d;
    }
    function Q(N) {
      return S(N) === r;
    }
    function H(N) {
      return S(N) === h;
    }
    function ee(N) {
      return S(N) === y;
    }
    function te(N) {
      return S(N) === n;
    }
    function re(N) {
      return S(N) === s;
    }
    function oe(N) {
      return S(N) === i;
    }
    function le(N) {
      return S(N) === f;
    }
    $e.AsyncMode = v, $e.ConcurrentMode = P, $e.ContextConsumer = R, $e.ContextProvider = I, $e.Element = q, $e.ForwardRef = $, $e.Fragment = F, $e.Lazy = z, $e.Memo = j, $e.Portal = M, $e.Profiler = U, $e.StrictMode = W, $e.Suspense = Y, $e.isAsyncMode = de, $e.isConcurrentMode = k, $e.isContextConsumer = B, $e.isContextProvider = J, $e.isElement = X, $e.isForwardRef = V, $e.isFragment = Q, $e.isLazy = H, $e.isMemo = ee, $e.isPortal = te, $e.isProfiler = re, $e.isStrictMode = oe, $e.isSuspense = le, $e.isValidElementType = x, $e.typeOf = S;
  }()), $e;
}
var Ya;
function Kc() {
  return Ya || (Ya = 1, process.env.NODE_ENV === "production" ? to.exports = ym() : to.exports = vm()), to.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ni, Ka;
function xm() {
  if (Ka) return Ni;
  Ka = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ni = i() ? Object.assign : function(s, a) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var m = 0; m < u.length; m++)
          n.call(l, u[m]) && (c[u[m]] = l[u[m]]);
      }
    }
    return c;
  }, Ni;
}
var _i, Ga;
function Ds() {
  if (Ga) return _i;
  Ga = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _i = e, _i;
}
var ki, Xa;
function Gc() {
  return Xa || (Xa = 1, ki = Function.call.bind(Object.prototype.hasOwnProperty)), ki;
}
var $i, Ja;
function Em() {
  if (Ja) return $i;
  Ja = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ds(), n = {}, r = Gc();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var m = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (h) {
            f = h;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var y = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, $i = i, $i;
}
var Mi, Qa;
function wm() {
  if (Qa) return Mi;
  Qa = 1;
  var e = Kc(), t = xm(), n = Ds(), r = Gc(), i = Em(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Mi = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(k) {
      var B = k && (u && k[u] || k[d]);
      if (typeof B == "function")
        return B;
    }
    var m = "<<anonymous>>", y = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: O(),
      arrayOf: x,
      element: S(),
      elementType: v(),
      instanceOf: P,
      node: $(),
      objectOf: I,
      oneOf: R,
      oneOfType: q,
      shape: z,
      exact: j
    };
    function h(k, B) {
      return k === B ? k !== 0 || 1 / k === 1 / B : k !== k && B !== B;
    }
    function p(k, B) {
      this.message = k, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function g(k) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, J = 0;
      function X(Q, H, ee, te, re, oe, le) {
        if (te = te || m, oe = oe || ee, le !== n) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = te + ":" + ee;
            !B[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + oe + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ae] = !0, J++);
          }
        }
        return H[ee] == null ? Q ? H[ee] === null ? new p("The " + re + " `" + oe + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new p("The " + re + " `" + oe + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : k(H, ee, te, re, oe);
      }
      var V = X.bind(null, !1);
      return V.isRequired = X.bind(null, !0), V;
    }
    function T(k) {
      function B(J, X, V, Q, H, ee) {
        var te = J[X], re = W(te);
        if (re !== k) {
          var oe = Y(te);
          return new p(
            "Invalid " + Q + " `" + H + "` of type " + ("`" + oe + "` supplied to `" + V + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return g(B);
    }
    function O() {
      return g(a);
    }
    function x(k) {
      function B(J, X, V, Q, H) {
        if (typeof k != "function")
          return new p("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var ee = J[X];
        if (!Array.isArray(ee)) {
          var te = W(ee);
          return new p("Invalid " + Q + " `" + H + "` of type " + ("`" + te + "` supplied to `" + V + "`, expected an array."));
        }
        for (var re = 0; re < ee.length; re++) {
          var oe = k(ee, re, V, Q, H + "[" + re + "]", n);
          if (oe instanceof Error)
            return oe;
        }
        return null;
      }
      return g(B);
    }
    function S() {
      function k(B, J, X, V, Q) {
        var H = B[J];
        if (!l(H)) {
          var ee = W(H);
          return new p("Invalid " + V + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(k);
    }
    function v() {
      function k(B, J, X, V, Q) {
        var H = B[J];
        if (!e.isValidElementType(H)) {
          var ee = W(H);
          return new p("Invalid " + V + " `" + Q + "` of type " + ("`" + ee + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(k);
    }
    function P(k) {
      function B(J, X, V, Q, H) {
        if (!(J[X] instanceof k)) {
          var ee = k.name || m, te = de(J[X]);
          return new p("Invalid " + Q + " `" + H + "` of type " + ("`" + te + "` supplied to `" + V + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return g(B);
    }
    function R(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(J, X, V, Q, H) {
        for (var ee = J[X], te = 0; te < k.length; te++)
          if (h(ee, k[te]))
            return null;
        var re = JSON.stringify(k, function(le, N) {
          var ae = Y(N);
          return ae === "symbol" ? String(N) : N;
        });
        return new p("Invalid " + Q + " `" + H + "` of value `" + String(ee) + "` " + ("supplied to `" + V + "`, expected one of " + re + "."));
      }
      return g(B);
    }
    function I(k) {
      function B(J, X, V, Q, H) {
        if (typeof k != "function")
          return new p("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var ee = J[X], te = W(ee);
        if (te !== "object")
          return new p("Invalid " + Q + " `" + H + "` of type " + ("`" + te + "` supplied to `" + V + "`, expected an object."));
        for (var re in ee)
          if (r(ee, re)) {
            var oe = k(ee, re, V, Q, H + "." + re, n);
            if (oe instanceof Error)
              return oe;
          }
        return null;
      }
      return g(B);
    }
    function q(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < k.length; B++) {
        var J = k[B];
        if (typeof J != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(J) + " at index " + B + "."
          ), a;
      }
      function X(V, Q, H, ee, te) {
        for (var re = [], oe = 0; oe < k.length; oe++) {
          var le = k[oe], N = le(V, Q, H, ee, te, n);
          if (N == null)
            return null;
          N.data && r(N.data, "expectedType") && re.push(N.data.expectedType);
        }
        var ae = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new p("Invalid " + ee + " `" + te + "` supplied to " + ("`" + H + "`" + ae + "."));
      }
      return g(X);
    }
    function $() {
      function k(B, J, X, V, Q) {
        return M(B[J]) ? null : new p("Invalid " + V + " `" + Q + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return g(k);
    }
    function F(k, B, J, X, V) {
      return new p(
        (k || "React class") + ": " + B + " type `" + J + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function z(k) {
      function B(J, X, V, Q, H) {
        var ee = J[X], te = W(ee);
        if (te !== "object")
          return new p("Invalid " + Q + " `" + H + "` of type `" + te + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var re in k) {
          var oe = k[re];
          if (typeof oe != "function")
            return F(V, Q, H, re, Y(oe));
          var le = oe(ee, re, V, Q, H + "." + re, n);
          if (le)
            return le;
        }
        return null;
      }
      return g(B);
    }
    function j(k) {
      function B(J, X, V, Q, H) {
        var ee = J[X], te = W(ee);
        if (te !== "object")
          return new p("Invalid " + Q + " `" + H + "` of type `" + te + "` " + ("supplied to `" + V + "`, expected `object`."));
        var re = t({}, J[X], k);
        for (var oe in re) {
          var le = k[oe];
          if (r(k, oe) && typeof le != "function")
            return F(V, Q, H, oe, Y(le));
          if (!le)
            return new p(
              "Invalid " + Q + " `" + H + "` key `" + oe + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(J[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var N = le(ee, oe, V, Q, H + "." + oe, n);
          if (N)
            return N;
        }
        return null;
      }
      return g(B);
    }
    function M(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(M);
          if (k === null || l(k))
            return !0;
          var B = f(k);
          if (B) {
            var J = B.call(k), X;
            if (B !== k.entries) {
              for (; !(X = J.next()).done; )
                if (!M(X.value))
                  return !1;
            } else
              for (; !(X = J.next()).done; ) {
                var V = X.value;
                if (V && !M(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function W(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : U(B, k) ? "symbol" : B;
    }
    function Y(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var B = W(k);
      if (B === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function L(k) {
      var B = Y(k);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function de(k) {
      return !k.constructor || !k.constructor.name ? m : k.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, Mi;
}
var Ii, Za;
function Tm() {
  if (Za) return Ii;
  Za = 1;
  var e = Ds();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ii = function() {
    function r(a, l, c, u, d, f) {
      if (f !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ii;
}
if (process.env.NODE_ENV !== "production") {
  var Sm = Kc(), Cm = !0;
  is.exports = wm()(Sm.isElement, Cm);
} else
  is.exports = Tm()();
var Om = is.exports;
const o = /* @__PURE__ */ Kd(Om);
let ss;
typeof document == "object" && (ss = Fc({
  key: "css",
  prepend: !0
}));
function Xc(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && ss ? /* @__PURE__ */ w.jsx(im, {
    value: ss,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  /**
   * Your component tree.
   */
  children: o.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: o.bool
});
function Rm(e) {
  return e == null || Object.keys(e).length === 0;
}
function Fs(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (i) => t(Rm(i) ? n : i) : t;
  return /* @__PURE__ */ w.jsx(um, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  defaultTheme: o.object,
  styles: o.oneOfType([o.array, o.string, o.object, o.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ls(e, t) {
  const n = os(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Jc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Fs,
  StyledEngineProvider: Xc,
  ThemeContext: Br,
  css: Yc,
  default: Ls,
  internal_processStyles: Jc,
  keyframes: qo
}, Symbol.toStringTag, { value: "Module" }));
function Xt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Qc(e) {
  if (/* @__PURE__ */ b.isValidElement(e) || !Xt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Qc(e[n]);
  }), t;
}
function Et(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? E({}, e) : e;
  return Xt(e) && Xt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ b.isValidElement(t[i]) ? r[i] = t[i] : Xt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Xt(e[i]) ? r[i] = Et(e[i], t[i], n) : n.clone ? r[i] = Xt(t[i]) ? Qc(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et,
  isPlainObject: Xt
}, Symbol.toStringTag, { value: "Module" })), _m = ["values", "unit", "step"], km = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => E({}, n, {
    [r.key]: r.val
  }), {});
};
function Zc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, i = ne(e, _m), s = km(t), a = Object.keys(s);
  function l(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function c(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, y) {
    const h = a.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : y) - r / 100}${n})`;
  }
  function d(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : l(m);
  }
  function f(m) {
    const y = a.indexOf(m);
    return y === 0 ? l(a[1]) : y === a.length - 1 ? c(a[y]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return E({
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: n
  }, i);
}
const $m = {
  borderRadius: 4
}, fn = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {};
function vr(e, t) {
  return t ? Et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Bs = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, el = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Bs[e]}px)`
};
function _t(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || el;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || el;
    return Object.keys(t).reduce((a, l) => {
      if (Object.keys(s.values || Bs).indexOf(l) !== -1) {
        const c = s.up(l);
        a[c] = n(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Mm(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function Im(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function jm(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((i, s) => {
    s < e.length && (n[i] = !0);
  }) : r.forEach((i) => {
    e[i] != null && (n[i] = !0);
  }), n;
}
function Ho({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || jm(e, t), i = Object.keys(r);
  if (i.length === 0)
    return e;
  let s;
  return i.reduce((a, l, c) => (Array.isArray(e) ? (a[l] = e[c] != null ? e[c] : e[s], s = c) : typeof e == "object" ? (a[l] = e[l] != null ? e[l] : e[s], s = l) : a[l] = e, a), {});
}
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Sn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pe
}, Symbol.toStringTag, { value: "Module" }));
function Yo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function So(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Yo(e, n) || r, t && (i = t(i, r, e)), i;
}
function Xe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Yo(c, r) || {};
    return _t(a, l, (f) => {
      let m = So(u, i, f);
      return f === m && typeof f == "string" && (m = So(u, i, `${t}${f === "default" ? "" : pe(f)}`, f)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: fn
  } : {}, s.filterProps = [t], s;
}
function Dm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Fm = {
  m: "margin",
  p: "padding"
}, Lm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, tl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Bm = Dm((e) => {
  if (e.length > 2)
    if (tl[e])
      e = tl[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Fm[t], i = Lm[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), Ko = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Go = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Wm = [...Ko, ...Go];
function Wr(e, t, n, r) {
  var i;
  const s = (i = Yo(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function eu(e) {
  return Wr(e, "spacing", 8, "spacing");
}
function Ur(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Um(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Ur(t, n), r), {});
}
function Vm(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Bm(n), s = Um(i, r), a = e[n];
  return _t(e, a, s);
}
function tu(e, t) {
  const n = eu(e.theme);
  return Object.keys(e).map((r) => Vm(e, t, r, n)).reduce(vr, {});
}
function He(e) {
  return tu(e, Ko);
}
He.propTypes = process.env.NODE_ENV !== "production" ? Ko.reduce((e, t) => (e[t] = fn, e), {}) : {};
He.filterProps = Ko;
function Ye(e) {
  return tu(e, Go);
}
Ye.propTypes = process.env.NODE_ENV !== "production" ? Go.reduce((e, t) => (e[t] = fn, e), {}) : {};
Ye.filterProps = Go;
process.env.NODE_ENV !== "production" && Wm.reduce((e, t) => (e[t] = fn, e), {});
function zm(e = 8) {
  if (e.mui)
    return e;
  const t = eu({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function Xo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? vr(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Pt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $t(e, t) {
  return Xe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qm = $t("border", Pt), Hm = $t("borderTop", Pt), Ym = $t("borderRight", Pt), Km = $t("borderBottom", Pt), Gm = $t("borderLeft", Pt), Xm = $t("borderColor"), Jm = $t("borderTopColor"), Qm = $t("borderRightColor"), Zm = $t("borderBottomColor"), eh = $t("borderLeftColor"), th = $t("outline", Pt), nh = $t("outlineColor"), Jo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ur(t, r)
    });
    return _t(e, e.borderRadius, n);
  }
  return null;
};
Jo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: fn
} : {};
Jo.filterProps = ["borderRadius"];
Xo(qm, Hm, Ym, Km, Gm, Xm, Jm, Qm, Zm, eh, Jo, th, nh);
const Qo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wr(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ur(t, r)
    });
    return _t(e, e.gap, n);
  }
  return null;
};
Qo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: fn
} : {};
Qo.filterProps = ["gap"];
const Zo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wr(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ur(t, r)
    });
    return _t(e, e.columnGap, n);
  }
  return null;
};
Zo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: fn
} : {};
Zo.filterProps = ["columnGap"];
const ei = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wr(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ur(t, r)
    });
    return _t(e, e.rowGap, n);
  }
  return null;
};
ei.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: fn
} : {};
ei.filterProps = ["rowGap"];
const rh = Xe({
  prop: "gridColumn"
}), oh = Xe({
  prop: "gridRow"
}), ih = Xe({
  prop: "gridAutoFlow"
}), sh = Xe({
  prop: "gridAutoColumns"
}), ah = Xe({
  prop: "gridAutoRows"
}), lh = Xe({
  prop: "gridTemplateColumns"
}), ch = Xe({
  prop: "gridTemplateRows"
}), uh = Xe({
  prop: "gridTemplateAreas"
}), dh = Xe({
  prop: "gridArea"
});
Xo(Qo, Zo, ei, rh, oh, ih, sh, ah, lh, ch, uh, dh);
function Bn(e, t) {
  return t === "grey" ? t : e;
}
const fh = Xe({
  prop: "color",
  themeKey: "palette",
  transform: Bn
}), ph = Xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Bn
}), mh = Xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Bn
});
Xo(fh, ph, mh);
function vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const hh = Xe({
  prop: "width",
  transform: vt
}), Ws = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Bs[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: vt(n)
      };
    };
    return _t(e, e.maxWidth, t);
  }
  return null;
};
Ws.filterProps = ["maxWidth"];
const bh = Xe({
  prop: "minWidth",
  transform: vt
}), gh = Xe({
  prop: "height",
  transform: vt
}), yh = Xe({
  prop: "maxHeight",
  transform: vt
}), vh = Xe({
  prop: "minHeight",
  transform: vt
});
Xe({
  prop: "size",
  cssProperty: "width",
  transform: vt
});
Xe({
  prop: "size",
  cssProperty: "height",
  transform: vt
});
const xh = Xe({
  prop: "boxSizing"
});
Xo(hh, Ws, bh, gh, yh, vh, xh);
const Vr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Pt
  },
  borderTop: {
    themeKey: "borders",
    transform: Pt
  },
  borderRight: {
    themeKey: "borders",
    transform: Pt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Pt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Pt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Pt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Jo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Bn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Bn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Bn
  },
  // spacing
  p: {
    style: Ye
  },
  pt: {
    style: Ye
  },
  pr: {
    style: Ye
  },
  pb: {
    style: Ye
  },
  pl: {
    style: Ye
  },
  px: {
    style: Ye
  },
  py: {
    style: Ye
  },
  padding: {
    style: Ye
  },
  paddingTop: {
    style: Ye
  },
  paddingRight: {
    style: Ye
  },
  paddingBottom: {
    style: Ye
  },
  paddingLeft: {
    style: Ye
  },
  paddingX: {
    style: Ye
  },
  paddingY: {
    style: Ye
  },
  paddingInline: {
    style: Ye
  },
  paddingInlineStart: {
    style: Ye
  },
  paddingInlineEnd: {
    style: Ye
  },
  paddingBlock: {
    style: Ye
  },
  paddingBlockStart: {
    style: Ye
  },
  paddingBlockEnd: {
    style: Ye
  },
  m: {
    style: He
  },
  mt: {
    style: He
  },
  mr: {
    style: He
  },
  mb: {
    style: He
  },
  ml: {
    style: He
  },
  mx: {
    style: He
  },
  my: {
    style: He
  },
  margin: {
    style: He
  },
  marginTop: {
    style: He
  },
  marginRight: {
    style: He
  },
  marginBottom: {
    style: He
  },
  marginLeft: {
    style: He
  },
  marginX: {
    style: He
  },
  marginY: {
    style: He
  },
  marginInline: {
    style: He
  },
  marginInlineStart: {
    style: He
  },
  marginInlineEnd: {
    style: He
  },
  marginBlock: {
    style: He
  },
  marginBlockStart: {
    style: He
  },
  marginBlockEnd: {
    style: He
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qo
  },
  rowGap: {
    style: ei
  },
  columnGap: {
    style: Zo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: vt
  },
  maxWidth: {
    style: Ws
  },
  minWidth: {
    transform: vt
  },
  height: {
    transform: vt
  },
  maxHeight: {
    transform: vt
  },
  minHeight: {
    transform: vt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Eh(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function wh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nu() {
  function e(n, r, i, s) {
    const a = {
      [n]: r,
      theme: i
    }, l = s[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Yo(i, u) || {};
    return f ? f(a) : _t(a, r, (h) => {
      let p = So(m, d, h);
      return h === p && typeof h == "string" && (p = So(m, d, `${n}${h === "default" ? "" : pe(h)}`, h)), c === !1 ? p : {
        [c]: p
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = n || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : Vr;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Mm(s.breakpoints), f = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((y) => {
        const h = wh(u[y], s);
        if (h != null)
          if (typeof h == "object")
            if (a[y])
              m = vr(m, e(y, h, s, a));
            else {
              const p = _t({
                theme: s
              }, h, (g) => ({
                [y]: g
              }));
              Eh(p, h) ? m[y] = t({
                sx: h,
                theme: s
              }) : m = vr(m, p);
            }
          else
            m = vr(m, e(y, h, s, a));
      }), Im(f, m);
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const Xn = nu();
Xn.filterProps = ["sx"];
function ru(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Th = ["breakpoints", "palette", "spacing", "shape"];
function zr(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = ne(e, Th), l = Zc(n), c = zm(i);
  let u = Et({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: E({
      mode: "light"
    }, r),
    spacing: c,
    shape: E({}, $m, s)
  }, a);
  return u.applyStyles = ru, u = t.reduce((d, f) => Et(d, f), u), u.unstable_sxConfig = E({}, Vr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Xn({
      sx: f,
      theme: this
    });
  }, u;
}
const Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr,
  private_createBreakpoints: Zc,
  unstable_applyStyles: ru
}, Symbol.toStringTag, { value: "Module" }));
function Ch(e) {
  return Object.keys(e).length === 0;
}
function Oh(e = null) {
  const t = b.useContext(Br);
  return !t || Ch(t) ? e : t;
}
const Rh = zr();
function ti(e = Rh) {
  return Oh(e);
}
function ou({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ti(n), i = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ w.jsx(Fs, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (ou.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: o.object,
  /**
   * @ignore
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool]),
  /**
   * @ignore
   */
  themeId: o.string
});
const Ph = ["sx"], Nh = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Vr;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function ni(e) {
  const {
    sx: t
  } = e, n = ne(e, Ph), {
    systemProps: r,
    otherProps: i
  } = Nh(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Xt(l) ? E({}, r, l) : r;
  } : s = E({}, r, t), E({}, i, {
    sx: s
  });
}
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn,
  extendSxProp: ni,
  unstable_createStyleFunctionSx: nu,
  unstable_defaultSxConfig: Vr
}, Symbol.toStringTag, { value: "Module" })), nl = (e) => e, kh = () => {
  let e = nl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = nl;
    }
  };
}, iu = kh();
function su(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = su(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function se() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = su(e)) && (r && (r += " "), r += t);
  return r;
}
const $h = ["className", "component"];
function Mh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: i
  } = e, s = Ls("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Xn);
  return /* @__PURE__ */ b.forwardRef(function(c, u) {
    const d = ti(n), f = ni(c), {
      className: m,
      component: y = "div"
    } = f, h = ne(f, $h);
    return /* @__PURE__ */ w.jsx(s, E({
      as: y,
      ref: u,
      className: se(m, i ? i(r) : r),
      theme: t && d[t] || d
    }, h));
  });
}
const Ih = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ee(e, t, n = "Mui") {
  const r = Ih[t];
  return r ? `${n}-${r}` : `${iu.generate(e)}-${t}`;
}
function ve(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Ee(e, i, n);
  }), r;
}
var as = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function jh() {
  if (rl) return Ae;
  rl = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case e:
          switch (p = p.type, p) {
            case n:
            case i:
            case r:
            case c:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case f:
                case d:
                  return p;
                case s:
                  return p;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = a, Ae.Element = e, Ae.ForwardRef = l, Ae.Fragment = n, Ae.Lazy = f, Ae.Memo = d, Ae.Portal = t, Ae.Profiler = i, Ae.StrictMode = r, Ae.Suspense = c, Ae.SuspenseList = u, Ae.isContextConsumer = function(p) {
    return h(p) === s;
  }, Ae.isContextProvider = function(p) {
    return h(p) === a;
  }, Ae.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ae.isForwardRef = function(p) {
    return h(p) === l;
  }, Ae.isFragment = function(p) {
    return h(p) === n;
  }, Ae.isLazy = function(p) {
    return h(p) === f;
  }, Ae.isMemo = function(p) {
    return h(p) === d;
  }, Ae.isPortal = function(p) {
    return h(p) === t;
  }, Ae.isProfiler = function(p) {
    return h(p) === i;
  }, Ae.isStrictMode = function(p) {
    return h(p) === r;
  }, Ae.isSuspense = function(p) {
    return h(p) === c;
  }, Ae.isSuspenseList = function(p) {
    return h(p) === u;
  }, Ae.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === r || p === c || p === u || p === m || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
  }, Ae.typeOf = h, Ae;
}
var De = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function Ah() {
  return ol || (ol = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var g = p.$$typeof;
        switch (g) {
          case t:
            switch (p = p.type, p) {
              case r:
              case s:
              case i:
              case u:
              case d:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case l:
                  case c:
                  case m:
                  case f:
                    return p;
                  case a:
                    return p;
                  default:
                    return g;
                }
            }
          case n:
            return g;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), h = Symbol.for("react.client.reference");
    De.ContextConsumer = a, De.ContextProvider = l, De.Element = t, De.ForwardRef = c, De.Fragment = r, De.Lazy = m, De.Memo = f, De.Portal = n, De.Profiler = s, De.StrictMode = i, De.Suspense = u, De.SuspenseList = d, De.isContextConsumer = function(p) {
      return e(p) === a;
    }, De.isContextProvider = function(p) {
      return e(p) === l;
    }, De.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, De.isForwardRef = function(p) {
      return e(p) === c;
    }, De.isFragment = function(p) {
      return e(p) === r;
    }, De.isLazy = function(p) {
      return e(p) === m;
    }, De.isMemo = function(p) {
      return e(p) === f;
    }, De.isPortal = function(p) {
      return e(p) === n;
    }, De.isProfiler = function(p) {
      return e(p) === s;
    }, De.isStrictMode = function(p) {
      return e(p) === i;
    }, De.isSuspense = function(p) {
      return e(p) === u;
    }, De.isSuspenseList = function(p) {
      return e(p) === d;
    }, De.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === r || p === s || p === i || p === u || p === d || p === y || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === f || p.$$typeof === l || p.$$typeof === a || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
    }, De.typeOf = e;
  }()), De;
}
process.env.NODE_ENV === "production" ? as.exports = jh() : as.exports = Ah();
var zn = as.exports;
const Dh = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function au(e) {
  const t = `${e}`.match(Dh);
  return t && t[1] || "";
}
function lu(e, t = "") {
  return e.displayName || e.name || au(e) || t;
}
function il(e, t, n) {
  const r = lu(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function cu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return lu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zn.ForwardRef:
          return il(e, e.render, "ForwardRef");
        case zn.Memo:
          return il(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cu,
  getFunctionName: au
}, Symbol.toStringTag, { value: "Module" })), Lh = ["ownerState"], Bh = ["variants"], Wh = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Uh(e) {
  return Object.keys(e).length === 0;
}
function Vh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ji(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zh = zr(), sl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function no({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Uh(t) ? e : t[n] || t;
}
function qh(e) {
  return e ? (t, n) => n[e] : null;
}
function ho(e, t) {
  let {
    ownerState: n
  } = t, r = ne(t, Lh);
  const i = typeof e == "function" ? e(E({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => ho(s, E({
      ownerState: n
    }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = ne(i, Bh);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props(E({
        ownerState: n
      }, r, n)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style(E({
        ownerState: n
      }, r, n)) : c.style));
    }), l;
  }
  return i;
}
function Hh(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = zh,
    rootShouldForwardProp: r = ji,
    slotShouldForwardProp: i = ji
  } = e, s = (a) => Xn(E({}, a, {
    theme: no(E({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    Jc(a, (v) => v.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = qh(sl(u))
    } = l, y = ne(l, Wh), h = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), p = f || !1;
    let g;
    process.env.NODE_ENV !== "production" && c && (g = `${c}-${sl(u || "Root")}`);
    let T = ji;
    u === "Root" || u === "root" ? T = r : u ? T = i : Vh(a) && (T = void 0);
    const O = Ls(a, E({
      shouldForwardProp: T,
      label: g
    }, y)), x = (v) => typeof v == "function" && v.__emotion_real !== v || Xt(v) ? (P) => ho(v, E({}, P, {
      theme: no({
        theme: P.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : v, S = (v, ...P) => {
      let R = x(v);
      const I = P ? P.map(x) : [];
      c && m && I.push((F) => {
        const z = no(E({}, F, {
          defaultTheme: n,
          themeId: t
        }));
        if (!z.components || !z.components[c] || !z.components[c].styleOverrides)
          return null;
        const j = z.components[c].styleOverrides, M = {};
        return Object.entries(j).forEach(([U, W]) => {
          M[U] = ho(W, E({}, F, {
            theme: z
          }));
        }), m(F, M);
      }), c && !h && I.push((F) => {
        var z;
        const j = no(E({}, F, {
          defaultTheme: n,
          themeId: t
        })), M = j == null || (z = j.components) == null || (z = z[c]) == null ? void 0 : z.variants;
        return ho({
          variants: M
        }, E({}, F, {
          theme: j
        }));
      }), p || I.push(s);
      const q = I.length - P.length;
      if (Array.isArray(v) && q > 0) {
        const F = new Array(q).fill("");
        R = [...v, ...F], R.raw = [...v.raw, ...F];
      }
      const $ = O(R, ...I);
      if (process.env.NODE_ENV !== "production") {
        let F;
        c && (F = `${c}${pe(u || "")}`), F === void 0 && (F = `Styled(${cu(a)})`), $.displayName = F;
      }
      return a.muiName && ($.muiName = a.muiName), $;
    };
    return O.withConfig && (S.withConfig = O.withConfig), S;
  };
}
const Yh = Hh();
function _r(e, t) {
  const n = E({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = E({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = E({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = _r(i[a], s[a]);
      }));
    } else n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Kh(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : _r(t.components[n].defaultProps, r);
}
function Gh({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = ti(n);
  return r && (i = i[r] || i), Kh({
    theme: i,
    name: t,
    props: e
  });
}
const en = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function Xh(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xh
}, Symbol.toStringTag, { value: "Module" }));
function Rn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Qh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function uu(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Qh(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const qr = Rn(o.element, uu);
qr.isRequired = Rn(o.element.isRequired, uu);
function Zh(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function eb(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Zh(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Us = Rn(o.elementType, eb), tb = "exact-prop: ​";
function du(e) {
  return process.env.NODE_ENV === "production" ? e : E({}, e, {
    [tb]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function kr(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Yt = o.oneOfType([o.func, o.object]);
function al(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function ri(e, t = 166) {
  let n;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Ai(e, t) {
  var n, r;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function tn(e) {
  return ht(e).defaultView || window;
}
function nb(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? E({}, t.propTypes) : null;
  return (i) => (s, a, l, c, u, ...d) => {
    const f = u || a, m = n == null ? void 0 : n[f];
    if (m) {
      const y = m(s, a, l, c, u, ...d);
      if (y)
        return y;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function ls(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let ll = 0;
function rb(e) {
  const [t, n] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (ll += 1, n(`mui-${ll}`));
  }, [t]), r;
}
const cl = b.useId;
function Vs(e) {
  if (cl !== void 0) {
    const t = cl();
    return e ?? t;
  }
  return rb(e);
}
function ob(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function ul({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = b.useRef(e !== void 0), [s, a] = b.useState(t), l = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !i && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = b.useCallback((u) => {
    i || a(u);
  }, []);
  return [l, c];
}
function Jt(e) {
  const t = b.useRef(e);
  return en(() => {
    t.current = e;
  }), b.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function dt(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      ls(n, t);
    });
  }, e);
}
const dl = {};
function ib(e, t) {
  const n = b.useRef(dl);
  return n.current === dl && (n.current = e(t)), n;
}
const sb = [];
function ab(e) {
  b.useEffect(e, sb);
}
class oi {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new oi();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function fu() {
  const e = ib(oi.create).current;
  return ab(e.disposeEffect), e;
}
let ii = !0, cs = !1;
const lb = new oi(), cb = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function ub(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && cb[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function db(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ii = !0);
}
function Di() {
  ii = !1;
}
function fb() {
  this.visibilityState === "hidden" && cs && (ii = !0);
}
function pb(e) {
  e.addEventListener("keydown", db, !0), e.addEventListener("mousedown", Di, !0), e.addEventListener("pointerdown", Di, !0), e.addEventListener("touchstart", Di, !0), e.addEventListener("visibilitychange", fb, !0);
}
function mb(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ii || ub(t);
}
function hb() {
  const e = b.useCallback((i) => {
    i != null && pb(i.ownerDocument);
  }, []), t = b.useRef(!1);
  function n() {
    return t.current ? (cs = !0, lb.start(100, () => {
      cs = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(i) {
    return mb(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function pu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
let In;
function mu() {
  if (In)
    return In;
  const e = document.createElement("div"), t = document.createElement("div");
  return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), In = "reverse", e.scrollLeft > 0 ? In = "default" : (e.scrollLeft = 1, e.scrollLeft === 0 && (In = "negative")), document.body.removeChild(e), In;
}
function bb(e, t) {
  const n = e.scrollLeft;
  if (t !== "rtl")
    return n;
  switch (mu()) {
    case "negative":
      return e.scrollWidth - e.clientWidth + n;
    case "reverse":
      return e.scrollWidth - e.clientWidth - n;
    default:
      return n;
  }
}
function gb(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function yb(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const vb = Number.isInteger || yb;
function hu(e, t, n, r) {
  const i = e[t];
  if (i == null || !vb(i)) {
    const s = gb(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function bu(e, t, ...n) {
  return e[t] === void 0 ? null : hu(e, t, ...n);
}
function us() {
  return null;
}
bu.isRequired = hu;
us.isRequired = us;
const gu = process.env.NODE_ENV === "production" ? us : bu;
function Se(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => {
        if (a) {
          const l = t(a);
          l !== "" && s.push(l), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
function Co(e) {
  return typeof e == "string";
}
function xb(e, t, n) {
  return e === void 0 || Co(e) ? t : E({}, t, {
    ownerState: E({}, t.ownerState, n)
  });
}
function yu(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function fl(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Eb(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const y = se(n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), h = E({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), p = E({}, n, i, r);
    return y.length > 0 && (p.className = y), Object.keys(h).length > 0 && (p.style = h), {
      props: p,
      internalRef: void 0
    };
  }
  const a = yu(E({}, i, r)), l = fl(r), c = fl(i), u = t(a), d = se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = E({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = E({}, u, n, c, l);
  return d.length > 0 && (m.className = d), Object.keys(f).length > 0 && (m.style = f), {
    props: m,
    internalRef: u.ref
  };
}
function wb(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const Tb = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ht(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = ne(e, Tb), l = s ? {} : wb(r, i), {
    props: c,
    internalRef: u
  } = Eb(E({}, a, {
    externalSlotProps: l
  })), d = dt(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return xb(n, E({}, c, {
    ref: d
  }), i);
}
function Hr(e) {
  if (parseInt(b.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Sb = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (o.node, o.bool);
const zs = () => {
  const e = b.useContext(Sb);
  return e ?? !1;
}, Cb = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (o.node, o.object);
function Ob(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? _r(i.defaultProps, r) : !i.styleOverrides && !i.variants ? _r(i, r) : r;
}
function Rb({
  props: e,
  name: t
}) {
  const n = b.useContext(Cb);
  return Ob({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const Pb = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], Nb = zr(), _b = Yh("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`maxWidth${pe(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
  }
}), kb = (e) => Gh({
  props: e,
  name: "MuiContainer",
  defaultTheme: Nb
}), $b = (e, t) => {
  const n = (c) => Ee(t, c), {
    classes: r,
    fixed: i,
    disableGutters: s,
    maxWidth: a
  } = e, l = {
    root: ["root", a && `maxWidth${pe(String(a))}`, i && "fixed", s && "disableGutters"]
  };
  return Se(l, n, r);
};
function Mb(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = _b,
    useThemeProps: n = kb,
    componentName: r = "MuiContainer"
  } = e, i = t(({
    theme: a,
    ownerState: l
  }) => E({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !l.disableGutters && {
    paddingLeft: a.spacing(2),
    paddingRight: a.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("sm")]: {
      paddingLeft: a.spacing(3),
      paddingRight: a.spacing(3)
    }
  }), ({
    theme: a,
    ownerState: l
  }) => l.fixed && Object.keys(a.breakpoints.values).reduce((c, u) => {
    const d = u, f = a.breakpoints.values[d];
    return f !== 0 && (c[a.breakpoints.up(d)] = {
      maxWidth: `${f}${a.breakpoints.unit}`
    }), c;
  }, {}), ({
    theme: a,
    ownerState: l
  }) => E({}, l.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(a.breakpoints.values.xs, 444)
    }
  }, l.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  l.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up(l.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${a.breakpoints.values[l.maxWidth]}${a.breakpoints.unit}`
    }
  })), s = /* @__PURE__ */ b.forwardRef(function(l, c) {
    const u = n(l), {
      className: d,
      component: f = "div",
      disableGutters: m = !1,
      fixed: y = !1,
      maxWidth: h = "lg"
    } = u, p = ne(u, Pb), g = E({}, u, {
      component: f,
      disableGutters: m,
      fixed: y,
      maxWidth: h
    }), T = $b(g, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ w.jsx(i, E({
        as: f,
        ownerState: g,
        className: se(T.root, d),
        ref: c
      }, p))
    );
  });
  return process.env.NODE_ENV !== "production" && (s.propTypes = {
    children: o.node,
    classes: o.object,
    className: o.string,
    component: o.elementType,
    disableGutters: o.bool,
    fixed: o.bool,
    maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
    sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
  }), s;
}
function Ib(e, t) {
  return E({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var Je = {}, vu = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(vu);
var xu = vu.exports;
const jb = /* @__PURE__ */ dn(yp), Ab = /* @__PURE__ */ dn(Jh);
var Eu = xu;
Object.defineProperty(Je, "__esModule", {
  value: !0
});
var Ut = Je.alpha = Cu;
Je.blend = Kb;
Je.colorChannel = void 0;
var Db = Je.darken = Hs;
Je.decomposeColor = kt;
Je.emphasize = Ou;
var pl = Je.getContrastRatio = Vb;
Je.getLuminance = Oo;
Je.hexToRgb = wu;
Je.hslToRgb = Su;
var Fb = Je.lighten = Ys;
Je.private_safeAlpha = zb;
Je.private_safeColorChannel = void 0;
Je.private_safeDarken = qb;
Je.private_safeEmphasize = Yb;
Je.private_safeLighten = Hb;
Je.recomposeColor = Jn;
Je.rgbToHex = Ub;
var ml = Eu(jb), Lb = Eu(Ab);
function qs(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, Lb.default)(e, t, n);
}
function wu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Bb(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function kt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kt(wu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, ml.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, ml.default)(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Tu = (e) => {
  const t = kt(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
Je.colorChannel = Tu;
const Wb = (e, t) => {
  try {
    return Tu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Je.private_safeColorChannel = Wb;
function Jn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ub(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = kt(e);
  return `#${t.map((n, r) => Bb(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Su(e) {
  e = kt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Jn({
    type: l,
    values: c
  });
}
function Oo(e) {
  e = kt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kt(Su(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Vb(e, t) {
  const n = Oo(e), r = Oo(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Cu(e, t) {
  return e = kt(e), t = qs(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Jn(e);
}
function zb(e, t, n) {
  try {
    return Cu(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Hs(e, t) {
  if (e = kt(e), t = qs(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Jn(e);
}
function qb(e, t, n) {
  try {
    return Hs(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Ys(e, t) {
  if (e = kt(e), t = qs(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Jn(e);
}
function Hb(e, t, n) {
  try {
    return Ys(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Ou(e, t = 0.15) {
  return Oo(e) > 0.5 ? Hs(e, t) : Ys(e, t);
}
function Yb(e, t, n) {
  try {
    return Ou(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Kb(e, t, n, r = 1) {
  const i = (c, u) => Math.round((c ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r), s = kt(e), a = kt(t), l = [i(s.values[0], a.values[0]), i(s.values[1], a.values[1]), i(s.values[2], a.values[2])];
  return Jn({
    type: "rgb",
    values: l
  });
}
const Gb = ["mode", "contrastThreshold", "tonalOffset"], hl = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Or.white,
    default: Or.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Fi = {
  text: {
    primary: Or.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Or.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function bl(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fb(e.main, i) : t === "dark" && (e.dark = Db(e.main, s)));
}
function Xb(e = "light") {
  return e === "dark" ? {
    main: kn[200],
    light: kn[50],
    dark: kn[400]
  } : {
    main: kn[700],
    light: kn[400],
    dark: kn[800]
  };
}
function Jb(e = "light") {
  return e === "dark" ? {
    main: _n[200],
    light: _n[50],
    dark: _n[400]
  } : {
    main: _n[500],
    light: _n[300],
    dark: _n[700]
  };
}
function Qb(e = "light") {
  return e === "dark" ? {
    main: Nn[500],
    light: Nn[300],
    dark: Nn[700]
  } : {
    main: Nn[700],
    light: Nn[400],
    dark: Nn[800]
  };
}
function Zb(e = "light") {
  return e === "dark" ? {
    main: $n[400],
    light: $n[300],
    dark: $n[700]
  } : {
    main: $n[700],
    light: $n[500],
    dark: $n[900]
  };
}
function eg(e = "light") {
  return e === "dark" ? {
    main: Mn[400],
    light: Mn[300],
    dark: Mn[700]
  } : {
    main: Mn[800],
    light: Mn[500],
    dark: Mn[900]
  };
}
function tg(e = "light") {
  return e === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ar[500],
    dark: ar[900]
  };
}
function ng(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = ne(e, Gb), s = e.primary || Xb(t), a = e.secondary || Jb(t), l = e.error || Qb(t), c = e.info || Zb(t), u = e.success || eg(t), d = e.warning || tg(t);
  function f(p) {
    const g = pl(p, Fi.text.primary) >= n ? Fi.text.primary : hl.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = pl(p, g);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${g} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const m = ({
    color: p,
    name: g,
    mainShade: T = 500,
    lightShade: O = 300,
    darkShade: x = 700
  }) => {
    if (p = E({}, p), !p.main && p[T] && (p.main = p[T]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Sn(11, g ? ` (${g})` : "", T));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Sn(12, g ? ` (${g})` : "", JSON.stringify(p.main)));
    return bl(p, "light", O, r), bl(p, "dark", x, r), p.contrastText || (p.contrastText = f(p.main)), p;
  }, y = {
    dark: Fi,
    light: hl
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Et(E({
    // A collection of common colors.
    common: E({}, Or),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: gp,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, y[t]), i);
}
const rg = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function og(e) {
  return Math.round(e * 1e5) / 1e5;
}
const gl = {
  textTransform: "uppercase"
}, yl = '"Roboto", "Helvetica", "Arial", sans-serif';
function ig(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = yl,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f
  } = n, m = ne(n, rg);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = i / 14, h = f || ((T) => `${T / u * y}rem`), p = (T, O, x, S, v) => E({
    fontFamily: r,
    fontWeight: T,
    fontSize: h(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === yl ? {
    letterSpacing: `${og(S / O)}em`
  } : {}, v, d), g = {
    h1: p(s, 96, 1.167, -1.5),
    h2: p(s, 60, 1.2, -0.5),
    h3: p(a, 48, 1.167, 0),
    h4: p(a, 34, 1.235, 0.25),
    h5: p(a, 24, 1.334, 0),
    h6: p(l, 20, 1.6, 0.15),
    subtitle1: p(a, 16, 1.75, 0.15),
    subtitle2: p(l, 14, 1.57, 0.1),
    body1: p(a, 16, 1.5, 0.15),
    body2: p(a, 14, 1.43, 0.15),
    button: p(l, 14, 1.75, 0.4, gl),
    caption: p(a, 12, 1.66, 0.4),
    overline: p(a, 12, 2.66, 1, gl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et(E({
    htmlFontSize: u,
    pxToRem: h,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: l,
    fontWeightBold: c
  }, g), m, {
    clone: !1
    // No need to clone deep
  });
}
const sg = 0.2, ag = 0.14, lg = 0.12;
function Ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${sg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ag})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lg})`].join(",");
}
const cg = ["none", Ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ug = ["duration", "easing", "delay"], dg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, fg = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function vl(e) {
  return `${Math.round(e)}ms`;
}
function pg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function mg(e) {
  const t = E({}, dg, e.easing), n = E({}, fg, e.duration);
  return E({
    getAutoHeightDuration: pg,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ne(s, ug);
      if (process.env.NODE_ENV !== "production") {
        const d = (m) => typeof m == "string", f = (m) => !isNaN(parseFloat(m));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : vl(a)} ${l} ${typeof c == "string" ? c : vl(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const hg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, bg = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ru(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = ne(e, bg);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Sn(18));
  const l = ng(r), c = zr(e);
  let u = Et(c, {
    mixins: Ib(c.breakpoints, n),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: cg.slice(),
    typography: ig(l, s),
    transitions: mg(i),
    zIndex: E({}, hg)
  });
  if (u = Et(u, a), u = t.reduce((d, f) => Et(d, f), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (m, y) => {
      let h;
      for (h in m) {
        const p = m[h];
        if (d.indexOf(h) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = Ee("", h);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[h] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const y = u.components[m].styleOverrides;
      y && m.indexOf("Mui") === 0 && f(y, m);
    });
  }
  return u.unstable_sxConfig = E({}, Vr, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(f) {
    return Xn({
      sx: f,
      theme: this
    });
  }, u;
}
const Ks = Ru();
function Qn() {
  const e = ti(Ks);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[Bo] || e;
}
var Yr = {}, Li = { exports: {} }, xl;
function gg() {
  return xl || (xl = 1, function(e) {
    function t(n, r) {
      if (n == null) return {};
      var i = {};
      for (var s in n) if ({}.hasOwnProperty.call(n, s)) {
        if (r.indexOf(s) !== -1) continue;
        i[s] = n[s];
      }
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Li)), Li.exports;
}
const yg = /* @__PURE__ */ dn(Pm), vg = /* @__PURE__ */ dn(Nm), xg = /* @__PURE__ */ dn(Am), Eg = /* @__PURE__ */ dn(Fh), wg = /* @__PURE__ */ dn(Sh), Tg = /* @__PURE__ */ dn(_h);
var Zn = xu;
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
var Sg = Yr.default = Fg;
Yr.shouldForwardProp = bo;
Yr.systemDefaultTheme = void 0;
var Ot = Zn(Hc()), ds = Zn(gg()), El = Mg(yg), Cg = vg, Og = Zn(xg), Rg = Zn(Eg), Pg = Zn(wg), Ng = Zn(Tg);
const _g = ["ownerState"], kg = ["variants"], $g = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Pu(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Pu = function(r) {
    return r ? n : t;
  })(e);
}
function Mg(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = Pu(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e) if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
    var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
    a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = e[s];
  }
  return r.default = e, n && n.set(e, r), r;
}
function Ig(e) {
  return Object.keys(e).length === 0;
}
function jg(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function bo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ag = Yr.systemDefaultTheme = (0, Pg.default)(), wl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ro({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Ig(t) ? e : t[n] || t;
}
function Dg(e) {
  return e ? (t, n) => n[e] : null;
}
function go(e, t) {
  let {
    ownerState: n
  } = t, r = (0, ds.default)(t, _g);
  const i = typeof e == "function" ? e((0, Ot.default)({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((s) => go(s, (0, Ot.default)({
      ownerState: n
    }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: s = []
    } = i;
    let l = (0, ds.default)(i, kg);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, Ot.default)({
        ownerState: n
      }, r, n)) : Object.keys(c.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, Ot.default)({
        ownerState: n
      }, r, n)) : c.style));
    }), l;
  }
  return i;
}
function Fg(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ag,
    rootShouldForwardProp: r = bo,
    slotShouldForwardProp: i = bo
  } = e, s = (a) => (0, Ng.default)((0, Ot.default)({}, a, {
    theme: ro((0, Ot.default)({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, l = {}) => {
    (0, El.internal_processStyles)(a, (v) => v.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = Dg(wl(u))
    } = l, y = (0, ds.default)(l, $g), h = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), p = f || !1;
    let g;
    process.env.NODE_ENV !== "production" && c && (g = `${c}-${wl(u || "Root")}`);
    let T = bo;
    u === "Root" || u === "root" ? T = r : u ? T = i : jg(a) && (T = void 0);
    const O = (0, El.default)(a, (0, Ot.default)({
      shouldForwardProp: T,
      label: g
    }, y)), x = (v) => typeof v == "function" && v.__emotion_real !== v || (0, Cg.isPlainObject)(v) ? (P) => go(v, (0, Ot.default)({}, P, {
      theme: ro({
        theme: P.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : v, S = (v, ...P) => {
      let R = x(v);
      const I = P ? P.map(x) : [];
      c && m && I.push((F) => {
        const z = ro((0, Ot.default)({}, F, {
          defaultTheme: n,
          themeId: t
        }));
        if (!z.components || !z.components[c] || !z.components[c].styleOverrides)
          return null;
        const j = z.components[c].styleOverrides, M = {};
        return Object.entries(j).forEach(([U, W]) => {
          M[U] = go(W, (0, Ot.default)({}, F, {
            theme: z
          }));
        }), m(F, M);
      }), c && !h && I.push((F) => {
        var z;
        const j = ro((0, Ot.default)({}, F, {
          defaultTheme: n,
          themeId: t
        })), M = j == null || (z = j.components) == null || (z = z[c]) == null ? void 0 : z.variants;
        return go({
          variants: M
        }, (0, Ot.default)({}, F, {
          theme: j
        }));
      }), p || I.push(s);
      const q = I.length - P.length;
      if (Array.isArray(v) && q > 0) {
        const F = new Array(q).fill("");
        R = [...v, ...F], R.raw = [...v.raw, ...F];
      }
      const $ = O(R, ...I);
      if (process.env.NODE_ENV !== "production") {
        let F;
        c && (F = `${c}${(0, Og.default)(u || "")}`), F === void 0 && (F = `Styled(${(0, Rg.default)(a)})`), $.displayName = F;
      }
      return a.muiName && ($.muiName = a.muiName), $;
    };
    return O.withConfig && (S.withConfig = O.withConfig), S;
  };
}
function Nu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Mt = (e) => Nu(e) && e !== "classes", Z = Sg({
  themeId: Bo,
  defaultTheme: Ks,
  rootShouldForwardProp: Mt
}), Tl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
process.env.NODE_ENV !== "production" && (o.node, o.object.isRequired);
function Ce(e) {
  return Rb(e);
}
function Lg(e) {
  return Ee("MuiSvgIcon", e);
}
ve("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Bg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Wg = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`]
  };
  return Se(i, Lg, r);
}, Ug = Z("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${pe(n.color)}`], t[`fontSize${pe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, l, c, u, d, f, m, y, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? f : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ro = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: m = "0 0 24 24"
  } = r, y = ne(r, Bg), h = /* @__PURE__ */ b.isValidElement(i) && i.type === "svg", p = E({}, r, {
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: h
  }), g = {};
  d || (g.viewBox = m);
  const T = Wg(p);
  return /* @__PURE__ */ w.jsxs(Ug, E({
    as: l,
    className: se(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n
  }, g, y, h && i.props, {
    ownerState: p,
    children: [h ? i.props.children : i, f ? /* @__PURE__ */ w.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
Ro.muiName = "SvgIcon";
function Gs(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ w.jsx(Ro, E({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Ro.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(n));
}
function fs(e, t) {
  return fs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, fs(e, t);
}
function _u(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, fs(e, t);
}
const Sl = {
  disabled: !1
};
var Vg = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const Po = Nt.createContext(null);
var zg = function(t) {
  return t.scrollTop;
}, yr = "unmounted", gn = "exited", yn = "entering", Fn = "entered", ps = "exiting", Kt = /* @__PURE__ */ function(e) {
  _u(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = gn, s.appearStatus = yn) : c = Fn : r.unmountOnExit || r.mountOnEnter ? c = yr : c = gn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === yr ? {
      status: gn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== yn && a !== Fn && (s = yn) : (a === yn || a === Fn) && (s = ps);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, l;
    return s = a = l = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === yn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this);
          a && zg(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === gn && this.setState({
      status: yr
    });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [l] : [gr.findDOMNode(this), l], u = c[0], d = c[1], f = this.getTimeouts(), m = l ? f.appear : f.enter;
    if (!i && !a || Sl.disabled) {
      this.safeSetState({
        status: Fn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: yn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(m, function() {
        s.safeSetState({
          status: Fn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : gr.findDOMNode(this);
    if (!s || Sl.disabled) {
      this.safeSetState({
        status: gn
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: ps
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: gn
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, s.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : gr.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === yr)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ne(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Nt.createElement(Po.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : Nt.cloneElement(Nt.Children.only(a), l))
    );
  }, t;
}(Nt.Component);
Kt.contextType = Po;
Kt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Vg;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function jn() {
}
Kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jn,
  onEntering: jn,
  onEntered: jn,
  onExit: jn,
  onExiting: jn,
  onExited: jn
};
Kt.UNMOUNTED = yr;
Kt.EXITED = gn;
Kt.ENTERING = yn;
Kt.ENTERED = Fn;
Kt.EXITING = ps;
function qg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xs(e, t) {
  var n = function(s) {
    return t && ao(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Hd.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function Hg(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, l = {};
  for (var c in t) {
    if (r[c])
      for (a = 0; a < r[c].length; a++) {
        var u = r[c][a];
        l[r[c][a]] = n(u);
      }
    l[c] = n(c);
  }
  for (a = 0; a < i.length; a++)
    l[i[a]] = n(i[a]);
  return l;
}
function En(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Yg(e, t) {
  return Xs(e.children, function(n) {
    return lo(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: En(n, "appear", e),
      enter: En(n, "enter", e),
      exit: En(n, "exit", e)
    });
  });
}
function Kg(e, t, n) {
  var r = Xs(e.children), i = Hg(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (ao(a)) {
      var l = s in t, c = s in r, u = t[s], d = ao(u) && !u.props.in;
      c && (!l || d) ? i[s] = lo(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: En(a, "exit", e),
        enter: En(a, "enter", e)
      }) : !c && l && !d ? i[s] = lo(a, {
        in: !1
      }) : c && l && ao(u) && (i[s] = lo(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: En(a, "exit", e),
        enter: En(a, "enter", e)
      }));
    }
  }), i;
}
var Gg = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Xg = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Js = /* @__PURE__ */ function(e) {
  _u(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(qg(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Yg(i, l) : Kg(i, a, l),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Xs(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = E({}, l.children);
      return delete c[i.key], {
        children: c
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, l = ne(i, ["component", "childFactory"]), c = this.state.contextValue, u = Gg(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ Nt.createElement(Po.Provider, {
      value: c
    }, u) : /* @__PURE__ */ Nt.createElement(Po.Provider, {
      value: c
    }, /* @__PURE__ */ Nt.createElement(s, l, u));
  }, t;
}(Nt.Component);
Js.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
Js.defaultProps = Xg;
const ku = (e) => e.scrollTop;
function No(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function Jg(e) {
  return Ee("MuiPaper", e);
}
ve("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qg = ["className", "component", "elevation", "square", "variant"], Zg = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Se(s, Jg, i);
}, ey = Z("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return E({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && E({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ut("#fff", Tl(t.elevation))}, ${Ut("#fff", Tl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Kr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ne(r, Qg), d = E({}, r, {
    component: s,
    elevation: a,
    square: l,
    variant: c
  }), f = Zg(d);
  return process.env.NODE_ENV !== "production" && Qn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ w.jsx(ey, E({
    as: s,
    ownerState: d,
    className: se(f.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (Kr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Rn(gu, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
function $u(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = b.useState(!1), m = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, h = se(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), b.useEffect(() => {
    if (!l && c != null) {
      const p = setTimeout(c, u);
      return () => {
        clearTimeout(p);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ w.jsx("span", {
    className: m,
    style: y,
    children: /* @__PURE__ */ w.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && ($u.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Rt = ve("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ty = ["center", "classes", "className"];
let si = (e) => e, Cl, Ol, Rl, Pl;
const ms = 550, ny = 80, ry = qo(Cl || (Cl = si`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), oy = qo(Ol || (Ol = si`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), iy = qo(Rl || (Rl = si`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), sy = Z("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), ay = Z($u, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Pl || (Pl = si`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Rt.rippleVisible, ry, ms, ({
  theme: e
}) => e.transitions.easing.easeInOut, Rt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Rt.child, Rt.childLeaving, oy, ms, ({
  theme: e
}) => e.transitions.easing.easeInOut, Rt.childPulsate, iy, ({
  theme: e
}) => e.transitions.easing.easeInOut), Mu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, l = ne(r, ty), [c, u] = b.useState([]), d = b.useRef(0), f = b.useRef(null);
  b.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const m = b.useRef(!1), y = fu(), h = b.useRef(null), p = b.useRef(null), g = b.useCallback((S) => {
    const {
      pulsate: v,
      rippleX: P,
      rippleY: R,
      rippleSize: I,
      cb: q
    } = S;
    u(($) => [...$, /* @__PURE__ */ w.jsx(ay, {
      classes: {
        ripple: se(s.ripple, Rt.ripple),
        rippleVisible: se(s.rippleVisible, Rt.rippleVisible),
        ripplePulsate: se(s.ripplePulsate, Rt.ripplePulsate),
        child: se(s.child, Rt.child),
        childLeaving: se(s.childLeaving, Rt.childLeaving),
        childPulsate: se(s.childPulsate, Rt.childPulsate)
      },
      timeout: ms,
      pulsate: v,
      rippleX: P,
      rippleY: R,
      rippleSize: I
    }, d.current)]), d.current += 1, f.current = q;
  }, [s]), T = b.useCallback((S = {}, v = {}, P = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: I = i || v.pulsate,
      fakeElement: q = !1
      // For test purposes
    } = v;
    if ((S == null ? void 0 : S.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (m.current = !0);
    const $ = q ? null : p.current, F = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, j, M;
    if (I || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      z = Math.round(F.width / 2), j = Math.round(F.height / 2);
    else {
      const {
        clientX: U,
        clientY: W
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      z = Math.round(U - F.left), j = Math.round(W - F.top);
    }
    if (I)
      M = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const U = Math.max(Math.abs(($ ? $.clientWidth : 0) - z), z) * 2 + 2, W = Math.max(Math.abs(($ ? $.clientHeight : 0) - j), j) * 2 + 2;
      M = Math.sqrt(U ** 2 + W ** 2);
    }
    S != null && S.touches ? h.current === null && (h.current = () => {
      g({
        pulsate: R,
        rippleX: z,
        rippleY: j,
        rippleSize: M,
        cb: P
      });
    }, y.start(ny, () => {
      h.current && (h.current(), h.current = null);
    })) : g({
      pulsate: R,
      rippleX: z,
      rippleY: j,
      rippleSize: M,
      cb: P
    });
  }, [i, g, y]), O = b.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), x = b.useCallback((S, v) => {
    if (y.clear(), (S == null ? void 0 : S.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        x(S, v);
      });
      return;
    }
    h.current = null, u((P) => P.length > 0 ? P.slice(1) : P), f.current = v;
  }, [y]);
  return b.useImperativeHandle(n, () => ({
    pulsate: O,
    start: T,
    stop: x
  }), [O, T, x]), /* @__PURE__ */ w.jsx(sy, E({
    className: se(Rt.root, s.root, a),
    ref: p
  }, l, {
    children: /* @__PURE__ */ w.jsx(Js, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Mu.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
function ly(e) {
  return Ee("MuiButtonBase", e);
}
const cy = ve("MuiButtonBase", ["root", "disabled", "focusVisible"]), uy = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], dy = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Se({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, ly, i);
  return n && r && (a.root += ` ${r}`), a;
}, fy = Z("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${cy.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Gr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: m = !1,
    LinkComponent: y = "a",
    onBlur: h,
    onClick: p,
    onContextMenu: g,
    onDragLeave: T,
    onFocus: O,
    onFocusVisible: x,
    onKeyDown: S,
    onKeyUp: v,
    onMouseDown: P,
    onMouseLeave: R,
    onMouseUp: I,
    onTouchEnd: q,
    onTouchMove: $,
    onTouchStart: F,
    tabIndex: z = 0,
    TouchRippleProps: j,
    touchRippleRef: M,
    type: U
  } = r, W = ne(r, uy), Y = b.useRef(null), L = b.useRef(null), de = dt(L, M), {
    isFocusVisibleRef: k,
    onFocus: B,
    onBlur: J,
    ref: X
  } = hb(), [V, Q] = b.useState(!1);
  u && V && Q(!1), b.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Q(!0), Y.current.focus();
    }
  }), []);
  const [H, ee] = b.useState(!1);
  b.useEffect(() => {
    ee(!0);
  }, []);
  const te = H && !d && !u;
  b.useEffect(() => {
    V && m && !d && H && L.current.pulsate();
  }, [d, m, V, H]);
  function re(ce, at, St = f) {
    return Jt((Ft) => (at && at(Ft), !St && L.current && L.current[ce](Ft), !0));
  }
  const oe = re("start", P), le = re("stop", g), N = re("stop", T), ae = re("stop", I), ue = re("stop", (ce) => {
    V && ce.preventDefault(), R && R(ce);
  }), ge = re("start", F), Be = re("stop", q), Le = re("stop", $), ze = re("stop", (ce) => {
    J(ce), k.current === !1 && Q(!1), h && h(ce);
  }, !1), tt = Jt((ce) => {
    Y.current || (Y.current = ce.currentTarget), B(ce), k.current === !0 && (Q(!0), x && x(ce)), O && O(ce);
  }), Qe = () => {
    const ce = Y.current;
    return c && c !== "button" && !(ce.tagName === "A" && ce.href);
  }, Me = b.useRef(!1), nt = Jt((ce) => {
    m && !Me.current && V && L.current && ce.key === " " && (Me.current = !0, L.current.stop(ce, () => {
      L.current.start(ce);
    })), ce.target === ce.currentTarget && Qe() && ce.key === " " && ce.preventDefault(), S && S(ce), ce.target === ce.currentTarget && Qe() && ce.key === "Enter" && !u && (ce.preventDefault(), p && p(ce));
  }), rt = Jt((ce) => {
    m && ce.key === " " && L.current && V && !ce.defaultPrevented && (Me.current = !1, L.current.stop(ce, () => {
      L.current.pulsate(ce);
    })), v && v(ce), p && ce.target === ce.currentTarget && Qe() && ce.key === " " && !ce.defaultPrevented && p(ce);
  });
  let je = c;
  je === "button" && (W.href || W.to) && (je = y);
  const ot = {};
  je === "button" ? (ot.type = U === void 0 ? "button" : U, ot.disabled = u) : (!W.href && !W.to && (ot.role = "button"), u && (ot["aria-disabled"] = u));
  const Tt = dt(n, X, Y);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    te && !L.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [te]);
  const yt = E({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: m,
    tabIndex: z,
    focusVisible: V
  }), we = dy(yt);
  return /* @__PURE__ */ w.jsxs(fy, E({
    as: je,
    className: se(we.root, l),
    ownerState: yt,
    onBlur: ze,
    onClick: p,
    onContextMenu: le,
    onFocus: tt,
    onKeyDown: nt,
    onKeyUp: rt,
    onMouseDown: oe,
    onMouseLeave: ue,
    onMouseUp: ae,
    onDragLeave: N,
    onTouchEnd: Be,
    onTouchMove: Le,
    onTouchStart: ge,
    ref: Tt,
    tabIndex: u ? -1 : z,
    type: U
  }, ot, W, {
    children: [a, te ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ w.jsx(Mu, E({
        ref: de,
        center: s
      }, j))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Yt,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Us,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
function py(e) {
  return Ee("MuiTypography", e);
}
ve("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const my = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], hy = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${pe(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Se(l, py, a);
}, by = Z("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${pe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Nl = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, gy = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, yy = (e) => gy[e] || e, Ge = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTypography"
  }), i = yy(r.color), s = ni(E({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: m = "body1",
    variantMapping: y = Nl
  } = s, h = ne(s, my), p = E({}, s, {
    align: a,
    color: i,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: f,
    variant: m,
    variantMapping: y
  }), g = c || (f ? "p" : y[m] || Nl[m]) || "span", T = hy(p);
  return /* @__PURE__ */ w.jsx(by, E({
    as: g,
    ref: n,
    ownerState: p,
    className: se(T.root, l)
  }, h));
});
process.env.NODE_ENV !== "production" && (Ge.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: o.object
});
function vy(e) {
  return typeof e == "function" ? e() : e;
}
const _o = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, l] = b.useState(null), c = dt(/* @__PURE__ */ b.isValidElement(r) ? Hr(r) : null, n);
  if (en(() => {
    s || l(vy(i) || document.body);
  }, [i, s]), en(() => {
    if (a && !s)
      return ls(n, a), () => {
        ls(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ w.jsx(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ w.jsx(b.Fragment, {
    children: a && /* @__PURE__ */ Yd.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (_o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([kr, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (_o.propTypes = du(_o.propTypes));
const xy = ["onChange", "maxRows", "minRows", "style", "value"];
function oo(e) {
  return parseInt(e, 10) || 0;
}
const Ey = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function wy(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const Iu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: i,
    minRows: s = 1,
    style: a,
    value: l
  } = t, c = ne(t, xy), {
    current: u
  } = b.useRef(l != null), d = b.useRef(null), f = dt(n, d), m = b.useRef(null), y = b.useRef(null), h = b.useCallback(() => {
    const T = d.current, x = tn(T).getComputedStyle(T);
    if (x.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const S = y.current;
    S.style.width = x.width, S.value = T.value || t.placeholder || "x", S.value.slice(-1) === `
` && (S.value += " ");
    const v = x.boxSizing, P = oo(x.paddingBottom) + oo(x.paddingTop), R = oo(x.borderBottomWidth) + oo(x.borderTopWidth), I = S.scrollHeight;
    S.value = "x";
    const q = S.scrollHeight;
    let $ = I;
    s && ($ = Math.max(Number(s) * q, $)), i && ($ = Math.min(Number(i) * q, $)), $ = Math.max($, q);
    const F = $ + (v === "border-box" ? P + R : 0), z = Math.abs($ - I) <= 1;
    return {
      outerHeightStyle: F,
      overflowing: z
    };
  }, [i, s, t.placeholder]), p = b.useCallback(() => {
    const T = h();
    if (wy(T))
      return;
    const O = T.outerHeightStyle, x = d.current;
    m.current !== O && (m.current = O, x.style.height = `${O}px`), x.style.overflow = T.overflowing ? "hidden" : "";
  }, [h]);
  en(() => {
    const T = () => {
      p();
    };
    let O;
    const x = () => {
      cancelAnimationFrame(O), O = requestAnimationFrame(() => {
        T();
      });
    }, S = ri(T), v = d.current, P = tn(v);
    P.addEventListener("resize", S);
    let R;
    return typeof ResizeObserver < "u" && (R = new ResizeObserver(process.env.NODE_ENV === "test" ? x : T), R.observe(v)), () => {
      S.clear(), cancelAnimationFrame(O), P.removeEventListener("resize", S), R && R.disconnect();
    };
  }, [h, p]), en(() => {
    p();
  });
  const g = (T) => {
    u || p(), r && r(T);
  };
  return /* @__PURE__ */ w.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ w.jsx("textarea", E({
      value: l,
      onChange: g,
      ref: f,
      rows: s,
      style: a
    }, c)), /* @__PURE__ */ w.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: E({}, Ey.shadow, a, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (Iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  placeholder: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * @ignore
   */
  value: o.oneOfType([o.arrayOf(o.string), o.number, o.string])
});
function er({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, i) => (r[i] = e[i], n && typeof e[i] > "u" && (r[i] = n[i]), r), {});
}
const ai = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (ai.displayName = "FormControlContext");
function tr() {
  return b.useContext(ai);
}
function ju(e) {
  return /* @__PURE__ */ w.jsx(ou, E({}, e, {
    defaultTheme: Ks,
    themeId: Bo
  }));
}
process.env.NODE_ENV !== "production" && (ju.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: o.oneOfType([o.array, o.func, o.number, o.object, o.string, o.bool])
});
function _l(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ko(e, t = !1) {
  return e && (_l(e.value) && e.value !== "" || t && _l(e.defaultValue) && e.defaultValue !== "");
}
function Ty(e) {
  return e.startAdornment;
}
function Sy(e) {
  return Ee("MuiInputBase", e);
}
const qn = ve("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Cy = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], li = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${pe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ci = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, Oy = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: i,
    endAdornment: s,
    focused: a,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: f,
    size: m,
    startAdornment: y,
    type: h
  } = e, p = {
    root: ["root", `color${pe(n)}`, r && "disabled", i && "error", c && "fullWidth", a && "focused", l && "formControl", m && m !== "medium" && `size${pe(m)}`, d && "multiline", y && "adornedStart", s && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", h === "search" && "inputTypeSearch", d && "inputMultiline", m === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", s && "inputAdornedEnd", f && "readOnly"]
  };
  return Se(p, Sy, t);
}, ui = Z("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: li
})(({
  theme: e,
  ownerState: t
}) => E({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${qn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && E({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), di = Z("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ci
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light", r = E({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), i = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: n ? 0.42 : 0.5
  };
  return E({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${qn.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&:-ms-input-placeholder": i,
      // IE11
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${qn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Ry = /* @__PURE__ */ w.jsx(ju, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), fi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const i = Ce({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: a,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: f,
    disabled: m,
    disableInjectingGlobalStyles: y,
    endAdornment: h,
    fullWidth: p = !1,
    id: g,
    inputComponent: T = "input",
    inputProps: O = {},
    inputRef: x,
    maxRows: S,
    minRows: v,
    multiline: P = !1,
    name: R,
    onBlur: I,
    onChange: q,
    onClick: $,
    onFocus: F,
    onKeyDown: z,
    onKeyUp: j,
    placeholder: M,
    readOnly: U,
    renderSuffix: W,
    rows: Y,
    slotProps: L = {},
    slots: de = {},
    startAdornment: k,
    type: B = "text",
    value: J
  } = i, X = ne(i, Cy), V = O.value != null ? O.value : J, {
    current: Q
  } = b.useRef(V != null), H = b.useRef(), ee = b.useCallback((we) => {
    process.env.NODE_ENV !== "production" && we && we.nodeName !== "INPUT" && !we.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), te = dt(H, x, O.ref, ee), [re, oe] = b.useState(!1), le = tr();
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (le)
      return le.registerEffect();
  }, [le]);
  const N = er({
    props: i,
    muiFormControl: le,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  N.focused = le ? le.focused : re, b.useEffect(() => {
    !le && m && re && (oe(!1), I && I());
  }, [le, m, re, I]);
  const ae = le && le.onFilled, ue = le && le.onEmpty, ge = b.useCallback((we) => {
    ko(we) ? ae && ae() : ue && ue();
  }, [ae, ue]);
  en(() => {
    Q && ge({
      value: V
    });
  }, [V, ge, Q]);
  const Be = (we) => {
    if (N.disabled) {
      we.stopPropagation();
      return;
    }
    F && F(we), O.onFocus && O.onFocus(we), le && le.onFocus ? le.onFocus(we) : oe(!0);
  }, Le = (we) => {
    I && I(we), O.onBlur && O.onBlur(we), le && le.onBlur ? le.onBlur(we) : oe(!1);
  }, ze = (we, ...ce) => {
    if (!Q) {
      const at = we.target || H.current;
      if (at == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Sn(1));
      ge({
        value: at.value
      });
    }
    O.onChange && O.onChange(we, ...ce), q && q(we, ...ce);
  };
  b.useEffect(() => {
    ge(H.current);
  }, []);
  const tt = (we) => {
    H.current && we.currentTarget === we.target && H.current.focus(), $ && $(we);
  };
  let Qe = T, Me = O;
  P && Qe === "input" && (Y ? (process.env.NODE_ENV !== "production" && (v || S) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Me = E({
    type: void 0,
    minRows: Y,
    maxRows: Y
  }, Me)) : Me = E({
    type: void 0,
    maxRows: S,
    minRows: v
  }, Me), Qe = Iu);
  const nt = (we) => {
    ge(we.animationName === "mui-auto-fill-cancel" ? H.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    le && le.setAdornedStart(!!k);
  }, [le, k]);
  const rt = E({}, i, {
    color: N.color || "primary",
    disabled: N.disabled,
    endAdornment: h,
    error: N.error,
    focused: N.focused,
    formControl: le,
    fullWidth: p,
    hiddenLabel: N.hiddenLabel,
    multiline: P,
    size: N.size,
    startAdornment: k,
    type: B
  }), je = Oy(rt), ot = de.root || u.Root || ui, Tt = L.root || d.root || {}, yt = de.input || u.Input || di;
  return Me = E({}, Me, (r = L.input) != null ? r : d.input), /* @__PURE__ */ w.jsxs(b.Fragment, {
    children: [!y && Ry, /* @__PURE__ */ w.jsxs(ot, E({}, Tt, !Co(ot) && {
      ownerState: E({}, rt, Tt.ownerState)
    }, {
      ref: n,
      onClick: tt
    }, X, {
      className: se(je.root, Tt.className, c, U && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ w.jsx(ai.Provider, {
        value: null,
        children: /* @__PURE__ */ w.jsx(yt, E({
          ownerState: rt,
          "aria-invalid": N.error,
          "aria-describedby": s,
          autoComplete: a,
          autoFocus: l,
          defaultValue: f,
          disabled: N.disabled,
          id: g,
          onAnimationStart: nt,
          name: R,
          placeholder: M,
          readOnly: U,
          required: N.required,
          rows: Y,
          value: V,
          onKeyDown: z,
          onKeyUp: j,
          type: B
        }, Me, !Co(yt) && {
          as: Qe,
          ownerState: E({}, rt, Me.ownerState)
        }, {
          ref: te,
          className: se(je.input, Me.className, U && "MuiInputBase-readOnly"),
          onBlur: Le,
          onChange: ze,
          onFocus: Be
        }))
      }), h, W ? W(E({}, N, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Us,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * @ignore
   */
  renderSuffix: o.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
function Py(e) {
  return Ee("MuiInput", e);
}
const cr = E({}, qn, ve("MuiInput", ["root", "underline", "input"]));
function Ny(e) {
  return Ee("MuiOutlinedInput", e);
}
const on = E({}, qn, ve("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function _y(e) {
  return Ee("MuiFilledInput", e);
}
const hn = E({}, qn, ve("MuiFilledInput", ["root", "underline", "input"])), ky = Gs(/* @__PURE__ */ w.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), $y = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], My = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Qs = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Qn(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: f,
    onEntering: m,
    onExit: y,
    onExited: h,
    onExiting: p,
    style: g,
    timeout: T = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = Kt
  } = t, x = ne(t, $y), S = b.useRef(null), v = dt(S, Hr(l), n), P = (M) => (U) => {
    if (M) {
      const W = S.current;
      U === void 0 ? M(W) : M(W, U);
    }
  }, R = P(m), I = P((M, U) => {
    ku(M);
    const W = No({
      style: g,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("opacity", W), M.style.transition = r.transitions.create("opacity", W), d && d(M, U);
  }), q = P(f), $ = P(p), F = P((M) => {
    const U = No({
      style: g,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("opacity", U), M.style.transition = r.transitions.create("opacity", U), y && y(M);
  }), z = P(h), j = (M) => {
    s && s(S.current, M);
  };
  return /* @__PURE__ */ w.jsx(O, E({
    appear: a,
    in: u,
    nodeRef: S,
    onEnter: I,
    onEntered: q,
    onEntering: R,
    onExit: F,
    onExited: z,
    onExiting: $,
    addEndListener: j,
    timeout: T
  }, x, {
    children: (M, U) => /* @__PURE__ */ b.cloneElement(l, E({
      style: E({
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0
      }, My[M], g, l.props.style),
      ref: v
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: qr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
function Iy(e) {
  return Ee("MuiBackdrop", e);
}
ve("MuiBackdrop", ["root", "invisible"]);
const jy = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Ay = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Se({
    root: ["root", n && "invisible"]
  }, Iy, t);
}, Dy = Z("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => E({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Zs = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = Ce({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: f = {},
    invisible: m = !1,
    open: y,
    slotProps: h = {},
    slots: p = {},
    TransitionComponent: g = Qs,
    transitionDuration: T
  } = a, O = ne(a, jy), x = E({}, a, {
    component: u,
    invisible: m
  }), S = Ay(x), v = (r = h.root) != null ? r : f.root;
  return /* @__PURE__ */ w.jsx(g, E({
    in: y,
    timeout: T
  }, O, {
    children: /* @__PURE__ */ w.jsx(Dy, E({
      "aria-hidden": !0
    }, v, {
      as: (i = (s = p.root) != null ? s : d.Root) != null ? i : u,
      className: se(S.root, c, v == null ? void 0 : v.className),
      ownerState: E({}, x, v == null ? void 0 : v.ownerState),
      classes: S,
      ref: n,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Fy = ve("MuiBox", ["root"]), Ly = Ru(), Hn = Mh({
  themeId: Bo,
  defaultTheme: Ly,
  defaultClassName: Fy.root,
  generateClassName: iu.generate
});
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function By(e) {
  return Ee("MuiButton", e);
}
const io = ve("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Au = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Au.displayName = "ButtonGroupContext");
const Du = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (Du.displayName = "ButtonGroupButtonContext");
const Wy = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Uy = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, `${s}${pe(t)}`, `size${pe(i)}`, `${s}Size${pe(i)}`, `color${pe(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${pe(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(i)}`]
  }, c = Se(l, By, a);
  return E({}, a, c);
}, Fu = (e) => E({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Vy = Z(Gr, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${pe(n.color)}`], t[`size${pe(n.size)}`], t[`${n.variant}Size${pe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return E({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": E({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": E({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${io.focusVisible}`]: E({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${io.disabled}`]: E({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ut(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${io.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${io.disabled}`]: {
    boxShadow: "none"
  }
}), zy = Z("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${pe(n.size)}`]];
  }
})(({
  ownerState: e
}) => E({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Fu(e))), qy = Z("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${pe(n.size)}`]];
  }
})(({
  ownerState: e
}) => E({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Fu(e))), Qt = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = b.useContext(Au), i = b.useContext(Du), s = _r(r, t), a = Ce({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: m = !1,
    disableFocusRipple: y = !1,
    endIcon: h,
    focusVisibleClassName: p,
    fullWidth: g = !1,
    size: T = "medium",
    startIcon: O,
    type: x,
    variant: S = "text"
  } = a, v = ne(a, Wy), P = E({}, a, {
    color: c,
    component: u,
    disabled: f,
    disableElevation: m,
    disableFocusRipple: y,
    fullWidth: g,
    size: T,
    type: x,
    variant: S
  }), R = Uy(P), I = O && /* @__PURE__ */ w.jsx(zy, {
    className: R.startIcon,
    ownerState: P,
    children: O
  }), q = h && /* @__PURE__ */ w.jsx(qy, {
    className: R.endIcon,
    ownerState: P,
    children: h
  }), $ = i || "";
  return /* @__PURE__ */ w.jsxs(Vy, E({
    ownerState: P,
    className: se(r.className, R.root, d, $),
    component: u,
    disabled: f,
    focusRipple: !y,
    focusVisibleClassName: se(R.focusVisible, p),
    ref: n,
    type: x
  }, v, {
    classes: R,
    children: [I, l, q]
  }));
});
process.env.NODE_ENV !== "production" && (Qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
function Hy(e) {
  return Ee("MuiCard", e);
}
ve("MuiCard", ["root"]);
const Yy = ["className", "raised"], Ky = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"]
  }, Hy, t);
}, Gy = Z(Kr, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), $o = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiCard"
  }), {
    className: i,
    raised: s = !1
  } = r, a = ne(r, Yy), l = E({}, r, {
    raised: s
  }), c = Ky(l);
  return /* @__PURE__ */ w.jsx(Gy, E({
    className: se(c.root, i),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: l
  }, a));
});
process.env.NODE_ENV !== "production" && ($o.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: Rn(o.bool, (e) => e.raised && e.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Xy(e) {
  return Ee("MuiCardContent", e);
}
ve("MuiCardContent", ["root"]);
const Jy = ["className", "component"], Qy = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"]
  }, Xy, t);
}, Zy = Z("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Mo = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiCardContent"
  }), {
    className: i,
    component: s = "div"
  } = r, a = ne(r, Jy), l = E({}, r, {
    component: s
  }), c = Qy(l);
  return /* @__PURE__ */ w.jsx(Zy, E({
    as: s,
    className: se(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function ev(e) {
  return Ee("MuiCardMedia", e);
}
ve("MuiCardMedia", ["root", "media", "img"]);
const tv = ["children", "className", "component", "image", "src", "style"], nv = (e) => {
  const {
    classes: t,
    isMediaComponent: n,
    isImageComponent: r
  } = e;
  return Se({
    root: ["root", n && "media", r && "img"]
  }, ev, t);
}, rv = Z("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      isMediaComponent: r,
      isImageComponent: i
    } = n;
    return [t.root, r && t.media, i && t.img];
  }
})(({
  ownerState: e
}) => E({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, e.isMediaComponent && {
  width: "100%"
}, e.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
})), ov = ["video", "audio", "picture", "iframe", "img"], iv = ["picture", "img"], Lu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiCardMedia"
  }), {
    children: i,
    className: s,
    component: a = "div",
    image: l,
    src: c,
    style: u
  } = r, d = ne(r, tv), f = ov.indexOf(a) !== -1, m = !f && l ? E({
    backgroundImage: `url("${l}")`
  }, u) : u, y = E({}, r, {
    component: a,
    isMediaComponent: f,
    isImageComponent: iv.indexOf(a) !== -1
  }), h = nv(y);
  return /* @__PURE__ */ w.jsx(rv, E({
    className: se(h.root, s),
    as: a,
    role: !f && l ? "img" : void 0,
    ref: n,
    style: m,
    ownerState: y,
    src: f ? l || c : void 0
  }, d, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Lu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: Rn(o.node, (e) => !e.children && !e.image && !e.src && !e.component ? new Error("MUI: Either `children`, `image`, `src` or `component` prop must be specified.") : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: o.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: o.string,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ea = Mb({
  createStyledComponent: Z("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`maxWidth${pe(String(n.maxWidth))}`], n.fixed && t.fixed, n.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => Ce({
    props: e,
    name: "MuiContainer"
  })
});
process.env.NODE_ENV !== "production" && (ea.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: o.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function sv(e) {
  const t = ht(e);
  return t.body === e ? tn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function xr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function kl(e) {
  return parseInt(tn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function av(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function $l(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = s.indexOf(a) === -1, c = !av(a);
    l && c && xr(a, i);
  });
}
function Bi(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function lv(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (sv(r)) {
      const a = pu(ht(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${kl(r) + a}px`;
      const l = ht(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        n.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${kl(c) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = ht(r).body;
    else {
      const a = r.parentElement, l = tn(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: l
    }) => {
      s ? a.style.setProperty(l, s) : a.style.removeProperty(l);
    });
  };
}
function cv(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class uv {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && xr(t.modalRef, !1);
    const i = cv(n);
    $l(n, t.mount, t.modalRef, i, !0);
    const s = Bi(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Bi(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = lv(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Bi(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && xr(t.modalRef, n), $l(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && xr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const dv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function fv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function pv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function mv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || pv(e));
}
function hv(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(dv)).forEach((r, i) => {
    const s = fv(r);
    s === -1 || !mv(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function bv() {
  return !0;
}
function Io(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = hv,
    isEnabled: a = bv,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), f = b.useRef(null), m = b.useRef(null), y = b.useRef(!1), h = b.useRef(null), p = dt(Hr(t), h), g = b.useRef(null);
  b.useEffect(() => {
    !l || !h.current || (y.current = !n);
  }, [n, l]), b.useEffect(() => {
    if (!l || !h.current)
      return;
    const x = ht(h.current);
    return h.current.contains(x.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), y.current && h.current.focus()), () => {
      i || (f.current && f.current.focus && (c.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !h.current)
      return;
    const x = ht(h.current), S = (R) => {
      g.current = R, !(r || !a() || R.key !== "Tab") && x.activeElement === h.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, v = () => {
      const R = h.current;
      if (R === null)
        return;
      if (!x.hasFocus() || !a() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(x.activeElement) || r && x.activeElement !== u.current && x.activeElement !== d.current)
        return;
      if (x.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!y.current)
        return;
      let I = [];
      if ((x.activeElement === u.current || x.activeElement === d.current) && (I = s(h.current)), I.length > 0) {
        var q, $;
        const F = !!((q = g.current) != null && q.shiftKey && (($ = g.current) == null ? void 0 : $.key) === "Tab"), z = I[0], j = I[I.length - 1];
        typeof z != "string" && typeof j != "string" && (F ? j.focus() : z.focus());
      } else
        R.focus();
    };
    x.addEventListener("focusin", v), x.addEventListener("keydown", S, !0);
    const P = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(P), x.removeEventListener("focusin", v), x.removeEventListener("keydown", S, !0);
    };
  }, [n, r, i, a, l, s]);
  const T = (x) => {
    f.current === null && (f.current = x.relatedTarget), y.current = !0, m.current = x.target;
    const S = t.props.onFocus;
    S && S(x);
  }, O = (x) => {
    f.current === null && (f.current = x.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ w.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ w.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: p,
      onFocus: T
    }), /* @__PURE__ */ w.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: O,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: qr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Io.propTypes = du(Io.propTypes));
function gv(e) {
  return typeof e == "function" ? e() : e;
}
function yv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const vv = new uv();
function xv(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = vv,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: f
  } = e, m = b.useRef({}), y = b.useRef(null), h = b.useRef(null), p = dt(h, f), [g, T] = b.useState(!d), O = yv(c);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const S = () => ht(y.current), v = () => (m.current.modalRef = h.current, m.current.mount = y.current, m.current), P = () => {
    i.mount(v(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, R = Jt(() => {
    const W = gv(t) || S().body;
    i.add(v(), W), h.current && P();
  }), I = b.useCallback(() => i.isTopModal(v()), [i]), q = Jt((W) => {
    y.current = W, W && (d && I() ? P() : h.current && xr(h.current, x));
  }), $ = b.useCallback(() => {
    i.remove(v(), x);
  }, [x, i]);
  b.useEffect(() => () => {
    $();
  }, [$]), b.useEffect(() => {
    d ? R() : (!O || !s) && $();
  }, [d, $, O, s, R]);
  const F = (W) => (Y) => {
    var L;
    (L = W.onKeyDown) == null || L.call(W, Y), !(Y.key !== "Escape" || Y.which === 229 || // Wait until IME is settled.
    !I()) && (n || (Y.stopPropagation(), u && u(Y, "escapeKeyDown")));
  }, z = (W) => (Y) => {
    var L;
    (L = W.onClick) == null || L.call(W, Y), Y.target === Y.currentTarget && u && u(Y, "backdropClick");
  };
  return {
    getRootProps: (W = {}) => {
      const Y = yu(e);
      delete Y.onTransitionEnter, delete Y.onTransitionExited;
      const L = E({}, Y, W);
      return E({
        role: "presentation"
      }, L, {
        onKeyDown: F(L),
        ref: p
      });
    },
    getBackdropProps: (W = {}) => {
      const Y = W;
      return E({
        "aria-hidden": !0
      }, Y, {
        onClick: z(Y),
        open: d
      });
    },
    getTransitionProps: () => {
      const W = () => {
        T(!1), a && a();
      }, Y = () => {
        T(!0), l && l(), s && $();
      };
      return {
        onEnter: al(W, c == null ? void 0 : c.props.onEnter),
        onExited: al(Y, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: p,
    portalRef: q,
    isTopModal: I,
    exited: g,
    hasTransition: O
  };
}
function Ev(e) {
  return Ee("MuiModal", e);
}
ve("MuiModal", ["root", "hidden", "backdrop"]);
const wv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Tv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Se({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ev, r);
}, Sv = Z("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Cv = Z(Zs, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ta = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, l, c;
  const u = Ce({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Cv,
    BackdropProps: f,
    className: m,
    closeAfterTransition: y = !1,
    children: h,
    container: p,
    component: g,
    components: T = {},
    componentsProps: O = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: S = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: P = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: I = !1,
    hideBackdrop: q = !1,
    keepMounted: $ = !1,
    onBackdropClick: F,
    open: z,
    slotProps: j,
    slots: M
    // eslint-disable-next-line react/prop-types
  } = u, U = ne(u, wv), W = E({}, u, {
    closeAfterTransition: y,
    disableAutoFocus: x,
    disableEnforceFocus: S,
    disableEscapeKeyDown: v,
    disablePortal: P,
    disableRestoreFocus: R,
    disableScrollLock: I,
    hideBackdrop: q,
    keepMounted: $
  }), {
    getRootProps: Y,
    getBackdropProps: L,
    getTransitionProps: de,
    portalRef: k,
    isTopModal: B,
    exited: J,
    hasTransition: X
  } = xv(E({}, W, {
    rootRef: n
  })), V = E({}, W, {
    exited: J
  }), Q = Tv(V), H = {};
  if (h.props.tabIndex === void 0 && (H.tabIndex = "-1"), X) {
    const {
      onEnter: ae,
      onExited: ue
    } = de();
    H.onEnter = ae, H.onExited = ue;
  }
  const ee = (r = (i = M == null ? void 0 : M.root) != null ? i : T.Root) != null ? r : Sv, te = (s = (a = M == null ? void 0 : M.backdrop) != null ? a : T.Backdrop) != null ? s : d, re = (l = j == null ? void 0 : j.root) != null ? l : O.root, oe = (c = j == null ? void 0 : j.backdrop) != null ? c : O.backdrop, le = Ht({
    elementType: ee,
    externalSlotProps: re,
    externalForwardedProps: U,
    getSlotProps: Y,
    additionalProps: {
      ref: n,
      as: g
    },
    ownerState: V,
    className: se(m, re == null ? void 0 : re.className, Q == null ? void 0 : Q.root, !V.open && V.exited && (Q == null ? void 0 : Q.hidden))
  }), N = Ht({
    elementType: te,
    externalSlotProps: oe,
    additionalProps: f,
    getSlotProps: (ae) => L(E({}, ae, {
      onClick: (ue) => {
        F && F(ue), ae != null && ae.onClick && ae.onClick(ue);
      }
    })),
    className: se(oe == null ? void 0 : oe.className, f == null ? void 0 : f.className, Q == null ? void 0 : Q.backdrop),
    ownerState: V
  });
  return !$ && !z && (!X || J) ? null : /* @__PURE__ */ w.jsx(_o, {
    ref: k,
    container: p,
    disablePortal: P,
    children: /* @__PURE__ */ w.jsxs(ee, E({}, le, {
      children: [!q && d ? /* @__PURE__ */ w.jsx(te, E({}, N)) : null, /* @__PURE__ */ w.jsx(Io, {
        disableEnforceFocus: S,
        disableAutoFocus: x,
        disableRestoreFocus: R,
        isEnabled: B,
        open: z,
        children: /* @__PURE__ */ b.cloneElement(h, H)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: qr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([kr, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Ov(e) {
  return Ee("MuiDialog", e);
}
const Wi = ve("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), na = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (na.displayName = "DialogContext");
const Rv = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Pv = Z(Zs, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Nv = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: s
  } = e, a = {
    root: ["root"],
    container: ["container", `scroll${pe(n)}`],
    paper: ["paper", `paperScroll${pe(n)}`, `paperWidth${pe(String(r))}`, i && "paperFullWidth", s && "paperFullScreen"]
  };
  return Se(a, Ov, t);
}, _v = Z(ta, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), kv = Z("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${pe(n.scroll)}`]];
  }
})(({
  ownerState: e
}) => E({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), $v = Z(Kr, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${pe(n.scroll)}`], t[`paperWidth${pe(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Wi.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Wi.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Wi.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), ra = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialog"
  }), i = Qn(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": a,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: f,
    disableEscapeKeyDown: m = !1,
    fullScreen: y = !1,
    fullWidth: h = !1,
    maxWidth: p = "sm",
    onBackdropClick: g,
    onClick: T,
    onClose: O,
    open: x,
    PaperComponent: S = Kr,
    PaperProps: v = {},
    scroll: P = "paper",
    TransitionComponent: R = Qs,
    transitionDuration: I = s,
    TransitionProps: q
  } = r, $ = ne(r, Rv), F = E({}, r, {
    disableEscapeKeyDown: m,
    fullScreen: y,
    fullWidth: h,
    maxWidth: p,
    scroll: P
  }), z = Nv(F), j = b.useRef(), M = (L) => {
    j.current = L.target === L.currentTarget;
  }, U = (L) => {
    T && T(L), j.current && (j.current = null, g && g(L), O && O(L, "backdropClick"));
  }, W = Vs(l), Y = b.useMemo(() => ({
    titleId: W
  }), [W]);
  return /* @__PURE__ */ w.jsx(_v, E({
    className: se(z.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: Pv
    },
    componentsProps: {
      backdrop: E({
        transitionDuration: I,
        as: c
      }, u)
    },
    disableEscapeKeyDown: m,
    onClose: O,
    open: x,
    ref: n,
    onClick: U,
    ownerState: F
  }, $, {
    children: /* @__PURE__ */ w.jsx(R, E({
      appear: !0,
      in: x,
      timeout: I,
      role: "presentation"
    }, q, {
      children: /* @__PURE__ */ w.jsx(kv, {
        className: se(z.container),
        onMouseDown: M,
        ownerState: F,
        children: /* @__PURE__ */ w.jsx($v, E({
          as: S,
          elevation: 24,
          role: "dialog",
          "aria-describedby": a,
          "aria-labelledby": W
        }, v, {
          className: se(z.paper, v.className),
          ownerState: F,
          children: /* @__PURE__ */ w.jsx(na.Provider, {
            value: Y,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": o.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": o.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: o.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: o.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
function Mv(e) {
  return Ee("MuiDialogActions", e);
}
ve("MuiDialogActions", ["root", "spacing"]);
const Iv = ["className", "disableSpacing"], jv = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return Se({
    root: ["root", !n && "spacing"]
  }, Mv, t);
}, Av = Z("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => E({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), oa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: s = !1
  } = r, a = ne(r, Iv), l = E({}, r, {
    disableSpacing: s
  }), c = jv(l);
  return /* @__PURE__ */ w.jsx(Av, E({
    className: se(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (oa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function Dv(e) {
  return Ee("MuiDialogContent", e);
}
ve("MuiDialogContent", ["root", "dividers"]);
function Fv(e) {
  return Ee("MuiDialogTitle", e);
}
const Lv = ve("MuiDialogTitle", ["root"]), Bv = ["className", "dividers"], Wv = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Se({
    root: ["root", n && "dividers"]
  }, Dv, t);
}, Uv = Z("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${Lv.root} + &`]: {
    paddingTop: 0
  }
})), ia = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: s = !1
  } = r, a = ne(r, Bv), l = E({}, r, {
    dividers: s
  }), c = Wv(l);
  return /* @__PURE__ */ w.jsx(Uv, E({
    className: se(c.root, i),
    ownerState: l,
    ref: n
  }, a));
});
process.env.NODE_ENV !== "production" && (ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Vv = ["className", "id"], zv = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"]
  }, Fv, t);
}, qv = Z(Ge, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), sa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: s
  } = r, a = ne(r, Vv), l = r, c = zv(l), {
    titleId: u = s
  } = b.useContext(na);
  return /* @__PURE__ */ w.jsx(qv, E({
    component: "h2",
    className: se(c.root, i),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: s ?? u
  }, a));
});
process.env.NODE_ENV !== "production" && (sa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  id: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Ml = ve("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), Hv = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Yv = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Se({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, _y, t);
  return E({}, t, i);
}, Kv = Z(ui, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...li(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = e.palette.mode === "light", i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return E({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${hn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${hn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${hn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${hn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : i}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${hn.disabled}, .${hn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${hn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && E({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), Gv = Z(di, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ci
})(({
  theme: e,
  ownerState: t
}) => E({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), pi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = Ce({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: f = "input",
    multiline: m = !1,
    slotProps: y,
    slots: h = {},
    type: p = "text"
  } = l, g = ne(l, Hv), T = E({}, l, {
    fullWidth: d,
    inputComponent: f,
    multiline: m,
    type: p
  }), O = Yv(l), x = {
    root: {
      ownerState: T
    },
    input: {
      ownerState: T
    }
  }, S = y ?? u ? Et(x, y ?? u) : x, v = (r = (i = h.root) != null ? i : c.Root) != null ? r : Kv, P = (s = (a = h.input) != null ? a : c.Input) != null ? s : Gv;
  return /* @__PURE__ */ w.jsx(fi, E({
    slots: {
      root: v,
      input: P
    },
    componentsProps: S,
    fullWidth: d,
    inputComponent: f,
    multiline: m,
    ref: n,
    type: p
  }, g, {
    classes: O
  }));
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
pi.muiName = "Input";
function Xv(e) {
  return Ee("MuiFormControl", e);
}
ve("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Jv = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], Qv = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, i = {
    root: ["root", n !== "none" && `margin${pe(n)}`, r && "fullWidth"]
  };
  return Se(i, Xv, t);
}, Zv = Z("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => E({}, t.root, t[`margin${pe(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => E({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), aa = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormControl"
  }), {
    children: i,
    className: s,
    color: a = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: f = !1,
    hiddenLabel: m = !1,
    margin: y = "none",
    required: h = !1,
    size: p = "medium",
    variant: g = "outlined"
  } = r, T = ne(r, Jv), O = E({}, r, {
    color: a,
    component: l,
    disabled: c,
    error: u,
    fullWidth: f,
    hiddenLabel: m,
    margin: y,
    required: h,
    size: p,
    variant: g
  }), x = Qv(O), [S, v] = b.useState(() => {
    let j = !1;
    return i && b.Children.forEach(i, (M) => {
      if (!Ai(M, ["Input", "Select"]))
        return;
      const U = Ai(M, ["Select"]) ? M.props.input : M;
      U && Ty(U.props) && (j = !0);
    }), j;
  }), [P, R] = b.useState(() => {
    let j = !1;
    return i && b.Children.forEach(i, (M) => {
      Ai(M, ["Input", "Select"]) && (ko(M.props, !0) || ko(M.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [I, q] = b.useState(!1);
  c && I && q(!1);
  const $ = d !== void 0 && !c ? d : I;
  let F;
  if (process.env.NODE_ENV !== "production") {
    const j = b.useRef(!1);
    F = () => (j.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), j.current = !0, () => {
      j.current = !1;
    });
  }
  const z = b.useMemo(() => ({
    adornedStart: S,
    setAdornedStart: v,
    color: a,
    disabled: c,
    error: u,
    filled: P,
    focused: $,
    fullWidth: f,
    hiddenLabel: m,
    size: p,
    onBlur: () => {
      q(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      q(!0);
    },
    registerEffect: F,
    required: h,
    variant: g
  }), [S, a, c, u, P, $, f, m, F, h, p, g]);
  return /* @__PURE__ */ w.jsx(ai.Provider, {
    value: z,
    children: /* @__PURE__ */ w.jsx(Zv, E({
      as: l,
      ownerState: O,
      className: se(x.root, s),
      ref: n
    }, T, {
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (aa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: o.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: o.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function ex(e) {
  return Ee("MuiFormHelperText", e);
}
const Il = ve("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var jl;
const tx = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], nx = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: i,
    error: s,
    filled: a,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", i && "disabled", s && "error", r && `size${pe(r)}`, n && "contained", l && "focused", a && "filled", c && "required"]
  };
  return Se(u, ex, t);
}, rx = Z("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${pe(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Il.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Il.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Bu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: i,
    className: s,
    component: a = "p"
  } = r, l = ne(r, tx), c = tr(), u = er({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = E({}, r, {
    component: a,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = nx(d);
  return /* @__PURE__ */ w.jsx(rx, E({
    as: a,
    ownerState: d,
    className: se(f.root, s),
    ref: n
  }, l, {
    children: i === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      jl || (jl = /* @__PURE__ */ w.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : i
  }));
});
process.env.NODE_ENV !== "production" && (Bu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
function ox(e) {
  return Ee("MuiFormLabel", e);
}
const Er = ve("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), ix = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], sx = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: i,
    error: s,
    filled: a,
    required: l
  } = e, c = {
    root: ["root", `color${pe(n)}`, i && "disabled", s && "error", a && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return Se(c, ox, t);
}, ax = Z("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => E({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => E({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Er.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Er.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Er.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), lx = Z("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${Er.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Wu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: i,
    className: s,
    component: a = "label"
  } = r, l = ne(r, ix), c = tr(), u = er({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = E({}, r, {
    color: u.color || "primary",
    component: a,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), f = sx(d);
  return /* @__PURE__ */ w.jsxs(ax, E({
    as: a,
    ownerState: d,
    className: se(f.root, s),
    ref: n
  }, l, {
    children: [i, u.required && /* @__PURE__ */ w.jsxs(lx, {
      ownerState: d,
      "aria-hidden": !0,
      className: f.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: o.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: o.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const hs = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (hs.displayName = "GridContext");
function cx(e) {
  return Ee("MuiGrid", e);
}
const ux = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], dx = ["column-reverse", "column", "row-reverse", "row"], fx = ["nowrap", "wrap-reverse", "wrap"], ur = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], $r = ve("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...ux.map((e) => `spacing-xs-${e}`),
  // direction values
  ...dx.map((e) => `direction-xs-${e}`),
  // wrap values
  ...fx.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...ur.map((e) => `grid-xs-${e}`),
  ...ur.map((e) => `grid-sm-${e}`),
  ...ur.map((e) => `grid-md-${e}`),
  ...ur.map((e) => `grid-lg-${e}`),
  ...ur.map((e) => `grid-xl-${e}`)
]), px = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function Wn(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function mx({
  theme: e,
  ownerState: t
}) {
  let n;
  return e.breakpoints.keys.reduce((r, i) => {
    let s = {};
    if (t[i] && (n = t[i]), !n)
      return r;
    if (n === !0)
      s = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (n === "auto")
      s = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = Ho({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), l = typeof a == "object" ? a[i] : a;
      if (l == null)
        return r;
      const c = `${Math.round(n / l * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const d = e.spacing(t.columnSpacing);
        if (d !== "0px") {
          const f = `calc(${c} + ${Wn(d)})`;
          u = {
            flexBasis: f,
            maxWidth: f
          };
        }
      }
      s = E({
        flexBasis: c,
        flexGrow: 0,
        maxWidth: c
      }, u);
    }
    return e.breakpoints.values[i] === 0 ? Object.assign(r, s) : r[e.breakpoints.up(i)] = s, r;
  }, {});
}
function hx({
  theme: e,
  ownerState: t
}) {
  const n = Ho({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return _t({
    theme: e
  }, n, (r) => {
    const i = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (i[`& > .${$r.item}`] = {
      maxWidth: "none"
    }), i;
  });
}
function Uu({
  breakpoints: e,
  values: t
}) {
  let n = "";
  Object.keys(t).forEach((i) => {
    n === "" && t[i] !== 0 && (n = i);
  });
  const r = Object.keys(e).sort((i, s) => e[i] - e[s]);
  return r.slice(0, r.indexOf(n));
}
function bx({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    rowSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const s = Ho({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Uu({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = _t({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        marginTop: `-${Wn(d)}`,
        [`& > .${$r.item}`]: {
          paddingTop: Wn(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        marginTop: 0,
        [`& > .${$r.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return i;
}
function gx({
  theme: e,
  ownerState: t
}) {
  const {
    container: n,
    columnSpacing: r
  } = t;
  let i = {};
  if (n && r !== 0) {
    const s = Ho({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof s == "object" && (a = Uu({
      breakpoints: e.breakpoints.values,
      values: s
    })), i = _t({
      theme: e
    }, s, (l, c) => {
      var u;
      const d = e.spacing(l);
      return d !== "0px" ? {
        width: `calc(100% + ${Wn(d)})`,
        marginLeft: `-${Wn(d)}`,
        [`& > .${$r.item}`]: {
          paddingLeft: Wn(d)
        }
      } : (u = a) != null && u.includes(c) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${$r.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return i;
}
function yx(e, t, n = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((i) => {
    const s = e[i];
    Number(s) > 0 && r.push(n[`spacing-${i}-${String(s)}`]);
  }), r;
}
const vx = Z("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      container: r,
      direction: i,
      item: s,
      spacing: a,
      wrap: l,
      zeroMinWidth: c,
      breakpoints: u
    } = n;
    let d = [];
    r && (d = yx(a, u, t));
    const f = [];
    return u.forEach((m) => {
      const y = n[m];
      y && f.push(t[`grid-${m}-${String(y)}`]);
    }), [t.root, r && t.container, s && t.item, c && t.zeroMinWidth, ...d, i !== "row" && t[`direction-xs-${String(i)}`], l !== "wrap" && t[`wrap-xs-${String(l)}`], ...f];
  }
})(({
  ownerState: e
}) => E({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), hx, bx, gx, mx);
function xx(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return t.forEach((r) => {
    const i = e[r];
    if (Number(i) > 0) {
      const s = `spacing-${r}-${String(i)}`;
      n.push(s);
    }
  }), n;
}
const Ex = (e) => {
  const {
    classes: t,
    container: n,
    direction: r,
    item: i,
    spacing: s,
    wrap: a,
    zeroMinWidth: l,
    breakpoints: c
  } = e;
  let u = [];
  n && (u = xx(s, c));
  const d = [];
  c.forEach((m) => {
    const y = e[m];
    y && d.push(`grid-${m}-${String(y)}`);
  });
  const f = {
    root: ["root", n && "container", i && "item", l && "zeroMinWidth", ...u, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...d]
  };
  return Se(f, cx, t);
}, Vt = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: i
  } = Qn(), s = ni(r), {
    className: a,
    columns: l,
    columnSpacing: c,
    component: u = "div",
    container: d = !1,
    direction: f = "row",
    item: m = !1,
    rowSpacing: y,
    spacing: h = 0,
    wrap: p = "wrap",
    zeroMinWidth: g = !1
  } = s, T = ne(s, px), O = y || h, x = c || h, S = b.useContext(hs), v = d ? l || 12 : S, P = {}, R = E({}, T);
  i.keys.forEach(($) => {
    T[$] != null && (P[$] = T[$], delete R[$]);
  });
  const I = E({}, s, {
    columns: v,
    container: d,
    direction: f,
    item: m,
    rowSpacing: O,
    columnSpacing: x,
    wrap: p,
    zeroMinWidth: g,
    spacing: h
  }, P, {
    breakpoints: i.keys
  }), q = Ex(I);
  return /* @__PURE__ */ w.jsx(hs.Provider, {
    value: v,
    children: /* @__PURE__ */ w.jsx(vx, E({
      ownerState: I,
      className: se(q.root, a),
      as: u,
      ref: n
    }, R))
  });
});
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: o.oneOfType([o.arrayOf(o.number), o.number, o.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: o.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: o.oneOfType([o.oneOf(["column-reverse", "column", "row-reverse", "row"]), o.arrayOf(o.oneOf(["column-reverse", "column", "row-reverse", "row"])), o.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: o.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: o.oneOfType([o.arrayOf(o.oneOfType([o.number, o.string])), o.number, o.object, o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: o.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: o.oneOfType([o.oneOf(["auto"]), o.number, o.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: o.bool
});
if (process.env.NODE_ENV !== "production") {
  const e = nb("Grid", Vt);
  Vt.propTypes = E({}, Vt.propTypes, {
    direction: e("container"),
    lg: e("item"),
    md: e("item"),
    sm: e("item"),
    spacing: e("container"),
    wrap: e("container"),
    xs: e("item"),
    zeroMinWidth: e("item")
  });
}
const wx = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function bs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Tx = {
  entering: {
    opacity: 1,
    transform: bs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ui = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), la = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: f,
    onExited: m,
    onExiting: y,
    style: h,
    timeout: p = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = Kt
  } = t, T = ne(t, wx), O = fu(), x = b.useRef(), S = Qn(), v = b.useRef(null), P = dt(v, Hr(s), n), R = (U) => (W) => {
    if (U) {
      const Y = v.current;
      W === void 0 ? U(Y) : U(Y, W);
    }
  }, I = R(d), q = R((U, W) => {
    ku(U);
    const {
      duration: Y,
      delay: L,
      easing: de
    } = No({
      style: h,
      timeout: p,
      easing: a
    }, {
      mode: "enter"
    });
    let k;
    p === "auto" ? (k = S.transitions.getAutoHeightDuration(U.clientHeight), x.current = k) : k = Y, U.style.transition = [S.transitions.create("opacity", {
      duration: k,
      delay: L
    }), S.transitions.create("transform", {
      duration: Ui ? k : k * 0.666,
      delay: L,
      easing: de
    })].join(","), c && c(U, W);
  }), $ = R(u), F = R(y), z = R((U) => {
    const {
      duration: W,
      delay: Y,
      easing: L
    } = No({
      style: h,
      timeout: p,
      easing: a
    }, {
      mode: "exit"
    });
    let de;
    p === "auto" ? (de = S.transitions.getAutoHeightDuration(U.clientHeight), x.current = de) : de = W, U.style.transition = [S.transitions.create("opacity", {
      duration: de,
      delay: Y
    }), S.transitions.create("transform", {
      duration: Ui ? de : de * 0.666,
      delay: Ui ? Y : Y || de * 0.333,
      easing: L
    })].join(","), U.style.opacity = 0, U.style.transform = bs(0.75), f && f(U);
  }), j = R(m), M = (U) => {
    p === "auto" && O.start(x.current || 0, U), r && r(v.current, U);
  };
  return /* @__PURE__ */ w.jsx(g, E({
    appear: i,
    in: l,
    nodeRef: v,
    onEnter: q,
    onEntered: $,
    onEntering: I,
    onExit: z,
    onExited: j,
    onExiting: F,
    addEndListener: M,
    timeout: p === "auto" ? null : p
  }, T, {
    children: (U, W) => /* @__PURE__ */ b.cloneElement(s, E({
      style: E({
        opacity: 0,
        transform: bs(0.75),
        visibility: U === "exited" && !l ? "hidden" : void 0
      }, Tx[U], h, s.props.style),
      ref: P
    }, W))
  }));
});
process.env.NODE_ENV !== "production" && (la.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: qr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
la.muiSupportAuto = !0;
const Sx = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Cx = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, i = Se({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Py, t);
  return E({}, t, i);
}, Ox = Z(ui, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...li(e, t), !n.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), E({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${cr.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${cr.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${cr.disabled}, .${cr.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${cr.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Rx = Z(di, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ci
})({}), mi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a;
  const l = Ce({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: f = !1,
    inputComponent: m = "input",
    multiline: y = !1,
    slotProps: h,
    slots: p = {},
    type: g = "text"
  } = l, T = ne(l, Sx), O = Cx(l), S = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, v = h ?? d ? Et(h ?? d, S) : S, P = (r = (i = p.root) != null ? i : u.Root) != null ? r : Ox, R = (s = (a = p.input) != null ? a : u.Input) != null ? s : Rx;
  return /* @__PURE__ */ w.jsx(fi, E({
    slots: {
      root: P,
      input: R
    },
    slotProps: v,
    fullWidth: f,
    inputComponent: m,
    multiline: y,
    ref: n,
    type: g
  }, T, {
    classes: O
  }));
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Yt,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    input: o.object,
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
mi.muiName = "Input";
function Px(e) {
  return Ee("MuiInputLabel", e);
}
ve("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Nx = ["disableAnimation", "margin", "shrink", "variant", "className"], _x = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: i,
    disableAnimation: s,
    variant: a,
    required: l
  } = e, c = {
    root: ["root", n && "formControl", !s && "animated", i && "shrink", r && r !== "normal" && `size${pe(r)}`, a],
    asterisk: [l && "asterisk"]
  }, u = Se(c, Px, t);
  return E({}, t, u);
}, kx = Z(Wu, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Er.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => E({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && E({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && E({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && E({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), ca = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: i = !1,
    shrink: s,
    className: a
  } = r, l = ne(r, Nx), c = tr();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = er({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), f = E({}, r, {
    disableAnimation: i,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), m = _x(f);
  return /* @__PURE__ */ w.jsx(kx, E({
    "data-shrink": u,
    ownerState: f,
    ref: n,
    className: se(m.root, a)
  }, l, {
    classes: m
  }));
});
process.env.NODE_ENV !== "production" && (ca.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: o.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: o.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: o.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: o.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: o.oneOfType([o.oneOf(["normal", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
const jo = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (jo.displayName = "ListContext");
function $x(e) {
  return Ee("MuiList", e);
}
ve("MuiList", ["root", "padding", "dense", "subheader"]);
const Mx = ["children", "className", "component", "dense", "disablePadding", "subheader"], Ix = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Se({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, $x, t);
}, jx = Z("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => E({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Vu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ne(r, Mx), f = b.useMemo(() => ({
    dense: l
  }), [l]), m = E({}, r, {
    component: a,
    dense: l,
    disablePadding: c
  }), y = Ix(m);
  return /* @__PURE__ */ w.jsx(jo.Provider, {
    value: f,
    children: /* @__PURE__ */ w.jsxs(jx, E({
      as: a,
      className: se(y.root, s),
      ref: n,
      ownerState: m
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Al = ve("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Dl = ve("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Ax = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Vi(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function Fl(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function zu(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function dr(e, t, n, r, i, s) {
  let a = !1, l = i(e, t, t ? n : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !zu(l, s) || c)
      l = i(e, l, n);
    else
      return l.focus(), !0;
  }
  return !1;
}
const qu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: f = "selectedMenu"
  } = t, m = ne(t, Ax), y = b.useRef(null), h = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  en(() => {
    i && y.current.focus();
  }, [i]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, {
      direction: S
    }) => {
      const v = !y.current.style.width;
      if (x.clientHeight < y.current.clientHeight && v) {
        const P = `${pu(ht(x))}px`;
        y.current.style[S === "rtl" ? "paddingLeft" : "paddingRight"] = P, y.current.style.width = `calc(100% + ${P})`;
      }
      return y.current;
    }
  }), []);
  const p = (x) => {
    const S = y.current, v = x.key, P = ht(S).activeElement;
    if (v === "ArrowDown")
      x.preventDefault(), dr(S, P, u, c, Vi);
    else if (v === "ArrowUp")
      x.preventDefault(), dr(S, P, u, c, Fl);
    else if (v === "Home")
      x.preventDefault(), dr(S, null, u, c, Vi);
    else if (v === "End")
      x.preventDefault(), dr(S, null, u, c, Fl);
    else if (v.length === 1) {
      const R = h.current, I = v.toLowerCase(), q = performance.now();
      R.keys.length > 0 && (q - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && I !== R.keys[0] && (R.repeating = !1)), R.lastTime = q, R.keys.push(I);
      const $ = P && !R.repeating && zu(P, R);
      R.previousKeyMatched && ($ || dr(S, P, !1, c, Vi, R)) ? x.preventDefault() : R.previousKeyMatched = !1;
    }
    d && d(x);
  }, g = dt(y, n);
  let T = -1;
  b.Children.forEach(a, (x, S) => {
    if (!/* @__PURE__ */ b.isValidElement(x)) {
      T === S && (T += 1, T >= a.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && zn.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (f === "selectedMenu" && x.props.selected || T === -1) && (T = S), T === S && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (T += 1, T >= a.length && (T = -1));
  });
  const O = b.Children.map(a, (x, S) => {
    if (S === T) {
      const v = {};
      return s && (v.autoFocus = !0), x.props.tabIndex === void 0 && f === "selectedMenu" && (v.tabIndex = 0), /* @__PURE__ */ b.cloneElement(x, v);
    }
    return x;
  });
  return /* @__PURE__ */ w.jsx(Vu, E({
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: p,
    tabIndex: i ? 0 : -1
  }, m, {
    children: O
  }));
});
process.env.NODE_ENV !== "production" && (qu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Dx(e) {
  return Ee("MuiPopover", e);
}
ve("MuiPopover", ["root", "paper"]);
const Fx = ["onEntering"], Lx = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Bx = ["slotProps"];
function Ll(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Bl(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Wl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function yo(e) {
  return typeof e == "function" ? e() : e;
}
const Wx = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"],
    paper: ["paper"]
  }, Dx, t);
}, Ux = Z(ta, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Hu = Z(Kr, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Yu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = Ce({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: f = "anchorEl",
    children: m,
    className: y,
    container: h,
    elevation: p = 8,
    marginThreshold: g = 16,
    open: T,
    PaperProps: O = {},
    slots: x,
    slotProps: S,
    transformOrigin: v = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = la,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: I
    } = {},
    disableScrollLock: q = !1
  } = a, $ = ne(a.TransitionProps, Fx), F = ne(a, Lx), z = (r = S == null ? void 0 : S.paper) != null ? r : O, j = b.useRef(), M = dt(j, z.ref), U = E({}, a, {
    anchorOrigin: u,
    anchorReference: f,
    elevation: p,
    marginThreshold: g,
    externalPaperSlotProps: z,
    transformOrigin: v,
    TransitionComponent: P,
    transitionDuration: R,
    TransitionProps: $
  }), W = Wx(U), Y = b.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ae = yo(c), ue = ae && ae.nodeType === 1 ? ae : ht(j.current).body, ge = ue.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Be = ue.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Be.top === 0 && Be.left === 0 && Be.right === 0 && Be.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ge.top + Ll(ge, u.vertical),
      left: ge.left + Bl(ge, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, f]), L = b.useCallback((ae) => ({
    vertical: Ll(ae, v.vertical),
    horizontal: Bl(ae, v.horizontal)
  }), [v.horizontal, v.vertical]), de = b.useCallback((ae) => {
    const ue = {
      width: ae.offsetWidth,
      height: ae.offsetHeight
    }, ge = L(ue);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Wl(ge)
      };
    const Be = Y();
    let Le = Be.top - ge.vertical, ze = Be.left - ge.horizontal;
    const tt = Le + ue.height, Qe = ze + ue.width, Me = tn(yo(c)), nt = Me.innerHeight - g, rt = Me.innerWidth - g;
    if (g !== null && Le < g) {
      const je = Le - g;
      Le -= je, ge.vertical += je;
    } else if (g !== null && tt > nt) {
      const je = tt - nt;
      Le -= je, ge.vertical += je;
    }
    if (process.env.NODE_ENV !== "production" && ue.height > nt && ue.height && nt && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${ue.height - nt}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), g !== null && ze < g) {
      const je = ze - g;
      ze -= je, ge.horizontal += je;
    } else if (Qe > rt) {
      const je = Qe - rt;
      ze -= je, ge.horizontal += je;
    }
    return {
      top: `${Math.round(Le)}px`,
      left: `${Math.round(ze)}px`,
      transformOrigin: Wl(ge)
    };
  }, [c, f, Y, L, g]), [k, B] = b.useState(T), J = b.useCallback(() => {
    const ae = j.current;
    if (!ae)
      return;
    const ue = de(ae);
    ue.top !== null && (ae.style.top = ue.top), ue.left !== null && (ae.style.left = ue.left), ae.style.transformOrigin = ue.transformOrigin, B(!0);
  }, [de]);
  b.useEffect(() => (q && window.addEventListener("scroll", J), () => window.removeEventListener("scroll", J)), [c, q, J]);
  const X = (ae, ue) => {
    I && I(ae, ue), J();
  }, V = () => {
    B(!1);
  };
  b.useEffect(() => {
    T && J();
  }), b.useImperativeHandle(l, () => T ? {
    updatePosition: () => {
      J();
    }
  } : null, [T, J]), b.useEffect(() => {
    if (!T)
      return;
    const ae = ri(() => {
      J();
    }), ue = tn(c);
    return ue.addEventListener("resize", ae), () => {
      ae.clear(), ue.removeEventListener("resize", ae);
    };
  }, [c, T, J]);
  let Q = R;
  R === "auto" && !P.muiSupportAuto && (Q = void 0);
  const H = h || (c ? ht(yo(c)).body : void 0), ee = (i = x == null ? void 0 : x.root) != null ? i : Ux, te = (s = x == null ? void 0 : x.paper) != null ? s : Hu, re = Ht({
    elementType: te,
    externalSlotProps: E({}, z, {
      style: k ? z.style : E({}, z.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: p,
      ref: M
    },
    ownerState: U,
    className: se(W.paper, z == null ? void 0 : z.className)
  }), oe = Ht({
    elementType: ee,
    externalSlotProps: (S == null ? void 0 : S.root) || {},
    externalForwardedProps: F,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: H,
      open: T
    },
    ownerState: U,
    className: se(W.root, y)
  }), {
    slotProps: le
  } = oe, N = ne(oe, Bx);
  return /* @__PURE__ */ w.jsx(ee, E({}, N, !Co(ee) && {
    slotProps: le,
    disableScrollLock: q
  }, {
    children: /* @__PURE__ */ w.jsx(P, E({
      appear: !0,
      in: T,
      onEntering: X,
      onExited: V,
      timeout: Q
    }, $, {
      children: /* @__PURE__ */ w.jsx(te, E({}, re, {
        children: m
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Yu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Yt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Rn(o.oneOfType([kr, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = yo(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([kr, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: gu,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: Us
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
function Vx(e) {
  return Ee("MuiMenu", e);
}
ve("MuiMenu", ["root", "paper", "list"]);
const zx = ["onEntering"], qx = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Hx = {
  vertical: "top",
  horizontal: "right"
}, Yx = {
  vertical: "top",
  horizontal: "left"
}, Kx = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Vx, t);
}, Gx = Z(Yu, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Xx = Z(Hu, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Jx = Z(qu, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ku = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i;
  const s = Ce({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: f,
    open: m,
    PaperProps: y = {},
    PopoverClasses: h,
    transitionDuration: p = "auto",
    TransitionProps: {
      onEntering: g
    } = {},
    variant: T = "selectedMenu",
    slots: O = {},
    slotProps: x = {}
  } = s, S = ne(s.TransitionProps, zx), v = ne(s, qx), P = zs(), R = E({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: g,
    PaperProps: y,
    transitionDuration: p,
    TransitionProps: S,
    variant: T
  }), I = Kx(R), q = a && !u && m, $ = b.useRef(null), F = (L, de) => {
    $.current && $.current.adjustStyleForScrollbar(L, {
      direction: P ? "rtl" : "ltr"
    }), g && g(L, de);
  }, z = (L) => {
    L.key === "Tab" && (L.preventDefault(), f && f(L, "tabKeyDown"));
  };
  let j = -1;
  b.Children.map(l, (L, de) => {
    /* @__PURE__ */ b.isValidElement(L) && (process.env.NODE_ENV !== "production" && zn.isFragment(L) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), L.props.disabled || (T === "selectedMenu" && L.props.selected || j === -1) && (j = de));
  });
  const M = (r = O.paper) != null ? r : Xx, U = (i = x.paper) != null ? i : y, W = Ht({
    elementType: O.root,
    externalSlotProps: x.root,
    ownerState: R,
    className: [I.root, c]
  }), Y = Ht({
    elementType: M,
    externalSlotProps: U,
    ownerState: R,
    className: I.paper
  });
  return /* @__PURE__ */ w.jsx(Gx, E({
    onClose: f,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? Hx : Yx,
    slots: {
      paper: M,
      root: O.root
    },
    slotProps: {
      root: W,
      paper: Y
    },
    open: m,
    ref: n,
    transitionDuration: p,
    TransitionProps: E({
      onEntering: F
    }, S),
    ownerState: R
  }, v, {
    classes: h,
    children: /* @__PURE__ */ w.jsx(Jx, E({
      onKeyDown: z,
      actions: $,
      autoFocus: a && (j === -1 || u),
      autoFocusItem: q,
      variant: T
    }, d, {
      className: se(I.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([kr, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
function Qx(e) {
  return Ee("MuiMenuItem", e);
}
const fr = ve("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Zx = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], e0 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, t0 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, c = Se({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, Qx, a);
  return E({}, a, c);
}, n0 = Z(Gr, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: e0
})(({
  theme: e,
  ownerState: t
}) => E({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${fr.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ut(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${fr.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ut(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${fr.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ut(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ut(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${fr.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${fr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Ml.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Ml.inset}`]: {
    marginLeft: 52
  },
  [`& .${Dl.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Dl.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Al.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && E({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Al.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Gu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: l = !1,
    disableGutters: c = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: f,
    className: m
  } = r, y = ne(r, Zx), h = b.useContext(jo), p = b.useMemo(() => ({
    dense: a || h.dense || !1,
    disableGutters: c
  }), [h.dense, a, c]), g = b.useRef(null);
  en(() => {
    i && (g.current ? g.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const T = E({}, r, {
    dense: p.dense,
    divider: l,
    disableGutters: c
  }), O = t0(r), x = dt(g, n);
  let S;
  return r.disabled || (S = f !== void 0 ? f : -1), /* @__PURE__ */ w.jsx(jo.Provider, {
    value: p,
    children: /* @__PURE__ */ w.jsx(n0, E({
      ref: x,
      role: d,
      tabIndex: S,
      component: s,
      focusVisibleClassName: se(O.focusVisible, u),
      className: se(O.root, m)
    }, y, {
      ownerState: T,
      classes: O
    }))
  });
});
process.env.NODE_ENV !== "production" && (Gu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
function r0(e) {
  return Ee("MuiNativeSelect", e);
}
const ua = ve("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), o0 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], i0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${pe(n)}`, s && "iconOpen", r && "disabled"]
  };
  return Se(l, r0, t);
}, Xu = ({
  ownerState: e,
  theme: t
}) => E({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": E({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${ua.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), s0 = Z("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Mt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ua.multiple}`]: t.multiple
    }];
  }
})(Xu), Ju = ({
  ownerState: e,
  theme: t
}) => E({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${ua.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), a0 = Z("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})(Ju), Qu = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: i,
    error: s,
    IconComponent: a,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ne(t, o0), d = E({}, t, {
    disabled: i,
    variant: c,
    error: s
  }), f = i0(d);
  return /* @__PURE__ */ w.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ w.jsx(s0, E({
      ownerState: d,
      className: se(f.select, r),
      disabled: i,
      ref: l || n
    }, u)), t.multiple ? null : /* @__PURE__ */ w.jsx(a0, {
      as: a,
      ownerState: d,
      className: f.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Qu.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: Yt,
  /**
   * @ignore
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
var Ul;
const l0 = ["children", "classes", "className", "label", "notched"], c0 = Z("fieldset", {
  shouldForwardProp: Mt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), u0 = Z("legend", {
  shouldForwardProp: Mt
})(({
  ownerState: e,
  theme: t
}) => E({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && E({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function Zu(e) {
  const {
    className: t,
    label: n,
    notched: r
  } = e, i = ne(e, l0), s = n != null && n !== "", a = E({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ w.jsx(c0, E({
    "aria-hidden": !0,
    className: t,
    ownerState: a
  }, i, {
    children: /* @__PURE__ */ w.jsx(u0, {
      ownerState: a,
      children: s ? /* @__PURE__ */ w.jsx("span", {
        children: n
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Ul || (Ul = /* @__PURE__ */ w.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (Zu.propTypes = {
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The label.
   */
  label: o.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool.isRequired,
  /**
   * @ignore
   */
  style: o.object
});
const d0 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], f0 = (e) => {
  const {
    classes: t
  } = e, r = Se({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Ny, t);
  return E({}, t, r);
}, p0 = Z(ui, {
  shouldForwardProp: (e) => Mt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: li
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return E({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${on.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${on.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n
      }
    },
    [`&.${on.focused} .${on.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${on.error} .${on.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${on.disabled} .${on.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && E({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), m0 = Z(Zu, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), h0 = Z(di, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ci
})(({
  theme: e,
  ownerState: t
}) => E({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), hi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, l;
  const c = Ce({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: f = "input",
    label: m,
    multiline: y = !1,
    notched: h,
    slots: p = {},
    type: g = "text"
  } = c, T = ne(c, d0), O = f0(c), x = tr(), S = er({
    props: c,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), v = E({}, c, {
    color: S.color || "primary",
    disabled: S.disabled,
    error: S.error,
    focused: S.focused,
    formControl: x,
    fullWidth: d,
    hiddenLabel: S.hiddenLabel,
    multiline: y,
    size: S.size,
    type: g
  }), P = (r = (i = p.root) != null ? i : u.Root) != null ? r : p0, R = (s = (a = p.input) != null ? a : u.Input) != null ? s : h0;
  return /* @__PURE__ */ w.jsx(fi, E({
    slots: {
      root: P,
      input: R
    },
    renderSuffix: (I) => /* @__PURE__ */ w.jsx(m0, {
      ownerState: v,
      className: O.notchedOutline,
      label: m != null && m !== "" && S.required ? l || (l = /* @__PURE__ */ w.jsxs(b.Fragment, {
        children: [m, " ", "*"]
      })) : m,
      notched: typeof h < "u" ? h : !!(I.startAdornment || I.filled || I.focused)
    }),
    fullWidth: d,
    inputComponent: f,
    multiline: y,
    ref: n,
    type: g
  }, T, {
    classes: E({}, O, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Input: o.elementType,
    Root: o.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: o.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: o.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: o.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: o.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Yt,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: o.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: o.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: o.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    input: o.elementType,
    root: o.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any
});
hi.muiName = "Input";
function b0(e) {
  return Ee("MuiSelect", e);
}
const pr = ve("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var Vl;
const g0 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], y0 = Z("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${pr.select}`]: t.select
      },
      {
        [`&.${pr.select}`]: t[n.variant]
      },
      {
        [`&.${pr.error}`]: t.error
      },
      {
        [`&.${pr.multiple}`]: t.multiple
      }
    ];
  }
})(Xu, {
  // Win specificity over the input base
  [`&.${pr.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), v0 = Z("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${pe(n.variant)}`], n.open && t.iconOpen];
  }
})(Ju), x0 = Z("input", {
  shouldForwardProp: (e) => Nu(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function zl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function E0(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const w0 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: i,
    open: s,
    error: a
  } = e, l = {
    select: ["select", n, r && "disabled", i && "multiple", a && "error"],
    icon: ["icon", `icon${pe(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Se(l, b0, t);
}, ed = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: a,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: f,
    disabled: m,
    displayEmpty: y,
    error: h = !1,
    IconComponent: p,
    inputRef: g,
    labelId: T,
    MenuProps: O = {},
    multiple: x,
    name: S,
    onBlur: v,
    onChange: P,
    onClose: R,
    onFocus: I,
    onOpen: q,
    open: $,
    readOnly: F,
    renderValue: z,
    SelectDisplayProps: j = {},
    tabIndex: M,
    value: U,
    variant: W = "standard"
  } = t, Y = ne(t, g0), [L, de] = ul({
    controlled: U,
    default: f,
    name: "Select"
  }), [k, B] = ul({
    controlled: $,
    default: d,
    name: "Select"
  }), J = b.useRef(null), X = b.useRef(null), [V, Q] = b.useState(null), {
    current: H
  } = b.useRef($ != null), [ee, te] = b.useState(), re = dt(n, g), oe = b.useCallback((ie) => {
    X.current = ie, ie && Q(ie);
  }, []), le = V == null ? void 0 : V.parentNode;
  b.useImperativeHandle(re, () => ({
    focus: () => {
      X.current.focus();
    },
    node: J.current,
    value: L
  }), [L]), b.useEffect(() => {
    d && k && V && !H && (te(l ? null : le.clientWidth), X.current.focus());
  }, [V, l]), b.useEffect(() => {
    a && X.current.focus();
  }, [a]), b.useEffect(() => {
    if (!T)
      return;
    const ie = ht(X.current).getElementById(T);
    if (ie) {
      const A = () => {
        getSelection().isCollapsed && X.current.focus();
      };
      return ie.addEventListener("click", A), () => {
        ie.removeEventListener("click", A);
      };
    }
  }, [T]);
  const N = (ie, A) => {
    ie ? q && q(A) : R && R(A), H || (te(l ? null : le.clientWidth), B(ie));
  }, ae = (ie) => {
    ie.button === 0 && (ie.preventDefault(), X.current.focus(), N(!0, ie));
  }, ue = (ie) => {
    N(!1, ie);
  }, ge = b.Children.toArray(c), Be = (ie) => {
    const A = ge.find((K) => K.props.value === ie.target.value);
    A !== void 0 && (de(A.props.value), P && P(ie, A));
  }, Le = (ie) => (A) => {
    let K;
    if (A.currentTarget.hasAttribute("tabindex")) {
      if (x) {
        K = Array.isArray(L) ? L.slice() : [];
        const he = L.indexOf(ie.props.value);
        he === -1 ? K.push(ie.props.value) : K.splice(he, 1);
      } else
        K = ie.props.value;
      if (ie.props.onClick && ie.props.onClick(A), L !== K && (de(K), P)) {
        const he = A.nativeEvent || A, ye = new he.constructor(he.type, he);
        Object.defineProperty(ye, "target", {
          writable: !0,
          value: {
            value: K,
            name: S
          }
        }), P(ye, ie);
      }
      x || N(!1, A);
    }
  }, ze = (ie) => {
    F || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ie.key) !== -1 && (ie.preventDefault(), N(!0, ie));
  }, tt = V !== null && k, Qe = (ie) => {
    !tt && v && (Object.defineProperty(ie, "target", {
      writable: !0,
      value: {
        value: L,
        name: S
      }
    }), v(ie));
  };
  delete Y["aria-invalid"];
  let Me, nt;
  const rt = [];
  let je = !1, ot = !1;
  (ko({
    value: L
  }) || y) && (z ? Me = z(L) : je = !0);
  const Tt = ge.map((ie) => {
    if (!/* @__PURE__ */ b.isValidElement(ie))
      return null;
    process.env.NODE_ENV !== "production" && zn.isFragment(ie) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let A;
    if (x) {
      if (!Array.isArray(L))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Sn(2));
      A = L.some((K) => zl(K, ie.props.value)), A && je && rt.push(ie.props.children);
    } else
      A = zl(L, ie.props.value), A && je && (nt = ie.props.children);
    return A && (ot = !0), /* @__PURE__ */ b.cloneElement(ie, {
      "aria-selected": A ? "true" : "false",
      onClick: Le(ie),
      onKeyUp: (K) => {
        K.key === " " && K.preventDefault(), ie.props.onKeyUp && ie.props.onKeyUp(K);
      },
      role: "option",
      selected: A,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ie.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (!ot && !x && L !== "") {
      const ie = ge.map((A) => A.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${L}\` for the select ${S ? `(name="${S}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ie.filter((A) => A != null).map((A) => `\`${A}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [ot, ge, x, S, L]), je && (x ? rt.length === 0 ? Me = null : Me = rt.reduce((ie, A, K) => (ie.push(A), K < rt.length - 1 && ie.push(", "), ie), []) : Me = nt);
  let yt = ee;
  !l && H && V && (yt = le.clientWidth);
  let we;
  typeof M < "u" ? we = M : we = m ? null : 0;
  const ce = j.id || (S ? `mui-component-select-${S}` : void 0), at = E({}, t, {
    variant: W,
    value: L,
    open: tt,
    error: h
  }), St = w0(at), Ft = E({}, O.PaperProps, (r = O.slotProps) == null ? void 0 : r.paper), pn = Vs();
  return /* @__PURE__ */ w.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ w.jsx(y0, E({
      ref: oe,
      tabIndex: we,
      role: "combobox",
      "aria-controls": pn,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": tt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [T, ce].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      onKeyDown: ze,
      onMouseDown: m || F ? null : ae,
      onBlur: Qe,
      onFocus: I
    }, j, {
      ownerState: at,
      className: se(j.className, St.select, u),
      id: ce,
      children: E0(Me) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Vl || (Vl = /* @__PURE__ */ w.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Me
    })), /* @__PURE__ */ w.jsx(x0, E({
      "aria-invalid": h,
      value: Array.isArray(L) ? L.join(",") : L,
      name: S,
      ref: J,
      "aria-hidden": !0,
      onChange: Be,
      tabIndex: -1,
      disabled: m,
      className: St.nativeInput,
      autoFocus: a,
      ownerState: at
    }, Y)), /* @__PURE__ */ w.jsx(v0, {
      as: p,
      className: St.icon,
      ownerState: at
    }), /* @__PURE__ */ w.jsx(Ku, E({
      id: `menu-${S || ""}`,
      anchorEl: le,
      open: tt,
      onClose: ue,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, O, {
      MenuListProps: E({
        "aria-labelledby": T,
        role: "listbox",
        "aria-multiselectable": x ? "true" : void 0,
        disableListWrap: !0,
        id: pn
      }, O.MenuListProps),
      slotProps: E({}, O.slotProps, {
        paper: E({}, Ft, {
          style: E({
            minWidth: yt
          }, Ft != null ? Ft.style : null)
        })
      }),
      children: Tt
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ed.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": o.string,
  /**
   * @ignore
   */
  "aria-label": o.string,
  /**
   * @ignore
   */
  autoFocus: o.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * The CSS class name of the select element.
   */
  className: o.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: o.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: o.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: o.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: Yt,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: o.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * @ignore
   */
  readOnly: o.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  type: o.any,
  /**
   * The input value.
   */
  value: o.any,
  /**
   * The variant to use.
   */
  variant: o.oneOf(["standard", "outlined", "filled"])
});
const T0 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], S0 = ["root"], C0 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, da = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Mt(e) && e !== "variant",
  slot: "Root"
}, O0 = Z(mi, da)(""), R0 = Z(hi, da)(""), P0 = Z(pi, da)(""), bi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: i = !1,
    children: s,
    classes: a = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = ky,
    id: f,
    input: m,
    inputProps: y,
    label: h,
    labelId: p,
    MenuProps: g,
    multiple: T = !1,
    native: O = !1,
    onClose: x,
    onOpen: S,
    open: v,
    renderValue: P,
    SelectDisplayProps: R,
    variant: I = "outlined"
  } = r, q = ne(r, T0), $ = O ? Qu : ed, F = tr(), z = er({
    props: r,
    muiFormControl: F,
    states: ["variant", "error"]
  }), j = z.variant || I, M = E({}, r, {
    variant: j,
    classes: a
  }), U = C0(M), W = ne(U, S0), Y = m || {
    standard: /* @__PURE__ */ w.jsx(O0, {
      ownerState: M
    }),
    outlined: /* @__PURE__ */ w.jsx(R0, {
      label: h,
      ownerState: M
    }),
    filled: /* @__PURE__ */ w.jsx(P0, {
      ownerState: M
    })
  }[j], L = dt(n, Hr(Y));
  return /* @__PURE__ */ w.jsx(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(Y, E({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: $,
      inputProps: E({
        children: s,
        error: z.error,
        IconComponent: d,
        variant: j,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T
      }, O ? {
        id: f
      } : {
        autoWidth: i,
        defaultOpen: c,
        displayEmpty: u,
        labelId: p,
        MenuProps: g,
        onClose: x,
        onOpen: S,
        open: v,
        renderValue: P,
        SelectDisplayProps: E({
          id: f
        }, R)
      }, y, {
        classes: y ? Et(W, y.classes) : W
      }, m ? m.props.inputProps : {})
    }, (T && O || u) && j === "outlined" ? {
      notched: !0
    } : {}, {
      ref: L,
      className: se(Y.props.className, l, U.root)
    }, !m && {
      variant: j
    }, q))
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: o.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: o.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: o.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: o.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: o.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: o.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: o.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: o.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: o.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: o.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: o.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: o.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: o.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: o.oneOfType([o.oneOf([""]), o.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
bi.muiName = "Select";
function N0(e) {
  return Ee("MuiTab", e);
}
const sn = ve("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]), _0 = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"], k0 = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: i,
    icon: s,
    label: a,
    selected: l,
    disabled: c
  } = e, u = {
    root: ["root", s && a && "labelIcon", `textColor${pe(n)}`, r && "fullWidth", i && "wrapped", l && "selected", c && "disabled"],
    iconWrapper: ["iconWrapper"]
  };
  return Se(u, N0, t);
}, $0 = Z(Gr, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${pe(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${sn.iconWrapper}`]: t.iconWrapper
    }];
  }
})(({
  theme: e,
  ownerState: t
}) => E({}, e.typography.button, {
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center"
}, t.label && {
  flexDirection: t.iconPosition === "top" || t.iconPosition === "bottom" ? "column" : "row"
}, {
  lineHeight: 1.25
}, t.icon && t.label && {
  minHeight: 72,
  paddingTop: 9,
  paddingBottom: 9,
  [`& > .${sn.iconWrapper}`]: E({}, t.iconPosition === "top" && {
    marginBottom: 6
  }, t.iconPosition === "bottom" && {
    marginTop: 6
  }, t.iconPosition === "start" && {
    marginRight: e.spacing(1)
  }, t.iconPosition === "end" && {
    marginLeft: e.spacing(1)
  })
}, t.textColor === "inherit" && {
  color: "inherit",
  opacity: 0.6,
  // same opacity as theme.palette.text.secondary
  [`&.${sn.selected}`]: {
    opacity: 1
  },
  [`&.${sn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.textColor === "primary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${sn.selected}`]: {
    color: (e.vars || e).palette.primary.main
  },
  [`&.${sn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.textColor === "secondary" && {
  color: (e.vars || e).palette.text.secondary,
  [`&.${sn.selected}`]: {
    color: (e.vars || e).palette.secondary.main
  },
  [`&.${sn.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  }
}, t.fullWidth && {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: "none"
}, t.wrapped && {
  fontSize: e.typography.pxToRem(12)
})), gs = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTab"
  }), {
    className: i,
    disabled: s = !1,
    disableFocusRipple: a = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: c,
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: f,
    onChange: m,
    onClick: y,
    onFocus: h,
    // eslint-disable-next-line react/prop-types
    selected: p,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: g,
    // eslint-disable-next-line react/prop-types
    textColor: T = "inherit",
    value: O,
    wrapped: x = !1
  } = r, S = ne(r, _0), v = E({}, r, {
    disabled: s,
    disableFocusRipple: a,
    selected: p,
    icon: !!c,
    iconPosition: u,
    label: !!f,
    fullWidth: l,
    textColor: T,
    wrapped: x
  }), P = k0(v), R = c && f && /* @__PURE__ */ b.isValidElement(c) ? /* @__PURE__ */ b.cloneElement(c, {
    className: se(P.iconWrapper, c.props.className)
  }) : c, I = ($) => {
    !p && m && m($, O), y && y($);
  }, q = ($) => {
    g && !p && m && m($, O), h && h($);
  };
  return /* @__PURE__ */ w.jsxs($0, E({
    focusRipple: !a,
    className: se(P.root, i),
    ref: n,
    role: "tab",
    "aria-selected": p,
    disabled: s,
    onClick: I,
    onFocus: q,
    ownerState: v,
    tabIndex: p ? 0 : -1
  }, S, {
    children: [u === "top" || u === "start" ? /* @__PURE__ */ w.jsxs(b.Fragment, {
      children: [R, f]
    }) : /* @__PURE__ */ w.jsxs(b.Fragment, {
      children: [f, R]
    }), d]
  }));
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: ob,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display.
   */
  icon: o.oneOfType([o.element, o.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: o.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: o.node,
  /**
   * @ignore
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: o.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: o.bool
});
const M0 = Gs(/* @__PURE__ */ w.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), I0 = Gs(/* @__PURE__ */ w.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");
function j0(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function A0(e, t, n, r = {}, i = () => {
}) {
  const {
    ease: s = j0,
    duration: a = 300
    // standard
  } = r;
  let l = null;
  const c = t[e];
  let u = !1;
  const d = () => {
    u = !0;
  }, f = (m) => {
    if (u) {
      i(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = m);
    const y = Math.min(1, (m - l) / a);
    if (t[e] = s(y) * (n - c) + c, y >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return c === n ? (i(new Error("Element already at target position")), d) : (requestAnimationFrame(f), d);
}
const D0 = ["onChange"], F0 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function td(e) {
  const {
    onChange: t
  } = e, n = ne(e, D0), r = b.useRef(), i = b.useRef(null), s = () => {
    r.current = i.current.offsetHeight - i.current.clientHeight;
  };
  return en(() => {
    const a = ri(() => {
      const c = r.current;
      s(), c !== r.current && t(r.current);
    }), l = tn(i.current);
    return l.addEventListener("resize", a), () => {
      a.clear(), l.removeEventListener("resize", a);
    };
  }, [t]), b.useEffect(() => {
    s(), t(r.current);
  }, [t]), /* @__PURE__ */ w.jsx("div", E({
    style: F0
  }, n, {
    ref: i
  }));
}
process.env.NODE_ENV !== "production" && (td.propTypes = {
  onChange: o.func.isRequired
});
function L0(e) {
  return Ee("MuiTabScrollButton", e);
}
const B0 = ve("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), W0 = ["className", "slots", "slotProps", "direction", "orientation", "disabled"], U0 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return Se({
    root: ["root", n, r && "disabled"]
  }, L0, t);
}, V0 = Z(Gr, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.orientation && t[n.orientation]];
  }
})(({
  ownerState: e
}) => E({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${B0.disabled}`]: {
    opacity: 0
  }
}, e.orientation === "vertical" && {
  width: "100%",
  height: 40,
  "& svg": {
    transform: `rotate(${e.isRtl ? -90 : 90}deg)`
  }
})), nd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i;
  const s = Ce({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: a,
    slots: l = {},
    slotProps: c = {},
    direction: u
  } = s, d = ne(s, W0), f = zs(), m = E({
    isRtl: f
  }, s), y = U0(m), h = (r = l.StartScrollButtonIcon) != null ? r : M0, p = (i = l.EndScrollButtonIcon) != null ? i : I0, g = Ht({
    elementType: h,
    externalSlotProps: c.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: m
  }), T = Ht({
    elementType: p,
    externalSlotProps: c.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: m
  });
  return /* @__PURE__ */ w.jsx(V0, E({
    component: "div",
    className: se(y.root, a),
    ref: n,
    role: null,
    ownerState: m,
    tabIndex: null
  }, d, {
    children: u === "left" ? /* @__PURE__ */ w.jsx(h, E({}, g)) : /* @__PURE__ */ w.jsx(p, E({}, T))
  }));
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The direction the button should indicate.
   */
  direction: o.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: o.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: o.shape({
    endScrollButtonIcon: o.oneOfType([o.func, o.object]),
    startScrollButtonIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    EndScrollButtonIcon: o.elementType,
    StartScrollButtonIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
function z0(e) {
  return Ee("MuiTabs", e);
}
const zi = ve("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), q0 = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "slots", "slotProps", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"], ql = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild, Hl = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild, so = (e, t, n) => {
  let r = !1, i = n(e, t);
  for (; i; ) {
    if (i === e.firstChild) {
      if (r)
        return;
      r = !0;
    }
    const s = i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || s)
      i = n(e, i);
    else {
      i.focus();
      return;
    }
  }
}, H0 = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: r,
    scrollableX: i,
    scrollableY: s,
    centered: a,
    scrollButtonsHideMobile: l,
    classes: c
  } = e;
  return Se({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", i && "scrollableX", s && "scrollableY"],
    flexContainer: ["flexContainer", t && "flexContainerVertical", a && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [i && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, z0, c);
}, Y0 = Z("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${zi.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${zi.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(({
  ownerState: e,
  theme: t
}) => E({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.scrollButtonsHideMobile && {
  [`& .${zi.scrollButtons}`]: {
    [t.breakpoints.down("sm")]: {
      display: "none"
    }
  }
})), K0 = Z("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY];
  }
})(({
  ownerState: e
}) => E({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap"
}, e.fixed && {
  overflowX: "hidden",
  width: "100%"
}, e.hideScrollbar && {
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}, e.scrollableX && {
  overflowX: "auto",
  overflowY: "hidden"
}, e.scrollableY && {
  overflowY: "auto",
  overflowX: "hidden"
})), G0 = Z("div", {
  name: "MuiTabs",
  slot: "FlexContainer",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered];
  }
})(({
  ownerState: e
}) => E({
  display: "flex"
}, e.vertical && {
  flexDirection: "column"
}, e.centered && {
  justifyContent: "center"
})), X0 = Z("span", {
  name: "MuiTabs",
  slot: "Indicator",
  overridesResolver: (e, t) => t.indicator
})(({
  ownerState: e,
  theme: t
}) => E({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: t.transitions.create()
}, e.indicatorColor === "primary" && {
  backgroundColor: (t.vars || t).palette.primary.main
}, e.indicatorColor === "secondary" && {
  backgroundColor: (t.vars || t).palette.secondary.main
}, e.vertical && {
  height: "100%",
  width: 2,
  right: 0
})), J0 = Z(td)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Yl = {};
let Kl = !1;
const rd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTabs"
  }), i = Qn(), s = zs(), {
    "aria-label": a,
    "aria-labelledby": l,
    action: c,
    centered: u = !1,
    children: d,
    className: f,
    component: m = "div",
    allowScrollButtonsMobile: y = !1,
    indicatorColor: h = "primary",
    onChange: p,
    orientation: g = "horizontal",
    ScrollButtonComponent: T = nd,
    scrollButtons: O = "auto",
    selectionFollowsFocus: x,
    slots: S = {},
    slotProps: v = {},
    TabIndicatorProps: P = {},
    TabScrollButtonProps: R = {},
    textColor: I = "primary",
    value: q,
    variant: $ = "standard",
    visibleScrollbar: F = !1
  } = r, z = ne(r, q0), j = $ === "scrollable", M = g === "vertical", U = M ? "scrollTop" : "scrollLeft", W = M ? "top" : "left", Y = M ? "bottom" : "right", L = M ? "clientHeight" : "clientWidth", de = M ? "height" : "width", k = E({}, r, {
    component: m,
    allowScrollButtonsMobile: y,
    indicatorColor: h,
    orientation: g,
    vertical: M,
    scrollButtons: O,
    textColor: I,
    variant: $,
    visibleScrollbar: F,
    fixed: !j,
    hideScrollbar: j && !F,
    scrollableX: j && !M,
    scrollableY: j && M,
    centered: u && !j,
    scrollButtonsHideMobile: !y
  }), B = H0(k), J = Ht({
    elementType: S.StartScrollButtonIcon,
    externalSlotProps: v.startScrollButtonIcon,
    ownerState: k
  }), X = Ht({
    elementType: S.EndScrollButtonIcon,
    externalSlotProps: v.endScrollButtonIcon,
    ownerState: k
  });
  process.env.NODE_ENV !== "production" && u && j && console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
  const [V, Q] = b.useState(!1), [H, ee] = b.useState(Yl), [te, re] = b.useState(!1), [oe, le] = b.useState(!1), [N, ae] = b.useState(!1), [ue, ge] = b.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Be = /* @__PURE__ */ new Map(), Le = b.useRef(null), ze = b.useRef(null), tt = () => {
    const A = Le.current;
    let K;
    if (A) {
      const ye = A.getBoundingClientRect();
      K = {
        clientWidth: A.clientWidth,
        scrollLeft: A.scrollLeft,
        scrollTop: A.scrollTop,
        scrollLeftNormalized: bb(A, s ? "rtl" : "ltr"),
        scrollWidth: A.scrollWidth,
        top: ye.top,
        bottom: ye.bottom,
        left: ye.left,
        right: ye.right
      };
    }
    let he;
    if (A && q !== !1) {
      const ye = ze.current.children;
      if (ye.length > 0) {
        const We = ye[Be.get(q)];
        process.env.NODE_ENV !== "production" && (We || console.error(["MUI: The `value` provided to the Tabs component is invalid.", `None of the Tabs' children match with "${q}".`, Be.keys ? `You can provide one of the following values: ${Array.from(Be.keys()).join(", ")}.` : null].join(`
`))), he = We ? We.getBoundingClientRect() : null, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && !Kl && he && he.width === 0 && he.height === 0 && // if the whole Tabs component is hidden, don't warn
        K.clientWidth !== 0 && (K = null, console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${q}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join(`
`)), Kl = !0);
      }
    }
    return {
      tabsMeta: K,
      tabMeta: he
    };
  }, Qe = Jt(() => {
    const {
      tabsMeta: A,
      tabMeta: K
    } = tt();
    let he = 0, ye;
    if (M)
      ye = "top", K && A && (he = K.top - A.top + A.scrollTop);
    else if (ye = s ? "right" : "left", K && A) {
      const qe = s ? A.scrollLeftNormalized + A.clientWidth - A.scrollWidth : A.scrollLeft;
      he = (s ? -1 : 1) * (K[ye] - A[ye] + qe);
    }
    const We = {
      [ye]: he,
      // May be wrong until the font is loaded.
      [de]: K ? K[de] : 0
    };
    if (isNaN(H[ye]) || isNaN(H[de]))
      ee(We);
    else {
      const qe = Math.abs(H[ye] - We[ye]), ft = Math.abs(H[de] - We[de]);
      (qe >= 1 || ft >= 1) && ee(We);
    }
  }), Me = (A, {
    animation: K = !0
  } = {}) => {
    K ? A0(U, Le.current, A, {
      duration: i.transitions.duration.standard
    }) : Le.current[U] = A;
  }, nt = (A) => {
    let K = Le.current[U];
    M ? K += A : (K += A * (s ? -1 : 1), K *= s && mu() === "reverse" ? -1 : 1), Me(K);
  }, rt = () => {
    const A = Le.current[L];
    let K = 0;
    const he = Array.from(ze.current.children);
    for (let ye = 0; ye < he.length; ye += 1) {
      const We = he[ye];
      if (K + We[L] > A) {
        ye === 0 && (K = A);
        break;
      }
      K += We[L];
    }
    return K;
  }, je = () => {
    nt(-1 * rt());
  }, ot = () => {
    nt(rt());
  }, Tt = b.useCallback((A) => {
    ge({
      overflow: null,
      scrollbarWidth: A
    });
  }, []), yt = () => {
    const A = {};
    A.scrollbarSizeListener = j ? /* @__PURE__ */ w.jsx(J0, {
      onChange: Tt,
      className: se(B.scrollableX, B.hideScrollbar)
    }) : null;
    const he = j && (O === "auto" && (te || oe) || O === !0);
    return A.scrollButtonStart = he ? /* @__PURE__ */ w.jsx(T, E({
      slots: {
        StartScrollButtonIcon: S.StartScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: J
      },
      orientation: g,
      direction: s ? "right" : "left",
      onClick: je,
      disabled: !te
    }, R, {
      className: se(B.scrollButtons, R.className)
    })) : null, A.scrollButtonEnd = he ? /* @__PURE__ */ w.jsx(T, E({
      slots: {
        EndScrollButtonIcon: S.EndScrollButtonIcon
      },
      slotProps: {
        endScrollButtonIcon: X
      },
      orientation: g,
      direction: s ? "left" : "right",
      onClick: ot,
      disabled: !oe
    }, R, {
      className: se(B.scrollButtons, R.className)
    })) : null, A;
  }, we = Jt((A) => {
    const {
      tabsMeta: K,
      tabMeta: he
    } = tt();
    if (!(!he || !K)) {
      if (he[W] < K[W]) {
        const ye = K[U] + (he[W] - K[W]);
        Me(ye, {
          animation: A
        });
      } else if (he[Y] > K[Y]) {
        const ye = K[U] + (he[Y] - K[Y]);
        Me(ye, {
          animation: A
        });
      }
    }
  }), ce = Jt(() => {
    j && O !== !1 && ae(!N);
  });
  b.useEffect(() => {
    const A = ri(() => {
      Le.current && Qe();
    });
    let K;
    const he = (qe) => {
      qe.forEach((ft) => {
        ft.removedNodes.forEach((Gt) => {
          var It;
          (It = K) == null || It.unobserve(Gt);
        }), ft.addedNodes.forEach((Gt) => {
          var It;
          (It = K) == null || It.observe(Gt);
        });
      }), A(), ce();
    }, ye = tn(Le.current);
    ye.addEventListener("resize", A);
    let We;
    return typeof ResizeObserver < "u" && (K = new ResizeObserver(A), Array.from(ze.current.children).forEach((qe) => {
      K.observe(qe);
    })), typeof MutationObserver < "u" && (We = new MutationObserver(he), We.observe(ze.current, {
      childList: !0
    })), () => {
      var qe, ft;
      A.clear(), ye.removeEventListener("resize", A), (qe = We) == null || qe.disconnect(), (ft = K) == null || ft.disconnect();
    };
  }, [Qe, ce]), b.useEffect(() => {
    const A = Array.from(ze.current.children), K = A.length;
    if (typeof IntersectionObserver < "u" && K > 0 && j && O !== !1) {
      const he = A[0], ye = A[K - 1], We = {
        root: Le.current,
        threshold: 0.99
      }, qe = (or) => {
        re(!or[0].isIntersecting);
      }, ft = new IntersectionObserver(qe, We);
      ft.observe(he);
      const Gt = (or) => {
        le(!or[0].isIntersecting);
      }, It = new IntersectionObserver(Gt, We);
      return It.observe(ye), () => {
        ft.disconnect(), It.disconnect();
      };
    }
  }, [j, O, N, d == null ? void 0 : d.length]), b.useEffect(() => {
    Q(!0);
  }, []), b.useEffect(() => {
    Qe();
  }), b.useEffect(() => {
    we(Yl !== H);
  }, [we, H]), b.useImperativeHandle(c, () => ({
    updateIndicator: Qe,
    updateScrollButtons: ce
  }), [Qe, ce]);
  const at = /* @__PURE__ */ w.jsx(X0, E({}, P, {
    className: se(B.indicator, P.className),
    ownerState: k,
    style: E({}, H, P.style)
  }));
  let St = 0;
  const Ft = b.Children.map(d, (A) => {
    if (!/* @__PURE__ */ b.isValidElement(A))
      return null;
    process.env.NODE_ENV !== "production" && zn.isFragment(A) && console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    const K = A.props.value === void 0 ? St : A.props.value;
    Be.set(K, St);
    const he = K === q;
    return St += 1, /* @__PURE__ */ b.cloneElement(A, E({
      fullWidth: $ === "fullWidth",
      indicator: he && !V && at,
      selected: he,
      selectionFollowsFocus: x,
      onChange: p,
      textColor: I,
      value: K
    }, St === 1 && q === !1 && !A.props.tabIndex ? {
      tabIndex: 0
    } : {}));
  }), pn = (A) => {
    const K = ze.current, he = ht(K).activeElement;
    if (he.getAttribute("role") !== "tab")
      return;
    let We = g === "horizontal" ? "ArrowLeft" : "ArrowUp", qe = g === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (g === "horizontal" && s && (We = "ArrowRight", qe = "ArrowLeft"), A.key) {
      case We:
        A.preventDefault(), so(K, he, Hl);
        break;
      case qe:
        A.preventDefault(), so(K, he, ql);
        break;
      case "Home":
        A.preventDefault(), so(K, null, ql);
        break;
      case "End":
        A.preventDefault(), so(K, null, Hl);
        break;
    }
  }, ie = yt();
  return /* @__PURE__ */ w.jsxs(Y0, E({
    className: se(B.root, f),
    ownerState: k,
    ref: n,
    as: m
  }, z, {
    children: [ie.scrollButtonStart, ie.scrollbarSizeListener, /* @__PURE__ */ w.jsxs(K0, {
      className: B.scroller,
      ownerState: k,
      style: {
        overflow: ue.overflow,
        [M ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: F ? void 0 : -ue.scrollbarWidth
      },
      ref: Le,
      children: [/* @__PURE__ */ w.jsx(G0, {
        "aria-label": a,
        "aria-labelledby": l,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        className: B.flexContainer,
        ownerState: k,
        onKeyDown: pn,
        ref: ze,
        role: "tablist",
        children: Ft
      }), V && at]
    }), ie.scrollButtonEnd]
  }));
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: Yt,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: o.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": o.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": o.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: o.oneOfType([o.oneOf(["primary", "secondary"]), o.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: o.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @default TabScrollButton
   */
  ScrollButtonComponent: o.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: o.oneOf(["auto", !1, !0]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: o.shape({
    endScrollButtonIcon: o.oneOfType([o.func, o.object]),
    startScrollButtonIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    EndScrollButtonIcon: o.elementType,
    StartScrollButtonIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Props applied to the tab indicator element.
   * @default  {}
   */
  TabIndicatorProps: o.object,
  /**
   * Props applied to the [`TabScrollButton`](/material-ui/api/tab-scroll-button/) element.
   * @default {}
   */
  TabScrollButtonProps: o.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: o.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: o.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: o.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: o.bool
});
function Q0(e) {
  return Ee("MuiTextField", e);
}
ve("MuiTextField", ["root"]);
const Z0 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], eE = {
  standard: mi,
  filled: pi,
  outlined: hi
}, tE = (e) => {
  const {
    classes: t
  } = e;
  return Se({
    root: ["root"]
  }, Q0, t);
}, nE = Z(aa, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), od = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: i,
    autoFocus: s = !1,
    children: a,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: f = !1,
    FormHelperTextProps: m,
    fullWidth: y = !1,
    helperText: h,
    id: p,
    InputLabelProps: g,
    inputProps: T,
    InputProps: O,
    inputRef: x,
    label: S,
    maxRows: v,
    minRows: P,
    multiline: R = !1,
    name: I,
    onBlur: q,
    onChange: $,
    onFocus: F,
    placeholder: z,
    required: j = !1,
    rows: M,
    select: U = !1,
    SelectProps: W,
    type: Y,
    value: L,
    variant: de = "outlined"
  } = r, k = ne(r, Z0), B = E({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: f,
    fullWidth: y,
    multiline: R,
    required: j,
    select: U,
    variant: de
  }), J = tE(B);
  process.env.NODE_ENV !== "production" && U && !a && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const X = {};
  de === "outlined" && (g && typeof g.shrink < "u" && (X.notched = g.shrink), X.label = S), U && ((!W || !W.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const V = Vs(p), Q = h && V ? `${V}-helper-text` : void 0, H = S && V ? `${V}-label` : void 0, ee = eE[de], te = /* @__PURE__ */ w.jsx(ee, E({
    "aria-describedby": Q,
    autoComplete: i,
    autoFocus: s,
    defaultValue: u,
    fullWidth: y,
    multiline: R,
    name: I,
    rows: M,
    maxRows: v,
    minRows: P,
    type: Y,
    value: L,
    id: V,
    inputRef: x,
    onBlur: q,
    onChange: $,
    onFocus: F,
    placeholder: z,
    inputProps: T
  }, X, O));
  return /* @__PURE__ */ w.jsxs(nE, E({
    className: se(J.root, l),
    disabled: d,
    error: f,
    fullWidth: y,
    ref: n,
    required: j,
    color: c,
    variant: de,
    ownerState: B
  }, k, {
    children: [S != null && S !== "" && /* @__PURE__ */ w.jsx(ca, E({
      htmlFor: V,
      id: H
    }, g, {
      children: S
    })), U ? /* @__PURE__ */ w.jsx(bi, E({
      "aria-describedby": Q,
      id: V,
      labelId: H,
      value: L,
      input: te
    }, W, {
      children: a
    })) : te, h && /* @__PURE__ */ w.jsx(Bu, E({
      id: Q
    }, m, {
      children: h
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (od.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: o.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: o.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: o.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: o.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The helper text content.
   */
  helperText: o.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: o.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: o.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Yt,
  /**
   * The label content.
   */
  label: o.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: o.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: o.oneOfType([o.number, o.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: o.oneOfType([o.number, o.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: o.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: o.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: o.oneOfType([o.number, o.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: o.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: o.object,
  /**
   * The size of the component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: o.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: o.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: o.oneOf(["filled", "outlined", "standard"])
});
function At(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Cn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const id = 6048e5, rE = 864e5;
let oE = {};
function gi() {
  return oE;
}
function Mr(e, t) {
  var l, c, u, d;
  const n = gi(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, i = At(e), s = i.getDay(), a = (s < r ? 7 : 0) + s - r;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function Ao(e) {
  return Mr(e, { weekStartsOn: 1 });
}
function sd(e) {
  const t = At(e), n = t.getFullYear(), r = Cn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Ao(r), s = Cn(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Ao(s);
  return t.getTime() >= i.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1;
}
function Gl(e) {
  const t = At(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Xl(e) {
  const t = At(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function iE(e, t) {
  const n = Gl(e), r = Gl(t), i = +n - Xl(n), s = +r - Xl(r);
  return Math.round((i - s) / rE);
}
function sE(e) {
  const t = sd(e), n = Cn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Ao(n);
}
function aE(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function lE(e) {
  if (!aE(e) && typeof e != "number")
    return !1;
  const t = At(e);
  return !isNaN(Number(t));
}
function cE(e) {
  const t = At(e), n = Cn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const uE = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, dE = (e, t, n) => {
  let r;
  const i = uE[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function qi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const fE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, mE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, hE = {
  date: qi({
    formats: fE,
    defaultWidth: "full"
  }),
  time: qi({
    formats: pE,
    defaultWidth: "full"
  }),
  dateTime: qi({
    formats: mE,
    defaultWidth: "full"
  })
}, bE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, gE = (e, t, n, r) => bE[e];
function mr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : a;
      i = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[s];
  };
}
const yE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, xE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, EE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, wE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, TE = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, SE = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, CE = {
  ordinalNumber: SE,
  era: mr({
    values: yE,
    defaultWidth: "wide"
  }),
  quarter: mr({
    values: vE,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: mr({
    values: xE,
    defaultWidth: "wide"
  }),
  day: mr({
    values: EE,
    defaultWidth: "wide"
  }),
  dayPeriod: mr({
    values: wE,
    defaultWidth: "wide",
    formattingValues: TE,
    defaultFormattingWidth: "wide"
  })
};
function hr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(i);
    if (!s)
      return null;
    const a = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? RE(l, (f) => f.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      OE(l, (f) => f.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(a.length);
    return { value: u, rest: d };
  };
}
function OE(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function RE(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function PE(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const l = t.slice(i.length);
    return { value: a, rest: l };
  };
}
const NE = /^(\d+)(th|st|nd|rd)?/i, _E = /\d+/i, kE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $E = {
  any: [/^b/i, /^(a|c)/i]
}, ME = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, IE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, jE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, AE = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, DE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, FE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, LE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, BE = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, WE = {
  ordinalNumber: PE({
    matchPattern: NE,
    parsePattern: _E,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: hr({
    matchPatterns: kE,
    defaultMatchWidth: "wide",
    parsePatterns: $E,
    defaultParseWidth: "any"
  }),
  quarter: hr({
    matchPatterns: ME,
    defaultMatchWidth: "wide",
    parsePatterns: IE,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: hr({
    matchPatterns: jE,
    defaultMatchWidth: "wide",
    parsePatterns: AE,
    defaultParseWidth: "any"
  }),
  day: hr({
    matchPatterns: DE,
    defaultMatchWidth: "wide",
    parsePatterns: FE,
    defaultParseWidth: "any"
  }),
  dayPeriod: hr({
    matchPatterns: LE,
    defaultMatchWidth: "any",
    parsePatterns: BE,
    defaultParseWidth: "any"
  })
}, UE = {
  code: "en-US",
  formatDistance: dE,
  formatLong: hE,
  formatRelative: gE,
  localize: CE,
  match: WE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function VE(e) {
  const t = At(e);
  return iE(t, cE(t)) + 1;
}
function zE(e) {
  const t = At(e), n = +Ao(t) - +sE(t);
  return Math.round(n / id) + 1;
}
function ad(e, t) {
  var d, f, m, y;
  const n = At(e), r = n.getFullYear(), i = gi(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((y = (m = i.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, a = Cn(e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const l = Mr(a, t), c = Cn(e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const u = Mr(c, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function qE(e, t) {
  var l, c, u, d;
  const n = gi(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, i = ad(e, t), s = Cn(e, 0);
  return s.setFullYear(i, 0, r), s.setHours(0, 0, 0, 0), Mr(s, t);
}
function HE(e, t) {
  const n = At(e), r = +Mr(n, t) - +qE(n, t);
  return Math.round(r / id) + 1;
}
function Ie(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const an = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ie(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ie(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ie(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ie(i, t.length);
  }
}, An = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Jl = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return an.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = ad(e, r), s = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const a = s % 100;
      return Ie(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ie(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = sd(e);
    return Ie(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ie(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ie(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Ie(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return an.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Ie(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const i = HE(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Ie(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = zE(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : an.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = VE(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ie(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const i = e.getDay(), s = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return Ie(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), s = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return Ie(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return Ie(i, t.length);
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = An.noon : r === 0 ? i = An.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = An.evening : r >= 12 ? i = An.afternoon : r >= 4 ? i = An.morning : i = An.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return an.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : an.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ie(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ie(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : an.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : an.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return an.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Zl(r);
      case "XXXX":
      case "XX":
        return vn(r);
      case "XXXXX":
      case "XXX":
      default:
        return vn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Zl(r);
      case "xxxx":
      case "xx":
        return vn(r);
      case "xxxxx":
      case "xxx":
      default:
        return vn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ql(r, ":");
      case "OOOO":
      default:
        return "GMT" + vn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ql(r, ":");
      case "zzzz":
      default:
        return "GMT" + vn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Ie(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Ie(r, t.length);
  }
};
function Ql(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(i) : n + String(i) + t + Ie(s, 2);
}
function Zl(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ie(Math.abs(e) / 60, 2) : vn(e, t);
}
function vn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Ie(Math.trunc(r / 60), 2), s = Ie(r % 60, 2);
  return n + i + t + s;
}
const ec = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ld = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, YE = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return ec(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", ec(r, t)).replace("{{time}}", ld(i, t));
}, KE = {
  p: ld,
  P: YE
}, GE = /^D+$/, XE = /^Y+$/, JE = ["D", "DD", "YY", "YYYY"];
function QE(e) {
  return GE.test(e);
}
function ZE(e) {
  return XE.test(e);
}
function ew(e, t, n) {
  const r = tw(e, t, n);
  if (console.warn(r), JE.includes(e)) throw new RangeError(r);
}
function tw(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const nw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ow = /^'([^]*?)'?$/, iw = /''/g, sw = /[a-zA-Z]/;
function Dn(e, t, n) {
  var d, f, m, y;
  const r = gi(), i = r.locale ?? UE, s = r.firstWeekContainsDate ?? ((f = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = r.weekStartsOn ?? ((y = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : y.weekStartsOn) ?? 0, l = At(e);
  if (!lE(l))
    throw new RangeError("Invalid time value");
  let c = t.match(rw).map((h) => {
    const p = h[0];
    if (p === "p" || p === "P") {
      const g = KE[p];
      return g(h, i.formatLong);
    }
    return h;
  }).join("").match(nw).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const p = h[0];
    if (p === "'")
      return { isToken: !1, value: aw(h) };
    if (Jl[p])
      return { isToken: !0, value: h };
    if (p.match(sw))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: h };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: i
  };
  return c.map((h) => {
    if (!h.isToken) return h.value;
    const p = h.value;
    (ZE(p) || QE(p)) && ew(p, t, String(e));
    const g = Jl[p[0]];
    return g(l, p, i.localize, u);
  }).join("");
}
function aw(e) {
  const t = e.match(ow);
  return t ? t[1].replace(iw, "'") : e;
}
function cd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: lw } = Object.prototype, { getPrototypeOf: fa } = Object, yi = /* @__PURE__ */ ((e) => (t) => {
  const n = lw.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (t) => yi(t) === e), vi = (e) => (t) => typeof t === e, { isArray: nr } = Array, Ir = vi("undefined");
function cw(e) {
  return e !== null && !Ir(e) && e.constructor !== null && !Ir(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ud = Dt("ArrayBuffer");
function uw(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ud(e.buffer), t;
}
const dw = vi("string"), wt = vi("function"), dd = vi("number"), xi = (e) => e !== null && typeof e == "object", fw = (e) => e === !0 || e === !1, vo = (e) => {
  if (yi(e) !== "object")
    return !1;
  const t = fa(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, pw = Dt("Date"), mw = Dt("File"), hw = Dt("Blob"), bw = Dt("FileList"), gw = (e) => xi(e) && wt(e.pipe), yw = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = yi(e)) === "formdata" || // detect form-data instance
  t === "object" && wt(e.toString) && e.toString() === "[object FormData]"));
}, vw = Dt("URLSearchParams"), [xw, Ew, ww, Tw] = ["ReadableStream", "Request", "Response", "Headers"].map(Dt), Sw = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), nr(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (r = 0; r < a; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function fd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pd = (e) => !Ir(e) && e !== wn;
function ys() {
  const { caseless: e } = pd(this) && this || {}, t = {}, n = (r, i) => {
    const s = e && fd(t, i) || i;
    vo(t[s]) && vo(r) ? t[s] = ys(t[s], r) : vo(r) ? t[s] = ys({}, r) : nr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Xr(arguments[r], n);
  return t;
}
const Cw = (e, t, n, { allOwnKeys: r } = {}) => (Xr(t, (i, s) => {
  n && wt(i) ? e[s] = cd(i, n) : e[s] = i;
}, { allOwnKeys: r }), e), Ow = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Rw = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Pw = (e, t, n, r) => {
  let i, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      a = i[s], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && fa(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Nw = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, _w = (e) => {
  if (!e) return null;
  if (nr(e)) return e;
  let t = e.length;
  if (!dd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, kw = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && fa(Uint8Array)), $w = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Mw = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Iw = Dt("HTMLFormElement"), jw = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), tc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Aw = Dt("RegExp"), md = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Xr(n, (i, s) => {
    let a;
    (a = t(i, s, e)) !== !1 && (r[s] = a || i);
  }), Object.defineProperties(e, r);
}, Dw = (e) => {
  md(e, (t, n) => {
    if (wt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (wt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Fw = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return nr(e) ? r(e) : r(String(e).split(t)), n;
}, Lw = () => {
}, Bw = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ww(e) {
  return !!(e && wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Uw = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (xi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const s = nr(r) ? [] : {};
        return Xr(r, (a, l) => {
          const c = n(a, i + 1);
          !Ir(c) && (s[l] = c);
        }), t[i] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, Vw = Dt("AsyncFunction"), zw = (e) => e && (xi(e) || wt(e)) && wt(e.then) && wt(e.catch), hd = ((e, t) => e ? setImmediate : t ? ((n, r) => (wn.addEventListener("message", ({ source: i, data: s }) => {
  i === wn && s === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), wn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  wt(wn.postMessage)
), qw = typeof queueMicrotask < "u" ? queueMicrotask.bind(wn) : typeof process < "u" && process.nextTick || hd, _ = {
  isArray: nr,
  isArrayBuffer: ud,
  isBuffer: cw,
  isFormData: yw,
  isArrayBufferView: uw,
  isString: dw,
  isNumber: dd,
  isBoolean: fw,
  isObject: xi,
  isPlainObject: vo,
  isReadableStream: xw,
  isRequest: Ew,
  isResponse: ww,
  isHeaders: Tw,
  isUndefined: Ir,
  isDate: pw,
  isFile: mw,
  isBlob: hw,
  isRegExp: Aw,
  isFunction: wt,
  isStream: gw,
  isURLSearchParams: vw,
  isTypedArray: kw,
  isFileList: bw,
  forEach: Xr,
  merge: ys,
  extend: Cw,
  trim: Sw,
  stripBOM: Ow,
  inherits: Rw,
  toFlatObject: Pw,
  kindOf: yi,
  kindOfTest: Dt,
  endsWith: Nw,
  toArray: _w,
  forEachEntry: $w,
  matchAll: Mw,
  isHTMLForm: Iw,
  hasOwnProperty: tc,
  hasOwnProp: tc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: md,
  freezeMethods: Dw,
  toObjectSet: Fw,
  toCamelCase: jw,
  noop: Lw,
  toFiniteNumber: Bw,
  findKey: fd,
  global: wn,
  isContextDefined: pd,
  isSpecCompliantForm: Ww,
  toJSONObject: Uw,
  isAsyncFn: Vw,
  isThenable: zw,
  setImmediate: hd,
  asap: qw
};
function me(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
_.inherits(me, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const bd = me.prototype, gd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  gd[e] = { value: e };
});
Object.defineProperties(me, gd);
Object.defineProperty(bd, "isAxiosError", { value: !0 });
me.from = (e, t, n, r, i, s) => {
  const a = Object.create(bd);
  return _.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), me.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, s && Object.assign(a, s), a;
};
const Hw = null;
function vs(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function yd(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nc(e, t, n) {
  return e ? e.concat(t).map(function(i, s) {
    return i = yd(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function Yw(e) {
  return _.isArray(e) && !e.some(vs);
}
const Kw = _.toFlatObject(_, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ei(e, t, n) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = _.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, g) {
    return !_.isUndefined(g[p]);
  });
  const r = n.metaTokens, i = n.visitor || d, s = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(t);
  if (!_.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (_.isDate(h))
      return h.toISOString();
    if (!c && _.isBlob(h))
      throw new me("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(h) || _.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, p, g) {
    let T = h;
    if (h && !g && typeof h == "object") {
      if (_.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), h = JSON.stringify(h);
      else if (_.isArray(h) && Yw(h) || (_.isFileList(h) || _.endsWith(p, "[]")) && (T = _.toArray(h)))
        return p = yd(p), T.forEach(function(x, S) {
          !(_.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? nc([p], S, s) : a === null ? p : p + "[]",
            u(x)
          );
        }), !1;
    }
    return vs(h) ? !0 : (t.append(nc(g, p, s), u(h)), !1);
  }
  const f = [], m = Object.assign(Kw, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: vs
  });
  function y(h, p) {
    if (!_.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(h), _.forEach(h, function(T, O) {
        (!(_.isUndefined(T) || T === null) && i.call(
          t,
          T,
          _.isString(O) ? O.trim() : O,
          p,
          m
        )) === !0 && y(T, p ? p.concat(O) : [O]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function rc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function pa(e, t) {
  this._pairs = [], e && Ei(e, this, t);
}
const vd = pa.prototype;
vd.append = function(t, n) {
  this._pairs.push([t, n]);
};
vd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, rc);
  } : rc;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Gw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Gw;
  _.isFunction(n) && (n = {
    serialize: n
  });
  const i = n && n.serialize;
  let s;
  if (i ? s = i(t, n) : s = _.isURLSearchParams(t) ? t.toString() : new pa(t, n).toString(r), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class oc {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    _.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ed = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xw = typeof URLSearchParams < "u" ? URLSearchParams : pa, Jw = typeof FormData < "u" ? FormData : null, Qw = typeof Blob < "u" ? Blob : null, Zw = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xw,
    FormData: Jw,
    Blob: Qw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ma = typeof window < "u" && typeof document < "u", xs = typeof navigator == "object" && navigator || void 0, eT = ma && (!xs || ["ReactNative", "NativeScript", "NS"].indexOf(xs.product) < 0), tT = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", nT = ma && window.location.href || "http://localhost", rT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ma,
  hasStandardBrowserEnv: eT,
  hasStandardBrowserWebWorkerEnv: tT,
  navigator: xs,
  origin: nT
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...rT,
  ...Zw
};
function oT(e, t) {
  return Ei(e, new ct.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return ct.isNode && _.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function iT(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function sT(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function wd(e) {
  function t(n, r, i, s) {
    let a = n[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = s >= n.length;
    return a = !a && _.isArray(i) ? i.length : a, c ? (_.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !l) : ((!i[a] || !_.isObject(i[a])) && (i[a] = []), t(n, r, i[a], s) && _.isArray(i[a]) && (i[a] = sT(i[a])), !l);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return _.forEachEntry(e, (r, i) => {
      t(iT(r), i, n, 0);
    }), n;
  }
  return null;
}
function aT(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Jr = {
  transitional: Ed,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = _.isObject(t);
    if (s && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
      return i ? JSON.stringify(wd(t)) : t;
    if (_.isArrayBuffer(t) || _.isBuffer(t) || _.isStream(t) || _.isFile(t) || _.isBlob(t) || _.isReadableStream(t))
      return t;
    if (_.isArrayBufferView(t))
      return t.buffer;
    if (_.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return oT(t, this.formSerializer).toString();
      if ((l = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ei(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), aT(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Jr.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (_.isResponse(t) || _.isReadableStream(t))
      return t;
    if (t && _.isString(t) && (r && !this.responseType || i)) {
      const a = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? me.from(l, me.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ct.classes.FormData,
    Blob: ct.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Jr.headers[e] = {};
});
const lT = _.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), cT = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && lT[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ic = Symbol("internals");
function br(e) {
  return e && String(e).trim().toLowerCase();
}
function xo(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(xo) : String(e);
}
function uT(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const dT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Hi(e, t, n, r, i) {
  if (_.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!_.isString(t)) {
    if (_.isString(r))
      return t.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(t);
  }
}
function fT(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function pT(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, s, a) {
        return this[r].call(this, t, i, s, a);
      },
      configurable: !0
    });
  });
}
let bt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(l, c, u) {
      const d = br(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(i, d);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || c] = xo(l));
    }
    const a = (l, c) => _.forEach(l, (u, d) => s(u, d, c));
    if (_.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (_.isString(t) && (t = t.trim()) && !dT(t))
      a(cT(t), n);
    else if (_.isHeaders(t))
      for (const [l, c] of t.entries())
        s(c, l, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = br(t), t) {
      const r = _.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return uT(i);
        if (_.isFunction(n))
          return n.call(this, i, r);
        if (_.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = br(t), t) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Hi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(a) {
      if (a = br(a), a) {
        const l = _.findKey(r, a);
        l && (!n || Hi(r, r[l], l, n)) && (delete r[l], i = !0);
      }
    }
    return _.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Hi(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return _.forEach(this, (i, s) => {
      const a = _.findKey(r, s);
      if (a) {
        n[a] = xo(i), delete n[s];
        return;
      }
      const l = t ? fT(s) : String(s).trim();
      l !== s && delete n[s], n[l] = xo(i), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && _.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ic] = this[ic] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(a) {
      const l = br(a);
      r[l] || (pT(i, a), r[l] = !0);
    }
    return _.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
bt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(bt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
_.freezeMethods(bt);
function Yi(e, t) {
  const n = this || Jr, r = t || n, i = bt.from(r.headers);
  let s = r.data;
  return _.forEach(e, function(l) {
    s = l.call(n, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function Td(e) {
  return !!(e && e.__CANCEL__);
}
function rr(e, t, n) {
  me.call(this, e ?? "canceled", me.ERR_CANCELED, t, n), this.name = "CanceledError";
}
_.inherits(rr, me, {
  __CANCEL__: !0
});
function Sd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new me(
    "Request failed with status code " + n.status,
    [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function mT(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function hT(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[s];
    a || (a = u), n[i] = c, r[i] = u;
    let f = s, m = 0;
    for (; f !== i; )
      m += n[f++], f = f % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), u - a < t)
      return;
    const y = d && u - d;
    return y ? Math.round(m * 1e3 / y) : void 0;
  };
}
function bT(e, t) {
  let n = 0, r = 1e3 / t, i, s;
  const a = (u, d = Date.now()) => {
    n = d, i = null, s && (clearTimeout(s), s = null), e.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? a(u, d) : (i = u, s || (s = setTimeout(() => {
      s = null, a(i);
    }, r - f)));
  }, () => i && a(i)];
}
const Do = (e, t, n = 3) => {
  let r = 0;
  const i = hT(50, 250);
  return bT((s) => {
    const a = s.loaded, l = s.lengthComputable ? s.total : void 0, c = a - r, u = i(c), d = a <= l;
    r = a;
    const f = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l && d ? (l - a) / u : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, sc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, ac = (e) => (...t) => _.asap(() => e(...t)), gT = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, yT = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, s) {
      const a = [e + "=" + encodeURIComponent(t)];
      _.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), _.isString(r) && a.push("path=" + r), _.isString(i) && a.push("domain=" + i), s === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function vT(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xT(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cd(e, t, n) {
  let r = !vT(t);
  return e && r || n == !1 ? xT(e, t) : t;
}
const lc = (e) => e instanceof bt ? { ...e } : e;
function On(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, m) {
    return _.isPlainObject(u) && _.isPlainObject(d) ? _.merge.call({ caseless: m }, u, d) : _.isPlainObject(d) ? _.merge({}, d) : _.isArray(d) ? d.slice() : d;
  }
  function i(u, d, f, m) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u))
        return r(void 0, u, f, m);
    } else return r(u, d, f, m);
  }
  function s(u, d) {
    if (!_.isUndefined(d))
      return r(void 0, d);
  }
  function a(u, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return r(u, d);
    if (f in e)
      return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d, f) => i(lc(u), lc(d), f, !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || i, m = f(e[d], t[d], d);
    _.isUndefined(m) && f !== l || (n[d] = m);
  }), n;
}
const Od = (e) => {
  const t = On({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: s, headers: a, auth: l } = t;
  t.headers = a = bt.from(a), t.url = xd(Cd(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let c;
  if (_.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [u, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      a.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (ct.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(t)), r || r !== !1 && gT(t.url))) {
    const u = i && s && yT.read(s);
    u && a.set(i, u);
  }
  return t;
}, ET = typeof XMLHttpRequest < "u", wT = ET && function(e) {
  return new Promise(function(n, r) {
    const i = Od(e);
    let s = i.data;
    const a = bt.from(i.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = i, d, f, m, y, h;
    function p() {
      y && y(), h && h(), i.cancelToken && i.cancelToken.unsubscribe(d), i.signal && i.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(i.method.toUpperCase(), i.url, !0), g.timeout = i.timeout;
    function T() {
      if (!g)
        return;
      const x = bt.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), v = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      Sd(function(R) {
        n(R), p();
      }, function(R) {
        r(R), p();
      }, v), g = null;
    }
    "onloadend" in g ? g.onloadend = T : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, g.onabort = function() {
      g && (r(new me("Request aborted", me.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      r(new me("Network Error", me.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let S = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const v = i.transitional || Ed;
      i.timeoutErrorMessage && (S = i.timeoutErrorMessage), r(new me(
        S,
        v.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
        e,
        g
      )), g = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in g && _.forEach(a.toJSON(), function(S, v) {
      g.setRequestHeader(v, S);
    }), _.isUndefined(i.withCredentials) || (g.withCredentials = !!i.withCredentials), l && l !== "json" && (g.responseType = i.responseType), u && ([m, h] = Do(u, !0), g.addEventListener("progress", m)), c && g.upload && ([f, y] = Do(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", y)), (i.cancelToken || i.signal) && (d = (x) => {
      g && (r(!x || x.type ? new rr(null, e, g) : x), g.abort(), g = null);
    }, i.cancelToken && i.cancelToken.subscribe(d), i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
    const O = mT(i.url);
    if (O && ct.protocols.indexOf(O) === -1) {
      r(new me("Unsupported protocol " + O + ":", me.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(s || null);
  });
}, TT = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const s = function(u) {
      if (!i) {
        i = !0, l();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof me ? d : new rr(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new me(`timeout ${t} of ms exceeded`, me.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: c } = r;
    return c.unsubscribe = () => _.asap(l), c;
  }
}, ST = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, CT = async function* (e, t) {
  for await (const n of OT(e))
    yield* ST(n, t);
}, OT = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, cc = (e, t, n, r) => {
  const i = CT(e, t);
  let s = 0, a, l = (c) => {
    a || (a = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await i.next();
        if (u) {
          l(), c.close();
          return;
        }
        let f = d.byteLength;
        if (n) {
          let m = s += f;
          n(m);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(c) {
      return l(c), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, wi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Rd = wi && typeof ReadableStream == "function", RT = wi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Pd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, PT = Rd && Pd(() => {
  let e = !1;
  const t = new Request(ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), uc = 64 * 1024, Es = Rd && Pd(() => _.isReadableStream(new Response("").body)), Fo = {
  stream: Es && ((e) => e.body)
};
wi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Fo[t] && (Fo[t] = _.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new me(`Response type '${t}' is not supported`, me.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const NT = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request(ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await RT(e)).byteLength;
}, _T = async (e, t) => {
  const n = _.toFiniteNumber(e.getContentLength());
  return n ?? NT(t);
}, kT = wi && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: s,
    timeout: a,
    onDownloadProgress: l,
    onUploadProgress: c,
    responseType: u,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: m
  } = Od(e);
  u = u ? (u + "").toLowerCase() : "text";
  let y = TT([i, s && s.toAbortSignal()], a), h;
  const p = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (c && PT && n !== "get" && n !== "head" && (g = await _T(d, r)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      if (_.isFormData(r) && (P = v.headers.get("content-type")) && d.setContentType(P), v.body) {
        const [R, I] = sc(
          g,
          Do(ac(c))
        );
        r = cc(v.body, uc, R, I);
      }
    }
    _.isString(f) || (f = f ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    h = new Request(t, {
      ...m,
      signal: y,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: T ? f : void 0
    });
    let O = await fetch(h);
    const x = Es && (u === "stream" || u === "response");
    if (Es && (l || x && p)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((q) => {
        v[q] = O[q];
      });
      const P = _.toFiniteNumber(O.headers.get("content-length")), [R, I] = l && sc(
        P,
        Do(ac(l), !0)
      ) || [];
      O = new Response(
        cc(O.body, uc, R, () => {
          I && I(), p && p();
        }),
        v
      );
    }
    u = u || "text";
    let S = await Fo[_.findKey(Fo, u) || "text"](O, e);
    return !x && p && p(), await new Promise((v, P) => {
      Sd(v, P, {
        data: S,
        headers: bt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (T) {
    throw p && p(), T && T.name === "TypeError" && /fetch/i.test(T.message) ? Object.assign(
      new me("Network Error", me.ERR_NETWORK, e, h),
      {
        cause: T.cause || T
      }
    ) : me.from(T, T && T.code, e, h);
  }
}), ws = {
  http: Hw,
  xhr: wT,
  fetch: kT
};
_.forEach(ws, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const dc = (e) => `- ${e}`, $T = (e) => _.isFunction(e) || e === null || e === !1, Nd = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let a;
      if (r = n, !$T(n) && (r = ws[(a = String(n)).toLowerCase()], r === void 0))
        throw new me(`Unknown adapter '${a}'`);
      if (r)
        break;
      i[a || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? s.length > 1 ? `since :
` + s.map(dc).join(`
`) : " " + dc(s[0]) : "as no adapter specified";
      throw new me(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ws
};
function Ki(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new rr(null, e);
}
function fc(e) {
  return Ki(e), e.headers = bt.from(e.headers), e.data = Yi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nd.getAdapter(e.adapter || Jr.adapter)(e).then(function(r) {
    return Ki(e), r.data = Yi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = bt.from(r.headers), r;
  }, function(r) {
    return Td(r) || (Ki(e), r && r.response && (r.response.data = Yi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = bt.from(r.response.headers))), Promise.reject(r);
  });
}
const _d = "1.8.3", Ti = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ti[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pc = {};
Ti.transitional = function(t, n, r) {
  function i(s, a) {
    return "[Axios v" + _d + "] Transitional option '" + s + "'" + a + (r ? ". " + r : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new me(
        i(a, " has been removed" + (n ? " in " + n : "")),
        me.ERR_DEPRECATED
      );
    return n && !pc[a] && (pc[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
Ti.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function MT(e, t, n) {
  if (typeof e != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new me("option " + s + " must be " + c, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new me("Unknown option " + s, me.ERR_BAD_OPTION);
  }
}
const Eo = {
  assertOptions: MT,
  validators: Ti
}, Lt = Eo.validators;
let Tn = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new oc(),
      response: new oc()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = On(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && Eo.assertOptions(r, {
      silentJSONParsing: Lt.transitional(Lt.boolean),
      forcedJSONParsing: Lt.transitional(Lt.boolean),
      clarifyTimeoutError: Lt.transitional(Lt.boolean)
    }, !1), i != null && (_.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Eo.assertOptions(i, {
      encode: Lt.function,
      serialize: Lt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Eo.assertOptions(n, {
      baseUrl: Lt.spelling("baseURL"),
      withXsrfToken: Lt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = s && _.merge(
      s.common,
      s[n.method]
    );
    s && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = bt.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (c = c && p.synchronous, l.unshift(p.fulfilled, p.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let d, f = 0, m;
    if (!c) {
      const h = [fc.bind(this), void 0];
      for (h.unshift.apply(h, l), h.push.apply(h, u), m = h.length, d = Promise.resolve(n); f < m; )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    m = l.length;
    let y = n;
    for (f = 0; f < m; ) {
      const h = l[f++], p = l[f++];
      try {
        y = h(y);
      } catch (g) {
        p.call(this, g);
        break;
      }
    }
    try {
      d = fc.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, m = u.length; f < m; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = On(this.defaults, t);
    const n = Cd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return xd(n, t.params, t.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(t) {
  Tn.prototype[t] = function(n, r) {
    return this.request(On(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, a, l) {
      return this.request(On(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  Tn.prototype[t] = n(), Tn.prototype[t + "Form"] = n(!0);
});
let IT = class kd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const a = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(i);
      return a.cancel = function() {
        r.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      r.reason || (r.reason = new rr(s, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new kd(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function jT(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function AT(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const Ts = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ts).forEach(([e, t]) => {
  Ts[t] = e;
});
function $d(e) {
  const t = new Tn(e), n = cd(Tn.prototype.request, t);
  return _.extend(n, Tn.prototype, t, { allOwnKeys: !0 }), _.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return $d(On(e, i));
  }, n;
}
const Ve = $d(Jr);
Ve.Axios = Tn;
Ve.CanceledError = rr;
Ve.CancelToken = IT;
Ve.isCancel = Td;
Ve.VERSION = _d;
Ve.toFormData = Ei;
Ve.AxiosError = me;
Ve.Cancel = Ve.CanceledError;
Ve.all = function(t) {
  return Promise.all(t);
};
Ve.spread = jT;
Ve.isAxiosError = AT;
Ve.mergeConfig = On;
Ve.AxiosHeaders = bt;
Ve.formToJSON = (e) => wd(_.isHTMLForm(e) ? new FormData(e) : e);
Ve.getAdapter = Nd.getAdapter;
Ve.HttpStatusCode = Ts;
Ve.default = Ve;
const {
  Axios: ZT,
  AxiosError: eS,
  CanceledError: tS,
  isCancel: nS,
  CancelToken: rS,
  VERSION: oS,
  all: iS,
  Cancel: sS,
  isAxiosError: aS,
  spread: lS,
  toFormData: cS,
  AxiosHeaders: uS,
  HttpStatusCode: dS,
  formToJSON: fS,
  getAdapter: pS,
  mergeConfig: mS
} = Ve, ln = {
  clientId: "your_oauth_client_id",
  authorizeUrl: "https://signin.mindbodyonline.com/connect/authorize",
  tokenUrl: "https://signin.mindbodyonline.com/connect/token",
  // This must match exactly what is registered in the Mindbody Partner Portal
  redirectUri: "http://localhost:5173/oauth/callback",
  scope: "consumer_identity",
  responseType: "code"
};
function DT() {
  const e = new URLSearchParams({
    client_id: ln.clientId,
    redirect_uri: ln.redirectUri,
    response_type: ln.responseType,
    scope: ln.scope,
    state: FT()
  });
  return `${ln.authorizeUrl}?${e.toString()}`;
}
function FT() {
  return Math.random().toString(36).substring(2, 15);
}
const mc = "11619b00284f433e842b634396dff518", hc = "-99", bc = "https://api.mindbodyonline.com/public/v6", LT = "mindbodysandbox99@gmail.com", BT = "Apitest1234", WT = "your_oauth_client_secret";
class UT {
  constructor() {
    rn(this, "accessToken", null);
    rn(this, "consumerIdentityToken", null);
    rn(this, "userId", null);
    rn(this, "tokenExpirationTime", null);
    rn(this, "renewalPromise", null);
    rn(this, "clientInfo", null);
    rn(this, "api", Ve.create({
      baseURL: bc,
      headers: {
        "Api-Key": mc,
        SiteId: hc,
        "Content-Type": "application/json"
      }
    }));
    console.log("Initializing MindbodyApiService"), console.log("API Configuration:", {
      baseURL: bc,
      hasApiKey: !0,
      hasSiteId: !0,
      hasUsername: !0,
      hasPassword: !0
    }), this.api.interceptors.request.use(async (t) => {
      if (console.log("Request interceptor called"), this.isTokenExpired()) {
        console.log("Token expired or missing, attempting renewal");
        try {
          await this.renewToken(), console.log("Token renewal successful");
        } catch (n) {
          throw console.error("Token renewal failed:", n), n;
        }
      }
      return this.accessToken ? (t.headers.Authorization = `Bearer ${this.accessToken}`, console.log("Added authorization header")) : console.warn("No access token available for request"), this.consumerIdentityToken && (t.headers.ConsumerIdentityToken = this.consumerIdentityToken, console.log("Added consumer identity token")), console.log("Final request config:", {
        url: t.url,
        method: t.method,
        headers: t.headers,
        data: t.data
      }), t;
    }, (t) => (console.error("Request interceptor error:", t), Promise.reject(t))), this.api.interceptors.response.use(
      (t) => (console.log("Response received:", {
        url: t.config.url,
        status: t.status,
        data: t.data
      }), t),
      (t) => {
        var n, r, i;
        return console.error("Response error:", {
          url: (n = t.config) == null ? void 0 : n.url,
          status: (r = t.response) == null ? void 0 : r.status,
          data: (i = t.response) == null ? void 0 : i.data,
          message: t.message
        }), Promise.reject(t);
      }
    ), console.log("Starting initial token renewal"), this.renewToken().catch((t) => {
      console.error("Initial token renewal failed:", t);
    });
  }
  isTokenExpired() {
    return this.tokenExpirationTime ? Date.now() >= this.tokenExpirationTime : !0;
  }
  async handleOAuthCallback(t) {
    const n = new URLSearchParams({
      grant_type: "authorization_code",
      code: t,
      redirect_uri: ln.redirectUri,
      client_id: ln.clientId,
      client_secret: WT
    }), r = await Ve.post(
      ln.tokenUrl,
      n.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    this.consumerIdentityToken = r.data.access_token, await this.fetchClientCompleteInfo();
  }
  async fetchClientCompleteInfo() {
    try {
      const t = await this.api.get("/client/clientcompleteinfo");
      this.clientInfo = t.data.Client, this.userId = t.data.Client.Id;
    } catch (t) {
      throw console.error("Failed to fetch client complete info:", t), t;
    }
  }
  getClientInfo() {
    return this.clientInfo;
  }
  async renewToken() {
    return this.renewalPromise ? (console.log("Token renewal already in progress, waiting..."), this.renewalPromise) : (console.log("Starting token renewal process..."), this.renewalPromise = (async () => {
      try {
        console.log("Sending token renewal request...");
        const t = await this.api.post("/client/usertoken", {
          Username: LT,
          Password: BT
        });
        console.log("Token renewal successful"), this.accessToken = t.data.AccessToken, this.userId = t.data.User.Id, this.tokenExpirationTime = Date.now() + t.data.ExpiresIn * 1e3;
      } catch (t) {
        throw console.error("Token renewal failed:", t), t;
      } finally {
        this.renewalPromise = null;
      }
    })(), this.renewalPromise);
  }
  getUserId() {
    return this.userId;
  }
  // Class-related endpoints
  async getClasses(t, n) {
    return (await this.api.get("/class/classes", {
      params: { StartDate: t, EndDate: n }
    })).data;
  }
  async bookClass(t) {
    return (await this.api.post("/class/addclienttoclass", {
      ClassId: t,
      ClientId: this.userId
    })).data;
  }
  // Appointment-related endpoints
  async getAppointments(t, n) {
    return (await this.api.get("/appointment/appointments", {
      params: { StartDate: t, EndDate: n }
    })).data;
  }
  async bookAppointment(t) {
    return (await this.api.post("/appointment/addappointment", {
      AppointmentId: t,
      ClientId: this.userId
    })).data;
  }
  // Retail-related endpoints
  async getProducts() {
    return (await this.api.get("/sale/products")).data;
  }
  async purchaseProduct(t, n) {
    return (await this.api.post("/sale/checkout", {
      ProductId: t,
      Quantity: n,
      ClientId: this.userId
    })).data;
  }
  async purchaseGiftCard(t) {
    return (await this.api.post("/sale/giftcard", {
      Amount: t,
      ClientId: this.userId
    })).data;
  }
  // Client management endpoints
  async addClient(t) {
    var n, r, i, s, a, l, c;
    try {
      if (console.log("=== Starting addClient process ==="), console.log("Step 1: Validating input data"), !t.Email || !t.Email.includes("@"))
        throw console.error("Validation failed: Invalid email address"), new Error("Invalid email address");
      if (!t.FirstName || t.FirstName.trim().length === 0)
        throw console.error("Validation failed: First name is required"), new Error("First name is required");
      if (!t.LastName || t.LastName.trim().length === 0)
        throw console.error("Validation failed: Last name is required"), new Error("Last name is required");
      console.log("Step 2: Input validation passed"), console.log("Client data:", { ...t });
      const u = {
        Client: {
          FirstName: t.FirstName,
          LastName: t.LastName,
          Email: t.Email,
          Username: t.Email,
          Password: "tempPass123!",
          ReferredBy: "Website",
          Test: !1,
          SendAccountEmails: !0,
          Action: "Added"
        }
      };
      console.log("Step 3: Preparing request with data:", JSON.stringify(u, null, 2)), console.log("Current auth token:", this.accessToken ? "Present" : "Missing"), console.log("Headers:", {
        "Api-Key": mc ? "Present" : "Missing",
        SiteId: hc,
        Authorization: this.accessToken ? "Bearer token present" : "No token"
      }), console.log("Step 4: Sending request to Mindbody API...");
      const d = await this.api.post("/client/addclient", u);
      if (console.log("Step 5: Received response from API"), console.log("Response status:", d.status), console.log("Response data:", JSON.stringify(d.data, null, 2)), !d.data || !d.data.Client || !d.data.Client.Id)
        throw console.error("Step 6: Invalid response structure:", d.data), new Error("Invalid response from server");
      return console.log("Step 6: Successfully created client with ID:", d.data.Client.Id), console.log("=== End addClient process ==="), d.data.Client.Id;
    } catch (u) {
      if (console.error("=== Error in addClient process ==="), console.error("Error details:", u), Ve.isAxiosError(u)) {
        if (console.error("Request configuration:", {
          url: (n = u.config) == null ? void 0 : n.url,
          method: (r = u.config) == null ? void 0 : r.method,
          data: (i = u.config) == null ? void 0 : i.data,
          headers: (s = u.config) == null ? void 0 : s.headers
        }), u.response)
          switch (console.error("Response details:", {
            status: u.response.status,
            statusText: u.response.statusText,
            data: u.response.data,
            headers: u.response.headers
          }), u.response.status) {
            case 400:
              throw new Error(`Invalid client data: ${((a = u.response.data) == null ? void 0 : a.Message) || JSON.stringify(u.response.data) || "Bad request"}`);
            case 401:
              throw new Error("Authentication failed. Please check your API credentials.");
            case 403:
              throw new Error("You do not have permission to create clients.");
            case 409:
              throw new Error("A client with this email already exists.");
            case 429:
              throw new Error("Too many requests. Please try again later.");
            case 500:
              throw new Error(`Mindbody server error: ${((l = u.response.data) == null ? void 0 : l.Message) || "Please try again later."}`);
            default:
              throw new Error(`Server error (${u.response.status}): ${((c = u.response.data) == null ? void 0 : c.Message) || u.message}`);
          }
        else if (u.request)
          throw console.error("No response received from server"), new Error("No response received from Mindbody. Please check your internet connection.");
      }
      throw new Error(`Failed to create client: ${u instanceof Error ? u.message : "Unknown error"}`);
    }
  }
  async sendPasswordResetEmail(t) {
    var n;
    try {
      if (!t || !t.includes("@"))
        throw new Error("Invalid email address");
      await this.api.post("/client/sendpasswordresetemail", {
        UserEmail: t,
        UserFirstName: null,
        UserLastName: null
      });
    } catch (r) {
      if (Ve.isAxiosError(r)) {
        if (r.response)
          switch (r.response.status) {
            case 400:
              throw new Error("Invalid email format or missing required fields");
            case 401:
              throw new Error("Authentication failed. Please check your API credentials.");
            case 403:
              throw new Error("You do not have permission to send password reset emails.");
            case 404:
              throw new Error("No account found with this email address.");
            case 429:
              throw new Error("Too many requests. Please try again later.");
            case 500:
              throw new Error("Mindbody server error. Please try again later.");
            default:
              throw new Error(`Server error: ${((n = r.response.data) == null ? void 0 : n.Message) || r.message}`);
          }
        else if (r.request)
          throw new Error("No response received from Mindbody. Please check your internet connection.");
      }
      throw new Error(`Failed to send password reset email: ${r instanceof Error ? r.message : "Unknown error"}`);
    }
  }
}
const mt = new UT();
function gc(e) {
  const { children: t, value: n, index: r, ...i } = e;
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      role: "tabpanel",
      hidden: n !== r,
      id: `scheduler-tabpanel-${r}`,
      "aria-labelledby": `scheduler-tab-${r}`,
      ...i,
      children: n === r && /* @__PURE__ */ w.jsx(Hn, { sx: { p: 3 }, children: t })
    }
  );
}
const VT = () => {
  const [e, t] = st(0), [n, r] = st([]), [i, s] = st([]), [a, l] = st(null), [c, u] = st(!1);
  Ss(() => {
    (async () => {
      const h = Dn(/* @__PURE__ */ new Date(), "yyyy-MM-dd"), p = Dn(new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3), "yyyy-MM-dd");
      try {
        const [g, T] = await Promise.all([
          mt.getClasses(h, p),
          mt.getAppointments(h, p)
        ]);
        r(g), s(T);
      } catch (g) {
        console.error("Error fetching data:", g);
      }
    })();
  });
  const d = (y, h) => {
    t(h);
  }, f = (y) => {
    l(y), u(!0);
  }, m = async () => {
    if (a)
      try {
        "instructor" in a ? await mt.bookClass(a.id) : await mt.bookAppointment(a.id), u(!1);
        const y = Dn(/* @__PURE__ */ new Date(), "yyyy-MM-dd"), h = Dn(new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3), "yyyy-MM-dd"), [p, g] = await Promise.all([
          mt.getClasses(y, h),
          mt.getAppointments(y, h)
        ]);
        r(p), s(g);
      } catch (y) {
        console.error("Error booking:", y);
      }
  };
  return /* @__PURE__ */ w.jsxs(ea, { maxWidth: "lg", children: [
    /* @__PURE__ */ w.jsxs(Hn, { sx: { width: "100%" }, children: [
      /* @__PURE__ */ w.jsx(Hn, { sx: { borderBottom: 1, borderColor: "divider" }, children: /* @__PURE__ */ w.jsxs(rd, { value: e, onChange: d, children: [
        /* @__PURE__ */ w.jsx(gs, { label: "Classes" }),
        /* @__PURE__ */ w.jsx(gs, { label: "Appointments" })
      ] }) }),
      /* @__PURE__ */ w.jsx(gc, { value: e, index: 0, children: /* @__PURE__ */ w.jsx(Vt, { container: !0, spacing: 3, children: n.map((y) => /* @__PURE__ */ w.jsx(Vt, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ w.jsxs($o, { children: [
        /* @__PURE__ */ w.jsxs(Mo, { children: [
          /* @__PURE__ */ w.jsx(Ge, { variant: "h6", children: y.name }),
          /* @__PURE__ */ w.jsx(Ge, { color: "textSecondary", children: Dn(new Date(y.startDateTime), "PPp") }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Instructor: ",
            y.instructor.firstName,
            " ",
            y.instructor.lastName
          ] }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Location: ",
            y.location.name
          ] }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Price: $",
            y.price
          ] }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Spots: ",
            y.totalBooked,
            "/",
            y.maxCapacity
          ] })
        ] }),
        /* @__PURE__ */ w.jsx(
          Qt,
          {
            variant: "contained",
            color: "primary",
            onClick: () => f(y),
            disabled: y.totalBooked >= y.maxCapacity,
            children: "Book Now"
          }
        )
      ] }) }, y.id)) }) }),
      /* @__PURE__ */ w.jsx(gc, { value: e, index: 1, children: /* @__PURE__ */ w.jsx(Vt, { container: !0, spacing: 3, children: i.map((y) => /* @__PURE__ */ w.jsx(Vt, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ w.jsxs($o, { children: [
        /* @__PURE__ */ w.jsxs(Mo, { children: [
          /* @__PURE__ */ w.jsx(Ge, { variant: "h6", children: y.name }),
          /* @__PURE__ */ w.jsx(Ge, { color: "textSecondary", children: Dn(new Date(y.startDateTime), "PPp") }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Staff: ",
            y.staff.firstName,
            " ",
            y.staff.lastName
          ] }),
          /* @__PURE__ */ w.jsxs(Ge, { children: [
            "Price: $",
            y.price
          ] })
        ] }),
        /* @__PURE__ */ w.jsx(
          Qt,
          {
            variant: "contained",
            color: "primary",
            onClick: () => f(y),
            children: "Book Now"
          }
        )
      ] }) }, y.id)) }) })
    ] }),
    /* @__PURE__ */ w.jsxs(ra, { open: c, onClose: () => u(!1), children: [
      /* @__PURE__ */ w.jsx(sa, { children: "Confirm Booking" }),
      /* @__PURE__ */ w.jsx(ia, { children: /* @__PURE__ */ w.jsxs(Ge, { children: [
        "Are you sure you want to book this ",
        a && "instructor" in a ? "class" : "appointment",
        "?"
      ] }) }),
      /* @__PURE__ */ w.jsxs(oa, { children: [
        /* @__PURE__ */ w.jsx(Qt, { onClick: () => u(!1), children: "Cancel" }),
        /* @__PURE__ */ w.jsx(Qt, { onClick: m, color: "primary", children: "Confirm" })
      ] })
    ] })
  ] });
}, yc = ({ showGiftCards: e = !1 }) => {
  const [t, n] = st([]), [r, i] = st(null), [s, a] = st(1), [l, c] = st(""), [u, d] = st(!1);
  Ss(() => {
    e || (async () => {
      try {
        const T = await mt.getProducts();
        n(T);
      } catch (T) {
        console.error("Error fetching products:", T);
      }
    })();
  }, [e]);
  const f = (g) => {
    i(g), d(!0);
  }, m = () => {
    d(!0);
  }, y = async () => {
    try {
      if (e ? await mt.purchaseGiftCard(
        parseFloat(l)
      ) : r && await mt.purchaseProduct(
        r.id,
        s
      ), d(!1), !e) {
        const g = await mt.getProducts();
        n(g);
      }
    } catch (g) {
      console.error("Error making purchase:", g);
    }
  }, h = (g) => {
    c(g.target.value);
  }, p = (g) => {
    a(Number(g.target.value));
  };
  return /* @__PURE__ */ w.jsxs(ea, { maxWidth: "lg", children: [
    /* @__PURE__ */ w.jsx(Hn, { sx: { width: "100%" }, children: e ? /* @__PURE__ */ w.jsxs(Hn, { sx: { textAlign: "center", py: 4 }, children: [
      /* @__PURE__ */ w.jsx(Ge, { variant: "h5", gutterBottom: !0, children: "Purchase a Gift Card" }),
      /* @__PURE__ */ w.jsx(Ge, { variant: "body1", paragraph: !0, children: "Give the gift of wellness to someone special" }),
      /* @__PURE__ */ w.jsx(
        Qt,
        {
          variant: "contained",
          color: "primary",
          onClick: m,
          children: "Buy Gift Card"
        }
      )
    ] }) : /* @__PURE__ */ w.jsx(Vt, { container: !0, spacing: 3, children: t.map((g) => /* @__PURE__ */ w.jsx(Vt, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ w.jsxs($o, { children: [
      g.imageUrl && /* @__PURE__ */ w.jsx(
        Lu,
        {
          component: "img",
          height: "200",
          image: g.imageUrl,
          alt: g.name
        }
      ),
      /* @__PURE__ */ w.jsxs(Mo, { children: [
        /* @__PURE__ */ w.jsx(Ge, { variant: "h6", children: g.name }),
        /* @__PURE__ */ w.jsx(Ge, { color: "textSecondary", children: g.description }),
        /* @__PURE__ */ w.jsxs(Ge, { children: [
          "Price: $",
          g.price
        ] }),
        /* @__PURE__ */ w.jsxs(Ge, { children: [
          "In Stock: ",
          g.inventoryCount
        ] })
      ] }),
      /* @__PURE__ */ w.jsx(
        Qt,
        {
          variant: "contained",
          color: "primary",
          onClick: () => f(g),
          disabled: g.inventoryCount === 0,
          children: "Purchase"
        }
      )
    ] }) }, g.id)) }) }),
    /* @__PURE__ */ w.jsxs(ra, { open: u, onClose: () => d(!1), children: [
      /* @__PURE__ */ w.jsx(sa, { children: e ? "Purchase Gift Card" : "Confirm Product Purchase" }),
      /* @__PURE__ */ w.jsx(ia, { children: e ? /* @__PURE__ */ w.jsx(
        od,
        {
          autoFocus: !0,
          margin: "dense",
          label: "Gift Card Amount",
          type: "number",
          fullWidth: !0,
          value: l,
          onChange: h
        }
      ) : r ? /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(Ge, { variant: "h6", gutterBottom: !0, children: r.name }),
        /* @__PURE__ */ w.jsxs(Ge, { children: [
          "Price: $",
          r.price
        ] }),
        /* @__PURE__ */ w.jsxs(aa, { fullWidth: !0, sx: { mt: 2 }, children: [
          /* @__PURE__ */ w.jsx(ca, { children: "Quantity" }),
          /* @__PURE__ */ w.jsx(
            bi,
            {
              value: s,
              label: "Quantity",
              onChange: p,
              children: [...Array(r.inventoryCount)].map((g, T) => /* @__PURE__ */ w.jsx(Gu, { value: T + 1, children: T + 1 }, T + 1))
            }
          )
        ] })
      ] }) : null }),
      /* @__PURE__ */ w.jsxs(oa, { children: [
        /* @__PURE__ */ w.jsx(Qt, { onClick: () => d(!1), children: "Cancel" }),
        /* @__PURE__ */ w.jsx(Qt, { onClick: y, color: "primary", children: "Confirm Purchase" })
      ] })
    ] })
  ] });
}, zT = () => {
  const [e, t] = st("loading"), [n, r] = st(null), [i, s] = st(null);
  return Ss(() => {
    (async () => {
      try {
        const c = new URLSearchParams(window.location.search).get("code");
        if (!c)
          throw new Error("No authorization code received");
        await mt.handleOAuthCallback(c);
        const u = mt.getClientInfo();
        s(u), t("success"), setTimeout(() => {
          window.location.href = "/";
        }, 3e3);
      } catch (l) {
        r(l instanceof Error ? l.message : "Authentication failed"), t("error");
      }
    })();
  }, []), /* @__PURE__ */ w.jsxs("div", { className: "oauth-callback", children: [
    e === "loading" && /* @__PURE__ */ w.jsx("p", { children: "Processing your login..." }),
    e === "success" && /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("p", { children: "Successfully logged in!" }),
      i && /* @__PURE__ */ w.jsxs("div", { className: "client-info", children: [
        /* @__PURE__ */ w.jsxs("h3", { children: [
          "Welcome, ",
          i.FirstName,
          " ",
          i.LastName,
          "!"
        ] }),
        /* @__PURE__ */ w.jsxs("p", { children: [
          "Email: ",
          i.Email
        ] }),
        /* @__PURE__ */ w.jsxs("p", { children: [
          "Member since: ",
          new Date(i.CreationDate).toLocaleDateString()
        ] }),
        /* @__PURE__ */ w.jsxs("p", { children: [
          "Account Balance: $",
          i.AccountBalance
        ] }),
        /* @__PURE__ */ w.jsxs("p", { children: [
          "Available Credits: ",
          i.AvailableCredits
        ] }),
        /* @__PURE__ */ w.jsx("p", { children: "Redirecting to homepage..." })
      ] })
    ] }),
    e === "error" && /* @__PURE__ */ w.jsxs("p", { children: [
      "Error: ",
      n
    ] }),
    /* @__PURE__ */ w.jsx("style", { children: `
        .oauth-callback {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          gap: 1rem;
        }
        .client-info {
          text-align: center;
          margin-top: 1rem;
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: 4px;
          background-color: #f9f9f9;
        }
      ` })
  ] });
}, qT = () => {
  const e = () => {
    window.location.href = DT();
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "oauth-login", children: [
    /* @__PURE__ */ w.jsx("h2", { children: "Sign in with Mindbody" }),
    /* @__PURE__ */ w.jsx(
      "button",
      {
        onClick: e,
        className: "mindbody-login-button",
        children: "Sign in with Mindbody"
      }
    ),
    /* @__PURE__ */ w.jsx("style", { children: `
        .oauth-login {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          gap: 1rem;
        }
        .mindbody-login-button {
          background-color: #00A4E3;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .mindbody-login-button:hover {
          background-color: #0093CC;
        }
      ` })
  ] });
}, HT = () => {
  const [e, t] = st({
    firstName: "",
    lastName: "",
    email: ""
  }), [n, r] = st("idle"), [i, s] = st(null), [a, l] = st({}), c = () => {
    const f = {};
    let m = !0;
    return e.firstName.trim() || (f.firstName = "First name is required", m = !1), e.lastName.trim() || (f.lastName = "Last name is required", m = !1), e.email.trim() ? e.email.includes("@") || (f.email = "Invalid email address", m = !1) : (f.email = "Email is required", m = !1), l(f), m;
  }, u = (f) => {
    const { name: m, value: y } = f.target;
    t((h) => ({
      ...h,
      [m]: y
    })), a[m] && l((h) => ({
      ...h,
      [m]: void 0
    }));
  }, d = async (f) => {
    if (console.log("FORM SUBMIT TRIGGERED"), f.preventDefault(), console.log("%c=== Starting form submission process ===", "color: blue; font-weight: bold"), console.dir(e), s(null), !c()) {
      console.log("%cForm validation failed", "color: red");
      return;
    }
    try {
      r("loading"), console.log("%cAttempting to create client...", "color: blue");
      const m = {
        FirstName: e.firstName,
        LastName: e.lastName,
        Email: e.email
      };
      console.log("Client data being sent:", m);
      const y = await mt.addClient(m);
      console.log("%cClient created with ID: " + y, "color: green");
      try {
        await mt.sendPasswordResetEmail(e.email), console.log("%cPassword reset email sent", "color: green"), r("success"), t({ firstName: "", lastName: "", email: "" });
      } catch (h) {
        console.error("Password reset email error:", h), r("success"), s("Client created successfully, but failed to send password reset email.");
      }
    } catch (m) {
      console.error("Client creation error:", m), r("error"), s(m instanceof Error ? m.message : "Failed to create customer");
    }
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "admin-form", children: [
    /* @__PURE__ */ w.jsx("h2", { children: "Create Test Customer" }),
    /* @__PURE__ */ w.jsxs("form", { onSubmit: d, children: [
      /* @__PURE__ */ w.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ w.jsx("label", { htmlFor: "firstName", children: "First Name:" }),
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "text",
            id: "firstName",
            name: "firstName",
            value: e.firstName,
            onChange: u,
            className: a.firstName ? "error" : ""
          }
        ),
        a.firstName && /* @__PURE__ */ w.jsx("div", { className: "validation-error", children: a.firstName })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ w.jsx("label", { htmlFor: "lastName", children: "Last Name:" }),
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "text",
            id: "lastName",
            name: "lastName",
            value: e.lastName,
            onChange: u,
            className: a.lastName ? "error" : ""
          }
        ),
        a.lastName && /* @__PURE__ */ w.jsx("div", { className: "validation-error", children: a.lastName })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ w.jsx("label", { htmlFor: "email", children: "Email:" }),
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: e.email,
            onChange: u,
            className: a.email ? "error" : ""
          }
        ),
        a.email && /* @__PURE__ */ w.jsx("div", { className: "validation-error", children: a.email })
      ] }),
      /* @__PURE__ */ w.jsx(
        "button",
        {
          type: "submit",
          disabled: n === "loading",
          onClick: () => console.log("Button clicked"),
          children: n === "loading" ? "Creating..." : "Create Customer"
        }
      )
    ] }),
    n === "success" && /* @__PURE__ */ w.jsx("div", { className: i ? "warning-message" : "success-message", children: i || "Customer created successfully! Password reset email has been sent." }),
    n === "error" && /* @__PURE__ */ w.jsxs("div", { className: "error-message", children: [
      "Error: ",
      i
    ] }),
    /* @__PURE__ */ w.jsx("style", { children: `
        .admin-form {
          max-width: 400px;
          margin: 2rem auto;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 1rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        input.error {
          border-color: #dc3545;
          background-color: #fff8f8;
        }

        .validation-error {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #00A4E3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: #0093CC;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #e7f7ed;
          color: #0a6b2d;
          border-radius: 4px;
          text-align: center;
        }

        .warning-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fff3cd;
          color: #856404;
          border-radius: 4px;
          text-align: center;
        }

        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background-color: #fde8e8;
          color: #c81e1e;
          border-radius: 4px;
          text-align: center;
        }
      ` })
  ] });
}, YT = () => /* @__PURE__ */ w.jsx(op, { children: /* @__PURE__ */ w.jsxs("div", { className: "app", children: [
  /* @__PURE__ */ w.jsx("nav", { children: /* @__PURE__ */ w.jsxs("ul", { children: [
    /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx(xn, { to: "/", children: "Home" }) }),
    /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx(xn, { to: "/scheduler", children: "Scheduler" }) }),
    /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx(xn, { to: "/retail", children: "Shop" }) }),
    /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx(xn, { to: "/giftcards", children: "Gift Cards" }) }),
    /* @__PURE__ */ w.jsx("li", { children: /* @__PURE__ */ w.jsx(xn, { to: "/admin/customer", children: "Admin" }) })
  ] }) }),
  /* @__PURE__ */ w.jsxs(Vf, { children: [
    /* @__PURE__ */ w.jsx(bn, { path: "/", element: /* @__PURE__ */ w.jsxs("div", { children: [
      /* @__PURE__ */ w.jsx("h1", { children: "Mindbody Widgets" }),
      /* @__PURE__ */ w.jsx(qT, {})
    ] }) }),
    /* @__PURE__ */ w.jsx(bn, { path: "/scheduler", element: /* @__PURE__ */ w.jsx(VT, {}) }),
    /* @__PURE__ */ w.jsx(bn, { path: "/retail", element: /* @__PURE__ */ w.jsx(yc, { showGiftCards: !1 }) }),
    /* @__PURE__ */ w.jsx(bn, { path: "/giftcards", element: /* @__PURE__ */ w.jsx(yc, { showGiftCards: !0 }) }),
    /* @__PURE__ */ w.jsx(bn, { path: "/oauth/callback", element: /* @__PURE__ */ w.jsx(zT, {}) }),
    /* @__PURE__ */ w.jsx(bn, { path: "/admin/customer", element: /* @__PURE__ */ w.jsx(HT, {}) })
  ] }),
  /* @__PURE__ */ w.jsx("style", { children: `
          .app {
            padding: 2rem;
          }
          nav {
            margin-bottom: 2rem;
          }
          nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 1rem;
          }
          nav a {
            color: #00A4E3;
            text-decoration: none;
            font-weight: 500;
          }
          nav a:hover {
            text-decoration: underline;
          }
        ` })
] }) });
document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("mindbody-app");
  e && Gi(e).render(Nt.createElement(YT));
});
export {
  yc as RetailWidget,
  VT as SchedulerWidget
};
