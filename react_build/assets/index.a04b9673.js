var Kp = Object.defineProperty;
var Xp = (e, t, n) =>
    t in e ? Kp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n);
var R = (e, t, n) => (Xp(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver((r) => {
        for (const s of r)
            if (s.type === 'childList')
                for (const o of s.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const s = {};
        return (
            r.integrity && (s.integrity = r.integrity),
            r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
            r.crossorigin === 'use-credentials'
                ? (s.credentials = 'include')
                : r.crossorigin === 'anonymous'
                ? (s.credentials = 'omit')
                : (s.credentials = 'same-origin'),
            s
        );
    }
    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const s = n(r);
        fetch(r.href, s);
    }
})();
function Zp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var F = { exports: {} },
    N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for('react.element'),
    Gp = Symbol.for('react.portal'),
    qp = Symbol.for('react.fragment'),
    Jp = Symbol.for('react.strict_mode'),
    tg = Symbol.for('react.profiler'),
    eg = Symbol.for('react.provider'),
    ng = Symbol.for('react.context'),
    ig = Symbol.for('react.forward_ref'),
    rg = Symbol.for('react.suspense'),
    sg = Symbol.for('react.memo'),
    og = Symbol.for('react.lazy'),
    Su = Symbol.iterator;
function lg(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Su && e[Su]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Qf = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Kf = Object.assign,
    Xf = {};
function mi(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Xf), (this.updater = n || Qf);
}
mi.prototype.isReactComponent = {};
mi.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
mi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Zf() {}
Zf.prototype = mi.prototype;
function pa(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Xf), (this.updater = n || Qf);
}
var ga = (pa.prototype = new Zf());
ga.constructor = pa;
Kf(ga, mi.prototype);
ga.isPureReactComponent = !0;
var Cu = Array.isArray,
    Gf = Object.prototype.hasOwnProperty,
    ma = { current: null },
    qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
    var i,
        r = {},
        s = null,
        o = null;
    if (t != null)
        for (i in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
            Gf.call(t, i) && !qf.hasOwnProperty(i) && (r[i] = t[i]);
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    if (e && e.defaultProps) for (i in ((l = e.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
    return { $$typeof: br, type: e, key: s, ref: o, props: r, _owner: ma.current };
}
function ag(e, t) {
    return { $$typeof: br, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ya(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === br;
}
function ug(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var bu = /\/+/g;
function To(e, t) {
    return typeof e == 'object' && e !== null && e.key != null ? ug('' + e.key) : t.toString(36);
}
function fs(e, t, n, i, r) {
    var s = typeof e;
    (s === 'undefined' || s === 'boolean') && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (s) {
            case 'string':
            case 'number':
                o = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case br:
                    case Gp:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (r = r(o)),
            (e = i === '' ? '.' + To(o, 0) : i),
            Cu(r)
                ? ((n = ''),
                  e != null && (n = e.replace(bu, '$&/') + '/'),
                  fs(r, t, n, '', function (u) {
                      return u;
                  }))
                : r != null &&
                  (ya(r) &&
                      (r = ag(
                          r,
                          n +
                              (!r.key || (o && o.key === r.key)
                                  ? ''
                                  : ('' + r.key).replace(bu, '$&/') + '/') +
                              e
                      )),
                  t.push(r)),
            1
        );
    if (((o = 0), (i = i === '' ? '.' : i + ':'), Cu(e)))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = i + To(s, l);
            o += fs(s, t, n, a, r);
        }
    else if (((a = lg(e)), typeof a == 'function'))
        for (e = a.call(e), l = 0; !(s = e.next()).done; )
            (s = s.value), (a = i + To(s, l++)), (o += fs(s, t, n, a, r));
    else if (s === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return o;
}
function zr(e, t, n) {
    if (e == null) return e;
    var i = [],
        r = 0;
    return (
        fs(e, i, '', '', function (s) {
            return t.call(n, s, r++);
        }),
        i
    );
}
function cg(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Et = { current: null },
    ds = { transition: null },
    fg = { ReactCurrentDispatcher: Et, ReactCurrentBatchConfig: ds, ReactCurrentOwner: ma };
N.Children = {
    map: zr,
    forEach: function (e, t, n) {
        zr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            zr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            zr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!ya(e))
            throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
};
N.Component = mi;
N.Fragment = qp;
N.Profiler = tg;
N.PureComponent = pa;
N.StrictMode = Jp;
N.Suspense = rg;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fg;
N.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        );
    var i = Kf({}, e.props),
        r = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((s = t.ref), (o = ma.current)),
            t.key !== void 0 && (r = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var l = e.type.defaultProps;
        for (a in t)
            Gf.call(t, a) &&
                !qf.hasOwnProperty(a) &&
                (i[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l;
    }
    return { $$typeof: br, type: e.type, key: r, ref: s, props: i, _owner: o };
};
N.createContext = function (e) {
    return (
        (e = {
            $$typeof: ng,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: eg, _context: e }),
        (e.Consumer = e)
    );
};
N.createElement = Jf;
N.createFactory = function (e) {
    var t = Jf.bind(null, e);
    return (t.type = e), t;
};
N.createRef = function () {
    return { current: null };
};
N.forwardRef = function (e) {
    return { $$typeof: ig, render: e };
};
N.isValidElement = ya;
N.lazy = function (e) {
    return { $$typeof: og, _payload: { _status: -1, _result: e }, _init: cg };
};
N.memo = function (e, t) {
    return { $$typeof: sg, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
    var t = ds.transition;
    ds.transition = {};
    try {
        e();
    } finally {
        ds.transition = t;
    }
};
N.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
N.useCallback = function (e, t) {
    return Et.current.useCallback(e, t);
};
N.useContext = function (e) {
    return Et.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
    return Et.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
    return Et.current.useEffect(e, t);
};
N.useId = function () {
    return Et.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
    return Et.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
    return Et.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
    return Et.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
    return Et.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
    return Et.current.useReducer(e, t, n);
};
N.useRef = function (e) {
    return Et.current.useRef(e);
};
N.useState = function (e) {
    return Et.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
    return Et.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
    return Et.current.useTransition();
};
N.version = '18.2.0';
(function (e) {
    e.exports = N;
})(F);
const cl = Zp(F.exports);
var fl = {},
    td = { exports: {} },
    Yt = {},
    ed = { exports: {} },
    nd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, D) {
        var z = P.length;
        P.push(D);
        t: for (; 0 < z; ) {
            var W = (z - 1) >>> 1,
                Q = P[W];
            if (0 < r(Q, D)) (P[W] = D), (P[z] = Q), (z = W);
            else break t;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function i(P) {
        if (P.length === 0) return null;
        var D = P[0],
            z = P.pop();
        if (z !== D) {
            P[0] = z;
            t: for (var W = 0, Q = P.length, he = Q >>> 1; W < he; ) {
                var Ht = 2 * (W + 1) - 1,
                    ke = P[Ht],
                    Bt = Ht + 1,
                    Dr = P[Bt];
                if (0 > r(ke, z))
                    Bt < Q && 0 > r(Dr, ke)
                        ? ((P[W] = Dr), (P[Bt] = z), (W = Bt))
                        : ((P[W] = ke), (P[Ht] = z), (W = Ht));
                else if (Bt < Q && 0 > r(Dr, z)) (P[W] = Dr), (P[Bt] = z), (W = Bt);
                else break t;
            }
        }
        return D;
    }
    function r(P, D) {
        var z = P.sortIndex - D.sortIndex;
        return z !== 0 ? z : P.id - D.id;
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
        var s = performance;
        e.unstable_now = function () {
            return s.now();
        };
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function () {
            return o.now() - l;
        };
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        h = !1,
        m = !1,
        y = !1,
        x = typeof setTimeout == 'function' ? setTimeout : null,
        p = typeof clearTimeout == 'function' ? clearTimeout : null,
        g = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null) i(u);
            else if (D.startTime <= P) i(u), (D.sortIndex = D.expirationTime), t(a, D);
            else break;
            D = n(u);
        }
    }
    function _(P) {
        if (((y = !1), v(P), !m))
            if (n(a) !== null) (m = !0), rt(w);
            else {
                var D = n(u);
                D !== null && xt(_, D.startTime - P);
            }
    }
    function w(P, D) {
        (m = !1), y && ((y = !1), p(C), (C = -1)), (h = !0);
        var z = d;
        try {
            for (v(D), f = n(a); f !== null && (!(f.expirationTime > D) || (P && !O())); ) {
                var W = f.callback;
                if (typeof W == 'function') {
                    (f.callback = null), (d = f.priorityLevel);
                    var Q = W(f.expirationTime <= D);
                    (D = e.unstable_now()),
                        typeof Q == 'function' ? (f.callback = Q) : f === n(a) && i(a),
                        v(D);
                } else i(a);
                f = n(a);
            }
            if (f !== null) var he = !0;
            else {
                var Ht = n(u);
                Ht !== null && xt(_, Ht.startTime - D), (he = !1);
            }
            return he;
        } finally {
            (f = null), (d = z), (h = !1);
        }
    }
    var k = !1,
        S = null,
        C = -1,
        L = 5,
        E = -1;
    function O() {
        return !(e.unstable_now() - E < L);
    }
    function I() {
        if (S !== null) {
            var P = e.unstable_now();
            E = P;
            var D = !0;
            try {
                D = S(!0, P);
            } finally {
                D ? lt() : ((k = !1), (S = null));
            }
        } else k = !1;
    }
    var lt;
    if (typeof g == 'function')
        lt = function () {
            g(I);
        };
    else if (typeof MessageChannel < 'u') {
        var Ft = new MessageChannel(),
            q = Ft.port2;
        (Ft.port1.onmessage = I),
            (lt = function () {
                q.postMessage(null);
            });
    } else
        lt = function () {
            x(I, 0);
        };
    function rt(P) {
        (S = P), k || ((k = !0), lt());
    }
    function xt(P, D) {
        C = x(function () {
            P(e.unstable_now());
        }, D);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            m || h || ((m = !0), rt(w));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (L = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a);
        }),
        (e.unstable_next = function (P) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var D = 3;
                    break;
                default:
                    D = d;
            }
            var z = d;
            d = D;
            try {
                return P();
            } finally {
                d = z;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, D) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var z = d;
            d = P;
            try {
                return D();
            } finally {
                d = z;
            }
        }),
        (e.unstable_scheduleCallback = function (P, D, z) {
            var W = e.unstable_now();
            switch (
                (typeof z == 'object' && z !== null
                    ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? W + z : W))
                    : (z = W),
                P)
            ) {
                case 1:
                    var Q = -1;
                    break;
                case 2:
                    Q = 250;
                    break;
                case 5:
                    Q = 1073741823;
                    break;
                case 4:
                    Q = 1e4;
                    break;
                default:
                    Q = 5e3;
            }
            return (
                (Q = z + Q),
                (P = {
                    id: c++,
                    callback: D,
                    priorityLevel: P,
                    startTime: z,
                    expirationTime: Q,
                    sortIndex: -1,
                }),
                z > W
                    ? ((P.sortIndex = z),
                      t(u, P),
                      n(a) === null &&
                          P === n(u) &&
                          (y ? (p(C), (C = -1)) : (y = !0), xt(_, z - W)))
                    : ((P.sortIndex = Q), t(a, P), m || h || ((m = !0), rt(w))),
                P
            );
        }),
        (e.unstable_shouldYield = O),
        (e.unstable_wrapCallback = function (P) {
            var D = d;
            return function () {
                var z = d;
                d = D;
                try {
                    return P.apply(this, arguments);
                } finally {
                    d = z;
                }
            };
        });
})(nd);
(function (e) {
    e.exports = nd;
})(ed);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = F.exports,
    Ut = ed.exports;
function M(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var rd = new Set(),
    nr = {};
function Nn(e, t) {
    oi(e, t), oi(e + 'Capture', t);
}
function oi(e, t) {
    for (nr[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var De = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    dl = Object.prototype.hasOwnProperty,
    dg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Mu = {},
    Pu = {};
function hg(e) {
    return dl.call(Pu, e)
        ? !0
        : dl.call(Mu, e)
        ? !1
        : dg.test(e)
        ? (Pu[e] = !0)
        : ((Mu[e] = !0), !1);
}
function pg(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return i
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function gg(e, t, n, i) {
    if (t === null || typeof t > 'u' || pg(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Tt(e, t, n, i, r, s, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = i),
        (this.attributeNamespace = r),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = s),
        (this.removeEmptyString = o);
}
var vt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        vt[e] = new Tt(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    vt[t] = new Tt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    vt[e] = new Tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    vt[e] = new Tt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        vt[e] = new Tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    vt[e] = new Tt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    vt[e] = new Tt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    vt[e] = new Tt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    vt[e] = new Tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var va = /[\-:]([a-z])/g;
function xa(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(va, xa);
        vt[t] = new Tt(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(va, xa);
        vt[t] = new Tt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(va, xa);
    vt[t] = new Tt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    vt[e] = new Tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new Tt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    vt[e] = new Tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _a(e, t, n, i) {
    var r = vt.hasOwnProperty(t) ? vt[t] : null;
    (r !== null
        ? r.type !== 0
        : i ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (gg(t, n, r, i) && (n = null),
        i || r === null
            ? hg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : r.mustUseProperty
            ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : '') : n)
            : ((t = r.attributeName),
              (i = r.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((r = r.type),
                    (n = r === 3 || (r === 4 && n === !0) ? '' : '' + n),
                    i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var Ie = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Rr = Symbol.for('react.element'),
    Bn = Symbol.for('react.portal'),
    jn = Symbol.for('react.fragment'),
    wa = Symbol.for('react.strict_mode'),
    hl = Symbol.for('react.profiler'),
    sd = Symbol.for('react.provider'),
    od = Symbol.for('react.context'),
    ka = Symbol.for('react.forward_ref'),
    pl = Symbol.for('react.suspense'),
    gl = Symbol.for('react.suspense_list'),
    Sa = Symbol.for('react.memo'),
    He = Symbol.for('react.lazy'),
    ld = Symbol.for('react.offscreen'),
    Eu = Symbol.iterator;
function xi(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Eu && e[Eu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var nt = Object.assign,
    Lo;
function zi(e) {
    if (Lo === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Lo = (t && t[1]) || '';
        }
    return (
        `
` +
        Lo +
        e
    );
}
var Oo = !1;
function Do(e, t) {
    if (!e || Oo) return '';
    Oo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var i = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    i = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                i = u;
            }
            e();
        }
    } catch (u) {
        if (u && i && typeof u.stack == 'string') {
            for (
                var r = u.stack.split(`
`),
                    s = i.stack.split(`
`),
                    o = r.length - 1,
                    l = s.length - 1;
                1 <= o && 0 <= l && r[o] !== s[l];

            )
                l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (r[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if ((o--, l--, 0 > l || r[o] !== s[l])) {
                                var a =
                                    `
` + r[o].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        a.includes('<anonymous>') &&
                                        (a = a.replace('<anonymous>', e.displayName)),
                                    a
                                );
                            }
                        while (1 <= o && 0 <= l);
                    break;
                }
        }
    } finally {
        (Oo = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? zi(e) : '';
}
function mg(e) {
    switch (e.tag) {
        case 5:
            return zi(e.type);
        case 16:
            return zi('Lazy');
        case 13:
            return zi('Suspense');
        case 19:
            return zi('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Do(e.type, !1)), e;
        case 11:
            return (e = Do(e.type.render, !1)), e;
        case 1:
            return (e = Do(e.type, !0)), e;
        default:
            return '';
    }
}
function ml(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case jn:
            return 'Fragment';
        case Bn:
            return 'Portal';
        case hl:
            return 'Profiler';
        case wa:
            return 'StrictMode';
        case pl:
            return 'Suspense';
        case gl:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case od:
                return (e.displayName || 'Context') + '.Consumer';
            case sd:
                return (e._context.displayName || 'Context') + '.Provider';
            case ka:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case Sa:
                return (t = e.displayName || null), t !== null ? t : ml(e.type) || 'Memo';
            case He:
                (t = e._payload), (e = e._init);
                try {
                    return ml(e(t));
                } catch {}
        }
    return null;
}
function yg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return ml(t);
        case 8:
            return t === wa ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function sn(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function ad(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function vg(e) {
    var t = ad(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        i = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var r = n.get,
            s = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return r.call(this);
                },
                set: function (o) {
                    (i = '' + o), s.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return i;
                },
                setValue: function (o) {
                    i = '' + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Nr(e) {
    e._valueTracker || (e._valueTracker = vg(e));
}
function ud(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        i = '';
    return (
        e && (i = ad(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = i),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Ps(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function yl(e, t) {
    var n = t.checked;
    return nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked,
    });
}
function Tu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        i = t.checked != null ? t.checked : t.defaultChecked;
    (n = sn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
        });
}
function cd(e, t) {
    (t = t.checked), t != null && _a(e, 'checked', t, !1);
}
function vl(e, t) {
    cd(e, t);
    var n = sn(t.value),
        i = t.type;
    if (n != null)
        i === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if (i === 'submit' || i === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value')
        ? xl(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && xl(e, t.type, sn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Lu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var i = t.type;
        if (!((i !== 'submit' && i !== 'reset') || (t.value !== void 0 && t.value !== null)))
            return;
        (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n);
}
function xl(e, t, n) {
    (t !== 'number' || Ps(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ri = Array.isArray;
function qn(e, t, n, i) {
    if (((e = e.options), t)) {
        t = {};
        for (var r = 0; r < n.length; r++) t['$' + n[r]] = !0;
        for (n = 0; n < e.length; n++)
            (r = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== r && (e[n].selected = r),
                r && i && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + sn(n), t = null, r = 0; r < e.length; r++) {
            if (e[r].value === n) {
                (e[r].selected = !0), i && (e[r].defaultSelected = !0);
                return;
            }
            t !== null || e[r].disabled || (t = e[r]);
        }
        t !== null && (t.selected = !0);
    }
}
function _l(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function Ou(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(M(92));
            if (Ri(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: sn(n) };
}
function fd(e, t) {
    var n = sn(t.value),
        i = sn(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        i != null && (e.defaultValue = '' + i);
}
function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function dd(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function wl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? dd(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
}
var Ar,
    hd = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, i, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, i, r);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
        else {
            for (
                Ar = Ar || document.createElement('div'),
                    Ar.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = Ar.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Vi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    xg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Vi).forEach(function (e) {
    xg.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vi[t] = Vi[e]);
    });
});
function pd(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n || typeof t != 'number' || t === 0 || (Vi.hasOwnProperty(e) && Vi[e])
        ? ('' + t).trim()
        : t + 'px';
}
function gd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var i = n.indexOf('--') === 0,
                r = pd(n, t[n], i);
            n === 'float' && (n = 'cssFloat'), i ? e.setProperty(n, r) : (e[n] = r);
        }
}
var _g = nt(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function kl(e, t) {
    if (t) {
        if (_g[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(M(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(M(62));
    }
}
function Sl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var Cl = null;
function Ca(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var bl = null,
    Jn = null,
    ti = null;
function zu(e) {
    if ((e = Er(e))) {
        if (typeof bl != 'function') throw Error(M(280));
        var t = e.stateNode;
        t && ((t = ho(t)), bl(e.stateNode, e.type, t));
    }
}
function md(e) {
    Jn ? (ti ? ti.push(e) : (ti = [e])) : (Jn = e);
}
function yd() {
    if (Jn) {
        var e = Jn,
            t = ti;
        if (((ti = Jn = null), zu(e), t)) for (e = 0; e < t.length; e++) zu(t[e]);
    }
}
function vd(e, t) {
    return e(t);
}
function xd() {}
var zo = !1;
function _d(e, t, n) {
    if (zo) return e(t, n);
    zo = !0;
    try {
        return vd(e, t, n);
    } finally {
        (zo = !1), (Jn !== null || ti !== null) && (xd(), yd());
    }
}
function rr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = ho(n);
    if (i === null) return null;
    n = i[t];
    t: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (i = !i.disabled) ||
                ((e = e.type),
                (i = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
                (e = !i);
            break t;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(M(231, t, typeof n));
    return n;
}
var Ml = !1;
if (De)
    try {
        var _i = {};
        Object.defineProperty(_i, 'passive', {
            get: function () {
                Ml = !0;
            },
        }),
            window.addEventListener('test', _i, _i),
            window.removeEventListener('test', _i, _i);
    } catch {
        Ml = !1;
    }
function wg(e, t, n, i, r, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Wi = !1,
    Es = null,
    Ts = !1,
    Pl = null,
    kg = {
        onError: function (e) {
            (Wi = !0), (Es = e);
        },
    };
function Sg(e, t, n, i, r, s, o, l, a) {
    (Wi = !1), (Es = null), wg.apply(kg, arguments);
}
function Cg(e, t, n, i, r, s, o, l, a) {
    if ((Sg.apply(this, arguments), Wi)) {
        if (Wi) {
            var u = Es;
            (Wi = !1), (Es = null);
        } else throw Error(M(198));
        Ts || ((Ts = !0), (Pl = u));
    }
}
function An(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function wd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
            return t.dehydrated;
    }
    return null;
}
function Ru(e) {
    if (An(e) !== e) throw Error(M(188));
}
function bg(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = An(e)), t === null)) throw Error(M(188));
        return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
        var r = n.return;
        if (r === null) break;
        var s = r.alternate;
        if (s === null) {
            if (((i = r.return), i !== null)) {
                n = i;
                continue;
            }
            break;
        }
        if (r.child === s.child) {
            for (s = r.child; s; ) {
                if (s === n) return Ru(r), e;
                if (s === i) return Ru(r), t;
                s = s.sibling;
            }
            throw Error(M(188));
        }
        if (n.return !== i.return) (n = r), (i = s);
        else {
            for (var o = !1, l = r.child; l; ) {
                if (l === n) {
                    (o = !0), (n = r), (i = s);
                    break;
                }
                if (l === i) {
                    (o = !0), (i = r), (n = s);
                    break;
                }
                l = l.sibling;
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        (o = !0), (n = s), (i = r);
                        break;
                    }
                    if (l === i) {
                        (o = !0), (i = s), (n = r);
                        break;
                    }
                    l = l.sibling;
                }
                if (!o) throw Error(M(189));
            }
        }
        if (n.alternate !== i) throw Error(M(190));
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t;
}
function kd(e) {
    return (e = bg(e)), e !== null ? Sd(e) : null;
}
function Sd(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Sd(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Cd = Ut.unstable_scheduleCallback,
    Nu = Ut.unstable_cancelCallback,
    Mg = Ut.unstable_shouldYield,
    Pg = Ut.unstable_requestPaint,
    st = Ut.unstable_now,
    Eg = Ut.unstable_getCurrentPriorityLevel,
    ba = Ut.unstable_ImmediatePriority,
    bd = Ut.unstable_UserBlockingPriority,
    Ls = Ut.unstable_NormalPriority,
    Tg = Ut.unstable_LowPriority,
    Md = Ut.unstable_IdlePriority,
    ao = null,
    _e = null;
function Lg(e) {
    if (_e && typeof _e.onCommitFiberRoot == 'function')
        try {
            _e.onCommitFiberRoot(ao, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var ue = Math.clz32 ? Math.clz32 : zg,
    Og = Math.log,
    Dg = Math.LN2;
function zg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Og(e) / Dg) | 0)) | 0;
}
var Ir = 64,
    Fr = 4194304;
function Ni(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Os(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        r = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~r;
        l !== 0 ? (i = Ni(l)) : ((s &= o), s !== 0 && (i = Ni(s)));
    } else (o = n & ~r), o !== 0 ? (i = Ni(o)) : s !== 0 && (i = Ni(s));
    if (i === 0) return 0;
    if (
        t !== 0 &&
        t !== i &&
        (t & r) === 0 &&
        ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
    )
        return t;
    if (((i & 4) !== 0 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= i; 0 < t; )
            (n = 31 - ue(t)), (r = 1 << n), (i |= e[n]), (t &= ~r);
    return i;
}
function Rg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Ng(e, t) {
    for (
        var n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, s = e.pendingLanes;
        0 < s;

    ) {
        var o = 31 - ue(s),
            l = 1 << o,
            a = r[o];
        a === -1
            ? ((l & n) === 0 || (l & i) !== 0) && (r[o] = Rg(l, t))
            : a <= t && (e.expiredLanes |= l),
            (s &= ~l);
    }
}
function El(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pd() {
    var e = Ir;
    return (Ir <<= 1), (Ir & 4194240) === 0 && (Ir = 64), e;
}
function Ro(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Mr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - ue(t)),
        (e[t] = n);
}
function Ag(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var r = 31 - ue(n),
            s = 1 << r;
        (t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s);
    }
}
function Ma(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var i = 31 - ue(n),
            r = 1 << i;
        (r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r);
    }
}
var V = 0;
function Ed(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
}
var Td,
    Pa,
    Ld,
    Od,
    Dd,
    Tl = !1,
    Hr = [],
    Ke = null,
    Xe = null,
    Ze = null,
    sr = new Map(),
    or = new Map(),
    je = [],
    Ig =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Au(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Ke = null;
            break;
        case 'dragenter':
        case 'dragleave':
            Xe = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Ze = null;
            break;
        case 'pointerover':
        case 'pointerout':
            sr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            or.delete(t.pointerId);
    }
}
function wi(e, t, n, i, r, s) {
    return e === null || e.nativeEvent !== s
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: i,
              nativeEvent: s,
              targetContainers: [r],
          }),
          t !== null && ((t = Er(t)), t !== null && Pa(t)),
          e)
        : ((e.eventSystemFlags |= i),
          (t = e.targetContainers),
          r !== null && t.indexOf(r) === -1 && t.push(r),
          e);
}
function Fg(e, t, n, i, r) {
    switch (t) {
        case 'focusin':
            return (Ke = wi(Ke, e, t, n, i, r)), !0;
        case 'dragenter':
            return (Xe = wi(Xe, e, t, n, i, r)), !0;
        case 'mouseover':
            return (Ze = wi(Ze, e, t, n, i, r)), !0;
        case 'pointerover':
            var s = r.pointerId;
            return sr.set(s, wi(sr.get(s) || null, e, t, n, i, r)), !0;
        case 'gotpointercapture':
            return (s = r.pointerId), or.set(s, wi(or.get(s) || null, e, t, n, i, r)), !0;
    }
    return !1;
}
function zd(e) {
    var t = wn(e.target);
    if (t !== null) {
        var n = An(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = wd(n)), t !== null)) {
                    (e.blockedOn = t),
                        Dd(e.priority, function () {
                            Ld(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function hs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var i = new n.constructor(n.type, n);
            (Cl = i), n.target.dispatchEvent(i), (Cl = null);
        } else return (t = Er(n)), t !== null && Pa(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Iu(e, t, n) {
    hs(e) && n.delete(t);
}
function Hg() {
    (Tl = !1),
        Ke !== null && hs(Ke) && (Ke = null),
        Xe !== null && hs(Xe) && (Xe = null),
        Ze !== null && hs(Ze) && (Ze = null),
        sr.forEach(Iu),
        or.forEach(Iu);
}
function ki(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Tl || ((Tl = !0), Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority, Hg)));
}
function lr(e) {
    function t(r) {
        return ki(r, e);
    }
    if (0 < Hr.length) {
        ki(Hr[0], e);
        for (var n = 1; n < Hr.length; n++) {
            var i = Hr[n];
            i.blockedOn === e && (i.blockedOn = null);
        }
    }
    for (
        Ke !== null && ki(Ke, e),
            Xe !== null && ki(Xe, e),
            Ze !== null && ki(Ze, e),
            sr.forEach(t),
            or.forEach(t),
            n = 0;
        n < je.length;
        n++
    )
        (i = je[n]), i.blockedOn === e && (i.blockedOn = null);
    for (; 0 < je.length && ((n = je[0]), n.blockedOn === null); )
        zd(n), n.blockedOn === null && je.shift();
}
var ei = Ie.ReactCurrentBatchConfig,
    Ds = !0;
function Bg(e, t, n, i) {
    var r = V,
        s = ei.transition;
    ei.transition = null;
    try {
        (V = 1), Ea(e, t, n, i);
    } finally {
        (V = r), (ei.transition = s);
    }
}
function jg(e, t, n, i) {
    var r = V,
        s = ei.transition;
    ei.transition = null;
    try {
        (V = 4), Ea(e, t, n, i);
    } finally {
        (V = r), (ei.transition = s);
    }
}
function Ea(e, t, n, i) {
    if (Ds) {
        var r = Ll(e, t, n, i);
        if (r === null) $o(e, t, i, zs, n), Au(e, i);
        else if (Fg(r, e, t, n, i)) i.stopPropagation();
        else if ((Au(e, i), t & 4 && -1 < Ig.indexOf(e))) {
            for (; r !== null; ) {
                var s = Er(r);
                if (
                    (s !== null && Td(s),
                    (s = Ll(e, t, n, i)),
                    s === null && $o(e, t, i, zs, n),
                    s === r)
                )
                    break;
                r = s;
            }
            r !== null && i.stopPropagation();
        } else $o(e, t, i, null, n);
    }
}
var zs = null;
function Ll(e, t, n, i) {
    if (((zs = null), (e = Ca(i)), (e = wn(e)), e !== null))
        if (((t = An(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = wd(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (zs = e), null;
}
function Rd(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (Eg()) {
                case ba:
                    return 1;
                case bd:
                    return 4;
                case Ls:
                case Tg:
                    return 16;
                case Md:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var We = null,
    Ta = null,
    ps = null;
function Nd() {
    if (ps) return ps;
    var e,
        t = Ta,
        n = t.length,
        i,
        r = 'value' in We ? We.value : We.textContent,
        s = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++);
    var o = n - e;
    for (i = 1; i <= o && t[n - i] === r[s - i]; i++);
    return (ps = r.slice(e, 1 < i ? 1 - i : void 0));
}
function gs(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Br() {
    return !0;
}
function Fu() {
    return !1;
}
function Qt(e) {
    function t(n, i, r, s, o) {
        (this._reactName = n),
            (this._targetInst = r),
            (this.type = i),
            (this.nativeEvent = s),
            (this.target = o),
            (this.currentTarget = null);
        for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
        return (
            (this.isDefaultPrevented = (
                s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
            )
                ? Br
                : Fu),
            (this.isPropagationStopped = Fu),
            this
        );
    }
    return (
        nt(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
                    (this.isDefaultPrevented = Br));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Br));
            },
            persist: function () {},
            isPersistent: Br,
        }),
        t
    );
}
var yi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    La = Qt(yi),
    Pr = nt({}, yi, { view: 0, detail: 0 }),
    Vg = Qt(Pr),
    No,
    Ao,
    Si,
    uo = nt({}, Pr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Oa,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Si &&
                      (Si && e.type === 'mousemove'
                          ? ((No = e.screenX - Si.screenX), (Ao = e.screenY - Si.screenY))
                          : (Ao = No = 0),
                      (Si = e)),
                  No);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Ao;
        },
    }),
    Hu = Qt(uo),
    Wg = nt({}, uo, { dataTransfer: 0 }),
    $g = Qt(Wg),
    Ug = nt({}, Pr, { relatedTarget: 0 }),
    Io = Qt(Ug),
    Yg = nt({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qg = Qt(Yg),
    Kg = nt({}, yi, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Xg = Qt(Kg),
    Zg = nt({}, yi, { data: 0 }),
    Bu = Qt(Zg),
    Gg = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    qg = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    Jg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function tm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jg[e]) ? !!t[e] : !1;
}
function Oa() {
    return tm;
}
var em = nt({}, Pr, {
        key: function (e) {
            if (e.key) {
                var t = Gg[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = gs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? qg[e.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Oa,
        charCode: function (e) {
            return e.type === 'keypress' ? gs(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? gs(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0;
        },
    }),
    nm = Qt(em),
    im = nt({}, uo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    ju = Qt(im),
    rm = nt({}, Pr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Oa,
    }),
    sm = Qt(rm),
    om = nt({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lm = Qt(om),
    am = nt({}, uo, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    um = Qt(am),
    cm = [9, 13, 27, 32],
    Da = De && 'CompositionEvent' in window,
    $i = null;
De && 'documentMode' in document && ($i = document.documentMode);
var fm = De && 'TextEvent' in window && !$i,
    Ad = De && (!Da || ($i && 8 < $i && 11 >= $i)),
    Vu = String.fromCharCode(32),
    Wu = !1;
function Id(e, t) {
    switch (e) {
        case 'keyup':
            return cm.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Fd(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vn = !1;
function dm(e, t) {
    switch (e) {
        case 'compositionend':
            return Fd(t);
        case 'keypress':
            return t.which !== 32 ? null : ((Wu = !0), Vu);
        case 'textInput':
            return (e = t.data), e === Vu && Wu ? null : e;
        default:
            return null;
    }
}
function hm(e, t) {
    if (Vn)
        return e === 'compositionend' || (!Da && Id(e, t))
            ? ((e = Nd()), (ps = Ta = We = null), (Vn = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return Ad && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var pm = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function $u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!pm[e.type] : t === 'textarea';
}
function Hd(e, t, n, i) {
    md(i),
        (t = Rs(t, 'onChange')),
        0 < t.length &&
            ((n = new La('onChange', 'change', null, n, i)), e.push({ event: n, listeners: t }));
}
var Ui = null,
    ar = null;
function gm(e) {
    Zd(e, 0);
}
function co(e) {
    var t = Un(e);
    if (ud(t)) return e;
}
function mm(e, t) {
    if (e === 'change') return t;
}
var Bd = !1;
if (De) {
    var Fo;
    if (De) {
        var Ho = 'oninput' in document;
        if (!Ho) {
            var Uu = document.createElement('div');
            Uu.setAttribute('oninput', 'return;'), (Ho = typeof Uu.oninput == 'function');
        }
        Fo = Ho;
    } else Fo = !1;
    Bd = Fo && (!document.documentMode || 9 < document.documentMode);
}
function Yu() {
    Ui && (Ui.detachEvent('onpropertychange', jd), (ar = Ui = null));
}
function jd(e) {
    if (e.propertyName === 'value' && co(ar)) {
        var t = [];
        Hd(t, ar, e, Ca(e)), _d(gm, t);
    }
}
function ym(e, t, n) {
    e === 'focusin'
        ? (Yu(), (Ui = t), (ar = n), Ui.attachEvent('onpropertychange', jd))
        : e === 'focusout' && Yu();
}
function vm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return co(ar);
}
function xm(e, t) {
    if (e === 'click') return co(t);
}
function _m(e, t) {
    if (e === 'input' || e === 'change') return co(t);
}
function wm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fe = typeof Object.is == 'function' ? Object.is : wm;
function ur(e, t) {
    if (fe(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
        i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!dl.call(t, r) || !fe(e[r], t[r])) return !1;
    }
    return !0;
}
function Qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ku(e, t) {
    var n = Qu(e);
    e = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (((i = e + n.textContent.length), e <= t && i >= t))
                return { node: n, offset: t - e };
            e = i;
        }
        t: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break t;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Qu(n);
    }
}
function Vd(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Vd(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Wd() {
    for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ps(e.document);
    }
    return t;
}
function za(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function km(e) {
    var t = Wd(),
        n = e.focusedElem,
        i = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vd(n.ownerDocument.documentElement, n)) {
        if (i !== null && za(n)) {
            if (((t = i.start), (e = i.end), e === void 0 && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var r = n.textContent.length,
                    s = Math.min(i.start, r);
                (i = i.end === void 0 ? s : Math.min(i.end, r)),
                    !e.extend && s > i && ((r = i), (i = s), (s = r)),
                    (r = Ku(n, s));
                var o = Ku(n, i);
                r &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== r.node ||
                        e.anchorOffset !== r.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(r.node, r.offset),
                    e.removeAllRanges(),
                    s > i
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var Sm = De && 'documentMode' in document && 11 >= document.documentMode,
    Wn = null,
    Ol = null,
    Yi = null,
    Dl = !1;
function Xu(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dl ||
        Wn == null ||
        Wn !== Ps(i) ||
        ((i = Wn),
        'selectionStart' in i && za(i)
            ? (i = { start: i.selectionStart, end: i.selectionEnd })
            : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
              (i = {
                  anchorNode: i.anchorNode,
                  anchorOffset: i.anchorOffset,
                  focusNode: i.focusNode,
                  focusOffset: i.focusOffset,
              })),
        (Yi && ur(Yi, i)) ||
            ((Yi = i),
            (i = Rs(Ol, 'onSelect')),
            0 < i.length &&
                ((t = new La('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: i }),
                (t.target = Wn))));
}
function jr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var $n = {
        animationend: jr('Animation', 'AnimationEnd'),
        animationiteration: jr('Animation', 'AnimationIteration'),
        animationstart: jr('Animation', 'AnimationStart'),
        transitionend: jr('Transition', 'TransitionEnd'),
    },
    Bo = {},
    $d = {};
De &&
    (($d = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete $n.animationend.animation,
        delete $n.animationiteration.animation,
        delete $n.animationstart.animation),
    'TransitionEvent' in window || delete $n.transitionend.transition);
function fo(e) {
    if (Bo[e]) return Bo[e];
    if (!$n[e]) return e;
    var t = $n[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in $d) return (Bo[e] = t[n]);
    return e;
}
var Ud = fo('animationend'),
    Yd = fo('animationiteration'),
    Qd = fo('animationstart'),
    Kd = fo('transitionend'),
    Xd = new Map(),
    Zu =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function an(e, t) {
    Xd.set(e, t), Nn(t, [e]);
}
for (var jo = 0; jo < Zu.length; jo++) {
    var Vo = Zu[jo],
        Cm = Vo.toLowerCase(),
        bm = Vo[0].toUpperCase() + Vo.slice(1);
    an(Cm, 'on' + bm);
}
an(Ud, 'onAnimationEnd');
an(Yd, 'onAnimationIteration');
an(Qd, 'onAnimationStart');
an('dblclick', 'onDoubleClick');
an('focusin', 'onFocus');
an('focusout', 'onBlur');
an(Kd, 'onTransitionEnd');
oi('onMouseEnter', ['mouseout', 'mouseover']);
oi('onMouseLeave', ['mouseout', 'mouseover']);
oi('onPointerEnter', ['pointerout', 'pointerover']);
oi('onPointerLeave', ['pointerout', 'pointerover']);
Nn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Nn(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
Nn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Nn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Nn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Nn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ai =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    Mm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ai));
function Gu(e, t, n) {
    var i = e.type || 'unknown-event';
    (e.currentTarget = n), Cg(i, t, void 0, e), (e.currentTarget = null);
}
function Zd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var i = e[n],
            r = i.event;
        i = i.listeners;
        t: {
            var s = void 0;
            if (t)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var l = i[o],
                        a = l.instance,
                        u = l.currentTarget;
                    if (((l = l.listener), a !== s && r.isPropagationStopped())) break t;
                    Gu(r, l, u), (s = a);
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (
                        ((l = i[o]),
                        (a = l.instance),
                        (u = l.currentTarget),
                        (l = l.listener),
                        a !== s && r.isPropagationStopped())
                    )
                        break t;
                    Gu(r, l, u), (s = a);
                }
        }
    }
    if (Ts) throw ((e = Pl), (Ts = !1), (Pl = null), e);
}
function K(e, t) {
    var n = t[Il];
    n === void 0 && (n = t[Il] = new Set());
    var i = e + '__bubble';
    n.has(i) || (Gd(t, e, 2, !1), n.add(i));
}
function Wo(e, t, n) {
    var i = 0;
    t && (i |= 4), Gd(n, e, i, t);
}
var Vr = '_reactListening' + Math.random().toString(36).slice(2);
function cr(e) {
    if (!e[Vr]) {
        (e[Vr] = !0),
            rd.forEach(function (n) {
                n !== 'selectionchange' && (Mm.has(n) || Wo(n, !1, e), Wo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vr] || ((t[Vr] = !0), Wo('selectionchange', !1, t));
    }
}
function Gd(e, t, n, i) {
    switch (Rd(t)) {
        case 1:
            var r = Bg;
            break;
        case 4:
            r = jg;
            break;
        default:
            r = Ea;
    }
    (n = r.bind(null, t, n, e)),
        (r = void 0),
        !Ml || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (r = !0),
        i
            ? r !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: r })
                : e.addEventListener(t, n, !0)
            : r !== void 0
            ? e.addEventListener(t, n, { passive: r })
            : e.addEventListener(t, n, !1);
}
function $o(e, t, n, i, r) {
    var s = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        t: for (;;) {
            if (i === null) return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var l = i.stateNode.containerInfo;
                if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
                if (o === 4)
                    for (o = i.return; o !== null; ) {
                        var a = o.tag;
                        if (
                            (a === 3 || a === 4) &&
                            ((a = o.stateNode.containerInfo),
                            a === r || (a.nodeType === 8 && a.parentNode === r))
                        )
                            return;
                        o = o.return;
                    }
                for (; l !== null; ) {
                    if (((o = wn(l)), o === null)) return;
                    if (((a = o.tag), a === 5 || a === 6)) {
                        i = s = o;
                        continue t;
                    }
                    l = l.parentNode;
                }
            }
            i = i.return;
        }
    _d(function () {
        var u = s,
            c = Ca(n),
            f = [];
        t: {
            var d = Xd.get(e);
            if (d !== void 0) {
                var h = La,
                    m = e;
                switch (e) {
                    case 'keypress':
                        if (gs(n) === 0) break t;
                    case 'keydown':
                    case 'keyup':
                        h = nm;
                        break;
                    case 'focusin':
                        (m = 'focus'), (h = Io);
                        break;
                    case 'focusout':
                        (m = 'blur'), (h = Io);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        h = Io;
                        break;
                    case 'click':
                        if (n.button === 2) break t;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        h = Hu;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        h = $g;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        h = sm;
                        break;
                    case Ud:
                    case Yd:
                    case Qd:
                        h = Qg;
                        break;
                    case Kd:
                        h = lm;
                        break;
                    case 'scroll':
                        h = Vg;
                        break;
                    case 'wheel':
                        h = um;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        h = Xg;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        h = ju;
                }
                var y = (t & 4) !== 0,
                    x = !y && e === 'scroll',
                    p = y ? (d !== null ? d + 'Capture' : null) : d;
                y = [];
                for (var g = u, v; g !== null; ) {
                    v = g;
                    var _ = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            _ !== null &&
                            ((v = _),
                            p !== null && ((_ = rr(g, p)), _ != null && y.push(fr(g, _, v)))),
                        x)
                    )
                        break;
                    g = g.return;
                }
                0 < y.length && ((d = new h(d, m, null, n, c)), f.push({ event: d, listeners: y }));
            }
        }
        if ((t & 7) === 0) {
            t: {
                if (
                    ((d = e === 'mouseover' || e === 'pointerover'),
                    (h = e === 'mouseout' || e === 'pointerout'),
                    d && n !== Cl && (m = n.relatedTarget || n.fromElement) && (wn(m) || m[ze]))
                )
                    break t;
                if (
                    (h || d) &&
                    ((d =
                        c.window === c
                            ? c
                            : (d = c.ownerDocument)
                            ? d.defaultView || d.parentWindow
                            : window),
                    h
                        ? ((m = n.relatedTarget || n.toElement),
                          (h = u),
                          (m = m ? wn(m) : null),
                          m !== null &&
                              ((x = An(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                              (m = null))
                        : ((h = null), (m = u)),
                    h !== m)
                ) {
                    if (
                        ((y = Hu),
                        (_ = 'onMouseLeave'),
                        (p = 'onMouseEnter'),
                        (g = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((y = ju),
                            (_ = 'onPointerLeave'),
                            (p = 'onPointerEnter'),
                            (g = 'pointer')),
                        (x = h == null ? d : Un(h)),
                        (v = m == null ? d : Un(m)),
                        (d = new y(_, g + 'leave', h, n, c)),
                        (d.target = x),
                        (d.relatedTarget = v),
                        (_ = null),
                        wn(c) === u &&
                            ((y = new y(p, g + 'enter', m, n, c)),
                            (y.target = v),
                            (y.relatedTarget = x),
                            (_ = y)),
                        (x = _),
                        h && m)
                    )
                        e: {
                            for (y = h, p = m, g = 0, v = y; v; v = Fn(v)) g++;
                            for (v = 0, _ = p; _; _ = Fn(_)) v++;
                            for (; 0 < g - v; ) (y = Fn(y)), g--;
                            for (; 0 < v - g; ) (p = Fn(p)), v--;
                            for (; g--; ) {
                                if (y === p || (p !== null && y === p.alternate)) break e;
                                (y = Fn(y)), (p = Fn(p));
                            }
                            y = null;
                        }
                    else y = null;
                    h !== null && qu(f, d, h, y, !1),
                        m !== null && x !== null && qu(f, x, m, y, !0);
                }
            }
            t: {
                if (
                    ((d = u ? Un(u) : window),
                    (h = d.nodeName && d.nodeName.toLowerCase()),
                    h === 'select' || (h === 'input' && d.type === 'file'))
                )
                    var w = mm;
                else if ($u(d))
                    if (Bd) w = _m;
                    else {
                        w = vm;
                        var k = ym;
                    }
                else
                    (h = d.nodeName) &&
                        h.toLowerCase() === 'input' &&
                        (d.type === 'checkbox' || d.type === 'radio') &&
                        (w = xm);
                if (w && (w = w(e, u))) {
                    Hd(f, w, n, c);
                    break t;
                }
                k && k(e, d, u),
                    e === 'focusout' &&
                        (k = d._wrapperState) &&
                        k.controlled &&
                        d.type === 'number' &&
                        xl(d, 'number', d.value);
            }
            switch (((k = u ? Un(u) : window), e)) {
                case 'focusin':
                    ($u(k) || k.contentEditable === 'true') && ((Wn = k), (Ol = u), (Yi = null));
                    break;
                case 'focusout':
                    Yi = Ol = Wn = null;
                    break;
                case 'mousedown':
                    Dl = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Dl = !1), Xu(f, n, c);
                    break;
                case 'selectionchange':
                    if (Sm) break;
                case 'keydown':
                case 'keyup':
                    Xu(f, n, c);
            }
            var S;
            if (Da)
                t: {
                    switch (e) {
                        case 'compositionstart':
                            var C = 'onCompositionStart';
                            break t;
                        case 'compositionend':
                            C = 'onCompositionEnd';
                            break t;
                        case 'compositionupdate':
                            C = 'onCompositionUpdate';
                            break t;
                    }
                    C = void 0;
                }
            else
                Vn
                    ? Id(e, n) && (C = 'onCompositionEnd')
                    : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
            C &&
                (Ad &&
                    n.locale !== 'ko' &&
                    (Vn || C !== 'onCompositionStart'
                        ? C === 'onCompositionEnd' && Vn && (S = Nd())
                        : ((We = c), (Ta = 'value' in We ? We.value : We.textContent), (Vn = !0))),
                (k = Rs(u, C)),
                0 < k.length &&
                    ((C = new Bu(C, e, null, n, c)),
                    f.push({ event: C, listeners: k }),
                    S ? (C.data = S) : ((S = Fd(n)), S !== null && (C.data = S)))),
                (S = fm ? dm(e, n) : hm(e, n)) &&
                    ((u = Rs(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((c = new Bu('onBeforeInput', 'beforeinput', null, n, c)),
                        f.push({ event: c, listeners: u }),
                        (c.data = S)));
        }
        Zd(f, t);
    });
}
function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Rs(e, t) {
    for (var n = t + 'Capture', i = []; e !== null; ) {
        var r = e,
            s = r.stateNode;
        r.tag === 5 &&
            s !== null &&
            ((r = s),
            (s = rr(e, n)),
            s != null && i.unshift(fr(e, s, r)),
            (s = rr(e, t)),
            s != null && i.push(fr(e, s, r))),
            (e = e.return);
    }
    return i;
}
function Fn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function qu(e, t, n, i, r) {
    for (var s = t._reactName, o = []; n !== null && n !== i; ) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === i) break;
        l.tag === 5 &&
            u !== null &&
            ((l = u),
            r
                ? ((a = rr(n, s)), a != null && o.unshift(fr(n, a, l)))
                : r || ((a = rr(n, s)), a != null && o.push(fr(n, a, l)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var Pm = /\r\n?/g,
    Em = /\u0000|\uFFFD/g;
function Ju(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            Pm,
            `
`
        )
        .replace(Em, '');
}
function Wr(e, t, n) {
    if (((t = Ju(t)), Ju(e) !== t && n)) throw Error(M(425));
}
function Ns() {}
var zl = null,
    Rl = null;
function Nl(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Al = typeof setTimeout == 'function' ? setTimeout : void 0,
    Tm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    tc = typeof Promise == 'function' ? Promise : void 0,
    Lm =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof tc < 'u'
            ? function (e) {
                  return tc.resolve(null).then(e).catch(Om);
              }
            : Al;
function Om(e) {
    setTimeout(function () {
        throw e;
    });
}
function Uo(e, t) {
    var n = t,
        i = 0;
    do {
        var r = n.nextSibling;
        if ((e.removeChild(n), r && r.nodeType === 8))
            if (((n = r.data), n === '/$')) {
                if (i === 0) {
                    e.removeChild(r), lr(t);
                    return;
                }
                i--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || i++;
        n = r;
    } while (n);
    lr(t);
}
function Ge(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function ec(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var vi = Math.random().toString(36).slice(2),
    xe = '__reactFiber$' + vi,
    dr = '__reactProps$' + vi,
    ze = '__reactContainer$' + vi,
    Il = '__reactEvents$' + vi,
    Dm = '__reactListeners$' + vi,
    zm = '__reactHandles$' + vi;
function wn(e) {
    var t = e[xe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ze] || n[xe])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = ec(e); e !== null; ) {
                    if ((n = e[xe])) return n;
                    e = ec(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Er(e) {
    return (
        (e = e[xe] || e[ze]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
}
function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33));
}
function ho(e) {
    return e[dr] || null;
}
var Fl = [],
    Yn = -1;
function un(e) {
    return { current: e };
}
function Z(e) {
    0 > Yn || ((e.current = Fl[Yn]), (Fl[Yn] = null), Yn--);
}
function Y(e, t) {
    Yn++, (Fl[Yn] = e.current), (e.current = t);
}
var on = {},
    Ct = un(on),
    Nt = un(!1),
    En = on;
function li(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        s;
    for (s in n) r[s] = t[s];
    return (
        i &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = r)),
        r
    );
}
function At(e) {
    return (e = e.childContextTypes), e != null;
}
function As() {
    Z(Nt), Z(Ct);
}
function nc(e, t, n) {
    if (Ct.current !== on) throw Error(M(168));
    Y(Ct, t), Y(Nt, n);
}
function qd(e, t, n) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != 'function')) return n;
    i = i.getChildContext();
    for (var r in i) if (!(r in t)) throw Error(M(108, yg(e) || 'Unknown', r));
    return nt({}, n, i);
}
function Is(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
        (En = Ct.current),
        Y(Ct, e),
        Y(Nt, Nt.current),
        !0
    );
}
function ic(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(M(169));
    n
        ? ((e = qd(e, t, En)),
          (i.__reactInternalMemoizedMergedChildContext = e),
          Z(Nt),
          Z(Ct),
          Y(Ct, e))
        : Z(Nt),
        Y(Nt, n);
}
var Pe = null,
    po = !1,
    Yo = !1;
function Jd(e) {
    Pe === null ? (Pe = [e]) : Pe.push(e);
}
function Rm(e) {
    (po = !0), Jd(e);
}
function cn() {
    if (!Yo && Pe !== null) {
        Yo = !0;
        var e = 0,
            t = V;
        try {
            var n = Pe;
            for (V = 1; e < n.length; e++) {
                var i = n[e];
                do i = i(!0);
                while (i !== null);
            }
            (Pe = null), (po = !1);
        } catch (r) {
            throw (Pe !== null && (Pe = Pe.slice(e + 1)), Cd(ba, cn), r);
        } finally {
            (V = t), (Yo = !1);
        }
    }
    return null;
}
var Qn = [],
    Kn = 0,
    Fs = null,
    Hs = 0,
    Xt = [],
    Zt = 0,
    Tn = null,
    Te = 1,
    Le = '';
function yn(e, t) {
    (Qn[Kn++] = Hs), (Qn[Kn++] = Fs), (Fs = e), (Hs = t);
}
function th(e, t, n) {
    (Xt[Zt++] = Te), (Xt[Zt++] = Le), (Xt[Zt++] = Tn), (Tn = e);
    var i = Te;
    e = Le;
    var r = 32 - ue(i) - 1;
    (i &= ~(1 << r)), (n += 1);
    var s = 32 - ue(t) + r;
    if (30 < s) {
        var o = r - (r % 5);
        (s = (i & ((1 << o) - 1)).toString(32)),
            (i >>= o),
            (r -= o),
            (Te = (1 << (32 - ue(t) + r)) | (n << r) | i),
            (Le = s + e);
    } else (Te = (1 << s) | (n << r) | i), (Le = e);
}
function Ra(e) {
    e.return !== null && (yn(e, 1), th(e, 1, 0));
}
function Na(e) {
    for (; e === Fs; ) (Fs = Qn[--Kn]), (Qn[Kn] = null), (Hs = Qn[--Kn]), (Qn[Kn] = null);
    for (; e === Tn; )
        (Tn = Xt[--Zt]),
            (Xt[Zt] = null),
            (Le = Xt[--Zt]),
            (Xt[Zt] = null),
            (Te = Xt[--Zt]),
            (Xt[Zt] = null);
}
var $t = null,
    Wt = null,
    G = !1,
    ae = null;
function eh(e, t) {
    var n = Gt(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), ($t = e), (Wt = Ge(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), ($t = e), (Wt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Tn !== null ? { id: Te, overflow: Le } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Gt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      ($t = e),
                      (Wt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bl(e) {
    if (G) {
        var t = Wt;
        if (t) {
            var n = t;
            if (!rc(e, t)) {
                if (Hl(e)) throw Error(M(418));
                t = Ge(n.nextSibling);
                var i = $t;
                t && rc(e, t) ? eh(i, n) : ((e.flags = (e.flags & -4097) | 2), (G = !1), ($t = e));
            }
        } else {
            if (Hl(e)) throw Error(M(418));
            (e.flags = (e.flags & -4097) | 2), (G = !1), ($t = e);
        }
    }
}
function sc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    $t = e;
}
function $r(e) {
    if (e !== $t) return !1;
    if (!G) return sc(e), (G = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== 'head' && t !== 'body' && !Nl(e.type, e.memoizedProps))),
        t && (t = Wt))
    ) {
        if (Hl(e)) throw (nh(), Error(M(418)));
        for (; t; ) eh(e, t), (t = Ge(t.nextSibling));
    }
    if ((sc(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(M(317));
        t: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            Wt = Ge(e.nextSibling);
                            break t;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            Wt = null;
        }
    } else Wt = $t ? Ge(e.stateNode.nextSibling) : null;
    return !0;
}
function nh() {
    for (var e = Wt; e; ) e = Ge(e.nextSibling);
}
function ai() {
    (Wt = $t = null), (G = !1);
}
function Aa(e) {
    ae === null ? (ae = [e]) : ae.push(e);
}
var Nm = Ie.ReactCurrentBatchConfig;
function se(e, t) {
    if (e && e.defaultProps) {
        (t = nt({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Bs = un(null),
    js = null,
    Xn = null,
    Ia = null;
function Fa() {
    Ia = Xn = js = null;
}
function Ha(e) {
    var t = Bs.current;
    Z(Bs), (e._currentValue = t);
}
function jl(e, t, n) {
    for (; e !== null; ) {
        var i = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
                : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function ni(e, t) {
    (js = e),
        (Ia = Xn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            ((e.lanes & t) !== 0 && (zt = !0), (e.firstContext = null));
}
function ne(e) {
    var t = e._currentValue;
    if (Ia !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
            if (js === null) throw Error(M(308));
            (Xn = e), (js.dependencies = { lanes: 0, firstContext: e });
        } else Xn = Xn.next = e;
    return t;
}
var kn = null;
function Ba(e) {
    kn === null ? (kn = [e]) : kn.push(e);
}
function ih(e, t, n, i) {
    var r = t.interleaved;
    return (
        r === null ? ((n.next = n), Ba(t)) : ((n.next = r.next), (r.next = n)),
        (t.interleaved = n),
        Re(e, i)
    );
}
function Re(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Be = !1;
function ja(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function rh(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Oe(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qe(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (H & 2) !== 0)) {
        var r = i.pending;
        return (
            r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (i.pending = t), Re(e, n)
        );
    }
    return (
        (r = i.interleaved),
        r === null ? ((t.next = t), Ba(i)) : ((t.next = r.next), (r.next = t)),
        (i.interleaved = t),
        Re(e, n)
    );
}
function ms(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var i = t.lanes;
        (i &= e.pendingLanes), (n |= i), (t.lanes = n), Ma(e, n);
    }
}
function oc(e, t) {
    var n = e.updateQueue,
        i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
        var r = null,
            s = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                s === null ? (r = s = o) : (s = s.next = o), (n = n.next);
            } while (n !== null);
            s === null ? (r = s = t) : (s = s.next = t);
        } else r = s = t;
        (n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: s,
            shared: i.shared,
            effects: i.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Vs(e, t, n, i) {
    var r = e.updateQueue;
    Be = !1;
    var s = r.firstBaseUpdate,
        o = r.lastBaseUpdate,
        l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l,
            u = a.next;
        (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (l = c.lastBaseUpdate),
            l !== o &&
                (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
    }
    if (s !== null) {
        var f = r.baseState;
        (o = 0), (c = u = a = null), (l = s);
        do {
            var d = l.lane,
                h = l.eventTime;
            if ((i & d) === d) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: h,
                            lane: 0,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null,
                        });
                t: {
                    var m = e,
                        y = l;
                    switch (((d = t), (h = n), y.tag)) {
                        case 1:
                            if (((m = y.payload), typeof m == 'function')) {
                                f = m.call(h, f, d);
                                break t;
                            }
                            f = m;
                            break t;
                        case 3:
                            m.flags = (m.flags & -65537) | 128;
                        case 0:
                            if (
                                ((m = y.payload),
                                (d = typeof m == 'function' ? m.call(h, f, d) : m),
                                d == null)
                            )
                                break t;
                            f = nt({}, f, d);
                            break t;
                        case 2:
                            Be = !0;
                    }
                }
                l.callback !== null &&
                    l.lane !== 0 &&
                    ((e.flags |= 64), (d = r.effects), d === null ? (r.effects = [l]) : d.push(l));
            } else
                (h = {
                    eventTime: h,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                }),
                    c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
                    (o |= d);
            if (((l = l.next), l === null)) {
                if (((l = r.shared.pending), l === null)) break;
                (d = l),
                    (l = d.next),
                    (d.next = null),
                    (r.lastBaseUpdate = d),
                    (r.shared.pending = null);
            }
        } while (1);
        if (
            (c === null && (a = f),
            (r.baseState = a),
            (r.firstBaseUpdate = u),
            (r.lastBaseUpdate = c),
            (t = r.shared.interleaved),
            t !== null)
        ) {
            r = t;
            do (o |= r.lane), (r = r.next);
            while (r !== t);
        } else s === null && (r.shared.lanes = 0);
        (On |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function lc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var i = e[t],
                r = i.callback;
            if (r !== null) {
                if (((i.callback = null), (i = n), typeof r != 'function')) throw Error(M(191, r));
                r.call(i);
            }
        }
}
var sh = new id.Component().refs;
function Vl(e, t, n, i) {
    (t = e.memoizedState),
        (n = n(i, t)),
        (n = n == null ? t : nt({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var go = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? An(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var i = Pt(),
            r = tn(e),
            s = Oe(i, r);
        (s.payload = t),
            n != null && (s.callback = n),
            (t = qe(e, s, r)),
            t !== null && (ce(t, e, r, i), ms(t, e, r));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var i = Pt(),
            r = tn(e),
            s = Oe(i, r);
        (s.tag = 1),
            (s.payload = t),
            n != null && (s.callback = n),
            (t = qe(e, s, r)),
            t !== null && (ce(t, e, r, i), ms(t, e, r));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Pt(),
            i = tn(e),
            r = Oe(n, i);
        (r.tag = 2),
            t != null && (r.callback = t),
            (t = qe(e, r, i)),
            t !== null && (ce(t, e, i, n), ms(t, e, i));
    },
};
function ac(e, t, n, i, r, s, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(i, s, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !ur(n, i) || !ur(r, s)
            : !0
    );
}
function oh(e, t, n) {
    var i = !1,
        r = on,
        s = t.contextType;
    return (
        typeof s == 'object' && s !== null
            ? (s = ne(s))
            : ((r = At(t) ? En : Ct.current),
              (i = t.contextTypes),
              (s = (i = i != null) ? li(e, r) : on)),
        (t = new t(n, s)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = go),
        (e.stateNode = t),
        (t._reactInternals = e),
        i &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = r),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
        t
    );
}
function uc(e, t, n, i) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, i),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, i),
        t.state !== e && go.enqueueReplaceState(t, t.state, null);
}
function Wl(e, t, n, i) {
    var r = e.stateNode;
    (r.props = n), (r.state = e.memoizedState), (r.refs = sh), ja(e);
    var s = t.contextType;
    typeof s == 'object' && s !== null
        ? (r.context = ne(s))
        : ((s = At(t) ? En : Ct.current), (r.context = li(e, s))),
        (r.state = e.memoizedState),
        (s = t.getDerivedStateFromProps),
        typeof s == 'function' && (Vl(e, t, s, n), (r.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof r.getSnapshotBeforeUpdate == 'function' ||
            (typeof r.UNSAFE_componentWillMount != 'function' &&
                typeof r.componentWillMount != 'function') ||
            ((t = r.state),
            typeof r.componentWillMount == 'function' && r.componentWillMount(),
            typeof r.UNSAFE_componentWillMount == 'function' && r.UNSAFE_componentWillMount(),
            t !== r.state && go.enqueueReplaceState(r, r.state, null),
            Vs(e, n, r, i),
            (r.state = e.memoizedState)),
        typeof r.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ci(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(M(309));
                var i = n.stateNode;
            }
            if (!i) throw Error(M(147, e));
            var r = i,
                s = '' + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === s
                ? t.ref
                : ((t = function (o) {
                      var l = r.refs;
                      l === sh && (l = r.refs = {}), o === null ? delete l[s] : (l[s] = o);
                  }),
                  (t._stringRef = s),
                  t);
        }
        if (typeof e != 'string') throw Error(M(284));
        if (!n._owner) throw Error(M(290, e));
    }
    return e;
}
function Ur(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            M(
                31,
                e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e
            )
        ))
    );
}
function cc(e) {
    var t = e._init;
    return t(e._payload);
}
function lh(e) {
    function t(p, g) {
        if (e) {
            var v = p.deletions;
            v === null ? ((p.deletions = [g]), (p.flags |= 16)) : v.push(g);
        }
    }
    function n(p, g) {
        if (!e) return null;
        for (; g !== null; ) t(p, g), (g = g.sibling);
        return null;
    }
    function i(p, g) {
        for (p = new Map(); g !== null; )
            g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
        return p;
    }
    function r(p, g) {
        return (p = en(p, g)), (p.index = 0), (p.sibling = null), p;
    }
    function s(p, g, v) {
        return (
            (p.index = v),
            e
                ? ((v = p.alternate),
                  v !== null
                      ? ((v = v.index), v < g ? ((p.flags |= 2), g) : v)
                      : ((p.flags |= 2), g))
                : ((p.flags |= 1048576), g)
        );
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function l(p, g, v, _) {
        return g === null || g.tag !== 6
            ? ((g = Jo(v, p.mode, _)), (g.return = p), g)
            : ((g = r(g, v)), (g.return = p), g);
    }
    function a(p, g, v, _) {
        var w = v.type;
        return w === jn
            ? c(p, g, v.props.children, _, v.key)
            : g !== null &&
              (g.elementType === w ||
                  (typeof w == 'object' && w !== null && w.$$typeof === He && cc(w) === g.type))
            ? ((_ = r(g, v.props)), (_.ref = Ci(p, g, v)), (_.return = p), _)
            : ((_ = ks(v.type, v.key, v.props, null, p.mode, _)),
              (_.ref = Ci(p, g, v)),
              (_.return = p),
              _);
    }
    function u(p, g, v, _) {
        return g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== v.containerInfo ||
            g.stateNode.implementation !== v.implementation
            ? ((g = tl(v, p.mode, _)), (g.return = p), g)
            : ((g = r(g, v.children || [])), (g.return = p), g);
    }
    function c(p, g, v, _, w) {
        return g === null || g.tag !== 7
            ? ((g = Mn(v, p.mode, _, w)), (g.return = p), g)
            : ((g = r(g, v)), (g.return = p), g);
    }
    function f(p, g, v) {
        if ((typeof g == 'string' && g !== '') || typeof g == 'number')
            return (g = Jo('' + g, p.mode, v)), (g.return = p), g;
        if (typeof g == 'object' && g !== null) {
            switch (g.$$typeof) {
                case Rr:
                    return (
                        (v = ks(g.type, g.key, g.props, null, p.mode, v)),
                        (v.ref = Ci(p, null, g)),
                        (v.return = p),
                        v
                    );
                case Bn:
                    return (g = tl(g, p.mode, v)), (g.return = p), g;
                case He:
                    var _ = g._init;
                    return f(p, _(g._payload), v);
            }
            if (Ri(g) || xi(g)) return (g = Mn(g, p.mode, v, null)), (g.return = p), g;
            Ur(p, g);
        }
        return null;
    }
    function d(p, g, v, _) {
        var w = g !== null ? g.key : null;
        if ((typeof v == 'string' && v !== '') || typeof v == 'number')
            return w !== null ? null : l(p, g, '' + v, _);
        if (typeof v == 'object' && v !== null) {
            switch (v.$$typeof) {
                case Rr:
                    return v.key === w ? a(p, g, v, _) : null;
                case Bn:
                    return v.key === w ? u(p, g, v, _) : null;
                case He:
                    return (w = v._init), d(p, g, w(v._payload), _);
            }
            if (Ri(v) || xi(v)) return w !== null ? null : c(p, g, v, _, null);
            Ur(p, v);
        }
        return null;
    }
    function h(p, g, v, _, w) {
        if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
            return (p = p.get(v) || null), l(g, p, '' + _, w);
        if (typeof _ == 'object' && _ !== null) {
            switch (_.$$typeof) {
                case Rr:
                    return (p = p.get(_.key === null ? v : _.key) || null), a(g, p, _, w);
                case Bn:
                    return (p = p.get(_.key === null ? v : _.key) || null), u(g, p, _, w);
                case He:
                    var k = _._init;
                    return h(p, g, v, k(_._payload), w);
            }
            if (Ri(_) || xi(_)) return (p = p.get(v) || null), c(g, p, _, w, null);
            Ur(g, _);
        }
        return null;
    }
    function m(p, g, v, _) {
        for (
            var w = null, k = null, S = g, C = (g = 0), L = null;
            S !== null && C < v.length;
            C++
        ) {
            S.index > C ? ((L = S), (S = null)) : (L = S.sibling);
            var E = d(p, S, v[C], _);
            if (E === null) {
                S === null && (S = L);
                break;
            }
            e && S && E.alternate === null && t(p, S),
                (g = s(E, g, C)),
                k === null ? (w = E) : (k.sibling = E),
                (k = E),
                (S = L);
        }
        if (C === v.length) return n(p, S), G && yn(p, C), w;
        if (S === null) {
            for (; C < v.length; C++)
                (S = f(p, v[C], _)),
                    S !== null &&
                        ((g = s(S, g, C)), k === null ? (w = S) : (k.sibling = S), (k = S));
            return G && yn(p, C), w;
        }
        for (S = i(p, S); C < v.length; C++)
            (L = h(S, p, C, v[C], _)),
                L !== null &&
                    (e && L.alternate !== null && S.delete(L.key === null ? C : L.key),
                    (g = s(L, g, C)),
                    k === null ? (w = L) : (k.sibling = L),
                    (k = L));
        return (
            e &&
                S.forEach(function (O) {
                    return t(p, O);
                }),
            G && yn(p, C),
            w
        );
    }
    function y(p, g, v, _) {
        var w = xi(v);
        if (typeof w != 'function') throw Error(M(150));
        if (((v = w.call(v)), v == null)) throw Error(M(151));
        for (
            var k = (w = null), S = g, C = (g = 0), L = null, E = v.next();
            S !== null && !E.done;
            C++, E = v.next()
        ) {
            S.index > C ? ((L = S), (S = null)) : (L = S.sibling);
            var O = d(p, S, E.value, _);
            if (O === null) {
                S === null && (S = L);
                break;
            }
            e && S && O.alternate === null && t(p, S),
                (g = s(O, g, C)),
                k === null ? (w = O) : (k.sibling = O),
                (k = O),
                (S = L);
        }
        if (E.done) return n(p, S), G && yn(p, C), w;
        if (S === null) {
            for (; !E.done; C++, E = v.next())
                (E = f(p, E.value, _)),
                    E !== null &&
                        ((g = s(E, g, C)), k === null ? (w = E) : (k.sibling = E), (k = E));
            return G && yn(p, C), w;
        }
        for (S = i(p, S); !E.done; C++, E = v.next())
            (E = h(S, p, C, E.value, _)),
                E !== null &&
                    (e && E.alternate !== null && S.delete(E.key === null ? C : E.key),
                    (g = s(E, g, C)),
                    k === null ? (w = E) : (k.sibling = E),
                    (k = E));
        return (
            e &&
                S.forEach(function (I) {
                    return t(p, I);
                }),
            G && yn(p, C),
            w
        );
    }
    function x(p, g, v, _) {
        if (
            (typeof v == 'object' &&
                v !== null &&
                v.type === jn &&
                v.key === null &&
                (v = v.props.children),
            typeof v == 'object' && v !== null)
        ) {
            switch (v.$$typeof) {
                case Rr:
                    t: {
                        for (var w = v.key, k = g; k !== null; ) {
                            if (k.key === w) {
                                if (((w = v.type), w === jn)) {
                                    if (k.tag === 7) {
                                        n(p, k.sibling),
                                            (g = r(k, v.props.children)),
                                            (g.return = p),
                                            (p = g);
                                        break t;
                                    }
                                } else if (
                                    k.elementType === w ||
                                    (typeof w == 'object' &&
                                        w !== null &&
                                        w.$$typeof === He &&
                                        cc(w) === k.type)
                                ) {
                                    n(p, k.sibling),
                                        (g = r(k, v.props)),
                                        (g.ref = Ci(p, k, v)),
                                        (g.return = p),
                                        (p = g);
                                    break t;
                                }
                                n(p, k);
                                break;
                            } else t(p, k);
                            k = k.sibling;
                        }
                        v.type === jn
                            ? ((g = Mn(v.props.children, p.mode, _, v.key)),
                              (g.return = p),
                              (p = g))
                            : ((_ = ks(v.type, v.key, v.props, null, p.mode, _)),
                              (_.ref = Ci(p, g, v)),
                              (_.return = p),
                              (p = _));
                    }
                    return o(p);
                case Bn:
                    t: {
                        for (k = v.key; g !== null; ) {
                            if (g.key === k)
                                if (
                                    g.tag === 4 &&
                                    g.stateNode.containerInfo === v.containerInfo &&
                                    g.stateNode.implementation === v.implementation
                                ) {
                                    n(p, g.sibling),
                                        (g = r(g, v.children || [])),
                                        (g.return = p),
                                        (p = g);
                                    break t;
                                } else {
                                    n(p, g);
                                    break;
                                }
                            else t(p, g);
                            g = g.sibling;
                        }
                        (g = tl(v, p.mode, _)), (g.return = p), (p = g);
                    }
                    return o(p);
                case He:
                    return (k = v._init), x(p, g, k(v._payload), _);
            }
            if (Ri(v)) return m(p, g, v, _);
            if (xi(v)) return y(p, g, v, _);
            Ur(p, v);
        }
        return (typeof v == 'string' && v !== '') || typeof v == 'number'
            ? ((v = '' + v),
              g !== null && g.tag === 6
                  ? (n(p, g.sibling), (g = r(g, v)), (g.return = p), (p = g))
                  : (n(p, g), (g = Jo(v, p.mode, _)), (g.return = p), (p = g)),
              o(p))
            : n(p, g);
    }
    return x;
}
var ui = lh(!0),
    ah = lh(!1),
    Tr = {},
    we = un(Tr),
    hr = un(Tr),
    pr = un(Tr);
function Sn(e) {
    if (e === Tr) throw Error(M(174));
    return e;
}
function Va(e, t) {
    switch ((Y(pr, t), Y(hr, e), Y(we, Tr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : wl(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = wl(t, e));
    }
    Z(we), Y(we, t);
}
function ci() {
    Z(we), Z(hr), Z(pr);
}
function uh(e) {
    Sn(pr.current);
    var t = Sn(we.current),
        n = wl(t, e.type);
    t !== n && (Y(hr, e), Y(we, n));
}
function Wa(e) {
    hr.current === e && (Z(we), Z(hr));
}
var J = un(0);
function Ws(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Qo = [];
function $a() {
    for (var e = 0; e < Qo.length; e++) Qo[e]._workInProgressVersionPrimary = null;
    Qo.length = 0;
}
var ys = Ie.ReactCurrentDispatcher,
    Ko = Ie.ReactCurrentBatchConfig,
    Ln = 0,
    et = null,
    ut = null,
    ht = null,
    $s = !1,
    Qi = !1,
    gr = 0,
    Am = 0;
function _t() {
    throw Error(M(321));
}
function Ua(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!fe(e[n], t[n])) return !1;
    return !0;
}
function Ya(e, t, n, i, r, s) {
    if (
        ((Ln = s),
        (et = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ys.current = e === null || e.memoizedState === null ? Bm : jm),
        (e = n(i, r)),
        Qi)
    ) {
        s = 0;
        do {
            if (((Qi = !1), (gr = 0), 25 <= s)) throw Error(M(301));
            (s += 1), (ht = ut = null), (t.updateQueue = null), (ys.current = Vm), (e = n(i, r));
        } while (Qi);
    }
    if (
        ((ys.current = Us),
        (t = ut !== null && ut.next !== null),
        (Ln = 0),
        (ht = ut = et = null),
        ($s = !1),
        t)
    )
        throw Error(M(300));
    return e;
}
function Qa() {
    var e = gr !== 0;
    return (gr = 0), e;
}
function me() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ht === null ? (et.memoizedState = ht = e) : (ht = ht.next = e), ht;
}
function ie() {
    if (ut === null) {
        var e = et.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ut.next;
    var t = ht === null ? et.memoizedState : ht.next;
    if (t !== null) (ht = t), (ut = e);
    else {
        if (e === null) throw Error(M(310));
        (ut = e),
            (e = {
                memoizedState: ut.memoizedState,
                baseState: ut.baseState,
                baseQueue: ut.baseQueue,
                queue: ut.queue,
                next: null,
            }),
            ht === null ? (et.memoizedState = ht = e) : (ht = ht.next = e);
    }
    return ht;
}
function mr(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function Xo(e) {
    var t = ie(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var i = ut,
        r = i.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (r !== null) {
            var o = r.next;
            (r.next = s.next), (s.next = o);
        }
        (i.baseQueue = r = s), (n.pending = null);
    }
    if (r !== null) {
        (s = r.next), (i = i.baseState);
        var l = (o = null),
            a = null,
            u = s;
        do {
            var c = u.lane;
            if ((Ln & c) === c)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (i = u.hasEagerState ? u.eagerState : e(i, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                a === null ? ((l = a = f), (o = i)) : (a = a.next = f), (et.lanes |= c), (On |= c);
            }
            u = u.next;
        } while (u !== null && u !== s);
        a === null ? (o = i) : (a.next = l),
            fe(i, t.memoizedState) || (zt = !0),
            (t.memoizedState = i),
            (t.baseState = o),
            (t.baseQueue = a),
            (n.lastRenderedState = i);
    }
    if (((e = n.interleaved), e !== null)) {
        r = e;
        do (s = r.lane), (et.lanes |= s), (On |= s), (r = r.next);
        while (r !== e);
    } else r === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Zo(e) {
    var t = ie(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
        r = n.pending,
        s = t.memoizedState;
    if (r !== null) {
        n.pending = null;
        var o = (r = r.next);
        do (s = e(s, o.action)), (o = o.next);
        while (o !== r);
        fe(s, t.memoizedState) || (zt = !0),
            (t.memoizedState = s),
            t.baseQueue === null && (t.baseState = s),
            (n.lastRenderedState = s);
    }
    return [s, i];
}
function ch() {}
function fh(e, t) {
    var n = et,
        i = ie(),
        r = t(),
        s = !fe(i.memoizedState, r);
    if (
        (s && ((i.memoizedState = r), (zt = !0)),
        (i = i.queue),
        Ka(ph.bind(null, n, i, e), [e]),
        i.getSnapshot !== t || s || (ht !== null && ht.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), yr(9, hh.bind(null, n, i, r, t), void 0, null), gt === null))
            throw Error(M(349));
        (Ln & 30) !== 0 || dh(n, t, r);
    }
    return r;
}
function dh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = et.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (et.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hh(e, t, n, i) {
    (t.value = n), (t.getSnapshot = i), gh(t) && mh(e);
}
function ph(e, t, n) {
    return n(function () {
        gh(t) && mh(e);
    });
}
function gh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !fe(e, n);
    } catch {
        return !0;
    }
}
function mh(e) {
    var t = Re(e, 1);
    t !== null && ce(t, e, 1, -1);
}
function fc(e) {
    var t = me();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: mr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Hm.bind(null, et, e)),
        [t.memoizedState, e]
    );
}
function yr(e, t, n, i) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
        (t = et.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (et.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
        e
    );
}
function yh() {
    return ie().memoizedState;
}
function vs(e, t, n, i) {
    var r = me();
    (et.flags |= e), (r.memoizedState = yr(1 | t, n, void 0, i === void 0 ? null : i));
}
function mo(e, t, n, i) {
    var r = ie();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (ut !== null) {
        var o = ut.memoizedState;
        if (((s = o.destroy), i !== null && Ua(i, o.deps))) {
            r.memoizedState = yr(t, n, s, i);
            return;
        }
    }
    (et.flags |= e), (r.memoizedState = yr(1 | t, n, s, i));
}
function dc(e, t) {
    return vs(8390656, 8, e, t);
}
function Ka(e, t) {
    return mo(2048, 8, e, t);
}
function vh(e, t) {
    return mo(4, 2, e, t);
}
function xh(e, t) {
    return mo(4, 4, e, t);
}
function _h(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function wh(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), mo(4, 4, _h.bind(null, t, e), n);
}
function Xa() {}
function kh(e, t) {
    var n = ie();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ua(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
}
function Sh(e, t) {
    var n = ie();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ua(t, i[1])
        ? i[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ch(e, t, n) {
    return (Ln & 21) === 0
        ? (e.baseState && ((e.baseState = !1), (zt = !0)), (e.memoizedState = n))
        : (fe(n, t) || ((n = Pd()), (et.lanes |= n), (On |= n), (e.baseState = !0)), t);
}
function Im(e, t) {
    var n = V;
    (V = n !== 0 && 4 > n ? n : 4), e(!0);
    var i = Ko.transition;
    Ko.transition = {};
    try {
        e(!1), t();
    } finally {
        (V = n), (Ko.transition = i);
    }
}
function bh() {
    return ie().memoizedState;
}
function Fm(e, t, n) {
    var i = tn(e);
    if (((n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }), Mh(e)))
        Ph(t, n);
    else if (((n = ih(e, t, n, i)), n !== null)) {
        var r = Pt();
        ce(n, e, i, r), Eh(n, t, i);
    }
}
function Hm(e, t, n) {
    var i = tn(e),
        r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Mh(e)) Ph(t, r);
    else {
        var s = e.alternate;
        if (
            e.lanes === 0 &&
            (s === null || s.lanes === 0) &&
            ((s = t.lastRenderedReducer), s !== null)
        )
            try {
                var o = t.lastRenderedState,
                    l = s(o, n);
                if (((r.hasEagerState = !0), (r.eagerState = l), fe(l, o))) {
                    var a = t.interleaved;
                    a === null ? ((r.next = r), Ba(t)) : ((r.next = a.next), (a.next = r)),
                        (t.interleaved = r);
                    return;
                }
            } catch {
            } finally {
            }
        (n = ih(e, t, r, i)), n !== null && ((r = Pt()), ce(n, e, i, r), Eh(n, t, i));
    }
}
function Mh(e) {
    var t = e.alternate;
    return e === et || (t !== null && t === et);
}
function Ph(e, t) {
    Qi = $s = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Eh(e, t, n) {
    if ((n & 4194240) !== 0) {
        var i = t.lanes;
        (i &= e.pendingLanes), (n |= i), (t.lanes = n), Ma(e, n);
    }
}
var Us = {
        readContext: ne,
        useCallback: _t,
        useContext: _t,
        useEffect: _t,
        useImperativeHandle: _t,
        useInsertionEffect: _t,
        useLayoutEffect: _t,
        useMemo: _t,
        useReducer: _t,
        useRef: _t,
        useState: _t,
        useDebugValue: _t,
        useDeferredValue: _t,
        useTransition: _t,
        useMutableSource: _t,
        useSyncExternalStore: _t,
        useId: _t,
        unstable_isNewReconciler: !1,
    },
    Bm = {
        readContext: ne,
        useCallback: function (e, t) {
            return (me().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: ne,
        useEffect: dc,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), vs(4194308, 4, _h.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return vs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return vs(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = me();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var i = me();
            return (
                (t = n !== void 0 ? n(t) : t),
                (i.memoizedState = i.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (i.queue = e),
                (e = e.dispatch = Fm.bind(null, et, e)),
                [i.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = me();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: fc,
        useDebugValue: Xa,
        useDeferredValue: function (e) {
            return (me().memoizedState = e);
        },
        useTransition: function () {
            var e = fc(!1),
                t = e[0];
            return (e = Im.bind(null, e[1])), (me().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var i = et,
                r = me();
            if (G) {
                if (n === void 0) throw Error(M(407));
                n = n();
            } else {
                if (((n = t()), gt === null)) throw Error(M(349));
                (Ln & 30) !== 0 || dh(i, t, n);
            }
            r.memoizedState = n;
            var s = { value: n, getSnapshot: t };
            return (
                (r.queue = s),
                dc(ph.bind(null, i, s, e), [e]),
                (i.flags |= 2048),
                yr(9, hh.bind(null, i, s, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = me(),
                t = gt.identifierPrefix;
            if (G) {
                var n = Le,
                    i = Te;
                (n = (i & ~(1 << (32 - ue(i) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = gr++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = Am++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    jm = {
        readContext: ne,
        useCallback: kh,
        useContext: ne,
        useEffect: Ka,
        useImperativeHandle: wh,
        useInsertionEffect: vh,
        useLayoutEffect: xh,
        useMemo: Sh,
        useReducer: Xo,
        useRef: yh,
        useState: function () {
            return Xo(mr);
        },
        useDebugValue: Xa,
        useDeferredValue: function (e) {
            var t = ie();
            return Ch(t, ut.memoizedState, e);
        },
        useTransition: function () {
            var e = Xo(mr)[0],
                t = ie().memoizedState;
            return [e, t];
        },
        useMutableSource: ch,
        useSyncExternalStore: fh,
        useId: bh,
        unstable_isNewReconciler: !1,
    },
    Vm = {
        readContext: ne,
        useCallback: kh,
        useContext: ne,
        useEffect: Ka,
        useImperativeHandle: wh,
        useInsertionEffect: vh,
        useLayoutEffect: xh,
        useMemo: Sh,
        useReducer: Zo,
        useRef: yh,
        useState: function () {
            return Zo(mr);
        },
        useDebugValue: Xa,
        useDeferredValue: function (e) {
            var t = ie();
            return ut === null ? (t.memoizedState = e) : Ch(t, ut.memoizedState, e);
        },
        useTransition: function () {
            var e = Zo(mr)[0],
                t = ie().memoizedState;
            return [e, t];
        },
        useMutableSource: ch,
        useSyncExternalStore: fh,
        useId: bh,
        unstable_isNewReconciler: !1,
    };
function fi(e, t) {
    try {
        var n = '',
            i = t;
        do (n += mg(i)), (i = i.return);
        while (i);
        var r = n;
    } catch (s) {
        r =
            `
Error generating stack: ` +
            s.message +
            `
` +
            s.stack;
    }
    return { value: e, source: t, stack: r, digest: null };
}
function Go(e, t, n) {
    return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function $l(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Wm = typeof WeakMap == 'function' ? WeakMap : Map;
function Th(e, t, n) {
    (n = Oe(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var i = t.value;
    return (
        (n.callback = function () {
            Qs || ((Qs = !0), (ta = i)), $l(e, t);
        }),
        n
    );
}
function Lh(e, t, n) {
    (n = Oe(-1, n)), (n.tag = 3);
    var i = e.type.getDerivedStateFromError;
    if (typeof i == 'function') {
        var r = t.value;
        (n.payload = function () {
            return i(r);
        }),
            (n.callback = function () {
                $l(e, t);
            });
    }
    var s = e.stateNode;
    return (
        s !== null &&
            typeof s.componentDidCatch == 'function' &&
            (n.callback = function () {
                $l(e, t),
                    typeof i != 'function' && (Je === null ? (Je = new Set([this])) : Je.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
            }),
        n
    );
}
function hc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
        i = e.pingCache = new Wm();
        var r = new Set();
        i.set(t, r);
    } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r));
    r.has(n) || (r.add(n), (e = i0.bind(null, e, t, n)), t.then(e, e));
}
function pc(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function gc(e, t, n, i, r) {
    return (e.mode & 1) === 0
        ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Oe(-1, 1)), (t.tag = 2), qe(n, t, 1))),
                (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = r), e);
}
var $m = Ie.ReactCurrentOwner,
    zt = !1;
function Mt(e, t, n, i) {
    t.child = e === null ? ah(t, null, n, i) : ui(t, e.child, n, i);
}
function mc(e, t, n, i, r) {
    n = n.render;
    var s = t.ref;
    return (
        ni(t, r),
        (i = Ya(e, t, n, i, s, r)),
        (n = Qa()),
        e !== null && !zt
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ne(e, t, r))
            : (G && n && Ra(t), (t.flags |= 1), Mt(e, t, i, r), t.child)
    );
}
function yc(e, t, n, i, r) {
    if (e === null) {
        var s = n.type;
        return typeof s == 'function' &&
            !iu(s) &&
            s.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = s), Oh(e, t, s, i, r))
            : ((e = ks(n.type, null, i, t, t.mode, r)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((s = e.child), (e.lanes & r) === 0)) {
        var o = s.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ur), n(o, i) && e.ref === t.ref))
            return Ne(e, t, r);
    }
    return (t.flags |= 1), (e = en(s, i)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Oh(e, t, n, i, r) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ur(s, i) && e.ref === t.ref)
            if (((zt = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
                (e.flags & 131072) !== 0 && (zt = !0);
            else return (t.lanes = e.lanes), Ne(e, t, r);
    }
    return Ul(e, t, n, i, r);
}
function Dh(e, t, n) {
    var i = t.pendingProps,
        r = i.children,
        s = e !== null ? e.memoizedState : null;
    if (i.mode === 'hidden')
        if ((t.mode & 1) === 0)
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                Y(Gn, Vt),
                (Vt |= n);
        else {
            if ((n & 1073741824) === 0)
                return (
                    (e = s !== null ? s.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    Y(Gn, Vt),
                    (Vt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (i = s !== null ? s.baseLanes : n),
                Y(Gn, Vt),
                (Vt |= i);
        }
    else
        s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
            Y(Gn, Vt),
            (Vt |= i);
    return Mt(e, t, r, n), t.child;
}
function zh(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Ul(e, t, n, i, r) {
    var s = At(n) ? En : Ct.current;
    return (
        (s = li(t, s)),
        ni(t, r),
        (n = Ya(e, t, n, i, s, r)),
        (i = Qa()),
        e !== null && !zt
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Ne(e, t, r))
            : (G && i && Ra(t), (t.flags |= 1), Mt(e, t, n, r), t.child)
    );
}
function vc(e, t, n, i, r) {
    if (At(n)) {
        var s = !0;
        Is(t);
    } else s = !1;
    if ((ni(t, r), t.stateNode === null)) xs(e, t), oh(t, n, i), Wl(t, n, i, r), (i = !0);
    else if (e === null) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var a = o.context,
            u = n.contextType;
        typeof u == 'object' && u !== null
            ? (u = ne(u))
            : ((u = At(n) ? En : Ct.current), (u = li(t, u)));
        var c = n.getDerivedStateFromProps,
            f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((l !== i || a !== u) && uc(t, o, i, u)),
            (Be = !1);
        var d = t.memoizedState;
        (o.state = d),
            Vs(t, i, o, r),
            (a = t.memoizedState),
            l !== i || d !== a || Nt.current || Be
                ? (typeof c == 'function' && (Vl(t, n, c, i), (a = t.memoizedState)),
                  (l = Be || ac(t, n, l, i, d, a, u))
                      ? (f ||
                            (typeof o.UNSAFE_componentWillMount != 'function' &&
                                typeof o.componentWillMount != 'function') ||
                            (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == 'function' &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
                      : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
                        (t.memoizedProps = i),
                        (t.memoizedState = a)),
                  (o.props = i),
                  (o.state = a),
                  (o.context = u),
                  (i = l))
                : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (i = !1));
    } else {
        (o = t.stateNode),
            rh(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : se(t.type, l)),
            (o.props = u),
            (f = t.pendingProps),
            (d = o.context),
            (a = n.contextType),
            typeof a == 'object' && a !== null
                ? (a = ne(a))
                : ((a = At(n) ? En : Ct.current), (a = li(t, a)));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((l !== f || d !== a) && uc(t, o, i, a)),
            (Be = !1),
            (d = t.memoizedState),
            (o.state = d),
            Vs(t, i, o, r);
        var m = t.memoizedState;
        l !== f || d !== m || Nt.current || Be
            ? (typeof h == 'function' && (Vl(t, n, h, i), (m = t.memoizedState)),
              (u = Be || ac(t, n, u, i, d, m, a) || !1)
                  ? (c ||
                        (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                            typeof o.componentWillUpdate != 'function') ||
                        (typeof o.componentWillUpdate == 'function' &&
                            o.componentWillUpdate(i, m, a),
                        typeof o.UNSAFE_componentWillUpdate == 'function' &&
                            o.UNSAFE_componentWillUpdate(i, m, a)),
                    typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != 'function' ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != 'function' ||
                        (l === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = i),
                    (t.memoizedState = m)),
              (o.props = i),
              (o.state = m),
              (o.context = a),
              (i = u))
            : (typeof o.componentDidUpdate != 'function' ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (i = !1));
    }
    return Yl(e, t, n, i, s, r);
}
function Yl(e, t, n, i, r, s) {
    zh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!i && !o) return r && ic(t, n, !1), Ne(e, t, s);
    (i = t.stateNode), ($m.current = t);
    var l = o && typeof n.getDerivedStateFromError != 'function' ? null : i.render();
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = ui(t, e.child, null, s)), (t.child = ui(t, null, l, s)))
            : Mt(e, t, l, s),
        (t.memoizedState = i.state),
        r && ic(t, n, !0),
        t.child
    );
}
function Rh(e) {
    var t = e.stateNode;
    t.pendingContext
        ? nc(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && nc(e, t.context, !1),
        Va(e, t.containerInfo);
}
function xc(e, t, n, i, r) {
    return ai(), Aa(r), (t.flags |= 256), Mt(e, t, n, i), t.child;
}
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Nh(e, t, n) {
    var i = t.pendingProps,
        r = J.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        l;
    if (
        ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
        l ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (r |= 1),
        Y(J, r & 1),
        e === null)
    )
        return (
            Bl(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? ((t.mode & 1) === 0
                      ? (t.lanes = 1)
                      : e.data === '$!'
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((o = i.children),
                  (e = i.fallback),
                  s
                      ? ((i = t.mode),
                        (s = t.child),
                        (o = { mode: 'hidden', children: o }),
                        (i & 1) === 0 && s !== null
                            ? ((s.childLanes = 0), (s.pendingProps = o))
                            : (s = xo(o, i, 0, null)),
                        (e = Mn(e, i, n, null)),
                        (s.return = t),
                        (e.return = t),
                        (s.sibling = e),
                        (t.child = s),
                        (t.child.memoizedState = Kl(n)),
                        (t.memoizedState = Ql),
                        e)
                      : Za(t, o))
        );
    if (((r = e.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
        return Um(e, t, o, i, l, r, n);
    if (s) {
        (s = i.fallback), (o = t.mode), (r = e.child), (l = r.sibling);
        var a = { mode: 'hidden', children: i.children };
        return (
            (o & 1) === 0 && t.child !== r
                ? ((i = t.child), (i.childLanes = 0), (i.pendingProps = a), (t.deletions = null))
                : ((i = en(r, a)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
            l !== null ? (s = en(l, s)) : ((s = Mn(s, o, n, null)), (s.flags |= 2)),
            (s.return = t),
            (i.return = t),
            (i.sibling = s),
            (t.child = i),
            (i = s),
            (s = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? Kl(n)
                    : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (s.memoizedState = o),
            (s.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ql),
            i
        );
    }
    return (
        (s = e.child),
        (e = s.sibling),
        (i = en(s, { mode: 'visible', children: i.children })),
        (t.mode & 1) === 0 && (i.lanes = n),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
            ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i
    );
}
function Za(e, t) {
    return (
        (t = xo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
}
function Yr(e, t, n, i) {
    return (
        i !== null && Aa(i),
        ui(t, e.child, null, n),
        (e = Za(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Um(e, t, n, i, r, s, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (i = Go(Error(M(422)))), Yr(e, t, o, i))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((s = i.fallback),
              (r = t.mode),
              (i = xo({ mode: 'visible', children: i.children }, r, 0, null)),
              (s = Mn(s, r, o, null)),
              (s.flags |= 2),
              (i.return = t),
              (s.return = t),
              (i.sibling = s),
              (t.child = i),
              (t.mode & 1) !== 0 && ui(t, e.child, null, o),
              (t.child.memoizedState = Kl(o)),
              (t.memoizedState = Ql),
              s);
    if ((t.mode & 1) === 0) return Yr(e, t, o, null);
    if (r.data === '$!') {
        if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
        return (i = l), (s = Error(M(419))), (i = Go(s, i, void 0)), Yr(e, t, o, i);
    }
    if (((l = (o & e.childLanes) !== 0), zt || l)) {
        if (((i = gt), i !== null)) {
            switch (o & -o) {
                case 4:
                    r = 2;
                    break;
                case 16:
                    r = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    r = 32;
                    break;
                case 536870912:
                    r = 268435456;
                    break;
                default:
                    r = 0;
            }
            (r = (r & (i.suspendedLanes | o)) !== 0 ? 0 : r),
                r !== 0 && r !== s.retryLane && ((s.retryLane = r), Re(e, r), ce(i, e, r, -1));
        }
        return nu(), (i = Go(Error(M(421)))), Yr(e, t, o, i);
    }
    return r.data === '$?'
        ? ((t.flags |= 128), (t.child = e.child), (t = r0.bind(null, e)), (r._reactRetry = t), null)
        : ((e = s.treeContext),
          (Wt = Ge(r.nextSibling)),
          ($t = t),
          (G = !0),
          (ae = null),
          e !== null &&
              ((Xt[Zt++] = Te),
              (Xt[Zt++] = Le),
              (Xt[Zt++] = Tn),
              (Te = e.id),
              (Le = e.overflow),
              (Tn = t)),
          (t = Za(t, i.children)),
          (t.flags |= 4096),
          t);
}
function _c(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), jl(e.return, t, n);
}
function qo(e, t, n, i, r) {
    var s = e.memoizedState;
    s === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: i,
              tail: n,
              tailMode: r,
          })
        : ((s.isBackwards = t),
          (s.rendering = null),
          (s.renderingStartTime = 0),
          (s.last = i),
          (s.tail = n),
          (s.tailMode = r));
}
function Ah(e, t, n) {
    var i = t.pendingProps,
        r = i.revealOrder,
        s = i.tail;
    if ((Mt(e, t, i.children, n), (i = J.current), (i & 2) !== 0))
        (i = (i & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && (e.flags & 128) !== 0)
            t: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
                else if (e.tag === 19) _c(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break t;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break t;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        i &= 1;
    }
    if ((Y(J, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
        switch (r) {
            case 'forwards':
                for (n = t.child, r = null; n !== null; )
                    (e = n.alternate), e !== null && Ws(e) === null && (r = n), (n = n.sibling);
                (n = r),
                    n === null
                        ? ((r = t.child), (t.child = null))
                        : ((r = n.sibling), (n.sibling = null)),
                    qo(t, !1, r, n, s);
                break;
            case 'backwards':
                for (n = null, r = t.child, t.child = null; r !== null; ) {
                    if (((e = r.alternate), e !== null && Ws(e) === null)) {
                        t.child = r;
                        break;
                    }
                    (e = r.sibling), (r.sibling = n), (n = r), (r = e);
                }
                qo(t, !0, n, null, s);
                break;
            case 'together':
                qo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function xs(e, t) {
    (t.mode & 1) === 0 &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ne(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies), (On |= t.lanes), (n & t.childLanes) === 0)
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (
            e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Ym(e, t, n) {
    switch (t.tag) {
        case 3:
            Rh(t), ai();
            break;
        case 5:
            uh(t);
            break;
        case 1:
            At(t.type) && Is(t);
            break;
        case 4:
            Va(t, t.stateNode.containerInfo);
            break;
        case 10:
            var i = t.type._context,
                r = t.memoizedProps.value;
            Y(Bs, i._currentValue), (i._currentValue = r);
            break;
        case 13:
            if (((i = t.memoizedState), i !== null))
                return i.dehydrated !== null
                    ? (Y(J, J.current & 1), (t.flags |= 128), null)
                    : (n & t.child.childLanes) !== 0
                    ? Nh(e, t, n)
                    : (Y(J, J.current & 1), (e = Ne(e, t, n)), e !== null ? e.sibling : null);
            Y(J, J.current & 1);
            break;
        case 19:
            if (((i = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
                if (i) return Ah(e, t, n);
                t.flags |= 128;
            }
            if (
                ((r = t.memoizedState),
                r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
                Y(J, J.current),
                i)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Dh(e, t, n);
    }
    return Ne(e, t, n);
}
var Ih, Xl, Fh, Hh;
Ih = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Xl = function () {};
Fh = function (e, t, n, i) {
    var r = e.memoizedProps;
    if (r !== i) {
        (e = t.stateNode), Sn(we.current);
        var s = null;
        switch (n) {
            case 'input':
                (r = yl(e, r)), (i = yl(e, i)), (s = []);
                break;
            case 'select':
                (r = nt({}, r, { value: void 0 })), (i = nt({}, i, { value: void 0 })), (s = []);
                break;
            case 'textarea':
                (r = _l(e, r)), (i = _l(e, i)), (s = []);
                break;
            default:
                typeof r.onClick != 'function' &&
                    typeof i.onClick == 'function' &&
                    (e.onclick = Ns);
        }
        kl(n, i);
        var o;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === 'style') {
                    var l = r[u];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (nr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (
                ((l = r != null ? r[u] : void 0),
                i.hasOwnProperty(u) && a !== l && (a != null || l != null))
            )
                if (u === 'style')
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) ||
                                (a && a.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ''));
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
                    } else n || (s || (s = []), s.push(u, n)), (n = a);
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((a = a ? a.__html : void 0),
                          (l = l ? l.__html : void 0),
                          a != null && l !== a && (s = s || []).push(u, a))
                        : u === 'children'
                        ? (typeof a != 'string' && typeof a != 'number') ||
                          (s = s || []).push(u, '' + a)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (nr.hasOwnProperty(u)
                              ? (a != null && u === 'onScroll' && K('scroll', e),
                                s || l === a || (s = []))
                              : (s = s || []).push(u, a));
        }
        n && (s = s || []).push('style', n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
Hh = function (e, t, n, i) {
    n !== i && (t.flags |= 4);
};
function bi(e, t) {
    if (!G)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var i = null; n !== null; ) n.alternate !== null && (i = n), (n = n.sibling);
                i === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (i.sibling = null);
        }
}
function wt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        i = 0;
    if (t)
        for (var r = e.child; r !== null; )
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags & 14680064),
                (i |= r.flags & 14680064),
                (r.return = e),
                (r = r.sibling);
    else
        for (r = e.child; r !== null; )
            (n |= r.lanes | r.childLanes),
                (i |= r.subtreeFlags),
                (i |= r.flags),
                (r.return = e),
                (r = r.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function Qm(e, t, n) {
    var i = t.pendingProps;
    switch ((Na(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return wt(t), null;
        case 1:
            return At(t.type) && As(), wt(t), null;
        case 3:
            return (
                (i = t.stateNode),
                ci(),
                Z(Nt),
                Z(Ct),
                $a(),
                i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
                (e === null || e.child === null) &&
                    ($r(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                          ((t.flags |= 1024), ae !== null && (ia(ae), (ae = null)))),
                Xl(e, t),
                wt(t),
                null
            );
        case 5:
            Wa(t);
            var r = Sn(pr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Fh(e, t, n, i, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!i) {
                    if (t.stateNode === null) throw Error(M(166));
                    return wt(t), null;
                }
                if (((e = Sn(we.current)), $r(t))) {
                    (i = t.stateNode), (n = t.type);
                    var s = t.memoizedProps;
                    switch (((i[xe] = t), (i[dr] = s), (e = (t.mode & 1) !== 0), n)) {
                        case 'dialog':
                            K('cancel', i), K('close', i);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            K('load', i);
                            break;
                        case 'video':
                        case 'audio':
                            for (r = 0; r < Ai.length; r++) K(Ai[r], i);
                            break;
                        case 'source':
                            K('error', i);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            K('error', i), K('load', i);
                            break;
                        case 'details':
                            K('toggle', i);
                            break;
                        case 'input':
                            Tu(i, s), K('invalid', i);
                            break;
                        case 'select':
                            (i._wrapperState = { wasMultiple: !!s.multiple }), K('invalid', i);
                            break;
                        case 'textarea':
                            Ou(i, s), K('invalid', i);
                    }
                    kl(n, s), (r = null);
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === 'children'
                                ? typeof l == 'string'
                                    ? i.textContent !== l &&
                                      (s.suppressHydrationWarning !== !0 && Wr(i.textContent, l, e),
                                      (r = ['children', l]))
                                    : typeof l == 'number' &&
                                      i.textContent !== '' + l &&
                                      (s.suppressHydrationWarning !== !0 && Wr(i.textContent, l, e),
                                      (r = ['children', '' + l]))
                                : nr.hasOwnProperty(o) &&
                                  l != null &&
                                  o === 'onScroll' &&
                                  K('scroll', i);
                        }
                    switch (n) {
                        case 'input':
                            Nr(i), Lu(i, s, !0);
                            break;
                        case 'textarea':
                            Nr(i), Du(i);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof s.onClick == 'function' && (i.onclick = Ns);
                    }
                    (i = r), (t.updateQueue = i), i !== null && (t.flags |= 4);
                } else {
                    (o = r.nodeType === 9 ? r : r.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = dd(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = o.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof i.is == 'string'
                                ? (e = o.createElement(n, { is: i.is }))
                                : ((e = o.createElement(n)),
                                  n === 'select' &&
                                      ((o = e),
                                      i.multiple ? (o.multiple = !0) : i.size && (o.size = i.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[xe] = t),
                        (e[dr] = i),
                        Ih(e, t, !1, !1),
                        (t.stateNode = e);
                    t: {
                        switch (((o = Sl(n, i)), n)) {
                            case 'dialog':
                                K('cancel', e), K('close', e), (r = i);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                K('load', e), (r = i);
                                break;
                            case 'video':
                            case 'audio':
                                for (r = 0; r < Ai.length; r++) K(Ai[r], e);
                                r = i;
                                break;
                            case 'source':
                                K('error', e), (r = i);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                K('error', e), K('load', e), (r = i);
                                break;
                            case 'details':
                                K('toggle', e), (r = i);
                                break;
                            case 'input':
                                Tu(e, i), (r = yl(e, i)), K('invalid', e);
                                break;
                            case 'option':
                                r = i;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!i.multiple }),
                                    (r = nt({}, i, { value: void 0 })),
                                    K('invalid', e);
                                break;
                            case 'textarea':
                                Ou(e, i), (r = _l(e, i)), K('invalid', e);
                                break;
                            default:
                                r = i;
                        }
                        kl(n, r), (l = r);
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === 'style'
                                    ? gd(e, a)
                                    : s === 'dangerouslySetInnerHTML'
                                    ? ((a = a ? a.__html : void 0), a != null && hd(e, a))
                                    : s === 'children'
                                    ? typeof a == 'string'
                                        ? (n !== 'textarea' || a !== '') && ir(e, a)
                                        : typeof a == 'number' && ir(e, '' + a)
                                    : s !== 'suppressContentEditableWarning' &&
                                      s !== 'suppressHydrationWarning' &&
                                      s !== 'autoFocus' &&
                                      (nr.hasOwnProperty(s)
                                          ? a != null && s === 'onScroll' && K('scroll', e)
                                          : a != null && _a(e, s, a, o));
                            }
                        switch (n) {
                            case 'input':
                                Nr(e), Lu(e, i, !1);
                                break;
                            case 'textarea':
                                Nr(e), Du(e);
                                break;
                            case 'option':
                                i.value != null && e.setAttribute('value', '' + sn(i.value));
                                break;
                            case 'select':
                                (e.multiple = !!i.multiple),
                                    (s = i.value),
                                    s != null
                                        ? qn(e, !!i.multiple, s, !1)
                                        : i.defaultValue != null &&
                                          qn(e, !!i.multiple, i.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == 'function' && (e.onclick = Ns);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                i = !!i.autoFocus;
                                break t;
                            case 'img':
                                i = !0;
                                break t;
                            default:
                                i = !1;
                        }
                    }
                    i && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return wt(t), null;
        case 6:
            if (e && t.stateNode != null) Hh(e, t, e.memoizedProps, i);
            else {
                if (typeof i != 'string' && t.stateNode === null) throw Error(M(166));
                if (((n = Sn(pr.current)), Sn(we.current), $r(t))) {
                    if (
                        ((i = t.stateNode),
                        (n = t.memoizedProps),
                        (i[xe] = t),
                        (s = i.nodeValue !== n) && ((e = $t), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Wr(i.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Wr(i.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    s && (t.flags |= 4);
                } else
                    (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
                        (i[xe] = t),
                        (t.stateNode = i);
            }
            return wt(t), null;
        case 13:
            if (
                (Z(J),
                (i = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (G && Wt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    nh(), ai(), (t.flags |= 98560), (s = !1);
                else if (((s = $r(t)), i !== null && i.dehydrated !== null)) {
                    if (e === null) {
                        if (!s) throw Error(M(318));
                        if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                            throw Error(M(317));
                        s[xe] = t;
                    } else ai(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
                    wt(t), (s = !1);
                } else ae !== null && (ia(ae), (ae = null)), (s = !0);
                if (!s) return t.flags & 65536 ? t : null;
            }
            return (t.flags & 128) !== 0
                ? ((t.lanes = n), t)
                : ((i = i !== null),
                  i !== (e !== null && e.memoizedState !== null) &&
                      i &&
                      ((t.child.flags |= 8192),
                      (t.mode & 1) !== 0 &&
                          (e === null || (J.current & 1) !== 0 ? ct === 0 && (ct = 3) : nu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  wt(t),
                  null);
        case 4:
            return ci(), Xl(e, t), e === null && cr(t.stateNode.containerInfo), wt(t), null;
        case 10:
            return Ha(t.type._context), wt(t), null;
        case 17:
            return At(t.type) && As(), wt(t), null;
        case 19:
            if ((Z(J), (s = t.memoizedState), s === null)) return wt(t), null;
            if (((i = (t.flags & 128) !== 0), (o = s.rendering), o === null))
                if (i) bi(s, !1);
                else {
                    if (ct !== 0 || (e !== null && (e.flags & 128) !== 0))
                        for (e = t.child; e !== null; ) {
                            if (((o = Ws(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        bi(s, !1),
                                        i = o.updateQueue,
                                        i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        i = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (s = n),
                                        (e = i),
                                        (s.flags &= 14680066),
                                        (o = s.alternate),
                                        o === null
                                            ? ((s.childLanes = 0),
                                              (s.lanes = e),
                                              (s.child = null),
                                              (s.subtreeFlags = 0),
                                              (s.memoizedProps = null),
                                              (s.memoizedState = null),
                                              (s.updateQueue = null),
                                              (s.dependencies = null),
                                              (s.stateNode = null))
                                            : ((s.childLanes = o.childLanes),
                                              (s.lanes = o.lanes),
                                              (s.child = o.child),
                                              (s.subtreeFlags = 0),
                                              (s.deletions = null),
                                              (s.memoizedProps = o.memoizedProps),
                                              (s.memoizedState = o.memoizedState),
                                              (s.updateQueue = o.updateQueue),
                                              (s.type = o.type),
                                              (e = o.dependencies),
                                              (s.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext: e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Y(J, (J.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    s.tail !== null &&
                        st() > di &&
                        ((t.flags |= 128), (i = !0), bi(s, !1), (t.lanes = 4194304));
                }
            else {
                if (!i)
                    if (((e = Ws(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (i = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            bi(s, !0),
                            s.tail === null && s.tailMode === 'hidden' && !o.alternate && !G)
                        )
                            return wt(t), null;
                    } else
                        2 * st() - s.renderingStartTime > di &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (i = !0), bi(s, !1), (t.lanes = 4194304));
                s.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
            }
            return s.tail !== null
                ? ((t = s.tail),
                  (s.rendering = t),
                  (s.tail = t.sibling),
                  (s.renderingStartTime = st()),
                  (t.sibling = null),
                  (n = J.current),
                  Y(J, i ? (n & 1) | 2 : n & 1),
                  t)
                : (wt(t), null);
        case 22:
        case 23:
            return (
                eu(),
                (i = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
                i && (t.mode & 1) !== 0
                    ? (Vt & 1073741824) !== 0 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : wt(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(M(156, t.tag));
}
function Km(e, t) {
    switch ((Na(t), t.tag)) {
        case 1:
            return (
                At(t.type) && As(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                ci(),
                Z(Nt),
                Z(Ct),
                $a(),
                (e = t.flags),
                (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return Wa(t), null;
        case 13:
            if ((Z(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(M(340));
                ai();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return Z(J), null;
        case 4:
            return ci(), null;
        case 10:
            return Ha(t.type._context), null;
        case 22:
        case 23:
            return eu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Qr = !1,
    St = !1,
    Xm = typeof WeakSet == 'function' ? WeakSet : Set,
    T = null;
function Zn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (i) {
                it(e, t, i);
            }
        else n.current = null;
}
function Zl(e, t, n) {
    try {
        n();
    } catch (i) {
        it(e, t, i);
    }
}
var wc = !1;
function Zm(e, t) {
    if (((zl = Ds), (e = Wd()), za(e))) {
        if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            t: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset,
                        s = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType, s.nodeType;
                    } catch {
                        n = null;
                        break t;
                    }
                    var o = 0,
                        l = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                    e: for (;;) {
                        for (
                            var h;
                            f !== n || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                                f !== s || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                                f.nodeType === 3 && (o += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (d = f), (f = h);
                        for (;;) {
                            if (f === e) break e;
                            if (
                                (d === n && ++u === r && (l = o),
                                d === s && ++c === i && (a = o),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = d), (d = f.parentNode);
                        }
                        f = h;
                    }
                    n = l === -1 || a === -1 ? null : { start: l, end: a };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Rl = { focusedElem: e, selectionRange: n }, Ds = !1, T = t; T !== null; )
        if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
            (e.return = t), (T = e);
        else
            for (; T !== null; ) {
                t = T;
                try {
                    var m = t.alternate;
                    if ((t.flags & 1024) !== 0)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (m !== null) {
                                    var y = m.memoizedProps,
                                        x = m.memoizedState,
                                        p = t.stateNode,
                                        g = p.getSnapshotBeforeUpdate(
                                            t.elementType === t.type ? y : se(t.type, y),
                                            x
                                        );
                                    p.__reactInternalSnapshotBeforeUpdate = g;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = '')
                                    : v.nodeType === 9 &&
                                      v.documentElement &&
                                      v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(M(163));
                        }
                } catch (_) {
                    it(t, t.return, _);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (T = e);
                    break;
                }
                T = t.return;
            }
    return (m = wc), (wc = !1), m;
}
function Ki(e, t, n) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
        var r = (i = i.next);
        do {
            if ((r.tag & e) === e) {
                var s = r.destroy;
                (r.destroy = void 0), s !== void 0 && Zl(t, n, s);
            }
            r = r.next;
        } while (r !== i);
    }
}
function yo(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var i = n.create;
                n.destroy = i();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Gl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function Bh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Bh(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null && (delete t[xe], delete t[dr], delete t[Il], delete t[Dm], delete t[zm])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function jh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kc(e) {
    t: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || jh(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ql(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Ns));
    else if (i !== 4 && ((e = e.child), e !== null))
        for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), (e = e.sibling);
}
function Jl(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && ((e = e.child), e !== null))
        for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
}
var mt = null,
    oe = !1;
function Fe(e, t, n) {
    for (n = n.child; n !== null; ) Vh(e, t, n), (n = n.sibling);
}
function Vh(e, t, n) {
    if (_e && typeof _e.onCommitFiberUnmount == 'function')
        try {
            _e.onCommitFiberUnmount(ao, n);
        } catch {}
    switch (n.tag) {
        case 5:
            St || Zn(n, t);
        case 6:
            var i = mt,
                r = oe;
            (mt = null),
                Fe(e, t, n),
                (mt = i),
                (oe = r),
                mt !== null &&
                    (oe
                        ? ((e = mt),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : mt.removeChild(n.stateNode));
            break;
        case 18:
            mt !== null &&
                (oe
                    ? ((e = mt),
                      (n = n.stateNode),
                      e.nodeType === 8 ? Uo(e.parentNode, n) : e.nodeType === 1 && Uo(e, n),
                      lr(e))
                    : Uo(mt, n.stateNode));
            break;
        case 4:
            (i = mt),
                (r = oe),
                (mt = n.stateNode.containerInfo),
                (oe = !0),
                Fe(e, t, n),
                (mt = i),
                (oe = r);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!St && ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))) {
                r = i = i.next;
                do {
                    var s = r,
                        o = s.destroy;
                    (s = s.tag),
                        o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Zl(n, t, o),
                        (r = r.next);
                } while (r !== i);
            }
            Fe(e, t, n);
            break;
        case 1:
            if (!St && (Zn(n, t), (i = n.stateNode), typeof i.componentWillUnmount == 'function'))
                try {
                    (i.props = n.memoizedProps),
                        (i.state = n.memoizedState),
                        i.componentWillUnmount();
                } catch (l) {
                    it(n, t, l);
                }
            Fe(e, t, n);
            break;
        case 21:
            Fe(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((St = (i = St) || n.memoizedState !== null), Fe(e, t, n), (St = i))
                : Fe(e, t, n);
            break;
        default:
            Fe(e, t, n);
    }
}
function Sc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Xm()),
            t.forEach(function (i) {
                var r = s0.bind(null, e, i);
                n.has(i) || (n.add(i), i.then(r, r));
            });
    }
}
function re(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var s = e,
                    o = t,
                    l = o;
                t: for (; l !== null; ) {
                    switch (l.tag) {
                        case 5:
                            (mt = l.stateNode), (oe = !1);
                            break t;
                        case 3:
                            (mt = l.stateNode.containerInfo), (oe = !0);
                            break t;
                        case 4:
                            (mt = l.stateNode.containerInfo), (oe = !0);
                            break t;
                    }
                    l = l.return;
                }
                if (mt === null) throw Error(M(160));
                Vh(s, o, r), (mt = null), (oe = !1);
                var a = r.alternate;
                a !== null && (a.return = null), (r.return = null);
            } catch (u) {
                it(r, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wh(t, e), (t = t.sibling);
}
function Wh(e, t) {
    var n = e.alternate,
        i = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((re(t, e), pe(e), i & 4)) {
                try {
                    Ki(3, e, e.return), yo(3, e);
                } catch (y) {
                    it(e, e.return, y);
                }
                try {
                    Ki(5, e, e.return);
                } catch (y) {
                    it(e, e.return, y);
                }
            }
            break;
        case 1:
            re(t, e), pe(e), i & 512 && n !== null && Zn(n, n.return);
            break;
        case 5:
            if ((re(t, e), pe(e), i & 512 && n !== null && Zn(n, n.return), e.flags & 32)) {
                var r = e.stateNode;
                try {
                    ir(r, '');
                } catch (y) {
                    it(e, e.return, y);
                }
            }
            if (i & 4 && ((r = e.stateNode), r != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    a = e.updateQueue;
                if (((e.updateQueue = null), a !== null))
                    try {
                        l === 'input' && s.type === 'radio' && s.name != null && cd(r, s), Sl(l, o);
                        var u = Sl(l, s);
                        for (o = 0; o < a.length; o += 2) {
                            var c = a[o],
                                f = a[o + 1];
                            c === 'style'
                                ? gd(r, f)
                                : c === 'dangerouslySetInnerHTML'
                                ? hd(r, f)
                                : c === 'children'
                                ? ir(r, f)
                                : _a(r, c, f, u);
                        }
                        switch (l) {
                            case 'input':
                                vl(r, s);
                                break;
                            case 'textarea':
                                fd(r, s);
                                break;
                            case 'select':
                                var d = r._wrapperState.wasMultiple;
                                r._wrapperState.wasMultiple = !!s.multiple;
                                var h = s.value;
                                h != null
                                    ? qn(r, !!s.multiple, h, !1)
                                    : d !== !!s.multiple &&
                                      (s.defaultValue != null
                                          ? qn(r, !!s.multiple, s.defaultValue, !0)
                                          : qn(r, !!s.multiple, s.multiple ? [] : '', !1));
                        }
                        r[dr] = s;
                    } catch (y) {
                        it(e, e.return, y);
                    }
            }
            break;
        case 6:
            if ((re(t, e), pe(e), i & 4)) {
                if (e.stateNode === null) throw Error(M(162));
                (r = e.stateNode), (s = e.memoizedProps);
                try {
                    r.nodeValue = s;
                } catch (y) {
                    it(e, e.return, y);
                }
            }
            break;
        case 3:
            if ((re(t, e), pe(e), i & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    lr(t.containerInfo);
                } catch (y) {
                    it(e, e.return, y);
                }
            break;
        case 4:
            re(t, e), pe(e);
            break;
        case 13:
            re(t, e),
                pe(e),
                (r = e.child),
                r.flags & 8192 &&
                    ((s = r.memoizedState !== null),
                    (r.stateNode.isHidden = s),
                    !s ||
                        (r.alternate !== null && r.alternate.memoizedState !== null) ||
                        (Ja = st())),
                i & 4 && Sc(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((St = (u = St) || c), re(t, e), (St = u)) : re(t, e),
                pe(e),
                i & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
                )
                    for (T = e, c = e.child; c !== null; ) {
                        for (f = T = c; T !== null; ) {
                            switch (((d = T), (h = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ki(4, d, d.return);
                                    break;
                                case 1:
                                    Zn(d, d.return);
                                    var m = d.stateNode;
                                    if (typeof m.componentWillUnmount == 'function') {
                                        (i = d), (n = d.return);
                                        try {
                                            (t = i),
                                                (m.props = t.memoizedProps),
                                                (m.state = t.memoizedState),
                                                m.componentWillUnmount();
                                        } catch (y) {
                                            it(i, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    Zn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        bc(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = d), (T = h)) : bc(f);
                        }
                        c = c.sibling;
                    }
                t: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (r = f.stateNode),
                                    u
                                        ? ((s = r.style),
                                          typeof s.setProperty == 'function'
                                              ? s.setProperty('display', 'none', 'important')
                                              : (s.display = 'none'))
                                        : ((l = f.stateNode),
                                          (a = f.memoizedProps.style),
                                          (o =
                                              a != null && a.hasOwnProperty('display')
                                                  ? a.display
                                                  : null),
                                          (l.style.display = pd('display', o)));
                            } catch (y) {
                                it(e, e.return, y);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                            } catch (y) {
                                it(e, e.return, y);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break t;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break t;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            re(t, e), pe(e), i & 4 && Sc(e);
            break;
        case 21:
            break;
        default:
            re(t, e), pe(e);
    }
}
function pe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            t: {
                for (var n = e.return; n !== null; ) {
                    if (jh(n)) {
                        var i = n;
                        break t;
                    }
                    n = n.return;
                }
                throw Error(M(160));
            }
            switch (i.tag) {
                case 5:
                    var r = i.stateNode;
                    i.flags & 32 && (ir(r, ''), (i.flags &= -33));
                    var s = kc(e);
                    Jl(e, s, r);
                    break;
                case 3:
                case 4:
                    var o = i.stateNode.containerInfo,
                        l = kc(e);
                    ql(e, l, o);
                    break;
                default:
                    throw Error(M(161));
            }
        } catch (a) {
            it(e, e.return, a);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, n) {
    (T = e), $h(e);
}
function $h(e, t, n) {
    for (var i = (e.mode & 1) !== 0; T !== null; ) {
        var r = T,
            s = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Qr;
            if (!o) {
                var l = r.alternate,
                    a = (l !== null && l.memoizedState !== null) || St;
                l = Qr;
                var u = St;
                if (((Qr = o), (St = a) && !u))
                    for (T = r; T !== null; )
                        (o = T),
                            (a = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? Mc(r)
                                : a !== null
                                ? ((a.return = o), (T = a))
                                : Mc(r);
                for (; s !== null; ) (T = s), $h(s), (s = s.sibling);
                (T = r), (Qr = l), (St = u);
            }
            Cc(e);
        } else (r.subtreeFlags & 8772) !== 0 && s !== null ? ((s.return = r), (T = s)) : Cc(e);
    }
}
function Cc(e) {
    for (; T !== null; ) {
        var t = T;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            St || yo(5, t);
                            break;
                        case 1:
                            var i = t.stateNode;
                            if (t.flags & 4 && !St)
                                if (n === null) i.componentDidMount();
                                else {
                                    var r =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : se(t.type, n.memoizedProps);
                                    i.componentDidUpdate(
                                        r,
                                        n.memoizedState,
                                        i.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var s = t.updateQueue;
                            s !== null && lc(t, s, i);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                lc(t, o, n);
                            }
                            break;
                        case 5:
                            var l = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = l;
                                var a = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        a.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        a.src && (n.src = a.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && lr(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(M(163));
                    }
                St || (t.flags & 512 && Gl(t));
            } catch (d) {
                it(t, t.return, d);
            }
        }
        if (t === e) {
            T = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function bc(e) {
    for (; T !== null; ) {
        var t = T;
        if (t === e) {
            T = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function Mc(e) {
    for (; T !== null; ) {
        var t = T;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        yo(4, t);
                    } catch (a) {
                        it(t, n, a);
                    }
                    break;
                case 1:
                    var i = t.stateNode;
                    if (typeof i.componentDidMount == 'function') {
                        var r = t.return;
                        try {
                            i.componentDidMount();
                        } catch (a) {
                            it(t, r, a);
                        }
                    }
                    var s = t.return;
                    try {
                        Gl(t);
                    } catch (a) {
                        it(t, s, a);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Gl(t);
                    } catch (a) {
                        it(t, o, a);
                    }
            }
        } catch (a) {
            it(t, t.return, a);
        }
        if (t === e) {
            T = null;
            break;
        }
        var l = t.sibling;
        if (l !== null) {
            (l.return = t.return), (T = l);
            break;
        }
        T = t.return;
    }
}
var qm = Math.ceil,
    Ys = Ie.ReactCurrentDispatcher,
    Ga = Ie.ReactCurrentOwner,
    te = Ie.ReactCurrentBatchConfig,
    H = 0,
    gt = null,
    at = null,
    yt = 0,
    Vt = 0,
    Gn = un(0),
    ct = 0,
    vr = null,
    On = 0,
    vo = 0,
    qa = 0,
    Xi = null,
    Ot = null,
    Ja = 0,
    di = 1 / 0,
    Me = null,
    Qs = !1,
    ta = null,
    Je = null,
    Kr = !1,
    $e = null,
    Ks = 0,
    Zi = 0,
    ea = null,
    _s = -1,
    ws = 0;
function Pt() {
    return (H & 6) !== 0 ? st() : _s !== -1 ? _s : (_s = st());
}
function tn(e) {
    return (e.mode & 1) === 0
        ? 1
        : (H & 2) !== 0 && yt !== 0
        ? yt & -yt
        : Nm.transition !== null
        ? (ws === 0 && (ws = Pd()), ws)
        : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rd(e.type))), e);
}
function ce(e, t, n, i) {
    if (50 < Zi) throw ((Zi = 0), (ea = null), Error(M(185)));
    Mr(e, n, i),
        ((H & 2) === 0 || e !== gt) &&
            (e === gt && ((H & 2) === 0 && (vo |= n), ct === 4 && Ve(e, yt)),
            It(e, i),
            n === 1 && H === 0 && (t.mode & 1) === 0 && ((di = st() + 500), po && cn()));
}
function It(e, t) {
    var n = e.callbackNode;
    Ng(e, t);
    var i = Os(e, e === gt ? yt : 0);
    if (i === 0) n !== null && Nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = i & -i), e.callbackPriority !== t)) {
        if ((n != null && Nu(n), t === 1))
            e.tag === 0 ? Rm(Pc.bind(null, e)) : Jd(Pc.bind(null, e)),
                Lm(function () {
                    (H & 6) === 0 && cn();
                }),
                (n = null);
        else {
            switch (Ed(i)) {
                case 1:
                    n = ba;
                    break;
                case 4:
                    n = bd;
                    break;
                case 16:
                    n = Ls;
                    break;
                case 536870912:
                    n = Md;
                    break;
                default:
                    n = Ls;
            }
            n = qh(n, Uh.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Uh(e, t) {
    if (((_s = -1), (ws = 0), (H & 6) !== 0)) throw Error(M(327));
    var n = e.callbackNode;
    if (ii() && e.callbackNode !== n) return null;
    var i = Os(e, e === gt ? yt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Xs(e, i);
    else {
        t = i;
        var r = H;
        H |= 2;
        var s = Qh();
        (gt !== e || yt !== t) && ((Me = null), (di = st() + 500), bn(e, t));
        do
            try {
                e0();
                break;
            } catch (l) {
                Yh(e, l);
            }
        while (1);
        Fa(), (Ys.current = s), (H = r), at !== null ? (t = 0) : ((gt = null), (yt = 0), (t = ct));
    }
    if (t !== 0) {
        if ((t === 2 && ((r = El(e)), r !== 0 && ((i = r), (t = na(e, r)))), t === 1))
            throw ((n = vr), bn(e, 0), Ve(e, i), It(e, st()), n);
        if (t === 6) Ve(e, i);
        else {
            if (
                ((r = e.current.alternate),
                (i & 30) === 0 &&
                    !Jm(r) &&
                    ((t = Xs(e, i)),
                    t === 2 && ((s = El(e)), s !== 0 && ((i = s), (t = na(e, s)))),
                    t === 1))
            )
                throw ((n = vr), bn(e, 0), Ve(e, i), It(e, st()), n);
            switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    vn(e, Ot, Me);
                    break;
                case 3:
                    if ((Ve(e, i), (i & 130023424) === i && ((t = Ja + 500 - st()), 10 < t))) {
                        if (Os(e, 0) !== 0) break;
                        if (((r = e.suspendedLanes), (r & i) !== i)) {
                            Pt(), (e.pingedLanes |= e.suspendedLanes & r);
                            break;
                        }
                        e.timeoutHandle = Al(vn.bind(null, e, Ot, Me), t);
                        break;
                    }
                    vn(e, Ot, Me);
                    break;
                case 4:
                    if ((Ve(e, i), (i & 4194240) === i)) break;
                    for (t = e.eventTimes, r = -1; 0 < i; ) {
                        var o = 31 - ue(i);
                        (s = 1 << o), (o = t[o]), o > r && (r = o), (i &= ~s);
                    }
                    if (
                        ((i = r),
                        (i = st() - i),
                        (i =
                            (120 > i
                                ? 120
                                : 480 > i
                                ? 480
                                : 1080 > i
                                ? 1080
                                : 1920 > i
                                ? 1920
                                : 3e3 > i
                                ? 3e3
                                : 4320 > i
                                ? 4320
                                : 1960 * qm(i / 1960)) - i),
                        10 < i)
                    ) {
                        e.timeoutHandle = Al(vn.bind(null, e, Ot, Me), i);
                        break;
                    }
                    vn(e, Ot, Me);
                    break;
                case 5:
                    vn(e, Ot, Me);
                    break;
                default:
                    throw Error(M(329));
            }
        }
    }
    return It(e, st()), e.callbackNode === n ? Uh.bind(null, e) : null;
}
function na(e, t) {
    var n = Xi;
    return (
        e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
        (e = Xs(e, t)),
        e !== 2 && ((t = Ot), (Ot = n), t !== null && ia(t)),
        e
    );
}
function ia(e) {
    Ot === null ? (Ot = e) : Ot.push.apply(Ot, e);
}
function Jm(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        s = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!fe(s(), r)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Ve(e, t) {
    for (
        t &= ~qa, t &= ~vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - ue(t),
            i = 1 << n;
        (e[n] = -1), (t &= ~i);
    }
}
function Pc(e) {
    if ((H & 6) !== 0) throw Error(M(327));
    ii();
    var t = Os(e, 0);
    if ((t & 1) === 0) return It(e, st()), null;
    var n = Xs(e, t);
    if (e.tag !== 0 && n === 2) {
        var i = El(e);
        i !== 0 && ((t = i), (n = na(e, i)));
    }
    if (n === 1) throw ((n = vr), bn(e, 0), Ve(e, t), It(e, st()), n);
    if (n === 6) throw Error(M(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        vn(e, Ot, Me),
        It(e, st()),
        null
    );
}
function tu(e, t) {
    var n = H;
    H |= 1;
    try {
        return e(t);
    } finally {
        (H = n), H === 0 && ((di = st() + 500), po && cn());
    }
}
function Dn(e) {
    $e !== null && $e.tag === 0 && (H & 6) === 0 && ii();
    var t = H;
    H |= 1;
    var n = te.transition,
        i = V;
    try {
        if (((te.transition = null), (V = 1), e)) return e();
    } finally {
        (V = i), (te.transition = n), (H = t), (H & 6) === 0 && cn();
    }
}
function eu() {
    (Vt = Gn.current), Z(Gn);
}
function bn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Tm(n)), at !== null))
        for (n = at.return; n !== null; ) {
            var i = n;
            switch ((Na(i), i.tag)) {
                case 1:
                    (i = i.type.childContextTypes), i != null && As();
                    break;
                case 3:
                    ci(), Z(Nt), Z(Ct), $a();
                    break;
                case 5:
                    Wa(i);
                    break;
                case 4:
                    ci();
                    break;
                case 13:
                    Z(J);
                    break;
                case 19:
                    Z(J);
                    break;
                case 10:
                    Ha(i.type._context);
                    break;
                case 22:
                case 23:
                    eu();
            }
            n = n.return;
        }
    if (
        ((gt = e),
        (at = e = en(e.current, null)),
        (yt = Vt = t),
        (ct = 0),
        (vr = null),
        (qa = vo = On = 0),
        (Ot = Xi = null),
        kn !== null)
    ) {
        for (t = 0; t < kn.length; t++)
            if (((n = kn[t]), (i = n.interleaved), i !== null)) {
                n.interleaved = null;
                var r = i.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    (s.next = r), (i.next = o);
                }
                n.pending = i;
            }
        kn = null;
    }
    return e;
}
function Yh(e, t) {
    do {
        var n = at;
        try {
            if ((Fa(), (ys.current = Us), $s)) {
                for (var i = et.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null), (i = i.next);
                }
                $s = !1;
            }
            if (
                ((Ln = 0),
                (ht = ut = et = null),
                (Qi = !1),
                (gr = 0),
                (Ga.current = null),
                n === null || n.return === null)
            ) {
                (ct = 1), (vr = t), (at = null);
                break;
            }
            t: {
                var s = e,
                    o = n.return,
                    l = n,
                    a = t;
                if (
                    ((t = yt),
                    (l.flags |= 32768),
                    a !== null && typeof a == 'object' && typeof a.then == 'function')
                ) {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = pc(o);
                    if (h !== null) {
                        (h.flags &= -257),
                            gc(h, o, l, s, t),
                            h.mode & 1 && hc(s, u, t),
                            (t = h),
                            (a = u);
                        var m = t.updateQueue;
                        if (m === null) {
                            var y = new Set();
                            y.add(a), (t.updateQueue = y);
                        } else m.add(a);
                        break t;
                    } else {
                        if ((t & 1) === 0) {
                            hc(s, u, t), nu();
                            break t;
                        }
                        a = Error(M(426));
                    }
                } else if (G && l.mode & 1) {
                    var x = pc(o);
                    if (x !== null) {
                        (x.flags & 65536) === 0 && (x.flags |= 256),
                            gc(x, o, l, s, t),
                            Aa(fi(a, l));
                        break t;
                    }
                }
                (s = a = fi(a, l)),
                    ct !== 4 && (ct = 2),
                    Xi === null ? (Xi = [s]) : Xi.push(s),
                    (s = o);
                do {
                    switch (s.tag) {
                        case 3:
                            (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                            var p = Th(s, a, t);
                            oc(s, p);
                            break t;
                        case 1:
                            l = a;
                            var g = s.type,
                                v = s.stateNode;
                            if (
                                (s.flags & 128) === 0 &&
                                (typeof g.getDerivedStateFromError == 'function' ||
                                    (v !== null &&
                                        typeof v.componentDidCatch == 'function' &&
                                        (Je === null || !Je.has(v))))
                            ) {
                                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                                var _ = Lh(s, l, t);
                                oc(s, _);
                                break t;
                            }
                    }
                    s = s.return;
                } while (s !== null);
            }
            Xh(n);
        } catch (w) {
            (t = w), at === n && n !== null && (at = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Qh() {
    var e = Ys.current;
    return (Ys.current = Us), e === null ? Us : e;
}
function nu() {
    (ct === 0 || ct === 3 || ct === 2) && (ct = 4),
        gt === null || ((On & 268435455) === 0 && (vo & 268435455) === 0) || Ve(gt, yt);
}
function Xs(e, t) {
    var n = H;
    H |= 2;
    var i = Qh();
    (gt !== e || yt !== t) && ((Me = null), bn(e, t));
    do
        try {
            t0();
            break;
        } catch (r) {
            Yh(e, r);
        }
    while (1);
    if ((Fa(), (H = n), (Ys.current = i), at !== null)) throw Error(M(261));
    return (gt = null), (yt = 0), ct;
}
function t0() {
    for (; at !== null; ) Kh(at);
}
function e0() {
    for (; at !== null && !Mg(); ) Kh(at);
}
function Kh(e) {
    var t = Gh(e.alternate, e, Vt);
    (e.memoizedProps = e.pendingProps), t === null ? Xh(e) : (at = t), (Ga.current = null);
}
function Xh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), (t.flags & 32768) === 0)) {
            if (((n = Qm(n, t, Vt)), n !== null)) {
                at = n;
                return;
            }
        } else {
            if (((n = Km(n, t)), n !== null)) {
                (n.flags &= 32767), (at = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ct = 6), (at = null);
                return;
            }
        }
        if (((t = t.sibling), t !== null)) {
            at = t;
            return;
        }
        at = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
}
function vn(e, t, n) {
    var i = V,
        r = te.transition;
    try {
        (te.transition = null), (V = 1), n0(e, t, n, i);
    } finally {
        (te.transition = r), (V = i);
    }
    return null;
}
function n0(e, t, n, i) {
    do ii();
    while ($e !== null);
    if ((H & 6) !== 0) throw Error(M(327));
    n = e.finishedWork;
    var r = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(M(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
        (Ag(e, s),
        e === gt && ((at = gt = null), (yt = 0)),
        ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
            Kr ||
            ((Kr = !0),
            qh(Ls, function () {
                return ii(), null;
            })),
        (s = (n.flags & 15990) !== 0),
        (n.subtreeFlags & 15990) !== 0 || s)
    ) {
        (s = te.transition), (te.transition = null);
        var o = V;
        V = 1;
        var l = H;
        (H |= 4),
            (Ga.current = null),
            Zm(e, n),
            Wh(n, e),
            km(Rl),
            (Ds = !!zl),
            (Rl = zl = null),
            (e.current = n),
            Gm(n),
            Pg(),
            (H = l),
            (V = o),
            (te.transition = s);
    } else e.current = n;
    if (
        (Kr && ((Kr = !1), ($e = e), (Ks = r)),
        (s = e.pendingLanes),
        s === 0 && (Je = null),
        Lg(n.stateNode),
        It(e, st()),
        t !== null)
    )
        for (i = e.onRecoverableError, n = 0; n < t.length; n++)
            (r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
    if (Qs) throw ((Qs = !1), (e = ta), (ta = null), e);
    return (
        (Ks & 1) !== 0 && e.tag !== 0 && ii(),
        (s = e.pendingLanes),
        (s & 1) !== 0 ? (e === ea ? Zi++ : ((Zi = 0), (ea = e))) : (Zi = 0),
        cn(),
        null
    );
}
function ii() {
    if ($e !== null) {
        var e = Ed(Ks),
            t = te.transition,
            n = V;
        try {
            if (((te.transition = null), (V = 16 > e ? 16 : e), $e === null)) var i = !1;
            else {
                if (((e = $e), ($e = null), (Ks = 0), (H & 6) !== 0)) throw Error(M(331));
                var r = H;
                for (H |= 4, T = e.current; T !== null; ) {
                    var s = T,
                        o = s.child;
                    if ((T.flags & 16) !== 0) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (T = u; T !== null; ) {
                                    var c = T;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ki(8, c, s);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (T = f);
                                    else
                                        for (; T !== null; ) {
                                            c = T;
                                            var d = c.sibling,
                                                h = c.return;
                                            if ((Bh(c), c === u)) {
                                                T = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = h), (T = d);
                                                break;
                                            }
                                            T = h;
                                        }
                                }
                            }
                            var m = s.alternate;
                            if (m !== null) {
                                var y = m.child;
                                if (y !== null) {
                                    m.child = null;
                                    do {
                                        var x = y.sibling;
                                        (y.sibling = null), (y = x);
                                    } while (y !== null);
                                }
                            }
                            T = s;
                        }
                    }
                    if ((s.subtreeFlags & 2064) !== 0 && o !== null) (o.return = s), (T = o);
                    else
                        t: for (; T !== null; ) {
                            if (((s = T), (s.flags & 2048) !== 0))
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ki(9, s, s.return);
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                (p.return = s.return), (T = p);
                                break t;
                            }
                            T = s.return;
                        }
                }
                var g = e.current;
                for (T = g; T !== null; ) {
                    o = T;
                    var v = o.child;
                    if ((o.subtreeFlags & 2064) !== 0 && v !== null) (v.return = o), (T = v);
                    else
                        t: for (o = g; T !== null; ) {
                            if (((l = T), (l.flags & 2048) !== 0))
                                try {
                                    switch (l.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            yo(9, l);
                                    }
                                } catch (w) {
                                    it(l, l.return, w);
                                }
                            if (l === o) {
                                T = null;
                                break t;
                            }
                            var _ = l.sibling;
                            if (_ !== null) {
                                (_.return = l.return), (T = _);
                                break t;
                            }
                            T = l.return;
                        }
                }
                if (((H = r), cn(), _e && typeof _e.onPostCommitFiberRoot == 'function'))
                    try {
                        _e.onPostCommitFiberRoot(ao, e);
                    } catch {}
                i = !0;
            }
            return i;
        } finally {
            (V = n), (te.transition = t);
        }
    }
    return !1;
}
function Ec(e, t, n) {
    (t = fi(n, t)),
        (t = Th(e, t, 1)),
        (e = qe(e, t, 1)),
        (t = Pt()),
        e !== null && (Mr(e, 1, t), It(e, t));
}
function it(e, t, n) {
    if (e.tag === 3) Ec(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ec(t, e, n);
                break;
            } else if (t.tag === 1) {
                var i = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof i.componentDidCatch == 'function' && (Je === null || !Je.has(i)))
                ) {
                    (e = fi(n, e)),
                        (e = Lh(t, e, 1)),
                        (t = qe(t, e, 1)),
                        (e = Pt()),
                        t !== null && (Mr(t, 1, e), It(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function i0(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t),
        (t = Pt()),
        (e.pingedLanes |= e.suspendedLanes & n),
        gt === e &&
            (yt & n) === n &&
            (ct === 4 || (ct === 3 && (yt & 130023424) === yt && 500 > st() - Ja)
                ? bn(e, 0)
                : (qa |= n)),
        It(e, t);
}
function Zh(e, t) {
    t === 0 &&
        ((e.mode & 1) === 0
            ? (t = 1)
            : ((t = Fr), (Fr <<= 1), (Fr & 130023424) === 0 && (Fr = 4194304)));
    var n = Pt();
    (e = Re(e, t)), e !== null && (Mr(e, t, n), It(e, n));
}
function r0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Zh(e, n);
}
function s0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var i = e.stateNode,
                r = e.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            i = e.stateNode;
            break;
        default:
            throw Error(M(314));
    }
    i !== null && i.delete(t), Zh(e, n);
}
var Gh;
Gh = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Nt.current) zt = !0;
        else {
            if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (zt = !1), Ym(e, t, n);
            zt = (e.flags & 131072) !== 0;
        }
    else (zt = !1), G && (t.flags & 1048576) !== 0 && th(t, Hs, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var i = t.type;
            xs(e, t), (e = t.pendingProps);
            var r = li(t, Ct.current);
            ni(t, n), (r = Ya(null, t, i, e, r, n));
            var s = Qa();
            return (
                (t.flags |= 1),
                typeof r == 'object' &&
                r !== null &&
                typeof r.render == 'function' &&
                r.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      At(i) ? ((s = !0), Is(t)) : (s = !1),
                      (t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
                      ja(t),
                      (r.updater = go),
                      (t.stateNode = r),
                      (r._reactInternals = t),
                      Wl(t, i, e, n),
                      (t = Yl(null, t, i, !0, s, n)))
                    : ((t.tag = 0), G && s && Ra(t), Mt(null, t, r, n), (t = t.child)),
                t
            );
        case 16:
            i = t.elementType;
            t: {
                switch (
                    (xs(e, t),
                    (e = t.pendingProps),
                    (r = i._init),
                    (i = r(i._payload)),
                    (t.type = i),
                    (r = t.tag = l0(i)),
                    (e = se(i, e)),
                    r)
                ) {
                    case 0:
                        t = Ul(null, t, i, e, n);
                        break t;
                    case 1:
                        t = vc(null, t, i, e, n);
                        break t;
                    case 11:
                        t = mc(null, t, i, e, n);
                        break t;
                    case 14:
                        t = yc(null, t, i, se(i.type, e), n);
                        break t;
                }
                throw Error(M(306, i, ''));
            }
            return t;
        case 0:
            return (
                (i = t.type),
                (r = t.pendingProps),
                (r = t.elementType === i ? r : se(i, r)),
                Ul(e, t, i, r, n)
            );
        case 1:
            return (
                (i = t.type),
                (r = t.pendingProps),
                (r = t.elementType === i ? r : se(i, r)),
                vc(e, t, i, r, n)
            );
        case 3:
            t: {
                if ((Rh(t), e === null)) throw Error(M(387));
                (i = t.pendingProps),
                    (s = t.memoizedState),
                    (r = s.element),
                    rh(e, t),
                    Vs(t, i, null, n);
                var o = t.memoizedState;
                if (((i = o.element), s.isDehydrated))
                    if (
                        ((s = {
                            element: i,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = s),
                        (t.memoizedState = s),
                        t.flags & 256)
                    ) {
                        (r = fi(Error(M(423)), t)), (t = xc(e, t, i, n, r));
                        break t;
                    } else if (i !== r) {
                        (r = fi(Error(M(424)), t)), (t = xc(e, t, i, n, r));
                        break t;
                    } else
                        for (
                            Wt = Ge(t.stateNode.containerInfo.firstChild),
                                $t = t,
                                G = !0,
                                ae = null,
                                n = ah(t, null, i, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ai(), i === r)) {
                        t = Ne(e, t, n);
                        break t;
                    }
                    Mt(e, t, i, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                uh(t),
                e === null && Bl(t),
                (i = t.type),
                (r = t.pendingProps),
                (s = e !== null ? e.memoizedProps : null),
                (o = r.children),
                Nl(i, r) ? (o = null) : s !== null && Nl(i, s) && (t.flags |= 32),
                zh(e, t),
                Mt(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && Bl(t), null;
        case 13:
            return Nh(e, t, n);
        case 4:
            return (
                Va(t, t.stateNode.containerInfo),
                (i = t.pendingProps),
                e === null ? (t.child = ui(t, null, i, n)) : Mt(e, t, i, n),
                t.child
            );
        case 11:
            return (
                (i = t.type),
                (r = t.pendingProps),
                (r = t.elementType === i ? r : se(i, r)),
                mc(e, t, i, r, n)
            );
        case 7:
            return Mt(e, t, t.pendingProps, n), t.child;
        case 8:
            return Mt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Mt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            t: {
                if (
                    ((i = t.type._context),
                    (r = t.pendingProps),
                    (s = t.memoizedProps),
                    (o = r.value),
                    Y(Bs, i._currentValue),
                    (i._currentValue = o),
                    s !== null)
                )
                    if (fe(s.value, o)) {
                        if (s.children === r.children && !Nt.current) {
                            t = Ne(e, t, n);
                            break t;
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null; ) {
                                    if (a.context === i) {
                                        if (s.tag === 1) {
                                            (a = Oe(-1, n & -n)), (a.tag = 2);
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null
                                                    ? (a.next = a)
                                                    : ((a.next = c.next), (c.next = a)),
                                                    (u.pending = a);
                                            }
                                        }
                                        (s.lanes |= n),
                                            (a = s.alternate),
                                            a !== null && (a.lanes |= n),
                                            jl(s.return, n, t),
                                            (l.lanes |= n);
                                        break;
                                    }
                                    a = a.next;
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (((o = s.return), o === null)) throw Error(M(341));
                                (o.lanes |= n),
                                    (l = o.alternate),
                                    l !== null && (l.lanes |= n),
                                    jl(o, n, t),
                                    (o = s.sibling);
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((s = o.sibling), s !== null)) {
                                        (s.return = o.return), (o = s);
                                        break;
                                    }
                                    o = o.return;
                                }
                            s = o;
                        }
                Mt(e, t, r.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (r = t.type),
                (i = t.pendingProps.children),
                ni(t, n),
                (r = ne(r)),
                (i = i(r)),
                (t.flags |= 1),
                Mt(e, t, i, n),
                t.child
            );
        case 14:
            return (
                (i = t.type), (r = se(i, t.pendingProps)), (r = se(i.type, r)), yc(e, t, i, r, n)
            );
        case 15:
            return Oh(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (i = t.type),
                (r = t.pendingProps),
                (r = t.elementType === i ? r : se(i, r)),
                xs(e, t),
                (t.tag = 1),
                At(i) ? ((e = !0), Is(t)) : (e = !1),
                ni(t, n),
                oh(t, i, r),
                Wl(t, i, r, n),
                Yl(null, t, i, !0, e, n)
            );
        case 19:
            return Ah(e, t, n);
        case 22:
            return Dh(e, t, n);
    }
    throw Error(M(156, t.tag));
};
function qh(e, t) {
    return Cd(e, t);
}
function o0(e, t, n, i) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = i),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Gt(e, t, n, i) {
    return new o0(e, t, n, i);
}
function iu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function l0(e) {
    if (typeof e == 'function') return iu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === ka)) return 11;
        if (e === Sa) return 14;
    }
    return 2;
}
function en(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Gt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ks(e, t, n, i, r, s) {
    var o = 2;
    if (((i = e), typeof e == 'function')) iu(e) && (o = 1);
    else if (typeof e == 'string') o = 5;
    else
        t: switch (e) {
            case jn:
                return Mn(n.children, r, s, t);
            case wa:
                (o = 8), (r |= 8);
                break;
            case hl:
                return (e = Gt(12, n, t, r | 2)), (e.elementType = hl), (e.lanes = s), e;
            case pl:
                return (e = Gt(13, n, t, r)), (e.elementType = pl), (e.lanes = s), e;
            case gl:
                return (e = Gt(19, n, t, r)), (e.elementType = gl), (e.lanes = s), e;
            case ld:
                return xo(n, r, s, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case sd:
                            o = 10;
                            break t;
                        case od:
                            o = 9;
                            break t;
                        case ka:
                            o = 11;
                            break t;
                        case Sa:
                            o = 14;
                            break t;
                        case He:
                            (o = 16), (i = null);
                            break t;
                    }
                throw Error(M(130, e == null ? e : typeof e, ''));
        }
    return (t = Gt(o, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = s), t;
}
function Mn(e, t, n, i) {
    return (e = Gt(7, e, i, t)), (e.lanes = n), e;
}
function xo(e, t, n, i) {
    return (
        (e = Gt(22, e, i, t)),
        (e.elementType = ld),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Jo(e, t, n) {
    return (e = Gt(6, e, null, t)), (e.lanes = n), e;
}
function tl(e, t, n) {
    return (
        (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function a0(e, t, n, i, r) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ro(0)),
        (this.expirationTimes = Ro(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ro(0)),
        (this.identifierPrefix = i),
        (this.onRecoverableError = r),
        (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, i, r, s, o, l, a) {
    return (
        (e = new a0(e, t, n, l, a)),
        t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
        (s = Gt(3, null, null, t)),
        (e.current = s),
        (s.stateNode = e),
        (s.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        ja(s),
        e
    );
}
function u0(e, t, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Bn,
        key: i == null ? null : '' + i,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function Jh(e) {
    if (!e) return on;
    e = e._reactInternals;
    t: {
        if (An(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break t;
                case 1:
                    if (At(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break t;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(M(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (At(n)) return qd(e, n, t);
    }
    return t;
}
function tp(e, t, n, i, r, s, o, l, a) {
    return (
        (e = ru(n, i, !0, e, r, s, o, l, a)),
        (e.context = Jh(null)),
        (n = e.current),
        (i = Pt()),
        (r = tn(n)),
        (s = Oe(i, r)),
        (s.callback = t != null ? t : null),
        qe(n, s, r),
        (e.current.lanes = r),
        Mr(e, r, i),
        It(e, i),
        e
    );
}
function _o(e, t, n, i) {
    var r = t.current,
        s = Pt(),
        o = tn(r);
    return (
        (n = Jh(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Oe(s, o)),
        (t.payload = { element: e }),
        (i = i === void 0 ? null : i),
        i !== null && (t.callback = i),
        (e = qe(r, t, o)),
        e !== null && (ce(e, r, o, s), ms(e, r, o)),
        o
    );
}
function Zs(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Tc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function su(e, t) {
    Tc(e, t), (e = e.alternate) && Tc(e, t);
}
function c0() {
    return null;
}
var ep =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function ou(e) {
    this._internalRoot = e;
}
wo.prototype.render = ou.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    _o(e, t, null, null);
};
wo.prototype.unmount = ou.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dn(function () {
            _o(null, e, null, null);
        }),
            (t[ze] = null);
    }
};
function wo(e) {
    this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Od();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < je.length && t !== 0 && t < je[n].priority; n++);
        je.splice(n, 0, e), n === 0 && zd(e);
    }
};
function lu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ko(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Lc() {}
function f0(e, t, n, i, r) {
    if (r) {
        if (typeof i == 'function') {
            var s = i;
            i = function () {
                var u = Zs(o);
                s.call(u);
            };
        }
        var o = tp(t, i, e, 0, null, !1, !1, '', Lc);
        return (
            (e._reactRootContainer = o),
            (e[ze] = o.current),
            cr(e.nodeType === 8 ? e.parentNode : e),
            Dn(),
            o
        );
    }
    for (; (r = e.lastChild); ) e.removeChild(r);
    if (typeof i == 'function') {
        var l = i;
        i = function () {
            var u = Zs(a);
            l.call(u);
        };
    }
    var a = ru(e, 0, !1, null, null, !1, !1, '', Lc);
    return (
        (e._reactRootContainer = a),
        (e[ze] = a.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        Dn(function () {
            _o(t, a, n, i);
        }),
        a
    );
}
function So(e, t, n, i, r) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof r == 'function') {
            var l = r;
            r = function () {
                var a = Zs(o);
                l.call(a);
            };
        }
        _o(t, o, e, r);
    } else o = f0(n, t, e, r, i);
    return Zs(o);
}
Td = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ni(t.pendingLanes);
                n !== 0 && (Ma(t, n | 1), It(t, st()), (H & 6) === 0 && ((di = st() + 500), cn()));
            }
            break;
        case 13:
            Dn(function () {
                var i = Re(e, 1);
                if (i !== null) {
                    var r = Pt();
                    ce(i, e, 1, r);
                }
            }),
                su(e, 1);
    }
};
Pa = function (e) {
    if (e.tag === 13) {
        var t = Re(e, 134217728);
        if (t !== null) {
            var n = Pt();
            ce(t, e, 134217728, n);
        }
        su(e, 134217728);
    }
};
Ld = function (e) {
    if (e.tag === 13) {
        var t = tn(e),
            n = Re(e, t);
        if (n !== null) {
            var i = Pt();
            ce(n, e, t, i);
        }
        su(e, t);
    }
};
Od = function () {
    return V;
};
Dd = function (e, t) {
    var n = V;
    try {
        return (V = e), t();
    } finally {
        V = n;
    }
};
bl = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((vl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var i = n[t];
                    if (i !== e && i.form === e.form) {
                        var r = ho(i);
                        if (!r) throw Error(M(90));
                        ud(i), vl(i, r);
                    }
                }
            }
            break;
        case 'textarea':
            fd(e, n);
            break;
        case 'select':
            (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
    }
};
vd = tu;
xd = Dn;
var d0 = { usingClientEntryPoint: !1, Events: [Er, Un, ho, md, yd, tu] },
    Mi = {
        findFiberByHostInstance: wn,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    h0 = {
        bundleType: Mi.bundleType,
        version: Mi.version,
        rendererPackageName: Mi.rendererPackageName,
        rendererConfig: Mi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ie.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = kd(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Mi.findFiberByHostInstance || c0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xr.isDisabled && Xr.supportsFiber)
        try {
            (ao = Xr.inject(h0)), (_e = Xr);
        } catch {}
}
Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0;
Yt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lu(t)) throw Error(M(200));
    return u0(e, t, null, n);
};
Yt.createRoot = function (e, t) {
    if (!lu(e)) throw Error(M(299));
    var n = !1,
        i = '',
        r = ep;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
        (t = ru(e, 1, !1, null, null, n, !1, i, r)),
        (e[ze] = t.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        new ou(t)
    );
};
Yt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(M(188))
            : ((e = Object.keys(e).join(',')), Error(M(268, e)));
    return (e = kd(t)), (e = e === null ? null : e.stateNode), e;
};
Yt.flushSync = function (e) {
    return Dn(e);
};
Yt.hydrate = function (e, t, n) {
    if (!ko(t)) throw Error(M(200));
    return So(null, e, t, !0, n);
};
Yt.hydrateRoot = function (e, t, n) {
    if (!lu(e)) throw Error(M(405));
    var i = (n != null && n.hydratedSources) || null,
        r = !1,
        s = '',
        o = ep;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (r = !0),
            n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = tp(t, null, e, 1, n != null ? n : null, r, !1, s, o)),
        (e[ze] = t.current),
        cr(e),
        i)
    )
        for (e = 0; e < i.length; e++)
            (n = i[e]),
                (r = n._getVersion),
                (r = r(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, r])
                    : t.mutableSourceEagerHydrationData.push(n, r);
    return new wo(t);
};
Yt.render = function (e, t, n) {
    if (!ko(t)) throw Error(M(200));
    return So(null, e, t, !1, n);
};
Yt.unmountComponentAtNode = function (e) {
    if (!ko(e)) throw Error(M(40));
    return e._reactRootContainer
        ? (Dn(function () {
              So(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ze] = null);
              });
          }),
          !0)
        : !1;
};
Yt.unstable_batchedUpdates = tu;
Yt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
    if (!ko(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return So(e, t, n, !1, i);
};
Yt.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
    function t() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (n) {
                console.error(n);
            }
    }
    t(), (e.exports = Yt);
})(td);
var Oc = td.exports;
(fl.createRoot = Oc.createRoot), (fl.hydrateRoot = Oc.hydrateRoot);
const p0 = './assets/fei_logo_transparent.2aae0e98.png';
var np = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    Dc = cl.createContext && cl.createContext(np),
    Co = { exports: {} },
    bo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0 = F.exports,
    m0 = Symbol.for('react.element'),
    y0 = Symbol.for('react.fragment'),
    v0 = Object.prototype.hasOwnProperty,
    x0 = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    _0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ip(e, t, n) {
    var i,
        r = {},
        s = null,
        o = null;
    n !== void 0 && (s = '' + n),
        t.key !== void 0 && (s = '' + t.key),
        t.ref !== void 0 && (o = t.ref);
    for (i in t) v0.call(t, i) && !_0.hasOwnProperty(i) && (r[i] = t[i]);
    if (e && e.defaultProps) for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
    return { $$typeof: m0, type: e, key: s, ref: o, props: r, _owner: x0.current };
}
bo.Fragment = y0;
bo.jsx = ip;
bo.jsxs = ip;
(function (e) {
    e.exports = bo;
})(Co);
const w0 = Co.exports.Fragment,
    b = Co.exports.jsx,
    U = Co.exports.jsxs;
var nn =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (nn =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++) {
                            t = arguments[n];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        }
                        return e;
                    }),
                nn.apply(this, arguments)
            );
        },
    k0 =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var n = {};
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
            if (e != null && typeof Object.getOwnPropertySymbols == 'function')
                for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                    t.indexOf(i[r]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                        (n[i[r]] = e[i[r]]);
            return n;
        };
function rp(e) {
    return (
        e &&
        e.map(function (t, n) {
            return cl.createElement(t.tag, nn({ key: n }, t.attr), rp(t.child));
        })
    );
}
function fn(e) {
    return function (t) {
        return b(S0, { ...nn({ attr: nn({}, e.attr) }, t), children: rp(e.child) });
    };
}
function S0(e) {
    var t = function (n) {
        var i = e.attr,
            r = e.size,
            s = e.title,
            o = k0(e, ['attr', 'size', 'title']),
            l = r || n.size || '1em',
            a;
        return (
            n.className && (a = n.className),
            e.className && (a = (a ? a + ' ' : '') + e.className),
            U('svg', {
                ...nn(
                    { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
                    n.attr,
                    i,
                    o,
                    {
                        className: a,
                        style: nn(nn({ color: e.color || n.color }, n.style), e.style),
                        height: l,
                        width: l,
                        xmlns: 'http://www.w3.org/2000/svg',
                    }
                ),
                children: [s && b('title', { children: s }), e.children],
            })
        );
    };
    return Dc !== void 0
        ? b(Dc.Consumer, {
              children: function (n) {
                  return t(n);
              },
          })
        : t(np);
}
function C0(e) {
    return fn({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
                },
            },
        ],
    })(e);
}
function b0(e) {
    return fn({
        tag: 'svg',
        attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z',
                },
            },
        ],
    })(e);
}
const M0 = ({ setIsModalOpen: e }) =>
        U('div', {
            className: 'flex w-1/1 p-3 justify-between bg-slate-400',
            children: [
                b('div', {
                    className: 'self-center w-1/3',
                    children: b('img', { src: p0, alt: 'Logo', className: 'w-20 self-center' }),
                }),
                b('div', {
                    className: 'flex justify-center w-1/3',
                    children: b('h1', {
                        className: 'text-blue-600 self-center font-bruno text-2xl ',
                        children: 'Arduino controll software',
                    }),
                }),
                b('div', {
                    className: 'flex justify-end w-1/3',
                    onClick: () => {
                        e(!0);
                    },
                    children: b(C0, { className: 'w-8 h-8 text-blue-600 hover:text-blue-300' }),
                }),
            ],
        }),
    P0 = ({ angle: e }) =>
        b('div', {
            id: 'animation',
            className: 'flex justify-center p-2 items-center',
            children: U('svg', {
                width: '228',
                height: '208',
                viewBox: '0 0 228 208',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    b('g', {
                        filter: 'url(#filter0_d_0_1)',
                        children: b('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M104 180H204V200H104L4 200V180L104 180ZM109 188C109 185.239 111.239 183 114 183C116.761 183 119 185.239 119 188V193C119 195.761 116.761 198 114 198C111.239 198 109 195.761 109 193V188ZM154 183C151.239 183 149 185.239 149 188V193C149 195.761 151.239 198 154 198C156.761 198 159 195.761 159 193V188C159 185.239 156.761 183 154 183ZM169 188C169 185.239 171.239 183 174 183C176.761 183 179 185.239 179 188V193C179 195.761 176.761 198 174 198C171.239 198 169 195.761 169 193V188ZM194 183C191.239 183 189 185.239 189 188V193C189 195.761 191.239 198 194 198C196.761 198 199 195.761 199 193V188C199 185.239 196.761 183 194 183ZM129 188C129 185.239 131.239 183 134 183C136.761 183 139 185.239 139 188V193C139 195.761 136.761 198 134 198C131.239 198 129 195.761 129 193V188ZM9 188C9 185.239 11.2386 183 14 183C16.7614 183 19 185.239 19 188V193C19 195.761 16.7614 198 14 198C11.2386 198 9 195.761 9 193V188ZM54 183C51.2386 183 49 185.239 49 188V193C49 195.761 51.2386 198 54 198C56.7614 198 59 195.761 59 193V188C59 185.239 56.7614 183 54 183ZM69 188C69 185.239 71.2386 183 74 183C76.7614 183 79 185.239 79 188V193C79 195.761 76.7614 198 74 198C71.2386 198 69 195.761 69 193V188ZM94 183C91.2386 183 89 185.239 89 188V193C89 195.761 91.2386 198 94 198C96.7614 198 99 195.761 99 193V188C99 185.239 96.7614 183 94 183ZM29 188C29 185.239 31.2386 183 34 183C36.7614 183 39 185.239 39 188V193C39 195.761 36.7614 198 34 198C31.2386 198 29 195.761 29 193V188Z',
                            fill: '#A30000',
                        }),
                    }),
                    b('g', {
                        filter: 'url(#filter1_d_0_1)',
                        children: b('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M204 200V40H224V200H204ZM212 195C209.239 195 207 192.761 207 190C207 187.239 209.239 185 212 185H217C219.761 185 222 187.239 222 190C222 192.761 219.761 195 217 195H212ZM207 170C207 172.761 209.239 175 212 175H217C219.761 175 222 172.761 222 170C222 167.239 219.761 165 217 165H212C209.239 165 207 167.239 207 170ZM212 155C209.239 155 207 152.761 207 150C207 147.239 209.239 145 212 145H217C219.761 145 222 147.239 222 150C222 152.761 219.761 155 217 155H212ZM207 130C207 132.761 209.239 135 212 135H217C219.761 135 222 132.761 222 130C222 127.239 219.761 125 217 125H212C209.239 125 207 127.239 207 130ZM212 115C209.239 115 207 112.761 207 110C207 107.239 209.239 105 212 105H217C219.761 105 222 107.239 222 110C222 112.761 219.761 115 217 115H212ZM207 90C207 92.7614 209.239 95 212 95H217C219.761 95 222 92.7614 222 90C222 87.2386 219.761 85 217 85H212C209.239 85 207 87.2386 207 90ZM212 75C209.239 75 207 72.7614 207 70C207 67.2386 209.239 65 212 65H217C219.761 65 222 67.2386 222 70C222 72.7614 219.761 75 217 75H212ZM207 50C207 52.7614 209.239 55 212 55H217C219.761 55 222 52.7614 222 50C222 47.2386 219.761 45 217 45H212C209.239 45 207 47.2386 207 50Z',
                            fill: '#0010A3',
                        }),
                    }),
                    b('circle', { cx: '214', cy: '70', r: '5', fill: 'black' }),
                    b('path', { d: 'M53 138H93V158H53V138Z', fill: 'black' }),
                    b('path', { d: 'M53 158H58V180H53V158Z', fill: 'black' }),
                    b('path', { d: 'M88 158H93V180H88V158Z', fill: 'black' }),
                    b('line', { x1: '214', y1: '70.5', x2: '34', y2: e - 50, stroke: '#A30000' }),
                    b('g', {
                        filter: 'url(#filter2_d_0_1)',
                        children: b('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M204 0V40V200H224V40V0H204ZM212 25C209.239 25 207 27.2386 207 30C207 32.7614 209.239 35 212 35H217C219.761 35 222 32.7614 222 30C222 27.2386 219.761 25 217 25H212ZM207 10C207 7.23858 209.239 5 212 5H217C219.761 5 222 7.23858 222 10C222 12.7614 219.761 15 217 15H212C209.239 15 207 12.7614 207 10ZM207 190C207 192.761 209.239 195 212 195H217C219.761 195 222 192.761 222 190C222 187.239 219.761 185 217 185H212C209.239 185 207 187.239 207 190ZM212 175C209.239 175 207 172.761 207 170C207 167.239 209.239 165 212 165H217C219.761 165 222 167.239 222 170C222 172.761 219.761 175 217 175H212ZM207 150C207 152.761 209.239 155 212 155H217C219.761 155 222 152.761 222 150C222 147.239 219.761 145 217 145H212C209.239 145 207 147.239 207 150ZM212 135C209.239 135 207 132.761 207 130C207 127.239 209.239 125 212 125H217C219.761 125 222 127.239 222 130C222 132.761 219.761 135 217 135H212ZM207 110C207 112.761 209.239 115 212 115H217C219.761 115 222 112.761 222 110C222 107.239 219.761 105 217 105H212C209.239 105 207 107.239 207 110ZM212 95C209.239 95 207 92.7614 207 90C207 87.2386 209.239 85 212 85H217C219.761 85 222 87.2386 222 90C222 92.7614 219.761 95 217 95H212ZM207 70C207 72.7614 209.239 75 212 75H217C219.761 75 222 72.7614 222 70C222 67.2386 219.761 65 217 65H212C209.239 65 207 67.2386 207 70ZM212 55C209.239 55 207 52.7614 207 50C207 47.2386 209.239 45 212 45H217C219.761 45 222 47.2386 222 50C222 52.7614 219.761 55 217 55H212Z',
                            fill: '#0010A3',
                        }),
                    }),
                    U('defs', {
                        children: [
                            U('filter', {
                                id: 'filter0_d_0_1',
                                x: '0',
                                y: '180',
                                width: '208',
                                height: '28',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    b('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix',
                                    }),
                                    b('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha',
                                    }),
                                    b('feOffset', { dy: '4' }),
                                    b('feGaussianBlur', { stdDeviation: '2' }),
                                    b('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                                    b('feColorMatrix', {
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_0_1',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_0_1',
                                        result: 'shape',
                                    }),
                                ],
                            }),
                            U('filter', {
                                id: 'filter1_d_0_1',
                                x: '200',
                                y: '40',
                                width: '28',
                                height: '168',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    b('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix',
                                    }),
                                    b('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha',
                                    }),
                                    b('feOffset', { dy: '4' }),
                                    b('feGaussianBlur', { stdDeviation: '2' }),
                                    b('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                                    b('feColorMatrix', {
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_0_1',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_0_1',
                                        result: 'shape',
                                    }),
                                ],
                            }),
                            U('filter', {
                                id: 'filter2_d_0_1',
                                x: '200',
                                y: '0',
                                width: '28',
                                height: '208',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    b('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix',
                                    }),
                                    b('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha',
                                    }),
                                    b('feOffset', { dy: '4' }),
                                    b('feGaussianBlur', { stdDeviation: '2' }),
                                    b('feComposite', { in2: 'hardAlpha', operator: 'out' }),
                                    b('feColorMatrix', {
                                        type: 'matrix',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_0_1',
                                    }),
                                    b('feBlend', {
                                        mode: 'normal',
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_0_1',
                                        result: 'shape',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Lr(e) {
    return (e + 0.5) | 0;
}
const Ue = (e, t, n) => Math.max(Math.min(e, n), t);
function Ii(e) {
    return Ue(Lr(e * 2.55), 0, 255);
}
function rn(e) {
    return Ue(Lr(e * 255), 0, 255);
}
function Ee(e) {
    return Ue(Lr(e / 2.55) / 100, 0, 1);
}
function zc(e) {
    return Ue(Lr(e * 100), 0, 100);
}
const Kt = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    },
    ra = [...'0123456789ABCDEF'],
    E0 = (e) => ra[e & 15],
    T0 = (e) => ra[(e & 240) >> 4] + ra[e & 15],
    Zr = (e) => (e & 240) >> 4 === (e & 15),
    L0 = (e) => Zr(e.r) && Zr(e.g) && Zr(e.b) && Zr(e.a);
function O0(e) {
    var t = e.length,
        n;
    return (
        e[0] === '#' &&
            (t === 4 || t === 5
                ? (n = {
                      r: 255 & (Kt[e[1]] * 17),
                      g: 255 & (Kt[e[2]] * 17),
                      b: 255 & (Kt[e[3]] * 17),
                      a: t === 5 ? Kt[e[4]] * 17 : 255,
                  })
                : (t === 7 || t === 9) &&
                  (n = {
                      r: (Kt[e[1]] << 4) | Kt[e[2]],
                      g: (Kt[e[3]] << 4) | Kt[e[4]],
                      b: (Kt[e[5]] << 4) | Kt[e[6]],
                      a: t === 9 ? (Kt[e[7]] << 4) | Kt[e[8]] : 255,
                  })),
        n
    );
}
const D0 = (e, t) => (e < 255 ? t(e) : '');
function z0(e) {
    var t = L0(e) ? E0 : T0;
    return e ? '#' + t(e.r) + t(e.g) + t(e.b) + D0(e.a, t) : void 0;
}
const R0 =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function sp(e, t, n) {
    const i = t * Math.min(n, 1 - n),
        r = (s, o = (s + e / 30) % 12) => n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [r(0), r(8), r(4)];
}
function N0(e, t, n) {
    const i = (r, s = (r + e / 60) % 6) => n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
    return [i(5), i(3), i(1)];
}
function A0(e, t, n) {
    const i = sp(e, 1, 0.5);
    let r;
    for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
        (i[r] *= 1 - t - n), (i[r] += t);
    return i;
}
function I0(e, t, n, i, r) {
    return e === r ? (t - n) / i + (t < n ? 6 : 0) : t === r ? (n - e) / i + 2 : (e - t) / i + 4;
}
function au(e) {
    const n = e.r / 255,
        i = e.g / 255,
        r = e.b / 255,
        s = Math.max(n, i, r),
        o = Math.min(n, i, r),
        l = (s + o) / 2;
    let a, u, c;
    return (
        s !== o &&
            ((c = s - o),
            (u = l > 0.5 ? c / (2 - s - o) : c / (s + o)),
            (a = I0(n, i, r, c, s)),
            (a = a * 60 + 0.5)),
        [a | 0, u || 0, l]
    );
}
function uu(e, t, n, i) {
    return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(rn);
}
function cu(e, t, n) {
    return uu(sp, e, t, n);
}
function F0(e, t, n) {
    return uu(A0, e, t, n);
}
function H0(e, t, n) {
    return uu(N0, e, t, n);
}
function op(e) {
    return ((e % 360) + 360) % 360;
}
function B0(e) {
    const t = R0.exec(e);
    let n = 255,
        i;
    if (!t) return;
    t[5] !== i && (n = t[6] ? Ii(+t[5]) : rn(+t[5]));
    const r = op(+t[2]),
        s = +t[3] / 100,
        o = +t[4] / 100;
    return (
        t[1] === 'hwb' ? (i = F0(r, s, o)) : t[1] === 'hsv' ? (i = H0(r, s, o)) : (i = cu(r, s, o)),
        { r: i[0], g: i[1], b: i[2], a: n }
    );
}
function j0(e, t) {
    var n = au(e);
    (n[0] = op(n[0] + t)), (n = cu(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function V0(e) {
    if (!e) return;
    const t = au(e),
        n = t[0],
        i = zc(t[1]),
        r = zc(t[2]);
    return e.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${Ee(e.a)})` : `hsl(${n}, ${i}%, ${r}%)`;
}
const Rc = {
        x: 'dark',
        Z: 'light',
        Y: 're',
        X: 'blu',
        W: 'gr',
        V: 'medium',
        U: 'slate',
        A: 'ee',
        T: 'ol',
        S: 'or',
        B: 'ra',
        C: 'lateg',
        D: 'ights',
        R: 'in',
        Q: 'turquois',
        E: 'hi',
        P: 'ro',
        O: 'al',
        N: 'le',
        M: 'de',
        L: 'yello',
        F: 'en',
        K: 'ch',
        G: 'arks',
        H: 'ea',
        I: 'ightg',
        J: 'wh',
    },
    Nc = {
        OiceXe: 'f0f8ff',
        antiquewEte: 'faebd7',
        aqua: 'ffff',
        aquamarRe: '7fffd4',
        azuY: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '0',
        blanKedOmond: 'ffebcd',
        Xe: 'ff',
        XeviTet: '8a2be2',
        bPwn: 'a52a2a',
        burlywood: 'deb887',
        caMtXe: '5f9ea0',
        KartYuse: '7fff00',
        KocTate: 'd2691e',
        cSO: 'ff7f50',
        cSnflowerXe: '6495ed',
        cSnsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: 'ffff',
        xXe: '8b',
        xcyan: '8b8b',
        xgTMnPd: 'b8860b',
        xWay: 'a9a9a9',
        xgYF: '6400',
        xgYy: 'a9a9a9',
        xkhaki: 'bdb76b',
        xmagFta: '8b008b',
        xTivegYF: '556b2f',
        xSange: 'ff8c00',
        xScEd: '9932cc',
        xYd: '8b0000',
        xsOmon: 'e9967a',
        xsHgYF: '8fbc8f',
        xUXe: '483d8b',
        xUWay: '2f4f4f',
        xUgYy: '2f4f4f',
        xQe: 'ced1',
        xviTet: '9400d3',
        dAppRk: 'ff1493',
        dApskyXe: 'bfff',
        dimWay: '696969',
        dimgYy: '696969',
        dodgerXe: '1e90ff',
        fiYbrick: 'b22222',
        flSOwEte: 'fffaf0',
        foYstWAn: '228b22',
        fuKsia: 'ff00ff',
        gaRsbSo: 'dcdcdc',
        ghostwEte: 'f8f8ff',
        gTd: 'ffd700',
        gTMnPd: 'daa520',
        Way: '808080',
        gYF: '8000',
        gYFLw: 'adff2f',
        gYy: '808080',
        honeyMw: 'f0fff0',
        hotpRk: 'ff69b4',
        RdianYd: 'cd5c5c',
        Rdigo: '4b0082',
        ivSy: 'fffff0',
        khaki: 'f0e68c',
        lavFMr: 'e6e6fa',
        lavFMrXsh: 'fff0f5',
        lawngYF: '7cfc00',
        NmoncEffon: 'fffacd',
        ZXe: 'add8e6',
        ZcSO: 'f08080',
        Zcyan: 'e0ffff',
        ZgTMnPdLw: 'fafad2',
        ZWay: 'd3d3d3',
        ZgYF: '90ee90',
        ZgYy: 'd3d3d3',
        ZpRk: 'ffb6c1',
        ZsOmon: 'ffa07a',
        ZsHgYF: '20b2aa',
        ZskyXe: '87cefa',
        ZUWay: '778899',
        ZUgYy: '778899',
        ZstAlXe: 'b0c4de',
        ZLw: 'ffffe0',
        lime: 'ff00',
        limegYF: '32cd32',
        lRF: 'faf0e6',
        magFta: 'ff00ff',
        maPon: '800000',
        VaquamarRe: '66cdaa',
        VXe: 'cd',
        VScEd: 'ba55d3',
        VpurpN: '9370db',
        VsHgYF: '3cb371',
        VUXe: '7b68ee',
        VsprRggYF: 'fa9a',
        VQe: '48d1cc',
        VviTetYd: 'c71585',
        midnightXe: '191970',
        mRtcYam: 'f5fffa',
        mistyPse: 'ffe4e1',
        moccasR: 'ffe4b5',
        navajowEte: 'ffdead',
        navy: '80',
        Tdlace: 'fdf5e6',
        Tive: '808000',
        TivedBb: '6b8e23',
        Sange: 'ffa500',
        SangeYd: 'ff4500',
        ScEd: 'da70d6',
        pOegTMnPd: 'eee8aa',
        pOegYF: '98fb98',
        pOeQe: 'afeeee',
        pOeviTetYd: 'db7093',
        papayawEp: 'ffefd5',
        pHKpuff: 'ffdab9',
        peru: 'cd853f',
        pRk: 'ffc0cb',
        plum: 'dda0dd',
        powMrXe: 'b0e0e6',
        purpN: '800080',
        YbeccapurpN: '663399',
        Yd: 'ff0000',
        Psybrown: 'bc8f8f',
        PyOXe: '4169e1',
        saddNbPwn: '8b4513',
        sOmon: 'fa8072',
        sandybPwn: 'f4a460',
        sHgYF: '2e8b57',
        sHshell: 'fff5ee',
        siFna: 'a0522d',
        silver: 'c0c0c0',
        skyXe: '87ceeb',
        UXe: '6a5acd',
        UWay: '708090',
        UgYy: '708090',
        snow: 'fffafa',
        sprRggYF: 'ff7f',
        stAlXe: '4682b4',
        tan: 'd2b48c',
        teO: '8080',
        tEstN: 'd8bfd8',
        tomato: 'ff6347',
        Qe: '40e0d0',
        viTet: 'ee82ee',
        JHt: 'f5deb3',
        wEte: 'ffffff',
        wEtesmoke: 'f5f5f5',
        Lw: 'ffff00',
        LwgYF: '9acd32',
    };
function W0() {
    const e = {},
        t = Object.keys(Nc),
        n = Object.keys(Rc);
    let i, r, s, o, l;
    for (i = 0; i < t.length; i++) {
        for (o = l = t[i], r = 0; r < n.length; r++) (s = n[r]), (l = l.replace(s, Rc[s]));
        (s = parseInt(Nc[o], 16)), (e[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return e;
}
let Gr;
function $0(e) {
    Gr || ((Gr = W0()), (Gr.transparent = [0, 0, 0, 0]));
    const t = Gr[e.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const U0 =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Y0(e) {
    const t = U0.exec(e);
    let n = 255,
        i,
        r,
        s;
    if (!!t) {
        if (t[7] !== i) {
            const o = +t[7];
            n = t[8] ? Ii(o) : Ue(o * 255, 0, 255);
        }
        return (
            (i = +t[1]),
            (r = +t[3]),
            (s = +t[5]),
            (i = 255 & (t[2] ? Ii(i) : Ue(i, 0, 255))),
            (r = 255 & (t[4] ? Ii(r) : Ue(r, 0, 255))),
            (s = 255 & (t[6] ? Ii(s) : Ue(s, 0, 255))),
            { r: i, g: r, b: s, a: n }
        );
    }
}
function Q0(e) {
    return (
        e &&
        (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Ee(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`)
    );
}
const el = (e) => (e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055),
    Hn = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function K0(e, t, n) {
    const i = Hn(Ee(e.r)),
        r = Hn(Ee(e.g)),
        s = Hn(Ee(e.b));
    return {
        r: rn(el(i + n * (Hn(Ee(t.r)) - i))),
        g: rn(el(r + n * (Hn(Ee(t.g)) - r))),
        b: rn(el(s + n * (Hn(Ee(t.b)) - s))),
        a: e.a + n * (t.a - e.a),
    };
}
function qr(e, t, n) {
    if (e) {
        let i = au(e);
        (i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
            (i = cu(i)),
            (e.r = i[0]),
            (e.g = i[1]),
            (e.b = i[2]);
    }
}
function lp(e, t) {
    return e && Object.assign(t || {}, e);
}
function Ac(e) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
        Array.isArray(e)
            ? e.length >= 3 &&
              ((t = { r: e[0], g: e[1], b: e[2], a: 255 }), e.length > 3 && (t.a = rn(e[3])))
            : ((t = lp(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = rn(t.a))),
        t
    );
}
function X0(e) {
    return e.charAt(0) === 'r' ? Y0(e) : B0(e);
}
class xr {
    constructor(t) {
        if (t instanceof xr) return t;
        const n = typeof t;
        let i;
        n === 'object' ? (i = Ac(t)) : n === 'string' && (i = O0(t) || $0(t) || X0(t)),
            (this._rgb = i),
            (this._valid = !!i);
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var t = lp(this._rgb);
        return t && (t.a = Ee(t.a)), t;
    }
    set rgb(t) {
        this._rgb = Ac(t);
    }
    rgbString() {
        return this._valid ? Q0(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? z0(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? V0(this._rgb) : void 0;
    }
    mix(t, n) {
        if (t) {
            const i = this.rgb,
                r = t.rgb;
            let s;
            const o = n === s ? 0.5 : n,
                l = 2 * o - 1,
                a = i.a - r.a,
                u = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
            (s = 1 - u),
                (i.r = 255 & (u * i.r + s * r.r + 0.5)),
                (i.g = 255 & (u * i.g + s * r.g + 0.5)),
                (i.b = 255 & (u * i.b + s * r.b + 0.5)),
                (i.a = o * i.a + (1 - o) * r.a),
                (this.rgb = i);
        }
        return this;
    }
    interpolate(t, n) {
        return t && (this._rgb = K0(this._rgb, t._rgb, n)), this;
    }
    clone() {
        return new xr(this.rgb);
    }
    alpha(t) {
        return (this._rgb.a = rn(t)), this;
    }
    clearer(t) {
        const n = this._rgb;
        return (n.a *= 1 - t), this;
    }
    greyscale() {
        const t = this._rgb,
            n = Lr(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
        return (t.r = t.g = t.b = n), this;
    }
    opaquer(t) {
        const n = this._rgb;
        return (n.a *= 1 + t), this;
    }
    negate() {
        const t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
        return qr(this._rgb, 2, t), this;
    }
    darken(t) {
        return qr(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return qr(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return qr(this._rgb, 1, -t), this;
    }
    rotate(t) {
        return j0(this._rgb, t), this;
    }
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Se() {}
const Z0 = (() => {
    let e = 0;
    return () => e++;
})();
function X(e) {
    return e === null || typeof e > 'u';
}
function tt(e) {
    if (Array.isArray && Array.isArray(e)) return !0;
    const t = Object.prototype.toString.call(e);
    return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function B(e) {
    return e !== null && Object.prototype.toString.call(e) === '[object Object]';
}
function pt(e) {
    return (typeof e == 'number' || e instanceof Number) && isFinite(+e);
}
function jt(e, t) {
    return pt(e) ? e : t;
}
function A(e, t) {
    return typeof e > 'u' ? t : e;
}
const G0 = (e, t) => (typeof e == 'string' && e.endsWith('%') ? (parseFloat(e) / 100) * t : +e);
function $(e, t, n) {
    if (e && typeof e.call == 'function') return e.apply(n, t);
}
function j(e, t, n, i) {
    let r, s, o;
    if (tt(e))
        if (((s = e.length), i)) for (r = s - 1; r >= 0; r--) t.call(n, e[r], r);
        else for (r = 0; r < s; r++) t.call(n, e[r], r);
    else if (B(e))
        for (o = Object.keys(e), s = o.length, r = 0; r < s; r++) t.call(n, e[o[r]], o[r]);
}
function Gs(e, t) {
    let n, i, r, s;
    if (!e || !t || e.length !== t.length) return !1;
    for (n = 0, i = e.length; n < i; ++n)
        if (((r = e[n]), (s = t[n]), r.datasetIndex !== s.datasetIndex || r.index !== s.index))
            return !1;
    return !0;
}
function qs(e) {
    if (tt(e)) return e.map(qs);
    if (B(e)) {
        const t = Object.create(null),
            n = Object.keys(e),
            i = n.length;
        let r = 0;
        for (; r < i; ++r) t[n[r]] = qs(e[n[r]]);
        return t;
    }
    return e;
}
function ap(e) {
    return ['__proto__', 'prototype', 'constructor'].indexOf(e) === -1;
}
function q0(e, t, n, i) {
    if (!ap(e)) return;
    const r = t[e],
        s = n[e];
    B(r) && B(s) ? _r(r, s, i) : (t[e] = qs(s));
}
function _r(e, t, n) {
    const i = tt(t) ? t : [t],
        r = i.length;
    if (!B(e)) return e;
    n = n || {};
    const s = n.merger || q0;
    let o;
    for (let l = 0; l < r; ++l) {
        if (((o = i[l]), !B(o))) continue;
        const a = Object.keys(o);
        for (let u = 0, c = a.length; u < c; ++u) s(a[u], e, o, n);
    }
    return e;
}
function Gi(e, t) {
    return _r(e, t, { merger: J0 });
}
function J0(e, t, n) {
    if (!ap(e)) return;
    const i = t[e],
        r = n[e];
    B(i) && B(r) ? Gi(i, r) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = qs(r));
}
const Ic = { '': (e) => e, x: (e) => e.x, y: (e) => e.y };
function t1(e) {
    const t = e.split('.'),
        n = [];
    let i = '';
    for (const r of t)
        (i += r), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = ''));
    return n;
}
function e1(e) {
    const t = t1(e);
    return (n) => {
        for (const i of t) {
            if (i === '') break;
            n = n && n[i];
        }
        return n;
    };
}
function Js(e, t) {
    return (Ic[t] || (Ic[t] = e1(t)))(e);
}
function fu(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
const de = (e) => typeof e < 'u',
    ln = (e) => typeof e == 'function',
    Fc = (e, t) => {
        if (e.size !== t.size) return !1;
        for (const n of e) if (!t.has(n)) return !1;
        return !0;
    };
function n1(e) {
    return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}
const dt = Math.PI,
    ee = 2 * dt,
    i1 = ee + dt,
    to = Number.POSITIVE_INFINITY,
    r1 = dt / 180,
    Rt = dt / 2,
    hn = dt / 4,
    Hc = (dt * 2) / 3,
    Ye = Math.log10,
    hi = Math.sign;
function qi(e, t, n) {
    return Math.abs(e - t) < n;
}
function Bc(e) {
    const t = Math.round(e);
    e = qi(e, t, e / 1e3) ? t : e;
    const n = Math.pow(10, Math.floor(Ye(e))),
        i = e / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function s1(e) {
    const t = [],
        n = Math.sqrt(e);
    let i;
    for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i));
    return n === (n | 0) && t.push(n), t.sort((r, s) => r - s).pop(), t;
}
function wr(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
}
function o1(e, t) {
    const n = Math.round(e);
    return n - t <= e && n + t >= e;
}
function up(e, t, n) {
    let i, r, s;
    for (i = 0, r = e.length; i < r; i++)
        (s = e[i][n]), isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function Qe(e) {
    return e * (dt / 180);
}
function du(e) {
    return e * (180 / dt);
}
function jc(e) {
    if (!pt(e)) return;
    let t = 1,
        n = 0;
    for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
    return n;
}
function l1(e, t) {
    const n = t.x - e.x,
        i = t.y - e.y,
        r = Math.sqrt(n * n + i * i);
    let s = Math.atan2(i, n);
    return s < -0.5 * dt && (s += ee), { angle: s, distance: r };
}
function sa(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function a1(e, t) {
    return ((e - t + i1) % ee) - dt;
}
function le(e) {
    return ((e % ee) + ee) % ee;
}
function cp(e, t, n, i) {
    const r = le(e),
        s = le(t),
        o = le(n),
        l = le(s - r),
        a = le(o - r),
        u = le(r - s),
        c = le(r - o);
    return r === s || r === o || (i && s === o) || (l > a && u < c);
}
function qt(e, t, n) {
    return Math.max(t, Math.min(n, e));
}
function u1(e) {
    return qt(e, -32768, 32767);
}
function Fi(e, t, n, i = 1e-6) {
    return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function hu(e, t, n) {
    n = n || ((o) => e[o] < t);
    let i = e.length - 1,
        r = 0,
        s;
    for (; i - r > 1; ) (s = (r + i) >> 1), n(s) ? (r = s) : (i = s);
    return { lo: r, hi: i };
}
const Cn = (e, t, n, i) =>
        hu(
            e,
            n,
            i
                ? (r) => {
                      const s = e[r][t];
                      return s < n || (s === n && e[r + 1][t] === n);
                  }
                : (r) => e[r][t] < n
        ),
    c1 = (e, t, n) => hu(e, n, (i) => e[i][t] >= n);
function f1(e, t, n) {
    let i = 0,
        r = e.length;
    for (; i < r && e[i] < t; ) i++;
    for (; r > i && e[r - 1] > n; ) r--;
    return i > 0 || r < e.length ? e.slice(i, r) : e;
}
const fp = ['push', 'pop', 'shift', 'splice', 'unshift'];
function d1(e, t) {
    if (e._chartjs) {
        e._chartjs.listeners.push(t);
        return;
    }
    Object.defineProperty(e, '_chartjs', {
        configurable: !0,
        enumerable: !1,
        value: { listeners: [t] },
    }),
        fp.forEach((n) => {
            const i = '_onData' + fu(n),
                r = e[n];
            Object.defineProperty(e, n, {
                configurable: !0,
                enumerable: !1,
                value(...s) {
                    const o = r.apply(this, s);
                    return (
                        e._chartjs.listeners.forEach((l) => {
                            typeof l[i] == 'function' && l[i](...s);
                        }),
                        o
                    );
                },
            });
        });
}
function Vc(e, t) {
    const n = e._chartjs;
    if (!n) return;
    const i = n.listeners,
        r = i.indexOf(t);
    r !== -1 && i.splice(r, 1),
        !(i.length > 0) &&
            (fp.forEach((s) => {
                delete e[s];
            }),
            delete e._chartjs);
}
function h1(e) {
    const t = new Set();
    let n, i;
    for (n = 0, i = e.length; n < i; ++n) t.add(e[n]);
    return t.size === i ? e : Array.from(t);
}
const dp = (function () {
    return typeof window > 'u'
        ? function (e) {
              return e();
          }
        : window.requestAnimationFrame;
})();
function hp(e, t) {
    let n = [],
        i = !1;
    return function (...r) {
        (n = r),
            i ||
                ((i = !0),
                dp.call(window, () => {
                    (i = !1), e.apply(t, n);
                }));
    };
}
function p1(e, t) {
    let n;
    return function (...i) {
        return t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t;
    };
}
const pu = (e) => (e === 'start' ? 'left' : e === 'end' ? 'right' : 'center'),
    kt = (e, t, n) => (e === 'start' ? t : e === 'end' ? n : (t + n) / 2),
    g1 = (e, t, n, i) => (e === (i ? 'left' : 'right') ? n : e === 'center' ? (t + n) / 2 : t);
function m1(e, t, n) {
    const i = t.length;
    let r = 0,
        s = i;
    if (e._sorted) {
        const { iScale: o, _parsed: l } = e,
            a = o.axis,
            { min: u, max: c, minDefined: f, maxDefined: d } = o.getUserBounds();
        f &&
            (r = qt(
                Math.min(Cn(l, o.axis, u).lo, n ? i : Cn(t, a, o.getPixelForValue(u)).lo),
                0,
                i - 1
            )),
            d
                ? (s =
                      qt(
                          Math.max(
                              Cn(l, o.axis, c, !0).hi + 1,
                              n ? 0 : Cn(t, a, o.getPixelForValue(c), !0).hi + 1
                          ),
                          r,
                          i
                      ) - r)
                : (s = i - r);
    }
    return { start: r, count: s };
}
function y1(e) {
    const { xScale: t, yScale: n, _scaleRanges: i } = e,
        r = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
    if (!i) return (e._scaleRanges = r), !0;
    const s = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== n.min || i.ymax !== n.max;
    return Object.assign(i, r), s;
}
const Jr = (e) => e === 0 || e === 1,
    Wc = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ee) / n)),
    $c = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * ee) / n) + 1,
    Ji = {
        linear: (e) => e,
        easeInQuad: (e) => e * e,
        easeOutQuad: (e) => -e * (e - 2),
        easeInOutQuad: (e) => ((e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1)),
        easeInCubic: (e) => e * e * e,
        easeOutCubic: (e) => (e -= 1) * e * e + 1,
        easeInOutCubic: (e) => ((e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2)),
        easeInQuart: (e) => e * e * e * e,
        easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
        easeInOutQuart: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
        easeInQuint: (e) => e * e * e * e * e,
        easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
        easeInOutQuint: (e) =>
            (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
        easeInSine: (e) => -Math.cos(e * Rt) + 1,
        easeOutSine: (e) => Math.sin(e * Rt),
        easeInOutSine: (e) => -0.5 * (Math.cos(dt * e) - 1),
        easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
        easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
        easeInOutExpo: (e) =>
            Jr(e)
                ? e
                : e < 0.5
                ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
                : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
        easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
        easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
        easeInOutCirc: (e) =>
            (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
        easeInElastic: (e) => (Jr(e) ? e : Wc(e, 0.075, 0.3)),
        easeOutElastic: (e) => (Jr(e) ? e : $c(e, 0.075, 0.3)),
        easeInOutElastic(e) {
            return Jr(e)
                ? e
                : e < 0.5
                ? 0.5 * Wc(e * 2, 0.1125, 0.45)
                : 0.5 + 0.5 * $c(e * 2 - 1, 0.1125, 0.45);
        },
        easeInBack(e) {
            return e * e * ((1.70158 + 1) * e - 1.70158);
        },
        easeOutBack(e) {
            return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
        },
        easeInOutBack(e) {
            let t = 1.70158;
            return (e /= 0.5) < 1
                ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
                : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        },
        easeInBounce: (e) => 1 - Ji.easeOutBounce(1 - e),
        easeOutBounce(e) {
            return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        },
        easeInOutBounce: (e) =>
            e < 0.5 ? Ji.easeInBounce(e * 2) * 0.5 : Ji.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
    };
function pp(e) {
    if (e && typeof e == 'object') {
        const t = e.toString();
        return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
    }
    return !1;
}
function Uc(e) {
    return pp(e) ? e : new xr(e);
}
function nl(e) {
    return pp(e) ? e : new xr(e).saturate(0.5).darken(0.1).hexString();
}
const v1 = ['x', 'y', 'borderWidth', 'radius', 'tension'],
    x1 = ['color', 'borderColor', 'backgroundColor'];
function _1(e) {
    e.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
    }),
        e.describe('animation', {
            _fallback: !1,
            _indexable: !1,
            _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
        }),
        e.set('animations', {
            colors: { type: 'color', properties: x1 },
            numbers: { type: 'number', properties: v1 },
        }),
        e.describe('animations', { _fallback: 'animation' }),
        e.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
                animations: {
                    colors: { from: 'transparent' },
                    visible: { type: 'boolean', duration: 0 },
                },
            },
            hide: {
                animations: {
                    colors: { to: 'transparent' },
                    visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
                },
            },
        });
}
function w1(e) {
    e.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
const Yc = new Map();
function k1(e, t) {
    t = t || {};
    const n = e + JSON.stringify(t);
    let i = Yc.get(n);
    return i || ((i = new Intl.NumberFormat(e, t)), Yc.set(n, i)), i;
}
function gu(e, t, n) {
    return k1(t, n).format(e);
}
const gp = {
    values(e) {
        return tt(e) ? e : '' + e;
    },
    numeric(e, t, n) {
        if (e === 0) return '0';
        const i = this.chart.options.locale;
        let r,
            s = e;
        if (n.length > 1) {
            const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (u < 1e-4 || u > 1e15) && (r = 'scientific'), (s = S1(e, n));
        }
        const o = Ye(Math.abs(s)),
            l = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
            a = { notation: r, minimumFractionDigits: l, maximumFractionDigits: l };
        return Object.assign(a, this.options.ticks.format), gu(e, i, a);
    },
    logarithmic(e, t, n) {
        if (e === 0) return '0';
        const i = n[t].significand || e / Math.pow(10, Math.floor(Ye(e)));
        return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
            ? gp.numeric.call(this, e, t, n)
            : '';
    },
};
function S1(e, t) {
    let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Mo = { formatters: gp };
function C1(e) {
    e.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, n) => n.lineWidth,
            tickColor: (t, n) => n.color,
            offset: !1,
        },
        border: { display: !0, dash: [], dashOffset: 0, width: 1 },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Mo.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
        },
    }),
        e.route('scale.ticks', 'color', '', 'color'),
        e.route('scale.grid', 'color', '', 'borderColor'),
        e.route('scale.border', 'color', '', 'borderColor'),
        e.route('scale.title', 'color', '', 'color'),
        e.describe('scale', {
            _fallback: !1,
            _scriptable: (t) =>
                !t.startsWith('before') &&
                !t.startsWith('after') &&
                t !== 'callback' &&
                t !== 'parser',
            _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
        }),
        e.describe('scales', { _fallback: 'scale' }),
        e.describe('scale.ticks', {
            _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
            _indexable: (t) => t !== 'backdropPadding',
        });
}
const zn = Object.create(null),
    oa = Object.create(null);
function tr(e, t) {
    if (!t) return e;
    const n = t.split('.');
    for (let i = 0, r = n.length; i < r; ++i) {
        const s = n[i];
        e = e[s] || (e[s] = Object.create(null));
    }
    return e;
}
function il(e, t, n) {
    return typeof t == 'string' ? _r(tr(e, t), n) : _r(tr(e, ''), t);
}
class b1 {
    constructor(t, n) {
        (this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
            (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (i, r) => nl(r.backgroundColor)),
            (this.hoverBorderColor = (i, r) => nl(r.borderColor)),
            (this.hoverColor = (i, r) => nl(r.color)),
            (this.indexAxis = 'x'),
            (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(n);
    }
    set(t, n) {
        return il(this, t, n);
    }
    get(t) {
        return tr(this, t);
    }
    describe(t, n) {
        return il(oa, t, n);
    }
    override(t, n) {
        return il(zn, t, n);
    }
    route(t, n, i, r) {
        const s = tr(this, t),
            o = tr(this, i),
            l = '_' + n;
        Object.defineProperties(s, {
            [l]: { value: s[n], writable: !0 },
            [n]: {
                enumerable: !0,
                get() {
                    const a = this[l],
                        u = o[r];
                    return B(a) ? Object.assign({}, u, a) : A(a, u);
                },
                set(a) {
                    this[l] = a;
                },
            },
        });
    }
    apply(t) {
        t.forEach((n) => n(this));
    }
}
var ot = new b1(
    {
        _scriptable: (e) => !e.startsWith('on'),
        _indexable: (e) => e !== 'events',
        hover: { _fallback: 'interaction' },
        interaction: { _scriptable: !1, _indexable: !1 },
    },
    [_1, w1, C1]
);
function M1(e) {
    return !e || X(e.size) || X(e.family)
        ? null
        : (e.style ? e.style + ' ' : '') +
              (e.weight ? e.weight + ' ' : '') +
              e.size +
              'px ' +
              e.family;
}
function eo(e, t, n, i, r) {
    let s = t[r];
    return s || ((s = t[r] = e.measureText(r).width), n.push(r)), s > i && (i = s), i;
}
function P1(e, t, n, i) {
    i = i || {};
    let r = (i.data = i.data || {}),
        s = (i.garbageCollect = i.garbageCollect || []);
    i.font !== t && ((r = i.data = {}), (s = i.garbageCollect = []), (i.font = t)),
        e.save(),
        (e.font = t);
    let o = 0;
    const l = n.length;
    let a, u, c, f, d;
    for (a = 0; a < l; a++)
        if (((f = n[a]), f != null && tt(f) !== !0)) o = eo(e, r, s, o, f);
        else if (tt(f))
            for (u = 0, c = f.length; u < c; u++)
                (d = f[u]), d != null && !tt(d) && (o = eo(e, r, s, o, d));
    e.restore();
    const h = s.length / 2;
    if (h > n.length) {
        for (a = 0; a < h; a++) delete r[s[a]];
        s.splice(0, h);
    }
    return o;
}
function pn(e, t, n) {
    const i = e.currentDevicePixelRatio,
        r = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((t - r) * i) / i + r;
}
function Qc(e, t) {
    (t = t || e.getContext('2d')),
        t.save(),
        t.resetTransform(),
        t.clearRect(0, 0, e.width, e.height),
        t.restore();
}
function la(e, t, n, i) {
    mp(e, t, n, i, null);
}
function mp(e, t, n, i, r) {
    let s, o, l, a, u, c, f, d;
    const h = t.pointStyle,
        m = t.rotation,
        y = t.radius;
    let x = (m || 0) * r1;
    if (
        h &&
        typeof h == 'object' &&
        ((s = h.toString()),
        s === '[object HTMLImageElement]' || s === '[object HTMLCanvasElement]')
    ) {
        e.save(),
            e.translate(n, i),
            e.rotate(x),
            e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
            e.restore();
        return;
    }
    if (!(isNaN(y) || y <= 0)) {
        switch ((e.beginPath(), h)) {
            default:
                r ? e.ellipse(n, i, r / 2, y, 0, 0, ee) : e.arc(n, i, y, 0, ee), e.closePath();
                break;
            case 'triangle':
                (c = r ? r / 2 : y),
                    e.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
                    (x += Hc),
                    e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
                    (x += Hc),
                    e.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * y),
                    e.closePath();
                break;
            case 'rectRounded':
                (u = y * 0.516),
                    (a = y - u),
                    (o = Math.cos(x + hn) * a),
                    (f = Math.cos(x + hn) * (r ? r / 2 - u : a)),
                    (l = Math.sin(x + hn) * a),
                    (d = Math.sin(x + hn) * (r ? r / 2 - u : a)),
                    e.arc(n - f, i - l, u, x - dt, x - Rt),
                    e.arc(n + d, i - o, u, x - Rt, x),
                    e.arc(n + f, i + l, u, x, x + Rt),
                    e.arc(n - d, i + o, u, x + Rt, x + dt),
                    e.closePath();
                break;
            case 'rect':
                if (!m) {
                    (a = Math.SQRT1_2 * y), (c = r ? r / 2 : a), e.rect(n - c, i - a, 2 * c, 2 * a);
                    break;
                }
                x += hn;
            case 'rectRot':
                (f = Math.cos(x) * (r ? r / 2 : y)),
                    (o = Math.cos(x) * y),
                    (l = Math.sin(x) * y),
                    (d = Math.sin(x) * (r ? r / 2 : y)),
                    e.moveTo(n - f, i - l),
                    e.lineTo(n + d, i - o),
                    e.lineTo(n + f, i + l),
                    e.lineTo(n - d, i + o),
                    e.closePath();
                break;
            case 'crossRot':
                x += hn;
            case 'cross':
                (f = Math.cos(x) * (r ? r / 2 : y)),
                    (o = Math.cos(x) * y),
                    (l = Math.sin(x) * y),
                    (d = Math.sin(x) * (r ? r / 2 : y)),
                    e.moveTo(n - f, i - l),
                    e.lineTo(n + f, i + l),
                    e.moveTo(n + d, i - o),
                    e.lineTo(n - d, i + o);
                break;
            case 'star':
                (f = Math.cos(x) * (r ? r / 2 : y)),
                    (o = Math.cos(x) * y),
                    (l = Math.sin(x) * y),
                    (d = Math.sin(x) * (r ? r / 2 : y)),
                    e.moveTo(n - f, i - l),
                    e.lineTo(n + f, i + l),
                    e.moveTo(n + d, i - o),
                    e.lineTo(n - d, i + o),
                    (x += hn),
                    (f = Math.cos(x) * (r ? r / 2 : y)),
                    (o = Math.cos(x) * y),
                    (l = Math.sin(x) * y),
                    (d = Math.sin(x) * (r ? r / 2 : y)),
                    e.moveTo(n - f, i - l),
                    e.lineTo(n + f, i + l),
                    e.moveTo(n + d, i - o),
                    e.lineTo(n - d, i + o);
                break;
            case 'line':
                (o = r ? r / 2 : Math.cos(x) * y),
                    (l = Math.sin(x) * y),
                    e.moveTo(n - o, i - l),
                    e.lineTo(n + o, i + l);
                break;
            case 'dash':
                e.moveTo(n, i), e.lineTo(n + Math.cos(x) * (r ? r / 2 : y), i + Math.sin(x) * y);
                break;
            case !1:
                e.closePath();
                break;
        }
        e.fill(), t.borderWidth > 0 && e.stroke();
    }
}
function kr(e, t, n) {
    return (
        (n = n || 0.5),
        !t || (e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n)
    );
}
function mu(e, t) {
    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function yu(e) {
    e.restore();
}
function E1(e, t, n, i, r) {
    if (!t) return e.lineTo(n.x, n.y);
    if (r === 'middle') {
        const s = (t.x + n.x) / 2;
        e.lineTo(s, t.y), e.lineTo(s, n.y);
    } else (r === 'after') != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
    e.lineTo(n.x, n.y);
}
function T1(e, t, n, i) {
    if (!t) return e.lineTo(n.x, n.y);
    e.bezierCurveTo(
        i ? t.cp1x : t.cp2x,
        i ? t.cp1y : t.cp2y,
        i ? n.cp2x : n.cp1x,
        i ? n.cp2y : n.cp1y,
        n.x,
        n.y
    );
}
function Rn(e, t, n, i, r, s = {}) {
    const o = tt(t) ? t : [t],
        l = s.strokeWidth > 0 && s.strokeColor !== '';
    let a, u;
    for (e.save(), e.font = r.string, L1(e, s), a = 0; a < o.length; ++a)
        (u = o[a]),
            s.backdrop && D1(e, s.backdrop),
            l &&
                (s.strokeColor && (e.strokeStyle = s.strokeColor),
                X(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
                e.strokeText(u, n, i, s.maxWidth)),
            e.fillText(u, n, i, s.maxWidth),
            O1(e, n, i, u, s),
            (i += r.lineHeight);
    e.restore();
}
function L1(e, t) {
    t.translation && e.translate(t.translation[0], t.translation[1]),
        X(t.rotation) || e.rotate(t.rotation),
        t.color && (e.fillStyle = t.color),
        t.textAlign && (e.textAlign = t.textAlign),
        t.textBaseline && (e.textBaseline = t.textBaseline);
}
function O1(e, t, n, i, r) {
    if (r.strikethrough || r.underline) {
        const s = e.measureText(i),
            o = t - s.actualBoundingBoxLeft,
            l = t + s.actualBoundingBoxRight,
            a = n - s.actualBoundingBoxAscent,
            u = n + s.actualBoundingBoxDescent,
            c = r.strikethrough ? (a + u) / 2 : u;
        (e.strokeStyle = e.fillStyle),
            e.beginPath(),
            (e.lineWidth = r.decorationWidth || 2),
            e.moveTo(o, c),
            e.lineTo(l, c),
            e.stroke();
    }
}
function D1(e, t) {
    const n = e.fillStyle;
    (e.fillStyle = t.color), e.fillRect(t.left, t.top, t.width, t.height), (e.fillStyle = n);
}
function no(e, t) {
    const { x: n, y: i, w: r, h: s, radius: o } = t;
    e.arc(n + o.topLeft, i + o.topLeft, o.topLeft, -Rt, dt, !0),
        e.lineTo(n, i + s - o.bottomLeft),
        e.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, dt, Rt, !0),
        e.lineTo(n + r - o.bottomRight, i + s),
        e.arc(n + r - o.bottomRight, i + s - o.bottomRight, o.bottomRight, Rt, 0, !0),
        e.lineTo(n + r, i + o.topRight),
        e.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -Rt, !0),
        e.lineTo(n + o.topLeft, i);
}
const z1 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    R1 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function N1(e, t) {
    const n = ('' + e).match(z1);
    if (!n || n[1] === 'normal') return t * 1.2;
    switch (((e = +n[2]), n[3])) {
        case 'px':
            return e;
        case '%':
            e /= 100;
            break;
    }
    return t * e;
}
const A1 = (e) => +e || 0;
function yp(e, t) {
    const n = {},
        i = B(t),
        r = i ? Object.keys(t) : t,
        s = B(e) ? (i ? (o) => A(e[o], e[t[o]]) : (o) => e[o]) : () => e;
    for (const o of r) n[o] = A1(s(o));
    return n;
}
function I1(e) {
    return yp(e, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function ri(e) {
    return yp(e, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function bt(e) {
    const t = I1(e);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function ft(e, t) {
    (e = e || {}), (t = t || ot.font);
    let n = A(e.size, t.size);
    typeof n == 'string' && (n = parseInt(n, 10));
    let i = A(e.style, t.style);
    i &&
        !('' + i).match(R1) &&
        (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
    const r = {
        family: A(e.family, t.family),
        lineHeight: N1(A(e.lineHeight, t.lineHeight), n),
        size: n,
        style: i,
        weight: A(e.weight, t.weight),
        string: '',
    };
    return (r.string = M1(r)), r;
}
function ts(e, t, n, i) {
    let r = !0,
        s,
        o,
        l;
    for (s = 0, o = e.length; s < o; ++s)
        if (
            ((l = e[s]),
            l !== void 0 &&
                (t !== void 0 && typeof l == 'function' && ((l = l(t)), (r = !1)),
                n !== void 0 && tt(l) && ((l = l[n % l.length]), (r = !1)),
                l !== void 0))
        )
            return i && !r && (i.cacheable = !1), l;
}
function F1(e, t, n) {
    const { min: i, max: r } = e,
        s = G0(t, (r - i) / 2),
        o = (l, a) => (n && l === 0 ? 0 : l + a);
    return { min: o(i, -Math.abs(s)), max: o(r, s) };
}
function dn(e, t) {
    return Object.assign(Object.create(e), t);
}
function vu(e, t = [''], n = e, i, r = () => e[0]) {
    de(i) || (i = wp('_fallback', e));
    const s = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: !0,
        _scopes: e,
        _rootScopes: n,
        _fallback: i,
        _getTarget: r,
        override: (o) => vu([o, ...e], t, n, i),
    };
    return new Proxy(s, {
        deleteProperty(o, l) {
            return delete o[l], delete o._keys, delete e[0][l], !0;
        },
        get(o, l) {
            return xp(o, l, () => Y1(l, t, e, o));
        },
        getOwnPropertyDescriptor(o, l) {
            return Reflect.getOwnPropertyDescriptor(o._scopes[0], l);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(e[0]);
        },
        has(o, l) {
            return Xc(o).includes(l);
        },
        ownKeys(o) {
            return Xc(o);
        },
        set(o, l, a) {
            const u = o._storage || (o._storage = r());
            return (o[l] = u[l] = a), delete o._keys, !0;
        },
    });
}
function pi(e, t, n, i) {
    const r = {
        _cacheable: !1,
        _proxy: e,
        _context: t,
        _subProxy: n,
        _stack: new Set(),
        _descriptors: vp(e, i),
        setContext: (s) => pi(e, s, n, i),
        override: (s) => pi(e.override(s), t, n, i),
    };
    return new Proxy(r, {
        deleteProperty(s, o) {
            return delete s[o], delete e[o], !0;
        },
        get(s, o, l) {
            return xp(s, o, () => B1(s, o, l));
        },
        getOwnPropertyDescriptor(s, o) {
            return s._descriptors.allKeys
                ? Reflect.has(e, o)
                    ? { enumerable: !0, configurable: !0 }
                    : void 0
                : Reflect.getOwnPropertyDescriptor(e, o);
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(e);
        },
        has(s, o) {
            return Reflect.has(e, o);
        },
        ownKeys() {
            return Reflect.ownKeys(e);
        },
        set(s, o, l) {
            return (e[o] = l), delete s[o], !0;
        },
    });
}
function vp(e, t = { scriptable: !0, indexable: !0 }) {
    const {
        _scriptable: n = t.scriptable,
        _indexable: i = t.indexable,
        _allKeys: r = t.allKeys,
    } = e;
    return {
        allKeys: r,
        scriptable: n,
        indexable: i,
        isScriptable: ln(n) ? n : () => n,
        isIndexable: ln(i) ? i : () => i,
    };
}
const H1 = (e, t) => (e ? e + fu(t) : t),
    xu = (e, t) =>
        B(t) && e !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function xp(e, t, n) {
    if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
    const i = n();
    return (e[t] = i), i;
}
function B1(e, t, n) {
    const { _proxy: i, _context: r, _subProxy: s, _descriptors: o } = e;
    let l = i[t];
    return (
        ln(l) && o.isScriptable(t) && (l = j1(t, l, e, n)),
        tt(l) && l.length && (l = V1(t, l, e, o.isIndexable)),
        xu(t, l) && (l = pi(l, r, s && s[t], o)),
        l
    );
}
function j1(e, t, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _stack: l } = n;
    if (l.has(e)) throw new Error('Recursion detected: ' + Array.from(l).join('->') + '->' + e);
    return l.add(e), (t = t(s, o || i)), l.delete(e), xu(e, t) && (t = _u(r._scopes, r, e, t)), t;
}
function V1(e, t, n, i) {
    const { _proxy: r, _context: s, _subProxy: o, _descriptors: l } = n;
    if (de(s.index) && i(e)) t = t[s.index % t.length];
    else if (B(t[0])) {
        const a = t,
            u = r._scopes.filter((c) => c !== a);
        t = [];
        for (const c of a) {
            const f = _u(u, r, e, c);
            t.push(pi(f, s, o && o[e], l));
        }
    }
    return t;
}
function _p(e, t, n) {
    return ln(e) ? e(t, n) : e;
}
const W1 = (e, t) => (e === !0 ? t : typeof e == 'string' ? Js(t, e) : void 0);
function $1(e, t, n, i, r) {
    for (const s of t) {
        const o = W1(n, s);
        if (o) {
            e.add(o);
            const l = _p(o._fallback, n, r);
            if (de(l) && l !== n && l !== i) return l;
        } else if (o === !1 && de(i) && n !== i) return null;
    }
    return !1;
}
function _u(e, t, n, i) {
    const r = t._rootScopes,
        s = _p(t._fallback, n, i),
        o = [...e, ...r],
        l = new Set();
    l.add(i);
    let a = Kc(l, o, n, s || n, i);
    return a === null || (de(s) && s !== n && ((a = Kc(l, o, s, a, i)), a === null))
        ? !1
        : vu(Array.from(l), [''], r, s, () => U1(t, n, i));
}
function Kc(e, t, n, i, r) {
    for (; n; ) n = $1(e, t, n, i, r);
    return n;
}
function U1(e, t, n) {
    const i = e._getTarget();
    t in i || (i[t] = {});
    const r = i[t];
    return tt(r) && B(n) ? n : r || {};
}
function Y1(e, t, n, i) {
    let r;
    for (const s of t) if (((r = wp(H1(s, e), n)), de(r))) return xu(e, r) ? _u(n, i, e, r) : r;
}
function wp(e, t) {
    for (const n of t) {
        if (!n) continue;
        const i = n[e];
        if (de(i)) return i;
    }
}
function Xc(e) {
    let t = e._keys;
    return t || (t = e._keys = Q1(e._scopes)), t;
}
function Q1(e) {
    const t = new Set();
    for (const n of e) for (const i of Object.keys(n).filter((r) => !r.startsWith('_'))) t.add(i);
    return Array.from(t);
}
const K1 = Number.EPSILON || 1e-14,
    gi = (e, t) => t < e.length && !e[t].skip && e[t],
    kp = (e) => (e === 'x' ? 'y' : 'x');
function X1(e, t, n, i) {
    const r = e.skip ? t : e,
        s = t,
        o = n.skip ? t : n,
        l = sa(s, r),
        a = sa(o, s);
    let u = l / (l + a),
        c = a / (l + a);
    (u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c);
    const f = i * u,
        d = i * c;
    return {
        previous: { x: s.x - f * (o.x - r.x), y: s.y - f * (o.y - r.y) },
        next: { x: s.x + d * (o.x - r.x), y: s.y + d * (o.y - r.y) },
    };
}
function Z1(e, t, n) {
    const i = e.length;
    let r,
        s,
        o,
        l,
        a,
        u = gi(e, 0);
    for (let c = 0; c < i - 1; ++c)
        if (((a = u), (u = gi(e, c + 1)), !(!a || !u))) {
            if (qi(t[c], 0, K1)) {
                n[c] = n[c + 1] = 0;
                continue;
            }
            (r = n[c] / t[c]),
                (s = n[c + 1] / t[c]),
                (l = Math.pow(r, 2) + Math.pow(s, 2)),
                !(l <= 9) &&
                    ((o = 3 / Math.sqrt(l)), (n[c] = r * o * t[c]), (n[c + 1] = s * o * t[c]));
        }
}
function G1(e, t, n = 'x') {
    const i = kp(n),
        r = e.length;
    let s,
        o,
        l,
        a = gi(e, 0);
    for (let u = 0; u < r; ++u) {
        if (((o = l), (l = a), (a = gi(e, u + 1)), !l)) continue;
        const c = l[n],
            f = l[i];
        o && ((s = (c - o[n]) / 3), (l[`cp1${n}`] = c - s), (l[`cp1${i}`] = f - s * t[u])),
            a && ((s = (a[n] - c) / 3), (l[`cp2${n}`] = c + s), (l[`cp2${i}`] = f + s * t[u]));
    }
}
function q1(e, t = 'x') {
    const n = kp(t),
        i = e.length,
        r = Array(i).fill(0),
        s = Array(i);
    let o,
        l,
        a,
        u = gi(e, 0);
    for (o = 0; o < i; ++o)
        if (((l = a), (a = u), (u = gi(e, o + 1)), !!a)) {
            if (u) {
                const c = u[t] - a[t];
                r[o] = c !== 0 ? (u[n] - a[n]) / c : 0;
            }
            s[o] = l
                ? u
                    ? hi(r[o - 1]) !== hi(r[o])
                        ? 0
                        : (r[o - 1] + r[o]) / 2
                    : r[o - 1]
                : r[o];
        }
    Z1(e, r, s), G1(e, s, t);
}
function es(e, t, n) {
    return Math.max(Math.min(e, n), t);
}
function J1(e, t) {
    let n,
        i,
        r,
        s,
        o,
        l = kr(e[0], t);
    for (n = 0, i = e.length; n < i; ++n)
        (o = s),
            (s = l),
            (l = n < i - 1 && kr(e[n + 1], t)),
            s &&
                ((r = e[n]),
                o &&
                    ((r.cp1x = es(r.cp1x, t.left, t.right)),
                    (r.cp1y = es(r.cp1y, t.top, t.bottom))),
                l &&
                    ((r.cp2x = es(r.cp2x, t.left, t.right)),
                    (r.cp2y = es(r.cp2y, t.top, t.bottom))));
}
function ty(e, t, n, i, r) {
    let s, o, l, a;
    if ((t.spanGaps && (e = e.filter((u) => !u.skip)), t.cubicInterpolationMode === 'monotone'))
        q1(e, r);
    else {
        let u = i ? e[e.length - 1] : e[0];
        for (s = 0, o = e.length; s < o; ++s)
            (l = e[s]),
                (a = X1(u, l, e[Math.min(s + 1, o - (i ? 0 : 1)) % o], t.tension)),
                (l.cp1x = a.previous.x),
                (l.cp1y = a.previous.y),
                (l.cp2x = a.next.x),
                (l.cp2y = a.next.y),
                (u = l);
    }
    t.capBezierPoints && J1(e, n);
}
function Sp() {
    return typeof window < 'u' && typeof document < 'u';
}
function wu(e) {
    let t = e.parentNode;
    return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t;
}
function io(e, t, n) {
    let i;
    return (
        typeof e == 'string'
            ? ((i = parseInt(e, 10)), e.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[n]))
            : (i = e),
        i
    );
}
const Po = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function ey(e, t) {
    return Po(e).getPropertyValue(t);
}
const ny = ['top', 'right', 'bottom', 'left'];
function Pn(e, t, n) {
    const i = {};
    n = n ? '-' + n : '';
    for (let r = 0; r < 4; r++) {
        const s = ny[r];
        i[s] = parseFloat(e[t + '-' + s + n]) || 0;
    }
    return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const iy = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function ry(e, t) {
    const n = e.touches,
        i = n && n.length ? n[0] : e,
        { offsetX: r, offsetY: s } = i;
    let o = !1,
        l,
        a;
    if (iy(r, s, e.target)) (l = r), (a = s);
    else {
        const u = t.getBoundingClientRect();
        (l = i.clientX - u.left), (a = i.clientY - u.top), (o = !0);
    }
    return { x: l, y: a, box: o };
}
function xn(e, t) {
    if ('native' in e) return e;
    const { canvas: n, currentDevicePixelRatio: i } = t,
        r = Po(n),
        s = r.boxSizing === 'border-box',
        o = Pn(r, 'padding'),
        l = Pn(r, 'border', 'width'),
        { x: a, y: u, box: c } = ry(e, n),
        f = o.left + (c && l.left),
        d = o.top + (c && l.top);
    let { width: h, height: m } = t;
    return (
        s && ((h -= o.width + l.width), (m -= o.height + l.height)),
        {
            x: Math.round((((a - f) / h) * n.width) / i),
            y: Math.round((((u - d) / m) * n.height) / i),
        }
    );
}
function sy(e, t, n) {
    let i, r;
    if (t === void 0 || n === void 0) {
        const s = wu(e);
        if (!s) (t = e.clientWidth), (n = e.clientHeight);
        else {
            const o = s.getBoundingClientRect(),
                l = Po(s),
                a = Pn(l, 'border', 'width'),
                u = Pn(l, 'padding');
            (t = o.width - u.width - a.width),
                (n = o.height - u.height - a.height),
                (i = io(l.maxWidth, s, 'clientWidth')),
                (r = io(l.maxHeight, s, 'clientHeight'));
        }
    }
    return { width: t, height: n, maxWidth: i || to, maxHeight: r || to };
}
const ns = (e) => Math.round(e * 10) / 10;
function oy(e, t, n, i) {
    const r = Po(e),
        s = Pn(r, 'margin'),
        o = io(r.maxWidth, e, 'clientWidth') || to,
        l = io(r.maxHeight, e, 'clientHeight') || to,
        a = sy(e, t, n);
    let { width: u, height: c } = a;
    if (r.boxSizing === 'content-box') {
        const d = Pn(r, 'border', 'width'),
            h = Pn(r, 'padding');
        (u -= h.width + d.width), (c -= h.height + d.height);
    }
    return (
        (u = Math.max(0, u - s.width)),
        (c = Math.max(0, i ? u / i : c - s.height)),
        (u = ns(Math.min(u, o, a.maxWidth))),
        (c = ns(Math.min(c, l, a.maxHeight))),
        u && !c && (c = ns(u / 2)),
        (t !== void 0 || n !== void 0) &&
            i &&
            a.height &&
            c > a.height &&
            ((c = a.height), (u = ns(Math.floor(c * i)))),
        { width: u, height: c }
    );
}
function Zc(e, t, n) {
    const i = t || 1,
        r = Math.floor(e.height * i),
        s = Math.floor(e.width * i);
    (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
    const o = e.canvas;
    return (
        o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
        e.currentDevicePixelRatio !== i || o.height !== r || o.width !== s
            ? ((e.currentDevicePixelRatio = i),
              (o.height = r),
              (o.width = s),
              e.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
            : !1
    );
}
const ly = (function () {
    let e = !1;
    try {
        const t = {
            get passive() {
                return (e = !0), !1;
            },
        };
        window.addEventListener('test', null, t), window.removeEventListener('test', null, t);
    } catch {}
    return e;
})();
function Gc(e, t) {
    const n = ey(e, t),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0;
}
function _n(e, t, n, i) {
    return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function ay(e, t, n, i) {
    return {
        x: e.x + n * (t.x - e.x),
        y:
            i === 'middle'
                ? n < 0.5
                    ? e.y
                    : t.y
                : i === 'after'
                ? n < 1
                    ? e.y
                    : t.y
                : n > 0
                ? t.y
                : e.y,
    };
}
function uy(e, t, n, i) {
    const r = { x: e.cp2x, y: e.cp2y },
        s = { x: t.cp1x, y: t.cp1y },
        o = _n(e, r, n),
        l = _n(r, s, n),
        a = _n(s, t, n),
        u = _n(o, l, n),
        c = _n(l, a, n);
    return _n(u, c, n);
}
const cy = function (e, t) {
        return {
            x(n) {
                return e + e + t - n;
            },
            setWidth(n) {
                t = n;
            },
            textAlign(n) {
                return n === 'center' ? n : n === 'right' ? 'left' : 'right';
            },
            xPlus(n, i) {
                return n - i;
            },
            leftForLtr(n, i) {
                return n - i;
            },
        };
    },
    fy = function () {
        return {
            x(e) {
                return e;
            },
            setWidth(e) {},
            textAlign(e) {
                return e;
            },
            xPlus(e, t) {
                return e + t;
            },
            leftForLtr(e, t) {
                return e;
            },
        };
    };
function si(e, t, n) {
    return e ? cy(t, n) : fy();
}
function Cp(e, t) {
    let n, i;
    (t === 'ltr' || t === 'rtl') &&
        ((n = e.canvas.style),
        (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
        n.setProperty('direction', t, 'important'),
        (e.prevTextDirection = i));
}
function bp(e, t) {
    t !== void 0 &&
        (delete e.prevTextDirection, e.canvas.style.setProperty('direction', t[0], t[1]));
}
function Mp(e) {
    return e === 'angle'
        ? { between: cp, compare: a1, normalize: le }
        : { between: Fi, compare: (t, n) => t - n, normalize: (t) => t };
}
function qc({ start: e, end: t, count: n, loop: i, style: r }) {
    return { start: e % n, end: t % n, loop: i && (t - e + 1) % n === 0, style: r };
}
function dy(e, t, n) {
    const { property: i, start: r, end: s } = n,
        { between: o, normalize: l } = Mp(i),
        a = t.length;
    let { start: u, end: c, loop: f } = e,
        d,
        h;
    if (f) {
        for (u += a, c += a, d = 0, h = a; d < h && o(l(t[u % a][i]), r, s); ++d) u--, c--;
        (u %= a), (c %= a);
    }
    return c < u && (c += a), { start: u, end: c, loop: f, style: e.style };
}
function hy(e, t, n) {
    if (!n) return [e];
    const { property: i, start: r, end: s } = n,
        o = t.length,
        { compare: l, between: a, normalize: u } = Mp(i),
        { start: c, end: f, loop: d, style: h } = dy(e, t, n),
        m = [];
    let y = !1,
        x = null,
        p,
        g,
        v;
    const _ = () => a(r, v, p) && l(r, v) !== 0,
        w = () => l(s, p) === 0 || a(s, v, p),
        k = () => y || _(),
        S = () => !y || w();
    for (let C = c, L = c; C <= f; ++C)
        (g = t[C % o]),
            !g.skip &&
                ((p = u(g[i])),
                p !== v &&
                    ((y = a(p, r, s)),
                    x === null && k() && (x = l(p, r) === 0 ? C : L),
                    x !== null &&
                        S() &&
                        (m.push(qc({ start: x, end: C, loop: d, count: o, style: h })), (x = null)),
                    (L = C),
                    (v = p)));
    return x !== null && m.push(qc({ start: x, end: f, loop: d, count: o, style: h })), m;
}
function py(e, t) {
    const n = [],
        i = e.segments;
    for (let r = 0; r < i.length; r++) {
        const s = hy(i[r], e.points, t);
        s.length && n.push(...s);
    }
    return n;
}
function gy(e, t, n, i) {
    let r = 0,
        s = t - 1;
    if (n && !i) for (; r < t && !e[r].skip; ) r++;
    for (; r < t && e[r].skip; ) r++;
    for (r %= t, n && (s += r); s > r && e[s % t].skip; ) s--;
    return (s %= t), { start: r, end: s };
}
function my(e, t, n, i) {
    const r = e.length,
        s = [];
    let o = t,
        l = e[t],
        a;
    for (a = t + 1; a <= n; ++a) {
        const u = e[a % r];
        u.skip || u.stop
            ? l.skip ||
              ((i = !1),
              s.push({ start: t % r, end: (a - 1) % r, loop: i }),
              (t = o = u.stop ? a : null))
            : ((o = a), l.skip && (t = a)),
            (l = u);
    }
    return o !== null && s.push({ start: t % r, end: o % r, loop: i }), s;
}
function yy(e, t) {
    const n = e.points,
        i = e.options.spanGaps,
        r = n.length;
    if (!r) return [];
    const s = !!e._loop,
        { start: o, end: l } = gy(n, r, s, i);
    if (i === !0) return Jc(e, [{ start: o, end: l, loop: s }], n, t);
    const a = l < o ? l + r : l,
        u = !!e._fullLoop && o === 0 && l === r - 1;
    return Jc(e, my(n, o, a, u), n, t);
}
function Jc(e, t, n, i) {
    return !i || !i.setContext || !n ? t : vy(e, t, n, i);
}
function vy(e, t, n, i) {
    const r = e._chart.getContext(),
        s = tf(e.options),
        {
            _datasetIndex: o,
            options: { spanGaps: l },
        } = e,
        a = n.length,
        u = [];
    let c = s,
        f = t[0].start,
        d = f;
    function h(m, y, x, p) {
        const g = l ? -1 : 1;
        if (m !== y) {
            for (m += a; n[m % a].skip; ) m -= g;
            for (; n[y % a].skip; ) y += g;
            m % a !== y % a &&
                (u.push({ start: m % a, end: y % a, loop: x, style: p }), (c = p), (f = y % a));
        }
    }
    for (const m of t) {
        f = l ? f : m.start;
        let y = n[f % a],
            x;
        for (d = f + 1; d <= m.end; d++) {
            const p = n[d % a];
            (x = tf(
                i.setContext(
                    dn(r, {
                        type: 'segment',
                        p0: y,
                        p1: p,
                        p0DataIndex: (d - 1) % a,
                        p1DataIndex: d % a,
                        datasetIndex: o,
                    })
                )
            )),
                xy(x, c) && h(f, d - 1, m.loop, c),
                (y = p),
                (c = x);
        }
        f < d - 1 && h(f, d - 1, m.loop, c);
    }
    return u;
}
function tf(e) {
    return {
        backgroundColor: e.backgroundColor,
        borderCapStyle: e.borderCapStyle,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderJoinStyle: e.borderJoinStyle,
        borderWidth: e.borderWidth,
        borderColor: e.borderColor,
    };
}
function xy(e, t) {
    return t && JSON.stringify(e) !== JSON.stringify(t);
}
/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class _y {
    constructor() {
        (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
    }
    _notify(t, n, i, r) {
        const s = n.listeners[r],
            o = n.duration;
        s.forEach((l) =>
            l({ chart: t, initial: n.initial, numSteps: o, currentStep: Math.min(i - n.start, o) })
        );
    }
    _refresh() {
        this._request ||
            ((this._running = !0),
            (this._request = dp.call(window, () => {
                this._update(), (this._request = null), this._running && this._refresh();
            })));
    }
    _update(t = Date.now()) {
        let n = 0;
        this._charts.forEach((i, r) => {
            if (!i.running || !i.items.length) return;
            const s = i.items;
            let o = s.length - 1,
                l = !1,
                a;
            for (; o >= 0; --o)
                (a = s[o]),
                    a._active
                        ? (a._total > i.duration && (i.duration = a._total), a.tick(t), (l = !0))
                        : ((s[o] = s[s.length - 1]), s.pop());
            l && (r.draw(), this._notify(r, i, t, 'progress')),
                s.length || ((i.running = !1), this._notify(r, i, t, 'complete'), (i.initial = !1)),
                (n += s.length);
        }),
            (this._lastDate = t),
            n === 0 && (this._running = !1);
    }
    _getAnims(t) {
        const n = this._charts;
        let i = n.get(t);
        return (
            i ||
                ((i = {
                    running: !1,
                    initial: !0,
                    items: [],
                    listeners: { complete: [], progress: [] },
                }),
                n.set(t, i)),
            i
        );
    }
    listen(t, n, i) {
        this._getAnims(t).listeners[n].push(i);
    }
    add(t, n) {
        !n || !n.length || this._getAnims(t).items.push(...n);
    }
    has(t) {
        return this._getAnims(t).items.length > 0;
    }
    start(t) {
        const n = this._charts.get(t);
        !n ||
            ((n.running = !0),
            (n.start = Date.now()),
            (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
            this._refresh());
    }
    running(t) {
        if (!this._running) return !1;
        const n = this._charts.get(t);
        return !(!n || !n.running || !n.items.length);
    }
    stop(t) {
        const n = this._charts.get(t);
        if (!n || !n.items.length) return;
        const i = n.items;
        let r = i.length - 1;
        for (; r >= 0; --r) i[r].cancel();
        (n.items = []), this._notify(t, n, Date.now(), 'complete');
    }
    remove(t) {
        return this._charts.delete(t);
    }
}
var Ce = new _y();
const ef = 'transparent',
    wy = {
        boolean(e, t, n) {
            return n > 0.5 ? t : e;
        },
        color(e, t, n) {
            const i = Uc(e || ef),
                r = i.valid && Uc(t || ef);
            return r && r.valid ? r.mix(i, n).hexString() : t;
        },
        number(e, t, n) {
            return e + (t - e) * n;
        },
    };
class ky {
    constructor(t, n, i, r) {
        const s = n[i];
        r = ts([t.to, r, s, t.from]);
        const o = ts([t.from, s, r]);
        (this._active = !0),
            (this._fn = t.fn || wy[t.type || typeof o]),
            (this._easing = Ji[t.easing] || Ji.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = n),
            (this._prop = i),
            (this._from = o),
            (this._to = r),
            (this._promises = void 0);
    }
    active() {
        return this._active;
    }
    update(t, n, i) {
        if (this._active) {
            this._notify(!1);
            const r = this._target[this._prop],
                s = i - this._start,
                o = this._duration - s;
            (this._start = i),
                (this._duration = Math.floor(Math.max(o, t.duration))),
                (this._total += s),
                (this._loop = !!t.loop),
                (this._to = ts([t.to, n, r, t.from])),
                (this._from = ts([t.from, r, n]));
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
        const n = t - this._start,
            i = this._duration,
            r = this._prop,
            s = this._from,
            o = this._loop,
            l = this._to;
        let a;
        if (((this._active = s !== l && (o || n < i)), !this._active)) {
            (this._target[r] = l), this._notify(!0);
            return;
        }
        if (n < 0) {
            this._target[r] = s;
            return;
        }
        (a = (n / i) % 2),
            (a = o && a > 1 ? 2 - a : a),
            (a = this._easing(Math.min(1, Math.max(0, a)))),
            (this._target[r] = this._fn(s, l, a));
    }
    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((n, i) => {
            t.push({ res: n, rej: i });
        });
    }
    _notify(t) {
        const n = t ? 'res' : 'rej',
            i = this._promises || [];
        for (let r = 0; r < i.length; r++) i[r][n]();
    }
}
class Pp {
    constructor(t, n) {
        (this._chart = t), (this._properties = new Map()), this.configure(n);
    }
    configure(t) {
        if (!B(t)) return;
        const n = Object.keys(ot.animation),
            i = this._properties;
        Object.getOwnPropertyNames(t).forEach((r) => {
            const s = t[r];
            if (!B(s)) return;
            const o = {};
            for (const l of n) o[l] = s[l];
            ((tt(s.properties) && s.properties) || [r]).forEach((l) => {
                (l === r || !i.has(l)) && i.set(l, o);
            });
        });
    }
    _animateOptions(t, n) {
        const i = n.options,
            r = Cy(t, i);
        if (!r) return [];
        const s = this._createAnimations(r, i);
        return (
            i.$shared &&
                Sy(t.options.$animations, i).then(
                    () => {
                        t.options = i;
                    },
                    () => {}
                ),
            s
        );
    }
    _createAnimations(t, n) {
        const i = this._properties,
            r = [],
            s = t.$animations || (t.$animations = {}),
            o = Object.keys(n),
            l = Date.now();
        let a;
        for (a = o.length - 1; a >= 0; --a) {
            const u = o[a];
            if (u.charAt(0) === '$') continue;
            if (u === 'options') {
                r.push(...this._animateOptions(t, n));
                continue;
            }
            const c = n[u];
            let f = s[u];
            const d = i.get(u);
            if (f)
                if (d && f.active()) {
                    f.update(d, c, l);
                    continue;
                } else f.cancel();
            if (!d || !d.duration) {
                t[u] = c;
                continue;
            }
            (s[u] = f = new ky(d, t, u, c)), r.push(f);
        }
        return r;
    }
    update(t, n) {
        if (this._properties.size === 0) {
            Object.assign(t, n);
            return;
        }
        const i = this._createAnimations(t, n);
        if (i.length) return Ce.add(this._chart, i), !0;
    }
}
function Sy(e, t) {
    const n = [],
        i = Object.keys(t);
    for (let r = 0; r < i.length; r++) {
        const s = e[i[r]];
        s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
}
function Cy(e, t) {
    if (!t) return;
    let n = e.options;
    if (!n) {
        e.options = t;
        return;
    }
    return n.$shared && (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
}
function nf(e, t) {
    const n = (e && e.options) || {},
        i = n.reverse,
        r = n.min === void 0 ? t : 0,
        s = n.max === void 0 ? t : 0;
    return { start: i ? s : r, end: i ? r : s };
}
function by(e, t, n) {
    if (n === !1) return !1;
    const i = nf(e, n),
        r = nf(t, n);
    return { top: r.end, right: i.end, bottom: r.start, left: i.start };
}
function My(e) {
    let t, n, i, r;
    return (
        B(e) ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left)) : (t = n = i = r = e),
        { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
    );
}
function Ep(e, t) {
    const n = [],
        i = e._getSortedDatasetMetas(t);
    let r, s;
    for (r = 0, s = i.length; r < s; ++r) n.push(i[r].index);
    return n;
}
function rf(e, t, n, i = {}) {
    const r = e.keys,
        s = i.mode === 'single';
    let o, l, a, u;
    if (t !== null) {
        for (o = 0, l = r.length; o < l; ++o) {
            if (((a = +r[o]), a === n)) {
                if (i.all) continue;
                break;
            }
            (u = e.values[a]), pt(u) && (s || t === 0 || hi(t) === hi(u)) && (t += u);
        }
        return t;
    }
}
function Py(e) {
    const t = Object.keys(e),
        n = new Array(t.length);
    let i, r, s;
    for (i = 0, r = t.length; i < r; ++i) (s = t[i]), (n[i] = { x: s, y: e[s] });
    return n;
}
function sf(e, t) {
    const n = e && e.options.stacked;
    return n || (n === void 0 && t.stack !== void 0);
}
function Ey(e, t, n) {
    return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function Ty(e) {
    const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds();
    return { min: i ? t : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY };
}
function Ly(e, t, n) {
    const i = e[t] || (e[t] = {});
    return i[n] || (i[n] = {});
}
function of(e, t, n, i) {
    for (const r of t.getMatchingVisibleMetas(i).reverse()) {
        const s = e[r.index];
        if ((n && s > 0) || (!n && s < 0)) return r.index;
    }
    return null;
}
function lf(e, t) {
    const { chart: n, _cachedMeta: i } = e,
        r = n._stacks || (n._stacks = {}),
        { iScale: s, vScale: o, index: l } = i,
        a = s.axis,
        u = o.axis,
        c = Ey(s, o, i),
        f = t.length;
    let d;
    for (let h = 0; h < f; ++h) {
        const m = t[h],
            { [a]: y, [u]: x } = m,
            p = m._stacks || (m._stacks = {});
        (d = p[u] = Ly(r, c, y)),
            (d[l] = x),
            (d._top = of(d, o, !0, i.type)),
            (d._bottom = of(d, o, !1, i.type));
        const g = d._visualValues || (d._visualValues = {});
        g[l] = x;
    }
}
function rl(e, t) {
    const n = e.scales;
    return Object.keys(n)
        .filter((i) => n[i].axis === t)
        .shift();
}
function Oy(e, t) {
    return dn(e, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: 'default',
        type: 'dataset',
    });
}
function Dy(e, t, n) {
    return dn(e, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: t,
        mode: 'default',
        type: 'data',
    });
}
function Pi(e, t) {
    const n = e.controller.index,
        i = e.vScale && e.vScale.axis;
    if (!!i) {
        t = t || e._parsed;
        for (const r of t) {
            const s = r._stacks;
            if (!s || s[i] === void 0 || s[i][n] === void 0) return;
            delete s[i][n],
                s[i]._visualValues !== void 0 &&
                    s[i]._visualValues[n] !== void 0 &&
                    delete s[i]._visualValues[n];
        }
    }
}
const sl = (e) => e === 'reset' || e === 'none',
    af = (e, t) => (t ? e : Object.assign({}, e)),
    zy = (e, t, n) => e && !t.hidden && t._stacked && { keys: Ep(n, !0), values: null };
class er {
    constructor(t, n) {
        (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = n),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
    }
    initialize() {
        const t = this._cachedMeta;
        this.configure(),
            this.linkScales(),
            (t._stacked = sf(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
                !this.chart.isPluginEnabled('filler') &&
                console.warn(
                    "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
                );
    }
    updateIndex(t) {
        this.index !== t && Pi(this._cachedMeta), (this.index = t);
    }
    linkScales() {
        const t = this.chart,
            n = this._cachedMeta,
            i = this.getDataset(),
            r = (f, d, h, m) => (f === 'x' ? d : f === 'r' ? m : h),
            s = (n.xAxisID = A(i.xAxisID, rl(t, 'x'))),
            o = (n.yAxisID = A(i.yAxisID, rl(t, 'y'))),
            l = (n.rAxisID = A(i.rAxisID, rl(t, 'r'))),
            a = n.indexAxis,
            u = (n.iAxisID = r(a, s, o, l)),
            c = (n.vAxisID = r(a, o, s, l));
        (n.xScale = this.getScaleForId(s)),
            (n.yScale = this.getScaleForId(o)),
            (n.rScale = this.getScaleForId(l)),
            (n.iScale = this.getScaleForId(u)),
            (n.vScale = this.getScaleForId(c));
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
        return this.chart.scales[t];
    }
    _getOtherScale(t) {
        const n = this._cachedMeta;
        return t === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const t = this._cachedMeta;
        this._data && Vc(this._data, this), t._stacked && Pi(t);
    }
    _dataCheck() {
        const t = this.getDataset(),
            n = t.data || (t.data = []),
            i = this._data;
        if (B(n)) this._data = Py(n);
        else if (i !== n) {
            if (i) {
                Vc(i, this);
                const r = this._cachedMeta;
                Pi(r), (r._parsed = []);
            }
            n && Object.isExtensible(n) && d1(n, this), (this._syncList = []), (this._data = n);
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
        const n = this._cachedMeta,
            i = this.getDataset();
        let r = !1;
        this._dataCheck();
        const s = n._stacked;
        (n._stacked = sf(n.vScale, n)),
            n.stack !== i.stack && ((r = !0), Pi(n), (n.stack = i.stack)),
            this._resyncElements(t),
            (r || s !== n._stacked) && lf(this, n._parsed);
    }
    configure() {
        const t = this.chart.config,
            n = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), n, !0);
        (this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
    }
    parse(t, n) {
        const { _cachedMeta: i, _data: r } = this,
            { iScale: s, _stacked: o } = i,
            l = s.axis;
        let a = t === 0 && n === r.length ? !0 : i._sorted,
            u = t > 0 && i._parsed[t - 1],
            c,
            f,
            d;
        if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (d = r);
        else {
            tt(r[t])
                ? (d = this.parseArrayData(i, r, t, n))
                : B(r[t])
                ? (d = this.parseObjectData(i, r, t, n))
                : (d = this.parsePrimitiveData(i, r, t, n));
            const h = () => f[l] === null || (u && f[l] < u[l]);
            for (c = 0; c < n; ++c) (i._parsed[c + t] = f = d[c]), a && (h() && (a = !1), (u = f));
            i._sorted = a;
        }
        o && lf(this, d);
    }
    parsePrimitiveData(t, n, i, r) {
        const { iScale: s, vScale: o } = t,
            l = s.axis,
            a = o.axis,
            u = s.getLabels(),
            c = s === o,
            f = new Array(r);
        let d, h, m;
        for (d = 0, h = r; d < h; ++d)
            (m = d + i), (f[d] = { [l]: c || s.parse(u[m], m), [a]: o.parse(n[m], m) });
        return f;
    }
    parseArrayData(t, n, i, r) {
        const { xScale: s, yScale: o } = t,
            l = new Array(r);
        let a, u, c, f;
        for (a = 0, u = r; a < u; ++a)
            (c = a + i), (f = n[c]), (l[a] = { x: s.parse(f[0], c), y: o.parse(f[1], c) });
        return l;
    }
    parseObjectData(t, n, i, r) {
        const { xScale: s, yScale: o } = t,
            { xAxisKey: l = 'x', yAxisKey: a = 'y' } = this._parsing,
            u = new Array(r);
        let c, f, d, h;
        for (c = 0, f = r; c < f; ++c)
            (d = c + i), (h = n[d]), (u[c] = { x: s.parse(Js(h, l), d), y: o.parse(Js(h, a), d) });
        return u;
    }
    getParsed(t) {
        return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
        return this._cachedMeta.data[t];
    }
    applyStack(t, n, i) {
        const r = this.chart,
            s = this._cachedMeta,
            o = n[t.axis],
            l = { keys: Ep(r, !0), values: n._stacks[t.axis]._visualValues };
        return rf(l, o, s.index, { mode: i });
    }
    updateRangeFromParsed(t, n, i, r) {
        const s = i[n.axis];
        let o = s === null ? NaN : s;
        const l = r && i._stacks[n.axis];
        r && l && ((r.values = l), (o = rf(r, s, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
    }
    getMinMax(t, n) {
        const i = this._cachedMeta,
            r = i._parsed,
            s = i._sorted && t === i.iScale,
            o = r.length,
            l = this._getOtherScale(t),
            a = zy(n, i, this.chart),
            u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
            { min: c, max: f } = Ty(l);
        let d, h;
        function m() {
            h = r[d];
            const y = h[l.axis];
            return !pt(h[t.axis]) || c > y || f < y;
        }
        for (d = 0; d < o && !(!m() && (this.updateRangeFromParsed(u, t, h, a), s)); ++d);
        if (s) {
            for (d = o - 1; d >= 0; --d)
                if (!m()) {
                    this.updateRangeFromParsed(u, t, h, a);
                    break;
                }
        }
        return u;
    }
    getAllParsedValues(t) {
        const n = this._cachedMeta._parsed,
            i = [];
        let r, s, o;
        for (r = 0, s = n.length; r < s; ++r) (o = n[r][t.axis]), pt(o) && i.push(o);
        return i;
    }
    getMaxOverflow() {
        return !1;
    }
    getLabelAndValue(t) {
        const n = this._cachedMeta,
            i = n.iScale,
            r = n.vScale,
            s = this.getParsed(t);
        return {
            label: i ? '' + i.getLabelForValue(s[i.axis]) : '',
            value: r ? '' + r.getLabelForValue(s[r.axis]) : '',
        };
    }
    _update(t) {
        const n = this._cachedMeta;
        this.update(t || 'default'),
            (n._clip = My(A(this.options.clip, by(n.xScale, n.yScale, this.getMaxOverflow()))));
    }
    update(t) {}
    draw() {
        const t = this._ctx,
            n = this.chart,
            i = this._cachedMeta,
            r = i.data || [],
            s = n.chartArea,
            o = [],
            l = this._drawStart || 0,
            a = this._drawCount || r.length - l,
            u = this.options.drawActiveElementsOnTop;
        let c;
        for (i.dataset && i.dataset.draw(t, s, l, a), c = l; c < l + a; ++c) {
            const f = r[c];
            f.hidden || (f.active && u ? o.push(f) : f.draw(t, s));
        }
        for (c = 0; c < o.length; ++c) o[c].draw(t, s);
    }
    getStyle(t, n) {
        const i = n ? 'active' : 'default';
        return t === void 0 && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i);
    }
    getContext(t, n, i) {
        const r = this.getDataset();
        let s;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[t];
            (s = o.$context || (o.$context = Dy(this.getContext(), t, o))),
                (s.parsed = this.getParsed(t)),
                (s.raw = r.data[t]),
                (s.index = s.dataIndex = t);
        } else
            (s = this.$context || (this.$context = Oy(this.chart.getContext(), this.index))),
                (s.dataset = r),
                (s.index = s.datasetIndex = this.index);
        return (s.active = !!n), (s.mode = i), s;
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, t);
    }
    _resolveElementOptions(t, n = 'default', i) {
        const r = n === 'active',
            s = this._cachedDataOpts,
            o = t + '-' + n,
            l = s[o],
            a = this.enableOptionSharing && de(i);
        if (l) return af(l, a);
        const u = this.chart.config,
            c = u.datasetElementScopeKeys(this._type, t),
            f = r ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
            d = u.getOptionScopes(this.getDataset(), c),
            h = Object.keys(ot.elements[t]),
            m = () => this.getContext(i, r, n),
            y = u.resolveNamedOptions(d, h, m, f);
        return y.$shared && ((y.$shared = a), (s[o] = Object.freeze(af(y, a)))), y;
    }
    _resolveAnimations(t, n, i) {
        const r = this.chart,
            s = this._cachedDataOpts,
            o = `animation-${n}`,
            l = s[o];
        if (l) return l;
        let a;
        if (r.options.animation !== !1) {
            const c = this.chart.config,
                f = c.datasetAnimationScopeKeys(this._type, n),
                d = c.getOptionScopes(this.getDataset(), f);
            a = c.createResolver(d, this.getContext(t, i, n));
        }
        const u = new Pp(r, a && a.animations);
        return a && a._cacheable && (s[o] = Object.freeze(u)), u;
    }
    getSharedOptions(t) {
        if (!!t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, n) {
        return !n || sl(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, n) {
        const i = this.resolveDataElementOptions(t, n),
            r = this._sharedOptions,
            s = this.getSharedOptions(i),
            o = this.includeOptions(n, s) || s !== r;
        return this.updateSharedOptions(s, n, i), { sharedOptions: s, includeOptions: o };
    }
    updateElement(t, n, i, r) {
        sl(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i);
    }
    updateSharedOptions(t, n, i) {
        t && !sl(n) && this._resolveAnimations(void 0, n).update(t, i);
    }
    _setStyle(t, n, i, r) {
        t.active = r;
        const s = this.getStyle(n, r);
        this._resolveAnimations(n, i, r).update(t, {
            options: (!r && this.getSharedOptions(s)) || s,
        });
    }
    removeHoverStyle(t, n, i) {
        this._setStyle(t, i, 'active', !1);
    }
    setHoverStyle(t, n, i) {
        this._setStyle(t, i, 'active', !0);
    }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, 'active', !1);
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, 'active', !0);
    }
    _resyncElements(t) {
        const n = this._data,
            i = this._cachedMeta.data;
        for (const [l, a, u] of this._syncList) this[l](a, u);
        this._syncList = [];
        const r = i.length,
            s = n.length,
            o = Math.min(s, r);
        o && this.parse(0, o),
            s > r ? this._insertElements(r, s - r, t) : s < r && this._removeElements(s, r - s);
    }
    _insertElements(t, n, i = !0) {
        const r = this._cachedMeta,
            s = r.data,
            o = t + n;
        let l;
        const a = (u) => {
            for (u.length += n, l = u.length - 1; l >= o; l--) u[l] = u[l - n];
        };
        for (a(s), l = t; l < o; ++l) s[l] = new this.dataElementType();
        this._parsing && a(r._parsed), this.parse(t, n), i && this.updateElements(s, t, n, 'reset');
    }
    updateElements(t, n, i, r) {}
    _removeElements(t, n) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const r = i._parsed.splice(t, n);
            i._stacked && Pi(i, r);
        }
        i.data.splice(t, n);
    }
    _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
            const [n, i, r] = t;
            this[n](i, r);
        }
        this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync(['_insertElements', this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
        this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
        this._sync(['_removeElements', 0, 1]);
    }
    _onDataSplice(t, n) {
        n && this._sync(['_removeElements', t, n]);
        const i = arguments.length - 2;
        i && this._sync(['_insertElements', t, i]);
    }
    _onDataUnshift() {
        this._sync(['_insertElements', 0, arguments.length]);
    }
}
R(er, 'defaults', {}), R(er, 'datasetElementType', null), R(er, 'dataElementType', null);
class Ss extends er {
    initialize() {
        (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
    }
    update(t) {
        const n = this._cachedMeta,
            { dataset: i, data: r = [], _dataset: s } = n,
            o = this.chart._animationsDisabled;
        let { start: l, count: a } = m1(n, r, o);
        (this._drawStart = l),
            (this._drawCount = a),
            y1(n) && ((l = 0), (a = r.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!s._decimated),
            (i.points = r);
        const u = this.resolveDatasetElementOptions(t);
        this.options.showLine || (u.borderWidth = 0),
            (u.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: u }, t),
            this.updateElements(r, l, a, t);
    }
    updateElements(t, n, i, r) {
        const s = r === 'reset',
            { iScale: o, vScale: l, _stacked: a, _dataset: u } = this._cachedMeta,
            { sharedOptions: c, includeOptions: f } = this._getSharedOptions(n, r),
            d = o.axis,
            h = l.axis,
            { spanGaps: m, segment: y } = this.options,
            x = wr(m) ? m : Number.POSITIVE_INFINITY,
            p = this.chart._animationsDisabled || s || r === 'none',
            g = n + i,
            v = t.length;
        let _ = n > 0 && this.getParsed(n - 1);
        for (let w = 0; w < v; ++w) {
            const k = t[w],
                S = p ? k : {};
            if (w < n || w >= g) {
                S.skip = !0;
                continue;
            }
            const C = this.getParsed(w),
                L = X(C[h]),
                E = (S[d] = o.getPixelForValue(C[d], w)),
                O = (S[h] =
                    s || L
                        ? l.getBasePixel()
                        : l.getPixelForValue(a ? this.applyStack(l, C, a) : C[h], w));
            (S.skip = isNaN(E) || isNaN(O) || L),
                (S.stop = w > 0 && Math.abs(C[d] - _[d]) > x),
                y && ((S.parsed = C), (S.raw = u.data[w])),
                f && (S.options = c || this.resolveDataElementOptions(w, k.active ? 'active' : r)),
                p || this.updateElement(k, w, S, r),
                (_ = C);
        }
    }
    getMaxOverflow() {
        const t = this._cachedMeta,
            n = t.dataset,
            i = (n.options && n.options.borderWidth) || 0,
            r = t.data || [];
        if (!r.length) return i;
        const s = r[0].size(this.resolveDataElementOptions(0)),
            o = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
        return Math.max(i, s, o) / 2;
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
    }
}
R(Ss, 'id', 'line'),
    R(Ss, 'defaults', {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: !0,
        spanGaps: !1,
    }),
    R(Ss, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } });
function gn() {
    throw new Error(
        'This method is not implemented: Check that a complete date adapter is provided.'
    );
}
class ku {
    static override(t) {
        Object.assign(ku.prototype, t);
    }
    constructor(t) {
        this.options = t || {};
    }
    init() {}
    formats() {
        return gn();
    }
    parse() {
        return gn();
    }
    format() {
        return gn();
    }
    add() {
        return gn();
    }
    diff() {
        return gn();
    }
    startOf() {
        return gn();
    }
    endOf() {
        return gn();
    }
}
var Ry = { _date: ku };
function Ny(e, t, n, i) {
    const { controller: r, data: s, _sorted: o } = e,
        l = r._cachedMeta.iScale;
    if (l && t === l.axis && t !== 'r' && o && s.length) {
        const a = l._reversePixels ? c1 : Cn;
        if (i) {
            if (r._sharedOptions) {
                const u = s[0],
                    c = typeof u.getRange == 'function' && u.getRange(t);
                if (c) {
                    const f = a(s, t, n - c),
                        d = a(s, t, n + c);
                    return { lo: f.lo, hi: d.hi };
                }
            }
        } else return a(s, t, n);
    }
    return { lo: 0, hi: s.length - 1 };
}
function Or(e, t, n, i, r) {
    const s = e.getSortedVisibleDatasetMetas(),
        o = n[t];
    for (let l = 0, a = s.length; l < a; ++l) {
        const { index: u, data: c } = s[l],
            { lo: f, hi: d } = Ny(s[l], t, o, r);
        for (let h = f; h <= d; ++h) {
            const m = c[h];
            m.skip || i(m, u, h);
        }
    }
}
function Ay(e) {
    const t = e.indexOf('x') !== -1,
        n = e.indexOf('y') !== -1;
    return function (i, r) {
        const s = t ? Math.abs(i.x - r.x) : 0,
            o = n ? Math.abs(i.y - r.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
    };
}
function ol(e, t, n, i, r) {
    const s = [];
    return (
        (!r && !e.isPointInArea(t)) ||
            Or(
                e,
                n,
                t,
                function (l, a, u) {
                    (!r && !kr(l, e.chartArea, 0)) ||
                        (l.inRange(t.x, t.y, i) &&
                            s.push({ element: l, datasetIndex: a, index: u }));
                },
                !0
            ),
        s
    );
}
function Iy(e, t, n, i) {
    let r = [];
    function s(o, l, a) {
        const { startAngle: u, endAngle: c } = o.getProps(['startAngle', 'endAngle'], i),
            { angle: f } = l1(o, { x: t.x, y: t.y });
        cp(f, u, c) && r.push({ element: o, datasetIndex: l, index: a });
    }
    return Or(e, n, t, s), r;
}
function Fy(e, t, n, i, r, s) {
    let o = [];
    const l = Ay(n);
    let a = Number.POSITIVE_INFINITY;
    function u(c, f, d) {
        const h = c.inRange(t.x, t.y, r);
        if (i && !h) return;
        const m = c.getCenterPoint(r);
        if (!(!!s || e.isPointInArea(m)) && !h) return;
        const x = l(t, m);
        x < a
            ? ((o = [{ element: c, datasetIndex: f, index: d }]), (a = x))
            : x === a && o.push({ element: c, datasetIndex: f, index: d });
    }
    return Or(e, n, t, u), o;
}
function ll(e, t, n, i, r, s) {
    return !s && !e.isPointInArea(t) ? [] : n === 'r' && !i ? Iy(e, t, n, r) : Fy(e, t, n, i, r, s);
}
function uf(e, t, n, i, r) {
    const s = [],
        o = n === 'x' ? 'inXRange' : 'inYRange';
    let l = !1;
    return (
        Or(e, n, t, (a, u, c) => {
            a[o](t[n], r) &&
                (s.push({ element: a, datasetIndex: u, index: c }),
                (l = l || a.inRange(t.x, t.y, r)));
        }),
        i && !l ? [] : s
    );
}
var Hy = {
    evaluateInteractionItems: Or,
    modes: {
        index(e, t, n, i) {
            const r = xn(t, e),
                s = n.axis || 'x',
                o = n.includeInvisible || !1,
                l = n.intersect ? ol(e, r, s, i, o) : ll(e, r, s, !1, i, o),
                a = [];
            return l.length
                ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
                      const c = l[0].index,
                          f = u.data[c];
                      f && !f.skip && a.push({ element: f, datasetIndex: u.index, index: c });
                  }),
                  a)
                : [];
        },
        dataset(e, t, n, i) {
            const r = xn(t, e),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            let l = n.intersect ? ol(e, r, s, i, o) : ll(e, r, s, !1, i, o);
            if (l.length > 0) {
                const a = l[0].datasetIndex,
                    u = e.getDatasetMeta(a).data;
                l = [];
                for (let c = 0; c < u.length; ++c)
                    l.push({ element: u[c], datasetIndex: a, index: c });
            }
            return l;
        },
        point(e, t, n, i) {
            const r = xn(t, e),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return ol(e, r, s, i, o);
        },
        nearest(e, t, n, i) {
            const r = xn(t, e),
                s = n.axis || 'xy',
                o = n.includeInvisible || !1;
            return ll(e, r, s, n.intersect, i, o);
        },
        x(e, t, n, i) {
            const r = xn(t, e);
            return uf(e, r, 'x', n.intersect, i);
        },
        y(e, t, n, i) {
            const r = xn(t, e);
            return uf(e, r, 'y', n.intersect, i);
        },
    },
};
const Tp = ['left', 'top', 'right', 'bottom'];
function Ei(e, t) {
    return e.filter((n) => n.pos === t);
}
function cf(e, t) {
    return e.filter((n) => Tp.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Ti(e, t) {
    return e.sort((n, i) => {
        const r = t ? i : n,
            s = t ? n : i;
        return r.weight === s.weight ? r.index - s.index : r.weight - s.weight;
    });
}
function By(e) {
    const t = [];
    let n, i, r, s, o, l;
    for (n = 0, i = (e || []).length; n < i; ++n)
        (r = e[n]),
            ({
                position: s,
                options: { stack: o, stackWeight: l = 1 },
            } = r),
            t.push({
                index: n,
                box: r,
                pos: s,
                horizontal: r.isHorizontal(),
                weight: r.weight,
                stack: o && s + o,
                stackWeight: l,
            });
    return t;
}
function jy(e) {
    const t = {};
    for (const n of e) {
        const { stack: i, pos: r, stackWeight: s } = n;
        if (!i || !Tp.includes(r)) continue;
        const o = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
        o.count++, (o.weight += s);
    }
    return t;
}
function Vy(e, t) {
    const n = jy(e),
        { vBoxMaxWidth: i, hBoxMaxHeight: r } = t;
    let s, o, l;
    for (s = 0, o = e.length; s < o; ++s) {
        l = e[s];
        const { fullSize: a } = l.box,
            u = n[l.stack],
            c = u && l.stackWeight / u.weight;
        l.horizontal
            ? ((l.width = c ? c * i : a && t.availableWidth), (l.height = r))
            : ((l.width = i), (l.height = c ? c * r : a && t.availableHeight));
    }
    return n;
}
function Wy(e) {
    const t = By(e),
        n = Ti(
            t.filter((u) => u.box.fullSize),
            !0
        ),
        i = Ti(Ei(t, 'left'), !0),
        r = Ti(Ei(t, 'right')),
        s = Ti(Ei(t, 'top'), !0),
        o = Ti(Ei(t, 'bottom')),
        l = cf(t, 'x'),
        a = cf(t, 'y');
    return {
        fullSize: n,
        leftAndTop: i.concat(s),
        rightAndBottom: r.concat(a).concat(o).concat(l),
        chartArea: Ei(t, 'chartArea'),
        vertical: i.concat(r).concat(a),
        horizontal: s.concat(o).concat(l),
    };
}
function ff(e, t, n, i) {
    return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function Lp(e, t) {
    (e.top = Math.max(e.top, t.top)),
        (e.left = Math.max(e.left, t.left)),
        (e.bottom = Math.max(e.bottom, t.bottom)),
        (e.right = Math.max(e.right, t.right));
}
function $y(e, t, n, i) {
    const { pos: r, box: s } = n,
        o = e.maxPadding;
    if (!B(r)) {
        n.size && (e[r] -= n.size);
        const f = i[n.stack] || { size: 0, count: 1 };
        (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)),
            (n.size = f.size / f.count),
            (e[r] += n.size);
    }
    s.getPadding && Lp(o, s.getPadding());
    const l = Math.max(0, t.outerWidth - ff(o, e, 'left', 'right')),
        a = Math.max(0, t.outerHeight - ff(o, e, 'top', 'bottom')),
        u = l !== e.w,
        c = a !== e.h;
    return (e.w = l), (e.h = a), n.horizontal ? { same: u, other: c } : { same: c, other: u };
}
function Uy(e) {
    const t = e.maxPadding;
    function n(i) {
        const r = Math.max(t[i] - e[i], 0);
        return (e[i] += r), r;
    }
    (e.y += n('top')), (e.x += n('left')), n('right'), n('bottom');
}
function Yy(e, t) {
    const n = t.maxPadding;
    function i(r) {
        const s = { left: 0, top: 0, right: 0, bottom: 0 };
        return (
            r.forEach((o) => {
                s[o] = Math.max(t[o], n[o]);
            }),
            s
        );
    }
    return i(e ? ['left', 'right'] : ['top', 'bottom']);
}
function Hi(e, t, n, i) {
    const r = [];
    let s, o, l, a, u, c;
    for (s = 0, o = e.length, u = 0; s < o; ++s) {
        (l = e[s]), (a = l.box), a.update(l.width || t.w, l.height || t.h, Yy(l.horizontal, t));
        const { same: f, other: d } = $y(t, n, l, i);
        (u |= f && r.length), (c = c || d), a.fullSize || r.push(l);
    }
    return (u && Hi(r, t, n, i)) || c;
}
function is(e, t, n, i, r) {
    (e.top = n), (e.left = t), (e.right = t + i), (e.bottom = n + r), (e.width = i), (e.height = r);
}
function df(e, t, n, i) {
    const r = n.padding;
    let { x: s, y: o } = t;
    for (const l of e) {
        const a = l.box,
            u = i[l.stack] || { count: 1, placed: 0, weight: 1 },
            c = l.stackWeight / u.weight || 1;
        if (l.horizontal) {
            const f = t.w * c,
                d = u.size || a.height;
            de(u.start) && (o = u.start),
                a.fullSize
                    ? is(a, r.left, o, n.outerWidth - r.right - r.left, d)
                    : is(a, t.left + u.placed, o, f, d),
                (u.start = o),
                (u.placed += f),
                (o = a.bottom);
        } else {
            const f = t.h * c,
                d = u.size || a.width;
            de(u.start) && (s = u.start),
                a.fullSize
                    ? is(a, s, r.top, d, n.outerHeight - r.bottom - r.top)
                    : is(a, s, t.top + u.placed, d, f),
                (u.start = s),
                (u.placed += f),
                (s = a.right);
        }
    }
    (t.x = s), (t.y = o);
}
var Jt = {
    addBox(e, t) {
        e.boxes || (e.boxes = []),
            (t.fullSize = t.fullSize || !1),
            (t.position = t.position || 'top'),
            (t.weight = t.weight || 0),
            (t._layers =
                t._layers ||
                function () {
                    return [
                        {
                            z: 0,
                            draw(n) {
                                t.draw(n);
                            },
                        },
                    ];
                }),
            e.boxes.push(t);
    },
    removeBox(e, t) {
        const n = e.boxes ? e.boxes.indexOf(t) : -1;
        n !== -1 && e.boxes.splice(n, 1);
    },
    configure(e, t, n) {
        (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
    },
    update(e, t, n, i) {
        if (!e) return;
        const r = bt(e.options.layout.padding),
            s = Math.max(t - r.width, 0),
            o = Math.max(n - r.height, 0),
            l = Wy(e.boxes),
            a = l.vertical,
            u = l.horizontal;
        j(e.boxes, (y) => {
            typeof y.beforeLayout == 'function' && y.beforeLayout();
        });
        const c =
                a.reduce(
                    (y, x) => (x.box.options && x.box.options.display === !1 ? y : y + 1),
                    0
                ) || 1,
            f = Object.freeze({
                outerWidth: t,
                outerHeight: n,
                padding: r,
                availableWidth: s,
                availableHeight: o,
                vBoxMaxWidth: s / 2 / c,
                hBoxMaxHeight: o / 2,
            }),
            d = Object.assign({}, r);
        Lp(d, bt(i));
        const h = Object.assign({ maxPadding: d, w: s, h: o, x: r.left, y: r.top }, r),
            m = Vy(a.concat(u), f);
        Hi(l.fullSize, h, f, m),
            Hi(a, h, f, m),
            Hi(u, h, f, m) && Hi(a, h, f, m),
            Uy(h),
            df(l.leftAndTop, h, f, m),
            (h.x += h.w),
            (h.y += h.h),
            df(l.rightAndBottom, h, f, m),
            (e.chartArea = {
                left: h.left,
                top: h.top,
                right: h.left + h.w,
                bottom: h.top + h.h,
                height: h.h,
                width: h.w,
            }),
            j(l.chartArea, (y) => {
                const x = y.box;
                Object.assign(x, e.chartArea),
                    x.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
    },
};
class Op {
    acquireContext(t, n) {}
    releaseContext(t) {
        return !1;
    }
    addEventListener(t, n, i) {}
    removeEventListener(t, n, i) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(t, n, i, r) {
        return (
            (n = Math.max(0, n || t.width)),
            (i = i || t.height),
            { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
        );
    }
    isAttached(t) {
        return !0;
    }
    updateConfig(t) {}
}
class Qy extends Op {
    acquireContext(t) {
        return (t && t.getContext && t.getContext('2d')) || null;
    }
    updateConfig(t) {
        t.options.animation = !1;
    }
}
const Cs = '$chartjs',
    Ky = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout',
    },
    hf = (e) => e === null || e === '';
function Xy(e, t) {
    const n = e.style,
        i = e.getAttribute('height'),
        r = e.getAttribute('width');
    if (
        ((e[Cs] = {
            initial: {
                height: i,
                width: r,
                style: { display: n.display, height: n.height, width: n.width },
            },
        }),
        (n.display = n.display || 'block'),
        (n.boxSizing = n.boxSizing || 'border-box'),
        hf(r))
    ) {
        const s = Gc(e, 'width');
        s !== void 0 && (e.width = s);
    }
    if (hf(i))
        if (e.style.height === '') e.height = e.width / (t || 2);
        else {
            const s = Gc(e, 'height');
            s !== void 0 && (e.height = s);
        }
    return e;
}
const Dp = ly ? { passive: !0 } : !1;
function Zy(e, t, n) {
    e.addEventListener(t, n, Dp);
}
function Gy(e, t, n) {
    e.canvas.removeEventListener(t, n, Dp);
}
function qy(e, t) {
    const n = Ky[e.type] || e.type,
        { x: i, y: r } = xn(e, t);
    return { type: n, chart: t, native: e, x: i !== void 0 ? i : null, y: r !== void 0 ? r : null };
}
function ro(e, t) {
    for (const n of e) if (n === t || n.contains(t)) return !0;
}
function Jy(e, t, n) {
    const i = e.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s) (o = o || ro(l.addedNodes, i)), (o = o && !ro(l.removedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
function tv(e, t, n) {
    const i = e.canvas,
        r = new MutationObserver((s) => {
            let o = !1;
            for (const l of s) (o = o || ro(l.removedNodes, i)), (o = o && !ro(l.addedNodes, i));
            o && n();
        });
    return r.observe(document, { childList: !0, subtree: !0 }), r;
}
const Sr = new Map();
let pf = 0;
function zp() {
    const e = window.devicePixelRatio;
    e !== pf &&
        ((pf = e),
        Sr.forEach((t, n) => {
            n.currentDevicePixelRatio !== e && t();
        }));
}
function ev(e, t) {
    Sr.size || window.addEventListener('resize', zp), Sr.set(e, t);
}
function nv(e) {
    Sr.delete(e), Sr.size || window.removeEventListener('resize', zp);
}
function iv(e, t, n) {
    const i = e.canvas,
        r = i && wu(i);
    if (!r) return;
    const s = hp((l, a) => {
            const u = r.clientWidth;
            n(l, a), u < r.clientWidth && n();
        }, window),
        o = new ResizeObserver((l) => {
            const a = l[0],
                u = a.contentRect.width,
                c = a.contentRect.height;
            (u === 0 && c === 0) || s(u, c);
        });
    return o.observe(r), ev(e, s), o;
}
function al(e, t, n) {
    n && n.disconnect(), t === 'resize' && nv(e);
}
function rv(e, t, n) {
    const i = e.canvas,
        r = hp((s) => {
            e.ctx !== null && n(qy(s, e));
        }, e);
    return Zy(i, t, r), r;
}
class sv extends Op {
    acquireContext(t, n) {
        const i = t && t.getContext && t.getContext('2d');
        return i && i.canvas === t ? (Xy(t, n), i) : null;
    }
    releaseContext(t) {
        const n = t.canvas;
        if (!n[Cs]) return !1;
        const i = n[Cs].initial;
        ['height', 'width'].forEach((s) => {
            const o = i[s];
            X(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
        });
        const r = i.style || {};
        return (
            Object.keys(r).forEach((s) => {
                n.style[s] = r[s];
            }),
            (n.width = n.width),
            delete n[Cs],
            !0
        );
    }
    addEventListener(t, n, i) {
        this.removeEventListener(t, n);
        const r = t.$proxies || (t.$proxies = {}),
            o = { attach: Jy, detach: tv, resize: iv }[n] || rv;
        r[n] = o(t, n, i);
    }
    removeEventListener(t, n) {
        const i = t.$proxies || (t.$proxies = {}),
            r = i[n];
        if (!r) return;
        (({ attach: al, detach: al, resize: al })[n] || Gy)(t, n, r), (i[n] = void 0);
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(t, n, i, r) {
        return oy(t, n, i, r);
    }
    isAttached(t) {
        const n = wu(t);
        return !!(n && n.isConnected);
    }
}
function ov(e) {
    return !Sp() || (typeof OffscreenCanvas < 'u' && e instanceof OffscreenCanvas) ? Qy : sv;
}
class Ae {
    constructor() {
        R(this, 'active', !1);
    }
    tooltipPosition(t) {
        const { x: n, y: i } = this.getProps(['x', 'y'], t);
        return { x: n, y: i };
    }
    hasValue() {
        return wr(this.x) && wr(this.y);
    }
    getProps(t, n) {
        const i = this.$animations;
        if (!n || !i) return this;
        const r = {};
        return (
            t.forEach((s) => {
                r[s] = i[s] && i[s].active() ? i[s]._to : this[s];
            }),
            r
        );
    }
}
R(Ae, 'defaults', {}), R(Ae, 'defaultRoutes');
function lv(e, t) {
    const n = e.options.ticks,
        i = av(e),
        r = Math.min(n.maxTicksLimit || i, i),
        s = n.major.enabled ? cv(t) : [],
        o = s.length,
        l = s[0],
        a = s[o - 1],
        u = [];
    if (o > r) return fv(t, u, s, o / r), u;
    const c = uv(s, t, r);
    if (o > 0) {
        let f, d;
        const h = o > 1 ? Math.round((a - l) / (o - 1)) : null;
        for (rs(t, u, c, X(h) ? 0 : l - h, l), f = 0, d = o - 1; f < d; f++)
            rs(t, u, c, s[f], s[f + 1]);
        return rs(t, u, c, a, X(h) ? t.length : a + h), u;
    }
    return rs(t, u, c), u;
}
function av(e) {
    const t = e.options.offset,
        n = e._tickSize(),
        i = e._length / n + (t ? 0 : 1),
        r = e._maxLength / n;
    return Math.floor(Math.min(i, r));
}
function uv(e, t, n) {
    const i = dv(e),
        r = t.length / n;
    if (!i) return Math.max(r, 1);
    const s = s1(i);
    for (let o = 0, l = s.length - 1; o < l; o++) {
        const a = s[o];
        if (a > r) return a;
    }
    return Math.max(r, 1);
}
function cv(e) {
    const t = [];
    let n, i;
    for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n);
    return t;
}
function fv(e, t, n, i) {
    let r = 0,
        s = n[0],
        o;
    for (i = Math.ceil(i), o = 0; o < e.length; o++) o === s && (t.push(e[o]), r++, (s = n[r * i]));
}
function rs(e, t, n, i, r) {
    const s = A(i, 0),
        o = Math.min(A(r, e.length), e.length);
    let l = 0,
        a,
        u,
        c;
    for (n = Math.ceil(n), r && ((a = r - i), (n = a / Math.floor(a / n))), c = s; c < 0; )
        l++, (c = Math.round(s + l * n));
    for (u = Math.max(s, 0); u < o; u++)
        u === c && (t.push(e[u]), l++, (c = Math.round(s + l * n)));
}
function dv(e) {
    const t = e.length;
    let n, i;
    if (t < 2) return !1;
    for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1;
    return i;
}
const hv = (e) => (e === 'left' ? 'right' : e === 'right' ? 'left' : e),
    gf = (e, t, n) => (t === 'top' || t === 'left' ? e[t] + n : e[t] - n),
    mf = (e, t) => Math.min(t || e, e);
function yf(e, t) {
    const n = [],
        i = e.length / t,
        r = e.length;
    let s = 0;
    for (; s < r; s += i) n.push(e[Math.floor(s)]);
    return n;
}
function pv(e, t, n) {
    const i = e.ticks.length,
        r = Math.min(t, i - 1),
        s = e._startPixel,
        o = e._endPixel,
        l = 1e-6;
    let a = e.getPixelForTick(r),
        u;
    if (
        !(
            n &&
            (i === 1
                ? (u = Math.max(a - s, o - a))
                : t === 0
                ? (u = (e.getPixelForTick(1) - a) / 2)
                : (u = (a - e.getPixelForTick(r - 1)) / 2),
            (a += r < t ? u : -u),
            a < s - l || a > o + l)
        )
    )
        return a;
}
function gv(e, t) {
    j(e, (n) => {
        const i = n.gc,
            r = i.length / 2;
        let s;
        if (r > t) {
            for (s = 0; s < r; ++s) delete n.data[i[s]];
            i.splice(0, r);
        }
    });
}
function Li(e) {
    return e.drawTicks ? e.tickLength : 0;
}
function vf(e, t) {
    if (!e.display) return 0;
    const n = ft(e.font, t),
        i = bt(e.padding);
    return (tt(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function mv(e, t) {
    return dn(e, { scale: t, type: 'scale' });
}
function yv(e, t, n) {
    return dn(e, { tick: n, index: t, type: 'tick' });
}
function vv(e, t, n) {
    let i = pu(e);
    return ((n && t !== 'right') || (!n && t === 'right')) && (i = hv(i)), i;
}
function xv(e, t, n, i) {
    const { top: r, left: s, bottom: o, right: l, chart: a } = e,
        { chartArea: u, scales: c } = a;
    let f = 0,
        d,
        h,
        m;
    const y = o - r,
        x = l - s;
    if (e.isHorizontal()) {
        if (((h = kt(i, s, l)), B(n))) {
            const p = Object.keys(n)[0],
                g = n[p];
            m = c[p].getPixelForValue(g) + y - t;
        } else n === 'center' ? (m = (u.bottom + u.top) / 2 + y - t) : (m = gf(e, n, t));
        d = l - s;
    } else {
        if (B(n)) {
            const p = Object.keys(n)[0],
                g = n[p];
            h = c[p].getPixelForValue(g) - x + t;
        } else n === 'center' ? (h = (u.left + u.right) / 2 - x + t) : (h = gf(e, n, t));
        (m = kt(i, o, r)), (f = n === 'left' ? -Rt : Rt);
    }
    return { titleX: h, titleY: m, maxWidth: d, rotation: f };
}
class In extends Ae {
    constructor(t) {
        super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
    }
    init(t) {
        (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
    }
    parse(t, n) {
        return t;
    }
    getUserBounds() {
        let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this;
        return (
            (t = jt(t, Number.POSITIVE_INFINITY)),
            (n = jt(n, Number.NEGATIVE_INFINITY)),
            (i = jt(i, Number.POSITIVE_INFINITY)),
            (r = jt(r, Number.NEGATIVE_INFINITY)),
            { min: jt(t, i), max: jt(n, r), minDefined: pt(t), maxDefined: pt(n) }
        );
    }
    getMinMax(t) {
        let { min: n, max: i, minDefined: r, maxDefined: s } = this.getUserBounds(),
            o;
        if (r && s) return { min: n, max: i };
        const l = this.getMatchingVisibleMetas();
        for (let a = 0, u = l.length; a < u; ++a)
            (o = l[a].controller.getMinMax(this, t)),
                r || (n = Math.min(n, o.min)),
                s || (i = Math.max(i, o.max));
        return (
            (n = s && n > i ? i : n),
            (i = r && n > i ? n : i),
            { min: jt(n, jt(i, n)), max: jt(i, jt(n, i)) }
        );
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const t = this.chart.data;
        return (
            this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        );
    }
    getLabelItems(t = this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t));
    }
    beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
        $(this.options.beforeUpdate, [this]);
    }
    update(t, n, i) {
        const { beginAtZero: r, grace: s, ticks: o } = this.options,
            l = o.sampleSize;
        this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = n),
            (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
                ? this.width + i.left + i.right
                : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
                (this.beforeDataLimits(),
                this.determineDataLimits(),
                this.afterDataLimits(),
                (this._range = F1(this, s, r)),
                (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
        const a = l < this.ticks.length;
        this._convertTicksToLabels(a ? yf(this.ticks, l) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
                (o.autoSkip || o.source === 'auto') &&
                ((this.ticks = lv(this, this.ticks)),
                (this._labelSizes = null),
                this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
    }
    configure() {
        let t = this.options.reverse,
            n,
            i;
        this.isHorizontal()
            ? ((n = this.left), (i = this.right))
            : ((n = this.top), (i = this.bottom), (t = !t)),
            (this._startPixel = n),
            (this._endPixel = i),
            (this._reversePixels = t),
            (this._length = i - n),
            (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
        $(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
        $(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
            : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
    }
    afterSetDimensions() {
        $(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), $(this.options[t], [this]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        $(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
        const n = this.options.ticks;
        let i, r, s;
        for (i = 0, r = t.length; i < r; i++)
            (s = t[i]), (s.label = $(n.callback, [s.value, i, t], this));
    }
    afterTickToLabelConversion() {
        $(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
        $(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
        const t = this.options,
            n = t.ticks,
            i = mf(this.ticks.length, t.ticks.maxTicksLimit),
            r = n.minRotation || 0,
            s = n.maxRotation;
        let o = r,
            l,
            a,
            u;
        if (!this._isVisible() || !n.display || r >= s || i <= 1 || !this.isHorizontal()) {
            this.labelRotation = r;
            return;
        }
        const c = this._getLabelSizes(),
            f = c.widest.width,
            d = c.highest.height,
            h = qt(this.chart.width - f, 0, this.maxWidth);
        (l = t.offset ? this.maxWidth / i : h / (i - 1)),
            f + 6 > l &&
                ((l = h / (i - (t.offset ? 0.5 : 1))),
                (a =
                    this.maxHeight - Li(t.grid) - n.padding - vf(t.title, this.chart.options.font)),
                (u = Math.sqrt(f * f + d * d)),
                (o = du(
                    Math.min(
                        Math.asin(qt((c.highest.height + 6) / l, -1, 1)),
                        Math.asin(qt(a / u, -1, 1)) - Math.asin(qt(d / u, -1, 1))
                    )
                )),
                (o = Math.max(r, Math.min(s, o)))),
            (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
        $(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
        $(this.options.beforeFit, [this]);
    }
    fit() {
        const t = { width: 0, height: 0 },
            {
                chart: n,
                options: { ticks: i, title: r, grid: s },
            } = this,
            o = this._isVisible(),
            l = this.isHorizontal();
        if (o) {
            const a = vf(r, n.options.font);
            if (
                (l
                    ? ((t.width = this.maxWidth), (t.height = Li(s) + a))
                    : ((t.height = this.maxHeight), (t.width = Li(s) + a)),
                i.display && this.ticks.length)
            ) {
                const { first: u, last: c, widest: f, highest: d } = this._getLabelSizes(),
                    h = i.padding * 2,
                    m = Qe(this.labelRotation),
                    y = Math.cos(m),
                    x = Math.sin(m);
                if (l) {
                    const p = i.mirror ? 0 : x * f.width + y * d.height;
                    t.height = Math.min(this.maxHeight, t.height + p + h);
                } else {
                    const p = i.mirror ? 0 : y * f.width + x * d.height;
                    t.width = Math.min(this.maxWidth, t.width + p + h);
                }
                this._calculatePadding(u, c, x, y);
            }
        }
        this._handleMargins(),
            l
                ? ((this.width = this._length = n.width - this._margins.left - this._margins.right),
                  (this.height = t.height))
                : ((this.width = t.width),
                  (this.height = this._length =
                      n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(t, n, i, r) {
        const {
                ticks: { align: s, padding: o },
                position: l,
            } = this.options,
            a = this.labelRotation !== 0,
            u = l !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const c = this.getPixelForTick(0) - this.left,
                f = this.right - this.getPixelForTick(this.ticks.length - 1);
            let d = 0,
                h = 0;
            a
                ? u
                    ? ((d = r * t.width), (h = i * n.height))
                    : ((d = i * t.height), (h = r * n.width))
                : s === 'start'
                ? (h = n.width)
                : s === 'end'
                ? (d = t.width)
                : s !== 'inner' && ((d = t.width / 2), (h = n.width / 2)),
                (this.paddingLeft = Math.max(((d - c + o) * this.width) / (this.width - c), 0)),
                (this.paddingRight = Math.max(((h - f + o) * this.width) / (this.width - f), 0));
        } else {
            let c = n.height / 2,
                f = t.height / 2;
            s === 'start' ? ((c = 0), (f = t.height)) : s === 'end' && ((c = n.height), (f = 0)),
                (this.paddingTop = c + o),
                (this.paddingBottom = f + o);
        }
    }
    _handleMargins() {
        this._margins &&
            ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
            (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
    }
    afterFit() {
        $(this.options.afterFit, [this]);
    }
    isHorizontal() {
        const { axis: t, position: n } = this.options;
        return n === 'top' || n === 'bottom' || t === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let n, i;
        for (n = 0, i = t.length; n < i; n++) X(t[n].label) && (t.splice(n, 1), i--, n--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const n = this.options.ticks.sampleSize;
            let i = this.ticks;
            n < i.length && (i = yf(i, n)),
                (this._labelSizes = t =
                    this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
        }
        return t;
    }
    _computeLabelSizes(t, n, i) {
        const { ctx: r, _longestTextCache: s } = this,
            o = [],
            l = [],
            a = Math.floor(n / mf(n, i));
        let u = 0,
            c = 0,
            f,
            d,
            h,
            m,
            y,
            x,
            p,
            g,
            v,
            _,
            w;
        for (f = 0; f < n; f += a) {
            if (
                ((m = t[f].label),
                (y = this._resolveTickFontOptions(f)),
                (r.font = x = y.string),
                (p = s[x] = s[x] || { data: {}, gc: [] }),
                (g = y.lineHeight),
                (v = _ = 0),
                !X(m) && !tt(m))
            )
                (v = eo(r, p.data, p.gc, v, m)), (_ = g);
            else if (tt(m))
                for (d = 0, h = m.length; d < h; ++d)
                    (w = m[d]), !X(w) && !tt(w) && ((v = eo(r, p.data, p.gc, v, w)), (_ += g));
            o.push(v), l.push(_), (u = Math.max(v, u)), (c = Math.max(_, c));
        }
        gv(s, n);
        const k = o.indexOf(u),
            S = l.indexOf(c),
            C = (L) => ({ width: o[L] || 0, height: l[L] || 0 });
        return { first: C(0), last: C(n - 1), widest: C(k), highest: C(S), widths: o, heights: l };
    }
    getLabelForValue(t) {
        return t;
    }
    getPixelForValue(t, n) {
        return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
        const n = this.ticks;
        return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const n = this._startPixel + t * this._length;
        return u1(this._alignToPixels ? pn(this.chart, n, 0) : n);
    }
    getDecimalForPixel(t) {
        const n = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: t, max: n } = this;
        return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
    }
    getContext(t) {
        const n = this.ticks || [];
        if (t >= 0 && t < n.length) {
            const i = n[t];
            return i.$context || (i.$context = yv(this.getContext(), t, i));
        }
        return this.$context || (this.$context = mv(this.chart.getContext(), this));
    }
    _tickSize() {
        const t = this.options.ticks,
            n = Qe(this.labelRotation),
            i = Math.abs(Math.cos(n)),
            r = Math.abs(Math.sin(n)),
            s = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            l = s ? s.widest.width + o : 0,
            a = s ? s.highest.height + o : 0;
        return this.isHorizontal()
            ? a * i > l * r
                ? l / i
                : a / r
            : a * r < l * i
            ? a / i
            : l / r;
    }
    _isVisible() {
        const t = this.options.display;
        return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
        const n = this.axis,
            i = this.chart,
            r = this.options,
            { grid: s, position: o, border: l } = r,
            a = s.offset,
            u = this.isHorizontal(),
            f = this.ticks.length + (a ? 1 : 0),
            d = Li(s),
            h = [],
            m = l.setContext(this.getContext()),
            y = m.display ? m.width : 0,
            x = y / 2,
            p = function (rt) {
                return pn(i, rt, y);
            };
        let g, v, _, w, k, S, C, L, E, O, I, lt;
        if (o === 'top')
            (g = p(this.bottom)),
                (S = this.bottom - d),
                (L = g - x),
                (O = p(t.top) + x),
                (lt = t.bottom);
        else if (o === 'bottom')
            (g = p(this.top)), (O = t.top), (lt = p(t.bottom) - x), (S = g + x), (L = this.top + d);
        else if (o === 'left')
            (g = p(this.right)),
                (k = this.right - d),
                (C = g - x),
                (E = p(t.left) + x),
                (I = t.right);
        else if (o === 'right')
            (g = p(this.left)),
                (E = t.left),
                (I = p(t.right) - x),
                (k = g + x),
                (C = this.left + d);
        else if (n === 'x') {
            if (o === 'center') g = p((t.top + t.bottom) / 2 + 0.5);
            else if (B(o)) {
                const rt = Object.keys(o)[0],
                    xt = o[rt];
                g = p(this.chart.scales[rt].getPixelForValue(xt));
            }
            (O = t.top), (lt = t.bottom), (S = g + x), (L = S + d);
        } else if (n === 'y') {
            if (o === 'center') g = p((t.left + t.right) / 2);
            else if (B(o)) {
                const rt = Object.keys(o)[0],
                    xt = o[rt];
                g = p(this.chart.scales[rt].getPixelForValue(xt));
            }
            (k = g - x), (C = k - d), (E = t.left), (I = t.right);
        }
        const Ft = A(r.ticks.maxTicksLimit, f),
            q = Math.max(1, Math.ceil(f / Ft));
        for (v = 0; v < f; v += q) {
            const rt = this.getContext(v),
                xt = s.setContext(rt),
                P = l.setContext(rt),
                D = xt.lineWidth,
                z = xt.color,
                W = P.dash || [],
                Q = P.dashOffset,
                he = xt.tickWidth,
                Ht = xt.tickColor,
                ke = xt.tickBorderDash || [],
                Bt = xt.tickBorderDashOffset;
            (_ = pv(this, v, a)),
                _ !== void 0 &&
                    ((w = pn(i, _, D)),
                    u ? (k = C = E = I = w) : (S = L = O = lt = w),
                    h.push({
                        tx1: k,
                        ty1: S,
                        tx2: C,
                        ty2: L,
                        x1: E,
                        y1: O,
                        x2: I,
                        y2: lt,
                        width: D,
                        color: z,
                        borderDash: W,
                        borderDashOffset: Q,
                        tickWidth: he,
                        tickColor: Ht,
                        tickBorderDash: ke,
                        tickBorderDashOffset: Bt,
                    }));
        }
        return (this._ticksLength = f), (this._borderValue = g), h;
    }
    _computeLabelItems(t) {
        const n = this.axis,
            i = this.options,
            { position: r, ticks: s } = i,
            o = this.isHorizontal(),
            l = this.ticks,
            { align: a, crossAlign: u, padding: c, mirror: f } = s,
            d = Li(i.grid),
            h = d + c,
            m = f ? -c : h,
            y = -Qe(this.labelRotation),
            x = [];
        let p,
            g,
            v,
            _,
            w,
            k,
            S,
            C,
            L,
            E,
            O,
            I,
            lt = 'middle';
        if (r === 'top') (k = this.bottom - m), (S = this._getXAxisLabelAlignment());
        else if (r === 'bottom') (k = this.top + m), (S = this._getXAxisLabelAlignment());
        else if (r === 'left') {
            const q = this._getYAxisLabelAlignment(d);
            (S = q.textAlign), (w = q.x);
        } else if (r === 'right') {
            const q = this._getYAxisLabelAlignment(d);
            (S = q.textAlign), (w = q.x);
        } else if (n === 'x') {
            if (r === 'center') k = (t.top + t.bottom) / 2 + h;
            else if (B(r)) {
                const q = Object.keys(r)[0],
                    rt = r[q];
                k = this.chart.scales[q].getPixelForValue(rt) + h;
            }
            S = this._getXAxisLabelAlignment();
        } else if (n === 'y') {
            if (r === 'center') w = (t.left + t.right) / 2 - h;
            else if (B(r)) {
                const q = Object.keys(r)[0],
                    rt = r[q];
                w = this.chart.scales[q].getPixelForValue(rt);
            }
            S = this._getYAxisLabelAlignment(d).textAlign;
        }
        n === 'y' && (a === 'start' ? (lt = 'top') : a === 'end' && (lt = 'bottom'));
        const Ft = this._getLabelSizes();
        for (p = 0, g = l.length; p < g; ++p) {
            (v = l[p]), (_ = v.label);
            const q = s.setContext(this.getContext(p));
            (C = this.getPixelForTick(p) + s.labelOffset),
                (L = this._resolveTickFontOptions(p)),
                (E = L.lineHeight),
                (O = tt(_) ? _.length : 1);
            const rt = O / 2,
                xt = q.color,
                P = q.textStrokeColor,
                D = q.textStrokeWidth;
            let z = S;
            o
                ? ((w = C),
                  S === 'inner' &&
                      (p === g - 1
                          ? (z = this.options.reverse ? 'left' : 'right')
                          : p === 0
                          ? (z = this.options.reverse ? 'right' : 'left')
                          : (z = 'center')),
                  r === 'top'
                      ? u === 'near' || y !== 0
                          ? (I = -O * E + E / 2)
                          : u === 'center'
                          ? (I = -Ft.highest.height / 2 - rt * E + E)
                          : (I = -Ft.highest.height + E / 2)
                      : u === 'near' || y !== 0
                      ? (I = E / 2)
                      : u === 'center'
                      ? (I = Ft.highest.height / 2 - rt * E)
                      : (I = Ft.highest.height - O * E),
                  f && (I *= -1),
                  y !== 0 && !q.showLabelBackdrop && (w += (E / 2) * Math.sin(y)))
                : ((k = C), (I = ((1 - O) * E) / 2));
            let W;
            if (q.showLabelBackdrop) {
                const Q = bt(q.backdropPadding),
                    he = Ft.heights[p],
                    Ht = Ft.widths[p];
                let ke = I - Q.top,
                    Bt = 0 - Q.left;
                switch (lt) {
                    case 'middle':
                        ke -= he / 2;
                        break;
                    case 'bottom':
                        ke -= he;
                        break;
                }
                switch (S) {
                    case 'center':
                        Bt -= Ht / 2;
                        break;
                    case 'right':
                        Bt -= Ht;
                        break;
                }
                W = {
                    left: Bt,
                    top: ke,
                    width: Ht + Q.width,
                    height: he + Q.height,
                    color: q.backdropColor,
                };
            }
            x.push({
                label: _,
                font: L,
                textOffset: I,
                options: {
                    rotation: y,
                    color: xt,
                    strokeColor: P,
                    strokeWidth: D,
                    textAlign: z,
                    textBaseline: lt,
                    translation: [w, k],
                    backdrop: W,
                },
            });
        }
        return x;
    }
    _getXAxisLabelAlignment() {
        const { position: t, ticks: n } = this.options;
        if (-Qe(this.labelRotation)) return t === 'top' ? 'left' : 'right';
        let r = 'center';
        return (
            n.align === 'start'
                ? (r = 'left')
                : n.align === 'end'
                ? (r = 'right')
                : n.align === 'inner' && (r = 'inner'),
            r
        );
    }
    _getYAxisLabelAlignment(t) {
        const {
                position: n,
                ticks: { crossAlign: i, mirror: r, padding: s },
            } = this.options,
            o = this._getLabelSizes(),
            l = t + s,
            a = o.widest.width;
        let u, c;
        return (
            n === 'left'
                ? r
                    ? ((c = this.right + s),
                      i === 'near'
                          ? (u = 'left')
                          : i === 'center'
                          ? ((u = 'center'), (c += a / 2))
                          : ((u = 'right'), (c += a)))
                    : ((c = this.right - l),
                      i === 'near'
                          ? (u = 'right')
                          : i === 'center'
                          ? ((u = 'center'), (c -= a / 2))
                          : ((u = 'left'), (c = this.left)))
                : n === 'right'
                ? r
                    ? ((c = this.left + s),
                      i === 'near'
                          ? (u = 'right')
                          : i === 'center'
                          ? ((u = 'center'), (c -= a / 2))
                          : ((u = 'left'), (c -= a)))
                    : ((c = this.left + l),
                      i === 'near'
                          ? (u = 'left')
                          : i === 'center'
                          ? ((u = 'center'), (c += a / 2))
                          : ((u = 'right'), (c = this.right)))
                : (u = 'right'),
            { textAlign: u, x: c }
        );
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart,
            n = this.options.position;
        if (n === 'left' || n === 'right')
            return { top: 0, left: this.left, bottom: t.height, right: this.right };
        if (n === 'top' || n === 'bottom')
            return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
    }
    drawBackground() {
        const {
            ctx: t,
            options: { backgroundColor: n },
            left: i,
            top: r,
            width: s,
            height: o,
        } = this;
        n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, s, o), t.restore());
    }
    getLineWidthForValue(t) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display) return 0;
        const r = this.ticks.findIndex((s) => s.value === t);
        return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0;
    }
    drawGrid(t) {
        const n = this.options.grid,
            i = this.ctx,
            r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let s, o;
        const l = (a, u, c) => {
            !c.width ||
                !c.color ||
                (i.save(),
                (i.lineWidth = c.width),
                (i.strokeStyle = c.color),
                i.setLineDash(c.borderDash || []),
                (i.lineDashOffset = c.borderDashOffset),
                i.beginPath(),
                i.moveTo(a.x, a.y),
                i.lineTo(u.x, u.y),
                i.stroke(),
                i.restore());
        };
        if (n.display)
            for (s = 0, o = r.length; s < o; ++s) {
                const a = r[s];
                n.drawOnChartArea && l({ x: a.x1, y: a.y1 }, { x: a.x2, y: a.y2 }, a),
                    n.drawTicks &&
                        l(
                            { x: a.tx1, y: a.ty1 },
                            { x: a.tx2, y: a.ty2 },
                            {
                                color: a.tickColor,
                                width: a.tickWidth,
                                borderDash: a.tickBorderDash,
                                borderDashOffset: a.tickBorderDashOffset,
                            }
                        );
            }
    }
    drawBorder() {
        const {
                chart: t,
                ctx: n,
                options: { border: i, grid: r },
            } = this,
            s = i.setContext(this.getContext()),
            o = i.display ? s.width : 0;
        if (!o) return;
        const l = r.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
        let u, c, f, d;
        this.isHorizontal()
            ? ((u = pn(t, this.left, o) - o / 2), (c = pn(t, this.right, l) + l / 2), (f = d = a))
            : ((f = pn(t, this.top, o) - o / 2), (d = pn(t, this.bottom, l) + l / 2), (u = c = a)),
            n.save(),
            (n.lineWidth = s.width),
            (n.strokeStyle = s.color),
            n.beginPath(),
            n.moveTo(u, f),
            n.lineTo(c, d),
            n.stroke(),
            n.restore();
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const i = this.ctx,
            r = this._computeLabelArea();
        r && mu(i, r);
        const s = this.getLabelItems(t);
        for (const o of s) {
            const l = o.options,
                a = o.font,
                u = o.label,
                c = o.textOffset;
            Rn(i, u, 0, c, a, l);
        }
        r && yu(i);
    }
    drawTitle() {
        const {
            ctx: t,
            options: { position: n, title: i, reverse: r },
        } = this;
        if (!i.display) return;
        const s = ft(i.font),
            o = bt(i.padding),
            l = i.align;
        let a = s.lineHeight / 2;
        n === 'bottom' || n === 'center' || B(n)
            ? ((a += o.bottom), tt(i.text) && (a += s.lineHeight * (i.text.length - 1)))
            : (a += o.top);
        const { titleX: u, titleY: c, maxWidth: f, rotation: d } = xv(this, a, n, l);
        Rn(t, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: f,
            rotation: d,
            textAlign: vv(l, n, r),
            textBaseline: 'middle',
            translation: [u, c],
        });
    }
    draw(t) {
        !this._isVisible() ||
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
    }
    _layers() {
        const t = this.options,
            n = (t.ticks && t.ticks.z) || 0,
            i = A(t.grid && t.grid.z, -1),
            r = A(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== In.prototype.draw
            ? [
                  {
                      z: n,
                      draw: (s) => {
                          this.draw(s);
                      },
                  },
              ]
            : [
                  {
                      z: i,
                      draw: (s) => {
                          this.drawBackground(), this.drawGrid(s), this.drawTitle();
                      },
                  },
                  {
                      z: r,
                      draw: () => {
                          this.drawBorder();
                      },
                  },
                  {
                      z: n,
                      draw: (s) => {
                          this.drawLabels(s);
                      },
                  },
              ];
    }
    getMatchingVisibleMetas(t) {
        const n = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + 'AxisID',
            r = [];
        let s, o;
        for (s = 0, o = n.length; s < o; ++s) {
            const l = n[s];
            l[i] === this.id && (!t || l.type === t) && r.push(l);
        }
        return r;
    }
    _resolveTickFontOptions(t) {
        const n = this.options.ticks.setContext(this.getContext(t));
        return ft(n.font);
    }
    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
    }
}
class ss {
    constructor(t, n, i) {
        (this.type = t), (this.scope = n), (this.override = i), (this.items = Object.create(null));
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
        const n = Object.getPrototypeOf(t);
        let i;
        kv(n) && (i = this.register(n));
        const r = this.items,
            s = t.id,
            o = this.scope + '.' + s;
        if (!s) throw new Error('class does not have id: ' + t);
        return (
            s in r || ((r[s] = t), _v(t, o, i), this.override && ot.override(t.id, t.overrides)), o
        );
    }
    get(t) {
        return this.items[t];
    }
    unregister(t) {
        const n = this.items,
            i = t.id,
            r = this.scope;
        i in n && delete n[i], r && i in ot[r] && (delete ot[r][i], this.override && delete zn[i]);
    }
}
function _v(e, t, n) {
    const i = _r(Object.create(null), [n ? ot.get(n) : {}, ot.get(t), e.defaults]);
    ot.set(t, i),
        e.defaultRoutes && wv(t, e.defaultRoutes),
        e.descriptors && ot.describe(t, e.descriptors);
}
function wv(e, t) {
    Object.keys(t).forEach((n) => {
        const i = n.split('.'),
            r = i.pop(),
            s = [e].concat(i).join('.'),
            o = t[n].split('.'),
            l = o.pop(),
            a = o.join('.');
        ot.route(s, r, a, l);
    });
}
function kv(e) {
    return 'id' in e && 'defaults' in e;
}
class Sv {
    constructor() {
        (this.controllers = new ss(er, 'datasets', !0)),
            (this.elements = new ss(Ae, 'elements')),
            (this.plugins = new ss(Object, 'plugins')),
            (this.scales = new ss(In, 'scales')),
            (this._typedRegistries = [this.controllers, this.scales, this.elements]);
    }
    add(...t) {
        this._each('register', t);
    }
    remove(...t) {
        this._each('unregister', t);
    }
    addControllers(...t) {
        this._each('register', t, this.controllers);
    }
    addElements(...t) {
        this._each('register', t, this.elements);
    }
    addPlugins(...t) {
        this._each('register', t, this.plugins);
    }
    addScales(...t) {
        this._each('register', t, this.scales);
    }
    getController(t) {
        return this._get(t, this.controllers, 'controller');
    }
    getElement(t) {
        return this._get(t, this.elements, 'element');
    }
    getPlugin(t) {
        return this._get(t, this.plugins, 'plugin');
    }
    getScale(t) {
        return this._get(t, this.scales, 'scale');
    }
    removeControllers(...t) {
        this._each('unregister', t, this.controllers);
    }
    removeElements(...t) {
        this._each('unregister', t, this.elements);
    }
    removePlugins(...t) {
        this._each('unregister', t, this.plugins);
    }
    removeScales(...t) {
        this._each('unregister', t, this.scales);
    }
    _each(t, n, i) {
        [...n].forEach((r) => {
            const s = i || this._getRegistryForType(r);
            i || s.isForType(r) || (s === this.plugins && r.id)
                ? this._exec(t, s, r)
                : j(r, (o) => {
                      const l = i || this._getRegistryForType(o);
                      this._exec(t, l, o);
                  });
        });
    }
    _exec(t, n, i) {
        const r = fu(t);
        $(i['before' + r], [], i), n[t](i), $(i['after' + r], [], i);
    }
    _getRegistryForType(t) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const i = this._typedRegistries[n];
            if (i.isForType(t)) return i;
        }
        return this.plugins;
    }
    _get(t, n, i) {
        const r = n.get(t);
        if (r === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.');
        return r;
    }
}
var ye = new Sv();
class Cv {
    constructor() {
        this._init = [];
    }
    notify(t, n, i, r) {
        n === 'beforeInit' &&
            ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
        const s = r ? this._descriptors(t).filter(r) : this._descriptors(t),
            o = this._notify(s, t, n, i);
        return (
            n === 'afterDestroy' &&
                (this._notify(s, t, 'stop'), this._notify(this._init, t, 'uninstall')),
            o
        );
    }
    _notify(t, n, i, r) {
        r = r || {};
        for (const s of t) {
            const o = s.plugin,
                l = o[i],
                a = [n, r, s.options];
            if ($(l, a, o) === !1 && r.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        X(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        const n = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), n;
    }
    _createDescriptors(t, n) {
        const i = t && t.config,
            r = A(i.options && i.options.plugins, {}),
            s = bv(i);
        return r === !1 && !n ? [] : Pv(t, s, r, n);
    }
    _notifyStateChanges(t) {
        const n = this._oldCache || [],
            i = this._cache,
            r = (s, o) => s.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
        this._notify(r(n, i), t, 'stop'), this._notify(r(i, n), t, 'start');
    }
}
function bv(e) {
    const t = {},
        n = [],
        i = Object.keys(ye.plugins.items);
    for (let s = 0; s < i.length; s++) n.push(ye.getPlugin(i[s]));
    const r = e.plugins || [];
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
    }
    return { plugins: n, localIds: t };
}
function Mv(e, t) {
    return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Pv(e, { plugins: t, localIds: n }, i, r) {
    const s = [],
        o = e.getContext();
    for (const l of t) {
        const a = l.id,
            u = Mv(i[a], r);
        u !== null &&
            s.push({ plugin: l, options: Ev(e.config, { plugin: l, local: n[a] }, u, o) });
    }
    return s;
}
function Ev(e, { plugin: t, local: n }, i, r) {
    const s = e.pluginScopeKeys(t),
        o = e.getOptionScopes(i, s);
    return (
        n && t.defaults && o.push(t.defaults),
        e.createResolver(o, r, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
    );
}
function aa(e, t) {
    const n = ot.datasets[e] || {};
    return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || 'x';
}
function Tv(e, t) {
    let n = e;
    return e === '_index_' ? (n = t) : e === '_value_' && (n = t === 'x' ? 'y' : 'x'), n;
}
function Lv(e, t) {
    return e === t ? '_index_' : '_value_';
}
function Ov(e) {
    if (e === 'top' || e === 'bottom') return 'x';
    if (e === 'left' || e === 'right') return 'y';
}
function so(e, t) {
    if (
        e === 'x' ||
        e === 'y' ||
        e === 'r' ||
        ((e = t.axis || Ov(t.position) || (e.length > 1 && so(e[0].toLowerCase(), t))), e)
    )
        return e;
    throw new Error(
        `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`
    );
}
function Dv(e, t) {
    const n = zn[e.type] || { scales: {} },
        i = t.scales || {},
        r = aa(e.type, t),
        s = Object.create(null);
    return (
        Object.keys(i).forEach((o) => {
            const l = i[o];
            if (!B(l)) return console.error(`Invalid scale configuration for scale: ${o}`);
            if (l._proxy)
                return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
            const a = so(o, l),
                u = Lv(a, r),
                c = n.scales || {};
            s[o] = Gi(Object.create(null), [{ axis: a }, l, c[a], c[u]]);
        }),
        e.data.datasets.forEach((o) => {
            const l = o.type || e.type,
                a = o.indexAxis || aa(l, t),
                c = (zn[l] || {}).scales || {};
            Object.keys(c).forEach((f) => {
                const d = Tv(f, a),
                    h = o[d + 'AxisID'] || d;
                (s[h] = s[h] || Object.create(null)), Gi(s[h], [{ axis: d }, i[h], c[f]]);
            });
        }),
        Object.keys(s).forEach((o) => {
            const l = s[o];
            Gi(l, [ot.scales[l.type], ot.scale]);
        }),
        s
    );
}
function Rp(e) {
    const t = e.options || (e.options = {});
    (t.plugins = A(t.plugins, {})), (t.scales = Dv(e, t));
}
function Np(e) {
    return (e = e || {}), (e.datasets = e.datasets || []), (e.labels = e.labels || []), e;
}
function zv(e) {
    return (e = e || {}), (e.data = Np(e.data)), Rp(e), e;
}
const xf = new Map(),
    Ap = new Set();
function os(e, t) {
    let n = xf.get(e);
    return n || ((n = t()), xf.set(e, n), Ap.add(n)), n;
}
const Oi = (e, t, n) => {
    const i = Js(t, n);
    i !== void 0 && e.add(i);
};
class Rv {
    constructor(t) {
        (this._config = zv(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map());
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(t) {
        this._config.type = t;
    }
    get data() {
        return this._config.data;
    }
    set data(t) {
        this._config.data = Np(t);
    }
    get options() {
        return this._config.options;
    }
    set options(t) {
        this._config.options = t;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const t = this._config;
        this.clearCache(), Rp(t);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
        return os(t, () => [[`datasets.${t}`, '']]);
    }
    datasetAnimationScopeKeys(t, n) {
        return os(`${t}.transition.${n}`, () => [
            [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
            [`datasets.${t}`, ''],
        ]);
    }
    datasetElementScopeKeys(t, n) {
        return os(`${t}-${n}`, () => [
            [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ''],
        ]);
    }
    pluginScopeKeys(t) {
        const n = t.id,
            i = this.type;
        return os(`${i}-plugin-${n}`, () => [
            [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
        ]);
    }
    _cachedScopes(t, n) {
        const i = this._scopeCache;
        let r = i.get(t);
        return (!r || n) && ((r = new Map()), i.set(t, r)), r;
    }
    getOptionScopes(t, n, i) {
        const { options: r, type: s } = this,
            o = this._cachedScopes(t, i),
            l = o.get(n);
        if (l) return l;
        const a = new Set();
        n.forEach((c) => {
            t && (a.add(t), c.forEach((f) => Oi(a, t, f))),
                c.forEach((f) => Oi(a, r, f)),
                c.forEach((f) => Oi(a, zn[s] || {}, f)),
                c.forEach((f) => Oi(a, ot, f)),
                c.forEach((f) => Oi(a, oa, f));
        });
        const u = Array.from(a);
        return u.length === 0 && u.push(Object.create(null)), Ap.has(n) && o.set(n, u), u;
    }
    chartOptionScopes() {
        const { options: t, type: n } = this;
        return [t, zn[n] || {}, ot.datasets[n] || {}, { type: n }, ot, oa];
    }
    resolveNamedOptions(t, n, i, r = ['']) {
        const s = { $shared: !0 },
            { resolver: o, subPrefixes: l } = _f(this._resolverCache, t, r);
        let a = o;
        if (Av(o, n)) {
            (s.$shared = !1), (i = ln(i) ? i() : i);
            const u = this.createResolver(t, i, l);
            a = pi(o, i, u);
        }
        for (const u of n) s[u] = a[u];
        return s;
    }
    createResolver(t, n, i = [''], r) {
        const { resolver: s } = _f(this._resolverCache, t, i);
        return B(n) ? pi(s, n, void 0, r) : s;
    }
}
function _f(e, t, n) {
    let i = e.get(t);
    i || ((i = new Map()), e.set(t, i));
    const r = n.join();
    let s = i.get(r);
    return (
        s ||
            ((s = {
                resolver: vu(t, n),
                subPrefixes: n.filter((l) => !l.toLowerCase().includes('hover')),
            }),
            i.set(r, s)),
        s
    );
}
const Nv = (e) => B(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || ln(e[n]), !1);
function Av(e, t) {
    const { isScriptable: n, isIndexable: i } = vp(e);
    for (const r of t) {
        const s = n(r),
            o = i(r),
            l = (o || s) && e[r];
        if ((s && (ln(l) || Nv(l))) || (o && tt(l))) return !0;
    }
    return !1;
}
var Iv = '4.2.1';
const Fv = ['top', 'bottom', 'left', 'right', 'chartArea'];
function wf(e, t) {
    return e === 'top' || e === 'bottom' || (Fv.indexOf(e) === -1 && t === 'x');
}
function kf(e, t) {
    return function (n, i) {
        return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
    };
}
function Sf(e) {
    const t = e.chart,
        n = t.options.animation;
    t.notifyPlugins('afterRender'), $(n && n.onComplete, [e], t);
}
function Hv(e) {
    const t = e.chart,
        n = t.options.animation;
    $(n && n.onProgress, [e], t);
}
function Ip(e) {
    return (
        Sp() && typeof e == 'string'
            ? (e = document.getElementById(e))
            : e && e.length && (e = e[0]),
        e && e.canvas && (e = e.canvas),
        e
    );
}
const bs = {},
    Cf = (e) => {
        const t = Ip(e);
        return Object.values(bs)
            .filter((n) => n.canvas === t)
            .pop();
    };
function Bv(e, t, n) {
    const i = Object.keys(e);
    for (const r of i) {
        const s = +r;
        if (s >= t) {
            const o = e[r];
            delete e[r], (n > 0 || s > t) && (e[s + n] = o);
        }
    }
}
function jv(e, t, n, i) {
    return !n || e.type === 'mouseout' ? null : i ? t : e;
}
function Vv(e) {
    const { xScale: t, yScale: n } = e;
    if (t && n) return { left: t.left, right: t.right, top: n.top, bottom: n.bottom };
}
class ve {
    static register(...t) {
        ye.add(...t), bf();
    }
    static unregister(...t) {
        ye.remove(...t), bf();
    }
    constructor(t, n) {
        const i = (this.config = new Rv(n)),
            r = Ip(t),
            s = Cf(r);
        if (s)
            throw new Error(
                "Canvas is already in use. Chart with ID '" +
                    s.id +
                    "' must be destroyed before the canvas with ID '" +
                    s.canvas.id +
                    "' can be reused."
            );
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        (this.platform = new (i.platform || ov(r))()), this.platform.updateConfig(i);
        const l = this.platform.acquireContext(r, o.aspectRatio),
            a = l && l.canvas,
            u = a && a.height,
            c = a && a.width;
        if (
            ((this.id = Z0()),
            (this.ctx = l),
            (this.canvas = a),
            (this.width = c),
            (this.height = u),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new Cv()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = p1((f) => this.update(f), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (bs[this.id] = this),
            !l || !a)
        ) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        Ce.listen(this, 'complete', Sf),
            Ce.listen(this, 'progress', Hv),
            this._initialize(),
            this.attached && this.update();
    }
    get aspectRatio() {
        const {
            options: { aspectRatio: t, maintainAspectRatio: n },
            width: i,
            height: r,
            _aspectRatio: s,
        } = this;
        return X(t) ? (n && s ? s : r ? i / r : null) : t;
    }
    get data() {
        return this.config.data;
    }
    set data(t) {
        this.config.data = t;
    }
    get options() {
        return this._options;
    }
    set options(t) {
        this.config.options = t;
    }
    get registry() {
        return ye;
    }
    _initialize() {
        return (
            this.notifyPlugins('beforeInit'),
            this.options.responsive ? this.resize() : Zc(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins('afterInit'),
            this
        );
    }
    clear() {
        return Qc(this.canvas, this.ctx), this;
    }
    stop() {
        return Ce.stop(this), this;
    }
    resize(t, n) {
        Ce.running(this) ? (this._resizeBeforeDraw = { width: t, height: n }) : this._resize(t, n);
    }
    _resize(t, n) {
        const i = this.options,
            r = this.canvas,
            s = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(r, t, n, s),
            l = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? 'resize' : 'attach';
        (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            Zc(this, l, !0) &&
                (this.notifyPlugins('resize', { size: o }),
                $(i.onResize, [this, o], this),
                this.attached && this._doResize(a) && this.render());
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        j(n, (i, r) => {
            i.id = r;
        });
    }
    buildOrUpdateScales() {
        const t = this.options,
            n = t.scales,
            i = this.scales,
            r = Object.keys(i).reduce((o, l) => ((o[l] = !1), o), {});
        let s = [];
        n &&
            (s = s.concat(
                Object.keys(n).map((o) => {
                    const l = n[o],
                        a = so(o, l),
                        u = a === 'r',
                        c = a === 'x';
                    return {
                        options: l,
                        dposition: u ? 'chartArea' : c ? 'bottom' : 'left',
                        dtype: u ? 'radialLinear' : c ? 'category' : 'linear',
                    };
                })
            )),
            j(s, (o) => {
                const l = o.options,
                    a = l.id,
                    u = so(a, l),
                    c = A(l.type, o.dtype);
                (l.position === void 0 || wf(l.position, u) !== wf(o.dposition)) &&
                    (l.position = o.dposition),
                    (r[a] = !0);
                let f = null;
                if (a in i && i[a].type === c) f = i[a];
                else {
                    const d = ye.getScale(c);
                    (f = new d({ id: a, type: c, ctx: this.ctx, chart: this })), (i[f.id] = f);
                }
                f.init(l, t);
            }),
            j(r, (o, l) => {
                o || delete i[l];
            }),
            j(i, (o) => {
                Jt.configure(this, o, o.options), Jt.addBox(this, o);
            });
    }
    _updateMetasets() {
        const t = this._metasets,
            n = this.data.datasets.length,
            i = t.length;
        if ((t.sort((r, s) => r.index - s.index), i > n)) {
            for (let r = n; r < i; ++r) this._destroyDatasetMeta(r);
            t.splice(n, i - n);
        }
        this._sortedMetasets = t.slice(0).sort(kf('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const {
            _metasets: t,
            data: { datasets: n },
        } = this;
        t.length > n.length && delete this._stacks,
            t.forEach((i, r) => {
                n.filter((s) => s === i._dataset).length === 0 && this._destroyDatasetMeta(r);
            });
    }
    buildOrUpdateControllers() {
        const t = [],
            n = this.data.datasets;
        let i, r;
        for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
            const s = n[i];
            let o = this.getDatasetMeta(i);
            const l = s.type || this.config.type;
            if (
                (o.type &&
                    o.type !== l &&
                    (this._destroyDatasetMeta(i), (o = this.getDatasetMeta(i))),
                (o.type = l),
                (o.indexAxis = s.indexAxis || aa(l, this.options)),
                (o.order = s.order || 0),
                (o.index = i),
                (o.label = '' + s.label),
                (o.visible = this.isDatasetVisible(i)),
                o.controller)
            )
                o.controller.updateIndex(i), o.controller.linkScales();
            else {
                const a = ye.getController(l),
                    { datasetElementType: u, dataElementType: c } = ot.datasets[l];
                Object.assign(a, {
                    dataElementType: ye.getElement(c),
                    datasetElementType: u && ye.getElement(u),
                }),
                    (o.controller = new a(this, i)),
                    t.push(o.controller);
            }
        }
        return this._updateMetasets(), t;
    }
    _resetElements() {
        j(
            this.data.datasets,
            (t, n) => {
                this.getDatasetMeta(n).controller.reset();
            },
            this
        );
    }
    reset() {
        this._resetElements(), this.notifyPlugins('reset');
    }
    update(t) {
        const n = this.config;
        n.update();
        const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
            r = (this._animationsDisabled = !i.animation);
        if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
        )
            return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let o = 0;
        for (let u = 0, c = this.data.datasets.length; u < c; u++) {
            const { controller: f } = this.getDatasetMeta(u),
                d = !r && s.indexOf(f) === -1;
            f.buildOrUpdateElements(d), (o = Math.max(+f.getMaxOverflow(), o));
        }
        (o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            r ||
                j(s, (u) => {
                    u.reset();
                }),
            this._updateDatasets(t),
            this.notifyPlugins('afterUpdate', { mode: t }),
            this._layers.sort(kf('z', '_idx'));
        const { _active: l, _lastEvent: a } = this;
        a ? this._eventHandler(a, !0) : l.length && this._updateHoverStyles(l, l, !0),
            this.render();
    }
    _updateScales() {
        j(this.scales, (t) => {
            Jt.removeBox(this, t);
        }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const t = this.options,
            n = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
        (!Fc(n, i) || !!this._responsiveListeners !== t.responsive) &&
            (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
            n = this._getUniformDataChanges() || [];
        for (const { method: i, start: r, count: s } of n) {
            const o = i === '_removeElements' ? -s : s;
            Bv(t, r, o);
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
            i = (s) =>
                new Set(t.filter((o) => o[0] === s).map((o, l) => l + ',' + o.splice(1).join(','))),
            r = i(0);
        for (let s = 1; s < n; s++) if (!Fc(r, i(s))) return;
        return Array.from(r)
            .map((s) => s.split(','))
            .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(t) {
        if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
        Jt.update(this, this.width, this.height, t);
        const n = this.chartArea,
            i = n.width <= 0 || n.height <= 0;
        (this._layers = []),
            j(
                this.boxes,
                (r) => {
                    (i && r.position === 'chartArea') ||
                        (r.configure && r.configure(), this._layers.push(...r._layers()));
                },
                this
            ),
            this._layers.forEach((r, s) => {
                r._idx = s;
            }),
            this.notifyPlugins('afterLayout');
    }
    _updateDatasets(t) {
        if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this.getDatasetMeta(n).controller.configure();
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this._updateDataset(n, ln(t) ? t({ datasetIndex: n }) : t);
            this.notifyPlugins('afterDatasetsUpdate', { mode: t });
        }
    }
    _updateDataset(t, n) {
        const i = this.getDatasetMeta(t),
            r = { meta: i, index: t, mode: n, cancelable: !0 };
        this.notifyPlugins('beforeDatasetUpdate', r) !== !1 &&
            (i.controller._update(n),
            (r.cancelable = !1),
            this.notifyPlugins('afterDatasetUpdate', r));
    }
    render() {
        this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
            (Ce.has(this)
                ? this.attached && !Ce.running(this) && Ce.start(this)
                : (this.draw(), Sf({ chart: this })));
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const { width: i, height: r } = this._resizeBeforeDraw;
            this._resize(i, r), (this._resizeBeforeDraw = null);
        }
        if (
            (this.clear(),
            this.width <= 0 ||
                this.height <= 0 ||
                this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
        )
            return;
        const n = this._layers;
        for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
        for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(t) {
        const n = this._sortedMetasets,
            i = [];
        let r, s;
        for (r = 0, s = n.length; r < s; ++r) {
            const o = n[r];
            (!t || o.visible) && i.push(o);
        }
        return i;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(t) {
        const n = this.ctx,
            i = t._clip,
            r = !i.disabled,
            s = Vv(t) || this.chartArea,
            o = { meta: t, index: t.index, cancelable: !0 };
        this.notifyPlugins('beforeDatasetDraw', o) !== !1 &&
            (r &&
                mu(n, {
                    left: i.left === !1 ? 0 : s.left - i.left,
                    right: i.right === !1 ? this.width : s.right + i.right,
                    top: i.top === !1 ? 0 : s.top - i.top,
                    bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom,
                }),
            t.controller.draw(),
            r && yu(n),
            (o.cancelable = !1),
            this.notifyPlugins('afterDatasetDraw', o));
    }
    isPointInArea(t) {
        return kr(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, i, r) {
        const s = Hy.modes[n];
        return typeof s == 'function' ? s(this, t, i, r) : [];
    }
    getDatasetMeta(t) {
        const n = this.data.datasets[t],
            i = this._metasets;
        let r = i.filter((s) => s && s._dataset === n).pop();
        return (
            r ||
                ((r = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: (n && n.order) || 0,
                    index: t,
                    _dataset: n,
                    _parsed: [],
                    _sorted: !1,
                }),
                i.push(r)),
            r
        );
    }
    getContext() {
        return this.$context || (this.$context = dn(null, { chart: this, type: 'chart' }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
        const n = this.data.datasets[t];
        if (!n) return !1;
        const i = this.getDatasetMeta(t);
        return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
        const i = this.getDatasetMeta(t);
        i.hidden = !n;
    }
    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
        return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, i) {
        const r = i ? 'show' : 'hide',
            s = this.getDatasetMeta(t),
            o = s.controller._resolveAnimations(void 0, r);
        de(n)
            ? ((s.data[n].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              o.update(s, { visible: i }),
              this.update((l) => (l.datasetIndex === t ? r : void 0)));
    }
    hide(t, n) {
        this._updateVisibility(t, n, !1);
    }
    show(t, n) {
        this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
        const n = this._metasets[t];
        n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
        let t, n;
        for (this.stop(), Ce.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
            this._destroyDatasetMeta(t);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas: t, ctx: n } = this;
        this._stop(),
            this.config.clearCache(),
            t &&
                (this.unbindEvents(),
                Qc(t, n),
                this.platform.releaseContext(n),
                (this.canvas = null),
                (this.ctx = null)),
            delete bs[this.id],
            this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
    }
    bindEvents() {
        this.bindUserEvents(),
            this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
    }
    bindUserEvents() {
        const t = this._listeners,
            n = this.platform,
            i = (s, o) => {
                n.addEventListener(this, s, o), (t[s] = o);
            },
            r = (s, o, l) => {
                (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
            };
        j(this.options.events, (s) => i(s, r));
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
            n = this.platform,
            i = (a, u) => {
                n.addEventListener(this, a, u), (t[a] = u);
            },
            r = (a, u) => {
                t[a] && (n.removeEventListener(this, a, u), delete t[a]);
            },
            s = (a, u) => {
                this.canvas && this.resize(a, u);
            };
        let o;
        const l = () => {
            r('attach', l), (this.attached = !0), this.resize(), i('resize', s), i('detach', o);
        };
        (o = () => {
            (this.attached = !1), r('resize', s), this._stop(), this._resize(0, 0), i('attach', l);
        }),
            n.isAttached(this.canvas) ? l() : o();
    }
    unbindEvents() {
        j(this._listeners, (t, n) => {
            this.platform.removeEventListener(this, n, t);
        }),
            (this._listeners = {}),
            j(this._responsiveListeners, (t, n) => {
                this.platform.removeEventListener(this, n, t);
            }),
            (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, i) {
        const r = i ? 'set' : 'remove';
        let s, o, l, a;
        for (
            n === 'dataset' &&
                ((s = this.getDatasetMeta(t[0].datasetIndex)),
                s.controller['_' + r + 'DatasetHoverStyle']()),
                l = 0,
                a = t.length;
            l < a;
            ++l
        ) {
            o = t[l];
            const u = o && this.getDatasetMeta(o.datasetIndex).controller;
            u && u[r + 'HoverStyle'](o.element, o.datasetIndex, o.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t) {
        const n = this._active || [],
            i = t.map(({ datasetIndex: s, index: o }) => {
                const l = this.getDatasetMeta(s);
                if (!l) throw new Error('No dataset found at index ' + s);
                return { datasetIndex: s, element: l.data[o], index: o };
            });
        !Gs(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n));
    }
    notifyPlugins(t, n, i) {
        return this._plugins.notify(this, t, n, i);
    }
    isPluginEnabled(t) {
        return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, i) {
        const r = this.options.hover,
            s = (a, u) =>
                a.filter(
                    (c) => !u.some((f) => c.datasetIndex === f.datasetIndex && c.index === f.index)
                ),
            o = s(n, t),
            l = i ? t : s(t, n);
        o.length && this.updateHoverStyle(o, r.mode, !1),
            l.length && r.mode && this.updateHoverStyle(l, r.mode, !0);
    }
    _eventHandler(t, n) {
        const i = { event: t, replay: n, cancelable: !0, inChartArea: this.isPointInArea(t) },
            r = (o) => (o.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins('beforeEvent', i, r) === !1) return;
        const s = this._handleEvent(t, n, i.inChartArea);
        return (
            (i.cancelable = !1),
            this.notifyPlugins('afterEvent', i, r),
            (s || i.changed) && this.render(),
            this
        );
    }
    _handleEvent(t, n, i) {
        const { _active: r = [], options: s } = this,
            o = n,
            l = this._getActiveElements(t, r, i, o),
            a = n1(t),
            u = jv(t, this._lastEvent, i, a);
        i &&
            ((this._lastEvent = null),
            $(s.onHover, [t, l, this], this),
            a && $(s.onClick, [t, l, this], this));
        const c = !Gs(l, r);
        return (
            (c || n) && ((this._active = l), this._updateHoverStyles(l, r, n)),
            (this._lastEvent = u),
            c
        );
    }
    _getActiveElements(t, n, i, r) {
        if (t.type === 'mouseout') return [];
        if (!i) return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(t, s.mode, s, r);
    }
}
R(ve, 'defaults', ot),
    R(ve, 'instances', bs),
    R(ve, 'overrides', zn),
    R(ve, 'registry', ye),
    R(ve, 'version', Iv),
    R(ve, 'getChart', Cf);
function bf() {
    return j(ve.instances, (e) => e._plugins.invalidate());
}
function Fp(e, t, n = t) {
    (e.lineCap = A(n.borderCapStyle, t.borderCapStyle)),
        e.setLineDash(A(n.borderDash, t.borderDash)),
        (e.lineDashOffset = A(n.borderDashOffset, t.borderDashOffset)),
        (e.lineJoin = A(n.borderJoinStyle, t.borderJoinStyle)),
        (e.lineWidth = A(n.borderWidth, t.borderWidth)),
        (e.strokeStyle = A(n.borderColor, t.borderColor));
}
function Wv(e, t, n) {
    e.lineTo(n.x, n.y);
}
function $v(e) {
    return e.stepped ? E1 : e.tension || e.cubicInterpolationMode === 'monotone' ? T1 : Wv;
}
function Hp(e, t, n = {}) {
    const i = e.length,
        { start: r = 0, end: s = i - 1 } = n,
        { start: o, end: l } = t,
        a = Math.max(r, o),
        u = Math.min(s, l),
        c = (r < o && s < o) || (r > l && s > l);
    return { count: i, start: a, loop: t.loop, ilen: u < a && !c ? i + u - a : u - a };
}
function Uv(e, t, n, i) {
    const { points: r, options: s } = t,
        { count: o, start: l, loop: a, ilen: u } = Hp(r, n, i),
        c = $v(s);
    let { move: f = !0, reverse: d } = i || {},
        h,
        m,
        y;
    for (h = 0; h <= u; ++h)
        (m = r[(l + (d ? u - h : h)) % o]),
            !m.skip && (f ? (e.moveTo(m.x, m.y), (f = !1)) : c(e, y, m, d, s.stepped), (y = m));
    return a && ((m = r[(l + (d ? u : 0)) % o]), c(e, y, m, d, s.stepped)), !!a;
}
function Yv(e, t, n, i) {
    const r = t.points,
        { count: s, start: o, ilen: l } = Hp(r, n, i),
        { move: a = !0, reverse: u } = i || {};
    let c = 0,
        f = 0,
        d,
        h,
        m,
        y,
        x,
        p;
    const g = (_) => (o + (u ? l - _ : _)) % s,
        v = () => {
            y !== x && (e.lineTo(c, x), e.lineTo(c, y), e.lineTo(c, p));
        };
    for (a && ((h = r[g(0)]), e.moveTo(h.x, h.y)), d = 0; d <= l; ++d) {
        if (((h = r[g(d)]), h.skip)) continue;
        const _ = h.x,
            w = h.y,
            k = _ | 0;
        k === m
            ? (w < y ? (y = w) : w > x && (x = w), (c = (f * c + _) / ++f))
            : (v(), e.lineTo(_, w), (m = k), (f = 0), (y = x = w)),
            (p = w);
    }
    v();
}
function ua(e) {
    const t = e.options,
        n = t.borderDash && t.borderDash.length;
    return !e._decimated &&
        !e._loop &&
        !t.tension &&
        t.cubicInterpolationMode !== 'monotone' &&
        !t.stepped &&
        !n
        ? Yv
        : Uv;
}
function Qv(e) {
    return e.stepped ? ay : e.tension || e.cubicInterpolationMode === 'monotone' ? uy : _n;
}
function Kv(e, t, n, i) {
    let r = t._path;
    r || ((r = t._path = new Path2D()), t.path(r, n, i) && r.closePath()),
        Fp(e, t.options),
        e.stroke(r);
}
function Xv(e, t, n, i) {
    const { segments: r, options: s } = t,
        o = ua(t);
    for (const l of r)
        Fp(e, s, l.style),
            e.beginPath(),
            o(e, t, l, { start: n, end: n + i - 1 }) && e.closePath(),
            e.stroke();
}
const Zv = typeof Path2D == 'function';
function Gv(e, t, n, i) {
    Zv && !t.options.segment ? Kv(e, t, n, i) : Xv(e, t, n, i);
}
class Bi extends Ae {
    constructor(t) {
        super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
    }
    updateControlPoints(t, n) {
        const i = this.options;
        if (
            (i.tension || i.cubicInterpolationMode === 'monotone') &&
            !i.stepped &&
            !this._pointsUpdated
        ) {
            const r = i.spanGaps ? this._loop : this._fullLoop;
            ty(this._points, i, t, r, n), (this._pointsUpdated = !0);
        }
    }
    set points(t) {
        (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = yy(this, this.options.segment));
    }
    first() {
        const t = this.segments,
            n = this.points;
        return t.length && n[t[0].start];
    }
    last() {
        const t = this.segments,
            n = this.points,
            i = t.length;
        return i && n[t[i - 1].end];
    }
    interpolate(t, n) {
        const i = this.options,
            r = t[n],
            s = this.points,
            o = py(this, { property: n, start: r, end: r });
        if (!o.length) return;
        const l = [],
            a = Qv(i);
        let u, c;
        for (u = 0, c = o.length; u < c; ++u) {
            const { start: f, end: d } = o[u],
                h = s[f],
                m = s[d];
            if (h === m) {
                l.push(h);
                continue;
            }
            const y = Math.abs((r - h[n]) / (m[n] - h[n])),
                x = a(h, m, y, i.stepped);
            (x[n] = t[n]), l.push(x);
        }
        return l.length === 1 ? l[0] : l;
    }
    pathSegment(t, n, i) {
        return ua(this)(t, this, n, i);
    }
    path(t, n, i) {
        const r = this.segments,
            s = ua(this);
        let o = this._loop;
        (n = n || 0), (i = i || this.points.length - n);
        for (const l of r) o &= s(t, this, l, { start: n, end: n + i - 1 });
        return !!o;
    }
    draw(t, n, i, r) {
        const s = this.options || {};
        (this.points || []).length && s.borderWidth && (t.save(), Gv(t, this, i, r), t.restore()),
            this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
}
R(Bi, 'id', 'line'),
    R(Bi, 'defaults', {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: 'default',
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
    }),
    R(Bi, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
    R(Bi, 'descriptors', {
        _scriptable: !0,
        _indexable: (t) => t !== 'borderDash' && t !== 'fill',
    });
function Mf(e, t, n, i) {
    const r = e.options,
        { [n]: s } = e.getProps([n], i);
    return Math.abs(t - s) < r.radius + r.hitRadius;
}
class Ms extends Ae {
    constructor(t) {
        super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
    }
    inRange(t, n, i) {
        const r = this.options,
            { x: s, y: o } = this.getProps(['x', 'y'], i);
        return Math.pow(t - s, 2) + Math.pow(n - o, 2) < Math.pow(r.hitRadius + r.radius, 2);
    }
    inXRange(t, n) {
        return Mf(this, t, 'x', n);
    }
    inYRange(t, n) {
        return Mf(this, t, 'y', n);
    }
    getCenterPoint(t) {
        const { x: n, y: i } = this.getProps(['x', 'y'], t);
        return { x: n, y: i };
    }
    size(t) {
        t = t || this.options || {};
        let n = t.radius || 0;
        n = Math.max(n, (n && t.hoverRadius) || 0);
        const i = (n && t.borderWidth) || 0;
        return (n + i) * 2;
    }
    draw(t, n) {
        const i = this.options;
        this.skip ||
            i.radius < 0.1 ||
            !kr(this, n, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            la(t, i, this.x, this.y));
    }
    getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
    }
}
R(Ms, 'id', 'point'),
    R(Ms, 'defaults', {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0,
    }),
    R(Ms, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' });
const Pf = (e, t) => {
        let { boxHeight: n = t, boxWidth: i = t } = e;
        return (
            e.usePointStyle && ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
            { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
        );
    },
    qv = (e, t) =>
        e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class Ef extends Ae {
    constructor(t) {
        super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(t, n, i) {
        (this.maxWidth = t),
            (this.maxHeight = n),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
    }
    setDimensions() {
        this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
    }
    buildLabels() {
        const t = this.options.labels || {};
        let n = $(t.generateLabels, [this.chart], this) || [];
        t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
            t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
            this.options.reverse && n.reverse(),
            (this.legendItems = n);
    }
    fit() {
        const { options: t, ctx: n } = this;
        if (!t.display) {
            this.width = this.height = 0;
            return;
        }
        const i = t.labels,
            r = ft(i.font),
            s = r.size,
            o = this._computeTitleHeight(),
            { boxWidth: l, itemHeight: a } = Pf(i, s);
        let u, c;
        (n.font = r.string),
            this.isHorizontal()
                ? ((u = this.maxWidth), (c = this._fitRows(o, s, l, a) + 10))
                : ((c = this.maxHeight), (u = this._fitCols(o, r, l, a) + 10)),
            (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(c, t.maxHeight || this.maxHeight));
    }
    _fitRows(t, n, i, r) {
        const {
                ctx: s,
                maxWidth: o,
                options: {
                    labels: { padding: l },
                },
            } = this,
            a = (this.legendHitBoxes = []),
            u = (this.lineWidths = [0]),
            c = r + l;
        let f = t;
        (s.textAlign = 'left'), (s.textBaseline = 'middle');
        let d = -1,
            h = -c;
        return (
            this.legendItems.forEach((m, y) => {
                const x = i + n / 2 + s.measureText(m.text).width;
                (y === 0 || u[u.length - 1] + x + 2 * l > o) &&
                    ((f += c), (u[u.length - (y > 0 ? 0 : 1)] = 0), (h += c), d++),
                    (a[y] = { left: 0, top: h, row: d, width: x, height: r }),
                    (u[u.length - 1] += x + l);
            }),
            f
        );
    }
    _fitCols(t, n, i, r) {
        const {
                ctx: s,
                maxHeight: o,
                options: {
                    labels: { padding: l },
                },
            } = this,
            a = (this.legendHitBoxes = []),
            u = (this.columnSizes = []),
            c = o - t;
        let f = l,
            d = 0,
            h = 0,
            m = 0,
            y = 0;
        return (
            this.legendItems.forEach((x, p) => {
                const { itemWidth: g, itemHeight: v } = Jv(i, n, s, x, r);
                p > 0 &&
                    h + v + 2 * l > c &&
                    ((f += d + l), u.push({ width: d, height: h }), (m += d + l), y++, (d = h = 0)),
                    (a[p] = { left: m, top: h, col: y, width: g, height: v }),
                    (d = Math.max(d, g)),
                    (h += v + l);
            }),
            (f += d),
            u.push({ width: d, height: h }),
            f
        );
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(),
            {
                legendHitBoxes: n,
                options: {
                    align: i,
                    labels: { padding: r },
                    rtl: s,
                },
            } = this,
            o = si(s, this.left, this.width);
        if (this.isHorizontal()) {
            let l = 0,
                a = kt(i, this.left + r, this.right - this.lineWidths[l]);
            for (const u of n)
                l !== u.row &&
                    ((l = u.row), (a = kt(i, this.left + r, this.right - this.lineWidths[l]))),
                    (u.top += this.top + t + r),
                    (u.left = o.leftForLtr(o.x(a), u.width)),
                    (a += u.width + r);
        } else {
            let l = 0,
                a = kt(i, this.top + t + r, this.bottom - this.columnSizes[l].height);
            for (const u of n)
                u.col !== l &&
                    ((l = u.col),
                    (a = kt(i, this.top + t + r, this.bottom - this.columnSizes[l].height))),
                    (u.top = a),
                    (u.left += this.left + r),
                    (u.left = o.leftForLtr(o.x(u.left), u.width)),
                    (a += u.height + r);
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const t = this.ctx;
            mu(t, this), this._draw(), yu(t);
        }
    }
    _draw() {
        const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
            { align: s, labels: o } = t,
            l = ot.color,
            a = si(t.rtl, this.left, this.width),
            u = ft(o.font),
            { padding: c } = o,
            f = u.size,
            d = f / 2;
        let h;
        this.drawTitle(),
            (r.textAlign = a.textAlign('left')),
            (r.textBaseline = 'middle'),
            (r.lineWidth = 0.5),
            (r.font = u.string);
        const { boxWidth: m, boxHeight: y, itemHeight: x } = Pf(o, f),
            p = function (k, S, C) {
                if (isNaN(m) || m <= 0 || isNaN(y) || y < 0) return;
                r.save();
                const L = A(C.lineWidth, 1);
                if (
                    ((r.fillStyle = A(C.fillStyle, l)),
                    (r.lineCap = A(C.lineCap, 'butt')),
                    (r.lineDashOffset = A(C.lineDashOffset, 0)),
                    (r.lineJoin = A(C.lineJoin, 'miter')),
                    (r.lineWidth = L),
                    (r.strokeStyle = A(C.strokeStyle, l)),
                    r.setLineDash(A(C.lineDash, [])),
                    o.usePointStyle)
                ) {
                    const E = {
                            radius: (y * Math.SQRT2) / 2,
                            pointStyle: C.pointStyle,
                            rotation: C.rotation,
                            borderWidth: L,
                        },
                        O = a.xPlus(k, m / 2),
                        I = S + d;
                    mp(r, E, O, I, o.pointStyleWidth && m);
                } else {
                    const E = S + Math.max((f - y) / 2, 0),
                        O = a.leftForLtr(k, m),
                        I = ri(C.borderRadius);
                    r.beginPath(),
                        Object.values(I).some((lt) => lt !== 0)
                            ? no(r, { x: O, y: E, w: m, h: y, radius: I })
                            : r.rect(O, E, m, y),
                        r.fill(),
                        L !== 0 && r.stroke();
                }
                r.restore();
            },
            g = function (k, S, C) {
                Rn(r, C.text, k, S + x / 2, u, {
                    strikethrough: C.hidden,
                    textAlign: a.textAlign(C.textAlign),
                });
            },
            v = this.isHorizontal(),
            _ = this._computeTitleHeight();
        v
            ? (h = { x: kt(s, this.left + c, this.right - i[0]), y: this.top + c + _, line: 0 })
            : (h = {
                  x: this.left + c,
                  y: kt(s, this.top + _ + c, this.bottom - n[0].height),
                  line: 0,
              }),
            Cp(this.ctx, t.textDirection);
        const w = x + c;
        this.legendItems.forEach((k, S) => {
            (r.strokeStyle = k.fontColor), (r.fillStyle = k.fontColor);
            const C = r.measureText(k.text).width,
                L = a.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
                E = m + d + C;
            let O = h.x,
                I = h.y;
            a.setWidth(this.width),
                v
                    ? S > 0 &&
                      O + E + c > this.right &&
                      ((I = h.y += w),
                      h.line++,
                      (O = h.x = kt(s, this.left + c, this.right - i[h.line])))
                    : S > 0 &&
                      I + w > this.bottom &&
                      ((O = h.x = O + n[h.line].width + c),
                      h.line++,
                      (I = h.y = kt(s, this.top + _ + c, this.bottom - n[h.line].height)));
            const lt = a.x(O);
            if (
                (p(lt, I, k),
                (O = g1(L, O + m + d, v ? O + E : this.right, t.rtl)),
                g(a.x(O), I, k),
                v)
            )
                h.x += E + c;
            else if (typeof k.text != 'string') {
                const Ft = u.lineHeight;
                h.y += Bp(k, Ft);
            } else h.y += w;
        }),
            bp(this.ctx, t.textDirection);
    }
    drawTitle() {
        const t = this.options,
            n = t.title,
            i = ft(n.font),
            r = bt(n.padding);
        if (!n.display) return;
        const s = si(t.rtl, this.left, this.width),
            o = this.ctx,
            l = n.position,
            a = i.size / 2,
            u = r.top + a;
        let c,
            f = this.left,
            d = this.width;
        if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
                (c = this.top + u),
                (f = kt(t.align, f, this.right - d));
        else {
            const m = this.columnSizes.reduce((y, x) => Math.max(y, x.height), 0);
            c =
                u +
                kt(
                    t.align,
                    this.top,
                    this.bottom - m - t.labels.padding - this._computeTitleHeight()
                );
        }
        const h = kt(l, f, f + d);
        (o.textAlign = s.textAlign(pu(l))),
            (o.textBaseline = 'middle'),
            (o.strokeStyle = n.color),
            (o.fillStyle = n.color),
            (o.font = i.string),
            Rn(o, n.text, h, c, i);
    }
    _computeTitleHeight() {
        const t = this.options.title,
            n = ft(t.font),
            i = bt(t.padding);
        return t.display ? n.lineHeight + i.height : 0;
    }
    _getLegendItemAt(t, n) {
        let i, r, s;
        if (Fi(t, this.left, this.right) && Fi(n, this.top, this.bottom)) {
            for (s = this.legendHitBoxes, i = 0; i < s.length; ++i)
                if (((r = s[i]), Fi(t, r.left, r.left + r.width) && Fi(n, r.top, r.top + r.height)))
                    return this.legendItems[i];
        }
        return null;
    }
    handleEvent(t) {
        const n = this.options;
        if (!n2(t.type, n)) return;
        const i = this._getLegendItemAt(t.x, t.y);
        if (t.type === 'mousemove' || t.type === 'mouseout') {
            const r = this._hoveredItem,
                s = qv(r, i);
            r && !s && $(n.onLeave, [t, r, this], this),
                (this._hoveredItem = i),
                i && !s && $(n.onHover, [t, i, this], this);
        } else i && $(n.onClick, [t, i, this], this);
    }
}
function Jv(e, t, n, i, r) {
    const s = t2(i, e, t, n),
        o = e2(r, i, t.lineHeight);
    return { itemWidth: s, itemHeight: o };
}
function t2(e, t, n, i) {
    let r = e.text;
    return (
        r && typeof r != 'string' && (r = r.reduce((s, o) => (s.length > o.length ? s : o))),
        t + n.size / 2 + i.measureText(r).width
    );
}
function e2(e, t, n) {
    let i = e;
    return typeof t.text != 'string' && (i = Bp(t, n)), i;
}
function Bp(e, t) {
    const n = e.text ? e.text.length + 0.5 : 0;
    return t * n;
}
function n2(e, t) {
    return !!(
        ((e === 'mousemove' || e === 'mouseout') && (t.onHover || t.onLeave)) ||
        (t.onClick && (e === 'click' || e === 'mouseup'))
    );
}
var i2 = {
    id: 'legend',
    _element: Ef,
    start(e, t, n) {
        const i = (e.legend = new Ef({ ctx: e.ctx, options: n, chart: e }));
        Jt.configure(e, i, n), Jt.addBox(e, i);
    },
    stop(e) {
        Jt.removeBox(e, e.legend), delete e.legend;
    },
    beforeUpdate(e, t, n) {
        const i = e.legend;
        Jt.configure(e, i, n), (i.options = n);
    },
    afterUpdate(e) {
        const t = e.legend;
        t.buildLabels(), t.adjustHitBoxes();
    },
    afterEvent(e, t) {
        t.replay || e.legend.handleEvent(t.event);
    },
    defaults: {
        display: !0,
        position: 'top',
        align: 'center',
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(e, t, n) {
            const i = t.datasetIndex,
                r = n.chart;
            r.isDatasetVisible(i) ? (r.hide(i), (t.hidden = !0)) : (r.show(i), (t.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (e) => e.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(e) {
                const t = e.data.datasets,
                    {
                        labels: {
                            usePointStyle: n,
                            pointStyle: i,
                            textAlign: r,
                            color: s,
                            useBorderRadius: o,
                            borderRadius: l,
                        },
                    } = e.legend.options;
                return e._getSortedDatasetMetas().map((a) => {
                    const u = a.controller.getStyle(n ? 0 : void 0),
                        c = bt(u.borderWidth);
                    return {
                        text: t[a.index].label,
                        fillStyle: u.backgroundColor,
                        fontColor: s,
                        hidden: !a.visible,
                        lineCap: u.borderCapStyle,
                        lineDash: u.borderDash,
                        lineDashOffset: u.borderDashOffset,
                        lineJoin: u.borderJoinStyle,
                        lineWidth: (c.width + c.height) / 4,
                        strokeStyle: u.borderColor,
                        pointStyle: i || u.pointStyle,
                        rotation: u.rotation,
                        textAlign: r || u.textAlign,
                        borderRadius: o && (l || u.borderRadius),
                        datasetIndex: a.index,
                    };
                }, this);
            },
        },
        title: { color: (e) => e.chart.options.color, display: !1, position: 'center', text: '' },
    },
    descriptors: {
        _scriptable: (e) => !e.startsWith('on'),
        labels: { _scriptable: (e) => !['generateLabels', 'filter', 'sort'].includes(e) },
    },
};
class jp extends Ae {
    constructor(t) {
        super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
    }
    update(t, n) {
        const i = this.options;
        if (((this.left = 0), (this.top = 0), !i.display)) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        (this.width = this.right = t), (this.height = this.bottom = n);
        const r = tt(i.text) ? i.text.length : 1;
        this._padding = bt(i.padding);
        const s = r * ft(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
        const t = this.options.position;
        return t === 'top' || t === 'bottom';
    }
    _drawArgs(t) {
        const { top: n, left: i, bottom: r, right: s, options: o } = this,
            l = o.align;
        let a = 0,
            u,
            c,
            f;
        return (
            this.isHorizontal()
                ? ((c = kt(l, i, s)), (f = n + t), (u = s - i))
                : (o.position === 'left'
                      ? ((c = i + t), (f = kt(l, r, n)), (a = dt * -0.5))
                      : ((c = s - t), (f = kt(l, n, r)), (a = dt * 0.5)),
                  (u = r - n)),
            { titleX: c, titleY: f, maxWidth: u, rotation: a }
        );
    }
    draw() {
        const t = this.ctx,
            n = this.options;
        if (!n.display) return;
        const i = ft(n.font),
            s = i.lineHeight / 2 + this._padding.top,
            { titleX: o, titleY: l, maxWidth: a, rotation: u } = this._drawArgs(s);
        Rn(t, n.text, 0, 0, i, {
            color: n.color,
            maxWidth: a,
            rotation: u,
            textAlign: pu(n.align),
            textBaseline: 'middle',
            translation: [o, l],
        });
    }
}
function r2(e, t) {
    const n = new jp({ ctx: e.ctx, options: t, chart: e });
    Jt.configure(e, n, t), Jt.addBox(e, n), (e.titleBlock = n);
}
var s2 = {
    id: 'title',
    _element: jp,
    start(e, t, n) {
        r2(e, n);
    },
    stop(e) {
        const t = e.titleBlock;
        Jt.removeBox(e, t), delete e.titleBlock;
    },
    beforeUpdate(e, t, n) {
        const i = e.titleBlock;
        Jt.configure(e, i, n), (i.options = n);
    },
    defaults: {
        align: 'center',
        display: !1,
        font: { weight: 'bold' },
        fullSize: !0,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2e3,
    },
    defaultRoutes: { color: 'color' },
    descriptors: { _scriptable: !0, _indexable: !1 },
};
const ji = {
    average(e) {
        if (!e.length) return !1;
        let t,
            n,
            i = 0,
            r = 0,
            s = 0;
        for (t = 0, n = e.length; t < n; ++t) {
            const o = e[t].element;
            if (o && o.hasValue()) {
                const l = o.tooltipPosition();
                (i += l.x), (r += l.y), ++s;
            }
        }
        return { x: i / s, y: r / s };
    },
    nearest(e, t) {
        if (!e.length) return !1;
        let n = t.x,
            i = t.y,
            r = Number.POSITIVE_INFINITY,
            s,
            o,
            l;
        for (s = 0, o = e.length; s < o; ++s) {
            const a = e[s].element;
            if (a && a.hasValue()) {
                const u = a.getCenterPoint(),
                    c = sa(t, u);
                c < r && ((r = c), (l = a));
            }
        }
        if (l) {
            const a = l.tooltipPosition();
            (n = a.x), (i = a.y);
        }
        return { x: n, y: i };
    },
};
function ge(e, t) {
    return t && (tt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function be(e) {
    return (typeof e == 'string' || e instanceof String) &&
        e.indexOf(`
`) > -1
        ? e.split(`
`)
        : e;
}
function o2(e, t) {
    const { element: n, datasetIndex: i, index: r } = t,
        s = e.getDatasetMeta(i).controller,
        { label: o, value: l } = s.getLabelAndValue(r);
    return {
        chart: e,
        label: o,
        parsed: s.getParsed(r),
        raw: e.data.datasets[i].data[r],
        formattedValue: l,
        dataset: s.getDataset(),
        dataIndex: r,
        datasetIndex: i,
        element: n,
    };
}
function Tf(e, t) {
    const n = e.chart.ctx,
        { body: i, footer: r, title: s } = e,
        { boxWidth: o, boxHeight: l } = t,
        a = ft(t.bodyFont),
        u = ft(t.titleFont),
        c = ft(t.footerFont),
        f = s.length,
        d = r.length,
        h = i.length,
        m = bt(t.padding);
    let y = m.height,
        x = 0,
        p = i.reduce((_, w) => _ + w.before.length + w.lines.length + w.after.length, 0);
    if (
        ((p += e.beforeBody.length + e.afterBody.length),
        f && (y += f * u.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
        p)
    ) {
        const _ = t.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
        y += h * _ + (p - h) * a.lineHeight + (p - 1) * t.bodySpacing;
    }
    d && (y += t.footerMarginTop + d * c.lineHeight + (d - 1) * t.footerSpacing);
    let g = 0;
    const v = function (_) {
        x = Math.max(x, n.measureText(_).width + g);
    };
    return (
        n.save(),
        (n.font = u.string),
        j(e.title, v),
        (n.font = a.string),
        j(e.beforeBody.concat(e.afterBody), v),
        (g = t.displayColors ? o + 2 + t.boxPadding : 0),
        j(i, (_) => {
            j(_.before, v), j(_.lines, v), j(_.after, v);
        }),
        (g = 0),
        (n.font = c.string),
        j(e.footer, v),
        n.restore(),
        (x += m.width),
        { width: x, height: y }
    );
}
function l2(e, t) {
    const { y: n, height: i } = t;
    return n < i / 2 ? 'top' : n > e.height - i / 2 ? 'bottom' : 'center';
}
function a2(e, t, n, i) {
    const { x: r, width: s } = i,
        o = n.caretSize + n.caretPadding;
    if ((e === 'left' && r + s + o > t.width) || (e === 'right' && r - s - o < 0)) return !0;
}
function u2(e, t, n, i) {
    const { x: r, width: s } = n,
        {
            width: o,
            chartArea: { left: l, right: a },
        } = e;
    let u = 'center';
    return (
        i === 'center'
            ? (u = r <= (l + a) / 2 ? 'left' : 'right')
            : r <= s / 2
            ? (u = 'left')
            : r >= o - s / 2 && (u = 'right'),
        a2(u, e, t, n) && (u = 'center'),
        u
    );
}
function Lf(e, t, n) {
    const i = n.yAlign || t.yAlign || l2(e, n);
    return { xAlign: n.xAlign || t.xAlign || u2(e, t, n, i), yAlign: i };
}
function c2(e, t) {
    let { x: n, width: i } = e;
    return t === 'right' ? (n -= i) : t === 'center' && (n -= i / 2), n;
}
function f2(e, t, n) {
    let { y: i, height: r } = e;
    return t === 'top' ? (i += n) : t === 'bottom' ? (i -= r + n) : (i -= r / 2), i;
}
function Of(e, t, n, i) {
    const { caretSize: r, caretPadding: s, cornerRadius: o } = e,
        { xAlign: l, yAlign: a } = n,
        u = r + s,
        { topLeft: c, topRight: f, bottomLeft: d, bottomRight: h } = ri(o);
    let m = c2(t, l);
    const y = f2(t, a, u);
    return (
        a === 'center'
            ? l === 'left'
                ? (m += u)
                : l === 'right' && (m -= u)
            : l === 'left'
            ? (m -= Math.max(c, d) + r)
            : l === 'right' && (m += Math.max(f, h) + r),
        { x: qt(m, 0, i.width - t.width), y: qt(y, 0, i.height - t.height) }
    );
}
function ls(e, t, n) {
    const i = bt(n.padding);
    return t === 'center'
        ? e.x + e.width / 2
        : t === 'right'
        ? e.x + e.width - i.right
        : e.x + i.left;
}
function Df(e) {
    return ge([], be(e));
}
function d2(e, t, n) {
    return dn(e, { tooltip: t, tooltipItems: n, type: 'tooltip' });
}
function zf(e, t) {
    const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return n ? e.override(n) : e;
}
const Vp = {
    beforeTitle: Se,
    title(e) {
        if (e.length > 0) {
            const t = e[0],
                n = t.chart.data.labels,
                i = n ? n.length : 0;
            if (this && this.options && this.options.mode === 'dataset')
                return t.dataset.label || '';
            if (t.label) return t.label;
            if (i > 0 && t.dataIndex < i) return n[t.dataIndex];
        }
        return '';
    },
    afterTitle: Se,
    beforeBody: Se,
    beforeLabel: Se,
    label(e) {
        if (this && this.options && this.options.mode === 'dataset')
            return e.label + ': ' + e.formattedValue || e.formattedValue;
        let t = e.dataset.label || '';
        t && (t += ': ');
        const n = e.formattedValue;
        return X(n) || (t += n), t;
    },
    labelColor(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
        return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
            borderWidth: n.borderWidth,
            borderDash: n.borderDash,
            borderDashOffset: n.borderDashOffset,
            borderRadius: 0,
        };
    },
    labelTextColor() {
        return this.options.bodyColor;
    },
    labelPointStyle(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: Se,
    afterBody: Se,
    beforeFooter: Se,
    footer: Se,
    afterFooter: Se,
};
function Lt(e, t, n, i) {
    const r = e[t].call(n, i);
    return typeof r > 'u' ? Vp[t].call(n, i) : r;
}
class ca extends Ae {
    constructor(t) {
        super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
    }
    initialize(t) {
        (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
    }
    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const n = this.chart,
            i = this.options.setContext(this.getContext()),
            r = i.enabled && n.options.animation && i.animations,
            s = new Pp(this.chart, r);
        return r._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
        return (
            this.$context || (this.$context = d2(this.chart.getContext(), this, this._tooltipItems))
        );
    }
    getTitle(t, n) {
        const { callbacks: i } = n,
            r = Lt(i, 'beforeTitle', this, t),
            s = Lt(i, 'title', this, t),
            o = Lt(i, 'afterTitle', this, t);
        let l = [];
        return (l = ge(l, be(r))), (l = ge(l, be(s))), (l = ge(l, be(o))), l;
    }
    getBeforeBody(t, n) {
        return Df(Lt(n.callbacks, 'beforeBody', this, t));
    }
    getBody(t, n) {
        const { callbacks: i } = n,
            r = [];
        return (
            j(t, (s) => {
                const o = { before: [], lines: [], after: [] },
                    l = zf(i, s);
                ge(o.before, be(Lt(l, 'beforeLabel', this, s))),
                    ge(o.lines, Lt(l, 'label', this, s)),
                    ge(o.after, be(Lt(l, 'afterLabel', this, s))),
                    r.push(o);
            }),
            r
        );
    }
    getAfterBody(t, n) {
        return Df(Lt(n.callbacks, 'afterBody', this, t));
    }
    getFooter(t, n) {
        const { callbacks: i } = n,
            r = Lt(i, 'beforeFooter', this, t),
            s = Lt(i, 'footer', this, t),
            o = Lt(i, 'afterFooter', this, t);
        let l = [];
        return (l = ge(l, be(r))), (l = ge(l, be(s))), (l = ge(l, be(o))), l;
    }
    _createItems(t) {
        const n = this._active,
            i = this.chart.data,
            r = [],
            s = [],
            o = [];
        let l = [],
            a,
            u;
        for (a = 0, u = n.length; a < u; ++a) l.push(o2(this.chart, n[a]));
        return (
            t.filter && (l = l.filter((c, f, d) => t.filter(c, f, d, i))),
            t.itemSort && (l = l.sort((c, f) => t.itemSort(c, f, i))),
            j(l, (c) => {
                const f = zf(t.callbacks, c);
                r.push(Lt(f, 'labelColor', this, c)),
                    s.push(Lt(f, 'labelPointStyle', this, c)),
                    o.push(Lt(f, 'labelTextColor', this, c));
            }),
            (this.labelColors = r),
            (this.labelPointStyles = s),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
        );
    }
    update(t, n) {
        const i = this.options.setContext(this.getContext()),
            r = this._active;
        let s,
            o = [];
        if (!r.length) this.opacity !== 0 && (s = { opacity: 0 });
        else {
            const l = ji[i.position].call(this, r, this._eventPosition);
            (o = this._createItems(i)),
                (this.title = this.getTitle(o, i)),
                (this.beforeBody = this.getBeforeBody(o, i)),
                (this.body = this.getBody(o, i)),
                (this.afterBody = this.getAfterBody(o, i)),
                (this.footer = this.getFooter(o, i));
            const a = (this._size = Tf(this, i)),
                u = Object.assign({}, l, a),
                c = Lf(this.chart, i, u),
                f = Of(i, u, c, this.chart);
            (this.xAlign = c.xAlign),
                (this.yAlign = c.yAlign),
                (s = {
                    opacity: 1,
                    x: f.x,
                    y: f.y,
                    width: a.width,
                    height: a.height,
                    caretX: l.x,
                    caretY: l.y,
                });
        }
        (this._tooltipItems = o),
            (this.$context = void 0),
            s && this._resolveAnimations().update(this, s),
            t &&
                i.external &&
                i.external.call(this, { chart: this.chart, tooltip: this, replay: n });
    }
    drawCaret(t, n, i, r) {
        const s = this.getCaretPosition(t, i, r);
        n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(t, n, i) {
        const { xAlign: r, yAlign: s } = this,
            { caretSize: o, cornerRadius: l } = i,
            { topLeft: a, topRight: u, bottomLeft: c, bottomRight: f } = ri(l),
            { x: d, y: h } = t,
            { width: m, height: y } = n;
        let x, p, g, v, _, w;
        return (
            s === 'center'
                ? ((_ = h + y / 2),
                  r === 'left'
                      ? ((x = d), (p = x - o), (v = _ + o), (w = _ - o))
                      : ((x = d + m), (p = x + o), (v = _ - o), (w = _ + o)),
                  (g = x))
                : (r === 'left'
                      ? (p = d + Math.max(a, c) + o)
                      : r === 'right'
                      ? (p = d + m - Math.max(u, f) - o)
                      : (p = this.caretX),
                  s === 'top'
                      ? ((v = h), (_ = v - o), (x = p - o), (g = p + o))
                      : ((v = h + y), (_ = v + o), (x = p + o), (g = p - o)),
                  (w = v)),
            { x1: x, x2: p, x3: g, y1: v, y2: _, y3: w }
        );
    }
    drawTitle(t, n, i) {
        const r = this.title,
            s = r.length;
        let o, l, a;
        if (s) {
            const u = si(i.rtl, this.x, this.width);
            for (
                t.x = ls(this, i.titleAlign, i),
                    n.textAlign = u.textAlign(i.titleAlign),
                    n.textBaseline = 'middle',
                    o = ft(i.titleFont),
                    l = i.titleSpacing,
                    n.fillStyle = i.titleColor,
                    n.font = o.string,
                    a = 0;
                a < s;
                ++a
            )
                n.fillText(r[a], u.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + l),
                    a + 1 === s && (t.y += i.titleMarginBottom - l);
        }
    }
    _drawColorBox(t, n, i, r, s) {
        const o = this.labelColors[i],
            l = this.labelPointStyles[i],
            { boxHeight: a, boxWidth: u, boxPadding: c } = s,
            f = ft(s.bodyFont),
            d = ls(this, 'left', s),
            h = r.x(d),
            m = a < f.lineHeight ? (f.lineHeight - a) / 2 : 0,
            y = n.y + m;
        if (s.usePointStyle) {
            const x = {
                    radius: Math.min(u, a) / 2,
                    pointStyle: l.pointStyle,
                    rotation: l.rotation,
                    borderWidth: 1,
                },
                p = r.leftForLtr(h, u) + u / 2,
                g = y + a / 2;
            (t.strokeStyle = s.multiKeyBackground),
                (t.fillStyle = s.multiKeyBackground),
                la(t, x, p, g),
                (t.strokeStyle = o.borderColor),
                (t.fillStyle = o.backgroundColor),
                la(t, x, p, g);
        } else {
            (t.lineWidth = B(o.borderWidth)
                ? Math.max(...Object.values(o.borderWidth))
                : o.borderWidth || 1),
                (t.strokeStyle = o.borderColor),
                t.setLineDash(o.borderDash || []),
                (t.lineDashOffset = o.borderDashOffset || 0);
            const x = r.leftForLtr(h, u - c),
                p = r.leftForLtr(r.xPlus(h, 1), u - c - 2),
                g = ri(o.borderRadius);
            Object.values(g).some((v) => v !== 0)
                ? (t.beginPath(),
                  (t.fillStyle = s.multiKeyBackground),
                  no(t, { x, y, w: u, h: a, radius: g }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = o.backgroundColor),
                  t.beginPath(),
                  no(t, { x: p, y: y + 1, w: u - 2, h: a - 2, radius: g }),
                  t.fill())
                : ((t.fillStyle = s.multiKeyBackground),
                  t.fillRect(x, y, u, a),
                  t.strokeRect(x, y, u, a),
                  (t.fillStyle = o.backgroundColor),
                  t.fillRect(p, y + 1, u - 2, a - 2));
        }
        t.fillStyle = this.labelTextColors[i];
    }
    drawBody(t, n, i) {
        const { body: r } = this,
            {
                bodySpacing: s,
                bodyAlign: o,
                displayColors: l,
                boxHeight: a,
                boxWidth: u,
                boxPadding: c,
            } = i,
            f = ft(i.bodyFont);
        let d = f.lineHeight,
            h = 0;
        const m = si(i.rtl, this.x, this.width),
            y = function (C) {
                n.fillText(C, m.x(t.x + h), t.y + d / 2), (t.y += d + s);
            },
            x = m.textAlign(o);
        let p, g, v, _, w, k, S;
        for (
            n.textAlign = o,
                n.textBaseline = 'middle',
                n.font = f.string,
                t.x = ls(this, x, i),
                n.fillStyle = i.bodyColor,
                j(this.beforeBody, y),
                h = l && x !== 'right' ? (o === 'center' ? u / 2 + c : u + 2 + c) : 0,
                _ = 0,
                k = r.length;
            _ < k;
            ++_
        ) {
            for (
                p = r[_],
                    g = this.labelTextColors[_],
                    n.fillStyle = g,
                    j(p.before, y),
                    v = p.lines,
                    l &&
                        v.length &&
                        (this._drawColorBox(n, t, _, m, i), (d = Math.max(f.lineHeight, a))),
                    w = 0,
                    S = v.length;
                w < S;
                ++w
            )
                y(v[w]), (d = f.lineHeight);
            j(p.after, y);
        }
        (h = 0), (d = f.lineHeight), j(this.afterBody, y), (t.y -= s);
    }
    drawFooter(t, n, i) {
        const r = this.footer,
            s = r.length;
        let o, l;
        if (s) {
            const a = si(i.rtl, this.x, this.width);
            for (
                t.x = ls(this, i.footerAlign, i),
                    t.y += i.footerMarginTop,
                    n.textAlign = a.textAlign(i.footerAlign),
                    n.textBaseline = 'middle',
                    o = ft(i.footerFont),
                    n.fillStyle = i.footerColor,
                    n.font = o.string,
                    l = 0;
                l < s;
                ++l
            )
                n.fillText(r[l], a.x(t.x), t.y + o.lineHeight / 2),
                    (t.y += o.lineHeight + i.footerSpacing);
        }
    }
    drawBackground(t, n, i, r) {
        const { xAlign: s, yAlign: o } = this,
            { x: l, y: a } = t,
            { width: u, height: c } = i,
            { topLeft: f, topRight: d, bottomLeft: h, bottomRight: m } = ri(r.cornerRadius);
        (n.fillStyle = r.backgroundColor),
            (n.strokeStyle = r.borderColor),
            (n.lineWidth = r.borderWidth),
            n.beginPath(),
            n.moveTo(l + f, a),
            o === 'top' && this.drawCaret(t, n, i, r),
            n.lineTo(l + u - d, a),
            n.quadraticCurveTo(l + u, a, l + u, a + d),
            o === 'center' && s === 'right' && this.drawCaret(t, n, i, r),
            n.lineTo(l + u, a + c - m),
            n.quadraticCurveTo(l + u, a + c, l + u - m, a + c),
            o === 'bottom' && this.drawCaret(t, n, i, r),
            n.lineTo(l + h, a + c),
            n.quadraticCurveTo(l, a + c, l, a + c - h),
            o === 'center' && s === 'left' && this.drawCaret(t, n, i, r),
            n.lineTo(l, a + f),
            n.quadraticCurveTo(l, a, l + f, a),
            n.closePath(),
            n.fill(),
            r.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(t) {
        const n = this.chart,
            i = this.$animations,
            r = i && i.x,
            s = i && i.y;
        if (r || s) {
            const o = ji[t.position].call(this, this._active, this._eventPosition);
            if (!o) return;
            const l = (this._size = Tf(this, t)),
                a = Object.assign({}, o, this._size),
                u = Lf(n, t, a),
                c = Of(t, a, u, n);
            (r._to !== c.x || s._to !== c.y) &&
                ((this.xAlign = u.xAlign),
                (this.yAlign = u.yAlign),
                (this.width = l.width),
                (this.height = l.height),
                (this.caretX = o.x),
                (this.caretY = o.y),
                this._resolveAnimations().update(this, c));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(t) {
        const n = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(n);
        const r = { width: this.width, height: this.height },
            s = { x: this.x, y: this.y };
        i = Math.abs(i) < 0.001 ? 0 : i;
        const o = bt(n.padding),
            l =
                this.title.length ||
                this.beforeBody.length ||
                this.body.length ||
                this.afterBody.length ||
                this.footer.length;
        n.enabled &&
            l &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(s, t, r, n),
            Cp(t, n.textDirection),
            (s.y += o.top),
            this.drawTitle(s, t, n),
            this.drawBody(s, t, n),
            this.drawFooter(s, t, n),
            bp(t, n.textDirection),
            t.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t, n) {
        const i = this._active,
            r = t.map(({ datasetIndex: l, index: a }) => {
                const u = this.chart.getDatasetMeta(l);
                if (!u) throw new Error('Cannot find a dataset at index ' + l);
                return { datasetIndex: l, element: u.data[a], index: a };
            }),
            s = !Gs(i, r),
            o = this._positionChanged(r, n);
        (s || o) &&
            ((this._active = r),
            (this._eventPosition = n),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
    }
    handleEvent(t, n, i = !0) {
        if (n && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const r = this.options,
            s = this._active || [],
            o = this._getActiveElements(t, s, n, i),
            l = this._positionChanged(o, t),
            a = n || !Gs(o, s) || l;
        return (
            a &&
                ((this._active = o),
                (r.enabled || r.external) &&
                    ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
            a
        );
    }
    _getActiveElements(t, n, i, r) {
        const s = this.options;
        if (t.type === 'mouseout') return [];
        if (!r) return n;
        const o = this.chart.getElementsAtEventForMode(t, s.mode, s, i);
        return s.reverse && o.reverse(), o;
    }
    _positionChanged(t, n) {
        const { caretX: i, caretY: r, options: s } = this,
            o = ji[s.position].call(this, t, n);
        return o !== !1 && (i !== o.x || r !== o.y);
    }
}
R(ca, 'positioners', ji);
var h2 = {
    id: 'tooltip',
    _element: ca,
    positioners: ji,
    afterInit(e, t, n) {
        n && (e.tooltip = new ca({ chart: e, options: n }));
    },
    beforeUpdate(e, t, n) {
        e.tooltip && e.tooltip.initialize(n);
    },
    reset(e, t, n) {
        e.tooltip && e.tooltip.initialize(n);
    },
    afterDraw(e) {
        const t = e.tooltip;
        if (t && t._willRender()) {
            const n = { tooltip: t };
            if (e.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1) return;
            t.draw(e.ctx), e.notifyPlugins('afterTooltipDraw', n);
        }
    },
    afterEvent(e, t) {
        if (e.tooltip) {
            const n = t.replay;
            e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: { weight: 'bold' },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: 'bold' },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (e, t) => t.bodyFont.size,
        boxWidth: (e, t) => t.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: !0,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: { duration: 400, easing: 'easeOutQuart' },
        animations: {
            numbers: {
                type: 'number',
                properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
            },
            opacity: { easing: 'linear', duration: 200 },
        },
        callbacks: Vp,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
        _scriptable: (e) => e !== 'filter' && e !== 'itemSort' && e !== 'external',
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
};
const p2 = (e, t, n, i) => (
    typeof t == 'string'
        ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
        : isNaN(t) && (n = null),
    n
);
function g2(e, t, n, i) {
    const r = e.indexOf(t);
    if (r === -1) return p2(e, t, n, i);
    const s = e.lastIndexOf(t);
    return r !== s ? n : r;
}
const m2 = (e, t) => (e === null ? null : qt(Math.round(e), 0, t));
function Rf(e) {
    const t = this.getLabels();
    return e >= 0 && e < t.length ? t[e] : e;
}
class fa extends In {
    constructor(t) {
        super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
    }
    init(t) {
        const n = this._addedLabels;
        if (n.length) {
            const i = this.getLabels();
            for (const { index: r, label: s } of n) i[r] === s && i.splice(r, 1);
            this._addedLabels = [];
        }
        super.init(t);
    }
    parse(t, n) {
        if (X(t)) return null;
        const i = this.getLabels();
        return (
            (n = isFinite(n) && i[n] === t ? n : g2(i, t, A(n, t), this._addedLabels)),
            m2(n, i.length - 1)
        );
    }
    determineDataLimits() {
        const { minDefined: t, maxDefined: n } = this.getUserBounds();
        let { min: i, max: r } = this.getMinMax(!0);
        this.options.bounds === 'ticks' && (t || (i = 0), n || (r = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = r);
    }
    buildTicks() {
        const t = this.min,
            n = this.max,
            i = this.options.offset,
            r = [];
        let s = this.getLabels();
        (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
            (this._valueRange = Math.max(s.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
        for (let o = t; o <= n; o++) r.push({ value: o });
        return r;
    }
    getLabelForValue(t) {
        return Rf.call(this, t);
    }
    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
        return (
            typeof t != 'number' && (t = this.parse(t)),
            t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        );
    }
    getPixelForTick(t) {
        const n = this.ticks;
        return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
    }
    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
R(fa, 'id', 'category'), R(fa, 'defaults', { ticks: { callback: Rf } });
function y2(e, t) {
    const n = [],
        {
            bounds: r,
            step: s,
            min: o,
            max: l,
            precision: a,
            count: u,
            maxTicks: c,
            maxDigits: f,
            includeBounds: d,
        } = e,
        h = s || 1,
        m = c - 1,
        { min: y, max: x } = t,
        p = !X(o),
        g = !X(l),
        v = !X(u),
        _ = (x - y) / (f + 1);
    let w = Bc((x - y) / m / h) * h,
        k,
        S,
        C,
        L;
    if (w < 1e-14 && !p && !g) return [{ value: y }, { value: x }];
    (L = Math.ceil(x / w) - Math.floor(y / w)),
        L > m && (w = Bc((L * w) / m / h) * h),
        X(a) || ((k = Math.pow(10, a)), (w = Math.ceil(w * k) / k)),
        r === 'ticks'
            ? ((S = Math.floor(y / w) * w), (C = Math.ceil(x / w) * w))
            : ((S = y), (C = x)),
        p && g && s && o1((l - o) / s, w / 1e3)
            ? ((L = Math.round(Math.min((l - o) / w, c))), (w = (l - o) / L), (S = o), (C = l))
            : v
            ? ((S = p ? o : S), (C = g ? l : C), (L = u - 1), (w = (C - S) / L))
            : ((L = (C - S) / w),
              qi(L, Math.round(L), w / 1e3) ? (L = Math.round(L)) : (L = Math.ceil(L)));
    const E = Math.max(jc(w), jc(S));
    (k = Math.pow(10, X(a) ? E : a)), (S = Math.round(S * k) / k), (C = Math.round(C * k) / k);
    let O = 0;
    for (
        p &&
        (d && S !== o
            ? (n.push({ value: o }),
              S < o && O++,
              qi(Math.round((S + O * w) * k) / k, o, Nf(o, _, e)) && O++)
            : S < o && O++);
        O < L;
        ++O
    )
        n.push({ value: Math.round((S + O * w) * k) / k });
    return (
        g && d && C !== l
            ? n.length && qi(n[n.length - 1].value, l, Nf(l, _, e))
                ? (n[n.length - 1].value = l)
                : n.push({ value: l })
            : (!g || C === l) && n.push({ value: C }),
        n
    );
}
function Nf(e, t, { horizontal: n, minRotation: i }) {
    const r = Qe(i),
        s = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
        o = 0.75 * t * ('' + e).length;
    return Math.min(t / s, o);
}
class oo extends In {
    constructor(t) {
        super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
    }
    parse(t, n) {
        return X(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
    }
    handleTickRangeOptions() {
        const { beginAtZero: t } = this.options,
            { minDefined: n, maxDefined: i } = this.getUserBounds();
        let { min: r, max: s } = this;
        const o = (a) => (r = n ? r : a),
            l = (a) => (s = i ? s : a);
        if (t) {
            const a = hi(r),
                u = hi(s);
            a < 0 && u < 0 ? l(0) : a > 0 && u > 0 && o(0);
        }
        if (r === s) {
            let a = s === 0 ? 1 : Math.abs(s * 0.05);
            l(s + a), t || o(r - a);
        }
        (this.min = r), (this.max = s);
    }
    getTickLimit() {
        const t = this.options.ticks;
        let { maxTicksLimit: n, stepSize: i } = t,
            r;
        return (
            i
                ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
                  r > 1e3 &&
                      (console.warn(
                          `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
                      ),
                      (r = 1e3)))
                : ((r = this.computeTickLimit()), (n = n || 11)),
            n && (r = Math.min(n, r)),
            r
        );
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const t = this.options,
            n = t.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const r = {
                maxTicks: i,
                bounds: t.bounds,
                min: t.min,
                max: t.max,
                precision: n.precision,
                step: n.stepSize,
                count: n.count,
                maxDigits: this._maxDigits(),
                horizontal: this.isHorizontal(),
                minRotation: n.minRotation || 0,
                includeBounds: n.includeBounds !== !1,
            },
            s = this._range || this,
            o = y2(r, s);
        return (
            t.bounds === 'ticks' && up(o, this, 'value'),
            t.reverse
                ? (o.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            o
        );
    }
    configure() {
        const t = this.ticks;
        let n = this.min,
            i = this.max;
        if ((super.configure(), this.options.offset && t.length)) {
            const r = (i - n) / Math.max(t.length - 1, 1) / 2;
            (n -= r), (i += r);
        }
        (this._startValue = n), (this._endValue = i), (this._valueRange = i - n);
    }
    getLabelForValue(t) {
        return gu(t, this.chart.options.locale, this.options.ticks.format);
    }
}
class da extends oo {
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!0);
        (this.min = pt(t) ? t : 0), (this.max = pt(n) ? n : 1), this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const t = this.isHorizontal(),
            n = t ? this.width : this.height,
            i = Qe(this.options.ticks.minRotation),
            r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            s = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, s.lineHeight / r));
    }
    getPixelForValue(t) {
        return t === null
            ? NaN
            : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
}
R(da, 'id', 'linear'), R(da, 'defaults', { ticks: { callback: Mo.formatters.numeric } });
const Cr = (e) => Math.floor(Ye(e)),
    mn = (e, t) => Math.pow(10, Cr(e) + t);
function Af(e) {
    return e / Math.pow(10, Cr(e)) === 1;
}
function If(e, t, n) {
    const i = Math.pow(10, n),
        r = Math.floor(e / i);
    return Math.ceil(t / i) - r;
}
function v2(e, t) {
    const n = t - e;
    let i = Cr(n);
    for (; If(e, t, i) > 10; ) i++;
    for (; If(e, t, i) < 10; ) i--;
    return Math.min(i, Cr(e));
}
function x2(e, { min: t, max: n }) {
    t = jt(e.min, t);
    const i = [],
        r = Cr(t);
    let s = v2(t, n),
        o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const l = Math.pow(10, s),
        a = r > s ? Math.pow(10, r) : 0,
        u = Math.round((t - a) * o) / o,
        c = Math.floor((t - a) / l / 10) * l * 10;
    let f = Math.floor((u - c) / Math.pow(10, s)),
        d = jt(e.min, Math.round((a + c + f * Math.pow(10, s)) * o) / o);
    for (; d < n; )
        i.push({ value: d, major: Af(d), significand: f }),
            f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
            f >= 20 && (s++, (f = 2), (o = s >= 0 ? 1 : o)),
            (d = Math.round((a + c + f * Math.pow(10, s)) * o) / o);
    const h = jt(e.max, d);
    return i.push({ value: h, major: Af(h), significand: f }), i;
}
class Ff extends In {
    constructor(t) {
        super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
    }
    parse(t, n) {
        const i = oo.prototype.parse.apply(this, [t, n]);
        if (i === 0) {
            this._zero = !0;
            return;
        }
        return pt(i) && i > 0 ? i : null;
    }
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!0);
        (this.min = pt(t) ? Math.max(0, t) : null),
            (this.max = pt(n) ? Math.max(0, n) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
                this.min !== this._suggestedMin &&
                !pt(this._userMin) &&
                (this.min = t === mn(this.min, 0) ? mn(this.min, -1) : mn(this.min, 0)),
            this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: t, maxDefined: n } = this.getUserBounds();
        let i = this.min,
            r = this.max;
        const s = (l) => (i = t ? i : l),
            o = (l) => (r = n ? r : l);
        i === r && (i <= 0 ? (s(1), o(10)) : (s(mn(i, -1)), o(mn(r, 1)))),
            i <= 0 && s(mn(r, -1)),
            r <= 0 && o(mn(i, 1)),
            (this.min = i),
            (this.max = r);
    }
    buildTicks() {
        const t = this.options,
            n = { min: this._userMin, max: this._userMax },
            i = x2(n, this);
        return (
            t.bounds === 'ticks' && up(i, this, 'value'),
            t.reverse
                ? (i.reverse(), (this.start = this.max), (this.end = this.min))
                : ((this.start = this.min), (this.end = this.max)),
            i
        );
    }
    getLabelForValue(t) {
        return t === void 0 ? '0' : gu(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const t = this.min;
        super.configure(), (this._startValue = Ye(t)), (this._valueRange = Ye(this.max) - Ye(t));
    }
    getPixelForValue(t) {
        return (
            (t === void 0 || t === 0) && (t = this.min),
            t === null || isNaN(t)
                ? NaN
                : this.getPixelForDecimal(
                      t === this.min ? 0 : (Ye(t) - this._startValue) / this._valueRange
                  )
        );
    }
    getValueForPixel(t) {
        const n = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + n * this._valueRange);
    }
}
R(Ff, 'id', 'logarithmic'),
    R(Ff, 'defaults', { ticks: { callback: Mo.formatters.logarithmic, major: { enabled: !0 } } });
function ha(e) {
    const t = e.ticks;
    if (t.display && e.display) {
        const n = bt(t.backdropPadding);
        return A(t.font && t.font.size, ot.font.size) + n.height;
    }
    return 0;
}
function _2(e, t, n) {
    return (n = tt(n) ? n : [n]), { w: P1(e, t.string, n), h: n.length * t.lineHeight };
}
function Hf(e, t, n, i, r) {
    return e === i || e === r
        ? { start: t - n / 2, end: t + n / 2 }
        : e < i || e > r
        ? { start: t - n, end: t }
        : { start: t, end: t + n };
}
function w2(e) {
    const t = {
            l: e.left + e._padding.left,
            r: e.right - e._padding.right,
            t: e.top + e._padding.top,
            b: e.bottom - e._padding.bottom,
        },
        n = Object.assign({}, t),
        i = [],
        r = [],
        s = e._pointLabels.length,
        o = e.options.pointLabels,
        l = o.centerPointLabels ? dt / s : 0;
    for (let a = 0; a < s; a++) {
        const u = o.setContext(e.getPointLabelContext(a));
        r[a] = u.padding;
        const c = e.getPointPosition(a, e.drawingArea + r[a], l),
            f = ft(u.font),
            d = _2(e.ctx, f, e._pointLabels[a]);
        i[a] = d;
        const h = le(e.getIndexAngle(a) + l),
            m = Math.round(du(h)),
            y = Hf(m, c.x, d.w, 0, 180),
            x = Hf(m, c.y, d.h, 90, 270);
        k2(n, t, h, y, x);
    }
    e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
        (e._pointLabelItems = S2(e, i, r));
}
function k2(e, t, n, i, r) {
    const s = Math.abs(Math.sin(n)),
        o = Math.abs(Math.cos(n));
    let l = 0,
        a = 0;
    i.start < t.l
        ? ((l = (t.l - i.start) / s), (e.l = Math.min(e.l, t.l - l)))
        : i.end > t.r && ((l = (i.end - t.r) / s), (e.r = Math.max(e.r, t.r + l))),
        r.start < t.t
            ? ((a = (t.t - r.start) / o), (e.t = Math.min(e.t, t.t - a)))
            : r.end > t.b && ((a = (r.end - t.b) / o), (e.b = Math.max(e.b, t.b + a)));
}
function S2(e, t, n) {
    const i = [],
        r = e._pointLabels.length,
        s = e.options,
        o = ha(s) / 2,
        l = e.drawingArea,
        a = s.pointLabels.centerPointLabels ? dt / r : 0;
    for (let u = 0; u < r; u++) {
        const c = e.getPointPosition(u, l + o + n[u], a),
            f = Math.round(du(le(c.angle + Rt))),
            d = t[u],
            h = M2(c.y, d.h, f),
            m = C2(f),
            y = b2(c.x, d.w, m);
        i.push({ x: c.x, y: h, textAlign: m, left: y, top: h, right: y + d.w, bottom: h + d.h });
    }
    return i;
}
function C2(e) {
    return e === 0 || e === 180 ? 'center' : e < 180 ? 'left' : 'right';
}
function b2(e, t, n) {
    return n === 'right' ? (e -= t) : n === 'center' && (e -= t / 2), e;
}
function M2(e, t, n) {
    return n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e;
}
function P2(e, t) {
    const {
        ctx: n,
        options: { pointLabels: i },
    } = e;
    for (let r = t - 1; r >= 0; r--) {
        const s = i.setContext(e.getPointLabelContext(r)),
            o = ft(s.font),
            {
                x: l,
                y: a,
                textAlign: u,
                left: c,
                top: f,
                right: d,
                bottom: h,
            } = e._pointLabelItems[r],
            { backdropColor: m } = s;
        if (!X(m)) {
            const y = ri(s.borderRadius),
                x = bt(s.backdropPadding);
            n.fillStyle = m;
            const p = c - x.left,
                g = f - x.top,
                v = d - c + x.width,
                _ = h - f + x.height;
            Object.values(y).some((w) => w !== 0)
                ? (n.beginPath(), no(n, { x: p, y: g, w: v, h: _, radius: y }), n.fill())
                : n.fillRect(p, g, v, _);
        }
        Rn(n, e._pointLabels[r], l, a + o.lineHeight / 2, o, {
            color: s.color,
            textAlign: u,
            textBaseline: 'middle',
        });
    }
}
function Wp(e, t, n, i) {
    const { ctx: r } = e;
    if (n) r.arc(e.xCenter, e.yCenter, t, 0, ee);
    else {
        let s = e.getPointPosition(0, t);
        r.moveTo(s.x, s.y);
        for (let o = 1; o < i; o++) (s = e.getPointPosition(o, t)), r.lineTo(s.x, s.y);
    }
}
function E2(e, t, n, i, r) {
    const s = e.ctx,
        o = t.circular,
        { color: l, lineWidth: a } = t;
    (!o && !i) ||
        !l ||
        !a ||
        n < 0 ||
        (s.save(),
        (s.strokeStyle = l),
        (s.lineWidth = a),
        s.setLineDash(r.dash),
        (s.lineDashOffset = r.dashOffset),
        s.beginPath(),
        Wp(e, n, o, i),
        s.closePath(),
        s.stroke(),
        s.restore());
}
function T2(e, t, n) {
    return dn(e, { label: n, index: t, type: 'pointLabel' });
}
class as extends oo {
    constructor(t) {
        super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
    }
    setDimensions() {
        const t = (this._padding = bt(ha(this.options) / 2)),
            n = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(n, i) / 2));
    }
    determineDataLimits() {
        const { min: t, max: n } = this.getMinMax(!1);
        (this.min = pt(t) && !isNaN(t) ? t : 0),
            (this.max = pt(n) && !isNaN(n) ? n : 0),
            this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / ha(this.options));
    }
    generateTickLabels(t) {
        oo.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
                .map((n, i) => {
                    const r = $(this.options.pointLabels.callback, [n, i], this);
                    return r || r === 0 ? r : '';
                })
                .filter((n, i) => this.chart.getDataVisibility(i)));
    }
    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? w2(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, n, i, r) {
        (this.xCenter += Math.floor((t - n) / 2)),
            (this.yCenter += Math.floor((i - r) / 2)),
            (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, r)));
    }
    getIndexAngle(t) {
        const n = ee / (this._pointLabels.length || 1),
            i = this.options.startAngle || 0;
        return le(t * n + Qe(i));
    }
    getDistanceFromCenterForValue(t) {
        if (X(t)) return NaN;
        const n = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
    }
    getValueForDistanceFromCenter(t) {
        if (X(t)) return NaN;
        const n = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(t) {
        const n = this._pointLabels || [];
        if (t >= 0 && t < n.length) {
            const i = n[t];
            return T2(this.getContext(), t, i);
        }
    }
    getPointPosition(t, n, i = 0) {
        const r = this.getIndexAngle(t) - Rt + i;
        return { x: Math.cos(r) * n + this.xCenter, y: Math.sin(r) * n + this.yCenter, angle: r };
    }
    getPointPositionForValue(t, n) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
        const { left: n, top: i, right: r, bottom: s } = this._pointLabelItems[t];
        return { left: n, top: i, right: r, bottom: s };
    }
    drawBackground() {
        const {
            backgroundColor: t,
            grid: { circular: n },
        } = this.options;
        if (t) {
            const i = this.ctx;
            i.save(),
                i.beginPath(),
                Wp(
                    this,
                    this.getDistanceFromCenterForValue(this._endValue),
                    n,
                    this._pointLabels.length
                ),
                i.closePath(),
                (i.fillStyle = t),
                i.fill(),
                i.restore();
        }
    }
    drawGrid() {
        const t = this.ctx,
            n = this.options,
            { angleLines: i, grid: r, border: s } = n,
            o = this._pointLabels.length;
        let l, a, u;
        if (
            (n.pointLabels.display && P2(this, o),
            r.display &&
                this.ticks.forEach((c, f) => {
                    if (f !== 0) {
                        a = this.getDistanceFromCenterForValue(c.value);
                        const d = this.getContext(f),
                            h = r.setContext(d),
                            m = s.setContext(d);
                        E2(this, h, a, o, m);
                    }
                }),
            i.display)
        ) {
            for (t.save(), l = o - 1; l >= 0; l--) {
                const c = i.setContext(this.getPointLabelContext(l)),
                    { color: f, lineWidth: d } = c;
                !d ||
                    !f ||
                    ((t.lineWidth = d),
                    (t.strokeStyle = f),
                    t.setLineDash(c.borderDash),
                    (t.lineDashOffset = c.borderDashOffset),
                    (a = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
                    (u = this.getPointPosition(l, a)),
                    t.beginPath(),
                    t.moveTo(this.xCenter, this.yCenter),
                    t.lineTo(u.x, u.y),
                    t.stroke());
            }
            t.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const t = this.ctx,
            n = this.options,
            i = n.ticks;
        if (!i.display) return;
        const r = this.getIndexAngle(0);
        let s, o;
        t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(r),
            (t.textAlign = 'center'),
            (t.textBaseline = 'middle'),
            this.ticks.forEach((l, a) => {
                if (a === 0 && !n.reverse) return;
                const u = i.setContext(this.getContext(a)),
                    c = ft(u.font);
                if (
                    ((s = this.getDistanceFromCenterForValue(this.ticks[a].value)),
                    u.showLabelBackdrop)
                ) {
                    (t.font = c.string),
                        (o = t.measureText(l.label).width),
                        (t.fillStyle = u.backdropColor);
                    const f = bt(u.backdropPadding);
                    t.fillRect(
                        -o / 2 - f.left,
                        -s - c.size / 2 - f.top,
                        o + f.width,
                        c.size + f.height
                    );
                }
                Rn(t, l.label, 0, -s, c, { color: u.color });
            }),
            t.restore();
    }
    drawTitle() {}
}
R(as, 'id', 'radialLinear'),
    R(as, 'defaults', {
        display: !0,
        animate: !0,
        position: 'chartArea',
        angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: Mo.formatters.numeric },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback(t) {
                return t;
            },
            padding: 5,
            centerPointLabels: !1,
        },
    }),
    R(as, 'defaultRoutes', {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color',
    }),
    R(as, 'descriptors', { angleLines: { _fallback: 'grid' } });
const Eo = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
    },
    Dt = Object.keys(Eo);
function L2(e, t) {
    return e - t;
}
function Bf(e, t) {
    if (X(t)) return null;
    const n = e._adapter,
        { parser: i, round: r, isoWeekday: s } = e._parseOpts;
    let o = t;
    return (
        typeof i == 'function' && (o = i(o)),
        pt(o) || (o = typeof i == 'string' ? n.parse(o, i) : n.parse(o)),
        o === null
            ? null
            : (r &&
                  (o =
                      r === 'week' && (wr(s) || s === !0)
                          ? n.startOf(o, 'isoWeek', s)
                          : n.startOf(o, r)),
              +o)
    );
}
function jf(e, t, n, i) {
    const r = Dt.length;
    for (let s = Dt.indexOf(e); s < r - 1; ++s) {
        const o = Eo[Dt[s]],
            l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - t) / (l * o.size)) <= i) return Dt[s];
    }
    return Dt[r - 1];
}
function O2(e, t, n, i, r) {
    for (let s = Dt.length - 1; s >= Dt.indexOf(n); s--) {
        const o = Dt[s];
        if (Eo[o].common && e._adapter.diff(r, i, o) >= t - 1) return o;
    }
    return Dt[n ? Dt.indexOf(n) : 0];
}
function D2(e) {
    for (let t = Dt.indexOf(e) + 1, n = Dt.length; t < n; ++t) if (Eo[Dt[t]].common) return Dt[t];
}
function Vf(e, t, n) {
    if (!n) e[t] = !0;
    else if (n.length) {
        const { lo: i, hi: r } = hu(n, t),
            s = n[i] >= t ? n[i] : n[r];
        e[s] = !0;
    }
}
function z2(e, t, n, i) {
    const r = e._adapter,
        s = +r.startOf(t[0].value, i),
        o = t[t.length - 1].value;
    let l, a;
    for (l = s; l <= o; l = +r.add(l, 1, i)) (a = n[l]), a >= 0 && (t[a].major = !0);
    return t;
}
function Wf(e, t, n) {
    const i = [],
        r = {},
        s = t.length;
    let o, l;
    for (o = 0; o < s; ++o) (l = t[o]), (r[l] = o), i.push({ value: l, major: !1 });
    return s === 0 || !n ? i : z2(e, i, r, n);
}
class lo extends In {
    constructor(t) {
        super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = 'day'),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
    }
    init(t, n = {}) {
        const i = t.time || (t.time = {}),
            r = (this._adapter = new Ry._date(t.adapters.date));
        r.init(n),
            Gi(i.displayFormats, r.formats()),
            (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
            super.init(t),
            (this._normalized = n.normalized);
    }
    parse(t, n) {
        return t === void 0 ? null : Bf(this, t);
    }
    beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
        const t = this.options,
            n = this._adapter,
            i = t.time.unit || 'day';
        let { min: r, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
        function a(u) {
            !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
                !l && !isNaN(u.max) && (s = Math.max(s, u.max));
        }
        (!o || !l) &&
            (a(this._getLabelBounds()),
            (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && a(this.getMinMax(!1))),
            (r = pt(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
            (s = pt(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1),
            (this.min = Math.min(r, s - 1)),
            (this.max = Math.max(r + 1, s));
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i };
    }
    buildTicks() {
        const t = this.options,
            n = t.time,
            i = t.ticks,
            r = i.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        t.bounds === 'ticks' &&
            r.length &&
            ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]));
        const s = this.min,
            o = this.max,
            l = f1(r, s, o);
        return (
            (this._unit =
                n.unit ||
                (i.autoSkip
                    ? jf(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
                    : O2(this, l.length, n.minUnit, this.min, this.max))),
            (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : D2(this._unit)),
            this.initOffsets(r),
            t.reverse && l.reverse(),
            Wf(this, l, this._majorUnit)
        );
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t = []) {
        let n = 0,
            i = 0,
            r,
            s;
        this.options.offset &&
            t.length &&
            ((r = this.getDecimalForValue(t[0])),
            t.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(t[1]) - r) / 2),
            (s = this.getDecimalForValue(t[t.length - 1])),
            t.length === 1 ? (i = s) : (i = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
        const o = t.length < 3 ? 0.5 : 0.25;
        (n = qt(n, 0, o)),
            (i = qt(i, 0, o)),
            (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) });
    }
    _generate() {
        const t = this._adapter,
            n = this.min,
            i = this.max,
            r = this.options,
            s = r.time,
            o = s.unit || jf(s.minUnit, n, i, this._getLabelCapacity(n)),
            l = A(r.ticks.stepSize, 1),
            a = o === 'week' ? s.isoWeekday : !1,
            u = wr(a) || a === !0,
            c = {};
        let f = n,
            d,
            h;
        if (
            (u && (f = +t.startOf(f, 'isoWeek', a)),
            (f = +t.startOf(f, u ? 'day' : o)),
            t.diff(i, n, o) > 1e5 * l)
        )
            throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + l + ' ' + o);
        const m = r.ticks.source === 'data' && this.getDataTimestamps();
        for (d = f, h = 0; d < i; d = +t.add(d, l, o), h++) Vf(c, d, m);
        return (
            (d === i || r.bounds === 'ticks' || h === 1) && Vf(c, d, m),
            Object.keys(c)
                .sort((y, x) => y - x)
                .map((y) => +y)
        );
    }
    getLabelForValue(t) {
        const n = this._adapter,
            i = this.options.time;
        return i.tooltipFormat
            ? n.format(t, i.tooltipFormat)
            : n.format(t, i.displayFormats.datetime);
    }
    format(t, n) {
        const r = this.options.time.displayFormats,
            s = this._unit,
            o = n || r[s];
        return this._adapter.format(t, o);
    }
    _tickFormatFunction(t, n, i, r) {
        const s = this.options,
            o = s.ticks.callback;
        if (o) return $(o, [t, n, i], this);
        const l = s.time.displayFormats,
            a = this._unit,
            u = this._majorUnit,
            c = a && l[a],
            f = u && l[u],
            d = i[n],
            h = u && f && d && d.major;
        return this._adapter.format(t, r || (h ? f : c));
    }
    generateTickLabels(t) {
        let n, i, r;
        for (n = 0, i = t.length; n < i; ++n)
            (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t));
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
        const n = this._offsets,
            i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((n.start + i) * n.factor);
    }
    getValueForPixel(t) {
        const n = this._offsets,
            i = this.getDecimalForPixel(t) / n.factor - n.end;
        return this.min + i * (this.max - this.min);
    }
    _getLabelSize(t) {
        const n = this.options.ticks,
            i = this.ctx.measureText(t).width,
            r = Qe(this.isHorizontal() ? n.maxRotation : n.minRotation),
            s = Math.cos(r),
            o = Math.sin(r),
            l = this._resolveTickFontOptions(0).size;
        return { w: i * s + l * o, h: i * o + l * s };
    }
    _getLabelCapacity(t) {
        const n = this.options.time,
            i = n.displayFormats,
            r = i[n.unit] || i.millisecond,
            s = this._tickFormatFunction(t, 0, Wf(this, [t], this._majorUnit), r),
            o = this._getLabelSize(s),
            l = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
        return l > 0 ? l : 1;
    }
    getDataTimestamps() {
        let t = this._cache.data || [],
            n,
            i;
        if (t.length) return t;
        const r = this.getMatchingVisibleMetas();
        if (this._normalized && r.length)
            return (this._cache.data = r[0].controller.getAllParsedValues(this));
        for (n = 0, i = r.length; n < i; ++n)
            t = t.concat(r[n].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(t));
    }
    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let n, i;
        if (t.length) return t;
        const r = this.getLabels();
        for (n = 0, i = r.length; n < i; ++n) t.push(Bf(this, r[n]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
        return h1(t.sort(L2));
    }
}
R(lo, 'id', 'time'),
    R(lo, 'defaults', {
        bounds: 'data',
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
        },
        ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
    });
function us(e, t, n) {
    let i = 0,
        r = e.length - 1,
        s,
        o,
        l,
        a;
    n
        ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = Cn(e, 'pos', t)),
          ({ pos: s, time: l } = e[i]),
          ({ pos: o, time: a } = e[r]))
        : (t >= e[i].time && t <= e[r].time && ({ lo: i, hi: r } = Cn(e, 'time', t)),
          ({ time: s, pos: l } = e[i]),
          ({ time: o, pos: a } = e[r]));
    const u = o - s;
    return u ? l + ((a - l) * (t - s)) / u : l;
}
class $f extends lo {
    constructor(t) {
        super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
    }
    initOffsets() {
        const t = this._getTimestampsForTable(),
            n = (this._table = this.buildLookupTable(t));
        (this._minPos = us(n, this.min)),
            (this._tableRange = us(n, this.max) - this._minPos),
            super.initOffsets(t);
    }
    buildLookupTable(t) {
        const { min: n, max: i } = this,
            r = [],
            s = [];
        let o, l, a, u, c;
        for (o = 0, l = t.length; o < l; ++o) (u = t[o]), u >= n && u <= i && r.push(u);
        if (r.length < 2)
            return [
                { time: n, pos: 0 },
                { time: i, pos: 1 },
            ];
        for (o = 0, l = r.length; o < l; ++o)
            (c = r[o + 1]),
                (a = r[o - 1]),
                (u = r[o]),
                Math.round((c + a) / 2) !== u && s.push({ time: u, pos: o / (l - 1) });
        return s;
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const n = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
        return (
            n.length && i.length ? (t = this.normalize(n.concat(i))) : (t = n.length ? n : i),
            (t = this._cache.all = t),
            t
        );
    }
    getDecimalForValue(t) {
        return (us(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
        const n = this._offsets,
            i = this.getDecimalForPixel(t) / n.factor - n.end;
        return us(this._table, i * this._tableRange + this._minPos, !0);
    }
}
R($f, 'id', 'timeseries'), R($f, 'defaults', lo.defaults);
const $p = 'label';
function Uf(e, t) {
    typeof e == 'function' ? e(t) : e && (e.current = t);
}
function R2(e, t) {
    const n = e.options;
    n && t && Object.assign(n, t);
}
function Up(e, t) {
    e.labels = t;
}
function Yp(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $p;
    const i = [];
    e.datasets = t.map((r) => {
        const s = e.datasets.find((o) => o[n] === r[n]);
        return !s || !r.data || i.includes(s) ? { ...r } : (i.push(s), Object.assign(s, r), s);
    });
}
function N2(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $p;
    const n = { labels: [], datasets: [] };
    return Up(n, e.labels), Yp(n, e.datasets, t), n;
}
function A2(e, t) {
    const {
            height: n = 150,
            width: i = 300,
            redraw: r = !1,
            datasetIdKey: s,
            type: o,
            data: l,
            options: a,
            plugins: u = [],
            fallbackContent: c,
            updateMode: f,
            ...d
        } = e,
        h = F.exports.useRef(null),
        m = F.exports.useRef(),
        y = () => {
            !h.current ||
                ((m.current = new ve(h.current, {
                    type: o,
                    data: N2(l, s),
                    options: a && { ...a },
                    plugins: u,
                })),
                Uf(t, m.current));
        },
        x = () => {
            Uf(t, null), m.current && (m.current.destroy(), (m.current = null));
        };
    return (
        F.exports.useEffect(() => {
            !r && m.current && a && R2(m.current, a);
        }, [r, a]),
        F.exports.useEffect(() => {
            !r && m.current && Up(m.current.config.data, l.labels);
        }, [r, l.labels]),
        F.exports.useEffect(() => {
            !r && m.current && l.datasets && Yp(m.current.config.data, l.datasets, s);
        }, [r, l.datasets]),
        F.exports.useEffect(() => {
            !m.current || (r ? (x(), setTimeout(y)) : m.current.update(f));
        }, [r, a, l.labels, l.datasets, f]),
        F.exports.useEffect(() => {
            !m.current || (x(), setTimeout(y));
        }, [o]),
        F.exports.useEffect(() => (y(), () => x()), []),
        b('canvas', {
            ...Object.assign({ ref: h, role: 'img', height: n, width: i }, d),
            children: c,
        })
    );
}
const I2 = F.exports.forwardRef(A2);
function F2(e, t) {
    return (
        ve.register(t),
        F.exports.forwardRef((n, i) => b(I2, { ...Object.assign({}, n, { ref: i, type: e }) }))
    );
}
const H2 = F2('line', Ss);
ve.register(fa, da, Ms, Bi, s2, h2, i2);
const B2 = ({ chartData: e }) => {
    const t = {
        responsive: !0,
        plugins: {
            legend: { display: !1, position: 'top' },
            title: { display: !1, text: 'Chart.js Line Chart (do not display this title)' },
        },
        scales: {
            y: { suggestedMin: 0, suggestedMax: 30, title: { display: !0, text: 'Centimeters' } },
            x: { title: { display: !0, text: 'Miliseconds' } },
        },
        animation: { duration: 0 },
    };
    let n = [];
    for (let r = 0; r < 100; r++) n.push(r * 80);
    return b('div', {
        className: 'max-h-80',
        children: b(H2, {
            options: t,
            data: {
                labels: n,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: e,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            },
        }),
    });
};
function Qp(e) {
    return fn({
        tag: 'svg',
        attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        },
        child: [
            { tag: 'polyline', attr: { points: '23 4 23 10 17 10' } },
            { tag: 'polyline', attr: { points: '1 20 1 14 7 14' } },
            {
                tag: 'path',
                attr: { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' },
            },
        ],
    })(e);
}
const { ipcRenderer: Yf } = require('electron'),
    j2 = ({ availablePorts: e, setAvailablePorts: t, setSelectedPort: n, isMeasuring: i }) => {
        const r = () => {
            Yf.send('portRequest', 'client portRequest');
        };
        return (
            Yf.on('portResponse', (s, o) => {
                t(o);
            }),
            U('div', {
                className: 'inline-flex w-1/2 justify-center',
                children: [
                    b('form', {
                        onSubmit: (s) => {
                            s.preventDefault(), r();
                        },
                        className: 'flex items-center mr-2',
                        children: U('button', {
                            type: 'submit',
                            className: 'button inline-flex items-center justify-center',
                            children: [
                                b('span', { className: 'pr-1', children: 'Refresh ports' }),
                                b(Qp, { className: 'w-4 h-4' }),
                            ],
                        }),
                    }),
                    b('form', {
                        className: 'flex items-center ',
                        children: U('select', {
                            id: 'ports',
                            disabled: i,
                            onChange: (s) => {
                                s.target.value.includes(' ') ? n('') : n(s.target.value);
                            },
                            className:
                                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-60 h-10',
                            children: [
                                b('option', { children: 'Select Arduino port' }, 'unavailable'),
                                e
                                    ? e.map((s) =>
                                          s.manufacturer
                                              ? U(
                                                    'option',
                                                    {
                                                        value: s.path,
                                                        children: [' ', s.manufacturer, ' '],
                                                    },
                                                    s.path
                                                )
                                              : b(
                                                    'option',
                                                    {
                                                        disabled: !0,
                                                        children: 'unknwon manufacturer',
                                                    },
                                                    s.path
                                                )
                                      )
                                    : b('option', { disabled: !0, children: 'No available ports' }),
                            ],
                        }),
                    }),
                ],
            })
        );
    };
function V2(e) {
    return fn({
        tag: 'svg',
        attr: { viewBox: '0 0 640 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z',
                },
            },
        ],
    })(e);
}
function W2(e) {
    return fn({
        tag: 'svg',
        attr: { viewBox: '0 0 640 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z',
                },
            },
        ],
    })(e);
}
const { ipcRenderer: Di } = require('electron'),
    $2 = ({
        setAngle: e,
        setNewDistance: t,
        databaseStatus: n,
        saveToDatabase: i,
        isMeasuring: r,
        setIsMeasuring: s,
        selectedPort: o,
        setChartData: l,
        setAngleAnimation: a,
        setTableData: u,
        tableData: c,
        readyToMeasureAgain: f,
        setReadyToMeasureAgain: d,
    }) => {
        const [h, m] = F.exports.useState([]),
            [y, x] = F.exports.useState([]);
        let p;
        setInterval(() => {
            const w = navigator.getGamepads();
            w[0] && (p = w[0].axes[1]);
        }, 16);
        const g = (w) => {
            s(!0);
            let k = 0;
            console.log(w),
                setInterval(() => {
                    k < 100 &&
                        (w ? Di.send('startComRequestAnalog', 0) : Di.send('startComRequest', p)),
                        k++;
                }, 80);
        };
        Di.removeAllListeners('receivedData'),
            Di.on('receivedData', (w, k) => {
                let S = k.split(',')[0],
                    C = k.split(',')[1];
                if ((h.push(S), y.push(C), h.length == 100)) {
                    console.log('end of comm triggered'), d(!1);
                    let L = { distance: h, angle: y };
                    n == 0 && i && Di.send('saveToDatabase', L), s(!1);
                }
                e(C), t(S);
            });
        const v = () => {
            l([]), a(0), t(-1), u(null), (h.length = 0), (y.length = 0), d(!0);
        };
        let _ = n != 1 && o && !r && !c && f;
        return U('div', {
            className: 'inline-flex w-1/2 justify-center',
            children: [
                b('form', {
                    onSubmit: (w) => {
                        w.preventDefault(), g(!1);
                    },
                    className: 'flex items-center ',
                    children: U('button', {
                        type: 'submit',
                        disabled: !_,
                        className: _
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2',
                        children: [
                            b('span', { className: 'pr-1', children: 'Start gamepad' }),
                            b(W2, { className: 'w-6 h-6' }),
                        ],
                    }),
                }),
                b('form', {
                    onSubmit: (w) => {
                        w.preventDefault(), g(!0);
                    },
                    className: 'flex items-center',
                    children: U('button', {
                        type: 'submit',
                        disabled: !_,
                        className: _
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2',
                        children: [
                            b('span', { className: 'pr-1', children: 'Start analog' }),
                            b(b0, { className: 'w-5 h-5' }),
                        ],
                    }),
                }),
                b('button', {
                    onClick: v,
                    disabled: r,
                    className: r
                        ? 'button-disabled inline-flex items-center justify-center'
                        : 'button inline-flex items-center justify-center',
                    children: 'Clear',
                }),
            ],
        });
    };
function U2(e) {
    return fn({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6z',
                },
            },
        ],
    })(e);
}
function Y2(e) {
    return fn({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
                },
            },
            {
                tag: 'path',
                attr: {
                    d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                },
            },
        ],
    })(e);
}
function Q2(e) {
    return fn({
        tag: 'svg',
        attr: { role: 'img', viewBox: '0 0 24 24' },
        child: [
            { tag: 'title', attr: {}, child: [] },
            {
                tag: 'path',
                attr: {
                    d: 'M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z',
                },
            },
        ],
    })(e);
}
const { ipcRenderer: cs } = require('electron'),
    K2 = ({
        tableData: e,
        setTableData: t,
        setAngle: n,
        setNewDistance: i,
        databaseStatus: r,
        setDatabaseStatus: s,
        saveToDatabase: o,
        setSaveToDatabase: l,
    }) => {
        const a = () => {
                console.log('requesting database data'), cs.send('requestDatabaseData', null);
            },
            u = () => {
                s(1), cs.send('checkDatabaseConnection', null);
            };
        cs.on('databaseData', (d, h) => {
            t(h);
        }),
            cs.on('isConnected', (d, h) => {
                s(h ? 0 : 2);
            });
        const c = (d) => {
            e.forEach((h) => {
                if (h.id == d) {
                    let m = 0;
                    setInterval(() => {
                        m < h.angle.length && (n(h.angle[m]), i(h.distance[m])), m++;
                    }, h.sampling_rate);
                }
            });
        };
        return U('div', {
            children: [
                b('input', {
                    type: 'checkbox',
                    checked: o,
                    onChange: () => {
                        l(!o);
                    },
                    disabled: r != 0,
                }),
                b('span', { className: 'mr-2', children: 'Save to DB' }),
                U('button', {
                    onClick: a,
                    disabled: r != 0,
                    className:
                        r != 0
                            ? 'button-disabled inline-flex items-center justify-center mr-2'
                            : 'button inline-flex items-center justify-center mr-2',
                    children: [
                        b('span', { className: 'pr-1', children: 'get data' }),
                        b(V2, { className: 'w-5 h-5' }),
                    ],
                }),
                U('button', {
                    onClick: u,
                    className: 'button inline-flex items-center justify-center',
                    children: [
                        b('span', { children: 'check connection' }),
                        r == 1
                            ? b(Qp, { className: 'w-4 h-4 animate-spin' })
                            : b(Q2, { className: (r = 'w-4 h-4 text-red-700') }),
                    ],
                }),
                b('div', {
                    className: 'h-24 overflow-y-auto mt-2',
                    children: U('table', {
                        className: 'table-custom table-custom-text table-fixed',
                        children: [
                            b('thead', {
                                className: 'sticky top-0 bg-black text-white',
                                children: U('tr', {
                                    children: [
                                        b('th', {
                                            className: 'table-custom table-fixed w-44',
                                            children: 'ID',
                                        }),
                                        b('th', {
                                            className: 'table-custom table-fixed w-24',
                                            children: 'Sampling Rate',
                                        }),
                                        b('th', {
                                            className: 'table-custom table-fixed w-28',
                                            children: 'User',
                                        }),
                                        b('th', { className: 'table-custom', children: 'Replay' }),
                                    ],
                                }),
                            }),
                            b('tbody', {
                                children: e
                                    ? e.map((d) =>
                                          U(
                                              'tr',
                                              {
                                                  children: [
                                                      b('td', {
                                                          className: 'table-custom text-center',
                                                          children: d.id,
                                                      }),
                                                      b('td', {
                                                          className: 'table-custom text-end pr-2',
                                                          children: d.sampling_rate,
                                                      }),
                                                      b('td', {
                                                          className: 'table-custom text-center',
                                                          children: d.user,
                                                      }),
                                                      b('td', {
                                                          className: 'table-custom text-center',
                                                          children: b('button', {
                                                              onClick: () => {
                                                                  c(d.id);
                                                              },
                                                              children: b(U2, {
                                                                  className:
                                                                      'w-6 h-6 text-blue-900 hover:text-red-900',
                                                              }),
                                                          }),
                                                      }),
                                                  ],
                                              },
                                              d.id
                                          )
                                      )
                                    : b(w0, {}),
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    X2 = ({ setIsModalOpen: e }) =>
        b('div', {
            className:
                'fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10 backdrop-blur-sm',
            children: U('div', {
                className: 'max-w-2xl bg-white rounded-md p-4 ',
                children: [
                    b(Y2, {
                        className: 'h-8 w-8 hover:text-blue-300',
                        onClick: () => {
                            e(!1);
                        },
                    }),
                    b('p', { children: 'T\xE1to aplik\xE1cia vznikla ako bakal\xE1rsky projekt' }),
                ],
            }),
        }),
    { ipcRenderer: ul } = require('electron');
function Z2() {
    const [e, t] = F.exports.useState(''),
        [n, i] = F.exports.useState(''),
        [r, s] = F.exports.useState([]),
        [o, l] = F.exports.useState(0),
        [a, u] = F.exports.useState(''),
        [c, f] = F.exports.useState(null),
        [d, h] = F.exports.useState(1),
        [m, y] = F.exports.useState(!1),
        [x, p] = F.exports.useState(!1),
        [g, v] = F.exports.useState(!0),
        [_, w] = F.exports.useState(!1);
    return (
        F.exports.useEffect(() => {
            ul.send('portRequest', 'client portRequest'), ul.send('checkDatabaseConnection', null);
        }, []),
        F.exports.useEffect(() => {}, [e]),
        F.exports.useEffect(() => {
            n && ul.send('portSelected', n);
        }, [n]),
        F.exports.useEffect(() => {}, [o]),
        F.exports.useEffect(() => {
            a != -1 && s((k) => [...k, a]), u(-1);
        }, [a]),
        F.exports.useEffect(() => {}, [d]),
        U('div', {
            className: 'main-window bg-slate-300',
            children: [
                b(M0, { setIsModalOpen: w }),
                _ && b(X2, { setIsModalOpen: w }),
                U('div', {
                    className: 'grid grid-cols-3',
                    children: [
                        U('div', {
                            className: 'col-start-1 col-end-3',
                            children: [
                                U('div', {
                                    className: 'flex p-2 ',
                                    children: [
                                        b(j2, {
                                            availablePorts: e,
                                            setAvailablePorts: t,
                                            setSelectedPort: i,
                                            isMeasuring: x,
                                        }),
                                        b($2, {
                                            setAngle: l,
                                            setNewDistance: u,
                                            databaseStatus: d,
                                            saveToDatabase: m,
                                            isMeasuring: x,
                                            setIsMeasuring: p,
                                            selectedPort: n,
                                            setChartData: s,
                                            setAngleAnimation: l,
                                            setTableData: f,
                                            tableData: c,
                                            readyToMeasureAgain: g,
                                            setReadyToMeasureAgain: v,
                                        }),
                                    ],
                                }),
                                U('div', {
                                    className: ' p-2',
                                    children: [b(B2, { chartData: r }), b(P0, { angle: o })],
                                }),
                            ],
                        }),
                        b('div', {
                            className: ' p-2',
                            children: b(K2, {
                                tableData: c,
                                setTableData: f,
                                setAngle: l,
                                setNewDistance: u,
                                databaseStatus: d,
                                setDatabaseStatus: h,
                                saveToDatabase: m,
                                setSaveToDatabase: y,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
fl.createRoot(document.getElementById('root')).render(b(Z2, {}));
